import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiChrome, FiClock } from "react-icons/fi";
import { LuJoystick } from "react-icons/lu";

const Chalenge = ({ t }) => {
  const challenges = [
    {
      icon: <FiClock />,
      text: t.challenge_1,
    },
    {
      icon: <FiCheckCircle />,
      text: t.challenge_2,
    },
    {
      icon: <FiChrome />,
      text: t.challenge_3,
    },
    {
      icon: <LuJoystick />,
      text: t.challenge_4,
    },
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
      },
    },
  };

  return (
    <section className="w-full flex justify-center py-16 md:py-20 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Label */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-red-700 rounded px-4 py-2 text-white text-xs sm:text-sm md:text-base">
            {t.challenge_label}
          </span>
        </motion.p>

        {/* Heading */}
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

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl mt-6 text-gray-700 leading-relaxed max-w-3xl"
        >
          {t.challenge_description}
        </motion.p>

        {/* Challenge List */}
        <motion.div
          className="mt-12 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {challenges.map((item, index) => (
            <motion.div key={index} variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="flex items-start gap-4">
                <div className="text-2xl sm:text-3xl mt-1 shrink-0 text-black">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl leading-snug">
                  {item.text}
                </h3>
              </div>
              <hr className="mt-4 border-gray-200" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl"
        >
          {t.challenge_bottom_text}
        </motion.p>
      </div>
    </section>
  );
};

export default Chalenge;