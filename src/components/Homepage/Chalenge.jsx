import React from "react";
import { motion } from "framer-motion";
import { GiCrane, GiDrill, GiBrickWall } from "react-icons/gi";
import { FaHardHat } from "react-icons/fa";

const Chalenge = ({ t }) => {
  const challenges = [
    { icon: <GiCrane className="text-[#F97316] text-3xl" />, text: t.challenge_1 },
    { icon: <FaHardHat className="text-[#F97316] text-3xl" />, text: t.challenge_2 },
    { icon: <GiDrill className="text-[#F97316] text-3xl" />, text: t.challenge_3 },
    { icon: <GiBrickWall className="text-[#F97316] text-3xl" />, text: t.challenge_4 },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardHover = {
    whileHover: {
      scale: 1.02,
      y: -4,
      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.3)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const iconHover = {
    whileHover: {
      rotate: 5,
      scale: 1.1,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <section className="w-full flex justify-center bg-[#1F2937] text-[#FFFFFF]">
      {/* Inner container with consistent vertical padding */}
      <div className="w-full max-w-6xl mx-auto px-4 py-16 md:py-20">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-[#F97316] rounded px-4 py-2 bg-[#111111] text-white text-xs sm:text-sm md:text-base">
            {t.challenge_label}
          </span>
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mt-6 leading-tight"
        >
          {t.challenge_heading}
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl mt-6 text-[#E5E7EB] leading-relaxed max-w-3xl"
        >
          {t.challenge_description}
        </motion.p>

        <motion.div
          className="mt-12 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              whileHover={cardHover.whileHover}
              className="p-4 rounded-lg cursor-default transition-colors"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="text-2xl sm:text-3xl mt-1 shrink-0"
                  whileHover={iconHover.whileHover}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl leading-snug">
                  {item.text}
                </h3>
              </div>
              <hr className="mt-4 border-gray-600" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl"
        >
          {t.challenge_bottom_text}
        </motion.p>
      </div>
    </section>
  );
};

export default Chalenge;