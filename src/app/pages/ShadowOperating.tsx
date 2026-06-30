import { useState } from "react";
import { Link } from "react-router";
import { Meta } from "../components/Meta";
import { motion } from "motion/react";

const faqs = [
  {
    question: "What exactly is Shadow Ops?",
    answer:
      "Shadow Ops is our done for you marketing service. We act as your behind the scenes growth team, coordinating SEO, ads, social media, and your local presence so you do not have to manage any of it yourself."
  },
  {
    question: "How is this different from hiring an agency for one service?",
    answer:
      "Instead of a single service, you get a coordinated operation across all your digital marketing, run by one accountable team. This avoids the gaps and finger pointing that come from juggling separate vendors."
  },
  {
    question: "Will I still know what is going on?",
    answer:
      "Yes. Quiet does not mean secret. You get clear, regular reporting on what we are doing and what it is producing, and you stay in control of the overall direction."
  },
  {
    question: "Is Shadow Ops cheaper than hiring my own team?",
    answer:
      "For most businesses, yes. You get senior level marketing run as a coordinated operation at a fraction of the cost of recruiting, hiring, and managing an in house team."
  },
  {
    question: "Who is a good fit for Shadow Ops?",
    answer:
      "Established local businesses that want to grow but do not have the time or desire to manage marketing themselves, and owners who would rather invest in expertise than learn it all from scratch."
  },
  {
    question: "How involved do I need to be?",
    answer:
      "As little as you want, beyond approving direction. We handle execution so you can focus on running your business, while keeping you informed along the way."
  },
  {
    question: "Can I start with one service and move to Shadow Ops later?",
    answer:
      "Yes. Many clients start with a single service and expand to Shadow Ops once they see results and want everything handled under one roof."
  }
];

const whatYouGet = [
  {
    title: "Coordinated Marketing Strategy",
    description:
      "One plan where SEO, paid ads, social media, and your local presence all pull in the same direction, tailored to your business."
  },
  {
    title: "Hands-Off Execution",
    description:
      "We handle the doing. Content, campaigns, profiles, and reports, all without you managing the details."
  },
  {
    title: "Clear Reporting",
    description:
      "Regular, straightforward reporting on what we are doing and what it is producing. Quiet does not mean secret."
  },
  {
    title: "One Point of Contact",
    description:
      "No chasing multiple vendors. One team that knows your business, owns your growth, and is accountable for results."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shadow Ops — Done For You Marketing",
    "description":
      "Shadow Ops is full digital marketing handled behind the scenes by Cremsocial. SEO, ads, and social media run as one.",
    "provider": {
      "@type": "Organization",
      "name": "Crem Social",
      "url": "https://www.cremsocial.com"
    },
    "url": "https://www.cremsocial.com/shadow-operating",
    "areaServed": "CA"
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

export default function ShadowOperatingPage() {
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
        title="Shadow Ops | Done For You Marketing Behind the Scenes | Cremsocial"
        description="Shadow Ops is full digital marketing handled behind the scenes by Cremsocial. SEO, ads, and social media run as one. You run your business, we run the growth."
        canonical="https://www.cremsocial.com/shadow-operating"
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
            SHADOW OPS
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
            Shadow Ops:
          </span>{" "}
          We Run the Growth, You Run the Business
        </motion.h1>

        {/* What Shadow Ops Actually Means */}
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
              What Shadow Ops Actually Means
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            The name says it. We do the work in the shadows so you do not have to think about it. Instead of juggling separate freelancers for SEO, ads, social media, and your Google profile, you get one marketing agency coordinating all of it toward a single goal: more leads and more revenue. You stay in control and informed, but you are freed from the day to day grind of managing marketing yourself. This is built for owners and operators who are stretched thin. You already wear too many hats. Marketing should not be one more thing keeping you up at night. With Shadow Ops, it becomes someone else's full time job, handled by people who actually know what they are doing.
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
            Hand Off Your Marketing
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Stop juggling it all. Let our team run your growth behind the scenes.
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

        {/* What You Get */}
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
              What You Get
            </h2>
            <p className="text-gray-700 mb-8">
              A fully coordinated marketing operation running in the background while you focus on your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {whatYouGet.map((item, index) => (
                <motion.div
                  key={item.title}
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

        {/* Who Shadow Ops Is For */}
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
              Who Shadow Ops Is For
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Shadow Ops is ideal for established local businesses that are ready to grow but do not have the time or desire to manage marketing in house. It suits owners who would rather invest in expertise than spend nights learning ad platforms. It also works well for businesses tired of piecing together freelancers and dealing with the gaps, the finger pointing, and the lack of a single accountable team. Hiring a full marketing team is expensive and slow. Managing a pile of freelancers is chaotic. Shadow Ops gives you the best of both: senior level digital marketing run as a coordinated operation, at a fraction of the cost of building it yourself.
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
            A Full Marketing Team Without the Overhead
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Senior level digital marketing, coordinated and done for you, at a fraction of the cost of hiring.
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
              Straight answers about how Shadow Ops works and whether it is right for you.
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
            Ready to Get Your Time Back?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Book a call and we will show you exactly how Shadow Ops takes marketing off your plate for good.
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
