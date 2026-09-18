export const blockBannerConfigs = {
  'before-after': {
    title: 'BEFORE/AFTER',
    tag: 'INTERACTIVE COMPARISON BLOCK',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="12" y1="3" x2="12" y2="21"/>
        <path d="M8 12h8"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><clipPath id="lClip"><path d="M 10 27 A 12 12 0 0 1 22 15 L 150 15 L 150 185 L 22 185 A 12 12 0 0 1 10 173 Z"/></clipPath><clipPath id="rClip"><path d="M 150 15 L 278 15 A 12 12 0 0 1 290 27 L 290 173 A 12 12 0 0 1 278 185 L 150 185 Z"/></clipPath><linearGradient id="afterSky" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%230284c7"/><stop offset="60%" stop-color="%231e1b4b"/><stop offset="100%" stop-color="%23312e81"/></linearGradient><linearGradient id="beforeBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23111827"/><stop offset="100%" stop-color="%231f2937"/></linearGradient><linearGradient id="glassGlow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%23fef08a"/><stop offset="100%" stop-color="%23f59e0b"/></linearGradient></defs><rect width="300" height="200" fill="%23090d16"/><g clip-path="url(%23lClip)"><rect x="10" y="15" width="140" height="170" fill="url(%23beforeBg)"/><path d="M20 15 V185 M40 15 V185 M60 15 V185 M80 15 V185 M100 15 V185 M120 15 V185 M140 15 V185" stroke="%23374151" stroke-width="0.8" stroke-dasharray="3,3"/><path d="M10 35 H150 M10 65 H150 M10 95 H150 M10 125 H150 M10 155 H150" stroke="%23374151" stroke-width="0.8" stroke-dasharray="3,3"/><rect x="30" y="70" width="115" height="75" fill="none" stroke="%236b7280" stroke-width="2"/><polygon points="25,70 87,32 145,70" fill="none" stroke="%236b7280" stroke-width="2"/><line x1="87" y1="32" x2="87" y2="70" stroke="%234b5563" stroke-width="1.5"/><rect x="40" y="80" width="30" height="65" fill="%231f2937" stroke="%239ca3af" stroke-width="1.5" stroke-dasharray="2,2"/><rect x="80" y="80" width="55" height="65" fill="%231f2937" stroke="%239ca3af" stroke-width="1.5" stroke-dasharray="2,2"/><line x1="20" y1="145" x2="150" y2="145" stroke="%234b5563" stroke-width="2"/><rect x="20" y="27" width="54" height="18" rx="9" fill="%23111827" opacity="0.9" stroke="%234b5563"/><text x="31" y="39" font-family="sans-serif" font-size="8.5" font-weight="900" fill="%239ca3af" letter-spacing="0.5">BEFORE</text></g><g clip-path="url(%23rClip)"><rect x="150" y="15" width="140" height="170" fill="url(%23afterSky)"/><rect x="150" y="145" width="140" height="40" fill="%2315803d"/><rect x="220" y="152" width="60" height="25" rx="4" fill="%2306b6d4" opacity="0.8"/><rect x="155" y="55" width="125" height="90" fill="%23f8fafc" rx="4"/><rect x="165" y="65" width="65" height="38" fill="url(%23glassGlow)" rx="2" stroke="%23ffffff" stroke-width="1.5"/><line x1="197" y1="65" x2="197" y2="103" stroke="%23ffffff" stroke-width="1"/><rect x="235" y="65" width="35" height="38" fill="%23b45309" rx="2"/><line x1="242" y1="65" x2="242" y2="103" stroke="%2378350f" stroke-width="1"/><line x1="250" y1="65" x2="250" y2="103" stroke="%2378350f" stroke-width="1"/><line x1="258" y1="65" x2="258" y2="103" stroke="%2378350f" stroke-width="1"/><rect x="175" y="108" width="95" height="37" rx="3" fill="%2378350f" stroke="%23451a03" stroke-width="1"/><line x1="175" y1="120" x2="270" y2="120" stroke="%23451a03" stroke-width="1"/><line x1="175" y1="130" x2="270" y2="130" stroke="%23451a03" stroke-width="1"/><circle cx="170" cy="115" r="3.5" fill="%23fef08a"/><circle cx="275" cy="115" r="3.5" fill="%23fef08a"/><rect x="222" y="27" width="52" height="18" rx="9" fill="%23064e3b" opacity="0.95" stroke="%2334d399"/><text x="233" y="39" font-family="sans-serif" font-size="8.5" font-weight="900" fill="%2334d399" letter-spacing="0.5">AFTER</text></g><line x1="150" y1="15" x2="150" y2="185" stroke="%2334d399" stroke-width="4"/><line x1="150" y1="15" x2="150" y2="185" stroke="%23ffffff" stroke-width="1"/><circle cx="150" cy="100" r="20" fill="%2310b981" opacity="0.3"/><circle cx="150" cy="100" r="16" fill="%2310b981" stroke="%23ffffff" stroke-width="2.5"/><path d="M143 100 L147 96 M143 100 L147 104 M158 100 L153 96 M158 100 L153 104" stroke="%23ffffff" stroke-width="2.5" stroke-linecap="round"/><circle cx="142" cy="35" r="2.5" fill="%2334d399"/><circle cx="160" cy="55" r="3" fill="%23a7f3d0"/><circle cx="138" cy="80" r="2" fill="%2334d399"/><circle cx="164" cy="118" r="2.5" fill="%236ee7b7"/><circle cx="140" cy="148" r="3" fill="%2334d399"/><circle cx="158" cy="172" r="2" fill="%23a7f3d0"/></svg>'
  },
  'accordion': {
    title: 'FAQ ACCORDION',
    tag: 'COLLAPSIBLE CONTENT BLOCK',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="15" y2="18"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(20,15)"><rect x="0" y="0" width="260" height="48" rx="8" fill="%2310b981" opacity="0.25" stroke="%2310b981" stroke-width="1.5"/><rect x="20" y="17" width="130" height="14" rx="4" fill="%2334d399"/><circle cx="235" cy="24" r="10" fill="%2310b981"/><path d="M230 24 H240" stroke="%23ffffff" stroke-width="2"/><rect x="0" y="60" width="260" height="42" rx="8" fill="%231e293b" stroke="%23334155" stroke-width="1"/><rect x="20" y="74" width="150" height="14" rx="4" fill="%2364748b"/><circle cx="235" cy="81" r="10" fill="%23334155"/><path d="M230 81 H240 M235 76 V86" stroke="%23ffffff" stroke-width="2"/><rect x="0" y="112" width="260" height="42" rx="8" fill="%231e293b" stroke="%23334155" stroke-width="1"/><rect x="20" y="126" width="110" height="14" rx="4" fill="%2364748b"/><circle cx="235" cy="133" r="10" fill="%23334155"/><path d="M230 133 H240 M235 128 V138" stroke="%23ffffff" stroke-width="2"/></g></svg>'
  },
  'audio-player': {
    title: 'AUDIO PLAYER',
    tag: 'STREAMING SOUND WAVE BLOCK',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="audioCardBg" x1="0" y1="0" x2="1" y2="0.8"><stop offset="0%" stop-color="%2318181b"/><stop offset="40%" stop-color="%23182721"/><stop offset="100%" stop-color="%23064e3b"/></linearGradient></defs><rect width="300" height="200" fill="%230f172a"/><rect x="15" y="25" width="270" height="150" rx="14" fill="url(%23audioCardBg)" stroke="%2310b981" stroke-width="1.2"/><circle cx="65" cy="100" r="32" fill="%2310b981" opacity="0.25"/><circle cx="65" cy="100" r="28" fill="none" stroke="%2310b981" stroke-width="2.5"/><polygon points="60,88 77,100 60,112" fill="%2310b981"/><text x="112" y="56" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="%23ffffff">The Future of Audio Blocks</text><text x="112" y="74" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="500" fill="%2394a3b8">Guten Audio Player</text><g fill="%2310b981"><rect x="112" y="104" width="2" height="10" rx="1"/><rect x="116" y="99" width="2" height="15" rx="1"/><rect x="120" y="94" width="2" height="20" rx="1"/><rect x="124" y="90" width="2" height="24" rx="1"/><rect x="128" y="97" width="2" height="17" rx="1"/><rect x="132" y="101" width="2" height="13" rx="1"/><rect x="136" y="92" width="2" height="22" rx="1"/><rect x="140" y="87" width="2" height="27" rx="1"/><rect x="144" y="95" width="2" height="19" rx="1"/><rect x="148" y="100" width="2" height="14" rx="1"/><rect x="152" y="96" width="2" height="18" rx="1"/><rect x="156" y="92" width="2" height="22" rx="1"/><rect x="160" y="98" width="2" height="16" rx="1"/><rect x="164" y="103" width="2" height="11" rx="1"/><rect x="168" y="95" width="2" height="19" rx="1"/><rect x="172" y="89" width="2" height="25" rx="1"/><rect x="176" y="93" width="2" height="21" rx="1"/><rect x="180" y="99" width="2" height="15" rx="1"/><rect x="184" y="94" width="2" height="20" rx="1"/><rect x="188" y="88" width="2" height="26" rx="1"/><rect x="192" y="92" width="2" height="22" rx="1"/><rect x="196" y="98" width="2" height="16" rx="1"/><rect x="200" y="102" width="2" height="12" rx="1"/><rect x="204" y="96" width="2" height="18" rx="1"/><rect x="208" y="90" width="2" height="24" rx="1"/><rect x="212" y="86" width="2" height="28" rx="1"/><rect x="216" y="93" width="2" height="21" rx="1"/><rect x="220" y="98" width="2" height="16" rx="1"/><rect x="224" y="92" width="2" height="22" rx="1"/><rect x="228" y="87" width="2" height="27" rx="1"/><rect x="232" y="94" width="2" height="20" rx="1"/><rect x="236" y="100" width="2" height="14" rx="1"/><rect x="240" y="95" width="2" height="19" rx="1"/><rect x="244" y="90" width="2" height="24" rx="1"/><rect x="248" y="97" width="2" height="17" rx="1"/><rect x="252" y="103" width="2" height="11" rx="1"/><rect x="256" y="96" width="2" height="18" rx="1"/><rect x="260" y="92" width="2" height="22" rx="1"/><rect x="264" y="99" width="2" height="15" rx="1"/></g><line x1="112" y1="124" x2="266" y2="124" stroke="%23334155" stroke-width="3" stroke-linecap="round"/><line x1="112" y1="124" x2="165" y2="124" stroke="%2310b981" stroke-width="3" stroke-linecap="round"/><circle cx="165" cy="124" r="4.5" fill="%23ffffff"/><text x="112" y="148" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="%23e2e8f0">1.5x Speed</text><text x="160" y="148" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="%23e2e8f0">Skip 10s</text><path d="M208 141 L211 141 L214 138 L214 150 L211 147 L208 147 Z M216 142 A4 4 0 0 1 216 146" fill="none" stroke="%2310b981" stroke-width="1.5"/><line x1="220" y1="144" x2="238" y2="144" stroke="%2310b981" stroke-width="3.5" stroke-linecap="round"/><circle cx="248" cy="144" r="2" fill="%2310b981"/><circle cx="254" cy="141" r="2" fill="%2310b981"/><circle cx="254" cy="147" r="2" fill="%2310b981"/><line x1="248" y1="144" x2="254" y2="141" stroke="%2310b981" stroke-width="1"/><line x1="248" y1="144" x2="254" y2="147" stroke="%2310b981" stroke-width="1"/><text x="259" y="147" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="%23e2e8f0">Share</text></svg>'
  },
  'pricing-table': {
    title: 'PRICING TABLE',
    tag: 'TIER & FEATURE COMPARISON',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(25,15)"><rect x="0" y="25" width="115" height="135" rx="10" fill="%231e293b" stroke="%23334155" stroke-width="1.5"/><rect x="15" y="42" width="55" height="12" rx="4" fill="%2364748b"/><text x="15" y="82" font-family="sans-serif" font-size="22" font-weight="bold" fill="%23ffffff">$19</text><rect x="15" y="100" width="75" height="6" rx="3" fill="%23475569"/><rect x="15" y="115" width="85" height="6" rx="3" fill="%23475569"/><rect x="135" y="10" width="115" height="150" rx="12" fill="%231e293b" stroke="%2310b981" stroke-width="2"/><rect x="150" y="25" width="50" height="14" rx="4" fill="%2310b981"/><text x="150" y="72" font-family="sans-serif" font-size="26" font-weight="bold" fill="%2334d399">$49</text><rect x="150" y="93" width="80" height="6" rx="3" fill="%2334d399"/><rect x="150" y="107" width="85" height="6" rx="3" fill="%2334d399"/><rect x="150" y="128" width="85" height="20" rx="6" fill="%2310b981"/></g></svg>'
  },
  'button': {
    title: 'ACTION BUTTON',
    tag: 'ANIMATED CTA & HOVER EFFECTS',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="8" rx="4"/>
        <polygon points="12 11 15 11 15 13"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="btnG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%2310b981"/><stop offset="100%" stop-color="%23059669"/></linearGradient></defs><rect width="300" height="200" fill="%230f172a"/><g transform="translate(25,20)"><rect x="20" y="50" width="210" height="60" rx="10" fill="url(%23btnG)" stroke="%2334d399" stroke-width="2"/><text x="48" y="86" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="bold" fill="%23ffffff">Click Here</text><circle cx="190" cy="80" r="14" fill="%23ffffff" opacity="0.25"/><path d="M185 80 L195 80 M191 76 L196 80 L191 84" stroke="%23ffffff" stroke-width="2.5" stroke-linecap="round"/></g></svg>'
  },
  'contact-form': {
    title: 'CONTACT FORM',
    tag: 'DYNAMIC FEEDBACK FORM',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(25,20)"><rect x="0" y="0" width="250" height="160" rx="10" fill="%231e293b" stroke="%23334155"/><rect x="20" y="20" width="100" height="26" rx="5" fill="%230f172a" stroke="%23475569"/><rect x="130" y="20" width="100" height="26" rx="5" fill="%230f172a" stroke="%23475569"/><rect x="20" y="58" width="210" height="50" rx="5" fill="%230f172a" stroke="%23475569"/><rect x="20" y="118" width="90" height="26" rx="5" fill="%2310b981"/><text x="40" y="135" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23ffffff">SUBMIT</text></g></svg>'
  },
  'marquee': {
    title: 'SMOOTH MARQUEE',
    tag: 'INFINITE LOGO & TEXT SCROLLER',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 19 22 12 13 5 13 19"/>
        <polygon points="2 19 11 12 2 5 2 19"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23090d16"/><g transform="translate(10,25)"><rect x="0" y="50" width="280" height="50" rx="8" fill="%231e293b" stroke="%2310b981" stroke-width="1.5"/><rect x="15" y="62" width="70" height="26" rx="13" fill="%2310b981" opacity="0.25"/><text x="30" y="79" font-family="sans-serif" font-size="11" font-weight="bold" fill="%2334d399">FAST</text><rect x="95" y="62" width="80" height="26" rx="13" fill="%233b82f6" opacity="0.25"/><text x="108" y="79" font-family="sans-serif" font-size="11" font-weight="bold" fill="%2360a5fa">MOTION</text><rect x="185" y="62" width="80" height="26" rx="13" fill="%238b5cf6" opacity="0.25"/><text x="196" y="79" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23c084fc">SMOOTH</text></g></svg>'
  },
  'scroll-story': {
    title: 'SCROLL STORY',
    tag: 'PARALLAX NARRATIVE ENGINE',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(20,20)"><line x1="130" y1="10" x2="130" y2="150" stroke="%23334155" stroke-width="3"/><line x1="130" y1="10" x2="130" y2="85" stroke="%2310b981" stroke-width="3"/><circle cx="130" cy="30" r="11" fill="%2310b981"/><text x="126" y="34" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23ffffff">1</text><rect x="150" y="16" width="90" height="28" rx="6" fill="%231e293b" stroke="%2310b981"/><circle cx="130" cy="85" r="13" fill="%2310b981" stroke="%2334d399" stroke-width="3"/><text x="126" y="89" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23ffffff">2</text><rect x="25" y="71" width="90" height="28" rx="6" fill="%231e293b" stroke="%2334d399"/><circle cx="130" cy="135" r="11" fill="%231e293b" stroke="%23475569" stroke-width="2"/><text x="126" y="139" font-family="sans-serif" font-size="11" font-weight="bold" fill="%2394a3b8">3</text></g></svg>'
  },
  'table-of-contents': {
    title: 'TABLE OF CONTENTS',
    tag: 'AUTOMATIC HEADING INDEX',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="10" y1="6" x2="21" y2="6"/>
        <line x1="10" y1="12" x2="21" y2="12"/>
        <line x1="10" y1="18" x2="21" y2="18"/>
        <path d="M4 6h1v4"/>
        <path d="M4 10h2"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(25,20)"><rect x="0" y="0" width="250" height="160" rx="10" fill="%231e293b" stroke="%23334155"/><circle cx="30" cy="35" r="5" fill="%2310b981"/><rect x="45" y="32" width="150" height="6" rx="3" fill="%2334d399"/><circle cx="50" cy="65" r="4" fill="%2364748b"/><rect x="65" y="62" width="120" height="6" rx="3" fill="%2364748b"/><circle cx="50" cy="95" r="4" fill="%2364748b"/><rect x="65" y="92" width="140" height="6" rx="3" fill="%2364748b"/><circle cx="30" cy="125" r="5" fill="%2364748b"/><rect x="45" y="122" width="160" height="6" rx="3" fill="%2364748b"/></g></svg>'
  },
  'qr-code': {
    title: 'QR CODE GENERATOR',
    tag: 'DYNAMIC & CUSTOM QR CODES',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#10b981" strokeWidth="2"/>
        <rect x="5" y="5" width="3" height="3" fill="#10b981"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#10b981" strokeWidth="2"/>
        <rect x="16" y="5" width="3" height="3" fill="#10b981"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#10b981" strokeWidth="2"/>
        <rect x="5" y="16" width="3" height="3" fill="#10b981"/>
        <rect x="14" y="14" width="3" height="3" fill="#10b981"/>
        <rect x="18" y="14" width="3" height="3" fill="#10b981"/>
        <rect x="14" y="18" width="3" height="3" fill="#10b981"/>
        <rect x="18" y="18" width="3" height="3" fill="#10b981"/>
      </svg>
    ),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(60,20)"><rect x="0" y="0" width="180" height="160" rx="12" fill="%231e293b" stroke="%23334155"/><rect x="40" y="20" width="100" height="100" rx="8" fill="%23ffffff"/><rect x="50" y="30" width="30" height="30" fill="%230f172a"/><rect x="100" y="30" width="30" height="30" fill="%230f172a"/><rect x="50" y="80" width="30" height="30" fill="%230f172a"/><rect x="100" y="80" width="15" height="15" fill="%2310b981"/><rect x="115" y="95" width="15" height="15" fill="%2310b981"/><rect x="40" y="132" width="100" height="18" rx="5" fill="%2310b981"/></g></svg>'
  }
};

export const getBlockBannerConfig = (block) => {
  const cleanId = (block.id || '').replace('guten-builder-blocks/', '').trim().toLowerCase();
  const config = blockBannerConfigs[cleanId] || {
    title: (block.title || block.id).toUpperCase(),
    tag: 'GUTENBERG SUITE BLOCK',
    icon: (
      <svg className="brand-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
      </svg>
    ),
    previewImage: ''
  };

  const imageUrl = block.previewImage || block.image || block.bannerImage || config.previewImage;

  return {
    ...config,
    imageUrl
  };
};
