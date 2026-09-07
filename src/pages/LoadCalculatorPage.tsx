import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LoadCalculator } from '../components/LoadCalculator';
import { FaqSection } from '../components/FaqSection';

interface Props {
  lang: Language;
}

export const LoadCalculatorPage: React.FC<Props> = ({ lang }) => {
  const pageTitle = lang === 'hi'
    ? 'हरियाणा बिजली लोड कैलकुलेटर - घरेलू लोड, MDI पेनल्टी से बचाव व फीस'
    : 'Haryana Electricity Load Calculator - Household Wattage & MDI Penalty Saver';

  const pageDescription = lang === 'hi'
    ? 'UHBVN व DHBVN के लिए घरेलू उपकरणों (एसी, गीजर, मोटर) का वास्तविक लोड निकालें। MDI पेनल्टी से बचें और सरल पोर्टल पर लोड बढ़ाने का खर्च जानें।'
    : 'Haryana domestic electricity load calculator for UHBVN and DHBVN. Calculate household kW from ACs and appliances, avoid MDI fines, and estimate ACD extension costs.';

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/load-calculator"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'लोड कैलकुलेटर व MDI सुरक्षा' : 'Load Calculator & MDI' }
          ]}
        />

        <LoadCalculator lang={lang} />

        <div className="mt-14">
          <FaqSection lang={lang} />
        </div>
      </div>
    </div>
  );
};
