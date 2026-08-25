import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, FileText, Calendar, ChevronRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SceLogo } from './SceLogo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenBooking: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeSection,
  onOpenBooking,
  onOpenProfile
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Trang chủ' },
    { id: 'software', label: 'Phần mềm bản quyền' },
    { id: 'hardware', label: 'Máy tính & TB' },
    { id: 'projects', label: 'Hồ sơ đối tác' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro announcement bar - More formal blue */}
      <div className="bg-[#0f3b7d] text-slate-200 text-[13px] py-2.5 px-4 border-b border-[#0a2959]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-bold text-white">
              Đồng hành cùng hệ thống Giáo dục & Doanh nghiệp
            </span>
          </div>
          <div className="flex items-center gap-6 font-semibold tracking-wide">
            <a
              href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.hotline}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <nav
        className={`bg-white transition-shadow duration-300 border-b border-slate-200 ${
          isScrolled ? 'shadow-md shadow-slate-900/10' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => onNavigate('hero')}
              className="text-left focus:outline-none"
            >
              <SceLogo size="md" />
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`relative px-3 py-2 text-[15px] font-bold rounded transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'text-[#0f3b7d] bg-blue-50/50'
                        : 'text-slate-700 hover:text-[#0f3b7d] hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-red-600 text-white rounded-sm">
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0f3b7d]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop CTA actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={onOpenProfile}
                className="px-4 py-2 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded border border-slate-300 transition-colors flex items-center gap-1.5"
                title="Xem giấy phép ĐKKD & Hồ sơ năng lực SCE"
              >
                <FileText className="w-4 h-4" />
                <span>Hồ sơ năng lực</span>
              </button>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2 text-sm font-bold text-white bg-[#cc0000] hover:bg-[#aa0000] rounded shadow-sm transition-all flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Khảo sát miễn phí</span>
              </button>
            </div>

            {/* Mobile hamburger button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="sm:flex hidden px-3 py-1.5 text-sm font-bold text-white bg-[#cc0000] rounded"
              >
                Khảo sát
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded text-[15px] font-bold flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-[#0f3b7d]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {item.badge ? (
                  <span className="text-[10px] px-1.5 py-0.5 bg-red-600 text-white rounded-sm">
                    {item.badge}
                  </span>
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenProfile();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 text-sm font-bold text-slate-700 bg-slate-100 rounded border border-slate-300 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Xem Hồ Sơ Năng Lực</span>
              </button>
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-[#cc0000] rounded shadow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Đăng ký khảo sát miễn phí</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
