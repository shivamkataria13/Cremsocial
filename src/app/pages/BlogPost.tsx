import { useParams, Link } from "react-router";
import { Meta } from "../components/Meta";
import { blogPosts } from "../data/blogData";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Users } from "lucide-react";

const categoryColors: Record<string, string> = {
  "SEO": "from-emerald-500 to-teal-500",
  "Local SEO": "from-emerald-500 to-teal-500",
  "Paid Ads": "from-blue-500 to-indigo-500",
  "Websites": "from-violet-500 to-purple-500",
  "Strategy": "from-amber-500 to-orange-500",
  "Shadow Operating": "from-fuchsia-500 to-pink-500",
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-32 px-6 text-center">
        <h1
          className="text-4xl text-gray-900 mb-6"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          Post Not Found
        </h1>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  const gradient = categoryColors[post.category] ?? "from-indigo-500 to-violet-500";

  return (
    <>
      <Meta title={post.metaTitle} description={post.metaDescription} />

      <div className="max-w-4xl mx-auto py-12 px-6">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:gap-3 transition-all"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>
        </motion.div>

        {/* Article header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          {/* Category + meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-wider bg-gradient-to-r ${gradient}`}
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-500 text-sm">
              <Clock size={13} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-gray-500 text-sm">
              <Users size={13} /> {post.targetAudience}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-3xl md:text-5xl text-gray-900 tracking-tight leading-tight heading-glow mb-8"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            {post.title}
          </h1>

          {/* Pull-quote intro */}
          <div className="relative rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 p-6 md:p-8">
            <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-gradient-to-b ${gradient}`} />
            <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed italic pl-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {post.intro}
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className={`h-0.5 flex-1 bg-gradient-to-r ${gradient} opacity-30`} />
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`} />
          <div className={`h-0.5 flex-1 bg-gradient-to-l ${gradient} opacity-30`} />
        </div>

        {/* Article body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-lg shadow-indigo-100/40 p-8 md:p-12 mb-12"
        >
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-10 text-center mb-16"
        >
          <p
            className="text-indigo-200 text-sm uppercase tracking-widest mb-3"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Done reading?
          </p>
          <h2
            className="text-3xl text-white mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Want This Done for You?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
            We will run a proper audit and build the strategy for your business — free, no pressure, no fluff.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full bg-white text-indigo-700 font-bold text-lg shadow-xl"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Get My Free Audit
            </motion.button>
          </Link>
        </motion.div>

        {/* More articles */}
        {otherPosts.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
              <h3
                className="text-xl text-gray-900"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
              >
                MORE FROM THE BLOG
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {otherPosts.map((related, i) => {
                const relGrad = categoryColors[related.category] ?? "from-indigo-500 to-violet-500";
                return (
                  <motion.div
                    key={related.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <Link to={`/blog/${related.slug}`} className="block group h-full">
                      <div className="h-full rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col">
                        <span
                          className={`inline-block self-start px-3 py-1 rounded-full text-white text-xs font-bold mb-3 bg-gradient-to-r ${relGrad}`}
                          style={{ fontFamily: "Oswald, sans-serif" }}
                        >
                          {related.category}
                        </span>
                        <h4
                          className="text-gray-900 font-bold leading-snug mb-2 group-hover:text-indigo-600 transition-colors flex-grow"
                          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                        >
                          {related.title}
                        </h4>
                        <span className="text-indigo-500 text-xs font-semibold mt-3 flex items-center gap-1">
                          Read →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </>
  );
}
