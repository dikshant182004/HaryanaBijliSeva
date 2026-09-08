import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  AlertTriangle, 
  Building, 
  Send, 
  ExternalLink,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Clock
} from 'lucide-react';
import { Language, DiscomType } from '../types';
import { HARYANA_DISTRICTS, VERIFIED_HELPLINES } from '../data/haryanaData';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LastVerifiedBadge } from '../components/LastVerifiedBadge';

interface Props {
  lang: Language;
}

type GrievanceType = 
  | 'inflated_bill' 
  | 'defective_meter' 
  | 'voltage_fluctuation' 
  | 'loose_wire_safety' 
  | 'delay_connection';

export const ComplaintGeneratorPage: React.FC<Props> = ({ lang }) => {
  const [grievanceType, setGrievanceType] = useState<GrievanceType>('inflated_bill');
  const [consumerName, setConsumerName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [discom, setDiscom] = useState<DiscomType>('DHBVN');
  const [district, setDistrict] = useState('gurugram');
  const [subdivision, setSubdivision] = useState('');
  const [address, setAddress] = useState('');
  const [disputedAmount, setDisputedAmount] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [copied, setCopied] = useState(false);

  const matchedDistrict = HARYANA_DISTRICTS.find(d => d.id === district) || HARYANA_DISTRICTS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(generateLetterText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const generateLetterText = () => {
    const today = new Date().toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const isHi = lang === 'hi';
    const subDivDisplay = subdivision || (isHi ? '[उप-मंडल / Sub-Division नाम]' : '[Sub-Division Name]');
    const distName = isHi ? matchedDistrict.nameHi : matchedDistrict.nameEn;
    const discomFullName = discom === 'DHBVN' ? 'दक्षिण हरियाणा बिजली वितरण निगम (DHBVN)' : 'उत्तर हरियाणा बिजली वितरण निगम (UHBVN)';
    const discomFullNameEn = discom === 'DHBVN' ? 'Dakshin Haryana Bijli Vitran Nigam (DHBVN)' : 'Uttar Haryana Bijli Vitran Nigam (UHBVN)';

    if (isHi) {
      let subject = '';
      let bodyText = '';
      let hercRegulationCitation = '';

      if (grievanceType === 'inflated_bill') {
        subject = `अत्यधिक/त्रुटिपूर्ण बिजली बिल निरस्तीकरण एवं वास्तविक उपभोग अनुसार बिल संशोधन बाबत (खाता सं: ${accountNumber || '[खाता संख्या]'})`;
        hercRegulationCitation = 'हरियाणा विद्युत विनियामक आयोग (विद्युत आपूर्ति संहिता) विनियम, 2014 के नियम 61 एवं HERC उपभोक्ता शिकायत निवारण विनियम';
        bodyText = `1. प्रार्थी उक्त पते पर ${discom} का एक नियमित घरेलू उपभोक्ता है। प्रार्थी का बिजली बिल हमेशा समय पर भुगतान किया जाता रहा है।
2. हाल ही में प्रार्थी को ₹${disputedAmount || '[विवादित राशि]'} का अत्यंत अधिक एवं अप्रत्याशित बिल भेजा गया है, जो प्रार्थी के सामान्य मासिक उपभोग से कई गुना अधिक है।
3. प्रार्थी का मानना है कि यह बिल गलत मीटर रीडिंग, अनुचित एरियर, या तकनीकी त्रुटि के कारण बना है।
4. HERC विनियमों के तहत प्रार्थी को वास्तविक उपभोग के आधार पर सही बिल प्राप्त करने का वैधानिक अधिकार है।

अतः श्रीमान् से सविनय निवेदन है कि:
क) उक्त त्रुटिपूर्ण बिल पर त्वरित संज्ञान लेकर इसकी जांच करवाई जाए।
ख) जांच पूर्ण होने तक उक्त विवादित राशि पर विलंब शुल्क (LPSC) न लगाया जाए एवं कनेक्शन न काटा जाए।
ग) मीटर रीडिंग सत्यापित कर संशोधित वास्तविक बिल जारी किया जाए।`;
      } else if (grievanceType === 'defective_meter') {
        subject = `खराब / जले / तेज चल रहे मीटर की शुद्धता जांच एवं मीटर बदलने बाबत (खाता सं: ${accountNumber || '[खाता संख्या]'})`;
        hercRegulationCitation = 'HERC विद्युत आपूर्ति संहिता विनियम एवं सामान्य प्रभार अनुसूची (Schedule of General Charges)';
        bodyText = `1. प्रार्थी के परिसर पर स्थापित बिजली मीटर काफी समय से खराब / रुका हुआ (DEF) / असामान्य गति से तेज चल रहा है।
2. मीटर की स्क्रीन पर रीडिंग स्पष्ट नहीं दिख रही है अथवा बिना किसी भारी लोड के भी पल्स लाइट अत्यधिक तेज गति से झपक रही है।
3. प्रार्थी HERC द्वारा निर्धारित मीटर टेस्टिंग फीस जमा करने को तैयार है।

अतः श्रीमान् से सविनय निवेदन है कि:
क) विभागीय तकनीकी टीम भेजकर मीटर का शुद्धता परीक्षण (Accuracy Test) करवाया जाए।
ख) यदि मीटर खराब या 2.5% से अधिक तेज पाया जाए तो नियमानुसार नया मीटर स्थापित किया जाए तथा पूर्व में की गई अतिरिक्त बिलिंग का समायोजन किया जाए।`;
      } else if (grievanceType === 'voltage_fluctuation') {
        subject = `अत्यधिक कम वोल्टेज एवं बार-बार अघोषित बिजली कटौती के स्थायी समाधान बाबत`;
        hercRegulationCitation = 'HERC (वितरण लाइसेंसधारियों के सेवा मानक / Standards of Performance) विनियम 2020';
        bodyText = `1. प्रार्थी के क्षेत्र (${subDivDisplay}, ${distName}) में पिछले कई दिनों से वोल्टेज अत्यधिक कम (Low Voltage: 140V-160V) आ रहा है और दिन में कई बार बिना पूर्व सूचना के ट्रिपिंग हो रही है।
2. कम वोल्टेज के कारण घरेलू उपकरण (रेफ्रिजरेटर, सबमर्सिबल पंप, पंखे) जलने का गंभीर जोखिम बना हुआ है।
3. HERC सेवा मानकों (Standards of Performance) के अनुसार उपभोक्ताओं को निर्धारित वोल्टेज (230V ±6%) पर निर्बाध विद्युत आपूर्ति प्रदान करना निगम का विधिक दायित्व है।

अतः निवेदन है कि क्षेत्र के ट्रांसफार्मर व लोड का तकनीकी निरीक्षण करवाकर वोल्टेज समस्या का तत्काल स्थायी निवारण किया जाए।`;
      } else if (grievanceType === 'loose_wire_safety') {
        subject = `अति-गंभीर: सार्वजनिक मार्ग पर ढीले / नीचे लटकते बिजली तारों से जान-माल के खतरे के निवारण बाबत`;
        hercRegulationCitation = 'केंद्रीय विद्युत प्राधिकरण (सुरक्षा एवं विद्युत आपूर्ति उपाय) विनियम एवं विद्युत अधिनियम 2003 की धारा 68';
        bodyText = `1. प्रार्थी के मोहल्ले/मार्ग (${address || '[स्थान का विवरण]'}) में 11 KV / 440V की बिजली लाइन के तार अत्यंत नीचे झूल रहे हैं अथवा खंभा टेढ़ा होकर गिरने की स्थिति में है।
2. नीचे लटकते तारों से कभी भी कोई वाहन या नागरिक संपर्क में आकर जानलेवा विद्युत दुर्घटना का शिकार हो सकता है।
3. यह मामला प्रत्यक्ष रूप से मानव जीवन की सुरक्षा से जुड़ा है।

अतः श्रीमान् से अत्यंत विनम्र प्रार्थना है कि तत्काल लाइनमैन/जेई को भेजकर तारों को खिंचवाया जाए तथा आवश्यक सुरक्षा गार्डिंग लगाई जाए ताकि किसी भी अप्रिय घटना से बचा जा सके।`;
      } else {
        subject = `HERC निर्धारित समयसीमा व्यतीत होने पर भी नया बिजली कनेक्शन / लोड वृद्धि जारी न होने बाबत`;
        hercRegulationCitation = 'HERC Standards of Performance Regulations 2020 (नया कनेक्शन समयसीमा: अधिकतम 30 दिन)';
        bodyText = `1. प्रार्थी ने सरल हरियाणा / डिस्कॉम पोर्टल पर नए बिजली कनेक्शन / लोड वृद्धि हेतु नियमानुसार सभी आवश्यक दस्तावेज व डिमांड नोटिस फीस जमा कर दी थी।
2. HERC सेवा मानकों के अनुसार तय समयसीमा (30 दिन) बीत जाने के बाद भी विभागीय स्तर पर मीटर स्थापित नहीं किया गया है।
3. बिजली कनेक्शन के अभाव में प्रार्थी को अत्यधिक मानसिक व आर्थिक परेशानी का सामना करना पड़ रहा है।

अतः निवेदन है कि प्रार्थी के परिसर पर अविलंब मीटर स्थापित करवाकर विद्युत आपूर्ति चालू करवाई जाए, अन्यथा प्रार्थी नियमानुसार HERC में दैनिक मुआवजे की मांग करेगा।`;
      }

      return `दिनांक: ${today}

सेवा में,
उप-मंडल अधिकारी (SDO) / कार्यपालक अभियंता (XEN),
${discomFullName},
उप-मंडल: ${subDivDisplay},
जिला: ${distName}, हरियाणा।

विषय: ${subject}
संदर्भ: विधिक संदर्भ - ${hercRegulationCitation}

महोदय,

सविनय निवेदन है कि प्रार्थी का विवरण निम्नानुसार है:
1. उपभोक्ता का नाम: ${consumerName || '[उपभोक्ता का नाम]'}
2. 10-अंकों का खाता नंबर: ${accountNumber || '[खाता संख्या]'}
3. परिसर का पता: ${address || '[पूरा पता, मकान नंबर, गली/वार्ड]'}
4. संपर्क मोबाइल नंबर: ${mobileNumber || '[मोबाइल नंबर]'}

शिकायत का विस्तृत विवरण:
${bodyText}

${additionalDetails ? `अतिरिक्त विवरण / साक्ष्य:\n${additionalDetails}\n` : ''}
संलग्नक:
1. नवीनतम बिजली बिल की छायाप्रति
2. मीटर स्क्रीन अथवा स्थल की स्पष्ट फोटो
3. आधार कार्ड / स्वामित्व पहचान पत्र

प्रार्थी श्रीमान् से अनुरोध करता है कि इस आवेदन पर संबंधित कार्यालय की आधिकारिक "डायरी संख्या" (Inward Diary Number) प्रदान कर समयबद्ध कार्रवाई सुनिश्चित की जाए।

भवदीय,

हस्ताक्षर: ___________________________
नाम: ${consumerName || '[उपभोक्ता का नाम]'}
मोबाइल: ${mobileNumber || '[मोबाइल नंबर]'}`;
    }

    // English Template
    let subjectEn = '';
    let bodyTextEn = '';
    let citationEn = '';

    if (grievanceType === 'inflated_bill') {
      subjectEn = `Rectification of Inflated Electricity Bill and Adjustment based on Actual Consumption (Account: ${accountNumber || '[Account No]'})`;
      citationEn = 'Regulation 61 of HERC Electricity Supply Code 2014 & Consumer Redressal Regulations';
      bodyTextEn = `1. That the applicant is a bona fide regular consumer of ${discom} at the above premises, maintaining an immaculate payment record.
2. That recently, an erroneous bill amounting to ₹${disputedAmount || '[Amount]'} has been served, which is completely inconsistent with my regular average monthly power consumption.
3. That this inflated billing is attributable to incorrect manual entry, unjustified retrospective arrears, or meter multiplier calculation errors.
4. That under statutory HERC regulations, consumers possess an absolute legal right to be billed strictly for electrical energy actually utilized.

It is therefore respectfully prayed that:
a) An immediate inquiry be initiated into this defective bill.
b) Surcharge (LPSC) be frozen and power supply not disconnected during pendency of this dispute.
c) Meter readings be physically verified and a corrected bill issued forthwith.`;
    } else if (grievanceType === 'defective_meter') {
      subjectEn = `Testing and Replacement of Defective / Burnt / Running-Fast Meter (Account: ${accountNumber || '[Account No]'})`;
      citationEn = 'HERC Electricity Supply Code Regulations & Schedule of General Charges';
      bodyTextEn = `1. That the electricity meter installed at my premises is recording abnormally / stopped / display damaged (DEF status).
2. That the pulse indicator is blinking erratically without corresponding household load, resulting in fictitious average billing.
3. That the applicant is ready and willing to deposit the statutory meter testing fee prescribed under HERC regulations.

It is therefore respectfully prayed that:
a) A technical inspection team be deputed to conduct an on-site or laboratory meter accuracy test.
b) If meter is verified defective or fast by >2.5%, the meter be replaced and excess units adjusted.`;
    } else if (grievanceType === 'voltage_fluctuation') {
      subjectEn = `Urgent Redressal of Severe Low Voltage and Unannounced Outages`;
      citationEn = 'HERC (Standards of Performance of Distribution Licensees) Regulations 2020';
      bodyTextEn = `1. That the residents of ${subDivDisplay}, ${distName} are experiencing severe low voltage (140V-160V) and recurrent erratic power tripping.
2. That low voltage has created an imminent hazard of motor burnout for refrigerators, air-conditioners, and water pump sets.
3. That under HERC Standards of Performance, DISCOMs are statutorily obligated to supply voltage within ±6% of nominal 230V single phase.

It is therefore requested that distribution transformer loading be rebalanced immediately to restore stable voltage.`;
    } else if (grievanceType === 'loose_wire_safety') {
      subjectEn = `URGENT / SAFETY HAZARD: Removal of Low-Hanging High Tension Wires and Leaning Pole`;
      citationEn = 'Central Electricity Authority (Safety & Electric Supply) Regulations & Sec 68 of Electricity Act 2003';
      bodyTextEn = `1. That in our locality (${address || '[Location]'}), electrical conductors are hanging dangerously low across the public street.
2. That the leaning pole and sagging overhead lines present an imminent threat of electrocution to pedestrians and vehicular traffic.
3. That public safety is paramount under the Electricity Act 2003.

It is therefore prayed that an emergency repair crew be dispatched immediately to tension the sagging wires and install safety cradle guards.`;
    } else {
      subjectEn = `Undue Delay in Release of Electricity Connection / Load Extension beyond HERC SOP Timeline`;
      citationEn = 'HERC Standards of Performance Regulations 2020 (Mandated Connection Timeline: 30 Days)';
      bodyTextEn = `1. That the applicant completed all formalities and deposited demanded fees for a new connection/load extension on the official portal.
2. That the statutory timeline of 30 days mandated by HERC has elapsed without meter installation.
3. That the non-supply of power is causing severe hardship.

It is requested that connection be released immediately, failing which statutory compensation will be sought before the CGRF.`;
    }

    return `Date: ${today}

To,
The Sub-Divisional Officer (SDO) / Executive Engineer (XEN),
${discomFullNameEn},
Sub-Division: ${subDivDisplay},
District: ${distName}, Haryana.

Subject: ${subjectEn}
Legal Citation: ${citationEn}

Respected Sir/Madam,

The particulars of the consumer are as follows:
1. Consumer Name: ${consumerName || '[Consumer Name]'}
2. 10-Digit Account Number: ${accountNumber || '[Account Number]'}
3. Premises Address: ${address || '[Full Address, House No, Ward]' }
4. Contact Mobile: ${mobileNumber || '[Mobile Number]'}

Details of Grievance:
${bodyTextEn}

${additionalDetails ? `Additional Information / Evidence:\n${additionalDetails}\n` : ''}
Enclosures:
1. Copy of latest electricity bill
2. Timestamped photograph of meter display / site
3. Copy of Consumer Identity Proof (Aadhaar)

The applicant requests your office to kindly acknowledge receipt by affixing the official Inward / Diary Number on the duplicate copy.

Yours faithfully,

Signature: ___________________________
Name: ${consumerName || '[Consumer Name]'}
Mobile: ${mobileNumber || '[Mobile Number]'}`;
  };

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <SeoHead
        title={lang === 'hi'
          ? 'हरियाणा बिजली शिकायत पत्र जनरेटर | SDO को आधिकारिक विधिक नोटिस'
          : 'Haryana Electricity Complaint Letter Generator | Official SDO Notice'}
        description={lang === 'hi'
          ? 'गलत बिल, खराब मीटर, लो वोल्टेज या नए कनेक्शन में देरी पर SDO एवं CGRF को प्रस्तुत करने हेतु तैयार विधिक आवेदन पत्र प्रिंट करें।'
          : 'Generate ready-to-print statutory complaint notices to UHBVN and DHBVN SDO offices citing official HERC Electricity Supply Code regulations.'}
        path="/complaint-generator"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? 'विधिक शिकायत पत्र जनरेटर' : 'Statutory Complaint Generator' }
          ]}
        />

        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-100 text-rose-800 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  {lang === 'hi' ? 'विधिक प्रारूप जनरेटर' : 'Statutory Notice Generator'}
                </span>
                <LastVerifiedBadge lang={lang} source="HERC Supply Code & SOP 2020" />
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === 'hi' 
                  ? 'हरियाणा बिजली शिकायत एवं SDO आवेदन पत्र जनरेटर' 
                  : 'Haryana Electricity SDO Complaint Letter Generator'}
              </h1>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'गलत बिजली बिल, खराब मीटर, या लो वोल्टेज से परेशान हैं? मात्र 2 मिनट में अपने विवरण भरें और HERC विधिक नियमों के संदर्भ सहित तैयार आवेदन पत्र प्रिंट करें।'
                  : 'Generate a legally defensible complaint letter formatted for SDO submission under HERC regulations. Complete with Diary Number instructions.'}
              </p>
            </div>

            {/* Helpline quick card */}
            <div className="shrink-0 p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 text-xs sm:text-sm space-y-2 lg:max-w-xs">
              <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider">
                {lang === 'hi' ? '24x7 टोल-फ्री शिकायत हेल्पलाइन' : '24x7 Grievance Helplines'}
              </span>
              <p className="text-slate-300 text-xs">
                {lang === 'hi' ? 'पत्र जमा करने के साथ-साथ 1912 पर कॉल करके शिकायत डॉकेट नंबर अवश्य लें।' : 'Always register on 1912 alongside written submissions.'}
              </p>
              <div className="pt-2 flex flex-col gap-1.5 font-mono text-xs">
                <a href="tel:1912" className="text-rose-400 font-bold hover:underline">1912 (Haryana Universal)</a>
                <span className="text-slate-400 text-[11px]">DHBVN: 1800-180-4334</span>
                <span className="text-slate-400 text-[11px]">UHBVN: 1800-180-1550</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid: Form on Left, Live Letter on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Form: 5 cols */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
            <h2 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'hi' ? 'शिकायत का विवरण भरें' : 'Complaint Particulars'}</span>
            </h2>

            {/* Grievance Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {lang === 'hi' ? '1. समस्या का प्रकार चुनें:' : '1. Select Grievance Category:'}
              </label>
              <select
                value={grievanceType}
                onChange={(e) => setGrievanceType(e.target.value as GrievanceType)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500"
              >
                <option value="inflated_bill">{lang === 'hi' ? 'गलत / अत्यधिक बिजली बिल (Inflated Bill)' : 'Incorrect / Excessive Bill Dispute'}</option>
                <option value="defective_meter">{lang === 'hi' ? 'खराब / रुका / तेज चल रहा मीटर (Defective Meter)' : 'Defective / Fast Running Meter Testing'}</option>
                <option value="voltage_fluctuation">{lang === 'hi' ? 'कम वोल्टेज व अघोषित बिजली कटौती (Low Voltage)' : 'Severe Low Voltage & Frequent Tripping'}</option>
                <option value="loose_wire_safety">{lang === 'hi' ? 'नीचे लटकते तार व सुरक्षा जोखिम (Loose Wires)' : 'Dangerous Sagging High Tension Wires'}</option>
                <option value="delay_connection">{lang === 'hi' ? 'नया कनेक्शन / लोड में अनावश्यक देरी (Connection Delay)' : 'Undue Delay in New Connection / Load'}</option>
              </select>
            </div>

            {/* Discom & District */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'बिजली निगम (Discom)' : 'Discom'}
                </label>
                <select
                  value={discom}
                  onChange={(e) => setDiscom(e.target.value as DiscomType)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold bg-slate-50 focus:bg-white"
                >
                  <option value="DHBVN">DHBVN (South)</option>
                  <option value="UHBVN">UHBVN (North)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'जिला (District)' : 'District'}
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-bold bg-slate-50 focus:bg-white"
                >
                  {HARYANA_DISTRICTS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {lang === 'hi' ? d.nameHi : d.nameEn}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sub-division */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'उप-मंडल (Sub-Division / SDO Office)' : 'Sub-Division (SDO Office)'}
              </label>
              <input
                type="text"
                value={subdivision}
                onChange={(e) => setSubdivision(e.target.value)}
                placeholder={lang === 'hi' ? 'उदा. DLF City / Badshahpur / City Sub-Division' : 'e.g. DLF City / South City / Model Town'}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Consumer Name & Account No */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'उपभोक्ता का नाम' : 'Consumer Name'}
                </label>
                <input
                  type="text"
                  value={consumerName}
                  onChange={(e) => setConsumerName(e.target.value)}
                  placeholder={lang === 'hi' ? 'बिल अनुसार नाम' : 'As on Bill'}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? '10-अंकों का खाता संख्या' : '10-Digit Account No'}
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="e.g. 1029384756"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Mobile & Disputed Amount */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'मोबाइल नंबर' : 'Mobile Number'}
                </label>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="e.g. 9812345678"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-mono focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'hi' ? 'विवादित राशि (₹, यदि हो)' : 'Disputed Amount (₹)'}
                </label>
                <input
                  type="number"
                  value={disputedAmount}
                  onChange={(e) => setDisputedAmount(e.target.value)}
                  placeholder="e.g. 18500"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'परिसर का पता (Premises Address)' : 'Premises Address'}
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={lang === 'hi' ? 'मकान नंबर, वार्ड/सेक्टर, गांव/शहर' : 'House No, Sector/Ward, Village/Town'}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Additional details */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {lang === 'hi' ? 'अतिरिक्त साक्ष्य / विवरण (वैकल्पिक)' : 'Additional Notes / Evidence (Optional)'}
              </label>
              <textarea
                rows={2}
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                placeholder={lang === 'hi' ? 'मीटर नंबर, पिछली सामान्य यूनिटें या जेई/लाइनमैन से हुई बातचीत का विवरण...' : 'Meter serial number, previous average units, or dates lineman was called...'}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-950 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <p>
                {lang === 'hi'
                  ? 'यह प्रारूप HERC आपूर्ति संहिता नियम 61 एवं उपभोक्ता संरक्षण विनियमों के तहत कानूनी रूप से तैयार किया गया है।'
                  : 'This notice is formulated pursuant to HERC Supply Code Reg. 61 & Electricity Act 2003.'}
              </p>
            </div>
          </div>

          {/* Right Live Letter View: 7 cols */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'hi' ? 'तैयार कानूनी आवेदन पत्र' : 'Official Legal Notice Preview'}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? (lang === 'hi' ? 'कॉपी हुआ!' : 'Copied!') : (lang === 'hi' ? 'कॉपी करें' : 'Copy Text')}</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'प्रिंट / PDF' : 'Print / PDF'}</span>
                  </button>
                </div>
              </div>

              <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-slate-200 leading-relaxed max-h-[560px] overflow-y-auto pr-2">
                {generateLetterText()}
              </pre>
            </div>

            {/* Submission Checklist */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs text-xs space-y-3">
              <div className="flex items-center gap-2 font-extrabold text-slate-900 text-sm">
                <Building className="w-4 h-4 text-emerald-700" />
                <span>{lang === 'hi' ? 'एसडीओ कार्यालय में जमा करने की 4-चरणीय विधिक प्रक्रिया:' : '4-Step Submission Protocol for SDO Office:'}</span>
              </div>
              <ol className="list-decimal pl-5 space-y-1.5 text-slate-600 leading-relaxed">
                <li>
                  <strong className="text-slate-800">{lang === 'hi' ? 'दो प्रतियों में प्रिंट करें:' : 'Print 2 copies:'}</strong>{' '}
                  {lang === 'hi' ? 'उपरोक्त आवेदन पत्र को प्रिंट करके दोनों पर अपने हस्ताक्षर करें।' : 'Print 2 copies and sign both at the bottom.'}
                </li>
                <li>
                  <strong className="text-slate-800">{lang === 'hi' ? 'मीटर व बिल की फोटो संलग्न करें:' : 'Attach bill & meter photo:'}</strong>{' '}
                  {lang === 'hi' ? 'नवीनतम बिल की फोटोकॉपी तथा मोबाइल से खींची गई मीटर स्क्रीन की स्पष्ट फोटो साथ लगाएं।' : 'Attach photocopy of contested bill and mobile photo of meter display.'}
                </li>
                <li>
                  <strong className="text-slate-800">{lang === 'hi' ? 'डायरी नंबर (Receiving Stamp) अनिवार्य रूप से लें:' : 'Mandatory Diary Stamp:'}</strong>{' '}
                  {lang === 'hi' ? 'SDO कार्यालय के क्लर्क से अपनी प्रति पर तारीख युक्त आधिकारिक रिसीविंग मुहर व डायरी नंबर अवश्य लें।' : 'Always insist on getting a stamped Inward Diary Number on your receiving copy.'}
                </li>
                <li>
                  <strong className="text-slate-800">{lang === 'hi' ? '7 दिन में समाधान न होने पर CGRF एस्केलेट करें:' : 'CGRF Escalation if ignored:'}</strong>{' '}
                  {lang === 'hi' ? 'यदि SDO 7 दिनों में कार्रवाई न करे, तो 1912 पर कॉल करके इस डायरी नंबर के साथ सर्कल CGRF में अपील दर्ज कराएं।' : 'If unresolved within 7 days, quote Diary Number on 1912 to escalate directly to Circle CGRF.'}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
