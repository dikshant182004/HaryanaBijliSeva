import React, { useState } from 'react';
import { 
  Cpu, 
  Zap, 
  IndianRupee, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink, 
  RefreshCw, 
  ShieldCheck, 
  Clock, 
  TrendingDown, 
  Info,
  Smartphone,
  Eye
} from 'lucide-react';
import { Language, DiscomType } from '../types';
import { OFFICIAL_LINKS } from '../data/haryanaData';

interface Props {
  lang: Language;
}

interface LedDetail {
  id: string;
  nameEn: string;
  nameHi: string;
  color: string;
  statusEn: string;
  statusHi: string;
  meaningEn: string;
  meaningHi: string;
  actionEn: string;
  actionHi: string;
}

const SMART_METER_LEDS: LedDetail[] = [
  {
    id: 'cal',
    nameEn: 'CAL / Imp / kWh (Pulse LED)',
    nameHi: 'कैल (CAL) / पल्स लाइट',
    color: 'bg-rose-500',
    statusEn: 'Blinks rapidly (3200 imp/kWh)',
    statusHi: 'बिजली खपत के दौरान तेजी से चमकती है',
    meaningEn: 'Normal operation. 1 blink represents a fraction of an electrical unit (e.g. 3200 pulses = 1 unit). The faster it pulses, the higher your instant real-time electricity draw (like running an AC or geyser).',
    meaningHi: 'यह सामान्य है। जितनी तेजी से यह लाइट झपकेगी, इसका अर्थ है कि उस समय घर में उतना अधिक लोड (जैसे एसी, गीजर) चल रहा है। 3200 बार झपकने पर 1 यूनिट बनती है।',
    actionEn: 'No action needed. Slows down when heavy appliances are turned off.',
    actionHi: 'कोई कार्रवाई आवश्यक नहीं। भारी उपकरण बंद करने पर यह धीमी हो जाएगी।'
  },
  {
    id: 'push',
    nameEn: 'PUSH / Scroll Button & LED',
    nameHi: 'पुश (PUSH) बटन व स्क्रीन डिस्प्ले',
    color: 'bg-amber-500',
    statusEn: 'Press to scroll meter display registers',
    statusHi: 'मीटर स्क्रीन के आंकड़े देखने का बटन',
    meaningEn: 'Cycles through meter screen displays: 1) Date & Time, 2) Cumulative kWh (Total Units), 3) Current Voltage & Amperes, 4) Peak Maximum Demand (kW MDI), 5) Current Balance (Prepaid mode).',
    meaningHi: 'इस बटन को दबाने पर मीटर की स्क्रीन पर क्रमवार: 1) तारीख व समय, 2) कुल रीडिंग (KWh), 3) वोल्टेज व लोड, 4) माह का अधिकतम लोड (MDI), और 5) शेष बैलेंस दिखता है।',
    actionEn: 'Press button to manually record current reading for Trust Billing or to verify real-time load.',
    actionHi: 'सेल्फ रीडिंग लेने या वर्तमान लोड देखने के लिए इसे 2-3 सेकंड के अंतराल पर दबाएं।'
  },
  {
    id: 'tamper',
    nameEn: 'TAMPER / Alert LED',
    nameHi: 'टैम्पर (Tamper) / चेतावनी लाइट',
    color: 'bg-red-600',
    statusEn: 'Glows continuous red or blinks irregularly',
    statusHi: 'लगातार लाल जलती है या चमकती है',
    meaningEn: 'Triggers if the meter detects magnetic field, neutral disturbance, terminal cover open, or phase bypass. Smart meters log tamper events with exact timestamps to the discom server.',
    meaningHi: 'यदि मीटर के कवर से छेड़छाड़, न्यूट्रल में गड़बड़ी या चुंबकीय प्रभाव होता है तो यह जलती है। स्मार्ट मीटर में इसका सटीक समय सर्वर में दर्ज हो जाता है।',
    actionEn: 'If glowing without any fault on your end, immediately inform SDO / 1912 to prevent false theft notice under Section 135.',
    actionHi: 'यदि आपने कोई छेड़छाड़ नहीं की है, तो तुरंत 1912 पर कॉल कर डायरी नंबर लें ताकि बाद में कोई गलत पेनल्टी न लगे।'
  },
  {
    id: 'earth',
    nameEn: 'EARTH / Earth Leakage LED',
    nameHi: 'अर्थ (Earth) / लीकेज लाइट',
    color: 'bg-orange-500',
    statusEn: 'Glows when current leaks to earthing',
    statusHi: 'तारों में करंट लीकेज होने पर जलती है',
    meaningEn: 'Indicates electricity is leaking into home earthing or neutral wire is touching wall/ground. In modern meters, earth leakage can cause units to register continuously even when lights are off!',
    meaningHi: 'यह बताती है कि घर की वायरिंग में करंट लीकेज हो रहा है या न्यूट्रल कहीं जमीन/दीवार से टच है। इससे उपकरण बंद होने पर भी मीटर रीडिंग तेजी से बढ़ती है!',
    actionEn: 'Get internal wiring checked by an electrician. Replace damaged neutral wires immediately to stop bill inflation.',
    actionHi: 'तुरंत किसी इलेक्ट्रीशियन से वायरिंग की अर्थिंग जांच कराएं ताकि बेवजह यूनिट न जलें।'
  },
  {
    id: 'con',
    nameEn: 'CONN / Remote Contactor (Power Relay)',
    nameHi: 'कनेक्शन / रिले स्थिति (Power Status)',
    color: 'bg-emerald-500',
    statusEn: 'Green = Connected; Off/Red = Tripped',
    statusHi: 'हरा = बिजली चालू; बंद/लाल = कटी हुई',
    meaningEn: 'Internal smart switch. In prepaid mode, trips remotely from the central server when balance drops below ₹0, and reconnects automatically upon online recharge.',
    meaningHi: 'स्मार्ट मीटर का अंदरूनी स्वचालित स्विच। प्रीपेड मोड में बैलेंस खत्म होने पर यह बिजली काटता है और रिचार्ज करते ही खुद-ब-खुद चालू कर देता है।',
    actionEn: 'Recharge your account online with at least ₹200. Supply automatically restores within 15-30 minutes.',
    actionHi: 'ऑनलाइन कम से कम ₹200 का रिचार्ज करें। 15 से 30 मिनट में बिजली अपने आप चालू हो जाती है।'
  }
];

export const SmartMeterAssistant: React.FC<Props> = ({ lang }) => {
  const [selectedDiscom, setSelectedDiscom] = useState<DiscomType>('DHBVN');
  const [dailyUnits, setDailyUnits] = useState<number>(10);
  const [sanctionedLoadKw, setSanctionedLoadKw] = useState<number>(3);
  const [activeLed, setActiveLed] = useState<string>('cal');

  // Daily Deduction Calculation based on HERC Domestic Slabs
  // Approx Average unit rate for domestic ~ ₹6.00 / unit
  // Fixed charges: ₹50 / kW / month = ₹1.66 / kW / day
  // FSA (Fuel surcharge): ~₹0.37 / unit
  // Electricity Duty (ED) + Municipal Tax: ~₹0.20 / unit
  // Total cost per unit roughly ~ ₹6.57
  const baseEnergyPerDay = dailyUnits * 6.0;
  const fixedPerDay = (sanctionedLoadKw * 50) / 30;
  const fsaPerDay = dailyUnits * 0.37;
  const dutyPerDay = dailyUnits * 0.20;
  const grossDailyCost = baseEnergyPerDay + fixedPerDay + fsaPerDay + dutyPerDay;

  // 5% HERC Smart Meter Prepaid Rebate on Energy Charges!
  const prepaidDiscountPerDay = baseEnergyPerDay * 0.05;
  const netDailyDeduction = grossDailyCost - prepaidDiscountPerDay;
  const monthlySavingsRebate = prepaidDiscountPerDay * 30;

  const currentLed = SMART_METER_LEDS.find(l => l.id === activeLed) || SMART_METER_LEDS[0];

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-indigo-900/40 shadow-lg relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shrink-0">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-xs uppercase tracking-wider inline-block mb-2">
              {lang === 'hi' ? 'हरियाणा स्मार्ट मीटर सहायक व गाइड' : 'Haryana Smart Meter Hub & Troubleshooter'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'hi' ? 'स्मार्ट मीटर रिचार्ज, दैनिक कटौती व लाइट डिकोडर' : 'Smart Meter Recharge, Daily Deductions & LED Indicators'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {lang === 'hi'
                ? 'गुरुग्राम, फरीदाबाद, करनाल, पंचकूला व पानीपत में लाखों घरों में स्मार्ट मीटर लग चुके हैं। जानें रोजाना बैलेंस में से कितने पैसे कटते हैं, 5% प्रीपेड छूट का लाभ कैसे लें, और रात में बिजली कटने पर 15 मिनट में री-कनेक्शन कैसे होता है।'
                : 'Over 1.2 million smart meters installed across Gurugram, Faridabad, Karnal, and Panchkula. Calculate daily prepaid deductions, decode mysterious blinking lights (CAL, PUSH, TAMPER, EARTH), and understand HERC protection rules.'}
            </p>
          </div>
        </div>
      </div>

      {/* Part 1: Prepaid Daily Deduction & 5% Rebate Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Inputs: 7 cols */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-600 shrink-0" />
            <h3 className="text-lg font-extrabold text-slate-900">
              {lang === 'hi' ? 'दैनिक कटौती (Daily Deduction) कैलकुलेटर:' : 'Prepaid Balance & Daily Deduction Estimator:'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'बिजली निगम (Discom)' : 'Discom'}
              </label>
              <select
                value={selectedDiscom}
                onChange={(e) => setSelectedDiscom(e.target.value as DiscomType)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-bold bg-white focus:ring-2 focus:ring-indigo-500"
              >
                <option value="DHBVN">DHBVN (South Haryana - Gurugram, FBD, etc.)</option>
                <option value="UHBVN">UHBVN (North Haryana - PKL, Karnal, etc.)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'स्वीकृत लोड (Sanctioned Load - kW)' : 'Sanctioned Load (kW)'}
              </label>
              <input
                type="number"
                min="1"
                max="50"
                value={sanctionedLoadKw}
                onChange={(e) => setSanctionedLoadKw(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-semibold focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Daily Units Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-slate-800">
                {lang === 'hi' ? 'अनुमानित दैनिक खपत (Units / Day):' : 'Estimated Daily Consumption (Units / Day):'}
              </label>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 font-black text-xs">
                {dailyUnits} Units / Day (~{dailyUnits * 30} units/month)
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              step="1"
              value={dailyUnits}
              onChange={(e) => setDailyUnits(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>2 Units ( पंखे + लाइट )</span>
              <span>15 Units ( 1 AC )</span>
              <span>30 Units ( 2 AC )</span>
              <span>50+ Units</span>
            </div>
          </div>

          {/* HERC 5% Rebate Callout */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold text-emerald-900 block mb-0.5">
                {lang === 'hi' ? 'HERC का 5% प्रीपेड स्मार्ट मीटर डिस्काउंट नियम' : 'HERC Mandated 5% Prepaid Smart Meter Rebate'}
              </span>
              <p className="leading-relaxed text-slate-700">
                {lang === 'hi'
                  ? 'हरियाणा विद्युत विनियामक आयोग (HERC) के अनुसार, जो उपभोक्ता स्मार्ट मीटर को प्रीपेड मोड में चलाते हैं, उन्हें ऊर्जा शुल्क (Energy Charges) पर सीधा 5% की छूट मिलती है! इससे आप सालाना ₹2,000 से ₹5,000 की बचत कर सकते हैं।'
                  : 'Under HERC tariff orders, domestic consumers opting for prepaid smart meter billing are entitled to an immediate 5% rebate on all energy consumption charges!'}
              </p>
            </div>
          </div>
        </div>

        {/* Right Output: Daily Breakdown: 5 cols */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
              {lang === 'hi' ? 'दैनिक बैलेंस कटौती अनुमान' : 'Daily Deduction Breakdown'}
            </span>
            <h3 className="text-2xl font-black text-white">
              ₹{netDailyDeduction.toFixed(2)}{' '}
              <span className="text-xs font-normal text-slate-400">{lang === 'hi' ? '/ दिन' : '/ day'}</span>
            </h3>

            {/* Price Breakdown Table */}
            <div className="mt-5 space-y-2 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">{lang === 'hi' ? 'दैनिक यूनिट खर्च (Energy):' : 'Energy Charges:'}</span>
                <span className="font-semibold text-white">₹{baseEnergyPerDay.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">{lang === 'hi' ? 'दैनिक फिक्स चार्ज (₹50/kW/माह):' : 'Fixed Charges/day:'}</span>
                <span className="font-semibold text-white">₹{fixedPerDay.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                <span className="text-slate-400">{lang === 'hi' ? 'FSA + ड्यूटी + टैक्स:' : 'FSA & Taxes/day:'}</span>
                <span className="font-semibold text-white">₹{(fsaPerDay + dutyPerDay).toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between py-1.5 border-b border-slate-800 text-emerald-400">
                <span>{lang === 'hi' ? '(-) 5% HERC प्रीपेड छूट:' : '(-) 5% HERC Prepaid Rebate:'}</span>
                <span className="font-black">- ₹{prepaidDiscountPerDay.toFixed(2)} / day</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-700 bg-slate-800/40 px-2 rounded-lg">
                <span className="font-bold text-slate-200">{lang === 'hi' ? 'मासिक छूट बचत:' : 'Monthly Rebate Savings:'}</span>
                <span className="font-black text-emerald-300 text-sm">₹{monthlySavingsRebate.toFixed(0)} {lang === 'hi' ? 'बचत' : 'saved'}</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-700">
                <span className="font-bold text-slate-200">{lang === 'hi' ? 'अनुमानित 30 दिन का खर्च:' : 'Estimated Monthly Spend:'}</span>
                <span className="font-black text-amber-400 text-base">₹{(netDailyDeduction * 30).toFixed(0)}</span>
              </div>
            </div>
          </div>

          {/* Quick Recharge CTA */}
          <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
            <a
              href={selectedDiscom === 'UHBVN' ? 'https://epayment.uhbvn.org.in/' : 'https://epayment.dhbvn.org.in/'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <span>{lang === 'hi' ? `${selectedDiscom} स्मार्ट मीटर तुरंत रिचार्ज करें` : `Recharge ${selectedDiscom} Smart Meter Online`}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-center text-[10px] text-slate-400">
              {lang === 'hi'
                ? 'रिचार्ज के 15 से 30 मिनट में कटी हुई बिजली स्वतः री-कनेक्ट हो जाती है।'
                : 'Supply restores automatically within 15 to 30 mins after successful recharge.'}
            </p>
          </div>
        </div>
      </div>

      {/* Part 2: Smart Meter LED Lights & Display Decoder */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <Eye className="w-5 h-5 text-indigo-700 shrink-0" />
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {lang === 'hi' ? 'स्मार्ट मीटर की लाइटें व संकेत (LED Indicators Decoder):' : 'Interactive Smart Meter LED & Warning Indicator Decoder:'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          {lang === 'hi'
            ? 'अपने स्मार्ट मीटर पर जल रही लाइट या बटन पर क्लिक करें और जानें कि इसका क्या अर्थ है तथा क्या यह कोई तकनीकी दोष या लोड चेतावनी है:'
            : 'Click any LED indicator below to diagnose whether it is normal, an earth leakage defect, or a tamper event:'}
        </p>

        {/* LED Indicator Selector Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {SMART_METER_LEDS.map((led) => (
            <button
              key={led.id}
              onClick={() => setActiveLed(led.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                activeLed === led.id
                  ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`w-3 h-3 rounded-full ${led.color} animate-pulse`} />
                <span className="font-bold text-xs text-slate-900">
                  {led.id.toUpperCase()}
                </span>
              </div>
              <span className="block text-[11px] text-slate-600 line-clamp-1 font-medium">
                {lang === 'hi' ? led.nameHi : led.nameEn}
              </span>
            </button>
          ))}
        </div>

        {/* Selected LED Detail Box */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className={`w-4 h-4 rounded-full ${currentLed.color} animate-pulse shrink-0`} />
            <h4 className="font-extrabold text-base text-slate-900">
              {lang === 'hi' ? currentLed.nameHi : currentLed.nameEn}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="bg-white p-3.5 rounded-lg border border-slate-200">
              <span className="block font-bold text-slate-500 uppercase tracking-wider mb-1">
                {lang === 'hi' ? 'लाइट की स्थिति:' : 'Status on Meter:'}
              </span>
              <p className="text-slate-800 font-medium leading-relaxed">
                {lang === 'hi' ? currentLed.statusHi : currentLed.statusEn}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-slate-200">
              <span className="block font-bold text-indigo-700 uppercase tracking-wider mb-1">
                {lang === 'hi' ? 'इसका क्या मतलब है?' : 'What it means:'}
              </span>
              <p className="text-slate-800 leading-relaxed">
                {lang === 'hi' ? currentLed.meaningHi : currentLed.meaningEn}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-emerald-200 bg-emerald-50/30">
              <span className="block font-bold text-emerald-800 uppercase tracking-wider mb-1">
                {lang === 'hi' ? 'उपभोक्ता को क्या करना चाहिए:' : 'Action Required:'}
              </span>
              <p className="text-slate-800 font-semibold leading-relaxed">
                {lang === 'hi' ? currentLed.actionHi : currentLed.actionEn}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Critical HERC Rules: No Disconnection Hours & Emergency Credit */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>{lang === 'hi' ? 'हरियाणा स्मार्ट मीटर विधिक अधिकार व राहत नियम (HERC Rules):' : 'Statutory Protection: HERC Rules on Smart Meter Disconnection:'}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
            <div className="flex items-center gap-2 font-bold text-rose-900 mb-1.5">
              <Clock className="w-4 h-4 text-rose-700" />
              <span>{lang === 'hi' ? 'रात में बिजली नहीं कट सकती' : 'No Night Disconnections'}</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'hi'
                ? 'HERC नियमों के अनुसार, शाम 6:00 बजे से अगली सुबह 10:00 बजे के बीच स्मार्ट मीटर बैलेंस माइनस होने पर भी घरेलू सप्लाई नहीं काटी जा सकती।'
                : 'Under HERC norms, discoms are legally prohibited from disconnecting domestic power between 6:00 PM and 10:00 AM, even if balance drops below ₹0.'}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40">
            <div className="flex items-center gap-2 font-bold text-amber-900 mb-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>{lang === 'hi' ? 'रविवार व सरकारी छुट्टी पर रोक' : 'Sunday & Public Holiday Shield'}</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'hi'
                ? 'रविवार अथवा किसी भी राज्य राजपत्रित अवकाश (Gazetted Holiday) के दिन रिमोट डिस्कनेक्शन सिस्टम बंद रहता है।'
                : 'Remote contactor tripping is suspended on Sundays and state holidays so consumers have adequate time to recharge without harassment.'}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
            <div className="flex items-center gap-2 font-bold text-emerald-900 mb-1.5">
              <RefreshCw className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'hi' ? 'स्वचालित री-कनेक्शन (बिना रिश्वत)' : 'Automated 15-Min Reconnection'}</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'hi'
                ? 'जैसे ही आप ऑनलाइन रिचार्ज करेंगे, स्मार्ट मीटर का आंतरिक रिले 15 से 30 मिनट में खुद जुड़ जाएगा। किसी लाइनमैन को पैसे देने की आवश्यकता नहीं है।'
                : 'Reconnection is fully robotic. Once account balance is positive, the central meter server signals the contactor to latch on within 15-30 minutes.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
