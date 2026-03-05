import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Index from "./components/Homepage/Index";
import Footer from "./components/Footer/Footer";
import translations from "./translations"; // adjust path if needed

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <Nav language={language} setLanguage={setLanguage} t={translations[language]} />
      <Routes>
        <Route path="/" element={<Index language={language} t={translations[language]} />} />
      </Routes>
      <Footer t={translations[language]} />
    </Router>
  );
};

export default App;