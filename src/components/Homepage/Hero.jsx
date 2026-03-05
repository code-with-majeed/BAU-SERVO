import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbLassoPolygon } from "react-icons/tb";
import { MdBrowserNotSupported } from "react-icons/md";
import { IoMapOutline } from "react-icons/io5";
import img from "../../assets/xlg.jfif";
import PhoneInput from "../PhoneInputWrapper";

/* ================= CONTACT FORM (now receives t) ================= */
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
      {/* Names */}
      <motion.div className="flex flex-col md:flex-row gap-4" variants={formVariants}>
        <input
          name="firstName"
          placeholder={t.first_name_placeholder}
          value={formData.firstName}
          onChange={handleChange}
          className="flex-1 border-2 bg-white border-gray-300 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
          required
        />
        <input
          name="lastName"
          placeholder={t.last_name_placeholder}
          value={formData.lastName}
          onChange={handleChange}
          className="flex-1 border-2 bg-white border-gray-300 rounded-lg px-4 py-3 focus:border-red-600 outline-none"
          required
        />
      </motion.div>

      {/* Email */}
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

      {/* Phone */}
      <motion.div className="w-full" variants={formVariants}>
        <label className="block text-sm font-medium text-gray-700 mb-2">{t.phone_label}</label>
        <PhoneInput
          country="de"               // keep as "de" or make dynamic if needed
          enableSearch
          value={formData.phone}
          onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
          containerClass="w-full"
          inputClass="!w-full !h-[52px] !pl-16 !border-2 !border-gray-300 !rounded-lg focus:!border-red-600 focus:!ring-0"
          buttonClass="!border-2 !rounded-l-lg !bg-white"
          dropdownClass="!text-black"
        />
      </motion.div>

      {/* Service */}
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
        className="w-full bg-[#D81A1A] hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
        variants={formVariants}
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

/* ================= HERO (receives language and t) ================= */
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

  return (
    <div className="relative w-full min-h-[900px] md:min-h-[1050px] overflow-hidden">
      {/* Background Image */}
      <motion.img
        src="https://onecdn.io/media/9a3d1d24-411c-4c03-95ee-824b3e575e28/lg2x"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-120"
      />
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative flex justify-center pt-28 md:pt-32 pb-20">
        <div className="w-[95%] max-w-6xl mx-auto space-y-8">
          {/* TEXT */}
          <motion.div
            className="mt-7 text-white space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textStagger}
          >
            <motion.h1 className="text-3xl md:text-5xl font-extrabold leading-snug" variants={fadeUp}>
              <span className="bg-red-700/80 px-2 py-1 rounded">{t.hero_title_line1}</span>
              <br />
              <span className="bg-red-700/80 px-2 py-1 rounded">{t.hero_title_line2}</span>
              <br />
              <span className="bg-red-700/80 px-2 py-1 rounded">{t.hero_title_line3}</span>
              <br />
              <span className="bg-red-700/80 px-2 py-1 rounded">{t.hero_title_line4}</span>
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

            {/* Features */}
            <motion.div className="space-y-3 pt-2" variants={fadeUp}>
              <div className="flex gap-4 items-start">
                <TbLassoPolygon className="text-2xl mt-1" />
                <h2 className="font-bold text-lg md:text-xl">{t.feature1}</h2>
              </div>
              <div className="flex gap-4 items-start">
                <MdBrowserNotSupported className="text-2xl mt-1" />
                <h2 className="font-bold text-lg md:text-xl">{t.feature2}</h2>
              </div>
              <div className="flex gap-4 items-start">
                <IoMapOutline className="text-2xl mt-1" />
                <h2 className="font-semibold text-base md:text-lg">{t.feature3}</h2>
              </div>
            </motion.div>
          </motion.div>

          {/* FORM – pass t down */}
          <ContactForm t={t} />

          {/* Bottom Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-[#D81A1A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-lg">
              {t.bottom_button}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;