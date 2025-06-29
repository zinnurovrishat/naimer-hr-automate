
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "50+",
      label: "компаний",
      description: "внедрили систему"
    },
    {
      number: "500+",
      label: "сотрудников",
      description: "прошли обучение"
    },
    {
      number: "70%",
      label: "экономии",
      description: "времени HR-отдела"
    },
    {
      number: "2-4",
      label: "дня",
      description: "готовые кандидаты"
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
