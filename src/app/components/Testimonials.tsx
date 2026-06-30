import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Marcus D.",
    role: "Roofing Contractor, Brampton",
    text: "We were invisible online before Cremsocial. Within three months we were showing up on the first page for local searches and getting calls we never had before. Straight talk, real results. Nothing complicated about it."
  },
  {
    name: "Priya K.",
    role: "Restaurant Owner, Mississauga",
    text: "I tried two other agencies and got confusing reports and excuses. Cremsocial told me exactly what was wrong and fixed it. My Google profile went from nothing to bringing in steady walk-ins every single week."
  },
  {
    name: "Jordan T.",
    role: "Content Creator, Toronto",
    text: "I had followers but no income. Cremsocial helped me figure out what to sell and how to actually reach my audience. The first real month after working with them I made more than my day job. That was the turning point."
  },
  {
    name: "Danielle M.",
    role: "Spa Owner, Oakville",
    text: "Our ad spend was draining money with nothing to show for it. Cremsocial cut the waste and doubled our bookings in six weeks. They told me exactly what was wrong from the very first call."
  },
  {
    name: "Kevin O.",
    role: "Plumber, Etobicoke",
    text: "Shadow Ops is exactly what I needed. I run my business, they run the marketing. It is that simple. My lead pipeline has never been fuller and I am not losing sleep over Facebook ads anymore."
  },
  {
    name: "Aisha R.",
    role: "Boutique Owner, Vaughan",
    text: "What I appreciate most is the honesty. They told me what would and would not work for my budget, and then delivered exactly what they promised. No fluff, no mystery, just a clear plan that actually worked."
  }
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(next, 4500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, current]);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-gray-900 tracking-tight mb-3"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            WHAT OUR CLIENTS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600">
              ARE SAYING
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-xl mx-auto"
          >
            Real businesses. Real results. No made-up numbers.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/40 backdrop-blur-sm p-10 md:p-14 min-h-[220px] flex flex-col justify-center">

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
              >
                {/* Quote mark */}
                <div
                  className="text-6xl leading-none text-indigo-200 mb-2 select-none"
                  style={{ fontFamily: "Georgia, serif" }}
                  aria-hidden="true"
                >
                  "
                </div>
                <p
                  className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8"
                  style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
                >
                  {testimonials[current].text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-gray-900 font-bold"
                      style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
                    >
                      {testimonials[current].name}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-indigo-200 bg-white/80 flex items-center justify-center text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-gradient-to-r from-indigo-500 to-violet-500" : "w-2.5 h-2.5 bg-indigo-200 hover:bg-indigo-300"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-indigo-200 bg-white/80 flex items-center justify-center text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 transition-colors shadow-sm"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              WHO IS CREMSOCIAL?
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(99,102,241,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-500/30"
              style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}
            >
              SKIP THE BS, GET MY FREE AUDIT
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
