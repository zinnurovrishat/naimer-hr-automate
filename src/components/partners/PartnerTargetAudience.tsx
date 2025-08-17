import React from 'react';
import { Settings, Users, Phone, TrendingUp, User } from 'lucide-react';

const PartnerTargetAudience = () => {
  const audiences = [
    { icon: Settings, label: 'Интеграторам Bitrix24' },
    { icon: Users, label: 'Партнёрам amoCRM' },
    { icon: Phone, label: 'Внедренцам телефонии/коллтрекинга' },
    { icon: TrendingUp, label: 'Маркетинговым агентствам' },
    { icon: User, label: 'CRM-фрилансерам' },
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-foreground mb-8">
          Кому полезно
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          {audiences.map((audience, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center space-x-2 text-foreground">
                <audience.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium whitespace-nowrap">
                  {audience.label}
                </span>
              </div>
              {index < audiences.length - 1 && (
                <span className="text-muted-foreground hidden lg:block">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerTargetAudience;