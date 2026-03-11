import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqImg from "../../assets/cards.jpg";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faqz = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const defaultTranslations = {
    faq_label: "CONSTRUCTION INSIGHTS",
    faq_heading: "Transparency builds trust. Here we answer\nthe most common questions beforehand.",
    faq_description:
      "Find answers to common queries about our building process, safety standards, materials, and project timelines.",
    faq_q1: "What types of construction projects do you handle?",
    faq_a1:
      "We specialize in residential, commercial, and industrial projects – from custom homes and multi‑family buildings to warehouses and renovation work.",
    faq_q2: "How do you ensure quality materials and workmanship?",
    faq_a2:
      "We partner with trusted suppliers and conduct rigorous on‑site inspections. Our teams follow strict quality control protocols and industry best practices.",
    faq_q3: "What safety standards do you follow on site?",
    faq_a3:
      "Safety is our top priority. We comply with all OSHA guidelines, provide ongoing training, and perform regular safety audits to protect workers and the public.",
    faq_q4: "How do you handle project planning and permits?",
    faq_a4:
      "Our team manages every step – from feasibility studies and design to obtaining necessary permits and scheduling inspections, ensuring a smooth workflow.",
    faq_q5: "Can you incorporate modern construction solutions?",
    faq_a5:
      "Absolutely. We integrate sustainable materials, energy‑efficient systems, and the latest building technologies to future‑proof your project.",
    faq_q6: "What is your typical project timeline?",
    faq_a6:
      "Timelines vary by project scope. We provide a detailed schedule during planning and keep you updated at every stage to avoid delays.",
  };

  const translations = t || defaultTranslations;

  const faqs = [
    { question: translations.faq_q1, answer: translations.faq_a1 },
    { question: translations.faq_q2, answer: translations.faq_a2 },
    { question: translations.faq_q3, answer: translations.faq_a3 },
    { question: translations.faq_q4, answer: translations.faq_a4 },
    { question: translations.faq_q5, answer: translations.faq_a5 },
    { question: translations.faq_q6, answer: translations.faq_a6 },
  ];

  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

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

  const hoverEffect = {
    scale: 1.02,
    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <section id="faq" className="flex justify-center">
      {/* Inner container with consistent vertical padding */}
      <div className="w-[95%] max-w-6xl mx-auto py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUp}
            className="bg-[#F97316] text-white rounded px-4 py-2 uppercase text-xs sm:text-sm tracking-wide"
          >
            {translations.faq_label}
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 leading-tight sm:leading-none"
          >
            {translations.faq_heading.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < translations.faq_heading.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-gray-700 leading-relaxed text-sm sm:text-base"
          >
            {translations.faq_description}
          </motion.p>

          <motion.img
            variants={fadeUp}
            src={faqImg}
            alt="Construction FAQ"
            className="mt-5 rounded-lg w-full h-50 sm:h-72 md:h-80 object-cover"
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
              whileHover={hoverEffect}
              className="py-5 sm:py-6 bg-[#F2F2F2] px-4 sm:px-5 rounded-xl cursor-pointer transition-shadow duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h3 className="text-base sm:text-lg font-semibold pr-4">
                  {faq.question}
                </h3>

                <span className="text-xl sm:text-2xl text-[#F97316] shrink-0">
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