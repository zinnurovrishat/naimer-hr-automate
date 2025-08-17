import React from 'react';

const CommissionBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium">
          Комиссия партнёру: 10–15% от суммы сделки. Холд 7 дней.
        </p>
      </div>
    </div>
  );
};

export default CommissionBanner;