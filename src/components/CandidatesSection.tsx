import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Calendar, Target, Briefcase } from 'lucide-react';

const CandidatesSection = () => {
  const candidates = [
    {
      name: "Менеджер по продажам",
      skills: "Холодные звонки, работа с CRM (amoCRM), ведение отчётности",
      experience: "3 года в IT-продажах, B2B сегмент",
      motivation: "Оклад 60к + 3% с продаж",
      readyDate: "15.01",
      avatar: "👩‍💼"
    },
    {
      name: "Специалист по привлечению",
      skills: "Тёплые продажи, CRM (Битрикс24), KPI и аналитика", 
      experience: "2 года в недвижимости, работа с лидами",
      motivation: "KPI-система, до 80к при выполнении",
      readyDate: "18.01",
      avatar: "👨‍💼"
    },
    {
      name: "Консультант-продавец",
      skills: "Консультации, работа с возражениями, CRM-системы",
      experience: "4 года в ритейле, управление клиентской базой",
      motivation: "Фикс 50к + бонусы за план",
      readyDate: "12.01", 
      avatar: "👨‍💻"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-primary">Кандидаты</span>, готовые выйти к Вам на работу
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Реальные примеры специалистов, которые ищут работу прямо сейчас
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {candidates.map((candidate, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    {candidate.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {candidate.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Умеет:</p>
                      <p className="text-sm text-gray-600">{candidate.skills}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Опыт:</p>
                      <p className="text-sm text-gray-600">{candidate.experience}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Мотивация:</p>
                      <p className="text-sm text-gray-600">{candidate.motivation}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Готов выйти:</p>
                      <p className="text-sm font-bold text-green-600">{candidate.readyDate}</p>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                  size="lg"
                >
                  Получить кандидатов
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            * Примеры реальных кандидатов из нашей базы
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 px-8"
          >
            Посмотреть всех кандидатов
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;