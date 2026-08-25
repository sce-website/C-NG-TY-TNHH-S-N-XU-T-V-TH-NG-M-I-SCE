import React, { useState } from 'react';
import {
  CASE_STUDIES,
  CLIENT_SCHOOLS,
  PARTNERS,
  COMPANY_INFO
} from '../data/companyData';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Building2,
  MapPin,
  TrendingUp,
  Handshake,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ProjectsAndCasesProps {
  onOpenBooking: () => void;
}

export const ProjectsAndCases: React.FC<ProjectsAndCasesProps> = ({ onOpenBooking }) => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredCases = CASE_STUDIES.filter((item) => {
    if (filterType === 'all') return true;
    return item.schoolType === filterType;
  });

  return (
    <section id="projects" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            Năng Lực Triển Khai Thực Tế
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Khách Hàng Tiêu Biểu & Dự Án Thực Tế
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            SCE tự hào đồng hành cùng hơn 15+ Trường Đại học, THCS, Tiểu học và Doanh nghiệp trong hành trình xây dựng hạ tầng công nghệ giáo dục an toàn và bền vững.
          </p>
        </div>

        {/* SCE In Numbers Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="p-6 rounded-3xl bg-slate-900 text-white text-center flex flex-col justify-center items-center">
            <span className="text-4xl sm:text-5xl font-black text-sky-400 font-mono">15+</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Trường học đã phục vụ</span>
          </div>
          <div className="p-6 rounded-3xl bg-slate-900 text-white text-center flex flex-col justify-center items-center">
            <span className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono">11</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Dự án Tủ sạc Smart-Charge</span>
          </div>
          <div className="p-6 rounded-3xl bg-slate-900 text-white text-center flex flex-col justify-center items-center">
            <span className="text-4xl sm:text-5xl font-black text-amber-400 font-mono">04</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Dự án Nâng cấp phòng máy</span>
          </div>
          <div className="p-6 rounded-3xl bg-slate-900 text-white text-center flex flex-col justify-center items-center">
            <span className="text-4xl sm:text-5xl font-black text-purple-400 font-mono">02</span>
            <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Dự án Bảo trì tổng thể</span>
          </div>
        </div>

        {/* Case Studies Spotlight */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Case Study Triển Khai Tiêu Biểu
              </h3>
              <p className="text-xs text-slate-500">
                Hình ảnh thực tế và kết quả đo lường sau khi SCE bàn giao
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex gap-1.5 p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterType === 'all' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600'
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setFilterType('Đại học')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterType === 'Đại học' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600'
                }`}
              >
                Đại học
              </button>
              <button
                onClick={() => setFilterType('THCS')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterType === 'THCS' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600'
                }`}
              >
                THCS
              </button>
              <button
                onClick={() => setFilterType('Tiểu học')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filterType === 'Tiểu học' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600'
                }`}
              >
                Tiểu học
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCases.map((cs) => (
              <div
                key={cs.id}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 border border-blue-200">
                      {cs.tag}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {cs.location}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {cs.schoolName}
                  </h4>
                  <div className="text-xs font-semibold text-blue-700 mb-3">
                    {cs.projectType}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cs.description}
                  </p>

                  {/* Metrics cards */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white border border-slate-200 mb-4">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="text-center p-1.5">
                        <div className="text-xs font-black text-blue-700">{m.value}</div>
                        <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {cs.quote && (
                    <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-xs italic text-blue-900 mb-2">
                      "{cs.quote}"
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Đã nghiệm thu hoàn tất
                  </span>
                  <button
                    onClick={onOpenBooking}
                    className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-1"
                  >
                    Khảo sát tương tự <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 15+ Client Schools Badges Matrix */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Danh Sách Các Trường Học & Đối Tác Đã Triển Khai
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Các trường học tin tưởng và lựa chọn thiết bị & dịch vụ của SCE
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {CLIENT_SCHOOLS.map((school, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all flex flex-col items-center justify-center text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-2 font-black text-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-xs font-bold text-slate-900 line-clamp-2">
                  {school.name}
                </div>
                <div className="text-[10px] text-slate-500 line-clamp-1 mt-1">
                  {school.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners & Ecosystem */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <Handshake className="w-5 h-5 text-blue-600" />
            <h3 className="text-xl font-bold text-slate-900">
              Đối Tác & Hệ Sinh Thái Công Nghệ Giáo Dục
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {PARTNERS.map((partner, pIdx) => (
              <div
                key={pIdx}
                className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      Đối tác {partner.category}
                    </span>
                  </div>
                  <div className="text-sm font-extrabold text-slate-900 mb-1">
                    {partner.name}
                  </div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    {partner.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
