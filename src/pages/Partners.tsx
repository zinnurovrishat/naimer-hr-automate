import React, { useEffect } from 'react';
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
  useEffect(() => {
    // Set page title and meta tags
    document.title = 'Партнёрам Bitrix/amo — комиссия 10–15% за закрытие отдела продаж за 2–3 дня | Naimer.pro';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Приводим 5/15/25 уже отобранных продавцов за 48–72 часа. Без собеседований. Комиссия партнёру 10–15%.');
    }
    
    // Set Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Партнёрам Bitrix/amo — комиссия 10–15% за закрытие отдела продаж за 2–3 дня');
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Приводим 5/15/25 уже отобранных продавцов за 48–72 часа. Без собеседований. Комиссия партнёру 10–15%.');
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', `https://naimer.pro${ogImage}`);
    if (!document.querySelector('meta[property="og:image"]')) {
      document.head.appendChild(ogImage);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
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