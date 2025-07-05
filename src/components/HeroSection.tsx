
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle, Users, Clock, TrendingUp, Target, Zap, Award } from 'lucide-react';

const HeroSection = () => {
  const handleZoomClick = () => {
    window.location.href = 'tel:+79177969222';
  };

  const handleCalculateClick = () => {
    const roiSection = document.querySelector('[data-section="roi-calculator"]');
    if (roiSection) {
      roiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:pr-8">
            <div className="animate-fade-in">
              {/* Trust badge */}
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle className="w-4 h-4 mr-2" />
                Гарантия результата
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Собираем отдел продаж{' '}
                <span className="text-blue-600">за 3 дня</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Подбор, адаптация и мотивация кандидатов без HR. 
                Готовые продавцы с первого дня работы
              </p>

              {/* Key benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="font-medium">Точный подбор</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Zap className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="font-medium">Быстрый старт</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="font-medium">Высокий результат</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 shadow-lg"
                  onClick={handleZoomClick}
                >
                  Записаться на Zoom-презентацию
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-4"
                  onClick={handleCalculateClick}
                >
                  Рассчитать стоимость
                </Button>
              </div>

              {/* Social proof */}
              <div className="flex items-center space-x-8 text-gray-600">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  <span className="font-medium">87% закрывают план продаж</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  <span className="font-medium">3 дня до работы</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results Dashboard */}
          <div className="lg:pl-8">
            <div className="relative animate-slide-up">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Результаты клиентов
                    </h3>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-5 h-5 mr-1" />
                      <span className="text-sm font-medium">+127%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Скорость закрытия вакансий</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 line-through">21 день</div>
                        <div className="text-lg font-bold text-green-600">3 дня</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Выполнение плана продаж</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 line-through">64%</div>
                        <div className="text-lg font-bold text-green-600">87%</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Удержание сотрудников</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 line-through">3 мес</div>
                        <div className="text-lg font-bold text-green-600">12+ мес</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">1,200,000₽</div>
                      <div className="text-sm text-gray-600">прибыль с одного продавца в год</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <ArrowDown className="w-6 h-6 text-blue-600 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
