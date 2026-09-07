import React, { useState, useRef, useEffect } from 'react';
import { 
  Zap, 
  PhoneCall, 
  Globe2, 
  Menu, 
  X, 
  CheckCircle2, 
  ChevronDown, 
  Sun, 
  AlertTriangle, 
  CreditCard,
  Building,
  ExternalLink,
  Cpu,
  Calculator,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Link, useRouter } from '../router/RouterContext';

interface Props {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Navbar: React.FC<Props> = ({ lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentPath } = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary nav links (concise labels to avoid any desktop flex crowding)
  const primaryNavLinks = [
    { 
      to: '/discom-finder', 
      label: lang === 'hi' ? 'डिस्कॉम फाइंडर' : 'Discom Finder' 
    },
    { 
      to: '/new-connection', 
      label: lang === 'hi' ? 'नया कनेक्शन' : 'New Connection' 
    },
    { 
      to: '/name-transfer', 
      label: lang === 'hi' ? 'नाम ट्रांसफर' : 'Name Transfer' 
    },
    { 
      to: '/bill-calculator', 
      label: lang === 'hi' ? 'बिल कैलकुलेटर' : 'Bill Calculator' 
    },
    { 
      to: '/grievance-1912', 
      label: lang === 'hi' ? '1912 शिकायत' : '1912 Grievance' 
    },
  ];

  // Secondary tools in dropdown & mobile drawer
  const moreTools = [
    {
      to: '/smart-meter',
      label: lang === 'hi' ? 'स्मार्ट मीटर गाइड व 5% छूट' : 'Smart Meter & 5% Rebate',
      desc: lang === 'hi' ? 'दैनिक कटौती, रिचार्ज व HERC सुरक्षा नियम' : 'Daily deduction, recharge & LED decoder',
      icon: Cpu,
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      to: '/load-calculator',
      label: lang === 'hi' ? 'लोड कैलकुलेटर (MDI सुरक्षा)' : 'Load Calculator & MDI',
      desc: lang === 'hi' ? 'घर का कुल लोड व लोड बढ़ाने का शुल्क' : 'Household wattage & load extension fees',
      icon: Calculator,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      to: '/trust-billing',
      label: lang === 'hi' ? 'व्हाट्सएप व ट्रस्ट बिलिंग' : 'WhatsApp & Trust Billing',
      desc: lang === 'hi' ? 'खुद भरें मीटर रीडिंग व पाएं व्हाट्सएप बिल' : 'Self meter reading & official WhatsApp bots',
      icon: MessageSquare,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      to: '/solar-calculator',
      label: lang === 'hi' ? 'पीएम सूर्य घर (रूफटॉप सोलर)' : 'PM Surya Ghar Solar',
      desc: lang === 'hi' ? 'हरियाणा राज्य सब्सिडी व 100% फ्री सोलर' : 'Central + Haryana State Top-Up Subsidy',
      icon: Sun,
      color: 'text-amber-600 bg-amber-50'
    },
    {
      to: '/bill-dispute',
      label: lang === 'hi' ? 'गलत बिजली बिल समाधान' : 'High Bill & Meter Dispute',
      desc: lang === 'hi' ? 'DEF/RN रिमार्क डिकोडर व SDO आवेदन पत्र' : 'Decode remarks & auto-generate SDO letter',
      icon: AlertTriangle,
      color: 'text-rose-600 bg-rose-50'
    },
    {
      to: '/payment-help',
      label: lang === 'hi' ? 'पेमेंट फेल व रिफंड सहायता' : 'Failed Payment & Refund',
      desc: lang === 'hi' ? 'पैसे कटने पर 48 घंटे में रसीद व रिफंड' : 'Resolve debited amounts & double debits',
      icon: CreditCard,
      color: 'text-sky-600 bg-sky-50'
    },
    {
      to: '/districts',
      label: lang === 'hi' ? 'हरियाणा के 22 जिले' : 'All 22 Districts',
      desc: lang === 'hi' ? 'सर्कल कार्यालय व स्थानीय उप-मंडल' : 'Circle offices, SDO subdivisions & contacts',
      icon: Building,
      color: 'text-emerald-600 bg-emerald-50'
    }
  ];

  const isMoreActive = moreTools.some(tool => currentPath === tool.to);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4">
          
          {/* Left: Brand Identity & Logo */}
          <div className="flex items-center shrink-0 min-w-0">
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5 fill-amber-300 text-amber-300" />
              </div>
              <div className="flex flex-col text-left shrink-0">
                <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-slate-900 leading-tight whitespace-nowrap">
                  {lang === 'hi' ? 'हरियाणा बिजली सेवा' : 'Haryana Bijli Seva'}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 flex items-center gap-1.5 leading-none mt-0.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>{lang === 'hi' ? 'UHBVN व DHBVN नागरिक सेवा' : 'UHBVN & DHBVN Citizen Hub'}</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 text-xs xl:text-sm font-semibold text-slate-700">
            {primaryNavLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200' 
                      : 'hover:text-emerald-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* More Tools Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  isMoreActive
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                    : 'hover:text-emerald-700 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <span>{lang === 'hi' ? 'अन्य सेवाएं' : 'More Services'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {lang === 'hi' ? 'विशेष नागरिक सुविधाएं' : 'Special Citizen Utilities'}
                    </span>
                  </div>
                  {moreTools.map((tool) => {
                    const Icon = tool.icon;
                    const isActive = currentPath === tool.to;
                    return (
                      <Link
                        key={tool.to}
                        to={tool.to}
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`flex items-start gap-3 px-3 py-2.5 hover:bg-slate-50 transition-colors ${
                          isActive ? 'bg-emerald-50/70 border-l-2 border-emerald-600' : ''
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${tool.color}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <span className="block text-xs font-bold text-slate-900 leading-tight">
                            {tool.label}
                          </span>
                          <span className="block text-[10px] text-slate-500 mt-0.5 leading-snug">
                            {tool.desc}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right Controls: 1912 & Language Selector */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Language Toggle Button */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer shrink-0"
              title={lang === 'en' ? 'Switch to Hindi (हिंदी)' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span>{lang === 'en' ? 'हिंदी' : 'EN'}</span>
            </button>

            {/* 1912 Call CTA */}
            <a
              href="tel:1912"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95 shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse shrink-0" />
              <span className="tracking-tight">1912</span>
              <span className="hidden sm:inline text-rose-200 font-normal text-xs">
                {lang === 'hi' ? 'हेल्पलाइन' : 'Helpline'}
              </span>
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-700 hover:bg-slate-100 shrink-0 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-3 space-y-1 bg-white max-h-[80vh] overflow-y-auto">
            <div className="px-3 py-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {lang === 'hi' ? 'मुख्य सेवाएं' : 'Main Services'}
              </span>
            </div>

            {primaryNavLinks.map((link) => {
              const isActive = currentPath === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold' 
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="px-3 pt-3 pb-1 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {lang === 'hi' ? 'विशेष सुविधाएं' : 'Special Tools & Resolvers'}
              </span>
            </div>

            {moreTools.map((tool) => {
              const Icon = tool.icon;
              const isActive = currentPath === tool.to;
              return (
                <Link
                  key={tool.to}
                  to={tool.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold' 
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${tool.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-semibold block">{tool.label}</span>
                    <span className="text-[10px] text-slate-500 block">{tool.desc}</span>
                  </div>
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex gap-2">
              <a
                href="https://epayment.uhbvn.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 text-xs font-bold text-sky-800 bg-sky-50 rounded-lg border border-sky-200"
              >
                UHBVN Portal ↗
              </a>
              <a
                href="https://epayment.dhbvn.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 text-xs font-bold text-amber-800 bg-amber-50 rounded-lg border border-amber-200"
              >
                DHBVN Portal ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
