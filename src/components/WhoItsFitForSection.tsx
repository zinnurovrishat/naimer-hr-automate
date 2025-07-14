import React from 'react';
import { Users, TrendingUp, Clock } from 'lucide-react';

const WhoItsFitForSection = () => {
  const criteria = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Штат от 3 человек",
      description: "Есть кому обучать и контролировать новых сотрудников"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Планы нанять 3+ сотрудников",
      description: "В ближайшие 1-2 месяца для развития бизнеса"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Нужны сейчас",
      description: "Не через полгода, а в ближайшие недели"
    }
  ];

  const positions = [
    "Менеджеры по продажам",
    "Операторы колл-центра",
    "Маркетологи",
    "Руководители отделов продаж (РОПы)"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Подходит компаниям, которые готовы расти
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Проверьте, подходит ли вам наша система подбора готовых сотрудников
          </p>
        </div>

        {/* Критерии компании */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {criteria.map((criterion, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {criterion.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {criterion.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {criterion.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Позиции для подбора */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Позиции для подбора
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {positions.map((position, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 text-center border border-blue-100">
                <span className="text-gray-700 font-medium text-sm lg:text-base">
                  {position}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFitForSection;