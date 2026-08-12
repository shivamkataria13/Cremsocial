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

// ---- 3. Markers, lists, inline styling, raw-HTML passthrough --------------
assert.strictEqual(toHtml("## Hi"), "<h2>Hi</h2>");
assert.strictEqual(toHtml("- a\n- b"), "<ul>\n  <li>a</li>\n  <li>b</li>\n</ul>");
assert.strictEqual(toHtml("**x** and [y](/seo)"), '<p><strong>x</strong> and <a href="/seo">y</a></p>');
assert.strictEqual(toHtml("<h2>legacy</h2>"), "<h2>legacy</h2>");
assert.strictEqual(autoFormat("Conclusion\n\nText."), "## Conclusion\n\nText.");

console.log("format.ts ok");
