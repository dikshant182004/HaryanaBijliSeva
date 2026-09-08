import React, { useState } from 'react';
import { 
  MessageSquare, 
  Camera, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Smartphone, 
  HelpCircle, 
  Copy, 
  Check, 
  FileText,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { Language, DiscomType } from '../types';

interface Props {
  lang: Language;
}

export const TrustBillingGuide: React.FC<Props> = ({ lang }) => {
  const [activeDiscom, setActiveDiscom] = useState<DiscomType>('DHBVN');
  const [accountNo, setAccountNo] = useState<string>('');
  const [copiedSms, setCopiedSms] = useState<boolean>(false);

  const uhbvnWhatsapp = '919815961912';
  const dhbvnWhatsapp = '918813997080';

  const currentWhatsappNumber = activeDiscom === 'UHBVN' ? uhbvnWhatsapp : dhbvnWhatsapp;
  const displayWhatsappNumber = activeDiscom === 'UHBVN' ? '+91 98159-61912' : '+91 88139-97080';

  const handleCopySms = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSms(true);
    setTimeout(() => setCopiedSms(false), 2500);
  };

  const whatsappMessageUrl = `https://wa.me/${currentWhatsappNumber}?text=${encodeURIComponent(
    `Hi ${activeDiscom}, I want to submit my Self Meter Reading (Trust Billing). My Account Number is: ${accountNo || '[Account No]'}`
  )}`;

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-emerald-900/40 shadow-lg relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-wider inline-block mb-2">
              {lang === 'hi' ? 'हरियाणा बिजली व्हाट्सएप व ट्रस्ट बिलिंग' : 'Haryana WhatsApp Chatbot & Trust Billing'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'hi' ? 'व्हाट्सएप पर बिजली बिल व खुद रीडिंग भरें (Trust Billing)' : 'Official WhatsApp Chatbot & Self Meter Reading Hub'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {lang === 'hi'
                ? 'मीटर रीडर नहीं आया या गलत औसत बिल (NV) आ रहा है? UHBVN व DHBVN के आधिकारिक व्हाट्सएप बॉट पर खुद मीटर का फोटो व रीडिंग भेजें, पीडीएफ बिल डाउनलोड करें और फॉल्ट दर्ज कराएं।'
                : 'Avoid inflated "Not Visited (NV)" estimated bills. Submit your own meter photo via official UHBVN and DHBVN WhatsApp chatbots, receive duplicate bills instantly, and register outages.'}
            </p>
          </div>
        </div>
      </div>

      {/* Discom Selector Tab */}
      <div className="flex gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveDiscom('DHBVN')}
          className={`px-4 py-2 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
            activeDiscom === 'DHBVN'
              ? 'bg-sky-700 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          DHBVN ({lang === 'hi' ? 'दक्षिण हरियाणा - गुरुग्राम, फरीदाबाद, हिसार' : 'South Haryana - Gurugram, Faridabad, Hisar'})
        </button>
        <button
          onClick={() => setActiveDiscom('UHBVN')}
          className={`px-4 py-2 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
            activeDiscom === 'UHBVN'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          UHBVN ({lang === 'hi' ? 'उत्तर हरियाणा - पंचकूला, करनाल, रोहतक' : 'North Haryana - Panchkula, Karnal, Rohtak'})
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 1-Click WhatsApp Direct Launcher (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-emerald-600 shrink-0" />
            <h3 className="text-lg font-extrabold text-slate-900">
              {lang === 'hi' ? `${activeDiscom} व्हाट्सएप सहायक से सीधा चैट करें:` : `Chat directly with ${activeDiscom} WhatsApp Bot:`}
            </h3>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-900">
                {lang === 'hi' ? 'आधिकारिक वेरिफाइड व्हाट्सएप नंबर:' : 'Official Verified WhatsApp Helpline:'}
              </span>
              <span className="px-2.5 py-1 bg-emerald-700 text-white font-mono font-black text-xs rounded-lg">
                {displayWhatsappNumber}
              </span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {lang === 'hi'
                ? `यह ${activeDiscom} का आधिकारिक ऑटोमेटेड बॉट है। इस पर "Hi" लिखकर भेजने पर आपको ट्रस्ट बिलिंग, बिल डाउनलोड, डुप्लीकेट रसीद व बिजली शिकायत का मेनू मिल जाता है।`
                : `This is the official 24x7 automated ${activeDiscom} chatbot. Send "Hi" to get the interactive self-service menu for bills, readings, and complaints.`}
            </p>
          </div>

          {/* Quick Account No Box for personalized message */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700">
              {lang === 'hi' ? 'अपना 10-अंकों का खाता नंबर दर्ज करें (वैकल्पिक):' : 'Enter 10-Digit Account Number (Optional):'}
            </label>
            <input
              type="text"
              placeholder="e.g. 1234567890"
              maxLength={10}
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value.replace(/\D/g, ''))}
              className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Direct WhatsApp Launch Button */}
          <div>
            <a
              href={whatsappMessageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>
                {lang === 'hi' ? `व्हाट्सएप चैट खोलें (${activeDiscom})` : `Open in WhatsApp (${displayWhatsappNumber})`}
              </span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* SMS 1912 Alternative for Basic Phones */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
              <Send className="w-4 h-4 text-slate-500" />
              <span>{lang === 'hi' ? 'कीपैड फोन के लिए 1912 SMS सेवा:' : 'Keypad / SMS 1912 Service:'}</span>
            </h4>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-xs">
              <div className="font-mono text-slate-800 font-bold">
                SMS: <span className="text-emerald-700">BILL {accountNo || '1234567890'}</span> to <span className="text-emerald-700">1912</span>
              </div>
              <button
                onClick={() => handleCopySms(`BILL ${accountNo || '1234567890'}`)}
                className="px-2.5 py-1 bg-white border border-slate-300 rounded-lg text-slate-700 font-bold text-[11px] hover:bg-slate-100 flex items-center gap-1 cursor-pointer"
              >
                {copiedSms ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSms ? (lang === 'hi' ? 'कॉपी हुआ' : 'Copied') : (lang === 'hi' ? 'कॉपी करें' : 'Copy')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Step-by-Step Trust Billing Protocol (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              {lang === 'hi' ? 'ट्रस्ट बिलिंग गाइड (Trust Billing)' : 'Self Meter Reading Protocol'}
            </span>
            <h3 className="text-xl font-black text-white">
              {lang === 'hi' ? 'गलत या औसत बिल से कैसे बचें?' : 'Prevent Average / NV Bills'}
            </h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {lang === 'hi'
                ? 'यदि हर महीने आपका मीटर रीडर नहीं आता और बिल में "NV (Not Visited)" या अत्यधिक यूनिट्स चढ़ाई जा रही हैं, तो बिल साइकिल से 3 दिन पहले यह 3 काम करें:'
                : 'If the physical meter reader repeatedly misses your home resulting in inflated provisional bills, follow this 3-step self-reading workflow:'}
            </p>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 space-y-1">
              <div className="flex items-center gap-2 font-bold text-emerald-300">
                <Camera className="w-4 h-4" />
                <span>1. {lang === 'hi' ? 'मीटर की स्पष्ट फोटो लें' : 'Clear Photo of Meter Display'}</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {lang === 'hi'
                  ? 'मीटर का "PUSH" बटन दबाकर KWh स्क्रीन लाएं। फोटो में मीटर नंबर और रीडिंग दोनों साफ दिखने चाहिए।'
                  : 'Press the PUSH button to reveal the KWh register. Ensure both the physical meter number and units are legible.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 space-y-1">
              <div className="flex items-center gap-2 font-bold text-sky-300">
                <Send className="w-4 h-4" />
                <span>2. {lang === 'hi' ? 'व्हाट्सएप बॉट पर भेजें' : 'Send to Official Bot'}</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {lang === 'hi'
                  ? 'व्हाट्सएप बॉट पर "Trust Billing" विकल्प चुनें, अपना खाता नंबर लिखें और मीटर की फोटो अपलोड करें।'
                  : 'Select "Trust Billing" on the WhatsApp helpline, verify account details, and send the timestamped photo.'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700 space-y-1">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <CheckCircle2 className="w-4 h-4" />
                <span>3. {lang === 'hi' ? 'एसएमएस कन्फर्मेशन प्राप्त करें' : 'Get SMS Confirmation'}</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {lang === 'hi'
                  ? 'निगम का सर्वर इमेज रिकॉग्निशन (OCR) से रीडिंग सत्यापित कर बिल जारी करेगा। गलत औसत बिल से पूर्ण छुटकारा।'
                  : 'System uses AI OCR validation to accept your reading, eliminating human error or skipped reader visits.'}
              </p>
            </div>
          </div>

          {/* SDO Escalation note */}
          <div className="pt-2 border-t border-slate-800">
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {lang === 'hi'
                ? 'यदि फिर भी बिल गलत आता है, तो हमारे "High Bill Dispute Resolver" टूल से SDO को आधिकारिक पत्र लिखकर ठीक करवाएं।'
                : 'If an erroneous bill has already been issued, use our "High Bill & Faulty Meter Dispute" tool to generate an official SDO notice.'}
            </p>
          </div>
        </div>
      </div>

      {/* Verified Toll-Free Helplines & Last Verified Stamp */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-bold text-slate-800">
            {lang === 'hi' ? 'आधिकारिक हरियाणा बिजली हेल्पलाइन:' : 'Official Haryana Electricity Helplines:'}
          </span>
          <a href="tel:1912" className="font-mono font-bold text-rose-600 hover:underline">
            1912 (24x7 Universal)
          </a>
          <span>•</span>
          <a href="tel:18001804334" className="font-mono font-bold text-sky-700 hover:underline">
            1800-180-4334 (DHBVN Toll-Free)
          </a>
          <span>•</span>
          <a href="tel:18001801550" className="font-mono font-bold text-emerald-700 hover:underline">
            1800-180-1550 (UHBVN Toll-Free)
          </a>
        </div>
        <div className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
          {lang === 'hi' ? 'HERC व निगम व्हाट्सएप पोर्टल अनुसार सत्यापित: मार्च 2025' : 'Verified against HERC & DISCOM Portals: March 2025'}
        </div>
      </div>
    </div>
  );
};
