import React, { useState, useMemo } from 'react';
import { Language, ArticleCategory } from '../types';
import { ARTICLES_DATA, ARTICLE_CATEGORIES } from '../data/articlesData';
import { Link } from '../router/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Search, BookOpen, Clock, TrendingUp, Sparkles, 
  ArrowRight, ShieldCheck, HelpCircle, FileText, 
  CheckCircle2, Zap, Scale, Cpu, Sun, CreditCard
} from 'lucide-react';

interface Props {
  lang: Language;
}

const CATEGORY_ICONS: Record<ArticleCategory, React.ComponentType<{ className?: string }>> = {
  billing: FileText,
  meter: Cpu,
  connections: Zap,
  legal: Scale,
  schemes: Sun,
  payments: CreditCard
};

export function ArticlesDirectoryPage({ lang }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const title = (lang === 'hi' ? article.titleHi : article.titleEn).toLowerCase();
      const desc = (lang === 'hi' ? article.shortDescHi : article.shortDescEn).toLowerCase();
      const altTitle = (lang === 'hi' ? article.titleEn : article.titleHi).toLowerCase();
      const keywords = article.searchDemand.secondaryKeywords.join(' ').toLowerCase();

      return title.includes(q) || desc.includes(q) || altTitle.includes(q) || keywords.includes(q);
    });
  }, [searchQuery, selectedCategory, lang]);

  // Structured Schema for Google Search
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: lang === 'hi' ? 'हरियाणा बिजली ज्ञान केंद्र व गाइड' : 'Haryana Electricity Knowledge Base & Citizen Guides',
    description: lang === 'hi' 
      ? 'UHBVN व DHBVN बिजली बिल, मीटर, नए कनेक्शन, सोलर सब्सिडी और कानूनी अधिकारों पर 22+ विस्तृत गाइड्स।'
      : '22+ verified guides on Haryana UHBVN & DHBVN electricity tariffs, ACD charges, meter testing, solar subsidies and legal rights.',
    hasPart: ARTICLES_DATA.map((a, idx) => ({
      '@type': 'Article',
      position: idx + 1,
      headline: lang === 'hi' ? a.titleHi : a.titleEn,
      url: `https://haryanabijliseva.in/articles/${a.slug}`,
      description: lang === 'hi' ? a.shortDescHi : a.shortDescEn
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title={lang === 'hi' 
          ? 'हरियाणा बिजली गाइड व ज्ञान केंद्र (22+ लेख) | UHBVN & DHBVN' 
          : 'Haryana Electricity Guides & Knowledge Base (22+ Articles) | UHBVN & DHBVN'}
        description={lang === 'hi'
          ? 'बिजली बिल में ACD चार्ज, FSA, खराब मीटर, नाम ट्रांसफर, सोलर सब्सिडी और धारा 135 नोटिस पर कानूनी व आधिकारिक गाइड्स।'
          : 'Verified citizen guides on Haryana electricity bill ACD charge, FSA rates, burnt meters, load enhancement, solar subsidies and CGRF complaints.'}
        path="/articles"
        schema={schema}
      />

      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'होम' : 'Home', path: '/' },
            { label: lang === 'hi' ? 'ज्ञान केंद्र व गाइड्स' : 'Guides & Knowledge Base' }
          ]}
        />

        {/* Hero Section */}
        <div className="mt-6 mb-10 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'hi' ? '22+ सत्यापित उपभोक्ता गाइड्स' : '22+ Verified Citizen Guides'}
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-4">
              {lang === 'hi' 
                ? 'हरियाणा बिजली ज्ञान केंद्र (सत्यापित नियम व समाधान)' 
                : 'Haryana Electricity Knowledge Base & Legal Guides'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              {lang === 'hi'
                ? 'ACD चार्ज, FSA, मीटर जलना, गलत बिलिंग, सोलर सब्सिडी और SDO विवादों पर HERC नियमों और इलेक्ट्रिसिटी एक्ट 2003 पर आधारित प्रामाणिक जानकारी।'
                : 'Clear, statutory answers based on HERC regulations and The Electricity Act 2003 for UHBVN & DHBVN consumers across all 22 districts.'}
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'hi' 
                  ? 'खोजें: ACD चार्ज, मीटर जल गया, लोड बढ़ाना, सोलर सब्सिडी, नाम ट्रांसफर...' 
                  : 'Search: ACD charge, burnt meter, load extension, solar subsidy, D-code...'}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:bg-white/15 transition-all text-sm sm:text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            {lang === 'hi' ? 'सभी 22 लेख' : 'All 22 Articles'}
            <span className="ml-1 text-xs opacity-75">({ARTICLES_DATA.length})</span>
          </button>

          {ARTICLE_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id];
            const count = ARTICLES_DATA.filter((a) => a.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {lang === 'hi' ? cat.labelHi : cat.labelEn}
                <span className="ml-1 text-xs opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Search Results Count */}
        <div className="flex items-center justify-between mb-6 text-xs sm:text-sm text-slate-500">
          <p>
            {lang === 'hi' 
              ? `${filteredArticles.length} उपयोगी गाइड्स उपलब्ध हैं` 
              : `Showing ${filteredArticles.length} consumer guides`}
          </p>
          <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'hi' ? 'HERC नियमों से सत्यापित' : 'Verified with HERC Orders'}</span>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              {lang === 'hi' ? 'कोई लेख नहीं मिला' : 'No articles matched your search'}
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
              {lang === 'hi'
                ? 'कृपया कोई अन्य शब्द खोजें जैसे "ACD", "मीटर", "सोलर", या ऊपर दिए गए श्रेणी बटन दबाएं।'
                : 'Try searching with keywords like "ACD", "meter", "solar", "tariff", or select a category tab above.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors"
            >
              {lang === 'hi' ? 'सभी लेख देखें' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => {
              const CategoryIcon = CATEGORY_ICONS[article.category];
              return (
                <article
                  key={article.slug}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Header meta */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
                        <CategoryIcon className="w-3.5 h-3.5" />
                        {lang === 'hi' ? article.categoryLabelHi : article.categoryLabelEn}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTimeMinutes} min read</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 mb-2 leading-snug">
                      <Link to={`/articles/${article.slug}`}>
                        {lang === 'hi' ? article.titleHi : article.titleEn}
                      </Link>
                    </h2>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4 flex-1">
                      {lang === 'hi' ? article.shortDescHi : article.shortDescEn}
                    </p>

                    {/* Official Verification Tag */}
                    <div className="bg-emerald-50/60 border border-emerald-100/80 rounded-xl p-2.5 mb-4 flex items-center justify-between text-xs text-emerald-900">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-[11px] text-emerald-800">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        {lang === 'hi' ? 'HERC विनियम व सर्कुलर अनुसार' : 'HERC Statutory Rules'}
                      </span>
                      <span className="text-[10px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-emerald-100">
                        {lang === 'hi' ? 'सत्यापित गाइड' : 'Verified'}
                      </span>
                    </div>

                    {/* Footer link */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        {lang === 'hi' ? 'पूरा लेख पढ़ें' : 'Read Full Guide'}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {article.lastUpdated}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Why Trust Section */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            {lang === 'hi' ? 'यह जानकारी विश्वसनीय क्यों है?' : 'Why Are These Guides Legally Accurate?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm">
                {lang === 'hi' ? 'इलेक्ट्रिसिटी एक्ट 2003' : 'The Electricity Act 2003'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'सभी अधिकार और प्रावधान संसद द्वारा पारित केंद्रीय विद्युत अधिनियम 2003 की धाराओं (जैसे धारा 56, 126, 135) पर आधारित हैं।'
                  : 'Every statutory consumer right is strictly referenced against Central legislative sections including Sections 56, 126, 135 and 142.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black mb-3">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm">
                {lang === 'hi' ? 'HERC सप्लाई कोड विनियम' : 'HERC Supply Code Regulations'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'हरियाणा विद्युत विनियामक आयोग (पंचकूला) द्वारा जारी नवीनतम वार्षिक टैरिफ ऑर्डर और सप्लाई कोड नियमों का शत-प्रतिशत पालन।'
                  : 'Audited against the latest annual tariff orders and consumer standards of performance notified by HERC Panchkula.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm">
                {lang === 'hi' ? 'UHBVN व DHBVN सेल्स सर्कुलर' : 'Official Sales Circulars'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'उत्तर हरियाणा और दक्षिण हरियाणा बिजली वितरण निगमों द्वारा जारी आधिकारिक सेल्स सर्कुलर और कमर्शियल निर्देशों के अनुरूप।'
                  : 'Directly aligned with official sales circulars, billing memos, and commercial instructions issued by both Discoms.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
