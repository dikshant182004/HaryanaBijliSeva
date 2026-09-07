import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language } from '../types';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const getInitialPath = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path && path !== '' ? path : '/';
    }
    return '/';
  };

  const getInitialLang = (): Language => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      if (langParam === 'hi' || langParam === 'en') {
        return langParam;
      }
      const stored = localStorage.getItem('haryana_bijli_lang');
      if (stored === 'hi' || stored === 'en') {
        return stored as Language;
      }
    }
    return 'en';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [language, setLanguageState] = useState<Language>(getInitialLang);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      if (langParam === 'hi' || langParam === 'en') {
        setLanguageState(langParam);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path: string) => {
    if (typeof window !== 'undefined') {
      // Build search params to preserve current language if set
      const url = new URL(path, window.location.origin);
      if (language === 'hi') {
        url.searchParams.set('lang', 'hi');
      }
      window.history.pushState({}, '', url.pathname + url.search);
      setCurrentPath(url.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('haryana_bijli_lang', lang);
      const url = new URL(window.location.href);
      if (lang === 'hi') {
        url.searchParams.set('lang', 'hi');
      } else {
        url.searchParams.delete('lang');
      }
      window.history.replaceState({}, '', url.pathname + url.search);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  }, [language, setLanguage]);

  return (
    <RouterContext.Provider value={{ currentPath, navigate, language, setLanguage, toggleLanguage }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children?: React.ReactNode;
  className?: string;
  activeClassName?: string;
  id?: string;
  key?: React.Key;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Link: React.FC<LinkProps> = ({ 
  to, 
  children, 
  className = '', 
  activeClassName = '', 
  id, 
  target, 
  onClick,
  ...rest 
}) => {
  const { currentPath, navigate, language } = useRouter();
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || target === '_blank') {
      return; // allow browser standard behavior
    }
    e.preventDefault();
    navigate(to);
  };

  const hrefWithLang = language === 'hi' ? `${to}?lang=hi` : to;

  return (
    <a
      id={id}
      href={hrefWithLang}
      target={target}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`}
      {...rest}
    >
      {children}
    </a>
  );
};
