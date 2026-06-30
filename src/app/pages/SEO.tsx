import { useState } from "react";
import { Link } from "react-router";
import { Meta } from "../components/Meta";
import { motion } from "motion/react";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "description": "Affordable SEO services that bring real leads. Cremsocial is an SEO agency offering local SEO, technical SEO, and search engine optimization services for small businesses.",
    "provider": { "@type": "Organization", "name": "Crem Social", "url": "https://www.cremsocial.com" },
    "url": "https://www.cremsocial.com/seo",
    "areaServed": "CA"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long do SEO services take to show results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO is a long term strategy, not an overnight fix. Most small businesses begin to see meaningful movement within three to six months, with results compounding the longer you invest. We share regular reports so you always know what progress is being made."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between local SEO and regular SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local SEO services focus on getting your business found by nearby customers, including in Google Maps and the local results pack. Regular search engine optimization targets broader visibility. For most small businesses, local SEO drives the fastest and most valuable wins."
        }
      },
      {
        "@type": "Question",
        "name": "Are your SEO services affordable for a small business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our affordable SEO services are built to deliver a real return without wasted spend. We focus on the work that actually moves your rankings and revenue, with clear pricing and no long list of busywork."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer SEO for contractors and service businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We have strong experience with SEO for contractors and local service businesses, where local SEO and a well optimized Google presence often produce quick, meaningful results."
        }
      },
      {
        "@type": "Question",
        "name": "What does technical SEO include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our technical SEO services cover site speed, mobile friendliness, crawlability, broken links, and the behind the scenes issues that hold rankings back. A strong technical foundation makes every other SEO effort work harder."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee first page rankings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No honest SEO company can guarantee a specific ranking, because search engines control the results. What we guarantee is a clear strategy, transparent reporting, and steady, measurable progress toward more visibility and more leads."
        }
      },
      {
        "@type": "Question",
        "name": "Can you fix SEO another agency messed up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We often start by auditing past work, cleaning up technical issues, and removing anything holding you back, then rebuilding on a solid foundation."
        }
      },
      {
        "@type": "Question",
        "name": "Will I work with a real SEO specialist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You get a dedicated SEO specialist and consultant who knows your business and focuses on the work that actually drives results, not a faceless account that sends automated reports."
        }
      }
    ]
  }
];

const faqs = [
  {
    question: "How long do SEO services take to show results?",
    answer: "SEO is a long term strategy, not an overnight fix. Most small businesses begin to see meaningful movement within three to six months, with results compounding the longer you invest. We share regular reports so you always know what progress is being made."
  },
  {
    question: "What is the difference between local SEO and regular SEO?",
    answer: "Local SEO services focus on getting your business found by nearby customers, including in Google Maps and the local results pack. Regular search engine optimization targets broader visibility. For most small businesses, local SEO drives the fastest and most valuable wins."
  },
  {
    question: "Are your SEO services affordable for a small business?",
    answer: "Yes. Our affordable SEO services are built to deliver a real return without wasted spend. We focus on the work that actually moves your rankings and revenue, with clear pricing and no long list of busywork."
  },
  {
    question: "Do you offer SEO for contractors and service businesses?",
    answer: "Yes. We have strong experience with SEO for contractors and local service businesses, where local SEO and a well optimized Google presence often produce quick, meaningful results."
  },
  {
    question: "What does technical SEO include?",
    answer: "Our technical SEO services cover site speed, mobile friendliness, crawlability, broken links, and the behind the scenes issues that hold rankings back. A strong technical foundation makes every other SEO effort work harder."
  },
  {
    question: "Do you guarantee first page rankings?",
    answer: "No honest SEO company can guarantee a specific ranking, because search engines control the results. What we guarantee is a clear strategy, transparent reporting, and steady, measurable progress toward more visibility and more leads."
  },
  {
    question: "Can you fix SEO another agency messed up?",
    answer: "Yes. We often start by auditing past work, cleaning up technical issues, and removing anything holding you back, then rebuilding on a solid foundation."
  },
  {
    question: "Will I work with a real SEO specialist?",
    answer: "Yes. You get a dedicated SEO specialist and consultant who knows your business and focuses on the work that actually drives results, not a faceless account that sends automated reports."
  }
];

const whatYouGet = [
  {
    title: "Technical SEO",
    description: "We fix site speed, mobile issues, broken links, and crawl errors that quietly hold your rankings back."
  },
  {
    title: "Keyword Research",
    description: "We find the exact phrases your customers type, focusing on local, high-intent searches that lead to real business."
  },
  {
    title: "On-Page Optimization",
    description: "Titles, headings, content, and structure fine-tuned so both people and search engines understand what you offer."
  },
  {
    title: "Local SEO",
    description: "We optimize your local signals and citations so you appear when nearby customers search for what you do."
  },
  {
    title: "Content & Link Building",
    description: "Useful pages and quality backlinks that build your authority and pull in steady traffic month after month."
  },
  {
    title: "Monthly Reporting",
    description: "Clear reports every month focused on rankings, qualified traffic, and the leads that follow."
  }
];

export default function SEOPage() {
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
        title="SEO Services & Local SEO for Small Businesses | Cremsocial"
        description="Affordable SEO services that bring real leads. Cremsocial is an SEO agency offering local SEO, technical SEO, and search engine optimization services for small businesses."
        canonical="https://www.cremsocial.com/seo"
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
            SEO SERVICES
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
            SEO That Brings You Customers,
          </span>{" "}
          Not Just Clicks
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
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Most businesses are invisible on Google. We change that. At Cremsocial, we build SEO strategies that bring the right people to your website — not just traffic, but customers who are already looking for what you offer.
          </p>
        </motion.div>

        {/* Section: Why SEO Matters */}
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
              Why SEO Matters for Small Businesses
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            When someone needs a plumber, a dentist, a contractor, or a coffee shop, they search. They open Google, type what they want, and pick from the first few results. If your business is not there, you are invisible to the exact people looking for you. That is the gap our SEO services close. Good search engine optimization puts your name in front of buyers at the moment they are deciding, which is the most valuable moment there is. The best part is that SEO keeps working. Unlike an ad that stops the second you stop paying, a strong organic presence compounds over time. Every month your foundation gets stronger, your rankings get steadier, and your cost per lead drops.
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
            See Where You Rank Today
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Find out exactly how your business shows up in search and what is holding you back.
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
                Clients Served
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
                Average Traffic Growth
              </p>
            </div>
            <div>
              <div
                className="text-3xl md:text-4xl font-bold text-fuchsia-600 mb-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Top 3
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: "Oswald, sans-serif" }}>
                Google Rankings
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
              A complete SEO system built to grow rankings and convert traffic into customers.
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
            Turn Searches Into Customers
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Your next customer is searching right now. Let our SEO services make sure they find you instead of your competitor.
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

        {/* Section: Our Process */}
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
              Our Process
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            We do not chase trends or hide behind jargon. As your SEO consultant and partner, we follow a clear process built to produce numbers that make sense. Before anything else, our technical SEO services make sure your website is fast, mobile friendly, and easy for search engines to read. Then we find the exact phrases your customers are typing, including the local, high intent searches that lead to real business. For local businesses, showing up in the map pack and local results is everything. Our local SEO services optimize your local signals, citations, and on page details so you appear when nearby customers search.
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
              Straight answers to the questions we hear most often about our SEO services.
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
            Ready to Rank and Grow?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join the small businesses getting found and getting leads with our SEO company. Let us build your growth engine.
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
