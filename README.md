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

The slide and Eleven Ladders share seventy AI images in `img/` and eleven artworks in `art/`.

The source cards’ text lives in two places, the `SRC` object in each page’s script, so a correction to a card
has to be made in both.

Base text: The JPS Tanakh: Gender-Sensitive Edition (Revised JPS, 2023), CC BY-NC, via Sefaria.
Other translations are quoted only in short phrases. Midrash translations are from The Sefaria Midrash Rabbah
(2022, CC BY), and the rabbinic citations were checked on Sefaria.
