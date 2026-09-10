import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { NewConnectionWalkthrough } from '../components/NewConnectionWalkthrough';
import { CheckCircle2, ShieldAlert, ArrowRight, FileText, ExternalLink, HelpCircle } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/haryanaData';

interface Props {
  lang: Language;
}

export const NewConnectionPage: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const pageTitle = lang === 'hi'
    ? 'हरियाणा नया बिजली कनेक्शन: आवश्यक दस्तावेज़, HERC शुल्क कैलकुलेटर व आवेदन प्रक्रिया'
    : 'Haryana New Electricity Connection Guide: Documents, HERC Fee Calculator & Process';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा में नया बिजली कनेक्शन लेने की पूरी प्रक्रिया: परिवार पहचान पत्र (PPP), वायरिंग टेस्ट रिपोर्ट, HERC नियमानुसार ACD व SCC शुल्क का हिसाब और सरल हरियाणा पर आवेदन की जानकारी।'
    : 'Complete walkthrough for applying for a fresh electricity connection in Haryana (UHBVN & DHBVN). Parivar Pehchan Patra (Family ID) requirements, HERC ACD & SCC fee estimator, and official Saral Haryana portal links.';

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
          item: 'https://haryanabijliseva.in/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: lang === 'hi' ? 'नया बिजली कनेक्शन' : 'New Electricity Connection',
          item: 'https://haryanabijliseva.in/new-connection'
        }
      ]
    }
  };

  const keywords = [
    'हरियाणा नया बिजली कनेक्शन',
    'saral haryana new electricity connection',
    'uhbvn new connection fees',
    'dhbvn new connection documents',
    'scc charges per kw haryana',
    'family id ppp electricity connection'
  ];

  const steps = [
    {
      step: '1',
      titleEn: 'Parivar Pehchan Patra (PPP) Verification',
      titleHi: 'परिवार पहचान पत्र (PPP) सत्यापन',
      descEn: 'For domestic connections, Haryana mandates linkage with the applicant’s Family ID. Ensure family members and address match the property title.',
      descHi: 'घरेलू कनेक्शन हेतु परिवार पहचान पत्र (Family ID) अनिवार्य है। संपत्ति के पते व आवेदक का नाम PPP डेटाबेस से मेल खाना चाहिए।'
    },
    {
      step: '2',
      titleEn: 'Obtain Site Test Report',
      titleHi: 'वायरिंग टेस्ट रिपोर्ट प्राप्त करें',
      descEn: 'A certified government-licensed electrical contractor must inspect the premises wiring, earth electrode resistance, and issue a signed Test Report.',
      descHi: 'सरकारी लाइसेंस प्राप्त इलेक्ट्रीशियन से मकान की वायरिंग जांच करवाकर हस्ताक्षरित साइट टेस्ट रिपोर्ट और अर्थिंग प्रमाण-पत्र लें।'
    },
    {
      step: '3',
      titleEn: 'Online Application on Saral Haryana or Discom Portal',
      titleHi: 'सरल हरियाणा या निगम पोर्टल पर ऑनलाइन आवेदन',
      descEn: 'Submit applicant details, upload property deed / mutation (inteqal), test report, and pay the nominal processing fee (₹50 - ₹100).',
      descHi: 'सरल हरियाणा या UHBVN/DHBVN साइट पर रजिस्ट्री, टेस्ट रिपोर्ट व फोटो अपलोड करें तथा मामूली आवेदन शुल्क जमा करें।'
    },
    {
      step: '4',
      titleEn: 'Site Feasibility & Demand Notice (DN)',
      titleHi: 'साइट निरीक्षण व डिमांड नोटिस (DN) भुगतान',
      descEn: 'The Junior Engineer (JE) verifies pole distance and transformer capacity. Discom issues a Demand Notice with verified ACD + SCC charges.',
      descHi: 'कनिष्ठ अभियंता (JE) खंभे की दूरी और ट्रांसफार्मर क्षमता जांचेगा, जिसके बाद अधिकृत डिमांड नोटिस (ACD + SCC) जारी होगा।'
    },
    {
      step: '5',
      titleEn: 'Meter Installation & Energization',
      titleHi: 'मीटर स्थापना व विद्युत आपूर्ति चालू',
      descEn: 'Under HERC Standards of Performance, connection must be energized within 7 days in urban areas and 10 days in rural areas after Demand Notice payment.',
      descHi: 'HERC नियमों के तहत डिमांड नोटिस का भुगतान होने के बाद शहरी क्षेत्र में 7 दिन व ग्रामीण क्षेत्र में 10 दिन के भीतर मीटर लगना अनिवार्य है।'
    }
  ];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/new-connection"
        schema={schema}
        keywords={keywords}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'नया बिजली कनेक्शन गाइड व शुल्क' : 'New Connection Guide' }
          ]}
        />

        {/* Main Walkthrough & Fee Estimator Component */}
        <NewConnectionWalkthrough lang={lang} />

        {/* 5-Step Process Visual Flow */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-bold uppercase tracking-wider">
              {lang === 'hi' ? 'आवेदन से मीटर लगने तक का रोडमैप' : 'Step-by-Step Energization Lifecycle'}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
              {lang === 'hi' ? 'हरियाणा में नया मीटर प्राप्त करने के 5 चरण' : '5 Clear Steps to Get Your New Haryana Meter'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'सरकारी नियमों और HERC स्टैंडर्ड ऑफ परफॉर्मेंस (SOP) के तहत हर चरण की समय सीमा निर्धारित है:'
                : 'Timelines are legally protected under Haryana Electricity Regulatory Commission (HERC) standards:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative">
                <div>
                  <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-black text-sm flex items-center justify-center mb-3">
                    {s.step}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1.5">
                    {lang === 'hi' ? s.titleHi : s.titleEn}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {lang === 'hi' ? s.descHi : s.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Application Portal Links */}
        <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white">
          <div className="max-w-2xl mb-6">
            <h3 className="text-xl font-extrabold">
              {lang === 'hi' ? 'सीधे आधिकारिक सरकारी पोर्टल पर आवेदन करें' : 'Apply Online on Official Government Portals'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {lang === 'hi'
                ? 'हरियाणा बिजली सेवा केवल एक सूचनात्मक गाइड है। आवेदन और डिमांड नोटिस भुगतान केवल इन आधिकारिक वेबसाइटों पर ही करें:'
                : 'All formal document submissions and government demand notice fees must be executed directly through the official portals:'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={OFFICIAL_LINKS.saralHaryana}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all flex items-center justify-between group"
            >
              <div>
                <span className="block font-bold text-sm text-amber-300">Saral Haryana Portal</span>
                <span className="text-xs text-slate-300">Using PPP Family ID</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </a>

            <a
              href={OFFICIAL_LINKS.uhbvn.newConnection}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all flex items-center justify-between group"
            >
              <div>
                <span className="block font-bold text-sm text-emerald-300">UHBVN New Connection</span>
                <span className="text-xs text-slate-300">11 North Districts</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </a>

            <a
              href={OFFICIAL_LINKS.dhbvn.newConnection}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all flex items-center justify-between group"
            >
              <div>
                <span className="block font-bold text-sm text-sky-300">DHBVN New Connection</span>
                <span className="text-xs text-slate-300">11 South Districts</span>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
