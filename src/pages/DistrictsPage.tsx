import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DistrictDirectory } from '../components/DistrictDirectory';
import { 
  MapPin, 
  Building2, 
  PhoneCall, 
  ExternalLink, 
  ArrowRight,
  ShieldCheck,
  Scale,
  Zap,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  FileText
} from 'lucide-react';
import { HARYANA_DISTRICTS, OFFICIAL_LINKS, VERIFIED_HELPLINES } from '../data/haryanaData';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

export const DistrictsPage: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const pageTitle = lang === 'hi'
    ? 'हरियाणा के सभी 22 जिलों की बिजली बोर्ड डायरेक्टरी: UHBVN व DHBVN सर्कल व SDO कार्यालय'
    : 'Haryana Electricity Board Directory: All 22 Districts Circle Offices, SDOs & 1912 Helplines';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा के सभी 22 जिलों की आधिकारिक बिजली डायरेक्टरी: पानीपत, गुरुग्राम, फरीदाबाद, अम्बाला, हिसार, रोहतक व अन्य। डिस्कॉम (UHBVN/DHBVN), सर्कल पता, कंट्रोल रूम फोन, सब-डिवीजन व बिल पेमेंट।'
    : 'Comprehensive electricity directory for all 22 districts of Haryana: Panipat, Gurugram, Faridabad, Ambala, Hisar, Rohtak & more. Discom jurisdiction (UHBVN vs DHBVN), circle control rooms, SDO offices & billing.';

  const statewideFaqs = [
    {
      qEn: 'How is electricity distribution divided between UHBVN and DHBVN in Haryana?',
      qHi: 'हरियाणा में बिजली वितरण UHBVN और DHBVN के बीच किस प्रकार विभाजित है?',
      aEn: 'Haryana is divided into two state-owned power distribution companies under Haryana Vidyut Prasaran Nigam (HVPNL): Uttar Haryana Bijli Vitran Nigam (UHBVN, HQ in Panchkula) manages 11 northern districts, while Dakshin Haryana Bijli Vitran Nigam (DHBVN, HQ in Hisar) manages 11 southern and NCR districts.',
      aHi: 'हरियाणा में दो सरकारी वितरण निगम कार्यरत हैं: उत्तर हरियाणा बिजली वितरण निगम (UHBVN, मुख्यालय पंचकूला) राज्य के 11 उत्तरी जिलों का प्रबंधन करता है, जबकि दक्षिण हरियाणा बिजली वितरण निगम (DHBVN, मुख्यालय हिसar) राज्य के 11 दक्षिणी व एनसीआर जिलों का प्रबंधन करता है।'
    },
    {
      qEn: 'Which districts fall under UHBVN and which under DHBVN?',
      qHi: 'UHBVN और DHBVN के तहत कौन-कौन से जिले आते हैं?',
      aEn: 'UHBVN covers Panchkula, Ambala, Yamunanagar, Kurukshetra, Kaithal, Karnal, Panipat, Sonipat, Rohtak, Jhajjar, and Jind. DHBVN covers Gurugram, Faridabad, Hisar, Rewari, Sirsa, Fatehabad, Bhiwani, Charkhi Dadri, Mahendragarh (Narnaul), Palwal, and Nuh (Mewat).',
      aHi: 'UHBVN के अंतर्गत: पंचकूला, अम्बाला, यमुनानगर, कुरुक्षेत्र, कैथल, करनाल, पानीपत, सोनीपत, रोहतक, झज्जर एवं जींद आते हैं। DHBVN के अंतर्गत: गुरुग्राम, फरीदाबाद, हिसार, रेवाड़ी, सिरसा, फतेहाबाद, भिवानी, चरखी दादरी, महेंद्रगढ़ (नारनौल), पलवल एवं नूह (मेवात) आते हैं।'
    },
    {
      qEn: 'What is the universal electricity complaint number for all Haryana districts?',
      qHi: 'हरियाणा के सभी जिलों के लिए सामान्य बिजली शिकायत नंबर क्या है?',
      aEn: 'Dial 24x7 toll-free 1912 from any mobile or landline across all 22 districts. Alternatively, call 1800-180-1550 for UHBVN districts or 1800-180-4334 for DHBVN districts.',
      aHi: 'हरियाणा के सभी 22 जिलों में 24x7 टोल-फ्री 1912 डायल करें। इसके अलावा UHBVN जिलों के लिए 1800-180-1550 तथा DHBVN जिलों के लिए 1800-180-4334 पर कॉल कर सकते हैं।'
    },
    {
      qEn: 'How can I identify my Discom and Circle from my electricity bill account number?',
      qHi: 'अपने बिजली बिल खाता नंबर से डिस्कॉम और सर्कल की पहचान कैसे करें?',
      aEn: 'Your 10-digit consumer account number contains circle prefix codes. For example, PK is Panchkula, PN/PP is Panipat, GG/GR is Gurugram, FB/FD is Faridabad, and HS is Hisar. If your account number starts with an alphanumeric circle prefix, it maps directly to that administrative circle.',
      aHi: 'आपके 10 अंकों के खाता नंबर के शुरुआती अक्षर सर्कल कोड दर्शाते हैं। उदाहरण के लिए PK पंचकूला, PN/PP पानीपत, GG/GR गुरुग्राम, FB/FD फरीदाबाद तथा HS हिसार का कोड है।'
    },
    {
      qEn: 'What is the statutory forum for unresolved electricity disputes in Haryana?',
      qHi: 'हरियाणा में अनसुलझे बिजली विवादों के लिए वैधानिक फोरम कौन सा है?',
      aEn: 'Consumers can appeal to the Consumer Grievance Redressal Forum (CGRF) established under HERC regulations. CGRF operates Zonal benches in Kurukshetra and Rohtak for UHBVN, and Gurugram and Hisar for DHBVN. If still unresolved, consumers can approach the Electricity Ombudsman at Panchkula.',
      aHi: 'उपभोक्ता HERC नियमों के तहत गठित उपभोक्ता शिकायत निवारण मंच (CGRF) में अपील कर सकते हैं। UHBVN हेतु कुरुक्षेत्र व रोहतक में तथा DHBVN हेतु गुरुग्राम व हिसार में जोनल बेंच हैं। इसके बाद पंचकूला स्थित विद्युत लोकपाल (Electricity Ombudsman) में अपील की जा सकती है।'
    }
  ];

  const schema = [
    {
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
            name: lang === 'hi' ? '22 जिलों की डायरेक्टरी' : '22 Districts Directory',
            item: 'https://haryanabijliseva.in/districts'
          }
        ]
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: statewideFaqs.map(faq => ({
        '@type': 'Question',
        name: lang === 'hi' ? faq.qHi : faq.qEn,
        acceptedAnswer: {
          '@type': 'Answer',
          text: lang === 'hi' ? faq.aHi : faq.aEn
        }
      }))
    }
  ];

  const uhbvnDistricts = HARYANA_DISTRICTS.filter(d => d.discom === 'UHBVN');
  const dhbvnDistricts = HARYANA_DISTRICTS.filter(d => d.discom === 'DHBVN');

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/districts"
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'हरियाणा 22 जिले डायरेक्टरी' : '22 Districts Directory' }
          ]}
        />

        {/* Directory Component with Search & Filters */}
        <DistrictDirectory lang={lang} />

        {/* Haryana Discom Architecture Explainer */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <Building2 className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {lang === 'hi' ? 'हरियाणा में बिजली वितरण ढांचा: UHBVN बनाम DHBVN' : 'Haryana Electricity Distribution Architecture: UHBVN vs DHBVN'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8 max-w-4xl">
            {lang === 'hi'
              ? 'हरियाणा में बिजली उत्पादन व ट्रांसमिशन के उपरांत अंतिम उपभोक्ताओं तक विद्युत वितरण दो राज्य-स्वामित्व वाली निगम कंपनियों द्वारा किया जाता है। दोनों कंपनियां हरियाणा विद्युत विनियामक आयोग (HERC) द्वारा तय टैरिफ और आपूर्ति संहिता के अंतर्गत कार्य करती हैं:'
              : 'Post generation and transmission by HVPNL, power is distributed to domestic, commercial, and industrial consumers across Haryana by two government discoms, regulated by the Haryana Electricity Regulatory Commission (HERC):'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* UHBVN Card */}
            <div className="p-6 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-emerald-700 text-white font-black text-xs rounded-lg uppercase tracking-wider">
                  UHBVN • North Haryana
                </span>
                <span className="text-xs font-bold text-emerald-800 font-mono">
                  11 {lang === 'hi' ? 'जिले' : 'Circles'}
                </span>
              </div>
              <h4 className="text-base font-extrabold text-emerald-950 mb-1">
                {lang === 'hi' ? 'उत्तर हरियाणा बिजली वितरण निगम' : 'Uttar Haryana Bijli Vitran Nigam'}
              </h4>
              <p className="text-xs text-emerald-800 mb-3">
                <strong>{lang === 'hi' ? 'मुख्यालय:' : 'Apex HQ:'}</strong> Vidyut Sadan, Sector 6, Panchkula
              </p>
              <div className="space-y-1.5 text-xs text-emerald-900 mb-4">
                <p><strong>Toll-Free:</strong> 1800-180-1550 | <strong>Helpline:</strong> 1912</p>
                <p><strong>WhatsApp:</strong> +91 98159-61912</p>
                <p><strong>Zonal CGRF Courts:</strong> Kurukshetra & Rohtak</p>
              </div>

              <div className="pt-3 border-t border-emerald-200/80">
                <span className="text-[11px] font-bold text-emerald-900 block mb-2">
                  {lang === 'hi' ? 'शामिल 11 जिले:' : 'Covered Districts:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {uhbvnDistricts.map(d => (
                    <Link
                      key={d.id}
                      to={`/districts/${d.id}`}
                      className="px-2.5 py-1 bg-white hover:bg-emerald-100 text-emerald-950 border border-emerald-300 rounded-lg text-xs font-semibold transition-colors"
                    >
                      {lang === 'hi' ? d.nameHi : d.nameEn}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* DHBVN Card */}
            <div className="p-6 bg-sky-50/70 border border-sky-200 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-sky-700 text-white font-black text-xs rounded-lg uppercase tracking-wider">
                  DHBVN • South Haryana
                </span>
                <span className="text-xs font-bold text-sky-800 font-mono">
                  11 {lang === 'hi' ? 'जिले' : 'Circles'}
                </span>
              </div>
              <h4 className="text-base font-extrabold text-sky-950 mb-1">
                {lang === 'hi' ? 'दक्षिण हरियाणा बिजली वितरण निगम' : 'Dakshin Haryana Bijli Vitran Nigam'}
              </h4>
              <p className="text-xs text-sky-800 mb-3">
                <strong>{lang === 'hi' ? 'मुख्यालय:' : 'Apex HQ:'}</strong> Vidyut Sadan, Vidyut Nagar, Hisar
              </p>
              <div className="space-y-1.5 text-xs text-sky-900 mb-4">
                <p><strong>Toll-Free:</strong> 1800-180-4334 | <strong>Helpline:</strong> 1912</p>
                <p><strong>WhatsApp:</strong> +91 88139-97080</p>
                <p><strong>Zonal CGRF Courts:</strong> Gurugram & Hisar</p>
              </div>

              <div className="pt-3 border-t border-sky-200/80">
                <span className="text-[11px] font-bold text-sky-900 block mb-2">
                  {lang === 'hi' ? 'शामिल 11 जिले:' : 'Covered Districts:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {dhbvnDistricts.map(d => (
                    <Link
                      key={d.id}
                      to={`/districts/${d.id}`}
                      className="px-2.5 py-1 bg-white hover:bg-sky-100 text-sky-950 border border-sky-300 rounded-lg text-xs font-semibold transition-colors"
                    >
                      {lang === 'hi' ? d.nameHi : d.nameEn}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Matrix for All 22 Dedicated Pages */}
          <div className="pt-8 border-t border-slate-200">
            <h4 className="text-base font-extrabold text-slate-900 mb-2">
              {lang === 'hi' ? 'प्रत्येक जिले का समर्पित गाइड पेज' : 'Dedicated Electricity Guide for Every District in Haryana'}
            </h4>
            <p className="text-xs text-slate-600 mb-5">
              {lang === 'hi'
                ? 'नीचे दिए गए किसी भी जिले पर क्लिक करके उसका समर्पित पेज खोलें जिसमें SDO कार्यालय, सर्कल संपर्क, बिल भुगतान व 1912 सहायता उपलब्ध है:'
                : 'Click on any district below to open its dedicated hub with SDO contacts, control room phones, official payment links, and statutory complaint notices:'}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {HARYANA_DISTRICTS.map((dist) => (
                <Link
                  key={dist.id}
                  to={`/districts/${dist.id}`}
                  className="p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded ${
                      dist.discom === 'UHBVN' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'
                    }`}>
                      {dist.discom}
                    </span>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 mt-2 group-hover:text-emerald-800 line-clamp-1">
                      {lang === 'hi' ? dist.nameHi : dist.nameEn}
                    </h5>
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      {dist.subdivisions.length} SDO Offices
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                    <span>{lang === 'hi' ? 'विवरण' : 'Guide'}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Statewide Frequently Asked Questions (FAQPage Schema) */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-extrabold text-slate-900">
              {lang === 'hi' ? 'हरियाणा बिजली व्यवस्था: अक्सर पूछे जाने वाले प्रश्न' : 'Statewide Haryana Electricity FAQs'}
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-6">
            {lang === 'hi'
              ? 'हरियाणा विद्युत विनियामक आयोग (HERC) एवं वितरण निगम नियमों के आधार पर सत्यापित उत्तर:'
              : 'Statutory answers verified against HERC regulations, supply codes, and discom circulars:'}
          </p>

          <div className="space-y-3 max-w-4xl">
            {statewideFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-4 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 transition-colors"
                  >
                    <span>{lang === 'hi' ? faq.qHi : faq.qEn}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {lang === 'hi' ? faq.aHi : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
