import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { NameTransferGuide } from '../components/NameTransferGuide';
import { ShieldCheck, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

export const NameTransferPage: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const pageTitle = lang === 'hi'
    ? 'हरियाणा बिजली मीटर नाम ट्रांसफर बनाम नया कनेक्शन: पैसे बचाएं व फॉर्म A-1 बांड प्रारूप'
    : 'Haryana Electricity Meter Name Transfer vs New Connection: Save ₹3,000+ & Form A-1 Bond';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा में मकान या दुकान खरीदने पर बिजली मीटर नाम ट्रांसफर (Change of Name) कराने की पूरी प्रक्रिया। जानिए कैसे नया कनेक्शन न लेकर ₹3,000 से ₹10,000 की बचत करें और ₹100 स्टांप पेपर का प्रारूप।'
    : 'Complete guide on transferring electricity meter ownership (Change of Name) in Haryana. Save thousands in Service Connection Charges (SCC), view required documents, and get free Form A-1 indemnity bond format.';

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
          item: 'https://haryana-bijli.gov.guide/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: lang === 'hi' ? 'नाम ट्रांसफर गाइड' : 'Name Transfer Guide',
          item: 'https://haryana-bijli.gov.guide/name-transfer'
        }
      ]
    }
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/name-transfer"
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'नाम ट्रांसफर बनाम नया कनेक्शन' : 'Name Transfer vs New' }
          ]}
        />

        {/* Main Name Transfer Guide Component */}
        <NameTransferGuide lang={lang} />

        {/* Legal Heir / Inheritance Advisory */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-extrabold text-slate-900">
              {lang === 'hi' ? 'विशेष परिस्थिति: यदि पूर्व मालिक दिवंगत हो (उत्तराधिकार / वसीयत)' : 'Special Case: Meter Transfer in Case of Inheritance / Deceased Owner'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {lang === 'hi'
              ? 'यदि बिजली कनेक्शन आपके माता-पिता या पूर्वज के नाम पर है और वे दिवंगत हो चुके हैं, तो पुराने मालिक से NOC संभव नहीं है। ऐसी स्थिति में हरियाणा बिजली बोर्ड निम्न प्रक्रिया अपनाता है:'
              : 'When the registered consumer has passed away, getting an NOC is not possible. Haryana discoms accept the following statutory inheritance workflow:'}
          </p>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc list-inside">
            <li>
              <strong>{lang === 'hi' ? 'मृत्यु प्रमाण पत्र (Death Certificate):' : 'Death Certificate:'}</strong> {lang === 'hi' ? 'पंजीकृत उपभोक्ता का नगर निगम/पंचायत द्वारा जारी मृत्यु प्रमाण पत्र।' : 'Issued by Municipal Corporation or Registrar of Births & Deaths.'}
            </li>
            <li>
              <strong>{lang === 'hi' ? 'कानूनी वारिस शपथ-पत्र (Legal Heir Affidavit):' : 'Legal Heir Affidavit:'}</strong> {lang === 'hi' ? 'कार्यकारी मजिस्ट्रेट / नोटरी द्वारा प्रमाणित शपथ पत्र जिसमें अन्य कानूनी वारिसों की अनापत्ति (NOC) शामिल हो।' : 'Affidavit attested by Notary/Executive Magistrate with consent of other legal heirs.'}
            </li>
            <li>
              <strong>{lang === 'hi' ? 'इंतकाल (Mutation Copy):' : 'Mutation (Inteqal) Copy:'}</strong> {lang === 'hi' ? 'राजस्व रिकॉर्ड में नए मालिक के नाम दर्ज इंतकाल या रजिस्टर्ड वसीयत की प्रति।' : 'Revenue department mutation record or registered will proving transmission of property.'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
