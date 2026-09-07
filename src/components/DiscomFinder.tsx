import React, { useState } from 'react';
import {
  Search,
  MapPin,
  FileText,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Building,
  Phone,
  ArrowRight
} from 'lucide-react';
import { Language, DistrictInfo } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { HARYANA_DISTRICTS, OFFICIAL_LINKS } from '../data/haryanaData';

interface Props {
  lang: Language;
}

export const DiscomFinder: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [activeTab, setActiveTab] = useState<'pin' | 'account'>('pin');

  // Input states
  const [pinInput, setPinInput] = useState('');
  const [selectedDistrictId, setSelectedDistrictId] = useState('');
  const [accountInput, setAccountInput] = useState('');

  // Result state
  const [matchedDistrict, setMatchedDistrict] = useState<DistrictInfo | null>(
    // Default to Gurugram or Panchkula as initial showcase
    HARYANA_DISTRICTS.find((d) => d.id === 'gurugram') || null
  );
  const [searchMethod, setSearchMethod] = useState<'pin' | 'district' | 'account'>('district');
  const [accountHint, setAccountHint] = useState<string | null>(null);

  // Handle PIN / District Search
  const handlePinOrDistrictSearch = (pinValue: string, distId: string) => {
    if (distId) {
      const found = HARYANA_DISTRICTS.find((d) => d.id === distId);
      if (found) {
        setMatchedDistrict(found);
        setSearchMethod('district');
        setAccountHint(null);
        return;
      }
    }

    const cleanPin = pinValue.trim();
    if (cleanPin.length >= 3) {
      // Find district matching pin or subdivision
      const found = HARYANA_DISTRICTS.find((d) =>
        d.samplePincodes.some((p) => p.startsWith(cleanPin) || cleanPin.startsWith(p))
      );
      if (found) {
        setMatchedDistrict(found);
        setSearchMethod('pin');
        setAccountHint(null);
      } else {
        // Fallback search in subdivision names
        const subFound = HARYANA_DISTRICTS.find((d) =>
          d.subdivisions.some((s) => s.toLowerCase().includes(cleanPin.toLowerCase()))
        );
        if (subFound) {
          setMatchedDistrict(subFound);
          setSearchMethod('pin');
          setAccountHint(null);
        }
      }
    }
  };

  // Handle Account prefix detection
  const handleAccountDetection = (accValue: string) => {
    const raw = accValue.trim().toUpperCase();
    if (!raw) return;

    // Check 2-letter prefixes (e.g. GG, PK, AM, KK, FB, HS, RW, SR)
    for (const dist of HARYANA_DISTRICTS) {
      const match = dist.accountPrefixes.some((pfx) => raw.startsWith(pfx));
      if (match) {
        setMatchedDistrict(dist);
        setSearchMethod('account');
        setAccountHint(
          lang === 'hi'
            ? `खाता संख्या प्रीफिक्स "${raw.substring(0, 2)}" से पहचाना गया: ${dist.nameHi} (${dist.discom})`
            : `Detected via prefix "${raw.substring(0, 2)}": ${dist.nameEn} (${dist.discom})`
        );
        return;
      }
    }

    // Check numerical circle IDs in 10-digit number
    // UHBVN usually has circles 01-11; DHBVN has 21-32
    if (/^\d{6,10}$/.test(raw)) {
      const circleTwo = raw.substring(0, 2);
      const circleNum = parseInt(circleTwo, 10);
      if (circleNum >= 1 && circleNum <= 11) {
        // UHBVN
        const dist = HARYANA_DISTRICTS.find((d) => d.discom === 'UHBVN') || null;
        setMatchedDistrict(dist);
        setSearchMethod('account');
        setAccountHint(
          lang === 'hi'
            ? `10-अंकों के खाते का सर्कल कोड "${circleTwo}" उत्तर हरियाणा (UHBVN) के अंतर्गत आता है।`
            : `Circle prefix "${circleTwo}" maps to Northern Haryana (UHBVN).`
        );
        return;
      } else if (circleNum >= 21 && circleNum <= 32) {
        // DHBVN
        const dist = HARYANA_DISTRICTS.find((d) => d.discom === 'DHBVN') || null;
        setMatchedDistrict(dist);
        setSearchMethod('account');
        setAccountHint(
          lang === 'hi'
            ? `10-अंकों के खाते का सर्कल कोड "${circleTwo}" दक्षिण हरियाणा (DHBVN) के अंतर्गत आता है।`
            : `Circle prefix "${circleTwo}" maps to Southern Haryana (DHBVN).`
        );
        return;
      }
    }

    // Default fallback
    setAccountHint(
      lang === 'hi'
        ? 'कृपया अपना जिला या पिन कोड चुनें, या 10 अंकों का पूरा खाता नंबर दर्ज करें।'
        : 'Prefix not recognized immediately. Please select your district or verify your 10-digit number.'
    );
  };

  const isUHBVN = matchedDistrict?.discom === 'UHBVN';
  const officialLinks = isUHBVN ? OFFICIAL_LINKS.uhbvn : OFFICIAL_LINKS.dhbvn;

  return (
    <section id="discom-finder" className="py-12 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Sequence 1: Discom Identifier
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.discomFinder.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.discomFinder.desc}
          </p>
        </div>

        {/* Interactive Lookup Tool Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Inputs & Selection */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 mb-6 pb-2 gap-2">
              <button
                onClick={() => setActiveTab('pin')}
                className={`flex-1 pb-2.5 text-xs sm:text-sm font-bold border-b-2 flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'pin'
                    ? 'border-emerald-600 text-emerald-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <MapPin className="w-4 h-4" />
                {t.discomFinder.tabPin}
              </button>
              <button
                onClick={() => setActiveTab('account')}
                className={`flex-1 pb-2.5 text-xs sm:text-sm font-bold border-b-2 flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'account'
                    ? 'border-emerald-600 text-emerald-700'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                {t.discomFinder.tabAccount}
              </button>
            </div>

            {/* Tab 1: By PIN or District */}
            {activeTab === 'pin' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {lang === 'hi' ? 'पिन कोड या क्षेत्र दर्ज करें' : 'Enter 6-digit Haryana PIN code'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={pinInput}
                      onChange={(e) => {
                        setPinInput(e.target.value);
                        handlePinOrDistrictSearch(e.target.value, '');
                      }}
                      placeholder={t.discomFinder.pinPlaceholder}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                <div className="flex items-center gap-3 my-2">
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-xs font-semibold text-slate-400 uppercase">
                    {lang === 'hi' ? 'अथवा' : 'OR'}
                  </span>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {t.discomFinder.orSelectDistrict}
                  </label>
                  <select
                    value={selectedDistrictId}
                    onChange={(e) => {
                      setSelectedDistrictId(e.target.value);
                      handlePinOrDistrictSearch('', e.target.value);
                    }}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 text-slate-800"
                  >
                    <option value="">{t.discomFinder.selectDistrictPlaceholder}</option>
                    <optgroup label={lang === 'hi' ? 'दक्षिण हरियाणा (DHBVN)' : 'South Haryana (DHBVN)'}>
                      {HARYANA_DISTRICTS.filter((d) => d.discom === 'DHBVN').map((d) => (
                        <option key={d.id} value={d.id}>
                          {lang === 'hi' ? d.nameHi : d.nameEn} ({d.circleName})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label={lang === 'hi' ? 'उत्तर हरियाणा (UHBVN)' : 'North Haryana (UHBVN)'}>
                      {HARYANA_DISTRICTS.filter((d) => d.discom === 'UHBVN').map((d) => (
                        <option key={d.id} value={d.id}>
                          {lang === 'hi' ? d.nameHi : d.nameEn} ({d.circleName})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Popular City Quick Chips */}
                <div className="pt-2">
                  <span className="text-xs text-slate-500 font-semibold block mb-2">
                    {lang === 'hi' ? 'प्रमुख शहर तुरंत चुनें:' : 'Popular Haryana Cities:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['gurugram', 'faridabad', 'panchkula', 'ambala', 'karnal', 'hisar', 'rohtak', 'sonipat'].map(
                      (cityId) => {
                        const city = HARYANA_DISTRICTS.find((d) => d.id === cityId);
                        if (!city) return null;
                        return (
                          <button
                            key={cityId}
                            onClick={() => {
                              setSelectedDistrictId(cityId);
                              handlePinOrDistrictSearch('', cityId);
                            }}
                            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors border ${
                              matchedDistrict?.id === cityId
                                ? 'bg-emerald-700 text-white border-emerald-700'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-400'
                            }`}
                          >
                            {lang === 'hi' ? city.nameHi : city.nameEn}
                          </button>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: By Account Number / Prefix */}
            {activeTab === 'account' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    {lang === 'hi' ? 'खाता संख्या / पुराना प्रीफिक्स' : '10-digit Account No. or Circle Prefix'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={accountInput}
                      onChange={(e) => {
                        setAccountInput(e.target.value);
                        handleAccountDetection(e.target.value);
                      }}
                      placeholder={t.discomFinder.accountPlaceholder}
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 uppercase font-mono"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {accountHint && (
                  <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{accountHint}</span>
                  </div>
                )}

                {/* Common Prefixes quick helper */}
                <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-xs space-y-2">
                  <span className="font-bold text-slate-700 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                    {lang === 'hi' ? 'सर्कल कोड उदाहरण:' : 'Circle Prefix Examples:'}
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                    <div>
                      <span className="font-bold text-sky-700">DHBVN (South):</span>
                      <p>GG (Gurugram), FB (Faridabad), HS (Hisar), RW (Rewari), SR (Sirsa)</p>
                    </div>
                    <div>
                      <span className="font-bold text-emerald-700">UHBVN (North):</span>
                      <p>PK (Panchkula), AM (Ambala), KN (Karnal), PN (Panipat), RK (Rohtak)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel: Matched Discom Result Card */}
          <div className="lg:col-span-6">
            {matchedDistrict ? (
              <div
                className={`rounded-2xl border-2 p-6 transition-all shadow-md ${
                  isUHBVN
                    ? 'border-emerald-500 bg-gradient-to-br from-emerald-50/50 via-white to-slate-50'
                    : 'border-sky-500 bg-gradient-to-br from-sky-50/50 via-white to-slate-50'
                }`}
              >
                {/* Nigam Identification Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase ${
                        isUHBVN ? 'bg-emerald-600 text-white' : 'bg-sky-600 text-white'
                      }`}
                    >
                      {matchedDistrict.discom}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {isUHBVN ? 'Uttar Haryana (North)' : 'Dakshin Haryana (South)'}
                    </span>
                  </div>
                  <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-semibold">
                    {matchedDistrict.circleName}
                  </span>
                </div>

                {/* District Name */}
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  {lang === 'hi' ? matchedDistrict.nameHi : matchedDistrict.nameEn}
                </h3>

                {/* Detailed Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm my-4 bg-white/80 p-4 rounded-xl border border-slate-200/80">
                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase font-bold">
                      {t.discomFinder.headquartersLabel}
                    </span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-slate-500" />
                      {lang === 'hi' ? matchedDistrict.headquartersHi : matchedDistrict.headquartersEn}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase font-bold">
                      {lang === 'hi' ? 'सर्कल संपर्क फोन:' : 'Circle Office Phone:'}
                    </span>
                    <a
                      href={`tel:${matchedDistrict.contactPhone}`}
                      className="font-bold text-emerald-800 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      {matchedDistrict.contactPhone}
                    </a>
                  </div>

                  <div className="sm:col-span-2">
                    <span className="text-slate-500 block text-[11px] uppercase font-bold">
                      {lang === 'hi' ? 'सर्कल कार्यालय पता:' : 'Circle Office Address:'}
                    </span>
                    <span className="text-slate-700 mt-0.5 block">
                      {lang === 'hi'
                        ? matchedDistrict.circleOfficeAddressHi
                        : matchedDistrict.circleOfficeAddressEn}
                    </span>
                  </div>

                  <div className="sm:col-span-2">
                    <span className="text-slate-500 block text-[11px] uppercase font-bold">
                      {t.discomFinder.pinMatches}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {matchedDistrict.samplePincodes.slice(0, 5).map((pin) => (
                        <span key={pin} className="px-2 py-0.5 bg-slate-100 rounded text-slate-700 text-xs font-mono">
                          {pin}
                        </span>
                      ))}
                      {matchedDistrict.subdivisions.slice(0, 4).map((sub) => (
                        <span key={sub} className="px-2 py-0.5 bg-slate-100 rounded text-slate-600 text-xs">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Official Action Links */}
                <div className="pt-2 space-y-2">
                  <a
                    href={officialLinks.billPayment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 ${
                      isUHBVN ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-sky-600 hover:bg-sky-700'
                    }`}
                  >
                    <span>{t.discomFinder.directPayBtn}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={officialLinks.newConnection}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 text-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <span>{t.discomFinder.directApplyBtn}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>

                    <a
                      href={officialLinks.knowAccount}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 text-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <span>{lang === 'hi' ? 'खाता नंबर भूल गए?' : 'Find Account No.'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-600">
                  {lang === 'hi'
                    ? 'कृपया बाएं पैनल में अपना पिन कोड या जिला चुनें।'
                    : 'Select your Haryana district or enter your PIN on the left to see your Discom.'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Anatomical Explanation of Haryana Electricity Bills & Account System */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
          <h3 className="text-lg font-extrabold text-slate-900 mb-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            {t.discomFinder.prefixGuideTitle}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {t.discomFinder.prefixGuideP1} {t.discomFinder.prefixGuideP2}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                UHBVN (Uttar Haryana Bijli Vitran Nigam)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>{lang === 'hi' ? 'मुख्यालय:' : 'Headquarters:'}</strong> Shakti Bhawan, Sector 6, Panchkula.
                <br />
                <strong>{lang === 'hi' ? 'जिले (11):' : 'Districts (11):'}</strong> Panchkula, Ambala, Yamunanagar, Kurukshetra, Kaithal, Karnal, Panipat, Sonipat, Rohtak, Jhajjar, Jind.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 block mb-1">
                DHBVN (Dakshin Haryana Bijli Vitran Nigam)
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>{lang === 'hi' ? 'मुख्यालय:' : 'Headquarters:'}</strong> Vidyut Sadan, Vidyut Nagar, Hisar.
                <br />
                <strong>{lang === 'hi' ? 'जिले (11):' : 'Districts (11):'}</strong> Gurugram, Faridabad, Rewari, Sirsa, Hisar, Bhiwani, Charkhi Dadri, Fatehabad, Mahendragarh, Palwal, Nuh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
