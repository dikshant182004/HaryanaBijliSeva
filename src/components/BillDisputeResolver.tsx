import React, { useState } from 'react';
import { 
  AlertTriangle, 
  FileText, 
  Copy, 
  Check, 
  Printer, 
  ShieldAlert, 
  Scale, 
  Clock, 
  HelpCircle,
  Building,
  Info,
  ExternalLink
} from 'lucide-react';
import { Language, DiscomType } from '../types';
import { HARYANA_DISTRICTS, OFFICIAL_LINKS } from '../data/haryanaData';

interface Props {
  lang: Language;
}

interface RemarkInfo {
  code: string;
  nameEn: string;
  nameHi: string;
  meaningEn: string;
  meaningHi: string;
  hercRuleEn: string;
  hercRuleHi: string;
  actionEn: string;
  actionHi: string;
  badgeColor: string;
}

const BILL_REMARKS: RemarkInfo[] = [
  {
    code: 'DEF / D',
    nameEn: 'Defective Meter (Display Blank / Stopped)',
    nameHi: 'दोषपूर्ण / रुका हुआ मीटर (डिस्प्ले बंद)',
    meaningEn: 'The meter display is dead, counter stopped, or recording zero units despite consumption. The Nigam bills on average basis.',
    meaningHi: 'मीटर की स्क्रीन बंद है, रीडिंग नहीं बढ़ रही या रुक गई है। निगम औसत (Average) आधार पर बिलिंग करता है।',
    hercRuleEn: 'HERC Supply Code Reg. 61: The discom must replace defective meters within 7 days in urban areas and 15 days in rural areas. Billing must be on 6-month historical average, NOT arbitrary high units.',
    hercRuleHi: 'HERC आपूर्ति संहिता नियम 61: निगम को शहरी क्षेत्र में 7 दिन व ग्रामीण क्षेत्र में 15 दिन के भीतर मीटर बदलना अनिवार्य है। बिल पिछले 6 महीने के वास्तविक औसत पर ही बनेगा।',
    actionEn: 'Apply for MCO (Meter Change Order) immediately. SDO cannot levy penalty if you report it proactively.',
    actionHi: 'तुरंत MCO (मीटर चेंज ऑर्डर) के लिए आवेदन करें। समय पर सूचित करने पर कोई जुर्माना नहीं लगेगा।',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300'
  },
  {
    code: 'M',
    nameEn: 'Burnt Meter',
    nameHi: 'जला हुआ मीटर',
    meaningEn: 'Meter burnt due to short circuit, lightning, or line voltage fluctuation.',
    meaningHi: 'शॉर्ट सर्किट, बिजली कड़कने या लाइन वोल्टेज में भारी उतार-चढ़ाव के कारण मीटर जल गया है।',
    hercRuleEn: 'HERC Standards of Performance: If burnt due to discom fault or external voltage surge, meter is replaced FREE of cost. Consumer only pays if tampering or unauthorized overload is proved.',
    hercRuleHi: 'HERC मानक: यदि लाइन फॉल्ट या वोल्टेज झटके से मीटर जला है, तो निगम निःशुल्क बदलेगा। उपभोक्ता से चार्ज केवल अनधिकृत लोड पाए जाने पर ही लिया जा सकता है।',
    actionEn: 'Lodge 1912 complaint for immediate supply restoration within 6 hours and apply for replacement.',
    actionHi: 'तुरंत 1912 पर कॉल करें ताकि 6 घंटे के भीतर बाईपास या अस्थायी बिजली चालू हो और नया मीटर लगे।',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-300'
  },
  {
    code: 'RN',
    nameEn: 'Reading Negative / Meter Jump / Reversed',
    nameHi: 'रीडिंग नेगेटिव / मीटर जंप / गलत अंक',
    meaningEn: 'Current reading is recorded lower than previous reading, or digits suddenly jumped by thousands due to meter reader error or faulty electronics.',
    meaningHi: 'वर्तमान रीडिंग पिछली रीडिंग से कम दर्ज हुई या मीटर रीडर की गलती/सॉफ्टवेयर गड़बड़ी से अचानक हजारों यूनिट जंप हो गए।',
    hercRuleEn: 'Under HERC norms, consumer cannot be coerced to pay obvious clerical errors before revision. SDO must verify physical meter photograph and issue revised bill within 3 working days.',
    hercRuleHi: 'HERC नियमों के तहत लिपिकीय गलती का बिल भरने के लिए उपभोक्ता पर दबाव नहीं डाला जा सकता। SDO 3 दिन में फोटो देखकर बिल संशोधित करेगा।',
    actionEn: 'Take a clear timestamped photo of meter display and submit with our SDO application.',
    actionHi: 'मीटर की साफ फोटो खींचें जिसमें रीडिंग व सीरियल नंबर दिखे, और नीचे दिए गए आवेदन के साथ जमा करें।',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-300'
  },
  {
    code: 'NV',
    nameEn: 'Not Visited / House Locked',
    nameHi: 'ताला लगा मिला / मीटर रीडर नहीं पहुंचा',
    meaningEn: 'Meter reader could not access meter or skipped visit. Provisional estimated bill issued.',
    meaningHi: 'मीटर रीडर को घर पर ताला मिला या वह आया नहीं। अनुमानित (Provisional) औसत बिल जारी किया गया।',
    hercRuleEn: 'Continuous NV bills for more than 2 billing cycles violates HERC billing standards. Discom must provide self-reading option or schedule off-hours appointment.',
    hercRuleHi: 'लगातार दो बार NV बिल जारी करना नियमों के विरुद्ध है। निगम को सेल्फ-रीडिंग (Trust Billing) की सुविधा देनी होगी।',
    actionEn: 'Submit self meter reading via UHBVN / DHBVN WhatsApp bot or mobile app to correct current cycle.',
    actionHi: 'UHBVN/DHBVN के व्हाट्सएप नंबर पर तुरंत वर्तमान मीटर फोटो भेजकर बिल सही करवाएं।',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-300'
  },
  {
    code: 'OK',
    nameEn: 'Actual Regular Reading',
    nameHi: 'सामान्य वास्तविक रीडिंग',
    meaningEn: 'Meter read successfully in person. If bill is still high, check seasonal AC usage, connected load slab, or meter accuracy.',
    meaningHi: 'रीडिंग सामान्य रूप से ली गई है। यदि बिल फिर भी अधिक है, तो एसी का उपयोग, लोड स्लैब या मीटर की शुद्धता की जांच कराएं।',
    hercRuleEn: 'Consumer has statutory right to request Meter Testing on site or in Nigam testing lab by depositing nominal test fee (₹100 for single phase, ₹250 for three phase). If meter is fast (>2.5%), fee is refunded and excess bill credited.',
    hercRuleHi: 'उपभोक्ता को ₹100 टेस्ट फीस जमा करके विभागीय लैब में मीटर जांच कराने का कानूनी अधिकार है। यदि मीटर 2.5% से तेज चला तो फीस वापस मिलेगी और अतिरिक्त बिल कटेगा।',
    actionEn: 'Apply for meter accuracy test using the official HERC test request format below.',
    actionHi: 'नीचे दिए प्रारूप से SDO कार्यालय में मीटर शुद्धता परीक्षण (Accuracy Test) का आवेदन दें।',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300'
  }
];

export const BillDisputeResolver: React.FC<Props> = ({ lang }) => {
  const [selectedRemark, setSelectedRemark] = useState<string>('DEF / D');
  const [consumerName, setConsumerName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [discom, setDiscom] = useState<DiscomType>('DHBVN');
  const [district, setDistrict] = useState('gurugram');
  const [subdivision, setSubdivision] = useState('');
  const [billMonth, setBillMonth] = useState('');
  const [disputedAmount, setDisputedAmount] = useState('');
  const [normalAverageAmount, setNormalAverageAmount] = useState('');
  const [meterReading, setMeterReading] = useState('');
  const [copied, setCopied] = useState(false);

  const matchedDistrict = HARYANA_DISTRICTS.find(d => d.id === district) || HARYANA_DISTRICTS[0];
  const activeRemark = BILL_REMARKS.find(r => r.code === selectedRemark) || BILL_REMARKS[0];

  // Calculate dispute delta
  const diff = (parseFloat(disputedAmount) || 0) - (parseFloat(normalAverageAmount) || 0);

  // Generate Formal Letter text
  const generateLetterText = () => {
    const today = new Date().toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const isHi = lang === 'hi';

    if (isHi) {
      return `दिनांक: ${today}

सेवा में,
श्रीमान उप-मंडल अधिकारी (SDO),
${discom === 'UHBVN' ? 'उत्तर हरियाणा बिजली वितरण निगम (UHBVN)' : 'दक्षिण हरियाणा बिजली वितरण निगम (DHBVN)'},
उप-मंडल: ${subdivision || '[उप-मंडल का नाम]'},
जिला: ${matchedDistrict.nameHi} (हरियाणा)।

विषय: गलत/अत्यधिक बिजली बिल संशोधन एवं मीटर जांच/MCO जारी करने बाबत (खाता संख्या: ${accountNumber || '[10-अंक खाता संख्या]'})

महोदय,

सविनय निवेदन है कि प्रार्थी ${consumerName || '[उपभोक्ता का नाम]'} आपके उप-मंडल के अंतर्गत परिसर पर विद्युत उपभोक्ता है। मेरा 10-अंकों का उपभोक्ता खाता संख्या ${accountNumber || '[खाता संख्या]'} है।

प्रार्थी को माह ${billMonth || '[बिल माह/वर्ष]'} का बिजली बिल प्राप्त हुआ है जिसकी राशि ₹${disputedAmount || '______'} दर्शाई गई है। यह बिल मेरे सामान्य औसत बिल (लगभग ₹${normalAverageAmount || '______'}) से अत्यधिक व त्रुटिपूर्ण है। 

बिल की स्थिति/मीटर रिमार्क: "${activeRemark.code} - ${activeRemark.nameHi}" है।
वर्तमान वास्तविक मीटर रीडिंग: ${meterReading || '[मीटर डिस्प्ले में दिख रही रीडिंग]'} KWh।

HERC (Electricity Supply Code) Regulations, 2014 के नियम 61 एवं Standards of Performance के अनुसार:
1. दोषपूर्ण/जले/गलत रीडिंग वाले मीटर के मामले में उपभोक्ता से मनमाना बिल नहीं वसूला जा सकता, बल्कि पिछले 6 महीनों के वास्तविक औसत के अनुसार ही प्रोविजनल बिलिंग का प्रावधान है।
2. मीटर में खराबी या जंप होने की स्थिति में अविलंब MCO (Meter Change Order) जारी किया जाए अथवा साइट पर मीटर परीक्षण (Accuracy Testing) कराया जाए।

अतः आपसे विनम्र प्रार्थना है कि:
(क) इस त्रुटिपूर्ण बिल पर रोक लगाकर वास्तविक रीडिंग/औसत के अनुसार संशोधित बिल जारी किया जाए।
(ख) नए मीटर की स्थापना (MCO) हेतु आदेश जारी करें एवं मीटर परीक्षण कराया जाए।
(ग) जब तक जांच पूर्ण न हो, विद्युत कनेक्शन न काटा जाए।

संलग्नक:
1. विवादित बिल की प्रतिलिपि
2. वर्तमान मीटर डिस्प्ले की फोटो (रीडिंग व सीरियल नंबर सहित)
3. पिछले नियमित बिलों की प्रतियां

सधन्यवाद,

हस्ताक्षर: _______________________
नाम: ${consumerName || '[उपभोक्ता का नाम]'}
मोबाइल नंबर: ____________________
परिसर का पता: ___________________
खाता संख्या: ${accountNumber || '[10-अंक खाता संख्या]'}`;
    }

    return `Date: ${today}

To,
The Sub-Divisional Officer (SDO),
${discom === 'UHBVN' ? 'Uttar Haryana Bijli Vitran Nigam (UHBVN)' : 'Dakshin Haryana Bijli Vitran Nigam (DHBVN)'},
Sub-Division: ${subdivision || '[Enter Sub-Division Name]'},
District: ${matchedDistrict.nameEn}, Haryana.

Subject: Formal Request for Rectification of Disputed High Bill & Meter Verification / MCO under HERC Regulations (Account No: ${accountNumber || '[10-Digit Account Number]'})

Respected Sir/Madam,

I, the undersigned ${consumerName || '[Consumer Name]'}, am a bona fide domestic/commercial electricity consumer under your sub-division bearing 10-digit Account Number: ${accountNumber || '[Account Number]'}.

I have received the electricity bill for the billing cycle of ${billMonth || '[Billing Month/Cycle]'} claiming an exorbitant amount of ₹${disputedAmount || '______'}. This is drastically in excess of my normal bimonthly consumption (which averages approximately ₹${normalAverageAmount || '______'}).

Bill Remark / Status Code: "${activeRemark.code} - ${activeRemark.nameEn}".
Current Actual Meter Reading on Display: ${meterReading || '[Reading as shown on meter screen]'} kWh.

Under HERC (Electricity Supply Code) Regulations, 2014 (Regulation 61) and HERC Standards of Performance:
1. In case of defective/burnt/jumped meters, billing must be strictly restricted to the corresponding average of the previous 6 billing cycles or previous year, without punitive charges.
2. The licensee is mandated to replace defective meters within 7 days in urban areas and 15 days in rural areas, failing which statutory compensation is applicable.
3. Obvious clerical/recording errors must be rectified within 3 working days upon photographic verification.

I hereby request your good office to:
(a) Hold recovery of the disputed excess amount of ₹${diff > 0 ? diff.toFixed(0) : '______'} and issue a provisional revised bill based on legitimate historical consumption.
(b) Issue an immediate Meter Change Order (MCO) or conduct an official Meter Accuracy Test as per HERC test standards.
(c) Direct the field staff not to disconnect the electric supply pending resolution of this formal dispute.

Enclosures:
1. Copy of the disputed electricity bill
2. Timestamped photograph of physical meter display showing current reading and meter serial number
3. Copies of past 3 paid regular electricity bills

Yours faithfully,

Signature: _______________________
Name: ${consumerName || '[Consumer Name]'}
Mobile: __________________________
Premises Address: ________________
Account Number: ${accountNumber || '[Account Number]'}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateLetterText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>SDO Bill Dispute Application - Haryana Bijli</title>
          <style>
            body { font-family: 'Times New Roman', serif; font-size: 14pt; line-height: 1.6; padding: 40px; color: #111; }
            pre { white-space: pre-wrap; font-family: inherit; }
          </style>
        </head>
        <body>
          <pre>${generateLetterText()}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 300);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-rose-900/40 shadow-lg relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-600/30 border border-rose-500/50 flex items-center justify-center text-rose-400 shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 font-bold text-xs uppercase tracking-wider inline-block mb-2">
              {lang === 'hi' ? 'विवादित बिल व मीटर समस्या समाधान' : 'High Bill & Meter Error Resolver'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'hi' ? 'गलत बिजली बिल आया है? घबराएं नहीं, अपना विधिक अधिकार जानें' : 'Received an Inflated Bill or Faulty Meter Code? Resolve Legally'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {lang === 'hi'
                ? 'हरियाणा में लाखों उपभोक्ता मीटर रीडर की गलती, मीटर जंप होने या DEF/NV कोड के कारण हजारों रुपये का गलत बिल पाकर परेशान होते हैं। HERC नियमों के अनुसार अपने बिल कोड का अर्थ जानें और SDO को देने के लिए तैयार आधिकारिक आवेदन बनाएं।'
                : 'Decipher cryptic bill remarks (DEF, M, RN, NV), verify HERC statutory protection against unauthorized average billing, and auto-generate an official application to your SDO with legal references.'}
            </p>
          </div>
        </div>
      </div>

      {/* Part 1: Bill Remarks Decoder */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-5 h-5 text-emerald-700 shrink-0" />
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {lang === 'hi' ? '1. अपने बिजली बिल पर लिखा "मीटर स्टेटस / रिमार्क" चुनें:' : '1. Select the Status / Remark printed on your Haryana Bill:'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          {lang === 'hi'
            ? 'अपने UHBVN/DHBVN बिल की "Meter Reading Details" तालिका में "Status" कॉलम देखें:'
            : 'Check the "Status" column in your UHBVN or DHBVN paper/online electricity bill table:'}
        </p>

        {/* Remark Selection Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {BILL_REMARKS.map((item) => (
            <button
              key={item.code}
              onClick={() => setSelectedRemark(item.code)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                selectedRemark === item.code
                  ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-500/20 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
              }`}
            >
              <span className={`inline-block px-2 py-0.5 rounded text-xs font-black border mb-1.5 ${item.badgeColor}`}>
                {item.code}
              </span>
              <span className="block font-bold text-xs text-slate-900 line-clamp-1">
                {lang === 'hi' ? item.nameHi : item.nameEn}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Remark Detail Box */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 space-y-4">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-md text-xs font-black border ${activeRemark.badgeColor}`}>
                {activeRemark.code}
              </span>
              <h4 className="font-extrabold text-base text-slate-900">
                {lang === 'hi' ? activeRemark.nameHi : activeRemark.nameEn}
              </h4>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              {lang === 'hi' ? 'विधिक प्रावधान: HERC रेगुलेशन 61' : 'Statutory Protection: HERC Reg 61'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="bg-white p-3.5 rounded-lg border border-slate-200">
              <span className="block font-bold text-slate-500 uppercase tracking-wider mb-1">
                {lang === 'hi' ? 'इसका क्या मतलब है?' : 'What it means:'}
              </span>
              <p className="text-slate-800 leading-relaxed">
                {lang === 'hi' ? activeRemark.meaningHi : activeRemark.meaningEn}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-emerald-200 bg-emerald-50/30">
              <span className="block font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Scale className="w-3.5 h-3.5" />
                {lang === 'hi' ? 'HERC का कानूनी नियम:' : 'HERC Legal Protection:'}
              </span>
              <p className="text-slate-800 leading-relaxed font-medium">
                {lang === 'hi' ? activeRemark.hercRuleHi : activeRemark.hercRuleEn}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-lg border border-blue-200 bg-blue-50/30">
              <span className="block font-bold text-blue-800 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {lang === 'hi' ? 'आपको तुरंत क्या करना चाहिए:' : 'Action Required:'}
              </span>
              <p className="text-slate-800 leading-relaxed font-medium">
                {lang === 'hi' ? activeRemark.actionHi : activeRemark.actionEn}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Interactive SDO Application Generator */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-emerald-700 shrink-0" />
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {lang === 'hi' ? '2. SDO कार्यालय हेतु आधिकारिक आपत्ति आवेदन जनरेटर' : '2. Official SDO Dispute Application Generator'}
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          {lang === 'hi'
            ? 'नीचे अपनी जानकारी भरें। यह टूल HERC विनियमों के सटीक संदर्भों के साथ एक तैयार आवेदन पत्र बनाएगा, जिसे आप कॉपी या सीधे प्रिंट कर सकते हैं:'
            : 'Fill in your bill details below to generate a formal, legally grounded application addressed to your Sub-Divisional Officer (SDO) with 1-click print/copy:'}
        </p>

        {/* Input Form Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'hi' ? 'उपभोक्ता का नाम *' : 'Consumer Name *'}
            </label>
            <input
              type="text"
              value={consumerName}
              onChange={(e) => setConsumerName(e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'hi' ? '10-अंकों की खाता संख्या *' : '10-Digit Account Number *'}
            </label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="e.g. 1029384756"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'hi' ? 'बिजली निगम (Discom)' : 'Discom'}
            </label>
            <select
              value={discom}
              onChange={(e) => setDiscom(e.target.value as DiscomType)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-bold bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            >
              <option value="DHBVN">DHBVN (South Haryana)</option>
              <option value="UHBVN">UHBVN (North Haryana)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'hi' ? 'जिला (District)' : 'District'}
            </label>
            <select
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
                const found = HARYANA_DISTRICTS.find(d => d.id === e.target.value);
                if (found) setDiscom(found.discom);
              }}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            >
              {HARYANA_DISTRICTS.map(d => (
                <option key={d.id} value={d.id}>
                  {lang === 'hi' ? d.nameHi : d.nameEn} ({d.discom})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'hi' ? 'उप-मंडल (Sub-Division)' : 'Sub-Division (Optional)'}
            </label>
            <input
              type="text"
              value={subdivision}
              onChange={(e) => setSubdivision(e.target.value)}
              placeholder="e.g. DLF City / Old Faridabad"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'hi' ? 'विवादित बिल माह' : 'Disputed Bill Month'}
            </label>
            <input
              type="text"
              value={billMonth}
              onChange={(e) => setBillMonth(e.target.value)}
              placeholder="e.g. August 2026"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'hi' ? 'विवादित बिल राशि (₹)' : 'Disputed Bill Amount (₹)'}
            </label>
            <input
              type="number"
              value={disputedAmount}
              onChange={(e) => setDisputedAmount(e.target.value)}
              placeholder="e.g. 18500"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {lang === 'hi' ? 'सामान्य औसत बिल (₹)' : 'Normal Average Bill (₹)'}
            </label>
            <input
              type="number"
              value={normalAverageAmount}
              onChange={(e) => setNormalAverageAmount(e.target.value)}
              placeholder="e.g. 2800"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
            />
          </div>
        </div>

        {/* Dispute Summary Delta Pill */}
        {diff > 0 && (
          <div className="mb-6 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between flex-wrap gap-2 text-xs">
            <span className="font-bold text-amber-900">
              {lang === 'hi' ? 'अनुमानित अत्यधिक/विवादित अतिरिक्त राशि:' : 'Estimated Disputed Discrepancy Amount:'}
            </span>
            <span className="text-sm font-black text-rose-700">
              + ₹{diff.toLocaleString('en-IN')} {lang === 'hi' ? 'अतिरिक्त' : 'excess above normal'}
            </span>
          </div>
        )}

        {/* Generated Formal Application Preview Container */}
        <div className="relative rounded-xl border border-slate-300 bg-slate-900 text-slate-100 p-5 sm:p-6 font-mono text-xs overflow-x-auto shadow-inner">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">
              {lang === 'hi' ? 'तैयार पत्र पूर्वावलोकन' : 'Application Preview'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold inline-flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (lang === 'hi' ? 'कॉपी हो गया!' : 'Copied!') : (lang === 'hi' ? 'आवेदन कॉपी करें' : 'Copy Text')}</span>
              </button>
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-sans text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'प्रिंट / PDF' : 'Print / PDF'}</span>
              </button>
            </div>
          </div>

          <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-slate-200 leading-relaxed">
            {generateLetterText()}
          </pre>
        </div>

        {/* Submission instructions */}
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-xs text-blue-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-blue-900">
            <Building className="w-4 h-4 text-blue-700 shrink-0" />
            <span>{lang === 'hi' ? 'आवेदन जमा करने की आधिकारिक प्रक्रिया:' : 'How to submit this letter to your Sub-Division:'}</span>
          </div>
          <ol className="list-decimal pl-5 space-y-1.5 leading-relaxed text-slate-700">
            <li>
              {lang === 'hi'
                ? 'उपरोक्त पत्र को प्रिंट करें और उस पर अपने हस्ताक्षर करें।'
                : 'Print the letter and sign it at the bottom.'}
            </li>
            <li>
              {lang === 'hi'
                ? 'अपने मीटर की एक स्पष्ट फोटो खींचे जिसमें रीडिंग और मीटर का सीरियल नंबर साफ दिखाई दे।'
                : 'Take a clear timestamped mobile photo of your electricity meter screen showing the reading and serial number.'}
            </li>
            <li>
              {lang === 'hi'
                ? 'अपने नजदीकी उप-मंडल अधिकारी (SDO) कार्यालय में दो प्रतियों में जमा करें और अपनी प्रति पर "डायरी नंबर" (Receipt Stamp) अवश्य लें।'
                : 'Submit in duplicate to your local SDO office. Always insist on taking a stamped "Diary Number / Inward Stamp" on your receiving copy.'}
            </li>
            <li>
              {lang === 'hi'
                ? 'यदि SDO 7 दिनों में कार्रवाई न करे, तो डायरी नंबर के साथ 1912 पर कॉल करके शिकायत को सीधे सर्कल CGRF फोरम में एस्केलेट करें।'
                : 'If the sub-division does not revise the bill or inspect the meter within 7 days, dial 1912 quote your Diary Number to escalate directly to the Circle CGRF.'}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
