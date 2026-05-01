import { Link } from "react-router";
import { Meta } from "../components/Meta";
import { blogPosts } from "../data/blogData";
import { motion } from "motion/react";

export default function BlogPage() {
  return (
    <>
      <Meta
        title="Cremsocial Blog | No-BS Tips on SEO, Ads & Creator Monetization"
        description="Read simple, practical breakdowns on SEO, paid ads, social media, websites, and creator monetization. No fluff, just tactics and examples you can actually use."
      />
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-6"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">No-BS</span> Marketing Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Short, useful posts on SEO, ads, social, websites, and creator monetization. No fluff, no filler — just things you can actually use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block h-full group">
                <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all h-full flex flex-col hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-wider uppercase text-indigo-600">
                    <span className="bg-indigo-100 px-2 py-1 rounded">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-6 line-clamp-3 flex-grow">
                    {post.intro}
                  </p>
                  
                  <div className="text-indigo-600 font-bold flex items-center gap-2 text-sm mt-auto">
                    Read Article 
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}