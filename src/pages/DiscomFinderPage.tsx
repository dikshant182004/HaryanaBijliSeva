import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DiscomFinder } from '../components/DiscomFinder';
import { HARYANA_DISTRICTS } from '../data/haryanaData';
import { Link } from '../router/RouterContext';
import { HelpCircle, ExternalLink, CheckCircle2, FileQuestion } from 'lucide-react';

interface Props {
  lang: Language;
}

export const DiscomFinderPage: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const pageTitle = lang === 'hi'
    ? 'मेरा कौन सा निगम है? UHBVN बनाम DHBVN फाइंडर व बिल चेकर | हरियाणा बिजली'
    : 'Which Discom is Mine? Haryana Electricity Board Finder (UHBVN vs DHBVN) & Bill Checker';

  const pageDescription = lang === 'hi'
    ? 'पिन कोड, जिले या खाता संख्या से तुरंत पहचानें कि आप UHBVN (उत्तर हरियाणा) में आते हैं या DHBVN (दक्षिण हरियाणा) में। सीधे आधिकारिक बिल भुगतान गेटवे का लिंक प्राप्त करें।'
    : 'Check your electricity board in Haryana by PIN code, district, or 10-digit account number. Direct links to genuine UHBVN and DHBVN bill payment gateways.';

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
          name: lang === 'hi' ? 'डिस्कॉम फाइंडर' : 'Discom Finder',
          item: 'https://haryanabijliseva.pages.dev/discom-finder'
        }
      ]
    }
  };

  const keywords = [
    'mera kaun sa discom hai',
    'uhbvn or dhbv finder',
    'which electricity board in haryana',
    'हरियाणा बिजली निगम कौन सा है',
    'check uhbvn or dhbvn by pincode',
    'bijli bill account number search haryana'
  ];

  const uhbvnDistricts = HARYANA_DISTRICTS.filter(d => d.discom === 'UHBVN');
  const dhbvnDistricts = HARYANA_DISTRICTS.filter(d => d.discom === 'DHBVN');

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/discom-finder"
        schema={schema}
        keywords={keywords}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'मेरा कौन सा निगम है? (डिस्कॉम फाइंडर)' : 'Which Discom is Mine?' }
          ]}
        />

        {/* Main Discom Finder Interactive Tool */}
        <DiscomFinder lang={lang} />

        {/* Quick Reference Two-Discom Matrix */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-extrabold text-slate-900">
              {lang === 'hi' ? 'हरियाणा 22 जिले: उत्तर (UHBVN) व दक्षिण (DHBVN) विभाजन सूची' : 'Complete 22 Districts Distribution by Nigam'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            {lang === 'hi'
              ? 'यदि आपको अपना पिन कोड याद नहीं है, तो नीचे अपने जिले पर क्लिक करके सीधे उस जिले का डिस्कॉम, सर्कल कार्यालय, हेल्पलाइन नंबर और आधिकारिक बिल भुगतान गेटवे देख सकते हैं:'
              : 'Click any district below to open its dedicated guide with circle offices, localized subdivisions, contact phones, and direct bill payment gateway:'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5">
              <span className="inline-block px-2.5 py-1 bg-emerald-700 text-white font-black text-xs rounded-md uppercase tracking-wider mb-3">
                UHBVN (North Haryana - 11 Districts)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {uhbvnDistricts.map(d => (
                  <Link
                    key={d.id}
                    to={`/districts/${d.id}`}
                    className="p-2 bg-white rounded-lg border border-emerald-200 text-slate-800 font-semibold hover:border-emerald-600 hover:text-emerald-800 transition-colors"
                  >
                    {lang === 'hi' ? d.nameHi : d.nameEn}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-sky-200 bg-sky-50/40 p-5">
              <span className="inline-block px-2.5 py-1 bg-sky-700 text-white font-black text-xs rounded-md uppercase tracking-wider mb-3">
                DHBVN (South Haryana - 11 Districts)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {dhbvnDistricts.map(d => (
                  <Link
                    key={d.id}
                    to={`/districts/${d.id}`}
                    className="p-2 bg-white rounded-lg border border-sky-200 text-slate-800 font-semibold hover:border-sky-600 hover:text-sky-800 transition-colors"
                  >
                    {lang === 'hi' ? d.nameHi : d.nameEn}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Specific to Discom Identification */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-extrabold text-slate-900">
              {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल: डिस्कॉम पहचान' : 'Frequently Asked Questions: Discom Identification'}
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">
                {lang === 'hi' ? 'Q: क्या मैं DHBVN के पोर्टल पर UHBVN का बिल भर सकता हूँ?' : 'Q: Can I pay a UHBVN electricity bill on the DHBVN portal?'}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'नहीं। UHBVN और DHBVN दो अलग-अलग निगम हैं जिनके उपभोक्ता डेटाबेस और सर्वर अलग हैं। यदि आप गलत पोर्टल पर खाता नंबर डालेंगे तो "Invalid Consumer ID" त्रुटि आएगी। कृपया अपना सही निगम पहचान कर ही भुगतान करें।'
                  : 'No. Both discoms operate isolated consumer accounting systems. Entering a UHBVN 10-digit number on DHBVN portal will result in an "Invalid Consumer ID / Record Not Found" error. Always use the verified discom gateway.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-1">
                {lang === 'hi' ? 'Q: पुराना 8-अक्षरों वाला खाता नंबर (जैसे GG-1234) अब काम क्यों नहीं कर रहा?' : 'Q: Why doesn’t my old alphanumeric bill number (like PK-1234) work anymore?'}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'हरियाणा ने ई-पेमेंट और BBPS प्रणाली को सुदृढ़ करने हेतु 10 अंकों का एकीकृत डिजिटल अकाउंट नंबर अनिवार्य कर दिया है। आपके नवीनतम बिजली बिल के ऊपरी हिस्से में यह 10-अंकीय नंबर स्पष्ट छपा होता है।'
                  : 'Both Haryana nigams migrated to a 10-digit unified digital billing account number for national BBPS payment integration. Check the top right corner of your latest printed or SMS electricity bill to find your 10-digit account ID.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
