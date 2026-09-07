import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BillDisputeResolver } from '../components/BillDisputeResolver';
import { FaqSection } from '../components/FaqSection';

interface Props {
  lang: Language;
}

export const BillDisputePage: React.FC<Props> = ({ lang }) => {
  const pageTitle = lang === 'hi'
    ? 'गलत बिजली बिल व मीटर समस्या समाधान | HERC रिमार्क डिकोडर व SDO आवेदन पत्र'
    : 'Haryana Electricity High Bill Dispute & Meter Error Resolver | SDO Application';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा बिजली बिल पर DEF, M, RN, NV कोड का अर्थ जानें, HERC रेगुलेशन 61 अनुसार औसत बिलिंग नियम समझें और SDO कार्यालय हेतु तैयार विधिक आवेदन पत्र प्रिंट करें।'
    : 'Decipher Haryana electricity bill remarks (DEF, M, RN, NV), verify HERC statutory protection against unauthorized average billing, and auto-generate an official application to your SDO.';

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/bill-dispute"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'गलत बिल व मीटर समस्या समाधान' : 'High Bill & Meter Dispute' }
          ]}
        />

        <BillDisputeResolver lang={lang} />

        <div className="mt-14">
          <FaqSection lang={lang} />
        </div>
      </div>
    </div>
  );
};
