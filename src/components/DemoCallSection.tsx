
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoCallSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    position: '',
    preferredTime: 'утром'
  });
  const [consentChecked, setConsentChecked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentChecked) {
      alert('Необходимо дать согласие на обработку персональных данных');
      return;
    }
    console.log('Demo form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами для согласования времени демо.');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Убедитесь сами — получите кандидатов уже на этой неделе
            </h2>
            <p className="text-xl opacity-90">
              Оставьте заявку на Zoom-презентацию — покажем всё за 10 минут
            </p>
          </div>

          <Card className="p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp/Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Вакансия *
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Какую позицию закрываете?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Удобное время
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="утром">Утром (9:00-12:00)</option>
                    <option value="днем">Днем (12:00-15:00)</option>
                    <option value="вечером">Вечером (15:00-18:00)</option>
                    <option value="согласуем">Согласуем отдельно</option>
                  </select>
                </div>
              </div>

              {/* Features List */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Что вас ждет на презентации:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-600" />
                    Демо платформы — 5 минут
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    Обсуждение ваших вакансий — 3 минуты
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                    Расчет стоимости и сроков — 2 минуты
                  </li>
                </ul>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="demo-consent"
                  checked={consentChecked}
                  onCheckedChange={(checked) => setConsentChecked(checked as boolean)}
                  required
                />
                <label htmlFor="demo-consent" className="text-sm text-gray-600 leading-5">
                  Я соглашаюсь с{' '}
                  <Link 
                    to="/personal-data-consent" 
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    обработкой персональных данных
                  </Link>
                  {' '}и даю согласие на получение информационных сообщений
                </label>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold" 
                  size="lg"
                  disabled={!consentChecked}
                >
                  Записаться на демо
                </Button>
                
                <p className="text-xs text-gray-500 mt-4">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <Link to="/privacy" className="text-blue-600 hover:underline">
                    политикой конфиденциальности
                  </Link>
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoCallSection;
