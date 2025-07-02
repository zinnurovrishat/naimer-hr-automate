
import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProofSection = () => {
  const clientLogos = [
    { name: "ТехноСофт", logo: "🏢" },
    { name: "БизнесПро", logo: "💼" },
    { name: "ЮрСервис", logo: "⚖️" },
    { name: "СтройГруп", logo: "🏗️" },
    { name: "МедЦентр", logo: "🏥" },
    { name: "ФинКонсалт", logo: "💰" }
  ];

  const testimonials = [
    {
      name: "Михаил Петров",
      position: "Управляющий партнер",
      company: "Юридическая компания",
      photo: "👨‍💼",
      rating: 5,
      text: "За неделю получили трех готовых специалистов. Выручка выросла вдвое уже через месяц работы."
    },
    {
      name: "Анна Сидорова", 
      position: "HR-директор",
      company: "IT-компания",
      photo: "👩‍💼",
      rating: 5,
      text: "Система адаптации помогла новичкам быстрее включиться в проекты. Текучка снизилась почти вдвое."
    },
    {
      name: "Игорь Волков",
      position: "Директор по продажам",
      company: "Агентство недвижимости",
      photo: "👨‍💻",
      rating: 5,
      text: "Агенты стали работать по единым стандартам, результаты стали предсказуемыми и стабильными."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-lg text-gray-600 mb-8">Нам доверяют более 50 компаний</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center space-x-3 hover:opacity-100 transition-opacity">
                <span className="text-3xl">{client.logo}</span>
                <span className="text-gray-700 font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Отзывы наших клиентов
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic pl-6">"{testimonial.text}"</p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{testimonial.photo}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
