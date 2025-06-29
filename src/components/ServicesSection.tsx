
import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, Bot, ClipboardList, Target } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "LMS-Платформа",
      subtitle: "Корпоративное обучение на автомате",
      description: "Готовые курсы, аттестации, отчеты",
      price: "От 150,000₽"
    },
    {
      icon: Bot,
      title: "Автонайм",
      subtitle: "Автоматический поиск кандидатов",
      description: "Интеграция с HH.ru, умный отбор",
      price: "От 100,000₽"
    },
    {
      icon: ClipboardList,
      title: "Готовые модули",
      subtitle: "Программы обучения продажам",
      description: "Мастер продаж, стажировка, телемаркетинг",
      price: "От 200,000₽"
    },
    {
      icon: Target,
      title: "Полное сопровождение",
      subtitle: "Настройка + поддержка",
      description: "Индивидуальная адаптация под бизнес",
      price: "85,000₽/мес"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Автоматизируем весь процесс найма и обучения
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-primary font-medium mb-2">{service.subtitle}</p>
                <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                
                <div className="text-2xl font-bold text-gray-900 mb-4">{service.price}</div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
          >
            Узнать подробности
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
