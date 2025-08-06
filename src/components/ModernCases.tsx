import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';

const ModernCases = () => {
  const cases = [
    {
      company: "ИП, Уфа",
      result: "7 кандидатов за 2 дня",
      outcome: "2 вышли на работу",
      description: "Нужны были продавцы-консультанты в салон красоты"
    },
    {
      company: "ООО \"ТехСервис\", Москва", 
      result: "12 кандидатов за 3 дня",
      outcome: "3 приняты на работу",
      description: "Искали менеджеров по продажам IT-услуг"
    },
    {
      company: "Сеть магазинов, СПб",
      result: "15 кандидатов за 4 дня", 
      outcome: "5 работают до сих пор",
      description: "Требовались кассиры и продавцы-консультанты"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Кейсы наших клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Реальные результаты компаний, которые уже используют наш автонайм
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cases.map((case_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {case_.company}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {case_.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-gray-900">
                    {case_.result}
                  </span>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <span className="text-sm font-bold text-green-700">
                    Результат: {case_.outcome}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernCases;