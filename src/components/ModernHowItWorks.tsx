import React from 'react';
import { Search, CheckCircle, Handshake } from 'lucide-react';

const ModernHowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Находим кандидатов, готовых выйти завтра',
      description: 'Ищем среди тех, кто уже готов к смене работы и может начать сразу'
    },
    {
      icon: CheckCircle,
      title: 'Проверяем навыки и мотивацию под ваши задачи',
      description: 'Тестируем опыт, компетенции и готовность работать именно у вас'
    },
    {
      icon: Handshake,
      title: 'Согласовываем только подходящих',
      description: 'Выдаем контакты тех, кто прошел все проверки и готов к работе'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernHowItWorks;