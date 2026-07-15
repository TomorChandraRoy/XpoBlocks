import { useState } from '@wordpress/element';

const TableOfContents = ({ attributes, setAttributes }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState(null);

  // Exact headings collection from the specified path guidelines
  const tocItems = [
    { id: "defining-project-scope", title: "Defining Your Plugin Project Scope", level: 2 },
    { id: "technical-skills-matter", title: "The Technical Skills That Actually Matter", level: 2 },
    { id: "core-wordpress-knowledge", title: "Core WordPress Development Knowledge", level: 3 },
    { id: "php-proficiency", title: "PHP Proficiency", level: 3 },
    { id: "database-practices", title: "Database Practices", level: 3 },
    { id: "javascript-gutenberg", title: "JavaScript and the Block Editor", level: 3 },
    { id: "where-to-find-developers", title: "Where to Find WordPress Plugin Developers", level: 2 },
    { id: "freelance-platforms", title: "Freelance Platforms", level: 3 },
    { id: "developer-communities", title: "Developer Communities", level: 3 },
    { id: "wordpress-agencies", title: "Agencies with WordPress Expertise", level: 3 },
    { id: "vetting-candidates-framework", title: "How to Vet Candidates: An Interview Framework", level: 2 },
    { id: "red-flags", title: "Red Flags to Watch For", level: 2 },
    { id: "pricing-expectations", title: "Pricing: What to Expect", level: 2 },
    { id: "solo-vs-team", title: "When a Full Team Makes More Sense", level: 2 },
    { id: "faqs", title: "FAQs", level: 2 }
  ];

  const handleSmoothScroll = (id, event) => {
    setActiveId(id);
    const doc = event ? event.target.ownerDocument : document;
    const targetElement = doc.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="toc-wrapper">
      
      {/* --- SIDEBAR TABLE OF CONTENTS --- */}
      <div className="toc-sidebar">
        <div className="toc-sticky-box">
          
          {/* Header Panel Button with Accordion Handler */}
          <div className="toc-header" onClick={() => setIsOpen(!isOpen)}>
            <div className="toc-header-title">
              <svg className="toc-header-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              <span className="toc-header-text">Table of Contents</span>
            </div>
            <svg 
              className={`toc-arrow-icon ${isOpen ? 'open' : 'closed'}`} 
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Navigation Body */}
          <div className={`toc-body ${isOpen ? 'open' : 'closed'}`}>
            <div className="toc-list-container">
              <ul className="toc-list">
                {tocItems.map((item, index) => (
                  <li key={index} className={`toc-item level-${item.level} ${activeId === item.id ? 'is-active' : ''}`}>
                    <button 
                      onClick={(e) => handleSmoothScroll(item.id, e)} 
                      className={`toc-link level-${item.level}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      {item.level > 2 && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      )}
                      <span>{item.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* --- MAIN BLOG CONTENT PREVIEW LAYOUT --- */}
      <div className="content-area">
        <h1 className="content-title">WordPress Plugin Developer Hiring Guide</h1>
        <p className="content-subtitle">Click the custom items mapped at your Left TOC module to observe functional smooth scroll animation targets.</p>
        
        <div className="section-wrapper">
          {tocItems.map((section) => (
            <div key={section.id} id={section.id} className="section-block">
              <h2 className={section.level === 2 ? "section-heading-2" : "section-heading-3"}>
                {section.title}
              </h2>
              <p className="section-paragraph">
                This area contains the contextual contents mapped perfectly from the reference URL. Custom logic structure applies standard WordPress ecosystem optimization procedures natively.
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TableOfContents;
