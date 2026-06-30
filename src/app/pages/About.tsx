import { useState } from "react";
import { Link } from "react-router";
import { Meta } from "../components/Meta";
import { motion } from "motion/react";

const faqs = [
  {
    question: "What does Cremsocial do?",
    answer:
      "Cremsocial is a digital marketing agency that helps local businesses get real leads through SEO, ads, social media, and Google Business Profile optimization, and helps creators turn their followers into income."
  },
  {
    question: "Who does Cremsocial work with?",
    answer:
      "We work with local businesses that want more customers and creators who want to monetize their audience. Our approach adapts to your goals, whether you run a service business, a shop, or a personal brand."
  },
  {
    question: "What makes Cremsocial different from other marketing agencies?",
    answer:
      "We focus on revenue, not vanity metrics, and we explain everything in plain English. No jargon, no confusing reports, and no unicorn promises. When you grow, we grow."
  },
  {
    question: "Do you work with businesses outside of Toronto or the GTA?",
    answer:
      "Yes. While we are based in Brampton, ON, we work with local businesses and creators across Canada and beyond."
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest first step is a free audit. We review where your marketing stands, point out the biggest opportunities, and give you a clear plan with no obligation."
  },
  {
    question: "How is Cremsocial different from other marketing companies?",
    answer:
      "Honesty, focus, and accountability. We avoid jargon and vanity metrics, report in plain English, and measure everything against the leads and revenue that matter to your business."
  },
  {
    question: "Do I have to sign a long contract?",
    answer:
      "We focus on earning your business through results rather than locking you in. Reach out and we will explain how working with us works and what fits your situation."
  },
  {
    question: "How do I know if you are getting results?",
    answer:
      "You get clear, regular reporting focused on real outcomes like leads, calls, bookings, and sales, so you always know exactly what your marketing is producing."
  }
];

const beliefs = [
  {
    title: "No Fluff, Ever",
    text:
      "We do not pad reports with vanity metrics or hide behind complicated language. If something is working, we show you. If it is not, we tell you and fix it."
  },
  {
    title: "Numbers Over Noise",
    text:
      "Likes and impressions do not pay your bills. Leads, calls, bookings, and sales do. Everything we do is measured against the metrics that actually matter."
  },
  {
    title: "Your Growth Is Our Growth",
    text:
      "We succeed when you succeed. That simple alignment shapes every decision we make. We are not here to lock you into a contract and coast."
  },
  {
    title: "Real Expertise, No Mystery",
    text:
      "You will never be left guessing about where your money goes or why we are doing what we are doing. We treat you like a partner, not a number."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Cremsocial | A Digital Marketing Agency That Tells the Truth",
    "url": "https://www.cremsocial.com/about",
    "description":
      "Cremsocial is a no fluff digital marketing agency helping local businesses get real leads and creators turn followers into income.",
    "publisher": {
      "@type": "Organization",
      "name": "Crem Social",
      "url": "https://www.cremsocial.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

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
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-6"
        >
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm font-semibold"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            ABOUT CREMSOCIAL
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-8"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            We Are the Marketing Team
          </span>{" "}
          That Tells You the Truth
        </motion.h1>

        {/* Who We Are */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            <h2
              className="text-2xl md:text-3xl text-gray-900"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Who We Are
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Cremsocial is a team of marketers who care more about your bottom line than our buzzwords. As a marketing company built for real growth, we help local businesses get leads through SEO, ads, social media, and a strong local presence, and we help creators turn their followers into actual income. We do the work that moves the needle, and we explain it in plain English so you always know what is happening and why. We are not the agency that wins awards for clever campaigns nobody understands. We are the agency that wins because your phone rings more, your bookings go up, and your revenue grows. That is the only scoreboard we care about.
          </p>
        </motion.div>

        {/* Inline CTA 1 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="mb-14 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 text-center"
        >
          <h2
            className="text-2xl md:text-3xl text-gray-900 mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Work With a Team That Gets It
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            No fluff, no mystery, just marketing that works.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-xl hover:shadow-indigo-300/50 transition-all duration-300"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Skip the BS, Get My Free Audit
            </Link>
          </motion.div>
        </motion.div>

        {/* What We Believe — 4 Belief Cards */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10">
            <h2
              className="text-3xl md:text-4xl text-gray-900 mb-2 heading-glow"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              What We Believe
            </h2>
            <p className="text-gray-700 mb-8">
              The principles that shape every decision we make for our clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={belief.title}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.25 + index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/70 hover:shadow-lg hover:shadow-indigo-200/30"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-xs text-white"
                      style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                    >
                      {index + 1}
                    </span>
                    <h3
                      className="text-xl text-gray-900"
                      style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                    >
                      {belief.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{belief.text}</p>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Who We Work With */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-violet-50/40 to-fuchsia-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full" />
            <h2
              className="text-2xl md:text-3xl text-gray-900"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Who We Work With
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We work with local businesses that want more customers and creators who want to turn their audience into a living. Whether you are a service business trying to fill your calendar, a shop trying to get found, or a creator trying to monetize your following, our approach is the same: understand your goals, build a clear plan, and bring you measurable results without the runaround.
          </p>
        </motion.div>

        {/* Inline CTA 2 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mb-16 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 text-center"
        >
          <h2
            className="text-2xl md:text-3xl text-gray-900 mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            See What Honest Marketing Looks Like
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Tired of agencies that overpromise? Let us show you a different way.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold shadow-xl hover:shadow-indigo-300/50 transition-all duration-300"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              See What We Can Do for You
            </Link>
          </motion.div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10">
            <h2
              className="text-3xl md:text-4xl text-gray-900 mb-2 heading-glow"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 mb-8">
              The questions we hear most from people who want to know if we are the right fit.
            </p>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-indigo-300/70 shadow-md shadow-indigo-100/50"
                        : "border-gray-200/70"
                    } bg-white/80`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                    >
                      <span
                        className={`text-lg leading-snug transition-colors duration-200 ${
                          isOpen
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600"
                            : "text-gray-900"
                        }`}
                        style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white rotate-45"
                            : "bg-indigo-100 text-indigo-600"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <p className="px-6 pb-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
          className="bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 rounded-2xl p-12 text-center"
        >
          <h2
            className="text-3xl md:text-4xl text-white mb-4 heading-glow"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Let Us Grow Your Business
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book a free consultation and find out how we can bring you real leads and real revenue.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </motion.section>

      </div>
    </>
  );
}
