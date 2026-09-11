import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BillCalculator } from '../components/BillCalculator';
import { Calculator, CheckCircle2, HelpCircle, Sparkles, Scale } from 'lucide-react';

interface Props {
  lang: Language;
}

export const BillCalculatorPage: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const pageTitle = lang === 'hi'
    ? 'हरियाणा घरेलू बिजली बिल कैलकुलेटर: HERC स्लैब दरें, फिक्स्ड चार्ज व स्मार्ट मीटर छूट'
    : 'Haryana Domestic Electricity Bill Calculator: HERC Tariff Slabs, Fixed Charges & Rebates';

  const pageDescription = lang === 'hi'
    ? 'HERC की नवीनतम अधिसूचना के अनुसार हरियाणा का सटीक बिजली बिल निकालें। श्रेणी 1 (लाइफलाइन), श्रेणी 2 व 3 के स्लैब, FSA, बिजली शुल्क (ED), नगर निगम टैक्स और स्मार्ट मीटर 5% छूट का ब्यौरा।'
    : 'Calculate your exact Haryana domestic power bill based on official HERC tariff slabs for Category I, II, and III. View breakdown for energy charges, FSA, electricity duty, municipal tax, and prepaid smart meter discount.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home',
          item: 'https://haryanabijliseva.pages.dev/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: lang === 'hi' ? 'बिजली बिल कैलकुलेटर' : 'Bill Calculator',
          item: 'https://haryanabijliseva.pages.dev/bill-calculator'
        }
      ]
    }
  };

  const keywords = [
    'हरियाणा बिजली बिल कैलकुलेटर',
    'uhbvn bill calculator',
    'dhbvn bill calculator',
    'bijli bill calculation formula haryana',
    'herc tariff slabs domestic',
    'fsa charges haryana'
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/bill-calculator"
        schema={schema}
        keywords={keywords}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'घरेलू बिजली बिल कैलकुलेटर' : 'Domestic Bill Calculator' }
          ]}
        />

        {/* Main Bill Calculator Component */}
        <BillCalculator lang={lang} />

        {/* Educational Breakdown of Bill Line Items */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-extrabold text-slate-900">
              {lang === 'hi' ? 'हरियाणा बिजली बिल के घटकों का अर्थ (डिकोड करें)' : 'Understanding Every Line Item on Your Haryana Bill'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'hi' ? 'ऊर्जा शुल्क (Energy Charges)' : 'Energy Charges (Slab Rates)'}</span>
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'यह आपके द्वारा वास्तव में उपभोग की गई यूनिट (kWh) पर आधारित टेलीस्कोपिक दर है। यदि लोड ≤ 5 kW है और खपत ≤ 150 यूनिट है तो दर केवल ₹2.95/यूनिट है, और 151-300 यूनिट पर ₹5.25/यूनिट।'
                  : 'Calculated progressively based on your consumption slab. For loads up to 5 kW, units from 0-150 are billed at ₹2.95/unit, and 151-300 at ₹5.25/unit.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'hi' ? 'फिक्स्ड चार्ज (Fixed Charges)' : 'Fixed / Demand Charges'}</span>
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? '5 kW तक के कनेक्शन पर 300 यूनिट तक कोई फिक्स्ड चार्ज नहीं लगता! 5 kW से अधिक लोड पर ₹50 प्रति kW प्रति माह का सांविधिक शुल्क लागू होता है।'
                  : 'Zero fixed charges for domestic consumers up to 5 kW consuming up to 300 units! For connected load above 5 kW, a fixed charge of ₹50/kW/month applies.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'hi' ? 'ईंधन अधिभार (FSA - Fuel Surcharge)' : 'Fuel Surcharge Adjustment (FSA)'}</span>
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'कोयले और गैस की दरों में उतार-चढ़ाव की भरपाई हेतु HERC द्वारा ₹0.37 प्रति यूनिट तय किया गया अधिभार जो सभी खपत यूनिट्स पर लागू होता है।'
                  : 'HERC approved charge (currently ₹0.37 per unit) to compensate discoms for fluctuations in generation fuel costs across all consumed units.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'hi' ? 'बिजली शुल्क (ED) व नगर निगम कर (MT)' : 'Electricity Duty (ED) & Municipal Tax (MT)'}</span>
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'हरियाणा सरकार का 10 पैसे प्रति यूनिट बिजली शुल्क (ED) तथा शहरी नगर पालिका/निगम क्षेत्र के अंतर्गत आने वाले मीटरों पर 5 पैसे प्रति यूनिट टैक्स (MT)।'
                  : 'State government tax of 10 paise per unit (Electricity Duty) and local municipal tax of 5 paise per unit within municipal corporation limits.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
