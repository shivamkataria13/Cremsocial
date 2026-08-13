import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "sonner";
import { Calendar, Copy, Eye, EyeOff, FileText, KeyRound, Lock, Plus, RefreshCw, Trash2, UserPlus } from "lucide-react";
import { AdminShell, btn, inputClass, labelClass, type AdminTab } from "./AdminShell";
import { PostEditor, slugify } from "./PostEditor";
import { Guide } from "./Guide";
import { toHtml } from "./format";
import { BOOTSTRAP_ADMINS, createLogin, db, randomPassword, useAdmin, useNoIndex } from "../lib/firebase";
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
  const [admins, setAdmins] = useState<{ email: string; hasLogin?: boolean }[]>([]);
  const [invite, setInvite] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(true);
  const [created, setCreated] = useState<{ email: string; password: string } | null>(null);

  const loadPosts = () =>
    getDocs(collection(db, "posts")).then((snap) =>
      setPosts(
        snap.docs
          .map((d) => ({ ...(d.data() as BlogPost), id: d.id }))
          .sort((a, b) => (b.publishDate ?? "").localeCompare(a.publishDate ?? ""))
      )
    );

  const loadAdmins = () =>
    getDocs(collection(db, "admins")).then((snap) =>
      setAdmins(snap.docs.map((d) => ({ email: d.id, hasLogin: d.data().hasLogin })))
    );

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
    const email = invite.email.trim().toLowerCase();
    const password = invite.password.trim();
    if (!email) return;
    if (password && password.length < 6) return toast.error("Password must be at least 6 characters");

    try {
      let isNewLogin = false;
      if (password) isNewLogin = await createLogin(email, password);

      await setDoc(doc(db, "admins", email), {
        addedBy: user?.email ?? "",
        addedAt: serverTimestamp(),
        hasLogin: !!password,
      });
      await loadAdmins();

      setCreated(password ? { email, password } : null);
      setInvite({ email: "", password: "" });
      toast.success(
        !password
          ? `${email} added — they sign in with Google`
          : isNewLogin
            ? `Login created for ${email}`
            : `${email} already had a login — added as admin`
      );
    } catch (e: any) {
      toast.error(e?.message?.replace("Firebase: ", "") ?? "Could not add admin");
    }
  };

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied");
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
          <form onSubmit={addAdmin} className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Add an admin</h2>
              <p className="text-xs text-slate-500 mt-1">
                Set a password to create their login, or leave it blank if they will sign in with Google.
              </p>
            </div>

            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                required
                placeholder="teammate@email.com"
                className={inputClass}
                value={invite.email}
                onChange={(e) => setInvite({ ...invite, email: e.target.value })}
              />
            </div>

            <div>
              <label className={labelClass}>Password (optional)</label>
              <div className="flex gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 6 characters"
                  className={`${inputClass} font-mono`}
                  value={invite.password}
                  onChange={(e) => setInvite({ ...invite, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? "Hide password" : "Show password"}
                  className="px-3 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
                <button
                  type="button"
                  onClick={() => setInvite({ ...invite, password: randomPassword() })}
                  title="Generate a password"
                  className="px-3 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
                >
                  <RefreshCw size={15} />
                </button>
                {invite.password && (
                  <button
                    type="button"
                    onClick={() => copy(invite.password)}
                    title="Copy password"
                    className="px-3 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50"
                  >
                    <Copy size={15} />
                  </button>
                )}
              </div>
            </div>

            <button className={btn.primary}>
              <UserPlus size={15} /> {invite.password ? "Create login & add admin" : "Add admin"}
            </button>
          </form>

          {created && (
            <div className="rounded-xl border border-indigo-200 bg-indigo-50/60 p-5">
              <div className="flex items-start gap-3">
                <KeyRound size={16} className="text-indigo-500 mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900">Send these details over</p>
                  <p className="mt-1 text-xs text-slate-500">
                    The password is not stored anywhere — copy it now. They can change it later from the login screen.
                  </p>
                  <div className="mt-3 space-y-2 text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <span className="flex-1 truncate text-slate-700">{created.email}</span>
                      <button onClick={() => copy(created.email)} className="text-slate-400 hover:text-indigo-600">
                        <Copy size={14} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex-1 truncate text-slate-700">{created.password}</span>
                      <button onClick={() => copy(created.password)} className="text-slate-400 hover:text-indigo-600">
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => copy(`Email: ${created.email}\nPassword: ${created.password}\nSign in at: ${location.origin}/admin`)}
                    className="mt-3 text-xs font-semibold text-indigo-600 hover:underline"
                  >
                    Copy all three lines
                  </button>
                </div>
                <button onClick={() => setCreated(null)} className="text-xs text-slate-400 hover:text-slate-600">
                  Done
                </button>
              </div>
            </div>
          )}

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
              .filter((a) => !BOOTSTRAP_ADMINS.includes(a.email))
              .map(({ email, hasLogin }) => (
                <div key={email} className="px-5 py-3.5 flex items-center gap-3 text-sm">
                  <span className="text-slate-700 truncate flex-1">{email}</span>
                  <span className="text-[11px] text-slate-400">{hasLogin ? "password" : "Google"}</span>
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
