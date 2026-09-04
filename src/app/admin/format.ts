/**
 * Plain text / Google-Docs markdown → the same HTML the hand-written posts use.
 *
 *   ## Section          -> <h2>Section</h2>
 *   ### 1. Sub-heading  -> <p><strong>1. Sub-heading</strong><br>lines under it</p>
 *   - item              -> <ul><li>item</li></ul>
 *   **bold**            -> <strong>bold</strong>
 *   [text](url), bare url -> <a href="url">text</a>  (cremsocial.com links become relative)
 *   anything else       -> <p>...</p>
 *
 * Blocks that already start with "<" pass through untouched, so a post can be
 * written straight in HTML exactly like the ones in blogData.ts.
 */

/** Docs exports escape punctuation: "1\. Thing" */
const unescape = (s: string) => s.replace(/\\([.\-*_#+])/g, "$1");

/** Keep internal links inside the SPA router: cremsocial.com/ads -> /ads */
const href = (url: string) => url.replace(/^https?:\/\/(www\.)?cremsocial\.com\/?/i, "/");

const TOKEN = /@@LINK(\d+)@@/g;

const inline = (s: string) => {
  // Finished anchors are parked while bare URLs are linked, so an href is never linked twice.
  const held: string[] = [];
  const hold = (html: string) => `@@LINK${held.push(html) - 1}@@`;

  return unescape(s)
    .replace(/!\[([^\]\n]*)\]\(([^)\s]+)[^)]*\)/g, (_, alt, url) =>
      hold(`<img src="${url}" alt="${alt.replace(/"/g, "&quot;")}" loading="lazy">`)
    )
    // Word splits a link across a space, leaving an empty anchor next to the real one
    .replace(/\[\s*\]\([^)]*\)\s*/g, "")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g, (_, text, url) => hold(`<a href="${href(url)}">${text}</a>`))
    .replace(/(?<!["'=])(?:https?:\/\/|www\.)[^\s<)]+/g, (raw) => {
      const url = raw.replace(/[.,;:!?]+$/, "");
      const full = url.startsWith("www.") ? `https://${url}` : url;
      return hold(`<a href="${href(full)}">${url.replace(/^https?:\/\//, "")}</a>`) + raw.slice(url.length);
    })
    .replace(TOKEN, (_, i) => held[+i]);
};

/** Splits the lines under a heading (or a bare block) into prose and a bullet list. */
const body = (lines: string[]) => {
  const first = lines.findIndex((l) => /^[-*]\s/.test(l));
  const isList = first !== -1 && lines.slice(first).every((l) => /^[-*]\s/.test(l));
  const prose = isList ? lines.slice(0, first) : lines;

  return {
    // an FAQ answer that shares its paragraph with the bold question gets a line break
    lead: prose.map(inline).join("<br>").replace(/^(<strong>[^<]*\?\s*<\/strong>)\s*(?=\S)/, "$1<br>"),
    list: isList
      ? `<ul>\n${lines.slice(first).map((l) => `  <li>${inline(l.slice(2))}</li>`).join("\n")}\n</ul>`
      : "",
  };
};

export function toHtml(src: string): string {
  return src
    .replace(/\r\n/g, "\n")
    // a "###" heading owns the paragraph under it, blank line or not
    .replace(/^(#{3}\s.*)\n\s*\n/gm, "$1\n")
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map((block) => {
      if (block.startsWith("<")) return block;
      // a picture on its own line is a block, not a paragraph
      if (/^!\[[^\]]*\]\([^)\s]+\)$/.test(block)) return inline(block);

      const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
      const heading = lines[0].match(/^(#{1,3})\s+(.*)$/);
      const { lead, list } = body(heading ? lines.slice(1) : lines);

      if (heading && heading[1].length <= 2) {
        return [`<h2>${inline(heading[2])}</h2>`, lead && `<p>${lead}</p>`, list].filter(Boolean).join("\n");
      }

      if (heading) {
        return [`<p><strong>${inline(heading[2])}</strong>${lead ? `<br>${lead}` : ""}</p>`, list]
          .filter(Boolean)
          .join("\n");
      }

      return [lead && `<p>${lead}</p>`, list].filter(Boolean).join("\n");
    })
    .join("\n\n");
}

/**
 * Turns raw prose pasted out of Docs/Word (no markdown at all) into the markers
 * above: a short line that does not end like a sentence is a heading, and a
 * numbered one ("1. ...") or a question is a sub-heading glued to the
 * paragraph beneath it.
 */
export function autoFormat(raw: string): string {
  const lines = raw.replace(/\r\n/g, "\n").split("\n").map((l) => l.trim());

  const marked = lines.map((line) => {
    if (!line || /^(#{1,3} |[-*] |<)/.test(line)) return line;

    const headingish = line.length <= 90 && !/[.,;:]$/.test(line);
    if (!headingish) return line;
    // A question is an FAQ entry; a numbered line is a section like "1. Choosing an Agency".
    if (line.endsWith("?")) return `### ${line}`;
    if (/^\d+[.)]\s/.test(line)) return `## ${line}`;
    if (line.split(/\s+/).length <= 12 && !line.endsWith("!")) return `## ${line}`;
    return line;
  });

  // Glue a "###" heading to the paragraph that follows it.
  const out: string[] = [];
  for (const line of marked) {
    if (line === "" && out.at(-1)?.startsWith("### ")) continue;
    out.push(line);
  }

  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export interface ParsedDoc {
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** The intro with its links and bold kept — the plain `intro` feeds the blog cards. */
  introHtml: string;
  /** A picture sitting above the intro, used as the post's lead image. */
  image: string;
  body: string;
  readTime: string;
}

const stripMarks = (s: string) =>
  unescape(s)
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`#]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Whole-document paste: pulls the Meta Title / Meta Description lines, the "#"
 * headline and the opening paragraphs out of a blog doc, leaving the sections
 * as the body.
 */
export function parseDoc(raw: string): ParsedDoc {
  const lines = raw
    .replace(/\r\n/g, "\n")
    // some docs run the meta lines and the focus keyword together on one line
    .replace(/([^[\n])\s*(\**\s*(?:meta\s*description|focus\s*keyword)\s*\**\s*[:\-–])/gi, "$1\n$2")
    .split("\n");
  let title = "";
  let metaTitle = "";
  let metaDescription = "";
  const rest: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const meta = trimmed.match(/^\**\s*meta\s*(title|description)\s*\**\s*[:\-–]\s*(.+)$/i);
    if (meta) {
      // writers leave a character count on the end: "... (Ch 154)"
      const value = stripMarks(meta[2]).replace(/\s*\(\s*ch\s*[^\d]?\s*\d+\s*\)\s*$/i, "");
      if (meta[1].toLowerCase() === "title") metaTitle = value;
      else metaDescription = value;
      continue;
    }
    // an SEO note for the writer, not part of the article
    if (/^#*\s*\**\s*focus\s*keyword\s*\**\s*[:\-–]/i.test(trimmed)) continue;
    // heading marker left behind when a meta line was split off it
    if (/^#+$/.test(trimmed)) continue;

    if (!title && /^#\s+\S/.test(trimmed)) {
      title = stripMarks(trimmed.slice(2));
      continue;
    }
    rest.push(line);
  }

  // Pasted out of Word/Docs, so the headline lost its "#": the first line is it.
  if (!title) {
    const first = rest.findIndex((l) => l.trim());
    const candidate = rest[first]?.trim() ?? "";
    if (candidate && candidate.length <= 200 && !/[.,;:]$/.test(candidate) && !/^[-*<#]/.test(candidate)) {
      title = stripMarks(candidate);
      rest.splice(first, 1);
    }
  }

  // No markdown headings at all? It came from a .docx — guess the structure.
  let body = rest.join("\n").trim();
  if (!/^#{2,3}\s/m.test(body) && !body.startsWith("<")) body = autoFormat(body);

  // A picture above the article is its lead image, not part of the copy.
  let image = "";
  body = body.replace(/^!\[[^\]\n]*\]\(([^)\s]+)[^)]*\)\s*/, (match, url) => {
    image = url;
    return "";
  });

  // Everything before the first section becomes the intro pull-quote.
  const firstSection = body.search(/^(##\s|<h2)/m);
  let intro = "";
  let introHtml = "";
  if (firstSection > 0) {
    const opening = body.slice(0, firstSection).trim();
    intro = stripMarks(opening.replace(/<[^>]+>/g, " "));
    // links and bold survive here even though the card text is plain
    introHtml = opening.split(/\n{2,}/).map((p) => inline(p.replace(/\n/g, " ")).trim()).join(" ");
    body = body.slice(firstSection).trim();
  }

  const words = raw.split(/\s+/).filter(Boolean).length;

  return {
    title,
    metaTitle,
    metaDescription,
    intro,
    introHtml,
    image,
    body,
    readTime: `${Math.max(1, Math.round(words / 200))} min read`,
  };
}
