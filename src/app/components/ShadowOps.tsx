import { Zap, TrendingUp, Settings, DollarSign, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    icon: TrendingUp,
    title: "Deep-dive on your content and audience",
    description: "We look at your best-performing posts, comments, DMs, and Q&As to spot what your audience is actually asking for and would pay for.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Offer & product strategy",
    description: "We map 1–3 digital products that fit your niche and comfort level: programs, guides, templates, challenges, or memberships.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Settings,
    title: "We build the backend",
    description: "We handle the boring but crucial stuff—sales page structure, checkout, email flows, upsells/downsells, and simple automations.",
    color: "from-cyan-500 to-purple-500"
  },
  {
    icon: DollarSign,
    title: "Launch and refine",
    description: "You promote to your audience in your voice; we watch the numbers and adjust pricing, copy, and funnels to improve performance.",
    color: "from-orange-500 to-pink-500"
  }
];

const youControl = [
  "Your brand, tone, and content",
  "Which offers go live and when",
  "How often you want to promote"
];

const weHandle = [
  "Tech setup",
  "Funnel logic",
  "Copy drafts you can approve or tweak",
  "Analytics and optimization"
];

export function ShadowOps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
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
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full" />
          </motion.div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-900">SHADOW OPERATING FOR</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
              CREATORS
            </span>
          </h2>
          <p 
            className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600 mb-8"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            You Post, We Build the Money Machine
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="p-8 rounded-3xl glass-card-matte">
            <p 
              className="text-lg text-gray-800 leading-relaxed"
            >
              Creators are great at content, not always at building offers, funnels, and tech. That's where we come in. We work behind the scenes to turn your audience into a reliable income stream.
            </p>
          </div>
        </motion.div>

        <div className="mb-16">
          <motion.h3 
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-12 text-center tracking-tight leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            HOW IT WORKS (<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">SIMPLE VERSION</span>):
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl glass-card-matte text-center h-full flex flex-col items-center">
                  <motion.div 
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} p-0.5 mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-gray-900" />
                    </div>
                  </motion.div>
                  <h4 
                    className="text-lg mb-3 text-gray-900 tracking-tight leading-tight"
                    style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Control sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="p-8 rounded-3xl glass-card-matte"
            >
              <h4 className="text-2xl mb-6 text-gray-900 tracking-tight leading-tight" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>
                What you keep control over:
              </h4>
              <ul className="space-y-3">
                {youControl.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="p-8 rounded-3xl glass-card-matte"
            >
              <h4 className="text-2xl mb-6 text-gray-900 tracking-tight leading-tight" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>
                What you hand off to us:
              </h4>
              <ul className="space-y-3">
                {weHandle.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="inline-block p-8 rounded-3xl glass-card-matte border-2 border-purple-200">
            <p 
              className="text-xl text-gray-900 mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
            >
              <strong>Money talk (example model):</strong>
            </p>
            <p className="text-gray-800 mb-4">
              Most of the profit stays with you (e.g., 80–90%). We take a performance-based share or fee tied to the results so we're motivated to make it work, not just send you "nice" dashboards.
            </p>
            <p 
              className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"
              style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
            >
              You stay the face; we stay in the shadows and make sure the money part isn't guesswork.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
