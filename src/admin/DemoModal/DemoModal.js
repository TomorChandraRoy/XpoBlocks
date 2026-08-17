import { useState } from '@wordpress/element';
import { getBlockBannerConfig } from '../Dashboard/adminData';

const DemoModal = ({ block, onClose }) => {
  const [device, setDevice] = useState('desktop');
  if (!block) return null;

  const config = getBlockBannerConfig(block);

  return (
    <div className="demo-modal-overlay" onClick={onClose}>
      <div className="demo-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="demo-modal-header">
          <div className="modal-title-group">
            <span className="modal-badge">LIVE DEMO</span>
            <h3 className="modal-block-name">{block.title || config.title}</h3>
          </div>

          <div className="device-switcher">
            <button
              type="button"
              className={`device-btn ${device === 'desktop' ? 'active' : ''}`}
              onClick={() => setDevice('desktop')}
            >
              💻 Desktop
            </button>
            <button
              type="button"
              className={`device-btn ${device === 'tablet' ? 'active' : ''}`}
              onClick={() => setDevice('tablet')}
            >
              📱 Tablet
            </button>
            <button
              type="button"
              className={`device-btn ${device === 'mobile' ? 'active' : ''}`}
              onClick={() => setDevice('mobile')}
            >
              📲 Mobile
            </button>
          </div>

          <button type="button" className="demo-modal-close" onClick={onClose} aria-label="Close Demo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="demo-modal-body">
          <div className={`demo-viewport device-${device}`}>
            <div className="viewport-header-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="url-bar">https://gutenbuilder.local/demo/{(block.id || '').replace('guten-builder-blocks/', '')}</span>
            </div>
            <div className="viewport-content">
              {config.imageUrl ? (
                <img src={config.imageUrl} alt={block.title} className="demo-preview-img" />
              ) : (
                config.preview
              )}
            </div>
          </div>
        </div>

        <div className="demo-modal-footer">
          <span className="footer-note">✨ Interactive Live Demo Mode — Testing on {device.toUpperCase()} View</span>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
