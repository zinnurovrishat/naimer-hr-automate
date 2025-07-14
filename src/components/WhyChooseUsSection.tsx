
import React from 'react';
import { CheckCircle, Target, Users, Clock } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Кандидаты проходят воронку и уже знают о компании",
      description: "Никаких неожиданностей и отказов на финальной стадии"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Мы подбираем только целевых — по согласованным критериям",
      description: "Точное соответствие вашим требованиям и ожиданиям"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Кандидаты готовы к стажировке сразу после подачи",
      description: "Мотивированные специалисты, готовые приступить к работе"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Вы экономите недели подбора и общения с «не теми»",
      description: "Фокусируйтесь на бизнесе, а не на рутинном HR"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Объективный выбор лучших",
      description: "Получаете 5-25 кандидатов одновременно - сравниваете результаты в работе и выбираете топов"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Почему нас выбирают
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы работаем не как обычные HR-агентства. Наш подход — это готовые решения для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
