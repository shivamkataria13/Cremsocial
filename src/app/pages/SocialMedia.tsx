import { Meta } from "../components/Meta";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Marketing",
    "description": "Social media marketing services that turn followers into income. Cremsocial is a social media agency offering management, content creation, and strategy that converts.",
    "provider": { "@type": "Organization", "name": "Cremsocial", "url": "https://www.cremsocial.com" },
    "url": "https://www.cremsocial.com/social-media",
    "areaServed": "CA"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which social media platforms should my business be on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best platforms depend on where your customers spend their time and what you sell. Our social media management focuses on the channels that fit your audience and goals rather than spreading you thin across every platform."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I post on social media?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consistency matters more than volume. We build a realistic, sustainable posting schedule tied to your goals, so your presence stays steady without burning you out or producing low quality content."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle social media content creation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our social media content creation and content creation services include planning, writing, and scheduling. We also work with content you provide, depending on what suits your business best."
        }
      },
      {
        "@type": "Question",
        "name": "Can social media really bring in leads and sales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, when it is done with strategy. We build clear paths from your content to your offers, so your audience has an easy way to become customers rather than just followers."
        }
      },
      {
        "@type": "Question",
        "name": "I am a creator, not a business. Can you still help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We help creators turn their audiences into income through offers, products, and a consistent presence that builds loyalty and trust."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer social media advertising as well as management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We pair organic social media management with paid social media advertising, so your best content and offers reach the right people faster and produce measurable results."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure social media success?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We look at metrics tied to your goals, such as engagement quality, audience growth, and the leads or sales your content drives, rather than follower counts alone."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Cremsocial different from other social media marketing firms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on income, not vanity metrics. Every part of our social media strategy is built to move your business or brand forward in ways you can actually measure."
        }
      }
    ]
  }
];

export default function SocialMediaPage() {
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
      title: "Social Media Strategy",
      description:
        "A clear plan built around your brand, your audience, and your goals, so every post has a purpose.",
    },
    {
      title: "Content Creation",
      description:
        "Scroll-stopping posts, captions, and visuals created specifically for your brand and audience.",
    },
    {
      title: "Posting and Scheduling",
      description:
        "Consistent publishing across all your platforms so your audience always hears from you.",
    },
    {
      title: "Community Engagement",
      description:
        "We handle your comments and messages so your audience feels valued and your community grows.",
    },
    {
      title: "Social Media Advertising",
      description:
        "We pair organic content with paid social to put your best offers in front of the right people faster.",
    },
  ];

  const faqs = [
    {
      question: "Which social media platforms should my business be on?",
      answer:
        "The best platforms depend on where your customers spend their time and what you sell. Our social media management focuses on the channels that fit your audience and goals rather than spreading you thin across every platform.",
    },
    {
      question: "How often should I post on social media?",
      answer:
        "Consistency matters more than volume. We build a realistic, sustainable posting schedule tied to your goals, so your presence stays steady without burning you out or producing low quality content.",
    },
    {
      question: "Do you handle social media content creation?",
      answer:
        "Yes. Our social media content creation and content creation services include planning, writing, and scheduling. We also work with content you provide, depending on what suits your business best.",
    },
    {
      question: "Can social media really bring in leads and sales?",
      answer:
        "Yes, when it is done with strategy. We build clear paths from your content to your offers, so your audience has an easy way to become customers rather than just followers.",
    },
    {
      question: "I am a creator, not a business. Can you still help?",
      answer:
        "Absolutely. We help creators turn their audiences into income through offers, products, and a consistent presence that builds loyalty and trust.",
    },
    {
      question: "Do you offer social media advertising as well as management?",
      answer:
        "Yes. We pair organic social media management with paid social media advertising, so your best content and offers reach the right people faster and produce measurable results.",
    },
    {
      question: "How do you measure social media success?",
      answer:
        "We look at metrics tied to your goals, such as engagement quality, audience growth, and the leads or sales your content drives, rather than follower counts alone.",
    },
    {
      question: "What makes Cremsocial different from other social media marketing firms?",
      answer:
        "We focus on income, not vanity metrics. Every part of our social media strategy is built to move your business or brand forward in ways you can actually measure.",
    },
  ];

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
            SOCIAL MEDIA MARKETING
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
            Social Media That Turns
          </span>{" "}
          Followers Into Income
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
                Brands Managed
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
                Average Engagement Growth
              </p>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold text-fuchsia-600 mb-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                All
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>
                Major Platforms
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
              A complete social media system built to grow your audience and convert attention into revenue.
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
            Make Your Social Media Pay
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Find out what is working, what is not, and how to turn your followers into customers.
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

        {/* Body Section 1: Why Social Media Is a Business Engine */}
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
              Why Social Media Is a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                Business Engine
              </span>
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Social media is where attention lives. Your customers scroll every day, and the brands they trust are the ones that show up consistently with content worth watching. For a local business, that means staying top of mind so you are the first call when someone needs you. For a creator, it means building an audience loyal enough to support what you sell. The mistake most people make is treating social media as a place to post randomly and hope. That approach burns time and produces nothing. A real social media strategy connects every post to a goal, whether that is leads, sales, bookings, or building the kind of trust that makes selling easy later.
            </p>
          </div>
        </motion.section>

        {/* Body Section 2: For Creators */}
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
              For Creators:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                Turn Your Following Into a Business
              </span>
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              If you are a creator, your audience is your asset. We help you understand what your followers want, package your value into offers they will pay for, and build the kind of consistent presence that turns attention into income. Whether that is products, services, sponsorships, or your own brand, we help you make the leap from popular to profitable.
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
            From Followers to Customers
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Stop posting into the void. Let our social media agency build a strategy that turns attention into real revenue.
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
            Ready to Grow With Purpose?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Join the businesses and creators building real, profitable audiences with Cremsocial.
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
