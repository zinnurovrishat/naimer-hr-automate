
import React from 'react';
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      title: "Долгий поиск кандидатов",
      description: "Месяцы уходят на поиск подходящих резюме и проведение собеседований"
    },
    {
      title: "Высокий процент отказов",
      description: "Кандидаты отказываются или не проходят испытательный срок"
    },
    {
      title: "Долгая адаптация новичков", 
      description: "3-6 месяцев требуется для выхода сотрудника на полную эффективность"
    },
    {
      title: "Нет единых стандартов обучения",
      description: "Каждый новичок обучается по-разному, качество подготовки непредсказуемо"
    }
  ];

  const solutions = [
    {
      title: "Автоматический поиск и отбор",
      description: "ИИ анализирует резюме и предлагает лучших кандидатов за 24 часа"
    },
    {
      title: "Готовые к работе кандидаты",
      description: "Предварительное обучение и тестирование перед собеседованием"
    },
    {
      title: "Быстрая адаптация по сценариям",
      description: "Структурированная программа адаптации сокращает срок до 2 недель"
    },
    {
      title: "Единая база знаний компании",
      description: "Стандартизированные курсы и материалы для всех новых сотрудников"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Трансформируем ваши HR-процессы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Превращаем типичные проблемы найма в конкурентные преимущества 
            вашей компании с помощью автоматизации
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Problems Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-2">Проблемы</h3>
              <p className="text-gray-600">Типичные вызовы HR-отделов</p>
            </div>
            
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-red-50 border border-red-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{problem.title}</h4>
                    <p className="text-sm text-gray-600">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Column */}
          <div className="hidden lg:flex justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <p className="text-primary font-semibold">Автоматизация</p>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-green-600 mb-2">Решения</h3>
              <p className="text-gray-600">Наш подход к автоматизации</p>
            </div>
            
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-sm text-gray-600">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Результат: готовые специалисты за 2-4 дня
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Вместо месяцев поиска и адаптации получите эффективную команду за несколько дней
          </p>
          <div className="grid sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">-85%</div>
              <div className="text-sm opacity-80">времени на найм</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">+40%</div>
              <div className="text-sm opacity-80">качество кандидатов</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">-60%</div>
              <div className="text-sm opacity-80">текучесть кадров</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">+25%</div>
              <div className="text-sm opacity-80">рост продаж</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
