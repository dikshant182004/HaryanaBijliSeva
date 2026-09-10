import { Article } from '../types';

export const ARTICLES_DATA: Article[] = [
  {
    slug: 'what-is-acd-charge-haryana-electricity-bill',
    titleEn: 'What is ACD Charge in Haryana Electricity Bill? UHBVN & DHBVN Advance Consumption Deposit Explained',
    titleHi: 'बिजली बिल में ACD चार्ज क्या होता है? UHBVN व DHBVN एडवांस कन्जम्प्शन डिपॉजिट का पूरा सच',
    shortDescEn: 'Received an unexpected ACD notice or extra charges of ₹2,000 to ₹15,000 in your Haryana electricity bill? Learn statutory HERC rules, how ACD is calculated, RBI interest rate on deposits, and how to contest wrongful charges.',
    shortDescHi: 'क्या आपके हरियाणा बिजली बिल में 2,000 से 15,000 रुपये का ACD चार्ज जुड़कर आया है? जानें HERC के वैधानिक नियम, एसीडी की गणना, जमा राशि पर मिलने वाला ब्याज और गलत बिल को ठीक कराने का तरीका।',
    category: 'billing',
    categoryLabelEn: 'Billing & Charges',
    categoryLabelHi: 'बिल व शुल्क',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '45,000+ monthly searches in Haryana',
      primaryKeywordEn: 'What is ACD charge in Haryana electricity bill',
      primaryKeywordHi: 'बिजली बिल में ACD क्या होता है',
      secondaryKeywords: ['uhbvn acd notice reply', 'dhbvn advance consumption deposit calculation', 'acd refund interest rate rbi bank rate', 'how to avoid acd penalty haryana']
    },
    sections: [
      {
        headingEn: '1. What Exactly is ACD (Advance Consumption Deposit)?',
        headingHi: '1. ACD (एडवांस कन्जम्प्शन डिपॉजिट) वास्तव में क्या है?',
        contentEn: [
          'ACD stands for Advance Consumption Deposit. Under the Haryana Electricity Regulatory Commission (HERC) Electricity Supply Code Regulations, it serves as a statutory security deposit that every power consumer must maintain with the distribution utility (UHBVN or DHBVN).',
          'Since electricity in Haryana is supplied on credit (you consume power for 30 to 60 days before the bill is generated and due), the Discom mandates an equivalent 2-month average bill amount as a security cover against default.'
        ],
        contentHi: [
          'ACD का पूरा नाम एडवांस कन्जम्प्शन डिपॉजिट (Advance Consumption Deposit) है। हरियाणा विद्युत विनियामक आयोग (HERC) इलेक्ट्रिसिटी सप्लाई कोड विनियमों के तहत यह एक कानूनी सुरक्षा राशि (सिक्योरिटी डिपॉजिट) है जो प्रत्येक उपभोक्ता को बिजली निगम (UHBVN या DHBVN) के पास जमा रखनी होती है।',
          'क्योंकि हरियाणा में बिजली उधार (क्रेडिट) पर मिलती है—अर्थात आप 30 से 60 दिन बिजली इस्तेमाल करते हैं और उसके बाद बिल आता है—इसलिए निगम किसी भी बकाए के जोखिम से बचने के लिए औसतन 2 महीने के बिल के बराबर सुरक्षा राशि अपने पास रखता है।'
        ],
        callout: {
          type: 'statute',
          titleEn: 'Statutory Reference',
          titleHi: 'वैधानिक संदर्भ',
          textEn: 'Regulated under HERC (Electricity Supply Code) Regulations, Regulation 5.7 & Sales Circulars issued by UHBVN/DHBVN.',
          textHi: 'HERC सप्लाई कोड विनियमन 5.7 एवं UHBVN/DHBVN के वार्षिक सेल्स सर्कुलर द्वारा नियंत्रित।'
        }
      },
      {
        headingEn: '2. How Does UHBVN/DHBVN Calculate Additional ACD?',
        headingHi: '2. बिजली निगम अतिरिक्त ACD की गणना कैसे करता है?',
        contentEn: [
          'Every financial year (usually between April and June), the utility IT billing software audits your preceding 12 months of total electricity consumption.',
          'Formula: Total electricity units billed in past 12 months ÷ 12 × 2 = Average 2-month electricity bill amount.',
          'If your calculated 2-month average exceeds your initial security deposit (paid when you took the connection), the differential amount is billed as "Additional ACD".'
        ],
        contentHi: [
          'हर वित्तीय वर्ष (आमतौर पर अप्रैल से जून के बीच), बिजली बोर्ड का बिलिंग सॉफ्टवेयर आपके पिछले 12 महीनों के कुल बिजली उपभोग का ऑडिट करता है।',
          'फार्मूला: पिछले 12 महीनों का कुल बिजली बिल ÷ 12 × 2 = 2 महीने का औसत बिल।',
          'यदि पिछले साल गर्मियों में AC या हीटर चलने से आपका औसत बिल बढ़ गया और आपकी पुरानी जमा सिक्योरिटी से ज्यादा निकला, तो अंतर की राशि "अतिरिक्त ACD" के रूप में नए बिल में जोड़ दी जाती है।'
        ],
        bulletPointsEn: [
          'For Bi-monthly billed consumers (domestic rural/urban): 2 months average billing amount is required.',
          'For Monthly billed consumers (commercial/industrial): 1.5 to 2 months equivalent billing.',
          'Consumers with prepayment smart meters: ACD is NOT applicable as power is pre-paid.'
        ],
        bulletPointsHi: [
          'दो महीने में एक बार बिल पाने वाले घरेलू उपभोक्ताओं के लिए: 2 महीने का औसत बिल अनिवार्य है।',
          'हर महीने बिल पाने वाले व्यावसायिक/औद्योगिक उपभोक्ताओं के लिए: 1.5 से 2 महीने का औसत।',
          'प्रीपेड स्मार्ट मीटर उपभोक्ताओं के लिए: ACD नहीं लगता क्योंकि वे पहले रीचार्ज करते हैं।'
        ]
      },
      {
        headingEn: '3. Are You Legally Entitled to Interest on Your ACD?',
        headingHi: '3. क्या आपको अपनी जमा ACD राशि पर ब्याज मिलता है?',
        contentEn: [
          'YES. Under Section 47(4) of The Electricity Act, 2003 and HERC mandates, UHBVN and DHBVN are statutorily required to pay interest on your ACD balance at the prevailing Reserve Bank of India (RBI) Bank Rate (currently 6.75% per annum).',
          'This interest must be credited automatically in your electricity bill in the first billing cycle of every financial year (April or May bill).'
        ],
        contentHi: [
          'हाँ, बिल्कुल! इलेक्ट्रिसिटी एक्ट 2003 की धारा 47(4) और HERC के आदेशानुसार, बिजली निगम को आपकी जमा ACD राशि पर भारतीय रिजर्व बैंक (RBI) के बैंक रेट (वर्तमान में लगभग 6.75% वार्षिक) के बराबर ब्याज देना कानूनी रूप से अनिवार्य है।',
          'यह ब्याज हर वित्तीय वर्ष के पहले बिल (अप्रैल या मई के बिल) में स्वतः क्रेडिट होना चाहिए।'
        ],
        callout: {
          type: 'warning',
          titleEn: 'Check Your Bill Carefully',
          titleHi: 'अपने बिल में ध्यान से जांचें',
          textEn: 'If your bill does not show "Interest on ACD / Security Credit" in the April/May cycle, the Discom owes you statutory interest with penalty. You can file a claim at your local SDO office.',
          textHi: 'यदि आपके अप्रैल या मई के बिल में "Interest on ACD" की छूट नहीं दिखी है, तो निगम पर आपका ब्याज बकाया है। आप स्थानीय SDO कार्यालय में इसके समायोजन का आवेदन दे सकते हैं।'
        }
      },
      {
        headingEn: '4. How to Pay or Challenge Additional ACD in Haryana',
        headingHi: '4. अतिरिक्त ACD का भुगतान या शिकायत कैसे करें?',
        contentEn: [
          'Payment in Installments: Under HERC directives, high ACD amounts can be paid in equal installments upon written application to the Sub-Divisional Officer (SDO).',
          'Wrong Calculation: If your average was inflated due to a defective meter (e.g. D-code or sudden jump) or property was closed, you can submit an objection letter to the SDO with proof of meter testing.'
        ],
        contentHi: [
          'किस्तों में भुगतान: HERC के दिशा-निर्देशों के तहत, यदि ACD राशि बहुत अधिक है, तो उपभोक्ता SDO को प्रार्थना पत्र देकर इसे 3 से 6 आसान मासिक किस्तों में विभाजित करा सकते हैं।',
          'गलत गणना पर आपत्ति: यदि पिछले साल खराब मीटर, औसत बिलिंग (D-कोड) या अत्यधिक बिल आने के कारण ACD गलत बनी है, तो आप पुराने बिलों की कॉपी लगाकर SDO के समक्ष आपत्ति दर्ज करा सकते हैं।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can my electricity connection be disconnected if I do not pay ACD?',
        qHi: 'क्या ACD न भरने पर मेरा बिजली कनेक्शन काटा जा सकता है?',
        aEn: 'Yes, if the statutory 15-day notice period expires and the ACD remains unpaid, the Discom has legal authority to issue a Temporary Disconnection Order (TDCO). However, you can request an installment plan before the due date.',
        aHi: 'हाँ, यदि 15 दिन के नोटिस की अवधि पूरी हो जाती है और ACD नहीं भरा जाता, तो निगम को बिजली काटने का अधिकार है। हालांकि आप नोटिस की मियाद से पहले SDO से किस्तों की अनुमति ले सकते हैं।'
      },
      {
        qEn: 'Is ACD refundable when I surrender or transfer my electricity meter?',
        qHi: 'क्या मीटर कटवाने या ट्रांसफर करने पर ACD वापस मिलती है?',
        aEn: 'Yes. When closing an account (Permanent Disconnection Order - PDCO), your entire accumulated ACD plus accrued interest is adjusted against final dues, and any remaining surplus is refunded to your bank account within 30 days.',
        aHi: 'हाँ। स्थायी रूप से कनेक्शन बंद कराने (PDCO) पर आपकी पूरी जमा राशि और उस पर अर्जित ब्याज अंतिम बिल में समायोजित हो जाता है और शेष राशि 30 दिनों के भीतर आपके बैंक खाते में वापस कर दी जाती है।'
      }
    ],
    relatedTool: {
      labelEn: 'Check Your Bill Sanity & Surcharges',
      labelHi: 'अपने बिल व सरचार्ज की जांच करें',
      path: '/bill-sanity-checker',
      descEn: 'Use our AI Bill Sanity Checker to detect wrong ACD calculations and hidden fees.',
      descHi: 'गलत ACD गणना और अतिरिक्त शुल्कों की पहचान के लिए बिल सैनिटी चेकर का उपयोग करें।'
    },
    officialReference: {
      circularNo: 'Sales Circular No. U-06/2023 & D-11/2023',
      authority: 'Haryana Electricity Regulatory Commission (HERC)'
    }
  },
  {
    slug: 'fsa-fuel-surcharge-adjustment-haryana-rate',
    titleEn: 'FSA Charges in Haryana Electricity Bill: Fuel Surcharge Adjustment Rate & Rules',
    titleHi: 'हरियाणा बिजली बिल में FSA चार्ज क्या है? प्रति यूनिट दर, HERC नियम व गणना',
    shortDescEn: 'Wondering why FSA is added to your UHBVN/DHBVN electricity bill? Understand Fuel Surcharge Adjustment calculation per unit, HERC approvals, and seasonal variations.',
    shortDescHi: 'क्या आप जानना चाहते हैं कि आपके बिजली बिल में FSA क्यों जोड़ा जाता है? जानें प्रति यूनिट ईंधन अधिभार (FSA) की दर, HERC की मंजूरी और बिल पर इसका प्रभाव।',
    category: 'billing',
    categoryLabelEn: 'Billing & Charges',
    categoryLabelHi: 'बिल व शुल्क',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '28,000+ monthly searches in Haryana',
      primaryKeywordEn: 'FSA charges per unit in Haryana electricity bill',
      primaryKeywordHi: 'बिजली बिल में FSA क्या है',
      secondaryKeywords: ['fuel surcharge adjustment uhbvn dhbvn', 'why fsa is charged in electricity bill', 'herc fsa notification 2024 2025', 'fsa calculation formula haryana']
    },
    sections: [
      {
        headingEn: '1. What is Fuel Surcharge Adjustment (FSA)?',
        headingHi: '1. फ्यूल सरचार्ज एडजस्टमेंट (FSA) क्या है?',
        contentEn: [
          'FSA stands for Fuel Surcharge Adjustment (also known as FPPPA in some states). Power generation thermal plants run on coal and natural gas, the prices of which fluctuate in the domestic and global markets.',
          'When the fuel procurement cost exceeds the base price determined by the commission during the annual tariff order, Discoms recover this additional cost from consumers as FSA.'
        ],
        contentHi: [
          'FSA का पूरा नाम फ्यूल सरचार्ज एडजस्टमेंट (Fuel Surcharge Adjustment) है। हरियाणा में बिजली पैदा करने वाले थर्मल पावर प्लांटों में कोयले और गैस की कीमतों में उतार-चढ़ाव होता रहता है।',
          'जब बिजली उत्पादन निगमों को तय दर से महंगा कोयला खरीदना पड़ता है, तो उस अतिरिक्त लागत की भरपाई उपभोक्ताओं से प्रति यूनिट FSA के रूप में की जाती है।'
        ]
      },
      {
        headingEn: '2. Current FSA Rates in Haryana (Per Unit)',
        headingHi: '2. हरियाणा में वर्तमान FSA दरें (प्रति यूनिट)',
        contentEn: [
          'In Haryana, FSA is determined periodically by HERC based on quarterly petitions submitted by UHBVN and DHBVN.',
          'Typically, domestic category consumers are charged between ₹0.37 to ₹0.47 per unit depending on the billing quarter and consumer category.',
          'FSA is levied ONLY on the actual energy units consumed, never on fixed charges.'
        ],
        contentHi: [
          'हरियाणा में FSA की दर HERC द्वारा UHBVN और DHBVN की त्रैमासिक याचिकाओं के आधार पर तय की जाती है।',
          'घरेलू उपभोक्ताओं के लिए यह दर आमतौर पर लगभग 37 पैसे से 47 पैसे प्रति यूनिट के बीच होती है।',
          'FSA केवल आपके द्वारा खर्च की गई वास्तविक यूनिटों पर लगता है, फिक्स्ड चार्ज पर कभी नहीं लगता।'
        ],
        bulletPointsEn: [
          'Formula: Total FSA = Actual Units Consumed × Current FSA Rate (₹/kWh).',
          'Example: If you consume 300 units in a billing cycle and FSA is ₹0.47/unit, your FSA component will be 300 × 0.47 = ₹141.00.',
          'State Electricity Duty (ED) and Municipal Tax (MT) are calculated separately.'
        ],
        bulletPointsHi: [
          'फार्मूला: कुल FSA = कुल खपत की गई यूनिटें × लागू FSA दर (रुपये/यूनिट)।',
          'उदाहरण: यदि आपने 300 यूनिट बिजली खर्च की और FSA दर ₹0.47 है, तो आपके बिल में 300 × 0.47 = ₹141.00 जुड़ेगा।',
          'बिजली शुल्क (ED) और म्यूनिसिपल टैक्स (MT) इसके ऊपर अलग से लगाए जाते हैं।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can Discoms change the FSA rate without HERC approval?',
        qHi: 'क्या बिजली निगम बिना HERC की मंजूरी के FSA बढ़ा सकता है?',
        aEn: 'No. Under Section 62 of The Electricity Act 2003, any revision in fuel surcharge must be audited, vetted, and approved by the Haryana Electricity Regulatory Commission (HERC) before being billed to consumers.',
        aHi: 'नहीं। इलेक्ट्रिसिटी एक्ट 2003 की धारा 62 के तहत ईंधन अधिभार में कोई भी बदलाव HERC द्वारा सत्यापित और स्वीकृत होने के बाद ही बिल में जोड़ा जा सकता है।'
      }
    ],
    relatedTool: {
      labelEn: 'Domestic Bill Calculator',
      labelHi: 'घरेलू बिल कैलकुलेटर',
      path: '/bill-calculator',
      descEn: 'Calculate your exact Haryana electricity bill with accurate slab rates, FSA, ED and rebates.',
      descHi: 'सटीक स्लैब दरों, FSA, ED और छूट के साथ अपने हरियाणा बिजली बिल की तुरंत गणना करें।'
    }
  },
  {
    slug: 'burnt-defective-meter-replacement-haryana',
    titleEn: 'Burnt or Defective Meter Replacement in Haryana: SDO Process, M&P Lab Testing & Fees',
    titleHi: 'हरियाणा में जला या खराब बिजली मीटर कैसे बदलवाएं: SDO प्रक्रिया, लैब टेस्टिंग व फीस',
    shortDescEn: 'Meter burnt due to high voltage, lightning or internal short circuit? Learn the official HERC procedure for meter replacement, M&P lab testing fees, average billing rules, and how to avoid wrongful penalty charges.',
    shortDescHi: 'हाई वोल्टेज या शॉर्ट सर्किट से मीटर जल गया या खराब हो गया? जानें मीटर बदलने की आधिकारिक प्रक्रिया, M&P लैब टेस्टिंग फीस, औसत बिलिंग के नियम और पेनल्टी से बचने के उपाय।',
    category: 'meter',
    categoryLabelEn: 'Meters & Devices',
    categoryLabelHi: 'मीटर व उपकरण',
    readTimeMinutes: 7,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '35,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Burnt meter replacement procedure UHBVN DHBVN',
      primaryKeywordHi: 'जला हुआ मीटर कैसे बदलवाएं हरियाणा',
      secondaryKeywords: ['meter testing charges haryana', 'burnt meter average billing rule herc', 'meter burning penalty uhbvn', 'burnt meter replacement application format']
    },
    sections: [
      {
        headingEn: '1. What to Do Immediately When Your Meter Burns or Stops',
        headingHi: '1. मीटर जलने या बंद होने पर तुरंत क्या करें?',
        contentEn: [
          'Call 1912 or your Circle Control Room immediately to register a formal breakdown docket.',
          'Take clear photographs and a short video showing the burnt meter, meter serial number, seal condition, and surrounding wiring. This is your primary defense against wrongful theft or tampering allegations by visiting linestaff.',
          'Never attempt to open, tamper with, or reconnect the bypass yourself. Direct supply bypass is classified as electricity theft under Section 135.'
        ],
        contentHi: [
          'तुरंत 24x7 हेल्पलाइन 1912 पर कॉल करके शिकायत दर्ज कराएं और शिकायत नंबर (डॉकट नंबर) नोट करें।',
          'जले हुए मीटर, मीटर के सीरियल नंबर, सील की स्थिति और आस-पास की तारों की स्पष्ट तस्वीरें और वीडियो लें। यह चेकिंग टीम द्वारा चोरी या छेड़छाड़ के झूठे आरोपों से बचाव का सबसे बड़ा सबूत है।',
          'कभी भी खुद से मीटर की तारें सीधे जोड़कर (बाईपास) बिजली चालू न करें। ऐसा करना धारा 135 के तहत बिजली चोरी का गंभीर अपराध माना जाता है।'
        ],
        callout: {
          type: 'warning',
          titleEn: 'Statutory Replacement Timeline',
          titleHi: 'मीटर बदलने की कानूनी समयसीमा',
          textEn: 'Under HERC Standards of Performance, a burnt meter in urban areas must be inspected and replaced within 3 days (rural areas within 5 days).',
          textHi: 'HERC नियमों के तहत शहरी क्षेत्रों में 3 दिन और ग्रामीण क्षेत्रों में 5 दिन के भीतर जला हुआ मीटर बदलना बिजली निगम का कानूनी दायित्व है।'
        }
      },
      {
        headingEn: '2. Who Pays for the Replacement Meter?',
        headingHi: '2. नए मीटर का खर्चा कौन देगा: उपभोक्ता या निगम?',
        contentEn: [
          'Burnt Due to System Fault (External High Voltage / Transformer Blast / Neutral Breakdown): The Discom replaces the meter completely FREE OF COST.',
          'Burnt Due to Consumer Fault (Overload / Internal House Short Circuit): The consumer must pay the cost of the replacement meter as prescribed in the Discom schedule of charges.',
          'Dispute Over Cause: If the linestaff claims it is consumer fault but you dispute it, the meter must be sealed in a transparent polybag in your presence and sent to the Discom Meter & Protection (M&P) Testing Laboratory.'
        ],
        contentHi: [
          'सिस्टम फाल्ट से जलने पर (बाहरी हाई वोल्टेज, ट्रांसफार्मर ब्लास्ट या न्यूट्रल उड़ने पर): निगम नया मीटर बिल्कुल मुफ्त (FREE) लगाएगा।',
          'उपभोक्ता की लापरवाही से जलने पर (स्वीकृत लोड से अत्यधिक लोड चलाने या घर की आंतरिक वायरिंग में शॉर्ट सर्किट होने पर): उपभोक्ता को नए मीटर का सरकारी शुल्क जमा करना होगा।',
          'कारण पर विवाद होने पर: यदि लाइनमैन उपभोक्ता की गलती बताता है और आप सहमत नहीं हैं, तो मीटर को आपकी मौजूदगी में सील करके M&P (मीटर एवं सुरक्षा) लैब में टेस्टिंग के लिए भेजा जाएगा।'
        ]
      },
      {
        headingEn: '3. Billing During the Defective Period (Average Billing Rule)',
        headingHi: '3. मीटर खराब रहने के दौरान बिल कैसे बनता है (औसत बिलिंग नियम)?',
        contentEn: [
          'Under HERC Regulation 6.9, during the period the meter remains burnt or defective, the consumer is billed based on the average consumption of the corresponding billing cycles of the preceding year.',
          'If preceding year data is unavailable, the average of the immediately following 3 cycles after new meter installation is used to adjust the account.'
        ],
        contentHi: [
          'HERC विनियमन 6.9 के तहत जब तक मीटर खराब या जला रहता है, तब तक उपभोक्ता का बिल पिछले वर्ष की समान अवधि (उसी मौसम के महीनों) की औसत खपत के आधार पर बनाया जाता है।',
          'यदि पिछले वर्ष का रिकॉर्ड नहीं है, तो नया मीटर लगने के बाद के अगले 3 बिलों की औसत खपत निकालकर पुराने औसत बिल को ठीक (एडजस्ट) किया जाता है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can the Discom slap a penalty without M&P Lab report?',
        qHi: 'क्या बिना लैब रिपोर्ट के निगम पेनल्टी लगा सकता है?',
        aEn: 'No. HERC explicitly bars field officers from charging meter burning penalties without an official technical report from an accredited Meter & Protection (M&P) Laboratory verifying internal cause of failure.',
        aHi: 'कदापि नहीं। HERC के नियमों के अनुसार जब तक अधिकृत M&P लैब से आंतरिक खराबी की तकनीकी रिपोर्ट न आ जाए, तब तक फील्ड स्टाफ कोई भी जुर्माना नहीं लगा सकता।'
      }
    ],
    relatedTool: {
      labelEn: 'Generate SDO Burnt Meter Notice',
      labelHi: 'जले मीटर हेतु SDO प्रार्थना पत्र बनाएं',
      path: '/complaint-generator',
      descEn: 'Generate a legally formatted complaint notice to the SDO for meter replacement.',
      descHi: 'मीटर बदलवाने हेतु कानूनी रूप से वैध प्रार्थना पत्र तुरंत तैयार करें।'
    }
  },
  {
    slug: 'change-name-in-electricity-bill-haryana-online',
    titleEn: 'How to Change Name in Electricity Bill Haryana Online (UHBVN & DHBVN Name Transfer)',
    titleHi: 'हरियाणा में बिजली बिल पर नाम कैसे बदलें (UHBVN व DHBVN ऑनलाइन नाम ट्रांसफर)',
    shortDescEn: 'Bought a property or inherited ancestral home in Haryana? Step-by-step guide on documents needed, online portal application, NOC format, fees, and timelines for meter name mutation.',
    shortDescHi: 'हरियाणा में नया मकान खरीदा है या पैतृक संपत्ति मिली है? जानें आवश्यक दस्तावेज, ऑनलाइन आवेदन प्रक्रिया, एनओसी प्रारूप, सरकारी फीस और नाम बदलने की समयसीमा।',
    category: 'connections',
    categoryLabelEn: 'Connections & Transfers',
    categoryLabelHi: 'कनेक्शन व ट्रांसफर',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '42,000+ monthly searches in Haryana',
      primaryKeywordEn: 'How to change name in electricity bill Haryana online',
      primaryKeywordHi: 'बिजली मीटर में नाम कैसे बदलें',
      secondaryKeywords: ['documents required for meter name transfer uhbvn', 'dhbvn meter name change online application', 'noc for electricity connection haryana', 'transfer meter to legal heir haryana']
    },
    sections: [
      {
        headingEn: '1. Why Name Transfer is Legally Important',
        headingHi: '1. बिजली बिल पर नाम ट्रांसफर कराना कानूनी रूप से क्यों जरूरी है?',
        contentEn: [
          'Under the Electricity Act 2003, the registered consumer is personally liable for all electricity dues, theft penalties, or litigation.',
          'Having your electricity bill in your own name is recognized as primary proof of address and residence for bank loans, passport, voter ID, and registry verification.'
        ],
        contentHi: [
          'इलेक्ट्रिसिटी एक्ट 2003 के तहत पंजीकृत उपभोक्ता ही सभी बकायों, मुकदमों या पेनल्टी के लिए कानूनी रूप से जिम्मेदार होता है।',
          'आपके अपने नाम पर बिजली बिल होना बैंक लोन, पासपोर्ट, वोटर कार्ड और रजिस्ट्री के सत्यापन के लिए सबसे मजबूत वैध निवास प्रमाण (Address Proof) माना जाता है।'
        ]
      },
      {
        headingEn: '2. Documents Required for Meter Name Transfer',
        headingHi: '2. बिजली बिल पर नाम बदलने के लिए जरूरी दस्तावेज',
        contentEn: [
          'Proof of Ownership: Registered Sale Deed (Registry), Allotment Letter (HSVP/HUDA/DTP), Conveyance Deed, or Will/Succession Certificate.',
          'Identity & Address Proof: Aadhaar Card and PAN Card of the new applicant.',
          'Latest Paid Electricity Bill: Showing zero arrears.',
          'NOC or Indemnity Bond: Consent letter from previous owner, or legal Indemnity Bond on non-judicial stamp paper if previous owner is untraceable or deceased.'
        ],
        contentHi: [
          'मालिकाना हक का प्रमाण: रजिस्टर्ड सेल डीड (रजिस्ट्री), अलॉटमेंट लेटर (HSVP/हुडा), कन्वेंस डीड या वसीयत/उत्तराधिकार प्रमाण पत्र।',
          'पहचान व निवास प्रमाण: नए आवेदक का आधार कार्ड और पैन कार्ड।',
          'नवीनतम बिजली बिल: जिसमें कोई पिछला बकाया न हो (शून्य बकाया)।',
          'एनओसी या क्षतिपूर्ति बांड: पुराने मालिक से अनापत्ति प्रमाण पत्र (NOC), अथवा पुराने मालिक की अनुपस्थिति/मृत्यु पर स्टाम्प पेपर पर क्षतिपूर्ति बांड (Indemnity Bond)।'
        ],
        bulletPointsEn: [
          'In case of legal heirs (death of parent): Death Certificate + Family Id (Parivar Pehchan Patra) + Self-declaration of other legal heirs.',
          'Processing Fee: ₹100 to ₹250 depending on load capacity.'
        ],
        bulletPointsHi: [
          'पिता/माता के निधन पर कानूनी वारिस के लिए: मृत्यु प्रमाण पत्र + परिवार पहचान पत्र (PPP) + अन्य भाई-बहनों का सहमति पत्र।',
          'प्रोसेसिंग फीस: स्वीकृत लोड के आधार पर ₹100 से ₹250 मात्र।'
        ]
      },
      {
        headingEn: '3. Step-by-Step Online Application Process',
        headingHi: '3. ऑनलाइन आवेदन करने की पूरी प्रक्रिया (Step-by-Step)',
        contentEn: [
          'Step 1: Visit the official discom portal (uhbvn.org.in or dhbvn.org.in) and navigate to "New Connection / Service Requests".',
          'Step 2: Select "Change of Name / Mutation of Connection" and enter your 10-digit Account Number.',
          'Step 3: Upload scanned PDFs of ownership deed, Aadhaar, and indemnity bond.',
          'Step 4: Pay the nominal processing fee online and note down the Application Tracking Number.',
          'Step 5: The field Junior Engineer (JE) conducts verification within 7 working days, after which your name reflects in the next billing cycle.'
        ],
        contentHi: [
          'स्टेप 1: आधिकारिक डिस्कॉम पोर्टल (uhbvn.org.in या dhbvn.org.in) पर जाएं और "New Connection / Services" पर क्लिक करें।',
          'स्टेप 2: "Change of Name / Mutation of Connection" विकल्प चुनें और अपना 10 अंकों का खाता नंबर डालें।',
          'स्टेप 3: अपनी रजिस्ट्री, आधार कार्ड और सहमति पत्र/बांड की स्कैन कॉपी अपलोड करें।',
          'स्टेप 4: ऑनलाइन सरकारी फीस भरें और एप्लीकेशन ट्रैकिंग नंबर सुरक्षित रख लें।',
          'स्टेप 5: 7 कार्यदिवसों के भीतर जेई (JE) सत्यापन करेगा और अगले बिल से आपका नाम स्वतः प्रिंट होकर आएगा।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'What happens to the existing security deposit (ACD) during name transfer?',
        qHi: 'नाम बदलने पर पुराने मालिक की जमा सिक्योरिटी (ACD) का क्या होता है?',
        aEn: 'If the previous owner signed the NOC transferring the security deposit, it gets transferred to the new owner without paying fresh ACD. If no NOC is provided, the new owner must pay fresh ACD security.',
        aHi: 'यदि पुराने मालिक ने एनओसी में सिक्योरिटी ट्रांसफर पर हस्ताक्षर कर दिए हैं, तो पुरानी सिक्योरिटी नए मालिक के नाम जुड़ जाती है। यदि एनओसी नहीं है, तो नए मालिक को नया सिक्योरिटी डिपॉजिट देना होगा।'
      }
    ],
    relatedTool: {
      labelEn: 'Interactive Name Transfer Guide',
      labelHi: 'नाम ट्रांसफर गाइड व फॉर्म',
      path: '/name-transfer',
      descEn: 'Download required NOC affidavit templates and step-by-step guidance.',
      descHi: 'एनओसी एफिडेविट प्रारूप और चरणबद्ध सहायता प्राप्त करें।'
    }
  },
  {
    slug: 'increase-sanctioned-load-online-haryana',
    titleEn: 'How to Increase Electricity Sanctioned Load in Haryana Online (Avoid MDI Penalties)',
    titleHi: 'हरियाणा में बिजली लोड कैसे बढ़ाएं: ऑनलाइन आवेदन, फीस व MDI पेनल्टी से बचाव',
    shortDescEn: 'Installed new air conditioners or heavy appliances? Learn how to calculate connected load, apply for load enhancement online in UHBVN/DHBVN, and save heavy Maximum Demand Indicator penalties.',
    shortDescHi: 'घर में नए एसी या उपकरण लगाए हैं? जानें कुल कनेक्टेड लोड निकालने का तरीका, ऑनलाइन लोड बढ़ाने की फीस और भारी MDI पेनल्टी से बचने के नियम।',
    category: 'connections',
    categoryLabelEn: 'Connections & Transfers',
    categoryLabelHi: 'कनेक्शन व ट्रांसफर',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '38,000+ monthly searches in Haryana',
      primaryKeywordEn: 'How to increase electricity load in Haryana online',
      primaryKeywordHi: 'बिजली का लोड कैसे बढ़ाएं हरियाणा',
      secondaryKeywords: ['uhbvn load extension charges per kw', 'dhbvn load enhancement online application', 'mdi penalty domestic connection haryana', 'sanctioned load vs connected load']
    },
    sections: [
      {
        headingEn: '1. Why You Must Not Exceed Sanctioned Load (MDI Penalty)',
        headingHi: '1. स्वीकृत लोड से अधिक बिजली क्यों नहीं चलानी चाहिए (MDI पेनल्टी)?',
        contentEn: [
          'Modern electronic and smart meters record your peak power draw every 30 minutes using the Maximum Demand Indicator (MDI).',
          'If your peak demand exceeds your sanctioned load (e.g., drawing 4.2 kW on a 2 kW sanctioned connection), the Discom automatically levies an MDI penalty on every excess kW in that bill.',
          'Consistently exceeding sanctioned load can also burn your service cable or cause local distribution transformer breakdowns.'
        ],
        contentHi: [
          'आजकल के इलेक्ट्रॉनिक और स्मार्ट मीटर हर 30 मिनट में आपके घर द्वारा खींचे गए अधिकतम लोड को MDI (Maximum Demand Indicator) में रिकॉर्ड करते हैं।',
          'यदि आपका वास्तविक लोड स्वीकृत लोड से अधिक हो जाता है (जैसे 2 किलोवाट के कनेक्शन पर 4.2 किलोवाट चलना), तो सॉफ्टवेयर स्वतः अतिरिक्त लोड पर भारी पेनल्टी लगा देता है।',
          'लगातार ओवरलोड चलाने से सर्विस केबल जल सकती है और मोहल्ले का ट्रांसफार्मर भी फुंक सकता है।'
        ]
      },
      {
        headingEn: '2. Standard Government Fee for Load Extension in Haryana',
        headingHi: '2. हरियाणा में लोड बढ़ाने का सरकारी शुल्क',
        contentEn: [
          'Security Deposit (ACD): Domestic consumers pay ₹500 to ₹750 per additional kW depending on supply type.',
          'Service Connection Charges: Nominal processing fee per kW.',
          'Meter Change Rule: If your load increases beyond 5 kW, you must upgrade from Single Phase to Three Phase supply, requiring a three-phase meter.'
        ],
        contentHi: [
          'सिक्योरिटी डिपॉजिट (ACD): घरेलू उपभोक्ताओं के लिए प्रति अतिरिक्त किलोवाट लगभग ₹500 से ₹750 की सुरक्षा राशि लगती है।',
          'सर्विस कनेक्शन चार्ज: प्रति किलोवाट सामान्य सरकारी प्रोसेसिंग चार्ज।',
          'सिंगल से थ्री-फेज का नियम: यदि आपका कुल लोड 5 किलोवाट से अधिक हो जाता है, तो आपको सिंगल फेज से थ्री-फेज में अपग्रेड कराना होगा जिसके लिए थ्री-फेज मीटर लगता है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can I apply for load extension completely online without visiting SDO office?',
        qHi: 'क्या बिना बिजली दफ्तर जाए ऑनलाइन लोड बढ़ाया जा सकता है?',
        aEn: 'Yes! Both UHBVN and DHBVN allow 100% online load extension up to 20 kW on their web portals under the "Load Extension" citizen service menu.',
        aHi: 'हाँ! UHBVN और DHBVN दोनों के पोर्टल पर 20 किलोवाट तक का लोड घर बैठे बिना किसी दफ्तर जाए 100% ऑनलाइन बढ़ाया जा सकता है।'
      }
    ],
    relatedTool: {
      labelEn: 'Appliance Load Calculator',
      labelHi: 'घरेलू लोड कैलकुलेटर',
      path: '/load-calculator',
      descEn: 'Calculate the total wattage of your ACs, geysers and appliances to determine optimal load.',
      descHi: 'अपने एसी, गीजर व उपकरणों का कुल लोड जोड़कर सही स्वीकृत लोड जानें।'
    }
  },
  {
    slug: 'smart-meter-5-percent-rebate-haryana-rules',
    titleEn: 'Haryana Smart Meter 5% Rebate Scheme: Prepaid Rules, Balance Check & Speed Complaints',
    titleHi: 'हरियाणा स्मार्ट मीटर 5% छूट योजना: प्रीपेड रीचार्ज, बैलेंस व तेज चलने की शिकायत',
    shortDescEn: 'Has a smart meter been installed at your home? Learn how to activate the 5% online prepayment rebate, monitor daily consumption, and statutory procedures if you suspect the meter is running fast.',
    shortDescHi: 'क्या आपके घर स्मार्ट मीटर लग चुका है? जानें 5% बिल छूट पाने का नियम, दैनिक उपभोग ट्रैक करना और मीटर तेज चलने पर कानूनी जांच कराने की प्रक्रिया।',
    category: 'meter',
    categoryLabelEn: 'Meters & Devices',
    categoryLabelHi: 'मीटर व उपकरण',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '30,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Smart meter 5% rebate rule Haryana',
      primaryKeywordHi: 'हरियाणा स्मार्ट मीटर 5% छूट का नियम',
      secondaryKeywords: ['smart meter fast running complaint uhbvn dhbvn', 'how to recharge smart meter haryana', 'prepaid electricity meter rebate haryana', 'smart meter check balance app']
    },
    sections: [
      {
        headingEn: '1. The 5% Electricity Rebate: How It Works',
        headingHi: '1. 5% बिजली छूट: यह वास्तव में कैसे काम करती है?',
        contentEn: [
          'Under HERC tariff orders, consumers with smart meters who opt for the "Prepaid Mode" are entitled to an upfront 5% rebate on the Energy Charges component of their electricity bill.',
          'To qualify, you must maintain a credit balance in your electricity wallet and recharge before your balance turns negative.'
        ],
        contentHi: [
          'HERC के टैरिफ आदेशानुसार, जिन उपभोक्ताओं के यहाँ स्मार्ट मीटर लगे हैं और वे "प्रीपेड मोड" चुनते हैं, उन्हें उनके बिजली बिल के एनर्जी चार्ज (यूनिट खर्च) पर 5% की सीधी छूट मिलती है।',
          'यह छूट पाने के लिए आपको अपने बिजली वॉलेट में रीचार्ज रखना होता है ताकि बैलेंस शून्य या माइनस में न जाए।'
        ]
      },
      {
        headingEn: '2. Suspect Your Smart Meter is Running Too Fast?',
        headingHi: '2. क्या आपको लगता है कि स्मार्ट मीटर बहुत तेज भाग रहा है?',
        contentEn: [
          'Why Smart Meters Show Higher Readings Initially: Old mechanical or basic electronic meters often developed gear friction or low-power lag, failing to register small standby loads (mobile chargers, Wi-Fi routers, TV standby, refrigerator cycling). Smart meters record micro-wattage accurately.',
          'Statutory Check Meter Option: If you believe the meter is genuinely defective or over-registering, you can deposit the prescribed fee (approx ₹150 for single phase) and demand the installation of a parallel "Check Meter" at your premises for 15 days.'
        ],
        contentHi: [
          'शुरुआत में स्मार्ट मीटर में ज्यादा रीडिंग क्यों दिखती है: पुराने इलेक्ट्रो-मैकेनिकल मीटर समय के साथ धीमे हो जाते थे और छोटे उपकरणों (चार्जर, वाई-फाई, स्टैंडबाय टीवी) की खपत दर्ज नहीं कर पाते थे। स्मार्ट मीटर 1 वॉट की खपत भी तुरंत गिनता है।',
          'चेक मीटर लगाने का कानूनी अधिकार: यदि आपको पक्का यकीन है कि मीटर वास्तव में तेज चल रहा है, तो आप सरकारी फीस (लगभग ₹150) जमा करके अपने घर पर समानांतर "चेक मीटर" (Check Meter) लगाने की मांग कर सकते हैं।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Does my power cut off automatically if smart meter balance reaches zero at night?',
        qHi: 'क्या रात में बैलेंस शून्य होने पर स्मार्ट मीटर तुरंत लाइट काट देता है?',
        aEn: 'No. HERC regulations mandate a "Friendly Credit / Non-Disconnection Period" during nights (usually 6 PM to 10 AM), Sundays, and gazetted holidays. Power is not disconnected during these hours.',
        aHi: 'नहीं! HERC के नियमों के तहत रात के समय (शाम 6 बजे से सुबह 10 बजे), रविवार और सरकारी छुट्टियों के दौरान "फ्रेंडली क्रेडिट पीरियड" रहता है, जिसमें लाइट स्वतः नहीं काटी जाती।'
      }
    ],
    relatedTool: {
      labelEn: 'Smart Meter Guide & Portal',
      labelHi: 'स्मार्ट मीटर गाइड व पोर्टल',
      path: '/smart-meter',
      descEn: 'Learn how to read smart meter push buttons and claim the 5% rebate.',
      descHi: 'स्मार्ट मीटर के बटन कोड पढ़ना सीखें और 5% छूट का लाभ उठाएं।'
    }
  },
  {
    slug: 'pm-surya-ghar-solar-subsidy-haryana',
    titleEn: 'PM Surya Ghar Muft Bijli Yojana Haryana: Subsidy Calculation, Net Metering & Price 2025',
    titleHi: 'पीएम सूर्य घर मुफ्त बिजली योजना हरियाणा: 78,000 सब्सिडी, सोलर नेट मीटरिंग व लागत 2025',
    shortDescEn: 'Looking to slash your electricity bill to zero with rooftop solar? Complete breakdown of Central Government subsidy up to ₹78,000, Haryana State top-up, net metering approval in UHBVN/DHBVN, and payback period.',
    shortDescHi: 'क्या आप रूफटॉप सोलर लगाकर बिजली का बिल शून्य करना चाहते हैं? जानें केंद्र सरकार की ₹78,000 तक की सब्सिडी, हरियाणा राज्य अतिरिक्त टॉप-अप, नेट मीटरिंग नियम और लागत रिकवरी का पूरा गणित।',
    category: 'schemes',
    categoryLabelEn: 'Solar & Schemes',
    categoryLabelHi: 'सोलर व सरकारी योजनाएं',
    readTimeMinutes: 7,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '65,000+ monthly searches in Haryana',
      primaryKeywordEn: 'PM Surya Ghar subsidy Haryana calculation',
      primaryKeywordHi: 'पीएम सूर्य घर मुफ्त बिजली योजना हरियाणा',
      secondaryKeywords: ['3kw solar system price after subsidy haryana', 'net meter application uhbvn dhbvn', 'free electricity 300 units haryana', 'haryana state solar top up subsidy']
    },
    sections: [
      {
        headingEn: '1. Subsidy Slabs Under PM Surya Ghar Yojana',
        headingHi: '1. पीएम सूर्य घर योजना के तहत मिलने वाली सब्सिडी स्लैब',
        contentEn: [
          '1 kW Rooftop Solar System: ₹30,000 Central Subsidy (Ideal for small households consuming up to 150 units/month).',
          '2 kW Rooftop Solar System: ₹60,000 Central Subsidy (Ideal for homes consuming 150 to 300 units/month).',
          '3 kW or Higher System: ₹78,000 Flat Central Subsidy (Ideal for homes running air conditioners).',
          'State Top-up: Under the Haryana Solar Policy, low-income households (verified under Parivar Pehchan Patra) receive additional state incentives.'
        ],
        contentHi: [
          '1 किलोवाट सोलर सिस्टम: ₹30,000 केंद्रीय सब्सिडी (150 यूनिट मासिक खपत वाले छोटे परिवारों के लिए)।',
          '2 किलोवाट सोलर सिस्टम: ₹60,000 केंद्रीय सब्सिडी (150 से 300 यूनिट मासिक खपत वाले घरों के लिए)।',
          '3 किलोवाट या इससे बड़ा सिस्टम: ₹78,000 एकमुश्त केंद्रीय सब्सिडी (एसी व भारी उपकरण चलाने वाले घरों के लिए)।',
          'हरियाणा राज्य टॉप-अप: परिवार पहचान पत्र (PPP) में सत्यापित कम आय वाले परिवारों को हरियाणा सरकार अतिरिक्त सहायता देती है।'
        ]
      },
      {
        headingEn: '2. Net Metering Approval in UHBVN and DHBVN',
        headingHi: '2. UHBVN और DHBVN में सोलर नेट मीटरिंग की प्रक्रिया',
        contentEn: [
          'What is a Net Meter: A bidirectional meter that records both the electricity you draw from the grid and the excess solar electricity you export to the grid.',
          'Banking of Units: Excess units exported during sunny days are banked with the Discom and adjusted against your night or winter consumption in subsequent bills.',
          'Application: Apply via the National Portal for Rooftop Solar (pmsuryaghar.gov.in) and select UHBVN or DHBVN as your Discom.'
        ],
        contentHi: [
          'नेट मीटर क्या होता है: यह एक द्वि-मार्गी (बाय-डायरेक्शनल) मीटर है जो ग्रिड से ली गई बिजली और आपके सोलर द्वारा ग्रिड में भेजी गई अतिरिक्त बिजली दोनों को अलग-अलग रिकॉर्ड करता है।',
          'यूनिटों की बैंकिंग: दिन के समय ग्रिड में भेजी गई अतिरिक्त यूनिटें निगम के पास जमा (बैंक) रहती हैं और रात या सर्दियों के बिल में स्वतः घटाई जाती हैं।',
          'आवेदन: राष्ट्रीय रूफटॉप सोलर पोर्टल (pmsuryaghar.gov.in) पर आवेदन करें और अपनी डिस्कॉम (UHBVN या DHBVN) का चयन करें।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can I install a solar system bigger than my sanctioned electricity load?',
        qHi: 'क्या मैं अपने स्वीकृत बिजली लोड से बड़ा सोलर सिस्टम लगा सकता हूँ?',
        aEn: 'No. HERC regulations restrict rooftop solar capacity to a maximum of 100% of your sanctioned connected load. If you want a 5 kW solar system, your electricity connection load must first be enhanced to at least 5 kW.',
        aHi: 'नहीं। HERC के नियमों के अनुसार सोलर सिस्टम की क्षमता आपके स्वीकृत लोड के 100% से अधिक नहीं हो सकती। यदि 5 किलोवाट सोलर लगाना है, तो पहले बिजली कनेक्शन का लोड 5 किलोवाट करवाना होगा।'
      }
    ],
    relatedTool: {
      labelEn: 'Solar Savings & Subsidy Calculator',
      labelHi: 'सोलर बचत व सब्सिडी कैलकुलेटर',
      path: '/solar-calculator',
      descEn: 'Calculate exact rooftop solar cost, Central subsidy, and monthly savings.',
      descHi: 'अपनी छत के आकार और बिल के अनुसार कुल सब्सिडी व मासिक बचत की गणना करें।'
    }
  },
  {
    slug: 'wrong-meter-reading-d-code-correction',
    titleEn: 'How to Correct Wrong Meter Reading & D-Code (Door Lock) in Haryana Electricity Bill',
    titleHi: 'बिजली बिल में गलत मीटर रीडिंग व D कोड (ताला बंद) कैसे ठीक कराएं',
    shortDescEn: 'Billed on arbitrary average or marked D-Code while your house was open? Learn how door closed (D-Code) average billing works, how to submit real readings, and how to get your bill revised within 7 days.',
    shortDescHi: 'घर खुला होने पर भी मीटर रीडर ने ताला बंद (D-Code) दिखाकर मनमाना बिल बना दिया? जानें D-कोड बिलिंग के नियम, वास्तविक रीडिंग दर्ज कराने की प्रक्रिया और 7 दिन में बिल ठीक कराने का तरीका।',
    category: 'billing',
    categoryLabelEn: 'Billing & Charges',
    categoryLabelHi: 'बिल व शुल्क',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '26,000+ monthly searches in Haryana',
      primaryKeywordEn: 'What is D code in Haryana electricity bill',
      primaryKeywordHi: 'बिजली बिल में D कोड का क्या मतलब है',
      secondaryKeywords: ['wrong meter reading complaint sdo uhbvn', 'door lock average billing haryana', 'how to revise electricity bill dhbvn', 'herc regulation average bill correction']
    },
    sections: [
      {
        headingEn: '1. What Does D-Code (Premises Locked) Mean?',
        headingHi: '1. D-कोड (परिसर बंद/ताला लगा) का क्या अर्थ है?',
        contentEn: [
          'When the meter reader visits your premises and cannot access the meter, they mark status "D" (Door Locked/Premises Inaccessible).',
          'When D-code is marked, the billing system generates an estimated "Average Bill" based on previous months rather than actual consumption.',
          'Often, corrupt or negligent meter readers mark D-code while sitting at home without actually visiting your house, resulting in inflated slab-jumping bills.'
        ],
        contentHi: [
          'जब मीटर रीडर आपके घर आता है और मीटर तक नहीं पहुँच पाता, तो वह सिस्टम में "D" (Door Locked/ताला बंद) कोड दर्ज कर देता है।',
          'D-कोड लगने पर सॉफ्टवेयर वास्तविक रीडिंग के बजाय पिछले महीनों की औसत खपत का काल्पनिक (अनुमानित) बिल बनाकर भेज देता है।',
          'अक्सर लापरवाह मीटर रीडर घर आए बिना ही D-कोड दर्ज कर देते हैं, जिससे अगले बिल में दोहरी यूनिटें जुड़ने से उपभोक्ता का स्लैब बढ़ जाता है और भारी बिल आता है।'
        ]
      },
      {
        headingEn: '2. Step-by-Step Procedure to Get Bill Corrected',
        headingHi: '2. गलत बिल को ठीक कराने की चरणबद्ध प्रक्रिया',
        contentEn: [
          'Step 1: Take a clear photo of your meter showing the current Cumulative Reading (kWh), Date, and Meter Serial Number.',
          'Step 2: Submit a formal application to the local SDO office or apply online through the Discom "Bill Correction" portal.',
          'Step 3: The SDO is statutorily required under HERC standards to issue a revised "Audit Corrected Bill" within 7 working days.',
          'Step 4: You DO NOT need to pay late fee penalties while a genuine billing dispute is under scrutiny if an ad-hoc 50% deposit is made.'
        ],
        contentHi: [
          'स्टेप 1: अपने मीटर की स्पष्ट फोटो लें जिसमें वर्तमान रीडिंग (kWh), तारीख और मीटर का नंबर साफ दिखाई दे।',
          'स्टेप 2: स्थानीय SDO कार्यालय में प्रार्थना पत्र दें या डिस्कॉम पोर्टल पर ऑनलाइन "Bill Correction" में आवेदन करें।',
          'स्टेप 3: HERC मानकों के तहत SDO को 7 कार्यदिवसों के भीतर संशोधित (ठीक किया हुआ) बिल जारी करना कानूनी रूप से अनिवार्य है।',
          'स्टेप 4: विवाद के निवारण तक उपभोक्ता को अनंतिम औसत का 50% जमा कराने पर बिजली काटने या लेट फीस लगाने पर रोक रहती है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can I send the meter reading myself to avoid D-code in future?',
        qHi: 'क्या भविष्य में D-कोड से बचने के लिए मैं खुद रीडिंग भेज सकता हूँ?',
        aEn: 'Yes! Use the Discom Trust Billing feature on the official UHBVN or DHBVN consumer portal. You can upload a meter photograph and generate your genuine bill yourself.',
        aHi: 'हाँ! आधिकारिक पोर्टल पर "ट्रस्ट बिलिंग" (Trust Billing) सुविधा का उपयोग करके आप खुद मीटर की फोटो अपलोड कर सकते हैं और सही बिल बनवा सकते हैं।'
      }
    ],
    relatedTool: {
      labelEn: 'AI Bill Sanity Checker',
      labelHi: 'एआई बिल सैनिटी चेकर',
      path: '/bill-sanity-checker',
      descEn: 'Upload your bill data to instantly verify if you were overcharged due to D-code.',
      descHi: 'जांचें कि क्या आपको D-कोड या गलत रीडिंग के कारण अधिक बिल भेजा गया है।'
    }
  },
  {
    slug: 'trust-billing-send-meter-reading-self',
    titleEn: 'Trust Billing Haryana: How to Generate Your Own Electricity Bill Online (Self Meter Reading)',
    titleHi: 'ट्रस्ट बिलिंग हरियाणा: खुद मीटर रीडिंग भेजकर तुरंत सही बिल कैसे बनाएं',
    shortDescEn: 'Tired of meter readers not visiting or generating bogus bills? Complete citizen guide on Haryana Trust Billing scheme in UHBVN and DHBVN.',
    shortDescHi: 'मीटर रीडर के न आने या गलत बिल बनाने से परेशान हैं? जानें हरियाणा ट्रस्ट बिलिंग योजना के तहत खुद मीटर की फोटो भेजकर असली बिल बनाने का आसान तरीका।',
    category: 'billing',
    categoryLabelEn: 'Billing & Charges',
    categoryLabelHi: 'बिल व शुल्क',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '18,000+ monthly searches in Haryana',
      primaryKeywordEn: 'How to use Trust Billing in UHBVN',
      primaryKeywordHi: 'ट्रस्ट बिलिंग से खुद मीटर रीडिंग कैसे भेजें',
      secondaryKeywords: ['self meter reading haryana app', 'send meter reading online dhbvn', 'avoid wrong average electricity bill', 'trust billing dates haryana']
    },
    sections: [
      {
        headingEn: '1. What is the Trust Billing Scheme?',
        headingHi: '1. ट्रस्ट बिलिंग योजना क्या है?',
        contentEn: [
          'Trust Billing is a citizen-empowerment initiative launched by Haryana Discoms where consumers are trusted to record and submit their own electricity meter reading.',
          'It eliminates disputes arising from locked doors, unread meters, and arbitrary provisional estimates.'
        ],
        contentHi: [
          'ट्रस्ट बिलिंग हरियाणा बिजली निगमों द्वारा शुरू की गई एक नागरिक-सशक्तिकरण योजना है जिसमें उपभोक्ता पर भरोसा करते हुए उसे खुद अपनी मीटर रीडिंग भेजने की अनुमति दी गई है।',
          'इससे ताला बंद (D-कोड), मीटर रीडर के न आने और मनमाने औसत बिलिंग के विवाद पूरी तरह खत्म हो जाते हैं।'
        ]
      },
      {
        headingEn: '2. Steps to Submit Your Self-Reading',
        headingHi: '2. खुद मीटर रीडिंग भेजने के चरण',
        contentEn: [
          'Step 1: Note your billing cycle window (usually 5 to 7 days before your regular bill generation date).',
          'Step 2: Log into your Discom consumer portal or use the official mobile app.',
          'Step 3: Click "Trust Billing / Self Meter Reading" and enter your 10-digit Account Number.',
          'Step 4: Take a clear photo of your meter screen showing current kWh reading and upload it.',
          'Step 5: Your authentic electricity bill is calculated instantly with proper slab benefits and sent to your mobile via SMS.'
        ],
        contentHi: [
          'स्टेप 1: अपना बिलिंग विंडो चेक करें (आमतौर पर बिल बनने की तारीख से 5 से 7 दिन पहले)।',
          'स्टेप 2: आधिकारिक डिस्कॉम पोर्टल या मोबाइल ऐप में लॉगिन करें।',
          'स्टेप 3: "Trust Billing / Self Meter Reading" पर क्लिक करके अपना 10 अंकों का खाता नंबर डालें।',
          'स्टेप 4: मीटर की स्क्रीन पर दिख रही कुल kWh यूनिटों की फोटो खींचकर अपलोड करें।',
          'स्टेप 5: आपका बिल्कुल सही बिल तुरंत बनकर आपके मोबाइल पर एसएमएस द्वारा आ जाता है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'What if someone enters a fake lower reading during Trust Billing?',
        qHi: 'यदि कोई ट्रस्ट बिलिंग में जानबूझकर कम रीडिंग डाल दे तो क्या होगा?',
        aEn: 'The Discom conducts periodic physical audits. If the photo uploaded does not match the entered value or subsequent audit finds deliberate under-reporting, a penalty equal to twice the difference is levied under HERC regulations.',
        aHi: 'निगम समय-समय पर भौतिक सत्यापन करता है। यदि फोटो में रीडिंग अलग पाई गई या जानबूझकर कम रीडिंग डाली गई, तो HERC नियमों के तहत अंतर की राशि पर दोगुना जुर्माना लगाया जाता है।'
      }
    ],
    relatedTool: {
      labelEn: 'Trust Billing Walkthrough',
      labelHi: 'ट्रस्ट बिलिंग निर्देशिका',
      path: '/trust-billing',
      descEn: 'Check eligibility, photo guidelines, and direct official portal submission links.',
      descHi: 'पात्रता, फोटो खींचने के नियम और आधिकारिक पोर्टल लिंक देखें।'
    }
  },
  {
    slug: 'new-electricity-connection-charges-haryana',
    titleEn: 'New Electricity Connection Charges in Haryana 2025: Rates Per KW, Security & Service Cost',
    titleHi: 'हरियाणा में नया बिजली कनेक्शन लेने का कुल खर्चा: 1KW से 5KW तक पूरी लिस्ट 2025',
    shortDescEn: 'Planning to take a new domestic or commercial power connection in Haryana? Transparent breakdown of Application Fees, Security Deposit, Line Development, and Meter Charges.',
    shortDescHi: 'हरियाणा में नया घरेलू या व्यावसायिक बिजली कनेक्शन लेना चाहते हैं? जानें आवेदन शुल्क, सिक्योरिटी डिपॉजिट, लाइन विकास शुल्क और मीटर की पूरी सरकारी फीस।',
    category: 'connections',
    categoryLabelEn: 'Connections & Transfers',
    categoryLabelHi: 'कनेक्शन व ट्रांसफर',
    readTimeMinutes: 7,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '50,000+ monthly searches in Haryana',
      primaryKeywordEn: 'New electricity connection charges in Haryana 2025',
      primaryKeywordHi: 'नया बिजली कनेक्शन लेने का खर्चा हरियाणा',
      secondaryKeywords: ['domestic connection fees per kw uhbvn', 'security deposit per kw haryana dhbvn', 'line development charges haryana', 'documents for new meter connection haryana']
    },
    sections: [
      {
        headingEn: '1. Official Cost Components for a New Connection',
        headingHi: '1. नए कनेक्शन के मुख्य सरकारी खर्चे',
        contentEn: [
          '1. Application Processing Fee: ₹50 to ₹100 nominal fee.',
          '2. Advance Consumption Deposit (ACD Security): ₹750 to ₹1,000 per kW for domestic connections.',
          '3. Service Connection Charges (SCC): Fixed standard cost per meter based on whether supply is single phase or three phase.',
          '4. Meter Security / Meter Cost: Applicable if obtaining the meter from the Discom (free/nominal under prepaid smart meter deployment schemes).'
        ],
        contentHi: [
          '1. आवेदन प्रोसेसिंग फीस: ₹50 से ₹100 मात्र।',
          '2. सिक्योरिटी डिपॉजिट (ACD): घरेलू कनेक्शन के लिए लगभग ₹750 से ₹1,000 प्रति किलोवाट।',
          '3. सर्विस कनेक्शन चार्ज (SCC): सिंगल फेज या थ्री-फेज के आधार पर मानक सरकारी ढांचागत चार्ज।',
          '4. मीटर सिक्योरिटी / मीटर लागत: यदि मीटर निगम से लिया जाता है (स्मार्ट मीटर योजना में यह बहुत न्यूनतम या निःशुल्क होता है)।'
        ]
      },
      {
        headingEn: '2. Estimated Total Cost by Load Capacity (Domestic)',
        headingHi: '2. लोड के अनुसार कुल अनुमानित खर्चा (घरेलू)',
        contentEn: [
          '1 kW Connection (Small 1-2 Room House): Approx ₹1,800 to ₹2,500 total.',
          '2 kW Connection (Standard Household with Refrigerator/Coolers): Approx ₹3,000 to ₹3,800 total.',
          '5 kW Connection (Home with 2 ACs): Approx ₹6,500 to ₹8,000 total (Single Phase).',
          'Above 5 kW Connection (Three Phase Required): Approx ₹12,000 to ₹16,000 total including 3-phase infrastructure.'
        ],
        contentHi: [
          '1 किलोवाट कनेक्शन (छोटा 1-2 कमरे का घर): कुल लगभग ₹1,800 से ₹2,500।',
          '2 किलोवाट कनेक्शन (सामान्य घर - फ्रिज, कूलर, टीवी): कुल लगभग ₹3,000 से ₹3,800।',
          '5 किलोवाट कनेक्शन (2 एसी वाला घर): कुल लगभग ₹6,500 से ₹8,000 (सिंगल फेज)।',
          '5 किलोवाट से अधिक (थ्री-फेज अनिवार्य): थ्री-फेज ढांचे सहित कुल लगभग ₹12,000 से ₹16,000।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Within how many days must the Discom release a new connection?',
        qHi: 'आवेदन करने के कितने दिन में नया बिजली कनेक्शन मिलना चाहिए?',
        aEn: 'Under HERC Standards of Performance, where no network extension is required, a new domestic connection must be released within 7 days in urban areas and 10 days in rural areas. If delayed without valid cause, the applicant is entitled to compensation of ₹100 per day of delay.',
        aHi: 'HERC नियमों के तहत जहाँ नया खंभा नहीं लगाना है, वहाँ शहरी क्षेत्रों में 7 दिन और ग्रामीण क्षेत्रों में 10 दिन के भीतर कनेक्शन देना अनिवार्य है। बेवजह देरी होने पर उपभोक्ता को ₹100 प्रतिदिन हर्जाना पाने का अधिकार है।'
      }
    ],
    relatedTool: {
      labelEn: 'New Connection Fee Estimator',
      labelHi: 'नया कनेक्शन फीस कैलकुलेटर',
      path: '/new-connection',
      descEn: 'Calculate exact government fees, test report requirements, and online steps.',
      descHi: 'अपने लोड के अनुसार सटीक सरकारी फीस व टेस्ट रिपोर्ट की जानकारी लें।'
    }
  },
  {
    slug: 'haryana-tubewell-connection-policy-solar-pump',
    titleEn: 'Haryana Tubewell Electricity Connection Latest Policy & PM KUSUM Solar Pump Subsidy',
    titleHi: 'हरियाणा ट्यूबवेल बिजली कनेक्शन नीति व पीएम कुसुम सोलर पंप योजना (75% सब्सिडी)',
    shortDescEn: 'Farmer in Haryana waiting for a tubewell electricity connection? Learn latest state government guidelines, 5-star energy efficient motor requirements, pending applicant lists, and PM-KUSUM 75% solar subsidy.',
    shortDescHi: 'हरियाणा के किसान हैं और ट्यूबवेल कनेक्शन का इंतजार कर रहे हैं? जानें 5-स्टार मोटर की अनिवार्यता, पुरानी पेंडिंग लिस्ट की स्थिति और पीएम कुसुम योजना में 75% सब्सिडी पर सोलर पंप लेने का तरीका।',
    category: 'schemes',
    categoryLabelEn: 'Solar & Schemes',
    categoryLabelHi: 'सोलर व सरकारी योजनाएं',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '40,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Haryana tubewell electricity connection latest policy',
      primaryKeywordHi: 'हरियाणा ट्यूबवेल बिजली कनेक्शन नियम',
      secondaryKeywords: ['pm kusum solar pump haryana status', 'agricultural electricity tariff haryana uhbvn', 'tubewell connection release list', 'solar tubewell scheme saral haryana']
    },
    sections: [
      {
        headingEn: '1. Groundwater Slabs & Mandatory Solar Policy in Dark Zones',
        headingHi: '1. भूजल स्तर (डार्क जोन) और सोलर पंप की अनिवार्यता',
        contentEn: [
          'In notified over-exploited blocks (Dark Zones where water table is deeper than 100-150 feet), conventional grid-connected tubewell connections are heavily restricted.',
          'Farmers in these areas are given top priority to adopt standalone solar agriculture pumps under the PM-KUSUM Scheme.'
        ],
        contentHi: [
          'हरियाणा के जिन ब्लॉकों में भूजल स्तर बहुत नीचे चला गया है (डार्क जोन जहाँ पानी 100-150 फीट से गहरा है), वहाँ नए पारंपरिक बिजली ट्यूबवेल कनेक्शन पर कड़े प्रतिबंध हैं।',
          'ऐसे क्षेत्रों के किसानों को पीएम कुसुम (PM-KUSUM) योजना के तहत 75% तक सरकारी सब्सिडी पर सोलर कृषि पंप दिए जाते हैं।'
        ]
      },
      {
        headingEn: '2. PM-KUSUM Solar Agricultural Pump Subsidy (75%)',
        headingHi: '2. पीएम कुसुम योजना: 75% सब्सिडी पर सोलर पंप',
        contentEn: [
          'Cost Sharing: Central Government provides 30% subsidy, Haryana State Government provides 45% top-up subsidy, and the farmer pays only 25% of total pump cost.',
          'Capacities Available: 3 HP, 5 HP, 7.5 HP, and 10 HP Monoblock / Submersible DC/AC pumps.',
          'Application Portal: Apply online on the Haryana SARAL portal (saralharyana.gov.in) when the Department of New & Renewable Energy (HAREDA) opens seasonal application windows.'
        ],
        contentHi: [
          'खर्चे का बंटवारा: केंद्र सरकार 30% सब्सिडी देती है, हरियाणा सरकार 45% सब्सिडी देती है—किसान को मात्र 25% लागत वहन करनी होती है।',
          'उपलब्ध क्षमताएं: 3 एचपी, 5 एचपी, 7.5 एचपी और 10 एचपी मोनोब्लॉक व सबमर्सिबल सोलर पंप।',
          'आवेदन पोर्टल: हरेडा (HAREDA) द्वारा सरल पोर्टल (saralharyana.gov.in) पर आवेदन खिड़की खोले जाने पर ऑनलाइन आवेदन किया जा सकता है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'What is the electricity rate for existing agricultural tubewell connections in Haryana?',
        qHi: 'हरियाणा में मौजूदा खेती के ट्यूबवेल कनेक्शन पर बिजली का क्या रेट है?',
        aEn: 'Haryana offers heavily subsidized agricultural power at approximately 10 to 15 paise per unit (metered) or a fixed flat rate per BHP per month, subsidized by the State Government under AP subsidy.',
        aHi: 'हरियाणा में कृषि ट्यूबवेल की बिजली पर भारी सब्सिडी है, जो लगभग 10 से 15 पैसे प्रति यूनिट (मीटर वाले) या प्रति हॉर्सपावर बहुत नाममात्र फ्लैट दर पर दी जाती है।'
      }
    ],
    relatedTool: {
      labelEn: 'Solar Savings Calculator',
      labelHi: 'सोलर कैलकुलेटर',
      path: '/solar-calculator',
      descEn: 'Calculate your solar pump payback and daily power generation.',
      descHi: 'सोलर पंप की लागत और दैनिक बिजली उत्पादन का अनुमान लगाएं।'
    }
  },
  {
    slug: 'electricity-theft-section-135-settlement-penalties',
    titleEn: 'Electricity Theft Section 135 Notice in Haryana: Penalties & Legal Compounding Process',
    titleHi: 'धारा 135 बिजली चोरी नोटिस हरियाणा: पेनल्टी गणना, कंपाउंडिंग व कानूनी समाधान',
    shortDescEn: 'Received a Vigilance raid notice or checking sheet under Section 135 of Electricity Act 2003? Learn statutory penalty formulas, compounding of offenses, Special Courts, and legal remedies.',
    shortDescHi: 'विजिलेंस टीम ने धारा 135 के तहत बिजली चोरी का नोटिस या चेकिंग शीट थमा दी है? जानें सरकारी पेनल्टी निकालने का फार्मूला, कंपाउंडिंग फीस और स्पेशल कोर्ट में बचाव के कानूनी अधिकार।',
    category: 'legal',
    categoryLabelEn: 'Legal & Rights',
    categoryLabelHi: 'कानून व अधिकार',
    readTimeMinutes: 7,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '22,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Electricity theft penalty calculation Haryana',
      primaryKeywordHi: 'बिजली चोरी पर जुर्माना कैसे तय होता है',
      secondaryKeywords: ['section 135 electricity act settlement haryana', 'compounding fee for bijli chori uhbvn', 'vigilance raid checking sheet objection', 'special electricity court haryana']
    },
    sections: [
      {
        headingEn: '1. What Constitutes Electricity Theft Under Section 135?',
        headingHi: '1. धारा 135 के तहत बिजली चोरी क्या मानी जाती है?',
        contentEn: [
          'Direct Hooking (Kundi Connection): Tapping power directly from the overhead LT/HT distribution lines.',
          'Meter Tampering: Breaking government seals, using high-voltage magnets, inserting foreign microchips, or drilling the meter glass.',
          'Bypassing the Meter: Connecting phase or neutral wires to draw unmetered electricity.'
        ],
        contentHi: [
          'सीधा कुंडी डालना: बिजली के खंभों या लाइनों पर सीधे तार डालकर बिना मीटर बिजली चलाना।',
          'मीटर से छेड़छाड़: मीटर की सरकारी सील तोड़ना, चुंबक लगाना, अंदरूनी सर्किट में चिप लगाना या मीटर की बॉडी में छेद करना।',
          'मीटर बाईपास करना: मीटर के पहले से ही तार निकालकर उपकरणों को सीधे जोड़ देना।'
        ]
      },
      {
        headingEn: '2. How the Massive Theft Penalty is Calculated',
        headingHi: '2. बिजली चोरी पर भारी जुर्माना (Civil Liability) कैसे बनता है?',
        contentEn: [
          'Under Section 135 and HERC regulations, civil liability is calculated as: Assessment = 2 × Standard Tariff Rate × Connected Load (kW) × Operating Hours × Duration of Theft (up to 12 months).',
          'In addition to civil assessment, compounding charges (criminal immunity fee) must be paid to avoid imprisonment in the designated Special Electricity Court.'
        ],
        contentHi: [
          'इलेक्ट्रिसिटी एक्ट और HERC के अनुसार सिविल पेनल्टी का फार्मूला: जुर्माना = 2 × सामान्य टैरिफ दर × कुल कनेक्टेड लोड (kW) × चलने के घंटे × चोरी की अवधि (अधिकतम 12 महीने)।',
          'सिविल पेनल्टी के अलावा, स्पेशल इलेक्ट्रिसिटी कोर्ट में जेल जाने से बचने के लिए "कंपाउंडिंग फीस" (आपराधिक राहत शुल्क) भी जमा करानी होती है।'
        ]
      },
      {
        headingEn: '3. Legal Remedies: What to Do If Falsely Implicated',
        headingHi: '3. यदि गलत या झूठा आरोप लगाया गया है तो क्या करें?',
        contentEn: [
          'Never sign an incomplete or blank checking sheet. Write your specific objection in the consumer remarks column on the sheet itself.',
          'Demand laboratory testing: If accused of meter tampering, insist that the meter be removed in your presence, sealed in an evidence bag, and sent to the state M&P Testing Lab with full video recording.',
          'Submit a formal objection petition within 3 days to the Executive Engineer (XEN) and prepare an appeal before the Special Electricity Court.'
        ],
        contentHi: [
          'कभी भी खाली या अधूरी चेकिंग शीट पर हस्ताक्षर न करें। चेकिंग शीट पर अपनी असहमति की टिप्पणी जरूर लिखें।',
          'लैब टेस्टिंग की मांग करें: यदि मीटर से छेड़छाड़ का आरोप है, तो मीटर को अपनी मौजूदगी में सील करवाकर अधिकृत M&P लैब में वीडियोग्राफी के साथ जांच की मांग करें।',
          '3 दिन के भीतर अधिशासी अभियंता (XEN) के समक्ष लिखित आपत्ति दर्ज कराएं और जरूरत पड़ने पर स्पेशल कोर्ट में वकील के जरिए राहत की अर्जी दें।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can first-time electricity theft offenders avoid jail?',
        qHi: 'क्या पहली बार बिजली चोरी का केस बनने पर जेल जाने से बचा जा सकता है?',
        aEn: 'Yes. Under Section 152 of the Electricity Act 2003, a first-time accused consumer has the statutory right to compound the offense by depositing the prescribed compounding charges along with the assessed civil penalty, resulting in immediate dismissal of criminal charges.',
        aHi: 'हाँ। इलेक्ट्रिसिटी एक्ट की धारा 152 के तहत पहली बार के मामले में तयशुदा कंपाउंडिंग फीस और पेनल्टी भरकर केस का तुरंत निपटारा (Compounding) कराया जा सकता है जिससे आपराधिक मुकदमा बंद हो जाता है।'
      }
    ],
    relatedTool: {
      labelEn: 'SDO Legal Complaint Notice Generator',
      labelHi: 'कानूनी आपत्ति पत्र बनाएं',
      path: '/complaint-generator',
      descEn: 'Draft an objection letter against arbitrary inspection reports.',
      descHi: 'विजिलेंस या चेकिंग रिपोर्ट पर लिखित आपत्ति पत्र तुरंत ड्राफ्ट करें।'
    }
  },
  {
    slug: 'cgrf-haryana-electricity-complaint-process',
    titleEn: 'How to File a Complaint in CGRF Haryana: Zonal Benches, Process & Electricity Ombudsman',
    titleHi: 'CGRF (उपभोक्ता शिकायत निवारण मंच) में बिजली शिकायत कैसे दर्ज करें: पता व कानूनी अधिकार',
    shortDescEn: 'Has your local SDO or JE failed to resolve your wrongful electricity bill or meter complaint? Learn how to file an official grievance in the Consumer Grievance Redressal Forum (CGRF) and Electricity Ombudsman Panchkula.',
    shortDescHi: 'क्या स्थानीय SDO या जेई ने आपका गलत बिजली बिल या मीटर विवाद नहीं सुलझाया? जानें HERC के उपभोक्ता शिकायत निवारण मंच (CGRF) और विद्युत लोकपाल पंचकूला में अपील करने का पूरा तरीका।',
    category: 'legal',
    categoryLabelEn: 'Legal & Rights',
    categoryLabelHi: 'कानून व अधिकार',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '19,000+ monthly searches in Haryana',
      primaryKeywordEn: 'How to file complaint in CGRF Haryana',
      primaryKeywordHi: 'CGRF में बिजली शिकायत कैसे दर्ज करें',
      secondaryKeywords: ['cgrf kurukshetra rohtak address uhbvn', 'cgrf gurugram hisar dhbvn', 'electricity ombudsman haryana panchkula appeal', 'consumer grievance redressal forum rules']
    },
    sections: [
      {
        headingEn: '1. What is CGRF & Its Judicial Authority?',
        headingHi: '1. CGRF क्या है और इसके न्यायिक अधिकार क्या हैं?',
        contentEn: [
          'Under Section 42(5) of the Electricity Act 2003, every distribution licensee must establish an independent, quasi-judicial body called the Consumer Grievance Redressal Forum (CGRF).',
          'CGRF orders are legally binding on UHBVN and DHBVN. Discom officers who disobey CGRF orders can be penalized under Section 142.'
        ],
        contentHi: [
          'इलेक्ट्रिसिटी एक्ट 2003 की धारा 42(5) के तहत बिजली उपभोक्ताओं की समस्याओं के निष्पक्ष समाधान के लिए स्वतंत्र अर्ध-न्यायिक फोरम (CGRF) की स्थापना की गई है।',
          'CGRF का फैसला बिजली निगम के अधिकारियों पर कानूनी रूप से बाध्यकारी होता है। इसका पालन न करने पर अधिकारियों पर धारा 142 के तहत जुर्माना हो सकता है।'
        ]
      },
      {
        headingEn: '2. Four Zonal CGRF Benches in Haryana',
        headingHi: '2. हरियाणा में CGRF की चार प्रमुख जोनल बेंच',
        contentEn: [
          'UHBVN Kurukshetra Bench: Covers Panchkula, Ambala, Yamunanagar, Kurukshetra, Kaithal, and Karnal circles.',
          'UHBVN Rohtak Bench: Covers Panipat, Sonipat, Rohtak, Jhajjar, and Jind circles.',
          'DHBVN Gurugram Bench: Covers Gurugram-1, Gurugram-2, Faridabad, Palwal, and Nuh circles.',
          'DHBVN Hisar Bench: Covers Hisar, Sirsa, Fatehabad, Bhiwani, Charkhi Dadri, Rewari, and Narnaul circles.'
        ],
        contentHi: [
          'UHBVN कुरुक्षेत्र बेंच: पंचकूला, अम्बाला, यमुनानगर, कुरुक्षेत्र, कैथल एवं करनाल जिले।',
          'UHBVN रोहतक बेंच: पानीपत, सोनीपत, रोहतक, झज्जर एवं जींद जिले।',
          'DHBVN गुरुग्राम बेंच: गुरुग्राम-1, गुरुग्राम-2, फरीदाबाद, पलवल एवं नूह (मेवात) जिले।',
          'DHBVN हिसार बेंच: हिसार, सिरसा, फतेहाबाद, भिवानी, चरखी दादरी, रेवाड़ी एवं नारनौल जिले।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can I appeal if I am not satisfied with the CGRF judgment?',
        qHi: 'यदि CGRF के फैसले से संतुष्ट न हों तो क्या आगे अपील हो सकती है?',
        aEn: 'Yes. Under Section 42(6), any consumer aggrieved by the order of CGRF can file a formal representation within 30 days before the Electricity Ombudsman, Haryana, located in Panchkula.',
        aHi: 'हाँ। इलेक्ट्रिसिटी एक्ट की धारा 42(6) के तहत CGRF के आदेश के खिलाफ 30 दिनों के भीतर पंचकूला स्थित विद्युत लोकपाल (Electricity Ombudsman) के समक्ष अपील दायर की जा सकती है।'
      }
    ],
    relatedTool: {
      labelEn: '24x7 1912 & Grievance Escalator',
      labelHi: '1912 हेल्पलाइन व ग्रीवांस गाइड',
      path: '/grievance-1912',
      descEn: 'Track docket numbers and step-by-step administrative escalation levels.',
      descHi: 'शिकायत डॉकट नंबर ट्रैक करें और SDO से CGRF तक चरणबद्ध अपील करें।'
    }
  },
  {
    slug: 'surcharge-mafi-yojana-ots-pending-bill',
    titleEn: 'Haryana Electricity Surcharge Mafi & One-Time Settlement (OTS) Scheme: Clear Arrears in Installments',
    titleHi: 'हरियाणा बिजली बिल सरचार्ज माफी योजना: ब्याज छूट व बकाए का किस्तों में निपटारा',
    shortDescEn: 'Accumulated massive electricity bill arrears with heavy late fee interest? Learn about government Surcharge Mafi (OTS) amnesty schemes, installment plans, and disconnected meter revival.',
    shortDescHi: 'बिजली बिल पर भारी लेट फीस और ब्याज जुड़कर बिल लाखों में पहुंच गया? जानें सरकार की सरचार्ज माफी योजना (OTS), मूल बिल को किस्तों में भरने और कटे कनेक्शन को दोबारा जोड़ने के नियम।',
    category: 'schemes',
    categoryLabelEn: 'Solar & Schemes',
    categoryLabelHi: 'सोलर व सरकारी योजनाएं',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '55,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Haryana electricity bill waiver scheme 2025',
      primaryKeywordHi: 'हरियाणा बिजली बिल सरचार्ज माफी योजना',
      secondaryKeywords: ['surcharge mafi yojana uhbvn dhbvn', 'ots scheme for pending bijli bill', 'pay defaulted electricity bill in installments haryana', 'reconnect disconnected line arrears scheme']
    },
    sections: [
      {
        headingEn: '1. What is the Surcharge Mafi (OTS) Scheme?',
        headingHi: '1. सरचार्ज माफी (OTS) योजना क्या है?',
        contentEn: [
          'When consumers default on bills for many months, late payment surcharges (LPSC) accumulate at 1.5% to 2% per month, often doubling or tripling the original bill.',
          'Under government One-Time Settlement (OTS) schemes, the entire accumulated surcharge (interest) is 100% WAIVED OFF if the consumer agrees to pay the principal energy amount either upfront or in structured monthly installments.'
        ],
        contentHi: [
          'जब कई महीनों तक बिल नहीं भरा जाता, तो उस पर प्रति माह 1.5% से 2% की दर से लेट पेमेंट सरचार्ज (ब्याज) जुड़ता रहता है, जिससे बिल मूल राशि से दोगुना-तिगुना हो जाता है।',
          'सरकार की सरचार्ज माफी (OTS) योजना के तहत पूरा ब्याज (सरचार्ज) 100% माफ कर दिया जाता है, बशर्ते उपभोक्ता मूल बिजली खपत की राशि एकमुश्त या आसान किस्तों में जमा करने को तैयार हो।'
        ]
      },
      {
        headingEn: '2. Reconnection of Permanently Disconnected Meters (PDCO)',
        headingHi: '2. कटे हुए कनेक्शन (PDCO) को दोबारा चालू कराने का मौका',
        contentEn: [
          'Connections that were disconnected years ago for non-payment can be revived under the scheme without paying fresh infrastructure charges.',
          'Upon payment of the first installment, a Reconnection Order (RCO) is issued and power is restored.'
        ],
        contentHi: [
          'बकाए के कारण सालों पहले काटे गए मीटरों को इस योजना के तहत बिना नए खंभे या भारी नए चार्ज दिए दोबारा चालू कराया जा सकता है।',
          'पहली किस्त जमा करते ही तुरंत रिकनेक्शन ऑर्डर (RCO) जारी हो जाता है और बिजली दोबारा चालू कर दी जाती है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Who is eligible for the Surcharge Mafi Scheme?',
        qHi: 'सरचार्ज माफी योजना के लिए कौन-कौन पात्र हैं?',
        aEn: 'Typically, domestic (rural and urban), agricultural tubewell, and small commercial consumers with pending arrears are eligible whenever the State Government announces the scheme window.',
        aHi: 'घरेलू (ग्रामीण व शहरी), कृषि ट्यूबवेल और छोटे दुकानदार जिनके बिल बकाया हैं, वे सरकार द्वारा घोषित योजना अवधि के दौरान इसके पात्र होते हैं।'
      }
    ],
    relatedTool: {
      labelEn: 'Check Your Exact Bill Slabs',
      labelHi: 'बिल स्लैब कैलकुलेटर',
      path: '/bill-calculator',
      descEn: 'Calculate the principal energy charges and statutory duties.',
      descHi: 'अपने मूल बिल और लागू शुल्कों की सही गणना करें।'
    }
  },
  {
    slug: 'zero-convenience-fee-bill-payment-methods',
    titleEn: 'How to Pay Haryana Electricity Bill with Zero Convenience Fee Online (UHBVN & DHBVN)',
    titleHi: 'बिना किसी अतिरिक्त चार्ज के हरियाणा बिजली बिल ऑनलाइन भरने के सबसे सुरक्षित तरीके',
    shortDescEn: 'Tired of paying ₹20 to ₹50 extra convenience fees on third-party payment apps? Discover verified zero-surcharge payment modes via UPI, NetBanking, and official portals.',
    shortDescHi: 'तीसरे पक्ष के रीचार्ज ऐप पर ₹20 से ₹50 अतिरिक्त सुविधा शुल्क (Convenience Fee) से परेशान हैं? जानें यूपीआई और नेटबैंकिंग से बिना किसी अतिरिक्त चार्ज के सुरक्षित बिल भरने के तरीके।',
    category: 'payments',
    categoryLabelEn: 'Payments & Billing',
    categoryLabelHi: 'भुगतान व बिलिंग',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '32,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Zero transaction charge electricity bill payment Haryana',
      primaryKeywordHi: 'बिना किसी चार्ज के बिजली बिल ऑनलाइन कैसे भरें',
      secondaryKeywords: ['pay uhbvn bill zero fee upi', 'dhbvn payment gateway debit card charges', 'csc center bijli bill receipt', 'instant electricity bill update portal']
    },
    sections: [
      {
        headingEn: '1. Why Some Portals Charge Extra Convenience Fees',
        headingHi: '1. कुछ ऐप पर अतिरिक्त कन्वीनियंस फीस क्यों लगती है?',
        contentEn: [
          'Many popular consumer apps have started levying platform/convenience fees of ₹5 to ₹30 on utility payments.',
          'However, the official gateways on UHBVN and DHBVN websites are subsidized by the state government and offer 100% FREE payment via UPI, RuPay Debit Cards, and NetBanking.'
        ],
        contentHi: [
          'कई निजी भुगतान ऐप ने बिजली बिल भरने पर ₹5 से ₹30 तक का प्लेटफॉर्म या कन्वीनियंस शुल्क लेना शुरू कर दिया है।',
          'लेकिन UHBVN और DHBVN के आधिकारिक पोर्टल पर यूपीआई (UPI), रूपे डेबिट कार्ड और नेटबैंकिंग से भुगतान करने पर सरकार की तरफ से शून्य शुल्क (100% FREE) रहता है।'
        ]
      },
      {
        headingEn: '2. Top Verified Zero-Fee Methods',
        headingHi: '2. शून्य शुल्क वाले सबसे सुरक्षित तरीके',
        contentEn: [
          '1. Official UHBVN / DHBVN Direct Portal: Pay using your 10-digit account number directly on epayment.uhbvn.org.in or epayment.dhbvn.org.in.',
          '2. Direct UPI QR Code on Printed Bill: Modern Haryana bills carry a personalized dynamic UPI QR code. Scanning it in BHIM, PhonePe, or Google Pay pays exact dues instantly without fees.',
          '3. Authorized Village CSC / Antyodaya Kendra: CSC Village Level Entrepreneurs (VLEs) are authorized to collect cash payments with zero extra commission from citizens.'
        ],
        contentHi: [
          '1. आधिकारिक डिस्कॉम पोर्टल: epayment.uhbvn.org.in या epayment.dhbvn.org.in पर जाकर 10 अंकों का खाता नंबर डालकर सीधे पे करें।',
          '2. बिल पर छपा डायनामिक UPI QR कोड: हरियाणा के नए बिजली बिलों पर आपका व्यक्तिगत क्यूआर कोड छपा होता है। इसे स्कैन करके सीधे शून्य शुल्क में भुगतान हो जाता है।',
          '3. अधिकृत सीएससी (CSC) / अंत्योदय केंद्र: सीएससी केंद्रों पर नकद बिल भरने पर भी उपभोक्ता से कोई अतिरिक्त कमीशन नहीं लिया जा सकता।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'How soon is the payment updated in the Discom system?',
        qHi: 'ऑनलाइन भुगतान करने के बाद बिल कितनी देर में अपडेट होता है?',
        aEn: 'Payments via official portal or dynamic QR code reflect instantly in the system, and an automated SMS confirmation with a valid transaction ID is sent to your registered mobile number.',
        aHi: 'आधिकारिक पोर्टल या डायनामिक क्यूआर कोड से किया गया भुगतान तुरंत निगम के सर्वर में अपडेट हो जाता है और आपके मोबाइल पर तत्काल कन्फर्मेशन एसएमएस आ जाता है।'
      }
    ],
    relatedTool: {
      labelEn: 'Official Payment Link Directory',
      labelHi: 'आधिकारिक भुगतान लिंक',
      path: '/payment-help',
      descEn: 'Direct verified links to official UHBVN and DHBVN payment gateways.',
      descHi: 'आधिकारिक UHBVN व DHBVN पेमेंट गेटवे के सीधे लिंक प्राप्त करें।'
    }
  },
  {
    slug: 'temporary-electricity-connection-charges-rules',
    titleEn: 'Temporary Electricity Connection in Haryana: Construction Rates, Security & Conversion Rules',
    titleHi: 'हरियाणा में अस्थाई (टेंपरेरी) बिजली कनेक्शन: मकान निर्माण फीस व पक्का कराने का नियम',
    shortDescEn: 'Constructing a new house or hosting an event in Haryana? Learn about temporary connection tariffs, upfront security deposits, duration limits, and how to convert to a permanent meter.',
    shortDescHi: 'नया मकान बनवा रहे हैं या कोई बड़ा आयोजन है? जानें अस्थाई कनेक्शन की दरें, एडवांस सिक्योरिटी, कनेक्शन की अवधि और काम पूरा होने पर इसे स्थायी (पक्का) कराने के नियम।',
    category: 'connections',
    categoryLabelEn: 'Connections & Transfers',
    categoryLabelHi: 'कनेक्शन व ट्रांसफर',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '24,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Temporary electricity connection charges Haryana',
      primaryKeywordHi: 'मकान निर्माण के लिए अस्थाई (टेंपरेरी) कनेक्शन',
      secondaryKeywords: ['construction temporary meter rate uhbvn', 'how to convert temporary to permanent meter haryana', 'temporary connection security deposit', 'short term event electricity supply']
    },
    sections: [
      {
        headingEn: '1. Why You Must Take a Temporary Connection for House Construction',
        headingHi: '1. मकान निर्माण के लिए अस्थाई कनेक्शन लेना क्यों अनिवार्य है?',
        contentEn: [
          'Using a domestic (DS) connection for building construction is strictly illegal under the Electricity Act 2003 and is prosecuted as unauthorized use of electricity (Section 126).',
          'Discom vigilance teams frequently inspect developing colonies and slap heavy penalties if domestic power is used for mixing concrete, drilling, or curing water.'
        ],
        contentHi: [
          'घरेलू (DS) कनेक्शन की बिजली को मकान निर्माण में इस्तेमाल करना कानूनन अपराध है और धारा 126 के तहत "बिजली का अनधिकृत उपयोग" माना जाता है।',
          'विजिलेंस टीमें नए बन रहे मकानों की अचानक चेकिंग करती हैं और घरेलू मीटर से कंक्रीट मिक्सर या समर्सिबल चलते पाए जाने पर लाखों का जुर्माना लगा देती हैं।'
        ]
      },
      {
        headingEn: '2. Tariff & Security Deposit for Temporary Supply',
        headingHi: '2. अस्थाई कनेक्शन की दरें और सिक्योरिटी डिपॉजिट',
        contentEn: [
          'Tariff: Temporary connection power is charged at a flat higher rate (usually 1.5 times the standard commercial rate) with no domestic slab benefits.',
          'Upfront Advance Deposit: You must deposit estimated consumption charges for the requested duration (typically 3 to 6 months).',
          'Conversion to Permanent: Once construction completes, submit the completion certificate/registry to the SDO. The remaining deposit is adjusted, and a standard domestic meter is installed.'
        ],
        contentHi: [
          'बिजली दर: अस्थाई कनेक्शन पर सामान्य से अधिक फ्लैट दर (व्यावसायिक दर का लगभग 1.5 गुना) लगती है और इसमें कोई घरेलू स्लैब छूट नहीं मिलती।',
          'अग्रिम सिक्योरिटी: आपको मांगे गए समय (आमतौर पर 3 से 6 महीने) की अनुमानित बिजली का अग्रिम भुगतान जमा कराना होता है।',
          'पक्का कराने का नियम: मकान बनने के बाद SDO कार्यालय में स्थायी कनेक्शन की अर्जी दें। बची हुई सिक्योरिटी नए स्थायी मीटर में जुड़ जाती है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'For what maximum duration can a temporary connection be sanctioned?',
        qHi: 'अस्थाई कनेक्शन अधिकतम कितने समय के लिए मिल सकता है?',
        aEn: 'Temporary connections can be sanctioned initially for up to 6 months, and can be extended up to a maximum of 2 years upon formal application and payment of advance charges.',
        aHi: 'अस्थाई कनेक्शन शुरुआत में अधिकतम 6 महीने के लिए दिया जाता है, जिसे जरूरत पड़ने पर आगे फीस जमा करके अधिकतम 2 साल तक बढ़ाया जा सकता है।'
      }
    ],
    relatedTool: {
      labelEn: 'New Connection Guide & Forms',
      labelHi: 'नया कनेक्शन गाइड',
      path: '/new-connection',
      descEn: 'Detailed portal walkthrough for temporary and permanent connections.',
      descHi: 'अस्थाई व स्थायी दोनों तरह के कनेक्शन के आवेदन का विवरण देखें।'
    }
  },
  {
    slug: 'shifting-electricity-meter-pole-line-haryana',
    titleEn: 'How to Shift Electricity Meter, Pole or Line Outside Your House (UHBVN & DHBVN Estimates)',
    titleHi: 'घर से बिजली का खंभा, तार या मीटर बाहर शिफ्ट कराने का नियम व एस्टीमेट खर्चा',
    shortDescEn: 'Dangerous high-tension wire hanging over your roof or an electricity pole blocking your main gate? Complete citizen procedure on applying for pole/line shifting, deposit estimates, and safety norms.',
    shortDescHi: 'छत के ऊपर से 11KV की खतरनाक तार गुजर रही है या मेन गेट के सामने बिजली का खंभा अड़ रहा है? जानें खंभा व लाइन हटवाने की कानूनी प्रक्रिया, एस्टीमेट खर्चा और सुरक्षा नियम।',
    category: 'connections',
    categoryLabelEn: 'Connections & Transfers',
    categoryLabelHi: 'कनेक्शन व ट्रांसफर',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '21,000+ monthly searches in Haryana',
      primaryKeywordEn: 'How to shift electricity meter outside house Haryana',
      primaryKeywordHi: 'घर से बिजली का खंभा या तार कैसे हटवाएं',
      secondaryKeywords: ['electricity pole shifting cost uhbvn', 'high tension wire removal application haryana', 'shift meter to boundary wall dhbvn', 'haryana saral pole shifting application']
    },
    sections: [
      {
        headingEn: '1. Shifting of Electricity Meter to Boundary Wall',
        headingHi: '1. बिजली मीटर को घर के बाहर बाउंड्री वॉल पर शिफ्ट करना',
        contentEn: [
          'Under Discom modernization circulars, meters installed inside premises must be shifted to an accessible location on the outer boundary wall.',
          'If done during Discom pillar-box or smart meter drives, it is 100% FREE. If requested privately by the consumer for home renovation, a nominal shifting charge is payable.'
        ],
        contentHi: [
          'निगम के आधुनिक दिशा-निर्देशों के अनुसार घर के अंदर लगे मीटरों को बाहरी दीवार पर सुलभ स्थान पर लगाना अनिवार्य है।',
          'यदि निगम के पिलर बॉक्स या स्मार्ट मीटर अभियान के तहत यह हो रहा है, तो यह बिल्कुल मुफ्त होता है। यदि उपभोक्ता अपने निजी निर्माण के कारण शिफ्ट कराना चाहता है, तो नाममात्र सरकारी शुल्क लगता है।'
        ]
      },
      {
        headingEn: '2. Procedure to Shift an Obstructing Pole or 11kV Line',
        headingHi: '2. रुकावट बन रहे खंभे या 11KV लाइन को हटवाने की प्रक्रिया',
        contentEn: [
          'Step 1: Submit an application to the Sub-Divisional Officer (SDO) or apply online on the Haryana SARAL portal.',
          'Step 2: The SDO inspects the site and prepares a "Deposit Work Estimate" (labor cost + material charges for new pole and cable).',
          'Step 3: After the applicant deposits the estimated amount, the Discom engineering team executes the shifting within 30 days.',
          'Safety Priority: If an old pole is dangerously leaning or live wires touch your balcony, file an urgent emergency docket on 1912 for hazardous condition inspection.'
        ],
        contentHi: [
          'स्टेप 1: SDO कार्यालय में प्रार्थना पत्र दें या सरल पोर्टल पर ऑनलाइन आवेदन करें।',
          'स्टेप 2: एसडीओ और जेई मौके का मुआयना करके "डिपॉजिट वर्क एस्टीमेट" तैयार करते हैं (जिसमें नए खंभे, तार और लेबर का खर्चा शामिल होता है)।',
          'स्टेप 3: उपभोक्ता द्वारा एस्टीमेट राशि जमा कराने के 30 दिनों के भीतर निगम की टीम खंभा हटा देती है।',
          'सुरक्षा प्राथमिकता: यदि खंभा गिरती हालत में है या तार आपकी बालकनी से छू रही है, तो 1912 पर "खतरनाक स्थिति" (Hazardous Condition) का तत्काल डॉकट दर्ज कराएं।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Who pays the cost of shifting a pole blocking a public road?',
        qHi: 'यदि खंभा सड़क चौड़ीकरण में रुकावट बने तो खर्चा कौन देता है?',
        aEn: 'If a pole obstructs a public road due to road widening, the expenditure is borne by the Municipal Corporation (Nagar Nigam) or Public Works Department (PWD), not the individual resident.',
        aHi: 'यदि सड़क चौड़ी होने या नगर पालिका के रास्ते में खंभा आ रहा है, तो इसका खर्चा नगर निगम या पीडब्ल्यूडी विभाग उठाता है, आम नागरिक को व्यक्तिगत खर्चा नहीं देना होता।'
      }
    ],
    relatedTool: {
      labelEn: 'SDO Formal Notice Generator',
      labelHi: 'खंभा हटाने हेतु प्रार्थना पत्र बनाएं',
      path: '/complaint-generator',
      descEn: 'Generate a formal application for pole or wire relocation.',
      descHi: 'खंभा या तार शिफ्ट कराने का औपचारिक प्रार्थना पत्र तुरंत तैयार करें।'
    }
  },
  {
    slug: 'understanding-mdi-maximum-demand-penalty',
    titleEn: 'What is MDI in Haryana Electricity Bill & How to Remove Maximum Demand Penalties',
    titleHi: 'बिजली बिल में MDI क्या है और ओवरलोड पेनल्टी से कैसे बचें',
    shortDescEn: 'Shocked to see an extra ₹1,000 to ₹5,000 MDI penalty on your electricity bill? Learn how the Maximum Demand Indicator works in digital meters, penalty calculation rules, and how to remove it.',
    shortDescHi: 'क्या आपके बिल में ₹1,000 से ₹5,000 तक की MDI पेनल्टी लगकर आई है? जानें डिजिटल मीटर में मैक्सिमम डिमांड इंडिकेटर कैसे काम करता है और इस पेनल्टी को कैसे हटाएं।',
    category: 'billing',
    categoryLabelEn: 'Billing & Charges',
    categoryLabelHi: 'बिल व शुल्क',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '23,000+ monthly searches in Haryana',
      primaryKeywordEn: 'What is MDI in electricity bill Haryana',
      primaryKeywordHi: 'बिजली बिल में MDI क्या होता है',
      secondaryKeywords: ['mdi penalty rate uhbvn', 'how to reset mdi domestic connection', 'maximum demand indicator penalty haryana', 'sanctioned load vs peak demand']
    },
    sections: [
      {
        headingEn: '1. What Exactly is MDI (Maximum Demand Indicator)?',
        headingHi: '1. MDI (मैक्सिमम डिमांड इंडिकेटर) क्या है?',
        contentEn: [
          'MDI measures the highest average electrical load (in kW or kVA) your household consumed during any 30-minute block in the entire billing cycle.',
          'Even if your appliances ran for just one afternoon when guests arrived (e.g. 3 ACs + Geyser + Water Pump running simultaneously), that peak load is recorded and stamped into the meter memory.'
        ],
        contentHi: [
          'MDI पूरे बिलिंग चक्र में किसी भी 30 मिनट की अवधि के दौरान आपके घर द्वारा एक साथ खींचे गए अधिकतम लोड (kW या kVA) को रिकॉर्ड करता है।',
          'यदि महीने में सिर्फ एक दिन मेहमान आने पर आपके घर के 3 एसी, गीजर और मोटर एक साथ चल गए, तो वही उच्चतम लोड मीटर की मेमोरी में लॉक हो जाता है।'
        ]
      },
      {
        headingEn: '2. How MDI Penalties are Charged in Haryana',
        headingHi: '2. हरियाणा में MDI पेनल्टी कैसे लगाई जाती है?',
        contentEn: [
          'If MDI recorded is less than or equal to Sanctioned Load: Zero penalty.',
          'If MDI exceeds Sanctioned Load: The Discom charges a heavy penalty per excess kW for that billing cycle.',
          'Permanent Load Escalation: In some categories, if MDI exceeds sanctioned load in three consecutive cycles, the Discom automatically enhances your sanctioned load permanently with additional security deposit.'
        ],
        contentHi: [
          'यदि रिकॉर्ड MDI स्वीकृत लोड के बराबर या कम है: शून्य पेनल्टी।',
          'यदि रिकॉर्ड MDI स्वीकृत लोड से ज्यादा है: तो निगम स्वीकृत लोड से ऊपर के हर अतिरिक्त किलोवाट पर भारी पेनल्टी लगाता है।',
          'स्थायी लोड वृद्धि: यदि लगातार तीन बिलों में आपका MDI स्वीकृत लोड से अधिक आता है, तो निगम स्वतः आपका लोड बढ़ाकर अतिरिक्त सिक्योरिटी जोड़ देता है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'How can I permanently prevent MDI penalties?',
        qHi: 'MDI पेनल्टी से हमेशा के लिए कैसे बचा जा सकता है?',
        aEn: 'Calculate your actual simultaneous appliance load and apply for a formal load extension on the Discom portal. Extending your sanctioned load by 1 or 2 kW costs a fraction of the recurring monthly penalties.',
        aHi: 'अपने घर के उपकरणों का कुल लोड जोड़ें और डिस्कॉम पोर्टल पर 1-2 किलोवाट लोड बढ़वाने का आवेदन कर दें। लोड बढ़वाने की एकमुश्त फीस हर महीने लगने वाली पेनल्टी से बहुत सस्ती पड़ती है।'
      }
    ],
    relatedTool: {
      labelEn: 'Calculate Your Total Connected Load',
      labelHi: 'घरेलू लोड कैलकुलेटर',
      path: '/load-calculator',
      descEn: 'Avoid MDI penalties by calculating required load accurately.',
      descHi: 'सही स्वीकृत लोड का पता लगाकर MDI पेनल्टी से हमेशा के लिए बचें।'
    }
  },
  {
    slug: 'late-payment-surcharge-lpsc-calculation',
    titleEn: 'Delayed Payment Surcharge (LPSC) in Haryana Electricity Bill: Calculation & Grace Period Rules',
    titleHi: 'तय तारीख के बाद बिल भरने पर कितना लेट फीस सरचार्ज लगता है: पूरा गणित व ग्रेस पीरियड',
    shortDescEn: 'Missed your electricity bill due date? Understand how the 1.5% to 2% late payment surcharge is calculated, cheque clearance grace periods, and disconnection rules.',
    shortDescHi: 'क्या बिजली बिल की अंतिम तारीख निकल गई है? जानें 1.5% से 2% लेट पेमेंट सरचार्ज की गणना का नियम, ग्रेस पीरियड और बिजली कटने से बचने के उपाय।',
    category: 'billing',
    categoryLabelEn: 'Billing & Charges',
    categoryLabelHi: 'बिल व शुल्क',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '16,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Electricity bill late payment surcharge Haryana rate',
      primaryKeywordHi: 'तय तारीख के बाद बिल भरने पर कितना जुर्माना लगता है',
      secondaryKeywords: ['lpsc in uhbvn bill', 'electricity bill grace period haryana', 'how is surcharge calculated on arrears', 'payment due date rules haryana']
    },
    sections: [
      {
        headingEn: '1. What is Late Payment Surcharge (LPSC)?',
        headingHi: '1. लेट पेमेंट सरचार्ज (LPSC) क्या है?',
        contentEn: [
          'Under HERC regulations, if an electricity bill is not paid on or before the specified "Due Date", a Late Payment Surcharge (LPSC) is levied on the unpaid principal amount.',
          'The standard rate in Haryana is 1.5% per month (or part thereof) for domestic and agricultural consumers, and up to 2% for high-demand commercial/industrial consumers.'
        ],
        contentHi: [
          'HERC के नियमों के अनुसार यदि निर्धारित "Due Date" (अंतिम तिथि) तक या उससे पहले बिल नहीं भरा जाता, तो बकाया मूल राशि पर लेट पेमेंट सरचार्ज (LPSC) लगाया जाता है।',
          'हरियाणा में यह दर घरेलू व कृषि उपभोक्ताओं के लिए 1.5% प्रति माह और बड़े व्यावसायिक/औद्योगिक उपभोक्ताओं के लिए 2% तक होती है।'
        ]
      },
      {
        headingEn: '2. Grace Period & Payment Processing Timelines',
        headingHi: '2. ग्रेस पीरियड और भुगतान का समय',
        contentEn: [
          'Online UPI / NetBanking: Payments made up to 11:59 PM on the due date are treated as on-time.',
          'Cheque Payments: Cheques must be presented at least 3 working days before the due date, as clearance date determines timeliness.',
          'Notice Period: Under Section 56(1) of the Electricity Act, the Discom cannot cut your power immediately upon due date expiry without serving an explicit statutory 15-day notice.'
        ],
        contentHi: [
          'ऑनलाइन यूपीआई / नेटबैंकिंग: अंतिम तारीख की रात 11:59 बजे तक किए गए भुगतान समय पर माने जाते हैं।',
          'चेक से भुगतान: चेक कम से कम 3 कार्यदिवस पहले जमा कराना चाहिए क्योंकि चेक क्लीयर होने की तारीख से भुगतान माना जाता है।',
          'नोटिस की अनिवार्यता: अंतिम तारीख निकलने के तुरंत बाद बिना 15 दिन का कानूनी नोटिस दिए बिजली नहीं काटी जा सकती।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Is surcharge charged on unpaid government duties (ED and MT)?',
        qHi: 'क्या सरकारी टैक्स (ED और MT) पर भी सरचार्ज लगता है?',
        aEn: 'No. Late payment surcharge is levied solely on the Energy Charges and Fixed Charges principal component, not on electricity taxes.',
        aHi: 'नहीं। लेट पेमेंट सरचार्ज केवल मूल ऊर्जा शुल्क (Energy Charges) और फिक्स्ड चार्ज पर लगता है, सरकारी टैक्स पर ब्याज नहीं लगाया जाता।'
      }
    ],
    relatedTool: {
      labelEn: 'Bill Calculator with Due Date Surcharge',
      labelHi: 'बिल कैलकुलेटर',
      path: '/bill-calculator',
      descEn: 'Calculate total bill amount before and after the due date.',
      descHi: 'अंतिम तारीख से पहले और बाद के कुल बिल की गणना करें।'
    }
  },
  {
    slug: 'tenant-landlord-submeter-electricity-laws',
    titleEn: 'Tenant vs Landlord Electricity Sub-Meter Laws in Haryana: Official Tariffs vs Overcharging',
    titleHi: 'किराएदार और मकान मालिक के बीच बिजली सब-मीटर के कानूनी नियम: सरकारी रेट vs मनमाना रेट',
    shortDescEn: 'Is your landlord demanding ₹10 to ₹12 per unit on a sub-meter? Learn statutory HERC sub-metering laws, legal rights of tenants, and how to apply for an independent separate electricity meter.',
    shortDescHi: 'क्या आपके मकान मालिक सब-मीटर पर ₹10 से ₹12 प्रति यूनिट वसूल रहे हैं? जानें HERC के सब-मीटरिंग नियम, किराएदारों के अधिकार और अलग स्वतंत्र मीटर लगवाने का तरीका।',
    category: 'legal',
    categoryLabelEn: 'Legal & Rights',
    categoryLabelHi: 'कानून व अधिकार',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '34,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Sub meter electricity rate legal rules Haryana',
      primaryKeywordHi: 'किराएदार के लिए अलग बिजली मीटर लगाने के नियम',
      secondaryKeywords: ['can landlord charge 10 rs per unit haryana', 'separate electricity meter for tenant uhbvn', 'submeter overcharging complaint sdo', 'herc tenant tariff ruling']
    },
    sections: [
      {
        headingEn: '1. Can a Landlord Legally Profit from Reselling Electricity?',
        headingHi: '1. क्या मकान मालिक बिजली बेचकर मुनाफा कमा सकता है?',
        contentEn: [
          'NO. Under Section 12 of The Electricity Act 2003, no person can transmit, distribute, or resell electricity without a valid license granted by the Regulatory Commission.',
          'Landlords can only recover actual electricity costs incurred as per official Discom slab rates. Charging an inflated flat rate (e.g. ₹10 or ₹12/unit) when the official slab is ₹2.50 to ₹7.00 is strictly illegal.'
        ],
        contentHi: [
          'कदापि नहीं! इलेक्ट्रिसिटी एक्ट 2003 की धारा 12 के तहत विनियामक आयोग के लाइसेंस के बिना कोई भी व्यक्ति बिजली का पुनर्विक्रय (Resale/मुनाफाखोरी) नहीं कर सकता।',
          'मकान मालिक केवल वही वास्तविक बिजली खर्च ले सकता है जो डिस्कॉम की आधिकारिक स्लैब दर के अनुसार बनता है। आधिकारिक दर ₹2.50 से ₹7.00 होने के बावजूद ₹10-₹12 प्रति यूनिट वसूलना पूरी तरह गैरकानूनी है।'
        ]
      },
      {
        headingEn: '2. How Tenants Can Get an Independent Separate Meter',
        headingHi: '2. किराएदार अपने लिए अलग स्वतंत्र मीटर कैसे लगवा सकते हैं?',
        contentEn: [
          'Under HERC Supply Code Regulations, any bona fide occupant of a partitioned premises with a distinct entrance and independent kitchen is legally entitled to a separate electricity connection.',
          'Documents Needed: Valid Registered Rent Agreement / Lease Deed + Aadhaar Card + NOC from the property owner.',
          'Supreme Court Precedent: The Supreme Court of India has ruled that electricity is an essential amenity integral to the Right to Life under Article 21, and electricity cannot be denied to an occupant merely on account of landlord disputes.'
        ],
        contentHi: [
          'HERC सप्लाई कोड के अनुसार यदि किसी मकान का हिस्सा अलग है (अलग प्रवेश द्वार और अलग रसोई), तो उस हिस्से के लिए अलग स्वतंत्र बिजली मीटर पाने का कानूनी अधिकार है।',
          'आवश्यक दस्तावेज: वैध रेंट एग्रीमेंट (किरायानामा) + आधार कार्ड + मकान मालिक का सहमति पत्र (NOC)।',
          'सुप्रीम कोर्ट का ऐतिहासिक फैसला: भारत के सर्वोच्च न्यायालय ने माना है कि बिजली संविधान के अनुच्छेद 21 के तहत जीवन के अधिकार का एक अभिन्न अंग है और मकान मालिक के विवाद के आधार पर किसी को बिजली से वंचित नहीं किया जा सकता।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Where can a tenant complain against sub-meter extortion in Gurugram or Faridabad?',
        qHi: 'सब-मीटर पर ज्यादा वसूली की शिकायत कहाँ की जा सकती है?',
        aEn: 'Tenants can submit a written complaint to the local Sub-Divisional Officer (SDO) or approach the Consumer Grievance Redressal Forum (CGRF) and District Consumer Disputes Redressal Commission.',
        aHi: 'किराएदार स्थानीय SDO कार्यालय में या जिला उपभोक्ता फोरम (Consumer Court) में बिजली की अवैध रिसेलिंग के खिलाफ लिखित शिकायत दर्ज करा सकते हैं।'
      }
    ],
    relatedTool: {
      labelEn: 'Domestic Tariff Slab Calculator',
      labelHi: 'घरेलू टैरिफ स्लैब कैलकुलेटर',
      path: '/bill-calculator',
      descEn: 'Check the real official government rate for your units.',
      descHi: 'अपनी यूनिटों का असली सरकारी रेट जांचें और अधिक वसूली से बचें।'
    }
  },
  {
    slug: 'disconnection-reconnection-rco-rules',
    titleEn: 'Electricity Disconnection & Reconnection (RCO) Rules in Haryana: 15-Day Notice Mandate',
    titleHi: 'बिजली कटने पर दोबारा चालू कराने का नियम (RCO) और 15 दिन के नोटिस की अनिवार्यता',
    shortDescEn: 'Has your power been cut due to pending dues? Learn your legal rights under Section 56, mandatory 15-day notice period, Reconnection Order (RCO) fees, and same-day power restoration rules.',
    shortDescHi: 'क्या बकाए के कारण बिजली काट दी गई है? जानें धारा 56 के तहत 15 दिन के नोटिस की अनिवार्यता, रिकनेक्शन ऑर्डर (RCO) की फीस और उसी दिन बिजली चालू कराने के नियम।',
    category: 'legal',
    categoryLabelEn: 'Legal & Rights',
    categoryLabelHi: 'कानून व अधिकार',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '27,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Electricity disconnection notice period Haryana',
      primaryKeywordHi: 'बिजली कटने के बाद दोबारा कनेक्शन चालू कराने का नियम (RCO)',
      secondaryKeywords: ['rco fee in uhbvn dhbvn', 'what if line cut without 15 days notice', 'same day power reconnection haryana', 'temporary vs permanent disconnection order']
    },
    sections: [
      {
        headingEn: '1. Disconnection Without 15-Day Notice is Illegal',
        headingHi: '1. बिना 15 दिन के नोटिस के बिजली काटना गैरकानूनी है',
        contentEn: [
          'Under Section 56(1) of The Electricity Act 2003, no power distribution company can disconnect supply for non-payment without giving not less than 15 clear days notice in writing.',
          'If linestaff disconnects your cable without an official written notice delivered to you, the disconnection is unlawful, and you can file for immediate compensation under HERC Performance Standards.'
        ],
        contentHi: [
          'इलेक्ट्रिसिटी एक्ट 2003 की धारा 56(1) के तहत कोई भी बिजली निगम कम से कम 15 दिन का स्पष्ट लिखित नोटिस दिए बिना बकाए के आधार पर बिजली नहीं काट सकता।',
          'यदि लाइनमैन बिना लिखित नोटिस थमाए तार काट देता है, तो यह कार्रवाई पूरी तरह गैरकानूनी है और आप HERC नियमों के तहत हर्जाने के हकदार हैं।'
        ]
      },
      {
        headingEn: '2. Reconnection Order (RCO) Process & Timelines',
        headingHi: '2. रिकनेक्शन ऑर्डर (RCO) की प्रक्रिया और समयसीमा',
        contentEn: [
          'Step 1: Pay the pending electricity bill arrears along with the nominal Reconnection Fee (approx ₹100 for single phase, ₹200 for three phase).',
          'Step 2: Note the transaction reference and submit a copy to the local Sub-Divisional Office or via WhatsApp helpline.',
          'Step 3: Under HERC Performance Standards, once payment is made, power supply must be restored within 6 hours in urban areas and 12 hours in rural areas.'
        ],
        contentHi: [
          'स्टेप 1: बकाया बिजली बिल और नाममात्र रिकनेक्शन फीस (सिंगल फेज के लिए लगभग ₹100, थ्री-फेज के लिए ₹200) ऑनलाइन या काउंटर पर जमा करें।',
          'स्टेप 2: रसीद की कॉपी स्थानीय SDO कार्यालय में दिखाएं या आधिकारिक हेल्पलाइन पर साझा करें।',
          'स्टेप 3: HERC सेवा मानकों के तहत फीस जमा होने के 6 घंटे के भीतर शहरी क्षेत्रों में और 12 घंटे में ग्रामीण क्षेत्रों में बिजली दोबारा चालू करना अनिवार्य है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can power be disconnected if a dispute is pending before CGRF?',
        qHi: 'यदि CGRF में विवाद विचाराधीन है तो क्या बिजली काटी जा सकती है?',
        aEn: 'No. As long as a formal dispute is actively pending before the CGRF or Electricity Ombudsman and the consumer continues paying 50% of the disputed average billing, disconnection is statutorily stayed.',
        aHi: 'नहीं! जब तक मामला CGRF या विद्युत लोकपाल के समक्ष विचाराधीन है और उपभोक्ता औसत का 50% भरता रहता है, तब तक बिजली काटने पर वैधानिक रोक रहती है।'
      }
    ],
    relatedTool: {
      labelEn: 'Official Instant Bill Payment Links',
      labelHi: 'तुरंत बिल भुगतान लिंक',
      path: '/payment-help',
      descEn: 'Pay pending arrears via official portals to trigger instant RCO.',
      descHi: 'तत्काल RCO जारी कराने हेतु आधिकारिक पोर्टल पर भुगतान करें।'
    }
  },
  {
    slug: 'herc-compensation-charter-burnt-appliances',
    titleEn: 'HERC Consumer Charter: How to Claim Cash Compensation for Power Cuts & Burnt Appliances',
    titleHi: 'हाई वोल्टेज से टीवी-फ्रिज जलने पर बिजली निगम से मुआवजा व हर्जाना पाने का कानूनी नियम',
    shortDescEn: 'Home appliances burnt due to neutral breakdown or transformer flashover? Learn the statutory procedure to claim financial compensation from UHBVN/DHBVN under HERC Standards of Performance.',
    shortDescHi: 'हाई वोल्टेज या न्यूट्रल उड़ने से घर के एसी, फ्रिज, टीवी जल गए? जानें HERC के नियमों के तहत बिजली निगम से उपकरणों के नुकसान का हर्जाना और मुआवजा पाने का तरीका।',
    category: 'legal',
    categoryLabelEn: 'Legal & Rights',
    categoryLabelHi: 'कानून व अधिकार',
    readTimeMinutes: 7,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '29,000+ monthly searches in Haryana',
      primaryKeywordEn: 'HERC compensation for delay in power restoration',
      primaryKeywordHi: 'हाई वोल्टेज से उपकरण जलने पर मुआवजा कैसे लें',
      secondaryKeywords: ['burnt appliances due to high voltage uhbvn', 'dhbvn power surge damage claim', 'herc standards of performance penalty chart', 'consumer rights haryana electricity']
    },
    sections: [
      {
        headingEn: '1. What Happens When Voltage Surges Burn Appliances?',
        headingHi: '1. जब वोल्टेज बढ़ने से घरेलू उपकरण जल जाते हैं तो क्या होता है?',
        contentEn: [
          'A sudden neutral wire disconnect at the distribution transformer can cause voltage to shoot up from 230V to over 400V, burning LED TVs, inverter circuits, refrigerators, and AC compressors.',
          'Under the law of torts and HERC Standards of Performance, the Discom is strictly liable for damage caused by negligence in maintaining distribution infrastructure.'
        ],
        contentHi: [
          'ट्रांसफार्मर का न्यूट्रल तार टूटने या ढीला होने से घरों में 230 वोल्ट के बजाय 400 वोल्ट से ज्यादा करंट दौड़ जाता है, जिससे टीवी, फ्रिज, इनवर्टर और एसी तुरंत फुंक जाते हैं।',
          'कानून और HERC सेवा मानकों के तहत बिजली तारों का रखरखाव न करने के कारण हुए नुकसान के लिए निगम पूरी तरह जिम्मेदार होता है।'
        ]
      },
      {
        headingEn: '2. Step-by-Step Procedure to Claim Compensation',
        headingHi: '2. मुआवजा और हर्जाना पाने की कानूनी प्रक्रिया',
        contentEn: [
          'Step 1: Immediately file an emergency complaint on 1912 and get a Docket Number recording "High Voltage Surge / Neutral Cut".',
          'Step 2: Collect written repair estimates or damage assessment bills from authorized service centers showing that damage was caused by high voltage.',
          'Step 3: Submit a joint representation signed by all affected neighbors to the Executive Engineer (XEN) and Sub-Divisional Officer.',
          'Step 4: If the Discom fails to settle the claim within 30 days, file an expedited petition before the Zonal CGRF.'
        ],
        contentHi: [
          'स्टेप 1: तुरंत 1912 पर कॉल करके "हाई वोल्टेज / न्यूट्रल कट" का डॉकट नंबर दर्ज कराएं।',
          'स्टेप 2: अधिकृत सर्विस सेंटर या मैकेनिक से खराबी का बिल और एस्टीमेट बनवाएं जिसमें साफ लिखा हो कि खराबी हाई वोल्टेज से हुई है।',
          'स्टेप 3: मोहल्ले के सभी प्रभावित पड़ोसियों के हस्ताक्षर करवाकर अधिशासी अभियंता (XEN) और SDO को संयुक्त क्लेम लेटर सौंपें।',
          'स्टेप 4: यदि 30 दिन में मुआवजा नहीं मिलता, तो जोनल CGRF या जिला उपभोक्ता अदालत में याचिका दायर करें।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'What is the compensation for prolonged power cuts under HERC rules?',
        qHi: 'लंबे पावर कट पर HERC नियमों के तहत क्या हर्जाना तय है?',
        aEn: 'Under HERC Standards of Performance, failure to restore power within prescribed limits (e.g. 4 hours for simple fuse-off, 24 hours for burnt transformer in urban areas) entitles the affected consumer to ₹50 to ₹100 per hour of continued delay.',
        aHi: 'HERC सेवा मानकों के अनुसार तय समयसीमा (जैसे फ्यूल फाल्ट 4 घंटे, ट्रांसफार्मर 24 घंटे) के भीतर बिजली चालू न करने पर निगम को ₹50 से ₹100 प्रति घंटे का हर्जाना उपभोक्ता को देना होता है।'
      }
    ],
    relatedTool: {
      labelEn: 'High Voltage Damage Notice Generator',
      labelHi: 'मुआवजा प्रार्थना पत्र जनरेटर',
      path: '/complaint-generator',
      descEn: 'Generate a legal compensation claim notice citing HERC standards.',
      descHi: 'HERC नियमों का हवाला देते हुए कानूनी मुआवजा क्लेम पत्र तुरंत ड्राफ्ट करें।'
    }
  },
  {
    slug: 'haryana-electricity-domestic-tariff-slabs-2025',
    titleEn: 'Haryana Electricity Domestic Tariff Slabs 2025: Category I & II Rates, Units & Subsidies',
    titleHi: 'हरियाणा घरेलू बिजली बिल स्लैब रेट 2025: कैटेगरी 1 व 2 दरें, सब्सिडी व पूरा गणित',
    shortDescEn: 'Confused about how domestic power is billed in Haryana? Understand Category-I (up to 100 units lifeline) and Category-II (telescopic slabs) rates approved by HERC.',
    shortDescHi: 'क्या आप जानना चाहते हैं कि हरियाणा में घरेलू बिजली का बिल किस दर से बनता है? समझें कैटेगरी-1 (100 यूनिट तक लाइफलाइन) और कैटेगरी-2 की टेलीस्कोपिक स्लैब दरें।',
    category: 'billing',
    categoryLabelEn: 'Billing & Charges',
    categoryLabelHi: 'बिल व शुल्क',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '48,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Haryana electricity domestic tariff slabs 2025',
      primaryKeywordHi: 'हरियाणा घरेलू बिजली बिल स्लैब रेट 2025',
      secondaryKeywords: ['uhbvn unit rates 2025', 'dhbvn electricity tariff order herc', 'domestic slab rates category 1 category 2', 'subsidy on electricity bill haryana']
    },
    sections: [
      {
        headingEn: '1. Category-I vs Category-II Classification in Haryana',
        headingHi: '1. हरियाणा में कैटेगरी-1 और कैटेगरी-2 का वर्गीकरण',
        contentEn: [
          'Category-I (Lifeline Domestic Consumers): Households whose total consumption does not exceed 100 units per month (200 units in bi-monthly billing). Billed at subsidized rates: ₹2.00 to ₹2.50 per unit.',
          'Category-II (Standard Domestic Consumers): Households consuming above 100 units per month. Billed under telescopic tiered slabs ranging from ₹2.50 to ₹7.10 per unit.'
        ],
        contentHi: [
          'कैटेगरी-1 (लाइफलाइन घरेलू उपभोक्ता): ऐसे परिवार जिनका मासिक उपभोग 100 यूनिट (दो महीने में 200 यूनिट) से अधिक नहीं होता। इन्हें ₹2.00 से ₹2.50 प्रति यूनिट की रियायती दर पर बिजली मिलती है।',
          'कैटेगरी-2 (सामान्य घरेलू उपभोक्ता): 100 यूनिट मासिक से अधिक खर्च करने वाले घर। इनके लिए स्लैब ₹2.50 से लेकर ₹7.10 प्रति यूनिट तक बढ़ते क्रम में लागू होते हैं।'
        ]
      },
      {
        headingEn: '2. Official Tiered Slabs Breakdown',
        headingHi: '2. आधिकारिक स्लैब दरों का पूरा विवरण',
        contentEn: [
          '0 to 150 units: ₹2.75 per unit',
          '151 to 250 units: ₹5.25 per unit',
          '251 to 500 units: ₹6.30 per unit',
          '501 to 800 units: ₹7.10 per unit',
          'Fixed Charges: ₹50 per kW of sanctioned load per month.',
          'State Taxes: Electricity Duty (ED) at 10 paise/unit and Municipal Tax (MT) at 2% within municipal corporation limits.'
        ],
        contentHi: [
          '0 से 150 यूनिट: ₹2.75 प्रति यूनिट',
          '151 से 250 यूनिट: ₹5.25 प्रति यूनिट',
          '251 से 500 यूनिट: ₹6.30 प्रति यूनिट',
          '501 से 800 यूनिट: ₹7.10 प्रति यूनिट',
          'फिक्स्ड चार्ज: स्वीकृत लोड पर ₹50 प्रति किलोवाट प्रति माह।',
          'सरकारी टैक्स: 10 पैसे प्रति यूनिट बिजली शुल्क (ED) तथा नगर निगम क्षेत्रों में 2% म्यूनिसिपल टैक्स (MT)।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Does consuming 151 units make all units expensive?',
        qHi: 'क्या 151 यूनिट होते ही सारी यूनिटें महंगी हो जाती हैं?',
        aEn: 'No, Haryana follows a telescopic slab system for Category II. Only units above 150 are billed at the higher rate of ₹5.25; the first 150 units are still billed at the ₹2.75 slab rate.',
        aHi: 'नहीं, हरियाणा में टेलीस्कोपिक स्लैब प्रणाली है। 150 से ऊपर वाली यूनिटों पर ही ₹5.25 की दर लगती है, पहली 150 यूनिटें ₹2.75 की दर से ही बिल की जाती हैं।'
      }
    ],
    relatedTool: {
      labelEn: 'Interactive Slab Calculator',
      labelHi: 'स्लैब कैलकुलेटर',
      path: '/bill-calculator',
      descEn: 'Calculate your exact bill with full slab breakdown.',
      descHi: 'पूरी स्लैब दरों के साथ अपने बिल की सटीक गणना करें।'
    }
  },
  {
    slug: 'how-to-apply-new-solar-net-meter-uhbvn-dhbvn',
    titleEn: 'How to Apply for Solar Net Meter in Haryana: Feasibility, Inspection & Grid Sync',
    titleHi: 'हरियाणा में सोलर नेट मीटर लगवाने की ऑनलाइन प्रक्रिया: टेक्निकल जांच व ग्रिड कनेक्शन',
    shortDescEn: 'Installed solar panels but waiting for net meter bidirectional synchronization? Understand discom technical feasibility checks, meter testing, and the 15-day installation deadline.',
    shortDescHi: 'सोलर पैनल लगा लिए हैं लेकिन नेट मीटर का इंतजार है? जानें डिस्कॉम की तकनीकी फिजिबिलिटी जांच, लैब टेस्टिंग और 15 दिन के भीतर मीटर लगाने के नियम।',
    category: 'schemes',
    categoryLabelEn: 'Solar & Schemes',
    categoryLabelHi: 'सोलर व सरकारी योजनाएं',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '31,000+ monthly searches in Haryana',
      primaryKeywordEn: 'How to apply solar net meter UHBVN DHBVN',
      primaryKeywordHi: 'हरियाणा सोलर नेट मीटर लगाने की ऑनलाइन प्रक्रिया',
      secondaryKeywords: ['net meter feasibility certificate haryana', 'bidirectional solar meter testing fee', 'discom solar synchronization timeline', 'pmsuryaghar net meter step by step']
    },
    sections: [
      {
        headingEn: '1. Technical Feasibility Check by Discom',
        headingHi: '1. डिस्कॉम द्वारा टेक्निकल फिजिबिलिटी जांच',
        contentEn: [
          'Under HERC Net Metering Regulations, the total capacity of rooftop solar systems connected to a distribution transformer must not exceed 85% of the transformer rated kVA capacity.',
          'Upon applying on the PM Surya Ghar portal, the SDO checks the local transformer loading and issues a Feasibility Approval within 7 days.'
        ],
        contentHi: [
          'HERC नेट मीटरिंग नियमों के तहत किसी भी मोहल्ले के ट्रांसफार्मर पर कुल सोलर क्षमता उसकी क्षमता के 85% से अधिक नहीं हो सकती।',
          'पीएम सूर्य घर पोर्टल पर आवेदन करने के 7 दिन के भीतर SDO ट्रांसफार्मर की जांच करके "फिजिबिलिटी अप्रूवल" (Feasibility Approval) जारी करता है।'
        ]
      },
      {
        headingEn: '2. Net Meter Testing & Grid Synchronization',
        headingHi: '2. नेट मीटर टेस्टिंग और ग्रिड कनेक्शन',
        contentEn: [
          'You can either purchase a certified bidirectional meter from an authorized vendor (tested at Discom M&P Lab) or opt for Discom supply.',
          'The Junior Engineer (JE) inspects the anti-islanding protection in the solar inverter to ensure lineworkers are not electrocuted during grid power outages.',
          'Once commissioned, the Net Meter Agreement is executed and bidirectional billing starts.'
        ],
        contentHi: [
          'आप अधिकृत वेंडर से सर्टिफाइड बाय-डायरेक्शनल मीटर खरीद सकते हैं (M&P लैब टेस्टिंग के साथ) या निगम से ले सकते हैं।',
          'जेई (JE) सोलर इनवर्टर के एंटी-आइसलैंडिंग (Anti-islanding) फीचर की जांच करता है ताकि ग्रिड बंद होने पर लाइनमैन को करंट न लगे।',
          'कमीशनिंग के बाद नेट मीटर एग्रीमेंट साइन होता है और अगले बिल से सोलर यूनिटें घटनी शुरू हो जाती हैं।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'What happens to surplus solar units at the end of the financial year in Haryana?',
        qHi: 'वित्तीय वर्ष के अंत में बची हुई सोलर यूनिटों का क्या होता है?',
        aEn: 'Surplus banked solar units as on 31st March are purchased by UHBVN/DHBVN at the average power purchase cost (APPC) determined by HERC, and the amount is credited directly to your bank account or adjusted in future bills.',
        aHi: '31 मार्च तक बची हुई अतिरिक्त यूनिटों को बिजली निगम HERC द्वारा निर्धारित औसत दर (APPC) पर खरीद लेता है और यह पैसा आपके खाते में भेज दिया जाता है।'
      }
    ],
    relatedTool: {
      labelEn: 'Solar Savings & Subsidy Calculator',
      labelHi: 'सोलर कैलकुलेटर',
      path: '/solar-calculator',
      descEn: 'Calculate your solar net meter capacity and payback period.',
      descHi: 'अपनी जरूरत के अनुसार सही सोलर क्षमता व बचत जानें।'
    }
  },
  {
    slug: 'commercial-vs-domestic-electricity-connection-rules',
    titleEn: 'Commercial vs Domestic Electricity Connection in Haryana: Shop, Home Office & PG Rules',
    titleHi: 'दुकान या पीजी में घरेलू मीटर चलाने पर पेनल्टी व नियम: कमर्शियल vs घरेलू कनेक्शन',
    shortDescEn: 'Running a boutique, grocery shop, tuition center, or paying guest (PG) from your home in Haryana? Understand Section 126 unauthorized use of electricity, tariff differences, and legal boundaries.',
    shortDescHi: 'घर से दुकान, कोचिंग सेंटर या पीजी (PG) चला रहे हैं? जानें धारा 126 के तहत अनधिकृत उपयोग की पेनल्टी, कमर्शियल व घरेलू बिजली दरों का अंतर और कानूनी नियम।',
    category: 'legal',
    categoryLabelEn: 'Legal & Rights',
    categoryLabelHi: 'कानून व अधिकार',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '25,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Commercial vs domestic electricity connection rules Haryana',
      primaryKeywordHi: 'दुकान या पीजी में घरेलू मीटर चलाने पर पेनल्टी व नियम',
      secondaryKeywords: ['section 126 unauthorized use of electricity haryana', 'tuition center electricity tariff uhbvn', 'pg electricity connection commercial or domestic', 'nds tariff rate haryana']
    },
    sections: [
      {
        headingEn: '1. What Qualifies as Non-Domestic Supply (NDS)?',
        headingHi: '1. कमर्शियल (NDS) और घरेलू (DS) में क्या फर्क है?',
        contentEn: [
          'Domestic Supply (DS): Exclusively for residential living, kitchen, lighting, fans, and private domestic appliances.',
          'Non-Domestic Supply (NDS): Any commercial, professional, or trading activity including retail shops, coaching institutes, clinics, salons, restaurants, and rented guest accommodations (PGs).',
          'Using a domestic meter for an NDS activity without a dual-tariff partition is treated as Unauthorized Use under Section 126 of the Electricity Act.'
        ],
        contentHi: [
          'घरेलू सप्लाई (DS): केवल पारिवारिक रहने, रसोई, पंखे, लाइट और निजी घरेलू उपयोग के लिए।',
          'कमर्शियल सप्लाई (NDS): कोई भी व्यापारिक, व्यावसायिक या कोचिंग गतिविधि जैसे दुकान, सैलून, क्लिनिक, होटल और किराए के पीजी (PG)।',
          'घरेलू मीटर की बिजली को व्यावसायिक काम में लगाना धारा 126 के तहत "अनधिकृत उपयोग" माना जाता है जिसमें दोगुने टैरिफ पर पेनल्टी लगती है।'
        ]
      },
      {
        headingEn: '2. Penalty Calculation Under Section 126',
        headingHi: '2. धारा 126 के तहत पेनल्टी कैसे निकाली जाती है?',
        contentEn: [
          'Assessment Formula: Twice the tariff rate applicable for the non-domestic category on the entire connected load for the preceding 12 months.',
          'How to Legalize: If running a small shop in front of your house, apply for a separate 1 kW or 2 kW NDS commercial meter rather than risking vigilance raid assessments.'
        ],
        contentHi: [
          'पेनल्टी का फार्मूला: पिछले 12 महीनों के कुल लोड पर कमर्शियल दर के दोगुने रेट (2x Tariff) से असेसमेंट बनाकर वसूली की जाती है।',
          'बचने का कानूनी उपाय: यदि घर के आगे छोटी दुकान है, तो दुकान के लिए अलग 1 या 2 किलोवाट का कमर्शियल (NDS) मीटर लगवा लें।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can home-based freelancers or IT workers use domestic electricity?',
        qHi: 'क्या घर से वर्क-फ्रॉम-होम (IT/फ्रीलांसिंग) करने वालों को कमर्शियल मीटर लेना होगा?',
        aEn: 'No. Work-from-home IT professionals, remote employees, and artists using standard laptops and home desks remain 100% under the Domestic category as long as no public walk-in commercial transactions take place.',
        aHi: 'नहीं! घर से लैपटॉप पर काम करने वाले आईटी प्रोफेशनल्स व फ्रीलांसर घरेलू श्रेणी में ही आते हैं, जब तक कि घर में ग्राहकों की आवाजाही वाली दुकान न खुली हो।'
      }
    ],
    relatedTool: {
      labelEn: 'Apply for New Connection / Sub-Meter',
      labelHi: 'नया कनेक्शन गाइड',
      path: '/new-connection',
      descEn: 'Check steps to apply for a separate commercial meter.',
      descHi: 'अलग कमर्शियल मीटर के आवेदन की प्रक्रिया देखें।'
    }
  },
  {
    slug: 'electricity-meter-seals-verification-rules',
    titleEn: 'Electricity Meter Seals in Haryana: Lead Seals, Holographic Seals & Tampering Fines',
    titleHi: 'बिजली मीटर की सील टूटने पर क्या करें: प्लास्टिक सील, होलोग्राफिक सील व भारी जुर्माने से बचाव',
    shortDescEn: 'Meter seal broken due to rust, painting work, or rats? Learn why broken meter seals trigger automatic theft notices in Haryana and the exact legal procedure to report it before vigilance raids.',
    shortDescHi: 'क्या आपके मीटर की सील टूट गई है या जंग लग गई है? जानें टूटी सील पर बिजली चोरी के मुकदमे से बचने और खुद SDO को रिपोर्ट करके नई सील लगवाने की कानूनी प्रक्रिया।',
    category: 'meter',
    categoryLabelEn: 'Meters & Devices',
    categoryLabelHi: 'मीटर व उपकरण',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '20,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Electricity meter seals verification rules Haryana',
      primaryKeywordHi: 'बिजली मीटर की सील टूटने पर क्या करें',
      secondaryKeywords: ['meter terminal cover seal broken uhbvn', 'holographic seal number verification dhbvn', 'meter seal replacement charges haryana', 'report broken meter seal sdo format']
    },
    sections: [
      {
        headingEn: '1. The 3 Official Seals on Every Haryana Electricity Meter',
        headingHi: '1. हर बिजली मीटर पर लगी 3 सरकारी सीलें',
        contentEn: [
          '1. Meter Body / Manufacturer Seal: Affixed at the factory/testing lab to ensure the meter casing is never opened.',
          '2. Terminal Cover Seal: Affixed by the Junior Engineer (JE) upon installation to seal the incoming phase/neutral terminals.',
          '3. Meter Box / Pillar Box Seal: Transparent plastic or holographic seal on the outer protective enclosure.',
          'All seal serial numbers are formally recorded in the official Measurement Book (MB) and the Discom IT system.'
        ],
        contentHi: [
          '1. मीटर बॉडी / मैन्युफैक्चरर सील: लैब या फैक्ट्री में लगाई जाती है ताकि मीटर का डिब्बा खोला न जा सके।',
          '2. टर्मिनल कवर सील: नया कनेक्शन लगाने पर जेई द्वारा तारों के इनपुट/आउटपुट स्क्रू पर लगाई जाती है।',
          '3. मीटर बॉक्स / पिलर सील: बाहरी प्लास्टिक डिब्बे पर लगी होलोग्राफिक सील।',
          'इन सभी सीलों के नंबर निगम के रजिस्टर (मेजरमेंट बुक) और कंप्यूटर रिकॉर्ड में दर्ज होते हैं।'
        ]
      },
      {
        headingEn: '2. What to Do Immediately If a Seal is Damaged',
        headingHi: '2. सील टूटने पर तुरंत क्या करें?',
        contentEn: [
          'If a seal breaks due to environmental wear, home plastering, or wire burn, DO NOT WAIT for a vigilance raid team to discover it.',
          'Submit a formal written intimation letter to the Sub-Divisional Officer (SDO) under official diary acknowledgement.',
          'Deposit the nominal resealing fee (approx ₹50 to ₹100). The JE will inspect the meter internal register, verify integrity, and affix a new numbered seal with an official Seal Replacement Memo.'
        ],
        contentHi: [
          'यदि पुताई, बारिश, जंग या तार जलने से सील टूट गई है, तो विजिलेंस टीम की चेकिंग का इंतजार न करें।',
          'तुरंत SDO कार्यालय में लिखित सूचना दें और उसकी पावती (डायरी नंबर) अपने पास संभाल कर रखें।',
          'नाममात्र री-सीलिंग फीस (लगभग ₹50-₹100) जमा करें। जेई आकर मीटर की रीडिंग और तारों की जांच करेगा और नया सील नंबर चढ़ाकर आधिकारिक री-सीलिंग मेमो देगा।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Does a broken terminal seal alone prove electricity theft in court?',
        qHi: 'क्या केवल सील टूटी होने पर कोर्ट में बिजली चोरी साबित हो जाती है?',
        aEn: 'No. The High Court of Punjab & Haryana has repeatedly held that a broken seal without corroborating evidence of artificial means (such as external wires, bypass, or lab evidence of internal tampering) cannot substantiate an offense under Section 135.',
        aHi: 'नहीं! पंजाब एवं हरियाणा हाईकोर्ट ने कई फैसलों में स्पष्ट किया है कि जब तक बिजली बाईपास करने या मीटर में छेड़छाड़ का पुख्ता लैब सबूत न हो, तब तक केवल सील टूटने पर धारा 135 का केस नहीं बनता।'
      }
    ],
    relatedTool: {
      labelEn: 'SDO Resealing Intimation Notice',
      labelHi: 'सील बदलने हेतु सूचना पत्र',
      path: '/complaint-generator',
      descEn: 'Draft an official intimation letter to report a damaged meter seal.',
      descHi: 'टूटी सील की सूचना देकर खुद को पेनल्टी से बचाने हेतु पत्र तैयार करें।'
    }
  },
  {
    slug: 'how-to-check-electricity-bill-online-without-account-number',
    titleEn: 'How to Check Haryana Electricity Bill Without Account Number (Using Mobile & Aadhaar)',
    titleHi: 'बिना खाता नंबर के हरियाणा बिजली बिल ऑनलाइन कैसे देखें: मोबाइल व आधार से चेक करने का तरीका',
    shortDescEn: 'Lost your printed bill and don’t know your 10-digit UHBVN or DHBVN account number? Discover 4 verified ways to retrieve your consumer ID and download your bill duplicate PDF.',
    shortDescHi: 'पुराना बिल खो गया और 10 अंकों का अकाउंट नंबर याद नहीं? जानें रजिस्टर्ड मोबाइल नंबर, आधार और पता बताकर अपना खाता नंबर खोजने और डुप्लीकेट बिल डाउनलोड करने के 4 तरीके।',
    category: 'payments',
    categoryLabelEn: 'Payments & Billing',
    categoryLabelHi: 'भुगतान व बिलिंग',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '36,000+ monthly searches in Haryana',
      primaryKeywordEn: 'How to find UHBVN DHBVN account number',
      primaryKeywordHi: 'मोबाइल नंबर से बिजली बिल कैसे चेक करें हरियाणा',
      secondaryKeywords: ['search uhbvn account number by name', 'download duplicate electricity bill haryana without account number', 'know your discom consumer id', 'check bijli bill by meter number']
    },
    sections: [
      {
        headingEn: '1. The 4 Methods to Retrieve Your Account Number',
        headingHi: '1. खाता नंबर पता करने के 4 आसान तरीके',
        contentEn: [
          'Method 1: By Meter Number: Look at the front display of your physical meter. The stamped serial number (e.g. 12345678) can be used by the SDO billing counter or 1912 helpline executive to look up your 10-digit account number.',
          'Method 2: SMS on Registered Mobile: Check your phone SMS history for texts from "UHBVNL" or "DHBVNL". Every payment alert and bill dispatch SMS includes your 10-digit account ID.',
          'Method 3: Haryana Parivar Pehchan Patra (PPP) Family ID Portal: Log into the Jan Sahayak or Parivar Pehchan Patra portal. Linked electricity meters are listed with exact consumer numbers.',
          'Method 4: Bank Statement / UPI Transaction History: Look up previous utility payments made on Google Pay, PhonePe, or NetBanking; the transaction details show your account number.'
        ],
        contentHi: [
          'तरीका 1: मीटर सीरियल नंबर से: अपने मीटर की स्क्रीन के नीचे छपा सीरियल नंबर (जैसे 12345678) नोट करें। 1912 हेल्पलाइन या बिजली दफ्तर का क्लर्क इस नंबर से आपका अकाउंट नंबर तुरंत बता देगा।',
          'तरीका 2: मोबाइल एसएमएस: अपने फोन में "UHBVNL" या "DHBVNL" के पुराने मैसेज चेक करें। हर बिल और रीचार्ज के एसएमएस में आपका 10 अंकों का खाता नंबर लिखा होता है।',
          'तरीका 3: परिवार पहचान पत्र (PPP): जन सहायक या फैमिली आईडी पोर्टल पर लॉगिन करें। आपके पते से जुड़े बिजली कनेक्शन का विवरण वहां दिख जाता है।',
          'तरीका 4: फोनपे / गूगल पे हिस्ट्री: पुरानी बिल पेमेंट की हिस्ट्री चेक करें, वहां 10 अंकों का कंज्यूमर नंबर हमेशा सेव रहता है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can I pay my electricity bill directly with just my mobile number?',
        qHi: 'क्या केवल मोबाइल नंबर डालकर सीधा बिल भरा जा सकता है?',
        aEn: 'Yes, on modern payment apps (BHIM, Paytm, PhonePe) if your mobile is linked to the Bharat Bill Payment System (BBPS), entering your mobile fetches the pending bill automatically.',
        aHi: 'हाँ, यदि आपका मोबाइल नंबर डिस्कॉम में लिंक है, तो भारत बिल पेमेंट सिस्टम (BBPS) समर्थित ऐप पर मोबाइल डालते ही बिल स्वतः स्क्रीन पर आ जाता है।'
      }
    ],
    relatedTool: {
      labelEn: 'Find Your Discom & Subdivision',
      labelHi: 'डिस्कॉम व सब-डिवीजन खोजें',
      path: '/discom-finder',
      descEn: 'Identify your Discom circle and account prefix.',
      descHi: 'अपने जिले व सब-डिवीजन के आधार पर अकाउंट प्रीफिक्स जानें।'
    }
  },
  {
    slug: 'power-theft-informer-cash-reward-scheme',
    titleEn: 'Haryana Power Theft Informer Reward Scheme: Cash Incentive & Identity Protection Rules',
    titleHi: 'बिजली चोरी की सूचना देने पर नकद इनाम योजना हरियाणा: गुप्त पहचान व इनाम के नियम',
    shortDescEn: 'Aware of commercial power theft or illegal kundi lines? Learn about Haryana Government cash rewards for whistleblowers, confidential reporting channels, and anti-theft vigilance squads.',
    shortDescHi: 'क्या आपके आस-पास बड़े पैमाने पर बिजली चोरी हो रही है? जानें सरकार की व्हिसलब्लोअर नकद इनाम योजना, पहचान गुप्त रखने के नियम और विजिलेंस टीम को गुप्त सूचना देने का तरीका।',
    category: 'legal',
    categoryLabelEn: 'Legal & Rights',
    categoryLabelHi: 'कानून व अधिकार',
    readTimeMinutes: 5,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '14,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Haryana power theft informer reward scheme',
      primaryKeywordHi: 'बिजली चोरी की सूचना देने पर नकद इनाम योजना हरियाणा',
      secondaryKeywords: ['report bijli chori confidential uhbvn dhbvn', 'cash reward for reporting electricity theft haryana', 'anti power theft police station haryana', 'bijli chori helpline number']
    },
    sections: [
      {
        headingEn: '1. Cash Reward Percentage for Whistleblowers',
        headingHi: '1. सूचना देने वाले को कितना नकद इनाम मिलता है?',
        contentEn: [
          'Under Discom vigilance incentives, bona fide informers who provide actionable leads resulting in the detection and realization of electricity theft penalties are rewarded with up to 10% to 20% of the penalty amount realized.',
          'Rewards are disbursed through encrypted channels without disclosing the whistleblower identity.'
        ],
        contentHi: [
          'हरियाणा बिजली निगम की योजना के तहत जो नागरिक बिजली चोरी की सटीक गुप्त सूचना देते हैं और उस पर विजिलेंस टीम द्वारा छापा मारकर जुर्माना वसूला जाता है, उन्हें वसूले गए जुर्माने का 10% से 20% तक नकद इनाम दिया जाता है।',
          'इनाम की राशि बिना किसी सार्वजनिक पहचान के सीधे गोपनीय तरीके से दी जाती है।'
        ]
      },
      {
        headingEn: '2. Strict Confidentiality & Whistleblower Protection',
        headingHi: '2. पहचान की पूर्ण गोपनीयता और सुरक्षा',
        contentEn: [
          'The identity of the informer is accessible only to the Director General of Police (Vigilance) or Chief Vigilance Officer (CVO).',
          'Leads can be submitted via dedicated toll-free vigilance numbers, encrypted WhatsApp reporting lines, or written sealed envelopes.'
        ],
        contentHi: [
          'सूचना देने वाले का नाम और पता केवल पुलिस महानिदेशक (विजिलेंस) या मुख्य सतर्कता अधिकारी (CVO) की व्यक्तिगत कस्टडी में रहता है।',
          'सूचना टोल-फ्री विजिलेंस नंबर, गोपनीय व्हाट्सएप हेल्पलाइन या सीलबंद लिफाफे में भेजी जा सकती है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can someone report power theft anonymously without sharing personal details?',
        qHi: 'क्या बिना अपना नाम बताए पूरी तरह गुप्त शिकायत की जा सकती है?',
        aEn: 'Yes! You can file an anonymous tip-off on the 1912 helpline or official Discom portal. However, to claim the cash reward, basic encrypted verification with the Vigilance Wing is required.',
        aHi: 'हाँ! आप 1912 पर बिना नाम बताए गुप्त शिकायत कर सकते हैं। हालांकि नकद इनाम पाने के लिए विजिलेंस विंग के पास अपनी गोपनीय पहचान दर्ज करानी होती है।'
      }
    ],
    relatedTool: {
      labelEn: '24x7 1912 Helpline Directory',
      labelHi: '1912 हेल्पलाइन निर्देशिका',
      path: '/grievance-1912',
      descEn: 'Access official vigilance numbers and circle control rooms.',
      descHi: 'आधिकारिक विजिलेंस व कंट्रोल रूम के फोन नंबर देखें।'
    }
  },
  {
    slug: 'dg-genset-submeter-dual-source-billing-rules',
    titleEn: 'Dual Source DG Genset vs Grid Electricity Billing in Haryana Societies: HERC Guidelines',
    titleHi: 'सोसायटी में जनरेटर और ग्रिड बिजली के बिलिंग नियम: HERC गाइडलाइन व बिल्डर मनमानी पर रोक',
    shortDescEn: 'Living in a high-rise society in Gurugram, Faridabad or Sonipat? Understand HERC Single Point Connection regulations, dual-source prepaid meters, DG diesel power rates, and common area maintenance (CAM).',
    shortDescHi: 'गुरुग्राम, फरीदाबाद या सोनीपत की बहुमंजिला सोसायटी में रहते हैं? जानें HERC के सिंगल प्वाइंट कनेक्शन नियम, डुअल-सोर्स प्रीपेड मीटर, डीजी जनरेटर की लागत और बिल्डर की मनमानी रोकने के कानूनी उपाय।',
    category: 'billing',
    categoryLabelEn: 'Billing & Charges',
    categoryLabelHi: 'बिल व शुल्क',
    readTimeMinutes: 7,
    lastUpdated: 'Updated for FY 2024-25',
    searchDemand: {
      monthlyVolume: '28,000+ monthly searches in Haryana',
      primaryKeywordEn: 'Dual source electricity meter billing rules Haryana societies',
      primaryKeywordHi: 'सोसायटी में जनरेटर और ग्रिड बिजली के बिलिंग नियम',
      secondaryKeywords: ['single point connection regulation herc', 'dg electricity rate per unit gurugram society', 'builder overcharging electricity bill haryana', 'cam charges vs electricity charges']
    },
    sections: [
      {
        headingEn: '1. HERC Single Point Regulation & Direct Individual Connections',
        headingHi: '1. HERC का सिंगल प्वाइंट रेगुलेशन और व्यक्तिगत मीटर का अधिकार',
        contentEn: [
          'Historically, developers took a bulk Single Point Connection and resold power to residents at arbitrary rates while clubbing Common Area Maintenance (CAM) charges.',
          'HERC Regulations now empower group housing societies to convert to direct individual UHBVN/DHBVN connections if 50% or more of residents vote in favor of individual metering.'
        ],
        contentHi: [
          'पहले बिल्डर पूरी सोसायटी के लिए एक बल्क कनेक्शन लेते थे और निवासियों से मनमाने रेट पर बिजली और मेंटेनेंस (CAM) एक साथ वसूलते थे।',
          'HERC के नए नियमों के तहत यदि 50% या उससे अधिक निवासी सहमत हों, तो पूरी सोसायटी के लिए निगम के सीधे व्यक्तिगत स्मार्ट मीटर (Direct Connections) लगवाए जा सकते हैं।'
        ]
      },
      {
        headingEn: '2. Dual-Source Metering: Grid vs DG Power',
        headingHi: '2. डुअल-सोर्स मीटरिंग: ग्रिड बिजली vs जनरेटर बिजली',
        contentEn: [
          'Dual-source smart meters feature two separate registers: Register 1 for Grid Power (billed strictly at official Discom tariff), and Register 2 for DG Genset Power (billed at actual diesel generation cost).',
          'Developers and RWAs are strictly forbidden from making profit on Grid electricity or disconnecting grid supply due to disputes over maintenance (CAM) dues.'
        ],
        contentHi: [
          'डुअल-सोर्स मीटर में दो अलग-अलग मीटर रजिस्टर होते हैं: रजिस्टर 1 ग्रिड की बिजली के लिए (सरकारी दर पर) और रजिस्टर 2 जनरेटर की बिजली के लिए (डीजल की वास्तविक लागत पर)।',
          'बिल्डर या आरडब्ल्यूए को ग्रिड बिजली पर मुनाफा कमाने या मेंटेनेंस विवाद के कारण बिजली काटने का कोई कानूनी अधिकार नहीं है।'
        ]
      }
    ],
    faqs: [
      {
        qEn: 'Can a builder disconnect my prepaid electricity meter if CAM charges are unpaid?',
        qHi: 'क्या मेंटेनेंस (CAM) न भरने पर बिल्डर बिजली का प्रीपेड मीटर काट सकता है?',
        aEn: 'NO. The Electricity Ombudsman and consumer courts have ruled that electricity cannot be disconnected to enforce recovery of private maintenance charges. Electricity and maintenance must be billed and managed through completely separate accounts.',
        aHi: 'बिल्कुल नहीं! उपभोक्ता अदालत और विद्युत लोकपाल ने साफ आदेश दिए हैं कि मेंटेनेंस की वसूली के लिए बिजली काटना गैरकानूनी है। बिजली और मेंटेनेंस के रीचार्ज अलग-अलग होने चाहिए।'
      }
    ],
    relatedTool: {
      labelEn: 'Interactive Domestic Bill Calculator',
      labelHi: 'घरेलू बिजली बिल कैलकुलेटर',
      path: '/bill-calculator',
      descEn: 'Compare official Discom tariffs with your society charges.',
      descHi: 'सरकारी दरों और अपनी सोसायटी के बिल की तुलना करें।'
    }
  },
  {
    slug: 'how-to-pay-haryana-electricity-bill-online-uhbvn-dhbvn',
    titleEn: 'How to Pay Haryana Electricity Bill Online: UHBVN & DHBVN Official Portal Step-by-Step Guide (0% Fee)',
    titleHi: 'हरियाणा बिजली बिल ऑनलाइन कैसे भरें: UHBVN व DHBVN आधिकारिक पोर्टल, 0% शुल्क व रसीद की पूरी प्रक्रिया',
    shortDescEn: 'Step-by-step master guide to paying your UHBVN or DHBVN power bill online with zero extra convenience fee. Includes verified direct official portal links, 10-digit account lookup, duplicate receipt download, and 48-hour failed payment recovery.',
    shortDescHi: 'बिना किसी अतिरिक्त सुविधा शुल्क (0% Fee) के UHBVN और DHBVN बिजली बिल ऑनलाइन भरने की प्रामाणिक गाइड। आधिकारिक पोर्टल के सीधे लिंक, 10-अंकों का खाता नंबर खोजने, सरकारी रसीद डाउनलोड करने व पैसे कटने पर समाधान की संपूर्ण प्रक्रिया।',
    category: 'payments',
    categoryLabelEn: 'Payment Guides',
    categoryLabelHi: 'भुगतान गाइड',
    readTimeMinutes: 6,
    lastUpdated: 'Updated for FY 2025-26',
    searchDemand: {
      monthlyVolume: '85,000+ monthly searches in Haryana',
      primaryKeywordEn: 'How to pay Haryana electricity bill online UHBVN DHBVN',
      primaryKeywordHi: 'हरियाणा बिजली बिल ऑनलाइन कैसे भरें',
      secondaryKeywords: [
        'uhbvn bill payment online epayment portal',
        'dhbvn online payment without account number',
        'haryana electricity bill receipt download pdf',
        'uhbvn duplicate receipt portal link',
        'electricity bill double payment refund haryana'
      ]
    },
    sections: [
      {
        headingEn: '1. Know Your Discom & Locate Your 10-Digit Account Number',
        headingHi: '1. अपना बिजली निगम पहचानें और 10-अंकों का खाता नंबर प्राप्त करें',
        contentEn: [
          'Haryana electricity distribution is divided between two state power utilities:',
          'North Haryana (UHBVN - Uttar Haryana Bijli Vitran Nigam): Panchkula, Ambala, Yamunanagar, Kurukshetra, Kaithal, Karnal, Panipat, Sonipat, Rohtak, and Jhajjar.',
          'South Haryana (DHBVN - Dakshin Haryana Bijli Vitran Nigam): Gurugram, Faridabad, Palwal, Nuh, Rewari, Mahendragarh (Narnaul), Bhiwani, Charkhi Dadri, Hisar, Fatehabad, and Sirsa.',
          'Your 10-digit account number (e.g., 2918273645) is printed at the top-right corner of your physical electricity bill. If you do not have a physical bill, you can retrieve it from the monthly SMS sent by UHBVN/DHBVN, or by calling 1912 with your meter serial number.'
        ],
        contentHi: [
          'हरियाणा में बिजली वितरण दो सरकारी निगमों (डिस्कॉम) द्वारा संभाला जाता है:',
          'उत्तर हरियाणा (UHBVN): पंचकूला, अंबाला, यमुनानगर, कुरुक्षेत्र, कैथल, करनाल, पानीपत, सोनीपत, रोहतक और झज्जर।',
          'दक्षिण हरियाणा (DHBVN): गुरुग्राम, फरीदाबाद, पलवल, नूह, रेवाड़ी, महेंद्रगढ़ (नारनौल), भिवानी, चरखी दादरी, हिसार, फतेहाबाद और सिरसा।',
          'आपका 10-अंकों का खाता नंबर (जैसे 2918273645) आपके पुराने कागजी बिल के ऊपरी हिस्से में दर्ज होता है। यदि आपके पास बिल नहीं है, तो निगम द्वारा भेजे गए मासिक SMS या 1912 पर कॉल करके मीटर नंबर बताकर खाता नंबर प्राप्त किया जा सकता है।'
        ],
        bulletPointsEn: [
          'Official UHBVN Portal: https://epayment.uhbvn.org.in/',
          'Official DHBVN Portal: https://epayment.dhbvn.org.in/',
          'UHBVN Duplicate Stamped Receipt: https://epayment.uhbvn.org.in/b2cviewDuplicateReceipt.aspx',
          'DHBVN Duplicate Stamped Receipt: https://epayment.dhbvn.org.in/b2cviewDuplicateReceipt.aspx'
        ],
        bulletPointsHi: [
          'आधिकारिक UHBVN पेमेंट पोर्टल: https://epayment.uhbvn.org.in/',
          'आधिकारिक DHBVN पेमेंट पोर्टल: https://epayment.dhbvn.org.in/',
          'UHBVN डुप्लीकेट सरकारी रसीद: https://epayment.uhbvn.org.in/b2cviewDuplicateReceipt.aspx',
          'DHBVN डुप्लीकेट सरकारी रसीद: https://epayment.dhbvn.org.in/b2cviewDuplicateReceipt.aspx'
        ],
        callout: {
          type: 'tip',
          titleEn: 'Direct Zero-Fee Portal Access',
          titleHi: 'शून्य शुल्क वाला सीधा पोर्टल',
          textEn: 'Paying directly via epayment.uhbvn.org.in or epayment.dhbvn.org.in charges ZERO extra convenience fees, unlike third-party recharge apps that often add ₹5 to ₹30 platform fees.',
          textHi: 'निगम के आधिकारिक पोर्टल पर सीधे यूपीआई या डेबिट कार्ड से भुगतान करने पर शून्य (0%) सुविधा शुल्क लगता है, जबकि कई निजी ऐप्स ₹5 से ₹30 तक अतिरिक्त प्लेटफॉर्म चार्ज काटते हैं।'
        }
      },
      {
        headingEn: '2. Step-by-Step Payment Process on the Official Discom Portal',
        headingHi: '2. आधिकारिक डिस्कॉम पोर्टल पर स्टेप-बाय-स्टेप बिल भरने की विधि',
        contentEn: [
          'Step 1: Open the official e-payment portal of your utility (epayment.uhbvn.org.in for UHBVN, or epayment.dhbvn.org.in for DHBVN).',
          'Step 2: Enter your 10-digit Account Number in the box and solve the anti-bot numeric captcha code shown on screen.',
          'Step 3: Click "Proceed". Your live ledger will load showing Consumer Name, Sub-Division, Bill Date, Due Date, Net Amount, and Surcharge Payable after the due date.',
          'Step 4: Verify that the consumer name matches your premises. Enter your Mobile Number and Email Address (for SMS and electronic receipt delivery).',
          'Step 5: Choose your preferred Payment Gateway (SBI, BillDesk, HDFC, or Paytm).',
          'Step 6: On the gateway screen, select UPI (Google Pay, PhonePe, BHIM, Paytm), RuPay Debit Card, or NetBanking. Authorize the transaction in your bank or UPI app.',
          'Step 7: Do NOT close or refresh the window while the bank redirects. The official stamped payment confirmation screen with your Transaction ID and Receipt Number will appear.'
        ],
        contentHi: [
          'स्टेप 1: अपने निगम के आधिकारिक ई-पेमेंट पोर्टल (UHBVN के लिए epayment.uhbvn.org.in या DHBVN के लिए epayment.dhbvn.org.in) पर जाएं।',
          'स्टेप 2: स्क्रीन पर दिए गए बॉक्स में अपना 10 अंकों का खाता संख्या (Account Number) दर्ज करें और स्क्रीन पर दिख रहा कैप्चा कोड भरें।',
          'स्टेप 3: "Proceed" पर क्लिक करें। आपका लाइव बिल लेजर खुल जाएगा जिसमें उपभोक्ता का नाम, सब-डिवीजन, बिल तिथि, देय तिथि (Due Date), शुद्ध राशि और देय तिथि के बाद का सरचार्ज दिखाई देगा।',
          'स्टेप 4: उपभोक्ता का नाम अपने बिल से मिलाएं। मोबाइल नंबर और ईमेल आईडी दर्ज करें (ताकि रसीद और एसएमएस तुरंत प्राप्त हो सके)।',
          'स्टेप 5: पेमेंट गेटवे (SBI, BillDesk, HDFC या Paytm) का चयन करें।',
          'स्टेप 6: गेटवे पर UPI (गूगल पे, फोनपे, भीम, पेटीएम), रूपे डेबिट कार्ड या नेटबैंकिंग चुनें और अपने बैंक ऐप से भुगतान स्वीकृत करें।',
          'स्टेप 7: बैंक से रिडायरेक्ट होते समय ब्राउज़र को रीफ्रेश या बंद न करें। स्क्रीन पर लेन-देन संख्या (Transaction ID) और रसीद संख्या के साथ आधिकारिक भुगतान रसीद आ जाएगी।'
        ],
        callout: {
          type: 'statute',
          titleEn: 'Official Proof of Payment',
          titleHi: 'वैधानिक भुगतान प्रमाण',
          textEn: 'Always click "Download Receipt PDF" or print the generated payment voucher. Under HERC Supply Code Regulation 6.5, this electronic receipt is legally binding proof of clearance of dues against any wrongful line disconnection.',
          textHi: 'भुगतान के तुरंत बाद "Download Receipt PDF" पर क्लिक करके रसीद अवश्य सुरक्षित रखें। HERC सप्लाई कोड नियम 6.5 के अनुसार यह डिजिटल रसीद लाइन कटने से बचाव का वैधानिक सरकारी प्रमाण है।'
        }
      },
      {
        headingEn: '3. How to Download Stamped Duplicate Receipt Anytime',
        headingHi: '3. कभी भी सरकारी मुहर वाली डुप्लीकेट रसीद कैसे डाउनलोड करें?',
        contentEn: [
          'If you paid your bill but forgot to save the receipt, or if your browser crashed, UHBVN and DHBVN maintain a public duplicate receipt repository.',
          'Visit epayment.uhbvn.org.in/b2cviewDuplicateReceipt.aspx or epayment.dhbvn.org.in/b2cviewDuplicateReceipt.aspx.',
          'Enter your 10-digit Account Number and select the payment date or transaction range.',
          'Click View/Print. A digitally signed, computer-generated receipt with Discom seal, Sub-division name, payment mode, and clearance status will be downloaded in PDF format.'
        ],
        contentHi: [
          'यदि आपने बिल भर दिया किंतु रसीद डाउनलोड करना भूल गए, या इंटरनेट बंद होने से पेज कट गया, तो दोनों निगमों के पास ऑनलाइन डुप्लीकेट रसीद का स्थायी विकल्प मौजूद है।',
          'epayment.uhbvn.org.in/b2cviewDuplicateReceipt.aspx (UHBVN) या epayment.dhbvn.org.in/b2cviewDuplicateReceipt.aspx (DHBVN) पर जाएं।',
          'अपना 10-अंकों का खाता नंबर डालें और भुगतान की तिथि या हालिया ट्रांजेक्शन चुनें।',
          'View/Print पर क्लिक करें। निगम की मुहर, सब-डिवीजन का नाम, भुगतान का माध्यम और बैंक संदर्भ संख्या वाली वैध पीडीएफ रसीद तुरंत डाउनलोड हो जाएगी।'
        ]
      },
      {
        headingEn: '4. Alternative 0% Fee Payment Modes in Haryana',
        headingHi: '4. हरियाणा में बिल भरने के अन्य शून्य शुल्क (0% Fee) विकल्प',
        contentEn: [
          '1. Dynamic UPI QR Code on Physical Bill: Scan the unique Bharat QR printed on your latest paper bill with any UPI app. The exact amount and Discom VPA are pre-loaded with instant clearance.',
          '2. Official WhatsApp Chatbots: Save the verified Discom numbers to check and pay bills via WhatsApp without installing any app:',
          '   • UHBVN WhatsApp Service: +91 9815961912',
          '   • DHBVN WhatsApp Service: +91 8813999708',
          '3. Authorized Village Antyodaya Kendra / CSC Centers: Pay by cash or card at official CSC Kendras across Haryana. CSC VLEs are strictly prohibited from charging any extra citizen commission.'
        ],
        contentHi: [
          '1. कागजी बिल पर छपा डायनामिक UPI QR कोड: अपने बिल पर छपे क्यूआर कोड को किसी भी यूपीआई ऐप से सीधे स्कैन करें। इसमें बिल की सही राशि पहले से भरी होती है और तुरंत भुगतान हो जाता है।',
          '2. आधिकारिक व्हाट्सएप चैटबॉट सेवा: दोनों निगमों के सत्यापित व्हाट्सएप नंबरों पर "Hi" लिखकर तुरंत बिल देखें व पे करें:',
          '   • UHBVN व्हाट्सएप हेल्पलाइन: +91 9815961912',
          '   • DHBVN व्हाट्सएप हेल्पलाइन: +91 8813999708',
          '3. नजदीकी अंत्योदय केंद्र / सीएससी सेंटर (CSC): ग्रामीण व शहरी सीएससी केंद्रों पर नकद बिल भरने पर भी उपभोक्ता से कोई अतिरिक्त कमीशन नहीं लिया जा सकता।'
        ]
      },
      {
        headingEn: '5. What if Money is Deducted but Bill Status Remains Unpaid? (48-Hour Rule)',
        headingHi: '5. बैंक से पैसे कट गए किंतु बिल "Unpaid" दिख रहा है? (48 घंटे का नियम)',
        contentEn: [
          'Inter-Bank Settlement Delay: When paying via UPI or NetBanking, your bank debits the funds instantly, but the payment aggregator (BillDesk/SBI) may take up to 24 to 48 banking hours to reconcile the funds with the Discom server.',
          'Rule 1: DO NOT PAY AGAIN IMMEDIATELY. In 95% of cases, the payment automatically reconciles and updates to "Paid" within 48 hours.',
          'Rule 2: If the status does not update after 48 hours, check your bank statement. If money returned to your account, you can repay safely. If not, lodge a complaint on 1912 with your Bank UTR Number and Transaction Date.',
          'Rule 3: In the rare event of a double debit, UHBVN/DHBVN does not forfeit your funds. Under HERC regulations, the surplus amount is automatically credited as Advance Consumption Deposit (ACD) in your next billing cycle, earning you statutory interest.'
        ],
        contentHi: [
          'बैंक सर्वर व गेटवे सेटलमेंट: यूपीआई या नेटबैंकिंग से पैसे कटने पर आपके बैंक खाते से राशि तुरंत कट जाती है, किंतु गेटवे (बिलडेस्क या एसबीआई) द्वारा निगम के सर्वर में डेटा मिलान (रिकॉन्सिलिएशन) होने में 24 से 48 घंटे लग सकते हैं।',
          'नियम 1: तुरंत दोबारा भुगतान न करें! 95% मामलों में 48 घंटे के भीतर भुगतान अपने आप पास होकर बिल "Paid" हो जाता है।',
          'नियम 2: 48 घंटे बाद भी स्टेटस अपडेट न हो तो बैंक स्टेटमेंट देखें। यदि पैसे बैंक में वापस नहीं आए, तो बैंक का यूटीआर नंबर (UTR No.) लेकर 1912 पर कॉल करके डॉकट दर्ज कराएं।',
          'नियम 3: यदि दुर्घटनावश दो बार पैसे कट जाएं, तो निगम आपकी राशि जब्त नहीं करता। HERC नियमों के तहत अतिरिक्त राशि आपके अगले बिल में अग्रिम जमा (Advance Credit) के रूप में घटा दी जाती है जिस पर ब्याज भी मिलता है।'
        ],
        callout: {
          type: 'warning',
          titleEn: 'Avoid Fake Payment APKs & Unverified Links',
          titleHi: 'फर्जी APK और अनधिकृत लिंक से सावधान रहें',
          textEn: 'Never install third-party APK files or click SMS links claiming your power will be cut tonight at 9:30 PM. UHBVN and DHBVN never send payment links via personal 10-digit mobile numbers. Use only official epayment.uhbvn.org.in or epayment.dhbvn.org.in portals.',
          textHi: 'कभी भी व्हाट्सएप या अनजान नंबर से आए SMS में दिए गए लिंक पर क्लिक न करें जिसमें लिखा हो कि "आज रात 9:30 बजे बिजली कट जाएगी, तुरंत इस नंबर पर कॉल करें"। बिजली निगम कभी भी व्यक्तिगत मोबाइल नंबर से लिंक नहीं भेजता।'
        }
      }
    ],
    faqs: [
      {
        qEn: 'Are there any extra transaction charges on the official UHBVN/DHBVN payment website?',
        qHi: 'क्या आधिकारिक UHBVN या DHBVN वेबसाइट पर बिल भरने पर कोई अतिरिक्त चार्ज लगता है?',
        aEn: 'No. Payments made through UPI (BHIM, Google Pay, PhonePe, Paytm), RuPay Debit Cards, and NetBanking on the official Discom e-payment portal carry 0% transaction or convenience fee.',
        aHi: 'बिल्कुल नहीं! आधिकारिक डिस्कॉम ई-पेमेंट पोर्टल पर यूपीआई (गूगल पे, फोनपे, भीम), रूपे डेबिट कार्ड और नेटबैंकिंग से भुगतान करने पर शून्य (0%) अतिरिक्त चार्ज लगता है।'
      },
      {
        qEn: 'Can I pay my Haryana electricity bill online after the due date?',
        qHi: 'क्या देय तिथि (Due Date) निकल जाने के बाद भी ऑनलाइन बिल भरा जा सकता है?',
        aEn: 'Yes. The portal automatically computes the statutory Late Payment Surcharge (LPSC - typically 2% on domestic connections or minimum ₹100), enabling you to clear your bill safely online without visiting the sub-divisional office.',
        aHi: 'हाँ! देय तिथि निकल जाने पर भी पोर्टल अपने आप 2% सरचार्ज (LPSC) जोड़कर कुल देय राशि दिखा देता है, जिसे आप बिना सब-डिवीजन ऑफिस के चक्कर काटे घर बैठे ऑनलाइन भर सकते हैं।'
      },
      {
        qEn: 'Where can I find the official links to pay UHBVN and DHBVN bills directly?',
        qHi: 'UHBVN और DHBVN के सीधे आधिकारिक पेमेंट लिंक कौन से हैं?',
        aEn: 'For North Haryana (Panchkula, Karnal, Rohtak, Sonipat, etc.), use epayment.uhbvn.org.in. For South Haryana (Gurugram, Faridabad, Hisar, Rewari, etc.), use epayment.dhbvn.org.in.',
        aHi: 'उत्तर हरियाणा (पंचकूला, करनाल, रोहतक, सोनीपत आदि) के लिए epayment.uhbvn.org.in और दक्षिण हरियाणा (गुरुग्राम, फरीदाबाद, हिसार, रेवाड़ी आदि) के लिए epayment.dhbvn.org.in आधिकारिक पोर्टल हैं।'
      },
      {
        qEn: 'What is the official WhatsApp chatbot number to pay UHBVN and DHBVN electricity bills?',
        qHi: 'हरियाणा बिजली बिल भरने के लिए आधिकारिक व्हाट्सएप नंबर क्या हैं?',
        aEn: 'UHBVN consumers can chat with +91 9815961912, and DHBVN consumers can chat with +91 8813999708. Type "Hi" to view dues, download bills, and pay via official links.',
        aHi: 'UHBVN उपभोक्ताओं के लिए +91 9815961912 और DHBVN उपभोक्ताओं के लिए +91 8813999708 आधिकारिक व्हाट्सएप नंबर हैं। "Hi" भेजकर आप बिल देख सकते हैं और सीधे भुगतान कर सकते हैं।'
      }
    ],
    relatedTool: {
      labelEn: 'Haryana Quick Pay & Official Discom Portal Hub',
      labelHi: 'हरियाणा क्विक पे व डायरेक्ट डिस्कॉम पोर्टल',
      path: '/quick-pay',
      descEn: 'Enter your 10-digit account number to be directly redirected to your official pre-filled UHBVN or DHBVN bill.',
      descHi: 'अपना 10-अंकों का खाता नंबर डालें और सीधे अपने आधिकारिक UHBVN या DHBVN बिल पर जाएं।'
    },
    officialReference: {
      circularNo: 'Commercial Circular No. U-06/2022 & D-08/2022 (Zero Surcharge Online Billing)',
      authority: 'Haryana Power Utilities (UHBVN & DHBVN) E-Governance Directorate',
      downloadUrl: 'https://epayment.uhbvn.org.in/'
    }
  }
];

export const ARTICLE_CATEGORIES: { id: Article['category']; labelEn: string; labelHi: string; icon: string }[] = [
  { id: 'billing', labelEn: 'Billing & Charges', labelHi: 'बिल व शुल्क', icon: 'FileText' },
  { id: 'meter', labelEn: 'Meters & Devices', labelHi: 'मीटर व उपकरण', icon: 'Cpu' },
  { id: 'connections', labelEn: 'Connections & Load', labelHi: 'कनेक्शन व लोड', icon: 'Zap' },
  { id: 'legal', labelEn: 'Legal & Consumer Rights', labelHi: 'कानून व अधिकार', icon: 'Scale' },
  { id: 'schemes', labelEn: 'Solar & Waivers', labelHi: 'सोलर व योजनाएं', icon: 'Sun' },
  { id: 'payments', labelEn: 'Payment Guides', labelHi: 'भुगतान गाइड', icon: 'CreditCard' },
];
