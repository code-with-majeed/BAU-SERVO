import React, { useState } from "react";
import { motion } from "framer-motion";
import qrcode from "../../assets/xlg.jfif";
import bgimg from "../../assets/contactsec.jpg";
import PhoneInput from "../PhoneInputWrapper";

export default function ContactSection({ t }) {
  const [phone, setPhone] = useState("");

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

  const bulletPoints = [
    t.contact_bullet1,
    t.contact_bullet2,
    t.contact_bullet3,
    t.contact_bullet4,
    t.contact_bullet5,
  ];

  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-16 sm:py-20"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Container SAME as Process */}
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="bg-gray-100 rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* LEFT SIDE */}
          <motion.div variants={staggerContainer}>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-none"
            >
              {t.contact_heading}
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-gray-600">
              {t.contact_subline}
            </motion.p>

            <motion.hr variants={fadeUp} className="my-8 border-gray-200" />

            <motion.ul className="space-y-5" variants={staggerContainer}>
              {bulletPoints.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-4"
                  variants={fadeUp}
                >
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-sm">
                    ✓
                  </div>
                  <span className="text-gray-800">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            className="bg-white rounded-2xl p-6 sm:p-8"
            variants={staggerContainer}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={staggerContainer}
            >
              <motion.input
                variants={fadeUp}
                type="text"
                placeholder={t.contact_name_placeholder}
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none"
              />
              <motion.input
                variants={fadeUp}
                type="text"
                placeholder={t.contact_company_placeholder}
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none"
              />
            </motion.div>

            <motion.div className="mt-4" variants={fadeUp}>
              <PhoneInput
                country="de"
                value={phone}
                onChange={(value) => setPhone(value)}
                containerClass="w-full"
                inputClass="!w-full !h-[44px] !pl-14 !border !border-gray-300 !rounded-lg focus:!border-red-600 focus:!ring-0 !bg-white"
                buttonClass="!border !border-gray-300 !rounded-l-lg !bg-white"
                dropdownClass="!text-gray-800"
                enableSearch
              />
            </motion.div>

            <motion.div className="mt-4" variants={fadeUp}>
              <input
                type="email"
                placeholder={t.contact_email_placeholder}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none"
              />
            </motion.div>

            <motion.div className="mt-6" variants={fadeUp}>
              <p className="mb-2 text-gray-800 font-medium">
                {t.contact_service_label}
              </p>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none">
                <option>{t.contact_service_option}</option>
              </select>
            </motion.div>

            <motion.button
              variants={fadeUp}
              className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition"
            >
              {t.contact_button}
            </motion.button>

            <motion.div
              variants={fadeUp}
              className="mt-6 text-center text-gray-500 text-sm"
            >
              {t.contact_whatsapp_text}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4 flex justify-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white border border-gray-300 flex items-center justify-center">
                <img
                  src={qrcode}
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}