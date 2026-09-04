import React from 'react';

export const pricingIcon = {
  background: '#FCE7F3',
  foreground: '#000000',
  src: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
      {/* Side Card Left */}
      <rect x="1.5" y="5" width="6" height="15" rx="0.5" stroke="#F62477" strokeWidth="1.4" fill="#FFFFFF" />
      <line x1="3.2" y1="9" x2="5.8" y2="9" stroke="#F62477" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="3.2" y1="12" x2="5.8" y2="12" stroke="#F62477" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="1.5" y1="15.5" x2="7.5" y2="15.5" stroke="#F62477" strokeWidth="1.4" />

      {/* Side Card Right */}
      <rect x="16.5" y="5" width="6" height="15" rx="0.5" stroke="#F62477" strokeWidth="1.4" fill="#FFFFFF" />
      <line x1="18.2" y1="9" x2="20.8" y2="9" stroke="#F62477" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="18.2" y1="12" x2="20.8" y2="12" stroke="#F62477" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="16.5" y1="15.5" x2="22.5" y2="15.5" stroke="#F62477" strokeWidth="1.4" />

      {/* Middle Featured Taller Card */}
      <rect x="7" y="3" width="10" height="19" rx="0.5" stroke="#F62477" strokeWidth="1.4" fill="#FFFFFF" />
      <line x1="9" y1="7.2" x2="15" y2="7.2" stroke="#F62477" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="9" y1="10.8" x2="13.8" y2="10.8" stroke="#F62477" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="9" y1="14.4" x2="15" y2="14.4" stroke="#F62477" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="7" y1="17.5" x2="17" y2="17.5" stroke="#F62477" strokeWidth="1.4" />
    </svg>
  ),
};

export const TemplateOneSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 400"
    width="100%"
    height="100%"
    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
  >
    <rect width="600" height="400" fill="#f9fafb" rx="8" />

    {/* Card 1 - Left */}
    <rect x="30" y="30" width="165" height="340" rx="8" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
    <rect x="45" y="55" width="80" height="10" rx="3" fill="#111827" />
    <rect x="45" y="75" width="135" height="6" rx="2" fill="#6b7280" />
    <rect x="45" y="87" width="120" height="6" rx="2" fill="#6b7280" />
    <rect x="45" y="115" width="50" height="22" rx="4" fill="#111827" />
    <rect x="100" y="125" width="40" height="8" rx="2" fill="#6b7280" />
    <rect x="45" y="155" width="135" height="28" rx="3" fill="#4f46e5" />
    <rect x="45" y="205" width="100" height="8" rx="2" fill="#111827" />

    <path d="M46 232 L49 235 L54 228" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="62" y="229" width="60" height="6" rx="2" fill="#4b5563" />
    <path d="M46 248 L49 251 L54 244" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="62" y="245" width="80" height="6" rx="2" fill="#4b5563" />
    <path d="M46 264 L49 267 L54 260" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="62" y="261" width="70" height="6" rx="2" fill="#4b5563" />
    <path d="M47 277 L53 283 M53 277 L47 283" stroke="#b91c1c" strokeWidth="2" fill="none" />
    <rect x="62" y="277" width="90" height="6" rx="2" fill="#4b5563" />
    <path d="M47 293 L53 299 M53 293 L47 299" stroke="#b91c1c" strokeWidth="2" fill="none" />
    <rect x="62" y="293" width="80" height="6" rx="2" fill="#4b5563" />
    <path d="M47 309 L53 315 M53 309 L47 315" stroke="#b91c1c" strokeWidth="2" fill="none" />
    <rect x="62" y="309" width="85" height="6" rx="2" fill="#4b5563" />


    {/* Card 2 - Middle */}
    <rect x="215" y="30" width="165" height="340" rx="8" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
    <rect x="230" y="55" width="70" height="10" rx="3" fill="#111827" />
    <rect x="230" y="75" width="135" height="6" rx="2" fill="#6b7280" />
    <rect x="230" y="87" width="120" height="6" rx="2" fill="#6b7280" />
    <rect x="230" y="115" width="55" height="22" rx="4" fill="#111827" />
    <rect x="290" y="125" width="40" height="8" rx="2" fill="#6b7280" />
    <rect x="230" y="155" width="135" height="28" rx="3" fill="#4f46e5" />
    <rect x="230" y="205" width="100" height="8" rx="2" fill="#111827" />

    <path d="M231 232 L234 235 L239 228" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="247" y="229" width="65" height="6" rx="2" fill="#4b5563" />
    <path d="M231 248 L234 251 L239 244" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="247" y="245" width="85" height="6" rx="2" fill="#4b5563" />
    <path d="M231 264 L234 267 L239 260" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="247" y="261" width="70" height="6" rx="2" fill="#4b5563" />
    <path d="M231 280 L234 283 L239 276" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="247" y="277" width="90" height="6" rx="2" fill="#4b5563" />
    <path d="M232 293 L238 299 M238 293 L232 299" stroke="#b91c1c" strokeWidth="2" fill="none" />
    <rect x="247" y="293" width="80" height="6" rx="2" fill="#4b5563" />
    <path d="M232 309 L238 315 M238 309 L232 315" stroke="#b91c1c" strokeWidth="2" fill="none" />
    <rect x="247" y="309" width="85" height="6" rx="2" fill="#4b5563" />

    {/* Card 3 - Right */}
    <rect x="400" y="30" width="165" height="340" rx="8" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
    <rect x="415" y="55" width="90" height="10" rx="3" fill="#111827" />
    <rect x="415" y="75" width="135" height="6" rx="2" fill="#6b7280" />
    <rect x="415" y="87" width="120" height="6" rx="2" fill="#6b7280" />
    <rect x="415" y="115" width="70" height="22" rx="4" fill="#111827" />
    <rect x="490" y="125" width="40" height="8" rx="2" fill="#6b7280" />
    <rect x="415" y="155" width="135" height="28" rx="3" fill="#4f46e5" />
    <rect x="415" y="205" width="100" height="8" rx="2" fill="#111827" />

    <path d="M416 232 L419 235 L424 228" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="432" y="229" width="70" height="6" rx="2" fill="#4b5563" />
    <path d="M416 248 L419 251 L424 244" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="432" y="245" width="90" height="6" rx="2" fill="#4b5563" />
    <path d="M416 264 L419 267 L424 260" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="432" y="261" width="70" height="6" rx="2" fill="#4b5563" />
    <path d="M416 280 L419 283 L424 276" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="432" y="277" width="95" height="6" rx="2" fill="#4b5563" />
    <path d="M416 296 L419 299 L424 292" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="432" y="293" width="85" height="6" rx="2" fill="#4b5563" />
    <path d="M416 312 L419 315 L424 308" stroke="#4338ca" strokeWidth="2" fill="none" />
    <rect x="432" y="309" width="90" height="6" rx="2" fill="#4b5563" />

  </svg>
);

// export const TemplateTwoSvg = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 600 400"
//     width="100%"
//     height="100%"
//     style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
//   >
//     <rect width="600" height="400" fill="#09090b" rx="8" />

//     {/* Card 1 - Left */}
//     <rect x="60" y="55" width="220" height="290" rx="12" fill="#18181b" stroke="#27272a" strokeWidth="1.5" />
//     <rect x="90" y="85" width="80" height="14" rx="3" fill="#a1a1aa" />
//     <rect x="90" y="115" width="100" height="26" rx="4" fill="#ffffff" />
//     <line x1="80" y1="155" x2="260" y2="155" stroke="#27272a" strokeWidth="1.5" />
//     <circle cx="95" cy="180" r="5" fill="#e4e4e7" />
//     <rect x="110" y="176" width="110" height="8" rx="2" fill="#71717a" />
//     <circle cx="95" cy="205" r="5" fill="#e4e4e7" />
//     <rect x="110" y="201" width="95" height="8" rx="2" fill="#71717a" />
//     <circle cx="95" cy="230" r="5" fill="#52525b" />
//     <rect x="110" y="226" width="80" height="8" rx="2" fill="#52525b" />
//     <rect x="90" y="280" width="160" height="36" rx="8" fill="#27272a" />

//     {/* Card 2 - Right (Highlighted Gold) */}
//     <rect x="320" y="55" width="220" height="290" rx="12" fill="#18181b" stroke="#facc15" strokeWidth="2" />
//     <rect x="350" y="85" width="90" height="14" rx="3" fill="#facc15" />
//     <rect x="350" y="115" width="110" height="26" rx="4" fill="#ffffff" />
//     <line x1="340" y1="155" x2="520" y2="155" stroke="#27272a" strokeWidth="1.5" />
//     <circle cx="355" cy="180" r="5" fill="#facc15" />
//     <rect x="370" y="176" width="120" height="8" rx="2" fill="#d4d4d8" />
//     <circle cx="355" cy="205" r="5" fill="#facc15" />
//     <rect x="370" y="201" width="105" height="8" rx="2" fill="#d4d4d8" />
//     <circle cx="355" cy="230" r="5" fill="#facc15" />
//     <rect x="370" y="226" width="115" height="8" rx="2" fill="#d4d4d8" />
//     <rect x="350" y="280" width="160" height="36" rx="8" fill="#facc15" />
//   </svg>
// );
