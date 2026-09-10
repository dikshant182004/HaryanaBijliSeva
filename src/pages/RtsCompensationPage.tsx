import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Copy, 
  Check, 
  Calendar, 
  Scale, 
  IndianRupee,
  Building2,
  Send,
  ExternalLink
} from 'lucide-react';
import { Language, DiscomType } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

type RtsServiceType = 
  | 'average_billing' 
  | 'transformer_burnt' 
  | 'fuse_off' 
  | 'new_connection' 
  | 'burnt_meter'
  | 'mco_update';

interface ServiceDetail {
  id: RtsServiceType;
  nameEn: string;
  nameHi: string;
  statutoryLimitEn: string;
  statutoryLimitHi: string;
  compensationRuleEn: string;
  compensationRuleHi: string;
  maxCompensation: number;
}

const RTS_SERVICES: ServiceDetail[] = [
  {
    id: 'average_billing',
    nameEn: 'Prolonged Average / Incorrect Billing',
    nameHi: 'लगातार गलत या औसत (Average) बिलिंग',
    statutoryLimitEn: 'Max 1 cycle on average; must read meter within 2 months',
    statutoryLimitHi: 'अधिकतम 1 चक्र औसत; 2 माह में वास्तविक रीडिंग अनिवार्य',
    compensationRuleEn: '₹500 per wrong bill cycle + up to ₹5,000 administrative penalty recovered from defaulting officials',
    compensationRuleHi: 'प्रत्येक गलत बिल पर ₹500 मुआवजा + दोषी अधिकारियों के वेतन से ₹5,000 तक हर्जाना',
    maxCompensation: 5000
  },
  {
    id: 'transformer_burnt',
    nameEn: 'Distribution Transformer Failure / Burnt',
    nameHi: 'ट्रांसफॉर्मर जलना / खराब होना',
    statutoryLimitEn: '24 hours (Urban / Towns) / 48 hours (Rural)',
    statutoryLimitHi: '24 घंटे (शहरी क्षेत्र) / 48 घंटे (ग्रामीण क्षेत्र)',
    compensationRuleEn: '₹200 per day of delay beyond 24/48 hours (Up to ₹5,000 under RTS Commission)',
    compensationRuleHi: 'समय सीमा के बाद ₹200 प्रतिदिन देरी का हर्जाना (अधिकतम ₹5,000)',
    maxCompensation: 5000
  },
  {
    id: 'fuse_off',
    nameEn: 'No Power / Fuse-Off Call / Breakdown',
    nameHi: 'बिजली गुल / फ्यूज उड़ना / लाइन फॉल्ट',
    statutoryLimitEn: '4 hours (Urban) / 16 hours (Rural)',
    statutoryLimitHi: '4 घंटे (शहरी) / 16 घंटे (ग्रामीण)',
    compensationRuleEn: '₹100 for each additional 4 hours of delay',
    compensationRuleHi: 'अतिरिक्त 4 घंटे की देरी पर ₹100 मुआवजा',
    maxCompensation: 3000
  },
  {
    id: 'new_connection',
    nameEn: 'Release of New Electricity Connection / Load Extension',
    nameHi: 'नया बिजली कनेक्शन / लोड बढ़ोतरी में देरी',
    statutoryLimitEn: '3 days (Metro), 7 days (Municipal), 15 days (Rural)',
    statutoryLimitHi: '3 दिन (मेट्रो), 7 दिन (नगर पालिका), 15 दिन (ग्रामीण)',
    compensationRuleEn: '₹250 per day of default beyond stipulated time limit (Up to ₹5,000)',
    compensationRuleHi: 'तय सीमा से अधिक देरी पर ₹250 प्रतिदिन (अधिकतम ₹5,000)',
    maxCompensation: 5000
  },
  {
    id: 'burnt_meter',
    nameEn: 'Replacement of Burnt / Defective Meter',
    nameHi: 'जले या खराब मीटर को बदलना',
    statutoryLimitEn: '3 days (Urban) / 7 days (Rural) after complaint',
    statutoryLimitHi: 'शिकायत के 3 दिन (शहरी) / 7 दिन (ग्रामीण)',
    compensationRuleEn: '₹100 per day of delay (Consumer cannot be charged average beyond 2 billing cycles)',
    compensationRuleHi: '₹100 प्रतिदिन देरी + 2 चक्र से अधिक औसत बिलिंग अवैध',
    maxCompensation: 4000
  },
  {
    id: 'mco_update',
    nameEn: 'Meter Change Order (MCO) Posting in System',
    nameHi: 'सॉफ्टवेयर में मीटर चेंज आर्डर (MCO) अपडेट न होना',
    statutoryLimitEn: '7 working days from physical meter replacement',
    statutoryLimitHi: 'मीटर बदले जाने के 7 कार्यदिवस के भीतर',
    compensationRuleEn: '₹500 flat compensation for harassment caused by pending MCO entries',
    compensationRuleHi: 'लंबित MCO के कारण अनावश्यक बिल विवाद पर ₹500 फ्लैट मुआवजा',
    maxCompensation: 2500
  }
];

export const RtsCompensationPage: React.FC<Props> = ({ lang }) => {
  const [discom, setDiscom] = useState<DiscomType>('UHBVN');
  const [selectedService, setSelectedService] = useState<RtsServiceType>('average_billing');
  const [areaType, setAreaType] = useState<'urban' | 'rural'>('urban');
  const [unitsDelayed, setUnitsDelayed] = useState<number>(3); // Cycles or Days
  const [complaintNumber, setComplaintNumber] = useState<string>('');
  const [consumerName, setConsumerName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const currentService = RTS_SERVICES.find(s => s.id === selectedService) || RTS_SERVICES[0];

  // Calculate estimated compensation
  let estimatedCompensation = 0;
  if (selectedService === 'average_billing') {
    // ₹500 per wrong billing cycle + ₹1,000 base harassment under RTSC precedent
    estimatedCompensation = Math.min(5000, unitsDelayed * 500 + 1000);
  } else if (selectedService === 'transformer_burnt') {
    // ₹200 per day of delay
    estimatedCompensation = Math.min(5000, unitsDelayed * 200);
  } else if (selectedService === 'fuse_off') {
    // ₹100 per 4-hr block
    estimatedCompensation = Math.min(3000, unitsDelayed * 100);
  } else if (selectedService === 'new_connection') {
    // ₹250 per day
    estimatedCompensation = Math.min(5000, unitsDelayed * 250);
  } else if (selectedService === 'burnt_meter') {
    // ₹100 per day
    estimatedCompensation = Math.min(4000, unitsDelayed * 100);
  } else {
    estimatedCompensation = Math.min(2500, unitsDelayed * 250);
  }

  // Formal RTSC / AAS Grievance Draft
  const grievanceDraft = `To,
The Secretary / Designated Appellate Authority,
Haryana Right to Service Commission (HRTSC) / First Grievance Redressal Authority (XEN),
${discom} Power Utilities, Haryana.
(Filed under the Haryana Right to Service Act, 2014 & Auto Appeal System)

Subject: Formal Claim for Delay Compensation and Action under Section 17 & 19 of Haryana Right to Service Act, 2014 for default in service: "${currentService.nameEn}".

Respected Sir/Madam,

I am a registered consumer of ${discom} with the following credentials:
Consumer Name: ${consumerName || '[YOUR FULL NAME]'}
Account Number: ${accountNumber || '[YOUR 10-DIGIT ACCOUNT NUMBER]'}
Complaint / Saral Reference ID: ${complaintNumber || '[1912 COMPLAINT ID / SARAL ID]'}
Area Type: ${areaType === 'urban' ? 'Urban / Municipal' : 'Rural / Village'}

1. Under the Haryana Right to Service Act, 2014 and the notified Citizen Service Charter for Power Utilities, the designated time limit for "${currentService.nameEn}" is:
   => ${currentService.statutoryLimitEn}

2. The concerned field officials of ${discom} have failed to provide the notified service within the statutory period. The default / delay is:
   => ${unitsDelayed} ${selectedService === 'average_billing' ? 'consecutive billing cycles' : 'days / units delayed'}.

3. As held in recent landmark orders of the Haryana Right to Service Commission, default in providing notified electricity services constitutes administrative negligence, entitling the consumer to statutory compensation (up to ₹5,000), along with ₹500 for each wrongly issued billing cycle.

Estimated Statutory Compensation Claim: ₹${estimatedCompensation.toLocaleString('en-IN')}

PRAYER:
1. Direct the respondent Nigam (${discom}) to immediately rectify the service deficiency.
2. Grant statutory compensation of ₹${estimatedCompensation.toLocaleString('en-IN')} to the applicant consumer.
3. Initiate disciplinary inquiry against the defaulting Designated Officer / SDO under the provisions of the Haryana Right to Service Act, 2014.

Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
Applicant Name: ${consumerName || '[Your Name]'}
Contact / Account No: ${accountNumber || '[Your Account Number]'}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(grievanceDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // SEO Metadata
  const pageTitle = lang === 'hi'
    ? 'हरियाणा राइट टू सर्विस (RTS) बिजली मुआवजा कैलकुलेटर: UHBVN व DHBVN देरी पर ₹5,000 हर्जाना'
    : 'Haryana Right to Service (RTS) Electricity Delay Compensation Calculator: UHBVN & DHBVN Penalties';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा राइट टू सर्विस कमीशन (HRTSC) के तहत ट्रांसफॉर्मर जलने, गलत औसत बिलिंग या नए कनेक्शन में देरी पर मिलने वाले ₹5,000 तक के कानूनी मुआवजे की गणना करें और ऑटो-अपील लेटर तैयार करें।'
    : 'Calculate statutory compensation up to ₹5,000 for power cut, burnt transformer, and average billing delays under the Haryana Right to Service Act, 2014. File Auto-Appeal System (AAS) claim.';

  const keywords = [
    'haryana right to service electricity compensation',
    'hrtsc electricity complaint format',
    'uhbvn average billing compensation',
    'dhbvn power outage penalty timeline',
    'saral haryana auto appeal system electricity',
    'transformer burnt replacement time haryana',
    'राइट टू सर्विस कमीशन बिजली शिकायत हरियाणा'
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: pageTitle,
    description: pageDescription,
    url: 'https://haryanabijliseva.in/rts-compensation',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR'
    }
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/rts-compensation"
        keywords={keywords}
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <nav className="flex text-sm text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-emerald-700">
              {lang === 'hi' ? 'होम' : 'Home'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">
              {lang === 'hi' ? 'राइट टू सर्विस मुआवजा' : 'RTS Compensation Calculator'}
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold mb-2">
                <ShieldAlert className="w-3.5 h-3.5" />
                {lang === 'hi' ? 'हरियाणा राइट टू सर्विस एक्ट, 2014' : 'Haryana Right to Service Act, 2014'}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {lang === 'hi' 
                  ? 'हरियाणा बिजली सेवा देरी मुआवजा कैलकुलेटर'
                  : 'Haryana Electricity Service Delay Compensation Calculator'}
              </h1>
              <p className="mt-2 text-slate-600 max-w-3xl text-sm sm:text-base">
                {lang === 'hi'
                  ? 'हरियाणा राइट टू सर्विस कमीशन (HRTSC) के अनुसार समय सीमा में बिजली सेवाएं न देने पर उपभोक्ताओं को ₹5,000 तक का मुआवजा तथा गलत बिलिंग पर ₹500 प्रति बिल चक्र हर्जाना मिलता है, जो दोषी अधिकारियों के वेतन से वसूला जाता है।'
                  : 'Under the Haryana Right to Service Commission (HRTSC), failure by UHBVN or DHBVN to deliver statutory electricity services within prescribed timelines mandates compensation up to ₹5,000 to the citizen, plus ₹500 per faulty bill cycle.'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Grid: Calculator Inputs & Output Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Scale className="w-5 h-5 text-rose-600" />
                {lang === 'hi' ? 'प्रभावित सेवा व देरी का चयन करें' : 'Select Affected Service & Delay'}
              </h2>

              <div className="space-y-5">
                {/* Discom Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      {lang === 'hi' ? 'बिजली निगम' : 'Distribution Utility'}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDiscom('UHBVN')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          discom === 'UHBVN'
                            ? 'border-rose-600 bg-rose-50 text-rose-900'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        UHBVN (उत्तर)
                      </button>
                      <button
                        type="button"
                        onClick={() => setDiscom('DHBVN')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          discom === 'DHBVN'
                            ? 'border-rose-600 bg-rose-50 text-rose-900'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        DHBVN (दक्षिण)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      {lang === 'hi' ? 'क्षेत्र का प्रकार' : 'Area Category'}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setAreaType('urban')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          areaType === 'urban'
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {lang === 'hi' ? 'शहरी / नगर' : 'Urban / City'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setAreaType('rural')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          areaType === 'rural'
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {lang === 'hi' ? 'ग्रामीण / गांव' : 'Rural / Village'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    {lang === 'hi' ? 'देरी किस सेवा में हुई है?' : 'Select Affected Electricity Service'}
                  </label>
                  <div className="space-y-2.5">
                    {RTS_SERVICES.map((serv) => (
                      <label
                        key={serv.id}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          selectedService === serv.id
                            ? 'border-rose-600 bg-rose-50/50 shadow-xs ring-1 ring-rose-500'
                            : 'border-slate-200 bg-white hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="rts_service"
                          value={serv.id}
                          checked={selectedService === serv.id}
                          onChange={() => setSelectedService(serv.id)}
                          className="mt-1 text-rose-600 focus:ring-rose-500"
                        />
                        <div className="flex-1 text-xs">
                          <div className="font-bold text-slate-900 text-sm">
                            {lang === 'hi' ? serv.nameHi : serv.nameEn}
                          </div>
                          <div className="text-slate-600 mt-0.5">
                            <span className="font-semibold text-slate-700">
                              {lang === 'hi' ? 'वैधानिक सीमा: ' : 'Statutory Limit: '}
                            </span>
                            {lang === 'hi' ? serv.statutoryLimitHi : serv.statutoryLimitEn}
                          </div>
                          <div className="text-rose-700 font-medium mt-1">
                            {lang === 'hi' ? serv.compensationRuleHi : serv.compensationRuleEn}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Delay Input */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    {selectedService === 'average_billing'
                      ? (lang === 'hi' ? 'लगातार कितने बिल औसत/गलत आए हैं?' : 'How many consecutive cycles of average/wrong billing?')
                      : (lang === 'hi' ? 'तय समय सीमा से कितने दिन अतिरिक्त देरी हुई?' : 'How many days of delay beyond statutory deadline?')}
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={36}
                    value={unitsDelayed}
                    onChange={(e) => setUnitsDelayed(Math.max(1, Number(e.target.value)))}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-slate-900 font-semibold text-base"
                  />
                  <span className="text-[11px] text-slate-500 block mt-1">
                    {selectedService === 'average_billing'
                      ? (lang === 'hi' ? 'हर द्विमासिक गलत बिल चक्र पर ₹500 अतिरिक्त मुआवजा जुड़ता है।' : 'Each bimonthly incorrect billing cycle adds ₹500 statutory compensation.')
                      : (lang === 'hi' ? 'तय समय सीमा बीतने के बाद के अतिरिक्त दिन दर्ज करें।' : 'Enter the number of days delayed past the statutory limit.')}
                  </span>
                </div>

                {/* Consumer Details for Grievance Draft */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800 mb-3">
                    {lang === 'hi' ? 'ऑटो-अपील हेतु विवरण (वैकल्पिक)' : 'Details for Auto-Appeal Draft (Optional)'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? 'उपभोक्ता का नाम' : 'Consumer Full Name'}
                      value={consumerName}
                      onChange={(e) => setConsumerName(e.target.value)}
                      className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-1 focus:ring-rose-500"
                    />
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? '10-अंकों का खाता सं.' : '10-Digit Account No.'}
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-1 focus:ring-rose-500"
                    />
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? '1912 या सरल टोकन सं.' : '1912 Complaint / Saral ID'}
                      value={complaintNumber}
                      onChange={(e) => setComplaintNumber(e.target.value)}
                      className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-1 focus:ring-rose-500"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Landmark Precedent Callout */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                {lang === 'hi' ? 'हरियाणा राइट टू सर्विस आयोग का ऐतिहासिक फैसला' : 'Landmark HRTSC Rulings'}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {lang === 'hi' 
                  ? 'औसत बिलिंग व ट्रांसफॉर्मर देरी पर अधिकारियों के वेतन से कटौती' 
                  : 'Fines on Officials for Average Billing & Unresolved Faults'}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                {lang === 'hi'
                  ? 'हरियाणा राइट टू सर्विस आयोग ने स्पष्ट आदेश दिया है कि उपभोक्ताओं को लगातार महीनों तक औसत बिल जारी करना घोर प्रशासनिक लापरवाही है। आयोग ने बिजली निगमों को आदेश दिया है कि प्रभावित उपभोक्ताओं को प्रति गलत बिल ₹500 तथा ₹5,000 तक का हर्जाना दिया जाए, जो दोषी SDO/कर्मचारियों की जेब से काटा जाएगा।'
                  : 'The Haryana Right to Service Commission has repeatedly penalized power officials for issuing repeated average bills and delaying service restoration. The Commission ruled that continuous average billing without meter readings constitutes gross negligence, awarding up to ₹5,000 compensation payable to the citizen and recovered from the salary of the errant officers.'}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md border border-slate-700">
                  RTSC Act Section 17 & 19
                </span>
                <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md border border-slate-700">
                  Auto Appeal System (AAS) Haryana
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Compensation & Action Draft */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Compensation Summary Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                {lang === 'hi' ? 'अनुमानित कानूनी मुआवजा' : 'Estimated Statutory Compensation'}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-rose-600 flex items-baseline gap-1">
                <span>₹{estimatedCompensation.toLocaleString('en-IN')}</span>
                <span className="text-xs font-medium text-slate-500">
                  {lang === 'hi' ? '(HRTSC एक्ट 2014)' : '(Under RTS Act 2014)'}
                </span>
              </div>

              {/* Breakdown */}
              <div className="mt-5 space-y-3 divide-y divide-slate-100 text-sm">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">
                    {lang === 'hi' ? 'सेवा का प्रकार' : 'Service Category'}:
                  </span>
                  <span className="font-bold text-slate-900 text-right text-xs">
                    {lang === 'hi' ? currentService.nameHi : currentService.nameEn}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">
                    {lang === 'hi' ? 'वैधानिक समय सीमा' : 'Statutory Limit'}:
                  </span>
                  <span className="font-semibold text-emerald-700 text-right text-xs">
                    {lang === 'hi' ? currentService.statutoryLimitHi : currentService.statutoryLimitEn}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">
                    {lang === 'hi' ? 'देरी की अवधि' : 'Delay Recorded'}:
                  </span>
                  <span className="font-bold text-rose-600">
                    {unitsDelayed} {selectedService === 'average_billing' ? (lang === 'hi' ? 'बिल चक्र' : 'Cycles') : (lang === 'hi' ? 'दिन' : 'Days')}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 font-bold text-slate-900">
                  <span>{lang === 'hi' ? 'हर्जाना सीमा' : 'Max Statutory Ceiling'}:</span>
                  <span className="text-rose-600 text-base">₹{currentService.maxCompensation.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Filing Guidance */}
              <div className="mt-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">
                    {lang === 'hi' ? 'शिकायत कैसे दर्ज करें:' : 'How to Claim:'}
                  </span>{' '}
                  {lang === 'hi'
                    ? 'यदि 1912 या SDO कार्यालय आपकी समस्या तय समय में हल नहीं करता, तो सरल पोर्टल (saralharyana.gov.in) पर Auto Appeal System (AAS) के तहत अपील संख्या दर्ज कर यह ड्राफ्ट संलग्न करें।'
                    : 'If 1912 or the SDO fails to resolve the issue within the statutory deadline, log onto saralharyana.gov.in and file an appeal under the Auto Appeal System (AAS) with this claim draft.'}
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="https://saralharyana.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm transition-colors shadow-xs"
                >
                  <span>{lang === 'hi' ? 'सरल हरियाणा पोर्टल पर अपील करें' : 'File Appeal on Saral Haryana (AAS)'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Generated Formal Appeal Draft Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-rose-600" />
                  {lang === 'hi' ? 'राइट टू सर्विस क्लेम ड्राफ्ट' : 'Statutory RTSC Claim Draft'}
                </h3>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-rose-600" />
                      {lang === 'hi' ? 'कॉपी हो गया' : 'Copied!'}
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      {lang === 'hi' ? 'अपील पत्र कॉपी करें' : 'Copy Draft'}
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 max-h-64 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                {grievanceDraft}
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>{lang === 'hi' ? 'CGRF व XEN को भी प्रतिलिपि भेजें' : 'Can also be submitted to XEN & CGRF'}</span>
                <Link to="/grievance-1912" className="text-rose-700 font-bold hover:underline">
                  {lang === 'hi' ? '1912 शिकायत गाइड →' : '1912 Escalation Guide →'}
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Informational FAQ Section on RTS */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-rose-600" />
            {lang === 'hi' ? 'राइट टू सर्विस कमीशन (HRTSC) पर अक्सर पूछे जाने वाले सवाल' : 'Haryana Right to Service Act FAQs'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'ऑटो अपील सिस्टम (AAS) क्या है?' : 'What is the Auto Appeal System (AAS)?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'हरियाणा सरकार के अंत्योदय सरल पोर्टल पर दर्ज शिकायत यदि तय समय में हल नहीं होती, तो सॉफ्टवेयर स्वतः उसे उच्च अधिकारी (XEN / SE) के पास अपील के रूप में भेज देता है, जिसे Auto Appeal System कहते हैं।'
                  : 'Under Haryana Government’s AAS, if a grievance registered on Saral is not resolved within the notified RTS deadline, it automatically escalates to the Next Higher Appellate Authority without consumer intervention.'}
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'क्या ट्रांसफॉर्मर जलने पर 24 घंटे में बदलना जरूरी है?' : 'Is Transformer Replacement Mandatory within 24 Hours?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'हाँ, शहरी क्षेत्रों में 24 घंटे तथा ग्रामीण क्षेत्रों में अधिकतम 48 घंटे के भीतर जला हुआ ट्रांसफॉर्मर बदलना कानूनी बाध्यता है। यदि ऐसा नहीं होता तो निगम मुआवजा देने का पात्र है।'
                  : 'Yes, statutory RTS guidelines mandate transformer replacement within 24 hours in urban areas and 48 hours in rural areas. Delays entitle the consumer to statutory compensation.'}
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'औसत बिलिंग पर क्या हर्जाना मिलता है?' : 'What Compensation Applies for Chronic Average Billing?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'आयोग के आदेशानुसार लगातार 2 महीने से अधिक औसत बिल जारी करने पर प्रति गलत बिल चक्र ₹500 का हर्जाना और ₹5,000 तक की प्रशासनिक क्षतिपूर्ति उपभोक्ता को दी जाती है।'
                  : 'The Commission has awarded ₹500 per incorrect billing cycle plus up to ₹5,000 compensation for harassment when discoms repeatedly issue average bills instead of taking physical readings.'}
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'मुआवजा कौन देता है—निगम या अधिकारी?' : 'Who Pays the Compensation—Discom or Official?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'मुआवजा पहले बिजली निगम द्वारा उपभोक्ता के बिल में समायोजित या बैंक खाते में दिया जाता है, और बाद में यह राशि दोषी अधिकारी या कर्मचारी के वेतन से काटी जाती है।'
                  : 'Initially, the utility credits the compensation to the consumer’s ledger. The Commission then orders the recovery of this fine directly from the salary of the defaulting officer.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
