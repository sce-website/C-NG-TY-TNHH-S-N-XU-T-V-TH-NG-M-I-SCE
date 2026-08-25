import React, { useState } from 'react';
import { SOFTWARE_PRODUCTS } from '../data/companyData';
import { SoftwareProduct } from '../types';
import {
  FileCode,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  X
} from 'lucide-react';

interface SoftwareCatalogProps {
  onOpenBooking: () => void;
}

export const SoftwareCatalog: React.FC<SoftwareCatalogProps> = ({ onOpenBooking }) => {
  const [selectedProduct, setSelectedProduct] = useState<SoftwareProduct | null>(null);

  return (
    <section id="software" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-blue-100/50 text-[#0f3b7d] text-[11px] font-bold uppercase tracking-widest mb-3">
              <FileCode className="w-3.5 h-3.5" />
              Bản quyền phần mềm
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3b7d] tracking-tight">
              Windows & Office Giáo dục
            </h2>
            <p className="text-slate-700 text-[15px] mt-3 leading-relaxed">
              Triển khai bản quyền Microsoft chính hãng, cam kết đầy đủ pháp lý, hóa đơn VAT, chứng nhận COA dành riêng cho Trường học & Doanh nghiệp.
            </p>
          </div>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SOFTWARE_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded p-6 md:p-8 border border-slate-200 hover:border-[#0f3b7d]/30 shadow-sm hover:shadow transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-sm bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider border border-slate-200">
                  {prod.category}
                </span>
                {prod.badge && (
                  <span className="px-3 py-1 rounded-sm bg-blue-50 text-[#0f3b7d] text-[10px] font-bold border border-blue-100">
                    {prod.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0f3b7d] transition-colors">
                {prod.name}
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                {prod.summary}
              </p>

              {/* Price */}
              <div className="p-4 rounded bg-slate-50 border border-slate-100 mb-6 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-[#0f3b7d]">
                  {prod.price.toLocaleString('vi-VN')}
                </span>
                <span className="text-sm font-bold text-slate-700">đ</span>
                <span className="text-xs text-slate-500 font-medium">/ {prod.unit}</span>
              </div>

              {/* Action bar */}
              <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="text-[13px] font-bold text-slate-600 hover:text-[#0f3b7d] transition-colors py-2"
                >
                  Xem chi tiết
                </button>
                <button
                  onClick={onOpenBooking}
                  className="px-5 py-2.5 rounded text-[13px] font-bold text-white bg-[#0f3b7d] hover:bg-[#0a2959] transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  Báo giá <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Box */}
        <div className="mt-12 p-6 rounded bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-white text-emerald-700 flex items-center justify-center shadow-sm border border-emerald-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-emerald-900">Cam Kết Bản Quyền 100%</h4>
              <p className="text-sm text-emerald-800 mt-1">
                Chứng nhận COA đầy đủ, cấp hóa đơn VAT cho Trường học & Doanh nghiệp.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Modal: Detailed Technical Specs for Software */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded max-w-xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                Mã SP: {selectedProduct.id}
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto">
              <h3 className="text-2xl font-extrabold text-[#0f3b7d] mb-2">
                {selectedProduct.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-extrabold text-slate-900">
                  {selectedProduct.price.toLocaleString('vi-VN')} đ
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  / {selectedProduct.unit} ({selectedProduct.duration})
                </span>
              </div>
              
              <div className="text-[15px] text-slate-700 leading-relaxed mb-8">
                {selectedProduct.summary}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Tính năng nổi bật
                  </h4>
                  <ul className="space-y-3">
                    {selectedProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProduct.systemRequirements && (
                  <div className="p-4 rounded bg-slate-50 border border-slate-200">
                    <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Yêu cầu hệ thống
                    </h4>
                    <p className="text-sm text-slate-700">{selectedProduct.systemRequirements}</p>
                  </div>
                )}

                {selectedProduct.consOrNotes && (
                  <div className="p-4 rounded bg-amber-50 border border-amber-200 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
                    <div>
                      <h4 className="text-[11px] font-bold text-amber-900 uppercase tracking-widest mb-1">
                        Lưu ý
                      </h4>
                      <p className="text-sm text-amber-800">{selectedProduct.consOrNotes}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-3 shrink-0">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-5 py-2.5 rounded text-sm font-bold text-slate-600 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded bg-[#cc0000] hover:bg-[#aa0000] text-white text-sm font-bold shadow-sm transition-colors"
              >
                Yêu cầu báo giá
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
