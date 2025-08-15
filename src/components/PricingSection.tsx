import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from 'lucide-react';

const PricingSection = () => {
  const handleOrderClick = () => {
    const ctaSection = document.getElementById('cta-form');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Мини",
      price: "19 900",
      candidates: "5",
      description: "Идеально, чтобы нанять 1-3 сотрудников и попробовать наш сервис",
      popular: false
    },
    {
      name: "Малый",
      price: "10 000",
      candidates: "15",
      description: "Идеально, чтобы нанять 3-5 сотрудников очень быстро и очень просто",
      popular: true
    },
    {
      name: "Средний",
      price: "8 000",
      candidates: "25",
      description: "Идеально, чтобы нанять 5-10 сотрудников очень быстро и очень просто",
      popular: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              А что почем?
            </h2>
            <p className="text-xl text-gray-600">
              Просто выберите, сколько вы хотите кандидатов. И они будут у вас =)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-8 ${plan.popular ? 'ring-2 ring-primary shadow-xl' : 'shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-sm text-gray-500 mr-1">⚡ Всего</span>
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-500 ml-1">₽</span>
                  </div>
                  <p className="text-sm text-gray-500">/кандидат*</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      🔵 Вы получите <strong>{plan.candidates}</strong> готовых к работе кандидатов, отобранных по Вашим критериям
                    </span>
                  </div>
                  
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      🟣 Гарантия целевых кандидатов по согласованным критериям
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 text-center">
                  {plan.description}
                </p>

                <Button 
                  onClick={handleOrderClick}
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                  size="lg"
                >
                  Подключить
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Привлекайте клиентов, заключайте сделки и развивайте бизнес силами команды!
            </p>
            <p className="text-sm text-gray-500">
              * Цена указана за одного качественного кандидата
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;