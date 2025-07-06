
import React from 'react';
import { MapPin, TrendingUp, MessageCircle, Repeat } from 'lucide-react';

const AboutSection = () => {
  const facts = [
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      text: "География: работаем по всей России и СНГ"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />,
      text: "Подбор за 3–5 дней"
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-blue-600" />,
      text: "Средняя конверсия выхода: 40–60%"
    },
    {
      icon: <Repeat className="w-5 h-5 text-blue-600" />,
      text: "Повторный подбор: от 70% клиентов приходят снова"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            💼 О Наймер.Pro
          </h2>
          
          <div className="prose prose-lg max-w-none mb-8 sm:mb-12">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Наймер.Pro — сервис, созданный для предпринимателей, которым нужно быстро собрать сильный отдел продаж. 
              Мы строим воронки подбора, где кандидаты сами хотят попасть в вашу компанию. Вся наша система заточена под одно: 
              за 3–5 дней вы получаете готовых к работе сотрудников, с озвученным скриптом, пониманием продукта и мотивацией.
            </p>
            
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Мы работаем по отлаженной технологии, проверенной на десятках ниш — от недвижимости до онлайн-школ и B2B-продаж. 
              Без лишней бюрократии и HR-хаоса — просто кандидаты, которые готовы выходить на стажировку.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {facts.map((fact, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0 mr-3">
                  <div className="p-2 bg-blue-50 rounded-full">
                    {fact.icon}
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
