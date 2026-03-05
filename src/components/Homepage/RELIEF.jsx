import React from "react";
import { motion } from "framer-motion";
import reliefimg from "../../assets/relief img.png";

const RELIEF = ({ t }) => {
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

  const bulletPoints = [
    t.relief_bullet1,
    t.relief_bullet2,
    t.relief_bullet3,
    t.relief_bullet4,
  ];

  return (
    <section className="bg-black text-white w-full flex justify-center py-16 md:py-20">
      <div className="w-[95%] max-w-6xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp}>
            <span className="bg-red-700 rounded px-4 py-2 text-white text-xs sm:text-sm md:text-base">
              {t.relief_label}
            </span>
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-6 leading-none"
          >
            {t.relief_heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[#E0E0E0] text-sm sm:text-base md:text-lg leading-relaxed"
          >
            {t.relief_description}
          </motion.p>

          <motion.div
            className="mt-8 md:mt-10 space-y-5 md:space-y-6"
            variants={staggerContainer}
          >
            {bulletPoints.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                variants={fadeUp}
              >
                {/* Custom Red Check Circle */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-sm flex-shrink-0">
                  ✓
                </div>

                <p className="text-[#E0E0E0] text-sm sm:text-base">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="relative overflow-hidden mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={reliefimg}
            alt="Relief"
            className="w-full 
                       h-[300px] 
                       sm:h-[400px] 
                       md:h-[500px] 
                       lg:h-[600px] 
                       object-cover 
                       rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default RELIEF;