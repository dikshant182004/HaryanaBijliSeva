import React, { useState } from 'react';
import { Calculator, CheckCircle2, Info, ArrowUpRight, Zap } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { calculateDomesticBill } from '../data/haryanaData';

interface Props {
  lang: Language;
}

export const BillCalculator: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [units, setUnits] = useState<number>(220); // standard monthly consumption
  const [loadKw, setLoadKw] = useState<number>(2);

  const bill = calculateDomesticBill(units, loadKw);

  return (
    <section id="bill-calculator" className="py-12 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Sequence 5: Domestic Tariff Estimator
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.billCalc.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.billCalc.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
            <div className="space-y-5">
              {/* Units Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  {t.billCalc.unitsLabel}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="5000"
                    value={units}
                    onChange={(e) => setUnits(Math.max(0, Number(e.target.value)))}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-lg font-black text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600"
                  />
                  <span className="absolute right-4 top-3 text-xs font-bold text-slate-400">
                    kWh / Units
                  </span>
                </div>

                {/* Quick Unit Presets */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {[50, 90, 150, 250, 450, 700].map((val) => (
                    <button
                      key={val}
                      onClick={() => setUnits(val)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-semibold border transition-all ${
                        units === val
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {val} U
                    </button>
                  ))}
                </div>
              </div>

              {/* Sanctioned Load */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {t.billCalc.loadLabel}
                  </label>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    {loadKw} kW
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={loadKw}
                  onChange={(e) => setLoadKw(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Subsidy / Category alert */}
              <div
                className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                  bill.category === 'cat1'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-sky-50 border-sky-200 text-sky-900'
                }`}
              >
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-current" />
                <p>
                  {bill.category === 'cat1' ? t.billCalc.noteSlabCat1 : t.billCalc.noteSlabCat2}
                </p>
              </div>
            </div>
          </div>

          {/* Breakdown Output */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
            <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              {t.billCalc.breakdownTitle}
            </h3>

            {/* Telescopic Slab Breakdown Table */}
            <div className="mb-4 overflow-hidden border border-slate-200 rounded-xl">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">HERC Tariff Slab</th>
                    <th className="py-2.5 px-3 text-right">Units</th>
                    <th className="py-2.5 px-3 text-right">Rate</th>
                    <th className="py-2.5 px-3 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {bill.slabBreakdown.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50/50">
                      <td className="py-2 px-3 text-slate-800">{item.slab}</td>
                      <td className="py-2 px-3 text-right text-slate-600">{item.units}</td>
                      <td className="py-2 px-3 text-right text-slate-600">₹{item.rate.toFixed(2)}</td>
                      <td className="py-2 px-3 text-right font-semibold text-slate-900">
                        ₹{item.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 font-bold">
                    <td colSpan={3} className="py-2 px-3 text-slate-800">
                      {t.billCalc.energyCharges}
                    </td>
                    <td className="py-2 px-3 text-right text-emerald-800">
                      ₹{bill.energyCharges.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Taxes & Surcharges List */}
            <div className="space-y-2 text-xs text-slate-600 border-b border-slate-200 pb-4 mb-4">
              <div className="flex justify-between">
                <span>{t.billCalc.fixedCharges}</span>
                <span className="font-semibold text-slate-900">₹{bill.fixedCharges}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.billCalc.fsa}</span>
                <span className="font-semibold text-slate-900">₹{bill.fsaCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.billCalc.ed}</span>
                <span className="font-semibold text-slate-900">₹{bill.electricityDuty.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.billCalc.mt}</span>
                <span className="font-semibold text-slate-900">₹{bill.municipalTax.toFixed(2)}</span>
              </div>
            </div>

            {/* Total Estimated Bill Amount */}
            <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <div>
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
                  {t.billCalc.totalEstimated}
                </span>
                <span className="text-[11px] text-emerald-700">
                  {lang === 'hi' ? 'मासिक चक्र (30 दिन) हेतु' : 'For 30-day billing cycle'}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-900">
                ₹{bill.totalBill.toLocaleString('en-IN')}
              </div>
            </div>

            {/* Regulatory Sourcing Badge */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>{lang === 'hi' ? 'लागू स्लैब: HERC टैरिफ आदेश 2024-25' : 'Tariff Order: HERC FY 2024-25 / 2025-26'}</span>
              <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                {lang === 'hi' ? 'सत्यापित: मार्च 2025' : 'Verified: March 2025'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
