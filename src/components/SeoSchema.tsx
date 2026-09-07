import React, { useEffect } from 'react';
import { TRANSLATIONS } from '../data/translations';
import { Language } from '../types';

interface Props {
  lang: Language;
}

export const SeoSchema: React.FC<Props> = ({ lang }) => {
  useEffect(() => {
    const t = TRANSLATIONS[lang];

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Haryana Bijli Seva',
      'alternateName': 'हरियाणा बिजली सेवा (UHBVN & DHBVN Hub)',
      'url': window.location.origin,
      'description':
        'Bilingual Haryana electricity portal for UHBVN and DHBVN: Discom lookup, bill payment directory, new connection estimator, name transfer guide, and 1912 grievance redressal.',
      'inLanguage': [lang === 'hi' ? 'hi-IN' : 'en-IN']
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': t.faq.items.map((item) => ({
        '@type': 'Question',
        'name': item.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.a
        }
      }))
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': `${window.location.origin}/`
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Which Discom is Mine?',
          'item': `${window.location.origin}/#discom-finder`
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'New Connection Guide & Estimator',
          'item': `${window.location.origin}/#new-connection`
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'Name Transfer vs New Connection',
          'item': `${window.location.origin}/#name-transfer`
        },
        {
          '@type': 'ListItem',
          'position': 5,
          'name': '1912 Grievance Redressal',
          'item': `${window.location.origin}/#outage-1912`
        },
        {
          '@type': 'ListItem',
          'position': 6,
          'name': 'Domestic Tariff Calculator',
          'item': `${window.location.origin}/#bill-calculator`
        }
      ]
    };

    // Remove existing schema scripts if any
    const existingScript = document.getElementById('jsonld-seo');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'jsonld-seo';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify([websiteSchema, faqSchema, breadcrumbSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('jsonld-seo');
      if (el) el.remove();
    };
  }, [lang]);

  return null;
};
