import React from 'react';
import { AlertTriangle } from 'lucide-react';

const QualifierSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Наши услуги <span className="text-primary">100% полезны, если:</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">😤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Вы месяцами не можете закрыть вакансию
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">😤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Вы устали от нецелевых кандидатов
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">😤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Вы повышаете оклады, но это не помогает
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">😤</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Кандидаты приходят, но "не те"
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Просто получайте кандидатов, которые уже хотят у вас работать
            </h3>
            <p className="text-lg opacity-90">
              ⚡ Без звонков и интервью. Быстрый подбор с помощью новых технологий
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualifierSection;