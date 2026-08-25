import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  ClipboardCheck,
  ShieldCheck,
  Award,
  CheckCircle2,
  PhoneCall,
  Calendar,
  ArrowRight
} from 'lucide-react';

interface WorkflowAndCommitmentProps {
  onOpenBooking: () => void;
}

export const WorkflowAndCommitment: React.FC<WorkflowAndCommitmentProps> = ({
  onOpenBooking
}) => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Quy trình 6 bước */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ClipboardCheck className="w-3.5 h-3.5 text-blue-600" />
            Chuẩn Hóa Thi Công Sư Phạm
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quy Trình Triển Khai 6 Bước Chuyên Nghiệp
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Minh bạch từng giai đoạn, từ bước khảo sát miễn phí đến thi công hoàn thiện và đồng hành bảo trì định kỳ xuyên suốt năm học.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {COMPANY_INFO.workflowSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="w-10 h-10 rounded-2xl bg-blue-600 text-white font-black text-base flex items-center justify-center shadow-md shadow-blue-500/20">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Giai đoạn {step.step}/6
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-blue-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cam kết đúng tiến độ</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Cam kết chất lượng 4 điểm */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              Chất Lượng Vượt Trội
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              SCE Cam Kết Chất Lượng Vững Chắc
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Bảo vệ quyền lợi cao nhất của nhà trường và cơ quan doanh nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {COMPANY_INFO.commitments.map((c) => (
              <div
                key={c.number}
                className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-sky-400 text-slate-900 font-black text-sm flex items-center justify-center mb-3">
                    0{c.number}
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">
                    {c.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="p-4 rounded-2xl bg-white/10 border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-sm font-bold text-white">
                Sẵn sàng nâng cấp và đảm bảo an toàn cho phòng máy trường bạn?
              </div>
              <div className="text-xs text-slate-300">
                Đăng ký khảo sát ngay hôm nay - Kỹ sư SCE sẽ đến tận nơi miễn phí 100%
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs shadow-lg transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Đăng Ký Khảo Sát Tận Trường</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
