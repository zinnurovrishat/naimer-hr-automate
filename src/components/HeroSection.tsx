
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle, Users, Clock, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:pr-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Автоматизируем найм и обучение сотрудников с помощью{' '}
                <span className="text-primary">передовых IT-решений</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Помогаем HR-отделам получать готовых к работе кандидатов за 2-4 дня 
                вместо месяцев поиска. Интеграция с HH.ru, автоматическое обучение, 
                готовые модули для любой отрасли
              </p>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">10+ готовых кандидатов за неделю</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">Экономия 70% времени HR</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">Снижение текучки на 40%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium">Рост продаж на 25%</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                >
                  Получить бесплатную консультацию
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
                >
                  Рассчитать экономию
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Нам доверяют:</p>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-primary mr-2" />
                    <div>
                      <div className="font-bold text-lg">50+</div>
                      <div className="text-sm text-gray-500">компаний</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-primary mr-2" />
                    <div>
                      <div className="font-bold text-lg">2000+</div>
                      <div className="text-sm text-gray-500">часов сэкономлено</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-primary mr-2" />
                    <div>
                      <div className="font-bold text-lg">500+</div>
                      <div className="text-sm text-gray-500">сотрудников нанято</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:pl-8">
            <div className="relative animate-slide-up">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Автоматизация найма в цифрах
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Время поиска кандидата</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 line-through">30 дней</div>
                        <div className="text-lg font-bold text-green-600">2-4 дня</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Успешная адаптация</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 line-through">60%</div>
                        <div className="text-lg font-bold text-green-600">85%</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Текучесть персонала</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 line-through">25%</div>
                        <div className="text-lg font-bold text-green-600">15%</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">700,000₽</div>
                      <div className="text-sm text-gray-600">экономия в год на одном HR-менеджере</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <ArrowDown className="w-6 h-6 text-primary mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
