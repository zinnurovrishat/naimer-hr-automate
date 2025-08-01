
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "50+",
      label: "компаний",
      description: "получили готовых сотрудников"
    },
    {
      number: "500+",
      label: "кандидатов",
      description: "прошли полную подготовку"
    },
    {
      number: "87%",
      label: "клиентов",
      description: "продолжают сотрудничество"
    },
    {
      number: "2-3",
      label: "дня",
      description: "до получения первых кандидатов"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
