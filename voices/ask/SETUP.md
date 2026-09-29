# Setting up Ask anything

Ask anything lets the 5–7 and parents groups type any question. When a character has no prepared answer, Claude answers in that character’s voice. It works only from the texts in this program, and the page marks the reply as an **Imagined answer**.

It runs as a small Cloudflare Worker: a program Cloudflare hosts for you. The Worker holds your Anthropic key, so the key never appears on the page, in GitHub, or in chat.

Setup takes about ten minutes. You need your Cloudflare login and an Anthropic API key. If you don’t have a key, sign in at [console.anthropic.com](https://console.anthropic.com), add a little credit under Billing, and create one under API keys.

## 1. Create the Worker

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. In the left sidebar, choose **Workers & Pages**. It may be inside a section called **Compute**.
3. Choose **Create** (or **Create application**), then **Create Worker**. If you’re offered templates, pick **Start with Hello World!**
4. Name it `voices-ask`, then choose **Deploy**.
5. Choose **Edit code**. Click inside the code, select everything (Ctrl+A, or ⌘A on a Mac), and delete it.
6. In a new browser tab, open [techrabbi.org/jacobs-ladder/voices/ask/dist/worker.js](https://techrabbi.org/jacobs-ladder/voices/ask/dist/worker.js). Select everything on that page and copy it.
7. Paste it into the Cloudflare editor, then choose **Deploy**.

## 2. Give it your Anthropic key

1. Go back to the Worker’s own page (click `voices-ask` near the top).
2. Open **Settings**, then **Variables and Secrets**, then **Add**.
3. Set **Type** to **Secret**, **Variable name** to `ANTHROPIC_API_KEY`, and paste your key as the **Value**.
4. Choose **Deploy** (or **Save**).

## 3. Check it and send the address

1. On the Worker’s page, find its address. It looks like `https://voices-ask.your-name.workers.dev`.
2. Open that address in your browser. You should see `{"ok":true,"ready":true,"off":false}`. If `ready` says `false`, the key isn’t saved yet: repeat step 2.
3. Add `?check=1` to the end of the address and open it again. This asks Claude one tiny question. After a few seconds you should see `"check":"passed"`. If it says `failed`, copy what the page shows into chat; it never includes the key.
4. Send the address to Claude in chat. The address isn’t secret; **don’t send the key**. Claude connects the page to the Worker and publishes when you say so.

## 4. Set a spending limit

At [console.anthropic.com](https://console.anthropic.com), open **Settings**, then **Limits**, and set a monthly spend limit, such as $20. A question costs about a penny or two. The first question in each visit costs a few cents more, because it loads that visit’s texts, which are then reused for five minutes. A whole morning should cost a few dollars.

## Turning it off

- **For a while:** on the Worker’s page, open **Settings**, then **Variables and Secrets**, and add a variable of type **Text** named `ASK_OFF` with the value `1`. Delete it to turn Ask anything back on. The page says Ask anything is switched off, and the prepared questions keep working.
- **For good:** delete the `voices-ask` Worker, or ask Claude to remove the address from the page.

## How it works

- The page sends the Worker only three things: the group (5–7 or parents), the character, and the question.
- The Worker fetches that visit’s context from the live site (`voices/data/ask/`, built by `voices/tools/ask_context.js`): the instructions, the visit as the group heard it, and the texts the character may quote. So a change to a script reaches Ask anything as soon as the site is published. Only a change to the Worker itself needs a new paste.
- It asks Claude Opus 5.5 for a short answer, with the texts the answer drew on. Source buttons appear only for texts in the program.
- If Anthropic’s safety check declines a question, it retries on the model Anthropic recommends for that case. If that also declines, the page asks the group to take the question to their teacher.
- The Worker answers only requests from techrabbi.org, and it slows down any one address that asks more than 60 questions in ten minutes.

## For whoever maintains it

The Worker’s source is `src/worker.js`. `dist/worker.js` is the same code bundled with the Anthropic SDK into one file for pasting. After changing the source, rebuild with `npm install` and `npm run build` in this folder, then paste the new `dist/worker.js` into the Cloudflare editor. `npm run dev` runs the bundle locally in Cloudflare’s own runtime (`wrangler.jsonc`), which is how it was tested before the first paste.
