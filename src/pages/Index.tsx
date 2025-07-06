import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ProblemsSection from '@/components/ProblemsSection';
import PricingSection from '@/components/PricingSection';
import ResultsSection from '@/components/ResultsSection';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import ROICalculator from '@/components/ROICalculator';
import TelegramSection from '@/components/TelegramSection';
import DemoCallSection from '@/components/DemoCallSection';
import Footer from '@/components/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import StickyConsultButton from '@/components/StickyConsultButton';
import ClientCasesSection from '@/components/ClientCasesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ProblemsSection />
      <PricingSection />
      <ResultsSection />
      <ClientCasesSection />
      <StatsSection />
      <FAQSection />
      <ROICalculator />
      <TelegramSection />
      <DemoCallSection />
      <Footer />
      <StickyConsultButton />
    </div>
  );
};

export default Index;
