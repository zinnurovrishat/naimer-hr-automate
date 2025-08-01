
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
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Тарифы
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
            Кандидаты по фиксированной цене, никаких звонков и рутин
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mx-4">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Все кандидаты уже прошли скрининг и готовы к старту
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4 lg:px-0">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
              plan.isPopular 
                ? 'border-blue-600 ring-4 ring-blue-100' 
                : 'border-gray-200 hover:border-blue-300'
            }`}>
              {plan.isPopular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Популярный
                  </div>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{plan.candidates}</p>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                  <p className="text-xs sm:text-sm text-gray-500">Фиксированная стоимость</p>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-2.5 sm:py-3 text-base sm:text-lg font-medium ${
                    plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  onClick={handleZoomClick}
                >
                  Заказать готовых кандидатов
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Гарантии и дополнительные преимущества */}
        <div className="bg-green-50 rounded-xl p-6 mt-8 sm:mt-12 mx-4 lg:mx-0">
          <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <div className="flex items-center text-green-800">
              <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
              <span>Гарантия 100% возврата, если кандидаты не соответствуют согласованным критериям</span>
            </div>
            <div className="flex items-center text-green-800">
              <Star className="w-5 h-5 mr-3 text-green-600" />
              <span>Скидка 30% при продолжении сотрудничества без остановки</span>
            </div>
            <div className="flex items-center text-green-800">
              <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
              <span>Все кандидаты прошли видео-интервью и выполнили практические задания</span>
            </div>
            <div className="flex items-center text-green-800 font-semibold">
              <Star className="w-5 h-5 mr-3 text-green-600" />
              <span>Новым клиентам: 15 кандидатов по цене 5 (экономия 50,500₽)</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Не подходит ни один тариф? Обсудим индивидуальные условия
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
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
