import React, { useState } from 'react';
import { 
  CreditCard, 
  ExternalLink, 
  ShieldCheck, 
  PhoneCall, 
  MessageSquare, 
  HelpCircle, 
  AlertTriangle, 
  Zap, 
  CheckCircle2, 
  Copy, 
  Check, 
  Building2,
  Smartphone,
  Info
} from 'lucide-react';
import { Language, DiscomType } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

export const QuickPayHubPage: React.FC<Props> = ({ lang }) => {
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [selectedDiscom, setSelectedDiscom] = useState<DiscomType>('DHBVN');
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  // Detect Discom automatically from account number prefix if entered
  const handleAccountChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 10);
    setAccountNumber(clean);

    // Simple heuristic: many DHBVN accounts begin with numbers or prefixes
    // If length >= 4, allow user to toggle or detect
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNumber(label);
    setTimeout(() => setCopiedNumber(null), 2500);
  };

  // Direct Official Gateway Links
  const getOfficialPortalUrl = () => {
    if (selectedDiscom === 'UHBVN') {
      return accountNumber.length >= 10
        ? `https://epayment.uhbvn.org.in/b2cviewPayBills.aspx?accno=${accountNumber}`
        : `https://epayment.uhbvn.org.in/`;
    } else {
      return accountNumber.length >= 10
        ? `https://epayment.dhbvn.org.in/b2cviewPayBills.aspx?accno=${accountNumber}`
        : `https://epayment.dhbvn.org.in/`;
    }
  };

  // SEO Metadata
  const pageTitle = lang === 'hi'
    ? 'हरियाणा बिजली बिल क्विक पे व आधिकारिक हेल्पलाइन डायरेक्टरी: UHBVN व DHBVN'
    : 'Haryana Electricity Quick Pay & Official WhatsApp Helpline Directory: UHBVN & DHBVN';

  const pageDescription = lang === 'hi'
    ? 'UHBVN व DHBVN के 10-अंकों के खाता संख्या से सीधे आधिकारिक पोर्टल पर 0% सुविधा शुल्क पर बिल भरें। आधिकारिक व्हाट्सएप बॉट (9815961912 / 8813999708) व मिस्ड कॉल सेवा।'
    : 'Direct zero-convenience fee quick pay portal links for UHBVN & DHBVN electricity bills by 10-digit account number. Verified 1912 WhatsApp chatbots and missed call numbers.';

  const keywords = [
    'uhbvn quick pay electricity bill online',
    'dhbvn bill payment by account number',
    'uhbvn whatsapp chatbot number',
    'dhbvn complaint whatsapp number',
    'no power supply missed call haryana',
    'haryana electricity direct payment link',
    'हरियाणा बिजली बिल ऑनलाइन पेमेंट खाता नंबर से'
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: 'https://haryanabijliseva.pages.dev/quick-pay',
    mainEntity: {
      '@type': 'GovernmentService',
      name: 'Haryana Electricity Quick Pay & Helplines',
      serviceType: 'Utility Billing & Emergency Service',
      provider: {
        '@type': 'GovernmentOrganization',
        name: 'Haryana Power Utilities (UHBVN & DHBVN)'
      }
    }
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/quick-pay"
        keywords={keywords}
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs & Title */}
        <div className="mb-8">
          <nav className="flex text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-emerald-700">
              {lang === 'hi' ? 'होम' : 'Home'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">
              {lang === 'hi' ? 'क्विक पे व हेल्पलाइन डायरेक्टरी' : 'Quick Pay & Helplines'}
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                {lang === 'hi' ? '0% अतिरिक्त शुल्क • सीधे आधिकारिक पोर्टल' : '0% Extra Fee • Official Direct Portals'}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {lang === 'hi' 
                  ? 'हरियाणा बिजली त्वरित भुगतान व आपातकालीन संपर्क' 
                  : 'Haryana Electricity Quick Pay & Verified Helplines'}
              </h1>
              <p className="mt-2 text-slate-600 max-w-3xl text-sm sm:text-base">
                {lang === 'hi'
                  ? 'अनाधिकृत ऐप्स के 1.5% - 2% सुविधा शुल्क से बचें। सीधे आधिकारिक UHBVN या DHBVN सर्वर पर बिल देखें व जमा करें। साथ ही आधिकारिक व्हाट्सएप बॉट और मिस्ड-कॉल सेवा का उपयोग करें।'
                  : 'Avoid unauthorized third-party gateway surcharges. Access official UHBVN & DHBVN billing servers directly by 10-digit account number, along with verified WhatsApp bots and missed call emergency lines.'}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Pay Box & Instant Escalation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Gateway Linker */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-600" />
                {lang === 'hi' ? 'सीधा बिजली बिल भुगतान गेटवे' : 'Direct Official Bill Payment Gateway'}
              </h2>

              <div className="space-y-5">
                {/* Discom Toggle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    {lang === 'hi' ? 'बिजली वितरण निगम चुनें' : 'Select Your Distribution Utility'}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedDiscom('DHBVN')}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all text-center ${
                        selectedDiscom === 'DHBVN'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500 shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      DHBVN (दक्षिण)
                      <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                        गुरुग्राम, फरीदाबाद, हिसार...
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDiscom('UHBVN')}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all text-center ${
                        selectedDiscom === 'UHBVN'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500 shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      UHBVN (उत्तर)
                      <span className="block text-[11px] font-normal text-slate-500 mt-0.5">
                        पंचकूला, करनाल, अंबाला...
                      </span>
                    </button>
                  </div>
                </div>

                {/* Account Number Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    {lang === 'hi' ? '10-अंकों का खाता संख्या (Account No.)' : '10-Digit Electricity Account Number'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={10}
                      value={accountNumber}
                      onChange={(e) => handleAccountChange(e.target.value)}
                      placeholder="e.g. 1029384756"
                      className="w-full px-4 py-3 text-lg font-mono tracking-wider rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 font-bold"
                    />
                    {accountNumber.length === 10 && (
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-emerald-600">
                        <CheckCircle2 className="w-5 h-5" />
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-1">
                    <span>
                      {lang === 'hi' ? 'बिल के शीर्ष पर 10 अंकों का खाता सं.' : '10 digits found at top of bill'}
                    </span>
                    <Link to="/discom-finder" className="text-emerald-700 font-bold hover:underline">
                      {lang === 'hi' ? 'डिस्कॉम पता नहीं? खोजें →' : 'Not sure which Discom? →'}
                    </Link>
                  </div>
                </div>

                {/* Submit / Open Official Button */}
                <div className="pt-2">
                  <a
                    href={getOfficialPortalUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-all shadow-md hover:shadow-lg"
                  >
                    <span>
                      {accountNumber.length === 10
                        ? (lang === 'hi' ? `सीधे ${selectedDiscom} पर बिल देखें व भरें` : `View & Pay Bill on ${selectedDiscom}`)
                        : (lang === 'hi' ? `आधिकारिक ${selectedDiscom} पेमेंट गेटवे खोलें` : `Open Official ${selectedDiscom} Gateway`)}
                    </span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Safety Callout */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800">
                      {lang === 'hi' ? 'सुरक्षित भुगतान गारंटी:' : 'Safe Payment Direct Link:'}
                    </span>{' '}
                    {lang === 'hi'
                      ? 'यह लिंक आपको सीधे हरियाणा सरकार के आधिकारिक NIC/Nigam सर्वर (epayment.dhbvn.org.in अथवा epayment.uhbvn.org.in) पर ले जाता है। कोई भी तृतीय-पक्ष कमीशन अथवा सुविधा शुल्क नहीं काटा जाता।'
                      : 'This directs you securely to official government servers (epayment.dhbvn.org.in or epayment.uhbvn.org.in). Zero third-party platform fees.'}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Verified Official WhatsApp & Missed Call Directory */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-600" />
                {lang === 'hi' ? 'सत्यापित व्हाट्सएप व मिस्ड-कॉल सेवाएं' : 'Verified WhatsApp & Emergency Services'}
              </h2>
              <p className="text-xs text-slate-500 mb-5">
                {lang === 'hi' 
                  ? 'हरियाणा बिजली निगमों द्वारा नागरिकों की त्वरित सुविधा के लिए जारी आधिकारिक नंबर' 
                  : 'Official direct contact points launched by Haryana Power Utilities'}
              </p>

              <div className="space-y-3.5">
                {/* UHBVN WhatsApp */}
                <div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-200 bg-white transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">UHBVN WhatsApp Chatbot</div>
                        <div className="text-xs text-slate-500">
                          {lang === 'hi' ? 'बिल डाउनलोड, शिकायत व स्टेटस' : 'Download bill, register complaint'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-slate-800">9815961912</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('9815961912', 'uhbvn_wa')}
                        className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-emerald-700 transition-colors"
                        title="Copy Number"
                      >
                        {copiedNumber === 'uhbvn_wa' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* DHBVN WhatsApp */}
                <div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-200 bg-white transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">DHBVN WhatsApp Supply Helpline</div>
                        <div className="text-xs text-slate-500">
                          {lang === 'hi' ? 'बिजली कटौती व आपूर्ति शिकायत' : 'No power / supply interruption'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-slate-800">8813999708</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('8813999708', 'dhbvn_wa')}
                        className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-emerald-700 transition-colors"
                        title="Copy Number"
                      >
                        {copiedNumber === 'dhbvn_wa' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* UHBVN Missed Call */}
                <div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-200 bg-white transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0">
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">UHBVN "No Supply" Missed Call</div>
                        <div className="text-xs text-slate-500">
                          {lang === 'hi' ? 'पंजीकृत मोबाइल से सिर्फ मिस्ड कॉल दें' : 'Give missed call from registered mobile'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-slate-800">9990231912</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('9990231912', 'uhbvn_missed')}
                        className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-emerald-700 transition-colors"
                        title="Copy Number"
                      >
                        {copiedNumber === 'uhbvn_missed' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* DHBVN Power Theft Tip-off */}
                <div className="p-4 rounded-xl border border-slate-200 hover:border-rose-200 bg-white transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">DHBVN Theft Information WhatsApp</div>
                        <div className="text-xs text-slate-500">
                          {lang === 'hi' ? 'बिजली चोरी की गोपनीय सूचना' : 'Confidential power theft tip-off'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-slate-800">7027008325</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('7027008325', 'dhbvn_theft')}
                        className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 hover:text-emerald-700 transition-colors"
                        title="Copy Number"
                      >
                        {copiedNumber === 'dhbvn_theft' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* 24x7 1912 Helpline */}
                <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-bold text-white text-sm">
                        {lang === 'hi' ? '1912 टोल-फ्री केंद्रीय हेल्पलाइन' : '1912 Toll-Free Central Helpline'}
                      </div>
                      <div className="text-xs text-slate-400">
                        {lang === 'hi' ? 'पूरे हरियाणा में 24 घंटे सातों दिन' : '24x7 all across Haryana'}
                      </div>
                    </div>
                  </div>
                  <a
                    href="tel:1912"
                    className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                  >
                    {lang === 'hi' ? 'कॉल करें' : 'Call 1912'}
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quick Navigation Cards to Related Tools */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/acd-calculator"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="text-xs font-bold uppercase text-emerald-600 mb-1">
              {lang === 'hi' ? 'ब्याज कैलकुलेटर' : 'Security Interest'}
            </div>
            <div className="text-base font-bold text-slate-900 group-hover:text-emerald-700 flex items-center justify-between">
              <span>{lang === 'hi' ? 'ACD पर 6.75% ब्याज क्लेम' : 'ACD Deposit 6.75% Interest'}</span>
              <span>→</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'hi' ? 'देरी होने पर 18% जुर्माना ब्याज गणना' : 'Calculate statutory 18% penal interest'}
            </p>
          </Link>

          <Link
            to="/rts-compensation"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-rose-500 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="text-xs font-bold uppercase text-rose-600 mb-1">
              {lang === 'hi' ? 'हर्जाना अधिकार' : 'Right to Service'}
            </div>
            <div className="text-base font-bold text-slate-900 group-hover:text-rose-700 flex items-center justify-between">
              <span>{lang === 'hi' ? 'RTS देरी पर ₹5,000 मुआवजा' : 'RTS Delay ₹5,000 Penalty'}</span>
              <span>→</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'hi' ? 'ट्रांसफॉर्मर व औसत बिलिंग पर हर्जाना' : 'Burnt transformer & average bill penalty'}
            </p>
          </Link>

          <Link
            to="/surcharge-waiver"
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-500 shadow-xs hover:shadow-md transition-all group"
          >
            <div className="text-xs font-bold uppercase text-amber-600 mb-1">
              {lang === 'hi' ? 'बकाया निपटान' : 'Arrears Relief'}
            </div>
            <div className="text-base font-bold text-slate-900 group-hover:text-amber-700 flex items-center justify-between">
              <span>{lang === 'hi' ? '100% सरचार्ज माफी कैलकुलेटर' : '100% Surcharge Waiver'}</span>
              <span>→</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {lang === 'hi' ? 'पुराने बिजली बिल पर ब्याज छूट' : 'Calculate 5% rebate & zero-interest installments'}
            </p>
          </Link>
        </div>

        {/* Master Step-by-Step Payment Guide Link */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'विस्तृत नागरिक गाइड' : 'Complete Citizen Walkthrough'}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {lang === 'hi'
                ? 'हरियाणा बिजली बिल ऑनलाइन कैसे भरें: UHBVN व DHBVN स्टेप-बाय-स्टेप गाइड'
                : 'How to Pay Haryana Electricity Bill Online: UHBVN & DHBVN Official Portal Guide'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              {lang === 'hi'
                ? '0% शुल्क पेमेंट मोड, डुप्लीकेट सरकारी रसीद डाउनलोड करने व पैसे कटने पर 48-घंटे के समाधान की पूरी कानूनी व तकनीकी प्रक्रिया पढ़ें।'
                : 'Learn about verified 0% fee payment modes, duplicate stamped receipt downloads, and 48-hour auto-reconciliation rules.'}
            </p>
          </div>
          <Link
            to="/articles/how-to-pay-haryana-electricity-bill-online-uhbvn-dhbvn"
            className="shrink-0 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span>{lang === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Full Guide'}</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
