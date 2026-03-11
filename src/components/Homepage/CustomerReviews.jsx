import React from "react";
import { motion } from "framer-motion";

// Star rating component (unchanged)
const StarRating = ({ stars }) => (
  <div className="flex text-[#F97316] mb-2 justify-center md:justify-start">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < stars ? "fill-current" : "stroke-current"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.336 24 12 20.013 4.664 24 6 15.595 0 9.748l8.332-1.73z" />
      </svg>
    ))}
  </div>
);

const CustomerReviews = ({ t }) => {
  // Review data with translated text and role (from translations)
  const reviews = [
    {
      stars: 5,
      text: t.review1_text,
      name: "Michael K.",
      role: t.review1_role,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      stars: 5,
      text: t.review2_text,
      name: "Sabine W.",
      role: t.review2_role,
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      stars: 4,
      text: t.review3_text,
      name: "Thomas R.",
      role: t.review3_role,
      img: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      stars: 4,
      text: t.review4_text,
      name: "Peter M.",
      role: t.review4_role,
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      stars: 5,
      text: t.review5_text,
      name: "Anna L.",
      role: t.review5_role,
      img: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      stars: 4,
      text: t.review6_text,
      name: "Erik K.",
      role: t.review6_role,
      img: "https://randomuser.me/api/portraits/men/78.jpg",
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

  // Hover animation for each review card
  const cardHover = {
    whileHover: {
      scale: 1.02,
      y: -4,
      boxShadow: "0 20px 30px -10px rgba(249, 115, 22, 0.3)",
      borderColor: "#F97316",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="w-full flex justify-center text-white bg-[#111827]">
      {/* Inner container with consistent vertical padding */}
      <div className="w-[95%] max-w-6xl mx-auto py-16 md:py-20">
        {/* Heading */}
        <motion.div
          className="flex flex-col items-center mb-16 w-full max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* First line */}
          <motion.span
            className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 w-full text-center break-words whitespace-normal"
            variants={fadeUp}
          >
            {t.reviews_heading_line1}
            <svg
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[60%] h-2"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              fill="transparent"
            >
              <path
                d="M0,5 C100,2 300,2 400,5"
                stroke="#F97316"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </motion.span>

          {/* Second line */}
          <motion.span
            className="relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold w-full text-center break-words whitespace-normal"
            variants={fadeUp}
          >
            {t.reviews_heading_line2}
            <svg
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[57%] h-2"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
              fill="transparent"
            >
              <path
                d="M0,5 C100,2 300,2 400,5"
                stroke="#F97316"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-center text-gray-400 mb-10 text-sm sm:text-base"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t.reviews_description}
        </motion.p>

        {/* Reviews Grid */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-[#374151] p-6 rounded-lg shadow-md flex flex-col h-full border border-transparent"
              variants={fadeUp}
              whileHover={cardHover.whileHover}
            >
              <StarRating stars={review.stars} />
              <p className="text-gray-200 mb-4 flex-1 text-center md:text-left">{review.text}</p>

              {/* Customer name + profile image */}
              <div className="flex flex-col md:flex-row items-center md:items-start mt-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mb-2 md:mb-0 md:mr-3 object-cover"
                />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerReviews;