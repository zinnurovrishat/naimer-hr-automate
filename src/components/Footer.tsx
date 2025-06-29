
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">naimer.pro</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Автоматизируем найм и обучение сотрудников с помощью передовых IT-решений. 
              Помогаем получать готовых специалистов за 2-4 дня.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <a href="tel:+79177969222" className="hover:text-primary transition-colors">
                  +7 (917) 796-92-22
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a href="mailto:r.zinnurov@gmail.com" className="hover:text-primary transition-colors">
                  r.zinnurov@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span>Республика Башкортостан, г. Стерлитамак</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  LMS-платформа
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Автоматизация найма
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Готовые модули обучения
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Консультации
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Комплекс «Всё включено»
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Связь</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/79177969222" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp
              </a>
              <a 
                href="https://t.me/+79177969222" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Telegram
              </a>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Документы</h5>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <a href="/offer" className="hover:text-primary transition-colors">
                    Публичная оферта
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-primary transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-400">Успешных внедрений</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-gray-400">Лет опыта автоматизации HR</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-400">Техническая поддержка</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-8 text-center text-gray-400">
          <p>&copy; 2025 naimer.pro - Автоматизация найма и обучения сотрудников</p>
          <p className="text-sm mt-2">
            Резидент Сколково • Аккредитация Минцифры • Сертифицированный интегратор HR-решений
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
