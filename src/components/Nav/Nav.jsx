import React, { useState } from "react";
import logo from "../../assets/logo.jpeg";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMenu, HiOutlineX, HiOutlineGlobeAlt } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";

const Nav = ({ language, setLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopLangOpen, setDesktopLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setDesktopLangOpen(false);
    setMobileLangOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-20 bg-white shadow-lg rounded-xl">
      <div className="px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-16 w-16 md:h-20 md:w-20 cursor-pointer" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li className="cursor-pointer font-extrabold hover:text-[#D81A1A]" onClick={() => scrollToSection('services')}>{t.leistungen}</li>
          <li className="cursor-pointer font-extrabold hover:text-[#D81A1A]" onClick={() => scrollToSection('process')}>{t.prozess}</li>
          <li className="cursor-pointer font-extrabold hover:text-[#D81A1A]" onClick={() => scrollToSection('faq')}>{t.faq}</li>
          <li className="cursor-pointer font-extrabold hover:text-[#D81A1A]" onClick={() => scrollToSection('contact')}>{t.kontakt}</li>
        </ul>

        {/* Desktop Contact Info + Language Dropdown */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <span className="font-medium">
            <LuPhone className="inline mr-2" /> {t.phone}
          </span>
          <button className="bg-[#D81A1A] font-semibold text-white px-5 py-3 cursor-pointer rounded transition hover:bg-red-700">
            {t.jetzt_kontakt}
          </button>

          {/* Professional Desktop Language Selector */}
          <div className="relative">
            <button
              onClick={() => setDesktopLangOpen(!desktopLangOpen)}
              className="flex items-center space-x-1 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
            >
              <HiOutlineGlobeAlt className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-sm">{language.toUpperCase()}</span>
              <IoChevronDown
                className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
                  desktopLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {desktopLangOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1 animate-fadeIn">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    language === "en" ? "font-bold text-[#D81A1A]" : "text-gray-700"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("de")}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    language === "de" ? "font-bold text-[#D81A1A]" : "text-gray-700"
                  }`}
                >
                  DE
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiOutlineX className="h-8 w-8" /> : <HiOutlineMenu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white rounded-b-xl shadow-lg">
          <ul className="flex flex-col space-y-4">
            <li className="cursor-pointer font-medium hover:text-[#D81A1A]" onClick={() => scrollToSection('services')}>{t.leistungen}</li>
            <li className="cursor-pointer font-medium hover:text-[#D81A1A]" onClick={() => scrollToSection('process')}>{t.prozess}</li>
            <li className="cursor-pointer font-medium hover:text-[#D81A1A]" onClick={() => scrollToSection('faq')}>{t.faq}</li>
            <li className="cursor-pointer font-medium hover:text-[#D81A1A]" onClick={() => scrollToSection('contact')}>{t.kontakt}</li>
          </ul>
          <div className="flex flex-col space-y-2 mt-2">
            <span className="font-medium">
              <LuPhone className="inline mr-2" /> {t.phone}
            </span>
            <button className="bg-[#D81A1A] font-semibold text-white px-5 py-3 rounded transition hover:bg-red-700">
              {t.jetzt_kontakt}
            </button>

            {/* Mobile Language Selector */}
            <div className="relative mt-2">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <HiOutlineGlobeAlt className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">{language.toUpperCase()}</span>
                </div>
                <IoChevronDown
                  className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
                    mobileLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileLangOpen && (
                <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1 animate-fadeIn">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      language === "en" ? "font-bold text-[#D81A1A]" : "text-gray-700"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage("de")}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                      language === "de" ? "font-bold text-[#D81A1A]" : "text-gray-700"
                    }`}
                  >
                    DE
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;