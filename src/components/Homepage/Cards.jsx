import React from 'react';
import { motion } from 'framer-motion';
import { GiCrane, GiDrill, GiBrickWall } from 'react-icons/gi';
import { FaHardHat, FaTools } from 'react-icons/fa';
import img1 from '../../assets/cards.jpg';
import img2 from '../../assets/img.jfif';
import img3 from '../../assets/cards-3.jpg';

const Cards = ({ t }) => {
  // ... data and animation definitions (unchanged)

  const cardsData = [
    {
      icon: <GiCrane className="text-4xl text-white bg-[#F97316] rounded-full p-1" />,
      title: t.cards_card1_title,
      desc: t.cards_card1_desc,
    },
    {
      icon: <GiDrill className="text-4xl text-white bg-[#F97316] rounded-full p-1" />,
      title: t.cards_card2_title,
      desc: t.cards_card2_desc,
    },
  ];

  const secondRowData = [
    {
      icon: <FaHardHat className="text-4xl text-white bg-[#F97316] rounded-full p-1" />,
      title: t.cards_card3_title,
      desc: t.cards_card3_desc,
    },
    {
      icon: <FaTools className="text-4xl text-white bg-[#F97316] rounded-full p-1" />,
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

  const cardHover = {
    whileHover: {
      scale: 1.02,
      y: -4,
      boxShadow: "0 20px 30px -10px rgba(249, 115, 22, 0.3)",
      borderColor: "#F97316",
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
    <section className="w-full flex flex-col justify-center">
      {/* Inner container with consistent vertical padding */}
      <div className="w-full flex flex-col gap-16 py-16 md:py-20">
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
              alt="Construction site preparation"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover object-top rounded-xl shadow-lg"
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
                className="bg-[#F2F2F2] shadow-lg rounded-xl p-5 flex flex-col justify-center break-words border-1 border-transparent"
                variants={fadeUp}
                whileHover={cardHover.whileHover}
              >
                <motion.div whileHover={iconHover.whileHover}>
                  {card.icon}
                </motion.div>
                <h3 className="mt-4 font-bold text-lg sm:text-2xl lg:text-4xl leading-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{card.desc}</p>
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
                className="bg-[#F2F2F2] shadow-lg rounded-xl p-5 flex flex-col justify-center break-words border-1 border-transparent"
                variants={fadeUp}
                whileHover={cardHover.whileHover}
              >
                <motion.div whileHover={iconHover.whileHover}>
                  {card.icon}
                </motion.div>
                <h3 className="mt-4 font-bold text-lg sm:text-2xl lg:text-4xl leading-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div className="w-full md:w-2/5" variants={fadeUp}>
            <img
              src={img2}
              alt="Construction work in progress"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover object-top rounded-xl shadow-lg"
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
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F97316] text-white text-sm">
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
              alt="Construction site"
              className="w-[120%] h-48 sm:h-56 md:h-64 object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;