import { useState, useRef } from "react";
import { Meta } from "../components/Meta";
import { Send, ChevronDown } from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Link } from "react-router";

const faqs = [
  {
    q: "How do I contact Cremsocial?",
    a: "You can reach us by email at shiv@cremsocial.com, by phone at +1 365-866-1643, or through the contact form on this page. A real person will get back to you promptly.",
  },
  {
    q: "Is the audit really free?",
    a: "Yes. The audit is free and comes with no obligation. We review your marketing, highlight the biggest opportunities, and give you a clear plan, whether or not you choose to work with us.",
  },
  {
    q: "What information do you need from me to start?",
    a: "To get the most out of your audit, it helps to know your business, your goals, and your current marketing. We will guide you through what we need when you reach out.",
  },
  {
    q: "Will I get a pushy sales pitch?",
    a: "No. We keep it straight and pressure free. We give you honest recommendations, and the decision to work together is entirely yours.",
  },
  {
    q: "How quickly will you respond?",
    a: "We aim to respond quickly. A real person reviews every inquiry and gets back to you, rather than an automated runaround.",
  },
  {
    q: "Do you only work with local businesses?",
    a: "We work with local businesses and creators. If you are unsure whether you are a fit, reach out and we will give you an honest answer.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Cremsocial | Get Your Free Marketing Audit",
    "url": "https://www.cremsocial.com/contact",
    "description": "Get in touch with Cremsocial for a free marketing audit or a no pressure consultation. Real leads, real results, no fluff.",
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

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 });

  return (
    <>
      <Meta
        title="Contact Cremsocial | Get Your Free Marketing Audit"
        description="Get in touch with Cremsocial for a free marketing audit or a no pressure consultation. Real leads, real results, no fluff. Reach out and let us grow your business."
        canonical="https://www.cremsocial.com/contact"
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
            CONTACT US
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-6 text-center"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          Let Us Talk About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Growing Your Business
          </span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto"
        >
          Ready to get more leads, grow your audience, or finally hand off your marketing? Reaching out is easy, and there is no pressure. Whether you want a free audit, a quick consultation, or just answers to your questions, we are here and happy to help. No pushy sales pitch, no jargon, just a straight conversation about what your business needs.
        </motion.p>

        {/* CTA 1 — top */}
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
            Get Your Free Audit Now
          </h2>
          <p className="text-gray-700 mb-6">
            See exactly where your marketing stands and what is holding you back. No cost, no obligation, no pressure.
          </p>
          <a href="#contact-form">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              Skip the BS, Get My Free Audit
            </motion.button>
          </a>
        </motion.div>

        {/* How to Reach Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 mb-8"
        >
          <h2
            className="text-2xl md:text-3xl text-gray-900 mb-4"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            How to Reach Us
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Getting in touch takes only a moment. Use whichever option is easiest for you, and a real person will get back to you.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Email", value: "shiv@cremsocial.com", href: "mailto:shiv@cremsocial.com" },
              { label: "Phone", value: "+1 365-866-1643", href: "tel:+13658661643" },
              { label: "Contact Form", value: "Fill in below — we respond quickly", href: "#contact-form" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block rounded-2xl border border-indigo-100 bg-white/60 p-5 hover:border-indigo-300 transition-colors"
              >
                <p
                  className="text-xs text-indigo-600 mb-1 uppercase tracking-wider"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  {item.label}
                </p>
                <p className="text-gray-800 text-sm font-medium">{item.value}</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* CTA 2 */}
        <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 text-center mb-14">
          <h2
            className="text-2xl text-gray-900 mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Have a Quick Question?
          </h2>
          <p className="text-gray-700 mb-6">
            Not ready for an audit yet? Reach out with any question and a real person will get back to you fast.
          </p>
          <a href="#contact-form">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              Contact Us
            </motion.button>
          </a>
        </div>

        {/* Contact form */}
        <div id="contact-form" className="p-8 md:p-12 rounded-3xl glass-card-matte shadow-2xl mb-14">
          <h2
            className="text-2xl mb-4 text-gray-900"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Tell Us{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
              What
            </span>{" "}
            You Are Dealing With
          </h2>
          <p className="text-gray-600 mb-8 text-sm italic">
            The more honest you are, the more useful our reply will be. You do not need the perfect words — just tell us what is broken and what good would look like.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-gray-800 mb-2"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  Name{" "}
                  <span className="text-gray-500 text-sm" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}>
                    — Who are we talking to?
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-800 mb-2"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  Email{" "}
                  <span className="text-gray-500 text-sm" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}>
                    — Where should we send your audit?
                  </span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                className="block text-gray-800 mb-2"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
              >
                Are you an SMB or a Creator?{" "}
                <span className="text-gray-500 text-sm" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}>
                  — Pick one so we do not waste your time with the wrong advice.
                </span>
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                <option>Small / Medium Business</option>
                <option>Creator / Influencer</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label
                className="block text-gray-800 mb-2"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
              >
                Biggest Pain Right Now{" "}
                <span className="text-gray-500 text-sm" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}>
                  — Example: "Traffic but no leads," "Leads but no sales," etc.
                </span>
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                placeholder="Do not overthink it. Just type."
              />
            </div>

            <div>
              <label
                className="block text-gray-800 mb-2"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
              >
                Budget Range{" "}
                <span className="text-gray-500 text-sm" style={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}>
                  — A rough range helps us tailor realistic recommendations.
                </span>
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                <option>Select a range...</option>
                <option>$1k - $3k / mo</option>
                <option>$3k - $5k / mo</option>
                <option>$5k - $10k / mo</option>
                <option>$10k+ / mo</option>
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              Send My Audit Request <Send size={18} />
            </motion.button>

            <p className="text-xs text-gray-500 text-center mt-4">
              No spam. No pressure. One click to unsubscribe if you ever get bored of us.
            </p>
          </form>
        </div>

        {/* What Happens Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 mb-8"
        >
          <h2
            className="text-2xl md:text-3xl text-gray-900 mb-6"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            What Happens Next
          </h2>
          <div className="space-y-4">
            {[
              { step: "01", text: "We learn about your business, your goals, and your current marketing." },
              { step: "02", text: "We review your situation and put together a clear picture of where you stand and what is possible." },
              { step: "03", text: "We walk you through it in plain language, with honest recommendations and no pressure." },
              { step: "04", text: "The decision is entirely yours. Our job is to give you clarity, whether or not you choose to work with us." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-sm"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                >
                  {item.step}
                </div>
                <p className="text-gray-700 pt-2 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA 3 */}
        <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 text-center mb-16">
          <h2
            className="text-2xl text-gray-900 mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Prefer to Talk It Through?
          </h2>
          <p className="text-gray-700 mb-6">
            Book a free, no pressure consultation and we will walk you through your options.
          </p>
          <a href="#contact-form">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              Book a Free Consultation
            </motion.button>
          </a>
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
            Let Us Show You What We Can Do
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join the businesses and creators growing with Cremsocial. Start the conversation today.
          </p>
          <a href="#contact-form">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full bg-white text-indigo-700 font-semibold text-lg shadow-xl"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              See What We Can Do for You
            </motion.button>
          </a>
        </div>

      </div>
    </>
  );
}
