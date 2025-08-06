
import React from 'react';
import Header from '@/components/Header';
import ModernHero from '@/components/ModernHero';
import ModernHowItWorks from '@/components/ModernHowItWorks';
import ModernCases from '@/components/ModernCases';
import ModernCTA from '@/components/ModernCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ModernHero />
      <ModernHowItWorks />
      <ModernCases />
      <ModernCTA />
      <Footer />
    </div>
  );
};

export default Index;
