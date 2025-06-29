
import React from 'react';
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CasesSection = () => {
  const cases = [
    {
      company: "Юридическая компания",
      industry: "Юридические услуги",
      challenge: "Необходимо было быстро нанять 3 менеджеров по продажам для расширения",
      solution: "Внедрили автонайм с интеграцией HH.ru + модуль «Мастер продаж»",
      results: [
        { icon: Clock, value: "7 дней", label: "на найм всех кандидатов" },
        { icon: DollarSign, value: "3.5 → 7 млн ₽", label: "рост выручки в месяс" },
        { icon: TrendingUp, value: "+100%", label: "рост конверсии продаж" }
      ],
      testimonial: "За неделю получили трех готовых специалистов. Выручка выросла вдвое уже через месяц работы.",
      author: "Михаил Петров, Управляющий партнер"
    },
    {
      company: "IT-компания",
      industry: "Разработка ПО",
      challenge: "Долгий процесс найма разработчиков, высокая текучесть кадров",
      solution: "LMS-платформа для адаптации + система отбора кандидатов",
      results: [
        { icon: Clock, value: "30 → 5 дней", label: "сокращение времени найма" },
        { icon: Users, value: "-40%", label: "снижение текучести" },
        { icon: TrendingUp, value: "+30%", label: "рост продуктивности" }
      ],
      testimonial: "Система адаптации помогла новичкам быстрее включиться в проекты. Текучка снизилась почти вдвое.",
      author: "Анна Сидорова, HR-директор"
    },
    {
      company: "Агентство недвижимости",
      industry: "Недвижимость",
      challenge: "Нестабильные результаты агентов, нет единых стандартов работы",
      solution: "Модули «Телемаркетинг» + «Система отдела продаж» + автообучение",
      results: [
        { icon: TrendingUp, value: "+25%", label: "рост средней сделки" },
        { icon: Users, value: "15 агентов", label: "прошли обучение" },
        { icon: DollarSign, value: "+2.8 млн ₽", label: "прирост за квартал" }
      ],
      testimonial: "Агенты стали работать по единым стандартам, результаты стали предсказуемыми и стабильными.",
      author: "Игорь Волков, Директор по продажам"
    }
  ];

  return (
    <section id="cases" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Истории успеха наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные результаты компаний, которые автоматизировали свои HR-процессы 
            и получили конкурентные преимущества
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-lg"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Company Info */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{caseStudy.company}</h3>
                      <p className="text-gray-600">{caseStudy.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Задача:</h4>
                      <p className="text-gray-700">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Решение:</h4>
                      <p className="text-gray-700">{caseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      "{caseStudy.testimonial}"
                    </blockquote>
                    <cite className="text-sm text-primary font-medium">
                      — {caseStudy.author}
                    </cite>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    Результаты внедрения
                  </h4>
                  
                  <div className="space-y-4">
                    {caseStudy.results.map((result, idx) => {
                      const IconComponent = result.icon;
                      return (
                        <div 
                          key={idx}
                          className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                              <div className="text-sm text-gray-600">{result.label}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Получите похожие результаты в вашей компании
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию и узнайте, 
              как автоматизация поможет вашему бизнесу
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-50"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
