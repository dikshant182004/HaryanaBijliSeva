import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GrievanceRedressal } from '../components/GrievanceRedressal';
import { CGRF_TIERS, HERC_SOP_STANDARDS, OFFICIAL_LINKS } from '../data/haryanaData';
import { PhoneCall, ShieldAlert, Scale, ExternalLink, Copy, Check, Clock } from 'lucide-react';

interface Props {
  lang: Language;
}

export const GrievancePage: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [copiedDraft, setCopiedDraft] = useState(false);

  const pageTitle = lang === 'hi'
    ? 'हरियाणा 1912 बिजली शिकायत, व्हाट्सएप चैटबॉट व 4-स्तरीय CGRF फोरम निवारण'
    : 'Haryana 1912 Electricity Helpline, WhatsApp Bots & 4-Tier CGRF Grievance Redressal';

  const pageDescription = lang === 'hi'
    ? 'हरियाणा में बिजली कटौती की 1912 हेल्पलाइन, व्हाट्सएप सेवा, और समाधान न होने पर सर्कल CGRF व विद्युत लोकपाल (Ombudsman) में अपील की प्रक्रिया। जानिए HERC गारंटीड मुआवजा मानक।'
    : 'Complete citizen escalation guide for Haryana power outages and billing disputes. 24x7 1912 helpline, WhatsApp chatbots, 4-tier CGRF forum appeals, and HERC statutory compensation standards.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home',
          item: 'https://haryanabijliseva.pages.dev/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: lang === 'hi' ? '1912 शिकायत व CGRF' : '1912 Grievance & CGRF',
          item: 'https://haryanabijliseva.pages.dev/grievance-1912'
        }
      ]
    }
  };

  const keywords = [
    'हरियाणा 1912 बिजली शिकायत',
    'uhbvn complaint 1912',
    'dhbvn toll free helpline',
    'cgrf haryana complaint letter format',
    'electricity ombudsman haryana appeal',
    'bijli vibhag shikayat haryana'
  ];

  const sampleComplaintDraft = `To,
The Chairman / Member,
Consumer Grievances Redressal Forum (CGRF),
Circle Office: [Enter Your Circle e.g. Gurugram / Panchkula / Karnal],
Discom: [UHBVN / DHBVN]

Subject: Formal Grievance regarding [Unresolved Outage / Incorrect Billing / Burnt Meter Delay] for Consumer Account No: [Your 10-Digit Account Number]

Sir/Madam,
I am a domestic consumer bearing Account No: [Your 10-digit number], residing at [Your Address, Haryana, PIN].
1. I lodged an initial complaint via 1912 Helpline on [Date] under Complaint Token No: [Token Number].
2. The local Sub-Divisional Officer (SDO) / Junior Engineer (JE) was also intimated via written representation on [Date], but no resolution was provided within the statutory timeframe.
3. As per HERC (Standards of Performance) Regulations, the issue was required to be rectified within [Mention standard e.g. 24 hours / 7 days].

I humbly request this Hon'ble Forum to:
a) Direct the Discom to immediately resolve the grievance.
b) Award statutory delay compensation as per HERC SOP regulations.

Yours faithfully,
Name: [Your Name]
Mobile: [Your Mobile Number]
Parivar Pehchan Patra (PPP ID): [Your Family ID]
Enclosures: Copy of 1912 SMS, Copy of Paid Bill Receipt, Previous representations.`;

  const copyDraftToClipboard = () => {
    navigator.clipboard.writeText(sampleComplaintDraft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        path="/grievance-1912"
        schema={schema}
        keywords={keywords}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: lang === 'hi' ? '1912 हेल्पलाइन व CGRF शिकायत निवारण' : '1912 & Grievance Redressal' }
          ]}
        />

        {/* Core Grievance Component with 1912, WhatsApp & SMS */}
        <GrievanceRedressal lang={lang} />

        {/* 4-Tier Statutory CGRF Forum Escalation Deep-Dive */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold uppercase tracking-wider">
              {lang === 'hi' ? 'विधिक अधिकार: HERC सांविधिक फोरम' : 'Statutory Escalation: 4-Tier CGRF Mechanism'}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
              {lang === 'hi' 
                ? 'यदि जेई या एसडीओ सुनवाई न करें: 4-स्तरीय अपील व्यवस्था'
                : 'When Local Engineers Fail to Act: 4-Tier Statutory Hierarchy'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? 'विद्युत अधिनियम 2003 की धारा 42(5) के अंतर्गत प्रत्येक उपभोक्ता को अर्ध-न्यायिक फोरम में जाने का विधिक अधिकार है:'
                : 'Under Section 42(5) and 42(6) of the Electricity Act 2003, consumers have enforceable quasi-judicial recourse:'}
            </p>
          </div>

          <div className="space-y-4">
            {CGRF_TIERS.map((tier) => (
              <div key={tier.tier} className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-amber-600 text-white font-black text-xs rounded-md uppercase tracking-wider w-fit">
                    Tier {tier.tier}
                  </span>
                  <span className="text-xs font-bold text-slate-500 inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    {lang === 'hi' ? tier.timelineHi : tier.timelineEn}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {lang === 'hi' ? tier.nameHi : tier.nameEn}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'hi' ? tier.jurisdictionHi : tier.jurisdictionEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* HERC SOP Compensation Matrix */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl font-extrabold text-slate-900">
              {lang === 'hi' ? 'HERC गारंटीड सेवा स्तर एवं उपभोक्ता मुआवजा मानक' : 'HERC Statutory Standards of Performance & Compensation'}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
            {lang === 'hi'
              ? 'हरियाणा विद्युत विनियामक आयोग के नियमों के तहत यदि निर्धारित समय में काम न हो तो बिजली निगम उपभोक्ता को हर्जाना देने हेतु विधिक रूप से बाध्य है:'
              : 'Under HERC Standards of Performance Regulations, consumers are legally entitled to delay compensation payable by discoms:'}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800">
                  <th className="p-3 font-bold">{lang === 'hi' ? 'सेवा का प्रकार' : 'Service Type'}</th>
                  <th className="p-3 font-bold">{lang === 'hi' ? 'शहरी समय सीमा' : 'Urban Limit'}</th>
                  <th className="p-3 font-bold">{lang === 'hi' ? 'ग्रामीण समय सीमा' : 'Rural Limit'}</th>
                  <th className="p-3 font-bold text-rose-700">{lang === 'hi' ? 'विलंब मुआवजा (Penalty)' : 'Statutory Compensation'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {HERC_SOP_STANDARDS.map((sop, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80">
                    <td className="p-3 font-semibold text-slate-900">
                      {lang === 'hi' ? sop.serviceHi : sop.serviceEn}
                    </td>
                    <td className="p-3">{sop.urbanLimitEn}</td>
                    <td className="p-3">{sop.ruralLimitEn}</td>
                    <td className="p-3 font-bold text-rose-600">{sop.compensationEn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Free CGRF Application Draft Template */}
        <div className="mt-8 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg font-bold text-white">
                {lang === 'hi' ? 'फोरम (CGRF) शिकायत पत्र प्रारूप (Draft Template)' : 'Free CGRF Formal Complaint Letter Draft'}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {lang === 'hi'
                  ? 'सर्कल CGRF या विद्युत लोकपाल के समक्ष प्रस्तुत करने हेतु विहित प्रारूप। कॉपी करके विवरण भरें:'
                  : 'Ready-to-use representation format to submit before the Superintending Engineer / Circle CGRF:'}
              </p>
            </div>
            <button
              onClick={copyDraftToClipboard}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all inline-flex items-center gap-2 self-start sm:self-auto cursor-pointer"
            >
              {copiedDraft ? <Check className="w-4 h-4 text-emerald-200" /> : <Copy className="w-4 h-4" />}
              <span>{copiedDraft ? (lang === 'hi' ? 'कॉपी हो गया!' : 'Copied!') : (lang === 'hi' ? 'प्रारूप कॉपी करें' : 'Copy Draft')}</span>
            </button>
          </div>

          <pre className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-300 whitespace-pre-wrap overflow-x-auto leading-relaxed">
            {sampleComplaintDraft}
          </pre>
        </div>
      </div>
    </div>
  );
};
