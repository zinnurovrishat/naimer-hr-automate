import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const ModernHero = () => {
  const handleGetCandidates = () => {
    const ctaSection = document.getElementById('cta-form');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="text-red-600">Закрывайте вакансии за 1–5 дней</span>
            <br />
            и перестаньте терять деньги
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Пока позиции открыты — вы упускаете клиентов, сделки и рост. <br />
            <span className="text-primary font-semibold">Когда готовые к работе сотрудники выходят завтра — вы зарабатываете больше</span>
          </p>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 shadow-lg mb-4"
            onClick={handleGetCandidates}
          >
            Получить кандидатов за 1 день
          </Button>

          {/* Trust factor */}
          <p className="text-sm text-gray-500 mb-8">
            87% клиентов продолжают работать с нами
          </p>

          {/* Scroll indicator */}
          <div className="mt-8">
            <ArrowDown className="w-6 h-6 text-primary mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;