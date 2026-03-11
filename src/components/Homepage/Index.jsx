// Index.jsx
import React from 'react';
import Hero from './Hero';
import Chalenge from './Chalenge';
import RELIEF from './RELIEF';
import Services from './Services';
import Cards from './Cards';
import CustomerReviews from './CustomerReviews';
import Process from './Process';
import Faqz from './Faqz';
import ContactSection from './ContactSection';
import Projects from './Projects';

const Index = ({ language, t }) => {
  return (
    <div>
      <Hero language={language} t={t} />
      <Chalenge language={language} t={t} />
      <RELIEF language={language} t={t} />
      <Services language={language} t={t} />
      <Process language={language} t={t} />
      <Projects language={language} t={t} />
      <Cards language={language} t={t} />
      <CustomerReviews language={language} t={t} />
      <Faqz language={language} t={t} />
      <ContactSection language={language} t={t} />
    </div>
  );
};

export default Index;