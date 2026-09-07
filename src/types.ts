export type DiscomType = 'UHBVN' | 'DHBVN';

export type Language = 'en' | 'hi';

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
  descriptionEn?: string;
  descriptionHi?: string;
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
  | 'district-detail';

