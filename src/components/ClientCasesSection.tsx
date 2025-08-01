
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building, GraduationCap, Clock, Users, Target, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ClientCasesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const cases = [
    {
      icon: Building,
      emoji: "🏠",
      title: "🏢 Как агентство недвижимости получило 7 готовых менеджеров за 4 дня",
      subtitle: "7 кандидатов прошли полный отбор с видео-визитками, изученными скриптами и знанием продукта",
      description: "7 кандидатов прошли полный отбор - с видео-визитками, изученными скриптами и знанием продукта. Руководитель выбрал 3 лучших, которые сразу начали показывать результат. Встречи с клиентами выросли на 35% уже через 10 дней.",
      quote: "Кандидаты оказались реально заряженными. Один уже на третий день сделал бронь по новостройке. Будем подключать вас на франшизу!",
      stats: [
        { icon: Clock, label: "Срок", value: "4 дня", emoji: "📅" },
        { icon: Users, label: "Кандидатов", value: "7", emoji: "👥" },
        { icon: Target, label: "Приняты", value: "3", emoji: "✅" },
        { icon: TrendingUp, label: "Результат", value: "+35% к встречам", emoji: "📈" }
      ]
    },
    {
      icon: GraduationCap,
      emoji: "🎓",
      title: "🎓 Онлайн-школа получила 15 готовых операторов за неделю",
      subtitle: "15 операторов пришли уже знающими продукт, скрипты и мотивацию",
      description: "15 операторов пришли уже знающими продукт, скрипты и мотивацию. Все прошли отбор через видео-интервью. 6 из них перешли в менеджеры после успешной стажировки. Продажи выросли на 40% в первый же месяц.",
      quote: "Ни один HR нам такого не делал. За неделю получили больше толковых кандидатов, чем за 2 месяца поиска. Часть уже перешла в менеджеров — работают в удовольствие.",
      stats: [
        { icon: Clock, label: "Срок", value: "7 дней", emoji: "🕒" },
        { icon: Users, label: "Кандидатов", value: "15", emoji: "📞" },
        { icon: Target, label: "Приняты", value: "6", emoji: "🎯" },
        { icon: TrendingUp, label: "Рост продаж", value: "+40%", emoji: "📈" }
      ]
    }
  ];

  return (
    <section id="client-cases" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-12 sm:mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Результаты наших клиентов
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Реальные кейсы с цифрами и отзывами
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <Card 
                key={index}
                className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow scroll-fade-in ${isVisible ? 'visible' : ''} mx-2 sm:mx-0`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-4 sm:p-6 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                            {caseItem.emoji} {caseItem.title}
                          </h3>
                          <p className="text-base sm:text-lg text-primary font-semibold mb-3 sm:mb-4">
                            {caseItem.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                        {caseItem.description}
                      </p>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 rounded-r-lg">
                        <p className="text-gray-800 italic text-sm sm:text-base lg:text-lg">
                          "{caseItem.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">Результаты в цифрах</h4>
                      {caseItem.stats.map((stat, statIndex) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={statIndex} className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <StatIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-xs sm:text-sm text-gray-600">{stat.emoji} {stat.label}</p>
                                <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">{stat.value}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientCasesSection;
