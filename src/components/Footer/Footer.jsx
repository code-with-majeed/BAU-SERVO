import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";
import footerlogo from '../../assets/logo-1-removebg-preview.png';

const Footer = ({ t }) => {
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
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <motion.div
        className="max-w-6xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* LOGO SECTION */}
          <motion.div variants={fadeUp}>
            <img
              src={footerlogo}
              alt="Logo"
              className="w-22 sm:w-30 md:w-38 object-contain"
            />
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={fadeUp}>
            <div className="inline-block bg-gray-800 px-2 py-1 rounded text-sm mb-6">
              {t.footer_company_title}
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-red-700 cursor-pointer">{t.leistungen}</li>
              <li className="hover:text-red-700 cursor-pointer">{t.prozess}</li>
              <li className="hover:text-red-700 cursor-pointer">{t.faq}</li>
              <li className="hover:text-red-700 cursor-pointer">{t.kontakt}</li>
            </ul>
          </motion.div>

          {/* LEGAL */}
          <motion.div variants={fadeUp}>
            <div className="inline-block bg-gray-800 px-2 py-1 rounded text-sm mb-6">
              {t.footer_legal_title}
            </div>
            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-red-700 cursor-pointer">{t.footer_terms}</li>
              <li className="hover:text-red-700 cursor-pointer">{t.footer_privacy}</li>
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={fadeUp}>
            <div className="inline-block bg-gray-800 px-2 py-1 rounded sm:text-sm leading-relaxed mb-6">
              {t.footer_contact_title}
            </div>

            <div className="space-y-6 text-gray-300">
              {/* Phone */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-red-600 p-2 rounded-full">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-red-600 transition-colors">
                  {t.footer_phone}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-red-600 p-2 rounded-full">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-red-600 transition-colors">
                  {t.footer_address}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-red-600 p-2 rounded-full">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-red-600 transition-colors">
                  {t.footer_email}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <motion.hr variants={fadeUp} className="border-t border-gray-800 my-12" />

        {/* COPYRIGHT + SOCIAL */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            {t.footer_copyright}
          </p>

          <div className="flex gap-4">
            <div className="bg-gray-800 p-2 rounded-full cursor-pointer">
              <Facebook size={16} />
            </div>
            <div className="bg-gray-800 p-2 rounded-full cursor-pointer">
              <Instagram size={16} />
            </div>
          </div>
        </motion.div>

        {/* BOTTOM DISCLAIMER */}
        <motion.div variants={fadeUp} className="border-t border-gray-800 mt-10 pt-8">
          <p className="text-gray-500 text-sm leading-relaxed text-justify">
            {t.footer_disclaimer}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;