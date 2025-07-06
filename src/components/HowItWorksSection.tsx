
import React from 'react';
import { Presentation, HandHeart, Users, HeartHandshake } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: <Presentation className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Zoom-презентация",
      description: "Покажем, как работает подбор"
    },
    {
      number: 2,
      icon: <HandHeart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Согласование вакансий и критериев",
      description: "Детально обсуждаем требования"
    },
    {
      number: 3,
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Получение кандидатов",
      description: "Готовых, проверенных"
    },
    {
      number: 4,
      icon: <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Адаптация и сопровождение",
      description: "По желанию"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Как это работает
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Простой и понятный процесс — от знакомства до готовых кандидатов
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 lg:px-0">
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
