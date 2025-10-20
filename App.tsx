
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Guarantee from './components/Guarantee';
import Reviews from './components/Reviews';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Guarantee />
        <Reviews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
