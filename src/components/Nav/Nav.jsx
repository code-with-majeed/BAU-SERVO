import React, { useState, useCallback } from "react";
import logo from "../../assets/logo-1-removebg-preview.png";
import { LuPhone } from "react-icons/lu";
import { HiOutlineMenu, HiOutlineX, HiOutlineGlobeAlt } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";

const Nav = ({ language, setLanguage, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopLangOpen, setDesktopLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  // Map menu keys to section IDs
  const sectionMap = {
    leistungen: 'services',
    prozess: 'process', 
    projekt: 'projects',
    faq: 'faq',        
    kontakt: 'contact'    
  };

  // Smooth scroll to section with offset for fixed navbar
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Approx height of fixed navbar (including margin/padding)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Handle menu item click
  const handleNavClick = useCallback((item) => {
    const sectionId = sectionMap[item];
    if (sectionId) {
      scrollToSection(sectionId);
    }
    // Close mobile menu if open
    if (isOpen) setIsOpen(false);
  }, [isOpen, scrollToSection]);

  // Handle logo click – scroll to top
  const handleLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setDesktopLangOpen(false);
    setMobileLangOpen(false);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(t.phone).then(() => {
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 2000);
    }).catch(err => console.error('Copy failed:', err));
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-[#111111] text-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 backdrop-blur-sm bg-opacity-95">
      <div className="px-4 sm:px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0" onClick={handleLogoClick}>
          <img
            src={logo}
            alt="Company Logo"
            className="h-14 w-14 md:h-16 md:w-16 object-contain cursor-pointer hover:opacity-90 transition-opacity"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {["leistungen", "prozess", "projekt", "faq", "kontakt"].map((item) => (
            <li
              key={item}
              onClick={() => handleNavClick(item)}
              className="relative px-3 py-2 text-sm font-medium text-gray-200 hover:text-white font-bold rounded-lg transition-all duration-200 cursor-pointer group"
            >
              {t[item]}
              {/* Underline animation */}
              <span className="absolute left-0 bottom-1 w-full h-0.5 bg-[#F97316] transform scale-x-0 origin-center transition-transform duration-200 group-hover:scale-x-80 rounded-full" />
            </li>
          ))}
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={`tel:${t.phone}`}
            onClick={handleCopyPhone}
            className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <LuPhone className="text-[#F97316] text-lg" />
            <span>{t.phone}</span>
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#F97316] hover:bg-[#EA580C] cursor-pointer text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {t.jetzt_kontakt}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setDesktopLangOpen(!desktopLangOpen)}
              className="flex items-center space-x-1 cursor-pointer px-3 py-2 rounded-lg bg-white/10 transition-colors duration-200"
            >
              <HiOutlineGlobeAlt className="h-5 w-5 text-[#F97316]" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
              <IoChevronDown
                className={`h-4 w-4 text-[#F97316] transition-transform duration-200 ${
                  desktopLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {desktopLangOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl py-1 z-50 animate-fadeIn">
                {["en", "de"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`block w-full text-left px-4 py-2 text-sm cursor-pointer hover:bg-white/10 transition-colors ${
                      language === lang ? "text-[#F97316] font-semibold" : "text-gray-300"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {isOpen ? (
            <HiOutlineX className="h-6 w-6 text-[#F97316]" />
          ) : (
            <HiOutlineMenu className="h-6 w-6 text-[#F97316]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-5 pt-2 space-y-4 bg-[#111111] border-t border-white/10 rounded-b-2xl">
          <ul className="flex flex-col space-y-2">
            {["leistungen", "prozess", "projekt", "faq", "kontakt"].map((item) => (
              <li
                key={item}
                onClick={() => handleNavClick(item)}
                className="relative px-4 py-3 text-base font-medium text-gray-200 hover:text-white rounded-xl transition-all cursor-pointer group"
              >
                {t[item]}
                {/* Underline animation */}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F97316] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 rounded-full" />
              </li>
            ))}
          </ul>

          <div className="space-y-3 pt-2">
            <a
              href={`tel:${t.phone}`}
              onClick={handleCopyPhone}
              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
            >
              <LuPhone className="text-[#F97316] text-xl" />
              <span className="text-base font-medium">{t.phone}</span>
            </a>

            <button
              onClick={() => {
                scrollToSection('contact');
                setIsOpen(false);
              }}
              className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-orange-500/20"
            >
              {t.jetzt_kontakt}
            </button>

            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="w-full flex items-center justify-between px-4 py-3 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <HiOutlineGlobeAlt className="h-5 w-5 text-[#F97316]" />
                  <span className="font-medium">{language.toUpperCase()}</span>
                </div>
                <IoChevronDown
                  className={`h-4 w-4 text-[#F97316] transition-transform duration-200 ${
                    mobileLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileLangOpen && (
                <div className="absolute left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl py-1 z-50 animate-fadeIn">
                  {["en", "de"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`block w-full text-left px-4 py-3 hover:bg-white/10 transition-colors ${
                        language === lang ? "text-[#F97316] font-semibold" : "text-gray-300"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Copy confirmation message */}
      {showCopyMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg border border-white/10 z-50 flex items-center space-x-2">
          <span className="text-[#F97316]">✓</span>
          <span>Phone number copied!</span>
        </div>
      )}
    </nav>
  );
};

export default Nav;