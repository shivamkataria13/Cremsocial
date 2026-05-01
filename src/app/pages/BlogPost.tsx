import { useParams, Link } from "react-router";
import { Meta } from "../components/Meta";
import { blogPosts } from "../data/blogData";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-8">Post Not Found</h1>
        <Link to="/blog" className="text-indigo-600 underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <Meta
        title={post.metaTitle}
        description={post.metaDescription}
      />
      <div className="max-w-3xl mx-auto py-16 px-6">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 text-xs font-bold tracking-wider uppercase text-indigo-600">
            <span className="bg-indigo-100 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{post.readTime}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">{post.targetAudience}</span>
          </div>

          <h1 
            className="text-3xl md:text-5xl lg:text-5xl text-gray-900 tracking-tight leading-tight heading-glow mb-8"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
          >
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-indigo-500 pl-6 text-left max-w-2xl mx-auto bg-gray-50/50 p-6 rounded-r-lg">
            {post.intro}
          </p>
        </div>

        <div className="prose prose-lg prose-indigo mx-auto text-gray-800">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <h3 className="text-2xl mb-4" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>Done reading but want this done for you?</h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We'll run a proper audit or set up the strategy for you — free, no fluff.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg shadow-xl hover:scale-105 transition-transform" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>
              Get My Free Audit
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
