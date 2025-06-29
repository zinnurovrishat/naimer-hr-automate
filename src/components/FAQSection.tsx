
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Сколько времени занимает внедрение?",
      answer: "2-5 дней в зависимости от сложности задач и количества сотрудников. Базовые настройки делаем за 1-2 дня, полная кастомизация под ваши процессы занимает до 5 дней."
    },
    {
      question: "Нужно ли обучать наших HR?",
      answer: "Да, обучение ваших HR-специалистов включено в стоимость. Проводим детальный инструктаж по работе с системой, показываем все возможности и отвечаем на вопросы."
    },
    {
      question: "Работает ли с HH.ru?",
      answer: "Да, у нас полная интеграция с HH.ru. Система автоматически публикует вакансии, отбирает подходящих кандидатов по заданным критериям и формирует готовые списки для собеседований."
    },
    {
      question: "Есть ли гарантии?",
      answer: "Да, мы гарантируем получение готовых к работе кандидатов в течение 2-4 дней после запуска системы или возвращаем средства. Также предоставляем техподдержку в течение года."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Часто задаваемые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
