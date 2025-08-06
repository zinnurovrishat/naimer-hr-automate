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
            Нужны сотрудники за 3 дня?
            <br />
            <span className="text-primary">Получите от 5 готовых кандидатов</span>{' '}
            без HR-рутины
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Автонайм через нашу систему — кандидаты сами приходят, вы выбираете лучших
          </p>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-4 shadow-lg"
            onClick={handleGetCandidates}
          >
            Получить кандидатов
          </Button>

          {/* Scroll indicator */}
          <div className="mt-16">
            <ArrowDown className="w-6 h-6 text-primary mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;