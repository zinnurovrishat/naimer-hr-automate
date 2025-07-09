
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PersonalDataConsent = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Close button */}
        <div className="fixed top-24 right-4 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={handleClose}
            className="bg-white shadow-lg hover:bg-gray-50"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Согласие на обработку персональных данных
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Настоящим я, субъект персональных данных, в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» предоставляю ИП Зиннурову Ришату Мидхатовичу (ИНН: 026800071886) (далее – Оператор) свое согласие на обработку персональных данных, указанных мной в форме на веб-сайте в сети «Интернет», владельцем которого является Оператор.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Состав персональных данных</h2>
            <p className="mb-4">
              Под персональными данными субъекта понимается нижеуказанная информация:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Фамилия, имя, отчество;</li>
              <li>Номер телефона;</li>
              <li>Адрес электронной почты;</li>
              <li>Наименование организации;</li>
              <li>Должность;</li>
              <li>Иные данные, предоставленные субъектом.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Принципы и цели обработки персональных данных</h2>
            <p className="mb-4">
              Обработка персональных данных субъекта осуществляется исключительно в целях:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Предоставления консультационных услуг;</li>
              <li>Подготовки коммерческих предложений;</li>
              <li>Информирования о товарах и услугах;</li>
              <li>Проведения маркетинговых исследований;</li>
              <li>Осуществления клиентской поддержки;</li>
              <li>Исполнения договорных обязательств.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Условия обработки персональных данных</h2>
            <p className="mb-4">
              Настоящее согласие дается на совершение следующих действий (операций) с персональными данными:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Сбор, запись, систематизация, накопление, хранение;</li>
              <li>Уточнение (обновление, изменение);</li>
              <li>Использование, передача (предоставление, доступ);</li>
              <li>Блокирование, удаление, уничтожение.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Методы обработки персональных данных</h2>
            <p className="mb-6">
              Оператор производит обработку персональных данных как без использования средств автоматизации, так и с их использованием.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Передача персональных данных</h2>
            <p className="mb-6">
              Персональные данные субъекта не передаются третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Сроки обработки персональных данных</h2>
            <p className="mb-6">
              Настоящее согласие действует с момента его предоставления до момента его отзыва. Согласие может быть отозвано субъектом персональных данных или его представителем путем направления письменного заявления Оператору.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Права субъекта персональных данных</h2>
            <p className="mb-4">
              Субъект персональных данных имеет право:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Получать информацию, касающуюся обработки его персональных данных;</li>
              <li>Требовать уточнения, блокирования или уничтожения персональных данных;</li>
              <li>Обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке;</li>
              <li>Отозвать согласие на обработку персональных данных.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Контактная информация</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>ИП Зиннуров Ришат Мидхатович</strong></p>
              <p>ИНН: 026800071886</p>
              <p>Телефон: +7 (917) 796-92-22</p>
              <p>Email: r.zinnurov@gmail.com</p>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              Дата последнего обновления: 09.07.2025
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalDataConsent;
