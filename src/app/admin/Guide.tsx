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
  [ClipboardPaste, "1. Paste the whole doc", "Word, Google Docs or the .md file — select all, copy, then click New post and paste into Content. Title, meta title, meta description, intro and read time fill in on their own."],
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
        <h2 className={h2}>Copying from Word or Google Docs</h2>
        <p className="text-sm text-slate-500 mb-3">
          Pasting straight out of the document works — the headings, numbered sections and FAQ questions are recognised from
          their shape, so you get the same result as the <span className={code}>.md</span> version with one exception:
          <strong className="font-semibold text-slate-700"> hyperlinks do not survive a Word copy</strong>. Only the words come
          across.
        </p>
        <p className="text-sm text-slate-500">
          So: if the article has internal links, copy from the <span className={code}>.md</span> file. If it has none, copy from
          wherever is convenient. Either way, hit Preview and check the headings landed where you expect.
        </p>
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
            <span className={code}>[link text](/seo)</span> — a link.
          </li>
        </ul>
      </div>

      <div className={card}>
        <h2 className={h2}>Links</h2>
        <p className="text-sm text-slate-500 mb-4">
          Internal links are detected for you — anything pointing at cremsocial.com is rewritten to an in-site link, so the
          page opens instantly instead of reloading the whole site. Three ways to write one, all equivalent:
        </p>
        <ul className="space-y-3 text-sm text-slate-600">
          <li>
            <span className={code}>[ads management services](https://www.cremsocial.com/ads)</span> — the normal Docs link. Pasting
            the doc keeps it, and it becomes <span className={code}>/ads</span>.
          </li>
          <li>
            <span className={code}>[ads management services](/ads)</span> — the short version if you are typing it yourself.
          </li>
          <li>
            <span className={code}>https://www.cremsocial.com/ads</span> — a bare URL on its own becomes a link too.
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-500">
          Pages you can link to: <span className={code}>/</span> <span className={code}>/services</span>{" "}
          <span className={code}>/seo</span> <span className={code}>/ads</span> <span className={code}>/social-media</span>{" "}
          <span className={code}>/google-business</span> <span className={code}>/shadow-operating</span>{" "}
          <span className={code}>/about</span> <span className={code}>/contact</span> <span className={code}>/blog</span>.
          Links to other websites still work and open normally.
        </p>
        <p className="mt-3 text-xs text-slate-400">
          Note: copying out of a <strong className="font-semibold">.docx</strong> loses the links — only the words survive. Paste
          from the <strong className="font-semibold">.md</strong> version of the doc, or add the links back by hand.
        </p>
      </div>

      <div className={card}>
        <h2 className={h2}>Prefer to write HTML?</h2>
        <p className="text-sm text-slate-500 mb-4">
          You can. Anything starting with a tag is used exactly as written — the same format as the older posts in the code.
          Mix it with the plain-text markers freely; each paragraph is handled on its own. The{" "}
          <strong className="font-semibold">To HTML</strong> button converts what you have written so you can hand-tune the tags.
        </p>
        <pre className="p-4 rounded-lg bg-slate-900 text-slate-200 text-[12px] leading-relaxed overflow-x-auto">{`<h2>Step 1 — Can Google Even Find You?</h2>
<p>Open Google and type <code>site:yourwebsite.com</code></p>
<ul>
  <li>Is your primary category the most specific one?</li>
  <li>Do you have at least 10 photos?</li>
</ul>
<p><strong>Quick fix:</strong> change your H1 to include the phrase people search.</p>`}</pre>
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
