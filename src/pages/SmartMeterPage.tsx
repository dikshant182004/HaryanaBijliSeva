import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SmartMeterAssistant } from '../components/SmartMeterAssistant';
import { FaqSection } from '../components/FaqSection';

interface Props {
  lang: Language;
}

export const SmartMeterPage: React.FC<Props> = ({ lang }) => {
  const pageTitle = lang === 'hi'
    ? 'हरियाणा स्मार्ट मीटर गाइड - दैनिक बैलेंस कटौती, 5% छूट व लाइट डिकोडर'
    : 'Haryana Smart Meter Guide - Daily Deduction, 5% Rebate & LED Decoder';

  const pageDescription = lang === 'hi'
    ? 'गुरुग्राम, फरीदाबाद, करनाल, पंचकूला के लिए UHBVN व DHBVN स्मार्ट मीटर बैलेंस कैलकुलेटर, CAL/PUSH/TAMPER लाइट डिकोडर व HERC सुरक्षा नियम।'
    : 'Smart meter guide for UHBVN and DHBVN consumers across Gurugram, Faridabad, Karnal, Panchkula. Daily prepaid deduction calculator, LED diagnostics, and 5% tariff rebate.';

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/smart-meter"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'स्मार्ट मीटर सहायक व गाइड' : 'Smart Meter Hub' }
          ]}
        />

        <SmartMeterAssistant lang={lang} />

        <div className="mt-14">
          <FaqSection lang={lang} />
        </div>
      </div>
    </div>
  );
};
