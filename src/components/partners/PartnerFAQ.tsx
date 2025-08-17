import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PartnerFAQ = () => {
  const faqs = [
    {
      question: 'Как считаем комиссию?',
      answer: '10–15% от суммы договора с клиентом, выплата после холда 7 дней.'
    },
    {
      question: 'Кто продаёт клиенту?',
      answer: 'Мы закрываем сделку сами; от партнёра — интро/контакт.'
    },
    {
      question: 'Как фиксируем, что это «ваш» лид?',
      answer: 'Через форму/UTM с уникальным partner-параметром, плюс реестр лидов.'
    },
    {
      question: 'Это связано с Edler?',
      answer: 'Мы выступаем интегратором услуги от своего имени; расчёты с Edler — наши обязательства. Партнёр получает комиссию от нас.'
    },
    {
      question: 'Вернут деньги клиенту — что с комиссией?',
      answer: 'Не выплачивается/возвращается, если был возврат.'
    },
    {
      question: 'Док-оборот?',
      answer: 'Договор-оферта или короткий реферальный договор + акт/реестр.'
    }
  ];

  const handleFAQOpen = () => {
    // Яндекс.Метрика событие
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(null, 'reachGoal', 'faq_open');
    }
  };

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            FAQ для партнёра
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm">
          <Accordion type="single" collapsible className="p-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger 
                  className="text-left hover:no-underline"
                  onClick={handleFAQOpen}
                >
                  <span className="text-foreground font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PartnerFAQ;