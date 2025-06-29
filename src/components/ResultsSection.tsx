
import React from 'react';
import { TrendingUp, Clock, Users } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    {
      company: "Юридическая компания (Ростов-на-Дону)",
      icon: Clock,
      before: "Было: поиск сотрудников 2+ месяца",
      after: "Стало: 3 менеджера за 1 неделю",
      result: "Результат: выручка выросла с 3.5 до 7 млн ₽/мес"
    },
    {
      company: "IT-компания (Москва)",
      icon: Users,
      before: "Было: найм 30 дней + долгая адаптация",
      after: "Стало: найм 5 дней + готовые сотрудники",
      result: "Результат: текучка снижена на 40%"
    },
    {
      company: "Агентство недвижимости (СПб)",
      icon: TrendingUp,
      before: "Было: хаотичное обучение новичков",
      after: "Стало: автоматическая система подготовки",
      result: "Результат: рост продаж на 25%"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Реальные результаты наших клиентов
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">{item.company}</h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700 text-sm font-medium">{item.before}</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-700 text-sm font-medium">{item.after}</p>
                  </div>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-primary font-bold text-sm">{item.result}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
