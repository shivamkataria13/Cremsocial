import { Meta } from "../components/Meta";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Business Profile Optimization",
    "description": "Get found on Google Maps with expert Google Business Profile optimization. Cremsocial offers local SEO services and GMB setup that bring calls, visits, and customers.",
    "provider": { "@type": "Organization", "name": "Cremsocial", "url": "https://www.cremsocial.com" },
    "url": "https://www.cremsocial.com/google-business",
    "areaServed": "CA"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Google Business Profile and why do I need one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is your free business listing that appears in Google Search and Maps, showing your hours, reviews, photos, and location. It is often the first thing local customers see, which makes Google Business Profile optimization essential for getting found and chosen."
        }
      },
      {
        "@type": "Question",
        "name": "How do I rank higher in the Google Maps results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Maps SEO depends on factors like the completeness and consistency of your information, your categories, your reviews, and your activity. Our GMB SEO services optimize all of these to help you appear higher in local searches."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer Google Business Profile setup for a new business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We handle full Google Business Profile setup for new businesses and cleanup for existing ones, making sure every detail is accurate and optimized from the start."
        }
      },
      {
        "@type": "Question",
        "name": "How important are reviews for my profile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Very important. Reviews influence both how customers perceive you and how you rank locally. A steady flow of genuine reviews, handled well, is one of the strongest things you can do for your profile."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from regular local SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Business Profile management focuses on your listing, while broader local SEO services cover your whole local presence. As a local SEO company, we connect both so your website and profile reinforce each other."
        }
      },
      {
        "@type": "Question",
        "name": "Can you fix a profile that is suspended or has wrong information?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We help correct inaccurate details, clean up inconsistencies, and work through profile issues so your listing is accurate and trusted again."
        }
      },
      {
        "@type": "Question",
        "name": "How long until I see results from profile optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local visibility builds steadily over weeks and months. Some improvements show up quickly, while the biggest gains come from consistency, especially with reviews and regular activity."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a website to benefit from a Google Business Profile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Many customers call or visit directly from your profile without ever opening a website. That said, a profile and a website work even better together."
        }
      }
    ]
  }
];

export default function GoogleBusinessProfilePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const whatYouGet = [
    {
      title: "Profile Setup and Cleanup",
      description:
        "We make sure every detail is complete and correct: name, categories, services, hours, areas, and contact info.",
    },
    {
      title: "Google Maps SEO",
      description:
        "We optimize the signals that influence where you appear in the local map pack so more customers find you first.",
    },
    {
      title: "Photos and Posts",
      description:
        "We keep your profile active with fresh photos and regular posts that build trust and drive more clicks.",
    },
    {
      title: "Review Strategy",
      description:
        "We help you build a steady flow of genuine reviews and respond to them properly to boost trust and ranking.",
    },
    {
      title: "Monthly Reporting",
      description:
        "We track the calls, direction requests, and clicks your profile generates so you can see the real impact.",
    },
  ];

  const faqs = [
    {
      question: "What is a Google Business Profile and why do I need one?",
      answer:
        "It is your free business listing that appears in Google Search and Maps, showing your hours, reviews, photos, and location. It is often the first thing local customers see, which makes Google Business Profile optimization essential for getting found and chosen.",
    },
    {
      question: "How do I rank higher in the Google Maps results?",
      answer:
        "Google Maps SEO depends on factors like the completeness and consistency of your information, your categories, your reviews, and your activity. Our GMB SEO services optimize all of these to help you appear higher in local searches.",
    },
    {
      question: "Do you offer Google Business Profile setup for a new business?",
      answer:
        "Yes. We handle full Google Business Profile setup for new businesses and cleanup for existing ones, making sure every detail is accurate and optimized from the start.",
    },
    {
      question: "How important are reviews for my profile?",
      answer:
        "Very important. Reviews influence both how customers perceive you and how you rank locally. A steady flow of genuine reviews, handled well, is one of the strongest things you can do for your profile.",
    },
    {
      question: "How is this different from regular local SEO services?",
      answer:
        "Google Business Profile management focuses on your listing, while broader local SEO services cover your whole local presence. As a local SEO company, we connect both so your website and profile reinforce each other.",
    },
    {
      question: "Can you fix a profile that is suspended or has wrong information?",
      answer:
        "Yes. We help correct inaccurate details, clean up inconsistencies, and work through profile issues so your listing is accurate and trusted again.",
    },
    {
      question: "How long until I see results from profile optimization?",
      answer:
        "Local visibility builds steadily over weeks and months. Some improvements show up quickly, while the biggest gains come from consistency, especially with reviews and regular activity.",
    },
    {
      question: "Do I need a website to benefit from a Google Business Profile?",
      answer:
        "No. Many customers call or visit directly from your profile without ever opening a website. That said, a profile and a website work even better together.",
    },
  ];

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
            GOOGLE BUSINESS PROFILE
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-8"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Get Found
          </span>{" "}
          When Local Customers Search
        </motion.h1>

        {/* Stats Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
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
                Profiles Optimized
              </p>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold text-violet-600 mb-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                2x
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>
                Average Profile Views
              </p>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold text-fuchsia-600 mb-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                More
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>
                Calls, Walk-ins, Customers
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
              A complete local visibility setup that helps customers find and choose you first.
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

        {/* CTA 1 */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="mb-16 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 text-center"
        >
          <h2
            className="text-3xl md:text-4xl text-gray-900 mb-4 heading-glow"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            See How Your Profile Stacks Up
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Find out how your Google Business Profile compares to local competitors and what is costing you customers.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold hover:opacity-90 transition-all duration-300 shadow-xl shadow-indigo-300/40"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Skip the BS, Get My Free Audit
            </motion.button>
          </Link>
        </motion.section>

        {/* Body Section 1: Why Your Google Business Profile Matters */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10">
            <h2
              className="text-3xl md:text-4xl text-gray-900 mb-6 heading-glow"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why Your Google Business Profile{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                Matters So Much
              </span>
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Think about how you find a local business. You search, you glance at the map results, you check the reviews and photos, and you pick. That entire decision often happens before anyone visits a website. Your Google Business Profile is the storefront for that moment, and if it is incomplete, outdated, or poorly optimized, you lose customers without ever knowing it. A strong profile does the opposite. Done with proper Google Maps SEO, it builds instant trust, answers the questions customers care about, and pushes you up in the local map results where the most valuable searches happen. For many local businesses, an optimized profile is the single highest return marketing asset they own, and it is often the most neglected.
            </p>
          </div>
        </motion.section>

        {/* Body Section 2: Part of a Bigger Local SEO Picture */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10">
            <h2
              className="text-3xl md:text-4xl text-gray-900 mb-6 heading-glow"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Part of a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                Bigger Local SEO Picture
              </span>
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Your profile works best alongside the rest of your local presence. As a local SEO agency, we connect your Google Business Profile management with broader local SEO services, so your website, your listings, and your profile all reinforce each other. This combined approach is what makes a local SEO company worth hiring, and it is how small businesses dominate their local market.
            </p>
          </div>
        </motion.section>

        {/* CTA 2 */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.55 }}
          className="mb-16 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10 text-center"
        >
          <h2
            className="text-3xl md:text-4xl text-gray-900 mb-4 heading-glow"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Show Up When It Counts
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Be the business local customers find first. Let our Google Maps SEO bring you more calls and visits.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold hover:opacity-90 transition-all duration-300 shadow-xl shadow-indigo-300/40"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              See What We Can Do for You
            </motion.button>
          </Link>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10">
            <h2
              className="text-3xl md:text-4xl text-gray-900 mb-8 heading-glow"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200/70 bg-white/80 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200 hover:bg-indigo-50/50"
                  >
                    <span
                      className="text-lg text-gray-900 pr-4"
                      style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-bold transition-transform duration-300 ${
                        openFaq === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.65 }}
          className="bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 rounded-2xl p-12 text-center"
        >
          <h2
            className="text-3xl md:text-4xl text-white mb-4 heading-glow"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Turn Your Profile Into Leads
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Join the local businesses getting found and getting calls with our local SEO services.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.section>

      </div>
    </>
  );
}
