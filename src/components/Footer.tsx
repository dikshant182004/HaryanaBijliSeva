import React from 'react';
import { Zap, ExternalLink, ShieldAlert, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OFFICIAL_LINKS } from '../data/haryanaData';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

export const Footer: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About & Helpline */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                <Zap className="w-4 h-4 fill-amber-300 text-amber-300" />
              </div>
              <span className="font-extrabold text-lg text-white">
                {t.siteTitle}
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.aboutDesc}
            </p>
            <div className="pt-2">
              <a
                href="tel:1912"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-600/20 text-rose-300 border border-rose-500/30 rounded-lg text-xs font-bold"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>24x7 Haryana Helpline: 1912</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              {lang === 'hi' ? 'मुख्य सुविधाएं' : 'Quick Tools'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/discom-finder" className="hover:text-white transition-colors">
                  {t.nav.finder}
                </Link>
              </li>
              <li>
                <Link to="/new-connection" className="hover:text-white transition-colors">
                  {t.nav.newConnection}
                </Link>
              </li>
              <li>
                <Link to="/name-transfer" className="hover:text-white transition-colors">
                  {t.nav.nameTransfer}
                </Link>
              </li>
              <li>
                <Link to="/grievance-1912" className="hover:text-white transition-colors">
                  {t.nav.outage1912}
                </Link>
              </li>
              <li>
                <Link to="/smart-meter" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'स्मार्ट मीटर गाइड व 5% छूट' : 'Smart Meter & 5% Rebate Hub'}
                </Link>
              </li>
              <li>
                <Link to="/load-calculator" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'घरेलू लोड कैलकुलेटर (MDI सुरक्षा)' : 'Load Calculator & MDI Extension'}
                </Link>
              </li>
              <li>
                <Link to="/trust-billing" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'व्हाट्सएप चैटबॉट व खुद रीडिंग (Trust Billing)' : 'WhatsApp Bot & Trust Billing'}
                </Link>
              </li>
              <li>
                <Link to="/bill-calculator" className="hover:text-white transition-colors">
                  {t.nav.billCalc}
                </Link>
              </li>
              <li>
                <Link to="/solar-calculator" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'पीएम सूर्य घर (सोलर सब्सिडी)' : 'PM Surya Ghar Solar Subsidy'}
                </Link>
              </li>
              <li>
                <Link to="/bill-dispute" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'गलत बिल व मीटर समस्या (SDO पत्र)' : 'High Bill & Faulty Meter Dispute'}
                </Link>
              </li>
              <li>
                <Link to="/payment-help" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'पेमेंट फेल व रिफंड समाधान' : 'Failed Payment & Refund Help'}
                </Link>
              </li>
              <li>
                <Link to="/districts" className="hover:text-white transition-colors">
                  {t.nav.districts}
                </Link>
              </li>
            </ul>
          </div>


          {/* Col 3: Official Govt Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              {t.footer.officialPortals}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={OFFICIAL_LINKS.uhbvn.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>UHBVN (North Haryana) Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.dhbvn.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>DHBVN (South Haryana) Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.saralHaryana}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Saral Haryana (Citizen Services)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.parivarPehchanPatra}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Mera Parivar (PPP Family ID)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.hercOmbudsman}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>HERC Electricity Ombudsman</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Important Advisory */}
          <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs">
            <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>{lang === 'hi' ? 'नागरिक सुरक्षा सलाह' : 'Consumer Advisory'}</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {t.footer.officialDisclaimText}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
