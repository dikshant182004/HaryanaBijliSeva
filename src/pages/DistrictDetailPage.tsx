import React from 'react';
import { Language, DistrictInfo } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { HARYANA_DISTRICTS, OFFICIAL_LINKS } from '../data/haryanaData';
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
  AlertCircle
} from 'lucide-react';

interface Props {
  districtId: string;
  lang: Language;
}

export const DistrictDetailPage: React.FC<Props> = ({ districtId, lang }) => {
  const t = TRANSLATIONS[lang];
  const { navigate } = useRouter();

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
          <span>{lang === 'hi' ? 'सभी जिले देखें' : 'View All Districts'}</span>
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

  const pageTitle = lang === 'hi'
    ? `${districtName} बिजली बोर्ड (${district.discom}): बिल भुगतान, सर्कल ऑफिस व 1912 हेल्पलाइन`
    : `${districtName} Electricity Board (${district.discom}): Bill Payment, Circle Office & 1912 Helpline`;

  const pageDescription = lang === 'hi'
    ? `${districtName} जिले में बिजली सेवा की संपूर्ण जानकारी: डिस्कॉम (${district.discom}), सर्कल कार्यालय पता, सब-डिवीजन सूची (${district.subdivisions.slice(0, 3).join(', ')}), आधिकारिक बिल पेमेंट व नया कनेक्शन लिंक।`
    : `Official guide for electricity consumers in ${districtName} district, Haryana. Managed by ${district.discom}. View Circle office contacts, SDO subdivisions, official bill payment, and 1912 grievance redressal.`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOffice',
    name: `${district.nameEn} Electricity Circle Office (${district.discom})`,
    description: pageDescription,
    telephone: district.contactPhone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: district.headquartersEn,
      addressRegion: 'Haryana',
      postalCode: district.samplePincodes[0],
      addressCountry: 'IN'
    },
    parentOrganization: {
      '@type': 'GovernmentOrganization',
      name: district.discom === 'UHBVN' ? 'Uttar Haryana Bijli Vitran Nigam' : 'Dakshin Haryana Bijli Vitran Nigam',
      url: district.discom === 'UHBVN' ? OFFICIAL_LINKS.uhbvn.portal : OFFICIAL_LINKS.dhbvn.portal
    }
  };

  // Other neighboring districts for recommendations
  const otherDistricts = HARYANA_DISTRICTS.filter(d => d.id !== district.id && d.discom === district.discom).slice(0, 4);

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path={`/districts/${district.id}`}
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'जिले' : 'Districts', path: '/districts' },
            { label: districtName }
          ]}
        />

        {/* District Hero Header Banner */}
        <div className={`rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-8 ${isU ? 'bg-gradient-to-r from-emerald-900 via-teal-800 to-slate-900' : 'bg-gradient-to-r from-sky-900 via-indigo-900 to-slate-900'}`}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${isU ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30' : 'bg-sky-400/20 text-sky-300 border border-sky-400/30'}`}>
                  {district.discom} • {isU ? (lang === 'hi' ? 'उत्तर हरियाणा' : 'North Haryana') : (lang === 'hi' ? 'दक्षिण हरियाणा' : 'South Haryana')}
                </span>
                <span className="text-xs text-slate-300">
                  {lang === 'hi' ? 'सर्कल कोड:' : 'Circle Code:'} <strong className="text-white font-mono">{district.accountPrefixes[0]}</strong>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {districtName} {lang === 'hi' ? 'बिजली बोर्ड एवं उपभोक्ता सेवा' : 'Electricity Board'}
              </h1>

              <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
                {lang === 'hi'
                  ? `${districtName} जिला पूर्णतः ${discomFullName} के क्षेत्राधिकार में आता है। यहाँ के सभी घरेलू, वाणिज्यिक व कृषि कनेक्शनों का प्रबंधन ${district.circleName} द्वारा किया जाता है।`
                  : `${districtName} district is served exclusively by ${discomFullName}. All domestic, commercial, and agricultural power distribution is administered by the ${district.circleName}.`}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <a
                href={isU ? OFFICIAL_LINKS.uhbvn.billPayment : OFFICIAL_LINKS.dhbvn.billPayment}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white text-slate-900 font-extrabold rounded-xl text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span>{lang === 'hi' ? `${district.discom} बिल ऑनलाइन भरें` : `Pay ${district.discom} Bill Online`}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={isU ? OFFICIAL_LINKS.uhbvn.newConnection : OFFICIAL_LINKS.dhbvn.newConnection}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'hi' ? 'नया कनेक्शन आवेदन' : 'Apply New Connection'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        {/* District Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Column (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Circle Office & Contacts */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-extrabold text-slate-900">
                  {lang === 'hi' ? `${districtName} सर्कल कार्यालय विवरण` : `${districtName} Circle Office Information`}
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900 mb-0.5">
                      {lang === 'hi' ? 'सर्कल मुख्यालय / पता' : 'Circle Office / Headquarters'}
                    </span>
                    <p className="text-slate-600">{hqName}, {districtName}, Haryana</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <PhoneCall className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900 mb-0.5">
                      {lang === 'hi' ? 'कंट्रोल रूम व अधीक्षण अभियंता (SE) संपर्क' : 'Circle Control Room / SE Phone'}
                    </span>
                    <a href={`tel:${district.contactPhone}`} className="text-emerald-700 font-bold hover:underline">
                      {district.contactPhone}
                    </a>
                    <span className="text-slate-400 mx-2">|</span>
                    <a href="tel:1912" className="text-rose-600 font-bold hover:underline">
                      Toll-Free 1912
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-900 mb-0.5">
                      {lang === 'hi' ? 'आधिकारिक ईमेल' : 'Official Discom Email'}
                    </span>
                    <span className="font-mono text-slate-600">
                      {isU ? `se.op.${district.id}@uhbvn.org.in` : `se.op.${district.id}@dhbvn.org.in`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Sub-Divisions (SDO Offices) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-extrabold text-slate-900">
                  {lang === 'hi' ? `${districtName} के प्रमुख सब-डिवीजन (SDO कार्यालय)` : `Local Subdivisions (SDO Offices) in ${districtName}`}
                </h3>
                <span className="text-xs font-bold text-slate-500">
                  {district.subdivisions.length} {lang === 'hi' ? 'क्षेत्र' : 'Centres'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                {lang === 'hi'
                  ? 'नए कनेक्शन, लोड बढ़ाने या मीटर फॉल्ट की शुरुआती जांच इन्हीं स्थानीय सब-डिवीजन के एसडीओ कार्यालय द्वारा की जाती है:'
                  : 'New connections, load extensions, and initial billing objections are administered by Junior Engineers and SDOs across these subdivisions:'}
              </p>

              <div className="flex flex-wrap gap-2">
                {district.subdivisions.map(sub => (
                  <div
                    key={sub}
                    className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{sub} Sub-Division</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pincodes & Account Prefixes */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-extrabold text-slate-900 mb-3">
                {lang === 'hi' ? `${districtName} के मुख्य पिन कोड एवं खाता पहचान` : `Served Pincodes & Account Number Identifier`}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                {lang === 'hi'
                  ? `${districtName} के बिजली उपभोक्ता इन पिन कोड्स के तहत आते हैं। यदि आपके पुराने बिल पर यह कोड छपा है, तो आपका निगम निश्चित रूप से ${district.discom} है:`
                  : `Consumers residing in the following postal codes are served by this circle. Verify your discom via these local pins:`}
              </p>

              <div className="flex flex-wrap gap-2">
                {district.samplePincodes.map(pin => (
                  <span
                    key={pin}
                    className="px-3 py-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-lg text-xs font-mono font-bold"
                  >
                    PIN: {pin}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Column (1/3) */}
          <div className="space-y-6">
            {/* Quick Consumer Links Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
                {lang === 'hi' ? `${districtName} उपभोक्ता टूल` : `${districtName} Tools`}
              </h3>
              <div className="space-y-2.5 text-xs font-semibold">
                <Link
                  to="/bill-calculator"
                  className="p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-200 hover:border-emerald-300 text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>{lang === 'hi' ? 'घरेलू बिल कैलकुलेटर' : 'Domestic Bill Calculator'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                </Link>

                <Link
                  to="/new-connection"
                  className="p-3 bg-slate-50 hover:bg-sky-50 rounded-xl border border-slate-200 hover:border-sky-300 text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>{lang === 'hi' ? 'नया कनेक्शन शुल्क आंकें' : 'New Connection Estimator'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                </Link>

                <Link
                  to="/name-transfer"
                  className="p-3 bg-slate-50 hover:bg-amber-50 rounded-xl border border-slate-200 hover:border-amber-300 text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>{lang === 'hi' ? 'नाम ट्रांसफर गाइड व बांड' : 'Name Transfer Guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </Link>

                <Link
                  to="/grievance-1912"
                  className="p-3 bg-slate-50 hover:bg-rose-50 rounded-xl border border-slate-200 hover:border-rose-300 text-slate-800 flex items-center justify-between transition-colors"
                >
                  <span>{lang === 'hi' ? '1912 व CGRF फोरम अपील' : '1912 Grievance Escalation'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-600" />
                </Link>
              </div>
            </div>

            {/* 24x7 Helpline Box */}
            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-rose-900">
              <div className="flex items-center gap-2 font-black text-sm mb-2 text-rose-800">
                <PhoneCall className="w-4 h-4" />
                <span>{lang === 'hi' ? 'आपातकालीन बिजली सहायता' : '24x7 Emergency Outage'}</span>
              </div>
              <p className="text-xs text-rose-700 leading-relaxed mb-3">
                {lang === 'hi'
                  ? `${districtName} में बिजली कटौती, ट्रांसफार्मर खराबी या स्पार्किंग की सूचना तुरंत 1912 पर दर्ज करवाएं:`
                  : `Report feeder breakdowns, loose conductors, or low voltage in ${districtName} directly to the state helpline:`}
              </p>
              <a
                href="tel:1912"
                className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-center rounded-xl text-xs block transition-all shadow-xs"
              >
                {lang === 'hi' ? '1912 डायल करें' : 'Call 1912 Helpline'}
              </a>
            </div>

            {/* Other Same-Discom Districts */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                {lang === 'hi' ? `अन्य ${district.discom} जिले` : `Other ${district.discom} Districts`}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
