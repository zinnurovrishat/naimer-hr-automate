import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const PartnerPricing = () => {
  const packages = [
    {
      candidates: '5 кандидатов',
      price: '99 500 ₽',
      description: 'Базовый пакет для небольших команд'
    },
    {
      candidates: '15 кандидатов',
      price: '150 000 ₽',
      description: 'Оптимальный выбор для растущих отделов',
      popular: true
    },
    {
      candidates: '25 кандидатов',
      price: '200 000 ₽',
      description: 'Максимальный выбор для крупных проектов'
    }
  ];

  const scrollToForm = () => {
    document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="packages" className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Пакеты и цены
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-sm p-6 relative ${
                pkg.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Популярный
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pkg.candidates}
                </h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  {pkg.price}
                </div>
                <p className="text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              <Button 
                onClick={scrollToForm}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Передать лида
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Оплата фикс. по пакету. Гарантия соответствия — замена/возврат.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerPricing;