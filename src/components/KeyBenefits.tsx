import React from 'react';
import { Target, Zap, Users, DollarSign, Globe, Star, CheckCircle, PhoneOff } from 'lucide-react';

const KeyBenefits = () => {
  const benefits = [
    { icon: Target, text: "Целевые кандидаты" },
    { icon: Zap, text: "X10 раз быстрее" },
    { icon: Users, text: "Помощь в подборе" },
    { icon: DollarSign, text: "Оплата за факт" },
    { icon: Globe, text: "Любые должности" },
    { icon: Globe, text: "Полностью онлайн" },
    { icon: Star, text: "Выбор из лучших" },
    { icon: CheckCircle, text: "Знакомы с компанией" },
    { icon: CheckCircle, text: "Выполнили задание" },
    { icon: PhoneOff, text: "Без единого звонка!" }
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Получайте только подходящих кандидатов
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-primary/10 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-200"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-gray-800">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-primary font-semibold">
              Подбираем в 10 раз быстрее "ручной работы"
            </p>
            <p className="text-gray-600 mt-2">
              Поможем выбрать лучших для вашей компании
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;