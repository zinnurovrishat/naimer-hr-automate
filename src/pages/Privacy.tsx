
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Политика конфиденциальности</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">ПОЛИТИКА В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</h1>
          
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <div className="text-center mb-8 text-gray-600">
              <p>Дата последнего обновления: 30 декабря 2024 г.</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              1.1. Настоящая Политика конфиденциальности действует в отношении всей информации, размещенной на сайте naimer.pro.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1.2. Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и условиями обработки его персональных данных.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              1.3. В случае несогласия с условиями Политики пользователь должен прекратить использование сайта.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. ОСНОВНЫЕ ПОНЯТИЯ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Персональные данные</strong> – любая информация, относящаяся к прямо или косвенно определенному физическому лицу.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Оператор</strong> – ИП Зиннуров Ришат Мидхатович, организующий и осуществляющий обработку персональных данных.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Обработка персональных данных</strong> – любое действие с персональными данными, включая сбор, запись, систематизацию, накопление, хранение и т.д.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</h2>
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.1. При заполнении форм на сайте мы можем запросить:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Фамилию, имя, отчество</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Название компании</li>
              <li>Должность</li>
              <li>Другую информацию, необходимую для оказания услуг</li>
            </ul>
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">3.2. Автоматически собираемые данные:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>IP-адрес</li>
              <li>Информация о браузере</li>
              <li>Время посещения</li>
              <li>Просмотренные страницы</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. ЦЕЛИ ОБРАБОТКИ ДАННЫХ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              4.1. Персональные данные используются для:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Связи с пользователем для консультаций</li>
              <li>Оказания заказанных услуг</li>
              <li>Направления информационных материалов</li>
              <li>Улучшения качества услуг</li>
              <li>Проведения статистических исследований</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. ПРАВОВЫЕ ОСНОВАНИЯ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              5.1. Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Согласия субъекта персональных данных</li>
              <li>Необходимости исполнения договора</li>
              <li>Необходимости для осуществления законной деятельности</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. ПОРЯДОК ОБРАБОТКИ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              6.1. Обработка данных осуществляется с соблюдением принципов:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Законности и справедливости</li>
              <li>Ограничения конкретными целями</li>
              <li>Соответствия объема данных заявленным целям</li>
              <li>Точности и актуальности</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              6.2. Мы принимаем необходимые меры для защиты персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. ПЕРЕДАЧА ДАННЫХ ТРЕТЬИМ ЛИЦАМ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              7.1. Персональные данные не передаются третьим лицам, за исключением случаев:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Получения согласия субъекта данных</li>
              <li>Требования законодательства РФ</li>
              <li>Необходимости для исполнения договора</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. СРОКИ ОБРАБОТКИ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              8.1. Персональные данные обрабатываются в течение срока, необходимого для достижения целей обработки.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              8.2. По достижении целей обработки или при отзыве согласия данные подлежат уничтожению.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. ПРАВА СУБЪЕКТА ДАННЫХ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              9.1. Вы имеете право:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Получать информацию об обработке ваших данных</li>
              <li>Требовать уточнения, блокирования или уничтожения данных</li>
              <li>Отозвать согласие на обработку</li>
              <li>Обратиться в орган по защите прав субъектов персональных данных</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. ФАЙЛЫ COOKIE</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              10.1. Сайт использует файлы cookie для:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Запоминания настроек пользователя</li>
              <li>Сбора статистической информации</li>
              <li>Улучшения функционирования сайта</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              10.2. Вы можете настроить браузер для блокирования cookie, однако это может ограничить функциональность сайта.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. ИЗМЕНЕНИЯ ПОЛИТИКИ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              11.1. Настоящая Политика может изменяться. Новая редакция публикуется на сайте и действует с момента публикации.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              11.2. Продолжение использования сайта после внесения изменений означает согласие с новой редакцией.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              По вопросам обработки персональных данных обращайтесь:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-semibold mb-4">ИП Зиннуров Ришат Мидхатович</p>
              <p className="text-gray-700 mb-2">Телефон: +7 (917) 796-92-22</p>
              <p className="text-gray-700 mb-2">Email: r.zinnurov@gmail.com</p>
              <p className="text-gray-700">Адрес: 453114, Республика Башкортостан, г. Стерлитамак, ул. Мирная, д. 6</p>
            </div>
          </div>

          {/* Back to home button */}
          <div className="mt-12 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to="/" className="inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад на главную
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
