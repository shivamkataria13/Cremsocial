import { useState } from "react";
import { Meta } from "../components/Meta";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "How long do SEO services take to show results?",
    answer: "SEO is a long term strategy, not an overnight fix. Most small businesses begin to see meaningful movement within three to six months, with results compounding the longer you invest. We share regular reports so you always know what progress is being made."
  },
  {
    question: "What is the difference between local SEO and regular SEO?",
    answer: "Local SEO services focus on getting your business found by nearby customers, including in Google Maps and the local results pack. Regular search engine optimization targets broader visibility. For most small businesses, local SEO drives the fastest and most valuable wins."
  },
  {
    question: "Are your SEO services affordable for a small business?",
    answer: "Yes. Our affordable SEO services are built to deliver a real return without wasted spend. We focus on the work that actually moves your rankings and revenue, with clear pricing and no long list of busywork."
  },
  {
    question: "Do you offer SEO for contractors and service businesses?",
    answer: "Yes. We have strong experience with SEO for contractors and local service businesses, where local SEO and a well optimized Google presence often produce quick, meaningful results."
  },
  {
    question: "What does technical SEO include?",
    answer: "Our technical SEO services cover site speed, mobile friendliness, crawlability, broken links, and the behind the scenes issues that hold rankings back. A strong technical foundation makes every other SEO effort work harder."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "No honest SEO company can guarantee a specific ranking, because search engines control the results. What we guarantee is a clear strategy, transparent reporting, and steady, measurable progress toward more visibility and more leads."
  },
  {
    question: "Can you fix SEO another agency messed up?",
    answer: "Yes. We often start by auditing past work, cleaning up technical issues, and removing anything holding you back, then rebuilding on a solid foundation."
  },
  {
    question: "Will I work with a real SEO specialist?",
    answer: "Yes. You get a dedicated SEO specialist and consultant who knows your business and focuses on the work that actually drives results, not a faceless account that sends automated reports."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "description": "Affordable SEO services that bring real leads. Cremsocial is an SEO agency offering local SEO, technical SEO, and search engine optimization services for small businesses.",
    "provider": { "@type": "Organization", "name": "Crem Social", "url": "https://www.cremsocial.com" },
    "url": "https://www.cremsocial.com/seo",
    "areaServed": "CA"
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

const seoServices = [
  {
    title: "Technical SEO Services",
    body: "Before anything else, our technical SEO services make sure your website is fast, mobile friendly, and easy for search engines to read. We fix broken links, slow pages, crawl errors, and the issues that quietly hold your rankings back. A strong foundation makes every other effort work harder.",
    accent: "from-indigo-500 to-violet-500"
  },
  {
    title: "Keyword and Market Research",
    body: "We find the exact phrases your customers are typing, including the local, high intent searches that lead to real business. We focus on terms that bring buyers, not just browsers, so your traffic actually converts.",
    accent: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "On Page and Website SEO Services",
    body: "Our website SEO services optimize your titles, headings, content, and structure so both people and search engines understand what you offer. Clear, helpful pages rank better and convert better, and we build them with both goals in mind.",
    accent: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "Local SEO Services",
    body: "For local businesses, showing up in the map pack and local results is everything. Our local SEO services optimize your local signals, citations, and on page details so you appear when nearby customers search. This is often where the fastest wins happen, especially for SEO for contractors and other service businesses.",
    accent: "from-indigo-500 to-blue-500"
  },
  {
    title: "Organic SEO and Content",
    body: "Search engines reward useful content. Our organic SEO services help you publish pages and articles that answer real customer questions, build authority in your niche, and pull in steady traffic month after month.",
    accent: "from-blue-500 to-indigo-500"
  },
  {
    title: "Monthly Reporting",
    body: "Every report focuses on rankings for the keywords that drive revenue, growth in qualified traffic, and the leads and calls that follow. No confusing dashboards, no inflated numbers — just the data that tells you what is working.",
    accent: "from-violet-500 to-indigo-500"
  }
];

const scrollToForm = () => {
  document.getElementById("seo-audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function SEOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", website: "", situation: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        title="SEO Services & Local SEO for Small Businesses | Cremsocial"
        description="Affordable SEO services that bring real leads. Cremsocial is an SEO agency offering local SEO, technical SEO, and search engine optimization services for small businesses."
        canonical="https://www.cremsocial.com/seo"
        schema={schema}
      />
      <div className="max-w-7xl mx-auto py-16 px-6">

        {/* Badge */}
        <motion.div {...fade(0)} className="flex justify-center mb-6">
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            SEO SERVICES
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-4 text-center"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            SEO That Brings You Customers,
          </span>{" "}
          Not Just Clicks
        </motion.h1>

        <motion.p
          {...fade(0.1)}
          className="text-center text-lg mb-10"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#6366f1" }}
        >
          No unicorn promises. Just steady, measurable results.
        </motion.p>

        {/* CTA 1 */}
        <motion.div
          {...fade(0.12)}
          className="mb-10 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-10 text-center text-white"
        >
          <h2
            className="text-2xl md:text-3xl mb-3 tracking-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            See Where You Rank Today
          </h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Find out exactly how your business shows up in search and what is holding you back. Get a free, no pressure SEO audit and a clear plan to fix it.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="px-8 py-3 rounded-full bg-white text-indigo-700 shadow-lg cursor-pointer"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            Skip the BS, Get My Free Audit
          </motion.button>
        </motion.div>

        {/* Intro */}
        <motion.div
          {...fade(0.15)}
          className="mb-8 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              SEO That Brings You Customers,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Not Just Clicks</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Most SEO promises sound the same. Page one rankings, more traffic, big results, no real numbers. We do it differently. As an SEO agency, our focus is one thing: getting your business in front of people who are ready to buy, and turning those searches into actual leads. Our SEO services are built for local businesses that want growth they can measure, not vanity reports. No unicorn promises, just steady results from a professional SEO company that tells you the truth.
          </p>
        </motion.div>

        {/* Why SEO Matters */}
        <motion.div
          {...fade(0.18)}
          className="mb-8 rounded-3xl border border-violet-200/60 bg-gradient-to-br from-white/80 via-violet-50/40 to-fuchsia-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why SEO Matters for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Small Businesses</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            When someone needs a plumber, a dentist, a contractor, or a coffee shop, they search. They open Google, type what they want, and pick from the first few results. If your business is not there, you are invisible to the exact people looking for you. That is the gap our search engine optimization services close. Good SEO for small businesses puts your name in front of buyers at the moment they are deciding, which is the most valuable moment there is.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The best part is that SEO keeps working. Unlike an ad that stops the second you stop paying, a strong organic presence compounds over time. Every month your foundation gets stronger, your rankings get steadier, and your cost per lead drops. For small businesses, this makes professional SEO services one of the smartest long term investments you can make.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          {...fade(0.2)}
          className="mb-10 p-8 bg-gradient-to-r from-indigo-50 via-violet-50 to-fuchsia-50 rounded-2xl border border-indigo-200/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { stat: "50+", label: "Small Businesses Served", color: "text-indigo-600" },
              { stat: "3x", label: "Average Traffic Growth", color: "text-violet-600" },
              { stat: "Top 3", label: "Google Rankings Achieved", color: "text-fuchsia-600" },
            ].map((s, i) => (
              <div key={i}>
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${s.color}`} style={{ fontFamily: "Oswald, sans-serif" }}>
                  {s.stat}
                </div>
                <p className="text-gray-700 font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our SEO Services */}
        <motion.div {...fade(0.22)} className="mb-3">
          <div className="text-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
            <h2
              className="text-3xl md:text-4xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                SEO SERVICES
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              We do not chase trends or hide behind jargon. As your SEO consultant and partner, we follow a clear process built to produce numbers that make sense.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {seoServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 + i * 0.07 }}
                className="rounded-2xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-6 group hover:border-indigo-300/60 transition-colors"
              >
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${s.accent} mb-3`} />
                <h3
                  className="text-lg text-gray-900 mb-2"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
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
              Turn Searches Into Customers
            </h3>
            <p className="text-gray-600">
              Your next customer is searching right now. Let our SEO services make sure they find you instead of your competitor.
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

        {/* Affordable SEO */}
        <motion.div
          {...fade(0.32)}
          className="mb-8 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Affordable SEO Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">That Pay Off</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We believe professional SEO services should be within reach for small businesses, not just big budgets. Our affordable SEO services are built to deliver a real return, with clear pricing and no wasted spend. You get a dedicated SEO specialist focused on the work that actually moves your rankings and your revenue, not a long list of busywork. As your SEO company, we treat your budget like our own and only invest in what produces results.
          </p>
        </motion.div>

        {/* CTA 3 */}
        <motion.div
          {...fade(0.34)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Get Affordable SEO That Works
            </h3>
            <p className="text-gray-600">
              No jargon, no vanity metrics, just professional SEO services that bring real leads. Book a call with our SEO consultant.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="flex-shrink-0 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 500 }}
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>

        {/* What You Can Expect */}
        <motion.div
          {...fade(0.36)}
          className="mb-8 rounded-3xl border border-violet-200/60 bg-gradient-to-br from-white/80 via-violet-50/40 to-fuchsia-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              What You Can{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Expect</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            We believe in honesty over hype. SEO is not instant, and anyone who promises overnight results is selling you a fantasy. What we promise instead is a clear plan, regular reporting, and steady progress you can measure. Most clients start seeing meaningful movement within the first few months, with momentum building from there.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every report focuses on rankings for the keywords that drive revenue, growth in qualified traffic, and the leads and calls that follow. You will never get a confusing dashboard with inflated numbers — just the data that tells you what is working and what is next.
          </p>
        </motion.div>

        {/* Why Choose Cremsocial */}
        <motion.div
          {...fade(0.38)}
          className="mb-8 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why Choose Cremsocial as Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">SEO Company</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We work with small businesses that are tired of SEO companies that overpromise and underdeliver. We keep things plain spoken, we show our work, and we treat your budget like it is our own. As your SEO consultant, we are motivated to bring you results that move your business forward, because when you grow, we grow. That is what makes us one of the best SEO agency options for businesses that want honesty and outcomes, not vanity metrics and mystery.
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          {...fade(0.4)}
          className="mb-10 rounded-3xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-8 md:p-10"
        >
          <p
            className="text-gray-700 leading-relaxed text-lg"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            SEO done right is one of the smartest long term investments a small business can make. It puts you in front of ready to buy customers, lowers your cost per lead over time, and builds a presence competitors find hard to match. If you are ready for SEO services that focus on real leads instead of empty clicks, Cremsocial is ready to help. Skip the BS and grab your free audit to see exactly where you stand.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          {...fade(0.42)}
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
            Straight answers to the questions we hear most often about our SEO services.
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

        {/* Audit Form */}
        <motion.div
          {...fade(0.44)}
          id="seo-audit-form"
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
                Audit Request Received
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                A real person will review your information and get back to you with a clear, honest audit of your SEO situation — no pressure, no pitch.
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
                  Get Your Free{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                    SEO Audit
                  </span>
                </h2>
                <p className="text-gray-600 text-sm">
                  Tell us about your business and we will show you exactly where your SEO stands and what to fix first. No pitch, no pressure.
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
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    name="business"
                    type="text"
                    placeholder="Business Name"
                    value={form.business}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <input
                    name="website"
                    type="url"
                    placeholder="Website URL (e.g. https://yourbusiness.com)"
                    value={form.website}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <select
                  name="situation"
                  value={form.situation}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ color: form.situation ? "#1f2937" : "#9ca3af" }}
                >
                  <option value="" disabled>What best describes your SEO situation?</option>
                  <option value="starting">Just starting — no SEO done yet</option>
                  <option value="struggling">Have tried SEO but not getting results</option>
                  <option value="past-agency">Had an agency — not happy with the outcome</option>
                  <option value="growing">Growing and want to scale up</option>
                  <option value="local">Focused on local / map pack rankings</option>
                  <option value="unsure">Not sure — just want to know where I stand</option>
                </select>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us a bit about your business and what you want to improve..."
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
                  SEND MY SEO AUDIT REQUEST
                  <Send className="w-4 h-4" />
                </motion.button>
                <p className="text-center text-gray-500 text-xs">
                  No spam. No pressure. A real person reviews every submission and gets back to you fast.
                </p>
              </form>
            </>
          )}
        </motion.div>

        {/* CTA 4 Final Banner */}
        <motion.div
          {...fade(0.46)}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-12 text-center text-white"
        >
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Ready to Rank and Grow?
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
            Join the small businesses getting found and getting leads with our SEO company. Let us build your growth engine.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="px-10 py-4 rounded-full bg-white text-indigo-700 shadow-lg text-lg cursor-pointer"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>

      </div>
    </>
  );
}
