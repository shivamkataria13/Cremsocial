import { Search, Target, MessageSquare, Globe } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    icon: Search,
    title: "SEO & Local Visibility",
    subtitle: "Be the One They Click First",
    description: "Most people won't go past page one. We make sure you're not hiding on page three.",
    details: [
      "Fix your site structure so Google actually understands what you do",
      "Optimize pages for the keywords that bring in buyers, not random traffic",
      "Clean up and optimize your Google Business Profile so you show up in the map pack",
      "Add tracking so you can see which searches, pages, and locations drive calls or forms"
    ],
    tagline: 'No mystical "SEO secrets." We show you exactly what we\'re changing and what it\'s supposed to do.',
    gradient: "from-purple-500 to-blue-500"
  },
  {
    icon: Target,
    title: "Paid Ads",
    subtitle: "Every Dollar Has a Job",
    description: "If your ads aren't tracked to real outcomes, it's just decoration. We treat your ad budget like our own.",
    details: [
      "Set clear goals (leads, calls, bookings, sales) before we ever launch",
      "Build simple, fast landing pages that match your ad promise",
      "Test hooks, creatives, and audiences, then kill anything that doesn't perform",
      "Send you reports you don't need a PhD to decode: what we spent, what came back, and what's next"
    ],
    tagline: "We run Meta (FB/IG) and Google ads with one simple rule: if it can't justify its cost, it doesn't run.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "Social Media & Brand Presence",
    subtitle: "Not Just Pretty Posts",
    description: "You don't need 1 million followers; you need the right people to see you and trust you.",
    details: [
      "Clean up your bios to clearly say who you help and how",
      "Create content pillars so you're not guessing what to post every week",
      "Make your profiles look consistent and professional across platforms",
      "Focus on actions (clicks, replies, DMs, link taps), not just likes"
    ],
    tagline: "We make social media a lead and trust machine, not a second full-time job.",
    gradient: "from-pink-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Websites That Sell",
    subtitle: "Your 24/7 Salesperson",
    description: "Your website shouldn't feel like a digital brochure from 2010. It should quietly convince people to take the next step.",
    details: [
      "Modern, mobile-first design that doesn't break on phones",
      'Clear sections that answer the only questions visitors care about: "Is this for me?" and "What do I do now?"',
      "Fast load times so people don't bounce in 3 seconds",
      "Built-in forms, booking links, and tracking so every visit is an opportunity, not a mystery"
    ],
    tagline: 'We don\'t just "make it look nice." We build it to convert.',
    gradient: "from-cyan-500 to-purple-500"
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </motion.div>
          <h2 
            className="text-4xl md:text-5xl mb-4 text-gray-900 tracking-tight leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">DO</span>
          </h2>
          <p 
            className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            (And Why You'll Feel It in Your Bank Account)
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative p-8 rounded-3xl glass-card-matte overflow-hidden cursor-pointer"
    >
      {/* Content */}
      <div className="relative z-10">
        <motion.div 
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <service.icon className="w-8 h-8 text-gray-900" />
        </motion.div>
        
        <h3 
          className="text-xl mb-2 text-gray-900"
          style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
        >
          {service.title}
        </h3>

        <p
          className={`text-base mb-3 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}
          style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}
        >
          "{service.subtitle}"
        </p>
        
        <p 
          className="text-gray-800 mb-3 text-sm"
          style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}
        >
          {service.description}
        </p>

        <ul className="space-y-1.5 mb-3">
          {service.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-indigo-500 mt-0.5 text-xs">•</span>
              <span className="text-gray-700 text-xs" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
                {detail}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-gray-600 text-xs italic" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 400 }}>
          {service.tagline}
        </p>
      </div>

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500`} />
    </motion.div>
  );
}