import { useState } from "react";
import { Link } from "react-router";
import { Meta } from "../components/Meta";
import { usePosts } from "../hooks/usePosts";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "What topics does the Cremsocial blog cover?",
    answer: "The blog covers SEO, paid ads, social media, and local growth strategies, with practical, plain English advice for local businesses and creators who want real results."
  },
  {
    question: "Who is the blog written for?",
    answer: "It is written for local business owners and creators who want clear, usable marketing advice, whether they do their own marketing or want to understand what their agency should be doing."
  },
  {
    question: "Is the advice beginner friendly?",
    answer: "Yes. We avoid jargon and break topics into steps that make sense, so you can apply the advice even if marketing is not your area of expertise."
  },
  {
    question: "How often is the blog updated?",
    answer: "We add new posts regularly to keep the advice current and useful, since the digital marketing landscape changes over time."
  },
  {
    question: "Can I use this advice myself instead of hiring you?",
    answer: "Absolutely. Our posts are built to be acted on. If you prefer to hand the work to a team, we are here, but the advice is genuinely useful on its own."
  },
  {
    question: "How do I get more personalized advice for my business?",
    answer: "The best way is a free audit. We review your specific situation and give you tailored recommendations rather than general tips."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Cremsocial Blog | No Fluff Digital Marketing Tips & Strategy",
    "url": "https://www.cremsocial.com/blog",
    "description": "Practical digital marketing tips with no fluff. The Cremsocial blog covers SEO, ads, social media, and local growth strategies for businesses and creators.",
    "publisher": { "@type": "Organization", "name": "Crem Social", "url": "https://www.cremsocial.com" }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  }
];

const categories = [
  {
    title: "SEO and Getting Found",
    text: "How to rank higher, get found by local customers, and turn searches into leads. We break down SEO into steps that make sense, without the technical overwhelm.",
    accent: "from-indigo-500 to-violet-500"
  },
  {
    title: "Ads That Make Money",
    text: "How to spend on ads without wasting your budget, which platforms fit which goals, and how to tell whether your ads are working. Practical guidance for real returns.",
    accent: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Social Media That Sells",
    text: "How to grow an engaged audience and turn followers into customers, whether you are a business or a creator. Strategy over random posting, every time.",
    accent: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "Local Growth Strategies",
    text: "How to dominate your local market, optimize your Google Business Profile, build reviews, and become the obvious choice for nearby customers.",
    accent: "from-indigo-500 to-blue-500"
  }
];

const scrollToForm = () => {
  document.getElementById("blog-contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function BlogPage() {
  const { posts: blogPosts } = usePosts();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/60 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400 text-sm";

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut" as const, delay }
  });

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
        <motion.div {...fade(0)} className="flex justify-center mb-6">
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            MARKETING BLOG
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-4 text-center"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          Marketing Advice{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Without the Fluff
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.1)}
          className="text-center text-lg mb-4"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#6366f1" }}
        >
          No jargon, no filler. Just the stuff that moves the needle.
        </motion.p>

        {/* Intro */}
        <motion.p
          {...fade(0.12)}
          className="text-center text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Most marketing advice online is either too vague to use or too complicated to follow. This marketing blog is neither. This is where we share practical marketing tips, plain English SEO tips, and real digital marketing tips on getting more leads, growing your audience, and making your digital marketing actually work. No jargon, no filler, just the stuff that moves the needle for local businesses and creators in Brampton and across the GTA.
        </motion.p>

        {/* CTA 1 */}
        <motion.div
          {...fade(0.14)}
          className="mb-14 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Put These Tips to Work
            </h2>
            <p className="text-gray-600">
              Reading is good, doing is better. Get a free audit and let us turn this advice into real growth for your business.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="flex-shrink-0 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            Skip the BS, Get My Free Audit
          </motion.button>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[...blogPosts].sort((a, b) => (b.publishDate ?? "").localeCompare(a.publishDate ?? "")).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 + index * 0.08 }}
            >
              <Link to={`/blog/${post.slug}`} className="block h-full group">
                <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all h-full flex flex-col hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-wider uppercase text-indigo-600">
                    <span className="bg-indigo-100 px-2 py-1 rounded">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{post.readTime}</span>
                    {post.publishDate && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 normal-case font-medium">{new Date(post.publishDate).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </>
                    )}
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

        {/* What You Will Find Here */}
        <motion.div
          {...fade(0.2)}
          className="mb-8 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              What You Will{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Find Here</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We write about the things our clients actually ask us, the real questions behind growing a business or a brand. That means honest breakdowns of what works, what does not, and what is a waste of money. If you want a marketing strategy or content marketing services advice you can read in a few minutes and put to use the same day, you are in the right place.
          </p>
        </motion.div>

        {/* Categories grid */}
        <motion.div {...fade(0.22)} className="mb-10">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 + i * 0.07 }}
                className="rounded-2xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-6 hover:border-indigo-300/60 transition-colors"
              >
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${cat.accent} mb-3`} />
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

        {/* Why Read the Cremsocial Blog */}
        <motion.div
          {...fade(0.28)}
          className="mb-8 rounded-3xl border border-violet-200/60 bg-gradient-to-br from-white/80 via-violet-50/40 to-fuchsia-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why Read the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Cremsocial Blog</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            There is no shortage of marketing content out there, but most of it is written to fill space or sell you something. We write to actually help. Our advice comes from delivering real digital marketing services every day for local businesses and creators, so it is grounded in what produces results, not what sounds good in theory. Whether you do your own marketing or just want to understand what your agency should be doing, our marketing blog gives you the straight version.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Reading about marketing is useful. Doing it is where the growth happens. Our posts are built to be acted on, with clear steps you can apply right away. And if you would rather hand the work to a team that does this all day, that is what we are here for. Either way, our goal is to make your marketing smarter.
          </p>
        </motion.div>

        {/* CTA 2 */}
        <motion.div
          {...fade(0.3)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Want Us to Handle It Instead?
            </h3>
            <p className="text-gray-600">
              No time to do the marketing yourself? Let our team take it on while you run your business.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="flex-shrink-0 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 500 }}
          >
            See What We Can Do for You
          </motion.button>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          {...fade(0.32)}
          className="mb-10 rounded-3xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-8 md:p-10"
        >
          <p
            className="text-gray-700 leading-relaxed text-lg"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            The Cremsocial blog exists to cut through the noise and give you marketing advice you can trust and use. Explore our latest posts, pick up a few ideas, and apply them to your own business or brand. And when you are ready for results without the runaround, get your free audit and let us help you grow.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          {...fade(0.34)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <h2
            className="text-2xl md:text-3xl text-gray-900 mb-2 tracking-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
              Questions
            </span>
          </h2>
          <p className="text-gray-600 mb-8 text-sm">
            Straight answers about the blog and how Cremsocial can help your business.
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${openFaq === i ? "border-indigo-300/70 shadow-md shadow-indigo-100/50" : "border-gray-200/70"} bg-white/80`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span
                    className={`text-base leading-snug transition-colors duration-200 ${openFaq === i ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600" : "text-gray-900"}`}
                    style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-indigo-500 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
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
                      <p className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-3 text-sm">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          {...fade(0.36)}
          id="blog-contact-form"
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-12 scroll-mt-24"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center mx-auto mb-5"
              >
                <CheckCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h3
                className="text-2xl text-gray-900 mb-3"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
              >
                Request Received
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                A real person will be in touch shortly with a free audit and a clear plan — no pressure, no pitch.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
                <h2
                  className="text-2xl md:text-3xl text-gray-900 tracking-tight mb-3"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                >
                  Get Marketing That{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                    Actually Works
                  </span>
                </h2>
                <p className="text-gray-600 text-sm">
                  Stop guessing and start growing. Book a free consultation with the Cremsocial team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <input
                  name="business"
                  type="text"
                  placeholder="Business or Creator Name"
                  value={form.business}
                  onChange={handleChange}
                  className={inputClass}
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your business and what you are trying to grow..."
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ resize: "none" }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-500/30 cursor-pointer"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  BOOK A FREE CONSULTATION
                  <Send className="w-4 h-4" />
                </motion.button>
                <p className="text-center text-gray-500 text-xs">
                  No spam. No pressure. A real person reviews every submission and gets back to you fast.
                </p>
              </form>
            </>
          )}
        </motion.div>

        {/* CTA 3 Final Banner */}
        <motion.div
          {...fade(0.38)}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-12 text-center text-white"
        >
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Get Marketing That Actually Works
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
            Stop guessing and start growing. Book a free consultation with the Cremsocial team.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="px-10 py-4 rounded-full bg-white text-indigo-700 shadow-lg text-lg cursor-pointer"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>

      </div>
    </>
  );
}
