import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowLeft, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PartnerThankYou = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Спасибо за заявку! | Naimer.pro</title>
        <meta name="description" content="Ваша заявка принята. Мы свяжемся с вами в течение 2 часов для обсуждения деталей сотрудничества." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Заявка принята!
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Мы получили вашу заявку и свяжемся с вами в течение <strong>2 часов</strong> 
            для обсуждения деталей сотрудничества.
          </p>
          
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Что дальше?
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                  1
                </div>
                <p className="text-muted-foreground">
                  Мы изучим вашу заявку и подготовим персональное предложение
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                  2
                </div>
                <p className="text-muted-foreground">
                  Наш менеджер свяжется с вами для обсуждения условий
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                  3
                </div>
                <p className="text-muted-foreground">
                  Оформим партнёрское соглашение и начнём работу
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="outline">
              <Link to="/partners">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Вернуться назад
              </Link>
            </Button>
            
            <Button asChild>
              <a 
                href="https://t.me/naimer_sales" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Написать в Telegram
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Остались вопросы?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
              <a 
                href="https://t.me/naimer_sales" 
                className="hover:text-primary transition flex items-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Telegram: @naimer_sales
              </a>
              <a 
                href="https://wa.me/79991234567" 
                className="hover:text-primary transition"
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp: +7 999 123-45-67
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerThankYou;