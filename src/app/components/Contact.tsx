import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="p-12 md:p-20 rounded-3xl glass-card-matte text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-tight mb-6"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
              Actually Grow?
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tell us what's broken. We'll send back a straightforward mini audit with 2–3 things you can fix — whether you hire us or not. No sales pressure, just real answers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact">
              <motion.button
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg shadow-xl hover:shadow-2xl transition-all"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                GET MY FREE AUDIT
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          <motion.p
            className="text-gray-500 text-sm mt-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            No spam. No pressure. One reply with real next steps.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
