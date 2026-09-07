import React, { useState } from 'react';
import {
  PhoneCall,
  MessageSquare,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Coins,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OFFICIAL_LINKS } from '../data/haryanaData';

interface Props {
  lang: Language;
}

export const GrievanceRedressal: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [openTier, setOpenTier] = useState<number | null>(1); // Open Tier 2 (CGRF) by default

  return (
    <section id="outage-1912" className="py-12 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Sequence 4: 1912 Helpline & Grievance Escalation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.outage1912.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.outage1912.subtitle}
          </p>
        </div>

        {/* Top 3 Instant Communication Cards: 1912 Call, WhatsApp Bots, SMS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 1912 Dial Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-rose-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                {t.outage1912.helplineTitle}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {t.outage1912.helplineDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="tel:1912"
                className="w-full py-2.5 px-4 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{lang === 'hi' ? 'सीधे 1912 डायल करें' : 'Call 1912 Directly (Toll-Free)'}</span>
              </a>
            </div>
          </div>

          {/* Official WhatsApp Outage Bots */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                {t.outage1912.whatsappTitle}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {t.outage1912.whatsappDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <a
                href={OFFICIAL_LINKS.dhbvn.whatsappHelp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.outage1912.dhbvnWa}</span>
              </a>
              <a
                href={OFFICIAL_LINKS.uhbvn.whatsappHelp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.outage1912.uhbvnWa}</span>
              </a>
            </div>
          </div>

          {/* Fast SMS Syntax */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-sky-300 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                {t.outage1912.smsTitle}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {t.outage1912.smsDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="p-2.5 bg-slate-100 rounded-lg text-xs font-mono font-bold text-slate-800 text-center border border-slate-200">
                {t.outage1912.smsExample}
              </div>
            </div>
          </div>
        </div>

        {/* 3-Tier Escalation: SDO -> CGRF -> Ombudsman */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              {t.outage1912.cgrfTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {t.outage1912.cgrfDesc}
            </p>
          </div>

          <div className="space-y-4">
            {t.outage1912.tiers.map((tier, idx) => {
              const isOpen = openTier === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenTier(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100/80 transition-colors"
                  >
                    <span className="font-extrabold text-xs sm:text-sm text-slate-900">
                      {tier.title}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                      <p>{tier.desc}</p>
                      {idx === 1 && (
                        <div className="pt-2 flex flex-wrap gap-2 text-xs">
                          <a
                            href={OFFICIAL_LINKS.dhbvn.cgrf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-700 font-bold hover:underline inline-flex items-center gap-1"
                          >
                            DHBVN CGRF Portal <ExternalLink className="w-3 h-3" />
                          </a>
                          <span className="text-slate-300">•</span>
                          <a
                            href={OFFICIAL_LINKS.uhbvn.cgrf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                          >
                            UHBVN CGRF Portal <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                      {idx === 2 && (
                        <div className="pt-2 text-xs">
                          <a
                            href={OFFICIAL_LINKS.hercOmbudsman}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                          >
                            HERC Electricity Ombudsman Haryana Portal <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Statutory Compensation Benchmark Table */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Coins className="w-5 h-5 text-amber-600" />
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
              {t.outage1912.compensationTitle}
            </h3>
          </div>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            {lang === 'hi'
              ? 'हरियाणा विद्युत विनियामक आयोग (HERC) के नियमों के अनुसार यदि बिजली बोर्ड तय समयसीमा में कार्य पूर्ण न करे, तो उपभोक्ता मुआवजे का पात्र होता है:'
              : 'Under Haryana Electricity Regulatory Commission (HERC) Standards of Performance, consumers are entitled to compensation if the discom violates these resolution timelines:'}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3 px-4">{lang === 'hi' ? 'शिकायत का प्रकार' : 'Service Defect / Issue'}</th>
                  <th className="py-3 px-4">{lang === 'hi' ? 'निर्धारित समय-सीमा' : 'Prescribed Resolution Time'}</th>
                  <th className="py-3 px-4 text-emerald-800">{lang === 'hi' ? 'मुआवजा दर' : 'Penalty / Compensation Payable'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                {t.outage1912.compRules.map((rule, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70">
                    <td className="py-3 px-4 font-semibold text-slate-900">{rule.issue}</td>
                    <td className="py-3 px-4 flex items-center gap-1.5 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{rule.standard}</span>
                    </td>
                    <td className="py-3 px-4 font-bold text-emerald-800">{rule.penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
