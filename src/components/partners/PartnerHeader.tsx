import React from 'react';
import { Button } from '@/components/ui/button';

const PartnerHeader = () => {
  const scrollToForm = () => {
    document.getElementById('partner-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-foreground">
              Naimer.pro
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#packages" 
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Пакеты
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Как работаем
            </a>
            <span className="text-sm text-primary font-medium">
              Партнёрам
            </span>
          </nav>

          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Передать лида
          </Button>
        </div>
      </div>
    </header>
  );
};

export default PartnerHeader;