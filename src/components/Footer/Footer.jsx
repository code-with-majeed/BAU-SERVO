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

  // Hover effect for contact items
  const contactHover = {
    whileHover: {
      x: 4,
      color: "#F97316",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="w-[95%] max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Top border accent */}
          <motion.div
            variants={fadeUp}
            className="w-24 h-1 bg-gradient-to-r from-[#F97316] to-orange-300 mb-12 rounded-full"
          />

          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* LOGO SECTION */}
            <motion.div variants={fadeUp} className="space-y-4">
              <img
                src={footerlogo}
                alt="Company Logo"
                className="w-32 md:w-36 object-contain"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.footer_tagline || "Building excellence with integrity and innovation since 1995."}
              </p>
            </motion.div>

            {/* COMPANY */}
            <motion.div variants={fadeUp}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                {t.footer_company_title}
              </h3>
              <ul className="space-y-4">
                {[
                  { key: "leistungen", id: "services" },
                  { key: "prozess", id: "process" },
                  { key: "faq", id: "faq" },
                  { key: "kontakt", id: "contact" }
                ].map((item) => (
                  <li key={item.key}>
                    <a
                      href={`#${item.id}`}
                      className="text-gray-300 hover:text-[#F97316] transition-colors duration-200 relative group"
                    >
                      {t[item.key]}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* LEGAL */}
            <motion.div variants={fadeUp}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                {t.footer_legal_title}
              </h3>
              <ul className="space-y-4">
                {["footer_terms", "footer_privacy"].map((key) => (
                  <li key={key}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-[#F97316] transition-colors duration-200 relative group"
                    >
                      {t[key]}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#F97316] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CONTACT */}
            <motion.div variants={fadeUp}>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                {t.footer_contact_title}
              </h3>
              <div className="space-y-5">
                {/* Phone */}
                <motion.a
                  href={`tel:${t.footer_phone}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-[#F97316] transition-colors group"
                  variants={contactHover}
                  whileHover="whileHover"
                >
                  <div className="bg-gray-800 p-2 rounded-full group-hover:bg-[#F97316] transition-colors duration-200">
                    <Phone size={16} className="text-white" />
                  </div>
                  <span className="text-sm">{t.footer_phone}</span>
                </motion.a>

                {/* Address */}
                <motion.div
                  className="flex items-start gap-4 text-gray-300 group cursor-default"
                  variants={contactHover}
                  whileHover="whileHover"
                >
                  <div className="bg-gray-800 p-2 rounded-full group-hover:bg-[#F97316] transition-colors duration-200">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <span className="text-sm">{t.footer_address}</span>
                </motion.div>

                {/* Email */}
                <motion.a
                  href={`mailto:${t.footer_email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-[#F97316] transition-colors group"
                  variants={contactHover}
                  whileHover="whileHover"
                >
                  <div className="bg-gray-800 p-2 rounded-full group-hover:bg-[#F97316] transition-colors duration-200">
                    <Mail size={16} className="text-white" />
                  </div>
                  <span className="text-sm">{t.footer_email}</span>
                </motion.a>
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
              <motion.a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#F97316] transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={16} className="text-white" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-[#F97316] transition-colors duration-200 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={16} className="text-white" />
              </motion.a>
            </div>
          </motion.div>

          {/* BOTTOM DISCLAIMER */}
          <motion.div variants={fadeUp} className="border-t border-gray-800 mt-10 pt-8">
            <p className="text-gray-500 text-sm leading-relaxed text-justify">
              {t.footer_disclaimer}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;