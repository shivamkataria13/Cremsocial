import { useState } from "react";
import { Link } from "react-router";
import { Meta } from "../components/Meta";
import { motion } from "motion/react";

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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much should I spend on Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your goals, your market, and what a customer is worth to you. Our Google Ads management starts by working out your numbers, then recommends a budget that can produce a profitable return rather than guessing at a figure."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better, Google Ads or social media ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neither is better in every case. Google advertising reaches people actively searching for what you offer, while Meta ads and TikTok ads are powerful for awareness and reaching the right audience. We recommend the mix that fits your goals."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly will I see results from paid ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pay per click advertising can start driving traffic and leads within days of launching. The first few weeks usually involve testing and optimizing, after which performance improves as we refine targeting and messaging."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good return on ad spend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A healthy return varies by industry and margin, but the goal is always for your ads to bring back more than they cost. Our performance marketing approach tracks this closely and adjusts campaigns to keep your return moving in the right direction."
        }
      },
      {
        "@type": "Question",
        "name": "Do you create the ad creative and copy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We handle creative ads and copy as part of our management, building messages and offers designed to grab attention and drive action across Google, Meta, and TikTok."
        }
      },
      {
        "@type": "Question",
        "name": "Do you run email and SMS marketing too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We pair paid ads with email marketing services and SMS marketing to nurture leads, which turns a single click into a long term customer and improves your overall return."
        }
      },
      {
        "@type": "Question",
        "name": "Will my ads work on a small budget?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, with the right focus. A smaller budget means we target tightly and prioritize the highest value opportunities, so every dollar works as hard as possible."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my ads are not performing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We watch performance closely and adjust quickly. If something is not working, we test new angles, audiences, or offers. If ads are not the right fit for your situation, we will tell you honestly."
        }
      }
    ]
  }
];

const faqs = [
  {
    question: "How much should I spend on Google Ads?",
    answer: "It depends on your goals, your market, and what a customer is worth to you. Our Google Ads management starts by working out your numbers, then recommends a budget that can produce a profitable return rather than guessing at a figure."
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

const whatYouGet = [
  {
    title: "Strategy Before Spend",
    description: "We map your goals, ideal customer, and numbers before a single dollar goes out, so every campaign is built to profit."
  },
  {
    title: "The Right Platforms",
    description: "Google Ads, Meta, TikTok, and more. We pick where your customers actually are instead of spreading your budget thin."
  },
  {
    title: "Creative Ads and Copy",
    description: "Clear, compelling messages and offers that make people stop scrolling and take action."
  },
  {
    title: "Landing Pages and Tracking",
    description: "We make sure your ads point to pages built to convert and track every lead and sale so we can improve constantly."
  },
  {
    title: "Constant Optimization",
    description: "Daily monitoring, cutting what is not working, and scaling what is, to lower your cost per lead and grow your return."
  },
  {
    title: "Monthly Reporting",
    description: "Cost per lead, return on ad spend, and actual sales. No hiding behind clicks that do not pay the bills."
  }
];

export default function AdsPage() {
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
        title="Google Ads, Meta Ads & PPC Agency | Paid Ads Management | Cremsocial"
        description="Stop wasting ad spend. Cremsocial is a Google Ads and PPC agency managing paid ads, Meta ads, TikTok ads, and search engine marketing that brings real leads."
        canonical="https://www.cremsocial.com/ads"
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
            PAID ADVERTISING
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
            Ads That Pay
          </span>{" "}
          for Themselves
        </motion.h1>

        {/* Introduction */}
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
              Introduction
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Running ads without a strategy is just burning money. At Cremsocial, we create and manage paid ad campaigns that target the right audience, drive real results, and make every dollar count.
          </p>
        </motion.div>

        {/* Section: Why Paid Ads Are Worth It */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            <h2
              className="text-2xl md:text-3xl text-gray-900"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why Paid Ads Are Worth It When Done Right
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            SEO builds momentum over time. Ads bring results now. When you need leads this week, not this quarter, a well run campaign of pay per click advertising puts your offer in front of the right people immediately. The catch is that ads are easy to get wrong and expensive when you do. The platforms are designed to spend your money, not to protect it. That is why expert Google Ads management matters so much. Done right, paid ads give you control. You choose who sees your offer, when they see it, and how much you will pay for a customer. With the right targeting and tracking, you scale up what works and cut what does not, fast.
          </p>
        </motion.div>

        {/* Inline CTA 1 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.18 }}
          className="mb-14 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 text-center"
        >
          <h2
            className="text-2xl md:text-3xl text-gray-900 mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Stop Wasting Ad Spend
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Find out where your ad budget is leaking and how to plug it. Get a free audit of your current ads.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white font-bold shadow-xl hover:shadow-indigo-300/50 transition-all duration-300"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Skip the BS, Get My Free Audit
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mb-16 p-8 bg-gradient-to-r from-indigo-50 via-violet-50 to-fuchsia-50 rounded-2xl border border-indigo-200/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div
                className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                50+
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>
                Campaigns Managed
              </p>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold text-violet-600 mb-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                3x
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>
                Average Return on Ad Spend
              </p>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold text-fuchsia-600 mb-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Multi
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>
                Platform Campaigns
              </p>
            </div>
          </div>
        </motion.div>

        {/* What You Get */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10">
            <h2
              className="text-3xl md:text-4xl text-gray-900 mb-2 heading-glow"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              What You Get
            </h2>
            <p className="text-gray-700 mb-8">
              A paid ads system focused on profitable growth, not vanity clicks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whatYouGet.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.35 + index * 0.05 }}
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
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Inline CTA 2 */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="mb-16 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 text-center"
        >
          <h2
            className="text-2xl md:text-3xl text-gray-900 mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Want Leads This Week?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Paid ads bring results fast when done right. Let our Google Ads and PPC agency build a campaign that brings customers, not just clicks.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white font-bold shadow-xl hover:shadow-indigo-300/50 transition-all duration-300"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              See What We Can Do for You
            </Link>
          </motion.div>
        </motion.div>

        {/* Section: More Than Just Google Ads */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mb-16 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-full" />
            <h2
              className="text-2xl md:text-3xl text-gray-900"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              More Than Just Google Ads
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Paid search is powerful, but it is not the only channel that pays. We also run social media ads across Meta and TikTok, plus email marketing and SMS marketing to nurture the leads your ads bring in. Pairing Google advertising with email marketing services and retargeting turns a single click into a long term customer, which is where the real return lives. You can expect transparency from day one. You will know what you are spending, what it is producing, and what we are doing about it. We report on the numbers that matter: cost per lead, return on ad spend, and the actual sales your campaigns generate.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
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
              Straight answers to the questions we hear most often about our paid ads services.
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
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 rounded-2xl p-12 text-center"
        >
          <h2
            className="text-3xl md:text-4xl text-white mb-4 heading-glow"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Let Your Ads Pay for Themselves
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join the businesses getting real returns from paid ads with Cremsocial. Let us put your budget to work.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.section>

      </div>
    </>
  );
}
