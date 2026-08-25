export type CategoryType = 'all' | 'smart-charge' | 'pc-upgrade' | 'software' | 'hardware' | 'maintenance';

export interface SoftwareProduct {
  id: string;
  name: string;
  category: 'software';
  subCategory: 'office365' | 'office' | 'windows';
  price: number;
  unit: string;
  duration: string;
  summary: string;
  badge?: string;
  features: string[];
  targetAudience: 'Trường học' | 'Doanh nghiệp' | 'Cá nhân & Gia đình' | 'Tất cả';
  systemRequirements?: string;
  pros: string[];
  consOrNotes?: string;
  popular?: boolean;
}

export interface HardwareProduct {
  id: string;
  name: string;
  category: 'hardware';
  subCategory: 'desktop' | 'laptop' | 'component' | 'accessory';
  estimatedPrice: string;
  brand: string;
  specs: {
    cpu?: string;
    ram?: string;
    storage?: string;
    display?: string;
    gpu?: string;
    ports?: string;
    warranty: string;
  };
  highlight: string;
  tags: string[];
  imageType: string;
}

export interface SmartCabinetModel {
  id: string;
  name: string;
  capacity: string;
  dimensions: string;
  material: string;
  electricalSafety: string[];
  features: string[];
  batteryProtection: string;
  image: string;
  badge: string;
}

export interface UpgradePackage {
  id: string;
  title: string;
  targetDevice: string;
  beforeStatus: string;
  afterStatus: string;
  components: string[];
  estimatedCostPerUnit: number;
  savingsPercent: number;
  highlight: string;
}

export interface MaintenanceService {
  id: string;
  title: string;
  stepNumber: number;
  description: string;
  details: string[];
  frequency: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  schoolName: string;
  schoolType: 'Tiểu học' | 'THCS' | 'THPT' | 'Đại học' | 'Doanh nghiệp';
  location: string;
  projectType: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  quote?: string;
  tag: string;
}

export interface Partner {
  name: string;
  category: 'Công nghệ' | 'Hạ tầng' | 'Giáo dục';
  role: string;
  logoText: string;
}

export interface QuoteItem {
  type: 'upgrade' | 'smart-cabinet' | 'software' | 'maintenance' | 'hardware';
  name: string;
  unitPrice: number;
  quantity: number;
  unit: string;
  note?: string;
}

export interface SurveyRequest {
  fullName: string;
  role: string;
  organizationName: string;
  organizationType: 'primary' | 'secondary' | 'highschool' | 'university' | 'business' | 'other';
  phone: string;
  email: string;
  cityDistrict: string;
  deviceCount: number;
  needs: string[];
  notes: string;
  preferredDate?: string;
}
