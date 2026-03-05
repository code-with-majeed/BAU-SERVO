import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqImg from "../../assets/faq-img.jfif";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faqz = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: t.faq_q1, answer: t.faq_a1 },
    { question: t.faq_q2, answer: t.faq_a2 },
    { question: t.faq_q3, answer: t.faq_a3 },
    { question: t.faq_q4, answer: t.faq_a4 },
    { question: t.faq_q5, answer: t.faq_a5 },
    { question: t.faq_q6, answer: t.faq_a6 },
  ];

  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="faq" className="py-14 sm:py-20 flex justify-center">
      <div className="w-[95%] max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUp}
            className="bg-red-700 text-white rounded px-4 py-2 uppercase text-xs sm:text-sm tracking-wide"
          >
            {t.faq_label}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight sm:leading-none"
          >
            {t.faq_heading.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < t.faq_heading.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-gray-700 leading-relaxed text-sm sm:text-base"
          >
            {t.faq_description}
          </motion.p>

          <motion.img
            variants={fadeUp}
            src={faqImg}
            alt="FAQ"
            className="mt-5 rounded-lg w-full h-60 sm:h-72 md:h-80 object-cover"
          />
        </motion.div>

        {/* RIGHT SIDE ACCORDION */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="py-5 sm:py-6 bg-[#F2F2F2] px-4 sm:px-5 rounded-xl cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-semibold pr-4">
                  {faq.question}
                </h3>

                <span className="text-xl sm:text-2xl text-gray-600 shrink-0">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </div>

              {/* Answer with animation */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faqz;