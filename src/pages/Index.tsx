
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemsSection from '@/components/ProblemsSection';
import ServicesSection from '@/components/ServicesSection';
import CasesSection from '@/components/CasesSection';
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
      <CasesSection />
      <ROICalculator />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
