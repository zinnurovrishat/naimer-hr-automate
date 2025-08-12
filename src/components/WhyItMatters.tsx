import React from 'react';
import { TrendingUp, TrendingDown, Clock, DollarSign, Users, Target } from 'lucide-react';

const WhyItMatters = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Больше сделок',
      description: 'Продавец выходит завтра — первая сделка на следующей неделе',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Довольные клиенты',
      description: 'Менеджер на месте — клиенты получают быстрые ответы и решения',
      color: 'text-blue-600'
    },
    {
      icon: Target,
      title: 'Рост оборота',
      description: 'Полная команда = выполнение планов и превышение целей',
      color: 'text-primary'
    }
  ];

  const losses = [
    {
      icon: DollarSign,
      title: 'Потерянная прибыль',
      description: 'Каждый день без продавца = пропущенные сделки на 50-200 тысяч',
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Время руководителя',
      description: 'Вы тратите часы на поиск вместо развития бизнеса',
      color: 'text-orange-600'
    },
    {
      icon: TrendingDown,
      title: 'Недовольство клиентов',
      description: 'Длинные ответы и перегрузка команды = уход к конкурентам',
      color: 'text-red-500'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-red-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Почему скорость найма критически важна
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Разница между «завтра» и «через месяц» — это сотни тысяч рублей
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Что вы получаете */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              ✅ Когда позиции закрыты за 2–5 дней
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Что вы теряете */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              ❌ Пока вакансии висят месяцами
            </h3>
            <div className="space-y-6">
              {losses.map((loss, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center`}>
                    <loss.icon className={`w-6 h-6 ${loss.color}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {loss.title}
                    </h4>
                    <p className="text-gray-600">
                      {loss.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Хватит терять деньги на пустых местах
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Получите первых готовых кандидатов уже завтра
            </p>
            <button 
              onClick={() => {
                const ctaSection = document.getElementById('cta-form');
                if (ctaSection) {
                  ctaSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transition-colors"
            >
              Заполнить заявку сейчас
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;