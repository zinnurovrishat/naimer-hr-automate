import React from 'react';
import { MessageCircle, Send, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerFooter = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Логотип и контакты */}
          <div>
            <div className="text-xl font-bold mb-4">Naimer.pro</div>
            <div className="space-y-3">
              <a 
                href="https://t.me/neura_core" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                <Send className="h-4 w-4" />
                <span>Telegram</span>
              </a>
              <a 
                href="https://wa.me/79177969222" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:info@naimer.pro" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                <Mail className="h-4 w-4" />
                <span>info@naimer.pro</span>
              </a>
            </div>
          </div>

          {/* Правовые документы */}
          <div>
            <h4 className="font-medium mb-4">Документы</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-gray-300 hover:text-white transition text-sm">
                Политика конфиденциальности
              </Link>
              <Link to="/offer" className="block text-gray-300 hover:text-white transition text-sm">
                Договор оферты
              </Link>
              <Link to="/personal-data-consent" className="block text-gray-300 hover:text-white transition text-sm">
                Согласие на обработку данных
              </Link>
            </div>
          </div>

          {/* Реквизиты */}
          <div>
            <h4 className="font-medium mb-4">Реквизиты</h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p>ИП Зиннуров Р.М.</p>
              <p>ИНН 026800071886</p>
              <p>г. Стерлитамак, ул. Мирная, 6</p>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-400">
            © 2024 Naimer.pro. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PartnerFooter;