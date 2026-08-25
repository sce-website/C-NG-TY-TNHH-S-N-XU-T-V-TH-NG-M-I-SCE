import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { SceLogo } from './SceLogo';
import {
  FileText,
  ShieldCheck,
  Building,
  UserCheck,
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  Printer,
  X,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <SceLogo size="sm" showText={false} />
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Hồ Sơ Năng Lực & Pháp Lý Doanh Nghiệp
              </h3>
              <p className="text-[11px] text-slate-500">
                CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI SCE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-colors text-xs flex items-center gap-1.5"
              title="In hoặc lưu hồ sơ"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline font-semibold">In Hồ Sơ</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Header Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold uppercase border border-blue-400/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Pháp Lý Minh Bạch • Giấy ĐKKD 0318877762
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {COMPANY_INFO.name}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 italic">
              "{COMPANY_INFO.missionStatement}"
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-700/80 text-xs">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Mã số thuế</span>
                <span className="font-mono font-bold text-sky-300">{COMPANY_INFO.taxId}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Đại diện pháp luật</span>
                <span className="font-bold text-white">{COMPANY_INFO.director}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Hotline PKD</span>
                <span className="font-bold text-amber-300">{COMPANY_INFO.hotline}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Email liên hệ</span>
                <span className="font-bold text-white truncate block">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Legal Business Certificate Section */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Building className="w-4 h-4 text-blue-600" />
              1. Thông Tin Đăng Ký Kinh Doanh (Sở Kế Hoạch & Đầu Tư TP.HCM)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div>
                  <span className="text-slate-500 block">Tên công ty tiếng Việt:</span>
                  <span className="font-bold text-slate-900">{COMPANY_INFO.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Tên công ty tiếng nước ngoài:</span>
                  <span className="font-bold text-slate-900">{COMPANY_INFO.internationalName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Tên viết tắt:</span>
                  <span className="font-bold text-blue-700">SCE TRADING AND PRODUCTION CO.,LTD</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Vốn điều lệ:</span>
                  <span className="font-bold text-slate-900">700.000.000 VNĐ (Bảy trăm triệu đồng)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div>
                  <span className="text-slate-500 block">Người đại diện theo pháp luật:</span>
                  <span className="font-bold text-slate-900">Ông {COMPANY_INFO.director} - Chức danh: Giám đốc</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Ngày cấp lần đầu:</span>
                  <span className="font-medium text-slate-800">{COMPANY_INFO.foundedDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Địa chỉ trụ sở chính:</span>
                  <span className="font-medium text-slate-800">{COMPANY_INFO.registeredAddress}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Địa chỉ văn phòng giao dịch:</span>
                  <span className="font-medium text-slate-800">{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sứ mệnh & Thông điệp gửi Hiệu trưởng */}
          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
            <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-700" />
              2. Thông Điệp Gửi Hiệu Trưởng & Quản Lý Trường Học
            </h4>
            <p className="text-xs text-blue-950 font-medium italic leading-relaxed">
              "{COMPANY_INFO.principalMessage}"
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Chúng tôi hiểu rằng an toàn tính mạng của học sinh và tài sản công là trên hết. Mọi sản phẩm tủ sạc và quy trình thi công phòng máy của SCE đều được thiết kế tỉ mỉ, có cầu dao chống giật RCBO 30mA, hệ thống ngắt sạc thông minh chống chai pin và dây cáp âm bàn gọn gàng.
            </p>
          </div>

          {/* Core Business Competencies */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              3. Danh Mục Năng Lực Cung Cấp & Sản Xuất
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Sản xuất Tủ sạc Smart-Charge SCE:</strong> Tủ sạc chống sốc điện, timer tự ngắt thông minh cho 30-40 Laptop/Tablet.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Nâng cấp & Tối ưu phòng máy tính:</strong> Thay SSD, nâng RAM, tối ưu Windows, giảm thời gian boot từ 10p xuống &lt;30s.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Phân phối phần mềm Microsoft chính hãng:</strong> Windows 11 Pro OEM/FPP, Microsoft 365 Business, Office Pro Plus 2021.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Dịch vụ bảo trì CNTT trọn gói:</strong> Vệ sinh công nghiệp, tra keo tản nhiệt MX-4, rà soát an toàn điện & mạng LAN.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-md p-6 border-t border-slate-200 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500 hidden sm:block">
            Hotline tiếp nhận hồ sơ: <strong>{COMPANY_INFO.hotline}</strong> (Mr. Duy)
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Đăng Ký Khảo Sát Phòng Máy Miễn Phí</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
