import { Link } from "react-router";
import { signOut } from "firebase/auth";
import { Toaster } from "sonner";
import { FileText, Users, ExternalLink, LogOut, type LucideIcon } from "lucide-react";
import { auth } from "../lib/firebase";

export type AdminTab = "posts" | "admins";

const NAV: { id: AdminTab; label: string; icon: LucideIcon }[] = [
  { id: "posts", label: "Posts", icon: FileText },
  { id: "admins", label: "Admins", icon: Users },
];

export function AdminShell({
  tab,
  onTab,
  email,
  title,
  actions,
  children,
}: {
  tab: AdminTab;
  onTab: (t: AdminTab) => void;
  email?: string | null;
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Toaster position="top-right" richColors />

      {/* Sidebar */}
      <aside className="w-16 md:w-60 shrink-0 bg-slate-950 text-slate-400 flex flex-col sticky top-0 h-screen">
        <div className="h-16 flex items-center gap-2.5 px-4 md:px-6 border-b border-white/5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 shrink-0" />
          <span className="hidden md:block text-white text-sm tracking-wide" style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}>
            CREMSOCIAL
          </span>
        </div>

        <nav className="flex-1 p-2 md:p-3 space-y-1">
          {NAV.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTab(id)}
              className={`w-full flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg text-sm transition-colors ${
                tab === id ? "bg-indigo-500/15 text-white" : "hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              <Icon size={17} className={tab === id ? "text-indigo-400" : ""} />
              <span className="hidden md:block">{label}</span>
            </button>
          ))}
        </nav>

        <div className="p-2 md:p-3 border-t border-white/5 space-y-1">
          <Link
            to="/blog"
            className="w-full flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg text-sm hover:bg-white/5 hover:text-slate-200"
          >
            <ExternalLink size={17} />
            <span className="hidden md:block">View blog</span>
          </Link>
          <button
            onClick={() => signOut(auth)}
            className="w-full flex items-center gap-3 px-3 md:px-4 py-2.5 rounded-lg text-sm hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={17} />
            <span className="hidden md:block">Sign out</span>
          </button>
          <p className="hidden md:block px-4 pt-2 pb-1 text-[11px] text-slate-600 truncate">{email}</p>
        </div>
      </aside>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 shrink-0 bg-white border-b border-slate-200 flex items-center gap-4 px-6 sticky top-0 z-10">
          <h1 className="text-lg text-slate-900 truncate" style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}>
            {title}
          </h1>
          <div className="flex-1" />
          {actions}
        </header>
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}

export const btn = {
  primary:
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors disabled:opacity-50",
  ghost:
    "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors",
};

export const inputClass =
  "w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition";

export const labelClass = "block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5";
