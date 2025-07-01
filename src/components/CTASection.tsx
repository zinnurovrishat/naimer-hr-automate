import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Users, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    employees: '10-50'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в течение часа.');
  };

  return (
    <section id="contacts" className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Получите бесплатную консультацию за 30 минут
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Рассчитаем экономию для вашей компании и покажем демо
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Компания *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Название компании"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Количество сотрудников
                </label>
                <select
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="10-50">10-50 сотрудников</option>
                  <option value="50-100">50-100 сотрудников</option>
                  <option value="100-500">100-500 сотрудников</option>
                  <option value="500+">500+ сотрудников</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                Получить консультацию
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </Card>

          {/* Benefits */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-8 h-8 text-white mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">📞 Перезвоним в течение часа</h4>
                  <p className="opacity-80">Персональная консультация по телефону в удобное для вас время</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="w-8 h-8 text-white mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">💻 Покажем демо системы</h4>
                  <p className="opacity-80">Живая демонстрация возможностей платформы на примерах</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-8 h-8 text-white mr-4 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">📊 Рассчитаем ROI для вашего бизнеса</h4>
                  <p className="opacity-80">Точный расчет экономии времени и денег от автоматизации</p>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-semibold mb-4">Или свяжитесь прямо сейчас:</h4>
              
              <div className="space-y-3">
                <a 
                  href="tel:+79177969222" 
                  className="flex items-center hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +7 (917) 796-92-22
                </a>
                
                <a 
                  href="https://wa.me/79177969222" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-accent transition-colors"
                >
                  <Users className="w-5 h-5 mr-3" />
                  WhatsApp
                </a>
                
                <a 
                  href="https://t.me/+79177969222" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-accent transition-colors"
                >
                  <Users className="w-5 h-5 mr-3" />
                  Telegram
                </a>
                
                <a 
                  href="mailto:r.zinnurov@gmail.com" 
                  className="flex items-center hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  r.zinnurov@gmail.com
                </a>
              </div>
              
              <div className="mt-4 text-sm opacity-80">
                <strong>Регион:</strong> Республика Башкортостан
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
