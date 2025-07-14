
import React from 'react';
import { Monitor, Settings, Bot, Users, Star } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Zoom-презентация",
      description: "Показываем систему и примеры кандидатов (10 минут)"
    },
    {
      number: 2,
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Согласование критериев",
      description: "HR-инженер детально обсуждает требования к кандидатам (30-40 минут)"
    },
    {
      number: 3,
      icon: <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Автоматический подбор",
      description: "Система сама находит, обучает и готовит кандидатов"
    },
    {
      number: 4,
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Получение кандидатов",
      description: "В личном кабинете через 1-2 дня - готовых к работе"
    },
    {
      number: 5,
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Выбор лучших",
      description: "Тестируете всех в работе и оставляете топов"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Простой процесс — от знакомства до готовых кандидатов
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Всего 5 этапов до получения готовых к работе сотрудников
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 px-4 lg:px-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full font-bold text-base sm:text-lg mx-auto mb-4 sm:mb-6">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="p-2.5 sm:p-3 bg-blue-50 rounded-full">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 sm:top-6 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
