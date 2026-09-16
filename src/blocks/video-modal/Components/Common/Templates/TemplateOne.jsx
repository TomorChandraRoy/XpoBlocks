import React from 'react';

// SVG Icon components replacing lucide-react to avoid missing package dependencies
const SettingsIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const PlayIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const SkipBackIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="19 20 9 12 19 4 19 20" />
    <line x1="5" y1="19" x2="5" y2="5" />
  </svg>
);

const SkipForwardIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 4 15 12 5 20 5 4" />
    <line x1="19" y1="5" x2="19" y2="19" />
  </svg>
);

const Volume2Icon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
  </svg>
);

const MaximizeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);

const TemplateOne = ({ attributes, setAttributes }) => {
  const { coverImage } = attributes || {};
  const mediaUrl = coverImage?.url || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080&auto=format&fit=crop";

  return (
    <div className="gbb-vm-player-wrapper">
      <div className="gbb-vm-player-container">
        {/* Media element (ছবি বা ভিডিও) */}
        <img src={mediaUrl} alt={coverImage?.alt || "Now playing"} className="gbb-vm-player-media" />

        {/* Gradient overlay */}
        <div className="gbb-vm-player-overlay"></div>

        {/* Control layers */}
        <div className="gbb-vm-player-controls">
          {/* Top Controls */}
          <div className="gbb-vm-controls-top">
            <div>
              <p className="gbb-vm-title">Big Buck Bunny</p>
              <p className="gbb-vm-subtitle">4K · HDR</p>
            </div>
            <button className="gbb-vm-btn-icon gbb-vm-hover-bg" type="button">
              <SettingsIcon size={20} />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="gbb-vm-controls-bottom">
            {/* Progress Bar */}
            <div className="gbb-vm-progress-container">
              <span>12:04</span>
              <div className="gbb-vm-progress-track">
                <div className="gbb-vm-progress-fill"></div>
                <div className="gbb-vm-progress-thumb"></div>
              </div>
              <span>36:11</span>
            </div>

            {/* Playback Buttons */}
            <div className="gbb-vm-controls-row">
              <button className="gbb-vm-btn-icon" type="button">
                <SkipBackIcon size={20} />
              </button>

              <button className="gbb-vm-btn-play" type="button">
                <PlayIcon size={20} />
              </button>

              <button className="gbb-vm-btn-icon" type="button">
                <SkipForwardIcon size={20} />
              </button>

              <button className="gbb-vm-btn-icon" type="button">
                <Volume2Icon size={20} />
              </button>

              <button className="gbb-vm-btn-icon gbb-vm-ml-auto" type="button">
                <MaximizeIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
