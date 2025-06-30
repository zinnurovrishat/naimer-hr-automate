
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
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              <BreadcrumbPage>Оферта</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ</h1>
          
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <div className="text-center mb-8 text-gray-600">
              <p className="mb-2">г. Стерлитамак | 30 декабря 2024 г.</p>
              <p>Утверждён ИП Зиннуров Ришат Мидхатович от 30.12.2024 г.</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. ОБЩИЕ ПОЛОЖЕНИЯ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              1.1. Данный документ является официальным предложением (публичной офертой) ИП Зиннуров Ришат Мидхатович, именуемого в дальнейшем "Исполнитель", заключить договор оказания услуг с любым заинтересованным лицом.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              1.2. Заказчиком по договору признается любое лицо, внесшее 100% предварительную оплату за предоставление услуг в соответствии с настоящим Договором. На основании п. 3 ст. 438 Гражданского кодекса РФ это является полным принятием (акцептом) условий настоящей оферты.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              1.3. Настоящая Оферта может быть принята исключительно в целом (п. 1 ст. 428 ГК РФ). После акцепта оферты настоящая Оферта приобретает силу Договора между Заказчиком и Исполнителем.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. ОСНОВНЫЕ ПОНЯТИЯ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              2.1. Оферта – настоящий документ "Договор публичной оферты", опубликованный на сайте naimer.pro.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              2.2. Акцепт Оферты – полное принятие Оферты Заказчиком путем внесения оплаты в соответствии с Прейскурантом.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              2.3. Прейскурант – перечень оказываемых Исполнителем услуг с ценами, размещенный на сайте naimer.pro.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              2.4. Услуги – внедрение систем автоматизации найма и обучения персонала, консультационные услуги, техническая поддержка.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. ПРЕДМЕТ ДОГОВОРА</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              3.1. Предметом договора является оказание услуг по автоматизации найма и обучения персонала, включая:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Внедрение LMS-платформ</li>
              <li>Настройка систем автоматического найма</li>
              <li>Подключение готовых модулей обучения</li>
              <li>Консультационное сопровождение</li>
              <li>Техническая поддержка</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              3.2. Конкретные услуги и их стоимость указаны в Прейскуранте на сайте naimer.pro.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              3.3. Территория оказания услуг – Российская Федерация.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. ПОРЯДОК РАСЧЕТОВ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              4.1. Оплата производится на основании выставленного счета 100% предоплатой.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              4.2. Датой оплаты считается дата поступления денежных средств на расчетный счет Исполнителя.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              4.3. Оплата может быть произведена третьим лицом по поручению Заказчика.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. ПРАВА И ОБЯЗАННОСТИ СТОРОН</h2>
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">5.1. Исполнитель обязуется:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Оказать услуги качественно и в срок согласно техническому заданию</li>
              <li>Предоставить необходимые консультации по использованию внедряемых решений</li>
              <li>Обеспечить техническую поддержку в рамках договора</li>
            </ul>
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">5.2. Исполнитель вправе:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Приостановить оказание услуг при нарушении условий оплаты</li>
              <li>Изменять Прейскурант с уведомлением за 3 дня</li>
              <li>Привлекать третьих лиц для исполнения обязательств</li>
            </ul>
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">5.3. Заказчик обязан:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Своевременно оплатить услуги согласно выставленному счету</li>
              <li>Предоставить необходимую информацию для оказания услуг</li>
              <li>Принять оказанные услуги</li>
            </ul>
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">5.4. Заказчик вправе:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Получить услуги в срок и надлежащего качества</li>
              <li>Требовать устранения недостатков в разумный срок</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. ОТВЕТСТВЕННОСТЬ СТОРОН</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              6.1. За нарушение сроков оказания услуг Исполнитель выплачивает неустойку 0,1% от стоимости услуг за каждый день просрочки.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              6.2. За просрочку оплаты Заказчик выплачивает неустойку 0,1% от суммы задолженности за каждый день просрочки.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              6.3. Общая ответственность сторон ограничена стоимостью оказываемых услуг.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. РАЗРЕШЕНИЕ СПОРОВ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              7.1. Споры решаются путем переговоров. При недостижении соглашения – в судебном порядке по месту нахождения Исполнителя.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              7.2. Претензионный порядок обязателен. Срок рассмотрения претензии – 10 рабочих дней.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              8.1. Договор действует до полного исполнения обязательств сторонами.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              8.2. Изменения оферты публикуются на сайте и действуют с даты публикации.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              8.3. По вопросам, не урегулированным офертой, стороны руководствуются законодательством РФ.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. РЕКВИЗИТЫ ИСПОЛНИТЕЛЯ</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-semibold mb-4">ИП Зиннуров Ришат Мидхатович</p>
              <p className="text-gray-700 mb-2">ИНН: [указать при регистрации ИП]</p>
              <p className="text-gray-700 mb-2">ОГРНИП: [указать при регистрации ИП]</p>
              <p className="text-gray-700 mb-2">Адрес: 453114, Республика Башкортостан, г. Стерлитамак, ул. Мирная, д. 6</p>
              <p className="text-gray-700 mb-2">Телефон: +7 (917) 796-92-22</p>
              <p className="text-gray-700 mb-2">Email: r.zinnurov@gmail.com</p>
              <p className="text-gray-700">Банковские реквизиты: [указать после открытия р/с]</p>
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

export default Offer;
