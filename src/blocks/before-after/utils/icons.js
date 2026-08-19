export const BeforeAfterIcon = {
  background: '#FCE7F3',
  foreground: '#F06292',
  src: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ fill: '#F06292' }}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H13V5h6v14zm-8 0H5V5h6v14z" opacity="0.3" fill="#F06292" style={{ fill: '#F06292' }} />
      <path d="M11 3v18H13V3h-2zm-3 6.59L6.59 11 8 12.41 9.41 11 8 9.59zm8 0L14.59 11 16 12.41 17.41 11 16 9.59z" fill="#F06292" style={{ fill: '#F06292' }} />
    </svg>
  ),
};

export const TemplateOneSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
    {/* Background / Before Image Placeholder */}
    <rect x="0" y="0" width="800" height="500" fill="#e2e8f0" rx="10" />
    <text x="200" y="260" fontSize="32" fontWeight="bold" fill="#94a3b8">
      Before
    </text>

    {/* After Image Placeholder (right half) */}
    <rect x="400" y="0" width="400" height="500" fill="#cbd5e1" rx="10" />
    <text x="600" y="260" fontSize="32" fontWeight="bold" fill="#64748b">
      After
    </text>

    {/* Divider Line */}
    <rect x="398" y="0" width="4" height="500" fill="#ffffff" />

    {/* Handle */}
    <circle cx="400" cy="250" r="24" fill="#111111" stroke="#ffffff" strokeWidth="3" />
    <path d="M 390 240 L 380 250 L 390 260" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 410 240 L 420 250 L 410 260" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GeneralIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
    <circle cx="8" cy="6" r="2.5" fill="currentColor" />
    <circle cx="16" cy="12" r="2.5" fill="currentColor" />
    <circle cx="10" cy="18" r="2.5" fill="currentColor" />
  </svg>
);

export const StyleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight: '6px' }}>
    <path d="M5 0 4 1H1v10.516l1-1V2h2v1h7V2h2v2.463l1-1V1h-3l-1-1zm.414 1h4.172l.414.414V2H5v-.586zm13.139 0-.205.006-.202.035-.195.063-.183.087-.172.112-.155.135-3.89 3.888-.223.207-.244.186-.256.164-.271.14-.282.118-.29.091-.301.067-.301.04-.305.013-.307-.012-.3-.041-.3-.067-.29-.091-.283-.118-.272-.14-.256-.164-.242-.186-.224-.207-7.073 7.072 7.073 7.07 7.07-7.07-.207-.226-.186-.242-.164-.256-.14-.272-.118-.283-.091-.29-.067-.298-.039-.302-.014-.307.014-.305.04-.3.066-.301.091-.291.118-.282.14-.27.164-.257.186-.244.207-.223 3.889-3.89.134-.155.112-.17.087-.185.063-.195.035-.202.006-.205-.021-.203-.047-.2-.077-.189-.1-.18-.124-.163-.143-.143-.164-.125-.18-.1-.189-.076-.197-.047zm-.108 1.002h.114l.107.025.102.047.087.07.07.088.048.102.025.107v.114l-.025.11-.047.1-.07.089-3.89 3.886-.241.262-.221.281-.197.297-.172.31-.149.325-.123.336-.095.342-.069.351-.039.354-.012.355.016.356.045.355.074.348.1.343.127.332.152.323.176.308-.432.432L8.25 7.094l.432-.432.308.176.324.154.332.125.342.1.35.074.353.045.356.016.355-.012.354-.04.351-.068.342-.095.336-.121.324-.149.31-.174.298-.197.281-.22.262-.243 3.888-3.888.086-.07.102-.048zM3 6v1h2.516l1-1zm4.543 1.8 5.656 5.657-1.554 1.557-.02-.256-.037-.254-.03-.125-.037-.123-.05-.117-.065-.112-.078-.103-.09-.088-.105-.076-.113-.059-.122-.043-.125-.025-.128-.012h-.127l-.13.012-.126.02-.25.056-.244.074-.243.084-.476.19-.442.17-.007.02-.03-.007.037-.013.497-1.291.11-.332.095-.34.037-.172.025-.172.012-.174-.01-.176-.014-.088-.021-.084-.027-.084-.04-.08-.044-.074-.057-.068-.063-.063-.068-.054-.076-.045-.08-.035-.084-.028-.086-.015-.088-.01-.088-.002-.174.015-.174.036-.168.045-.335.105-.33.115-.168.055-.147.037v.014l-.025-.008.025-.006.018-.299.021-.31.002-.157-.004-.156-.017-.154-.03-.154-.045-.149-.06-.144-.072-.137-.086-.131-.1-.121-.11-.111-.119-.102-.123-.094zM3 8v1h.516l1-1zm2.592 1.75.127.08.119.092.105.105.043.06.035.067.03.069.015.072.016.148-.01.3-.021.296-.012.299.008.148.021.149.043.142.065.135.04.06.05.06.052.052.059.047.064.039.067.035.142.045.147.021h.148l.15-.015.145-.027.29-.079.282-.095.282-.098.271-.078.004-.024.012.02-.016.004-.035.176-.055.197-.129.387-.296.763-.149.381-.068.194-.06.195-.048.2-.015.099-.008.103v.102l.014.101.027.1.039.094.053.088.066.078.078.068.088.05.094.042.101.025.1.012.104.002.101-.01.102-.017.197-.05.195-.062.192-.068.76-.3.386-.136.2-.048.101-.018.086-.006-.004-.016.02.014-.016.002.02.066.013.083.018.168.017.335.02.336.039.334-2.11 2.112-5.656-5.657zM1 13.281V17h3.72l-1-1H2v-1.719z" />
  </svg>
);

export const ArrowsIcon = ({ iconSize }) => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18 6-6-6-6" />
    <path d="m9 6-6 6 6 6" />
  </svg>
);

export const LinesIcon = ({ iconSize }) => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="4" x2="9" y2="20" />
    <line x1="15" y1="4" x2="15" y2="20" />
  </svg>
);

export const DotsIcon = ({ iconSize }) => (
  <svg width={iconSize * 0.75} height={iconSize * 1.25} viewBox="0 0 12 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2" cy="4" r="2" />
    <circle cx="2" cy="10" r="2" />
    <circle cx="2" cy="16" r="2" />
    <circle cx="10" cy="4" r="2" />
    <circle cx="10" cy="10" r="2" />
    <circle cx="10" cy="16" r="2" />
  </svg>
);

export const GripperIcon = ({ iconSize }) => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="8" y2="18" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="16" y1="6" x2="16" y2="18" />
  </svg>
);

export const CircleArrowsIcon = ({ iconSize }) => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m14 8-4 4 4 4" />
    <path d="m10 8 4 4-4 4" />
  </svg>
);

export const PlusIcon = ({ iconSize }) => (
  <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
