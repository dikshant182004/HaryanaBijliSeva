import React, { useState } from 'react';
import { 
  Sun, 
  Zap, 
  IndianRupee, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  ExternalLink,
  Info,
  Building,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { Language } from '../types';
import { OFFICIAL_LINKS } from '../data/haryanaData';

interface Props {
  lang: Language;
}

export const SolarCalculator: React.FC<Props> = ({ lang }) => {
  const [bimonthlyUnits, setBimonthlyUnits] = useState<number>(500);
  const [systemCapacityKw, setSystemCapacityKw] = useState<number>(3);
  const [pppIncomeCategory, setPppIncomeCategory] = useState<'under_1_80' | '1_80_to_3_00' | 'above_3_00'>('under_1_80');

  // Benchmark solar installation cost in Haryana approx ₹60,000 per kW
  const benchmarkCostPerKw = 60000;
  const totalSystemCost = systemCapacityKw * benchmarkCostPerKw;

  // Central Subsidy under PM Surya Ghar Muft Bijli Yojana:
  // Up to 2 kW: ₹33,000 per kW (₹66,000 for 2 kW)
  // For 3 kW or higher: capped at ₹78,000
  let centralSubsidy = 0;
  if (systemCapacityKw === 1) {
    centralSubsidy = 33000;
  } else if (systemCapacityKw === 2) {
    centralSubsidy = 66000;
  } else {
    centralSubsidy = 78000; // Capped for 3 kW and above
  }

  // Haryana State Government Top-Up Subsidy based on Parivar Pehchan Patra (Family ID):
  // 1. Antyodaya families (Annual income up to ₹1.80 Lakh):
  //    Haryana provides additional ₹50,000 state top-up for 2 kW systems, making it 100% free / near zero!
  //    For 1 kW: ₹17,000 state top-up.
  // 2. Low-Medium Income (₹1.80 Lakh to ₹3.00 Lakh):
  //    Haryana provides ₹20,000 state top-up.
  // 3. Above ₹3.00 Lakh:
  //    Standard Central subsidy only (₹78,000 cap).
  let haryanaStateSubsidy = 0;
  if (pppIncomeCategory === 'under_1_80') {
    if (systemCapacityKw === 1) {
      haryanaStateSubsidy = 27000; // 60k - 33k = 27k (Total 100% free)
    } else if (systemCapacityKw >= 2) {
      haryanaStateSubsidy = 50000; // Total ₹66k + ₹50k = ₹1,16,000 subsidy on ₹1,20,000 system!
    }
  } else if (pppIncomeCategory === '1_80_to_3_00') {
    haryanaStateSubsidy = 20000;
  } else {
    haryanaStateSubsidy = 0;
  }

  const totalSubsidy = Math.min(centralSubsidy + haryanaStateSubsidy, totalSystemCost);
  const netConsumerPayable = Math.max(0, totalSystemCost - totalSubsidy);

  // Haryana receives ~300 sunny days/year with approx 4.5 Peak Sun Hours (PSH).
  // 1 kW generates approx 4 units/day = 120 units/month = 1,440 units/year.
  const monthlyGenerationUnits = Math.round(systemCapacityKw * 120);
  const annualGenerationUnits = monthlyGenerationUnits * 12;

  // Average HERC domestic unit tariff savings in Haryana ~ ₹6.50/unit
  const annualSavingsRupees = Math.round(annualGenerationUnits * 6.5);
  const estimatedPaybackYears = netConsumerPayable > 0 
    ? (netConsumerPayable / annualSavingsRupees).toFixed(1)
    : '0.0 (Instant / Free)';

  // Required rooftop shadow-free area (approx 100 sq.ft per kW)
  const requiredRoofAreaSqFt = systemCapacityKw * 100;

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-amber-900/40 shadow-lg relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/30 border border-amber-400/50 flex items-center justify-center text-amber-300 shrink-0">
            <Sun className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-wider inline-block mb-2">
              {lang === 'hi' ? 'पीएम सूर्य घर मुफ्त बिजली योजना + हरियाणा टॉप-अप' : 'PM Surya Ghar + Haryana State Top-Up'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'hi' ? 'रूफटॉप सोलर व हरियाणा सरकारी सब्सिडी कैलकुलेटर' : 'Haryana Rooftop Solar & Double Subsidy Estimator'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {lang === 'hi'
                ? 'हरियाणा सरकार केंद्र सरकार की ₹78,000 की सब्सिडी के अलावा परिवार पहचान पत्र (PPP) धारकों को ₹50,000 तक की अतिरिक्त राज्य सब्सिडी प्रदान कर रही है। जानें आपको कितना सोलर पैनल लगाना चाहिए और नेट मीटरिंग की क्या प्रक्रिया है।'
                : 'Calculate your PM Surya Ghar central grant plus Haryana additional state top-up subsidy based on Parivar Pehchan Patra (Family ID). Estimate net investment, monthly unit generation, and rooftop area requirements.'}
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Inputs & Result Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Inputs: 7 cols */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-600 shrink-0" />
            <h3 className="text-lg font-extrabold text-slate-900">
              {lang === 'hi' ? 'सोलर सिस्टम क्षमता व श्रेणी चुनें:' : 'Select System Capacity & Family ID Income:'}
            </h3>
          </div>

          {/* 1. System Capacity Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800">
                {lang === 'hi' ? 'सोलर पैनल क्षमता (किलोवाट - kW):' : 'Proposed Solar System Size (kW):'}
              </label>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-black text-xs">
                {systemCapacityKw} kW ({requiredRoofAreaSqFt} sq.ft {lang === 'hi' ? 'छत' : 'roof'})
              </span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6, 8, 10].map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => setSystemCapacityKw(kw)}
                  className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    systemCapacityKw === kw
                      ? 'bg-amber-500 text-slate-950 border-amber-600 ring-2 ring-amber-400/30'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {kw} kW
                </button>
              ))}
            </div>
            <p className="mt-1.5 text-[11px] text-slate-500">
              {lang === 'hi'
                ? 'सामान्य 2-3 बेडरूम मकान हेतु 2 kW से 3 kW क्षमता आदर्श है।'
                : 'A typical 2 to 3 BHK home in Haryana needs 2 kW to 3 kW capacity.'}
            </p>
          </div>

          {/* 2. PPP Family ID Category */}
          <div>
            <label className="block text-xs font-bold text-slate-800 mb-2">
              {lang === 'hi' ? 'परिवार पहचान पत्र (PPP / Family ID) वार्षिक आय श्रेणी:' : 'Haryana Parivar Pehchan Patra (Family ID) Annual Income:'}
            </label>
            <div className="space-y-2">
              <label
                onClick={() => setPppIncomeCategory('under_1_80')}
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                  pppIncomeCategory === 'under_1_80'
                    ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="incomeCategory"
                  checked={pppIncomeCategory === 'under_1_80'}
                  onChange={() => setPppIncomeCategory('under_1_80')}
                  className="mt-1 text-emerald-600 focus:ring-emerald-500"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xs text-slate-900">
                      {lang === 'hi' ? 'अंत्योदय परिवार (वार्षिक आय ₹1.80 लाख तक)' : 'Antyodaya Category (Annual Income up to ₹1.80 Lakh)'}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-700 text-white">
                      {lang === 'hi' ? '₹50,000 अतिरिक्त सब्सिडी' : '₹50,000 State Top-Up'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    {lang === 'hi'
                      ? 'हरियाणा सरकार की ओर से 2 kW तक शत-प्रतिशत (100% फ्री) सब्सिडी योजना का लाभ।'
                      : 'Eligible for Haryana 100% Free Solar benefit up to 2 kW system (Central + State combined).'}
                  </p>
                </div>
              </label>

              <label
                onClick={() => setPppIncomeCategory('1_80_to_3_00')}
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                  pppIncomeCategory === '1_80_to_3_00'
                    ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="incomeCategory"
                  checked={pppIncomeCategory === '1_80_to_3_00'}
                  onChange={() => setPppIncomeCategory('1_80_to_3_00')}
                  className="mt-1 text-emerald-600 focus:ring-emerald-500"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xs text-slate-900">
                      {lang === 'hi' ? 'मध्यम आय वर्ग (वार्षिक आय ₹1.80 लाख से ₹3.00 लाख)' : 'Lower-Middle Income (Annual Income ₹1.80L to ₹3.00L)'}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-black bg-sky-700 text-white">
                      {lang === 'hi' ? '₹20,000 अतिरिक्त सब्सिडी' : '₹20,000 State Top-Up'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    {lang === 'hi'
                      ? 'केंद्रीय सब्सिडी ₹78,000 के अतिरिक्त ₹20,000 हरियाणा राज्य टॉप-अप अनुदान।'
                      : 'Receives Central subsidy up to ₹78,000 plus ₹20,000 Haryana state top-up.'}
                  </p>
                </div>
              </label>

              <label
                onClick={() => setPppIncomeCategory('above_3_00')}
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                  pppIncomeCategory === 'above_3_00'
                    ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-500/20'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="incomeCategory"
                  checked={pppIncomeCategory === 'above_3_00'}
                  onChange={() => setPppIncomeCategory('above_3_00')}
                  className="mt-1 text-emerald-600 focus:ring-emerald-500"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-xs text-slate-900">
                      {lang === 'hi' ? 'सामान्य वर्ग (वार्षिक आय ₹3.00 लाख से अधिक)' : 'General Category (Income above ₹3.00 Lakh)'}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800">
                      {lang === 'hi' ? 'केंद्रीय सब्सिडी' : 'Central Subsidy Only'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    {lang === 'hi'
                      ? 'पीएम सूर्य घर के तहत अधिकतम ₹78,000 की केंद्रीय सब्सिडी (1 kW: ₹33k, 2 kW: ₹66k, 3 kW+: ₹78k)।'
                      : 'Standard PM Surya Ghar central assistance capped at ₹78,000 directly credited to bank.'}
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Quick Info Callout */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {lang === 'hi'
                ? 'नोट: हरियाणा में UHBVN व DHBVN के साथ नेट मीटरिंग (Net Metering) हेतु आपका घरेलू मीटर बायो-डायरेक्शनल (Bi-directional Smart Meter) में बदला जाता है। दिन में उत्पन्न अतिरिक्त बिजली ग्रिड में जाती है और आपके मासिक बिल में यूनिट क्रेडिट हो जाती है।'
                : 'Note: Net metering under UHBVN/DHBVN replaces your meter with a bi-directional smart meter. Surplus units exported during sunny daytime offset night consumption in your bimonthly bill.'}
            </p>
          </div>
        </div>

        {/* Right Outputs / Financial Breakdown: 5 cols */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              {lang === 'hi' ? 'वित्तीय सब्सिडी व बचत विवरण' : 'Financial Breakdown & Savings'}
            </span>
            <h3 className="text-xl font-black text-white">
              {systemCapacityKw} kW {lang === 'hi' ? 'रूफटॉप सोलर सिस्टम' : 'Rooftop System'}
            </h3>

            {/* Price Breakdown Table */}
            <div className="mt-6 space-y-2.5 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">{lang === 'hi' ? 'अनुमानित कुल लागत:' : 'Total Estimated Cost:'}</span>
                <span className="font-bold text-white">₹{totalSystemCost.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800 text-emerald-400">
                <span>{lang === 'hi' ? '(-) केंद्रीय सब्सिडी (PM Surya Ghar):' : '(-) Central Subsidy (PM Surya Ghar):'}</span>
                <span className="font-black">- ₹{centralSubsidy.toLocaleString('en-IN')}</span>
              </div>

              {haryanaStateSubsidy > 0 && (
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800 text-amber-400">
                  <span>{lang === 'hi' ? '(-) हरियाणा राज्य टॉप-अप (PPP):' : '(-) Haryana State Top-Up (PPP):'}</span>
                  <span className="font-black">- ₹{haryanaStateSubsidy.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex items-center justify-between py-2 border-b border-slate-700 bg-slate-800/40 px-2 rounded-lg">
                <span className="font-bold text-slate-200">{lang === 'hi' ? 'कुल प्राप्त सब्सिडी:' : 'Total Grant / Subsidy:'}</span>
                <span className="font-black text-emerald-300 text-sm">₹{totalSubsidy.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-700">
                <span className="font-extrabold text-sm text-white">{lang === 'hi' ? 'उपभोक्ता का वास्तविक खर्च:' : 'Net Consumer Investment:'}</span>
                <span className="font-black text-xl text-amber-400">
                  {netConsumerPayable === 0 ? (lang === 'hi' ? '₹0 (शत-प्रतिशत फ्री)' : '₹0 (100% Free)') : `₹${netConsumerPayable.toLocaleString('en-IN')}`}
                </span>
              </div>
            </div>

            {/* Generation & Savings Badges */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="block text-lg font-black text-sky-400">~{monthlyGenerationUnits}</span>
                <span className="text-[11px] text-slate-400 font-medium">{lang === 'hi' ? 'मासिक यूनिट उत्पादन' : 'Units Generated/mo'}</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="block text-lg font-black text-emerald-400">₹{annualSavingsRupees.toLocaleString('en-IN')}</span>
                <span className="text-[11px] text-slate-400 font-medium">{lang === 'hi' ? 'सालाना बिजली बिल बचत' : 'Annual Bill Savings'}</span>
              </div>
            </div>
          </div>

          {/* Official Apply Button */}
          <div className="mt-8 pt-4 border-t border-slate-800 space-y-2">
            <a
              href="https://pmsuryaghar.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{lang === 'hi' ? 'PM सूर्य घर पोर्टल पर आवेदन करें' : 'Apply on Official PM Surya Ghar Portal'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-center text-[10px] text-slate-400">
              {lang === 'hi'
                ? 'सब्सिडी सीधे आपके आधार-लिंक्ड बैंक खाते में डीबीटी (DBT) द्वारा आती है।'
                : 'Subsidy is directly credited to your Aadhaar-linked bank account via DBT.'}
            </p>
          </div>
        </div>
      </div>

      {/* Step-by-Step Haryana Net-Metering Procedure */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4">
          {lang === 'hi' ? 'हरियाणा में रूफटॉप सोलर लगवाने की 5-चरणीय सरकारी प्रक्रिया:' : '5-Step Process to Install Rooftop Solar in Haryana:'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
            <div>
              <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold mb-2">
                1
              </span>
              <h4 className="font-bold text-slate-900 mb-1">
                {lang === 'hi' ? 'राष्ट्रीय पोर्टल पर पंजीकरण' : 'Register on National Portal'}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'pmsuryaghar.gov.in पर राज्य "Haryana" व निगम (UHBVN या DHBVN) और 10-अंकों का खाता नंबर डालकर रजिस्टर करें।'
                  : 'Register on pmsuryaghar.gov.in by selecting Haryana, your Discom (UHBVN/DHBVN), and 10-digit consumer account number.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
            <div>
              <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold mb-2">
                2
              </span>
              <h4 className="font-bold text-slate-900 mb-1">
                {lang === 'hi' ? 'विभागीय फिजिबिलिटी स्वीकृति' : 'Technical Feasibility Approval'}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'SDO उप-मंडल आपके मौजूदा ट्रांसफार्मर और स्वीकृत लोड की फिजिबिलिटी ऑनलाइन स्वीकृत करता है।'
                  : 'Your SDO sub-division verifies distribution transformer capacity and accords technical sanction online.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
            <div>
              <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold mb-2">
                3
              </span>
              <h4 className="font-bold text-slate-900 mb-1">
                {lang === 'hi' ? 'पंजीकृत वेंडर से स्थापना' : 'Installation by Empanelled Vendor'}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'पोर्टल पर सूचीबद्ध अधिकृत डिस्कॉम वेंडर से ALMM-स्वीकृत मेड-इन-इंडिया सोलर पैनल व इनवर्टर लगवाएं।'
                  : 'Choose from approved discom vendors. Ensure ALMM-compliant DCR solar modules are installed.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
            <div>
              <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold mb-2">
                4
              </span>
              <h4 className="font-bold text-slate-900 mb-1">
                {lang === 'hi' ? 'नेट मीटर टेस्टिंग व स्थापना' : 'Net Meter Inspection'}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'निगम जेई (JE) साइट निरीक्षण करके बाय-डायरेक्शनल नेट मीटर लगाता है और कमीशनिंग सर्टिफिकेट देता है।'
                  : 'Nigam junior engineer inspects wiring, installs bidirectional net meter, and issues commissioning certificate.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
            <div>
              <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold mb-2">
                5
              </span>
              <h4 className="font-bold text-slate-900 mb-1">
                {lang === 'hi' ? 'सीधे बैंक खाते में सब्सिडी' : 'Direct Subsidy Release'}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'कमीशनिंग रिपोर्ट के 30 दिनों के भीतर केंद्रीय व हरियाणा राज्य सब्सिडी सीधे आपके बैंक खाते में जमा होती है।'
                  : 'Central grant and Haryana top-up are directly credited to your linked bank account within 30 days.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
