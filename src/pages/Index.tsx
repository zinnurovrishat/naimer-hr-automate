
import React from 'react';
import Header from '@/components/Header';
import ModernHero from '@/components/ModernHero';
import ModernHowItWorks from '@/components/ModernHowItWorks';
import ModernCases from '@/components/ModernCases';
import ModernCTA from '@/components/ModernCTA';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProblemsSection from '@/components/ProblemsSection';
import WhatYouGetSection from '@/components/WhatYouGetSection';
import WhoItsFitForSection from '@/components/WhoItsFitForSection';
import PricingSection from '@/components/PricingSection';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import TelegramSection from '@/components/TelegramSection';
import DemoCallSection from '@/components/DemoCallSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import StickyConsultButton from '@/components/StickyConsultButton';
import ClientCasesSection from '@/components/ClientCasesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <Header />
      <ModernHero />
      <ModernHowItWorks />
      <ModernCases />
      <ModernCTA />
      <WhyChooseUsSection />
      <ProblemsSection />
      <WhatYouGetSection />
      <WhoItsFitForSection />
      <PricingSection />
      <ClientCasesSection />
      <StatsSection />
      <FAQSection />
      <TelegramSection />
      <DemoCallSection />
      <AboutSection />
      <Footer />
      <StickyConsultButton />
    </div>
  );
};

export default Index;
