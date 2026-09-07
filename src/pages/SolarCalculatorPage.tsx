import React from 'react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SolarCalculator } from '../components/SolarCalculator';
import { FaqSection } from '../components/FaqSection';

interface Props {
  lang: Language;
}

export const SolarCalculatorPage: React.FC<Props> = ({ lang }) => {
  const pageTitle = lang === 'hi'
    ? 'पीएम सूर्य घर रूफटॉप सोलर व हरियाणा सरकार सब्सिडी कैलकुलेटर | 100% फ्री सोलर'
    : 'PM Surya Ghar Haryana Rooftop Solar & State Top-Up Subsidy Calculator';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा में पीएम सूर्य घर मुफ्त बिजली योजना के तहत केंद्र सरकार की ₹78,000 व हरियाणा राज्य परिवार पहचान पत्र (PPP) की ₹50,000 अतिरिक्त सब्सिडी की गणना करें।'
    : 'Calculate PM Surya Ghar central grant plus Haryana additional state top-up subsidy for rooftop solar based on Parivar Pehchan Patra (Family ID).';

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/solar-calculator"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'रूफटॉप सोलर व हरियाणा सब्सिडी कैलकुलेटर' : 'Rooftop Solar & State Subsidy' }
          ]}
        />

        <SolarCalculator lang={lang} />

        <div className="mt-14">
          <FaqSection lang={lang} />
        </div>
      </div>
    </div>
  );
};
