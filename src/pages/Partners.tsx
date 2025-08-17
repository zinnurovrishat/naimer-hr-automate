import React from 'react';
import PartnerHeader from '@/components/partners/PartnerHeader';
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
      {/* Базовая мета-информация */}
      <title>Партнёрам Bitrix/amo — комиссия 10–15% за закрытие отдела продаж за 2–3 дня | Naimer.pro</title>
      <meta 
        name="description" 
        content="Приводим 5/15/25 уже отобранных продавцов за 48–72 часа. Без собеседований. Комиссия партнёру 10–15%." 
      />
      <meta name="robots" content="index, follow" />
      
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