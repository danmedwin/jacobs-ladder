"""Bring a portrait to life: an eight-second loop made with Google's Veo video model, the model family behind the
Jacob's Dream loops. Each clip starts and ends on the portrait itself, so it loops without a jump.
Needs a Gemini API key in the environment as GEMINI_API_KEY, and: pip install google-genai pillow imageio-ffmpeg
Run from the repository root:
  python3 voices/tools/animate.py jacob                     # one character, with Veo 3.1 Fast
  python3 voices/tools/animate.py jacob --model lite        # the same, with Veo 3.1 Lite (cheaper; see below)
  python3 voices/tools/animate.py jacob --model lite,fast   # both, to compare
  python3 voices/tools/animate.py --use jacob fast          # choose which version the page plays
  python3 voices/tools/animate.py --off jacob               # back to the still portrait
Writes voices/portraits/loops/<id>-<model>.mp4 and .webm (720 x 720, no sound; each browser plays the one it can) and
voices/data/loops.js, which tells the page which loop to play. Veo makes only wide or tall video, so the square portrait is padded with its own background
color and the square is cropped back out. Raw clips and the prompts behind them go to portraits-source/loops/,
which is not committed. An eight-second clip costs about $0.80 with Fast and $0.40 with Lite (September 2026). In the
first test, Lite put a halo over Jacob's head despite the prompt, so Fast is the default. Watch every clip before
using it: look for halos, text, and faces that smear or turn."""
import hashlib, io, json, os, re, subprocess, sys, time

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
PORTRAITS = os.path.join(REPO, "voices", "portraits")
OUT = os.path.join(PORTRAITS, "loops")
JS = os.path.join(REPO, "voices", "data", "loops.js")
SOURCE = os.path.join(REPO, "portraits-source", "loops")
MODELS = {"lite": "veo-3.1-lite-generate-preview", "fast": "veo-3.1-fast-generate-preview"}
NEGATIVE_OK = {"fast"}  # Lite turns away a negative prompt; the main prompt already says what to avoid
SIDE = 720

# What moves, for each character. Small and slow: the portrait should feel alive, not perform.
MOTION = {
    "jacob": "Jacob breathes slowly, blinks once, and lifts his eyes a little higher, as if he has just noticed "
             "something wonderful above him. His hands stay on the stone against his chest.",
    "esau": "Esau breathes, blinks, and his frown softens a little as his eyes move to one side. The bow on his "
            "shoulder stays still.",
    "rebekah": "Rebekah breathes slowly and blinks, and her eyes drift to the side as if she is watching someone walk "
               "away. The edge of her scarf stirs.",
    "isaac": "Isaac breathes slowly. His eyes stay closed the whole time. His raised hands tremble very slightly, "
             "and his long white beard stirs.",
    "angel": "The flame at the center flickers and sways. The golden wings open a little and close again, slowly.",
    "stone": "Light glints and moves slowly across the gold on the stone. The stone itself does not move.",
    "rashi": "Rashi breathes and blinks, and turns the quill slightly as he thinks. The vine leaves stir.",
    "sages": "The three sages breathe and lean a little closer together. The one in the middle lifts his hand "
             "slightly, and the one on the right smiles a little more.",
    "ramban": "Ramban breathes slowly and blinks. His hand shifts a little on the closed book.",
    "rambam": "Rambam breathes and blinks. The brass astrolabe turns slightly on its ring and catches the light.",
}
SHARED = ("A living portrait with gentle, slow, subtle motion only. {motion} The small gold stars in the background "
          "twinkle softly. The camera does not move: no zoom, no pan, no tilt. Keep the exact look of the painting, "
          "a flat medieval Hebrew manuscript miniature with flat colors, fine black ink outlines, and gold leaf; it "
          "does not become 3D or a photograph. No one speaks, and every mouth stays closed. No new people or objects, "
          "no text, no halo, no glow. The last frame is exactly the same as the first frame.")
NEGATIVE = ("talking, open mouth, lip movement, camera movement, zoom, pan, 3D render, photorealistic, halo, glowing "
            "aura, text, letters, watermark, new people")


def ffmpeg():
    import imageio_ffmpeg
    return imageio_ffmpeg.get_ffmpeg_exe()


def padded(path):
    """The square portrait in the middle of a 16:9 frame, the sides filled with the colors along its own edges."""
    from PIL import Image
    img = Image.open(path).convert("RGB")
    w, h = img.size
    W = round(h * 16 / 9)
    x0 = (W - w) // 2
    canvas = Image.new("RGB", (W, h))
    for box, at, width in (((0, 0, 8, h), 0, x0), ((w - 8, 0, w, h), x0 + w, W - w - x0)):
        strip = img.crop(box).resize((1, h), Image.LANCZOS)  # the average color of each row along that edge
        canvas.paste(strip.resize((width, h)), (at, 0))
    canvas.paste(img, (x0, 0))
    buf = io.BytesIO()
    canvas.save(buf, format="PNG")
    return buf.getvalue()


def closest_return(clip):
    """Veo doesn't always end exactly on the first frame. Find the frame in the second half of the clip that comes
    closest to the first one: the loop ends just before it."""
    from PIL import Image, ImageChops, ImageStat
    info = subprocess.run([ffmpeg(), "-i", clip], capture_output=True, text=True).stderr
    fps = float(re.search(r"([\d.]+) fps", info).group(1))
    raw = subprocess.run([ffmpeg(), "-v", "error", "-i", clip, "-vf", "crop=ih:ih:(iw-ih)/2:0,scale=96:96,format=gray",
                          "-f", "rawvideo", "-"], capture_output=True, check=True).stdout
    size = 96 * 96
    frames = [Image.frombytes("L", (96, 96), raw[i:i + size]) for i in range(0, len(raw) - size + 1, size)]
    gap = lambda f: ImageStat.Stat(ImageChops.difference(f, frames[0])).mean[0]
    return min(range(len(frames) // 2, len(frames)), key=lambda i: gap(frames[i])), fps


def square(raw, out, blend=6):
    """Crop the square back out of the wide clip, end the loop where it comes back to the start, blend the last few
    frames into the first few so the loop point doesn't show, drop the sound, and compress it for the web."""
    cut, fps = closest_return(raw)
    graph = ("[0:v]crop=ih:ih:(iw-ih)/2:0,scale={s}:{s}:flags=lanczos,setsar=1,split[a][b];"
             "[a]trim=start_frame={k}:end_frame={cut},setpts=PTS-STARTPTS,fps={fps}[main];"
             "[b]trim=end_frame={k},setpts=PTS-STARTPTS,fps={fps}[start];"
             "[main][start]xfade=transition=fade:duration={d:.4f}:offset={o:.4f},format=yuv420p"
             ).format(s=SIDE, k=blend, cut=cut, fps=fps, d=blend / fps, o=(cut - 2 * blend) / fps)
    subprocess.run([ffmpeg(), "-v", "error", "-y", "-i", raw, "-filter_complex", graph, "-an", "-c:v", "libx264",
                    "-preset", "slow", "-crf", "24", "-movflags", "+faststart", out], check=True)
    webm(out)


def webm(mp4):
    """A WebM copy, for the few browsers that can't play MP4."""
    subprocess.run([ffmpeg(), "-v", "error", "-y", "-i", mp4, "-an", "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "34",
                    "-row-mt", "1", mp4[:-4] + ".webm"], check=True)


def seam(clip):
    """How far the last frame drifts from the first: 0 is a perfect loop; under about 2 is hard to see."""
    from PIL import Image, ImageChops, ImageStat
    frames = []
    for args in (["-i", clip], ["-sseof", "-0.05", "-i", clip]):
        png = subprocess.run([ffmpeg(), "-v", "error", *args, "-frames:v", "1", "-f", "image2pipe", "-vcodec", "png", "-"],
                             check=True, capture_output=True).stdout
        frames.append(Image.open(io.BytesIO(png)).convert("L"))
    return sum(ImageStat.Stat(ImageChops.difference(*frames)).mean)


def read_js():
    if not os.path.exists(JS):
        return {}
    m = re.search(r"VOICES\.loops = (\{.*?\});", open(JS, encoding="utf-8").read(), re.S)
    return json.loads(m.group(1)) if m else {}


def write_js(loops):
    with open(JS, "w", encoding="utf-8") as f:
        f.write("/* Which characters have a moving portrait, and which clip plays. Written by voices/tools/animate.py; "
                "don't edit by hand. */\n")
        f.write("window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };\n")
        f.write("VOICES.loops = " + json.dumps(loops, indent=1, sort_keys=True) + ";\n")


def use(cid, model):
    path = os.path.join(OUT, "%s-%s.mp4" % (cid, model))
    if not os.path.exists(path):
        sys.exit("No %s clip for %s yet." % (model, cid))
    if not os.path.exists(path[:-4] + ".webm"):
        webm(path)
    loops = read_js()
    loops[cid] = {}
    for ext in ("mp4", "webm"):
        clip = path[:-3] + ext
        tag = hashlib.sha1(open(clip, "rb").read()).hexdigest()[:8]
        loops[cid][ext] = "portraits/loops/%s?v=%s" % (os.path.basename(clip), tag)
    write_js(loops)
    print("%s now plays %s" % (cid, os.path.relpath(path, REPO)))


def make(client, cid, model):
    from google.genai import types
    still = os.path.join(PORTRAITS, cid + ".jpg")
    if not os.path.exists(still):
        sys.exit("No portrait for %s yet (voices/portraits/%s.jpg)." % (cid, cid))
    frame = types.Image(image_bytes=padded(still), mime_type="image/png")
    prompt = SHARED.format(motion=MOTION[cid])
    print("%s, %s: asking %s…" % (cid, model, MODELS[model]), flush=True)
    op = client.models.generate_videos(
        model=MODELS[model],
        source=types.GenerateVideosSource(prompt=prompt, image=frame),
        config=types.GenerateVideosConfig(aspect_ratio="16:9", resolution="720p", duration_seconds=8, last_frame=frame,
                                          negative_prompt=NEGATIVE if model in NEGATIVE_OK else None,
                                          number_of_videos=1))
    started = time.time()
    while not op.done:
        time.sleep(10)
        op = client.operations.get(op)
        print("  still working (%d s)" % (time.time() - started), flush=True)
    if op.error:
        sys.exit("  Veo returned an error: %s" % op.error)
    videos = (op.result and op.result.generated_videos) or []
    if not videos:
        why = getattr(op.result, "rai_media_filtered_reasons", None) if op.result else None
        sys.exit("  No video came back%s." % ((": " + "; ".join(why)) if why else ""))
    data = client.files.download(file=videos[0].video) or videos[0].video.video_bytes
    os.makedirs(SOURCE, exist_ok=True)
    stamp = time.strftime("%Y%m%d-%H%M%S")
    raw = os.path.join(SOURCE, "%s-%s-%s.mp4" % (cid, model, stamp))
    open(raw, "wb").write(data)
    json.dump({"model": MODELS[model], "prompt": prompt, "negative_prompt": NEGATIVE if model in NEGATIVE_OK else None},
              open(raw[:-4] + ".json", "w"), indent=1)
    os.makedirs(OUT, exist_ok=True)
    out = os.path.join(OUT, "%s-%s.mp4" % (cid, model))
    square(raw, out)
    print("  wrote %s (%d KB); seam %.1f; took %d s" % (os.path.relpath(out, REPO), os.path.getsize(out) // 1024,
                                                      seam(out), time.time() - started))
    return out


def main(args):
    if args[:1] == ["--use"] and len(args) == 3:
        return use(args[1], args[2])
    if args[:1] == ["--off"] and len(args) == 2:
        loops = read_js()
        loops.pop(args[1], None)
        write_js(loops)
        return print("%s is a still portrait again" % args[1])
    models = ["fast"]
    if "--model" in args:
        i = args.index("--model")
        models = args[i + 1].split(",")
        del args[i:i + 2]
    bad = [m for m in models if m not in MODELS] + [c for c in args if c not in MOTION]
    if bad or not args:
        sys.exit(__doc__ if not bad else "Unknown: " + ", ".join(bad))
    if not os.environ.get("GEMINI_API_KEY"):
        sys.exit("Set GEMINI_API_KEY first.")
    from google import genai
    client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
    for cid in args:
        for model in models:
            make(client, cid, model)
        if cid not in read_js():
            use(cid, models[-1])


if __name__ == "__main__":
    main(sys.argv[1:])
