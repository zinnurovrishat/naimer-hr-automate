
import React from 'react';
import ModernHero from '@/components/ModernHero';
import ModernHowItWorks from '@/components/ModernHowItWorks';
import ModernCases from '@/components/ModernCases';
import ModernCTA from '@/components/ModernCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ModernHero />
      <ModernHowItWorks />
      <ModernCases />
      <ModernCTA />
    </div>
  );
};

export default Index;
