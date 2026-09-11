# Changelog

All notable changes to the Cremsocial site. Newest first.

Dates are the day the change was made. Blog entries list the post's own publish
date where it differs.

## 2026-09-11

### Added

- Two posts, published from `8 sept 2026.docx` and `10 sept 2026.docx`:
  - *10 Best Google Maps SEO Agency in Brampton for Local Businesses*
    (`/blog/best-google-maps-seo-agency-in-brampton-for-local-businesses`),
    dated 8 Sept
  - *12 Best PPC Services in Brampton: Top Agencies for Real Business Growth*
    (`/blog/best-ppc-services-in-brampton-for-real-growth`), dated 10 Sept
- Their 24 pictures were resized and converted to WebP under
  `public/blog/<slug>/` — 6.5 MB → 494 KB and 10.4 MB → 652 KB.

### Fixed

- The Google Maps post linked to `cremsocial.com/services/seo` and
  `cremsocial.com/services/google-business-profile`, neither of which is a route
  on this site — both would have 404'd. Pointed at `/seo` and `/google-business`
  in the source doc, so a re-publish keeps the fix.
- Publishing now validates every internal link against the real routes and blog
  slugs, so a guessed URL is caught before it goes live.

## 2026-09-09

### SEO

- Fixed the canonical tag on `/seo`, which pointed at
  `https://www.cremsocial.com/google-business` — telling Google the page was a
  duplicate and to drop it from the index. It now points at `/seo`. Its Service
  schema `url` carried the same wrong address and was fixed with it.
- Fixed the canonical on `/shadow-operating`, which pointed at
  `https://www.cremsocial.com/shadow-ops` — a URL that does not exist. Same fix
  applied to that page's schema `url`.
- Every page's canonical now matches its own route.

## 2026-09-04

### Fixed

- Removed the "Shadow Operating" bullet from the service list in *Top 10 Trusted
  Google Ads & PPC Management Agencies in Brampton*, in both the published post
  and its source doc, so it will not come back on a re-publish.
- Hid Shadow Operating from the footer navigation. The page still works at
  `/shadow-operating`; only the link is gone. The header link was already
  commented out, so it is now unlinked from site navigation.

### SEO

- Added canonical tags to blog posts (`/blog/<slug>`) and the Services page —
  the last two pages that had none.
- Blog posts now set `og:image` to their lead image, so link previews show the
  article's picture instead of the site logo.
- `Meta` removes a stale canonical tag when a page does not define one. Because
  this is a single-page app, the previous route's tag used to stay in the head
  and label the new page with the wrong URL.

## 2026-09-03

### Added

- Two posts, published from `Cremsocial - GBP Post & Blog Post.docx` and its
  `(1)` variant:
  - *Top 10 Trusted Google Ads & PPC Management Agencies in Brampton*
    (`/blog/top-10-google-ads-ppc-agencies-brampton`)
  - *Social Media Marketing Agency for Small Businesses: What to Look For*
    (`/blog/social-media-marketing-agency-small-businesses`)
- **Images in blog posts.** Pictures are pulled out of the source `.docx`,
  resized to 1280px and converted to WebP under `public/blog/<slug>/`
  (9.0 MB → 632 KB and 1.6 MB → 68 KB). A picture above the intro becomes the
  post's lead image; the rest render inside the article, lazily loaded, with alt
  text taken from the section each one sits under.
- `image` and `introHtml` fields on `BlogPost`, plus `.blog-content img`
  styling.

### Fixed

- The lead-image pattern could match across line breaks and swallow the opening
  paragraph, taking its link with it.
- "Meta Title", "Meta Description" and "Focus Keyword" squashed onto one line
  are now separated, and the Focus Keyword note is dropped rather than published
  as a heading.
- Character-count notes writers leave on meta fields — `(Ch 154)`, `(ch -56)` —
  are stripped.
- Empty `[](url)` anchors, left behind when Word splits a link across a space,
  are removed.
- Each agency's website / location / phone gets its own line instead of running
  together.
- An FAQ answer sharing a paragraph with its bold question gets a line break.
- Links in the intro survive: the pull-quote renders `introHtml` while blog
  cards keep using the plain text.

## 2026-08-24

### Added

- *AI in Digital Marketing: What Businesses Need to Know*
  (`/blog/ai-in-digital-marketing`), from `Crem Social Blogs (5).docx`.
  Replaces the older commented-out copy of the same article.
- Numbered sub-headings 3–5 were marked as top-level headings in the doc while
  1 and 2 were sub-headings; all five now match.

## 2026-08-20

### Added

- *How SEO Services in Brampton Help Local Businesses Generate More Leads* and
  *Why Local SEO Services Are Essential for Small Business Growth*, both from
  their `.docx` sources, replacing the commented-out versions.
- `introHtml`, so a link that lives in the intro paragraph is not lost.

## 2026-08-19

### Added

- *Local Business SEO Best Practices for Higher Local Rankings* and
  *Local SEO Brampton: Tips to Rank Higher on Google Maps*.

### Fixed

- Links are taken from the `.docx` rather than guessed: a Word copy-paste drops
  hyperlinks, and two links had been pointed at the wrong pages.
- Bullet lists sitting directly under a lead-in sentence or a numbered
  sub-heading were being flattened into one paragraph.

## 2026-08-13

### Added

- *Google Ads PPC Management Brampton: Performance Max vs. Search Campaigns for
  Local Leads* (`/blog/google-ads-ppc-performance-max-vs-search`).
- `.blog-content a` styling, so links written in the admin are styled without
  needing an inline class on every anchor.

### Changed

- Contact email `hello@cremsocial.com` → `shiv@cremsocial.com` across the site
  and the Organization schema.

## 2026-08-12

### Added

- **Blog admin at `/admin`** — Firebase Auth with Google or email/password, no
  sign-up. `bismaydey001@gmail.com` and `bismaydey0011@gmail.com` are permanent
  admins; others are invited from the Admins tab, which can also create their
  login and show the password once.
- Posts are written by pasting a whole blog doc: the title, meta title, meta
  description, intro and read time are pulled out automatically. Sections,
  numbered sub-headings, FAQ questions, bullets, bold and links are recognised
  from plain text, Google-Docs markdown, or raw HTML.
- Live preview, a Guide tab explaining every field, and Firestore rules in
  `firestore.rules`.
- Blog pages read Firestore posts merged with the ones in the code, newest
  first.
- The admin area is unlinked, `noindex`, and disallowed in `robots.txt`.

---

### Notes

- Source docs live in `blog/`. The published copy is generated from them, so
  edit the doc and re-publish rather than editing the HTML by hand.
- `node --experimental-strip-types src/app/admin/format.check.ts` checks the
  doc-to-HTML conversion against the real blog docs.
