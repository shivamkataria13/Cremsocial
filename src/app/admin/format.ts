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
    lead: prose.map(inline).join("<br>"),
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
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let title = "";
  let metaTitle = "";
  let metaDescription = "";
  const rest: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    const meta = trimmed.match(/^\**\s*meta\s*(title|description)\s*\**\s*[:\-–]\s*(.+)$/i);
    if (meta) {
      if (meta[1].toLowerCase() === "title") metaTitle = stripMarks(meta[2]);
      else metaDescription = stripMarks(meta[2]);
      continue;
    }
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

  // Everything before the first section becomes the intro pull-quote.
  const firstSection = body.search(/^(##\s|<h2)/m);
  let intro = "";
  if (firstSection > 0) {
    intro = stripMarks(body.slice(0, firstSection).replace(/<[^>]+>/g, " "));
    body = body.slice(firstSection).trim();
  }

  const words = raw.split(/\s+/).filter(Boolean).length;

  return { title, metaTitle, metaDescription, intro, body, readTime: `${Math.max(1, Math.round(words / 200))} min read` };
}
