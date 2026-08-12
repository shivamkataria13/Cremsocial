import { useState } from "react";
import { Navigate } from "react-router";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider, isAdmin, useAdmin, useNoIndex } from "../lib/firebase";

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

  const input =
    "w-full px-4 py-3 rounded-xl bg-white border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder:text-gray-400 text-sm";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-violet-50 to-white px-6">
      <div className="w-full max-w-sm rounded-3xl border border-indigo-100 bg-white/80 backdrop-blur-sm shadow-xl p-8">
        <h1 className="text-2xl text-gray-900 mb-1" style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}>
          Admin Login
        </h1>
        <p className="text-gray-500 text-sm mb-6">Cremsocial blog management</p>

        <form onSubmit={withEmail} className="space-y-3">
          <input
            type="email"
            required
            placeholder="Email"
            className={input}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            required
            placeholder="Password"
            className={input}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            type="submit"
            disabled={busy}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white disabled:opacity-60"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            {busy ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-5 text-xs text-gray-400">
          <div className="h-px flex-1 bg-gray-200" /> OR <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          onClick={withGoogle}
          disabled={busy}
          className="w-full py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 disabled:opacity-60 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M45 24c0-1.6-.1-2.7-.4-3.9H24v7.1h12c-.2 1.9-1.5 4.7-4.4 6.6l6.7 5.2C42.2 35.4 45 30.2 45 24z" />
            <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-7.1 5.5C8.1 41.1 15.5 46 24 46z" />
            <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4l-7.1-5.5C2.9 17 2 20.4 2 24s.9 7 2.4 9.9l7.1-5.5z" />
            <path fill="#EA4335" d="M24 10.6c3.3 0 5.5 1.4 6.8 2.6l6-5.9C33 3.9 29.9 2 24 2 15.5 2 8.1 6.9 4.4 14.1l7.1 5.5c1.8-5.3 6.7-9 12.5-9z" />
          </svg>
          Continue with Google
        </button>

        {error && <p className="mt-4 text-sm text-red-600 text-center">{error}</p>}
        <p className="mt-6 text-center text-xs text-gray-400">Access is invite only. No account creation.</p>
      </div>
    </div>
  );
}
