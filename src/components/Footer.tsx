import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  MapPin,
  Phone,
  Mail,
  Building,
  ChevronRight,
  ShieldCheck,
  FileText,
  Globe,
  ArrowUp
} from 'lucide-react';
import { SceLogo } from './SceLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
  onOpenProfile: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenProfile
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & About (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-block p-2 bg-white rounded mb-2">
              <SceLogo size="md" />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-widest">
              Công Ty TNHH Sản Xuất Và Thương Mại SCE
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Nhà cung cấp máy tính đồng bộ và phần mềm Microsoft chính hãng dành riêng cho khối Giáo dục & Doanh nghiệp.
            </p>
            
            <div className="p-4 rounded border border-slate-700 bg-slate-800 text-xs space-y-2 mt-4">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Mã số doanh nghiệp:</strong> {COMPANY_INFO.taxId}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Building className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Đại diện pháp luật:</strong> {COMPANY_INFO.director} - Giám đốc</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Cấp bởi:</strong> Sở Kế hoạch & Đầu tư TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest border-b border-slate-700 pb-2">
              Giải Pháp & Sản Phẩm
            </h4>
            <ul className="space-y-3 text-[13px]">
              <li>
                <button
                  onClick={() => onNavigate('software')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Bản quyền Microsoft 365 & Office</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hardware')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Máy tính đồng bộ Dell, HP, Lenovo</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Headquarters (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest border-b border-slate-700 pb-2">
              Thông Tin Liên Hệ
            </h4>
            <div className="space-y-3 text-[13px] text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">VPGD:</strong> {COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Trụ sở:</strong> {COMPANY_INFO.registeredAddress}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#cc0000] shrink-0" />
                <span>
                  <strong className="text-white">Hotline kinh doanh:</strong>{' '}
                  <a
                    href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
                    className="text-amber-400 hover:underline font-bold"
                  >
                    {COMPANY_INFO.hotline}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white">Email:</strong>{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-slate-300 hover:text-white hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>
                  <strong className="text-white">Website:</strong> {COMPANY_INFO.website}
                </span>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                onClick={onOpenProfile}
                className="w-full py-2.5 px-4 rounded bg-slate-800 hover:bg-slate-700 text-sm font-bold text-white transition-colors flex items-center justify-center gap-2 border border-slate-700"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Hồ Sơ Năng Lực SCE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 uppercase tracking-widest font-bold">
          <div>
            © {new Date().getFullYear()} CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI SCE. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Lên Đầu Trang</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
