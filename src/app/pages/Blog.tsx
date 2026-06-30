import { useState, useRef } from "react";
import { Link } from "react-router";
import { Meta } from "../components/Meta";
import { blogPosts } from "../data/blogData";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What topics does the Cremsocial blog cover?",
    a: "The blog covers SEO, paid ads, social media, and local growth strategies, with practical, plain English advice for local businesses and creators who want real results.",
  },
  {
    q: "Who is the blog written for?",
    a: "It is written for local business owners and creators who want clear, usable marketing advice, whether they do their own marketing or want to understand what their agency should be doing.",
  },
  {
    q: "Is the advice beginner friendly?",
    a: "Yes. We avoid jargon and break topics into steps that make sense, so you can apply the advice even if marketing is not your area of expertise.",
  },
  {
    q: "How often is the blog updated?",
    a: "We add new posts regularly to keep the advice current and useful, since the digital marketing landscape changes over time.",
  },
  {
    q: "Can I use this advice myself instead of hiring you?",
    a: "Absolutely. Our posts are built to be acted on. If you prefer to hand the work to a team, we are here, but the advice is genuinely useful on its own.",
  },
  {
    q: "How do I get more personalized advice for my business?",
    a: "The best way is a free audit. We review your specific situation and give you tailored recommendations rather than general tips.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Cremsocial Blog | No Fluff Digital Marketing Tips & Strategy",
    "url": "https://www.cremsocial.com/blog",
    "description": "Practical digital marketing tips with no fluff. The Cremsocial blog covers SEO, ads, social media, and local growth strategies for businesses and creators.",
    "publisher": {
      "@type": "Organization",
      "name": "Crem Social",
      "url": "https://www.cremsocial.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  },
];

const categories = [
  {
    title: "SEO and Getting Found",
    text: "How to rank higher, get found by local customers, and turn searches into leads. We break down SEO into steps that make sense, without the technical overwhelm.",
  },
  {
    title: "Ads That Make Money",
    text: "How to spend on ads without wasting your budget, which platforms fit which goals, and how to tell whether your ads are working. Practical guidance for real returns.",
  },
  {
    title: "Social Media That Sells",
    text: "How to grow an engaged audience and turn followers into customers, whether you are a business or a creator. Strategy over random posting, every time.",
  },
  {
    title: "Local Growth Strategies",
    text: "How to dominate your local market, optimize your Google Business Profile, build reviews, and become the obvious choice for nearby customers.",
  },
];

export default function BlogPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 });
  const catRef = useRef(null);
  const catInView = useInView(catRef, { once: true, amount: 0.2 });

  return (
    <>
      <Meta
        title="Cremsocial Blog | No Fluff Digital Marketing Tips & Strategy"
        description="Practical digital marketing tips with no fluff. The Cremsocial blog covers SEO, ads, social media, and local growth strategies for businesses and creators."
        canonical="https://www.cremsocial.com/blog"
        schema={schema}
      />
      <div className="max-w-7xl mx-auto py-16 px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm font-semibold"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            MARKETING BLOG
          </div>
        </motion.div>

        {/* H1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Marketing Advice{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
              Without the Fluff
            </span>
          </h1>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Most marketing advice online is either too vague to use or too complicated to follow. The Cremsocial blog is neither. This is where we share practical, plain English advice on getting more leads, growing your audience, and making your digital marketing actually work. No jargon, no filler, just the stuff that moves the needle for local businesses and creators.
          </p>
        </motion.div>

        {/* CTA 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 text-center mb-14"
        >
          <h2
            className="text-2xl text-gray-900 mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Put These Tips to Work
          </h2>
          <p className="text-gray-700 mb-6">
            Reading is good, doing is better. Get a free audit and let us turn this advice into real growth for your business.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              Skip the BS, Get My Free Audit
            </motion.button>
          </Link>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-6 line-clamp-3 flex-grow">{post.intro}</p>
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

        {/* What You Will Find Here + categories */}
        <motion.div
          ref={catRef}
          initial={{ opacity: 0, y: 30 }}
          animate={catInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 mb-10">
            <h2
              className="text-2xl md:text-3xl text-gray-900 mb-4"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              What You Will Find Here
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We write about the things our clients actually ask us, the real questions behind growing a business or a brand. That means honest breakdowns of what works, what does not, and what is a waste of money. If you want a marketing strategy you can read in a few minutes and put to use the same day, you are in the right place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={catInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur-sm p-6"
              >
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full mb-3" />
                <h3
                  className="text-lg text-gray-900 mb-2"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                >
                  {cat.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{cat.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Read section + CTA 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={catInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 mb-8"
        >
          <h2
            className="text-2xl md:text-3xl text-gray-900 mb-4"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Why Read the Cremsocial Blog
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            There is no shortage of marketing content out there, but most of it is written to fill space or sell you something. We write to actually help. Our advice comes from doing this work every day for real businesses and creators, so it is grounded in what produces results, not what sounds good in theory. Whether you do your own marketing or just want to understand what your agency should be doing, our blog gives you the straight version.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Reading about marketing is useful. Doing it is where the growth happens. Our posts are built to be acted on, with clear steps you can apply right away. And if you would rather hand the work to a team that does this all day, that is what we are here for. Either way, our goal is to make your marketing smarter.
          </p>
        </motion.div>

        {/* CTA 2 */}
        <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 text-center mb-16">
          <h2
            className="text-2xl text-gray-900 mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Want Us to Handle It Instead?
          </h2>
          <p className="text-gray-700 mb-6">
            No time to do the marketing yourself? Let our team take it on while you run your business.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              See What We Can Do for You
            </motion.button>
          </Link>
        </div>

        {/* FAQ */}
        <div ref={faqRef} className="mb-16">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
            <h2
              className="text-3xl md:text-4xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              FREQUENTLY ASKED{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                QUESTIONS
              </span>
            </h2>
          </motion.div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    className="text-gray-900 text-base pr-4"
                    style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-10 text-center">
          <h2
            className="text-3xl text-white mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Get Marketing That Actually Works
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Stop guessing and start growing. Book a free consultation with the Cremsocial team.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full bg-white text-indigo-700 font-semibold text-lg shadow-xl"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Book a Free Consultation
            </motion.button>
          </Link>
        </div>

      </div>
    </>
  );
}
