import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandMeaning } from './components/BrandMeaning';
import { SoftwareCatalog } from './components/SoftwareCatalog';
import { HardwareCatalog } from './components/HardwareCatalog';
import { ProjectsAndCases } from './components/ProjectsAndCases';
import { WorkflowAndCommitment } from './components/WorkflowAndCommitment';
import { Footer } from './components/Footer';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { SurveyBookingModal } from './components/SurveyBookingModal';
import { COMPANY_INFO } from './data/companyData';
import { Phone, Calendar, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    deviceCount?: number;
    needs?: string[];
    notes?: string;
  }>({});

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingWithPrefill = (data: {
    deviceCount: number;
    needs: string[];
    notes: string;
  }) => {
    setBookingPrefill(data);
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingGeneral = () => {
    setBookingPrefill({});
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onOpenBooking={handleOpenBookingGeneral}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onNavigate={handleNavigate}
          onOpenProfile={() => setIsProfileModalOpen(true)}
          onOpenBooking={handleOpenBookingGeneral}
        />

        {/* 2. Brand Meaning & S-C-E Pillars */}
        <BrandMeaning />

        {/* 3. Official Microsoft Software Catalog */}
        <SoftwareCatalog
          onOpenBooking={handleOpenBookingGeneral}
        />

        {/* 4. Hardware Desktops & Laptops */}
        <HardwareCatalog
          onOpenBooking={handleOpenBookingGeneral}
        />

        {/* 5. Case Studies & 15+ Client Schools Matrix */}
        <ProjectsAndCases
          onOpenBooking={handleOpenBookingGeneral}
        />

        {/* 6. 6-Step Workflow & 4 Commitments */}
        <WorkflowAndCommitment
          onOpenBooking={handleOpenBookingGeneral}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onOpenBooking={handleOpenBookingGeneral}
      />

      {/* Floating Action Quick Access Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`tel:${COMPANY_INFO.hotline.replace(/\s+/g, '')}`}
          className="w-13 h-13 rounded-full bg-amber-400 text-slate-950 font-bold shadow-xl shadow-amber-400/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
          title={`Gọi Hotline: ${COMPANY_INFO.hotline}`}
        >
          <Phone className="w-6 h-6 group-hover:animate-bounce" />
          <span className="sr-only">Gọi Hotline</span>
        </a>
        <button
          onClick={handleOpenBookingGeneral}
          className="w-13 h-13 rounded-full bg-blue-600 text-white font-bold shadow-xl shadow-blue-600/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group cursor-pointer"
          title="Đăng ký khảo sát miễn phí"
        >
          <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
          <span className="sr-only">Khảo sát</span>
        </button>
      </div>

      {/* Modals */}
      <CompanyProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onOpenBooking={handleOpenBookingGeneral}
      />

      <SurveyBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialData={bookingPrefill}
      />
    </div>
  );
}
