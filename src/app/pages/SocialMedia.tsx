import { useState } from "react";
import { Meta } from "../components/Meta";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "Which social media platforms should my business be on?",
    answer: "The best platforms depend on where your customers spend their time and what you sell. Our social media management focuses on the channels that fit your audience and goals rather than spreading you thin across every platform."
  },
  {
    question: "How often should I post on social media?",
    answer: "Consistency matters more than volume. We build a realistic, sustainable posting schedule tied to your goals, so your presence stays steady without burning you out or producing low quality content."
  },
  {
    question: "Do you handle social media content creation?",
    answer: "Yes. Our social media content creation and content creation services include planning, writing, and scheduling. We also work with content you provide, depending on what suits your business best."
  },
  {
    question: "Can social media really bring in leads and sales?",
    answer: "Yes, when it is done with strategy. We build clear paths from your content to your offers, so your audience has an easy way to become customers rather than just followers."
  },
  {
    question: "I am a creator, not a business. Can you still help?",
    answer: "Absolutely. We help creators turn their audiences into income through offers, products, and a consistent presence that builds loyalty and trust."
  },
  {
    question: "Do you offer social media advertising as well as management?",
    answer: "Yes. We pair organic social media management with paid social media advertising, so your best content and offers reach the right people faster and produce measurable results."
  },
  {
    question: "How do you measure social media success?",
    answer: "We look at metrics tied to your goals, such as engagement quality, audience growth, and the leads or sales your content drives, rather than follower counts alone."
  },
  {
    question: "What makes Cremsocial different from other social media marketing firms?",
    answer: "We focus on income, not vanity metrics. Every part of our social media strategy is built to move your business or brand forward in ways you can actually measure."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Marketing",
    "description": "Social media marketing services that turn followers into income. Cremsocial is a social media agency offering management, content creation, and strategy that converts.",
    "provider": { "@type": "Organization", "name": "Crem Social", "url": "https://www.cremsocial.com" },
    "url": "https://www.cremsocial.com/social-media",
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

const smServices = [
  {
    title: "Strategy That Starts With Goals",
    body: "We begin with what you actually want: more customers, more bookings, more product sales, or a bigger, more loyal audience. Then our social media specialists build a content plan that works toward that goal instead of posting for the sake of posting.",
    accent: "from-indigo-500 to-violet-500"
  },
  {
    title: "Social Media Content Creation",
    body: "Our social media content creation and content creation services are built around your audience, not just your brand. That means posts that educate, entertain, and build trust, so people follow you because they want to, and stick around because you are worth following.",
    accent: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Social Media Management",
    body: "Showing up regularly is half the battle, and it is the half most businesses lose. As your social media management company, we handle planning, scheduling, and publishing across every platform, so your presence stays steady even when you are busy running everything else.",
    accent: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "Engagement and Community",
    body: "Social media is a conversation, not a billboard. We help you respond, engage, and build a community that feels connected to you, because an engaged audience is far more valuable than a passive one.",
    accent: "from-indigo-500 to-blue-500"
  },
  {
    title: "Social Media Advertising",
    body: "Organic reach only goes so far. We pair your content with smart social media advertising to put your best posts and offers in front of the right people, turning attention into measurable results faster.",
    accent: "from-blue-500 to-indigo-500"
  },
  {
    title: "Reporting and Insights",
    body: "Every report focuses on metrics tied to your goals — engagement quality, audience growth, and the leads or sales your content drives. No vanity numbers, no inflated follower counts. Just the data that tells you what is working.",
    accent: "from-violet-500 to-indigo-500"
  }
];

const scrollToForm = () => {
  document.getElementById("social-audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function SocialMediaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", type: "", platform: "", challenge: "", message: "" });

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
        title="Social Media Marketing Services & Management Agency | Cremsocial"
        description="Social media marketing services that turn followers into income. Cremsocial is a social media agency offering management, content creation, and strategy that converts."
        canonical="https://www.cremsocial.com/social-media"
        schema={schema}
      />
      <div className="max-w-7xl mx-auto py-16 px-6">

        {/* Badge */}
        <motion.div {...fade(0)} className="flex justify-center mb-6">
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            SOCIAL MEDIA MARKETING
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-4 text-center"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Social Media That Turns
          </span>{" "}
          Followers Into Income
        </motion.h1>

        <motion.p
          {...fade(0.1)}
          className="text-center text-lg mb-10"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#6366f1" }}
        >
          Followers are not the goal. Income is.
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
            Make Your Social Media Pay
          </h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Find out what is working, what is not, and how to turn your followers into customers. Get a free social media audit today.
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
              Social Media That Turns Followers Into Income
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Followers are not the goal. Income is. A huge follower count means nothing if none of those people ever buy, book, or click. As a social media marketing agency, Cremsocial treats social media like the business tool it actually is. Our social media marketing services help local businesses and creators build engaged audiences that turn into real revenue, not just numbers that look good on a profile. As a social media marketing company focused on results, we care about what your presence actually produces.
          </p>
        </motion.div>

        {/* Why Social Media Is a Business Engine */}
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
              Why Social Media Is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                Business Engine, Not a Hobby
              </span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Social media is where attention lives. Your customers scroll every day, and the brands they trust are the ones that show up consistently with content worth watching. For a local business, that means staying top of mind so you are the first call when someone needs you. For a creator, it means building an audience loyal enough to support what you sell.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The mistake most people make is treating social media as a place to post randomly and hope. That approach burns time and produces nothing. A real social media strategy connects every post to a goal, whether that is leads, sales, bookings, or building the kind of trust that makes selling easy later. That is the difference between posting and marketing.
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
              From Followers to Customers
            </h3>
            <p className="text-gray-600">
              Stop posting into the void. Let our social media agency build a strategy that turns attention into real revenue.
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
              { stat: "50+", label: "Brands Managed", color: "text-indigo-600" },
              { stat: "2x", label: "Average Engagement Growth", color: "text-violet-600" },
              { stat: "All", label: "Major Platforms", color: "text-fuchsia-600" },
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

        {/* Our Social Media Marketing Services */}
        <motion.div {...fade(0.24)} className="mb-10">
          <div className="text-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
            <h2
              className="text-3xl md:text-4xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                SOCIAL MEDIA MARKETING SERVICES
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Everything you need to turn your social presence into a real business tool.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {smServices.map((s, i) => (
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

        {/* For Creators */}
        <motion.div
          {...fade(0.38)}
          className="mb-8 rounded-3xl border border-fuchsia-200/60 bg-gradient-to-br from-white/80 via-fuchsia-50/40 to-pink-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-fuchsia-500 to-pink-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              For Creators:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">
                Turn Your Following Into a Business
              </span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            If you are a creator, your audience is your asset. We help you understand what your followers want, package your value into offers they will pay for, and build the kind of consistent presence that turns attention into income. Whether that is products, services, sponsorships, or your own brand, we help you make the leap from popular to profitable.
          </p>
        </motion.div>

        {/* CTA 3 */}
        <motion.div
          {...fade(0.4)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Creators, Let Us Help You Monetize
            </h3>
            <p className="text-gray-600">
              Your audience is an asset. Book a call and we will show you how to turn it into income.
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
          {...fade(0.42)}
          className="mb-8 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why Choose Cremsocial for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Social Media</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We are not interested in vanity metrics. As a social media marketing company and social media agency, we care about whether your social presence is actually moving your business or brand forward. We keep our advice straight, our strategy clear, and our focus on results you can measure. That focus is what sets us apart from social media agency options that chase likes instead of revenue.
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
            Social media can be one of the most powerful growth tools you have, but only when it is run with purpose. Random posting builds nothing. A real strategy builds an audience that trusts you and buys from you. If you are ready to turn your social presence into a true business engine, our social media marketing services are ready to help. Get your free audit and see what your social media could really be doing for you.
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
            Straight answers to the questions we hear most often about our social media marketing services.
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
          {...fade(0.48)}
          id="social-audit-form"
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
                A real person will review your information and get back to you with honest feedback on your social media presence — no pressure, no pitch.
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
                    Social Media Audit
                  </span>
                </h2>
                <p className="text-gray-600 text-sm">
                  Tell us about your social media situation and we will show you what is working, what is not, and what to do next.
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
                    placeholder="Business or Creator Name"
                    value={form.business}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ color: form.type ? "#1f2937" : "#9ca3af" }}
                  >
                    <option value="" disabled>Are you a business or creator?</option>
                    <option value="local-business">Local Business</option>
                    <option value="ecommerce">E-commerce / Online Brand</option>
                    <option value="creator">Creator / Influencer</option>
                    <option value="service-provider">Service Provider / Freelancer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="platform"
                    value={form.platform}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ color: form.platform ? "#1f2937" : "#9ca3af" }}
                  >
                    <option value="" disabled>Main platform(s)</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="tiktok">TikTok</option>
                    <option value="multiple">Multiple platforms</option>
                    <option value="starting">Not on social yet</option>
                  </select>
                  <select
                    name="challenge"
                    value={form.challenge}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ color: form.challenge ? "#1f2937" : "#9ca3af" }}
                  >
                    <option value="" disabled>Biggest challenge right now</option>
                    <option value="consistency">Staying consistent</option>
                    <option value="content">Running out of content ideas</option>
                    <option value="engagement">Low engagement</option>
                    <option value="monetization">Turning followers into sales</option>
                    <option value="strategy">No clear strategy</option>
                    <option value="all">All of the above</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us a bit more about your goals and what you want your social media to do for you..."
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
                  SEND MY SOCIAL MEDIA AUDIT REQUEST
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
          {...fade(0.5)}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-12 text-center text-white"
        >
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Ready to Grow With Purpose?
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
            Join the businesses and creators building real, profitable audiences with Cremsocial.
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
