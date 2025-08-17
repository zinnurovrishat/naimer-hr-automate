import React from 'react';
import { Helmet } from 'react-helmet-async';
import PartnerHeader from '@/components/partners/PartnerHeader';
import ogImage from '@/assets/og-partners.jpg';
import CommissionBanner from '@/components/partners/CommissionBanner';
import PartnerHero from '@/components/partners/PartnerHero';
import PartnerTargetAudience from '@/components/partners/PartnerTargetAudience';
import PartnerHowItWorks from '@/components/partners/PartnerHowItWorks';
import PartnerBenefits from '@/components/partners/PartnerBenefits';
import PartnerClientBenefits from '@/components/partners/PartnerClientBenefits';
import PartnerPricing from '@/components/partners/PartnerPricing';
import PartnerCandidates from '@/components/partners/PartnerCandidates';
import PartnerFAQ from '@/components/partners/PartnerFAQ';
import PartnerForm from '@/components/partners/PartnerForm';
import PartnerFooter from '@/components/partners/PartnerFooter';

const Partners = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Партнёрам Bitrix/amo — комиссия 10–15% за закрытие отдела продаж за 2–3 дня | Naimer.pro</title>
        <meta 
          name="description" 
          content="Приводим 5/15/25 уже отобранных продавцов за 48–72 часа. Без собеседований. Комиссия партнёру 10–15%." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://naimer.pro/partners" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://naimer.pro/partners" />
        <meta property="og:title" content="Партнёрам Bitrix/amo — комиссия 10–15% за закрытие отдела продаж за 2–3 дня" />
        <meta property="og:description" content="Приводим 5/15/25 уже отобранных продавцов за 48–72 часа. Без собеседований. Комиссия партнёру 10–15%." />
        <meta property="og:image" content={`https://naimer.pro${ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Naimer.pro" />
        <meta property="og:locale" content="ru_RU" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://naimer.pro/partners" />
        <meta property="twitter:title" content="Партнёрам Bitrix/amo — комиссия 10–15% за закрытие отдела продаж за 2–3 дня" />
        <meta property="twitter:description" content="Приводим 5/15/25 уже отобранных продавцов за 48–72 часа. Без собеседований. Комиссия партнёру 10–15%." />
        <meta property="twitter:image" content={`https://naimer.pro${ogImage}`} />
        
        {/* Additional SEO */}
        <meta name="keywords" content="партнёрам, bitrix24, amocrm, комиссия, продавцы, рекрутинг, отдел продаж" />
        <meta name="author" content="Naimer.pro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      
      <PartnerHeader />
      <CommissionBanner />
      <PartnerHero />
      <PartnerTargetAudience />
      <PartnerHowItWorks />
      <PartnerBenefits />
      <PartnerClientBenefits />
      <PartnerPricing />
      <PartnerCandidates />
      <PartnerFAQ />
      <PartnerForm />
      <PartnerFooter />
    </div>
  );
};

export default Partners;