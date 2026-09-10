import { useEffect } from 'react';
import { useRouter } from '../router/RouterContext';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  schema?: Record<string, any> | Record<string, any>[];
  ogType?: 'website' | 'article';
  keywords?: string[];
}

export function SeoHead({ title, description, path, schema, ogType = 'website', keywords }: SeoHeadProps) {
  const { language } = useRouter();


  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 0. Set HTML language attribute for search engines
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';

    // 1. Update Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Description & Open Graph
    setMetaTag('name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:locale', language === 'hi' ? 'hi_IN' : 'en_IN');
    setMetaTag('property', 'og:locale:alternate', language === 'hi' ? 'en_IN' : 'hi_IN');

    const origin = window.location.origin;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = `${origin}${cleanPath}`;
    setMetaTag('property', 'og:url', canonicalUrl);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // 3. Update Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update hreflang alternate links
    const setHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    setHreflang('en', `${origin}${cleanPath}?lang=en`);
    setHreflang('hi', `${origin}${cleanPath}?lang=hi`);
    setHreflang('x-default', `${origin}${cleanPath}`);

    // 5. Injected JSON-LD Structured Data
    const scriptId = 'json-ld-seo-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchemas: any[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Haryana Bijli Seva',
        alternateName: 'हरियाणा बिजली सेवा (UHBVN & DHBVN Consumer Portal)',
        url: origin,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${origin}/discom-finder?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        },
        inLanguage: ['en-IN', 'hi-IN']
      }
    ];

    const schemasToInject = schema 
      ? (Array.isArray(schema) ? [...defaultSchemas, ...schema] : [...defaultSchemas, schema])
      : defaultSchemas;

    scriptTag.textContent = JSON.stringify(schemasToInject);

    return () => {
      // Clean up script on unmount if needed
    };
  }, [title, description, path, schema, language, ogType, keywords]);

  return null;
}
