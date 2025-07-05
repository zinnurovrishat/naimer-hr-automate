
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from 'lucide-react';

const PricingSection = () => {
  const handleZoomClick = () => {
    window.location.href = 'tel:+79177969222';
  };

  const plans = [
    {
      name: "Мини",
      candidates: "5 кандидатов",
      price: "99 500 ₽",
      isPopular: false,
      features: [
        "5 готовых кандидатов",
        "Полный скрининг пройден",
        "Знают о вашей компании",
        "Готовы к старту сразу",
        "Фиксированная цена"
      ]
    },
    {
      name: "Малый",
      candidates: "15 кандидатов",
      price: "150 000 ₽",
      isPopular: true,
      features: [
        "15 готовых кандидатов",
        "Полный скрининг пройден",
        "Знают о вашей компании",
        "Готовы к старту сразу",
        "Фиксированная цена",
        "Приоритетная поддержка"
      ]
    },
    {
      name: "Средний",
      candidates: "25 кандидатов",
      price: "200 000 ₽",
      isPopular: false,
      features: [
        "25 готовых кандидатов",
        "Полный скрининг пройден",
        "Знают о вашей компании",
        "Готовы к старту сразу",
        "Фиксированная цена",
        "Персональный менеджер",
        "Гарантия замены"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Тарифы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Кандидаты по фиксированной цене, никаких звонков и рутин
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <CheckCircle className="w-4 h-4 mr-2" />
            Все кандидаты уже прошли скрининг и готовы к старту
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
              plan.isPopular 
                ? 'border-blue-600 ring-4 ring-blue-100' 
                : 'border-gray-200 hover:border-blue-300'
            }`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Популярный
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.candidates}</p>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-sm text-gray-500">Фиксированная стоимость</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 text-lg font-medium ${
                    plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  onClick={handleZoomClick}
                >
                  Выбрать тариф
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Не подходит ни один тариф? Обсудим индивидуальные условия
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
            onClick={handleZoomClick}
          >
            Индивидуальный расчет
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
