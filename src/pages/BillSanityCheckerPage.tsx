import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Calculator, 
  HelpCircle, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  RefreshCw,
  Info,
  Scale
} from 'lucide-react';
import { Language } from '../types';
import { calculateDomesticBill, VERIFIED_HELPLINES } from '../data/haryanaData';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LastVerifiedBadge } from '../components/LastVerifiedBadge';
import { Link } from '../router/RouterContext';

interface Props {
  lang: Language;
}

export const BillSanityCheckerPage: React.FC<Props> = ({ lang }) => {
  const [useReadings, setUseReadings] = useState(true);
  const [prevReading, setPrevReading] = useState('1420');
  const [currReading, setCurrReading] = useState('1740');
  const [directUnits, setDirectUnits] = useState('320');
  const [loadKw, setLoadKw] = useState('2');
  const [billedAmount, setBilledAmount] = useState('3100');
  const [isPrepaidSmartMeter, setIsPrepaidSmartMeter] = useState(false);
  const [isUrban, setIsUrban] = useState(true);

  // Compute calculated units
  const units = useReadings
    ? Math.max(0, (parseFloat(currReading) || 0) - (parseFloat(prevReading) || 0))
    : Math.max(0, parseFloat(directUnits) || 0);

  const sanctionedLoad = Math.max(1, parseFloat(loadKw) || 2);
  const actualBilled = parseFloat(billedAmount) || 0;

  // Calculate official statutory benchmark
  const statutory = calculateDomesticBill(units, sanctionedLoad, isPrepaidSmartMeter);
  
  // Adjust MT if rural
  const adjustedTotal = isUrban
    ? statutory.totalBill
    : Math.round(statutory.totalBill - statutory.municipalTax);

  const delta = actualBilled - adjustedTotal;
  const isCloseMatch = Math.abs(delta) <= 50;
  const isModerateOverbilling = delta > 50 && delta <= 2000;
  const isSevereOverbilling = delta > 2000;
  const isUnderbilled = delta < -50;

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <SeoHead
        title={lang === 'hi' 
          ? 'हरियाणा बिजली बिल सेनिटी चेकर | ओवरबिलिंग व गलत चार्ज की तुरंत जांच' 
          : 'Haryana Electricity Bill Sanity Checker | Instant Overbilling Audit'}
        description={lang === 'hi'
          ? 'मीटर रीडिंग और बिल राशि डालें। जांचें कि निगम ने HERC नियमों से ज्यादा बिल तो नहीं लगाया। अतिरिक्त चार्ज और एरियर का सटीक विश्लेषण।'
          : 'Enter your meter readings and total bill amount. Our audit engine verifies if charges match HERC tariff orders and flags hidden ACD, arrears, or wrong slabs.'}
        path="/bill-sanity-checker"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'बिल सेनिटी चेकर' : 'Bill Sanity Checker' }
          ]}
        />

        {/* Hero Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5" />
                  {lang === 'hi' ? 'गणितीय बिल ऑडिट इंजन' : 'Mathematical Bill Audit Engine'}
                </span>
                <LastVerifiedBadge lang={lang} source="HERC Domestic Tariff Order 2025-26" />
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === 'hi' 
                  ? 'हरियाणा बिजली बिल सेनिटी चेकर एवं ऑडिट' 
                  : 'Haryana Electricity Bill Sanity Checker & Audit'}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'बिजली बिल उम्मीद से बहुत ज्यादा आया है? अपने मीटर की रीडिंग और बिल पर दर्ज कुल राशि दर्ज करें। हमारा सिस्टम बताएगा कि बिल HERC नियमों अनुसार सही है या आपसे अधिक पैसे वसूले गए हैं।'
                  : 'Did your bill come out unusually high? Enter your meter readings and the amount charged. We mathematically verify whether your bill matches official HERC tariffs or contains unjustified surcharges.'}
              </p>
            </div>

            {/* Helpline quick card */}
            <div className="shrink-0 p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 text-xs sm:text-sm space-y-2 lg:max-w-xs">
              <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">
                {lang === 'hi' ? 'विवादित बिल समाधान' : 'Billing Dispute Helpline'}
              </span>
              <p className="text-slate-300 text-xs">
                {lang === 'hi' ? 'ओवरबिलिंग दिखने पर सीधे 1912 पर कॉल करें या SDO को लिखित नोटिस भेजें।' : 'Dial 1912 or submit written notice to SDO if overcharged.'}
              </p>
              <div className="pt-2 flex flex-col gap-1.5 font-mono text-xs">
                <a href="tel:1912" className="text-rose-400 font-bold hover:underline">1912 (24x7 Universal)</a>
                <span className="text-slate-400 text-[11px]">DHBVN: 1800-180-4334</span>
                <span className="text-slate-400 text-[11px]">UHBVN: 1800-180-1550</span>
              </div>
            </div>
          </div>
        </div>

        {/* Audit Form & Diagnostic Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Form: 5 cols */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <h2 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'hi' ? 'बिल के आंकड़े दर्ज करें' : 'Enter Bill Figures'}</span>
            </h2>

            {/* Input mode toggle */}
            <div className="flex rounded-xl bg-slate-100 p-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setUseReadings(true)}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                  useReadings ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                {lang === 'hi' ? 'मीटर रीडिंग से (पिछली / नई)' : 'By Meter Readings'}
              </button>
              <button
                type="button"
                onClick={() => setUseReadings(false)}
                className={`flex-1 py-1.5 rounded-lg transition-all cursor-pointer ${
                  !useReadings ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                }`}
              >
                {lang === 'hi' ? 'सीधे कुल यूनिट से' : 'Direct Units Billed'}
              </button>
            </div>

            {useReadings ? (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'पिछली रीडिंग (Old/Prev kWh)' : 'Previous Reading (Old kWh)'}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={prevReading}
                    onChange={(e) => setPrevReading(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'hi' ? 'वर्तमान रीडिंग (New/Curr kWh)' : 'Current Reading (New kWh)'}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={currReading}
                    onChange={(e) => setCurrReading(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'कुल बिल यूनिट (Billed Units)' : 'Total Billed Units (kWh)'}
                </label>
                <input
                  type="number"
                  min="0"
                  value={directUnits}
                  onChange={(e) => setDirectUnits(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 font-mono text-sm focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            )}

            {/* Computed units badge */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
              <span className="text-slate-600">{lang === 'hi' ? 'उपभोग की गई कुल यूनिट:' : 'Units Consumed:'}</span>
              <span className="font-mono font-black text-emerald-800 text-base">{units} Units</span>
            </div>

            {/* Sanctioned Load */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'स्वीकृत लोड (Sanctioned Load in kW)' : 'Sanctioned Load (kW)'}
              </label>
              <input
                type="number"
                min="1"
                max="50"
                step="0.5"
                value={loadKw}
                onChange={(e) => setLoadKw(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                {lang === 'hi' ? 'यह आपके बिजली बिल पर "Sanctioned Load" के सामने लिखा होता है (सामान्यतः 2 kW)।' : 'Found on your bill under Sanctioned Load (typically 2 kW).'}
              </p>
            </div>

            {/* Total Billed Amount */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'बिल पर मांगी गई कुल राशि (₹ Billed Amount)' : 'Total Amount Demanded on Bill (₹)'}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                <input
                  type="number"
                  min="0"
                  value={billedAmount}
                  onChange={(e) => setBilledAmount(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-300 font-mono text-base font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isPrepaidSmartMeter}
                  onChange={(e) => setIsPrepaidSmartMeter(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-slate-700 font-semibold">
                  {lang === 'hi' ? 'प्रीपेड स्मार्ट मीटर (5% HERC छूट लागू)' : 'Prepaid Smart Meter (5% Rebate Applies)'}
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isUrban}
                  onChange={(e) => setIsUrban(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-slate-700 font-semibold">
                  {lang === 'hi' ? 'शहरी क्षेत्र (नगर पालिका कर 5 पैसे/यूनिट)' : 'Urban Area (Municipal Tax 5p/unit)'}
                </span>
              </label>
            </div>
          </div>

          {/* Right Output Diagnostic: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Card */}
            <div className={`rounded-2xl p-6 sm:p-8 border shadow-sm ${
              isCloseMatch
                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                : isModerateOverbilling
                ? 'bg-amber-50/90 border-amber-300 text-amber-950'
                : isSevereOverbilling
                ? 'bg-rose-50/90 border-rose-300 text-rose-950'
                : 'bg-sky-50/80 border-sky-300 text-sky-950'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  isCloseMatch
                    ? 'bg-emerald-600 text-white'
                    : isModerateOverbilling
                    ? 'bg-amber-600 text-white'
                    : isSevereOverbilling
                    ? 'bg-rose-600 text-white'
                    : 'bg-sky-600 text-white'
                }`}>
                  {isCloseMatch ? <CheckCircle2 className="w-6 h-6" /> : <AlertTriangle className="w-6 h-6" />}
                </div>

                <div className="flex-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider block mb-1">
                    {isCloseMatch
                      ? (lang === 'hi' ? 'सत्यापन परिणाम: बिल गणितीय रूप से सही है' : 'Audit Result: Bill is Mathematically Accurate')
                      : isModerateOverbilling
                      ? (lang === 'hi' ? 'चेतावनी: ₹' + delta.toFixed(0) + ' का अतिरिक्त चार्ज जुड़ा हुआ है' : `Notice: ₹${delta.toFixed(0)} Excess Charges Detected`)
                      : isSevereOverbilling
                      ? (lang === 'hi' ? 'गंभीर चेतावनी: ₹' + delta.toFixed(0) + ' की भारी ओवरबिलिंग!' : `High Alert: Severe Overbilling of ₹${delta.toFixed(0)}!`)
                      : (lang === 'hi' ? 'बिल अनुमान से कम है (संभावित सब्सिडी या क्रेडिट)' : 'Bill is Lower Than Benchmark (Subsidy/Credit Applied)')}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black mb-2">
                    {isCloseMatch ? (
                      lang === 'hi' ? 'बिल HERC टैरिफ स्लैब के पूर्णतः अनुकूल है' : 'Bill Matches Statutory HERC Slabs'
                    ) : isSevereOverbilling ? (
                      lang === 'hi' ? 'बिल में अनुचित चार्ज या गलत रीडिंग की आशंका' : 'High Probability of Fictitious Reading or Penalty'
                    ) : (
                      lang === 'hi' ? 'बिल में संभावित एरियर अथवा अतिरिक्त ACD जुड़ा है' : 'Likely Arrears, Surcharge, or Additional ACD'
                    )}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                    {isCloseMatch ? (
                      lang === 'hi' 
                        ? `${units} यूनिट के लिए HERC नियमानुसार आपका अनुमानित बिल ₹${adjustedTotal.toLocaleString('en-IN')} बनता है। आपके बिल पर दर्ज राशि (₹${actualBilled}) सटीक है।`
                        : `For ${units} units, the statutory HERC calculation totals ₹${adjustedTotal.toLocaleString('en-IN')}. Your billed amount of ₹${actualBilled} matches expected tariffs.`
                    ) : isModerateOverbilling ? (
                      lang === 'hi'
                        ? `वास्तविक उपभोग अनुसार बिल केवल ₹${adjustedTotal.toLocaleString('en-IN')} होना चाहिए था, किंतु बिल ₹${actualBilled.toLocaleString('en-IN')} आया है (अंतर: ₹${delta.toFixed(0)})। संभवतः इसमें अतिरिक्त ACD सुरक्षा जमा, पुराना बकाया (Arrears), या विलंब शुल्क (Surcharge) जोड़ा गया है।`
                        : `Based on actual units, your statutory bill should be ₹${adjustedTotal.toLocaleString('en-IN')}, but you were charged ₹${actualBilled.toLocaleString('en-IN')} (diff: ₹${delta.toFixed(0)}). This typically indicates an Additional ACD installment, arrears, or LPSC.`
                    ) : isSevereOverbilling ? (
                      lang === 'hi'
                        ? `सावधान! ${units} यूनिट के वास्तविक उपभोग पर बिल मात्र ₹${adjustedTotal.toLocaleString('en-IN')} बनता है, जबकि आपसे ₹${actualBilled.toLocaleString('en-IN')} मांगे गए हैं (अंतर: ₹${delta.toFixed(0)})! यह त्रुटिपूर्ण मीटर (DEF), गलत मल्टीप्लायर या मनमाने लोड पेनल्टी के कारण हो सकता है। इसे बिना जांचे न भरें!`
                        : `ALERT! For ${units} units, your statutory bill is ₹${adjustedTotal.toLocaleString('en-IN')}, whereas you are billed ₹${actualBilled.toLocaleString('en-IN')} (diff: ₹${delta.toFixed(0)})! Check for incorrect DEF estimated units, wrong multiplier, or unauthorized MDI penalties.`
                    ) : (
                      lang === 'hi'
                        ? `मांगी गई राशि (₹${actualBilled}) वैधानिक दर (₹${adjustedTotal}) से कम है। संभवतः आपको सरकारी सब्सिडी या पूर्व भुगतान का क्रेडिट प्राप्त हुआ है।`
                        : `Billed amount is below standard calculations, indicating a state subsidy rebate or previous cycle credit balance.`
                    )}
                  </p>
                </div>
              </div>

              {/* Difference Comparison Metric */}
              <div className="mt-6 pt-5 border-t border-black/10 grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/60 rounded-xl p-3">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider block opacity-70">
                    {lang === 'hi' ? 'HERC वैधानिक बिल' : 'HERC Benchmark'}
                  </span>
                  <span className="font-mono font-black text-sm sm:text-lg">
                    ₹{adjustedTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-white/60 rounded-xl p-3">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider block opacity-70">
                    {lang === 'hi' ? 'बिल पर मांगी राशि' : 'Billed Amount'}
                  </span>
                  <span className="font-mono font-black text-sm sm:text-lg">
                    ₹{actualBilled.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="bg-white/60 rounded-xl p-3">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider block opacity-70">
                    {lang === 'hi' ? 'अंतर (Difference)' : 'Discrepancy'}
                  </span>
                  <span className={`font-mono font-black text-sm sm:text-lg ${delta > 50 ? 'text-rose-600' : 'text-emerald-700'}`}>
                    {delta > 0 ? `+₹${delta.toFixed(0)}` : `₹${delta.toFixed(0)}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Slab by Slab Breakdown */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h4 className="font-extrabold text-sm text-slate-900 mb-4 flex items-center justify-between">
                <span>{lang === 'hi' ? 'HERC वैधानिक टैरिफ गणना विवरण:' : 'HERC Tariff Breakdown Analysis:'}</span>
                <span className="text-xs font-normal text-slate-500 font-mono">
                  {statutory.categoryLabel}
                </span>
              </h4>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>{lang === 'hi' ? 'ऊर्जा शुल्क (स्लैब अनुसार Energy Charges):' : 'Energy Charges (Slab-wise):'}</span>
                  <span className="font-semibold text-slate-900">₹{statutory.energyCharges.toFixed(2)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>{lang === 'hi' ? 'फिक्स चार्ज (Fixed Charges):' : 'Fixed Charges:'}</span>
                  <span className="font-semibold text-slate-900">
                    {statutory.fixedCharges === 0 ? (
                      <span className="text-emerald-700 font-bold">₹0 (300 यूनिट तक छूट)</span>
                    ) : (
                      `₹${statutory.fixedCharges.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>{lang === 'hi' ? 'FSA ईंधन अधिभार (₹0.40/यूनिट):' : 'Fuel Surcharge (FSA @ ₹0.40/unit):'}</span>
                  <span className="font-semibold text-slate-900">₹{statutory.fsaCharge.toFixed(2)}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span>{lang === 'hi' ? 'विद्युत शुल्क (Electricity Duty @ 10p):' : 'Electricity Duty (@ 10p/unit):'}</span>
                  <span className="font-semibold text-slate-900">₹{statutory.electricityDuty.toFixed(2)}</span>
                </div>

                {isUrban && (
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span>{lang === 'hi' ? 'नगर पालिका कर (Municipal Tax @ 5p):' : 'Municipal Tax (@ 5p/unit):'}</span>
                    <span className="font-semibold text-slate-900">₹{statutory.municipalTax.toFixed(2)}</span>
                  </div>
                )}

                {isPrepaidSmartMeter && (
                  <div className="flex justify-between py-1.5 border-b border-slate-100 text-emerald-700 font-bold">
                    <span>{lang === 'hi' ? '(-) 5% HERC प्रीपेड स्मार्ट मीटर छूट:' : '(-) 5% Prepaid Smart Meter Rebate:'}</span>
                    <span>- ₹{statutory.smartMeterRebate.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between pt-3 font-bold text-slate-900 text-sm">
                  <span>{lang === 'hi' ? 'कुल वैधानिक देय राशि:' : 'Total Statutory Payable:'}</span>
                  <span className="font-mono text-emerald-800 text-base">₹{adjustedTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Overbilling Resolution CTA */}
            {delta > 50 && (
              <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm text-white mb-1">
                    {lang === 'hi' ? 'अधिक बिल को चुनौती देने हेतु पत्र तैयार करें' : 'Contest this Excess Amount Legally'}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {lang === 'hi' 
                      ? 'हमारे जनरेटर से SDO को प्रस्तुत करने हेतु औपचारिक विधिक नोटिस तैयार करें।' 
                      : 'Generate a print-ready formal notice citing HERC Supply Code Reg. 61.'}
                  </p>
                </div>
                <Link
                  to="/complaint-generator"
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <span>{lang === 'hi' ? 'विधिक नोटिस बनाएं' : 'Generate SDO Notice'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
