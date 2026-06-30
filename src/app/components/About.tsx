import { Users, Zap, MessageCircle, ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 px-6" id="about">
      <div className="max-w-7xl mx-auto">
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
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl mb-4 text-gray-900 tracking-tight leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            WHO TF IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">CREMSOCIAL?</span>
          </motion.h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="p-12 rounded-3xl glass-card-matte relative overflow-hidden">
              <div className="relative z-10">
                <motion.p 
                  className="text-xl text-gray-800 leading-relaxed mb-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  Cremsocial is an agency for businesses that are tired of feeling confused by marketing agencies. We keep it honest, cut the BS, and focus on strategies that actually get you growing. If we are not the right fit, we will tell you that too.
                </motion.p>

                <motion.p 
                  className="text-lg text-gray-800 leading-relaxed mb-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  We are a GTA agency working with SMBs and creators who want to make money but do not know how to get there yet. We use AI to speed up our process, automate the repetitive work, and keep the gas pedal down so we can spend more time thinking about what works.
                </motion.p>

                <motion.p 
                  className="text-lg text-gray-800 leading-relaxed mb-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Less money spent on manual work, more money spent on new ideas. You talk directly to the people doing the work, so decisions move fast and nothing gets lost in translation.
                </motion.p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: Zap, text: "AI to speed the process", color: "from-purple-500 to-blue-500" },
                    { icon: Users, text: "Humans to keep it sharp", color: "from-blue-500 to-cyan-500" },
                    { icon: MessageCircle, text: "Direct line to the people doing the work", color: "from-pink-500 to-orange-500" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group"
                    >
                      <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/40 text-center h-full flex flex-col items-center justify-center shadow-lg">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} p-0.5 mb-4`}>
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                              <feature.icon className="w-7 h-7 text-gray-900" />
                            </div>
                          </div>
                        </motion.div>
                        <p 
                          className="text-gray-800 text-sm"
                          style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}
                        >
                          {feature.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.p 
                  className="text-gray-700 text-center mb-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  No fluff. No ghosting. No guessing.
                </motion.p>
                
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  <p
                    className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 mb-10"
                    style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
                  >
                    Your growth partner. Not another marketing mystery.
                  </p>
                  <Link to="/about">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(99, 102, 241, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-500/30"
                      style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}
                    >
                      THE FULL STORY
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
