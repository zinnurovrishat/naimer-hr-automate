
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, X } from 'lucide-react';

const StickyConsultButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationClick = () => {
    window.location.href = 'tel:+79177969222';
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 bottom-6 z-40">
      {isExpanded ? (
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-scale-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900">Бесплатная консультация</h3>
            <button onClick={toggleExpanded} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">
            Узнайте, как автоматизация поможет вашей компании за 30 минут
          </p>
          
          <div className="space-y-3">
            <Button 
              onClick={handleConsultationClick}
              className="w-full bg-primary hover:bg-primary/90"
            >
              <Phone className="w-4 h-4 mr-2" />
              Позвонить сейчас
            </Button>
            
            <div className="text-xs text-gray-500 text-center">
              +7 (917) 796-92-22
            </div>
          </div>
        </div>
      ) : (
        <Button
          onClick={toggleExpanded}
          size="lg"
          className="rounded-full bg-primary hover:bg-primary/90 shadow-2xl animate-pulse"
        >
          <Phone className="w-5 h-5 mr-2" />
          Консультация
        </Button>
      )}
    </div>
  );
};

export default StickyConsultButton;
