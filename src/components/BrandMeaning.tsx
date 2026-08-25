import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  ShieldAlert,
  Lock,
  PiggyBank,
  CheckCircle,
  Sparkles,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';

export const BrandMeaning: React.FC = () => {
  const problemsSolved = [
    {
      icon: ShieldAlert,
      color: 'from-red-500 to-amber-500',
      bgLight: 'bg-red-50 text-red-700 border-red-200',
      title: '1. An Toàn Điện & Chống Cháy Nổ',
      desc: 'Xóa bỏ hoàn toàn nguy cơ chập cháy nổ từ hệ thống ổ cắm nối dài và dây sạc lộn xộn dưới sàn nhà. Tủ sạc và phòng máy SCE tích hợp aptomat chống giật và ngắt sạc tự động.'
    },
    {
      icon: Lock,
      color: 'from-blue-500 to-indigo-500',
      bgLight: 'bg-blue-50 text-blue-700 border-blue-200',
      title: '2. Bảo Quản Tập Trung & Tránh Thất Thoát',
      desc: 'Toàn bộ Laptop / Tablet học sinh được quản lý tập trung trong tủ sạc có khóa an toàn. Giảm thiểu 100% tình trạng rơi vỡ, thất thoát phụ kiện sạc hay mất cắp tài sản trường học.'
    },
    {
      icon: PiggyBank,
      color: 'from-emerald-500 to-teal-500',
      bgLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: '3. Tối Ưu Ngân Sách Đầu Tư Đến 80%',
      desc: 'Thay vì phải chi 400 - 500 triệu đồng để mua mới toàn bộ phòng máy, giải pháp nâng cấp SSD + RAM + OS của SCE giúp máy cũ chạy mượt mà như mới chỉ với ~1/5 chi phí.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: SCE giải quyết bài toán gì cho Hiệu trưởng? */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            Giá Trị Thực Tiễn
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            SCE Giải Quyết Bài Toán Gì Cho Hiệu Trưởng?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Chúng tôi thấu hiểu áp lực của Ban Giám Hiệu về an toàn tài sản công, định mức ngân sách và yêu cầu chuyển đổi số trường học.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problemsSolved.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bgLight} border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-blue-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Giải pháp chuẩn hóa đã kiểm chứng</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 2: Ý nghĩa thương hiệu SCE & 3 Trụ Cột */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left col: Meaning of S - C - E */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs uppercase font-bold tracking-widest text-sky-400">
                  Nhận diện & Bản sắc thương hiệu
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Ý Nghĩa Tên Thương Hiệu <span className="text-sky-300">SCE</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  <strong>SCE</strong> là viết tắt của <strong>Smart Company Education</strong> — tượng trưng cho sự gắn kết chặt chẽ giữa công nghệ thông minh, năng lực sản xuất chuyên nghiệp và cái tâm với nền giáo dục.
                </p>

                {/* S - C - E letters breakdown */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow">
                      S
                    </div>
                    <div>
                      <div className="text-sm font-bold text-sky-300">Smart (Thông Minh)</div>
                      <div className="text-xs text-slate-300">Giải pháp hạ tầng công nghệ hiện đại, tự động ngắt điện, thông minh hóa phòng học.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-slate-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow">
                      C
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-200">Company (Doanh Nghiệp Uy Tín)</div>
                      <div className="text-xs text-slate-300">Tập trung nguồn lực chuyên sâu vào môi trường trường học và văn phòng doanh nghiệp.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-sky-500 text-white font-black text-lg flex items-center justify-center shrink-0 shadow">
                      E
                    </div>
                    <div>
                      <div className="text-sm font-bold text-sky-200">Education (Giáo Dục Sư Phạm)</div>
                      <div className="text-xs text-slate-300">Thiết kế kỹ thuật chuyên biệt, quy tắc thi công an toàn và văn hóa sư phạm chuẩn mực.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right col: 3 Core Pillars */}
              <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-5 h-5 text-sky-300" />
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    3 Trụ Cột Cốt Lõi: AN TOÀN – TIẾT KIỆM – HIỆU QUẢ
                  </h4>
                </div>

                <div className="space-y-4">
                  {COMPANY_INFO.pillars.map((pillar, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-start gap-4 hover:border-sky-400/40 transition-colors"
                    >
                      <div className="text-2xl font-black text-sky-400/80 shrink-0 font-mono">
                        {pillar.number}
                      </div>
                      <div>
                        <h5 className="text-base font-bold text-white mb-1">
                          {pillar.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3.5 rounded-xl bg-blue-500/20 border border-blue-400/30 text-xs text-blue-200 flex items-center justify-between">
                  <span className="font-medium">
                    Được tin cậy bởi các trường Đại học Sư Phạm, THCS & Tiểu học hàng đầu
                  </span>
                  <span className="font-bold text-white px-2 py-0.5 rounded bg-blue-600">
                    100% Cam Kết
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
