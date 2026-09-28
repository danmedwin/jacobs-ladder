"""Build voices/data/sources.js. Run: python3 voices/tools/build_sources.py
Translation cards come from the slide's SRC object in index.html; verse and commentary cards come from
tools/texts.json (Sefaria texts, checked against tools/verification.md). References are collected from the scripts.
To cite a new passage, add it to texts.json (and, for commentary, an entry in COMMENTARY), then rerun."""
import json, re, os, sys, glob

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
TEXTS = os.path.join(REPO, "voices", "tools", "texts.json")   # verified Sefaria texts, keyed by reference

# 1. Every src reference used by the scripts
refs = []
for f in sorted(glob.glob(os.path.join(REPO, "voices", "data", "*.js"))):
    if f.endswith(("characters.js", "sources.js")):
        continue
    s = open(f, encoding="utf-8").read()
    for m in re.finditer(r"src:\s*(\[[^\]]*\]|'[^']*')", s):
        for r in re.findall(r"'([^']*)'", m.group(1)):
            if r not in refs:
                refs.append(r)

# 2. Translation cards reused from the slide (index.html SRC)
slide = open(os.path.join(REPO, "index.html"), encoding="utf-8").read()
SRC = json.loads(re.search(r"var SRC = (\{.*?\});\n", slide, re.S).group(1))
labels = {"rjps": "Revised JPS", "kjv": "King James Version", "alter": "Robert Alter"}
cards = {}
for key, label in labels.items():
    c = SRC[key]
    cards[key] = {
        "label": label, "title": c["name"], "kind": c["kind"],
        "body": [{"h": "Who", "t": c["who"]}, {"h": "When", "t": c["when"]},
                 {"h": "Approach", "t": c["approach"]}, {"h": "Worldview", "t": c["view"]},
                 {"h": "In this passage", "t": c["here"]}],
    }
cards["kushner"] = {
    "label": "Kushner", "title": "Lawrence Kushner, God Was in This Place & I, i Did Not Know", "kind": "Book · 1991",
    "body": [{"h": "Who", "t": "Rabbi Lawrence Kushner, a Reform rabbi, teacher, and author of many books on Jewish spirituality and mysticism."},
             {"h": "What", "t": "A book built around Genesis 28:16, reading Jacob’s words through a series of Jewish teachers, with special attention to the extra <i>anochi</i>, “I.”"},
             {"h": "Citation", "t": "Lawrence Kushner, <i>God Was in This Place &amp; I, i Did Not Know: Finding Self, Spirituality, and Ultimate Meaning</i> (Woodstock, VT: Jewish Lights, 1991)."}],
}


import html as _html
def norm_he(t):
    t = _html.unescape(t or "")
    t = re.sub(r"<[^>]+>", "", t)
    t = re.sub(r"\{[^}]*\}", "", t)                  # paragraph markers {פ} {ס}
    t = re.sub(r"\([^)]*\)\s*\[([^\]]*)\]", r"\1", t)  # ketiv (..) [qere] -> qere
    t = re.sub(r"[\u0591-\u05AF\u05BD\u05C0]", "", t)   # cantillation, meteg, paseq
    return re.sub(r"\s+", " ", t).strip()
def norm_en(t):
    t = t or ""
    t = re.sub(r"<sup[^>]*>.*?</sup>", "", t, flags=re.S)
    t = re.sub(r'<i class="footnote">.*?</i>', "", t, flags=re.S)
    t = re.sub(r'<span class="poetry[^"]*">(.*?)</span>', r"<br>\1", t, flags=re.S)
    t = re.sub(r"^(\s*<br>)+", "", t)
    t = re.sub(r"(<br>\s*){2,}", "<br>", t)
    t = re.sub(r"<(?!/?(i|b|small|br)\b)[^>]+>", "", t)
    t = re.sub(r"(<br>\s*)+$", "", t.strip())
    t = re.sub(r"([A-Z])<small>([A-Z]+)</small>", lambda m: m.group(1) + m.group(2), t)
    t = re.sub(r"\b(GOD|ETERNAL|LORD)\b", lambda m: '<span class="sc">' + m.group(1).capitalize() + '</span>', t)
    t = t.replace("<small>", "").replace("</small>", "")
    return re.sub(r"[ \t\n]+", " ", t).strip()


def cut_he(text, marker):
    """Cut Hebrew after the last letter of marker, comparing consonants only (vowel marks ignored)."""
    bare = lambda t: [(i, ch) for i, ch in enumerate(t) if not ("\u0591" <= ch <= "\u05C7")]
    hay, need = bare(text), "".join(ch for _, ch in bare(marker))
    joined = "".join(ch for _, ch in hay)
    k = joined.index(need) + len(need) - 1
    end = hay[k][0] + 1
    while end < len(text) and "\u0591" <= text[end] <= "\u05C7":
        end += 1
    return text[:end]

# 3. Verse and commentary cards from the packet
packet = {}
packet.update(json.load(open(TEXTS, encoding="utf-8")))

def verse_range(ref):
    m = re.match(r"Genesis (\d+):(\d+)(?:[–-](\d+))?$", ref)
    if not m:
        return None
    ch, a, b = int(m.group(1)), int(m.group(2)), int(m.group(3) or m.group(2))
    return [f"Genesis {ch}:{v}" for v in range(a, b + 1)]

credits = {
    "tanakh": "English: <i>The JPS Tanakh: Gender-Sensitive Edition</i> (Revised JPS, 2023), CC BY-NC. Hebrew: <i>Miqra according to the Masorah</i>, CC BY-SA. Both via Sefaria.",
}
COMMENTARY = {
    "Rashi on Genesis 35:8": {
        "label": "Rashi on Genesis 35:8", "kind": "Commentary · 11th century", "n": "Under the oak",
        "add": " <i>[The Hebrew continues with a line this translation leaves out:]</i> Because the day of her death was kept quiet, so that people would not curse the womb that bore Esau, the Torah did not make it known either.",
        "credit": "English: <i>Pentateuch with Rashi’s Commentary</i>, translated by M. Rosenbaum and A. M. Silbermann (1929–1934), public domain; the last sentence is our translation. Hebrew: the same edition. Both via Sefaria."},
    "Bereshit Rabbah 68:9": {
        "label": "B’reishit Rabbah 68:9", "kind": "Midrash · about the 5th century CE", "n": "On “he came upon the place”",
        "he_until": "הוי הקדוש ברוך הוא מקומו של עולם ואין עולמו מקומו.",
        "en_until": "the Holy One blessed be He is the place of the world, and His world is not His place.",
        "add": " <i>[The midrash continues with more readings, including that vayifga means Jacob prayed.]</i>",
        "credit": "English: <i>The Sefaria Midrash Rabbah</i> (2022), CC BY. Hebrew: Midrash Rabbah, Torat Emet edition. Both via Sefaria."},
}
missing = []
for ref in refs:
    if ref in cards:
        continue
    vs = verse_range(ref)
    if vs:
        verses = []
        for v in vs:
            e = packet.get(v)
            if not e:
                missing.append(v)
                continue
            verses.append({"n": v.replace("Genesis ", ""), "he": norm_he(e.get("he", "")), "en": norm_en(e.get("en", ""))})
        if verses:
            cards[ref] = {"label": ref, "title": ref, "kind": "Torah", "verses": verses, "credit": "tanakh"}
        continue
    e = packet.get(ref)
    meta = COMMENTARY.get(ref)
    if e and meta:
        he, en = e.get("he", ""), e.get("en", "")
        if meta.get("he_until"): he = cut_he(he, meta["he_until"])
        if meta.get("en_until"): en = en[:en.index(meta["en_until"]) + len(meta["en_until"])]
        en = en.replace("\n", " ")
        cards[ref] = {"label": meta["label"], "title": meta["label"], "kind": meta["kind"],
                      "verses": [{"n": meta.get("n", ""), "he": norm_he(he), "en": norm_en(en) + meta.get("add", "")}],
                      "credit": meta["credit"]}
    else:
        missing.append(ref)

out = ["/* Source cards for Voices of the Ladder. Generated by voices/tools/build_sources.py from Sefaria texts; edit the generator or tools/texts.json, not this file. */",
       "window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };",
       "Object.assign(VOICES.credits, " + json.dumps(credits, ensure_ascii=False, indent=1) + ");",
       "Object.assign(VOICES.sources, " + json.dumps(cards, ensure_ascii=False, indent=1) + ");", ""]
open(os.path.join(REPO, "voices", "data", "sources.js"), "w", encoding="utf-8").write("\n".join(out))
print("refs used:", len(refs))
print("cards written:", len(cards))
print("missing:", missing)
