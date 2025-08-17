import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const PartnerThankYou = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Спасибо за заявку!
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Свяжемся в течение 10 минут в рабочее время. 
          Можете сразу написать в Telegram или WhatsApp для более быстрой связи.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://t.me/neura_core"
            className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            <Send className="h-5 w-5" />
            <span>Telegram</span>
          </a>
          
          <a
            href="https://wa.me/79177969222"
            className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="space-y-4 text-left bg-muted p-6 rounded-lg">
          <h3 className="font-semibold text-foreground">Что дальше:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Проанализируем заявку и свяжемся с вами</li>
            <li>• Обсудим детали потребностей клиента</li>
            <li>• Подготовим коммерческое предложение</li>
            <li>• Запустим поиск кандидатов после подписания договора</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link to="/partners">
            <Button variant="outline">
              Вернуться на страницу партнёров
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnerThankYou;