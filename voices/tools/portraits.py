"""Make the character portraits from voices/PORTRAITS.md with Google's Gemini image model, the model behind the
Jacob's Dream gallery. Needs a Gemini API key in the environment as GEMINI_API_KEY, and: pip install google-genai pillow

Run from the repository root:
  python3 voices/tools/portraits.py jacob          # one character, to check the style first
  python3 voices/tools/portraits.py                # every character that doesn't have a portrait yet
  python3 voices/tools/portraits.py --redo esau    # replace one
  python3 voices/tools/portraits.py --sheet        # just rebuild the preview sheet and portraits.js

Writes voices/portraits/<id>.jpg (1200 x 1200) and voices/data/portraits.js, which tells the page which portraits
exist. Full-size originals and a preview sheet, with every picture cropped to the medallion's circle, go to
portraits-source/, which is not committed. GEMINI_IMAGE_MODEL overrides the model."""
import hashlib, io, json, os, re, sys, time

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
PLAN = os.path.join(REPO, "voices", "PORTRAITS.md")
OUT = os.path.join(REPO, "voices", "portraits")
JS = os.path.join(REPO, "voices", "data", "portraits.js")
SOURCE = os.path.join(REPO, "portraits-source")
SIZE = 1200


def prompts():
    """The shared prompt, then each character's own lines, as PORTRAITS.md gives them."""
    text = open(PLAN, encoding="utf-8").read()
    shared = re.search(r"## The shared part of every prompt\n(?:.*\n)*?((?:> .*\n)+)", text).group(1)
    shared = " ".join(line[2:].strip() for line in shared.splitlines())
    out = {}
    for m in re.finditer(r"\*\*(.+?)\*\* \(`([a-z]+)\.jpg`\)\. Background: (.+?)\n((?:> .*\n)+)", text):
        name, cid, background, lines = m.groups()
        own = " ".join(line[2:].strip() for line in lines.splitlines())
        out[cid] = {"name": name, "prompt": f"{shared}\n\nBackground color: {background}\n\n{own}"}
    return out


def pick_model(client):
    if os.environ.get("GEMINI_IMAGE_MODEL"):
        return os.environ["GEMINI_IMAGE_MODEL"]
    names = [m.name.split("/")[-1] for m in client.models.list()]
    image = [n for n in names if n.startswith("gemini-3-pro-image")]
    image.sort(key=lambda n: ("preview" in n, n))   # prefer the released model over a preview
    if not image:
        sys.exit("No gemini-3-pro-image model is available to this key. Set GEMINI_IMAGE_MODEL to the model to use.")
    return image[0]


def generate(client, model, prompt):
    from google.genai import types
    response = client.models.generate_content(
        model=model,
        contents=prompt,
        config=types.GenerateContentConfig(
            response_modalities=["TEXT", "IMAGE"],
            image_config=types.ImageConfig(aspect_ratio="1:1", image_size="2K"),
        ),
    )
    for candidate in response.candidates or []:
        for part in (candidate.content.parts if candidate.content else []) or []:
            if part.inline_data and part.inline_data.data:
                return part.inline_data.data, None
    reason = ", ".join(str(c.finish_reason) for c in response.candidates or []) or str(response.prompt_feedback)
    return None, reason


def save(cid, data):
    from PIL import Image
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(SOURCE, exist_ok=True)
    stamp = time.strftime("%Y%m%d-%H%M%S")
    img = Image.open(io.BytesIO(data))
    img.save(os.path.join(SOURCE, f"{cid}-{stamp}.png"))
    img = img.convert("RGB")
    side = min(img.size)
    left, top = (img.width - side) // 2, (img.height - side) // 2
    img = img.crop((left, top, left + side, top + side)).resize((SIZE, SIZE), Image.LANCZOS)
    img.save(os.path.join(OUT, f"{cid}.jpg"), quality=88, optimize=True, progressive=True)


def write_js():
    """Tell the page which portraits exist, with a version so browsers fetch a replaced picture."""
    found = {}
    if os.path.isdir(OUT):
        for f in sorted(os.listdir(OUT)):
            if f.endswith(".jpg"):
                digest = hashlib.sha1(open(os.path.join(OUT, f), "rb").read()).hexdigest()[:8]
                found[f[:-4]] = f"portraits/{f}?v={digest}"
    body = json.dumps(found, indent=1)
    open(JS, "w", encoding="utf-8").write(
        "/* Which characters have a portrait. Written by voices/tools/portraits.py; don't edit by hand. */\n"
        "window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };\n"
        f"VOICES.portraits = {body};\n")
    return found


def sheet(found, plan):
    """Every portrait cropped to the medallion's circle, with its name, for checking the set side by side."""
    from PIL import Image, ImageDraw
    if not found:
        return None
    cell, pad = 300, 36
    cols = min(5, len(found))
    rows = (len(found) + cols - 1) // cols
    board = Image.new("RGB", (cols * (cell + pad) + pad, rows * (cell + pad + 30) + pad), (14, 13, 22))
    draw = ImageDraw.Draw(board)
    mask = Image.new("L", (cell, cell), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, cell - 1, cell - 1), fill=255)
    for i, cid in enumerate(found):
        pic = Image.open(os.path.join(OUT, cid + ".jpg")).convert("RGB").resize((cell, cell), Image.LANCZOS)
        x, y = pad + (i % cols) * (cell + pad), pad + (i // cols) * (cell + pad + 30)
        board.paste(pic, (x, y), mask)
        draw.ellipse((x - 4, y - 4, x + cell + 3, y + cell + 3), outline=(226, 181, 99), width=3)
        draw.text((x + cell // 2, y + cell + 16), plan.get(cid, {}).get("name", cid), fill=(237, 229, 211), anchor="mm")
    os.makedirs(SOURCE, exist_ok=True)
    path = os.path.join(SOURCE, "preview.jpg")
    board.save(path, quality=90)
    return path


def main(args):
    plan = prompts()
    redo = "--redo" in args
    only_sheet = "--sheet" in args
    ids = [a for a in args if not a.startswith("--")]
    unknown = [a for a in ids if a not in plan]
    if unknown:
        sys.exit(f"Unknown character: {', '.join(unknown)}. Choose from: {', '.join(plan)}")
    if not only_sheet:
        todo = ids or [cid for cid in plan if redo or not os.path.exists(os.path.join(OUT, cid + ".jpg"))]
        if not os.environ.get("GEMINI_API_KEY"):
            sys.exit("Set GEMINI_API_KEY first.")
        from google import genai
        client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
        model = pick_model(client)
        print(f"model: {model}")
        for cid in todo:
            print(f"{cid}: generating…", flush=True)
            data, why = generate(client, model, plan[cid]["prompt"])
            if data:
                save(cid, data)
                print(f"{cid}: saved voices/portraits/{cid}.jpg")
            else:
                print(f"{cid}: no picture came back ({why})")
    found = write_js()
    path = sheet(found, plan)
    print(f"portraits.js lists {len(found)}: {', '.join(found) or 'none yet'}")
    if path:
        print(f"preview sheet: {os.path.relpath(path, REPO)}")


if __name__ == "__main__":
    main(sys.argv[1:])
