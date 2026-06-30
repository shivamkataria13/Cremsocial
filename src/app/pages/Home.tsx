import { useState, useRef } from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ShadowOps } from "../components/ShadowOps";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Meta } from "../components/Meta";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

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
      <Services />
      <ShadowOps />
      <About />
      <HomeFAQ />
      <Contact />
    </>
  );
}
