import { useState } from "react";
import { Navigate } from "react-router";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { Lock } from "lucide-react";
import { auth, googleProvider, isAdmin, useAdmin, useNoIndex } from "../lib/firebase";
import { btn, inputClass } from "./AdminShell";

export default function AdminLogin() {
  useNoIndex();
  const { admin } = useAdmin();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (admin) return <Navigate to="/admin" replace />;

  // Signed in but not on the admin list — kick them straight back out.
  const guard = async (email: string | null) => {
    if (await isAdmin(email)) return;
    await signOut(auth);
    throw new Error("This account is not an admin.");
  };

  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    setError("");
    try {
      await fn();
    } catch (e: any) {
      setError(e?.message?.replace("Firebase: ", "") ?? "Login failed");
    } finally {
      setBusy(false);
    }
  };

  const withEmail = (e: React.FormEvent) => {
    e.preventDefault();
    run(async () => {
      const cred = await signInWithEmailAndPassword(auth, form.email.trim(), form.password);
      await guard(cred.user.email);
    });
  };

  const withGoogle = () =>
    run(async () => {
      const cred = await signInWithPopup(auth, googleProvider);
      await guard(cred.user.email);
    });

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-100">
      {/* Brand panel */}
      <div className="hidden lg:flex flex-col justify-between bg-slate-950 p-12 text-white">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
          <span className="text-sm tracking-wide" style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}>
            CREMSOCIAL
          </span>
        </div>
        <div>
          <h2
            className="text-4xl leading-tight tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Blog control room.
          </h2>
          <p className="text-slate-400 max-w-sm">
            Write, preview and publish posts straight to the site. Invite-only access.
          </p>
        </div>
        <p className="text-xs text-slate-600">Not linked from anywhere on the public site.</p>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="w-11 h-11 rounded-xl bg-slate-900 grid place-items-center mb-5">
            <Lock size={18} className="text-white" />
          </div>
          <h1 className="text-2xl text-slate-900 mb-1" style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}>
            Sign in
          </h1>
          <p className="text-slate-500 text-sm mb-7">Admin access only.</p>

          <form onSubmit={withEmail} className="space-y-3">
            <input
              type="email"
              required
              placeholder="Email"
              className={inputClass}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="password"
              required
              placeholder="Password"
              className={inputClass}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit" disabled={busy} className={`${btn.primary} w-full justify-center py-2.5`}>
              {busy ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="flex items-center gap-3 my-5 text-xs text-slate-400">
            <div className="h-px flex-1 bg-slate-200" /> OR <div className="h-px flex-1 bg-slate-200" />
          </div>

          <button onClick={withGoogle} disabled={busy} className={`${btn.ghost} w-full justify-center py-2.5`}>
            <svg className="w-4 h-4" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M45 24c0-1.6-.1-2.7-.4-3.9H24v7.1h12c-.2 1.9-1.5 4.7-4.4 6.6l6.7 5.2C42.2 35.4 45 30.2 45 24z" />
              <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-7.1 5.5C8.1 41.1 15.5 46 24 46z" />
              <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4l-7.1-5.5C2.9 17 2 20.4 2 24s.9 7 2.4 9.9l7.1-5.5z" />
              <path fill="#EA4335" d="M24 10.6c3.3 0 5.5 1.4 6.8 2.6l6-5.9C33 3.9 29.9 2 24 2 15.5 2 8.1 6.9 4.4 14.1l7.1 5.5c1.8-5.3 6.7-9 12.5-9z" />
            </svg>
            Continue with Google
          </button>

          {error && (
            <p className="mt-4 rounded-lg bg-red-50 border border-red-100 px-4 py-2.5 text-sm text-red-600">{error}</p>
          )}
          <p className="mt-6 text-center text-xs text-slate-400">Invite only — no account creation.</p>
        </div>
      </div>
    </div>
  );
}
