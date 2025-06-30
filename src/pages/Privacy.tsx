
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

const Privacy = () => {
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
              <BreadcrumbPage>Политика конфиденциальности</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Политика конфиденциальности</h1>
          
          <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-600 mb-0">
                Здесь будет размещен текст политики конфиденциальности после предоставления контента.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Общие положения</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Текст будет добавлен после предоставления контента.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Сбор персональных данных</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Текст будет добавлен после предоставления контента.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Цели обработки персональных данных</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Текст будет добавлен после предоставления контента.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Передача персональных данных третьим лицам</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Текст будет добавлен после предоставления контента.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Защита персональных данных</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Текст будет добавлен после предоставления контента.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Права субъекта персональных данных</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Текст будет добавлен после предоставления контента.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Изменение политики конфиденциальности</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Текст будет добавлен после предоставления контента.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Контактная информация</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Текст будет добавлен после предоставления контента.
            </p>
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
