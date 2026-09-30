# Jacob’s Ladder · סולם יעקב

An interactive Talmud-page (daf) slide for a scholar-in-residence session on Parashat Vayeitzei.

Genesis 28:10–18 in the Revised JPS sits in the center, where the Gemara would be. Six key phrases are
highlighted. Selecting one shows how eleven translations render it and the AI images those wordings
produced (Google’s gemini-3-pro-image model), with notes from Rashi, the midrash, the Talmud, and Robert Alter.

Single-file webpage (`index.html`) with images in `img/`, sized as a 16:9 slide that scales to any screen.
Present it full screen: click a phrase or use the arrow keys (or 1–6), and click the large image to enlarge it.
Hover over or click any source’s name (a translation, Rashi, or a midrash) for a card on who made it, when,
its approach, and its worldview.
Live at techrabbi.org/jacobs-ladder.

The companion page, `eleven-ladders/`, holds the full experiment behind the slide: the Hebrew and eleven
translations sent word for word to the image model, without footnotes, verse numbers, or source citations;
the dream verses alone; instruction lenses; midrash as the prompt; eleven public-domain artworks from
Wikimedia Commons, 1150 to 1866; and a chevrutah prompt lab with a prompt builder. Tallies count what each
wording produced, and notes set the results beside Rashi, the midrash, the Talmud, the Mishnah, and Robert Alter.
Source names link to the same background cards as the slide, shown as a bottom sheet on phones.
Each phrase on the slide links to its section, and the QR code in the slide’s bottom band opens the page on a
phone. Live at techrabbi.org/jacobs-ladder/eleven-ladders.

The third page, `dream/`, is Jacob’s Dream: Genesis 28:11–12 in eighteen art styles, from a Sephardic
illuminated manuscript to claymation, each with an eight-second looping animation. The stills come from
gemini-3-pro-image and the loops from Veo 3.1 Fast; each loop begins and ends on its still. Selecting a picture
opens a large view with fullscreen, a slideshow, and the prompts behind it. None of the images show God.
Live at techrabbi.org/jacobs-ladder/dream. Its media is in `dream/media/`. The scripts, full-size stills, and
original clips are kept locally in `dream-source/`, which is not committed because of its size.

The fourth page, `voices/`, is Voices of the Ladder, a teacher-driven conversation tool for a family learning
morning. A group chooses a character (Jacob, Esau, Rebekah, Isaac, an angel, the stone, Rashi, the Sages, Ramban,
or Rambam), who tells their side of the night at Bethel, answers the group’s questions, asks the group questions,
and ends with a rung: one line to carry back to the family. There are four versions, each at its own link:
`voices/#k2`, `#g34`, `#g57`, and `#parents`, plus `#opening` for the TV. The teacher moves the conversation with the
space bar or arrow keys, and any line drawn from a text opens a card with the Hebrew and the Revised JPS. Scripts live
in `voices/data/`, one file per character; `voices/review/` holds readable copies for review, `voices/PLAN.md` the plan
for the morning, and `voices/PORTRAITS.md` the prompts for the character portraits, which
`voices/tools/portraits.py` sends to Gemini. `voices/tools/` keeps the Sefaria
texts behind the cards, a report checking every claim the scripts make against them, and the two scripts that rebuild
the source cards and the review copies. All thirty visits are written: every character, in every version it appears
in.

In the 5–7 and parents visits, a typed question with no prepared answer can go to Ask anything: a Cloudflare Worker
in `voices/ask/` that answers in the character’s voice with Claude, working only from the texts in the program, and
the page marks the reply as an imagined answer. The Worker reads each visit’s context from `voices/data/ask/`, which
`voices/tools/ask_context.js` rebuilds; run it after changing a script. Setup is in `voices/ask/SETUP.md`.

A portrait can come to life: `voices/tools/animate.py` makes a gentle eight-second loop with Google's Veo, starting and
ending on the portrait, and `voices/data/loops.js` lists the loops. A loop plays in the character's visit and when a
tile on the character page is hovered or focused; a computer set to reduce motion keeps the still portrait. All ten
characters have one, each checked frame by frame for halos, lettering, and faces that smear. The K–2 motions are drawn as numbered figure panels, like an airplane safety card, in
`voices/data/motions.js`; they appear on Our rungs and in Practice together.

The printables for the morning are in `voices/print/`, with a print center at `voices/print/` that lists each one
with its paper and how many to print: a guide for each group leader, the rung key, the family ladder sheet (11×17),
rung strips, a table card, and a take-home card with the bedtime Sh’ma. Each is an HTML page sized in inches that
reads the same data as the tool, so a changed rung or a new portrait shows up in print too. After a change, run
`node voices/tools/print_pdfs.mjs` to rebuild the PDFs in `voices/print/pdf/` (it needs Playwright), and
`python3 voices/tools/print_qr.py` if an address changes. The fonts are served from `voices/print/fonts/`, so the
pages print the same without an internet connection.

The slide and Eleven Ladders share seventy AI images in `img/` and eleven artworks in `art/`.

The source cards’ text lives in two places, the `SRC` object in each page’s script, so a correction to a card
has to be made in both. Voices of the Ladder keeps its cards in `voices/data/sources.js`, generated from Sefaria’s
export; its cards for the Revised JPS, the King James, and Robert Alter copy the slide’s text.

Base text: The JPS Tanakh: Gender-Sensitive Edition (Revised JPS, 2023), CC BY-NC, via Sefaria.
Other translations are quoted only in short phrases. Midrash translations are from The Sefaria Midrash Rabbah
(2022, CC BY), and the rabbinic citations were checked on Sefaria.
