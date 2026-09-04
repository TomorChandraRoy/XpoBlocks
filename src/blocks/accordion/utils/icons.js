export const faqIcon = {
  background: '#FFE4E6',
  foreground: '#E63956',
  src: (
    <svg width="24" height="24" viewBox="50 35 235 220" xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: '#E63956' }}>
      <rect x="50" y="35" width="235" height="220" rx="30" fill="#FFE4E6" />
      <g transform="translate(210, 90) scale(1.25) translate(-225, -80)">
        <path d="M 195 40 L 255 40 A 25 25 0 0 1 280 65 L 280 95 A 25 25 0 0 1 255 120 L 242 120 L 258 143 L 230 120 L 195 120 A 25 25 0 0 1 170 95 L 170 65 A 25 25 0 0 1 195 40 Z" fill="#FBBF24" />
        <path d="M 226 67.5 C 226 60.5 233 55.5 240.5 55.5 C 247.5 55.5 253.5 60.5 253.5 67.5 C 253.5 73.5 249.5 76.5 245.5 80 C 242.5 82.5 240.5 86 240.5 90 L 240.5 92" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="240.5" cy="101" r="2.5" fill="#FFFFFF" />
      </g>
      <path d="M 96 82 L 204 82 A 38 38 0 0 1 242 120 L 242 172 A 38 38 0 0 1 204 210 L 165 210 L 123 248 A 5 5 0 0 1 114 244 L 117 210 L 96 210 A 38 38 0 0 1 58 172 L 58 120 A 38 38 0 0 1 96 82 Z" fill="#f62477c2" />
    </svg>
  ),
};


export const GeneralIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginRight: '6px' }}
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
    <circle cx="8" cy="6" r="2.5" fill="currentColor" />
    <circle cx="16" cy="12" r="2.5" fill="currentColor" />
    <circle cx="10" cy="18" r="2.5" fill="currentColor" />
  </svg>
);

export const StyleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ marginRight: '6px' }}
  >
    <path
      d="M5 0 4 1H1v10.516l1-1V2h2v1h7V2h2v2.463l1-1V1h-3l-1-1zm.414 1h4.172l.414.414V2H5v-.586zm13.139 0-.205.006-.202.035-.195.063-.183.087-.172.112-.155.135-3.89 3.888-.223.207-.244.186-.256.164-.271.14-.282.118-.29.091-.301.067-.301.04-.305.013-.307-.012-.3-.041-.3-.067-.29-.091-.283-.118-.272-.14-.256-.164-.242-.186-.224-.207-7.073 7.072 7.073 7.07 7.07-7.07-.207-.226-.186-.242-.164-.256-.14-.272-.118-.283-.091-.29-.067-.298-.039-.302-.014-.307.014-.305.04-.3.066-.301.091-.291.118-.282.14-.27.164-.257.186-.244.207-.223 3.889-3.89.134-.155.112-.17.087-.185.063-.195.035-.202.006-.205-.021-.203-.047-.2-.077-.189-.1-.18-.124-.163-.143-.143-.164-.125-.18-.1-.189-.076-.197-.047zm-.108 1.002h.114l.107.025.102.047.087.07.07.088.048.102.025.107v.114l-.025.11-.047.1-.07.089-3.89 3.886-.241.262-.221.281-.197.297-.172.31-.149.325-.123.336-.095.342-.069.351-.039.354-.012.355.016.356.045.355.074.348.1.343.127.332.152.323.176.308-.432.432L8.25 7.094l.432-.432.308.176.324.154.332.125.342.1.35.074.353.045.356.016.355-.012.354-.04.351-.068.342-.095.336-.121.324-.149.31-.174.298-.197.281-.22.262-.243 3.888-3.888.086-.07.102-.048zM3 6v1h2.516l1-1zm4.543 1.8 5.656 5.657-1.554 1.557-.02-.256-.037-.254-.03-.125-.037-.123-.05-.117-.065-.112-.078-.103-.09-.088-.105-.076-.113-.059-.122-.043-.125-.025-.128-.012h-.127l-.13.012-.126.02-.25.056-.244.074-.243.084-.476.19-.442.17-.007.02-.03-.007.037-.013.497-1.291.11-.332.095-.34.037-.172.025-.172.012-.174-.01-.176-.014-.088-.021-.084-.027-.084-.04-.08-.044-.074-.057-.068-.063-.063-.068-.054-.076-.045-.08-.035-.084-.028-.086-.015-.088-.01-.088-.002-.174.015-.174.036-.168.045-.335.105-.33.115-.168.055-.147.037v.014l-.025-.008.025-.006.018-.299.021-.31.002-.157-.004-.156-.017-.154-.03-.154-.045-.149-.06-.144-.072-.137-.086-.131-.1-.121-.11-.111-.119-.102-.123-.094zM3 8v1h.516l1-1zm2.592 1.75.127.08.119.092.105.105.043.06.035.067.03.069.015.072.016.148-.01.3-.021.296-.012.299.008.148.021.149.043.142.065.135.04.06.05.06.052.052.059.047.064.039.067.035.142.045.147.021h.148l.15-.015.145-.027.29-.079.282-.095.282-.098.271-.078.004-.024.012.02-.016.004-.035.176-.055.197-.129.387-.296.763-.149.381-.068.194-.06.195-.048.2-.015.099-.008.103v.102l.014.101.027.1.039.094.053.088.066.078.078.068.088.05.094.042.101.025.1.012.104.002.101-.01.102-.017.197-.05.195-.062.192-.068.76-.3.386-.136.2-.048.101-.018.086-.006-.004-.016.02.014-.016.002.02.066.013.083.018.168.017.335.02.336.039.334-2.11 2.112-5.656-5.657zM1 13.281V17h3.72l-1-1H2v-1.719z"
    />
  </svg>
);


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


