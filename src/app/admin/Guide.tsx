import { ClipboardPaste, Eye, Rocket } from "lucide-react";

const card = "rounded-xl border border-slate-200 bg-white p-6";
const h2 = "text-base font-semibold text-slate-900 mb-1";
const code = "px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[12px] font-mono";

const FIELDS: [string, string][] = [
  ["Title", "The headline — the “# ...” line of the doc. Shown as the big H1 on the post and on the blog cards."],
  ["Slug", "The URL: /blog/your-slug. Filled from the title automatically. Lowercase words with dashes, no spaces. Changing it on a live post changes its link — avoid once published."],
  ["Intro", "The italic pull-quote at the top and the summary on the blog card. The paragraphs before the first section of the doc, as plain text."],
  ["Content", "Everything from the first section onwards. Paste it — see below."],
  ["Category", "The coloured chip: SEO, Local SEO, Paid Ads, Websites, Strategy, Social Media, Shadow Operating. Pick an existing one so it gets the right colour."],
  ["Target audience", "Small line next to the read time, e.g. “For SMBs”."],
  ["Read time", "Estimated from the word count when you paste. Override if you like."],
  ["Publish date", "Sorts the blog — newest first. Defaults to today. A future date still shows immediately."],
  ["Meta title", "The Google result headline. The “Meta Title :” line of the doc. Keep it under ~60 characters."],
  ["Meta description", "The Google result snippet. The “Meta Description :” line. Keep it under ~160 characters."],
];

const STEPS: [typeof ClipboardPaste, string, string][] = [
  [ClipboardPaste, "1. Paste the whole doc", "Open the blog doc, select all, copy. Click New post, click into Content and paste. Title, meta title, meta description, intro and read time fill in on their own."],
  [Eye, "2. Check Preview", "Hit Preview to see the post exactly as it appears on the site. Fix the category and anything the paste got wrong, then set the publish date."],
  [Rocket, "3. Publish", "It goes live at /blog/your-slug straight away and appears at the top of the blog list."],
];

export function Guide() {
  return (
    <div className="max-w-3xl space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        {STEPS.map(([Icon, title, text]) => (
          <div key={title} className={card}>
            <Icon size={18} className="text-indigo-500 mb-3" />
            <h2 className={h2}>{title}</h2>
            <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className={card}>
        <h2 className={h2}>What goes in each field</h2>
        <p className="text-sm text-slate-500 mb-5">Pasting fills most of these for you.</p>
        <dl className="divide-y divide-slate-100">
          {FIELDS.map(([name, text]) => (
            <div key={name} className="py-3 grid sm:grid-cols-[150px_1fr] gap-1 sm:gap-4">
              <dt className="text-sm font-semibold text-slate-900">{name}</dt>
              <dd className="text-sm text-slate-500 leading-relaxed">{text}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={card}>
        <h2 className={h2}>Writing the content by hand</h2>
        <p className="text-sm text-slate-500 mb-5">
          Leave a blank line between paragraphs. Everything else is these five markers.
        </p>
        <ul className="space-y-3 text-sm text-slate-600">
          <li>
            <span className={code}>## Section heading</span> — a big heading, like <em>Conclusion</em> or <em>FAQ</em>.
          </li>
          <li>
            <span className={code}>### 1. Sub-heading</span> — a bold lead-in. Numbered points and FAQ questions use this; the
            paragraph right under it is joined to it.
          </li>
          <li>
            <span className={code}>- Bullet point</span> — one per line makes a bullet list.
          </li>
          <li>
            <span className={code}>**important**</span> — bold text.
          </li>
          <li>
            <span className={code}>[link text](/seo)</span> — a link. Links to cremsocial.com are turned into internal ones
            automatically, so <span className={code}>https://www.cremsocial.com/ads</span> becomes <span className={code}>/ads</span>.
          </li>
        </ul>
      </div>

      <div className={card}>
        <h2 className={h2}>Example</h2>
        <pre className="mt-3 p-4 rounded-lg bg-slate-900 text-slate-200 text-[12px] leading-relaxed overflow-x-auto">{`**Meta Title** : Google Ads PPC Management Brampton: 7 Common Mistakes

**Meta Description** : Learn 7 common mistakes Brampton businesses make...

# Google Ads PPC Management Brampton: 7 Mistakes Local Businesses Make

For local businesses in Brampton, Google Ads can be an effective way...

## 1. Choosing an Agency Based Only on Price

One of the biggest mistakes businesses make is selecting an agency...

## FAQ

### 1. What is Google Ads PPC Management?

Google Ads PPC Management involves creating, monitoring and optimizing...`}</pre>
        <p className="mt-3 text-xs text-slate-400">
          This is exactly what comes out of the blog docs — paste it in as-is and it lands in the right fields.
        </p>
      </div>

      <div className={card}>
        <h2 className={h2}>Good to know</h2>
        <ul className="mt-2 space-y-2 text-sm text-slate-500 list-disc pl-5">
          <li>Editing a post and saving replaces the live version instantly — there are no drafts.</li>
          <li>Posts are sorted by publish date, newest first, on the blog page.</li>
          <li>Nothing on the public site links here. Bookmark /admin.</li>
          <li>Posts marked with a padlock are built into the code and need a developer to change.</li>
          <li>Deleting a post is permanent, and its URL will 404 afterwards.</li>
        </ul>
      </div>
    </div>
  );
}
