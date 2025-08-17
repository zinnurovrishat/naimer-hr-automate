import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Briefcase, Target, Calendar } from 'lucide-react';

const PartnerCandidates = () => {
  const candidates = [
    {
      skills: 'холод/тепло, CRM, отчётность',
      experience: 'Финтех/B2B продажи, 3+ года',
      motivation: 'фикс 80к + % от сделок',
      availability: '15.01'
    },
    {
      skills: 'входящие, работа с возражениями',
      experience: 'IT/SaaS продукты, 2+ года',
      motivation: 'KPI по конверсии + бонусы',
      availability: '22.01'
    },
    {
      skills: 'холод, допродажи, CRM',
      experience: 'Корп. сегмент/ритейл, 4+ года',
      motivation: 'фикс 70к + % + премии',
      availability: '28.01'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Примеры кандидатов
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {candidates.map((candidate, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <User className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Умеет:</div>
                    <div className="text-sm text-muted-foreground">{candidate.skills}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Опыт:</div>
                    <div className="text-sm text-muted-foreground">{candidate.experience}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Мотивация:</div>
                    <div className="text-sm text-muted-foreground">{candidate.motivation}</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground mb-1">Готов выйти:</div>
                    <div className="text-sm text-muted-foreground">{candidate.availability}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Показать ещё 3
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerCandidates;