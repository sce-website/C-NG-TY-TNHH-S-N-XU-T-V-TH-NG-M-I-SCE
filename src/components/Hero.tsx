import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  ArrowRight, 
  Cpu, 
  ShieldCheck,
  Calendar,
  FileSpreadsheet
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
  onOpenProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenBooking, onOpenProfile }) => {
  return (
    <section id="hero" className="relative pt-16 pb-24 overflow-hidden bg-slate-900 border-b border-slate-800">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571260899304-425dea4cf36e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-900/50 border border-blue-800 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
            Công Ty TNHH Sản Xuất Và Thương Mại SCE
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-sm">
            Nền Tảng Công Nghệ <br className="hidden md:block" />
            Vững Chắc Cho <span className="text-blue-400">Giáo Dục</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            {COMPANY_INFO.description}
          </p>

          {/* Principal Message Box */}
          <div className="mb-8 p-4 md:p-6 bg-white/5 border border-white/10 rounded backdrop-blur-sm inline-block text-left max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">
              Thông điệp gửi Quý Trường:
            </div>
            <p className="text-sm md:text-base text-slate-200 italic leading-relaxed">
              "{COMPANY_INFO.principalMessage}"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <Calendar className="w-5 h-5 text-blue-100" />
              <span>Đăng Ký Tư Vấn & Khảo Sát</span>
            </button>
            
            <button
              onClick={onOpenProfile}
              className="px-5 py-3.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-sm border border-slate-600 transition-colors flex items-center gap-2"
            >
              Xem Hồ Sơ Năng Lực
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16 pt-8 border-t border-slate-800">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-800/50 rounded border border-slate-700 text-center hover:bg-slate-800 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Solution Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div
            onClick={() => onNavigate('software')}
            className="p-6 bg-slate-800 rounded border border-slate-700 hover:border-amber-500 cursor-pointer transition-colors group"
          >
            <Cpu className="w-8 h-8 text-amber-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300">
              Phần Mềm Bản Quyền
            </h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Windows, Office 365 chính hãng, đầy đủ COA, hóa đơn VAT.
            </p>
            <div className="text-xs font-bold text-amber-400 flex items-center gap-1">
              Xem bảng giá <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div
            onClick={() => onNavigate('hardware')}
            className="p-6 bg-slate-800 rounded border border-slate-700 hover:border-blue-500 cursor-pointer transition-colors group"
          >
            <ShieldCheck className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300">
              Máy Tính & Thiết Bị
            </h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Thiết bị chính hãng Dell, HP, Lenovo. Tối ưu cho giáo dục, bảo hành tận nơi.
            </p>
            <div className="text-xs font-bold text-blue-400 flex items-center gap-1">
              Xem chi tiết <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
