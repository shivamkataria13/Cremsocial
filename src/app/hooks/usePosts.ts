import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import { blogPosts, type BlogPost } from "../data/blogData";

/** Firestore posts merged with the built-in ones. Callers sort by publishDate. */
export function usePosts() {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, "posts"))
      .then((snap) => setPosts([...snap.docs.map((d) => ({ ...(d.data() as BlogPost), id: d.id })), ...blogPosts]))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading };
}
