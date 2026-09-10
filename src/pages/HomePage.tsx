import React, { useState } from 'react';
import { 
  Zap, 
  MapPin, 
  Calculator, 
  FileText, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  CheckCircle2, 
  Sparkles,
  Building2,
  ExternalLink,
  Search,
  Sun,
  AlertTriangle,
  CreditCard,
  Cpu,
  MessageSquare,
  BookOpen,
  Percent,
  ShieldAlert,
  Coins
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { HARYANA_DISTRICTS, OFFICIAL_LINKS } from '../data/haryanaData';
import { ARTICLES_DATA } from '../data/articlesData';
import { Link, useRouter } from '../router/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { FaqSection } from '../components/FaqSection';

interface Props {
  lang: Language;
}

export const HomePage: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const { navigate } = useRouter();
  const [quickSearch, setQuickSearch] = useState('');
  const [quickResult, setQuickResult] = useState<any | null>(null);

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickSearch.trim()) return;
    const q = quickSearch.toLowerCase().trim();
    const found = HARYANA_DISTRICTS.find(d => 
      d.nameEn.toLowerCase().includes(q) || 
      d.nameHi.toLowerCase().includes(q) || 
      d.samplePincodes.some(p => p.includes(q)) ||
      d.subdivisions.some(s => s.toLowerCase().includes(q))
    );
    setQuickResult(found || 'not_found');
  };

  const uhbvnDistricts = HARYANA_DISTRICTS.filter(d => d.discom === 'UHBVN');
  const dhbvnDistricts = HARYANA_DISTRICTS.filter(d => d.discom === 'DHBVN');

  const pageTitle = lang === 'hi' 
    ? 'हरियाणा बिजली सेवा: UHBVN व DHBVN उपभोक्ता गाइड, बिल कैलकुलेटर व 1912 सहायता'
    : 'Haryana Electricity Board Guide: UHBVN vs DHBVN Finder, Bill Calculator & 1912 Help';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा के 22 जिलों के लिए स्वतंत्र बिजली गाइड: अपना निगम पहचानें (UHBVN या DHBVN), HERC स्लैब अनुसार बिजली बिल व नया कनेक्शन खर्च आंकें, नाम ट्रांसफर करें और 1912 पर शिकायत दर्ज करें।'
    : 'Complete citizen guide for Haryana electricity consumers across 22 districts. Identify your discom (UHBVN or DHBVN), calculate HERC domestic tariff bills and new connection fees, navigate name transfer, and lodge 1912 complaints.';

  return (
    <div>
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white pt-12 pb-18 lg:pt-16 lg:pb-24">
        {/* Subtle decorative background patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t.hero.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
              {t.hero.subtitle}
            </p>

            {/* Quick Discom Finder Box */}
            <div className="mt-8 max-w-xl mx-auto bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/20 shadow-xl">
              <form onSubmit={handleQuickSearch} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={quickSearch}
                    onChange={(e) => setQuickSearch(e.target.value)}
                    placeholder={lang === 'hi' ? 'पिन कोड या जिला डालें (उदा. 122001, करनाल, हिसार)...' : 'Enter PIN or District (e.g. 122001, Karnal, Hisar)...'}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
                >
                  {lang === 'hi' ? 'निगम खोजें' : 'Find Nigam'}
                </button>
              </form>

              {quickResult && (
                <div className="mt-3 p-3 rounded-xl bg-slate-900/90 border border-slate-700 text-left text-xs animate-in fade-in">
                  {quickResult === 'not_found' ? (
                    <div className="text-rose-300 flex items-center justify-between">
                      <span>{lang === 'hi' ? 'कोई जिला मेल नहीं खाया। कृपया 22 जिलों में से चुनें।' : 'No district matched. Please check from directory.'}</span>
                      <Link to="/districts" className="underline font-bold text-white hover:text-emerald-300">
                        {lang === 'hi' ? 'जिले देखें' : 'View All'}
                      </Link>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div>
                        <span className="font-bold text-white text-sm">
                          {lang === 'hi' ? quickResult.nameHi : quickResult.nameEn}
                        </span>
                        <span className="text-slate-400 mx-2">→</span>
                        <span className={`px-2 py-0.5 rounded font-black text-xs ${quickResult.discom === 'UHBVN' ? 'bg-emerald-800 text-emerald-100' : 'bg-sky-800 text-sky-100'}`}>
                          {quickResult.discom} ({quickResult.discom === 'UHBVN' ? (lang === 'hi' ? 'उत्तर हरियाणा' : 'North Haryana') : (lang === 'hi' ? 'दक्षिण हरियाणा' : 'South Haryana')})
                        </span>
                      </div>
                      <Link 
                        to={`/districts/${quickResult.id}`}
                        className="font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                      >
                        <span>{lang === 'hi' ? 'पोर्टल व बिल लिंक' : 'Portal & Bill Links'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Action Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold mr-1">
                {lang === 'hi' ? 'सीधे पहुंचें:' : 'Direct Access:'}
              </span>
              <Link to="/articles" className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold transition-all shadow-sm flex items-center gap-1.5 border border-emerald-300">
                <BookOpen className="w-3.5 h-3.5 text-slate-950" />
                <span>{lang === 'hi' ? '📚 22+ बिजली गाइड व नियम' : '📚 22+ Citizen Guides'}</span>
              </Link>
              <Link to="/discom-finder" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all border border-white/15">
                {lang === 'hi' ? 'डिस्कॉम फाइंडर' : 'Discom Finder'}
              </Link>
              <Link to="/solar-calculator" className="px-3 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-medium transition-all border border-amber-400/30">
                {lang === 'hi' ? '☀️ रूफटॉप सोलर' : '☀️ Rooftop Solar'}
              </Link>
              <Link to="/bill-dispute" className="px-3 py-1.5 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 font-medium transition-all border border-rose-400/30">
                {lang === 'hi' ? '⚖️ गलत बिल समाधान' : '⚖️ High Bill Dispute'}
              </Link>
              <Link to="/payment-help" className="px-3 py-1.5 rounded-full bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 font-medium transition-all border border-sky-400/30">
                {lang === 'hi' ? '💳 पेमेंट फेल व रिफंड' : '💳 Failed Payment Help'}
              </Link>
              <Link to="/bill-calculator" className="px-3 py-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 font-medium transition-all border border-purple-400/30">
                {lang === 'hi' ? '🧮 बिल कैलकुलेटर' : '🧮 Bill Calculator'}
              </Link>
            </div>

            {/* Quick Stats Banner */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                <span className="block text-2xl font-black text-emerald-400">22</span>
                <span className="text-xs text-slate-300 font-medium">{t.hero.statsDistricts}</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                <span className="block text-2xl font-black text-sky-400">2</span>
                <span className="text-xs text-slate-300 font-medium">{t.hero.statsDiscoms}</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                <span className="block text-2xl font-black text-amber-400">1912</span>
                <span className="text-xs text-slate-300 font-medium">{t.hero.statsHelpline}</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                <span className="block text-2xl font-black text-rose-400">₹3,000+</span>
                <span className="text-xs text-slate-300 font-medium">{t.hero.statsSavings}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Discoms Architecture Explainer Section */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
              <Scale className="w-3.5 h-3.5" />
              {lang === 'hi' ? 'हरियाणा विद्युत विभाजन व्यवस्था' : 'Haryana Discom Architecture'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'उत्तर हरियाणा (UHBVN) बनाम दक्षिण हरियाणा (DHBVN)' : 'North Haryana (UHBVN) vs South Haryana (DHBVN)'}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === 'hi'
                ? 'हरियाणा सरकार ने बिजली आपूर्ति को दो स्वतंत्र निगमों में विभाजित किया है। दोनों की वेबसाइट, बिलिंग पोर्टल और सर्कल कार्यालय अलग-अलग हैं।'
                : 'The Haryana Government bifurcated power distribution into two autonomous discoms. Each maintains distinct billing servers, web portals, and circle jurisdiction.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* UHBVN Card */}
            <div className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/50 via-white to-white p-6 sm:p-8 relative shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-lg bg-emerald-700 text-white font-black text-xs uppercase tracking-wider">
                  UHBVN • {lang === 'hi' ? 'उत्तर हरियाणा' : 'North Zone'}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {lang === 'hi' ? '11 जिले शामिल' : '11 Districts'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {lang === 'hi' ? 'उत्तर हरियाणा बिजली वितरण निगम' : 'Uttar Haryana Bijli Vitran Nigam'}
              </h3>

              <div className="mt-4 space-y-2 text-xs text-slate-600">
                <p>
                  <strong className="text-slate-900 font-semibold">{lang === 'hi' ? 'मुख्यालय:' : 'Headquarters:'}</strong> Shakti Bhawan, Sector 6, Panchkula
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">{lang === 'hi' ? 'कवर किए गए 11 जिले:' : 'Covered Districts:'}</strong>
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {uhbvnDistricts.map(d => (
                    <Link
                      key={d.id}
                      to={`/districts/${d.id}`}
                      className="px-2.5 py-1 bg-white border border-emerald-200 rounded-md text-slate-700 font-medium hover:border-emerald-500 hover:text-emerald-800 transition-colors"
                    >
                      {lang === 'hi' ? d.nameHi : d.nameEn}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={OFFICIAL_LINKS.uhbvn.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
                >
                  <span>{lang === 'hi' ? 'आधिकारिक UHBVN पोर्टल' : 'Official UHBVN Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/discom-finder"
                  className="px-3.5 py-1.5 bg-emerald-700 text-white rounded-lg text-xs font-bold hover:bg-emerald-800 transition-colors"
                >
                  {lang === 'hi' ? 'बिल व निगम जांचें' : 'Check UHBVN Bill'}
                </Link>
              </div>
            </div>

            {/* DHBVN Card */}
            <div className="rounded-2xl border-2 border-sky-200 bg-gradient-to-br from-sky-50/50 via-white to-white p-6 sm:p-8 relative shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-lg bg-sky-700 text-white font-black text-xs uppercase tracking-wider">
                  DHBVN • {lang === 'hi' ? 'दक्षिण हरियाणा' : 'South Zone'}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {lang === 'hi' ? '11 जिले शामिल' : '11 Districts'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {lang === 'hi' ? 'दक्षिण हरियाणा बिजली वितरण निगम' : 'Dakshin Haryana Bijli Vitran Nigam'}
              </h3>

              <div className="mt-4 space-y-2 text-xs text-slate-600">
                <p>
                  <strong className="text-slate-900 font-semibold">{lang === 'hi' ? 'मुख्यालय:' : 'Headquarters:'}</strong> Vidyut Sadan, Vidyut Nagar, Hisar & Gurugram Zonal Office
                </p>
                <p>
                  <strong className="text-slate-900 font-semibold">{lang === 'hi' ? 'कवर किए गए 11 जिले:' : 'Covered Districts:'}</strong>
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {dhbvnDistricts.map(d => (
                    <Link
                      key={d.id}
                      to={`/districts/${d.id}`}
                      className="px-2.5 py-1 bg-white border border-sky-200 rounded-md text-slate-700 font-medium hover:border-sky-500 hover:text-sky-800 transition-colors"
                    >
                      {lang === 'hi' ? d.nameHi : d.nameEn}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-100 flex flex-wrap items-center justify-between gap-2">
                <a
                  href={OFFICIAL_LINKS.dhbvn.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950"
                >
                  <span>{lang === 'hi' ? 'आधिकारिक DHBVN पोर्टल' : 'Official DHBVN Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/discom-finder"
                  className="px-3.5 py-1.5 bg-sky-700 text-white rounded-lg text-xs font-bold hover:bg-sky-800 transition-colors"
                >
                  {lang === 'hi' ? 'बिल व निगम जांचें' : 'Check DHBVN Bill'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Knowledge Base & Citizen Guides (Prominent & High Priority) */}
      <section className="py-14 bg-gradient-to-b from-slate-100/90 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                {lang === 'hi' ? '22+ आधिकारिक उपभोक्ता गाइड्स' : '22+ Statutory Citizen Guides'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {lang === 'hi' ? 'हरियाणा बिजली ज्ञान केंद्र (सत्यापित नियम व समाधान)' : 'Haryana Electricity Knowledge Base & Legal Guides'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {lang === 'hi'
                  ? 'ACD चार्ज, FSA, मीटर जलने, सोलर सब्सिडी, लोड पेनल्टी व कानूनी अधिकारों पर HERC विनियमों पर आधारित प्रामाणिक विश्लेषण।'
                  : 'Deep-dive analysis on ACD deposits, fuel adjustments, burnt meters, rooftop solar, load enhancement, and Section 135 theft notices.'}
              </p>
            </div>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm shrink-0"
            >
              <span>{lang === 'hi' ? 'सभी 22 गाइड्स देखें' : 'Browse All 22 Guides'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES_DATA.slice(0, 6).map((art) => (
              <div
                key={art.slug}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-lg hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                      {lang === 'hi' ? art.categoryLabelHi : art.categoryLabelEn}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {art.readTimeMinutes} {lang === 'hi' ? 'मिनट' : 'min read'}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2 leading-snug">
                    <Link to={`/articles/${art.slug}`}>
                      {lang === 'hi' ? art.titleHi : art.titleEn}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {lang === 'hi' ? art.shortDescHi : art.shortDescEn}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {lang === 'hi' ? 'HERC नियम सत्यापित' : 'HERC Rule Verified'}
                  </span>
                  <Link
                    to={`/articles/${art.slug}`}
                    className="text-xs font-bold text-emerald-600 group-hover:text-emerald-700 inline-flex items-center gap-1"
                  >
                    <span>{lang === 'hi' ? 'पढ़ें' : 'Read'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Pillar Functional Modules Grid */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-2">
              <Zap className="w-3.5 h-3.5" />
              {lang === 'hi' ? 'उपभोक्ता सहायता केंद्र' : 'Core Citizen Utilities'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'बिजली समस्याओं के सटीक समाधान' : 'Practical Tools & Verified Step-by-Step Guides'}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === 'hi'
                ? 'नया मीटर लगवाना हो, पुराने मकान का नाम बदलना हो, बिल का हिसाब लगाना हो या 1912 पर कटौती सुलझानी हो — सब कुछ एक स्थान पर।'
                : 'From identifying your true Discom to estimating initial security deposits and escalating outages to CGRF forums.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tool 1: Discom Finder */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '1. मेरा कौन सा निगम है? (डिस्कॉम फाइंडर)' : '1. Which Discom is Mine? (Finder & Bill Check)'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'पिन कोड, जिला या खाता संख्या से पता लगाएं कि आपका घर UHBVN में है या DHBVN में, और सीधे सही पेमेंट गेटवे पर जाएं।'
                    : 'Stop guessing from your neighbors bill. Instant verification via PIN code, district, or account prefix with genuine payment gateway links.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/discom-finder"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
                >
                  <span>{lang === 'hi' ? 'निगम खोजें व बिल देखें' : 'Open Discom Finder'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 2: New Connection Guide */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '2. नया कनेक्शन व अग्रिम शुल्क कैलकुलेटर' : '2. New Connection Walkthrough & Fee Estimator'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'परिवार पहचान पत्र (PPP), वायरिंग टेस्ट रिपोर्ट और HERC नियमों के अनुसार एडवांस खपत जमा (ACD) व सर्विस चार्ज (SCC) का सटीक हिसाब।'
                    : 'Mandatory PPP Family ID checklist, site test report requirements, and interactive ACD + SCC + Meter fee estimator per HERC norms.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/new-connection"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950"
                >
                  <span>{lang === 'hi' ? 'नया कनेक्शन गाइड व खर्च' : 'Estimate New Meter Fees'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 3: Name Transfer vs New */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '3. नाम ट्रांसफर बनाम नया कनेक्शन (पैसे बचाएं)' : '3. Name Transfer vs New (Save ₹3,000+)'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'नया मकान या दुकान खरीदने पर नया कनेक्शन लेने के बजाय नाम परिवर्तन (Change of Name) कराएं और हजारों रुपये की बचत करें।'
                    : 'Understand why a fresh connection wastes thousands in SCC charges when a simple Name Transfer transfers existing load with indemnity bond.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/name-transfer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
                >
                  <span>{lang === 'hi' ? 'नाम ट्रांसफर गाइड व बांड प्रारूप' : 'View Transfer Guide & Bond'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 4: 1912 Outage & Grievance */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '4. 1912 हेल्पलाइन व 4-स्तरीय CGRF फोरम' : '4. 1912 Outage & 4-Tier CGRF Grievance'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'व्हाट्सएप चैटबॉट, 1912 हेल्पलाइन और यदि अधिकारी न सुनें तो सर्कल फोरम व विद्युत लोकपाल में अपील की संपूर्ण विधिक प्रक्रिया।'
                    : 'Official WhatsApp bots, SMS outage triggers, and escalation to Circle CGRF and Electricity Ombudsman Haryana with statutory compensation rates.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/grievance-1912"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 hover:text-rose-950"
                >
                  <span>{lang === 'hi' ? 'शिकायत निवारण गाइड देखें' : 'View Redressal Escalation'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 5: Domestic Tariff Calculator */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '5. घरेलू बिजली टैरिफ व स्लैब कैलकुलेटर' : '5. HERC Domestic Slab Bill Calculator'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'HERC की नवीनतम स्लैब दरों पर अपनी यूनिट खपत और लोड डालकर ऊर्जा शुल्क, फिक्स्ड चार्ज, FSA, ED व MT का विस्तृत विवरण जानें।'
                    : 'Telescopic slab breakdown for Category I, II, and III, FSA, Electricity Duty, Municipal Tax, and 5% smart meter prepaid rebate.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/bill-calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-800 hover:text-purple-950"
                >
                  <span>{lang === 'hi' ? 'बिल कैलकुलेटर खोलें' : 'Open Bill Calculator'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 6: 22 Districts Directory */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '6. हरियाणा के 22 जिलों की बिजली डायरेक्टरी' : '6. Haryana 22 Districts Directory'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'गुरुग्राम, फरीदाबाद, पंचकूला, अम्बाला, करनाल से लेकर सिरसा तक — सभी जिलों के सर्कल कार्यालय, फोन नंबर और सब-डिवीजन।'
                    : 'Dedicated landing pages for every district with circle offices, localized subdivisions, phone helplines, and direct bill gateways.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/districts"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950"
                >
                  <span>{lang === 'hi' ? 'सभी 22 जिले देखें' : 'Explore All 22 Districts'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 7: Rooftop Solar & Haryana State Subsidy */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-amber-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '7. पीएम सूर्य घर व हरियाणा टॉप-अप सब्सिडी' : '7. PM Surya Ghar & Haryana State Top-Up'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'केंद्र सरकार की ₹78,000 सब्सिडी के अलावा हरियाणा परिवार पहचान पत्र (PPP) धारकों को ₹50,000 की अतिरिक्त राज्य सब्सिडी से 100% फ्री 2 kW सोलर का लाभ।'
                    : 'Calculate PM Surya Ghar central grant + Haryana PPP state top-up subsidy, net consumer cost, annual bill savings, and net metering procedure.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/solar-calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
                >
                  <span>{lang === 'hi' ? 'सोलर सब्सिडी कैलकुलेटर' : 'Open Solar Calculator'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 8: High Bill & Meter Error Dispute Resolver */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-rose-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '8. गलत बिजली बिल व रिमार्क समाधान' : '8. High Bill & Faulty Meter Dispute'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'बिल पर DEF, M, RN, NV कोड का अर्थ समझें। HERC रेगुलेशन 61 के तहत मनमानी औसत बिलिंग रोकें और SDO को देने हेतु विधिक आवेदन पत्र बनाएं।'
                    : 'Decode bill status codes, understand statutory protections against arbitrary average billing, and generate ready SDO dispute applications.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/bill-dispute"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 hover:text-rose-950"
                >
                  <span>{lang === 'hi' ? 'बिल समाधान व SDO पत्र' : 'Resolve Dispute & SDO Letter'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 9: Failed Payment & Double Debit Refund Resolver */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-sky-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '9. पेमेंट फेल व दोहरा भुगतान रिफंड' : '9. Failed Payment & Double Debit Refund'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'बैंक से पैसे कट गए पर रसीद नहीं बनी? UHBVN/DHBVN के 48-घंटे के ऑटो-सेटलमेंट नियम, डायरेक्ट स्टेटस लिंक व IT ईमेल ड्राफ्ट।'
                    : 'Bank debited but bill unpaid? Track gateway transaction status, understand RBI T+2 reconciliation, advance credit adjustments, and IT helpdesk emails.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/payment-help"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950"
                >
                  <span>{lang === 'hi' ? 'पेमेंट सहायता व स्टेटस' : 'Payment Help & Status'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 10: Smart Meter Guide & 5% Rebate */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-indigo-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '10. स्मार्ट मीटर गाइड व 5% छूट' : '10. Smart Meter & 5% Rebate Hub'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'दैनिक बैलेंस कटौती कैलकुलेटर, CAL/PUSH/TAMPER लाइट डिकोडर, रात में बिजली कटने से बचाव के HERC नियम व 15 मिनट ऑटो री-कनेक्शन।'
                    : 'Calculate daily prepaid deductions, decode CAL/PUSH/TAMPER LED lights, understand HERC night disconnection bans, and get 5% tariff discounts.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/smart-meter"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-800 hover:text-indigo-950"
                >
                  <span>{lang === 'hi' ? 'स्मार्ट मीटर सहायक खोलें' : 'Open Smart Meter Hub'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 11: Household Load Calculator & MDI Penalty */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-amber-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '11. घरेलू लोड कैलकुलेटर (MDI जुर्माना सुरक्षा)' : '11. Load Calculator & MDI Penalty Saver'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'एसी, गीजर, मोटर के अनुसार सही kW लोड निकालें। लोड कम होने पर ₹120/kW तक की MDI पेनल्टी से बचें और सरल पोर्टल पर लोड बढ़ाने का खर्च जानें।'
                    : 'Interactive household appliance wattage calculator. Avoid MDI peak penalty surcharges, check 3-phase rules (>5 kW), and estimate official ACD extension fees.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/load-calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
                >
                  <span>{lang === 'hi' ? 'लोड कैलकुलेटर खोलें' : 'Open Load Calculator'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 12: WhatsApp Chatbot & Trust Billing */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-emerald-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '12. व्हाट्सएप चैटबॉट व खुद रीडिंग (Trust Billing)' : '12. WhatsApp Chatbot & Trust Billing'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'UHBVN (+91 98159-61912) व DHBVN (+91 88139-97080) के आधिकारिक बॉट पर खुद मीटर फोटो भेजें और गलत औसत/NV बिलों से बचें।'
                    : '1-click connect to official UHBVN and DHBVN WhatsApp services, submit self meter readings (Trust Billing) before cycle cutoff, and get PDF bills.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/trust-billing"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
                >
                  <span>{lang === 'hi' ? 'व्हाट्सएप व ट्रस्ट बिलिंग' : 'Open WhatsApp Hub'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 13: Bill Sanity Checker & Mathematical Audit */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-emerald-600">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '13. बिल सेनिटी चेकर (ओवरबिलिंग ऑडिट)' : '13. Bill Sanity Checker & Audit'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'मीटर की पिछली और वर्तमान रीडिंग डालकर 1 मिनट में जांचें कि बिल HERC स्लैब अनुसार सही है या आपसे अधिक चार्ज वसूला गया है।'
                    : 'Enter meter readings and bill total to audit mathematical accuracy against HERC tariffs. Flags hidden ACD, arrears, and wrong multipliers.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/bill-sanity-checker"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
                >
                  <span>{lang === 'hi' ? 'बिल की शुद्धता जांचें' : 'Audit Your Bill'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 14: Statutory SDO Complaint Notice Generator */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-rose-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '14. विधिक शिकायत पत्र जनरेटर (SDO नोटिस)' : '14. Statutory SDO Complaint Generator'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'गलत बिल, जले मीटर, लो वोल्टेज व कनेक्शन देरी पर HERC विनियम 61 अनुसार तैयार विधिक आवेदन पत्र प्रिंट करें और रिसीविंग डायरी नंबर लें।'
                    : 'Generate ready-to-print formal legal notices to the SDO/XEN under HERC Consumer Redressal Regulations. Complete with diary receiving guidelines.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/complaint-generator"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 hover:text-rose-950"
                >
                  <span>{lang === 'hi' ? 'आवेदन पत्र तैयार करें' : 'Generate SDO Notice'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 15: Bill Terms & Surcharges Glossary */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-sky-500">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '15. बिल शब्दावली डिकोडर (ACD, FSA, MDI)' : '15. Bill Terms & Surcharges Glossary'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'समझें बिल के हर लाइन आइटम का अर्थ: ACD क्या है, FSA क्यों बढ़ता है, DEF/RN रिमार्क का क्या असर होता है, और CGRF अदालत के अधिकार।'
                    : 'Demystify every surcharge: Advance Consumption Deposit, Fuel Surcharge Adjustment, Maximum Demand Indicator, DEF codes, and CGRF rights.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/bill-glossary"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950"
                >
                  <span>{lang === 'hi' ? 'शब्दावली डिकोडर खोलें' : 'Open Bill Glossary'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 16: ACD Security Interest & 18% Penal Rate */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-emerald-600">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Percent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '16. ACD सिक्योरिटी ब्याज व 18% जुर्माना कैलकुलेटर' : '16. ACD Security Interest & 18% Penal Calculator'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'HERC विनियम 5.7 के अनुसार जमा सिक्योरिटी पर 6.75% वार्षिक ब्याज व अप्रैल/मई बिल में न मिलने पर 18% दंडात्मक ब्याज का तुरंत हिसाब निकालें और SDO क्लेम लेटर बनाएं।'
                    : 'Calculate statutory 6.75% annual interest on UHBVN/DHBVN consumption security deposits, plus 18% penal interest for delayed credit under HERC Supply Code Reg 5.7.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/acd-calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950"
                >
                  <span>{lang === 'hi' ? 'ACD ब्याज कैलकुलेटर खोलें' : 'Open ACD Interest Tool'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 17: Right to Service (RTS) Delay Compensation */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-rose-600">
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '17. राइट टू सर्विस (RTS) मुआवजा कैलकुलेटर' : '17. RTS Delay Compensation & Auto-Appeal'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'ट्रांसफॉर्मर जलने, कट, गलत औसत बिलिंग या नए कनेक्शन में देरी पर हरियाणा राइट टू सर्विस एक्ट के तहत मिलने वाले ₹5,000 तक के कानूनी मुआवजे का हिसाब लगाएं।'
                    : 'Statutory compensation calculator for burnt transformers (24/48 hrs), prolonged average bills (₹500/cycle), and power cut delays under the Haryana Right to Service Act.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/rts-compensation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 hover:text-rose-950"
                >
                  <span>{lang === 'hi' ? 'मुआवजा कैलकुलेटर खोलें' : 'Open RTS Compensation Tool'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 18: Surcharge Waiver Scheme & OTS Calculator */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-amber-600">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '18. सरचार्ज (ब्याज) माफी योजना व किस्त कैलकुलेटर' : '18. Surcharge Waiver Scheme & Installment Planner'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? 'पुराने बिजली बिलों पर 100% सरचार्ज (LPSC) छूट, एकमुश्त भुगतान पर 5% अतिरिक्त मूल छूट और आसान ब्याज-मुक्त किस्तों का हिसाब लगाएं व SDO आवेदन जनरेट करें।'
                    : 'Calculate 100% surcharge write-off on pending electricity bills, 5% lump-sum principal rebate, and interest-free installment schedules under UHBVN/DHBVN scheme.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/surcharge-waiver"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
                >
                  <span>{lang === 'hi' ? 'सरचार्ज माफी कैलकुलेटर' : 'Open Surcharge Waiver Tool'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Tool 19: Direct Quick Pay & Helpline Directory */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all border-t-4 border-t-sky-600">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? '19. त्वरित बिजली बिल भुगतान व व्हाट्सएप चैटबॉट' : '19. Direct Quick Pay & Official Helplines'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi'
                    ? '10-अंकों के खाता संख्या से सीधे आधिकारिक UHBVN/DHBVN पोर्टल पर 0% शुल्क बिल भरें। आधिकारिक व्हाट्सएप बॉट (9815961912 / 8813999708) व मिस्ड कॉल सेवा।'
                    : 'Instant official portal redirect by 10-digit account number with 0% extra convenience charge. Verified WhatsApp chatbots and missed call emergency helplines.'}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/quick-pay"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950"
                >
                  <span>{lang === 'hi' ? 'क्विक पे व हेल्पलाइन डायरेक्टरी' : 'Open Quick Pay Hub'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERC Statutory Highlights Bulletin */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
            <div className="max-w-3xl">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 uppercase tracking-wider">
                {lang === 'hi' ? 'HERC आधिकारिक टैरिफ बुलेटिन' : 'HERC Statutory Tariff Order'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-3">
                {lang === 'hi' 
                  ? 'हरियाणा विद्युत विनियामक आयोग (HERC) नवीनतम मानक'
                  : 'Haryana Electricity Regulatory Commission (HERC) Verified Facts'}
              </h3>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm leading-relaxed">
                {lang === 'hi'
                  ? 'हरियाणा में बिजली दरें और सेवा स्तर HERC द्वारा तय किए जाते हैं। उपभोक्ताओं को मिलने वाले प्रमुख विधिक अधिकार:'
                  : 'Power tariffs and consumer protections are statutorily determined by HERC. Key entitlements every consumer should know:'}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'श्रेणी 1 लाइफलाइन' : 'Category-I Lifeline'}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {lang === 'hi' 
                    ? 'लोड ≤ 2 kW व मासिक खपत ≤ 100 यूनिट पर ₹2.20/यूनिट की सब्सिडी दर। कोई न्यूनतम मासिक शुल्क (MMC) नहीं।'
                    : 'Subsidized rate of ₹2.20/unit for first 50 units (Load ≤ 2 kW). Monthly Minimum Charges (MMC) abolished.'}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'स्मार्ट मीटर 5% छूट' : 'Prepaid 5% Rebate'}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {lang === 'hi'
                    ? 'प्रीपेड स्मार्ट मीटर चुनने वाले उपभोक्ताओं को ऊर्जा व फिक्स्ड चार्ज पर 5% की सीधी छूट और ACD से छूट।'
                    : '5% rebate on energy & fixed charges for consumers opting for prepaid smart meters, plus zero ACD deposit.'}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'hi' ? '4-स्तरीय फोरम' : '4-Tier Grievance'}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {lang === 'hi'
                    ? 'एसडीओ स्तर से लेकर सर्कल CGRF, कॉर्पोरेट फोरम और पंचकूला स्थित विद्युत लोकपाल तक अपील की सांविधिक व्यवस्था।'
                    : 'Statutory 4-tier redressal from Sub-Division IGRC to Circle CGRF, Corporate Forum, and State Ombudsman.'}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'गारंटीड मुआवजा' : 'Delay Penalty'}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {lang === 'hi'
                    ? 'बिजली बहाली या मीटर बदलने में देरी पर निगम पर ₹50 से ₹100 प्रतिदिन उपभोक्ता मुआवजे का कड़ा नियम।'
                    : 'HERC SOP mandates ₹50 to ₹100/day compensation payable to consumers for unwarranted restoration delays.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection lang={lang} />
    </div>
  );
};
