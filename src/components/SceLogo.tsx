import React, { useState, useEffect } from 'react';

interface SceLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: 'dark' | 'light';
  className?: string;
  customSrc?: string;
  allowUpload?: boolean;
}

export const SceLogo: React.FC<SceLogoProps> = ({
  size = 'md',
  showText = true,
  textColor = 'dark',
  className = '',
  customSrc,
  allowUpload = true
}) => {
  const [logoImage, setLogoImage] = useState<string | null>(customSrc || null);

  useEffect(() => {
    // Check local storage for any previously uploaded custom logo
    const saved = localStorage.getItem('sce_custom_logo');
    if (saved && !customSrc) {
      setLogoImage(saved);
    }
  }, [customSrc]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setLogoImage(result);
          localStorage.setItem('sce_custom_logo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const dimensions = {
    xs: { icon: 28, title: 'text-sm', subtitle: 'text-[9px]', badge: 'text-[9px] px-1 py-0' },
    sm: { icon: 38, title: 'text-base', subtitle: 'text-[10px]', badge: 'text-[10px] px-1.5 py-0.5' },
    md: { icon: 48, title: 'text-lg', subtitle: 'text-xs', badge: 'text-[11px] px-2 py-0.5' },
    lg: { icon: 60, title: 'text-xl', subtitle: 'text-sm', badge: 'text-xs px-2.5 py-0.5' },
    xl: { icon: 76, title: 'text-2xl sm:text-3xl', subtitle: 'text-sm sm:text-base', badge: 'text-xs px-3 py-1' }
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none group relative ${className}`}>
      {/* Logo Icon Container */}
      <div className="relative shrink-0 flex items-center justify-center">
        {logoImage ? (
          <img
            src={logoImage}
            alt="SCE Logo - Smart Company Education"
            className="object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg shadow-sm"
            style={{ width: dimensions.icon, height: dimensions.icon }}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className="relative flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
            style={{ width: dimensions.icon, height: dimensions.icon }}
          >
            {/* Ambient subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-sky-400/30 blur-sm -z-10 group-hover:opacity-100 opacity-60 transition-opacity" />

            {/* High-Fidelity Modern SCE Vector Emblem */}
            <svg
              width={dimensions.icon}
              height={dimensions.icon}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-md"
            >
              <defs>
                {/* Royal Cobalt Gradient */}
                <linearGradient id="sce_grad_primary" x1="25" y1="25" x2="175" y2="175" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1E3A8A" />
                  <stop offset="50%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#0284C7" />
                </linearGradient>

                {/* Bright Cyan Glow */}
                <linearGradient id="sce_grad_cyan" x1="40" y1="60" x2="160" y2="140" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0284C7" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>

                {/* High-Tech Slate/Platinum Accent */}
                <linearGradient id="sce_grad_metal" x1="50" y1="50" x2="150" y2="150" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#64748B" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>

                {/* Amber Sparkle accent for excellence */}
                <linearGradient id="sce_grad_gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#FBBF24" />
                </linearGradient>

                {/* Drop shadow filter */}
                <filter id="sce_shadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.25" />
                </filter>
              </defs>

              {/* Background circular badge with subtle rim */}
              <circle cx="100" cy="100" r="92" fill="#FFFFFF" stroke="url(#sce_grad_primary)" strokeWidth="4" />
              <circle cx="100" cy="100" r="88" fill="url(#sce_grad_primary)" fillOpacity="0.04" />

              {/* Outer Orbit Arc - Symbol of Global Standard & Smart Tech */}
              <path
                d="M 42 75 C 50 42, 110 25, 155 45 C 172 53, 178 68, 168 76 C 158 84, 142 78, 130 72 C 100 58, 62 68, 48 85 C 44 83, 42 79, 42 75 Z"
                fill="url(#sce_grad_cyan)"
              />

              {/* Dynamic S Ribbon Crest */}
              <path
                d="M 38 90 C 35 60, 80 40, 130 46 C 160 50, 174 72, 162 92 C 150 110, 116 112, 85 106 C 65 102, 48 96, 38 90 Z"
                fill="url(#sce_grad_primary)"
              />

              {/* Middle 'C' Company Arc Ribbon */}
              <path
                d="M 145 92 C 105 85, 60 110, 64 140 C 68 165, 105 174, 142 158 C 152 153, 156 146, 146 142 C 115 152, 90 142, 86 128 C 82 112, 108 98, 145 102 C 155 103, 155 94, 145 92 Z"
                fill="url(#sce_grad_metal)"
              />

              {/* Forward Swoosh 'E' - Education Wing */}
              <path
                d="M 45 136 C 65 110, 115 88, 165 84 C 182 82, 186 98, 166 114 C 122 148, 62 148, 45 136 Z"
                fill="url(#sce_grad_cyan)"
              />

              {/* Bottom Base Arc Foundation */}
              <path
                d="M 65 146 C 80 174, 128 180, 162 162 C 168 158, 165 152, 156 154 C 125 168, 92 160, 78 138 C 72 134, 63 138, 65 146 Z"
                fill="url(#sce_grad_primary)"
              />

              {/* Modern SCE Bold Typography inside badge */}
              <text
                x="100"
                y="114"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="24"
                fontWeight="900"
                fill="#0F172A"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                SCE
              </text>

              {/* Slogan Inscription */}
              <text
                x="100"
                y="128"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="7.5"
                fontWeight="700"
                fill="#2563EB"
                textAnchor="middle"
                letterSpacing="0.8"
              >
                SMART COMPANY
              </text>
              <text
                x="100"
                y="138"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontSize="7"
                fontWeight="700"
                fill="#0284C7"
                textAnchor="middle"
                letterSpacing="1"
              >
                EDUCATION
              </text>

              {/* Innovation Sparkle dot */}
              <circle cx="152" cy="54" r="5" fill="url(#sce_grad_gold)" />
              <circle cx="152" cy="54" r="2.5" fill="#FFFFFF" />
            </svg>
          </div>
        )}

        {/* Optional upload trigger button overlay when allowUpload is enabled */}
        {allowUpload && (
          <label
            htmlFor="sce-logo-file-input"
            className="absolute -bottom-1 -right-1 bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-full shadow cursor-pointer text-[10px] title='Đổi ảnh logo'"
          >
            <input
              id="sce-logo-file-input"
              type="file"
              accept="image/png, image/jpeg, image/svg+xml"
              className="hidden"
              onChange={handleFileUpload}
            />
            ✏️
          </label>
        )}
      </div>

      {/* Brand Text Branding */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`font-black tracking-tight ${dimensions.title} ${
                textColor === 'light' ? 'text-white' : 'text-slate-950'
              }`}
            >
              SCE
            </span>
            <span
              className={`font-bold rounded-md uppercase tracking-wider ${dimensions.badge} ${
                textColor === 'light'
                  ? 'bg-blue-500/20 text-sky-300 border border-blue-400/40'
                  : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}
            >
              Smart Company Education
            </span>
          </div>
          <span
            className={`font-semibold tracking-normal mt-0.5 ${dimensions.subtitle} ${
              textColor === 'light' ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI SCE
          </span>
        </div>
      )}
    </div>
  );
};
