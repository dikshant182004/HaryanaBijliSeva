import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Search,
  Building,
  Phone,
  ExternalLink,
  ChevronRight,
  PhoneCall,
  Sparkles,
  CheckCircle2,
  Building2,
  ArrowRight
} from 'lucide-react';
import { Language, DistrictInfo } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { HARYANA_DISTRICTS, OFFICIAL_LINKS, VERIFIED_HELPLINES } from '../data/haryanaData';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
  onSelectDistrict?: (dist: DistrictInfo) => void;
}

const POPULAR_HUBS = [
  { id: 'panipat', nameEn: 'Panipat', nameHi: 'पानीपत', discom: 'UHBVN' },
  { id: 'gurugram', nameEn: 'Gurugram', nameHi: 'गुरुग्राम', discom: 'DHBVN' },
  { id: 'faridabad', nameEn: 'Faridabad', nameHi: 'फरीदाबाद', discom: 'DHBVN' },
  { id: 'ambala', nameEn: 'Ambala', nameHi: 'अम्बाला', discom: 'UHBVN' },
  { id: 'hisar', nameEn: 'Hisar', nameHi: 'हिसार', discom: 'DHBVN' },
  { id: 'karnal', nameEn: 'Karnal', nameHi: 'करनाल', discom: 'UHBVN' },
  { id: 'rohtak', nameEn: 'Rohtak', nameHi: 'रोहतक', discom: 'UHBVN' },
  { id: 'sonipat', nameEn: 'Sonipat', nameHi: 'सोनीपत', discom: 'UHBVN' },
  { id: 'panchkula', nameEn: 'Panchkula', nameHi: 'पंचकूला', discom: 'UHBVN' },
  { id: 'rewari', nameEn: 'Rewari', nameHi: 'रेवाड़ी', discom: 'DHBVN' }
];

export const DistrictDirectory: React.FC<Props> = ({ lang, onSelectDistrict }) => {
  const t = TRANSLATIONS[lang];
  const [filterDiscom, setFilterDiscom] = useState<'ALL' | 'UHBVN' | 'DHBVN'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDistricts = useMemo(() => {
    return HARYANA_DISTRICTS.filter((dist) => {
      // Discom filter
      if (filterDiscom !== 'ALL' && dist.discom !== filterDiscom) {
        return false;
      }
      // Text search
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchNameEn = dist.nameEn.toLowerCase().includes(q);
      const matchNameHi = dist.nameHi.toLowerCase().includes(q);
      const matchCircle = dist.circleName.toLowerCase().includes(q);
      const matchPin = dist.samplePincodes.some((p) => p.includes(q));
      const matchSub = dist.subdivisions.some((s) => s.toLowerCase().includes(q));
      const matchPrefix = dist.accountPrefixes.some((p) => p.toLowerCase().includes(q));
      return matchNameEn || matchNameHi || matchCircle || matchPin || matchSub || matchPrefix;
    });
  }, [filterDiscom, searchQuery]);

  return (
    <section id="districts" className="py-10 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Haryana 22 Districts Electricity Hub
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'हरियाणा जिलेवार बिजली बोर्ड डायरेक्टरी' : 'Haryana District Electricity Board Directory'}
          </h2>
          <p className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed">
            {lang === 'hi'
              ? 'हरियाणा के सभी 22 जिलों में डिस्कॉम अधिकार क्षेत्र (UHBVN या DHBVN), सर्कल कंट्रोल रूम, SDO सब-डिवीजन कार्यालय और स्थानीय हेल्पलाइन खोजें:'
              : 'Find your local electricity discom (UHBVN vs DHBVN), circle control room contacts, SDO sub-divisions, and instant bill payment links for all 22 districts:'}
          </p>
        </div>

        {/* Popular High-Search Cities Chips */}
        <div className="mb-6 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{lang === 'hi' ? 'अक्सर खोजे जाने वाले बिजली बोर्ड:' : 'Frequently Searched Electricity Hubs:'}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_HUBS.map((hub) => (
              <Link
                key={hub.id}
                to={`/districts/${hub.id}`}
                className="px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border border-slate-200 hover:border-emerald-300 rounded-xl text-xs font-semibold transition-all inline-flex items-center gap-1 group"
              >
                <span>{lang === 'hi' ? hub.nameHi : hub.nameEn}</span>
                <span className={`text-[9px] font-mono px-1 py-0.2 rounded font-bold ${
                  hub.discom === 'UHBVN' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'
                }`}>
                  {hub.discom}
                </span>
                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-700 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          {/* Discom Filter Tabs */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs w-full sm:w-auto">
            <button
              onClick={() => setFilterDiscom('ALL')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterDiscom === 'ALL'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'hi' ? 'सभी 22 जिले' : 'All 22 Districts'}
            </button>
            <button
              onClick={() => setFilterDiscom('UHBVN')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterDiscom === 'UHBVN'
                  ? 'bg-emerald-700 text-white'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              UHBVN (11 {lang === 'hi' ? 'जिले' : 'Circles'})
            </button>
            <button
              onClick={() => setFilterDiscom('DHBVN')}
              className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterDiscom === 'DHBVN'
                  ? 'bg-sky-700 text-white'
                  : 'text-slate-600 hover:text-sky-700'
              }`}
            >
              DHBVN (11 {lang === 'hi' ? 'जिले' : 'Circles'})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'hi' ? 'जिला, सब-डिवीजन (जैसे: समालखा, सोहना), पिन कोड खोजें...' : 'Search district, subdivision (e.g. Samalkha, DLF), pincode...'}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-600 shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* District Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDistricts.map((dist) => {
            const isU = dist.discom === 'UHBVN';
            const matchedSubdivision = searchQuery.trim() 
              ? dist.subdivisions.find(s => s.toLowerCase().includes(searchQuery.toLowerCase().trim()))
              : null;

            return (
              <div
                key={dist.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                        isU ? 'bg-emerald-100 text-emerald-900' : 'bg-sky-100 text-sky-900'
                      }`}
                    >
                      {dist.discom} • {isU ? 'North Zone' : 'South Zone'}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Prefix: <strong>{dist.accountPrefixes[0]}</strong>
                    </span>
                  </div>

                  <Link to={`/districts/${dist.id}`} className="group/title block">
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover/title:text-emerald-700 transition-colors flex items-center justify-between">
                      <span>{lang === 'hi' ? dist.nameHi : dist.nameEn}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover/title:text-emerald-700 transition-transform group-hover/title:translate-x-1" />
                    </h3>
                  </Link>

                  {/* Sub-division match highlight */}
                  {matchedSubdivision && (
                    <div className="mt-2 p-1.5 bg-amber-50 border border-amber-200 rounded-lg text-[11px] text-amber-900 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{matchedSubdivision} Sub-Division matched</span>
                    </div>
                  )}

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{lang === 'hi' ? dist.headquartersHi : dist.headquartersEn}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <a href={`tel:${dist.contactPhone}`} className="hover:underline text-slate-800 font-bold">
                        {dist.contactPhone}
                      </a>
                      <span className="text-slate-300">|</span>
                      <a href="tel:1912" className="text-rose-600 font-bold hover:underline">
                        1912
                      </a>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1.5">
                      <span>{lang === 'hi' ? 'प्रमुख सब-डिवीजन (SDO):' : 'Key Sub-Divisions (SDO):'}</span>
                      <span className="text-[10px] text-slate-400">{dist.subdivisions.length} total</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {dist.subdivisions.slice(0, 4).map((sub) => (
                        <span 
                          key={sub} 
                          className={`text-[11px] px-2 py-0.5 rounded ${
                            matchedSubdivision === sub 
                              ? 'bg-amber-100 text-amber-900 font-bold border border-amber-300' 
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {sub}
                        </span>
                      ))}
                      {dist.subdivisions.length > 4 && (
                        <span className="text-[10px] px-1.5 py-0.5 text-slate-400">
                          +{dist.subdivisions.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    to={`/districts/${dist.id}`}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1"
                  >
                    <span>{lang === 'hi' ? 'सर्कल विवरण व हेल्पलाइन' : 'View Circle & Helplines'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={isU ? OFFICIAL_LINKS.uhbvn.billPayment : OFFICIAL_LINKS.dhbvn.billPayment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-500 hover:text-slate-900 inline-flex items-center gap-1"
                  >
                    <span>{lang === 'hi' ? 'बिल भरें' : 'Pay Bill'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {filteredDistricts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <Building2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">
              {lang === 'hi' ? 'कोई जिला या सब-डिवीजन नहीं मिला' : 'No District or Subdivision Found'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              {lang === 'hi'
                ? `"${searchQuery}" के लिए कोई परिणाम नहीं मिला। कृपया वर्तनी जांचें या हरियाणा के 22 जिलों की सूची देखें।`
                : `No results found for "${searchQuery}". Please check your spelling or choose from Haryana's 22 districts.`}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setFilterDiscom('ALL'); }}
              className="px-4 py-2 bg-slate-900 text-white font-bold rounded-xl text-xs hover:bg-slate-800"
            >
              {lang === 'hi' ? 'सर्च रीसेट करें' : 'Reset Search'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
