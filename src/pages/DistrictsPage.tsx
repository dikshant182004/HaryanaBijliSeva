import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DistrictDirectory } from '../components/DistrictDirectory';
import { MapPin, Building2, PhoneCall, ExternalLink, ArrowRight } from 'lucide-react';
import { HARYANA_DISTRICTS } from '../data/haryanaData';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

export const DistrictsPage: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const pageTitle = lang === 'hi'
    ? 'हरियाणा के सभी 22 जिलों की बिजली डायरेक्टरी: सर्कल कार्यालय, सब-डिवीजन व हेल्पलाइन'
    : 'Haryana Electricity Board Directory: All 22 Districts Circle Offices, Subdivisions & Helplines';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा के सभी 22 जिलों की संपूर्ण बिजली डायरेक्टरी: UHBVN (उत्तर) व DHBVN (दक्षिण) के सर्कल ऑफिस, अधीक्षण अभियंता (SE) संपर्क, सब-डिवीजन सूची और जिलेवार बिल भुगतान लिंक।'
    : 'Complete district directory for all 22 districts of Haryana. Circle offices for UHBVN and DHBVN, localized subdivisions, contact telephone numbers, and direct billing links.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home',
          item: 'https://haryana-bijli.gov.guide/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: lang === 'hi' ? '22 जिलों की डायरेक्टरी' : '22 Districts Directory',
          item: 'https://haryana-bijli.gov.guide/districts'
        }
      ]
    }
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/districts"
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'हरियाणा 22 जिले डायरेक्टरी' : '22 Districts Directory' }
          ]}
        />

        {/* District Directory Component */}
        <DistrictDirectory lang={lang} />

        {/* Quick Links Grid for All 22 District Dedicated Pages */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-extrabold text-slate-900">
              {lang === 'hi' ? 'प्रत्येक जिले का समर्पित बिजली पेज' : 'Dedicated Electricity Guide for Every District'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            {lang === 'hi'
              ? 'नीचे किसी भी जिले पर क्लिक करके उसका समर्पित पेज खोलें जिसमें सब-डिवीजन, सर्कल कार्यालय, बिल भुगतान व 1912 सहायता उपलब्ध है:'
              : 'Browse dedicated guide pages for localized circle contacts, customer service centers, and direct payment portals:'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {HARYANA_DISTRICTS.map((dist) => (
              <Link
                key={dist.id}
                to={`/districts/${dist.id}`}
                className="p-3 bg-slate-50 hover:bg-emerald-50 rounded-xl border border-slate-200 hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className={`text-[10px] font-black uppercase px-1.5 py-0.5 rounded ${dist.discom === 'UHBVN' ? 'bg-emerald-100 text-emerald-800' : 'bg-sky-100 text-sky-800'}`}>
                    {dist.discom}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 mt-2 group-hover:text-emerald-800">
                    {lang === 'hi' ? dist.nameHi : dist.nameEn}
                  </h4>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                  <span>{lang === 'hi' ? 'पेज देखें' : 'View Page'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
