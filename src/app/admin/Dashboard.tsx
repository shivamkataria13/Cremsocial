import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "sonner";
import { Calendar, FileText, Lock, Plus, Trash2, UserPlus } from "lucide-react";
import { AdminShell, btn, inputClass, type AdminTab } from "./AdminShell";
import { PostEditor, slugify } from "./PostEditor";
import { Guide } from "./Guide";
import { toHtml } from "./format";
import { BOOTSTRAP_ADMINS, db, useAdmin, useNoIndex } from "../lib/firebase";
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

export default function AdminDashboard() {
  useNoIndex();
  const { user, admin } = useAdmin();
  const [tab, setTab] = useState<AdminTab>("posts");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [originalSlug, setOriginalSlug] = useState("");
  const [saving, setSaving] = useState(false);
  const [admins, setAdmins] = useState<string[]>([]);
  const [newAdmin, setNewAdmin] = useState("");

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
      loadPosts().catch(() => toast.error("Could not load posts"));
      loadAdmins().catch(() => {});
    }
  }, [admin]);

  if (admin === null)
    return <div className="min-h-screen grid place-items-center bg-slate-100 text-slate-400 text-sm">Loading…</div>;
  if (!admin) return <Navigate to="/admin/login" replace />;

  const save = async () => {
    if (!editing) return;
    const slug = slugify(editing.slug || editing.title);
    const { id: _id, ...data } = editing;
    const source = editing.source ?? editing.content;
    setSaving(true);
    try {
      await setDoc(doc(db, "posts", slug), {
        ...data,
        slug,
        source,
        content: toHtml(source), // rendered HTML the blog reads
        updatedAt: serverTimestamp(),
      });
      if (originalSlug && originalSlug !== slug) await deleteDoc(doc(db, "posts", originalSlug));
      await loadPosts();
      setEditing(null);
      toast.success(originalSlug ? "Post updated" : "Post published");
    } catch {
      toast.error("Save failed — check your permissions");
    } finally {
      setSaving(false);
    }
  };

  const remove = async (post: BlogPost) => {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    await deleteDoc(doc(db, "posts", post.slug));
    await loadPosts();
    toast.success("Post deleted");
  };

  const addAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = newAdmin.trim().toLowerCase();
    if (!email) return;
    try {
      await setDoc(doc(db, "admins", email), { addedBy: user?.email ?? "", addedAt: serverTimestamp() });
      setNewAdmin("");
      await loadAdmins();
      toast.success(`${email} is now an admin`);
    } catch {
      toast.error("Could not add admin");
    }
  };

  const removeAdmin = async (email: string) => {
    if (!confirm(`Remove admin ${email}?`)) return;
    await deleteDoc(doc(db, "admins", email));
    await loadAdmins();
    toast.success("Admin removed");
  };

  const open = (post: BlogPost, isNew = false) => {
    setEditing({ ...post });
    setOriginalSlug(isNew ? "" : post.slug);
    setTab("posts");
  };

  const title = editing
    ? originalSlug
      ? "Edit post"
      : "New post"
    : { posts: "Posts", guide: "How to publish a blog", admins: "Admins" }[tab];

  return (
    <AdminShell
      tab={tab}
      onTab={(t) => {
        setTab(t);
        setEditing(null);
      }}
      email={user?.email}
      title={title}
      actions={
        tab === "posts" && !editing ? (
          <button onClick={() => open(emptyPost(), true)} className={btn.primary}>
            <Plus size={15} /> New post
          </button>
        ) : null
      }
    >
      {editing ? (
        <PostEditor
          post={editing}
          isNew={!originalSlug}
          onChange={setEditing}
          onSave={save}
          onCancel={() => setEditing(null)}
          saving={saving}
        />
      ) : tab === "guide" ? (
        <Guide />
      ) : tab === "posts" ? (
        <div className="max-w-4xl space-y-8">
          <section className="space-y-2">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group rounded-xl border border-slate-200 bg-white px-5 py-4 flex items-center gap-4 hover:border-indigo-300 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <button
                    onClick={() => open(post)}
                    className="block text-left text-slate-900 font-medium truncate hover:text-indigo-600"
                  >
                    {post.title}
                  </button>
                  <p className="mt-1 flex items-center gap-2 text-xs text-slate-400 truncate">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> {post.publishDate}
                    </span>
                    <span className="truncate">/blog/{post.slug}</span>
                  </p>
                </div>
                <button onClick={() => open(post)} className="text-sm text-slate-500 hover:text-indigo-600">
                  Edit
                </button>
                <button
                  onClick={() => remove(post)}
                  className="p-2 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50"
                  aria-label="Delete post"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            ))}

            {posts.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
                <FileText size={26} className="mx-auto text-slate-300 mb-3" />
                <p className="text-slate-500 text-sm mb-4">No published posts yet.</p>
                <button onClick={() => open(emptyPost(), true)} className={btn.primary}>
                  <Plus size={15} /> Write the first one
                </button>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Built into the site ({blogPosts.length})
            </h2>
            <div className="rounded-xl border border-slate-200 bg-white divide-y divide-slate-100">
              {blogPosts.map((post) => (
                <div key={post.id} className="px-5 py-3 flex items-center gap-3 text-sm">
                  <Lock size={13} className="text-slate-300 shrink-0" />
                  <span className="text-slate-600 truncate flex-1">{post.title}</span>
                  <span className="text-xs text-slate-400 hidden sm:block">{post.publishDate ?? "—"}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-400">These live in the code and are edited by a developer.</p>
          </section>
        </div>
      ) : (
        <div className="max-w-lg space-y-6">
          <form onSubmit={addAdmin} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-slate-900 mb-1">Invite an admin</h2>
            <p className="text-xs text-slate-500 mb-4">
              They sign in with Google, or with an email/password account you create in Firebase Auth.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                required
                placeholder="teammate@email.com"
                className={inputClass}
                value={newAdmin}
                onChange={(e) => setNewAdmin(e.target.value)}
              />
              <button className={btn.primary}>
                <UserPlus size={15} /> Add
              </button>
            </div>
          </form>

          <div className="rounded-xl border border-slate-200 bg-white divide-y divide-slate-100">
            {BOOTSTRAP_ADMINS.map((email) => (
              <div key={email} className="px-5 py-3.5 flex items-center gap-3 text-sm">
                <span className="text-slate-700 truncate flex-1">{email}</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">
                  Owner
                </span>
              </div>
            ))}
            {admins
              .filter((e) => !BOOTSTRAP_ADMINS.includes(e))
              .map((email) => (
                <div key={email} className="px-5 py-3.5 flex items-center gap-3 text-sm">
                  <span className="text-slate-700 truncate flex-1">{email}</span>
                  <button
                    onClick={() => removeAdmin(email)}
                    className="p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50"
                    aria-label="Remove admin"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </AdminShell>
  );
}
