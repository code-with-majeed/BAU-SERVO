import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/relief img.png';
import img2 from '../../assets/img.jfif';
import img3 from '../../assets/sm2x (1).png';
import { LuShieldEllipsis } from "react-icons/lu";
import { RiSignalTowerLine } from "react-icons/ri";
import { SiAccuweather, SiAcura } from "react-icons/si";

const Cards = ({ t }) => {
  const cardsData = [
    {
      icon: <LuShieldEllipsis className="text-4xl text-white bg-red-700 rounded-full p-1" />,
      title: t.cards_card1_title,
      desc: t.cards_card1_desc,
    },
    {
      icon: <RiSignalTowerLine className="text-4xl text-white bg-red-700 rounded-full p-1" />,
      title: t.cards_card2_title,
      desc: t.cards_card2_desc,
    },
  ];

  const secondRowData = [
    {
      icon: <SiAccuweather className="text-4xl text-white bg-red-700 rounded-full p-1" />,
      title: t.cards_card3_title,
      desc: t.cards_card3_desc,
    },
    {
      icon: <SiAcura className="text-4xl text-white bg-red-700 rounded-full p-1" />,
      title: t.cards_card4_title,
      desc: t.cards_card4_desc,
    },
  ];

  const iconParagraphs = [
    t.cards_bullet1,
    t.cards_bullet2,
    t.cards_bullet3,
    t.cards_bullet4,
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
    <section className="w-full flex flex-col justify-center py-16 gap-16">
      {/* First Row: Image Left, Cards Right */}
      <motion.div
        className="w-[95%] max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Image */}
        <motion.div className="w-full md:w-2/5" variants={fadeUp}>
          <img
            src={img1}
            alt="Relief"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer}
        >
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#F2F2F2] shadow-lg rounded-xl p-5 flex flex-col justify-center items-center md:items-start break-words"
              variants={fadeUp}
            >
              <div>{card.icon}</div>
              <h3 className="mt-4 font-bold text-lg sm:text-2xl lg:text-4xl leading-tight text-center md:text-left">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base text-center md:text-left">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Second Row: Cards Left, Image Right */}
      <motion.div
        className="w-[95%] max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Cards */}
        <motion.div
          className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer}
        >
          {secondRowData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#F2F2F2] shadow-lg rounded-xl p-5 flex flex-col justify-center items-center md:items-start break-words"
              variants={fadeUp}
            >
              <div>{card.icon}</div>
              <h3 className="mt-4 font-bold text-lg sm:text-2xl lg:text-4xl leading-tight text-center md:text-left">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base text-center md:text-left">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image */}
        <motion.div className="w-full md:w-2/5" variants={fadeUp}>
          <img
            src={img2}
            alt="Relief"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Section: Checkmarks + Image */}
      <motion.div
        className="w-[95%] max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center py-12 px-6 bg-gray-200 rounded-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Check Column */}
        <motion.div className="flex flex-col gap-6 w-full md:w-2/3" variants={staggerContainer}>
          {iconParagraphs.map((text, index) => (
            <motion.div key={index} className="flex items-center gap-4" variants={fadeUp}>
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-sm">
                ✓
              </div>
              <p className="text-gray-700 text-base sm:text-lg font-medium">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image */}
        <motion.div className="w-full md:w-2/5 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg" variants={fadeUp}>
          <img
            src={img3}
            alt="Sample"
            className="w-[120%] h-48 sm:h-56 md:h-64 object-cover object-top"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Cards;