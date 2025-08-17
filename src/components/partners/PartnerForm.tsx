import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const PartnerForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    contact_person: '',
    contact_info: '',
    city: '',
    candidates_count: '',
    start_date: '',
    comment: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    partner: '',
    consent: false
  });

  // Извлекаем UTM параметры из URL при загрузке
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      utm_term: urlParams.get('utm_term') || '',
      partner: urlParams.get('partner') || ''
    }));
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive"
      });
      return;
    }

    if (!formData.company || !formData.contact_person || !formData.contact_info) {
      toast({
        title: "Ошибка",
        description: "Заполните обязательные поля",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Сохраняем в Supabase
      const { error } = await supabase
        .from('partner_leads')
        .insert([formData]);

      if (error) throw error;

      // Отправляем уведомления через edge function
      try {
        await supabase.functions.invoke('partner-lead-notify', {
          body: formData
        });
      } catch (notifyError) {
        console.error('Ошибка отправки уведомлений:', notifyError);
        // Не прерываем процесс, если уведомления не отправились
      }

      // Успешно сохранено
      console.log('Заявка успешно отправлена');
      
      // Отправляем событие в Яндекс.Метрику
      if (window.ym) {
        window.ym(98571738, 'reachGoal', 'partner_form_submit');
      }
      
      // Перенаправляем на страницу благодарности
      window.location.href = '/partners/thank-you';
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке формы. Попробуйте ещё раз.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCTAClick = () => {
    // Яндекс.Метрика событие
    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(null, 'reachGoal', 'cta_click');
    }
  };

  return (
    <section id="partner-form" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Передать лида
          </h2>
          <p className="text-muted-foreground">
            Заполните форму и мы свяжемся в течение 10 минут в рабочее время
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company" className="text-foreground">
                  Компания клиента *
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="ООО «Рога и копыта»"
                  required
                />
              </div>

              <div>
                <Label htmlFor="contact_person" className="text-foreground">
                  Контактное лицо *
                </Label>
                <Input
                  id="contact_person"
                  value={formData.contact_person}
                  onChange={(e) => handleInputChange('contact_person', e.target.value)}
                  placeholder="Иван Иванов"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="contact_info" className="text-foreground">
                  Телефон/Telegram/E-mail *
                </Label>
                <Input
                  id="contact_info"
                  value={formData.contact_info}
                  onChange={(e) => handleInputChange('contact_info', e.target.value)}
                  placeholder="+7 (900) 123-45-67"
                  required
                />
              </div>

              <div>
                <Label htmlFor="city" className="text-foreground">
                  Город/часовой пояс
                </Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Москва, GMT+3"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="candidates_count" className="text-foreground">
                  Сколько продавцов нужно
                </Label>
                <Select onValueChange={(value) => handleInputChange('candidates_count', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите количество" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 кандидатов</SelectItem>
                    <SelectItem value="15">15 кандидатов</SelectItem>
                    <SelectItem value="25">25 кандидатов</SelectItem>
                    <SelectItem value="other">Другое количество</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="start_date" className="text-foreground">
                  Срок старта
                </Label>
                <Select onValueChange={(value) => handleInputChange('start_date', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите срок" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Сегодня</SelectItem>
                    <SelectItem value="week">1 неделя</SelectItem>
                    <SelectItem value="month">1 месяц</SelectItem>
                    <SelectItem value="other">Другая дата</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="comment" className="text-foreground">
                Комментарий
              </Label>
              <Textarea
                id="comment"
                value={formData.comment}
                onChange={(e) => handleInputChange('comment', e.target.value)}
                placeholder="Дополнительные требования к кандидатам..."
                rows={3}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
              />
              <Label htmlFor="consent" className="text-sm text-muted-foreground cursor-pointer">
                Согласен на обработку персональных данных (152-ФЗ) *
              </Label>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                onClick={handleCTAClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium"
              >
                {isSubmitting ? 'Отправляем...' : 'Отправить лида'}
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                Нажимая «Отправить лида», вы соглашаетесь с{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  Политикой обработки ПДн
                </a>
                {' '}и условиями реферальной комиссии.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;