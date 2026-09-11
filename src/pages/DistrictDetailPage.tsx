import React, { useState } from 'react';
import { Language, DistrictInfo } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  HARYANA_DISTRICTS, 
  OFFICIAL_LINKS, 
  VERIFIED_HELPLINES,
  getDistrictZonalCgrf, 
  getDistrictFaqs, 
  getDistrictKeywords 
} from '../data/haryanaData';
import { Link, useRouter } from '../router/RouterContext';
import { 
  Building2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  AlertCircle,
  Clock,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Search,
  Scale,
  Calculator,
  HelpCircle,
  AlertTriangle,
  Send
} from 'lucide-react';

interface Props {
  districtId: string;
  lang: Language;
}

export const DistrictDetailPage: React.FC<Props> = ({ districtId, lang }) => {
  const t = TRANSLATIONS[lang];
  const { navigate } = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [subSearch, setSubSearch] = useState('');

  const district = HARYANA_DISTRICTS.find(d => d.id === districtId);

  if (!district) {
    return (
      <div className="py-16 text-center max-w-lg mx-auto px-4">
        <AlertCircle className="w-12 h-12 text-rose-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'hi' ? 'जिला नहीं मिला' : 'District Not Found'}
        </h1>
        <p className="text-sm text-slate-600 mt-2 mb-6">
          {lang === 'hi'
            ? 'क्षमा करें, जिस जिले को आप खोज रहे हैं वह उपलब्ध नहीं है। कृपया हरियाणा के 22 जिलों में से चुनें।'
            : 'The requested district does not exist in Haryana. Please select from the list of 22 districts.'}
        </p>
        <Link
          to="/districts"
          className="px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl text-sm hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
        >
          <span>{lang === 'hi' ? 'सभी 22 जिले देखें' : 'View All 22 Districts'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const isU = district.discom === 'UHBVN';
  const discomFullName = isU 
    ? (lang === 'hi' ? 'उत्तर हरियाणा बिजली वितरण निगम (UHBVN)' : 'Uttar Haryana Bijli Vitran Nigam (UHBVN)')
    : (lang === 'hi' ? 'दक्षिण हरियाणा बिजली वितरण निगम (DHBVN)' : 'Dakshin Haryana Bijli Vitran Nigam (DHBVN)');

  const districtName = lang === 'hi' ? district.nameHi : district.nameEn;
  const hqName = lang === 'hi' ? district.headquartersHi : district.headquartersEn;
  const cgrfInfo = getDistrictZonalCgrf(district);
  const districtFaqs = getDistrictFaqs(district);
  const seoKeywords = getDistrictKeywords(district);

  const tollFreeNum = isU ? VERIFIED_HELPLINES.uhbvnTollFree : VERIFIED_HELPLINES.dhbvnTollFree;
  const whatsappNum = isU ? VERIFIED_HELPLINES.uhbvnWhatsapp : VERIFIED_HELPLINES.dhbvnWhatsapp;
  const whatsappClean = isU ? '919815961912' : '918813997080';
  const epayPortalUrl = isU ? OFFICIAL_LINKS.uhbvn.billPayment : OFFICIAL_LINKS.dhbvn.billPayment;
  const newConnUrl = isU ? OFFICIAL_LINKS.uhbvn.newConnection : OFFICIAL_LINKS.dhbvn.newConnection;

  const pageTitle = lang === 'hi'
    ? `${districtName} बिजली बोर्ड (${district.discom}): कस्टमर केयर 1912, SDO कार्यालय व बिल भुगतान`
    : `${districtName} Electricity Board (${district.discom}): Customer Care 1912, SDO Offices & Bill Payment`;

  const pageDescription = lang === 'hi'
    ? `${districtName} में बिजली सेवा मार्गदर्शिका: 24x7 हेल्पलाइन 1912, सर्कल कंट्रोल रूम (${district.contactPhone}), सब-डिवीजन (${district.subdivisions.slice(0, 3).join(', ')}), आधिकारिक ${district.discom} बिल भुगतान व CGRF फोरम विवरण।`
    : `Complete consumer guide for ${district.nameEn} electricity board (${district.discom}). 24x7 helpline 1912, local control room ${district.contactPhone}, SDO sub-divisions, official online bill payment, and CGRF grievance escalation.`;

  // Filter subdivisions by search
  const filteredSubdivisions = district.subdivisions.filter(sub => 
    !subSearch.trim() || sub.toLowerCase().includes(subSearch.toLowerCase())
  );

  // Schema: Combined GovernmentOffice + FAQPage + BreadcrumbList
  const schemaList = [
    {
      '@context': 'https://schema.org',
      '@type': 'GovernmentOffice',
      name: `${district.nameEn} Electricity Board (${district.discom} Circle Office)`,
      description: pageDescription,
      telephone: district.contactPhone,
      email: isU ? `se.op.${district.id}@uhbvn.org.in` : `se.op.${district.id}@dhbvn.org.in`,
      openingHours: 'Mo-Sa 09:00-17:00',
      address: {
        '@type': 'PostalAddress',
        streetAddress: district.circleOfficeAddressEn,
        addressLocality: district.headquartersEn,
        addressRegion: 'Haryana',
        postalCode: district.samplePincodes[0] || '122001',
        addressCountry: 'IN'
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: `${district.nameEn} District, Haryana`
      },
      parentOrganization: {
        '@type': 'GovernmentOrganization',
        name: isU ? 'Uttar Haryana Bijli Vitran Nigam' : 'Dakshin Haryana Bijli Vitran Nigam',
        url: isU ? OFFICIAL_LINKS.uhbvn.portal : OFFICIAL_LINKS.dhbvn.portal
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: districtFaqs.map(faq => ({
        '@type': 'Question',
        name: lang === 'hi' ? faq.qHi : faq.qEn,
        acceptedAnswer: {
          '@type': 'Answer',
          text: lang === 'hi' ? faq.aHi : faq.aEn
        }
      }))
    },
    {
      '@context': 'https://schema.org',
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
          name: lang === 'hi' ? '22 जिले' : 'Districts',
          item: 'https://haryanabijliseva.pages.dev/districts'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: districtName,
          item: `https://haryanabijliseva.pages.dev/districts/${district.id}`
        }
      ]
    }
  ];

  // Neighboring districts in same discom
  const otherDistricts = HARYANA_DISTRICTS.filter(d => d.id !== district.id && d.discom === district.discom).slice(0, 5);

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path={`/districts/${district.id}`}
        schema={schemaList}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'हरियाणा जिले' : 'Haryana Districts', path: '/districts' },
            { label: districtName }
          ]}
        />

        {/* District Hero Header Banner */}
        <div className={`rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-8 relative overflow-hidden ${
          isU 
            ? 'bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 border border-emerald-800/40' 
            : 'bg-gradient-to-r from-sky-950 via-indigo-950 to-slate-900 border border-sky-800/40'
        }`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  isU ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30' : 'bg-sky-400/20 text-sky-300 border border-sky-400/30'
                }`}>
                  {district.discom} • {isU ? (lang === 'hi' ? 'उत्तर हरियाणा' : 'North Haryana') : (lang === 'hi' ? 'दक्षिण हरियाणा' : 'South Haryana')}
                </span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs font-mono text-slate-200 border border-white/10">
                  {lang === 'hi' ? 'सर्कल कोड:' : 'Circle Prefix:'} <strong className="text-white">{district.accountPrefixes.join(', ')}</strong>
                </span>
                <span className="px-2.5 py-1 bg-white/10 rounded-full text-xs text-slate-300 border border-white/10">
                  {district.subdivisions.length} {lang === 'hi' ? 'सब-डिवीजन' : 'Sub-Divisions'}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {districtName} {lang === 'hi' ? 'बिजली बोर्ड एवं कस्टमर केयर' : 'Electricity Board'}
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                {lang === 'hi'
                  ? `${districtName} जिला पूर्णतः ${discomFullName} के अधिकार क्षेत्र में आता है। यहाँ के सभी घरेलू, वाणिज्यिक, औद्योगिक व कृषि मीटरों का संचालन ${district.circleName} द्वारा किया जाता है।`
                  : `${district.nameEn} district is served exclusively by ${discomFullName}. All domestic, commercial, industrial, and agricultural power services are administered by ${district.circleName}.`}
              </p>

              {/* Direct Click-to-Call Quick Badges */}
              <div className="mt-5 flex flex-wrap gap-2.5 text-xs font-bold">
                <a
                  href="tel:1912"
                  className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl inline-flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>24x7 Helpline: 1912</span>
                </a>
                <a
                  href={`tel:${district.contactPhone}`}
                  className="px-3.5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl inline-flex items-center gap-1.5 transition-colors border border-white/20"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{lang === 'hi' ? 'सर्कल कंट्रोल रूम:' : 'Circle Control Room:'} {district.contactPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${whatsappClean}?text=Hi,%20I%20need%20electricity%20service%20help%20for%20${encodeURIComponent(district.nameEn)}%20district.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-emerald-600/90 hover:bg-emerald-600 text-white rounded-xl inline-flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp: {whatsappNum}</span>
                </a>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <a
                href={epayPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white text-slate-900 font-extrabold rounded-xl text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span>{lang === 'hi' ? `${district.discom} बिल ऑनलाइन भरें` : `Pay ${district.discom} Bill Online`}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <Link
                to={`/complaint-generator?district=${district.id}`}
                className="px-5 py-3 bg-rose-500/90 hover:bg-rose-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'hi' ? 'विधिक SDO शिकायत पत्र जनरेट करें' : 'Generate SDO Notice'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={newConnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-xs transition-all inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>{lang === 'hi' ? 'नया मीटर कनेक्शन आवेदन' : 'Apply New Meter Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        {/* At a Glance Quick Facts Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
              {lang === 'hi' ? 'बिजली वितरण कंपनी' : 'Distribution Company'}
            </span>
            <span className="text-base sm:text-lg font-black text-slate-900 block">
              {district.discom}
            </span>
            <span className="text-[11px] text-slate-500">
              {isU ? 'North Haryana' : 'South Haryana'}
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
              {lang === 'hi' ? 'सर्कल मुख्यालय' : 'Circle HQ City'}
            </span>
            <span className="text-base sm:text-lg font-black text-slate-900 block">
              {district.nameEn}
            </span>
            <span className="text-[11px] text-slate-500">
              {district.circleName}
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
              {lang === 'hi' ? 'कार्यालय समय' : 'Office Working Hours'}
            </span>
            <span className="text-base sm:text-lg font-black text-slate-900 block">
              9:00 AM – 5:00 PM
            </span>
            <span className="text-[11px] text-slate-500">
              {lang === 'hi' ? 'सोमवार से शनिवार (कैश 3PM तक)' : 'Mon to Sat (Cash till 3PM)'}
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <span className="text-[11px] font-bold text-slate-400 uppercase block mb-1">
              {lang === 'hi' ? 'विधिक शिकायत फोरम' : 'Statutory CGRF Court'}
            </span>
            <span className="text-base sm:text-lg font-black text-slate-900 block">
              {isU ? (district.id === 'panchkula' || district.id === 'ambala' || district.id === 'yamunanagar' || district.id === 'kurukshetra' || district.id === 'kaithal' ? 'Kurukshetra' : 'Rohtak') : (district.id === 'gurugram' || district.id === 'faridabad' || district.id === 'palwal' || district.id === 'nuh' || district.id === 'rewari' ? 'Gurugram' : 'Hisar')}
            </span>
            <span className="text-[11px] text-slate-500">
              {lang === 'hi' ? 'जोनल अपीलीय मंच' : 'Zonal Redressal Bench'}
            </span>
          </div>
        </div>

        {/* District Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Column (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Circle Office & Official Helplines */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-extrabold text-slate-900">
                  {lang === 'hi' ? `${districtName} बिजली बोर्ड सर्कल कार्यालय व संपर्क केंद्र` : `${districtName} Electricity Board Circle Office & Contacts`}
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900 mb-0.5">
                      {lang === 'hi' ? 'सर्कल कार्यालय का आधिकारिक पता' : 'Circle Office Official Address'}
                    </span>
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {lang === 'hi' ? district.circleOfficeAddressHi : district.circleOfficeAddressEn}, {districtName}, Haryana
                    </p>
                    <span className="text-xs text-slate-500 mt-1 block">
                      {lang === 'hi' ? 'सर्कल अधीक्षण अभियंता (Superintending Engineer - SE) का मुख्य प्रशासनिक कार्यालय।' : 'Administrative Office of the Superintending Engineer (SE "OP" Circle).'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <PhoneCall className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-slate-900 mb-0.5">
                        {lang === 'hi' ? 'सर्कल कंट्रोल रूम (सीधा फोन)' : 'Circle Control Room Phone'}
                      </span>
                      <a href={`tel:${district.contactPhone}`} className="text-emerald-700 font-extrabold text-base hover:underline block">
                        {district.contactPhone}
                      </a>
                      <span className="text-[11px] text-slate-500">
                        {lang === 'hi' ? 'लोकल ग्रिड व फीडर ब्रेकडाउन हेतु' : 'For Local Feeder & Grid Breakdowns'}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <PhoneCall className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-slate-900 mb-0.5">
                        {lang === 'hi' ? '24x7 राज्य स्तरीय टोल-फ्री' : '24x7 State Central Helpline'}
                      </span>
                      <a href="tel:1912" className="text-rose-600 font-extrabold text-base hover:underline block">
                        1912 / {tollFreeNum}
                      </a>
                      <span className="text-[11px] text-slate-500">
                        {lang === 'hi' ? 'कंप्यूटरीकृत कंप्लेंट डॉकेट नंबर प्राप्त करें' : 'Generates Computerized Docket ID'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                  <Mail className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900 mb-0.5">
                      {lang === 'hi' ? 'अधीक्षण अभियंता आधिकारिक ईमेल' : 'Superintending Engineer (SE) Official Email'}
                    </span>
                    <span className="font-mono text-slate-700 font-semibold">
                      {isU ? `se.op.${district.id}@uhbvn.org.in` : `se.op.${district.id}@dhbvn.org.in`}
                    </span>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      {lang === 'hi' ? 'विधिक नोटिस, एरियर आपत्ति एवं ट्रांसफार्मर मांग हेतु पत्राचार।' : 'For formal correspondence regarding persistent outages, billing appeals & notices.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Sub-Divisions (SDO Offices) Directory */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {lang === 'hi' ? `${districtName} के सभी सब-डिवीजन (SDO कार्यालय)` : `Local Subdivisions (SDO Offices) in ${districtName}`}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {lang === 'hi'
                      ? 'नए कनेक्शन, मीटर टेस्टिंग व बिल आपत्ति की प्रथम सुनवाई इन्हीं कार्यालयों में होती है:'
                      : 'First point of official contact for meter testing, load extensions, and billing disputes:'}
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-bold shrink-0 self-start sm:self-center">
                  {district.subdivisions.length} {lang === 'hi' ? 'सब-डिवीजन कार्यालय' : 'Subdivisions'}
                </span>
              </div>

              {/* Sub-division Search Input */}
              {district.subdivisions.length > 4 && (
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={subSearch}
                    onChange={(e) => setSubSearch(e.target.value)}
                    placeholder={lang === 'hi' ? 'सब-डिवीजन खोजें (जैसे: सिटी, समालखा, सोहना...)' : 'Filter subdivision (e.g. City, Samalkha, Sohna...)'}
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredSubdivisions.map(sub => (
                  <div
                    key={sub}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>{sub} Sub-Division</span>
                        </span>
                        <span className="text-[10px] uppercase font-bold text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          {district.discom} SDO
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {lang === 'hi' 
                          ? `${sub} क्षेत्र के उपभोक्ताओं के लिए उप-मंडल अधिकारी (SDO) एवं कनिष्ठ अभियंता (JE) कार्यालय।` 
                          : `Jurisdiction of Assistant Executive Engineer / SDO & Junior Engineers for ${sub} area.`}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-[10px] text-slate-500">
                        {lang === 'hi' ? 'टाइमिंग: 9AM - 5PM' : 'Hours: 9AM - 5PM'}
                      </span>
                      <Link
                        to={`/complaint-generator?district=${district.id}&subdivision=${encodeURIComponent(sub)}`}
                        className="text-[11px] font-bold text-rose-700 hover:text-rose-900 inline-flex items-center gap-1"
                      >
                        <span>{lang === 'hi' ? 'SDO नोटिस बनाएं' : 'Draft Notice'}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {filteredSubdivisions.length === 0 && (
                <div className="text-center py-6 text-slate-500 text-xs">
                  {lang === 'hi' ? 'कोई सब-डिवीजन नहीं मिला।' : 'No matching subdivision found.'}
                </div>
              )}
            </div>

            {/* HERC Standards of Performance & Outage Resolution Timelines */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  {lang === 'hi' ? `${districtName} में विद्युत खराबी निवारण के HERC वैधानिक समय-मानक` : `HERC Statutory Resolution Time Standards in ${districtName}`}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                {lang === 'hi'
                  ? `हरियाणा विद्युत विनियामक आयोग (HERC Standards of Performance) नियमावली अनुसार ${district.discom} के अधिकारियों के लिए निम्न समयसीमा में कार्य पूर्ण करना कानूनी रूप से बाध्यकारी है:`
                  : `Under Haryana Electricity Regulatory Commission (HERC) Standards of Performance, ${district.discom} officials must rectify faults within these mandatory timeframes:`}
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold">
                      <th className="p-3">{lang === 'hi' ? 'विद्युत समस्या / शिकायत' : 'Nature of Complaint'}</th>
                      <th className="p-3">{lang === 'hi' ? 'शहरी समयसीमा' : 'Urban Limit'}</th>
                      <th className="p-3">{lang === 'hi' ? 'ग्रामीण समयसीमा' : 'Rural Limit'}</th>
                      <th className="p-3">{lang === 'hi' ? 'देरी पर हर्जाना' : 'Statutory Compensation'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">
                        {lang === 'hi' ? 'फ्यूज उड़ना / लोकल स्पार्किंग' : 'Normal Fuse-off / Sparking'}
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">4 Hours</td>
                      <td className="p-3 text-emerald-700 font-bold">8 Hours</td>
                      <td className="p-3 font-mono">₹50 / day</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">
                        {lang === 'hi' ? 'ओवरहेड लाइन टूटना / फॉल्ट' : 'Overhead Conductor Breakdown'}
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">6 Hours</td>
                      <td className="p-3 text-emerald-700 font-bold">12 Hours</td>
                      <td className="p-3 font-mono">₹50 / day</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">
                        {lang === 'hi' ? 'ट्रांसफार्मर फुंकना (DTR Replacement)' : 'Burnt Distribution Transformer'}
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">24 Hours</td>
                      <td className="p-3 text-emerald-700 font-bold">48 Hours</td>
                      <td className="p-3 font-mono">₹100 / day</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">
                        {lang === 'hi' ? 'मीटर जलना / बंद होना' : 'Burnt / Stopped Meter Replacement'}
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">3 Working Days</td>
                      <td className="p-3 text-emerald-700 font-bold">7 Working Days</td>
                      <td className="p-3 font-mono">₹50 / day</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-900">
                        {lang === 'hi' ? 'गलत बिजली बिल का सुधार' : 'Rectification of Wrong Bill'}
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">7 Working Days</td>
                      <td className="p-3 text-emerald-700 font-bold">7 Working Days</td>
                      <td className="p-3 font-mono">₹50 / day</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Zonal CGRF Grievance Redressal Court Info */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="w-5 h-5 text-indigo-600" />
                <h3 className="text-xl font-extrabold text-slate-900">
                  {lang === 'hi' ? `${districtName} का वैधानिक उपभोक्ता फोरम (CGRF)` : `Statutory Consumer Grievance Redressal Forum (CGRF) for ${districtName}`}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                {lang === 'hi'
                  ? `यदि ${districtName} के संबंधित SDO या XEN द्वारा आपकी शिकायत (जैसे अत्यधिक बिल, गैर-कानूनी एरियर, मीटर लोड विवाद) का समाधान 30 दिनों में न किया जाए, तो आप सीधे इस जोनल फोरम में वाद दायर कर सकते हैं:`
                  : `If your billing dispute or complaint is not settled by the ${district.nameEn} SDO or XEN within 30 days, you are legally entitled to appeal before this Zonal CGRF Court:`}
              </p>

              <div className="p-5 bg-indigo-50/70 border border-indigo-200 rounded-2xl">
                <h4 className="font-extrabold text-indigo-950 text-sm sm:text-base mb-2">
                  {lang === 'hi' ? cgrfInfo.nameHi : cgrfInfo.nameEn}
                </h4>
                <div className="space-y-2 text-xs text-indigo-900 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span><strong>{lang === 'hi' ? 'पता:' : 'Address:'}</strong> {lang === 'hi' ? cgrfInfo.addressHi : cgrfInfo.addressEn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span><strong>{lang === 'hi' ? 'फोन:' : 'Phone:'}</strong> <a href={`tel:${cgrfInfo.phone}`} className="underline font-bold">{cgrfInfo.phone}</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span><strong>{lang === 'hi' ? 'ईमेल:' : 'Email:'}</strong> <span className="font-mono">{cgrfInfo.email}</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span><strong>{lang === 'hi' ? 'क्षेत्राधिकार:' : 'Jurisdiction:'}</strong> {lang === 'hi' ? cgrfInfo.jurisdictionHi : cgrfInfo.jurisdictionEn}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-indigo-200/80 flex flex-wrap gap-3">
                  <Link
                    to="/grievance-1912"
                    className="px-4 py-2 bg-indigo-700 hover:bg-indigo-800 text-white rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{lang === 'hi' ? 'CGRF अपील प्रक्रिया समझें' : 'Read CGRF Appeal Process'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/complaint-generator?district=${district.id}`}
                    className="px-4 py-2 bg-white text-indigo-900 border border-indigo-300 hover:bg-indigo-100 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-indigo-700" />
                    <span>{lang === 'hi' ? 'विधिक नोटिस तैयार करें' : 'Draft Formal Notice'}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Interactive FAQs Accordion (SEO Rich Snippets) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                <h3 className="text-xl font-extrabold text-slate-900">
                  {lang === 'hi' ? `${districtName} बिजली उपभोक्ता: अक्सर पूछे जाने वाले सवाल (FAQs)` : `Frequently Asked Questions: ${districtName} Electricity`}
                </h3>
              </div>
              <p className="text-xs text-slate-500 mb-6">
                {lang === 'hi'
                  ? 'हरियाणा विद्युत आयोग (HERC) नियमों एवं निगम परिपत्रों अनुसार सत्यापित उत्तर:'
                  : 'Verified statutory answers based on HERC tariff orders and discom rules:'}
              </p>

              <div className="space-y-3">
                {districtFaqs.map((faq, index) => {
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

          {/* Sidebar Column (1/3) */}
          <div className="space-y-6">
            {/* Quick Consumer Tools Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
                {lang === 'hi' ? `${districtName} उपभोक्ता टूल` : `${districtName} Quick Tools`}
              </h3>
              <div className="space-y-2.5 text-xs font-semibold">
                <Link
                  to={`/bill-sanity-checker`}
                  className="p-3 bg-emerald-50/60 hover:bg-emerald-100/60 rounded-xl border border-emerald-200 text-emerald-950 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Scale className="w-4 h-4 text-emerald-700" />
                    <span>{lang === 'hi' ? 'बिल सेनिटी चेकर (ओवरबिलिंग जांच)' : 'Bill Sanity Checker'}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
                </Link>

                <Link
                  to={`/complaint-generator?district=${district.id}`}
                  className="p-3 bg-rose-50/60 hover:bg-rose-100/60 rounded-xl border border-rose-200 text-rose-950 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-rose-600" />
                    <span>{lang === 'hi' ? 'विधिक SDO शिकायत पत्र' : 'Statutory SDO Notice'}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
                </Link>

                <Link
                  to="/bill-calculator"
                  className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-slate-800 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-slate-600" />
                    <span>{lang === 'hi' ? 'घरेलू टैरिफ कैलकुलेटर' : 'Domestic Bill Calculator'}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                </Link>

                <Link
                  to="/new-connection"
                  className="p-3 bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 text-slate-800 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-sky-600" />
                    <span>{lang === 'hi' ? 'नया कनेक्शन शुल्क आंकें' : 'New Connection Cost'}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                </Link>

                <Link
                  to="/bill-glossary"
                  className="p-3 bg-slate-50 hover:bg-amber-50 rounded-xl border border-slate-200 hover:border-amber-300 text-slate-800 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>{lang === 'hi' ? 'बिल शब्दावली (ACD, FSA, MDI)' : 'Bill Charges Glossary'}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </Link>
              </div>
            </div>

            {/* 24x7 Outage Helpline Box */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-rose-900">
              <div className="flex items-center gap-2 font-black text-sm mb-2 text-rose-800">
                <AlertTriangle className="w-4 h-4" />
                <span>{lang === 'hi' ? 'आपातकालीन बिजली शिकायत' : '24x7 Power Emergency'}</span>
              </div>
              <p className="text-xs text-rose-700 leading-relaxed mb-3">
                {lang === 'hi'
                  ? `${districtName} में अचानक बिजली गुल होने, ट्रांसफार्मर फुंकने या मेन लाइन फॉल्ट की तत्काल सूचना 1912 पर दें:`
                  : `Report feeder breakdowns, burnt distribution transformers, or live sparking lines in ${district.nameEn}:`}
              </p>
              <div className="space-y-2">
                <a
                  href="tel:1912"
                  className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-center rounded-xl text-xs block transition-all shadow-xs"
                >
                  {lang === 'hi' ? '1912 डायल करें (टोल-फ्री)' : 'Call Toll-Free 1912'}
                </a>
                <a
                  href={`tel:${district.contactPhone}`}
                  className="w-full py-2 bg-white hover:bg-rose-100 text-rose-900 border border-rose-300 font-bold text-center rounded-xl text-xs block transition-all"
                >
                  {lang === 'hi' ? `सर्कल कंट्रोल रूम: ${district.contactPhone}` : `Circle Room: ${district.contactPhone}`}
                </a>
              </div>
            </div>

            {/* Pincodes & Account Prefix Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {lang === 'hi' ? `${districtName} पिन कोड एवं खाता पहचान` : `Covered Pincodes & Prefixes`}
              </h4>
              <p className="text-[11px] text-slate-500 mb-3">
                {lang === 'hi'
                  ? 'यदि आपके बिल पर यह पिन कोड या प्रिफिक्स छपा है, तो आपका निगम निश्चित रूप से यही है:'
                  : 'Verify your discom circle through your postal pincode and account prefix:'}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {district.samplePincodes.map(pin => (
                  <span
                    key={pin}
                    className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-mono font-bold"
                  >
                    {pin}
                  </span>
                ))}
              </div>
              <div className="text-[11px] text-slate-600 pt-2 border-t border-slate-100">
                {lang === 'hi' ? 'खाता संख्या प्रिफिक्स:' : 'Account Prefixes:'} <strong className="font-mono text-slate-900">{district.accountPrefixes.join(', ')}</strong>
              </div>
            </div>

            {/* Neighboring Same-Discom Districts */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                {lang === 'hi' ? `अन्य ${district.discom} जिले` : `Other ${district.discom} Circles`}
              </h4>
              <div className="space-y-1.5 text-xs">
                {otherDistricts.map(other => (
                  <Link
                    key={other.id}
                    to={`/districts/${other.id}`}
                    className="block p-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                  >
                    {lang === 'hi' ? other.nameHi : other.nameEn} ({other.headquartersEn})
                  </Link>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <Link
                  to="/districts"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                >
                  <span>{lang === 'hi' ? 'सभी 22 जिले देखें' : 'View All 22 Districts'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
