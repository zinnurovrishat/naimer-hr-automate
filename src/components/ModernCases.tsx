import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Users, Clock, CheckCircle } from 'lucide-react';

const ModernCases = () => {
  const cases = [
    {
      type: "ИП",
      location: "Уфа",
      industry: "Розничная торговля",
      challenge: "Нужны были продавцы-консультанты в новый магазин электроники",
      result: {
        candidates: 7,
        days: 2,
        hired: 2,
        description: "За 2 дня получили 7 кандидатов, 2 вышли на работу и показывают отличные результаты"
      },
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      type: "ООО",
      location: "Москва",
      industry: "IT-услуги",
      challenge: "Срочно требовались менеджеры по продажам для нового направления",
      result: {
        candidates: 12,
        days: 3,
        hired: 4,
        description: "Получили 12 квалифицированных кандидатов за 3 дня, 4 сотрудника приступили к работе"
      },
      icon: <CheckCircle className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Истории успеха наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реальные результаты — быстрый найм качественных сотрудников
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                {caseStudy.icon}
                <div>
                  <div className="font-semibold text-gray-900">
                    {caseStudy.type}, {caseStudy.location}
                  </div>
                  <div className="text-sm text-gray-600">{caseStudy.industry}</div>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Задача:</h3>
                <p className="text-gray-600">{caseStudy.challenge}</p>
              </div>

              {/* Results */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Результат:</h3>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{caseStudy.result.candidates}</div>
                    <div className="text-xs text-gray-600">кандидатов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{caseStudy.result.days}</div>
                    <div className="text-xs text-gray-600">дня</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{caseStudy.result.hired}</div>
                    <div className="text-xs text-gray-600">принято</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{caseStudy.result.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernCases;