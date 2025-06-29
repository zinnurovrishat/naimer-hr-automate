
import React from 'react';
import { Clock, RotateCcw, BookOpen, BarChart3 } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Поиск сотрудников занимает месяцы",
      description: "Долгий процесс размещения вакансий и отбора кандидатов"
    },
    {
      icon: RotateCcw,
      title: "Высокая текучка персонала",
      description: "Сотрудники увольняются в первые месяцы работы"
    },
    {
      icon: BookOpen,
      title: "Долгое обучение новичков",
      description: "Адаптация и обучение занимает 3-6 месяцев"
    },
    {
      icon: BarChart3,
      title: "Нет системы оценки кандидатов",
      description: "Отсутствуют единые критерии отбора и оценки"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Знакомые проблемы с наймом?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
