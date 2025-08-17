import React from 'react';
import { Check } from 'lucide-react';

const PartnerClientBenefits = () => {
  const benefits = [
    'скорость 48–72 ч',
    'кандидаты «знают продукт/задачи»',
    'нет марафона собеседований',
    'можно стартовать стажировку с D1',
    'гарантия соответствия критериям'
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Что получает клиент
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-primary/10 rounded-full p-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerClientBenefits;