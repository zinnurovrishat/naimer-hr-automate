import React from 'react';
import { FileText, Settings, Users } from 'lucide-react';

const ModernHowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Оставляете заявку",
      description: "Заполните форму или позвоните — расскажите о ваших потребностях"
    },
    {
      number: 2,
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Мы настраиваем автонайм",
      description: "Наша система начинает поиск и подготовку кандидатов под ваши требования"
    },
    {
      number: 3,
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Через 3 дня у вас от 5 кандидатов",
      description: "Получаете готовых к работе сотрудников в личном кабинете"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой процесс в 3 шага — от заявки до готовых кандидатов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step number */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full font-bold text-xl mx-auto mb-6">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-50 rounded-full">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow connector (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHowItWorks;