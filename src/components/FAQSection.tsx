
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
      question: "Зачем мне 5-15 кандидатов, если нужен 1 сотрудник?",
      answer: "Чтобы выбрать действительно лучшего! Даете всем одинаковую задачу, сравниваете результаты и выбираете топа. Остальных - в резерв или отклоняете."
    },
    {
      question: "А если кандидаты мне не подойдут?",
      answer: "Гарантируем 100% возврат средств. Но это практически исключено - мы отбираем строго по вашим критериям и передаем только подходящих."
    },
    {
      question: "Кандидаты точно начнут работать?",
      answer: "Да. Каждый кандидат подтверждает готовность выйти на стажировку и знает все условия работы."
    },
    {
      question: "Откуда берете кандидатов?",
      answer: "У нас собственная система подбора через hh.ru, Avito и нашу базу. Этот вопрос вас не должен беспокоить - важен результат."
    },
    {
      question: "Сколько времени займет внедрение?",
      answer: "30-40 минут на согласование критериев + 1-2 дня на получение первых кандидатов."
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
