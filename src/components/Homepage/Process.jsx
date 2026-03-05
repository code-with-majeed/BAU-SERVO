import React from "react";
import { motion } from "framer-motion";

const Process = ({ t }) => {
  const steps = [
    t.process_step1,
    t.process_step2,
    t.process_step3,
    t.process_step4,
    t.process_step5,
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="process" className="bg-black text-white py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="bg-red-700 rounded px-4 py-2 uppercase text-xs sm:text-sm tracking-wide"
            >
              {t.process_label}
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 leading-none"
            >
              {t.process_heading}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-gray-300 leading-relaxed text-sm sm:text-base"
            >
              {t.process_description}
            </motion.p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="py-4 sm:py-6 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeUp}>
                {/* Schritt Badge */}
                <span className="bg-[#262626] rounded px-4 py-1 text-xs sm:text-sm uppercase font-light tracking-wide">
                  {t.process_step_prefix} {index + 1}
                </span>

                {/* Heading */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 leading-snug">
                  {step}
                </h3>

                {/* Divider */}
                {index !== steps.length - 1 && (
                  <hr className="border-gray-800 mt-6" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;