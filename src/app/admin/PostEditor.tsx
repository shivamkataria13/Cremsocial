import { useRef, useState } from "react";
import { ArrowLeft, Eye, Pencil, Save } from "lucide-react";
import { btn, inputClass, labelClass } from "./AdminShell";
import type { BlogPost } from "../data/blogData";

const SNIPPETS: [string, string][] = [
  ["H2", "\n<h2>Heading</h2>\n"],
  ["Para", "\n<p>Text</p>\n"],
  ["List", "\n<ul>\n  <li>Item</li>\n  <li>Item</li>\n</ul>\n"],
  ["Bold", "<strong>text</strong>"],
  ["Link", '<a href="/services">text</a>'],
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

  const set = (key: keyof BlogPost) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange({ ...post, [key]: e.target.value });

  const insert = (snippet: string) => {
    const el = contentRef.current;
    if (!el) return;
    const at = el.selectionStart;
    onChange({ ...post, content: post.content.slice(0, at) + snippet + post.content.slice(el.selectionEnd) });
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
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
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
              <div className="flex items-center justify-between mb-3">
                <label className={labelClass + " mb-0"}>Content (HTML)</label>
                <div className="flex gap-1.5">
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
                </div>
              </div>
              <textarea
                ref={contentRef}
                rows={24}
                className={`${inputClass} font-mono text-xs leading-relaxed`}
                placeholder="<h2>Section</h2>&#10;<p>Body copy...</p>"
                value={post.content}
                onChange={set("content")}
              />
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
