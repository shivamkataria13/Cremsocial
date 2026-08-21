import { useRef, useState } from "react";
import { ArrowLeft, Code2, Eye, Pencil, Save, Wand2 } from "lucide-react";
import { btn, inputClass, labelClass } from "./AdminShell";
import { toast } from "sonner";
import { parseDoc, toHtml } from "./format";
import type { BlogPost } from "../data/blogData";

const SNIPPETS: [string, string][] = [
  ["Section", "\n## Section heading\n"],
  ["Sub-heading", "\n### 1. Sub-heading\nText under it.\n"],
  ["List", "\n- Item\n- Item\n"],
  ["Bold", "**text**"],
  ["Link", "[text](/services)"],
];

export function PostEditor({
  post,
  isNew,
  onChange,
  onSave,
  onCancel,
  saving,
}: {
  post: BlogPost;
  isNew: boolean;
  onChange: (p: BlogPost) => void;
  onSave: () => void;
  onCancel: () => void;
  saving: boolean;
}) {
  const [preview, setPreview] = useState(false);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  // Editor works on plain text; HTML is generated from it on save.
  const source = post.source ?? post.content;
  const setSource = (value: string) => onChange({ ...post, source: value });
  const isHtml = source.trimStart().startsWith("<");

  const set = (key: keyof BlogPost) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange({ ...post, [key]: e.target.value });

  /** Paste a whole blog doc: title, meta, intro and sections all get filled in. */
  const applyDoc = (text: string) => {
    const doc = parseDoc(text);
    const next: BlogPost = { ...post, source: doc.body, readTime: doc.readTime || post.readTime };
    const filled: string[] = [];

    if (doc.title) {
      next.title = doc.title;
      if (isNew || !post.slug) next.slug = slugify(doc.title);
      filled.push("title");
    }
    if (doc.metaTitle) (next.metaTitle = doc.metaTitle), filled.push("meta title");
    if (doc.metaDescription) (next.metaDescription = doc.metaDescription), filled.push("meta description");
    if (doc.intro) (next.intro = doc.intro), (next.introHtml = doc.introHtml), filled.push("intro");

    onChange(next);
    toast.success(filled.length ? `Formatted — filled in ${filled.join(", ")}` : "Formatted");
  };

  const insert = (snippet: string) => {
    const el = contentRef.current;
    if (!el) return;
    const at = el.selectionStart;
    setSource(source.slice(0, at) + snippet + source.slice(el.selectionEnd));
    requestAnimationFrame(() => {
      el.focus();
      el.selectionStart = el.selectionEnd = at + snippet.length;
    });
  };

  const card = "rounded-xl border border-slate-200 bg-white p-6";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSave();
      }}
    >
      {/* Action bar */}
      <div className="flex items-center gap-3 mb-6">
        <button type="button" onClick={onCancel} className={btn.ghost}>
          <ArrowLeft size={15} /> Back
        </button>
        <div className="flex-1" />
        <button type="button" onClick={() => setPreview(!preview)} className={btn.ghost}>
          {preview ? <Pencil size={15} /> : <Eye size={15} />} {preview ? "Edit" : "Preview"}
        </button>
        <button type="submit" disabled={saving} className={btn.primary}>
          <Save size={15} /> {saving ? "Saving..." : isNew ? "Publish" : "Save changes"}
        </button>
      </div>

      {preview ? (
        <div className="rounded-xl border border-slate-200 bg-white p-8 md:p-12 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-5 text-[11px] font-bold uppercase tracking-wider">
            <span className="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded">{post.category}</span>
            <span className="text-slate-400">{post.readTime}</span>
            <span className="text-slate-400">• {post.targetAudience}</span>
            <span className="text-slate-400">• {post.publishDate}</span>
          </div>
          <h1
            className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-6"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            {post.title || "Untitled post"}
          </h1>
          {post.intro && (
            <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 p-6 mb-8">
              <p className="text-lg text-slate-700 italic" style={{ fontFamily: "Playfair Display, serif" }}>
                {post.intro}
              </p>
            </div>
          )}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: toHtml(source) }} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            <div className={card + " space-y-5"}>
              <div>
                <label className={labelClass}>Title</label>
                <input
                  required
                  className={`${inputClass} text-base`}
                  placeholder="Local Business SEO Best Practices..."
                  value={post.title}
                  onChange={(e) =>
                    onChange({
                      ...post,
                      title: e.target.value,
                      slug: isNew ? slugify(e.target.value) : post.slug,
                    })
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Slug</label>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400 shrink-0">/blog/</span>
                  <input required className={inputClass} value={post.slug} onChange={set("slug")} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Intro</label>
                <textarea
                  rows={3}
                  className={inputClass}
                  placeholder="The pull-quote that opens the article."
                  value={post.intro}
                  onChange={set("intro")}
                />
              </div>
            </div>

            <div className={card}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <label className={labelClass + " mb-0"}>
                  Content {isHtml && <span className="ml-1 text-indigo-500 normal-case">· HTML</span>}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {SNIPPETS.map(([name, snippet]) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() => insert(snippet)}
                      className="px-2.5 py-1 rounded-md border border-slate-200 text-[11px] font-medium text-slate-600 hover:bg-slate-50"
                    >
                      {name}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => applyDoc(source)}
                    className="px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-[11px] font-medium text-indigo-600 hover:bg-indigo-100 flex items-center gap-1"
                  >
                    <Wand2 size={11} /> Re-format
                  </button>
                  {!isHtml && (
                    <button
                      type="button"
                      onClick={() => setSource(toHtml(source))}
                      title="Convert to raw HTML and edit the tags directly"
                      className="px-2.5 py-1 rounded-md border border-slate-200 text-[11px] font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-1"
                    >
                      <Code2 size={11} /> To HTML
                    </button>
                  )}
                </div>
              </div>
              <textarea
                ref={contentRef}
                rows={24}
                className={`${inputClass} leading-relaxed ${isHtml ? "font-mono text-xs" : "text-sm"}`}
                placeholder={"Opening paragraph...\n\n## Section heading\n\n### 1. Sub-heading\nText under the sub-heading.\n\n- bullet\n- bullet"}
                value={source}
                onChange={(e) => setSource(e.target.value)}
                onPaste={(e) => {
                  const text = e.clipboardData.getData("text");
                  if (text.trim().length < 300) return; // small pastes behave normally
                  e.preventDefault();
                  applyDoc(text);
                }}
              />
              <p className="mt-2 text-xs text-slate-400">
                Paste the entire blog doc here — the title, meta title, meta description and intro are pulled out
                automatically. <code className="text-slate-500">##</code> = section, <code className="text-slate-500">###</code> =
                numbered sub-heading or FAQ question, <code className="text-slate-500">-</code> = bullet. Raw HTML
                (<code className="text-slate-500">&lt;h2&gt;</code>, <code className="text-slate-500">&lt;p&gt;</code>) also works
                as-is. See the Guide tab.
              </p>
            </div>
          </div>

          {/* Side rail */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className={card + " space-y-4"}>
              <h3 className="text-sm font-semibold text-slate-900">Details</h3>
              <div>
                <label className={labelClass}>Category</label>
                <input className={inputClass} list="categories" value={post.category} onChange={set("category")} />
                <datalist id="categories">
                  {["SEO", "Local SEO", "Paid Ads", "Websites", "Strategy", "Social Media", "Shadow Operating"].map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>
              <div>
                <label className={labelClass}>Target audience</label>
                <input className={inputClass} value={post.targetAudience} onChange={set("targetAudience")} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Read time</label>
                  <input className={inputClass} value={post.readTime} onChange={set("readTime")} />
                </div>
                <div>
                  <label className={labelClass}>Publish date</label>
                  <input type="date" className={inputClass} value={post.publishDate ?? ""} onChange={set("publishDate")} />
                </div>
              </div>
            </div>

            <div className={card + " space-y-4"}>
              <h3 className="text-sm font-semibold text-slate-900">SEO</h3>
              <div>
                <label className={labelClass}>Meta title</label>
                <input className={inputClass} value={post.metaTitle} onChange={set("metaTitle")} />
                <p className="mt-1 text-[11px] text-slate-400">{post.metaTitle.length}/60</p>
              </div>
              <div>
                <label className={labelClass}>Meta description</label>
                <textarea rows={3} className={inputClass} value={post.metaDescription} onChange={set("metaDescription")} />
                <p className="mt-1 text-[11px] text-slate-400">{post.metaDescription.length}/160</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);
