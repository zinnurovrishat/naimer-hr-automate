
import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/4a876620-250a-4c5e-a512-d4acc355794e.png" 
              alt="Наймер.Pro" 
              className="h-8 w-auto mr-3"
            />
            <span className="text-xl font-bold">Наймер.Pro</span>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300 mb-6">
            <a href="tel:+79177969222" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +7 (917) 796-92-22
            </a>
            <a 
              href="https://wa.me/79177969222" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
            <a 
              href="https://t.me/naimer_pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Telegram
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center space-y-4 text-sm text-gray-400">
            <div className="text-center">
              <p className="mb-1">© Наймер.Pro — быстрый автонайм сотрудников</p>
              <p>ИП Зиннуров Ришат Мидхатович, ИНН: 026800071886</p>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
