
export const blockIcon = {
  background: '#FCE7F3',
  foreground: '#F62477',
  src: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        .gbb-qr-stroke {
          stroke: #F62477 !important;
          fill: none !important;
        }
        .gbb-qr-fill {
          fill: #F62477 !important;
          stroke: none !important;
        }
      `}</style>
      <rect className="gbb-qr-stroke" x="3" y="3" width="7" height="7" rx="1.5" stroke="#F62477" strokeWidth="2"/>
      <rect className="gbb-qr-fill" x="5" y="5" width="3" height="3" fill="#F62477"/>
      <rect className="gbb-qr-stroke" x="14" y="3" width="7" height="7" rx="1.5" stroke="#F62477" strokeWidth="2"/>
      <rect className="gbb-qr-fill" x="16" y="5" width="3" height="3" fill="#F62477"/>
      <rect className="gbb-qr-stroke" x="3" y="14" width="7" height="7" rx="1.5" stroke="#F62477" strokeWidth="2"/>
      <rect className="gbb-qr-fill" x="5" y="16" width="3" height="3" fill="#F62477"/>
      <rect className="gbb-qr-fill" x="14" y="14" width="3" height="3" fill="#F62477"/>
      <rect className="gbb-qr-fill" x="18" y="14" width="3" height="3" fill="#F62477"/>
      <rect className="gbb-qr-fill" x="14" y="18" width="3" height="3" fill="#F62477"/>
      <rect className="gbb-qr-fill" x="18" y="18" width="3" height="3" fill="#F62477"/>
    </svg>
  ),
};

export const DownloadIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
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

export const TemplateOneSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
    <rect width="800" height="500" fill="#f8fafc" rx="16" />
    <g transform="translate(200, 40)">
      <rect width="400" height="420" fill="#ffffff" rx="16" stroke="#e2e8f0" strokeWidth="2" />
      {/* Title */}
      <rect x="100" y="30" width="200" height="24" rx="6" fill="#0f172a" />
      {/* Subtitle */}
      <rect x="70" y="66" width="260" height="12" rx="4" fill="#94a3b8" />

      {/* QR Code Container */}
      <rect x="90" y="100" width="220" height="220" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <g transform="translate(110, 120)">
        {/* Finder 1 */}
        <rect x="0" y="0" width="50" height="50" rx="6" stroke="#0f172a" strokeWidth="8" fill="none" />
        <rect x="15" y="15" width="20" height="20" rx="3" fill="#0f172a" />
        {/* Finder 2 */}
        <rect x="130" y="0" width="50" height="50" rx="6" stroke="#0f172a" strokeWidth="8" fill="none" />
        <rect x="145" y="15" width="20" height="20" rx="3" fill="#0f172a" />
        {/* Finder 3 */}
        <rect x="0" y="130" width="50" height="50" rx="6" stroke="#0f172a" strokeWidth="8" fill="none" />
        <rect x="15" y="145" width="20" height="20" rx="3" fill="#0f172a" />

        {/* Data Modules */}
        <rect x="70" y="10" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="95" y="10" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="70" y="35" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="10" y="70" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="35" y="70" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="70" y="70" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="95" y="70" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="130" y="70" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="155" y="70" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="70" y="95" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="130" y="95" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="70" y="130" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="95" y="130" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="130" y="130" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="70" y="155" width="16" height="16" rx="2" fill="#0f172a" />
        <rect x="155" y="155" width="16" height="16" rx="2" fill="#0f172a" />

        {/* Center Logo */}
        <circle cx="90" cy="90" r="22" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="78" y="78" width="24" height="24" rx="4" fill="#F62477" />
      </g>

      {/* Button */}
      <rect x="90" y="345" width="220" height="42" rx="10" fill="#10b981" />
      <rect x="130" y="360" width="140" height="12" rx="4" fill="#ffffff" />
    </g>
  </svg>
);



