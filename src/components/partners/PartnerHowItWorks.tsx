import React from 'react';
import { FileText, Search, Users } from 'lucide-react';

const PartnerHowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Бриф и критерии',
      description: 'кто нужен, сколько, когда старт.'
    },
    {
      icon: Search,
      title: 'Диджитал-интервью и отбор',
      description: 'проверяем навыки, мотивацию, базовую вменяемость.'
    },
    {
      icon: Users,
      title: 'Поставка кандидатов',
      description: 'выдаём 5/15/25 «готовых к старту» на согласование.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Как мы работаем за 48–72 часа
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Кандидаты заранее знакомятся с вашей компанией и задачами. 
            Клиент — только выбирает лучших.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerHowItWorks;