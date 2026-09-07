export const TRANSLATIONS = {
  en: {
    siteTitle: 'Haryana Bijli Seva',
    siteTagline: 'Independent Citizen Guide & Utility Hub for UHBVN & DHBVN Consumers',
    unofficialBadge: 'Unofficial Citizen Guide • Verified HERC Norms',
    disclaimerBanner: 'NOTICE: This is an independent citizen utility guide and is NOT affiliated with UHBVN, DHBVN, or the Government of Haryana. All bill payments, new connection submissions, and official applications must be done solely on the official portals (uhbvn.org.in or dhbvn.org.in). We never collect bill amounts, passwords, or personal banking data.',
    
    nav: {
      finder: 'Which Discom is Mine?',
      newConnection: 'New Connection Guide',
      nameTransfer: 'Name Transfer vs New',
      outage1912: '1912 & Outage Redressal',
      billCalc: 'Tariff & Bill Calculator',
      districts: 'Haryana 22 Districts'
    },

    quickActions: {
      call1912: '24x7 Helpline: 1912',
      uhbvnPortal: 'Official UHBVN Portal',
      dhbvnPortal: 'Official DHBVN Portal',
      checkBill: 'Pay / View Official Bill',
      applyConnection: 'Apply Connection'
    },

    hero: {
      badge: 'Serving all 22 Districts across North & South Haryana',
      title: 'Haryana Electricity Made Simple: UHBVN vs DHBVN',
      subtitle: 'Tired of checking neighbors’ bills to know your Nigam? Find your correct electricity board instantly, calculate new meter charges, navigate name transfers, and escalate power cuts through 1912.',
      statsDistricts: '22 Haryana Districts',
      statsDiscoms: '2 Discoms (UHBVN & DHBVN)',
      statsHelpline: '1912 Toll-Free Escalation',
      statsSavings: 'Save ₹3,000+ on Name Transfers'
    },

    discomFinder: {
      title: '1. Which Discom is Mine? & Bill Checker',
      desc: 'Haryana divides power distribution between UHBVN (North) and DHBVN (South). Use PIN, city, or account prefix to find your exact Nigam and jump to the genuine payment gateway.',
      tabPin: 'By PIN Code / District',
      tabAccount: 'By Account Number / Prefix',
      pinPlaceholder: 'Enter 6-digit Haryana PIN (e.g. 122001, 134109, 132001)...',
      orSelectDistrict: 'Or choose your District:',
      selectDistrictPlaceholder: 'Select from 22 Districts...',
      accountPlaceholder: 'Enter 10-digit Account Number (or old prefix like PK-1234, GG-5678)...',
      detectBtn: 'Identify Discom & View Portal',
      resetBtn: 'Reset',
      resultHeader: 'Your Discom Identification Result',
      districtLabel: 'District:',
      discomLabel: 'Electricity Board (Discom):',
      headquartersLabel: 'Headquarters:',
      circleLabel: 'Circle Office:',
      pinMatches: 'Matched PINs / Subdivisions:',
      directPayBtn: 'Pay / View Bill on Official Gateway',
      directApplyBtn: 'Apply New Connection on Official Site',
      prefixGuideTitle: 'Haryana Account Number System Explained',
      prefixGuideP1: 'Historically, Haryana bills carried an alphanumeric code indicating the circle code (e.g. GG = Gurugram, PK = Panchkula, AM = Ambala, KR = Karnal, HS = Hisar, FB = Faridabad).',
      prefixGuideP2: 'Both nigams modernized to a 10-digit unified consumer account number. If your bill has an old account number, your latest physical bill will show the corresponding 10-digit number in the top right corner.',
      sampleBillsTitle: 'How to Read Your Haryana Bill:',
      sampleTip1: 'Check the top header: It will clearly say "Uttar Haryana Bijli Vitran Nigam" or "Dakshin Haryana Bijli Vitran Nigam".',
      sampleTip2: '10-digit Account Number is essential for online payment, mobile apps, and 1912 outage SMS.'
    },

    newConnection: {
      title: '2. New Connection Walkthrough & Fee Estimator',
      desc: 'Complete walkthrough of documents required, load categories (Domestic, Commercial, Agriculture, Industrial), and estimated initial charges under HERC guidelines.',
      step1Title: 'Check Pre-requisites & Mandatory Documents',
      pppNoticeTitle: 'Haryana Parivar Pehchan Patra (PPP) Mandatory',
      pppNoticeDesc: 'For all domestic connections in Haryana, Family ID (PPP) is strictly linked with Aadhaar. Ensure your Family ID is updated before applying on Saral Haryana or Nigam portals.',
      docsListTitle: 'Document Checklist for Fresh Connection:',
      docs: [
        'Parivar Pehchan Patra (Family ID) / Aadhaar Card of applicant',
        'Proof of Ownership: Registered Sale Deed / Allotment Letter / Mutation (Inteqal) / Rent Agreement + Landlord NOC',
        'Site Test Report (Wiring completion certificate by licensed electrical contractor)',
        'Passport-sized photograph of applicant',
        'Self-declaration regarding no previous pending electricity arrears on the premises',
        'Valid active mobile number and email ID for OTP verification'
      ],
      calculatorTitle: 'Interactive Fee & Security Deposit Estimator',
      calculatorSubtitle: 'Calculate expected upfront costs: Application Fee, Advance Consumption Deposit (ACD), Service Connection Charges (SCC), and Meter Security.',
      categoryLabel: 'Connection Category:',
      categories: {
        domestic: 'Domestic Supply (DS) - Residential Home / Flat',
        nondomestic: 'Non-Domestic (NDS) - Commercial Shop / Office',
        agriculture: 'Agriculture Pump (AP) - Tubewell / Irrigation',
        industrial_lt: 'Industrial LT (Low Tension up to 50 kW)',
        industrial_ht: 'Industrial HT (High Tension > 50 kW)'
      },
      loadLabel: 'Sanctioned Load (kW):',
      loadHint: 'Typically 2–4 kW for 2BHK flat; 5–8 kW for 3-4 BHK with ACs; 1 kW for basic rural household.',
      calcResultTitle: 'Estimated Initial Charges (HERC Norms)',
      applicationFee: 'Application Processing Fee:',
      acdSecurity: 'Advance Consumption Deposit (ACD):',
      sccCharges: 'Service Connection Charges (SCC):',
      meterSecurity: 'Meter Security & Testing:',
      totalCost: 'Total Estimated Initial Payment:',
      phaseNoticeSingle: 'Single-phase supply applicable (Load ≤ 5 kW).',
      phaseNoticeThree: 'Three-phase supply mandated by Nigam (Load > 5 kW).',
      applyOfficialBtn: 'Proceed to Official Application Portal',
      saralOption: 'You can also apply via Saral Haryana (antodaya-saral) portal using your PPP Family ID.'
    },

    nameTransfer: {
      title: '3. Name Transfer vs New Connection Guide',
      subtitle: 'Bought a property in Haryana? Do NOT apply for a fresh connection. A simple Name Transfer saves ₹3,000 to ₹10,000+ in infrastructure and service charges!',
      whyImportantTitle: 'Why You Must Choose Name Transfer Over Fresh Application:',
      whyImportantDesc: 'Applying for a fresh connection requires paying full Service Connection Charges (SCC) and laying new infrastructure lines. A "Change of Name" transfers the existing sanctioned load and line, carrying over previously deposited security when NOC is provided.',
      comparison: {
        metric: 'Feature / Criterion',
        transfer: 'Name Transfer (Change of Name)',
        fresh: 'Fresh New Connection',
        cost: 'Upfront Cost',
        costTransfer: 'Very low (Nominal application fee ₹50-₹100 + security difference if load altered)',
        costFresh: 'High (Full SCC @ ₹750/kW + ACD @ ₹750/kW + Meter fees: ₹3,000 - ₹12,000+)',
        time: 'Turnaround Time',
        timeTransfer: '7 - 15 working days (No physical wire laying required)',
        timeFresh: '15 - 30+ days (Requires site feasibility inspection & line installation)',
        meter: 'Physical Meter',
        meterTransfer: 'Existing digital meter continues uninterrupted',
        meterFresh: 'New meter issued; old meter disconnected (adds delay)'
      },
      requiredDocsTitle: 'Checklist of Documents for Name Transfer in Haryana:',
      transferDocs: [
        'Registered Sale Deed / Conveyance Deed / Title Proof showing applicant’s name',
        'No Objection Certificate (NOC) from previous registered owner (or Death Certificate + Legal Heir Affidavit in case of inheritance)',
        'Latest electricity bill with zero arrears (paid receipt)',
        'Applicant’s Parivar Pehchan Patra (Family ID) and Aadhaar Card',
        'Indemnity Bond on ₹50 / ₹100 non-judicial stamp paper (Form A-1 format prescribed by HERC)',
        'Test Report from licensed electrical contractor (if sanctioned load is revised)'
      ],
      indemnityBondTitle: 'Free Download / Format Preview of Indemnity Bond (Form A-1)',
      indemnityBondDesc: 'Haryana electricity boards require an indemnity undertaking stating you will be responsible for any past undisclosed dues of the connection.',
      viewFormatBtn: 'View Stamp Paper Undertaking Format'
    },

    outage1912: {
      title: '4. Outage & Complaint Tracker Explainer',
      subtitle: 'How the 24x7 1912 Haryana power helpline works, WhatsApp outage bots, and 3-Tier grievance escalation to CGRF & Ombudsman when officers fail to act.',
      helplineTitle: 'All-Haryana 24x7 Unified Helpline: 1912',
      helplineDesc: 'Directly dial 1912 from any mobile or landline across Haryana (both UHBVN and DHBVN areas). It is a toll-free emergency and grievance intake dispatch line.',
      whatsappTitle: 'Official WhatsApp Complaint Services',
      whatsappDesc: 'Send "Hi" or your account number to register complaints without holding on a call:',
      dhbvnWa: 'DHBVN WhatsApp: 8882101912',
      uhbvnWa: 'UHBVN WhatsApp: 9815961912',
      smsTitle: 'Fast SMS Outage Registration Format',
      smsDesc: 'If your power is out, send this SMS from your registered mobile:',
      smsExample: 'NOPOW <10-digit Account Number> to 1912 (or 5616171)',
      cgrfTitle: 'Escalation to Consumer Grievance Redressal Forum (CGRF)',
      cgrfDesc: 'When the local Junior Engineer (JE) or Sub-Divisional Officer (SDO) fails to resolve frequent tripping, burnt meters, wrong billing, or unheeded complaints within 7 days, Haryana consumers have statutory rights under HERC.',
      tiers: [
        {
          title: 'Tier 1: SDO / Executive Engineer (XEN) Office',
          desc: 'Submit written grievance in duplicate with complaint token number generated from 1912. Retain the stamped receipt.'
        },
        {
          title: 'Tier 2: Circle CGRF / Corporate CGRF (Panchkula / Gurugram / Kurukshetra)',
          desc: 'Statutory quasi-judicial consumer forum chaired by senior officers and independent member. Decides disputes within 21 to 30 days. Discoms can be fined compensation.'
        },
        {
          title: 'Tier 3: Electricity Ombudsman Haryana (Panchkula)',
          desc: 'Appellate authority under HERC. If CGRF order is unfulfilled or delayed over 30 days, file appeal with the Electricity Ombudsman.'
        }
      ],
      compensationTitle: 'Statutory Consumer Compensation Rules (HERC Standards)',
      compRules: [
        { issue: 'Power Restoration in Urban areas', standard: 'Within 4 hours', penalty: '₹100 per day of delay' },
        { issue: 'Burnt Meter Replacement', standard: 'Within 24-72 hours of report', penalty: '₹50 per day' },
        { issue: 'Wrong Billing Rectification', standard: 'Within 7 working days', penalty: '₹50 per billing cycle delay' },
        { issue: 'Transfer of Connection', standard: 'Within 15 days', penalty: '₹100 per day' }
      ]
    },

    billCalc: {
      title: '5. Haryana Domestic Tariff & Slab Bill Calculator',
      subtitle: 'Calculate estimated electricity charges under the latest HERC Domestic Supply (DS) slab tariffs.',
      unitsLabel: 'Monthly Consumption (Units / kWh):',
      loadLabel: 'Sanctioned Load (kW):',
      calcBtn: 'Calculate Bill',
      breakdownTitle: 'Estimated Bill Breakdown',
      energyCharges: 'Energy Charges (Slab Rates):',
      fixedCharges: 'Fixed Charges:',
      fsa: 'Fuel Surcharge Adjustment (FSA @ ₹0.37/unit):',
      ed: 'Electricity Duty (ED @ ₹0.10/unit):',
      mt: 'Municipal Tax (MT @ ₹0.05/unit):',
      totalEstimated: 'Estimated Total Bill:',
      noteSlabCat1: 'Eligible for Category-I Lifeline domestic subsidy (Consumption ≤ 100 units/month). Rate starts at ₹2.00/unit.',
      noteSlabCat2: 'Billed under Category-II regular domestic tariff (> 100 units/month). Multi-tier telescopic slab applies.'
    },

    districtDirectory: {
      title: 'Haryana Electricity District Directory (All 22 Districts)',
      subtitle: 'Direct contact numbers, circle offices, and headquarters for every city in Haryana.',
      filterAll: 'All 22 Districts',
      filterUhbvn: 'UHBVN (North - 11)',
      filterDhbvn: 'DHBVN (South - 11)',
      searchPlaceholder: 'Search by city, district name, or PIN code (e.g. Gurugram, 134109)...',
      circleOffice: 'Circle Office:',
      headquarters: 'Headquarters:',
      helpline: 'Circle Phone:',
      subdivisions: 'Major Subdivisions:',
      pincodes: 'Key PIN Codes:'
    },

    faq: {
      title: 'Frequently Asked Questions (Haryana Bijli Help)',
      items: [
        {
          q: 'Which areas of Haryana come under UHBVN and DHBVN?',
          a: 'UHBVN (Uttar Haryana) serves northern districts: Panchkula, Ambala, Yamunanagar, Kurukshetra, Kaithal, Karnal, Panipat, Sonipat, Rohtak, Jhajjar, and Jind. DHBVN (Dakshin Haryana) serves southern districts: Gurugram, Faridabad, Rewari, Sirsa, Hisar, Bhiwani, Charkhi Dadri, Fatehabad, Mahendragarh (Narnaul), Palwal, and Nuh.'
        },
        {
          q: 'Is Family ID (PPP) mandatory for electricity connection in Haryana?',
          a: 'Yes, as per Government of Haryana mandate, Parivar Pehchan Patra (PPP) Family ID is required to link citizen electricity meters with genuine ownership and targeted domestic subsidies.'
        },
        {
          q: 'How can I lodge an electricity outage complaint in Haryana?',
          a: 'You can dial the centralized 24x7 toll-free helpline 1912, or send a WhatsApp message to 8882101912 (DHBVN) or 9815961912 (UHBVN), or submit on the official discom portals.'
        },
        {
          q: 'Can I pay my Haryana electricity bill on this website?',
          a: 'No. This is an informational and calculation assistance tool. All actual bill payments and confidential consumer verification must be completed strictly through the official websites (epayment.dhbvn.org.in or epayment.uhbvn.org.in) or certified BBPS payment platforms.'
        }
      ]
    },

    footer: {
      aboutTitle: 'About Haryana Bijli Seva',
      aboutDesc: 'A dedicated citizen utility hub helping residents across Haryana navigate UHBVN and DHBVN electricity services, understand their bills, calculate connection costs, and resolve grievances.',
      officialPortals: 'Official Portals',
      officialDisclaimText: 'Disclaimer: Haryana Bijli Seva is an independent educational portal. All trade names, logos, and trademarks (UHBVN, DHBVN, Saral Haryana, HERC) belong to their respective government entities.',
      copyright: '© 2026 Haryana Bijli Seva. Built for the citizens of Haryana.'
    }
  },

  hi: {
    siteTitle: 'हरियाणा बिजली सेवा',
    siteTagline: 'उत्तर व दक्षिण हरियाणा (UHBVN & DHBVN) उपभोक्ताओं के लिए स्वतंत्र नागरिक गाइड',
    unofficialBadge: 'अनौपचारिक नागरिक सहायता केंद्र • HERC मानकों पर आधारित',
    disclaimerBanner: 'सूचना: यह एक स्वतंत्र नागरिक सहायता पोर्टल है और इसका UHBVN, DHBVN अथवा हरियाणा सरकार से कोई प्रत्यक्ष संबंध नहीं है। सभी बिजली बिल भुगतान व नए कनेक्शन आवेदन केवल आधिकारिक वेबसाइटों (uhbvn.org.in या dhbvn.org.in) पर ही करें। हम कोई भुगतान या पासवर्ड नहीं लेते।',

    nav: {
      finder: 'मेरा कौन सा निगम है?',
      newConnection: 'नया कनेक्शन गाइड',
      nameTransfer: 'नाम ट्रांसफर बनाम नया',
      outage1912: '1912 व शिकायत निवारण',
      billCalc: 'टैरिफ व बिल कैलकुलेटर',
      districts: 'हरियाणा के 22 जिले'
    },

    quickActions: {
      call1912: '24x7 हेल्पलाइन: 1912',
      uhbvnPortal: 'यूएचबीवीएन आधिकारिक पोर्टल',
      dhbvnPortal: 'डीएचबीवीएन आधिकारिक पोर्टल',
      checkBill: 'आधिकारिक बिल देखें / भरें',
      applyConnection: 'नया कनेक्शन आवेदन'
    },

    hero: {
      badge: 'उत्तर व दक्षिण हरियाणा के सभी 22 जिलों में सेवारत',
      title: 'हरियाणा बिजली समाधान: UHBVN और DHBVN की पूरी जानकारी',
      subtitle: 'अब पड़ोसी का बिल देखने की जरूरत नहीं! अपना सही बिजली निगम तुरंत पहचानें, नए मीटर का खर्च जांचें, मीटर नाम ट्रांसफर की प्रक्रिया समझें और 1912 पर बिजली कटौती की शिकायत दर्ज करें।',
      statsDistricts: '22 हरियाणा जिले',
      statsDiscoms: '2 निगम (UHBVN व DHBVN)',
      statsHelpline: '1912 टोल-फ्री समाधान',
      statsSavings: 'नाम ट्रांसफर पर ₹3,000+ बचाएं'
    },

    discomFinder: {
      title: '1. मेरा कौन सा निगम है? (डिस्कॉम फाइंडर व बिल चेकर)',
      desc: 'हरियाणा में दो बिजली वितरण निगम हैं — UHBVN (उत्तर) और DHBVN (दक्षिण)। अपने पिन कोड, जिले या खाता संख्या से तुरंत अपने सही निगम की पहचान करें और सीधे आधिकारिक भुगतान पेज पर जाएं।',
      tabPin: 'पिन कोड या जिले द्वारा',
      tabAccount: 'खाता संख्या / प्रीफिक्स द्वारा',
      pinPlaceholder: '6 अंकों का हरियाणा पिन कोड डालें (उदा. 122001, 134109, 132001)...',
      orSelectDistrict: 'या अपना जिला चुनें:',
      selectDistrictPlaceholder: 'हरियाणा के 22 जिलों में से चुनें...',
      accountPlaceholder: '10 अंकों की खाता संख्या दर्ज करें (या पुराना कोड जैसे PK-1234, GG-5678)...',
      detectBtn: 'निगम पहचानें और आधिकारिक लिंक पाएं',
      resetBtn: 'रीसेट करें',
      resultHeader: 'आपकी बिजली निगम पहचान का परिणाम',
      districtLabel: 'जिला:',
      discomLabel: 'बिजली निगम (Discom):',
      headquartersLabel: 'मुख्यालय:',
      circleLabel: 'सर्कल कार्यालय:',
      pinMatches: 'संबद्ध पिन कोड / उप-मंडल:',
      directPayBtn: 'आधिकारिक वेबसाइट पर बिल भरें / देखें',
      directApplyBtn: 'आधिकारिक साइट पर नया कनेक्शन लगाएं',
      prefixGuideTitle: 'हरियाणा बिजली खाता संख्या प्रणाली समझें',
      prefixGuideP1: 'पहले हरियाणा के बिजली बिलों पर 2 अक्षरों का सर्कल कोड होता था (जैसे GG = गुरुग्राम, PK = पंचकूला, AM = अम्बाला, KN = करनाल, HS = हिसार, FB = फरीदाबाद)।',
      prefixGuideP2: 'अब दोनों निगमों ने 10 अंकों का डिजिटल उपभोक्ता खाता नंबर शुरू किया है। यदि आपके पास पुराना नंबर है, तो नवीनतम बिल की ऊपरी दाईं ओर 10 अंकों का नया नंबर अंकित होता है।',
      sampleBillsTitle: 'अपने हरियाणा बिजली बिल की जांच कैसे करें:',
      sampleTip1: 'बिल का शीर्षक देखें: उस पर स्पष्ट लिखा होगा "उत्तर हरियाणा बिजली वितरण निगम" या "दक्षिण हरियाणा बिजली वितरण निगम"।',
      sampleTip2: '10 अंकों की खाता संख्या ऑनलाइन पेमेंट, मोबाइल ऐप तथा 1912 पर एसएमएस भेजने के लिए अनिवार्य है।'
    },

    newConnection: {
      title: '2. नया बिजली कनेक्शन: दस्तावेज़ व खर्च कैलकुलेटर',
      desc: 'नए कनेक्शन के लिए आवश्यक दस्तावेज़, लोड श्रेणियां (घरेलू, व्यावसायिक, कृषि, औद्योगिक) और HERC नियमों के अनुसार अनुमानित अग्रिम खर्च का पूरा ब्यौरा।',
      step1Title: 'आवश्यक पात्रता एवं दस्तावेज़',
      pppNoticeTitle: 'हरियाणा परिवार पहचान पत्र (PPP) अनिवार्य',
      pppNoticeDesc: 'हरियाणा में घरेलू बिजली कनेक्शन के लिए परिवार पहचान पत्र (Family ID) आधार से लिंक होना अनिवार्य है। सरल हरियाणा या बिजली निगम पोर्टल पर आवेदन से पूर्व PPP विवरण सही रखें।',
      docsListTitle: 'नए कनेक्शन के लिए आवश्यक दस्तावेज़ों की सूची:',
      docs: [
        'आवेदक का परिवार पहचान पत्र (Family ID) / आधार कार्ड',
        'स्वामित्व का प्रमाण: रजिस्टर्ड रजिस्ट्री (Sale Deed) / आवंटन पत्र / इंतकाल की प्रति / किरायानामा + मकान मालिक की एनओसी',
        'लाइसेंस प्राप्त इलेक्ट्रीशियन द्वारा जारी साइट टेस्ट रिपोर्ट (वायरिंग प्रमाण-पत्र)',
        'आवेदक का पासपोर्ट साइज फोटो',
        'परिसर पर पहले का कोई बकाया बिजली बिल न होने का स्व-घोषणा पत्र',
        'ओटीपी सत्यापन हेतु सक्रिय मोबाइल नंबर और ईमेल'
      ],
      calculatorTitle: 'अनुमानित नया कनेक्शन शुल्क कैलकुलेटर',
      calculatorSubtitle: 'जानिए आवेदन शुल्क, एडवांस खपत जमा (ACD), सर्विस कनेक्शन चार्ज (SCC) और मीटर सुरक्षा राशि का सही हिसाब।',
      categoryLabel: 'कनेक्शन की श्रेणी:',
      categories: {
        domestic: 'घरेलू आपूर्ति (DS) - मकान / फ्लैट',
        nondomestic: 'गैर-घरेलू (NDS) - दुकान / कार्यालय / शोरूम',
        agriculture: 'कृषि पंप (AP) - ट्यूबवेल / सिंचाई',
        industrial_lt: 'औद्योगिक एलटी (50 किलोवाट तक)',
        industrial_ht: 'औद्योगिक एचटी (50 किलोवाट से अधिक)'
      },
      loadLabel: 'स्वीकृत लोड (किलोवाट / kW):',
      loadHint: 'साधारण 2BHK के लिए 2-4 kW; 3-4 BHK एसी वाले मकान के लिए 5-8 kW; ग्रामीण घर हेतु 1-2 kW पर्याप्त होता है।',
      calcResultTitle: 'अनुमानित प्रारंभिक भुगतान (HERC दिशा-निर्देश)',
      applicationFee: 'आवेदन प्रक्रिया शुल्क:',
      acdSecurity: 'एडवांस खपत जमा (ACD सुरक्षा राशि):',
      sccCharges: 'सर्विस कनेक्शन चार्ज (SCC):',
      meterSecurity: 'मीटर सुरक्षा व टेस्टिंग शुल्क:',
      totalCost: 'कुल अनुमानित प्रारंभिक खर्च:',
      phaseNoticeSingle: 'सिंगल-फेज कनेक्शन लागू (लोड 5 किलोवाट तक)।',
      phaseNoticeThree: 'थ्री-फेज कनेक्शन अनिवार्य (लोड 5 किलोवाट से अधिक)।',
      applyOfficialBtn: 'आधिकारिक पोर्टल पर आवेदन करें',
      saralOption: 'आप सरल हरियाणा (saralharyana.gov.in) पोर्टल द्वारा भी अपनी Family ID से आवेदन कर सकते हैं।'
    },

    nameTransfer: {
      title: '3. नाम ट्रांसफर बनाम नया कनेक्शन (पैसे बचाने की गाइड)',
      subtitle: 'क्या आपने हरियाणा में कोई मकान या दुकान खरीदी है? नया कनेक्शन लेकर हजारों रुपये बर्बाद न करें — नाम ट्रांसफर (Change of Name) में केवल नाम बदलता है और भारी खर्च बचता है!',
      whyImportantTitle: 'नया कनेक्शन लगाने के बजाय नाम ट्रांसफर क्यों कराएं?',
      whyImportantDesc: 'नया कनेक्शन लेने पर आपको दोबारा पूरा सर्विस कनेक्शन चार्ज (₹750/kW) और लाइन चार्ज देना पड़ता है। जबकि "नाम परिवर्तन" में केवल पुराने उपभोक्ता का नाम हटकर आपका नाम दर्ज हो जाता है और पहले से जमा सिक्योरिटी समायोजित हो जाती है।',
      comparison: {
        metric: 'विशेषता / मानक',
        transfer: 'नाम ट्रांसफर (Change of Name)',
        fresh: 'बिलकुल नया कनेक्शन (Fresh)',
        cost: 'अनुमानित लागत',
        costTransfer: 'बहुत कम (मात्र ₹50-₹100 आवेदन शुल्क + केवल यदि लोड बढ़ाया जाए तो अंतर)',
        costFresh: 'बहुत अधिक (पूरा SCC ₹750/kW + ACD ₹750/kW + मीटर शुल्क: कुल ₹3,000 से ₹12,000+)',
        time: 'समय सीमा',
        timeTransfer: '7 से 15 कार्य दिवस (कोई नया तार खींचने की आवश्यकता नहीं)',
        timeFresh: '15 से 30+ दिन (साइट निरीक्षण, नया खंभा/तार और मीटर फिटिंग)',
        meter: 'बिजली मीटर',
        meterTransfer: 'मौजूदा मीटर ही चालू रहता है',
        meterFresh: 'नया मीटर जारी होता है, पुराने को काटा जाता है'
      },
      requiredDocsTitle: 'हरियाणा में नाम ट्रांसफर हेतु आवश्यक दस्तावेज़:',
      transferDocs: [
        'रजिस्टर्ड सेल डीड (रजिस्ट्री) / इंतकाल की सत्यापित प्रति जिसमें नया खरीदार मालिक हो',
        'पुराने पंजीकृत उपभोक्ता से एनओसी (NOC) (यदि पूर्व मालिक दिवंगत है तो मृत्यु प्रमाण पत्र व वारिसान शपथ-पत्र)',
        'नवीनतम बिजली बिल की पूर्ण भुगतान रसीद (शून्य बकाया)',
        'आवेदक का परिवार पहचान पत्र (Family ID) एवं आधार कार्ड',
        '₹50 / ₹100 के नॉन-ज्यूडिशियल स्टांप पेपर पर इंडेम्निटी बांड (क्षतिपूर्ति बंधपत्र - फॉर्म A-1 प्रारूप)',
        'स्वीकृत लोड परिवर्तन की स्थिति में टेस्ट रिपोर्ट'
      ],
      indemnityBondTitle: 'इंडेम्निटी बांड (Form A-1) का प्रारूप',
      indemnityBondDesc: 'बिजली बोर्ड को शपथ-पत्र देना होता है कि भविष्य में इस मीटर पर कोई पुराना बकाया निकलने पर भुगतान की जिम्मेदारी नए उपभोक्ता की होगी।',
      viewFormatBtn: 'स्टांप पेपर शपथ-पत्र प्रारूप देखें'
    },

    outage1912: {
      title: '4. बिजली कटौती शिकायत एवं 1912 निवारण गाइड',
      subtitle: '24 घंटे चलने वाली 1912 हेल्पलाइन, व्हाट्सएप चैटबॉट, और जब अधिकारी न सुनें तो CGRF व विद्युत लोकपाल में अपील का सटीक तरीका।',
      helplineTitle: 'पूरे हरियाणा हेतु एकीकृत टोल-फ्री हेल्पलाइन: 1912',
      helplineDesc: 'हरियाणा के किसी भी मोबाइल या लैंडलाइन से सीधे 1912 डायल करें। यह UHBVN और DHBVN दोनों के लिए 24 घंटे काम करता है।',
      whatsappTitle: 'आधिकारिक व्हाट्सएप शिकायत सेवा',
      whatsappDesc: 'कॉल पर इंतजार किए बिना व्हाट्सएप पर "Hi" या अपना खाता नंबर भेजकर बिजली कटौती दर्ज करें:',
      dhbvnWa: 'डीएचबीवीएन व्हाट्सएप: 8882101912',
      uhbvnWa: 'यूएचबीवीएन व्हाट्सएप: 9815961912',
      smsTitle: 'त्वरित एसएमएस शिकायत प्रारूप',
      smsDesc: 'बिजली चले जाने पर अपने पंजीकृत मोबाइल से यह एसएमएस भेजें:',
      smsExample: 'NOPOW <10-अंकों का खाता नंबर> लिखकर 1912 (या 5616171) पर भेजें',
      cgrfTitle: 'उपभोक्ता शिकायत निवारण फोरम (CGRF) में शिकायत का स्तर',
      cgrfDesc: 'यदि स्थानीय जेई या एसडीओ 7 दिनों में फुंके मीटर, बार-बार ट्रिपिंग या गलत बिल का समाधान न करे, तो HERC नियमों के तहत उपभोक्ता को विधिक अधिकार प्राप्त हैं।',
      tiers: [
        {
          title: 'प्रथम स्तर: एसडीओ / एक्सईएन (XEN) कार्यालय',
          desc: '1912 से प्राप्त टोकन नंबर के साथ दो प्रतियों में लिखित शिकायत दें और रिसीविंग स्टाम्प अवश्य लें।'
        },
        {
          title: 'द्वितीय स्तर: सर्कल CGRF / कॉर्पोरेट CGRF (पंचकूला / गुरुग्राम / कुरुक्षेत्र)',
          desc: 'यह एक स्वतंत्र अर्ध-न्यायिक फोरम है जो 21 से 30 दिनों में फैसला देता है। नियम उल्लंघन पर बिजली बोर्ड को उपभोक्ता को हर्जाना देने का आदेश भी दे सकता है।'
        },
        {
          title: 'तृतीय स्तर: विद्युत लोकपाल हरियाणा (Electricity Ombudsman, Panchkula)',
          desc: 'HERC के अंतर्गत शीर्ष अपीलीय प्राधिकरण। यदि CGRF के आदेश का 30 दिन में पालन न हो, तो सीधे विद्युत लोकपाल के समक्ष अपील दायर करें।'
        }
      ],
      compensationTitle: 'उपभोक्ता मुआवजा मानक (HERC Standards of Performance)',
      compRules: [
        { issue: 'शहरी क्षेत्र में बिजली बहाली', standard: 'अधिकतम 4 घंटे के भीतर', penalty: '₹100 प्रति दिन का विलंब शुल्क' },
        { issue: 'जले हुए मीटर को बदलना', standard: 'सूचना मिलने के 24 से 72 घंटे में', penalty: '₹50 प्रति दिन' },
        { issue: 'गलत बिल का संशोधन', standard: '7 कार्य दिवस के भीतर', penalty: '₹50 प्रति बिलिंग चक्र' },
        { issue: 'कनेक्शन का नाम ट्रांसफर', standard: '15 दिनों के भीतर', penalty: '₹100 प्रति दिन' }
      ]
    },

    billCalc: {
      title: '5. हरियाणा घरेलू बिजली टैरिफ व बिल कैलकुलेटर',
      subtitle: 'हरियाणा विद्युत विनियामक आयोग (HERC) की नवीनतम स्लैब दरों पर अपने मासिक बिल का सटीक अनुमान लगाएं।',
      unitsLabel: 'मासिक खपत (यूनिट / kWh):',
      loadLabel: 'स्वीकृत लोड (किलोवाट / kW):',
      calcBtn: 'बिल की गणना करें',
      breakdownTitle: 'अनुमानित बिल का विवरण',
      energyCharges: 'ऊर्जा शुल्क (स्लैब अनुसार):',
      fixedCharges: 'नियत शुल्क (Fixed Charges):',
      fsa: 'ईंधन अधिभार समायोजन (FSA @ ₹0.37/यूनिट):',
      ed: 'विद्युत शुल्क (Electricity Duty @ ₹0.10/यूनिट):',
      mt: 'नगर निगम कर (Municipal Tax @ ₹0.05/यूनिट):',
      totalEstimated: 'कुल अनुमानित बिल राशि:',
      noteSlabCat1: 'श्रेणी-1 घरेलू लाइफलाइन सब्सिडी हेतु पात्र (मासिक खपत ≤ 100 यूनिट)। दर ₹2.00/यूनिट से शुरू।',
      noteSlabCat2: 'श्रेणी-2 सामान्य घरेलू टैरिफ (> 100 यूनिट/माह)। अलग-अलग स्लैब अनुसार टेलीस्कोपिक दर लागू।'
    },

    districtDirectory: {
      title: 'हरियाणा के सभी 22 जिलों की बिजली डायरेक्टरी',
      subtitle: 'हर जिले का डिस्कॉम, सर्कल कार्यालय, हेल्पलाइन नंबर और प्रमुख सब-डिवीजन की सूची।',
      filterAll: 'सभी 22 जिले',
      filterUhbvn: 'UHBVN (उत्तर - 11)',
      filterDhbvn: 'DHBVN (दक्षिण - 11)',
      searchPlaceholder: 'जिले का नाम, शहर या पिन कोड खोजें (उदा. गुरुग्राम, 134109, अम्बाला)...',
      circleOffice: 'सर्कल कार्यालय:',
      headquarters: 'मुख्यालय:',
      helpline: 'सर्कल फोन:',
      subdivisions: 'प्रमुख उप-मंडल (Subdivisions):',
      pincodes: 'प्रमुख पिन कोड:'
    },

    faq: {
      title: 'अक्सर पूछे जाने वाले सवाल (FAQs)',
      items: [
        {
          q: 'हरियाणा में कौन से जिले UHBVN और DHBVN के अधीन आते हैं?',
          a: 'UHBVN (उत्तर हरियाणा) में 11 जिले आते हैं: पंचकूला, अम्बाला, यमुनानगर, कुरुक्षेत्र, कैथल, करनाल, पानीपत, सोनीपत, रोहतक, झज्जर और जींद। DHBVN (दक्षिण हरियाणा) में 11 जिले आते हैं: गुरुग्राम, फरीदाबाद, रेवाड़ी, सिरसा, हिसार, भिवानी, चरखी दादरी, फतेहाबाद, महेंद्रगढ़ (नारनौल), पलवल और नूह।'
        },
        {
          q: 'क्या हरियाणा में बिजली कनेक्शन के लिए परिवार पहचान पत्र (Family ID) अनिवार्य है?',
          a: 'हाँ, हरियाणा सरकार के निर्देशानुसार घरेलू बिजली कनेक्शन को परिवार पहचान पत्र (PPP) से लिंक करना अनिवार्य है जिससे वैध स्वामित्व की पहचान और घरेलू सब्सिडी का लाभ मिल सके।'
        },
        {
          q: 'हरियाणा में बिजली गुल होने पर शिकायत कैसे दर्ज करें?',
          a: 'आप 24 घंटे चलने वाले टोल-फ्री नंबर 1912 पर कॉल कर सकते हैं, या DHBVN हेतु 8882101912 एवं UHBVN हेतु 9815961912 पर व्हाट्सएप मैसेज भेज सकते हैं।'
        },
        {
          q: 'क्या इस वेबसाइट पर बिजली बिल का भुगतान किया जा सकता है?',
          a: 'नहीं। यह केवल एक सूचनात्मक व गणना सहायता पोर्टल है। वास्तविक बिल भुगतान व आवेदन केवल आधिकारिक पोर्टल (epayment.dhbvn.org.in या epayment.uhbvn.org.in) अथवा प्रमाणित BBPS प्लेटफॉर्म पर ही किए जाने चाहिए।'
        }
      ]
    },

    footer: {
      aboutTitle: 'हरियाणा बिजली सेवा के बारे में',
      aboutDesc: 'हरियाणा के नागरिकों के लिए एक स्वतंत्र जन-उपयोगी पोर्टल, जो UHBVN और DHBVN उपभोक्ताओं को सही निगम पहचानने, बिल समझने, नया कनेक्शन खर्च आंकने व शिकायतों के निवारण में सहायता प्रदान करता है।',
      officialPortals: 'आधिकारिक पोर्टल लिंक',
      officialDisclaimText: 'अस्वीकरण: हरियाणा बिजली सेवा एक स्वतंत्र नागरिक सूचना पोर्टल है। सभी ट्रेडमार्क व नाम (UHBVN, DHBVN, सरल हरियाणा, HERC) संबंधित सरकारी संस्थाओं की संपत्ति हैं।',
      copyright: '© 2026 हरियाणा बिजली सेवा। हरियाणावासियों की सुविधा हेतु समर्पित।'
    }
  }
};
