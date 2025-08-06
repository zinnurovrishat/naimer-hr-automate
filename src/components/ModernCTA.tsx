import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Phone, User } from 'lucide-react';

const ModernCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }

    // Здесь можно добавить отправку данных
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 30 минут",
    });

    setFormData({ name: '', phone: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="cta-form" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Готовы получить поток кандидатов?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте заявку и получите первых кандидатов уже через 3 дня
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">
                    Ваше имя *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="pl-10 h-12 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    Телефон / WhatsApp *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="pl-10 h-12 text-base"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-4 shadow-lg"
                >
                  Хочу поток кандидатов
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernCTA;