import React from 'react';
import Home from './Home/NewComponents/Home';
import Navbar from './Home/NewComponents/Navbar';
import Solutions from './Home/NewComponents/Solutions';
import Info from './Home/components/InfoSection';
import HomeFAQs from './Home/components/HomeFAQ';
import Contact from './Home/components/ContactForm';
import MainFooter from './Home/components/MainFooter';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-white scroll-smooth">
      <Navbar />
      <div id="Home">
        <Home />
      </div>

      <Solutions />


      <div id="about-us">
        <Info />
      </div>

      <div id="faq">
        <HomeFAQs />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <MainFooter />
    </div>
  );
}

export default Index;
