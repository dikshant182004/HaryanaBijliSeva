import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Search,
  Building,
  Phone,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Language, DistrictInfo } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { HARYANA_DISTRICTS, OFFICIAL_LINKS } from '../data/haryanaData';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
  onSelectDistrict?: (dist: DistrictInfo) => void;
}

export const DistrictDirectory: React.FC<Props> = ({ lang, onSelectDistrict }) => {
  const t = TRANSLATIONS[lang];
  const [filterDiscom, setFilterDiscom] = useState<'ALL' | 'UHBVN' | 'DHBVN'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModalDistrict, setSelectedModalDistrict] = useState<DistrictInfo | null>(null);

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
      return matchNameEn || matchNameHi || matchCircle || matchPin || matchSub;
    });
  }, [filterDiscom, searchQuery]);

  return (
    <section id="districts" className="py-12 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Haryana GEO Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.districtDirectory.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.districtDirectory.subtitle}
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Discom Filter Tabs */}
          <div className="flex items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs w-full sm:w-auto">
            <button
              onClick={() => setFilterDiscom('ALL')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterDiscom === 'ALL'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.districtDirectory.filterAll}
            </button>
            <button
              onClick={() => setFilterDiscom('UHBVN')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterDiscom === 'UHBVN'
                  ? 'bg-emerald-700 text-white'
                  : 'text-slate-600 hover:text-emerald-700'
              }`}
            >
              {t.districtDirectory.filterUhbvn}
            </button>
            <button
              onClick={() => setFilterDiscom('DHBVN')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                filterDiscom === 'DHBVN'
                  ? 'bg-sky-700 text-white'
                  : 'text-slate-600 hover:text-sky-700'
              }`}
            >
              {t.districtDirectory.filterDhbvn}
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.districtDirectory.searchPlaceholder}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        {/* District Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDistricts.map((dist) => {
            const isU = dist.discom === 'UHBVN';
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
                      {dist.discom} • {isU ? 'North' : 'South'}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Prefix: {dist.accountPrefixes[0]}
                    </span>
                  </div>

                  <Link to={`/districts/${dist.id}`} className="group/title">
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover/title:text-emerald-700 transition-colors">
                      {lang === 'hi' ? dist.nameHi : dist.nameEn}
                    </h3>
                  </Link>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{lang === 'hi' ? dist.headquartersHi : dist.headquartersEn}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`tel:${dist.contactPhone}`} className="hover:underline text-slate-700">
                        {dist.contactPhone}
                      </a>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 block mb-1">
                      {t.districtDirectory.subdivisions}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {dist.subdivisions.slice(0, 3).map((sub) => (
                        <span key={sub} className="text-[11px] px-2 py-0.5 bg-slate-100 rounded text-slate-700">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    to={`/districts/${dist.id}`}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-0.5"
                  >
                    <span>{lang === 'hi' ? 'पूरा विवरण देखें' : 'View Full Details'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={
                      isU
                        ? OFFICIAL_LINKS.uhbvn.billPayment
                        : OFFICIAL_LINKS.dhbvn.billPayment
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-500 hover:text-slate-900 inline-flex items-center gap-1"
                  >
                    <span>Pay Bill</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Full District Breakdown */}
        {selectedModalDistrict && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {selectedModalDistrict.discom} Electricity Circle
                  </span>
                  <h4 className="text-xl font-black text-slate-900">
                    {lang === 'hi' ? selectedModalDistrict.nameHi : selectedModalDistrict.nameEn}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedModalDistrict(null)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
                <div>
                  <span className="font-bold text-slate-900 block">{t.districtDirectory.circleOffice}</span>
                  <p>{lang === 'hi' ? selectedModalDistrict.circleOfficeAddressHi : selectedModalDistrict.circleOfficeAddressEn}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block">{t.districtDirectory.helpline}</span>
                  <a href={`tel:${selectedModalDistrict.contactPhone}`} className="text-emerald-700 font-bold hover:underline">
                    {selectedModalDistrict.contactPhone}
                  </a>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block">{t.districtDirectory.subdivisions}</span>
                  <p className="leading-relaxed">{selectedModalDistrict.subdivisions.join(', ')}</p>
                </div>

                <div>
                  <span className="font-bold text-slate-900 block">{t.districtDirectory.pincodes}</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {selectedModalDistrict.samplePincodes.map((pin) => (
                      <span key={pin} className="px-2 py-0.5 bg-slate-100 rounded text-xs font-mono">
                        {pin}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={
                    selectedModalDistrict.discom === 'UHBVN'
                      ? OFFICIAL_LINKS.uhbvn.billPayment
                      : OFFICIAL_LINKS.dhbvn.billPayment
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center inline-flex items-center justify-center gap-1.5"
                >
                  <span>Go to {selectedModalDistrict.discom} Official Payment</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
