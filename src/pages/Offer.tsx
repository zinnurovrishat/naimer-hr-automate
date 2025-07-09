
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

const Offer = () => {
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
              <BreadcrumbPage>Оферта</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Договор с конечным пользователем</h1>
          
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <div className="text-center mb-8 text-gray-600">
              <p className="mb-2">Договор публичной оферты №1</p>
              <p className="mb-2">г. Стерлитамак | 09.07.2025 г.</p>
              <p>Утверждён ИП Зиннуров Ришат Мидхатович от 09.07.2025 г.</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">ОБЩЕЕ ПОЛОЖЕНИЕ:</h2>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li className="mb-4">Данный документ является официальным предложением (публичной офертой) ИП Зиннуров Ришат Мидхатович, именуемого в дальнейшем <strong>"Исполнитель"</strong>, заключить лицензионный договор, либо договор оказания услуг, либо смешанный договор, с любым заинтересованным лицом.</li>
              <li className="mb-4"><strong>Заказчиком</strong> по договору, заключенному на условиях настоящей оферты, признается любое лицо, внесшее сумму <strong>100% предварительной оплаты</strong> за предоставление услуг, либо предоставление права использования (лицензии) программного продукта (Программы для ЭВМ) в соответствии с настоящим Договором. На основании с пункта 3 статьи 438 Гражданского кодекса РФ это признается полными безоговорочным принятием (акцептом) условий настоящей публичной оферты Заказчиком.</li>
              <li className="mb-4">Настоящая Оферта может быть принята исключительно в целом (п. 1 ст. 428 Гражданского кодекса РФ). После Акцепта оферты настоящая Оферта приобретает силу Договора, заключенного между Заказчиком и Исполнителем, при этом такой Договор как бумажный документ, подписанный обеими Сторонами, не оформляется.</li>
              <li className="mb-4">В связи с вышеизложенным, <strong>внимательно</strong> прочитайте текст данной публичной Оферты.</li>
              <li className="mb-4">Если Вы не согласны с каким-либо пунктом настоящей Оферты, Исполнитель предлагает Вам отказаться от использования услуг или заключить с Исполнителем отдельное соглашение или договор.</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">ОСНОВНЫЕ ПОНЯТИЯ, ИСПОЛЬЗУЕМЫЕ В ДОГОВОРЕ</h2>
            <ol start="6" className="list-decimal pl-6 mb-6 text-gray-700">
              <li className="mb-4"><strong>Адрес публикации</strong> - адрес в сети Интернет, содержащий ссылки на соответствующие документы, расположенный по одному из адресов: https://naimer.pro/offer</li>
              <li className="mb-4"><strong>Оферта</strong> -- настоящий документ "Договор публичной оферты", опубликованный надлежащим образом.</li>
              <li className="mb-4"><strong>Акцепт Оферты</strong> -- полное и безоговорочное принятие Оферты Заказчиком путем обращения к Исполнителю за оказанием предоставляемых им услуг и внесением оплаты в соответствии с Прейскурантом. Акцепт Оферты создает Договор Оферты.</li>
              <li className="mb-4"><strong>Платформа edler.pro (далее - платформа)</strong> - единая платформа для управления Модулями, учётной записью Заказчика, расположенная по адресу в сети Интернет https://edler.pro.</li>
              <li className="mb-4"><strong>Прейскурант (также - Прайс-лист)</strong> -- действующий систематизированный перечень оказываемых Исполнителем услуг с ценами, опубликованный надлежащим образом по Адресу публикации (Приложение №1)</li>
              <li className="mb-4"><strong>«Вы»</strong> --- физическое лицо, устанавливающее или использующее Программный Продукт от собственного имени; или, если Программный Продукт устанавливается или используется от имени юридического лица, «Вы» означает юридическое лицо, для которого устанавливается или используется Программный Продукт, и настоящим утверждается, что Вы уполномочили физическое лицо, принимающее Договор и все его условия, действовать от Вашего имени. В целях Договора термин «юридическое лицо» включает в себя все виды коммерческих и некоммерческих организаций, государственные и муниципальные органы, предприятия и учреждения. <strong>«Вы»</strong> - это также конкретный пользователь Программного Продукта на указанный срок использования («Срок Использования»)</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">ПРЕДМЕТ ДОГОВОРА</h2>
            <ol start="12" className="list-decimal pl-6 mb-6 text-gray-700">
              <li className="mb-4">Предметом настоящего договора является оказание услуг в систематизации бизнеса Заказчика, с помощью предоставления конкретных услуг, продуктов или их комплекса. Конкретные услуги и продукты Исполнителя указанные в Прейскуранте (Приложение №1).</li>
              <li className="mb-4">Оплата вознаграждения производится посредством способов, предложенных на сайте Исполнителя.</li>
              <li className="mb-4">Осуществляя акцепт оферты, Лицензиат дает согласие на сбор и обработку персональных данных о себе для целей и на условиях, изложенных в политике конфиденциальности Лицензиара.</li>
              <li className="mb-4">Территория использования -- территория <strong>Российской Федерации.</strong></li>
              <li className="mb-4">Каждая из Сторон гарантирует, что обладает необходимой право- и дееспособностью, а равно всеми правами и полномочиями, необходимыми и достаточными для заключения и исполнения Договора.</li>
              <li className="mb-4">Заказчик подтверждает, что до момента заключения Договора (акцепта оферты) получил полную информацию о программном продукте и условиях его использования.</li>
              <li className="mb-4">Стороны устанавливают обязательный претензионный порядок разрешения споров. Срок рассмотрения претензий составляет не более 14 (четырнадцать) дней с момента получения претензии.</li>
              <li className="mb-4">Споры, возникшие в рамках настоящей оферты, передаются на рассмотрение в суд в соответствии с действующим законодательством Российской Федерации.</li>
              <li className="mb-4">Исполнитель оставляет за собой право вносить изменения в текст настоящей оферты без специального уведомления об этом Лицензиата путем публикации новой редакции. Новая редакция оферты вступает в силу с момента ее размещения на сайте Исполнителя, если иное не предусмотрено новой редакцией</li>
              <li className="mb-4">По вопросам, не урегулированным офертой, Стороны руководствуются действующим законодательством Российской Федерации.</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">АКЦЕПТ ОФЕРТЫ И ПОРЯДОК РАСЧЁТОВ</h2>
            <ol start="22" className="list-decimal pl-6 mb-6 text-gray-700">
              <li className="mb-4">Акцепт Оферты производится путем оплаты любым допускаемым законодательством Российской Федерации способом.</li>
              <li className="mb-4">Датой оплаты по настоящему Договору считается дата поступления денежных средств на р/с исполнителя.</li>
              <li className="mb-4">Оплата вознаграждения Исполнителя за Заказчика может быть произведена третьим лицом по поручению Заказчика. В случае оплаты вознаграждения третьим лицом, такой платеж будет считаться произведенным с согласия и по поручению Заказчика.</li>
              <li className="mb-4">В случае невозможности исполнения обязательств Исполнителем, возникшей по вине Заказчика, услуги подлежат оплате в полном объеме.</li>
              <li className="mb-4">Заказчик подтверждает, что ознакомлен до заключения договора с информацией об Исполнителе, об оказываемых им платных услугах, (в том числе с информацией, содержащей сведения о предоставлении платных услуг в порядке и объеме, которые предусмотрены Законом Российской Федерации «О защите прав потребителей» и прочими законодательными актами), получив возможность их правильного выбора.</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">ПРАВА И ОБЯЗАННОСТИ СТОРОН</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Исполнитель обязуется:</h3>
            <p className="text-gray-700 mb-4">Предоставить Заказчику продукты и услуги, указанные в Прейскуранте качественно, в срок, в соответствии с условиями конкретных позиций</p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Исполнитель вправе:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Сдать Заказчику результат работы в согласованный срок, указанный в Прейскуранте Исполнителя, без оформления каких-либо дополнительных актов и товарно-транспортных документов.</li>
              <li>Приостановить выполнение своих обязательств по настоящей Оферте в случае неисполнения (ненадлежащего исполнения) обязательств со стороны Заказчика.</li>
              <li>В одностороннем порядке отказаться от исполнения настоящей Оферты в случае нарушения Заказчиком ее условий.</li>
              <li>В одностороннем порядке без предварительного согласования с Заказчиком изменять Прейскурант и условия настоящей публичной Оферты.</li>
              <li>Разместить данные о Заказчике в своем портфолио.</li>
              <li>Использовать данные учётных записей программы в целях рекламы и презентации продуктов Исполнителя.</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Заказчик обязан:</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Своевременно, в предусмотренные настоящим Договором сроки, и в полном объеме оплатить заказанные позиции;</li>
              <li>Предоставлять полную и соответствующую действительности информацию касательно предмета настоящего Договора;</li>
              <li>Осуществлять приемку выполненных Исполнителем работ.</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Заказчик вправе:</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Производить Акцепт Оферты способом, указанном в настоящей Оферте.</li>
              <li>Получить результат работы от Исполнителя в срок и в соответствии с условиями настоящего договора.</li>
              <li>Своевременно получать от Исполнителя всю необходимую информацию, касающуюся предоставляемых по настоящему Договору услуг, в рабочее время.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">ПРОЧИЕ УСЛОВИЯ</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              В случае возникновения каких-либо разногласий, стороны будут стремиться разрешить их мирным путем. Во всех прочих условиях Стороны будут руководствоваться законодательством Российской Федерации.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">ЗАКЛЮЧИТЕЛЬНОЕ ПОЛОЖЕНИЕ</h2>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li className="mb-4">Договор вступает в силу с момента его Акцента заказчиком</li>
              <li className="mb-4">Все приложения и дополнительные соглашения, если таковые были заключены, является неотъемлемой частью договора оферты</li>
              <li className="mb-4">К договору прилагается:
                <ul className="list-disc pl-6 mt-2">
                  <li>Приложение №1: Прейскурант к договору публичной оферты</li>
                  <li>Приложение №2: Акт сдачи-приёмки оказанных услуг</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">РЕКВИЗИТЫ ИСПОЛНИТЕЛЯ</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-semibold mb-4">Сторона 1: ИП Зиннуров Ришат Мидхатович</p>
              <p className="text-gray-700 mb-2"><strong>Юридический адрес:</strong> 453114, Республика Башкортостан, город Стерлитамак, улица Мирная, 6</p>
              <p className="text-gray-700 mb-2"><strong>Адрес для корреспонденции:</strong> 453114, Республика Башкортостан, город Стерлитамак, улица Мирная, 6</p>
              <p className="text-gray-700 mb-2"><strong>ИНН:</strong> 026800071886</p>
              <p className="text-gray-700 mb-2"><strong>ОГРНИП:</strong> 325028000146701</p>
              <p className="text-gray-700 mb-2"><strong>Банк:</strong> ООО "Банк Точка"</p>
              <p className="text-gray-700 mb-2"><strong>Р/счёт:</strong> 40802810220000686886</p>
              <p className="text-gray-700 mb-2"><strong>Кор. счёт:</strong> 30101810745374525104</p>
              <p className="text-gray-700 mb-2"><strong>БИК:</strong> 044525104</p>
              <p className="text-gray-700 mb-2"><strong>Тел:</strong> 8-917-79-69-222, 8-993-046-29-22</p>
              <p className="text-gray-700"><strong>Контактный e-mail:</strong> r.zinnurov@gmail.com</p>
            </div>

            <div className="border-t border-gray-300 pt-8 mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">ПРЕЙСКУРАНТ (Приложение №1)</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Подбор кандидатов</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">№</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Наименование</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Описание</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Срок исполнения</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Условия</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">EP1</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подбор кандидатов Тариф #Мини</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подбор кандидатов через платформу edler.pro</td>
                        <td className="px-4 py-2 border-b border-gray-300">30 календарных дней</td>
                        <td className="px-4 py-2 border-b border-gray-300">Предоставить 5 целевых кандидатов<br/><strong>Цена: 99 500 Р</strong></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">EP2</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подбор кандидатов Тариф #Малый</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подбор кандидатов через платформу edler.pro</td>
                        <td className="px-4 py-2 border-b border-gray-300">30 календарных дней</td>
                        <td className="px-4 py-2 border-b border-gray-300">Предоставить 15 целевых кандидатов<br/><strong>Цена: 149 500 Р</strong></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">EP3</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подбор кандидатов Тариф #Средний</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подбор кандидатов через платформу edler.pro</td>
                        <td className="px-4 py-2 border-b border-gray-300">30 календарных дней</td>
                        <td className="px-4 py-2 border-b border-gray-300">Предоставить 25 целевых кандидатов<br/><strong>Цена: 199 500 Р</strong></td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">EP4</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подбор кандидатов Тариф #Большой</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подбор кандидатов через платформу edler.pro</td>
                        <td className="px-4 py-2 border-b border-gray-300">30 календарных дней</td>
                        <td className="px-4 py-2 border-b border-gray-300">Предоставить 50 целевых кандидатов<br/><strong>Цена: 299 500 Р</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Лицензия на ПО</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">№</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Наименование</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Описание</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Срок исполнения</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Условия</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">E1</td>
                        <td className="px-4 py-2 border-b border-gray-300">Неисключительная лицензия на ПО edler.pro</td>
                        <td className="px-4 py-2 border-b border-gray-300">Приобретение лицензии платформы edler.pro</td>
                        <td className="px-4 py-2 border-b border-gray-300">1 рабочий день</td>
                        <td className="px-4 py-2 border-b border-gray-300">В соответствии с условиями на https://edler.pro/rate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Сценарии обучения</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">№</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Наименование</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Описание</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Срок исполнения</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Условия</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">С1</td>
                        <td className="px-4 py-2 border-b border-gray-300">Сценарий "Телемаркетинг"</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подключение материалов "Телемаркетинг"</td>
                        <td className="px-4 py-2 border-b border-gray-300">1 день</td>
                        <td className="px-4 py-2 border-b border-gray-300">Согласно https://edler.pro/market</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">С2</td>
                        <td className="px-4 py-2 border-b border-gray-300">Сценарий "Мастер Продаж"</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подключение материалов "Мастер Продаж"</td>
                        <td className="px-4 py-2 border-b border-gray-300">1 день</td>
                        <td className="px-4 py-2 border-b border-gray-300">Согласно https://edler.pro/market</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">С3</td>
                        <td className="px-4 py-2 border-b border-gray-300">Сценарий "Welcome-Стажировка"</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подключение материалов "Welcome Стажировка"</td>
                        <td className="px-4 py-2 border-b border-gray-300">1 день</td>
                        <td className="px-4 py-2 border-b border-gray-300">Согласно https://edler.pro/market</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">C4</td>
                        <td className="px-4 py-2 border-b border-gray-300">Сценарий "Система Отдела Продаж"</td>
                        <td className="px-4 py-2 border-b border-gray-300">Подключение материалов "Система Отдела Продаж"</td>
                        <td className="px-4 py-2 border-b border-gray-300">1 день</td>
                        <td className="px-4 py-2 border-b border-gray-300">Согласно https://edler.pro/market</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Дополнительные услуги</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">№</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Наименование</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Описание</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Срок исполнения</th>
                        <th className="px-4 py-2 border-b border-gray-300 text-left">Условия</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="px-4 py-2 border-b border-gray-300">П1</td>
                        <td className="px-4 py-2 border-b border-gray-300">Консультационные услуги</td>
                        <td className="px-4 py-2 border-b border-gray-300">Консультации по использованию платформы edler.pro</td>
                        <td className="px-4 py-2 border-b border-gray-300">30 дней</td>
                        <td className="px-4 py-2 border-b border-gray-300"><strong>85 000 руб в месяц</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
