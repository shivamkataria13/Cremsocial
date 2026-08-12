import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router";
import { signOut } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, BOOTSTRAP_ADMINS, db, useAdmin, useNoIndex } from "../lib/firebase";
import { blogPosts, type BlogPost } from "../data/blogData";

const latest = [...blogPosts].sort((a, b) => (b.publishDate ?? "").localeCompare(a.publishDate ?? ""))[0];

const emptyPost = (): BlogPost => ({
  id: "",
  slug: "",
  title: "",
  readTime: latest?.readTime ?? "4 min read",
  category: latest?.category ?? "Local SEO",
  targetAudience: latest?.targetAudience ?? "For SMBs",
  publishDate: new Date().toISOString().slice(0, 10),
  intro: "",
  content: "",
  metaTitle: "",
  metaDescription: "",
});

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 80);

const input =
  "w-full px-4 py-2.5 rounded-xl bg-white border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder:text-gray-400 text-sm";

const label = "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5";

export default function AdminDashboard() {
  useNoIndex();
  const { user, admin } = useAdmin();
  const [tab, setTab] = useState<"posts" | "admins">("posts");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [originalSlug, setOriginalSlug] = useState("");
  const [preview, setPreview] = useState(false);
  const [admins, setAdmins] = useState<string[]>([]);
  const [newAdmin, setNewAdmin] = useState("");
  const [status, setStatus] = useState("");

  const loadPosts = () =>
    getDocs(collection(db, "posts")).then((snap) =>
      setPosts(
        snap.docs
          .map((d) => ({ ...(d.data() as BlogPost), id: d.id }))
          .sort((a, b) => (b.publishDate ?? "").localeCompare(a.publishDate ?? ""))
      )
    );

  const loadAdmins = () => getDocs(collection(db, "admins")).then((snap) => setAdmins(snap.docs.map((d) => d.id)));

  useEffect(() => {
    if (admin) {
      loadPosts();
      loadAdmins();
    }
  }, [admin]);

  if (admin === null) return <div className="min-h-screen grid place-items-center text-gray-400">Loading...</div>;
  if (!admin) return <Navigate to="/admin/login" replace />;

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    const slug = slugify(editing.slug || editing.title);
    const { id: _id, ...data } = editing;
    setStatus("Saving...");
    await setDoc(doc(db, "posts", slug), { ...data, slug, updatedAt: serverTimestamp() });
    if (originalSlug && originalSlug !== slug) await deleteDoc(doc(db, "posts", originalSlug));
    await loadPosts();
    setEditing(null);
    setPreview(false);
    setStatus("Saved.");
  };

  const remove = async (slug: string) => {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) return;
    await deleteDoc(doc(db, "posts", slug));
    await loadPosts();
  };

  const addAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = newAdmin.trim().toLowerCase();
    if (!email) return;
    await setDoc(doc(db, "admins", email), { addedBy: user?.email ?? "", addedAt: serverTimestamp() });
    setNewAdmin("");
    await loadAdmins();
  };

  const removeAdmin = async (email: string) => {
    if (!confirm(`Remove admin ${email}?`)) return;
    await deleteDoc(doc(db, "admins", email));
    await loadAdmins();
  };

  const edit = (post: BlogPost) => {
    setEditing({ ...post });
    setOriginalSlug(post.slug);
    setPreview(false);
    setStatus("");
  };

  const field = (key: keyof BlogPost, text: string, props: Record<string, unknown> = {}) => (
    <div>
      <label className={label}>{text}</label>
      <input
        className={input}
        value={(editing?.[key] as string) ?? ""}
        onChange={(e) => setEditing({ ...editing!, [key]: e.target.value })}
        {...props}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-white">
      {/* Top bar */}
      <div className="border-b border-indigo-100 bg-white/70 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <span className="text-lg text-gray-900" style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}>
            Blog Admin
          </span>
          <button
            onClick={() => { setTab("posts"); setEditing(null); }}
            className={`text-sm px-3 py-1.5 rounded-lg ${tab === "posts" ? "bg-indigo-100 text-indigo-700" : "text-gray-500"}`}
          >
            Posts
          </button>
          <button
            onClick={() => { setTab("admins"); setEditing(null); }}
            className={`text-sm px-3 py-1.5 rounded-lg ${tab === "admins" ? "bg-indigo-100 text-indigo-700" : "text-gray-500"}`}
          >
            Admins
          </button>
          <div className="flex-1" />
          <span className="text-xs text-gray-400 hidden sm:block">{user?.email}</span>
          <Link to="/blog" className="text-xs text-indigo-600 hover:underline">View blog</Link>
          <button onClick={() => signOut(auth)} className="text-xs text-red-500 hover:underline">Sign out</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {status && <p className="mb-4 text-sm text-indigo-600">{status}</p>}

        {tab === "admins" && (
          <div className="rounded-3xl border border-indigo-100 bg-white/80 p-8 max-w-xl">
            <h2 className="text-xl text-gray-900 mb-4" style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}>
              Admins
            </h2>
            <form onSubmit={addAdmin} className="flex gap-2 mb-6">
              <input
                type="email"
                required
                placeholder="new-admin@email.com"
                className={input}
                value={newAdmin}
                onChange={(e) => setNewAdmin(e.target.value)}
              />
              <button className="px-5 rounded-xl bg-indigo-600 text-white text-sm font-semibold whitespace-nowrap">Add</button>
            </form>
            <ul className="space-y-2 text-sm">
              {BOOTSTRAP_ADMINS.map((email) => (
                <li key={email} className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-gray-50 text-gray-700">
                  {email}
                  <span className="text-xs text-gray-400">owner</span>
                </li>
              ))}
              {admins.filter((e) => !BOOTSTRAP_ADMINS.includes(e)).map((email) => (
                <li key={email} className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-gray-50 text-gray-700">
                  {email}
                  <button onClick={() => removeAdmin(email)} className="text-xs text-red-500 hover:underline">Remove</button>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-400">
              Added admins sign in with Google, or with an email/password account created in Firebase Auth.
            </p>
          </div>
        )}

        {tab === "posts" && !editing && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-gray-900" style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}>
                Posts ({posts.length})
              </h2>
              <button
                onClick={() => edit(emptyPost())}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
              >
                NEW POST
              </button>
            </div>
            <div className="space-y-3">
              {posts.map((post) => (
                <div key={post.id} className="rounded-2xl border border-indigo-100 bg-white/80 p-5 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-semibold truncate">{post.title}</p>
                    <p className="text-xs text-gray-400 truncate">
                      /blog/{post.slug} • {post.category} • {post.publishDate}
                    </p>
                  </div>
                  <button onClick={() => edit(post)} className="text-sm text-indigo-600 hover:underline">Edit</button>
                  <button onClick={() => remove(post.slug)} className="text-sm text-red-500 hover:underline">Delete</button>
                </div>
              ))}
              {posts.length === 0 && <p className="text-gray-400 text-sm">No posts yet. Create one.</p>}
            </div>
            <p className="mt-6 text-xs text-gray-400">
              The {blogPosts.length} original posts live in the code and are not editable here.
            </p>
          </>
        )}

        {tab === "posts" && editing && (
          <form onSubmit={save} className="space-y-5">
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setEditing(null)} className="text-sm text-gray-500 hover:underline">
                ← Back
              </button>
              <div className="flex-1" />
              <button
                type="button"
                onClick={() => setPreview(!preview)}
                className="px-4 py-2 rounded-xl border border-indigo-200 text-indigo-600 text-sm"
              >
                {preview ? "Edit" : "Preview"}
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
              >
                PUBLISH
              </button>
            </div>

            {preview ? (
              <div className="rounded-3xl bg-white/80 border border-indigo-100 p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-bold uppercase tracking-wider text-indigo-600">
                  <span className="bg-indigo-100 px-2 py-1 rounded">{editing.category}</span>
                  <span className="text-gray-500">{editing.readTime}</span>
                  <span className="text-gray-500">{editing.targetAudience}</span>
                  <span className="text-gray-500">{editing.publishDate}</span>
                </div>
                <h1
                  className="text-3xl md:text-5xl text-gray-900 tracking-tight leading-tight mb-6"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                >
                  {editing.title || "Untitled"}
                </h1>
                <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 p-6 mb-8">
                  <p className="text-lg text-gray-700 italic" style={{ fontFamily: "Playfair Display, serif" }}>
                    {editing.intro}
                  </p>
                </div>
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: editing.content }} />
              </div>
            ) : (
              <div className="rounded-3xl border border-indigo-100 bg-white/80 p-8 space-y-5">
                {field("title", "Title", {
                  required: true,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditing({
                      ...editing,
                      title: e.target.value,
                      slug: originalSlug ? editing.slug : slugify(e.target.value),
                    }),
                })}
                {field("slug", "Slug (URL)", { required: true })}
                <div className="grid md:grid-cols-2 gap-5">
                  {field("category", "Category")}
                  {field("targetAudience", "Target Audience")}
                  {field("readTime", "Read Time")}
                  {field("publishDate", "Publish Date", { type: "date" })}
                </div>
                <div>
                  <label className={label}>Intro</label>
                  <textarea
                    rows={3}
                    className={input}
                    value={editing.intro}
                    onChange={(e) => setEditing({ ...editing, intro: e.target.value })}
                  />
                </div>
                <div>
                  <label className={label}>Content (HTML — h2, p, ul, li, strong)</label>
                  <textarea
                    rows={22}
                    className={`${input} font-mono text-xs`}
                    value={editing.content}
                    onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                  />
                </div>
                {field("metaTitle", "Meta Title")}
                <div>
                  <label className={label}>Meta Description</label>
                  <textarea
                    rows={2}
                    className={input}
                    value={editing.metaDescription}
                    onChange={(e) => setEditing({ ...editing, metaDescription: e.target.value })}
                  />
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
