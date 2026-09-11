import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Calculator, 
  HelpCircle, 
  AlertCircle, 
  FileText, 
  Copy, 
  Check, 
  Download, 
  ArrowRight,
  Percent,
  Calendar,
  IndianRupee,
  Building,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { Language, DiscomType } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

export const AcdCalculatorPage: React.FC<Props> = ({ lang }) => {
  const [discom, setDiscom] = useState<DiscomType>('DHBVN');
  const [depositAmount, setDepositAmount] = useState<number>(6000);
  const [interestRate, setInterestRate] = useState<number>(6.75); // HERC / RBI Bank rate (6.5% - 6.75%)
  const [monthsDelayed, setMonthsDelayed] = useState<number>(0);
  const [consumerName, setConsumerName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [subdivision, setSubdivision] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Statutory Calculations
  // Standard Annual Interest = (Deposit * Rate) / 100
  const annualInterest = Math.round((depositAmount * interestRate) / 100);
  
  // Penal Interest: 18% per annum under HERC Supply Code Regulation 5.7 if not adjusted by April/May cycle
  const penalRate = 18;
  const penalInterest = monthsDelayed > 0 
    ? Math.round((depositAmount * penalRate * (monthsDelayed / 12)) / 100)
    : 0;

  const totalPayableByDiscom = annualInterest + penalInterest;

  // Formal SDO Claim Letter Draft
  const claimNoticeDraft = `To,
The Sub-Divisional Officer (SDO) / Commercial In-Charge,
${discom} Sub-Division: ${subdivision || '[Your Sub-Division Name, e.g., Sub-Division No. 1]'},
Haryana.

Subject: Claim for Non-Credit of Mandatory Interest on Advance Consumption Deposit (ACD / CSD) along with Penal Interest under HERC Regulation 5.7.

Respected Sir/Madam,

I am a registered consumer of ${discom} under Account Number: ${accountNumber || '[YOUR 10-DIGIT ACCOUNT NO.]'}, holding a sanctioned electricity connection at:
Consumer Name: ${consumerName || '[YOUR FULL NAME]'}
Advance Consumption Deposit (ACD) held with Nigam: ₹${depositAmount.toLocaleString('en-IN')}

1. Under Regulation 5.7 of the Haryana Electricity Regulatory Commission (HERC) Electricity Supply Code Regulations, 2014 and recurring Sales Circulars, the Nigam is statutorily mandated to pay annual interest on the Advance Consumption Security Deposit at the notified bank rate (currently ${interestRate}% p.a.).
2. Furthermore, the regulation specifies that this interest must be automatically adjusted/credited in the electricity bill issued in the first billing cycle of the financial year (April/May).
3. In my case, an annual interest of ₹${annualInterest.toLocaleString('en-IN')} has NOT been credited in my bill for the financial year.
${monthsDelayed > 0 ? `4. As the payment has been delayed by ${monthsDelayed} months beyond the statutory deadline, the Nigam is additionally liable to pay penal interest at the rate of 18% per annum amounting to ₹${penalInterest.toLocaleString('en-IN')} as prescribed under HERC regulations.` : ''}

Total Claim Amount Due: ₹${totalPayableByDiscom.toLocaleString('en-IN')}

Kindly audit my consumer ledger and credit the pending ACD interest amount along with penal interest in my upcoming billing cycle, or issue a refund credit voucher.

Thanking you,

Yours sincerely,
Name: ${consumerName || '[Consumer Name]'}
Account No: ${accountNumber || '[Account Number]'}
Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(claimNoticeDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // SEO Metadata
  const pageTitle = lang === 'hi'
    ? 'ACD ब्याज कैलकुलेटर हरियाणा 2025-26: UHBVN व DHBVN सिक्योरिटी डिपॉजिट ब्याज व 18% पेनल्टी नियम'
    : 'ACD Interest Calculator Haryana 2025-26: UHBVN & DHBVN Security Deposit Interest & 18% Penalty';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा बिजली बिल में जमा ACD (एडवांस कन्जम्प्शन डिपॉजिट) पर 6.75% वार्षिक ब्याज व देरी होने पर 18% जुर्माना ब्याज की गणना करें। HERC नियम 5.7 अनुसार SDO को क्लेम लेटर भेजें।'
    : 'Calculate statutory 6.75% annual interest on Haryana electricity ACD (Advance Consumption Deposit). Calculate 18% penal interest for delayed credit under HERC Supply Code Reg 5.7.';

  const keywords = [
    'haryana electricity acd interest calculator',
    'uhbvn acd interest rate 2025',
    'dhbvn consumption security deposit interest',
    'acd interest not received haryana bill',
    'herc supply code regulation 5.7 acd interest',
    '18 percent penal interest on acd delayed payment',
    'बिजली बिल एसीडी ब्याज हरियाणा',
    'सिक्योरिटी डिपॉजिट ब्याज कब मिलता है uhbvn'
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: pageTitle,
    description: pageDescription,
    url: 'https://haryanabijliseva.pages.dev/acd-calculator',
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
        path="/acd-calculator"
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
              {lang === 'hi' ? 'ACD ब्याज कैलकुलेटर' : 'ACD Interest Calculator'}
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                {lang === 'hi' ? 'HERC नियम 5.7 वैधानिक अधिकार' : 'HERC Supply Code Regulation 5.7 Mandate'}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {lang === 'hi' 
                  ? 'हरियाणा बिजली ACD सिक्योरिटी ब्याज कैलकुलेटर'
                  : 'Haryana Electricity ACD Security Deposit Interest Calculator'}
              </h1>
              <p className="mt-2 text-slate-600 max-w-3xl text-sm sm:text-base">
                {lang === 'hi'
                  ? 'UHBVN व DHBVN उपभोक्ताओं की जमा सुरक्षा राशि (ACD / CSD) पर हर वर्ष 6.5% - 6.75% वार्षिक ब्याज बिजली बिल में क्रेडिट करना अनिवार्य है। यदि अप्रैल/मई बिल में ब्याज नहीं मिला, तो निगम 18% वार्षिक जुर्माना ब्याज देने के लिए बाध्य है।'
                  : 'Calculate the statutory annual interest (6.5% - 6.75% p.a.) owed by UHBVN & DHBVN on your advance consumption security deposit. If delayed beyond the first billing cycle of the financial year, claim 18% statutory penal interest.'}
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
                <Calculator className="w-5 h-5 text-emerald-600" />
                {lang === 'hi' ? 'डिपॉजिट विवरण दर्ज करें' : 'Enter Deposit & Account Details'}
              </h2>

              <div className="space-y-5">
                {/* Discom Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    {lang === 'hi' ? 'बिजली वितरण निगम (Discom)' : 'Distribution Utility (Discom)'}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDiscom('DHBVN')}
                      className={`py-2.5 px-4 rounded-xl text-sm font-bold border transition-all text-center ${
                        discom === 'DHBVN'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      DHBVN (दक्षिण हरियाणा)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDiscom('UHBVN')}
                      className={`py-2.5 px-4 rounded-xl text-sm font-bold border transition-all text-center ${
                        discom === 'UHBVN'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      UHBVN (उत्तर हरियाणा)
                    </button>
                  </div>
                </div>

                {/* Deposit Amount */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                      {lang === 'hi' ? 'जमा सिक्योरिटी राशि (ACD / CSD)' : 'Advance Security Deposit Amount (ACD / CSD)'}
                    </label>
                    <span className="text-xs text-slate-500 font-medium">
                      {lang === 'hi' ? 'बिल पर "Security Deposit" देखें' : 'See "Security Deposit" on bill'}
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      min={500}
                      max={500000}
                      step={500}
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(Math.max(0, Number(e.target.value)))}
                      className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 font-semibold"
                      placeholder="e.g. 6000"
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-slate-500">
                    {lang === 'hi' 
                      ? 'सामान्य घरेलू कनेक्शन (2kW - 5kW) के लिए यह राशि ₹3,000 से ₹15,000 के बीच होती है।'
                      : 'Typical domestic connections (2kW - 5kW) hold ₹3,000 to ₹15,000 in security deposit.'}
                  </p>
                </div>

                {/* Interest Rate Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      {lang === 'hi' ? 'वार्षिक ब्याज दर (HERC / RBI)' : 'Annual Interest Rate (HERC / RBI)'}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.05"
                        min="3"
                        max="12"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full pr-8 pl-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 font-semibold"
                      />
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 font-bold">%</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      {lang === 'hi' ? 'FY 2024-26 के लिए आधिकारिक दर: 6.5% - 6.75%' : 'Official notified rate for FY 2024-26: 6.5% - 6.75%'}
                    </span>
                  </div>

                  {/* Delay in Months */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      {lang === 'hi' ? 'ब्याज मिलने में देरी (महीने)' : 'Months Delayed After April/May'}
                    </label>
                    <select
                      value={monthsDelayed}
                      onChange={(e) => setMonthsDelayed(Number(e.target.value))}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-900 font-semibold"
                    >
                      <option value={0}>{lang === 'hi' ? 'कोई देरी नहीं (0 माह)' : 'No Delay (Current Year)'}</option>
                      <option value={3}>{lang === 'hi' ? '3 महीने देरी' : '3 Months Delayed'}</option>
                      <option value={6}>{lang === 'hi' ? '6 महीने देरी' : '6 Months Delayed'}</option>
                      <option value={9}>{lang === 'hi' ? '9 महीने देरी' : '9 Months Delayed'}</option>
                      <option value={12}>{lang === 'hi' ? '1 वर्ष देरी (12 माह)' : '1 Year Delayed (12 Months)'}</option>
                      <option value={24}>{lang === 'hi' ? '2 वर्ष से ब्याज नहीं मिला (24 माह)' : '2 Years Delayed (24 Months)'}</option>
                    </select>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      {lang === 'hi' ? 'देरी पर 18% वार्षिक पेनाल्टी ब्याज लागू' : '18% p.a. statutory penal rate applies on delay'}
                    </span>
                  </div>
                </div>

                {/* Consumer Details for Instant Letter */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800 mb-3">
                    {lang === 'hi' ? 'शिकायत पत्र के लिए विवरण (वैकल्पिक)' : 'Consumer Details for Claim Notice (Optional)'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? 'उपभोक्ता का नाम' : 'Consumer Full Name'}
                      value={consumerName}
                      onChange={(e) => setConsumerName(e.target.value)}
                      className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? '10-अंकों का खाता सं.' : '10-Digit Account No.'}
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? 'सब-डिवीजन / शहर' : 'Sub-Division / City'}
                      value={subdivision}
                      onChange={(e) => setSubdivision(e.target.value)}
                      className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Statutory Regulations Explainer Card */}
            <div className="bg-emerald-950 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Building className="w-4 h-4" />
                {lang === 'hi' ? 'हरियाणा विद्युत विनियामक आयोग (HERC) नियम' : 'HERC Statutory Regulations'}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {lang === 'hi' ? 'विनियमन 5.7: ब्याज व 18% जुर्माना नियम' : 'Supply Code Regulation 5.7: Interest & 18% Penal Rate'}
              </h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed mb-4">
                {lang === 'hi'
                  ? 'हरियाणा इलेक्ट्रिसिटी सप्लाई कोड 2014 के विनियमन 5.7 के अनुसार, विद्युत निगम उपभोक्ता की सिक्योरिटी डिपॉजिट राशि पर 1 अप्रैल को घोषित आरबीआई बैंक दर के बराबर ब्याज देगा। यह ब्याज वित्तीय वर्ष के पहले बिल चक्र (अप्रैल/मई) में एडजस्ट करना अनिवार्य है। ऐसा न करने पर निगम 18% वार्षिक दर से दंडात्मक ब्याज का भुगतान करेगा।'
                  : 'Under Regulation 5.7 of HERC Electricity Supply Code 2014, the distribution utility must pay interest on the consumer security deposit at the RBI bank rate as on 1st April of each year. The interest must be credited in the first billing cycle of the financial year (April/May). Defaulting utilities are strictly liable to pay 18% annual penal interest for the period of delay.'}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-emerald-900/80 text-emerald-200 px-3 py-1 rounded-md border border-emerald-800">
                  HERC Supply Code Reg. 5.7
                </span>
                <span className="bg-emerald-900/80 text-emerald-200 px-3 py-1 rounded-md border border-emerald-800">
                  Sales Circular U-06/2025 / D-08/2025
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculation Result & Demand Notice */}
          <div className="lg:col-span-5 space-y-6">
            {/* Calculation Result Summary Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                {lang === 'hi' ? 'निगम द्वारा देय कुल राशि' : 'Total Amount Payable by Discom'}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-700 flex items-baseline gap-1">
                <span>₹{totalPayableByDiscom.toLocaleString('en-IN')}</span>
                <span className="text-xs font-medium text-slate-500">
                  {lang === 'hi' ? '(कुल क्रेडिट योग्य राशि)' : '(Total statutory credit)'}
                </span>
              </div>

              {/* Detailed Breakdown */}
              <div className="mt-5 space-y-3 divide-y divide-slate-100 text-sm">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">
                    {lang === 'hi' ? 'जमा सिक्योरिटी राशि (ACD)' : 'Principal Security Deposit'}:
                  </span>
                  <span className="font-bold text-slate-900">₹{depositAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">
                    {lang === 'hi' ? `सालाना ब्याज दर (${interestRate}% p.a.)` : `Annual Statutory Interest (${interestRate}%)`}:
                  </span>
                  <span className="font-bold text-emerald-700">₹{annualInterest.toLocaleString('en-IN')}</span>
                </div>

                {monthsDelayed > 0 && (
                  <div className="flex justify-between items-center pt-2 bg-rose-50 -mx-4 px-4 py-2 rounded-lg">
                    <span className="text-rose-900 font-medium flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      {lang === 'hi' ? `देरी का जुर्माना (18% दर - ${monthsDelayed} माह)` : `Penal Interest (18% - ${monthsDelayed} mo)`}:
                    </span>
                    <span className="font-bold text-rose-700">₹{penalInterest.toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                <div className="flex justify-between items-center pt-3 font-bold text-slate-900">
                  <span>{lang === 'hi' ? 'बिजली बिल में छूट/क्रेडिट' : 'Bill Adjustment Credit'}:</span>
                  <span className="text-emerald-700 text-base">₹{totalPayableByDiscom.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Alert box if delayed */}
              {monthsDelayed > 0 ? (
                <div className="mt-4 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">{lang === 'hi' ? 'पेनाल्टी लागू:' : 'Penal Interest Applicable:'}</span>{' '}
                    {lang === 'hi'
                      ? 'क्योंकि निगम ने समय पर ब्याज क्रेडिट नहीं किया, आप ₹' + penalInterest.toLocaleString('en-IN') + ' का अतिरिक्त 18% जुर्माना ब्याज क्लेम करने के विधिक हकदार हैं।'
                      : `Because the utility delayed interest credit by ${monthsDelayed} months, you are entitled to ₹${penalInterest.toLocaleString('en-IN')} in additional 18% penal interest under HERC regulations.`}
                  </div>
                </div>
              ) : (
                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    {lang === 'hi'
                      ? 'यह ब्याज राशि आपके अप्रैल या मई महीने के बिजली बिल के "Adjustment/Rebate" कॉलम में स्वतः घटनी चाहिए।'
                      : 'This statutory amount should automatically reflect as a credit under the "Adjustment/Rebate" head in your April/May electricity bill.'}
                  </div>
                </div>
              )}
            </div>

            {/* Generated Formal SDO Notice Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  {lang === 'hi' ? 'SDO को भेजने हेतु तैयार नोटिस' : 'Formal SDO Claim Notice Draft'}
                </h3>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      {lang === 'hi' ? 'कॉपी हो गया' : 'Copied!'}
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      {lang === 'hi' ? 'लेटर कॉपी करें' : 'Copy Notice'}
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 max-h-64 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                {claimNoticeDraft}
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>{lang === 'hi' ? 'SDO कार्यालय में रिसीविंग लें' : 'Submit with receipt at SDO office'}</span>
                <Link to="/complaint-generator" className="text-emerald-700 font-bold hover:underline">
                  {lang === 'hi' ? 'अन्य शिकायत जनरेटर देखें →' : 'Other Complaint Generators →'}
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Informational FAQ Section on ACD */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            {lang === 'hi' ? 'ACD सिक्योरिटी व ब्याज पर अक्सर पूछे जाने वाले सवाल (FAQ)' : 'Frequently Asked Questions: Haryana ACD & Interest'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'बिजली बिल में ACD क्या होता है?' : 'What is ACD in Haryana Electricity Bill?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'ACD का मतलब Advance Consumption Deposit है। चूंकि आप बिजली का उपयोग करने के बाद बिल भरते हैं, इसलिए निगम दो महीने की औसत खपत के बराबर राशि सुरक्षा जमा (Security Deposit) के रूप में रखता है।'
                  : 'ACD stands for Advance Consumption Deposit. Since power in Haryana is supplied on credit before billing, Discoms maintain an amount equivalent to 2 months of average consumption as security.'}
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'ACD पर ब्याज कब और कैसे मिलता है?' : 'When and How is ACD Interest Credited?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'HERC विनियम 5.7 के अनुसार, हर साल 1 अप्रैल को घोषित बैंक दर पर गणना की जाती है और यह राशि वित्तीय वर्ष के पहले बिल (अप्रैल या मई के बिल) में स्वतः माइनस (क्रेडिट) की जाती है।'
                  : 'Under HERC Regulation 5.7, interest is computed at the RBI bank rate on April 1st and automatically credited as a discount/rebate in the first bill of the financial year (April/May).'}
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'यदि बिल में ब्याज नहीं जुड़ा हो तो क्या करें?' : 'What if Interest is Not Credited in the Bill?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'ऊपर दिए गए कैलकुलेटर से अपना पत्र जनरेट करें और स्थानीय SDO कार्यालय में जमा करवाएं। आप देरी की अवधि के लिए 18% वार्षिक दंडात्मक ब्याज (Penal Interest) के भी हकदार हैं।'
                  : 'Generate the claim draft using the tool above and submit it to your SDO office. You can legally claim an 18% annual penal interest for every month of delayed credit.'}
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'क्या कनेक्शन कटवाने पर ACD वापस मिलता है?' : 'Is ACD Refundable Upon Disconnection?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'हाँ, कनेक्शन कटवाने (PDCO) या नाम बदलने पर सभी बकाए चुकाने के बाद शेष ACD राशि उपभोक्ता को चेक अथवा बैंक खाते में ब्याज सहित वापस की जाती है।'
                  : 'Yes, on permanent disconnection (PDCO) or meter surrender, the entire ACD security amount along with accrued interest is refunded after settling final dues.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
