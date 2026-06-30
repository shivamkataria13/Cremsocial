import { useState } from "react";
import { Meta } from "../components/Meta";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "How much should I spend on Google Ads?",
    answer: "It depends on your goals, your market, and what a customer is worth to you. Our google ads management starts by working out your numbers, then recommends a budget that can produce a profitable return rather than guessing at a figure."
  },
  {
    question: "Which is better, Google Ads or social media ads?",
    answer: "Neither is better in every case. Google advertising reaches people actively searching for what you offer, while Meta ads and TikTok ads are powerful for awareness and reaching the right audience. We recommend the mix that fits your goals."
  },
  {
    question: "How quickly will I see results from paid ads?",
    answer: "Pay per click advertising can start driving traffic and leads within days of launching. The first few weeks usually involve testing and optimizing, after which performance improves as we refine targeting and messaging."
  },
  {
    question: "What is a good return on ad spend?",
    answer: "A healthy return varies by industry and margin, but the goal is always for your ads to bring back more than they cost. Our performance marketing approach tracks this closely and adjusts campaigns to keep your return moving in the right direction."
  },
  {
    question: "Do you create the ad creative and copy?",
    answer: "Yes. We handle creative ads and copy as part of our management, building messages and offers designed to grab attention and drive action across Google, Meta, and TikTok."
  },
  {
    question: "Do you run email and SMS marketing too?",
    answer: "Yes. We pair paid ads with email marketing services and SMS marketing to nurture leads, which turns a single click into a long term customer and improves your overall return."
  },
  {
    question: "Will my ads work on a small budget?",
    answer: "Yes, with the right focus. A smaller budget means we target tightly and prioritize the highest value opportunities, so every dollar works as hard as possible."
  },
  {
    question: "What happens if my ads are not performing?",
    answer: "We watch performance closely and adjust quickly. If something is not working, we test new angles, audiences, or offers. If ads are not the right fit for your situation, we will tell you honestly."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Paid Ads Management",
    "description": "Stop wasting ad spend. Cremsocial is a Google Ads and PPC agency managing paid ads, Meta ads, TikTok ads, and search engine marketing that brings real leads.",
    "provider": { "@type": "Organization", "name": "Crem Social", "url": "https://www.cremsocial.com" },
    "url": "https://www.cremsocial.com/ads",
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

const adServices = [
  {
    title: "Strategy Before Spend",
    body: "We never launch blind. Before a single dollar goes out, we map your goals, your ideal customer, your offer, and your numbers. As your google ads specialists, we work out what a customer is worth to you, so we know exactly what we can afford to spend to get one. That math drives every decision.",
    accent: "from-indigo-500 to-violet-500"
  },
  {
    title: "The Right Platforms",
    body: "Google Ads, Meta ads, TikTok ads, Pinterest ads, and more each serve different goals. Search engine marketing reaches people actively looking for you, while social media ads build awareness and reach the right audience. We pick the platforms where your customers actually are, instead of spreading your budget thin across all of them.",
    accent: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Creative Ads and Copy That Convert",
    body: "Great targeting is wasted on a weak message. We write clear, compelling, creative ads and build offers that make people stop scrolling and take action. The goal is always the click that leads to a sale, not the click that leads nowhere.",
    accent: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "Landing Pages and Tracking",
    body: "Sending traffic to a weak page wastes spend. We make sure your ads point to pages built to convert, and we set up proper tracking so every lead and sale is measured. If we cannot measure it, we cannot improve it.",
    accent: "from-indigo-500 to-blue-500"
  },
  {
    title: "Constant Optimization",
    body: "As your ppc consultant, we watch the numbers daily, cut what is not working, and double down on what is. Ad management is not set and forget. It is a constant process of testing, learning, and improving to lower your cost per lead and grow your return.",
    accent: "from-blue-500 to-indigo-500"
  },
  {
    title: "Monthly Reporting",
    body: "Cost per lead, return on ad spend, and the actual sales your campaigns generate. No hiding behind impressions and clicks that do not pay the bills. You will always know exactly where your budget went and what it produced.",
    accent: "from-violet-500 to-indigo-500"
  }
];

const scrollToForm = () => {
  document.getElementById("ads-audit-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function AdsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", budget: "", platform: "", message: "" });

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
        title="Google Ads, Meta Ads & PPC Agency | Paid Ads Management | Cremsocial"
        description="Stop wasting ad spend. Cremsocial is a Google Ads and PPC agency managing paid ads, Meta ads, TikTok ads, and search engine marketing that brings real leads."
        canonical="https://www.cremsocial.com/ads"
        schema={schema}
      />
      <div className="max-w-7xl mx-auto py-16 px-6">

        {/* Badge */}
        <motion.div {...fade(0)} className="flex justify-center mb-6">
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            PAID ADVERTISING
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-4 text-center"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Ads That Pay
          </span>{" "}
          for Themselves
        </motion.h1>

        <motion.p
          {...fade(0.1)}
          className="text-center text-lg mb-10"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#6366f1" }}
        >
          Every dollar should bring back more than a dollar. If it does not, we change it.
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
            Stop Wasting Ad Spend
          </h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Find out where your ad budget is leaking and how to plug it. Get a free audit of your current ads, or a plan to launch the right way.
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
              Ads That Pay for Themselves
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Throwing money at ads and hoping for the best is not a strategy. Too many businesses burn through their budget on clicks that never turn into customers. As a Google Ads and PPC agency, Cremsocial builds and manages paid ads around one goal: profit. Every dollar should bring back more than a dollar. If it does not, we change it. Simple as that. Our paid ads management is built for businesses that want a real return on their ad spend, not vanity metrics and confusing reports.
          </p>
        </motion.div>

        {/* Why Paid Ads Are Worth It */}
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
              Why Paid Ads Are Worth It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">When Done Right</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            SEO builds momentum over time. Ads bring results now. When you need leads this week, not this quarter, a well run campaign of pay per click advertising puts your offer in front of the right people immediately. The catch is that ads are easy to get wrong and expensive when you do. The platforms are designed to spend your money, not to protect it. That is why expert google ads management matters so much.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Done right, paid ads give you control. You choose who sees your offer, when they see it, and how much you will pay for a customer. With the right targeting and tracking, you scale up what works and cut what does not, fast. That speed and control is exactly why performance marketing belongs in a smart marketing mix.
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
              Want Leads This Week?
            </h3>
            <p className="text-gray-600">
              Paid ads bring results fast when done right. Let our Google Ads and PPC agency build a campaign that brings customers, not just clicks.
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
              { stat: "50+", label: "Campaigns Managed", color: "text-indigo-600" },
              { stat: "3x", label: "Average Return on Ad Spend", color: "text-violet-600" },
              { stat: "Multi", label: "Platform Campaigns", color: "text-fuchsia-600" },
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

        {/* Our Paid Ads Management */}
        <motion.div {...fade(0.24)} className="mb-10">
          <div className="text-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
            <h2
              className="text-3xl md:text-4xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                PAID ADS MANAGEMENT
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              A system built to turn your ad budget into profit, not just traffic.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {adServices.map((s, i) => (
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

        {/* More Than Just Google Ads */}
        <motion.div
          {...fade(0.36)}
          className="mb-8 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              More Than Just{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Google Ads</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Paid search is powerful, but it is not the only channel that pays. We also run social media ads across Meta and TikTok, plus email marketing and SMS marketing to nurture the leads your ads bring in. Pairing google advertising with email marketing services and retargeting turns a single click into a long term customer, which is where the real return lives.
          </p>
        </motion.div>

        {/* What You Can Expect */}
        <motion.div
          {...fade(0.38)}
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
            You can expect transparency from day one. You will know what you are spending, what it is producing, and what we are doing about it. We report on the numbers that matter: cost per lead, return on ad spend, and the actual sales your campaigns generate. No hiding behind impressions and clicks that do not pay the bills.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You can also expect honesty. If your offer or budget is not ready for ads yet, we will tell you. As google ads experts and ppc consultants, our job is to get you a profitable return, not to take your money and show you pretty graphs.
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
              Know Your Numbers
            </h3>
            <p className="text-gray-600">
              Cost per lead, return on ad spend, real sales. Book a call with our google ads specialists and we will show you what your ads should be doing.
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
              Why Choose Cremsocial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">for Ads</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We treat your ad budget like our own. That means no wasted spend, no vanity metrics, and no mystery. As experienced google ads experts and a dedicated ppc agency, we are built for local businesses and creators who want straight answers and real returns. When your ads make money, you keep investing, and that is the only outcome we care about.
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
            Paid ads are one of the fastest ways to grow, but only when managed by people who care about your return as much as you do. At Cremsocial, every campaign is built to bring back more than it costs. If you are tired of guessing where your ad budget goes, let us show you what disciplined, profit focused paid ads management looks like. Get your free audit and find out what your ads could really do.
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
            Straight answers to the questions we hear most often about our paid ads services.
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
          id="ads-audit-form"
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
                A real person will review your information and get back to you with a clear, honest assessment of your ads situation — no pressure, no pitch.
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
                    Ads Audit
                  </span>
                </h2>
                <p className="text-gray-600 text-sm">
                  Tell us about your ads situation and we will show you exactly where your budget is going and what to fix. No pitch, no pressure.
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
                  placeholder="Business Name"
                  value={form.business}
                  onChange={handleChange}
                  className={inputClass}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ color: form.budget ? "#1f2937" : "#9ca3af" }}
                  >
                    <option value="" disabled>Monthly Ad Budget</option>
                    <option value="under-500">Under $500 / month</option>
                    <option value="500-1500">$500 – $1,500 / month</option>
                    <option value="1500-5000">$1,500 – $5,000 / month</option>
                    <option value="5000-plus">$5,000+ / month</option>
                    <option value="not-running">Not running ads yet</option>
                  </select>
                  <select
                    name="platform"
                    value={form.platform}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ color: form.platform ? "#1f2937" : "#9ca3af" }}
                  >
                    <option value="" disabled>Which platform(s)?</option>
                    <option value="google">Google Ads</option>
                    <option value="meta">Meta (Facebook / Instagram)</option>
                    <option value="tiktok">TikTok Ads</option>
                    <option value="multiple">Multiple platforms</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us about your business and what you want your ads to accomplish..."
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
                  SEND MY ADS AUDIT REQUEST
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
            Let Your Ads Pay for Themselves
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
            Join the businesses getting real returns from paid ads with Cremsocial. Let us put your budget to work.
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
