
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp, Users } from 'lucide-react';

const TelegramSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <MessageCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Следите за нами в Telegram
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Публикуем кейсы, советы по найму, примеры кандидатов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Реальные кейсы</h3>
              <p className="text-sm text-gray-600">Как мы закрыли 15 вакансий за неделю</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Примеры кандидатов</h3>
              <p className="text-sm text-gray-600">Показываем профили готовых специалистов</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Советы по найму</h3>
              <p className="text-sm text-gray-600">Как избежать ошибок при подборе</p>
            </div>
          </div>

          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            size="lg"
          >
            <a 
              href="https://t.me/naimerpro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Перейти в канал</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TelegramSection;
