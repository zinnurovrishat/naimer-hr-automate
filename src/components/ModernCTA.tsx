import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { CheckCircle, Phone, MessageCircle } from 'lucide-react';

const ModernCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section data-section="cta-form" className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg p-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Заявка отправлена!
              </h2>
              <p className="text-gray-600 mb-6">
                Мы свяжемся с вами в течение 30 минут для обсуждения деталей
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  onClick={() => window.open('tel:+79774707005', '_self')}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Позвонить сейчас
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/79774707005', '_blank')}
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section data-section="cta-form" className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Хочу поток кандидатов
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Оставьте заявку — получите первых кандидатов уже через 3 дня
          </p>

          <Card className="p-6 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  name="contact"
                  placeholder="Телефон или WhatsApp"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg font-semibold"
              >
                Получить кандидатов за 3 дня
              </Button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Или свяжитесь с нами прямо сейчас:</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  variant="outline"
                  onClick={() => window.open('tel:+79774707005', '_self')}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  +7 977 470-70-05
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/79774707005', '_blank')}
                  className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModernCTA;