import { useState } from "react";
import { Meta } from "../components/Meta";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I contact Cremsocial?",
    answer: "You can reach us through the contact form on this page or by requesting a free audit directly through our site. Fill in your details and a real person will get back to you quickly."
  },
  {
    question: "Is the audit really free?",
    answer: "Yes. The free marketing audit is completely free and comes with no obligation. We review your marketing, highlight the biggest opportunities, and give you a clear plan, whether or not you choose to work with us."
  },
  {
    question: "What information do you need from me to start?",
    answer: "To get the most out of your audit, it helps to know your business, your goals, and your current marketing situation. We will guide you through what we need when you reach out."
  },
  {
    question: "Will I get a pushy sales pitch?",
    answer: "No. We keep it straight and pressure free. We give you honest recommendations about how to contact a digital marketing agency that fits your needs, and the decision to work together is entirely yours."
  },
  {
    question: "How quickly will you respond?",
    answer: "We aim to respond quickly. A real person reviews every inquiry and gets back to you, rather than an automated runaround."
  },
  {
    question: "Do you only work with local businesses?",
    answer: "We work with local businesses and creators. If you are unsure whether you are a fit, reach out and we will give you an honest answer."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Cremsocial | Get Your Free Marketing Audit",
    "description": "Get in touch with Cremsocial for a free marketing audit or a no pressure consultation. Real leads, real results, no fluff.",
    "url": "https://www.cremsocial.com/contact",
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

const steps = [
  {
    num: "01",
    title: "We Learn About You",
    body: "We find out about your business, your goals, and where your marketing stands right now.",
    accent: "from-indigo-500 to-violet-500"
  },
  {
    num: "02",
    title: "We Review Your Situation",
    body: "We put together a clear picture of what you are missing and what is possible for your business.",
    accent: "from-violet-500 to-fuchsia-500"
  },
  {
    num: "03",
    title: "We Walk You Through It",
    body: "Plain language, honest recommendations, zero pressure. Our job is to give you clarity.",
    accent: "from-fuchsia-500 to-pink-500"
  },
  {
    num: "04",
    title: "The Decision Is Yours",
    body: "Whether or not you choose to hire a marketing agency and work with us, you leave with a clearer picture than you came in with.",
    accent: "from-indigo-500 to-blue-500"
  }
];

const scrollToForm = () => {
  document.getElementById("contact-main-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", service: "", message: "" });

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
        title="Contact Cremsocial | Get Your Free Marketing Audit"
        description="Get in touch with Cremsocial for a free marketing audit or a no pressure consultation. Real leads, real results, no fluff. Reach out and let us grow your business."
        canonical="https://www.cremsocial.com/contact"
        schema={schema}
      />
      <div className="max-w-7xl mx-auto py-16 px-6">

        {/* Badge */}
        <motion.div {...fade(0)} className="flex justify-center mb-6">
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            CONTACT US
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-4 text-center"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          Let Us Talk About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Growing Your Business
          </span>
        </motion.h1>

        <motion.p
          {...fade(0.1)}
          className="text-center text-lg mb-10"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#6366f1" }}
        >
          No pushy sales pitch. No jargon. Just a straight conversation.
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
            Get Your Free Audit Now
          </h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            See exactly where your marketing stands and what is holding you back. No cost, no obligation, no pressure. The best way to contact a digital marketing agency that tells you the truth.
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
              Let Us Talk About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Growing Your Business</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Ready to get more leads, grow your audience, or finally hand off your marketing? Reaching out is easy, and there is no pressure. Whether you want a free marketing audit, a quick marketing consultation, or just answers to your questions, we are here and happy to help. No pushy sales pitch, no jargon, just a straight conversation about what your business needs and what our digital marketing services can do for it.
          </p>
        </motion.div>

        {/* Get Your Free Audit */}
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
              Get Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Free Audit</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The best first step is our free marketing audit. We review where your digital marketing stands today, point out the biggest opportunities you are missing, and give you a clear plan in plain English. There is no obligation to work with us afterward. Plenty of businesses use the audit just to understand where they are, and that is completely fine. If it makes sense to work together, we will tell you. If it does not, we will tell you that too.
          </p>
        </motion.div>

        {/* How to Reach Us */}
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
              How to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Reach Us</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Getting in touch takes only a moment. Use whichever option is easiest for you, and a real person will get back to you. If you prefer, you can request your free audit directly through the form below and we will take it from there.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Email", value: "hello@cremsocial.com", accent: "from-indigo-500 to-violet-500" },
              { label: "Phone", value: "Coming soon", accent: "from-violet-500 to-fuchsia-500" },
              { label: "Contact Form", value: "Fill in the form below and we will respond quickly.", accent: "from-fuchsia-500 to-pink-500" },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-indigo-100/60 bg-white/70 p-5">
                <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${item.accent} mb-2`} />
                <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}>{item.label}</p>
                <p className="text-gray-800 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA 2 */}
        <motion.div
          {...fade(0.22)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Have a Quick Question?
            </h3>
            <p className="text-gray-600">
              Not ready for an audit yet? Reach out with any question and a real person will get back to you fast.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="flex-shrink-0 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 whitespace-nowrap cursor-pointer"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 500 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* What Happens Next */}
        <motion.div {...fade(0.24)} className="mb-10">
          <div className="text-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
            <h2
              className="text-3xl md:text-4xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              WHAT HAPPENS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                NEXT
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Once you reach out, here is exactly how it works — simple, transparent, and pressure free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 + i * 0.07 }}
                className="rounded-2xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-6 hover:border-indigo-300/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${s.accent} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold" style={{ fontFamily: "Oswald, sans-serif" }}>{s.num}</span>
                  </div>
                  <h3
                    className="text-lg text-gray-900"
                    style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA 3 */}
        <motion.div
          {...fade(0.38)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Prefer to Talk It Through?
            </h3>
            <p className="text-gray-600">
              Book a free, no pressure marketing consultation and we will walk you through your options.
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

        {/* Who Should Reach Out */}
        <motion.div
          {...fade(0.4)}
          className="mb-8 rounded-3xl border border-fuchsia-200/60 bg-gradient-to-br from-white/80 via-fuchsia-50/40 to-pink-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-fuchsia-500 to-pink-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Who Should{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Reach Out</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            If you are a local business that wants more customers, or a creator who wants to turn followers into income, we would love to hear from you. We work best with people who want straight answers and real results rather than empty promises. If that sounds like you, get in touch and let us see what we can do together. Whether you are looking to hire a marketing agency for the first time or switch to a team that actually delivers, the conversation starts here.
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          {...fade(0.42)}
          className="mb-10 rounded-3xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-8 md:p-10"
        >
          <p
            className="text-gray-700 leading-relaxed text-lg"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            Growing your business should not start with a confusing sales call. It should start with clarity. Reach out to Cremsocial for a free audit or a no pressure conversation, and we will show you exactly where the opportunities are. No unicorn promises, just a clear path to more leads and more revenue. Skip the BS and get your free audit today.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          {...fade(0.44)}
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
            Quick answers about getting in touch and what to expect from us.
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

        {/* Main Contact Form */}
        <motion.div
          {...fade(0.46)}
          id="contact-main-form"
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
                We Have Got Your Message
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                A real person will review your information and get back to you shortly. No automated runaround, just a straight conversation about what we can do for your business.
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
                    Marketing Audit
                  </span>
                </h2>
                <p className="text-gray-600 text-sm">
                  Tell us about your business and we will show you where your biggest opportunities are — no cost, no obligation, no pressure.
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
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ color: form.service ? "#1f2937" : "#9ca3af" }}
                >
                  <option value="" disabled>What are you most interested in?</option>
                  <option value="seo">SEO and Getting Found</option>
                  <option value="ads">Paid Ads Management</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="gbp">Google Business Profile</option>
                  <option value="shadow-ops">Shadow Ops — Done For You Marketing</option>
                  <option value="general">General Audit or Consultation</option>
                </select>
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
                  SEND MY FREE AUDIT REQUEST
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
          {...fade(0.48)}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-12 text-center text-white"
        >
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Let Us Show You What We Can Do
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
            Join the businesses and creators growing with Cremsocial. Start the conversation today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="px-10 py-4 rounded-full bg-white text-indigo-700 shadow-lg text-lg cursor-pointer"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            See What We Can Do for You
          </motion.button>
        </motion.div>

      </div>
    </>
  );
}
