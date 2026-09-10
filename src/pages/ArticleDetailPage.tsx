import React, { useState } from 'react';
import { Language } from '../types';
import { ARTICLES_DATA } from '../data/articlesData';
import { Link } from '../router/RouterContext';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { 
  Clock, Calendar, Share2, Check, ArrowLeft, ArrowRight,
  ShieldCheck, AlertTriangle, Lightbulb, Scale, HelpCircle,
  BookOpen, ChevronDown, ChevronUp, Wrench, ExternalLink
} from 'lucide-react';

interface Props {
  slug: string;
  lang: Language;
}

export function ArticleDetailPage({ slug, lang }: Props) {
  const [copied, setCopied] = useState(false);
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]); // first FAQ open by default

  const article = ARTICLES_DATA.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            {lang === 'hi' ? 'लेख नहीं मिला' : 'Guide Not Found'}
          </h1>
          <p className="text-slate-600 text-sm mb-6">
            {lang === 'hi'
              ? 'यह लेख मौजूद नहीं है या इसका वेब पता बदल गया है।'
              : 'The requested guide does not exist or has been moved.'}
          </p>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'hi' ? 'सभी लेख देखें' : 'Browse All Guides'}
          </Link>
        </div>
      </div>
    );
  }

  const title = lang === 'hi' ? article.titleHi : article.titleEn;
  const shortDesc = lang === 'hi' ? article.shortDescHi : article.shortDescEn;

  // JSON-LD Schema for Google Rich Results
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://haryanabijliseva.in/articles/${article.slug}`
    },
    headline: title,
    description: shortDesc,
    author: {
      '@type': 'Organization',
      name: 'Haryana Bijli Seva Editorial Board',
      url: 'https://haryanabijliseva.in'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Haryana Bijli Seva',
      logo: {
        '@type': 'ImageObject',
        url: 'https://haryanabijliseva.in/icon-512.png'
      }
    },
    datePublished: '2024-04-01T08:00:00+05:30',
    dateModified: '2025-01-15T10:00:00+05:30'
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: lang === 'hi' ? faq.qHi : faq.qEn,
      acceptedAnswer: {
        '@type': 'Answer',
        text: lang === 'hi' ? faq.aHi : faq.aEn
      }
    }))
  };

  const relatedArticles = ARTICLES_DATA
    .filter((a) => a.slug !== article.slug && (a.category === article.category || Math.random() > 0.5))
    .slice(0, 3);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const articleKeywords = [
    article.searchDemand.primaryKeywordHi,
    article.searchDemand.primaryKeywordEn,
    ...article.searchDemand.secondaryKeywords
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <SeoHead
        title={`${title} | Haryana Bijli Seva`}
        description={shortDesc}
        path={`/articles/${article.slug}`}
        schema={[articleSchema, faqSchema]}
        keywords={articleKeywords}
      />

      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'होम' : 'Home', path: '/' },
            { label: lang === 'hi' ? 'ज्ञान केंद्र' : 'Knowledge Base', path: '/articles' },
            { label: title }
          ]}
        />

        {/* Back Link */}
        <div className="mt-4 mb-6">
          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'hi' ? 'सभी लेखों पर वापस जाएं' : 'Back to All Guides'}
          </Link>
        </div>

        {/* Main Article Container */}
        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 mb-10">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100">
              {lang === 'hi' ? article.categoryLabelHi : article.categoryLabelEn}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              {article.readTimeMinutes} {lang === 'hi' ? 'मिनट का समय' : 'min read'}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              {article.lastUpdated}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
            {title}
          </h1>

          {/* Lead Paragraph */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal border-l-4 border-emerald-500 pl-4 bg-emerald-50/40 py-2 rounded-r-xl">
            {shortDesc}
          </p>

          {/* Statutory Verification & Share Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 mb-8 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium text-emerald-900">
                {lang === 'hi' 
                  ? 'हरियाणा विद्युत विनियामक आयोग (HERC) विनियमों व निगम आदेशों से सत्यापित' 
                  : 'Verified based on statutory HERC regulations & Discom official circulars'}
              </span>
            </div>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors font-medium cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">{lang === 'hi' ? 'लिंक कॉपी हो गया!' : 'Link Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{lang === 'hi' ? 'शेयर करें' : 'Share Guide'}</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Tool Banner if relevant */}
          {article.relatedTool && (
            <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1">
                  <Wrench className="w-4 h-4" />
                  {lang === 'hi' ? 'संबंधित ऑनलाइन टूल' : 'Recommended Interactive Tool'}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900">
                  {lang === 'hi' ? article.relatedTool.labelHi : article.relatedTool.labelEn}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  {lang === 'hi' ? article.relatedTool.descHi : article.relatedTool.descEn}
                </p>
              </div>
              <Link
                to={article.relatedTool.path}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>{lang === 'hi' ? 'टूल का उपयोग करें' : 'Open Tool'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Official Gazette / Order Reference if present */}
          {article.officialReference && (
            <div className="mb-8 p-4 rounded-2xl bg-slate-100/90 border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-bold text-slate-900">{lang === 'hi' ? 'आधिकारिक आदेश संदर्भ:' : 'Official Order Reference:'}</span>{' '}
                <span className="font-mono text-slate-800">{article.officialReference.circularNo}</span> ({article.officialReference.authority})
              </div>
              {article.officialReference.downloadUrl && (
                <a
                  href={article.officialReference.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-900 font-bold inline-flex items-center gap-1 shrink-0"
                >
                  <span>{lang === 'hi' ? 'सरकारी पोर्टल / आदेश देखें' : 'Visit Official Discom Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}

          {/* Content Sections */}
          <div className="space-y-8 text-slate-800">
            {article.sections.map((section, sIdx) => {
              const secHeading = lang === 'hi' ? section.headingHi : section.headingEn;
              const secContent = lang === 'hi' ? section.contentHi : section.contentEn;

              return (
                <section key={sIdx} className="scroll-mt-6">
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                    {secHeading}
                  </h2>
                  <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
                    {secContent.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Bullet Points if present */}
                  {((lang === 'hi' ? section.bulletPointsHi : section.bulletPointsEn) || []).length > 0 && (
                    <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-slate-700 my-3">
                      {(lang === 'hi' ? section.bulletPointsHi : section.bulletPointsEn)!.map((bp, bpIdx) => (
                        <li key={bpIdx}>{bp}</li>
                      ))}
                    </ul>
                  )}

                  {/* Section Callout Box if present */}
                  {section.callout && (
                    <div
                      className={`mt-4 p-4 rounded-2xl border flex items-start gap-3 text-xs sm:text-sm ${
                        section.callout.type === 'warning'
                          ? 'bg-amber-50 border-amber-200 text-amber-900'
                          : section.callout.type === 'statute'
                          ? 'bg-purple-50 border-purple-200 text-purple-900'
                          : 'bg-blue-50 border-blue-200 text-blue-900'
                      }`}
                    >
                      {section.callout.type === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      ) : section.callout.type === 'statute' ? (
                        <Scale className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                      ) : (
                        <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <strong className="font-semibold block mb-0.5">
                          {section.callout.type === 'statute'
                            ? (lang === 'hi' ? 'कानूनी नियम:' : 'Statutory Rule:')
                            : section.callout.type === 'warning'
                            ? (lang === 'hi' ? 'महत्वपूर्ण चेतावनी:' : 'Important Warning:')
                            : (lang === 'hi' ? 'उपयोगी सलाह:' : 'Helpful Tip:')}
                        </strong>
                        <p>{lang === 'hi' ? section.callout.textHi : section.callout.textEn}</p>
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* FAQs Section */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल (FAQs)' : 'Frequently Asked Questions'}
                </h3>
              </div>

              <div className="space-y-3">
                {article.faqs.map((faq, fIdx) => {
                  const isOpen = openFaqIndices.includes(fIdx);
                  const q = lang === 'hi' ? faq.qHi : faq.qEn;
                  const a = lang === 'hi' ? faq.aHi : faq.aEn;

                  return (
                    <div
                      key={fIdx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
                    >
                      <button
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full px-5 py-4 text-left font-semibold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-100/70 transition-colors"
                      >
                        <span>{q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 bg-white pt-3">
                          {a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Disclaimer Footer */}
          <div className="mt-10 p-4 rounded-2xl bg-slate-100/70 border border-slate-200 text-xs text-slate-500">
            <p>
              <strong>{lang === 'hi' ? 'सूचना: ' : 'Legal Disclaimer: '}</strong>
              {lang === 'hi'
                ? 'यह नागरिक गाइड केवल जन-जागरूकता के उद्देश्य से प्रकाशित की गई है। विशिष्ट विवादों में हरियाणा विद्युत विनियामक आयोग (HERC) के नवीनतम विनियम और संबंधित डिस्कॉम (UHBVN/DHBVN) के अधिकृत आदेश ही अंतिम रूप से मान्य होंगे।'
                : 'This citizen guide is published solely for educational and transparency purposes. For specific legal proceedings or adjudication, official HERC gazette notifications and Discom circulars take precedence.'}
            </p>
          </div>
        </article>

        {/* Related Articles Section */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            {lang === 'hi' ? 'संबंधित अन्य महत्वपूर्ण गाइड्स' : 'More Helpful Guides for Haryana Consumers'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider block mb-1">
                    {lang === 'hi' ? rel.categoryLabelHi : rel.categoryLabelEn}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm mb-2 line-clamp-2">
                    <Link to={`/articles/${rel.slug}`} className="hover:text-emerald-600 transition-colors">
                      {lang === 'hi' ? rel.titleHi : rel.titleEn}
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                    {lang === 'hi' ? rel.shortDescHi : rel.shortDescEn}
                  </p>
                </div>
                <Link
                  to={`/articles/${rel.slug}`}
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
                >
                  <span>{lang === 'hi' ? 'पढ़ें' : 'Read guide'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
