import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { LAST_VERIFIED_DATE } from '../data/haryanaData';

interface Props {
  source?: string;
  date?: string;
  lang?: Language;
  className?: string;
}

export const LastVerifiedBadge: React.FC<Props> = ({
  source = 'HERC Regulations & DISCOM Orders',
  date = LAST_VERIFIED_DATE,
  lang = 'en',
  className = ''
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200/80 ${className}`}
      title={lang === 'hi' ? `विनियम सत्यापित स्रोत: ${source}` : `Regulatory verification source: ${source}`}
    >
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
      <span>
        {lang === 'hi'
          ? `सत्यापित: ${date} (${source})`
          : `Verified: ${date} (${source})`}
      </span>
    </div>
  );
};
