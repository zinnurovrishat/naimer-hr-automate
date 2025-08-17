
import React from 'react';
import Header from '@/components/Header';
import ModernHero from '@/components/ModernHero';
import QualifierSection from '@/components/QualifierSection';
import WhyItMatters from '@/components/WhyItMatters';
import KeyBenefits from '@/components/KeyBenefits';
import ModernHowItWorks from '@/components/ModernHowItWorks';
import ModernCases from '@/components/ModernCases';
import CandidatesSection from '@/components/CandidatesSection';
import PricingSection from '@/components/PricingSection';
import ModernCTA from '@/components/ModernCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ModernHero />
      <QualifierSection />
      <WhyItMatters />
      <KeyBenefits />
      <ModernHowItWorks />
      <ModernCases />
      <CandidatesSection />
      <PricingSection />
      <ModernCTA />
      <Footer />
    </div>
  );
};

export default Index;
