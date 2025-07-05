
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ProblemsSection from '@/components/ProblemsSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import ResultsSection from '@/components/ResultsSection';
import SocialProofSection from '@/components/SocialProofSection';
import StatsSection from '@/components/StatsSection';
import CasesSection from '@/components/CasesSection';
import FAQSection from '@/components/FAQSection';
import ROICalculator from '@/components/ROICalculator';
import DemoCallSection from '@/components/DemoCallSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import StickyConsultButton from '@/components/StickyConsultButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgressBar />
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <ProblemsSection />
      <ServicesSection />
      <PricingSection />
      <ResultsSection />
      <SocialProofSection />
      <StatsSection />
      <CasesSection />
      <FAQSection />
      <ROICalculator />
      <DemoCallSection />
      <CTASection />
      <Footer />
      <StickyConsultButton />
    </div>
  );
};

export default Index;
