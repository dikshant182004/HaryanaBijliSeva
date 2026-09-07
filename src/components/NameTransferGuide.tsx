import React, { useState } from 'react';
import {
  FileSignature,
  CheckCircle2,
  TrendingDown,
  FileText,
  Copy,
  Check,
  X,
  ExternalLink,
  ChevronRight,
  BadgeAlert
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OFFICIAL_LINKS } from '../data/haryanaData';

interface Props {
  lang: Language;
}

export const NameTransferGuide: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [showBondModal, setShowBondModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const indemnityText = `INDEMNITY BOND (FORM A-1)
(To be executed on Non-Judicial Stamp Paper of ₹50 or ₹100 in Haryana)

To,
The Sub-Divisional Officer (Operations),
UHBVN / DHBVN, Haryana.

Sub: Indemnity Bond for Transfer of Electricity Connection (Change of Name)
Account / Meter No: ______________________
Address of Premises: __________________________________________________
Sanctioned Load: ________ kW

I / We, ________________________ S/o, W/o ________________________,
Resident of ________________________________________________________,
Parivar Pehchan Patra (Family ID) No: ________________________,
do hereby solemnly affirm and state as under:

1. That I am the bona-fide lawful owner / legal occupant of the premises situated at the address mentioned above, purchased via Registered Sale Deed / Allotment Letter / Inherited as legal heir.
2. That electricity connection bearing Account No. _______________ was originally sanctioned in the name of Sh./Smt. ________________________.
3. That I have applied for the transfer of the said electricity connection in my name (Change of Name).
4. That I hereby agree and undertake to indemnify and keep indemnified the Nigam (UHBVN / DHBVN) against all claims, demands, liabilities, and legal proceedings arising out of the transfer of the said connection.
5. That in the event of any past or undisclosed electricity dues or arrears relating to the said premises or meter coming to light at any stage, I undertake to pay the same upon receipt of demand from the Nigam.

Place: ____________________
Date:  ____________________

DEPONENT / APPLICANT SIGNATURE: ____________________
Name: ____________________
Mobile No: ____________________

Witness 1:
Signature: __________________ Name & Address: __________________________

Witness 2:
Signature: __________________ Name & Address: __________________________`;

  const handleCopyBond = () => {
    navigator.clipboard.writeText(indemnityText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="name-transfer" className="py-12 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Sequence 3: Name Transfer (Money Saver Guide)
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.nameTransfer.title}
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.nameTransfer.subtitle}
          </p>
        </div>

        {/* Money Saver Callout Banner */}
        <div className="mb-8 p-5 sm:p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-emerald-600 text-white rounded-xl shrink-0 mt-0.5">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                {t.nameTransfer.whyImportantTitle}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed max-w-3xl">
                {t.nameTransfer.whyImportantDesc}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowBondModal(true)}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all shadow-xs active:scale-98"
          >
            <FileText className="w-4 h-4" />
            <span>{t.nameTransfer.viewFormatBtn}</span>
          </button>
        </div>

        {/* Comparison Table: Name Transfer vs New Connection */}
        <div className="mb-12 overflow-hidden border border-slate-200 rounded-2xl shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">{t.nameTransfer.comparison.metric}</th>
                  <th className="py-3.5 px-4 sm:px-6 text-emerald-800 bg-emerald-50/50">
                    {t.nameTransfer.comparison.transfer}
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 text-rose-800 bg-rose-50/30">
                    {t.nameTransfer.comparison.fresh}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium text-slate-700">
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                    {t.nameTransfer.comparison.cost}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-800 font-bold bg-emerald-50/30">
                    ✓ {t.nameTransfer.comparison.costTransfer}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-rose-700 bg-rose-50/20">
                    ✗ {t.nameTransfer.comparison.costFresh}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/70">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                    {t.nameTransfer.comparison.time}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-800 bg-emerald-50/30 font-semibold">
                    ✓ {t.nameTransfer.comparison.timeTransfer}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600 bg-rose-50/20">
                    {t.nameTransfer.comparison.timeFresh}
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/70">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900">
                    {t.nameTransfer.comparison.meter}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-emerald-800 bg-emerald-50/30 font-semibold">
                    ✓ {t.nameTransfer.comparison.meterTransfer}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-600 bg-rose-50/20">
                    {t.nameTransfer.comparison.meterFresh}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Step-by-Step Procedure & Documents Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Documents checklist */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mb-4 flex items-center gap-2">
              <FileSignature className="w-5 h-5 text-emerald-600" />
              {t.nameTransfer.requiredDocsTitle}
            </h3>

            <div className="space-y-3">
              {t.nameTransfer.transferDocs.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
              <BadgeAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>{lang === 'hi' ? 'महत्वपूर्ण टिप:' : 'Vital Tip:'}</strong>{' '}
                {lang === 'hi'
                  ? 'यदि पुराना मालिक उपलब्ध न हो अथवा दिवंगत हो चुका हो, तो वारिसान प्रमाण-पत्र (Legal Heir Certificate) व पारिवारिक एनओसी मान्य होती है।'
                  : 'If the previous owner is deceased or untraceable, legal heir succession certificate with family no-objection affidavit is legally accepted under HERC regulations.'}
              </p>
            </div>
          </div>

          {/* 5-Step Process Timeline */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mb-4">
              {lang === 'hi' ? 'नाम ट्रांसफर की 5-चरणीय प्रक्रिया' : '5-Step Process for Name Transfer'}
            </h3>

            <div className="space-y-3.5">
              {[
                {
                  step: '1',
                  title: lang === 'hi' ? 'शून्य बकाया (Zero Arrears) रसीद प्राप्त करें' : 'Clear All Past Dues',
                  desc: lang === 'hi' ? 'पुराने उपभोक्ता के नाम पर कोई पिछला बिजली बिल बकाया न हो। अंतिम रसीद डाउनलोड करें।' : 'Verify no electricity bill arrears are pending on the meter. Save latest payment receipt.'
                },
                {
                  step: '2',
                  title: lang === 'hi' ? 'एनओसी अथवा शपथ-पत्र तैयार करें' : 'Get NOC or Legal Heir Affidavit',
                  desc: lang === 'hi' ? 'विक्रेता से सादे कागज या स्टांप पर अनापत्ति प्रमाण-पत्र (NOC) लें।' : 'Obtain signed NOC from seller/previous owner, or heir succession affidavit if deceased.'
                },
                {
                  step: '3',
                  title: lang === 'hi' ? 'इंडेम्निटी बांड (Form A-1) नोटरी कराएं' : 'Execute Form A-1 Indemnity Bond',
                  desc: lang === 'hi' ? '₹50/₹100 के हरियाणा नॉन-ज्यूडिशियल स्टांप पेपर पर शपथ-पत्र टाइप कराकर नोटरी कराएं।' : 'Print Form A-1 format on ₹50/100 stamp paper and get attested by Notary Public.'
                },
                {
                  step: '4',
                  title: lang === 'hi' ? 'पोर्टल पर आवेदन करें या SDO कार्यालय जाएं' : 'Submit Application Online or at SDO Office',
                  desc: lang === 'hi' ? 'UHBVN/DHBVN पोर्टल पर "Change of Name" विकल्प चुनें और दस्तावेज़ अपलोड करें।' : 'Login to discom portal -> Services -> Change of Name. Upload scanned documents and pay ₹50 fee.'
                },
                {
                  step: '5',
                  title: lang === 'hi' ? 'जेई निरीक्षण एवं 15 दिन में नया बिल' : 'JE Verification & 15-Day Resolution',
                  desc: lang === 'hi' ? 'संबंधित जेई मीटर की मौके पर जांच करेगा। अगले बिलिंग चक्र में नया नाम अंकित होकर आएगा।' : 'Local Junior Engineer verifies premises meter reading. Next monthly bill reflects your name.'
                }
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900">{s.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Link */}
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={OFFICIAL_LINKS.dhbvn.consumerPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold rounded-xl text-center inline-flex items-center justify-center gap-1"
              >
                <span>DHBVN Change of Name</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={OFFICIAL_LINKS.uhbvn.consumerPortal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl text-center inline-flex items-center justify-center gap-1"
              >
                <span>UHBVN Change of Name</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal: Indemnity Bond Format Preview */}
        {showBondModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-base text-slate-900">
                    {lang === 'hi' ? 'इंडेम्निटी बांड (Form A-1) प्रारूप' : 'Form A-1 Indemnity Bond Format'}
                  </h4>
                </div>
                <button
                  onClick={() => setShowBondModal(false)}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto font-mono text-xs text-slate-800 whitespace-pre-wrap leading-relaxed bg-slate-50 border-y border-slate-100">
                {indemnityText}
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white">
                <span className="text-xs text-slate-500">
                  {lang === 'hi' ? 'कॉपी करके वर्ड/नोटपैड में पेस्ट करें' : 'Copy and paste into your word processor'}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyBond}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? (lang === 'hi' ? 'कॉपी हो गया!' : 'Copied!') : (lang === 'hi' ? 'प्रारूप कॉपी करें' : 'Copy Text')}</span>
                  </button>
                  <button
                    onClick={() => setShowBondModal(false)}
                    className="px-3 py-2 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-100"
                  >
                    {lang === 'hi' ? 'बंद करें' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
