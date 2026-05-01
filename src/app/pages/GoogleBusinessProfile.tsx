import { Meta } from "../components/Meta";
import { motion } from "motion/react";

export default function GoogleBusinessProfilePage() {
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
      title: "Profile Setup & Optimization",
      description:
        "We set up or clean up your profile so it is complete, accurate, and fully optimized.",
    },
    {
      title: "Category & Keywords",
      description:
        "We make sure your profile is targeting the right categories and search terms for your business.",
    },
    {
      title: "Photo & Content Management",
      description:
        "Fresh photos and updates that keep your profile active and attractive to potential customers.",
    },
    {
      title: "Review Management",
      description:
        "We help you build a strong review presence and respond professionally to customer feedback.",
    },
    {
      title: "Monthly Reporting",
      description:
        "A clear look at how your profile is performing every single month.",
    },
  ];

  return (
    <>
      <Meta
        title="Google Business Profile | Get Found Locally. Get Chosen First."
        description="We optimize and manage your Google Business Profile so you show up and get more calls, visits, and customers."
      />
      <div className="max-w-7xl mx-auto py-16 px-6">
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

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight heading-glow mb-8"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
            Get Found Locally.
          </span>{" "}
          Get Chosen First.
        </motion.h1>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2
            className="text-2xl md:text-3xl text-gray-900 mb-4"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Introduction
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            When someone searches for a business like yours, your Google Business
            Profile is the first thing they see. At Crem Social, we optimize and
            manage your profile so you show up, look credible, and get more
            calls, visits, and customers.
          </p>
        </motion.div>

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
              <p
                className="text-gray-700 font-semibold"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
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
              <p
                className="text-gray-700 font-semibold"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
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
              <p
                className="text-gray-700 font-semibold"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Calls, Walk-ins, Customers
              </p>
            </div>
          </div>
        </motion.div>

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
              A local visibility setup that helps customers find and choose you
              faster.
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
                      style={{
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 700,
                      }}
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
            Ready to stand out on Google?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Let's get your profile working for you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Book a Free Call
          </motion.button>
        </motion.section>
      </div>
    </>
  );
}
