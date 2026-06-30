import { useState } from "react";
import { Meta } from "../components/Meta";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "What exactly is Shadow Ops?",
    answer: "Shadow Ops is our done for you marketing service. We act as your behind the scenes growth team, coordinating SEO, ads, social media, and your local presence so you do not have to manage any of it yourself."
  },
  {
    question: "How is this different from hiring an agency for one service?",
    answer: "Instead of a single service, you get a coordinated operation across all your digital marketing, run by one accountable team. This avoids the gaps and finger pointing that come from juggling separate vendors."
  },
  {
    question: "Will I still know what is going on?",
    answer: "Yes. Quiet does not mean secret. You get clear, regular reporting on what we are doing and what it is producing, and you stay in control of the overall direction."
  },
  {
    question: "Is Shadow Ops cheaper than hiring my own team?",
    answer: "For most businesses, yes. You get senior level marketing run as a coordinated operation at a fraction of the cost of recruiting, hiring, and managing an in house team."
  },
  {
    question: "Who is a good fit for Shadow Ops?",
    answer: "Established local businesses that want to grow but do not have the time or desire to manage marketing themselves, and owners who would rather invest in expertise than learn it all from scratch."
  },
  {
    question: "How involved do I need to be?",
    answer: "As little as you want, beyond approving direction. We handle execution so you can focus on running your business, while keeping you informed along the way."
  },
  {
    question: "Can I start with one service and move to Shadow Ops later?",
    answer: "Yes. Many clients start with a single service and expand to Shadow Ops once they see results and want everything handled under one roof."
  }
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shadow Ops — Done For You Marketing",
    "description": "Shadow Ops is full digital marketing handled behind the scenes by Cremsocial. SEO, ads, and social media run as one. You run your business, we run the growth.",
    "provider": { "@type": "Organization", "name": "Crem Social", "url": "https://www.cremsocial.com" },
    "url": "https://www.cremsocial.com/shadow-ops",
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

const included = [
  {
    title: "A Coordinated Marketing Strategy",
    body: "Rather than disconnected tactics, you get one plan where SEO, paid ads, social media, and your local presence all pull in the same direction. We build growth strategies tailored to your business, and coordination is where Shadow Ops shines.",
    accent: "from-indigo-500 to-violet-500"
  },
  {
    title: "Hands Off Execution",
    body: "We handle the doing. Content gets created, campaigns get launched, profiles get optimized, and reports get prepared, all without you managing the details. You approve the direction, we run the operation.",
    accent: "from-violet-500 to-fuchsia-500"
  },
  {
    title: "Clear Reporting",
    body: "Quiet does not mean secret. You get straightforward reporting on what we are doing and what it is producing, so you always know where your money is going and what it is bringing back.",
    accent: "from-fuchsia-500 to-pink-500"
  },
  {
    title: "One Point of Contact",
    body: "No chasing multiple vendors. You have one team that knows your business, understands your goals, and takes ownership of your growth.",
    accent: "from-indigo-500 to-blue-500"
  }
];

const scrollToForm = () => {
  document.getElementById("shadow-ops-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function ShadowOperatingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", situation: "", message: "" });

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
        title="Shadow Ops | Done For You Marketing Behind the Scenes | Cremsocial"
        description="Shadow Ops is full digital marketing handled behind the scenes by Cremsocial. SEO, ads, and social media run as one. You run your business, we run the growth."
        canonical="https://www.cremsocial.com/shadow-ops"
        schema={schema}
      />
      <div className="max-w-7xl mx-auto py-16 px-6">

        {/* Badge */}
        <motion.div {...fade(0)} className="flex justify-center mb-6">
          <div
            className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
          >
            SHADOW OPS
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fade(0.05)}
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-4 text-center"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Shadow Ops:
          </span>{" "}
          We Run the Growth, You Run the Business
        </motion.h1>

        <motion.p
          {...fade(0.1)}
          className="text-center text-lg mb-10"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#6366f1" }}
        >
          Done for you marketing. No fluff, no mystery, just steady growth in the background.
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
            Hand Off Your Marketing
          </h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Stop juggling it all. Let our team run your growth behind the scenes while you focus on your business. Start with a free audit.
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
              Shadow Ops: We Run the Growth,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">You Run the Business</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Most business owners do not want to learn marketing. They want it handled. Shadow Ops is exactly that. It is our done for you marketing service where we operate as your growth team behind the scenes, while you stay focused on what you do best. You get the results of a full digital marketing department without the cost, the hiring, or the headaches. No fluff, no mystery, just steady growth happening in the background.
          </p>
        </motion.div>

        {/* What Shadow Ops Actually Means */}
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
              What Shadow Ops{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Actually Means</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The name says it. We do the work in the shadows so you do not have to think about it. Instead of juggling separate freelancers for SEO, ads, social media, and your Google profile, you get one marketing agency coordinating all of it toward a single goal: more leads and more revenue. You stay in control and informed, but you are freed from the day to day grind of managing marketing yourself.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This is built for owners and operators who are stretched thin. You already wear too many hats. Marketing should not be one more thing keeping you up at night. With Shadow Ops, it becomes someone else's full time job, handled by people who actually know what they are doing.
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
              A Full Marketing Team Without the Overhead
            </h3>
            <p className="text-gray-600">
              Senior level digital marketing, coordinated and done for you, at a fraction of the cost of hiring. See how it works.
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
              { stat: "1", label: "Team. All Your Marketing.", color: "text-indigo-600" },
              { stat: "0", label: "Vendors to Manage", color: "text-violet-600" },
              { stat: "All", label: "Channels Coordinated", color: "text-fuchsia-600" },
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

        {/* What Is Included */}
        <motion.div {...fade(0.24)} className="mb-10">
          <div className="text-center mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
            <h2
              className="text-3xl md:text-4xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              WHAT IS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                INCLUDED
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              One team. One plan. Everything handled.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {included.map((s, i) => (
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

        {/* Who Shadow Ops Is For */}
        <motion.div
          {...fade(0.4)}
          className="mb-8 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Who Shadow Ops{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Is For</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Shadow Ops is ideal for established local businesses that are ready to grow but do not have the time or desire to manage marketing in house. It suits owners who would rather invest in expertise than spend nights learning ad platforms. It also works well for businesses tired of piecing together freelancers and dealing with the gaps, the finger pointing, and the lack of a single accountable team.
          </p>
        </motion.div>

        {/* CTA 3 */}
        <motion.div
          {...fade(0.42)}
          className="mb-10 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Ready to Get Your Time Back?
            </h3>
            <p className="text-gray-600">
              Book a call and we will show you exactly how Shadow Ops takes marketing off your plate for good.
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

        {/* Why Choose Shadow Ops */}
        <motion.div
          {...fade(0.44)}
          className="mb-8 rounded-3xl border border-fuchsia-200/60 bg-gradient-to-br from-white/80 via-fuchsia-50/40 to-pink-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-fuchsia-500 to-pink-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Shadow Ops</span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hiring a full marketing team is expensive and slow. Managing a pile of freelancers is chaotic. Shadow Ops gives you the best of both: senior level digital marketing run as a coordinated outsourced marketing operation, at a fraction of the cost of building it yourself. And because our success is tied to your growth, we treat your business like it is our own.
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          {...fade(0.46)}
          className="mb-10 rounded-3xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-8 md:p-10"
        >
          <p
            className="text-gray-700 leading-relaxed text-lg"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            Your time is your most valuable asset. Shadow Ops protects it by taking marketing off your plate entirely, while still keeping you informed and in control. You focus on running and growing your business. We focus on bringing you the leads and revenue that make it worth it. If you are ready to hand off the growth and get your time back, let us talk. Get your free audit and we will show you what Shadow Ops could do for you.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
          {...fade(0.48)}
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
            Straight answers to the questions we hear most about our done for you marketing service.
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

        {/* Contact Form */}
        <motion.div
          {...fade(0.5)}
          id="shadow-ops-form"
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
                Request Received
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                A real person will review your information and get back to you with an honest look at what Shadow Ops could do for your business — no pressure, no pitch.
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
                    Shadow Ops Audit
                  </span>
                </h2>
                <p className="text-gray-600 text-sm">
                  Tell us about your business and where you are at with marketing. We will show you exactly what a done for you setup would look like.
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
                <select
                  name="situation"
                  value={form.situation}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ color: form.situation ? "#1f2937" : "#9ca3af" }}
                >
                  <option value="" disabled>What best describes your current marketing situation?</option>
                  <option value="doing-nothing">Not doing any marketing right now</option>
                  <option value="doing-myself">Trying to handle it myself — overwhelmed</option>
                  <option value="freelancers">Juggling multiple freelancers or agencies</option>
                  <option value="single-agency">Working with one agency but want more</option>
                  <option value="scaling">Growing fast and need a team to keep up</option>
                  <option value="unsure">Not sure — just want to see what is possible</option>
                </select>
                <textarea
                  name="message"
                  rows={3}
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
                  SEND MY AUDIT REQUEST
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
          {...fade(0.52)}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-12 text-center text-white"
        >
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Ready to Hand Off the Growth?
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
            Join the businesses running their growth on autopilot with Shadow Ops. Your time back. Your results up.
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
