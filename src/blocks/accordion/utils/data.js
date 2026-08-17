import { __ } from "@wordpress/i18n";

// SVG Wireframe Previews for 3 Templates with high-fidelity visual design
export const TemplateOneSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 580"
    width="100%"
    height="100%"
    style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
  >
    {/* Background */}
    <rect width="800" height="580" fill="#ffffff" rx="8" />
    {/* --- Header Section --- */}
    <text x="400" y="45" fontSize="15" fill="#6b7280" textAnchor="middle">
      FAQ
    </text>

    <text
      x="400"
      y="90"
      fontSize="32"
      fontWeight="700"
      fill="#0f172a"
      textAnchor="middle"
    >
      Frequently Asked Questions
    </text>

    <text x="400" y="130" fontSize="17" fill="#64748b" textAnchor="middle">
      <tspan x="400" dy="0">
        Proactively answering FAQs boosts user confidence and
      </tspan>
      <tspan x="400" dy="26">
        cuts down on support tickets.
      </tspan>
    </text>
    {/* Yellow underline beneath "cuts down on" */}
    <line
      x1="315"
      y1="162"
      x2="418"
      y2="162"
      stroke="#fcd34d"
      strokeWidth="3"
      strokeLinecap="round"
    />
    {/* --- FAQ Item 1 --- */}
    <rect
      x="50"
      y="190"
      width="700"
      height="64"
      rx="8"
      fill="#ffffff"
      stroke="#e2e8f0"
      strokeWidth="1.5"
    />
    <text x="75" y="228" fontSize="18" fontWeight="500" fill="#0f172a">
      What is FAQ Accordion?
    </text>
    {/* Chevron Down Icon */}
    <path
      d="M 710 218 L 717 225 L 724 218"
      fill="none"
      stroke="#0f172a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* --- FAQ Item 2 (Active/Opened) --- */}
    <rect
      x="50"
      y="274"
      width="700"
      height="64"
      rx="8"
      fill="#ffffff"
      stroke="#e2e8f0"
      strokeWidth="1.5"
    />
    <text x="75" y="312" fontSize="18" fontWeight="500" fill="#0f172a">
      Is this block fully responsive?
    </text>
    {/* Chevron Up Icon */}
    <path
      d="M 710 316 L 717 309 L 724 316"
      fill="none"
      stroke="#0f172a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Answer for Item 2 */}
    <text x="75" y="365" fontSize="16" fill="#475569">
      <tspan x="75" dy="0">
        Yes! All options are fully responsive and optimized for mobile, tablet,
        and desktop viewport
      </tspan>
      <tspan x="75" dy="24">
        sizes.
      </tspan>
    </text>
    {/* --- FAQ Item 3 --- */}
    <rect
      x="50"
      y="420"
      width="700"
      height="64"
      rx="8"
      fill="#ffffff"
      stroke="#e2e8f0"
      strokeWidth="1.5"
    />
    <text x="75" y="458" fontSize="18" fontWeight="500" fill="#0f172a">
      Can I customize colors and typography?
    </text>
    {/* Chevron Down Icon */}
    <path
      d="M 710 448 L 717 455 L 724 448"
      fill="none"
      stroke="#0f172a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* --- FAQ Item 4 --- */}
    <rect
      x="50"
      y="504"
      width="700"
      height="64"
      rx="8"
      fill="#ffffff"
      stroke="#e2e8f0"
      strokeWidth="1.5"
    />
    <text x="75" y="542" fontSize="18" fontWeight="500" fill="#0f172a">
      Does it impact site performance?
    </text>
    {/* Chevron Down Icon */}
    <path
      d="M 710 532 L 717 539 L 724 532"
      fill="none"
      stroke="#0f172a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TemplateTwoSvg = () => (
  <svg viewBox="0 0 160 105" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Active Item 1 */}
    <rect x="8" y="6" width="144" height="38" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
    <rect x="16" y="13" width="75" height="4" rx="2" fill="#0f172a" />
    <path d="M138 13L142 17L146 13" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="16" y="23" width="120" height="3" rx="1.5" fill="#94a3b8" />
    <rect x="16" y="30" width="100" height="3" rx="1.5" fill="#cbd5e1" />

    {/* Collapsed Items */}
    <rect x="8" y="49" width="144" height="14" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
    <rect x="16" y="54" width="65" height="3.5" rx="1.75" fill="#475569" />
    <path d="M138 54L142 57.5L146 54" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    <rect x="8" y="67" width="144" height="14" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
    <rect x="16" y="72" width="70" height="3.5" rx="1.75" fill="#475569" />
    <path d="M138 72L142 75.5L146 72" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    <rect x="8" y="85" width="144" height="14" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
    <rect x="16" y="90" width="55" height="3.5" rx="1.75" fill="#475569" />
    <path d="M138 90L142 93.5L146 90" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TemplateThreeSvg = () => (
  <svg
    viewBox="0 0 800 580"
    width="100%"
    height="100%"
    style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
  >
    <rect width="800" height="580" fill="#ffffff" rx="8" />

    {/* Q & A Box 1 (Expanded) */}
    <rect
      x="50"
      y="50"
      width="700"
      height="150"
      fill="#f8fafc"
      stroke="#e2e8f0"
      strokeWidth="2"
      rx="6"
    />
    <rect x="80" y="75" width="30" height="30" fill="#e2e8f0" rx="4" />
    <text
      x="95"
      y="95"
      fontSize="16"
      fontWeight="bold"
      fill="#94a3b8"
      textAnchor="middle"
    >
      Q
    </text>
    <rect x="130" y="80" width="300" height="16" fill="#cbd5e1" rx="4" />

    <rect x="80" y="135" width="30" height="30" fill="#e2e8f0" rx="4" />
    <text
      x="95"
      y="155"
      fontSize="16"
      fontWeight="bold"
      fill="#94a3b8"
      textAnchor="middle"
    >
      A
    </text>
    <rect x="130" y="140" width="450" height="12" fill="#cbd5e1" rx="4" />
    <rect x="130" y="160" width="350" height="12" fill="#cbd5e1" rx="4" />

    {/* Q Box 2 (Collapsed) */}
    <rect
      x="50"
      y="220"
      width="700"
      height="70"
      fill="#f8fafc"
      stroke="#e2e8f0"
      strokeWidth="2"
      rx="6"
    />
    <rect x="80" y="240" width="30" height="30" fill="#e2e8f0" rx="4" />
    <text
      x="95"
      y="260"
      fontSize="16"
      fontWeight="bold"
      fill="#94a3b8"
      textAnchor="middle"
    >
      Q
    </text>
    <rect x="130" y="247" width="250" height="16" fill="#cbd5e1" rx="4" />

    {/* Q Box 3 (Collapsed) */}
    <rect
      x="50"
      y="310"
      width="700"
      height="70"
      fill="#f8fafc"
      stroke="#e2e8f0"
      strokeWidth="2"
      rx="6"
    />
    <rect x="80" y="330" width="30" height="30" fill="#e2e8f0" rx="4" />
    <text
      x="95"
      y="350"
      fontSize="16"
      fontWeight="bold"
      fill="#94a3b8"
      textAnchor="middle"
    >
      Q
    </text>
    <rect x="130" y="337" width="320" height="16" fill="#cbd5e1" rx="4" />
  </svg>
);

export const templateData = {
  title: __("FAQ Accordion Templates", "guten-builder-blocks"),
  subtitle: __(
    "Choose a vertical accordion template to get started",
    "guten-builder-blocks"
  ),
  templates: [
    {
      id: "template-1",
      label: __("Template 1", "guten-builder-blocks"),
      tag: __("Classic Minimal", "guten-builder-blocks"),
      icon: TemplateOneSvg,
      attributes: {
        iconType: "chevron",
        iconPosition: "right",
      }
    },
    {
      id: "template-2",
      label: __("Template 2", "guten-builder-blocks"),
      tag: __("Center Aligned", "guten-builder-blocks"),
      icon: TemplateTwoSvg,
      attributes: {
        iconType: "plus-minus",
        iconPosition: "right",
      }
    },
    {
      id: "template-3",
      label: __("Template 3", "guten-builder-blocks"),
      tag: __("Premium", "guten-builder-blocks"),
      icon: TemplateThreeSvg,
      isPro: true,
      attributes: {
        iconType: "plus",
        iconPosition: "left",
      }
    },
  ],
};

