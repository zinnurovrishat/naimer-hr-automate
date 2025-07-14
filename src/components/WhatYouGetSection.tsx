import React from 'react';
import { FileText, Video, CheckCircle, Zap } from 'lucide-react';

const WhatYouGetSection = () => {
  const benefits = [
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Знает вашу компанию",
      description: "Изучил продукт, услуги, систему мотивации и этапы стажировки"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Прошел видео-интервью",
      description: "Записал визитку, выполнил задания, выучил часть скрипта"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Подтвердил готовность",
      description: "Говорит: 'Хочу работать именно у вас и показать результат!'"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Готов к старту",
      description: "Может приступить к работе сразу после финального отбора"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Каждый кандидат приходит подготовленным
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Вы получаете не просто резюме, а людей, готовых работать именно у вас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white border border-gray-100">
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

export default WhatYouGetSection;