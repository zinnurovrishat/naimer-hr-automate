
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import ServicesSection from '@/components/ServicesSection';
import ResultsSection from '@/components/ResultsSection';
import StatsSection from '@/components/StatsSection';
import CasesSection from '@/components/CasesSection';
import FAQSection from '@/components/FAQSection';
import ROICalculator from '@/components/ROICalculator';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <ResultsSection />
      <StatsSection />
      <CasesSection />
      <FAQSection />
      <ROICalculator />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
