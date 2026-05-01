import { Send, CheckCircle2 } from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitData = async () => {
    setIsSubmitting(true);

    const nameInput = document.getElementById('input-name') as HTMLInputElement;
    const emailInput = document.getElementById('input-email') as HTMLInputElement;
    const typeInput = document.getElementById('input-type') as HTMLSelectElement;
    const goalInput = document.getElementById('input-goal') as HTMLSelectElement;
    const challengeInput = document.getElementById('input-challenge') as HTMLTextAreaElement;
    const budgetInput = document.getElementById('input-budget') as HTMLSelectElement;

    if (!nameInput.value || !emailInput.value) {
      alert("Please fill in your Name and Email.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("access_key", "746dfba1-ce32-47c1-8f81-7596e2afcd2d");
    formData.append("subject", "New Audit Request from CremSocial");
    formData.append("from_name", "CremSocial Website");
    formData.append("replyto", emailInput.value);
    // Send to Shiv's inbox
    formData.append("to", "shiv@cremsocial.com");

    formData.append("Name", nameInput.value);
    formData.append("Email", emailInput.value);
    formData.append("Business Type", typeInput.value);
    formData.append("Main Goal", goalInput.value);
    formData.append("Biggest Challenge", challengeInput.value);
    formData.append("Monthly Budget", budgetInput.value);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);

        nameInput.value = '';
        emailInput.value = '';
        typeInput.value = '';
        goalInput.value = '';
        challengeInput.value = '';
        budgetInput.value = '';

        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="relative py-32 px-6" id="contact">
      <div className="max-w-4xl mx-auto relative z-10">
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
          <h2
            className="text-4xl md:text-5xl mb-4 text-gray-900 tracking-tight leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
          >
            DONE WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">GUESSING?</span>
          </h2>
          <p
            className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6"
            style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}
          >
            Let's Fix Your Marketing
          </p>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Tell us who you are, what you're struggling with, and what "success" actually looks like for you. We'll send back a practical, no-BS mini audit you can use even if you never work with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="p-8 md:p-12 rounded-3xl glass-card-matte relative"
        >
          <AnimatePresence>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-3xl"
              >
                <CheckCircle2 className="w-20 h-20 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Audit Requested!</h3>
                <p className="text-gray-600 text-center px-6">We'll review your info and get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                <label
                  className="block text-gray-800 mb-2"
                  style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }}
                >
                  Name *
                </label>
                <input
                  id="input-name"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                <label
                  className="block text-gray-800 mb-2"
                  style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
                >
                  Email *
                </label>
                <input
                  id="input-email"
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label
                className="block text-gray-800 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
              >
                Business / Creator type
              </label>
              <select
                id="input-type"
                className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              >
                <option value="">Select type</option>
                <option value="Small/Medium Business">Small/Medium Business</option>
                <option value="Creator">Creator</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label
                className="block text-gray-800 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
              >
                Main goal
              </label>
              <select
                id="input-goal"
                className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              >
                <option value="">Select goal</option>
                <option value="More leads">More leads</option>
                <option value="More sales">More sales</option>
                <option value="Better visibility">Better visibility</option>
                <option value="Launch a digital product">Launch a digital product</option>
              </select>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label
                className="block text-gray-800 mb-2 tracking-tight"
                style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}
              >
                What's Your Biggest Marketing Challenge Right Now?
              </label>
              <textarea
                id="input-challenge"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                placeholder="What's keeping you up at night?"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }}>
              <label
                className="block text-gray-800 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 500 }}
              >
                Approximate monthly budget
              </label>
              <select
                id="input-budget"
                className="w-full px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              >
                <option value="">Select range</option>
                <option value="$1k - $3k/month">$1k - $3k/month</option>
                <option value="$3k - $5k/month">$3k - $5k/month</option>
                <option value="$5k - $10k/month">$5k - $10k/month</option>
                <option value="$10k+/month">$10k+/month</option>
              </select>
            </motion.div>

            <button
              type="button"
              onClick={submitData}
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center gap-2 group shadow-2xl shadow-purple-500/30 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
            >
              <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600 }} className="tracking-wide">
                {isSubmitting ? "Sending..." : "Send My Audit (No Fluff, Just Facts)"}
              </span>
              {!isSubmitting && (
                <div className="animate-bounce-horizontal">
                  <Send className="w-5 h-5" />
                </div>
              )}
            </button>

            <p className="text-sm text-gray-600 text-center">
              No spam. No pressure. If it doesn't make sense for you, we'll tell you that too.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}