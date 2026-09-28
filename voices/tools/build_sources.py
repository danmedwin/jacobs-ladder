"""Build voices/data/sources.js. Run: python3 voices/tools/build_sources.py
Translation cards come from the slide's SRC object in index.html; verse and commentary cards come from
tools/texts.json (Sefaria texts, checked against tools/verification.md). References are collected from the scripts.
To cite a new passage, add it to texts.json (and, for anything but a Genesis verse or a Rashi comment, an entry in
COMMENTARY), then rerun."""
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
cards["bedtime"] = {
    "label": "Bedtime Sh’ma", "title": "The bedtime Sh’ma: the four angels", "kind": "Siddur · the prayer before sleep",
    "verses": [{"n": "", "he": "בְּשֵׁם ה׳ אֱלֹהֵי יִשְׂרָאֵל, מִימִינִי מִיכָאֵל, וּמִשְּׂמֹאלִי גַּבְרִיאֵל, וּמִלְּפָנַי אוּרִיאֵל, וּמֵאֲחוֹרַי רְפָאֵל, וְעַל רֹאשִׁי שְׁכִינַת אֵל.",
                "en": "In the name of the Eternal, the God of Israel: Michael at my right, Gabriel at my left, Uriel before me, Raphael behind me, and over my head, the Presence of God."}],
    "credit": "From the bedtime Sh’ma (<i>K’riat Sh’ma al HaMitah</i>), said in many Jewish homes at bedtime. Our translation.",
}


import html as _html

# The divine name is shown as ה׳ (Rabbi Medwin's choice for this tool), with any prefix kept: וַיהוָה -> וַה׳.
HE_MARKS = "\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7"   # vowels and accents only, not maqaf or sof pasuq
TETRA = re.compile(r"(?<![\u05D0-\u05EA" + HE_MARKS + r"])((?:[ובכלמשה][" + HE_MARKS + r"]*)?)"
                   r"י[" + HE_MARKS + r"]*ה[" + HE_MARKS + r"]*ו[" + HE_MARKS + r"]*ה[" + HE_MARKS + r"]*(?![\u05D0-\u05EA])")
def divine_name(t):
    return TETRA.sub(lambda m: m.group(1) + "ה\u05F3", t)

def norm_he(t):
    t = _html.unescape(t or "")
    t = re.sub(r"<[^>]+>", "", t)
    t = re.sub(r"\{[^}]*\}", "", t)                  # paragraph markers {פ} {ס}
    t = re.sub(r"\([^)]*\)\s*\[([^\]]*)\]", r"\1", t)  # ketiv (..) [qere] -> qere
    t = re.sub(r"[\u0591-\u05AF\u05BD\u05C0]", "", t)   # cantillation, meteg, paseq
    t = divine_name(t)
    t = re.sub(r"([\u05D0-\u05EA][\u05B0-\u05C7]*)\"([\u05D0-\u05EA])", "\\1\u05F4\\2", t)   # gershayim: הקב"ה -> הקב״ה
    t = re.sub(r"([\u05D0-\u05EA][\u05B0-\u05C7]*)'", "\\1\u05F3", t)                        # geresh: ה' -> ה׳
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


def slice_he(text, start=None, until=None):
    """Cut Hebrew from the start marker through the end of the until marker, comparing consonants only
    (vowel marks ignored). Either marker may be left out."""
    is_mark = lambda ch: "\u0591" <= ch <= "\u05C7"
    bare = [(i, ch) for i, ch in enumerate(text) if not is_mark(ch)]
    joined = "".join(ch for _, ch in bare)
    strip = lambda m: "".join(ch for ch in m if not is_mark(ch))
    k0 = joined.index(strip(start)) if start else 0
    a = bare[k0][0]
    b = len(text)
    if until:
        need = strip(until)
        k = joined.index(need, k0) + len(need) - 1
        b = bare[k][0] + 1
        while b < len(text) and is_mark(text[b]):
            b += 1
    return text[a:b]

def slice_en(text, start=None, until=None):
    a = text.index(start) if start else 0
    b = text.index(until, a) + len(until) if until else len(text)
    return text[a:b]

# Rashi's English (Rosenbaum and Silbermann) opens with his Hebrew heading and its translation in capitals:
# "ויפגע במקום AND HE LIGHTED UPON THE PLACE — Scripture ...". The card shows the heading once, as its label.
RASHI_HEAD = re.compile(r"^[\u0590-\u05FF\s\"'״׳.,()]+?\s*([A-Z][A-Z0-9\s,;’'\-]*?)\s+[—–]\s+(.*)$", re.S)
PROPER = {"god", "jacob", "esau", "laban", "israel", "isaac", "abraham", "haran", "deborah", "beersheba", "i"}
def heading_case(caps):
    words = caps.lower().split()
    return " ".join(w[:1].upper() + w[1:] if (i == 0 or w.strip(",;’'") in PROPER) else w for i, w in enumerate(words))
def rashi_en(en):
    m = RASHI_HEAD.match(en)
    return (heading_case(m.group(1)), m.group(2)) if m else ("", en)

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
    "rashi": "English: <i>Pentateuch with Rashi’s Commentary</i>, translated by M. Rosenbaum and A. M. Silbermann (1929–1934), public domain. Hebrew: the same edition. Both via Sefaria.",
    "midrash": "English: <i>The Sefaria Midrash Rabbah</i> (2022), CC BY. Hebrew: Midrash Rabbah, Torat Emet edition. Both via Sefaria.",
    "talmud": "The William Davidson Talmud (Koren Noé), English with the explanation of Rabbi Adin Even-Israel Steinsaltz, CC BY-NC, via Sefaria. In the English, bold type translates the Talmud’s own words; plain type is Rabbi Steinsaltz’s explanation.",
    "turim": "Hebrew: <i>Kitzur Ba’al HaTurim</i>, public domain, via Sefaria. Sefaria has no English for this comment; the translation is ours.",
}
MIDRASH = "Midrash · about the 5th century CE"
TALMUD = "Babylonian Talmud · about the 6th century CE"
TURIM = "Commentary · Rabbi Jacob ben Asher, 14th century"
RASHI = "Commentary · 11th century"
COMMENTARY = {
    "Rashi on Genesis 35:8": {
        "label": "Rashi on Genesis 35:8", "kind": RASHI, "n": "Under the oak",
        "credit": "English: <i>Pentateuch with Rashi’s Commentary</i>, translated by M. Rosenbaum and A. M. Silbermann (1929–1934), public domain. Hebrew: Sefaria’s merged text of Rashi on Genesis. Both via Sefaria."},
    "Bereshit Rabbah 68:9": {
        "label": "B’reishit Rabbah 68:9", "kind": MIDRASH, "n": "On “he came upon the place”",
        "he_until": "הוי הקדוש ברוך הוא מקומו של עולם ואין עולמו מקומו.",
        "en_until": "the Holy One blessed be He is the place of the world, and His world is not His place.",
        "add": " <i>[The midrash continues with more readings, including that vayifga means Jacob prayed.]</i>",
        "credit": "English: <i>The Sefaria Midrash Rabbah</i> (2022), CC BY. Hebrew: Midrash Rabbah, Torat Emet edition. Both via Sefaria."},
    "Bereshit Rabbah 68:12 (Bar Kappara)": {
        "from": "Bereshit Rabbah 68:12", "label": "B’reishit Rabbah 68:12", "kind": MIDRASH, "n": "Bar Kappara: the ladder is the Temple",
        "he_from": "תָּנֵי בַּר קַפָּרָא", "he_until": "רָאִיתִי אֶת ה' נִצָּב עַל הַמִּזְבֵּחַ",
        "en_from": "Bar Kappara taught:", "en_until": "(Amos 9:1).", "credit": "midrash"},
    "Bereshit Rabbah 68:12 (Sinai)": {
        "from": "Bereshit Rabbah 68:12", "label": "B’reishit Rabbah 68:12", "kind": MIDRASH, "n": "The Rabbis: the ladder is Sinai",
        "he_from": "רַבָּנָן פָּתְרִין לֵיהּ בְּסִינַי", "he_until": "וַיֵּרֶד ה' עַל הַר סִינַי אֶל רֹאשׁ הָהָר",
        "en_from": "The Rabbis interpret it regarding Sinai.", "en_until": "(Exodus 19:20).",
        "add": " <i>[“The letters of this equals the letters of that”: in gematria, both words come to 130. סלם is 60 + 30 + 40, and סיני is 60 + 10 + 50 + 10.]</i>",
        "credit": "midrash"},
    "Bereshit Rabbah 68:12 (on Jacob)": {
        "from": "Bereshit Rabbah 68:12", "label": "B’reishit Rabbah 68:12", "kind": MIDRASH, "n": "Up and down on the ladder, or on Jacob?",
        "he_from": "רַבִּי חִיָּא וְרַבִּי יַנַּאי", "he_until": "וְיוֹצְאִים בַּפַּרְוָד וּמוֹצְאִים אוֹתוֹ יָשֵׁן",
        "en_from": "Rabbi Ḥiyya and Rabbi Yanai", "en_until": "go out to the courtyard and find him asleep.", "credit": "midrash"},
    "Bereshit Rabbah 68:12 (his guardians)": {
        "from": "Bereshit Rabbah 68:12", "label": "B’reishit Rabbah 68:12", "kind": MIDRASH, "n": "The angels who went with him",
        "he_from": "דָּבָר אַחֵר, עֹלִים וְיֹרְדִים בּוֹ", "he_until": "אֵלּוּ שֶׁלִּוּוּ אוֹתוֹ בְּחוּצָה לָאָרֶץ",
        "en_from": "Another matter, “ascending and descending on it” – those who accompanied", "en_until": "outside the Land of Israel.",
        "credit": "midrash"},
    "Vayikra Rabbah 29:2 (Rabbi Meir)": {
        "from": "Vayikra Rabbah 29:2", "label": "Vayikra Rabbah 29:2", "kind": MIDRASH, "n": "Rabbi Meir: “You, too, will go up”",
        "he_from": "אָמַר רַבִּי בֶּרֶכְיָה וְרַבִּי חֶלְבּוֹ וְרַבִּי שִׁמְעוֹן בֶּן יוֹחָאי בְּשֵׁם רַבִּי מֵאִיר", "he_until": "לֹא הֶאֱמִין וְלֹא עָלָה",
        "en_from": "Rabbi Berekhya, Rabbi Ḥelbo, and Rabbi Shimon ben Yoḥai said in the name of Rabbi Meir:", "en_until": "He did not believe, and he did not ascend.",
        "add": " <i>[The midrash goes on to say what his refusal cost his descendants.]</i>", "credit": "midrash"},
    "Chullin 91b (the stones)": {
        "from": "Chullin 91b", "segments": [8], "label": "Chullin 91b", "kind": TALMUD, "n": "The stones that became one", "credit": "talmud"},
    "Chullin 91b (the ladder)": {
        "from": "Chullin 91b", "segments": [9, 10], "label": "Chullin 91b", "kind": TALMUD, "n": "How wide was the ladder?", "credit": "talmud"},
    "Chullin 91b (the fan)": {
        "from": "Chullin 91b", "segments": [11], "label": "Chullin 91b", "kind": TALMUD, "n": "God standing over Jacob", "credit": "talmud"},
    "Kitzur Baal HaTurim on Genesis 28:12:3": {
        "from": "Kitzur Ba'al HaTurim on Genesis 28:12:3", "label": "Ba’al HaTurim on Genesis 28:12", "kind": TURIM, "n": "Ladder and voice",
        "he_until": "ויכולים לעלות בו",
        "en": "<i>Sulam</i> (סולם), “ladder,” has the numerical value of <i>kol</i> (קול), “voice”: for the voice of the prayer of the righteous is a ladder for the angels to go up on. So too, the angel went up in the flame of the offering [Judges 13:20], and prayer is the service [that takes the offering’s place]. Therefore, for anyone who prays with full intention, the ladder is whole in all its rungs, and they can go up on it. <i>[The comment goes on: sulam also equals mamon, “money,” and oni, “poverty,” for God brings one down and lifts another up.]</i>",
        "credit": "turim"},
    "Kitzur Baal HaTurim on Genesis 28:12:6": {
        "from": "Kitzur Ba'al HaTurim on Genesis 28:12:6", "label": "Ba’al HaTurim on Genesis 28:12", "kind": TURIM, "n": "Ladder and Sinai",
        "en": "<i>Sulam</i> (סלם), “ladder,” has the numerical value of <i>Sinai</i> (סיני): God showed him the standing at Mount Sinai. <i>[Both come to 130: 60 + 30 + 40, and 60 + 10 + 50 + 10.]</i>",
        "credit": "turim"},
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
    meta = COMMENTARY.get(ref)
    rashi = re.match(r"Rashi on Genesis (\d+):(\d+):(\d+)$", ref)
    if not meta and rashi:
        meta = {"label": f"Rashi on Genesis {rashi.group(1)}:{rashi.group(2)}", "kind": RASHI, "credit": "rashi"}
    e = packet.get(meta.get("from", ref)) if meta else None
    if not (e and meta):
        missing.append(ref)
        continue
    if meta.get("segments"):   # Talmud: whole numbered segments, English with the translator's bold
        segs = [e["segments"][n - 1] for n in meta["segments"]]
        he = " ".join(s["he"] for s in segs)
        en = " ".join(s.get("en_html") or s["en"] for s in segs)
    else:
        he, en = e.get("he", ""), e.get("en") or ""
        if meta.get("he_from") or meta.get("he_until"): he = slice_he(he, meta.get("he_from"), meta.get("he_until"))
        if meta.get("en_from") or meta.get("en_until"): en = slice_en(en, meta.get("en_from"), meta.get("en_until"))
    n = meta.get("n", "")
    if ref.startswith("Rashi on"):
        head, en = rashi_en(en)
        n = n or head
    en = meta.get("en") or norm_en(en.replace("\n", " ").replace("return journey I learnt", "return journey. I learnt"))
    cards[ref] = {"label": meta["label"], "title": meta["label"], "kind": meta["kind"],
                  "verses": [{"n": n, "he": norm_he(he), "en": en + meta.get("add", "")}],
                  "credit": meta["credit"]}

out = ["/* Source cards for Voices of the Ladder. Generated by voices/tools/build_sources.py from Sefaria texts; edit the generator or tools/texts.json, not this file. */",
       "window.VOICES = window.VOICES || { characters: {}, scripts: {}, sources: {}, credits: {} };",
       "Object.assign(VOICES.credits, " + json.dumps(credits, ensure_ascii=False, indent=1) + ");",
       "Object.assign(VOICES.sources, " + json.dumps(cards, ensure_ascii=False, indent=1) + ");", ""]
open(os.path.join(REPO, "voices", "data", "sources.js"), "w", encoding="utf-8").write("\n".join(out))
print("refs used:", len(refs))
print("cards written:", len(cards))
print("missing:", missing)
