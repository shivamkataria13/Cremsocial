// Run: node --experimental-strip-types src/app/admin/format.check.ts
import assert from "node:assert";
import { readFileSync } from "node:fs";
import { autoFormat, parseDoc, toHtml } from "./format.ts";

// ---- 1. A real Google-Docs export pasted whole ----------------------------
const doc = readFileSync(new URL("../../../blog/Crem Social Blogs.md", import.meta.url), "utf8");
const parsed = parseDoc(doc);
const html = toHtml(parsed.body);

assert.strictEqual(parsed.metaTitle, "Google Ads PPC Management Brampton: 7 Common Mistakes");
assert.match(parsed.metaDescription, /^Learn 7 common mistakes Brampton businesses/);
assert.strictEqual(parsed.title, "Google Ads PPC Management Brampton: 7 Mistakes Local Businesses Make Before Hiring an Agency");
assert.match(parsed.intro, /^For local businesses in Brampton/);
assert.ok(!parsed.intro.includes("**"), "intro is plain text");
assert.match(parsed.readTime, /^\d+ min read$/);

assert.match(html, /^<h2>1\. Choosing an Agency Based Only on Price<\/h2>/); // "1\." unescaped
assert.match(html, /<h2>FAQ<\/h2>/);
assert.match(html, /<p><strong>1\. What is Google Ads PPC Management\?<\/strong><br>Google Ads PPC Management involves/);
assert.match(html, /<a href="\/ads"><strong>ads management services<\/strong><\/a>/); // absolute → relative
assert.match(html, /<a href="\/">/);
assert.match(html, /<a href="\/contact">Get in touch with CremSocial today<\/a>/);
assert.ok(!html.includes("\\."), "no leftover escapes");

// ---- 2. Plain prose with no markdown (a .docx copy-paste) -----------------
const plain = parseDoc(`Google Ads can be an effective way to reach customers who are actively searching for services in Brampton today.

Conclusion

Avoiding these mistakes helps you choose the right partner.

1. What is PPC?

It is paid search advertising.`);

assert.match(toHtml(plain.body), /<h2>Conclusion<\/h2>/);
assert.match(toHtml(plain.body), /<p><strong>1\. What is PPC\?<\/strong><br>It is paid search advertising\./);
assert.match(plain.intro, /^Google Ads can be an effective way/);

// ---- 2b. The same doc pasted out of Word/Docs: no #, no **, no links ------
const fromWord = parseDoc(
  doc
    .replace(/^#+\s*/gm, "")      // headings lose their markers
    .replace(/\*\*/g, "")         // bold is styling, not characters
    .replace(/\\/g, "")           // no escapes
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links keep only their words
);
const wordHtml = toHtml(fromWord.body);

assert.strictEqual(fromWord.metaTitle, "Google Ads PPC Management Brampton: 7 Common Mistakes");
assert.match(fromWord.metaDescription, /^Learn 7 common mistakes/);
assert.strictEqual(fromWord.title, "Google Ads PPC Management Brampton: 7 Mistakes Local Businesses Make Before Hiring an Agency");
assert.match(fromWord.intro, /^For local businesses in Brampton/);
assert.match(wordHtml, /^<h2>1\. Choosing an Agency Based Only on Price<\/h2>/);
assert.match(wordHtml, /<h2>7\. Hiring an Agency Without Understanding Its Reporting<\/h2>/);
assert.match(wordHtml, /<h2>Conclusion<\/h2>/);
assert.match(wordHtml, /<h2>FAQ<\/h2>/);
assert.match(wordHtml, /<p><strong>1\. What is Google Ads PPC Management\?<\/strong><br>Google Ads PPC Management involves/);
assert.ok(!/<a /.test(wordHtml), "a .docx paste has no links left to find");

// ---- 3. Markers, lists, inline styling, raw-HTML passthrough --------------
assert.strictEqual(toHtml("## Hi"), "<h2>Hi</h2>");
assert.strictEqual(toHtml("- a\n- b"), "<ul>\n  <li>a</li>\n  <li>b</li>\n</ul>");
assert.strictEqual(toHtml("**x** and [y](/seo)"), '<p><strong>x</strong> and <a href="/seo">y</a></p>');
assert.strictEqual(autoFormat("Conclusion\n\nText."), "## Conclusion\n\nText.");

// blogData.ts-style HTML written by hand goes through untouched
const raw = `<h2>Step 1</h2>\n<p>Read <a href="/seo">our SEO page</a> and spend 5 to 10 minutes.</p>`;
assert.strictEqual(toHtml(raw), raw);

// bare URLs become links; cremsocial.com ones become internal; hrefs are never re-linked
assert.strictEqual(
  toHtml("Visit https://www.cremsocial.com/contact today."),
  '<p>Visit <a href="/contact">www.cremsocial.com/contact</a> today.</p>'
);
assert.strictEqual(
  toHtml("See www.google.com/ads for details"),
  '<p>See <a href="https://www.google.com/ads">www.google.com/ads</a> for details</p>'
);
assert.strictEqual(toHtml("Budget 7 to 12 per day"), "<p>Budget 7 to 12 per day</p>");

// bullets that sit directly under their lead-in sentence still become a list
assert.strictEqual(
  toHtml("Make sure your profile includes:\n- Business hours\n- Website URL"),
  "<p>Make sure your profile includes:</p>\n<ul>\n  <li>Business hours</li>\n  <li>Website URL</li>\n</ul>"
);

// ...and a numbered sub-heading keeps its lead-in sentence AND its list
assert.strictEqual(
  toHtml("### 1. Optimize Your Profile\nMake sure it includes:\n- Business hours\n- Website URL"),
  "<p><strong>1. Optimize Your Profile</strong><br>Make sure it includes:</p>\n" +
    "<ul>\n  <li>Business hours</li>\n  <li>Website URL</li>\n</ul>"
);

// both meta fields squashed onto one line, as some docs export them
const squashed = parseDoc("Meta Title : Local SEO Services for Small Business Growth Meta Description : Grow your business.\n\n# Why Local SEO\n\nIntro line.\n\n## First\n\nBody.");
assert.strictEqual(squashed.metaTitle, "Local SEO Services for Small Business Growth");
assert.strictEqual(squashed.metaDescription, "Grow your business.");
assert.strictEqual(squashed.title, "Why Local SEO");

// a lead image is lifted out, and neither it nor a link in the intro is mangled
const withImage = parseDoc(
  "# Title\n\n![Focus Keyword: social media](/blog/x/image1.webp)\n\n" +
    "Hiring a [social media marketing agency](https://www.cremsocial.com/social-media) makes sense.\n\n## First\n\nBody."
);
assert.strictEqual(withImage.image, "/blog/x/image1.webp");
assert.strictEqual(withImage.intro, "Hiring a social media marketing agency makes sense.");
assert.strictEqual(
  withImage.introHtml,
  'Hiring a <a href="/social-media">social media marketing agency</a> makes sense.'
);
assert.strictEqual(
  toHtml("![Cremsocial office](/blog/x/i2.webp)"),
  '<img src="/blog/x/i2.webp" alt="Cremsocial office" loading="lazy">'
);

// a section heading with a list under it
assert.strictEqual(
  toHtml("## Focus on\n- Reviews\n- Citations"),
  "<h2>Focus on</h2>\n<ul>\n  <li>Reviews</li>\n  <li>Citations</li>\n</ul>"
);

console.log("format.ts ok");
