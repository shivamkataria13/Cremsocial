import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, type User } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const app = initializeApp({
  apiKey: "AIzaSyANouhRyaIeJA01hv1jmAExvOmJ9Ug_cCw",
  authDomain: "cremsocial-f7413.firebaseapp.com",
  projectId: "cremsocial-f7413",
  storageBucket: "cremsocial-f7413.firebasestorage.app",
  messagingSenderId: "722840586261",
  appId: "1:722840586261:web:bb9a0dd90b7ee7c3ade61c",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

/** Always admins, even if the admins collection is empty. Mirrored in firestore.rules. */
export const BOOTSTRAP_ADMINS = ["bismaydey001@gmail.com", "bismaydey0011@gmail.com"];

export async function isAdmin(email?: string | null) {
  if (!email) return false;
  if (BOOTSTRAP_ADMINS.includes(email)) return true;
  return (await getDoc(doc(db, "admins", email))).exists();
}

/** admin === null while still resolving */
export function useAdmin() {
  const [state, setState] = useState<{ user: User | null; admin: boolean | null }>({ user: null, admin: null });

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        setState({ user, admin: user ? await isAdmin(user.email) : false });
      }),
    []
  );

  return state;
}

/** Admin screens must never be indexed. */
export function useNoIndex() {
  useEffect(() => {
    const el = document.createElement("meta");
    el.name = "robots";
    el.content = "noindex, nofollow";
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
}
