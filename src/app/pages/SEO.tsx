import { Meta } from "../components/Meta";
import { motion } from "motion/react";

export default function SEOPage() {
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

  const whatYouGet = [
    {
      title: "Website Audit",
      description:
        "A full look at your site to find what is holding your rankings back.",
    },
    {
      title: "Keyword Research",
      description:
        "The exact words your customers are typing into Google, targeted and relevant.",
    },
    {
      title: "On-Page Optimization",
      description:
        "Your content, titles, and structure fine-tuned so Google and people both understand it.",
    },
    {
      title: "Link Building",
      description:
        "Quality backlinks that grow your site's authority and credibility over time.",
    },
    {
      title: "Monthly Reporting",
      description:
        "Clear, simple reports every month so you always know where you stand.",
    },
  ];

  return (
    <>
      <Meta
        title="SEO Services | Rank Higher. Get Found. Grow Faster."
        description="Professional SEO services to help your business rank higher on Google and attract qualified customers."
      />
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-6"
        >
          <div className="px-4 py-2 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-700 text-sm font-semibold"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}>
            SEO SERVICES
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-8"
          style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">Rank Higher.</span> Get Found. Grow Faster.
        </motion.h1>

        {/* Introduction */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>
            Introduction
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Most businesses are invisible on Google. We change that. At Crem Social, we build SEO strategies that bring the right people to your website, not just traffic, but customers.
          </p>
        </motion.div>

        {/* Results Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mb-16 p-8 bg-gradient-to-r from-indigo-50 via-violet-50 to-fuchsia-50 rounded-2xl border border-indigo-200/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                50+
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: 'Oswald, sans-serif' }}>Clients Served</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-violet-600 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                3x
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: 'Oswald, sans-serif' }}>Average Traffic Growth</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-fuchsia-600 mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Top 3
              </div>
              <p className="text-gray-700 font-semibold" style={{ fontFamily: 'Oswald, sans-serif' }}>Google Rankings</p>
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

        {/* CTA Section */}
        <motion.section
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4 heading-glow" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>
            Ready to show up on Google?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's build your SEO strategy today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
          >
            Book a Free Call
          </motion.button>
        </motion.section>
      </div>
    </>
  );
}
