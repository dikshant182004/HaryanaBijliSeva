import React from 'react';
import { Shield, Lock, Info, CheckCircle2, ExternalLink, FileText, Scale } from 'lucide-react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LAST_VERIFIED_DATE, VERIFIED_HELPLINES } from '../data/haryanaData';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

export const AboutPage: React.FC<Props> = ({ lang }) => {
  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <SeoHead
        title={lang === 'hi' 
          ? 'हमारे बारे में | हरियाणा बिजली सेवा - निष्पक्ष नागरिक तकनीकी मंच' 
          : 'About Us | Haryana Bijli Seva - Independent Civic-Tech Initiative'}
        description={lang === 'hi'
          ? 'हरियाणा बिजली सेवा राज्य के 22 जिलों के UHBVN और DHBVN उपभोक्ताओं के लिए एक स्वतंत्र, गैर-सरकारी नागरिक तकनीकी पहल है।'
          : 'Haryana Bijli Seva is an independent, non-governmental civic-tech initiative built to simplify electricity services, tariffs, and consumer rights across Haryana.'}
        path="/about"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'हमारे बारे में' : 'About Us' }
          ]}
        />

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-8 space-y-8">
          <div className="border-b border-slate-100 pb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 inline-block mb-3">
              {lang === 'hi' ? 'नागरिक तकनीकी पहल' : 'Independent Civic-Tech Initiative'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'हरियाणा बिजली सेवा के बारे में' : 'About Haryana Bijli Seva'}
            </h1>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              {lang === 'hi'
                ? 'हरियाणा के 22 जिलों के 70 लाख से अधिक बिजली उपभोक्ताओं को पारदर्शी, सटीक एवं विधिक रूप से सत्यापित जानकारी उपलब्ध कराने का गैर-लाभकारी मिशन।'
                : 'A public-interest utility initiative empowering over 7 million electricity consumers across Haryana with verified tariffs, dispute resolution tools, and grievance escalation pathways.'}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'इस पोर्टल का उद्देश्य क्या है?' : 'Why Was This Platform Built?'}
              </h2>
              <p>
                {lang === 'hi'
                  ? 'हरियाणा में बिजली वितरण दो अलग-अलग निगमों द्वारा किया जाता है: उत्तर हरियाणा बिजली वितरण निगम (UHBVN) और दक्षिण हरियाणा बिजली वितरण निगम (DHBVN)। नए नागरिक अक्सर असमंजस में रहते हैं कि उनका जिला किस डिस्कॉम के अधीन आता है, नया कनेक्शन कैसे लिया जाए, और यदि अप्रत्याशित रूप से अत्यधिक बिजली बिल आ जाए तो वैधानिक रूप से किसे शिकायत दी जाए।'
                  : 'Power distribution in Haryana is divided between two distinct state utilities: Uttar Haryana Bijli Vitran Nigam (UHBVN) serving northern districts, and Dakshin Haryana Bijli Vitran Nigam (DHBVN) serving southern districts. Consumers frequently encounter confusion identifying their jurisdiction, calculating legitimate new connection charges, or disputing sudden surges in billing.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-extrabold text-slate-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-emerald-600" />
                <span>{lang === 'hi' ? 'हमारी सत्यनिष्ठा एवं प्राथमिक स्रोत:' : 'Our Data Integrity & Primary Sources:'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {lang === 'hi'
                  ? 'इस पोर्टल के सभी कैलकुलेटर और नियम सीधे आधिकारिक प्राथमिक दस्तावेजों से सत्यापित हैं:'
                  : 'Every calculator, rule, and escalation pathway on this website is grounded in statutory documents:'}
              </p>
              <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                <li>Haryana Electricity Regulatory Commission (HERC) Tariff Orders (FY 2024-25 & 2025-26)</li>
                <li>HERC Electricity Supply Code Regulations (Regulation 61 on Disputed Bills)</li>
                <li>HERC (Standards of Performance of Distribution Licensees) Regulations 2020</li>
                <li>Official UHBVN (uhbvn.org.in) and DHBVN (dhbvn.org.in) Portals & Citizen Charters</li>
              </ul>
              <div className="text-[11px] font-semibold text-emerald-800 pt-1">
                {lang === 'hi' ? `अंतिम समीक्षा एवं सत्यापन: ${LAST_VERIFIED_DATE}` : `Last Rigorous Audit: ${LAST_VERIFIED_DATE}`}
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'गैर-सरकारी एवं स्वतंत्र स्थिति' : 'Non-Government & Independent Status'}
              </h2>
              <p>
                {lang === 'hi'
                  ? 'हरियाणा बिजली सेवा एक स्वतंत्र नागरिक सेवा पोर्टल है। यह किसी भी सरकारी विभाग या बिजली बोर्ड का स्वामित्व नहीं रखता है। बिलों का अंतिम भुगतान और आधिकारिक शिकायतें हमेशा आधिकारिक सरकारी पोर्टलों या 1912 हेल्पलाइन के माध्यम से ही की जानी चाहिए।'
                  : 'Haryana Bijli Seva is an independent consumer informational platform. It is NOT operated by or affiliated with the Government of Haryana, HVPNL, UHBVN, or DHBVN. All payments and official complaint dockets are directed exclusively to official government systems.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export const PrivacyPage: React.FC<Props> = ({ lang }) => {
  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <SeoHead
        title={lang === 'hi' 
          ? 'गोपनीयता नीति | हरियाणा बिजली सेवा - शून्य डेटा ट्रैकिंग' 
          : 'Privacy Policy | Haryana Bijli Seva - Zero Data Retention'}
        description={lang === 'hi'
          ? 'हमारी गोपनीयता प्रतिबद्धता: आपका कोई भी खाता नंबर, फोन नंबर या व्यक्तिगत जानकारी हमारे सर्वर पर स्टोर नहीं की जाती।'
          : 'Our privacy commitment: zero trackers, client-side only processing, and no retention of electricity account or personal details.'}
        path="/privacy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy' }
          ]}
        />

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-8 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 inline-block mb-3">
              {lang === 'hi' ? 'गोपनीयता संरक्षण' : 'Privacy First'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy'}
            </h1>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              {lang === 'hi' ? 'प्रभावी तिथि: मार्च 2025' : 'Effective Date: March 2025'}
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-start gap-3">
              <Lock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-emerald-900 font-bold mb-1">
                  {lang === 'hi' ? '100% क्लाइंट-साइड (ब्राउज़र में ही) प्रोसेसिंग' : '100% Client-Side Processing Architecture'}
                </strong>
                <p className="text-emerald-950">
                  {lang === 'hi'
                    ? 'आप जो भी खाता संख्या, मीटर रीडिंग, या शिकायत पत्र विवरण दर्ज करते हैं, वह केवल आपके ब्राउज़र में संसाधित होता है। हम कोई भी निजी डेटा अपने सर्वर पर नहीं भेजते और न ही स्टोर करते हैं।'
                    : 'Any account numbers, readings, or complaint form details entered into our tools are processed exclusively inside your web browser. Nothing is ever sent to or retained on remote servers.'}
                </p>
              </div>
            </div>

            <h3 className="font-bold text-slate-900 text-base pt-2">
              {lang === 'hi' ? '1. हम कौन सा डेटा एकत्र करते हैं?' : '1. Information We Process'}
            </h3>
            <p>
              {lang === 'hi'
                ? 'हम किसी भी प्रकार का व्यक्तिगत पहचान योग्य डेटा (PII) जैसे बैंक खाता, पासवर्ड, या आधार नंबर एकत्र नहीं करते हैं। बिल कैलकुलेटर और पत्र जनरेटर पूरी तरह से ऑफ़लाइन-सक्षम जावास्क्रिप्ट लॉजिक पर काम करते हैं।'
                : 'We collect NO personally identifiable information (PII) such as bank accounts, passwords, or government IDs. All calculators and complaint letter tools execute solely via client-side JavaScript.'}
            </p>

            <h3 className="font-bold text-slate-900 text-base pt-2">
              {lang === 'hi' ? '2. कुकीज़ एवं ट्रैकिंग' : '2. Cookies & Tracking'}
            </h3>
            <p>
              {lang === 'hi'
                ? 'हम आपकी ब्राउज़िंग पर नज़र रखने के लिए कोई कुकीज़ या तीसरे पक्ष के ट्रैकर का उपयोग नहीं करते हैं।'
                : 'This website does not utilize invasive advertising trackers, cross-site cookies, or surveillance telemetry.'}
            </p>

            <h3 className="font-bold text-slate-900 text-base pt-2">
              {lang === 'hi' ? '3. बाह्य सरकारी वेबसाइटों के लिंक' : '3. Outbound Government Links'}
            </h3>
            <p>
              {lang === 'hi'
                ? 'यह पोर्टल आपको UHBVN, DHBVN, HERC, और सरल हरियाणा के आधिकारिक पोर्टलों पर सीधे पुनर्निर्देशित करता है। उन बाहरी वेबसाइटों की अपनी स्वतंत्र गोपनीयता नीतियां हैं।'
                : 'Our tools provide direct hyperlinks to official state utility portals (uhbvn.org.in, dhbvn.org.in, saralharyana.gov.in). External sites operate under their respective government terms.'}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export const DisclaimerPage: React.FC<Props> = ({ lang }) => {
  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <SeoHead
        title={lang === 'hi' 
          ? 'वैधानिक अस्वीकरण | हरियाणा बिजली सेवा - स्वतंत्र नागरिक पोर्टल' 
          : 'Statutory Disclaimer | Haryana Bijli Seva - Independent Utility Guide'}
        description={lang === 'hi'
          ? 'हरियाणा बिजली सेवा का विधिक अस्वीकरण: यह पोर्टल एक स्वतंत्र शैक्षिक व नागरिक तकनीकी मार्गदर्शिका है।'
          : 'Statutory legal disclaimer for Haryana Bijli Seva. An independent public-service consumer utility guide.'}
        path="/disclaimer"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'वैधानिक अस्वीकरण' : 'Legal Disclaimer' }
          ]}
        />

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-8 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 inline-block mb-3">
              {lang === 'hi' ? 'वैधानिक विधिक सूचना' : 'Statutory Legal Notice'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'वैधानिक अस्वीकरण (Disclaimer)' : 'Statutory Disclaimer'}
            </h1>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 font-medium">
              {lang === 'hi'
                ? 'महत्वपूर्ण सूचना: "हरियाणा बिजली सेवा" (Haryana Bijli Seva) एक स्वतंत्र नागरिक-तकनीकी (Civic-Tech) सूचनात्मक मंच है। यह हरियाणा सरकार, उत्तर हरियाणा बिजली वितरण निगम (UHBVN), दक्षिण हरियाणा बिजली वितरण निगम (DHBVN), अथवा हरियाणा विद्युत प्रसारण निगम (HVPNL) का आधिकारिक पोर्टल नहीं है।'
                : 'IMPORTANT NOTICE: Haryana Bijli Seva is an independent consumer informational civic-tech initiative. It is NOT an official website of the Government of Haryana, Uttar Haryana Bijli Vitran Nigam (UHBVN), Dakshin Haryana Bijli Vitran Nigam (DHBVN), or HVPNL.'}
            </div>

            <h3 className="font-bold text-slate-900 text-base pt-2">
              {lang === 'hi' ? '1. आधिकारिक बिल भुगतान व सेवाएं' : '1. Official Bill Payments & Operations'}
            </h3>
            <p>
              {lang === 'hi'
                ? 'यह पोर्टल कभी भी सीधे बिजली बिल का भुगतान स्वीकार नहीं करता है। सभी भुगतान एवं नए कनेक्शन के आवेदन संबंधित डिस्कॉम (UHBVN / DHBVN) या सरल हरियाणा के आधिकारिक पोर्टल पर ही किए जाने चाहिए।'
                : 'This platform never directly collects or processes electricity bill payments. All financial transactions and statutory new connection applications must be executed exclusively on the official government portals (uhbvn.org.in, dhbvn.org.in, or saralharyana.gov.in).'}
            </p>

            <h3 className="font-bold text-slate-900 text-base pt-2">
              {lang === 'hi' ? '2. टैरिफ गणना एवं सटीकता' : '2. Tariff Computations & Regulatory Supremacy'}
            </h3>
            <p>
              {lang === 'hi'
                ? 'कैलकुलेटर में प्रदर्शित आंकड़े हरियाणा विद्युत विनियामक आयोग (HERC) के नवीनतम टैरिफ आदेशों पर आधारित हैं। तथापि, किसी भी विधिक विवाद की स्थिति में HERC के आधिकारिक राजपत्र आदेश और निगम के आधिकारिक बिल की गणना ही अंतिम मानी जाएगी।'
                : 'All computational estimates are aligned with official tariff orders released by the Haryana Electricity Regulatory Commission (HERC). In any instance of regulatory discrepancy, the official Gazette orders of HERC and the certified bill served by the licensed distribution company shall prevail.'}
            </p>

            <h3 className="font-bold text-slate-900 text-base pt-2">
              {lang === 'hi' ? '3. आधिकारिक संपर्क सूत्र' : '3. Official Statutory Contact'}
            </h3>
            <p>
              {lang === 'hi'
                ? 'बिजली आपूर्ति में बाधा, बिलिंग शिकायत अथवा आपातकालीन स्थिति में तुरंत आधिकारिक 24x7 हेल्पलाइन 1912 अथवा DHBVN: 1800-180-4334 / UHBVN: 1800-180-1550 पर संपर्क करें।'
                : 'For power outages, safety hazards, and emergency grievances, contact the 24x7 government toll-free helpline at 1912 or the respective DISCOM customer care centers.'}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
