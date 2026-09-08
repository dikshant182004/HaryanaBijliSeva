import React, { useState } from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  RefreshCw, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  Mail, 
  Copy, 
  Check,
  Building
} from 'lucide-react';
import { Language, DiscomType } from '../types';
import { OFFICIAL_LINKS, VERIFIED_HELPLINES } from '../data/haryanaData';

interface Props {
  lang: Language;
}

export const PaymentHelpResolver: React.FC<Props> = ({ lang }) => {
  const [selectedDiscom, setSelectedDiscom] = useState<DiscomType>('DHBVN');
  const [accountNumber, setAccountNumber] = useState('');
  const [txnRefNumber, setTxnRefNumber] = useState('');
  const [paidAmount, setPaidAmount] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const uhbvnCheckUrl = 'https://epayment.uhbvn.org.in/';
  const dhbvnCheckUrl = 'https://epayment.dhbvn.org.in/';
  const officialGrievanceEmail = selectedDiscom === 'UHBVN' 
    ? VERIFIED_HELPLINES.uhbvnGrievanceEmail 
    : VERIFIED_HELPLINES.dhbvnGrievanceEmail;
  const officialTollFree = selectedDiscom === 'UHBVN'
    ? VERIFIED_HELPLINES.uhbvnTollFree
    : VERIFIED_HELPLINES.dhbvnTollFree;
  const portalComplaintUrl = selectedDiscom === 'UHBVN'
    ? OFFICIAL_LINKS.uhbvn.complaintPortal
    : OFFICIAL_LINKS.dhbvn.complaintPortal;

  const generateComplaintEmail = () => {
    const isHi = lang === 'hi';
    const discomName = selectedDiscom === 'UHBVN' ? 'UHBVN (North Haryana)' : 'DHBVN (South Haryana)';

    if (isHi) {
      return `प्रेषित: ${officialGrievanceEmail} (एवं संबंधित उप-मंडल अधिकारी / SDO)
विषय: बिजली बिल भुगतान राशि बैंक से कटने किंतु रसीद जनरेट न होने / पेंडिंग दिखने बाबत (खाता संख्या: ${accountNumber || '[खाता संख्या]'})

सेवा में,
बिलिंग समाधान सेल / 1912 ग्रीवेंस सेल,
${discomName}।

महोदय,
प्रार्थी ने ${selectedDiscom} आधिकारिक पोर्टल/पेमेंट गेटवे के माध्यम से अपने बिजली बिल का ऑनलाइन भुगतान किया था। बैंक खाते से राशि कट चुकी है, किंतु पोर्टल पर स्थिति 'Pending' / 'Unpaid' आ रही है और रसीद नहीं मिली।

भुगतान विवरण:
1. उपभोक्ता खाता संख्या: ${accountNumber || '[10-अंकों का खाता नंबर]'}
2. कटी हुई राशि: ₹${paidAmount || '[राशि]'}
3. बैंक/UPI ट्रांजेक्शन संदर्भ संख्या (Txn ID / UTR): ${txnRefNumber || '[बैंक संदर्भ संख्या]'}
4. भुगतान माध्यम: UPI / Netbanking / Debit Card
5. भुगतान की तिथि: ${new Date().toLocaleDateString('hi-IN')}

RBI एवं विधिक नियमों के अनुसार यदि 48 घंटे में रसीद जारी न हो सके, तो कृपया यह राशि मेरे आगामी बिजली बिल में क्रेडिट समायोजन (Credit Adjustment) के रूप में जोड़ें अथवा मूल बैंक खाते में रीफंड करें।

संलग्नक: बैंक पासबुक/UPI भुगतान की स्क्रीनशॉट प्रतिलिपि

भवदीय,
उपभोक्ता का नाम: _________________
मोबाइल नंबर: ______________________`;
    }

    return `To: ${officialGrievanceEmail} (and concerned Sub-Divisional Officer / SDO)
Subject: Urgent - Payment Debited from Bank but Receipt Not Generated / Transaction Pending (Account No: ${accountNumber || '[Account Number]'})

To,
Billing & Payment Reconciliation Cell / 1912 Grievance Desk,
${discomName}.

Respected Sir/Madam,

I made an online payment for my electricity bill via the official ${selectedDiscom} payment gateway. The amount of ₹${paidAmount || '[Amount]'} has been successfully debited from my bank account, however the official portal continues to show the bill as UNPAID / Transaction Failed, and no official e-receipt has been generated.

Transaction Details:
1. 10-Digit Consumer Account Number: ${accountNumber || '[Account Number]'}
2. Amount Debited: ₹${paidAmount || '[Amount in INR]'}
3. Bank UTR / Gateway Reference (Txn ID): ${txnRefNumber || '[Bank Reference / UTR Number]'}
4. Payment Date: ${new Date().toLocaleDateString('en-IN')}
5. Payment Mode: UPI / Netbanking / Card

As per RBI T+2 settlement guidelines and HERC consumer standards, I request you to either:
(a) Manually reconcile the payment gateway response and issue the official receipt for my account, OR
(b) Adjust this verified amount as advance credit balance in my upcoming billing statement, OR
(c) Initiate an immediate refund to the originating source account.

Attached: Bank transaction confirmation screenshot showing debit and UTR number.

Yours sincerely,
Name: __________________________
Contact No: ____________________
Account No: ${accountNumber || '[Account Number]'}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateComplaintEmail());
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-sky-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-sky-900/40 shadow-lg relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-sky-600/30 border border-sky-500/50 flex items-center justify-center text-sky-400 shrink-0">
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-bold text-xs uppercase tracking-wider inline-block mb-2">
              {lang === 'hi' ? 'भुगतान व रिफंड समाधान' : 'Payment Reconciliation & Double Debit'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'hi' ? 'बैंक से पैसे कट गए पर बिजली बिल में नहीं जुड़े? समाधान गाइड' : 'Money Debited from Bank but Bill Still Shows Unpaid? Instant Resolution'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {lang === 'hi'
                ? 'हरियाणा बिजली पोर्टल (UHBVN/DHBVN) पर पेमेंट फेल होने या दो बार पैसे कट जाने पर घबराएं नहीं। सरकारी 48-घंटे के रिकॉन्सिलिएशन नियमों, पेमेंट स्टेटस चेक करने के सीधे लिंक और ईमेल ड्राफ्ट का उपयोग करें।'
                : 'Direct gateway status tracking links for UHBVN & DHBVN, official RBI 48-hour settlement regulations, double debit refund protocols, and ready email templates to ensure you never lose a rupee.'}
            </p>
          </div>
        </div>
      </div>

      {/* 3 Core Rules Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {lang === 'hi' ? '1. 24 से 48 घंटे प्रतीक्षा करें (ऑटो-सेटलमेंट)' : '1. Wait 24 to 48 Hours (Auto Settlement)'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'जब बैंक से पैसे कट जाते हैं किंतु गेटवे रिस्पांस अधूरा रहता है, तो दोनों निगमों का सर्वर प्रत्येक रात्रि 12 बजे बैंक के साथ ऑटो-रिकॉन्सिलिएशन करता है। 90% मामलों में अगली सुबह रसीद स्वतः अपडेट हो जाती है।'
                : 'Payment gateways (BillDesk/PayU) run daily reconciliation cycles. In 90% of cases, the transaction status automatically flips to "Success" and the receipt is posted within 24-48 hours.'}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-800">
            {lang === 'hi' ? 'तुरंत दोबारा भुगतान न करें' : 'Do not make duplicate payment immediately'}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-black mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {lang === 'hi' ? '2. यदि दो बार पैसे कट जाएं (Duplicate Debit)' : '2. If Paid Twice (Duplicate Payment)'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'यदि आपने डरकर दोबारा बिल भर दिया और दोनों बार पैसे कट गए, तो एक भी रुपया व्यर्थ नहीं जाता। अतिरिक्त राशि आपके अगले माह के बिल में "Advance Credit" (अग्रिम राशि) के रूप में खुद-ब-खुद एडजस्ट हो जाती है।'
                : 'If charged twice, the duplicate transaction is never lost. UHBVN & DHBVN credit it as "Advance Payment" on your consumer ledger, reducing your next bimonthly electricity bill by that exact amount.'}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-sky-800">
            {lang === 'hi' ? 'अगले बिल में 100% समायोजन' : '100% credited in next electricity bill'}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-black mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">
              {lang === 'hi' ? '3. बैंक में ऑटो-रिफंड (5 से 7 दिन)' : '3. Auto-Refund to Bank (5-7 Days)'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'यदि गेटवे ने निगम को पैसे ट्रांसफर नहीं किए (ड्रॉप हो गया), तो आरबीआई के टी+5 नियमों के तहत वह राशि 5 से 7 कार्यदिवसों के भीतर उसी बैंक खाते/यूपीआई में स्वतः वापस आ जाती है।'
                : 'If the transaction failed completely before reaching the discom server, RBI mandate requires the bank/gateway to reverse the full amount to your source account within 5 to 7 business days.'}
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-purple-800">
            {lang === 'hi' ? 'आरबीआई मैंडेट द्वारा सुरक्षित' : 'Protected under RBI reversal rules'}
          </div>
        </div>
      </div>

      {/* Direct Status Check Portals */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
          {lang === 'hi' ? 'आधिकारिक गेटवे पर अपना ट्रांजेक्शन स्टेटस सीधे जांचें:' : 'Check Your Transaction Status Directly on Official Gateways:'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mb-6">
          {lang === 'hi'
            ? 'निगम के आधिकारिक पोर्टल पर जाएं और "View Payment Receipt" या "Check Transaction Status" में खाता नंबर डालकर देखें कि क्या रसीद बन चुकी है:'
            : 'Access genuine discom payment verification pages to search by account number or merchant reference:'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border-2 border-emerald-200 bg-emerald-50/40 flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-black bg-emerald-700 text-white uppercase tracking-wider">
                UHBVN (North Haryana)
              </span>
              <h4 className="font-bold text-slate-900 text-sm mt-2 mb-1">
                {lang === 'hi' ? 'यूएचबीवीएन ऑनलाइन पेमेंट स्टेटस व रसीद' : 'UHBVN Online Payment Status & Receipt'}
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                {lang === 'hi'
                  ? 'अंबाला, पंचकूला, करनाल, कुरुक्षेत्र, पानीपत, रोहतक, सोनीपत, यमुनानगर, कैथल, झज्जर जिलों हेतु।'
                  : 'For Panchkula, Ambala, Karnal, Panipat, Rohtak, Sonipat, Kurukshetra, Yamunanagar, Jhajjar, Kaithal.'}
              </p>
            </div>
            <a
              href="https://epayment.uhbvn.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs"
            >
              <span>{lang === 'hi' ? 'UHBVN पेमेंट स्टेटस पोर्टल खोलें' : 'Open UHBVN Payment Status Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-5 rounded-xl border-2 border-sky-200 bg-sky-50/40 flex flex-col justify-between">
            <div>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-black bg-sky-700 text-white uppercase tracking-wider">
                DHBVN (South Haryana)
              </span>
              <h4 className="font-bold text-slate-900 text-sm mt-2 mb-1">
                {lang === 'hi' ? 'डीएचबीवीएन ऑनलाइन पेमेंट स्टेटस व रसीद' : 'DHBVN Online Payment Status & Receipt'}
              </h4>
              <p className="text-xs text-slate-600 mb-4">
                {lang === 'hi'
                  ? 'गुरुग्राम, फरीदाबाद, हिसार, रेवाड़ी, भिवानी, सिरसा, पलवल, नारनौल, चरखी दादरी, फतेहाबाद, नूंह हेतु।'
                  : 'For Gurugram, Faridabad, Hisar, Rewari, Bhiwani, Sirsa, Palwal, Narnaul, Fatehabad, Charkhi Dadri, Nuh.'}
              </p>
            </div>
            <a
              href="https://epayment.dhbvn.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold transition-all shadow-xs"
            >
              <span>{lang === 'hi' ? 'DHBVN पेमेंट स्टेटस पोर्टल खोलें' : 'Open DHBVN Payment Status Portal'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Email Generator for Helpdesk */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-emerald-700 shrink-0" />
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            {lang === 'hi' ? '48 घंटे बाद भी रसीद न मिले? डिस्कॉम आईटी सेल को ईमेल भेजें:' : 'Still Unresolved After 48 Hours? Send Official Escalation Email:'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              {lang === 'hi' ? 'बिजली निगम (Discom)' : 'Discom'}
            </label>
            <select
              value={selectedDiscom}
              onChange={(e) => setSelectedDiscom(e.target.value as DiscomType)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg font-bold bg-white focus:ring-2 focus:ring-emerald-500"
            >
              <option value="DHBVN">DHBVN (South Haryana)</option>
              <option value="UHBVN">UHBVN (North Haryana)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              {lang === 'hi' ? '10-अंकों का खाता नंबर' : '10-Digit Account Number'}
            </label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="e.g. 1029384756"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg font-mono focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              {lang === 'hi' ? 'कटी हुई राशि (₹)' : 'Amount Debited (₹)'}
            </label>
            <input
              type="number"
              value={paidAmount}
              onChange={(e) => setPaidAmount(e.target.value)}
              placeholder="e.g. 2500"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            {lang === 'hi' ? 'बैंक UTR / ट्रांजेक्शन आईडी (Txn Ref No / UPI UTR)' : 'Bank UTR / Transaction Reference (TxnRefNo)'}
          </label>
          <input
            type="text"
            value={txnRefNumber}
            onChange={(e) => setTxnRefNumber(e.target.value)}
            placeholder="e.g. 423987162534 (found in your bank SMS / GPay / Paytm debit entry)"
            className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs font-mono focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Email Preview & Copy Box */}
        <div className="rounded-xl border border-slate-300 bg-slate-900 text-slate-100 p-5 font-mono text-xs">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
            <span className="font-sans text-xs font-bold text-slate-400">
              {lang === 'hi' ? 'ईमेल प्रारूप (कॉपी करें)' : 'Formatted Email Draft'}
            </span>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-bold inline-flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? (lang === 'hi' ? 'कॉपी हो गया!' : 'Copied!') : (lang === 'hi' ? 'ईमेल कॉपी करें' : 'Copy Email Text')}</span>
            </button>
          </div>
          <pre className="whitespace-pre-wrap font-sans text-xs text-slate-200 leading-relaxed">
            {generateComplaintEmail()}
          </pre>
        </div>

        {/* Official 1912 Grievance Escalation & Docket Instructions */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="font-extrabold text-amber-900 block mb-0.5">
              {lang === 'hi' ? 'जरूरी सलाह: 1912 शिकायत डॉकेट नंबर अवश्य लें' : 'Critical Advice: Always Obtain a 1912 Docket Number'}
            </span>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'hi'
                ? `ईमेल भेजने के साथ-साथ टोल-फ्री 1912 या ${officialTollFree} पर कॉल करके या ऑनलाइन पोर्टल पर शिकायत दर्ज कराकर डॉकेट नंबर लें। यदि 48 घंटे में समाधान न हो तो यह डॉकेट नंबर CGRF में काम आता है।`
                : `In addition to emailing, register a formal complaint on 1912 or ${officialTollFree} to secure a trackable docket number for CGRF escalation.`}
            </p>
          </div>
          <a
            href={portalComplaintUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-xs transition-colors shadow-xs"
          >
            <span>{lang === 'hi' ? 'ऑनलाइन 1912 शिकायत दर्ज करें' : 'Register 1912 Online'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Verified Toll-Free Helpline Footer Bar */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-bold text-slate-700">
              {lang === 'hi' ? 'सत्यापित टोल-फ्री हेल्पलाइन:' : 'Verified Toll-Free Helplines:'}
            </span>
            <a href="tel:1912" className="font-mono font-bold text-rose-600 hover:underline">
              1912 (24x7)
            </a>
            <span>•</span>
            <a href="tel:18001804334" className="font-mono font-bold text-sky-700 hover:underline">
              1800-180-4334 (DHBVN)
            </a>
            <span>•</span>
            <a href="tel:18001801550" className="font-mono font-bold text-emerald-700 hover:underline">
              1800-180-1550 (UHBVN)
            </a>
          </div>
          <div className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
            {lang === 'hi' ? VERIFIED_HELPLINES.lastVerifiedBadgeHi : VERIFIED_HELPLINES.lastVerifiedBadgeEn}
          </div>
        </div>
      </div>
    </div>
  );
};
