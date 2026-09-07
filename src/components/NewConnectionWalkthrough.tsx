import React, { useState, useId } from 'react';
import {
  Zap,
  CheckCircle2,
  Calculator,
  FileCheck,
  ExternalLink,
  ShieldCheck,
  Printer
} from 'lucide-react';
import { Language, ConnectionCategory } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { calculateNewConnectionEstimate, OFFICIAL_LINKS } from '../data/haryanaData';

interface Props {
  lang: Language;
}

export const NewConnectionWalkthrough: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const categorySelectId = useId();
  const loadInputId = useId();

  // Calculator states
  const [category, setCategory] = useState<ConnectionCategory>('domestic');
  const [loadKw, setLoadKw] = useState<number>(3); // default 3 kW for standard home
  const [completedDocs, setCompletedDocs] = useState<number[]>([0, 1]); // initial checked

  const estimate = calculateNewConnectionEstimate(category, loadKw);

  const toggleDoc = (idx: number) => {
    if (completedDocs.includes(idx)) {
      setCompletedDocs(completedDocs.filter((i) => i !== idx));
    } else {
      setCompletedDocs([...completedDocs, idx]);
    }
  };

  return (
    <section id="new-connection" className="py-12 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Sequence 2: New Connection Walkthrough
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.newConnection.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.newConnection.desc}
          </p>
        </div>

        {/* Haryana Parivar Pehchan Patra (PPP) Mandatory Callout Box */}
        <div className="mb-8 bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-2xl p-6 sm:p-7 shadow-md relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck className="w-5 h-5 text-amber-300" />
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  {t.newConnection.pppNoticeTitle}
                </h3>
              </div>
              <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed max-w-3xl">
                {t.newConnection.pppNoticeDesc}
              </p>
            </div>
            <a
              href={OFFICIAL_LINKS.parivarPehchanPatra}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs rounded-xl transition-all shadow-xs"
            >
              <span>Mera Parivar Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Two Columns: Document Checklist on Left, Interactive Fee Calculator on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Document Checklist */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                {t.newConnection.docsListTitle}
              </h3>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full">
                {completedDocs.length} / {t.newConnection.docs.length}{' '}
                {lang === 'hi' ? 'तैयार' : 'Ready'}
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              {lang === 'hi'
                ? 'आवेदन से पूर्व निम्नलिखित दस्तावेज़ों की स्पष्ट स्कैन प्रति (पीडीएफ/जेपीजी) तैयार रखें:'
                : 'Keep clear scanned copies (PDF/JPEG) of these documents ready before starting online application:'}
            </p>

            <div className="space-y-3">
              {t.newConnection.docs.map((doc, idx) => {
                const isChecked = completedDocs.includes(idx);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleDoc(idx)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      isChecked
                        ? 'border-emerald-500/50 bg-emerald-50/40 text-slate-900'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100/70 text-slate-600'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                    />
                    <span className="text-xs sm:text-sm leading-snug font-medium select-none">
                      {doc}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Saral Haryana alternative tip */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-600 leading-relaxed flex items-center justify-between gap-2">
                <span>{t.newConnection.saralOption}</span>
                <a
                  href={OFFICIAL_LINKS.saralHaryana}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
                >
                  Saral Haryana <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>

          {/* Right: Fee & Security Deposit Estimator */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <h3 className="font-extrabold text-lg text-slate-900">
                {t.newConnection.calculatorTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              {t.newConnection.calculatorSubtitle}
            </p>

            <div className="space-y-4">
              {/* Category Selector */}
              <div>
                <label htmlFor={categorySelectId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t.newConnection.categoryLabel}
                </label>
                <select
                  id={categorySelectId}
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ConnectionCategory)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-600 text-slate-900"
                >
                  <option value="domestic">{t.newConnection.categories.domestic}</option>
                  <option value="nondomestic">{t.newConnection.categories.nondomestic}</option>
                  <option value="agriculture">{t.newConnection.categories.agriculture}</option>
                  <option value="industrial_lt">{t.newConnection.categories.industrial_lt}</option>
                  <option value="industrial_ht">{t.newConnection.categories.industrial_ht}</option>
                </select>
              </div>

              {/* Sanctioned Load (kW) */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor={loadInputId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t.newConnection.loadLabel}
                  </label>
                  <span className="text-sm font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                    {loadKw} kW
                  </span>
                </div>
                <input
                  id={loadInputId}
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={loadKw}
                  onChange={(e) => setLoadKw(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 kW (Rural / 1 Room)</span>
                  <span>4 kW (Standard 2BHK)</span>
                  <span>8 kW (3-4 BHK / ACs)</span>
                  <span>20 kW</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 italic">
                  {t.newConnection.loadHint}
                </p>
              </div>

              {/* Calculation Result Card */}
              <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm pb-2 border-b border-slate-200">
                  <span className="text-slate-600">{t.newConnection.applicationFee}</span>
                  <span className="font-bold text-slate-900">₹{estimate.applicationFee}</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm pb-2 border-b border-slate-200">
                  <span className="text-slate-600">
                    {t.newConnection.acdSecurity}{' '}
                    <span className="text-[11px] text-slate-400">(₹750/kW)</span>
                  </span>
                  <span className="font-bold text-slate-900">₹{estimate.acdSecurityDeposit}</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm pb-2 border-b border-slate-200">
                  <span className="text-slate-600">
                    {t.newConnection.sccCharges}{' '}
                    <span className="text-[11px] text-slate-400">
                      ({category === 'agriculture' ? '₹1,500/kW' : '₹750/kW'})
                    </span>
                  </span>
                  <span className="font-bold text-slate-900">
                    ₹{estimate.serviceConnectionCharges}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm pb-2 border-b border-slate-200">
                  <span className="text-slate-600">{t.newConnection.meterSecurity}</span>
                  <span className="font-bold text-slate-900">₹{estimate.meterSecurity}</span>
                </div>

                {/* Total Cost Highlight */}
                <div className="flex items-center justify-between text-sm sm:text-base pt-1">
                  <span className="font-extrabold text-slate-900">
                    {t.newConnection.totalCost}
                  </span>
                  <span className="text-lg sm:text-xl font-black text-emerald-800">
                    ₹{estimate.totalEstimatedCost.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Supply phase badge */}
                <div className="pt-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md ${
                      estimate.supplyType === 'three_phase'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-emerald-100 text-emerald-900'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    {estimate.supplyType === 'three_phase'
                      ? t.newConnection.phaseNoticeThree
                      : t.newConnection.phaseNoticeSingle}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={OFFICIAL_LINKS.dhbvn.newConnection}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>DHBVN New Connection</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={OFFICIAL_LINKS.uhbvn.newConnection}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>UHBVN New Connection</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  {lang === 'hi' ? 'इस प्राक्कलन (Estimate) का प्रिंट लें' : 'Print / Save this Fee Estimate'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
