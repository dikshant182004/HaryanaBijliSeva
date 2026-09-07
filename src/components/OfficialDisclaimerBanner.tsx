import React, { useState, useEffect } from 'react';
import { ShieldAlert, ExternalLink, X } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface Props {
  lang: Language;
}

export const OfficialDisclaimerBanner: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [dismissed, setDismissed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('haryana_advisory_dismissed') === 'true';
    } catch {
      return false;
    }
  });

  const handleDismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem('haryana_advisory_dismissed', 'true');
    } catch {
      // ignore in sandboxed environments
    }
  };

  if (dismissed) {
    return null;
  }

  return (
    <aside aria-label="Official Notice" className="bg-amber-500/10 border-b border-amber-300/40 text-amber-950 px-4 py-2 text-xs sm:text-sm transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2.5">
        <div className="flex items-start gap-2.5 pr-2 flex-1">
          <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed text-xs sm:text-sm">
            <span className="font-bold text-amber-900 uppercase tracking-wide mr-1.5">
              {lang === 'hi' ? 'महत्वपूर्ण सूचना:' : 'CITIZEN ADVISORY:'}
            </span>
            {t.disclaimerBanner}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0 self-end md:self-auto text-xs font-semibold">
          <a
            href="https://www.uhbvn.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-emerald-800 text-white px-2.5 py-1 rounded hover:bg-emerald-900 transition-colors shadow-xs text-xs"
          >
            UHBVN.org.in <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.dhbvn.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-sky-800 text-white px-2.5 py-1 rounded hover:bg-sky-900 transition-colors shadow-xs text-xs"
          >
            DHBVN.org.in <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={handleDismiss}
            aria-label={lang === 'hi' ? 'सूचना बंद करें' : 'Dismiss notice'}
            className="ml-1 p-1 rounded-md text-amber-900 hover:text-amber-950 hover:bg-amber-200/50 transition-colors cursor-pointer"
            title={lang === 'hi' ? 'सूचना बंद करें' : 'Dismiss Advisory'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
