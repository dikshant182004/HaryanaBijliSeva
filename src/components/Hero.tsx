import React from 'react';
import {
  Compass,
  Zap,
  PhoneCall,
  CheckCircle2,
  FileText,
  Calculator,
  ShieldCheck,
  TrendingDown
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface Props {
  lang: Language;
}

export const Hero: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white pt-10 sm:pt-14 pb-14 border-b border-slate-800">
      {/* Subtle ambient lighting effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/10 blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* District Coverage Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* Quick Action Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <a
            href="#discom-finder"
            className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-sm shadow-emerald-500/20 active:scale-95 inline-flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4" />
            <span>{t.nav.finder}</span>
          </a>

          <a
            href="#new-connection"
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all active:scale-95 inline-flex items-center gap-1.5"
          >
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>{t.nav.newConnection}</span>
          </a>

          <a
            href="#name-transfer"
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-700 transition-all active:scale-95 inline-flex items-center gap-1.5"
          >
            <TrendingDown className="w-4 h-4 text-amber-400" />
            <span>{t.nav.nameTransfer}</span>
          </a>

          <a
            href="#outage-1912"
            className="px-4 py-2.5 bg-rose-600/90 hover:bg-rose-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95 inline-flex items-center gap-1.5"
          >
            <PhoneCall className="w-4 h-4" />
            <span>1912 Helpline</span>
          </a>
        </div>

        {/* 4 Feature Metrics Banner */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          <div className="p-3 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <span className="block text-xl sm:text-2xl font-black text-emerald-400">22</span>
            <span className="text-xs text-slate-400 font-medium">{t.hero.statsDistricts}</span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <span className="block text-xl sm:text-2xl font-black text-sky-400">UHBVN & DHBVN</span>
            <span className="text-xs text-slate-400 font-medium">{t.hero.statsDiscoms}</span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <span className="block text-xl sm:text-2xl font-black text-rose-400">1912</span>
            <span className="text-xs text-slate-400 font-medium">{t.hero.statsHelpline}</span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 text-center">
            <span className="block text-xl sm:text-2xl font-black text-amber-400">₹3,000+</span>
            <span className="text-xs text-slate-400 font-medium">{t.hero.statsSavings}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
