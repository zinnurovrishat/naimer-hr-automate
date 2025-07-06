
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleConsultationClick = () => {
    window.location.href = 'tel:+79177969222';
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // Если на главной странице, прокрутить к верху
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            {location.pathname === '/' ? (
              <button onClick={handleLogoClick} className="focus:outline-none">
                <img 
                  src="/lovable-uploads/4a876620-250a-4c5e-a512-d4acc355794e.png" 
                  alt="naimer.pro" 
                  className="h-20 md:h-72 w-auto hover:opacity-90 transition-opacity cursor-pointer"
                />
              </button>
            ) : (
              <Link to="/">
                <img 
                  src="/lovable-uploads/4a876620-250a-4c5e-a512-d4acc355794e.png" 
                  alt="naimer.pro" 
                  className="h-20 md:h-72 w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Услуги
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Тарифы
            </a>
            <a href="#client-cases" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Кейсы
            </a>
            <a href="#demo-call" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Контакты
            </a>
          </nav>

          {/* CTA Button & Phone */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+79177969222" className="flex items-center text-gray-700 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">+7 (917) 796-92-22</span>
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={handleConsultationClick}
            >
              Консультация
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Тарифы
              </a>
              <a
                href="#client-cases"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Кейсы
              </a>
              <a
                href="#demo-call"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <div className="px-3 py-2 border-t">
                <a href="tel:+79177969222" className="flex items-center text-gray-700 hover:text-primary transition-colors mb-3">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-medium">+7 (917) 796-92-22</span>
                </a>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleConsultationClick}
                >
                  Консультация
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
