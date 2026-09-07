import React, { useState } from 'react';
import { 
  Calculator, 
  Zap, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  Flame, 
  IndianRupee, 
  Sliders,
  FileText,
  Info
} from 'lucide-react';
import { Language, DiscomType } from '../types';

interface Props {
  lang: Language;
}

interface ApplianceItem {
  id: string;
  nameEn: string;
  nameHi: string;
  watts: number;
  count: number;
  category: 'cooling' | 'heating' | 'motors' | 'kitchen' | 'general';
}

const INITIAL_APPLIANCES: ApplianceItem[] = [
  { id: 'ac_15', nameEn: '1.5 Ton Split / Window AC', nameHi: '1.5 टन एसी', watts: 1500, count: 1, category: 'cooling' },
  { id: 'ac_10', nameEn: '1.0 Ton Split / Window AC', nameHi: '1.0 टन एसी', watts: 1000, count: 0, category: 'cooling' },
  { id: 'air_cooler', nameEn: 'Air Cooler', nameHi: 'एयर कूलर', watts: 250, count: 1, category: 'cooling' },
  { id: 'geyser', nameEn: 'Storage Water Geyser (15-25L)', nameHi: 'पानी का गीजर (15-25 लीटर)', watts: 2000, count: 1, category: 'heating' },
  { id: 'water_pump', nameEn: 'Water Pump (0.5 to 1 HP Tullu/Submersible)', nameHi: 'पानी की मोटर (0.5 से 1 HP)', watts: 750, count: 1, category: 'motors' },
  { id: 'fridge', nameEn: 'Refrigerator (Double Door / Frost-Free)', nameHi: 'फ्रिज (रेफ्रिजरेटर)', watts: 250, count: 1, category: 'kitchen' },
  { id: 'induction', nameEn: 'Induction Cooktop / Microwave', nameHi: 'इंडक्शन चूल्हा / माइक्रोवेव', watts: 1800, count: 0, category: 'kitchen' },
  { id: 'washing_machine', nameEn: 'Washing Machine (Automatic)', nameHi: 'वॉशिंग मशीन', watts: 500, count: 1, category: 'general' },
  { id: 'fans', nameEn: 'Ceiling Fans', nameHi: 'छत के पंखे', watts: 75, count: 4, category: 'general' },
  { id: 'led_lights', nameEn: 'LED Lights / Bulbs / Tube Lights', nameHi: 'एलईडी बल्ब व ट्यूबलाइट', watts: 15, count: 8, category: 'general' },
  { id: 'tv_pc', nameEn: 'Smart TV / Desktop Computer', nameHi: 'स्मार्ट टीवी / कंप्यूटर', watts: 120, count: 1, category: 'general' },
  { id: 'ev_charger', nameEn: 'Electric 2W/4W Charger (Slow 15A)', nameHi: 'इलेक्ट्रिक वाहन चार्जर (EV)', watts: 3000, count: 0, category: 'motors' }
];

export const LoadCalculator: React.FC<Props> = ({ lang }) => {
  const [discom, setDiscom] = useState<DiscomType>('DHBVN');
  const [currentSanctionedLoad, setCurrentSanctionedLoad] = useState<number>(2);
  const [appliances, setAppliances] = useState<ApplianceItem[]>(INITIAL_APPLIANCES);
  const [diversityFactor, setDiversityFactor] = useState<number>(75); // 75% diversity factor standard for residential

  const updateCount = (id: string, delta: number) => {
    setAppliances(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newCount = Math.max(0, item.count + delta);
          return { ...item, count: newCount };
        }
        return item;
      })
    );
  };

  // Calculations
  const totalConnectedWatts = appliances.reduce((sum, item) => sum + item.watts * item.count, 0);
  const totalConnectedKw = totalConnectedWatts / 1000;
  
  // Peak Demand Load accounting for simultaneous usage diversity factor
  const calculatedPeakKw = (totalConnectedKw * (diversityFactor / 100));
  // Round up to nearest integer kW as Discom sanctions in whole kW for domestic
  const recommendedSanctionedKw = Math.max(1, Math.ceil(calculatedPeakKw));

  // Overload / Deficit
  const isOverloaded = recommendedSanctionedKw > currentSanctionedLoad;
  const loadDeficit = Math.max(0, recommendedSanctionedKw - currentSanctionedLoad);

  // Financial Estimates for Load Extension (Haryana HERC Norms)
  // Domestic ACD (Advance Consumption Deposit / Security): ₹500 per kW in Haryana
  // Processing Fee: ₹50
  const additionalAcd = loadDeficit * 500;
  const processingFee = loadDeficit > 0 ? 50 : 0;
  const totalExtensionCost = additionalAcd + processingFee;

  // MDI Penalty Risk: ₹100 per excess kW per month if meter records peak > sanctioned load
  const estimatedMonthlyPenalty = isOverloaded ? loadDeficit * 120 : 0;

  // Single vs 3-phase rule in Haryana:
  // <= 5 kW : Single Phase (230V)
  // > 5 kW : Three Phase (415V) mandatory under HERC Supply Code
  const isThreePhaseRequired = recommendedSanctionedKw > 5;

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-amber-900/40 shadow-lg relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-wider inline-block mb-2">
              {lang === 'hi' ? 'हरियाणा विद्युत लोड कैलकुलेटर व MDI सुरक्षा' : 'Haryana Electricity Load & MDI Penalty Calculator'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'hi' ? 'घर का बिजली लोड जांचें व लोड बढ़ाने (Load Extension) का खर्च' : 'Domestic Wattage Load Calculator & Extension Fee Guide'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {lang === 'hi'
                ? 'गर्मियों में एसी या हीटर चलने पर स्वीकृत लोड (Sanctioned Load) कम होने पर बिजली निगम ₹120/kW तक पेनल्टी (MDI Penalty) लगाता है। अपने घरेलू उपकरणों का सही लोड निकालें और जानें लोड बढ़ाने पर कितनी सिक्योरिटी (ACD) जमा होगी।'
                : 'Avoid recurring MDI (Maximum Demand Indicator) penalty surcharges on your UHBVN & DHBVN bills. Calculate your exact household wattage, find your required sanctioned kW, and see official security deposit fees.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Left appliances, Right Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Appliance Selector (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-black text-slate-900">
                {lang === 'hi' ? 'घर के बिजली उपकरण चुनें:' : 'Select Household Appliances:'}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {lang === 'hi' ? 'संख्या (+ / -) बढ़ाकर वास्तविक लोड जांचें' : 'Adjust quantities to reflect your home appliances'}
              </p>
            </div>

            {/* Current Sanctioned Load Selector */}
            <div className="flex items-center gap-2">
              <label className="text-xs font-bold text-slate-700 whitespace-nowrap">
                {lang === 'hi' ? 'वर्तमान स्वीकृत लोड:' : 'Current Load:'}
              </label>
              <select
                value={currentSanctionedLoad}
                onChange={(e) => setCurrentSanctionedLoad(parseInt(e.target.value))}
                className="px-2.5 py-1.5 border border-slate-300 rounded-lg text-xs font-bold bg-white text-slate-800 focus:ring-2 focus:ring-amber-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15].map(kw => (
                  <option key={kw} value={kw}>{kw} kW</option>
                ))}
              </select>
            </div>
          </div>

          {/* Appliances List */}
          <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
            {appliances.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1 pr-2">
                  <span className="font-bold text-xs sm:text-sm text-slate-900 block">
                    {lang === 'hi' ? app.nameHi : app.nameEn}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {app.watts} Watts {app.count > 0 && `× ${app.count} = ${(app.watts * app.count)} W`}
                  </span>
                </div>

                {/* Counter Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => updateCount(app.id, -1)}
                    disabled={app.count === 0}
                    className="w-7 h-7 rounded-lg border border-slate-300 bg-white text-slate-700 font-black text-sm flex items-center justify-center hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  >
                    -
                  </button>
                  <span className="w-6 text-center font-black text-xs text-slate-900">
                    {app.count}
                  </span>
                  <button
                    onClick={() => updateCount(app.id, 1)}
                    className="w-7 h-7 rounded-lg border border-slate-300 bg-white text-slate-700 font-black text-sm flex items-center justify-center hover:bg-slate-100 cursor-pointer transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Diversity Factor Setting */}
          <div className="pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-slate-500" />
                <span>{lang === 'hi' ? 'उपयोग विविधता (Diversity Factor):' : 'Coincidence / Diversity Factor:'}</span>
              </label>
              <span className="text-xs font-black text-slate-800">{diversityFactor}%</span>
            </div>
            <input
              type="range"
              min="50"
              max="100"
              step="5"
              value={diversityFactor}
              onChange={(e) => setDiversityFactor(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
            <p className="text-[10px] text-slate-400 mt-1">
              {lang === 'hi'
                ? '75% मानक आवासीय मान है क्योंकि घर के सभी उपकरण (गीजर, मोटर, एसी) एक साथ एक ही पल में नहीं चलते।'
                : '75% is the standard residential diversity ratio since appliances rarely operate simultaneously.'}
            </p>
          </div>
        </div>

        {/* Right: Results & Legal Action Plan (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Result Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-md border border-slate-800 space-y-5">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'अनुशंसित स्वीकृत लोड (Recommended Load)' : 'Recommended Sanctioned Load'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">{recommendedSanctionedKw} kW</span>
                <span className="text-xs text-slate-400 font-medium">
                  ({(totalConnectedWatts / 1000).toFixed(1)} kW Total Connected)
                </span>
              </div>
            </div>

            {/* Overload Alert or Safe Status */}
            {isOverloaded ? (
              <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800/80 text-xs text-rose-200 flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-rose-300 block mb-0.5">
                    {lang === 'hi' ? 'ओवरलोड चेतावनी! MDI जुर्माना का जोखिम' : 'Overload Alert! MDI Penalty Risk'}
                  </span>
                  <p className="leading-relaxed">
                    {lang === 'hi'
                      ? `आपका वास्तविक लोड ${recommendedSanctionedKw} kW है जबकि स्वीकृत केवल ${currentSanctionedLoad} kW है। बिल में लगभग ₹${estimatedMonthlyPenalty}/माह तक का अतिरिक्त MDI जुर्माना लग सकता है!`
                      : `Peak demand exceeds your sanctioned load of ${currentSanctionedLoad} kW by ${loadDeficit} kW. You risk recurring MDI fines of ~₹${estimatedMonthlyPenalty}/month.`}
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-xs text-emerald-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-emerald-300 block mb-0.5">
                    {lang === 'hi' ? 'सुरक्षित लोड (Safe Sanctioned Load)' : 'Load Within Safe Margin'}
                  </span>
                  <p className="leading-relaxed">
                    {lang === 'hi'
                      ? `आपका स्वीकृत लोड (${currentSanctionedLoad} kW) पर्याप्त है। आपको लोड बढ़ाने की आवश्यकता नहीं है।`
                      : `Your current ${currentSanctionedLoad} kW sanction is adequate. No load extension required.`}
                  </p>
                </div>
              </div>
            )}

            {/* Phase Requirement Check */}
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 text-xs space-y-1">
              <span className="font-bold text-slate-300 block">
                {lang === 'hi' ? 'सप्लाई फेज नियम (HERC Supply Code):' : 'Phase Requirement (HERC Norm):'}
              </span>
              <p className="text-slate-300">
                {isThreePhaseRequired ? (
                  <span className="text-amber-300 font-bold">
                    {lang === 'hi' ? '⚠️ 5 kW से अधिक होने के कारण 3-Phase (415V) कनेक्शन अनिवार्य है।' : '⚠️ 3-Phase (415V) supply is legally mandatory for loads above 5 kW.'}
                  </span>
                ) : (
                  <span className="text-emerald-300 font-semibold">
                    {lang === 'hi' ? '✓ सिंगल फेज (Single Phase 230V) मान्य है (5 kW तक)।' : '✓ Standard Single-Phase (230V) permissible (up to 5 kW).'}
                  </span>
                )}
              </p>
            </div>

            {/* Fee Breakdown if Extension Needed */}
            {loadDeficit > 0 && (
              <div className="space-y-2 text-xs border-t border-slate-800 pt-4">
                <span className="font-bold text-slate-200 block">
                  {lang === 'hi' ? `लोड बढ़ाने पर सरकारी खर्च (${loadDeficit} kW अतिरिक्त):` : `Official Fee for ${loadDeficit} kW Load Extension:`}
                </span>

                <div className="flex justify-between py-1 text-slate-400">
                  <span>{lang === 'hi' ? 'अग्रिम खपत सुरक्षा (ACD - ₹500/kW):' : 'Advance Consumption Deposit (ACD):'}</span>
                  <span className="text-white font-semibold">₹{additionalAcd}</span>
                </div>

                <div className="flex justify-between py-1 text-slate-400">
                  <span>{lang === 'hi' ? 'आवेदन शुल्क (Application Fee):' : 'Application Fee:'}</span>
                  <span className="text-white font-semibold">₹{processingFee}</span>
                </div>

                <div className="flex justify-between py-2 border-t border-slate-800 font-bold text-sm text-amber-400">
                  <span>{lang === 'hi' ? 'कुल अनुमानित खर्च:' : 'Total Official Expense:'}</span>
                  <span className="text-lg">₹{totalExtensionCost}</span>
                </div>
              </div>
            )}

            {/* Direct Apply CTA */}
            <div className="pt-2">
              <a
                href={discom === 'UHBVN' ? 'https://saralharyana.gov.in/' : 'https://www.dhbvn.org.in/'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{lang === 'hi' ? 'सरल हरियाणा पर लोड बढ़ाने हेतु ऑनलाइन आवेदन करें' : 'Apply for Load Extension on Saral Haryana'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-center text-[10px] text-slate-400 mt-2">
                {lang === 'hi' ? 'किसी दलाल को पैसे न दें। सरल पोर्टल पर 100% ऑनलाइन प्रक्रिया उपलब्ध है।' : '100% faceless online process on Saral Haryana. No middleman needed.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Online Guide for Haryana Citizens */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-700 shrink-0" />
          <span>{lang === 'hi' ? 'सरल हरियाणा पोर्टल पर लोड बढ़ाने की 4-चरणीय प्रक्रिया:' : 'Step-by-Step Online Load Extension Process:'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs">1</span>
            <h4 className="font-extrabold text-slate-900">{lang === 'hi' ? 'सरल पोर्टल लॉगिन' : 'Saral Haryana Login'}</h4>
            <p className="text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'saralharyana.gov.in पर जाएं और "Apply for Services" में "Application for Load Enhancement" खोजें।'
                : 'Login to saralharyana.gov.in and select "Apply for Services" > "Application for Load Enhancement / Reduction".'}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs">2</span>
            <h4 className="font-extrabold text-slate-900">{lang === 'hi' ? 'PPP परिवार पहचान पत्र' : 'Enter PPP ID'}</h4>
            <p className="text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'अपना 8-अंकों का PPP (Parivar Pehchan Patra) व 10-अंकों का UHBVN/DHBVN अकाउंट नंबर दर्ज करें।'
                : 'Authenticate via 8-digit Haryana Parivar Pehchan Patra (PPP) and enter your 10-digit electricity account number.'}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs">3</span>
            <h4 className="font-extrabold text-slate-900">{lang === 'hi' ? 'नया लोड व टेस्ट रिपोर्ट' : 'Enter Desired kW'}</h4>
            <p className="text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'वांछित लोड (जैसे 3 kW या 5 kW) दर्ज करें। 5 kW तक किसी टेस्ट रिपोर्ट की जरूरत नहीं होती, केवल स्व-घोषणा (Self Declaration) लगता है।'
                : 'Enter proposed load. For up to 5 kW, only self-declaration is needed; no licensed wiring test certificate required.'}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs">4</span>
            <h4 className="font-extrabold text-slate-900">{lang === 'hi' ? 'ऑनलाइन फीस भुगतान' : 'Online Payment'}</h4>
            <p className="text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'अंतर राशि (₹500/kW) का नेटबैंकिंग या UPI से भुगतान करें। 7 से 15 दिनों में अगले बिल में नया लोड अपडेट हो जाता है।'
                : 'Pay additional ACD via net banking or UPI. Your enhanced load will reflect in the subsequent billing cycle.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
