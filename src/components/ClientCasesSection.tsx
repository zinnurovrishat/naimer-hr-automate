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
      title: "Как за 4 дня мы подобрали команду в агентство недвижимости в Казани",
      subtitle: "7 кандидатов, готовых к работе, 3 вышли на сделки — рост встреч по новостройкам на 35% уже через 10 дней",
      description: "Агентство недвижимости из Казани обратилось с задачей: нанять 3–5 активных продавцов на новостройки и одного координатора. Ранее тратили 3–4 недели на поиск, а люди всё равно «пропадали». За 4 дня мы предоставили 7 целевых кандидатов, прошедших воронку отбора — с видеоответами, озвученным скриптом и знанием продукта. Руководитель выбрал 3-х: двое агентов уже начали показы квартир, координатор принял 18 заявок в первую неделю. Встречи с потенциальными покупателями выросли на 35% за 10 дней.",
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
      title: "Как онлайн-школа получила 15 готовых операторов за неделю",
      subtitle: "Продажи выросли на 40% за счёт быстрого усиления команды входящих заявок",
      description: "Онлайн-школа по подготовке к ОГЭ и ЕГЭ столкнулась с проблемой: менеджеры не справлялись с потоком заявок, а новые люди быстро «сдувались» на стажировке. Мы подключились и за 7 дней передали 15 целевых операторов, уже прошедших воронку: они знали оффер школы, записали видео, озвучили часть скрипта и подтвердили мотивацию. За счёт ускоренного входа в работу, уровень обработки заявок вырос, а продажи — увеличились на 40% уже в первый месяц.",
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
    <section id="client-cases" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 scroll-fade-in ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Результаты наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные кейсы с цифрами и отзывами
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {cases.map((caseItem, index) => {
            const IconComponent = caseItem.icon;
            return (
              <Card 
                key={index}
                className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow scroll-fade-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            {caseItem.emoji} {caseItem.title}
                          </h3>
                          <p className="text-lg text-primary font-semibold mb-4">
                            {caseItem.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {caseItem.description}
                      </p>
                      
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <p className="text-gray-800 italic text-lg">
                          "{caseItem.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-gray-900 mb-6">Результаты в цифрах</h4>
                      {caseItem.stats.map((stat, statIndex) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={statIndex} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <StatIcon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">{stat.emoji} {stat.label}</p>
                                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
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
