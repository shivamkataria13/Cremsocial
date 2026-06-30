import { useState } from "react";
import { Meta } from "../components/Meta";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "What is a Google Business Profile and why do I need one?",
    answer: "It is your free business listing that appears in Google Search and Maps, showing your hours, reviews, photos, and location. It is often the first thing local customers see, which makes Google Business Profile optimization essential for getting found and chosen."
  },
  {
    question: "How do I rank higher in the Google Maps results?",
    answer: "Google maps seo depends on factors like the completeness and consistency of your information, your categories, your reviews, and your activity. Our gmb seo services optimize all of these to help you appear higher in local searches."
  },
  {
    question: "Do you offer Google Business Profile setup for a new business?",
    answer: "Yes. We handle full Google Business Profile setup for new businesses and cleanup for existing ones, making sure every detail is accurate and optimized from the start."
  },
  {
    question: "How important are reviews for my profile?",
    answer: "Very important. Reviews influence both how customers perceive you and how you rank locally. A steady flow of genuine reviews, handled well, is one of the strongest things you can do for your profile."
  },
  {
    question: "How is this different from regular local SEO services?",
    answer: "Google Business Profile management focuses on your listing, while broader local SEO services cover your whole local presence. As a local SEO company, we connect both so your website and profile reinforce each other."
  },
  {
    question: "Can you fix a profile that is suspended or has wrong information?",
    answer: "Yes. We help correct inaccurate details, clean up inconsistencies, and work through profile issues so your listing is accurate and trusted again."
  },
  {
    question: "How long until I see results from profile optimization?",
    answer: "Local visibility builds steadily over weeks and months. Some improvements show up quickly, while the biggest gains come from consistency, especially with reviews and regular activity."
  },
  {
    question: "Do I need a website to benefit from a Google Business Profile?",
    answer: "No. Many customers call or visit directly from your profile without ever opening a website. That said, a profile and a website work even better together."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Business Profile Optimization",
    "description": "Get found on Google Maps with expert Google Business Profile optimization. Cremsocial offers local SEO services and GMB setup that bring calls, visits, and customers.",
    "provider": { "@type": "Organization", "name": "Crem Social", "url": "https://www.cremsocial.com" },
    "url": "https://www.cremsocial.com/google-business",
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

const gbpServices = [
  {
    title: "Profile Setup and Cleanup",
    body: "Whether you need a fresh Google Business Profile setup or a cleanup of an existing one, we make sure every detail is filled in correctly: your name, categories, services, hours, service areas, and contact information. Search engines reward complete, consistent profiles, and customers trust them more.",
    accent: "from-indigo-500 to-violet-500"
  },
  {
    title: "Local Ranking and Google Maps SEO",
    body: "Our google my business seo and gmb seo services optimize the signals that influence where you appear in the local map pack, including categories, descriptions, and the consistency of your information across the web. The higher you rank in local search engine optimization, the more customers find you first.",
    accent: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Photos and Posts That Convert",
    body: "Profiles with strong photos and regular posts get more attention and more clicks. We help you present your business in its best light and keep the profile active, which signals to Google that you are open and engaged.",
    accent: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "Review Strategy and Management",
    body: "Reviews are one of the biggest factors in whether someone chooses you. We help you build a steady flow of genuine reviews and respond to them properly, which boosts both trust and ranking.",
    accent: "from-indigo-500 to-blue-500"
  },
  {
    title: "Part of a Bigger Local SEO Picture",
    body: "Your profile works best alongside the rest of your local presence. As a local SEO agency, we connect your Google Business Profile management with broader local SEO services, so your website, your listings, and your profile all reinforce each other. This combined approach is how small businesses dominate their local market.",
    accent: "from-blue-500 to-indigo-500"
  },
  {
    title: "Tracking the Results",
    body: "We track the calls, direction requests, and clicks your profile generates, so you can see the real impact. This is about leads and customers, not just a tidy looking listing.",
    accent: "from-violet-500 to-indigo-500"
  }
];

const scrollToForm = () => {
  document.getElementById("gbp-audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function GoogleBusinessProfilePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", address: "", situation: "", message: "" });

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
        title="Google Business Profile Optimization & Management | Cremsocial"
        description="Get found on Google Maps with expert Google Business Profile optimization. Cremsocial offers local SEO services and GMB setup that bring calls, visits, and customers."
        canonical="https://www.cremsocial.com/google-business"
        schema={schema}
      />
      <div className="max-w-7xl mx-auto py-16 px-6">

        {/* Badge */}
        <motion.div {...fade(0)} className="flex justify-center mb-6">
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            GOOGLE BUSINESS PROFILE
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-4 text-center"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Get Found
          </span>{" "}
          When Local Customers Search
        </motion.h1>

        <motion.p
          {...fade(0.1)}
          className="text-center text-lg mb-10"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#6366f1" }}
        >
          More calls, more visits, more customers.
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
            See How Your Profile Stacks Up
          </h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Find out how your Google Business Profile compares to your local competitors and what is costing you customers. Get a free audit today.
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
              Get Found When{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Local Customers Search</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            When someone nearby searches for what you offer, your Google Business Profile is often the first thing they see, before they ever reach your website. It shows your reviews, your hours, your photos, and your location, and it decides whether they call you or your competitor. With expert Google Business Profile optimization, Cremsocial turns that profile into one of your strongest sources of local leads. No fluff, just more calls, more visits, and more customers.
          </p>
        </motion.div>

        {/* Why Your Profile Matters */}
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
              Why Your Google Business Profile{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Matters So Much</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Think about how you find a local business. You search, you glance at the map results, you check the reviews and photos, and you pick. That entire decision often happens before anyone visits a website. Your Google Business Profile is the storefront for that moment, and if it is incomplete, outdated, or poorly optimized, you lose customers without ever knowing it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A strong profile does the opposite. Done with proper google maps seo, it builds instant trust, answers the questions customers care about, and pushes you up in the local map results where the most valuable searches happen. For many local businesses, an optimized profile is the single highest return marketing asset they own, and it is often the most neglected.
          </p>
        </motion.div>

        {/* CTA 2 */}
        <motion.div
          {...fade(0.2)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Show Up When It Counts
            </h3>
            <p className="text-gray-600">
              Be the business local customers find first. Let our google maps seo bring you more calls and visits.
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

        {/* Stats Bar */}
        <motion.div
          {...fade(0.22)}
          className="mb-10 p-8 bg-gradient-to-r from-indigo-50 via-violet-50 to-fuchsia-50 rounded-2xl border border-indigo-200/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { stat: "50+", label: "Profiles Optimized", color: "text-indigo-600" },
              { stat: "2x", label: "Average Profile Views", color: "text-violet-600" },
              { stat: "More", label: "Calls, Walk-ins, Customers", color: "text-fuchsia-600" },
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

        {/* Our GBP Management Services */}
        <motion.div {...fade(0.24)} className="mb-10">
          <div className="text-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
            <h2
              className="text-3xl md:text-4xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                GOOGLE BUSINESS PROFILE MANAGEMENT
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Everything we do is focused on one outcome: putting your business in front of ready-to-buy local customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {gbpServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.26 + i * 0.07 }}
                className="rounded-2xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-6 hover:border-indigo-300/60 transition-colors"
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

        {/* What You Can Expect */}
        <motion.div
          {...fade(0.42)}
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
            You can expect a profile that works for you instead of just sitting there. As we optimize, you should see more visibility in local searches, more interactions with your listing, and more of the calls and visits that turn into business. We report on the actions that matter, so you always know what your profile is producing.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are also honest about timelines, since some of the biggest gains come from consistency over time, especially with reviews and regular activity. As a local SEO agency, we keep your profile active, accurate, and optimized — not just set it and forget it.
          </p>
        </motion.div>

        {/* CTA 3 */}
        <motion.div
          {...fade(0.44)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              More Reviews, More Customers
            </h3>
            <p className="text-gray-600">
              A steady flow of genuine reviews builds trust and rankings. Book a call and we will set up a review strategy that works.
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

        {/* Why Choose Cremsocial */}
        <motion.div
          {...fade(0.46)}
          className="mb-8 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why Choose Cremsocial as Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Local SEO Company</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We treat your profile like the lead generating asset it is. We keep it accurate, active, and optimized, and we focus on the outcomes that matter to a local business: calls, visits, and customers. No vanity metrics, no mystery, just a profile that quietly brings in business while you focus on running it. As a local SEO company that connects profile management to your broader local presence, we make sure everything works together.
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          {...fade(0.48)}
          className="mb-10 rounded-3xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-8 md:p-10"
        >
          <p
            className="text-gray-700 leading-relaxed text-lg"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            Your Google Business Profile may be the most valuable marketing tool you are not using to its full potential. Optimized properly, it puts you in front of nearby customers at the exact moment they are ready to choose, and it keeps working day after day. If you want to turn your profile into a steady source of local leads, our Google Business Profile optimization can help. Get your free audit and see how much more your profile could be doing.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          {...fade(0.5)}
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
            Straight answers to the questions we hear most often about Google Business Profile optimization and management.
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
          {...fade(0.52)}
          id="gbp-audit-form"
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
                A real person will review your profile and get back to you with an honest audit of your local presence — no pressure, no pitch.
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
                    Profile Audit
                  </span>
                </h2>
                <p className="text-gray-600 text-sm">
                  Tell us about your business and we will show you exactly what your Google Business Profile is missing and what to fix first.
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
                    name="address"
                    type="text"
                    placeholder="City / Service Area"
                    value={form.address}
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
                  <option value="" disabled>What best describes your profile situation?</option>
                  <option value="no-profile">No Google Business Profile yet</option>
                  <option value="incomplete">Profile exists but incomplete</option>
                  <option value="few-reviews">Profile set up but very few reviews</option>
                  <option value="not-ranking">Not showing up in local map results</option>
                  <option value="suspended">Profile suspended or has issues</option>
                  <option value="optimize">Profile is live — want to improve rankings</option>
                </select>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us a bit about your business, your location, and what you want more of — calls, walk-ins, bookings..."
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
                  SEND MY PROFILE AUDIT REQUEST
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
          {...fade(0.54)}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-12 text-center text-white"
        >
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Turn Your Profile Into Leads
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
            Join the local businesses getting found and getting calls with our local SEO services. Let us make your profile work harder.
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
