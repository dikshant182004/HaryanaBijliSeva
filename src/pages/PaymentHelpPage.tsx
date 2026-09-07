import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PaymentHelpResolver } from '../components/PaymentHelpResolver';
import { FaqSection } from '../components/FaqSection';

interface Props {
  lang: Language;
}

export const PaymentHelpPage: React.FC<Props> = ({ lang }) => {
  const pageTitle = lang === 'hi'
    ? 'बिजली बिल पेमेंट फेल या दो बार पैसे कटे? समाधान व रिफंड गाइड | हरियाणा बिजली'
    : 'Haryana Electricity Failed Payment & Double Debit Refund Resolver | UHBVN & DHBVN';

  const pageDescription = lang === 'hi'
    ? 'UHBVN या DHBVN पोर्टल पर पैसे कटने किंतु रसीद न मिलने, 48 घंटे के ऑटो-रिकॉन्सिलिएशन नियमों और दोहरे भुगतान समायोजन की संपूर्ण विधिक प्रक्रिया।'
    : 'Resolve debited bank payments with pending status on UHBVN/DHBVN, track gateway transaction status, and understand duplicate debit advance credit rules.';

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/payment-help"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'भुगतान व रिफंड सहायता' : 'Failed Payment & Refund Help' }
          ]}
        />

        <PaymentHelpResolver lang={lang} />

        <div className="mt-14">
          <FaqSection lang={lang} />
        </div>
      </div>
    </div>
  );
};
