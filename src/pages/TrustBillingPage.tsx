import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TrustBillingGuide } from '../components/TrustBillingGuide';
import { FaqSection } from '../components/FaqSection';

interface Props {
  lang: Language;
}

export const TrustBillingPage: React.FC<Props> = ({ lang }) => {
  const pageTitle = lang === 'hi'
    ? 'हरियाणा बिजली व्हाट्सएप बॉट व ट्रस्ट बिलिंग (खुद भरें मीटर रीडिंग)'
    : 'Haryana Electricity WhatsApp Chatbot & Self Meter Reading (Trust Billing)';

  const pageDescription = lang === 'hi'
    ? 'UHBVN (+91 98159-61912) व DHBVN (+91 88139-97080) के आधिकारिक व्हाट्सएप नंबर पर खुद मीटर रीडिंग भेजें और गलत औसत बिल (NV) से बचें।'
    : 'Official WhatsApp chatbot helplines for UHBVN and DHBVN Haryana. Submit self meter readings (Trust Billing) with photos, download duplicate bills, and report outages.';

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/trust-billing"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'व्हाट्सएप चैटबॉट व ट्रस्ट बिलिंग' : 'WhatsApp & Trust Billing' }
          ]}
        />

        <TrustBillingGuide lang={lang} />

        <div className="mt-14">
          <FaqSection lang={lang} />
        </div>
      </div>
    </div>
  );
};
