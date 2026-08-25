import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  Calendar,
  CheckCircle2,
  Phone,
  Mail,
  Building,
  User,
  MapPin,
  Laptop,
  Send,
  X,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface SurveyBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    deviceCount?: number;
    needs?: string[];
    notes?: string;
  };
}

export const SurveyBookingModal: React.FC<SurveyBookingModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('Hiệu Trưởng / Ban Giám Hiệu');
  const [orgName, setOrgName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [deviceCount, setDeviceCount] = useState<number>(initialData?.deviceCount || 30);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(
    initialData?.needs && initialData.needs.length > 0
      ? initialData.needs
      : ['Tư vấn máy tính đồng bộ / Laptop']
  );
  const [notes, setNotes] = useState(initialData?.notes || '');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const needOptions = [
    'Tư vấn máy tính đồng bộ / Laptop',
    'Bản quyền Windows & Office',
    'Khảo sát lắp đặt phòng máy mới',
    'Khác (vui lòng ghi chú)'
  ];

  const handleNeedToggle = (need: string) => {
    if (selectedNeeds.includes(need)) {
      setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful registration
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Đăng Ký Tư Vấn & Khảo Sát
              </h3>
              <p className="text-[11px] text-slate-500">
                Kỹ sư SCE hỗ trợ tư vấn thiết bị, phần mềm & khảo sát tận nơi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Gửi Yêu Cầu Thành Công!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Cảm ơn Quý Khách và Đơn vị <strong>{orgName || 'của bạn'}</strong> đã gửi thông tin. Đội ngũ Tư vấn của SCE sẽ liên hệ lại qua số điện thoại <strong>{phone}</strong> trong vòng 30 phút để hỗ trợ nhanh nhất.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs text-blue-900 max-w-md mx-auto text-left space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-700" />
                  Cần hỗ trợ gấp xin vui lòng liên hệ Hotline:
                </div>
                <div className="text-sm font-black text-blue-800">
                  {COMPANY_INFO.hotline} (Mr. Duy - Giám đốc kỹ thuật)
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Hoàn Tất & Đóng
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Hỗ trợ tận tình & Miễn phí:</strong> Kỹ sư SCE sẽ tư vấn lựa chọn cấu hình máy tính, phần mềm bản quyền phù hợp ngân sách và khảo sát mặt bằng (nếu cần).
                </span>
              </div>

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Số điện thoại / Zalo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Row 2: Org Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Tên Trường / Doanh Nghiệp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Trường THCS Lý Thánh Tông"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Email nhận báo giá
                  </label>
                  <input
                    type="email"
                    placeholder="email@truonghoc.edu.vn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Row 3: Needs Checkboxes */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-2">
                  Sản phẩm & Dịch vụ quan tâm:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {needOptions.map((opt, idx) => (
                    <label
                      key={idx}
                      className={`p-2 rounded-lg border text-[11px] flex items-center gap-2 cursor-pointer transition-colors ${
                        selectedNeeds.includes(opt)
                          ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedNeeds.includes(opt)}
                        onChange={() => handleNeedToggle(opt)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Row 4: Device Count & Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Số lượng thiết bị dự kiến
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={deviceCount}
                    onChange={(e) => setDeviceCount(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Ghi chú thêm
                  </label>
                  <input
                    type="text"
                    placeholder="VD: Cần máy tính Core i5, RAM 16GB..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Submit Action */}
              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-100 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Gửi Yêu Cầu</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
