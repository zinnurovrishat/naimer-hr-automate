
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DemoCallSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    vacancy: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="demo-call" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-6 sm:p-8 bg-white shadow-lg mx-4 sm:mx-0">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Спасибо! Мы скоро свяжемся с вами в WhatsApp
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Наш менеджер свяжется с вами в течение рабочего дня для назначения презентации.
              </p>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="demo-call" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-8 sm:mb-12 scroll-fade-in ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Получите кандидатов уже на этой неделе
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Оставьте заявку — и мы назначим Zoom-презентацию (10 минут)
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-0">
          <Card className="p-6 sm:p-8 bg-white shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Имя *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Ваше имя"
                  required
                  className="w-full text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp / Telegram *
                </label>
                <Input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => handleInputChange('contact', e.target.value)}
                  placeholder="+7 (___) ___-__-__ или @username"
                  required
                  className="w-full text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Вакансия *
                </label>
                <Input
                  type="text"
                  value={formData.vacancy}
                  onChange={(e) => handleInputChange('vacancy', e.target.value)}
                  placeholder="Какую позицию нужно закрыть?"
                  required
                  className="w-full text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Удобное время
                </label>
                <Textarea
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  placeholder="Укажите удобное время для звонка"
                  className="w-full text-base"
                  rows={3}
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-base sm:text-lg py-3" 
                size="lg"
              >
                Записаться
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoCallSection;
