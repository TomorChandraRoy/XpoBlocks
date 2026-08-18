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
  <svg width="100%" height="100%" viewBox="0 0 646 434" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="646" height="434" fill="#F9FAFB" />

    <text x="323" y="25" text-anchor="middle" fill="#64748B" font-family="Arial, sans-serif" font-size="14">
      FAQ
    </text>

    <text x="323" y="62" text-anchor="middle" fill="#1E293B" font-family="Arial, sans-serif" font-size="24" font-weight="700">
      Frequently asked questions
    </text>

    <text x="323" y="97" text-anchor="middle" fill="#64748B" font-family="Arial, sans-serif" font-size="14">
      Everything you need to know about the product and billing.
    </text>

    <text x="24" y="166" fill="#1E293B" font-family="Arial, sans-serif" font-size="16" font-weight="500">
      Is there a free trial available?
    </text>

    <path d="M616 153V167M609 160H623" stroke="#334155" stroke-width="2" stroke-linecap="round" />

    <line x1="24" y1="186.5" x2="628" y2="186.5" stroke="#D1D5DB" />

    <text x="24" y="221" fill="#1E293B" font-family="Arial, sans-serif" font-size="16" font-weight="500">
      Can I change my plan later?
    </text>

    <path d="M610 214H622" stroke="#334155" stroke-width="2" stroke-linecap="round" />

    <text x="24" y="257" fill="#64748B" font-family="Arial, sans-serif" font-size="14">
      Of course. Our pricing scales with your company. Chat to our friendly
    </text>

    <text x="24" y="279" fill="#64748B" font-family="Arial, sans-serif" font-size="14">
      team to find a solution that works for you.
    </text>

    <line x1="24" y1="297.5" x2="628" y2="297.5" stroke="#D1D5DB" />

    <text x="24" y="331" fill="#1E293B" font-family="Arial, sans-serif" font-size="16" font-weight="500">
      What is your cancellation policy?
    </text>

    <path d="M616 318V332M609 325H623" stroke="#334155" stroke-width="2" stroke-linecap="round" />

    <line x1="24" y1="353.5" x2="628" y2="353.5" stroke="#D1D5DB" />

    <text x="24" y="386" fill="#1E293B" font-family="Arial, sans-serif" font-size="16" font-weight="500">
      Can other info be added to an invoice?
    </text>

    <path d="M616 373V387M609 380H623" stroke="#334155" stroke-width="2" stroke-linecap="round" />

    <line x1="24" y1="407.5" x2="628" y2="407.5" stroke="#D1D5DB" />
  </svg>
);

export const TemplateThreeSvg = () => (
  <svg width="100%" height="100%" viewBox="0 0 597 451" xmlns="http://www.w3.org/2000/svg">
    <rect width="597" height="451" fill="#ffffff" />

    <text x="298.5" y="32" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#07152f">
      Frequently asked questions
    </text>

    <text x="298.5" y="64" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="400" fill="#6b7c9a">
      Everything you need to know about the product and billing.
    </text>

    <text x="23" y="165" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="#07152f">
      Is there a free trial available?
    </text>

    <path d="M556 157 L561 162 L566 157" fill="none" stroke="#07152f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

    <rect x="7" y="195" width="581" height="129" rx="8" fill="#b9bec8" />

    <text x="23" y="227" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="#07152f">
      Can I change my plan later?
    </text>

    <path d="M556 224 L561 219 L566 224" fill="none" stroke="#07152f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

    <text x="23" y="256" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="400" fill="#07152f">
      Of course. Our pricing scales with your company. Chat to our friendly team to find a
    </text>

    <text x="23" y="287" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="400" fill="#07152f">
      solution that works for you.
    </text>

    <text x="23" y="365" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="#07152f">
      What is your cancellation policy?
    </text>

    <path d="M556 353 L561 358 L566 353" fill="none" stroke="#07152f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

    <text x="23" y="427" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" fill="#07152f">
      Can other info be added to an invoice?
    </text>

    <path d="M556 415 L561 420 L566 415" fill="none" stroke="#07152f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);


//Edit.js file jasche
export const templateData = {
  templates: [
    {
      id: 'template-1',
      label: __('Template 1', 'guten-builder-blocks'),
      tag: __('Classic Minimal', 'guten-builder-blocks'),
      icon: TemplateOneSvg,
      attributes: {
        iconType: 'chevron',
        iconPosition: 'right',
        subtitleColor: '#475569',
        titleColor: '#0f172a',
        descriptionColor: '#64748b',
        questionColor: '#0f172a',
        answerColor: '#475569',
        iconColor: '#0f172a',
        questionBorder: {
          color: '#e0e7ff',
          width: '1px',
          style: 'solid',
          side: 'all',
        },
      },
    },
    {
      id: 'template-2',
      label: __('Template 2', 'guten-builder-blocks'),
      tag: __('Center Aligned', 'guten-builder-blocks'),
      icon: TemplateTwoSvg,
      attributes: {
        iconType: 'plus-minus',
        iconPosition: 'right',
        showHeader: true,
        subtitleColor: '#475569',
        titleColor: '#0f172a',
        descriptionColor: '#64748b',
        questionColor: '#0f172a',
        answerColor: '#475569',
        iconColor: '#0f172a',
        questionBorder: {
          color: '#e2e8f0',
          width: '1px',
          style: 'solid',
          side: 'bottom',
        },
      },
    },
    {
      id: 'template-3',
      label: __('Template 3', 'guten-builder-blocks'),
      tag: __('FAQ Gradient', 'guten-builder-blocks'),
      icon: TemplateThreeSvg,
      isPro: true,
      attributes: {
        iconType: 'chevron',
        iconPosition: 'right',
        showHeader: true,
      },
    },
  ],
};

