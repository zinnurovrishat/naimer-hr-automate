
import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Zap, Briefcase, HeadphonesIcon, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Внедрение LMS-платформы",
      description: "Автоматизация корпоративного обучения",
      features: [
        "Создание учебных курсов и аттестаций",
        "Система управления знаниями",
        "Отчетность по обучению",
        "Интеграция с HR-системами"
      ],
      price: "150,000₽",
      period: "на 12 месяцев"
    },
    {
      icon: Zap,
      title: "Автоматизация найма (Автонайм)",
      description: "Интеграция с HH.ru и другими площадками",
      features: [
        "Автоматический отбор кандидатов",
        "Готовые лендинги вакансий",
        "ИИ-анализ резюме",
        "Предварительное тестирование"
      ],
      price: "100,000₽",
      period: "за настройку",
      popular: true
    },
    {
      icon: Briefcase,
      title: "Готовые модули обучения",
      description: "Профессиональные программы под ключ",
      features: [
        "«Мастер продаж» - техника продаж",
        "«Welcome-стажировка» - адаптация",
        "«Телемаркетинг» - холодные звонки",
        "«Система отдела продаж»"
      ],
      price: "от 200,000₽",
      period: "за модуль"
    },
    {
      icon: HeadphonesIcon,
      title: "Консультационное сопровождение",
      description: "Индивидуальная настройка под бизнес",
      features: [
        "Обучение команды работе с системой",
        "Техническая поддержка 24/7",
        "Развитие функционала",
        "Персональный менеджер"
      ],
      price: "85,000₽",
      period: "в месяц"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Комплексные решения для автоматизации найма и обучения сотрудников. 
            Выберите готовое решение или закажите индивидуальную разработку
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
                  service.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярное
                    </span>
                  </div>
                )}
                
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.period}</div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Подробнее
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Комплекс «Всё включено»
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Полная автоматизация HR-процессов: найм + обучение + сопровождение
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold mb-2">LMS-платформа</div>
              <div className="text-sm opacity-80">Корпоративное обучение</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold mb-2">Автонайм</div>
              <div className="text-sm opacity-80">Автоматический поиск</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-xl font-bold mb-2">Все модули</div>
              <div className="text-sm opacity-80">Готовые программы</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div>
              <div className="text-3xl font-bold">700,000₽</div>
              <div className="text-sm opacity-80">вместо 1,200,000₽</div>
            </div>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-50"
            >
              Заказать комплекс
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
