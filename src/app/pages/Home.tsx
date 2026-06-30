import { useState, useRef } from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ShadowOps } from "../components/ShadowOps";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";
import { Meta } from "../components/Meta";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown, Send, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router";

const faqs = [
  {
    q: "What does a digital marketing agency like Cremsocial actually do?",
    a: "We help local businesses get real leads and help creators earn from their audience, using SEO, paid ads, social media marketing, and Google Business Profile optimization. Everything we do is tied to measurable results like leads, calls, and sales.",
  },
  {
    q: "How is Cremsocial different from other marketing companies?",
    a: "We focus on revenue, not vanity metrics, and we explain everything in plain English. No jargon, no confusing reports, and no unicorn promises. When you grow, we grow.",
  },
  {
    q: "Do you only work with local businesses?",
    a: "No. We work with local businesses that want more customers and with creators who want to turn their following into income. Our digital marketing services adapt to your goals.",
  },
  {
    q: "Which marketing services do I actually need?",
    a: "It depends on your goals, your market, and your budget. The free audit is the easiest way to find out. We review your situation and recommend only what will move the needle for you.",
  },
  {
    q: "Can I use just one service instead of everything?",
    a: "Yes. Each service works on its own. Many clients start with one, such as SEO or ads, and expand once they see results and want everything coordinated under one roof.",
  },
  {
    q: "How quickly will I see results?",
    a: "It depends on the service. Ads can bring leads within days, while SEO and social media build over a few months. We set honest expectations up front and report on progress throughout.",
  },
  {
    q: "How do I get started?",
    a: "The easiest first step is a free audit. We review where your marketing stands, point out the biggest opportunities, and give you a clear plan with no obligation.",
  },
];

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crem Social",
    "url": "https://www.cremsocial.com",
    "logo": "https://www.cremsocial.com/logo.png",
    "description": "Cremsocial is a digital marketing agency that gets local businesses real leads and helps creators earn. SEO, ads, and social media that works.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brampton",
      "addressRegion": "ON",
      "addressCountry": "CA",
    },
    "telephone": "+1-365-866-1643",
    "openingHours": "Mo-Su 00:00-23:59",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-365-866-1643",
      "email": "shiv@cremsocial.com",
      "contactType": "customer service",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Crem Social",
    "url": "https://www.cremsocial.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  },
];

function HomeIntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* CTA 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-10 text-center text-white"
        >
          <h2
            className="text-2xl md:text-3xl mb-3 tracking-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            See Where Your Marketing Stands
          </h2>
          <p className="text-white/85 mb-6 max-w-xl mx-auto">
            Find out exactly what is working, what is wasting money, and where your biggest opportunities are. Get a free, no pressure audit today.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white text-indigo-700 shadow-lg"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              Skip the BS, Get My Free Audit
            </motion.button>
          </Link>
        </motion.div>

        {/* Marketing That Actually Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Marketing That Actually Works{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                (No Unicorn Promises)
              </span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Most marketing sounds great and delivers little. You hear big words, get confusing reports, and never see the leads you were promised. Cremsocial is built to be the opposite. We are a digital marketing agency that helps local businesses get real leads and helps creators turn followers into income, using SEO, ads, and shadow operating. No fluff, no mystery, just numbers that make sense.
          </p>
        </motion.div>

        {/* A Digital Marketing Agency Focused on Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-violet-200/60 bg-gradient-to-br from-white/80 via-violet-50/40 to-fuchsia-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              A Digital Marketing Agency{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                Focused on Results
              </span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            There are plenty of marketing companies that can keep you busy with activity. We would rather keep you busy with customers. As a digital marketing agency and marketing consulting partner, our whole job is to connect what we do to what you actually care about: more calls, more bookings, more sales. We do not measure success in likes and impressions. We measure it in revenue, because that is the only number that pays your bills.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you are a local business owner who needs the phone to ring or a creator who wants to make a living from your audience, our digital marketing services and internet marketing solutions are built around your goals. We keep the strategy clear, the reporting honest, and the focus squarely on growth you can see.
          </p>
        </motion.div>

        {/* CTA 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Real Leads, Not Vanity Metrics
            </h3>
            <p className="text-gray-600">
              Stop paying for activity and start paying for results. Let us build a marketing engine that actually grows your business.
            </p>
          </div>
          <Link to="/contact" className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 whitespace-nowrap"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 500 }}
            >
              See What We Can Do for You
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

const serviceTextBlocks = [
  {
    title: "SEO That Brings Real Leads",
    body: "Our SEO and local SEO services get your business found by people who are ready to buy. We handle the technical work, the keywords, and the content so you climb the rankings and turn searches into customers, not just clicks.",
    accent: "from-indigo-500 to-violet-500",
    path: "/seo",
  },
  {
    title: "Ads That Pay for Themselves",
    body: "From Google Ads to Meta ads and beyond, our paid ads management is built around return. We treat your budget like our own, cut what does not work, and scale what does, so every dollar brings back more than a dollar.",
    accent: "from-violet-500 to-fuchsia-500",
    path: "/ads",
  },
  {
    title: "Social Media That Turns Followers Into Income",
    body: "Our social media marketing services help businesses and creators build engaged audiences that actually buy. We focus on strategy and content that moves people from follower to customer, not vanity numbers.",
    accent: "from-fuchsia-500 to-pink-500",
    path: "/social-media",
  },
  {
    title: "Google Business Profile Optimization",
    body: "Your Google Business Profile is often the first thing a local customer sees. We optimize it so you show up in Google Maps and local search, build trust with reviews, and turn that visibility into calls and visits.",
    accent: "from-indigo-500 to-blue-500",
    path: "/google-business",
  },
];

function HomeServicesContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative py-8 pb-16 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            Our services work on their own or together as one coordinated marketing engine. Here is how we help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceTextBlocks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-6"
            >
              <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${item.accent} mb-3`} />
              <h3
                className="text-lg text-gray-900 mb-2"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
              >
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.body}</p>
              <Link to={item.path}>
                <span
                  className={`text-transparent bg-clip-text bg-gradient-to-r ${item.accent} text-sm`}
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white/80 backdrop-blur-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-xl md:text-2xl text-gray-900 tracking-tight mb-1"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              One Team, Every Channel
            </h3>
            <p className="text-gray-600">
              SEO, ads, social media, and your Google profile, all working together. Book a call and we will map your plan.
            </p>
          </div>
          <Link to="/contact" className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 whitespace-nowrap"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 500 }}
            >
              Book a Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function HomeWhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Why Local Businesses Choose Cremsocial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Why Local Businesses and Creators{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                Choose Cremsocial
              </span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            We built this digital marketing company for people who are tired of being sold a dream and handed a spreadsheet of meaningless metrics. Our clients stay because we tell the truth, we show our work, and we tie everything to results. When you grow, we grow, so we are motivated to bring you outcomes that matter rather than reports that just look impressive.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As a marketing consultant and internet marketing service provider, we keep things plain spoken. You will always know what we are doing, why we are doing it, and what it is producing. No jargon, no runaround, no unicorn promises.
          </p>
        </motion.div>

        {/* Marketing Strategy Built Around Your Growth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-violet-200/60 bg-gradient-to-br from-white/80 via-violet-50/40 to-fuchsia-50/40 backdrop-blur-sm p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 flex-shrink-0 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
            <h2
              className="text-2xl md:text-3xl text-gray-900 tracking-tight"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            >
              Marketing Strategy Built Around{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">
                Your Growth
              </span>
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Great marketing is not random. It starts with a clear marketing strategy and growth strategies built around your specific goals, your market, and your budget. As a best-in-class digital marketing agency serving local businesses and creators, we figure out where your best opportunities are, build a plan to capture them, and then execute relentlessly. Whether that means SEO, ads, social media, brand marketing, or all of them working together under one roof, the plan is always pointed at the same target: more revenue for you.
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-indigo-100/60 bg-white/70 backdrop-blur-sm p-8 md:p-10"
        >
          <p
            className="text-gray-700 leading-relaxed text-lg"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            You do not need another marketing company that talks a big game. You need a team that brings real leads and real income, and explains it in plain English. That is exactly what Cremsocial does. If you are ready for digital marketing services that focus on results instead of buzzwords, let us show you what is possible. Skip the BS and get your free audit today.
          </p>
        </motion.div>

        {/* CTA 4 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 md:p-12 text-center text-white"
        >
          <h2
            className="text-3xl md:text-4xl tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Ready to Grow for Real?
          </h2>
          <p className="text-white/85 mb-8 max-w-xl mx-auto text-lg">
            Join the local businesses and creators getting measurable results with Cremsocial. Let us get to work.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-white text-indigo-700 shadow-lg text-lg"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function HomeQuickForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate("/contact"), 2500);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/60 border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all text-gray-800 placeholder:text-gray-400 text-sm";

  return (
    <section ref={ref} className="relative py-8 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-8 md:p-12"
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
                Got It — We Will Be In Touch
              </h3>
              <p className="text-gray-600">
                Taking you to the full contact page now. A real person will review your message and get back to you fast.
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
                  Get Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
                    Free Marketing Audit
                  </span>
                </h2>
                <p className="text-gray-600 text-sm">
                  Tell us about your business and we will show you exactly where the opportunities are. No pitch, no pressure.
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
                  placeholder="Business Name (optional)"
                  value={form.business}
                  onChange={handleChange}
                  className={inputClass}
                />

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ color: form.service ? "#1f2937" : "#9ca3af" }}
                >
                  <option value="" disabled>What do you need help with?</option>
                  <option value="seo">SEO & Local Visibility</option>
                  <option value="ads">Paid Ads (Google / Meta)</option>
                  <option value="social">Social Media Management</option>
                  <option value="gbp">Google Business Profile</option>
                  <option value="all">Everything — I need a full plan</option>
                  <option value="unsure">Not sure yet — just exploring</option>
                </select>

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Tell us a bit about your business and what is not working..."
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ resize: "none" }}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-500/30"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  SEND MY AUDIT REQUEST
                  <Send className="w-4 h-4" />
                </motion.button>

                <p className="text-center text-gray-500 text-xs">
                  No spam. No pressure. A real person reviews every submission.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-4" />
          <h2
            className="text-4xl md:text-5xl text-gray-900 tracking-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            COMMON{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
              QUESTIONS
            </span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-gray-900 text-base pr-4"
                  style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Meta
        title="Digital Marketing Agency for Local Businesses & Creators | Cremsocial"
        description="Cremsocial is a digital marketing agency that gets local businesses real leads and helps creators earn. SEO, ads, and social media that works. Get your free audit."
        canonical="https://www.cremsocial.com/"
        schema={homeSchema}
      />
      <Hero />
      <HomeIntroSection />
      <Services />
      <HomeServicesContent />
      <HomeWhyUs />
      <ShadowOps />
      <About />
      <Testimonials />
      <HomeQuickForm />
      <HomeFAQ />
      <Contact />
    </>
  );
}
