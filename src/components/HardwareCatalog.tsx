import React from "react";
import { HARDWARE_PRODUCTS } from "../data/companyData";
import { Monitor, ArrowRight, Cpu, HardDrive } from "lucide-react";

interface HardwareCatalogProps {
  onOpenBooking: () => void;
}

export const HardwareCatalog: React.FC<HardwareCatalogProps> = ({
  onOpenBooking,
}) => {
  return (
    <section id="hardware" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-100/50 text-blue-800 text-[11px] font-bold uppercase tracking-widest mb-3">
              <Monitor className="w-3.5 h-3.5" />
              Thiết bị đồng bộ
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3b7d] tracking-tight">
              Máy tính & Laptop Giáo dục
            </h2>
            <p className="text-slate-700 text-[15px] mt-3 leading-relaxed">
              Phân phối máy tính đồng bộ chính hãng VTB, Thánh Gióng, Dell, HP, Asus, Lenovo, MSI. Tối ưu hóa cho hoạt động
              giảng dạy cường độ cao, bền bỉ 24/7 với chế độ bảo hành tận nơi.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded bg-[#cc0000] hover:bg-[#aa0000] text-white text-sm font-bold shadow transition-colors flex items-center gap-2"
          >
            Nhận báo giá dự án
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {HARDWARE_PRODUCTS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded p-6 md:p-8 border-2 border-slate-100 hover:border-[#0f3b7d]/20 shadow-sm hover:shadow transition-all duration-300 flex flex-col"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-sm bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider border border-slate-200">
                    Hãng {item.brand}
                  </span>
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-sm bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-sm border border-emerald-100">
                  Bảo hành: {item.specs.warranty}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#0f3b7d] transition-colors">
                {item.name}
              </h3>
              
              <p className="text-sm text-slate-600 mb-6">
                {item.highlight}
              </p>

              {/* Specs Box */}
              <div className="mt-auto bg-slate-50 border border-slate-200 rounded p-4">
                <div className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mb-3">
                  Cấu hình kỹ thuật
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                  {item.specs.cpu && (
                    <div className="flex items-start gap-2">
                      <Cpu className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Vi xử lý</div>
                        <div className="text-sm font-semibold text-slate-900">{item.specs.cpu}</div>
                      </div>
                    </div>
                  )}
                  
                  {item.specs.ram && (
                    <div className="flex items-start gap-2">
                      <HardDrive className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Bộ nhớ (RAM)</div>
                        <div className="text-sm font-semibold text-slate-900">{item.specs.ram}</div>
                      </div>
                    </div>
                  )}

                  {item.specs.storage && (
                    <div className="flex items-start gap-2">
                      <HardDrive className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Lưu trữ</div>
                        <div className="text-sm font-semibold text-slate-900">{item.specs.storage}</div>
                      </div>
                    </div>
                  )}

                  {item.specs.display && (
                    <div className="flex items-start gap-2">
                      <Monitor className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Màn hình</div>
                        <div className="text-sm font-semibold text-slate-900">{item.specs.display}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
