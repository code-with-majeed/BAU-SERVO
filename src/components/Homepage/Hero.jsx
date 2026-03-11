// Hero.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiCrane, GiDrill, GiBrickWall } from "react-icons/gi";
import { FaHardHat, FaDraftingCompass, FaTools } from "react-icons/fa";
import img from "../../assets/xlg (1).jfif";
import PhoneInput from "../PhoneInputWrapper";
import heroimg from "../../assets/Pinterest.jfif";

/* ================= CONTACT FORM ================= */
const ContactForm = ({ t }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full bg-[#F2F2F2] text-black shadow-2xl rounded-2xl p-6 md:p-10 space-y-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
    >
      <motion.div className="flex flex-col md:flex-row gap-4" variants={formVariants}>
        <input
          name="firstName"
          placeholder={t.first_name_placeholder}
          value={formData.firstName}
          onChange={handleChange}
          className="flex-1 border-2 bg-white border-gray-300 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
          
        />
        <input
          name="lastName"
          placeholder={t.last_name_placeholder}
          value={formData.lastName}
          onChange={handleChange}
          className="flex-1 border-2 bg-white border-gray-300 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
          
        />
      </motion.div>

      <motion.div variants={formVariants}>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t.email_label}</label>
        <input
          type="email"
          name="email"
          placeholder={t.email_placeholder}
          value={formData.email}
          onChange={handleChange}
          className="w-full border-2 bg-white border-gray-300 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
          required
        />
      </motion.div>

      <motion.div className="w-full" variants={formVariants}>
        <label className="block text-sm font-medium text-gray-700 mb-2">{t.phone_label}</label>
        <PhoneInput
          country="de"
          enableSearch
          value={formData.phone}
          onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
          containerClass="w-full"
          inputClass="!w-full !h-[52px] !pl-16 !border-2 !border-gray-300 !rounded-lg focus:!border-red-600 focus:!ring-0"
          buttonClass="!border-2 !rounded-l-lg !bg-white"
          dropdownClass="!text-black"
        />
      </motion.div>

      <motion.select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full border-2 bg-white border-gray-300 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
        required
        variants={formVariants}
      >
        <option value="">{t.service_placeholder}</option>
        <option>{t.service_option1}</option>
        <option>{t.service_option2}</option>
        <option>{t.service_option3}</option>
        <option>{t.service_option4}</option>
        <option>{t.service_option5}</option>
      </motion.select>

      <motion.button
        type="submit"
        className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 rounded-lg transition"
        variants={formVariants}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)" }}
        whileTap={{ scale: 0.98 }}
      >
        {t.form_button}
      </motion.button>

      <motion.p className="text-center mt-4 text-gray-400" variants={formVariants}>
        {t.or_whatsapp}
      </motion.p>

      <motion.img src={img} alt="Logo" className="w-48 mx-auto" variants={formVariants} />
    </motion.form>
  );
};

/* ================= HERO ================= */
const Hero = ({ language, t }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const featureHover = {
    whileHover: {
      scale: 1.02,
      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="relative w-full min-h-[900px] md:min-h-[1050px] overflow-hidden">
      <motion.img
        src={heroimg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      {/* Darker overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative flex justify-center pt-28 md:pt-36 pb-12">
        <div className="w-[95%] max-w-6xl mx-auto space-y-6">
          {/* TEXT with subtle shadow for readability */}
          <motion.div
            className="mt-3 text-white space-y-3"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textStagger}
          >
            <motion.h1 className="text-3xl md:text-5xl font-extrabold leading-snug" variants={fadeUp}>
              <span className="bg-[#F97316]/80 px-2 py-1 rounded">{t.hero_title_line1}</span>
              <br />
              <span className="bg-[#F97316]/80 px-2 py-1 rounded">{t.hero_title_line2}</span>
              <br />
            </motion.h1>

            <motion.p className="text-lg md:text-2xl font-extrabold" variants={fadeUp}>
              {t.hero_subtitle.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </React.Fragment>
              ))}
            </motion.p>

            <motion.p className="text-gray-100 leading-normal" variants={fadeUp}>
              {t.hero_description.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t.hero_description.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.p>

            {/* Features – more compact */}
            <motion.div className="space-y-2 pt-1" variants={fadeUp}>
              <motion.div
                className="flex gap-4 items-start p-2 rounded-lg cursor-default"
                variants={featureHover}
                whileHover="whileHover"
              >
                <GiCrane className="text-2xl mt-1 text-[#F97316]" />
                <h2 className="font-bold text-lg md:text-xl leading-tight">{t.feature1}</h2>
              </motion.div>
              <motion.div
                className="flex gap-4 items-start p-2 rounded-lg cursor-default"
                variants={featureHover}
                whileHover="whileHover"
              >
                <FaHardHat className="text-2xl mt-1 text-[#F97316]" />
                <h2 className="font-bold text-lg md:text-xl leading-tight">{t.feature2}</h2>
              </motion.div>
              <motion.div
                className="flex gap-4 items-start p-2 rounded-lg cursor-default"
                variants={featureHover}
                whileHover="whileHover"
              >
                <FaDraftingCompass className="text-2xl mt-1 text-[#F97316]" />
                <h2 className="font-semibold text-base md:text-lg leading-tight">{t.feature3}</h2>
              </motion.div>
            </motion.div>
          </motion.div>

          <ContactForm t={t} />

          {/* Responsive Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-3 py-2 text-xs sm:text-sm md:text-base whitespace-nowrap rounded-lg transition shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              {t.bottom_button}
            </motion.button>
            <motion.button
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-3 py-2 text-xs sm:text-sm md:text-base whitespace-nowrap rounded-lg transition shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              {t.bottom_button2}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;