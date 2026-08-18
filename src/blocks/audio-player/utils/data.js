import { __ } from "@wordpress/i18n";

export const TemplateOneSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 370"
    width="100%"
    height="100%"
    style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
  >
    <defs>
      <linearGradient id="coverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    {/* Card Container Background */}
    <rect x="10" y="10" width="780" height="350" rx="24" fill="#ffffff" stroke="#f1f5f9" strokeWidth="2" />

    {/* Cover Art Box */}
    <rect x="36" y="36" width="180" height="180" rx="16" fill="url(#coverGrad)" />
    <path d="M 96 136 A 30 30 0 0 1 156 136" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" fill="none" />
    <rect x="91" y="130" width="10" height="20" rx="3" fill="#ffffff" />
    <rect x="155" y="130" width="10" height="20" rx="3" fill="#ffffff" />

    {/* Title & Info Block */}
    <text x="250" y="66" fontSize="13" fontWeight="600" fill="#64748b" letterSpacing="1.2">NOW PLAYING</text>
    <text x="250" y="108" fontSize="28" fontWeight="700" fill="#0f172a">Listen to Message</text>
    <text x="250" y="146" fontSize="18" fill="#64748b">Artist / Author Name</text>

    {/* Seek Bar / Progress Timeline */}
    <rect x="250" y="190" width="514" height="6" rx="3" fill="#e2e8f0" />
    <rect x="250" y="190" width="10" height="6" rx="3" fill="#0f172a" />
    <circle cx="260" cy="193" r="10" fill="#0f172a" />

    {/* Time Display */}
    <text x="250" y="230" fontSize="14" fill="#94a3b8">00:00</text>
    <text x="764" y="230" fontSize="14" fill="#94a3b8" textAnchor="end">06:12</text>

    {/* Bottom Controls Row */}
    {/* Skip Backward (<<) */}
    <g fill="#0f172a">
      <polygon points="230,292 218,300 230,308" />
      <polygon points="218,292 206,300 218,308" />
    </g>

    {/* Play Button (Dark Circle + Play Triangle) */}
    <circle cx="310" cy="300" r="32" fill="#0f172a" />
    <polygon points="302,286 326,300 302,314" fill="#ffffff" />

    {/* Skip Forward (>>) */}
    <g fill="#0f172a">
      <polygon points="378,292 390,300 378,308" />
      <polygon points="390,292 402,300 390,308" />
    </g>

    {/* Speaker Volume Icon */}
    <path d="M 492 292 L 500 292 L 508 284 L 508 316 L 500 308 L 492 308 Z" fill="#0f172a" />
    <path d="M 514 294 A 8 8 0 0 1 514 306" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M 520 288 A 14 14 0 0 1 520 312" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    {/* Volume Slider Line */}
    <rect x="540" y="297" width="90" height="6" rx="3" fill="#3b82f6" />
    <circle cx="630" cy="300" r="8" fill="#3b82f6" />
  </svg>
);

export const templateData = {
  title: __('Select Audio Player Template', 'guten-builder-blocks'),
  subtitle: __('Choose a design template for your audio player block.', 'guten-builder-blocks'),
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Modern Audio Card', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        labelText: ''
      }
    }
  ]
};
