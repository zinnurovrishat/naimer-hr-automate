
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center lg:items-start">
            <img 
              src="/lovable-uploads/4a876620-250a-4c5e-a512-d4acc355794e.png" 
              alt="naimer.pro" 
              className="h-24 md:h-72 w-auto mb-4"
            />
            <p className="text-gray-300 mb-6 text-center lg:text-left">
              Автоматизированный подбор готовых к работе сотрудников через систему Edler.pro
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Подбор персонала
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Консультации по найму
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Настройка процессов
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
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
                <span>Республика Башкортостан</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Соцсети</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/79177969222" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
                <a 
                  href="https://t.me/+79177969222" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Entity and Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="text-center text-gray-400 mb-4">
            <p className="font-medium">ИП Зиннуров Ришат Мидхатович</p>
            <p>ИНН: 026800071886</p>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2025 naimer.pro | <Link to="/offer" className="hover:text-primary transition-colors">Оферта</Link> | <Link to="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link> | <Link to="/personal-data-consent" className="hover:text-primary transition-colors">Согласие на обработку персональных данных</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
