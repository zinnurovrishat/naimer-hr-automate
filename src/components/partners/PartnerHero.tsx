import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle, Shield } from 'lucide-react';

const PartnerHero = () => {
  const scrollToForm = () => {
    document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Партнёрам Bitrix/amo: закроем <span className="text-primary">«людей в продажах»</span> за 2–3 дня
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Приводим 5/15/25 уже отобранных продавцов. Без бесконечных собеседований. 
            Пакеты 99 500 / 150 000 / 200 000 ₽. Комиссия партнёру 10–15%.
          </p>

          {/* Ключевые преимущества */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Clock className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">Первые кандидаты — через 48–72 часа</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">Диджитал-интервью и отбор по критериям</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Shield className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">Гарантия соответствия: замена/возврат</span>
            </div>
          </div>

          {/* CTA блок */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
            >
              Передать лида
            </Button>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition underline"
            >
              Скачать условия партнёрства (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHero;