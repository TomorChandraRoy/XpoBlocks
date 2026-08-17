const blockDocsData = {
  'before-after': {
    title: 'Before/After Slider Documentation',
    badge: 'INTERACTIVE COMPARISON',
    summary: 'The Before/After Slider block allows users to interactively compare two images (e.g. construction, renovation, photo editing) using a smooth draggable handle.',
    features: [
      'Dual Image Upload (Before image & After image support)',
      'Horizontal & Vertical comparison slider orientations',
      'Customizable slider handle color, glow intensity, and initial position',
      'Custom text labels for Before and After badges'
    ],
    usageSteps: [
      'Add the "Before/After Slider" block into your Gutenberg editor canvas.',
      'In the Block Settings sidebar, select your "Before" and "After" media images.',
      'Adjust the starting split position (e.g. 50%) and pick your preferred slider handle style.',
      'Save and publish your post to test the live touch/mouse drag comparison.'
    ]
  },
  'accordion': {
    title: 'FAQ Accordion Documentation',
    badge: 'COLLAPSIBLE CONTENT',
    summary: 'The FAQ Accordion block organizes collapsible text panels for frequently asked questions, product specs, or structured documentation.',
    features: [
      'Unlimited accordion item repeater',
      'Single-item open or multi-item expand modes',
      'Custom expandable icons (+ / -, chevron, arrow)',
      'Rich text editing inside accordion bodies'
    ],
    usageSteps: [
      'Insert the "FAQ Accordion" block onto your page.',
      'Click "Add Accordion Item" to create new question/answer rows.',
      'Customize question typography, active background color, and icon placement in settings.',
      'Preview collapsible smooth animations on desktop and mobile viewports.'
    ]
  },
  'audio-player': {
    title: 'Audio Player Documentation',
    badge: 'CUSTOM MEDIA PLAYER',
    summary: 'A futuristic neon audio player block featuring dynamic equalizer wave animations, playback speed controls, and volume adjustments.',
    features: [
      'Direct MP3 file upload or external audio stream URL',
      'Dynamic audio spectrum equalizer visualizer',
      '1.0x - 2.0x playback speed toggles',
      'Custom cover image and artist subtitle display'
    ],
    usageSteps: [
      'Add the "Audio Player" block to your layout.',
      'Upload an MP3 file via the WordPress Media Library or insert an audio URL.',
      'Set track title, artist name, and album artwork.',
      'Choose player theme colors (Emerald, Cyan, Violet) in the sidebar inspector.'
    ]
  },
  'pricing-table': {
    title: 'Pricing Table Documentation',
    badge: 'SALES & CONVERSION',
    summary: 'Display responsive pricing tiers with highlighted featured plans, feature checklists, and action buttons.',
    features: [
      'Multi-column plan comparison cards',
      'Highlighted "Popular" or "Best Value" plan ribbons',
      'Monthly / Annual price toggle switch support',
      'Custom checkmark list items and CTA buttons'
    ],
    usageSteps: [
      'Insert the "Pricing Table" block into your page.',
      'Configure plan names (Basic, Pro, Agency) and pricing values.',
      'Enable the "Featured" toggle on your primary plan to highlight it with a neon border.',
      'Set button link URLs for direct checkout redirection.'
    ]
  },
  'button': {
    title: 'Action Button Documentation',
    badge: 'INTERACTIVE CTA',
    summary: 'High-converting call-to-action button with hover glow effects, icon pickers, and smooth click animations.',
    features: [
      'Gradient backgrounds and neon glow shadows',
      'Integrated dashicon & SVG icon alignment',
      'Hover scale and lift animations',
      'Target window options (_self or _blank)'
    ],
    usageSteps: [
      'Add the "Action Button" block to any content section.',
      'Type your button text and enter the target URL.',
      'Select icon position (Left or Right) and adjust border radius.',
      'Customize background gradients and hover state effects.'
    ]
  },
  'contact-form': {
    title: 'Contact Form Documentation',
    badge: 'LEAD GENERATION',
    summary: 'Clean, responsive contact form block with built-in AJAX submission, input validation, and customizable fields.',
    features: [
      'Field builder for Name, Email, Subject, and Message',
      'AJAX submission without page reloads',
      'Custom success toast and error notification messages',
      'Admin email receiver configuration'
    ],
    usageSteps: [
      'Insert the "Contact Form" block into your page or contact section.',
      'Specify the recipient email address in block settings.',
      'Customize input placeholder text, submit button label, and button styling.',
      'Publish page and test submission.'
    ]
  },
  'marquee': {
    title: 'Marquee Slider Documentation',
    badge: 'INFINITE TICKER',
    summary: 'Continuous smooth scrolling text and image ticker for announcements, brand logos, and trending tags.',
    features: [
      'Infinite seamless ticker loop animation',
      'Adjustable scroll speed and direction (Left / Right)',
      'Pause-on-hover interaction support',
      'Custom text badges, icons, or sponsor logos'
    ],
    usageSteps: [
      'Add the "Marquee Slider" block to your page header or body.',
      'Add text items, tags, or logos to the ticker track.',
      'Adjust scroll speed (e.g. 20s per loop) in the inspector controls.',
      'Enable "Pause on Hover" to let users inspect scrolling content.'
    ]
  },
  'scroll-story': {
    title: 'Scroll Story Documentation',
    badge: 'TIMELINE NARRATIVE',
    summary: 'Engaging scroll-driven timeline story block that highlights steps or history as the user scrolls down.',
    features: [
      'Scroll-triggered active step indicators',
      'Progress line fill as user scrolls down',
      'Step images, icons, and timestamp badges',
      'Smooth entry animations'
    ],
    usageSteps: [
      'Insert the "Scroll Story" block on your page.',
      'Add story milestone steps with dates, titles, and descriptions.',
      'Upload milestone images or select custom step icons.',
      'Publish and test the scroll trigger active indicators.'
    ]
  },
  'table-of-contents': {
    title: 'Table of Contents Documentation',
    badge: 'SEO & NAVIGATION',
    summary: 'Automatically parses post headings (H1-H6) to build a collapsible, smooth-scrolling Table of Contents.',
    features: [
      'Automatic heading detection (H2, H3, H4)',
      'Smooth scroll offset alignment for fixed headers',
      'Collapsible box toggle (Expand / Collapse)',
      'SEO friendly schema markup'
    ],
    usageSteps: [
      'Place the "Table of Contents" block at the top of your long-form article.',
      'Select which heading tags to include (e.g. H2 and H3).',
      'Customize container background, active indicator color, and typography.',
      'The block will automatically discover and link all headings on the page.'
    ]
  },
  'video-modal': {
    title: 'Video Modal Documentation',
    badge: 'LIGHTBOX MEDIA',
    summary: 'Displays a thumbnail card with a pulsing play button that opens YouTube, Vimeo, or MP4 videos in a popup modal.',
    features: [
      'YouTube, Vimeo, and self-hosted MP4 support',
      'Pulsing play button ring overlay',
      'Full-screen lightbox modal player',
      'Autoplay on popup open'
    ],
    usageSteps: [
      'Add the "Video Modal" block to your hero section or video gallery.',
      'Paste your video URL (e.g., YouTube watch link or direct MP4 URL).',
      'Upload a custom thumbnail cover image.',
      'Customize play button color, size, and ripple animation speed.'
    ]
  }
};

const DocsModal = ({ block, onClose }) => {
  if (!block) return null;

  const blockKey = (block.id || '').replace('guten-builder-blocks/', '');
  const docs = blockDocsData[blockKey] || {
    title: `${block.title} Documentation`,
    badge: 'BLOCK GUIDE',
    summary: block.desc || block.description || 'Complete usage guide and configuration options for this block.',
    features: [
      'Full Gutenberg editor integration',
      'Responsive design for mobile, tablet, and desktop',
      'Custom color and typography settings'
    ],
    usageSteps: [
      'Add this block to your page layout inside Gutenberg.',
      'Customize settings in the right sidebar Inspector Controls.',
      'Save and publish your page.'
    ]
  };

  return (
    <div className="docs-modal-overlay" onClick={onClose}>
      <div className="docs-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="docs-modal-header">
          <div className="modal-title-group">
            <span className="modal-badge">{docs.badge}</span>
            <h3 className="modal-block-name">{docs.title}</h3>
          </div>

          <button type="button" className="docs-modal-close" onClick={onClose} aria-label="Close Documentation">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="docs-modal-body">
          <div className="docs-section overview-section">
            <h4>📖 Overview</h4>
            <p>{docs.summary}</p>
          </div>

          <div className="docs-section features-section">
            <h4>✨ Key Features</h4>
            <ul className="features-list">
              {docs.features.map((feat, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="docs-section steps-section">
            <h4>🚀 How to Use</h4>
            <ol className="steps-list">
              {docs.usageSteps.map((step, idx) => (
                <li key={idx}>
                  <span className="step-num">{idx + 1}</span>
                  <span className="step-text">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="docs-modal-footer">
          <span className="footer-note">📘 GutenBuilder Blocks Documentation Guide</span>
        </div>
      </div>
    </div>
  );
};

export default DocsModal;
