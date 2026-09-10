import React, { useState } from 'react';
import { 
  Percent, 
  Calculator, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Copy, 
  Check, 
  BadgePercent, 
  Coins,
  ArrowRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import { Language, DiscomType } from '../types';
import { SeoHead } from '../components/SeoHead';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

export const SurchargeWaiverPage: React.FC<Props> = ({ lang }) => {
  const [discom, setDiscom] = useState<DiscomType>('DHBVN');
  const [consumerCategory, setConsumerCategory] = useState<'domestic' | 'agriculture'>('domestic');
  const [principalArrears, setPrincipalArrears] = useState<number>(25000);
  const [surchargeAmount, setSurchargeAmount] = useState<number>(12000);
  const [paymentMode, setPaymentMode] = useState<'lumpsum' | 'installments'>('lumpsum');
  const [numberOfInstallments, setNumberOfInstallments] = useState<number>(3);
  const [consumerName, setConsumerName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [subdivision, setSubdivision] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Statutory Calculations based on UHBVN/DHBVN Surcharge Waiver Scheme Circulars
  // Under standard Haryana Surcharge Waiver Scheme:
  // 1. 100% of the late payment surcharge (LPSC) is waived off.
  // 2. In Lump-sum option, consumers may additionally get a 5% prompt payment rebate on principal amount.
  // 3. In Installments option, surcharge is frozen and waived off proportionally as each installment is paid alongside current bills.

  const lumpSumPrincipalRebate = paymentMode === 'lumpsum' ? Math.round(principalArrears * 0.05) : 0;
  const netPayablePrincipal = principalArrears - lumpSumPrincipalRebate;
  const waivedSurcharge = surchargeAmount; // 100% Surcharge Waived
  const totalSavings = surchargeAmount + lumpSumPrincipalRebate;
  const installmentAmount = paymentMode === 'installments' ? Math.round(principalArrears / numberOfInstallments) : 0;

  // SDO Scheme Application Draft
  const applicationDraft = `To,
The Sub-Divisional Officer (SDO) / Commercial In-Charge,
${discom} Operation Sub-Division: ${subdivision || '[Sub-Division / City]'},
Haryana.

Subject: Application for Availing Benefits under the Surcharge Waiver Scheme (बिजली बिल ब्याज माफी योजना) - Account No: ${accountNumber || '[YOUR 10-DIGIT ACCOUNT NO.]'}

Respected Sir/Madam,

I am a bonafide electricity consumer under ${discom} with the following details:
Consumer Name: ${consumerName || '[Consumer Full Name]'}
Account Number: ${accountNumber || '[10-Digit Account Number]'}
Category: ${consumerCategory === 'domestic' ? 'Domestic Supply (घरेलू)' : 'Agriculture Pumping Supply (कृषि)'}
Principal Arrears (मूल बकाया): ₹${principalArrears.toLocaleString('en-IN')}
Accumulated Surcharge (सरचार्ज / ब्याज): ₹${surchargeAmount.toLocaleString('en-IN')}

1. As per the Sales Circular issued by ${discom} regarding the Surcharge Waiver Scheme, I hereby exercise my option to liquidate my outstanding electricity dues under the following settlement mode:
   => Mode Selected: ${paymentMode === 'lumpsum' ? `Lump-sum One-Time Settlement (₹${netPayablePrincipal.toLocaleString('en-IN')} with 5% principal rebate)` : `Payment in ${numberOfInstallments} equal bi-monthly installments of ₹${installmentAmount.toLocaleString('en-IN')} each`}.

2. I undertake to pay the net principal amount along with my regular current energy bills punctually, and request the Nigam to freeze and waive off the entire accumulated surcharge of ₹${waivedSurcharge.toLocaleString('en-IN')} in terms of the notified scheme.

Kindly issue the formal settlement challan / bill advice so that the payment can be deposited immediately.

Thanking you,

Yours faithfully,
Name: ${consumerName || '[Consumer Name]'}
Account No: ${accountNumber || '[Account Number]'}
Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(applicationDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // SEO Metadata
  const pageTitle = lang === 'hi'
    ? 'हरियाणा बिजली बिल सरचार्ज माफी योजना कैलकुलेटर: UHBVN व DHBVN ब्याज छूट व किस्त गणना'
    : 'Haryana Electricity Surcharge Waiver Scheme Calculator: UHBVN & DHBVN Arrears Settlement';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा बिजली ब्याज माफी योजना (Surcharge Waiver Scheme) के तहत पुराने बकाए पर 100% सरचार्ज माफी, 5% अतिरिक्त एकमुश्त छूट व आसान किस्तों का हिसाब लगाएं। SDO आवेदन पत्र जनरेट करें।'
    : 'Calculate 100% surcharge waiver, 5% lump-sum rebate, and installment schedules on pending electricity bills under Haryana UHBVN & DHBVN Surcharge Waiver Scheme.';

  const keywords = [
    'haryana bijli bill surcharge mafi scheme calculator',
    'uhbvn surcharge waiver scheme circular',
    'dhbvn bijli bill interest mafi installment',
    'haryana electricity bill arrears settlement',
    'surcharge waiver scheme domestic agriculture',
    'हरियाणा बिजली बिल ब्याज माफी योजना',
    'सरचार्ज वेवर स्कीम किश्त कैलकुलेटर'
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: pageTitle,
    description: pageDescription,
    url: 'https://haryanabijliseva.in/surcharge-waiver',
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
        path="/surcharge-waiver"
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
              {lang === 'hi' ? 'सरचार्ज माफी कैलकुलेटर' : 'Surcharge Waiver Calculator'}
            </span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-2">
                <BadgePercent className="w-3.5 h-3.5" />
                {lang === 'hi' ? 'UHBVN व DHBVN ब्याज माफी योजना' : 'Official Surcharge Waiver Settlement'}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {lang === 'hi' 
                  ? 'हरियाणा बिजली बिल सरचार्ज (ब्याज) माफी कैलकुलेटर'
                  : 'Haryana Electricity Surcharge Waiver & OTS Calculator'}
              </h1>
              <p className="mt-2 text-slate-600 max-w-3xl text-sm sm:text-base">
                {lang === 'hi'
                  ? 'हरियाणा बिजली निगमों की सरचार्ज माफी योजना के तहत पुराने बकाए पर लगा 100% सरचार्ज (LPSC / ब्याज) माफ किया जाता है। एकमुश्त भुगतान पर मूल राशि में अतिरिक्त 5% छूट अथवा ब्याज-मुक्त किस्तों की गणना करें।'
                  : 'Under the official Surcharge Waiver Scheme by UHBVN & DHBVN, 100% of the accumulated surcharge is waived. Calculate your net payable principal, 5% lump-sum rebate, or interest-free installments.'}
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
                <Calculator className="w-5 h-5 text-amber-600" />
                {lang === 'hi' ? 'बकाए का विवरण दर्ज करें' : 'Enter Arrears Breakdown'}
              </h2>

              <div className="space-y-5">
                {/* Discom & Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      {lang === 'hi' ? 'बिजली निगम' : 'Discom'}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDiscom('DHBVN')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          discom === 'DHBVN'
                            ? 'border-amber-600 bg-amber-50 text-amber-900'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        DHBVN
                      </button>
                      <button
                        type="button"
                        onClick={() => setDiscom('UHBVN')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          discom === 'UHBVN'
                            ? 'border-amber-600 bg-amber-50 text-amber-900'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        UHBVN
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                      {lang === 'hi' ? 'उपभोक्ता श्रेणी' : 'Consumer Category'}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setConsumerCategory('domestic')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          consumerCategory === 'domestic'
                            ? 'border-amber-600 bg-amber-50 text-amber-900'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {lang === 'hi' ? 'घरेलू (DS)' : 'Domestic (DS)'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setConsumerCategory('agriculture')}
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                          consumerCategory === 'agriculture'
                            ? 'border-amber-600 bg-amber-50 text-amber-900'
                            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {lang === 'hi' ? 'कृषि / ट्यूबवेल' : 'Agriculture (AP)'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Principal Arrears vs Surcharge */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      {lang === 'hi' ? 'मूल बकाया राशि (Principal)' : 'Principal Pending Amount'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-bold">₹</span>
                      <input
                        type="number"
                        min={500}
                        max={1000000}
                        step={500}
                        value={principalArrears}
                        onChange={(e) => setPrincipalArrears(Math.max(0, Number(e.target.value)))}
                        className="w-full pl-8 pr-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 font-semibold"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      {lang === 'hi' ? 'बिल में "Arrears / SOP" देखें' : 'Excluding late fee surcharge'}
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      {lang === 'hi' ? 'जुड़ा हुआ सरचार्ज (LPSC / ब्याज)' : 'Accumulated Surcharge (LPSC)'}
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 font-bold">₹</span>
                      <input
                        type="number"
                        min={0}
                        max={500000}
                        step={500}
                        value={surchargeAmount}
                        onChange={(e) => setSurchargeAmount(Math.max(0, Number(e.target.value)))}
                        className="w-full pl-8 pr-3.5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-900 font-semibold"
                      />
                    </div>
                    <span className="text-[11px] text-emerald-600 font-bold block mt-1">
                      {lang === 'hi' ? '✓ यह पूरी राशि 100% माफ होगी' : '✓ 100% of this will be waived off'}
                    </span>
                  </div>
                </div>

                {/* Settlement Mode Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    {lang === 'hi' ? 'भुगतान का तरीका (Settlement Mode)' : 'Settlement Mode'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMode('lumpsum')}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        paymentMode === 'lumpsum'
                          ? 'border-amber-600 bg-amber-50/70 shadow-xs ring-1 ring-amber-500'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                        <span>{lang === 'hi' ? 'एकमुश्त (Lump-sum) भुगतान' : 'One-Time (Lump-sum)'}</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                          +5% Extra Off
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        {lang === 'hi' 
                          ? '100% सरचार्ज माफी + मूल राशि पर 5% अतिरिक्त छूट'
                          : '100% surcharge waiver + 5% rebate on principal amount'}
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMode('installments')}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        paymentMode === 'installments'
                          ? 'border-amber-600 bg-amber-50/70 shadow-xs ring-1 ring-amber-500'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-sm">
                        {lang === 'hi' ? 'आसान किस्तों (Installments) में' : 'Interest-Free Installments'}
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        {lang === 'hi' 
                          ? 'सरचार्ज फ्रीज होगा, मूल बकाया 3-6 बिल किस्तों में'
                          : 'Surcharge frozen, principal split across regular bills'}
                      </p>
                    </button>
                  </div>
                </div>

                {/* If Installments Selected */}
                {paymentMode === 'installments' && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      {lang === 'hi' ? 'किस्तों की संख्या (द्विमासिक बिल चक्र)' : 'Number of Bi-monthly Installments'}
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[3, 4, 6].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setNumberOfInstallments(num)}
                          className={`py-2.5 px-4 rounded-xl text-xs font-bold border transition-all text-center ${
                            numberOfInstallments === num
                              ? 'border-amber-600 bg-amber-50 text-amber-900 font-black ring-1 ring-amber-500'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {num} {lang === 'hi' ? 'किस्तें' : 'Installments'}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Consumer Details for SDO Draft */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-800 mb-3">
                    {lang === 'hi' ? 'SDO आवेदन पत्र हेतु विवरण (वैकल्पिक)' : 'Details for SDO Application (Optional)'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? 'उपभोक्ता का नाम' : 'Consumer Full Name'}
                      value={consumerName}
                      onChange={(e) => setConsumerName(e.target.value)}
                      className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-1 focus:ring-amber-500"
                    />
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? '10-अंकों का खाता सं.' : '10-Digit Account No.'}
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-1 focus:ring-amber-500"
                    />
                    <input
                      type="text"
                      placeholder={lang === 'hi' ? 'सब-डिवीजन / शहर' : 'Sub-Division / City'}
                      value={subdivision}
                      onChange={(e) => setSubdivision(e.target.value)}
                      className="px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Statutory Terms Explainer Card */}
            <div className="bg-amber-950 text-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Coins className="w-4 h-4" />
                {lang === 'hi' ? 'योजना के महत्वपूर्ण नियम व शर्तें' : 'Key Scheme Terms & Conditions'}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                {lang === 'hi' ? 'सरचार्ज कैसे माफ होता है?' : 'How is Surcharge Legally Waived Off?'}
              </h3>
              <p className="text-amber-100/90 text-xs sm:text-sm leading-relaxed mb-4">
                {lang === 'hi'
                  ? 'हरियाणा सरकार व बिजली निगमों द्वारा अधिसूचित सरचार्ज माफी योजना में बकाएदार उपभोक्ताओं को राहत देने के लिए पूरा सरचार्ज तुरंत फ्रीज कर दिया जाता है। यदि आप किस्त विकल्प चुनते हैं, तो प्रत्येक किस्त के समय पर भुगतान के अनुपात में पुराना सरचार्ज हमेशा के लिए बहीखाते से हटा दिया जाता है।'
                  : 'Under the notified Haryana Surcharge Waiver Scheme, the entire accumulated surcharge is frozen immediately upon application. For installment opt-ins, the surcharge is proportionately and permanently written off from the ledger as each installment is cleared.'}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-amber-900/80 text-amber-200 px-3 py-1 rounded-md border border-amber-800">
                  Sales Circular D-05/2025 / U-04/2025
                </span>
                <span className="bg-amber-900/80 text-amber-200 px-3 py-1 rounded-md border border-amber-800">
                  100% LPSC Surcharge Waiver
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculated Savings & Application Draft */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Calculation Result Summary Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                {paymentMode === 'lumpsum'
                  ? (lang === 'hi' ? 'एकमुश्त कुल देय राशि' : 'Net Amount Payable Now')
                  : (lang === 'hi' ? 'प्रति किस्त देय राशि' : 'Installment Amount Per Bill')}
              </div>
              
              <div className="text-3xl sm:text-4xl font-black text-amber-700 flex items-baseline gap-1">
                <span>
                  ₹{paymentMode === 'lumpsum' 
                    ? netPayablePrincipal.toLocaleString('en-IN') 
                    : installmentAmount.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-medium text-slate-500">
                  {paymentMode === 'lumpsum'
                    ? (lang === 'hi' ? '(मूल राशि)' : '(Principal only)')
                    : (lang === 'hi' ? `(कुल ${numberOfInstallments} किस्तें)` : `(${numberOfInstallments} installments)`)}
                </span>
              </div>

              {/* Total Savings Badge */}
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {lang === 'hi' 
                    ? `कुल बचत: ₹${totalSavings.toLocaleString('en-IN')} की सीधी छूट` 
                    : `Total Savings: ₹${totalSavings.toLocaleString('en-IN')} Saved!`}
                </span>
              </div>

              {/* Breakdown */}
              <div className="mt-5 space-y-3 divide-y divide-slate-100 text-sm">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-600">
                    {lang === 'hi' ? 'कुल बकाया (मूल + ब्याज)' : 'Total Original Dues'}:
                  </span>
                  <span className="font-semibold text-slate-800">
                    ₹{(principalArrears + surchargeAmount).toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2 text-emerald-700">
                  <span className="font-medium">
                    {lang === 'hi' ? 'माफ किया गया सरचार्ज (100%)' : 'Waived Surcharge (100%)'}:
                  </span>
                  <span className="font-bold">- ₹{waivedSurcharge.toLocaleString('en-IN')}</span>
                </div>

                {lumpSumPrincipalRebate > 0 && (
                  <div className="flex justify-between items-center pt-2 text-emerald-700">
                    <span className="font-medium">
                      {lang === 'hi' ? 'एकमुश्त 5% मूल छूट' : 'Lump-sum 5% Principal Rebate'}:
                    </span>
                    <span className="font-bold">- ₹{lumpSumPrincipalRebate.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between items-center pt-3 font-bold text-slate-900">
                  <span>{lang === 'hi' ? 'अंतिम देय मूल राशि' : 'Net Principal Payable'}:</span>
                  <span className="text-amber-700 text-base">₹{netPayablePrincipal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  {lang === 'hi'
                    ? 'यह आवेदन पत्र SDO कार्यालय में जमा करवाएं या आधिकारिक ऑनलाइन पोर्टल से एकमुश्त भुगतान कर छूट का लाभ उठाएं।'
                    : 'Submit this application to your local SDO office or pay the net principal online through the official portal to secure your waiver.'}
                </div>
              </div>
            </div>

            {/* Generated Formal SDO Notice Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-600" />
                  {lang === 'hi' ? 'SDO को भेजने हेतु माफी आवेदन पत्र' : 'SDO Surcharge Waiver Application Draft'}
                </h3>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      {lang === 'hi' ? 'कॉपी हो गया' : 'Copied!'}
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      {lang === 'hi' ? 'आवेदन कॉपी करें' : 'Copy Application'}
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 max-h-64 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                {applicationDraft}
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>{lang === 'hi' ? 'बिना पेनल्टी बिल भुगतान करें' : 'Pay without surcharge penalties'}</span>
                <Link to="/bill-calculator" className="text-amber-700 font-bold hover:underline">
                  {lang === 'hi' ? 'नया बिल कैलकुलेटर →' : 'Domestic Bill Calculator →'}
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Informational FAQ Section on Scheme */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600" />
            {lang === 'hi' ? 'सरचार्ज माफी योजना पर अक्सर पूछे जाने वाले सवाल (FAQ)' : 'Surcharge Waiver Scheme FAQs'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'सरचार्ज क्या होता है और यह कितना लगता है?' : 'What is Surcharge in Haryana Electricity Bills?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'अंतिम तिथि तक बिजली बिल न भरने पर 1.5% से 3% प्रति बिलिंग चक्र की दर से लेट पेमेंट सरचार्ज (LPSC) जुड़ता है, जो लंबे समय तक न भरने पर मूल राशि से भी अधिक हो जाता है।'
                  : 'Late Payment Surcharge (LPSC) of 1.5% to 3% per billing cycle is levied on unpaid electricity bills, which accumulates compounding interest if not settled.'}
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'क्या कटे हुए कनेक्शन भी इस योजना का लाभ ले सकते हैं?' : 'Can Disconnected Consumers (TDCO/PDCO) Apply?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'हाँ, अस्थाई (TDCO) या स्थाई रूप से कटे हुए (PDCO) कनेक्शन भी मूल बकाया चुकाकर ब्याज माफी पा सकते हैं और पुनः कनेक्शन (Reconnection) के लिए आवेदन कर सकते हैं।'
                  : 'Yes, consumers whose connections are temporarily or permanently disconnected due to non-payment can also clear principal dues under the scheme to get reconnected without surcharge.'}
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'यदि कोई किस्त छूट जाए तो क्या होगा?' : 'What Happens if an Installment is Missed?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'यदि आप लगातार दो किस्तें समय पर नहीं भरते हैं, तो सरचार्ज माफी रद्द हो सकती है और पुराना सरचार्ज पुनः खाते में जुड़ सकता है। इसलिए नियमित बिल के साथ किस्त अवश्य भरें।'
                  : 'If you fail to deposit two consecutive installments alongside regular current bills, the frozen surcharge may be restored to your account ledger.'}
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50">
              <h3 className="font-bold text-slate-900 mb-2">
                {lang === 'hi' ? 'क्या कोर्ट या CGRF में लंबित मामलों पर छूट मिलेगी?' : 'Can Consumers with Cases in CGRF or Court Apply?'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'हाँ, लेकिन उपभोक्ता को CGRF या अदालत से अपना केस वापस लेने (Withdrawal) का शपथ पत्र SDO कार्यालय में देना होता है।'
                  : 'Yes, provided the consumer submits an undertaking to withdraw any pending litigation or dispute from the Consumer Forum (CGRF) or court.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
