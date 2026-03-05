import React from "react";
import { motion } from "framer-motion";
import servicesImg from "../../assets/service-img.jfif";
import { FiCheckCircle } from "react-icons/fi";
import { FaAtlassian } from "react-icons/fa6";

const Services = ({ t }) => {
  const cards = [
    {
      icon: <FaAtlassian className="text-4xl text-white bg-red-700 rounded-full p-1" />,
      title: t.services_card1_title,
      desc: t.services_card1_desc,
    },
    {
      icon: <FiCheckCircle className="text-4xl text-white bg-red-700 rounded-full p-1" />,
      title: t.services_card2_title,
      desc: t.services_card2_desc,
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
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="services" className="w-full flex justify-center py-16">
      <div className="w-[95%] max-w-6xl">
        {/* Label */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-red-700 rounded px-4 py-2 uppercase text-white text-xs sm:text-sm md:text-base">
            {t.services_label}
          </span>
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-6 leading-none"
        >
          {t.services_heading_line1} <br />
          {t.services_heading_line2} <br />
          {t.services_heading_line3}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl"
        >
          {t.services_description}
        </motion.p>

        {/* Row: 2 Cards + 1 Image */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Card 1 */}
          <motion.div
            className="bg-[#F2F2F2] rounded-lg shadow-lg p-6 flex flex-col items-center md:items-start h-full"
            variants={fadeUp}
          >
            <div className="mb-4">{cards[0].icon}</div>
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 leading-tight text-center md:text-left">
              {cards[0].title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center md:text-left">{cards[0].desc}</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#F2F2F2] rounded-lg shadow-lg p-6 flex flex-col items-center md:items-start h-full"
            variants={fadeUp}
          >
            <div className="mb-4">{cards[1].icon}</div>
            <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 leading-tight text-center md:text-left">
              {cards[1].title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base text-center md:text-left">{cards[1].desc}</p>
          </motion.div>

          {/* Image */}
          <motion.div className="h-full" variants={fadeUp}>
            <img
              src={servicesImg}
              alt="Services"
              className="w-full h-[200px] sm:h-[250px] md:h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;