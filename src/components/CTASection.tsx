
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
    // Здесь будет логика отправки формы
    alert('Спасибо! Мы свяжемся с вами в течение часа.');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Получите бесплатную консультацию по автоматизации найма
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Рассчитайте экономию от внедрения за 2 минуты. 
            Перезвоним в течение часа и покажем демо-версию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Заявка на консультацию</h3>
            
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
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Компания
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="1-10">1-10 сотрудников</option>
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
            <div>
              <h3 className="text-2xl font-bold mb-6">Что вы получите:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Бесплатная консультация эксперта</h4>
                    <p className="opacity-80">Персональный анализ ваших HR-процессов</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Расчет экономии от автоматизации</h4>
                    <p className="opacity-80">Точные цифры ROI для вашей компании</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Демо-презентация решений</h4>
                    <p className="opacity-80">Покажем, как работают наши системы</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-white mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">План внедрения под ключ</h4>
                    <p className="opacity-80">Готовая дорожная карта автоматизации</p>
                  </div>
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
                  href="mailto:r.zinnurov@gmail.com" 
                  className="flex items-center hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  r.zinnurov@gmail.com
                </a>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <h4 className="font-semibold mb-2">Гарантия результата</h4>
              <p className="opacity-80 text-sm">
                Готовые кандидаты за 2-4 дня или возврат средств. 
                Бесплатная техподдержка в течение года.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
