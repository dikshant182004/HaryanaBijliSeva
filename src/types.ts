export type DiscomType = 'UHBVN' | 'DHBVN';

export type Language = 'en' | 'hi';

export interface DistrictFaq {
  qEn: string;
  qHi: string;
  aEn: string;
  aHi: string;
}

export interface DistrictInfo {
  id: string;
  nameEn: string;
  nameHi: string;
  discom: DiscomType;
  headquartersEn: string;
  headquartersHi: string;
  circleName: string;
  accountPrefixes: string[];
  samplePincodes: string[];
  subdivisions: string[];
  contactPhone: string;
  circleOfficeAddressEn: string;
  circleOfficeAddressHi: string;
  cgrfZonalOfficeEn?: string;
  cgrfZonalOfficeHi?: string;
  descriptionEn?: string;
  descriptionHi?: string;
  localKeywords?: string[];
  faqs?: DistrictFaq[];
}

export type ConnectionCategory = 'domestic' | 'nondomestic' | 'agriculture' | 'industrial_lt' | 'industrial_ht';

export interface FeeEstimateResult {
  category: ConnectionCategory;
  loadKw: number;
  isPrepaidSmartMeter: boolean;
  applicationFee: number;
  acdSecurityDeposit: number;
  serviceConnectionCharges: number;
  meterSecurity: number;
  totalEstimatedCost: number;
  supplyType: 'single_phase' | 'three_phase';
}

export interface BillEstimateResult {
  units: number;
  sanctionedLoadKw: number;
  category: 'cat1' | 'cat2' | 'cat3';
  categoryLabel: string;
  energyCharges: number;
  slabBreakdown: { slab: string; units: number; rate: number; amount: number }[];
  fixedCharges: number;
  fsaCharge: number; // Fuel Surcharge Adjustment (FSA / FPPPA)
  electricityDuty: number; // ED (State)
  municipalTax: number; // MT
  smartMeterRebate: number; // 5% discount if prepaid
  totalBill: number;
}

export type PageRoute = 
  | 'home'
  | 'discom-finder'
  | 'new-connection'
  | 'name-transfer'
  | 'grievance-1912'
  | 'bill-calculator'
  | 'districts'
  | 'district-detail'
  | 'articles'
  | 'article-detail';

export type ArticleCategory = 'billing' | 'meter' | 'connections' | 'legal' | 'schemes' | 'payments';

export interface ArticleSection {
  headingEn: string;
  headingHi: string;
  contentEn: string[];
  contentHi: string[];
  bulletPointsEn?: string[];
  bulletPointsHi?: string[];
  callout?: {
    type: 'tip' | 'warning' | 'statute';
    titleEn: string;
    titleHi: string;
    textEn: string;
    textHi: string;
  };
}

export interface Article {
  slug: string;
  titleEn: string;
  titleHi: string;
  shortDescEn: string;
  shortDescHi: string;
  category: ArticleCategory;
  categoryLabelEn: string;
  categoryLabelHi: string;
  readTimeMinutes: number;
  lastUpdated: string;
  searchDemand: {
    monthlyVolume: string;
    primaryKeywordEn: string;
    primaryKeywordHi: string;
    secondaryKeywords: string[];
  };
  sections: ArticleSection[];
  faqs: {
    qEn: string;
    qHi: string;
    aEn: string;
    aHi: string;
  }[];
  relatedTool?: {
    labelEn: string;
    labelHi: string;
    path: string;
    descEn: string;
    descHi: string;
  };
  officialReference?: {
    circularNo: string;
    authority: string;
    downloadUrl?: string;
  };
}

