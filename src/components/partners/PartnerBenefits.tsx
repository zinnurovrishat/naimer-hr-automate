import React from 'react';
import { DollarSign, BarChart, ThumbsUp } from 'lucide-react';

const PartnerBenefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: '10–15% комиссии',
      description: 'от оплаченной сделки (выплата после холда 7 дней)'
    },
    {
      icon: BarChart,
      title: 'Прозрачная атрибуция',
      description: 'форма/UTM, реестр лидов'
    },
    {
      icon: ThumbsUp,
      title: 'Довольный клиент',
      description: 'выше продление лицензий/сопровождения'
    }
  ];

  const commissionTable = [
    { package: '5 кандидатов', price: '99 500', commission10: '9 950', commission125: '12 438', commission15: '14 925' },
    { package: '15 кандидатов', price: '150 000', commission10: '15 000', commission125: '18 750', commission15: '22 500' },
    { package: '25 кандидатов', price: '200 000', commission10: '20 000', commission125: '25 000', commission15: '30 000' }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Что получает партнёр
          </h2>
        </div>

        {/* Преимущества партнёра */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Таблица комиссий */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Пример комиссии
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-foreground">Пакет</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-foreground">Цена, ₽</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-foreground">Комиссия 10%</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-foreground">12.5%</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-foreground">15%</th>
                </tr>
              </thead>
              <tbody>
                {commissionTable.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm text-foreground">{row.package}</td>
                    <td className="py-3 px-4 text-sm text-foreground font-medium">{row.price}</td>
                    <td className="py-3 px-4 text-sm text-primary font-medium">{row.commission10}</td>
                    <td className="py-3 px-4 text-sm text-primary font-medium">{row.commission125}</td>
                    <td className="py-3 px-4 text-sm text-primary font-medium">{row.commission15}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Комиссия выплачивается партнёру после 100% оплаты клиентом и истечения холда. 
            Повторы от того же клиента в 90 дней — +5 п.п. бонус (опционально).
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;