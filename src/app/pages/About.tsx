import { useState } from "react";
import { Meta } from "../components/Meta";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "What does Cremsocial do?",
    answer: "Cremsocial is a digital marketing agency that helps local businesses get real leads through SEO, ads, social media, and Google Business Profile optimization, and helps creators turn their followers into income."
  },
  {
    question: "Who does Cremsocial work with?",
    answer: "We work with local businesses that want more customers and creators who want to monetize their audience. Our approach adapts to your goals, whether you run a service business, a shop, or a personal brand."
  },
  {
    question: "What makes Cremsocial different from other marketing companies?",
    answer: "Honesty, focus, and accountability. We avoid jargon and vanity metrics, report in plain English, and measure everything against the leads and revenue that matter to your business."
  },
  {
    question: "Do I have to sign a long contract?",
    answer: "We focus on earning your business through results rather than locking you in. Reach out and we will explain how working with us works and what fits your situation."
  },
  {
    question: "How do I know if you are getting results?",
    answer: "You get clear, regular reporting focused on real outcomes like leads, calls, bookings, and sales, so you always know exactly what your marketing is producing."
  },
  {
    question: "How do I get started with Cremsocial?",
    answer: "The easiest first step is a free audit. We review where your marketing stands, point out the biggest opportunities, and give you a clear plan with no obligation."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crem Social",
    "url": "https://www.cremsocial.com",
    "description": "Cremsocial is a no fluff digital marketing agency helping local businesses get real leads and creators turn followers into income.",
    "sameAs": []
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

const beliefs = [
  {
    title: "No Fluff, Ever",
    body: "We do not pad reports with vanity metrics or hide behind complicated language. If something is working, we show you. If it is not, we tell you and fix it. Straight talk is the foundation of every client relationship we have.",
    accent: "from-indigo-500 to-violet-500"
  },
  {
    title: "Numbers Over Noise",
    body: "Likes and impressions do not pay your bills. Leads, calls, bookings, and sales do. Everything we do is measured against the metrics that actually matter to your business, not the ones that just look impressive.",
    accent: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Your Growth Is Our Growth",
    body: "We succeed when you succeed. That simple alignment shapes every decision we make. We are not here to lock you into a contract and coast. We are here to earn our place by bringing you results, month after month.",
    accent: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "Real Expertise, No Mystery",
    body: "As your marketing consultant and partner, we are happy to show our reasoning. You will never be left guessing about where your money goes or why we are doing what we are doing. We treat you like a partner, not a number.",
    accent: "from-indigo-500 to-blue-500"
  }
];

const scrollToForm = () => {
  document.getElementById("about-contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function AboutPage() {
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
        title="About Cremsocial | A Digital Marketing Agency That Tells the Truth"
        description="Cremsocial is a no fluff digital marketing agency helping local businesses get real leads and creators turn followers into income. No unicorn promises, just results."
        canonical="https://www.cremsocial.com/about"
        schema={schema}
      />
      <div className="max-w-7xl mx-auto py-16 px-6">

        {/* Badge */}
        <motion.div {...fade(0)} className="flex justify-center mb-6">
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            ABOUT CREMSOCIAL
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-4 text-center"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          We Are the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Marketing Team
          </span>{" "}
          That Tells You the Truth
        </motion.h1>

        <motion.p
          {...fade(0.1)}
          className="text-center text-lg mb-10"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#6366f1" }}
        >
          No unicorn promises. Just numbers that make sense.
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
            Work With a Team That Gets It
          </h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            No fluff, no mystery, just marketing that works. See where your business stands with a free audit.
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
              We Are the Marketing Team That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Tells You the Truth</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The marketing world is full of big promises and small results. Agencies hide behind jargon, send confusing reports, and disappear when you ask hard questions. We built Cremsocial to be the opposite. We are a digital marketing agency for local businesses and creators who are done with the fluff and just want results they can measure. No unicorn promises, just numbers that make sense.
          </p>
        </motion.div>

        {/* Who We Are */}
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
              Who{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">We Are</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cremsocial is a team of marketers who care more about your bottom line than our buzzwords. As a marketing company built for real growth, we help local businesses get leads through SEO, ads, social media, and a strong local presence, and we help creators turn their followers into actual income. We do the work that moves the needle, and we explain it in plain English so you always know what is happening and why.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are not the agency that wins awards for clever campaigns nobody understands. We are the agency that wins because your phone rings more, your bookings go up, and your revenue grows. That is the only scoreboard we care about.
          </p>
        </motion.div>

        {/* What We Believe */}
        <motion.div {...fade(0.22)} className="mb-10">
          <div className="text-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
            <h2
              className="text-3xl md:text-4xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              WHAT WE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                BELIEVE
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              The principles that shape how we work and why clients trust us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {beliefs.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 + i * 0.07 }}
                className="rounded-2xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-6 hover:border-indigo-300/60 transition-colors"
              >
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${b.accent} mb-3`} />
                <h3
                  className="text-lg text-gray-900 mb-2"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                >
                  {b.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{b.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA 2 */}
        <motion.div
          {...fade(0.38)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              See What Honest Marketing Looks Like
            </h3>
            <p className="text-gray-600">
              Tired of agencies that overpromise? Let us show you a different way.
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

        {/* Who We Work With */}
        <motion.div
          {...fade(0.4)}
          className="mb-8 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Who We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Work With</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We work with local businesses that want more customers and creators who want to turn their audience into a living. Whether you are a service business trying to fill your calendar, a shop trying to get found, or a creator trying to monetize your following, our approach is the same: understand your goals, build a clear plan, and bring you measurable results without the runaround.
          </p>
        </motion.div>

        {/* Why We May Be the Best */}
        <motion.div
          {...fade(0.42)}
          className="mb-8 rounded-3xl border border-fuchsia-200/60 bg-gradient-to-br from-white/80 via-fuchsia-50/40 to-pink-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-fuchsia-500 to-pink-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why We May Be the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Best Marketing Agency for You</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Plenty of agencies can run an ad or post on social media. What sets us apart is honesty, focus, and accountability. We tell you the truth even when it is not what you want to hear. We focus relentlessly on outcomes that affect your revenue. And we hold ourselves accountable with clear reporting you can actually understand. For business owners and creators who have been burned before, that combination is rare — and it is exactly what we built Cremsocial to deliver. Whether you need a marketing consultant for a specific problem or a full marketing consulting partner for long term growth, we have done it.
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          {...fade(0.44)}
          className="mb-10 rounded-3xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-8 md:p-10"
        >
          <p
            className="text-gray-700 leading-relaxed text-lg"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            Marketing does not have to be confusing, and it definitely should not be full of empty promises. At Cremsocial, we keep it honest, measurable, and focused on the only thing that matters: growing your business. If you are ready to work with a team that tells you the truth and brings real results, we would love to talk. Skip the BS and get your free audit to see where we can take you.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          {...fade(0.46)}
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
            Straight answers to the questions people ask most about Cremsocial and how we work.
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
          {...fade(0.48)}
          id="about-contact-form"
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
                Message Received
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                A real person will be in touch shortly. We keep it honest from the very first conversation.
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
                  Let Us{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                    Grow Your Business
                  </span>
                </h2>
                <p className="text-gray-600 text-sm">
                  Book a free consultation and find out how we can bring you real leads and real revenue.
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
                  placeholder="Tell us about your business and what you want your marketing to do for you..."
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
          {...fade(0.5)}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-12 text-center text-white"
        >
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Ready to Work With a Team That Gets It?
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
            Honest marketing, clear results, and a team that treats your business like their own.
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
