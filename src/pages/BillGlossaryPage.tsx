import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  HelpCircle, 
  FileText, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight,
  ExternalLink,
  Info,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Language } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LastVerifiedBadge } from '../components/LastVerifiedBadge';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

interface GlossaryItem {
  termEn: string;
  termHi: string;
  shortCode: string;
  category: 'charges' | 'meter' | 'legal' | 'administrative';
  definitionEn: string;
  definitionHi: string;
  whyOnBillEn: string;
  whyOnBillHi: string;
  consumerTipEn: string;
  consumerTipHi: string;
}

const GLOSSARY_TERMS: GlossaryItem[] = [
  {
    termEn: 'Advance Consumption Deposit (Security)',
    termHi: 'अग्रिम उपभोग अमानत (एसीडी / सिक्योरिटी)',
    shortCode: 'ACD',
    category: 'charges',
    definitionEn: 'A refundable security deposit mandated under HERC regulations, calculated based on your average 2-month electricity consumption.',
    definitionHi: 'HERC नियमों के तहत निर्धारित एक रिफंडेबल सिक्योरिटी राशि, जो आपके 2 महीने के औसत बिजली खर्च के बराबर तय की जाती है।',
    whyOnBillEn: 'Every financial year, DISCOMs audit your annual consumption. If your average power usage increases, an "Additional ACD" is demanded in installments on your bill.',
    whyOnBillHi: 'हर साल निगम पिछले 12 महीनों के उपभोग की समीक्षा करता है। यदि आपका औसत उपभोग बढ़ा है, तो अतिरिक्त ACD बिल में जुड़कर आता है।',
    consumerTipEn: 'Important: DISCOM is legally required to pay annual interest on your ACD (equivalent to RBI Bank Rate) directly credited in your April/May bill! Prepaid smart meters are exempt from ACD.',
    consumerTipHi: 'कानूनी अधिकार: निगम को आपके ACD पर हर साल आरबीआई बैंक दर के अनुसार ब्याज देना अनिवार्य है जो अप्रैल/मई के बिल में क्रेडिट होता है! प्रीपेड स्मार्ट मीटर धारकों को ACD से छूट है।'
  },
  {
    termEn: 'Fuel Surcharge Adjustment',
    termHi: 'ईंधन अधिभार समायोजन (FSA / FPPPA)',
    shortCode: 'FSA',
    category: 'charges',
    definitionEn: 'A variable per-unit levy reflecting changes in coal, fuel, and transmission purchase costs incurred by power generating companies.',
    definitionHi: 'बिजली उत्पादन कंपनियों द्वारा कोयले, गैस और ट्रांसमिशन के बढ़े हुए खर्चों की भरपाई के लिए प्रति यूनिट लगाया जाने वाला परिवर्तनीय शुल्क।',
    whyOnBillEn: 'HERC allows distribution utilities to recover fluctuating fuel purchase costs periodically. Currently in Haryana, FSA benchmark is around 37 to 40 paise per unit.',
    whyOnBillHi: 'हरियाणा विद्युत विनियामक आयोग (HERC) समय-समय पर इसकी दर तय करता है। वर्तमान में हरियाणा में FSA दर लगभग 37 से 40 पैसे प्रति यूनिट है।',
    consumerTipEn: 'FSA applies strictly to actual units consumed, not on fixed charges.',
    consumerTipHi: 'FSA केवल वास्तविक उपभोग की गई यूनिटों पर लगता है, फिक्स चार्ज पर नहीं।'
  },
  {
    termEn: 'Maximum Demand Indicator & Surcharge',
    termHi: 'अधिकतम मांग संकेतक (MDI) व ओवरड्रावल चार्ज',
    shortCode: 'MDI',
    category: 'meter',
    definitionEn: 'The highest instantaneous electrical load recorded by your electronic/smart meter during any 30-minute integration period in a month.',
    definitionHi: 'माह के दौरान किसी भी 30 मिनट में आपके घर द्वारा एक साथ खींचा गया अधिकतम बिजली लोड (kW में)।',
    whyOnBillEn: 'If your MDI exceeds your sanctioned load (e.g. running 3 ACs simultaneously on a 2 kW connection), the smart meter flags load violation.',
    whyOnBillHi: 'यदि आपका स्वीकृत लोड 2 kW है और आपने 3 एसी एक साथ चला दिए तो MDI 4.5 kW दर्ज हो जाएगी, जिससे लोड पेनल्टी लग सकती है।',
    consumerTipEn: 'Regularly check the MDI register on your meter. If you continuously exceed sanctioned load, apply for load extension on the portal to avoid penalty surcharges.',
    consumerTipHi: 'मीटर का पुश बटन दबाकर MDI चेक करें। यदि लोड लगातार अधिक आ रहा है तो पोर्टल पर लोड बढ़ाने का आवेदन दें ताकि जुर्माने से बचें।'
  },
  {
    termEn: 'Electricity Duty & Municipal Tax',
    termHi: 'विद्युत शुल्क (ED) एवं नगर पालिका कर (MT)',
    shortCode: 'ED & MT',
    category: 'charges',
    definitionEn: 'State government and local urban civic taxes levied on electrical units consumed.',
    definitionHi: 'राज्य सरकार और स्थानीय नगर निगम/नगर पालिका द्वारा उपभोग की गई बिजली यूनिटों पर लगाया जाने वाला कर।',
    whyOnBillEn: 'In Haryana, Electricity Duty (ED) is 10 paise/unit and Municipal Tax (MT) is 5 paise/unit (in municipal corporation/committee limits).',
    whyOnBillHi: 'हरियाणा में इलेक्ट्रिसिटी ड्यूटी 10 पैसे प्रति यूनिट तथा शहरी क्षेत्रों में म्यूनिसिपल टैक्स 5 पैसे प्रति यूनिट की दर से लगता है।',
    consumerTipEn: 'Rural agricultural tubewells and specific rural hamlets are exempt from Municipal Tax.',
    consumerTipHi: 'ग्रामीण क्षेत्रों और कृषि ट्यूबवेलों पर नगर पालिका कर (MT) नहीं लगता।'
  },
  {
    termEn: 'Monthly Minimum Charges / Fixed Charges',
    termHi: 'मासिक न्यूनतम शुल्क (MMC) / फिक्स चार्ज',
    shortCode: 'MMC / FC',
    category: 'charges',
    definitionEn: 'The baseline charge payable to maintain distribution infrastructure, irrespective of whether power is consumed.',
    definitionHi: 'बिजली ग्रिड व लाइन के रखरखाव का आधारभूत शुल्क, भले ही घर बंद रहे या शून्य यूनिट बिजली खर्च हो।',
    whyOnBillEn: 'In Haryana, domestic Category 1 (up to 2 kW, consumption ≤100 units) has NO fixed charges. Category 2 has NO fixed charges up to 300 units/month, and ₹50/kW/month only if consumption crosses 300 units.',
    whyOnBillHi: 'हरियाणा में 2 kW तक के घरेलू कनेक्शन (कैट-1) पर फिक्स चार्ज शून्य है। 5 kW तक कैट-2 में 300 यूनिट तक फिक्स चार्ज शून्य है, 300 यूनिट पार करने पर ₹50/kW लगता है।',
    consumerTipEn: 'If your consumption was below 300 units and you are billed fixed charges, challenge it immediately with the SDO.',
    consumerTipHi: 'यदि आपका मासिक उपभोग 300 यूनिट से कम था और फिर भी बिल में फिक्स चार्ज जोड़ा गया है, तो तुरंत आपत्ति दर्ज कराएं।'
  },
  {
    termEn: 'Defective / Faulty Meter Remark',
    termHi: 'डिफेक्टिव मीटर रिमार्क (DEF / D)',
    shortCode: 'DEF',
    category: 'meter',
    definitionEn: 'Status code indicating the meter is stopped, burnt, display damaged, or recording abnormally.',
    definitionHi: 'बिल पर यह कोड दर्शाता है कि मीटर बंद पड़ा है, जल चुका है, डिस्प्ले खराब है या गलत रीडिंग दे रहा है।',
    whyOnBillEn: 'When marked DEF, DISCOM generates bills on average estimation (last year corresponding period). By HERC regulation, DEF billing can only continue for maximum 2 billing cycles.',
    whyOnBillHi: 'DEF लगने पर निगम पिछले साल के औसत पर बिल भेजता है। HERC नियमों के अनुसार अधिकतम 2 बिलिंग चक्रों के भीतर मीटर बदलना कानूनी रूप से अनिवार्य है।',
    consumerTipEn: 'Never ignore a DEF remark! Submit our SDO complaint letter to replace the meter, or else discoms may later raise massive retrospective penalty bills.',
    consumerTipHi: 'DEF कोड दिखते ही तुरंत SDO को मीटर बदलने का आवेदन दें, अन्यथा बाद में औसत बिलों का भारी एरियर आ सकता है।'
  },
  {
    termEn: 'Reading Not Taken / House Locked',
    termHi: 'रीडिंग न ली जाना / मकान बंद (RN / NV / L)',
    shortCode: 'RN / NV',
    category: 'meter',
    definitionEn: 'The meter reader was unable to record reading because premises were locked (L) or reader did not visit (NV).',
    definitionHi: 'मीटर रीडर मौके पर नहीं पहुंचा (NV) या मकान बंद मिला (L), जिसके कारण मीटर रीडिंग दर्ज नहीं हो सकी।',
    whyOnBillEn: 'An estimated provisional bill is generated. Once the actual reading is taken in the next cycle, slabs may jump and push you into higher tariff brackets unfairly.',
    whyOnBillHi: 'अस्थायी औसत बिल बन जाता है। अगले महीने जब दोनों महीनों की रीडिंग एक साथ आती है तो स्लैब जंप होकर भारी बिल आ जाता है।',
    consumerTipEn: 'Prevent this by submitting Self Meter Reading via official WhatsApp (Trust Billing) before the bill generation date.',
    consumerTipHi: 'इससे बचने के लिए बिलिंग तारीख से 2 दिन पहले डिस्कॉम के व्हाट्सएप बॉट पर खुद रीडिंग फोटो भेजें (ट्रस्ट बिलिंग)।'
  },
  {
    termEn: 'Consumer Grievances Redressal Forum',
    termHi: 'उपभोक्ता शिकायत निवारण मंच (CGRF)',
    shortCode: 'CGRF',
    category: 'legal',
    definitionEn: 'Statutory quasi-judicial consumer court established under Section 42(5) of Electricity Act 2003 to resolve consumer disputes against DISCOMs.',
    definitionHi: 'विद्युत अधिनियम 2003 के तहत गठित स्वतंत्र उपभोक्ता अदालत, जो बिजली बोर्ड की ज्यादती या गलत बिलों के खिलाफ फैसला सुनाती है।',
    whyOnBillEn: 'If SDO or Executive Engineer fails to resolve your bill dispute, burnt transformer, or delay within 21 days, you can file a direct petition in CGRF.',
    whyOnBillHi: 'यदि एसडीओ या एक्सईएन 21 दिनों में आपकी समस्या हल न करें, तो आप सीधे CGRF में वाद दायर कर सकते हैं।',
    consumerTipEn: 'Haryana has 3 tiers of CGRF: Sub-Divisional (up to ₹50,000 disputes), Circle (up to ₹3 Lakh), and Corporate (above ₹3 Lakh). No court fee is charged to consumers!',
    consumerTipHi: 'CGRF में अपील करने की कोई फीस नहीं होती! उप-मंडल स्तर पर ₹50,000 तक, सर्कल स्तर पर ₹3 लाख तक, और कॉर्पोरेट स्तर पर ₹3 लाख से ऊपर के विवाद सुने जाते हैं।'
  },
  {
    termEn: 'Electricity Ombudsman',
    termHi: 'विद्युत लोकपाल (हरियाणा)',
    shortCode: 'Ombudsman',
    category: 'legal',
    definitionEn: 'An independent appellate authority appointed by HERC to hear appeals against decisions of the CGRF.',
    definitionHi: 'HERC द्वारा नियुक्त उच्च अपीलीय प्राधिकारी, जहां CGRF के फैसले से असंतुष्ट होने पर 30 दिनों में अपील की जा सकती है।',
    whyOnBillEn: 'The final consumer grievance mechanism before approaching the High Court. Orders of the Ombudsman are legally binding on DISCOMs.',
    whyOnBillHi: 'हाईकोर्ट जाने से पहले यह अंतिम विधिक मंच है। लोकपाल के आदेश का पालन करना बिजली निगम के लिए बाध्यकारी होता है।',
    consumerTipEn: 'Ombudsman office is located at HERC Headquarters in Sector 4, Panchkula. Petitions can be submitted by registered post.',
    consumerTipHi: 'लोकपाल कार्यालय HERC मुख्यालय सेक्टर 4 पंचकूला में स्थित है। पंजीकृत डाक या ईमेल द्वारा अपील भेजी जा सकती है।'
  }
];

export const BillGlossaryPage: React.FC<Props> = ({ lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedCode, setExpandedCode] = useState<string | null>('ACD');

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = 
      item.shortCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.termEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.termHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definitionEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definitionHi.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <SeoHead
        title={lang === 'hi' 
          ? 'हरियाणा बिजली बिल शब्दावली व चार्ज डिकोडर | ACD, FSA, MDI नियम' 
          : 'Haryana Electricity Bill Terms Glossary & Charges Decoder | ACD, FSA, MDI'}
        description={lang === 'hi'
          ? 'समझें हरियाणा बिजली बिल के सभी जटिल शब्द: ACD क्या है, FSA क्यों जुड़ता है, फिक्स चार्ज कब लगता है और DEF/RN रिमार्क का क्या अर्थ है।'
          : 'Decode complex line items on your UHBVN and DHBVN electricity bill: ACD security deposit, FSA fuel surcharge, MDI penalties, MMC, DEF and CGRF rules.'}
        path="/bill-glossary"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'बिल शब्दावली डिकोडर' : 'Bill Terms Glossary' }
          ]}
        />

        {/* Hero Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  {lang === 'hi' ? 'नागरिक अधिकार व बिल डिकोडर' : 'Citizen Rights & Bill Decoder'}
                </span>
                <LastVerifiedBadge lang={lang} source="HERC Supply Code & Tariff Regulations" />
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === 'hi' 
                  ? 'हरियाणा बिजली बिल शब्दावली एवं शुल्क गाइड' 
                  : 'Haryana Electricity Bill Terms & Charges Glossary'}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'बिजली बिल में अचानक जुड़े ACD, FSA, या फिक्स चार्ज से हैरान हैं? यहां जानें हर लाइन आइटम का सटीक कानूनी अर्थ, विधिक नियम और उपभोक्ता सुरक्षा उपाय।'
                  : 'Confused by sudden charges like ACD, FSA, or MDI on your bill? Learn what each item means under Haryana Electricity Regulatory Commission (HERC) laws.'}
              </p>
            </div>

            {/* Quick Helpline Box */}
            <div className="shrink-0 p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 text-xs sm:text-sm space-y-2 lg:max-w-xs">
              <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">
                {lang === 'hi' ? 'बिलिंग सहायता हेल्पलाइन' : 'Billing Help Helplines'}
              </span>
              <p className="text-slate-300 text-xs">
                {lang === 'hi' 
                  ? 'गलत चार्ज दिखने पर 1912 पर कॉल करके शिकायत डॉकेट नंबर दर्ज कराएं।' 
                  : 'Report unauthorized charges to 1912 to secure an investigation docket.'}
              </p>
              <div className="pt-2 flex flex-col gap-1.5 font-mono text-xs">
                <a href="tel:1912" className="text-rose-400 font-bold hover:underline">1912 (24x7 Universal)</a>
                <span className="text-slate-400 text-[11px]">DHBVN: 1800-180-4334</span>
                <span className="text-slate-400 text-[11px]">UHBVN: 1800-180-1550</span>
              </div>
            </div>
          </div>

          {/* Search & Category Filter */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'hi' ? 'शब्द या कोड खोजें (जैसे ACD, FSA, MDI, DEF, CGRF)...' : 'Search by term or code (e.g. ACD, FSA, MDI, DEF, CGRF)...'}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50 focus:bg-white transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', labelEn: 'All Terms', labelHi: 'सभी शब्द' },
                { id: 'charges', labelEn: 'Tariff & Surcharges', labelHi: 'चार्ज व टैक्स' },
                { id: 'meter', labelEn: 'Meter Status Codes', labelHi: 'मीटर कोड' },
                { id: 'legal', labelEn: 'Legal & CGRF Courts', labelHi: 'विधिक व CGRF' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {lang === 'hi' ? tab.labelHi : tab.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Terms Accordion / List */}
        <div className="space-y-4 mb-12">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-700">
                {lang === 'hi' ? 'कोई परिणाम नहीं मिला।' : 'No matching terms found.'}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-2 text-xs text-emerald-700 font-bold hover:underline"
              >
                {lang === 'hi' ? 'सभी शब्द देखें' : 'Reset search'}
              </button>
            </div>
          ) : (
            filteredTerms.map((item) => {
              const isExpanded = expandedCode === item.shortCode;
              return (
                <div
                  key={item.shortCode}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs hover:border-slate-300"
                >
                  <button
                    onClick={() => setExpandedCode(isExpanded ? null : item.shortCode)}
                    className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 font-black text-xs sm:text-sm flex items-center justify-center shrink-0 border border-emerald-200/60 font-mono">
                        {item.shortCode}
                      </span>
                      <div>
                        <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                          {lang === 'hi' ? item.termHi : item.termEn}
                        </h2>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {lang === 'hi' ? item.definitionHi : item.definitionEn}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 text-slate-600">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm space-y-4">
                      <div>
                        <span className="font-bold text-slate-900 block mb-1">
                          {lang === 'hi' ? 'सरल परिभाषा:' : 'Definition:'}
                        </span>
                        <p className="text-slate-700 leading-relaxed">
                          {lang === 'hi' ? item.definitionHi : item.definitionEn}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="font-bold text-slate-900 block mb-1">
                          {lang === 'hi' ? 'यह बिल में क्यों जुड़ता है?' : 'Why does this appear on your bill?'}
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {lang === 'hi' ? item.whyOnBillHi : item.whyOnBillEn}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                        <div className="flex items-center gap-1.5 font-extrabold text-emerald-900 mb-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span>{lang === 'hi' ? 'उपभोक्ता कानूनी अधिकार व सलाह:' : 'Consumer Rights & Advice:'}</span>
                        </div>
                        <p className="text-slate-800 leading-relaxed">
                          {lang === 'hi' ? item.consumerTipHi : item.consumerTipEn}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Problem-First Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link
            to="/bill-sanity-checker"
            className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-emerald-400 hover:shadow-sm transition-all group"
          >
            <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
              ✓
            </span>
            <h3 className="font-extrabold text-base text-slate-900 mb-1">
              {lang === 'hi' ? 'बिल सेनिटी चेकर' : 'Bill Sanity Checker'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {lang === 'hi'
                ? 'अपने मीटर की पिछली और वर्तमान रीडिंग डालकर जांचें कि निगम ने अधिक बिल तो नहीं लगाया।'
                : 'Enter your previous & current readings to verify if charges match official HERC slabs.'}
            </p>
            <span className="text-xs font-bold text-emerald-700 inline-flex items-center gap-1 group-hover:underline">
              <span>{lang === 'hi' ? 'जांच शुरू करें' : 'Check bill accuracy'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            to="/complaint-generator"
            className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-rose-400 hover:shadow-sm transition-all group"
          >
            <span className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
              ✉
            </span>
            <h3 className="font-extrabold text-base text-slate-900 mb-1">
              {lang === 'hi' ? 'विधिक शिकायत पत्र जनरेटर' : 'Statutory Complaint Generator'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {lang === 'hi'
                ? 'गलत बिल, जले मीटर, या वोल्टेज समस्या पर SDO/XEN को प्रस्तुत करने हेतु औपचारिक पत्र बनाएं।'
                : 'Generate ready-to-print formal legal notices to the SDO under HERC Consumer Protection rules.'}
            </p>
            <span className="text-xs font-bold text-rose-700 inline-flex items-center gap-1 group-hover:underline">
              <span>{lang === 'hi' ? 'पत्र तैयार करें' : 'Generate letter'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link
            to="/bill-calculator"
            className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs hover:border-sky-400 hover:shadow-sm transition-all group"
          >
            <span className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
              ₹
            </span>
            <h3 className="font-extrabold text-base text-slate-900 mb-1">
              {lang === 'hi' ? 'घरेलू बिल कैलकुलेटर' : 'Domestic Bill Calculator'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {lang === 'hi'
                ? 'HERC वित्त वर्ष 2025-26 के सटीक स्लैब, फिक्स चार्ज, FSA एवं छूट के साथ संपूर्ण गणना।'
                : 'Calculate your exact domestic electricity bill with official slab breakdowns and taxes.'}
            </p>
            <span className="text-xs font-bold text-sky-700 inline-flex items-center gap-1 group-hover:underline">
              <span>{lang === 'hi' ? 'कैलकुलेटर खोलें' : 'Open calculator'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};
