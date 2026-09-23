import { useState, useEffect } from '@wordpress/element';
import { ToggleControl, Button, Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { getBlockBannerConfig } from './adminData';
import DemoModal from '../DemoModal/DemoModal';
import DocsModal from '../DocsModal/DocsModal';

const BlockBanner = ({ block }) => {
  const config = getBlockBannerConfig(block);

  return (
    <div className="block-card-banner">
      <div className="banner-bg-effects">
        <div className="speed-line sl-1"></div>
        <div className="speed-line sl-2"></div>
        <div className="speed-line sl-3"></div>
      </div>
      <div className="banner-content-left">
        <div className="banner-brand-logo">
          {config.icon}
          <span className="brand-text">{block.title || config.title}</span>
        </div>
        <div className="banner-heading-group">
          <h3 className="banner-title">{config.title}</h3>
          <p className="banner-tag">{config.tag}</p>
        </div>
      </div>
      <div className="banner-content-right">
        <div className="banner-preview-box">{config.imageUrl ? <img src={config.imageUrl} alt={config.title} className="banner-preview-img" /> : config.preview}</div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [settings, setSettings] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [demoBlock, setDemoBlock] = useState(null);
  const [docsBlock, setDocsBlock] = useState(null);

  useEffect(() => {
    apiFetch({ path: '/guten-builder/v1/settings' }).then(response => {
      setSettings(response);
    });
  }, []);

  const saveSettings = () => {
    setIsSaving(true);
    apiFetch({
      path: '/guten-builder/v1/settings',
      method: 'POST',
      data: settings,
    })
      .then(response => {
        setSettings(response.settings);
        setSaveMessage('Settings saved successfully!');
        setTimeout(() => setSaveMessage(''), 3500);
      })
      .catch(() => {
        setSaveMessage('Error saving settings.');
        setTimeout(() => setSaveMessage(''), 3500);
      })
      .finally(() => {
        setIsSaving(false);
      });
  };

  const toggleBlock = blockName => {
    const isCurrentlyActive = settings.activeBlocks[blockName] !== false;
    setSettings({
      ...settings,
      activeBlocks: {
        ...settings.activeBlocks,
        [blockName]: !isCurrentlyActive,
      },
    });
  };

  const setAllBlocksState = shouldEnable => {
    if (!settings || !settings.availableBlocks) return;
    const newActiveBlocks = { ...settings.activeBlocks };
    settings.availableBlocks.forEach(block => {
      newActiveBlocks[block.id] = shouldEnable;
    });
    setSettings({
      ...settings,
      activeBlocks: newActiveBlocks,
    });
  };

  if (!settings) {
    return (
      <div className="guten-builder-admin-wrap loading-container">
        <div className="spinner-ring"></div>
        <p className="guten-builder-loading">Loading Guten Builder workspace...</p>
      </div>
    );
  }

  const blocksList = settings.availableBlocks || [];
  const totalBlocksCount = blocksList.length;
  const activeBlocksCount = blocksList.filter(b => settings.activeBlocks[b.id] !== false).length;
  const disabledBlocksCount = totalBlocksCount - activeBlocksCount;

  const filteredBlocks = blocksList.filter(block => {
    const isActive = settings.activeBlocks[block.id] !== false;
    const matchesSearch = block.title.toLowerCase().includes(searchQuery.toLowerCase()) || (block.desc && block.desc.toLowerCase().includes(searchQuery.toLowerCase()));

    if (filterStatus === 'active') return matchesSearch && isActive;
    if (filterStatus === 'inactive') return matchesSearch && !isActive;
    return matchesSearch;
  });

  return (
    <div className="guten-builder-admin-wrap">
      {/* Top Banner */}
      <header id="guten-builder-banner" className="guten-builder-banner" role="banner">
        <div className="banner-content">
          <p className="banner-subtitle">
            WELCOME {settings?.currentUser?.name ? settings.currentUser.name.toUpperCase() : 'USER'} TO {settings?.pluginDetails?.name ? settings.pluginDetails.name.toUpperCase() : 'GUTEN BUILDER BLOCKS'}
          </p>
          <h1 className="banner-title">Admin Dashboard</h1>
          <p className="banner-description">{settings?.pluginDetails?.description || 'Build beautiful, high-performance WordPress websites with interactive Gutenberg blocks, customizable motion profiles, and real-time block controls.'}</p>
        </div>
        <div className="banner-badge" role="status" aria-label="System status: Active">
          <span className="dot" aria-hidden="true"></span> Active Engine
        </div>
      </header>

      {/* Tabs */}
      <nav className="guten-builder-tabs" aria-label="Admin Navigation">
        <button className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
          <svg className="tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
          </svg>
          Overview
        </button>
        <button className={`tab-btn ${activeTab === 'all-blocks' ? 'active' : ''}`} onClick={() => setActiveTab('all-blocks')}>
          <svg className="tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
          All Blocks
        </button>
        <button className={`tab-btn ${activeTab === 'changelog' ? 'active' : ''}`} onClick={() => setActiveTab('changelog')}>
          <svg className="tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          Release (Changelog)
        </button>
        <button className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} onClick={() => setActiveTab('system')}>
          <svg className="tab-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          System Info
        </button>
      </nav>

      {saveMessage && (
        <Notice isDismissible={true} onRemove={() => setSaveMessage('')} status={saveMessage.includes('Error') ? 'error' : 'success'}>
          {saveMessage}
        </Notice>
      )}

      <main className="guten-builder-content">
        {activeTab === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon-wrap green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <div className="stat-info">
                  <h3 className="stat-label">INCLUDED BLOCKS</h3>
                  <div className="stat-value">{totalBlocksCount}</div>
                  <p className="stat-desc">Motion-ready blocks in suite</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrap blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <div className="stat-info">
                  <h3 className="stat-label">ACTIVE BLOCKS</h3>
                  <div className="stat-value">{activeBlocksCount}</div>
                  <p className="stat-desc">Enabled in Gutenberg editor</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrap purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="stat-info">
                  <h3 className="stat-label">MOTION PROFILE</h3>
                  <div className="stat-value">{settings.performanceMode || 'Balanced'}</div>
                  <p className="stat-desc">Frontend animation engine mode</p>
                </div>
              </div>
            </div>

            {/* Main Content Card */}
            <div className="main-card">
              <div className="main-card-header">
                <div>
                  <h2 className="main-card-title">Guten Builder Suite</h2>
                  <p className="main-card-desc">Empower your pages with high-performance Gutenberg block controls and fine-tuned animations.</p>
                </div>
                <span className="edition-badge">Standard Edition</span>
              </div>
              <div className="main-card-actions">
                <button className="btn-primary" onClick={() => setActiveTab('all-blocks')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                  Manage Blocks ({activeBlocksCount} Enabled)
                </button>
                <button className="btn-secondary" onClick={() => setActiveTab('changelog')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  View Release Notes
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'all-blocks' && (
          <div className="all-blocks-wrap">
            <div className="all-blocks-header">
              <div>
                <h2 className="all-blocks-title">All Blocks</h2>
                <p className="all-blocks-desc">Toggle block availability for the WordPress editor in real-time.</p>
              </div>
              <Button className="btn-save" isPrimary onClick={saveSettings} isBusy={isSaving} disabled={isSaving}>
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>

            {/* Toolbar: Search, Filter, Bulk Actions */}
            <div className="suite-toolbar">
              <div className="search-input-wrapper">
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input type="text" className="search-input" placeholder="Search blocks by name or description..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                {searchQuery && (
                  <button className="clear-search" onClick={() => setSearchQuery('')} aria-label="Clear search">
                    ×
                  </button>
                )}
              </div>

              <div className="filter-group">
                <button className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`} onClick={() => setFilterStatus('all')}>
                  All ({totalBlocksCount})
                </button>
                <button className={`filter-btn ${filterStatus === 'active' ? 'active' : ''}`} onClick={() => setFilterStatus('active')}>
                  Active ({activeBlocksCount})
                </button>
                <button className={`filter-btn ${filterStatus === 'inactive' ? 'active' : ''}`} onClick={() => setFilterStatus('inactive')}>
                  Disabled ({disabledBlocksCount})
                </button>
              </div>

              <div className="bulk-group">
                <button className="bulk-btn" onClick={() => setAllBlocksState(true)}>
                  Enable All
                </button>
                <span className="bulk-divider">|</span>
                <button className="bulk-btn" onClick={() => setAllBlocksState(false)}>
                  Disable All
                </button>
              </div>
            </div>

            {filteredBlocks.length === 0 ? (
              <div className="empty-blocks-state">
                <p className="empty-title">No matching blocks found</p>
                <p className="empty-desc">Try searching for a different keyword or reset your status filter.</p>
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setSearchQuery('');
                    setFilterStatus('all');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="blocks-grid">
                {filteredBlocks.map(block => {
                  const isActive = settings.activeBlocks[block.id] !== false;
                  return (
                    <div className={`block-card ${isActive ? 'is-active' : 'is-disabled'}`} key={block.id}>
                      <BlockBanner block={block} />
                      <div className="block-content">
                        <div className="block-header">
                          <h3 className="block-title">{block.title}</h3>
                          <span className={`block-badge ${isActive ? 'badge-active' : 'badge-disabled'}`}>{isActive ? 'Active' : 'Disabled'}</span>
                        </div>
                        <p className="block-desc">{block.desc || block.description}</p>
                        <div className="block-links">
                          <button
                            type="button"
                            className="block-link demo-link"
                            onClick={e => {
                              e.preventDefault();
                              setDemoBlock(block);
                            }}
                          >
                            Live Demo
                          </button>
                          <span className="link-divider">|</span>
                          <button
                            type="button"
                            className="block-link docs-link"
                            onClick={e => {
                              e.preventDefault();
                              setDocsBlock(block);
                            }}
                          >
                            Read Docs
                          </button>
                        </div>
                        <div className="block-toggle">
                          <ToggleControl label={isActive ? 'Enabled for Editor' : 'Disabled'} checked={isActive} onChange={() => toggleBlock(block.id)} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeTab === 'system' && (
          <div className="main-card">
            <h2 className="main-card-title">System Information</h2>
            <p className="main-card-desc">Environment and active plugin runtime details.</p>
            <div className="system-info-list">
              <div className="info-row">
                <span className="info-key">Plugin Version</span>
                <span className="info-val">{settings?.systemInfo?.pluginVersion || '1.0.0'}</span>
              </div>
              <div className="info-row">
                <span className="info-key">WordPress Version</span>
                <span className="info-val">{settings?.systemInfo?.wpVersion || '6.7'}</span>
              </div>
              <div className="info-row">
                <span className="info-key">PHP Version</span>
                <span className="info-val">{settings?.systemInfo?.phpVersion || '7.4'}</span>
              </div>
              <div className="info-row">
                <span className="info-key">Server Software</span>
                <span className="info-val">{settings?.systemInfo?.serverSoftware || 'Web Server'}</span>
              </div>
              <div className="info-row">
                <span className="info-key">Max Upload Size</span>
                <span className="info-val">{settings?.systemInfo?.maxUploadSize || '64 MB'}</span>
              </div>
              <div className="info-row">
                <span className="info-key">Memory Limit</span>
                <span className="info-val">{settings?.systemInfo?.memoryLimit || '256M'}</span>
              </div>
              <div className="info-row">
                <span className="info-key">Active Blocks Count</span>
                <span className="info-val">
                  {activeBlocksCount} of {totalBlocksCount} enabled
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'changelog' && (
          <div className="main-card">
            <div className="main-card-header">
              <div>
                <h2 className="main-card-title">Release Notes & Changelog</h2>
                <p className="main-card-desc">Track updates, new features, bug fixes, and performance enhancements for Guten Builder Blocks.</p>
              </div>
              <span className="edition-badge">Current Release: v1.0.0</span>
            </div>

            <div className="changelog-timeline">
              <div className="changelog-release-item">
                <div className="release-header">
                  <span className="release-version-chip">v1.0.0</span>
                  <span className="release-date">August 2, 2026</span>
                  <span className="release-status-tag initial">Initial Stable Release</span>
                </div>
                <ul className="release-changes-list">
                  <li>
                    <span className="change-badge feat">FEAT</span> Introduced 10 high-performance Gutenberg blocks (Before/After Slider, Accordion, Audio Player, Pricing Table, Button, Contact Form, Marquee, Scroll Story, TOC, Video Modal).
                  </li>
                  <li>
                    <span className="change-badge feat">FEAT</span> Added In-Dashboard Live Demo Lightbox Modal with Desktop, Tablet, and Mobile viewport testing.
                  </li>
                  <li>
                    <span className="change-badge feat">FEAT</span> Added In-Dashboard Read Docs Lightbox Modal with step-by-step guides.
                  </li>
                  <li>
                    <span className="change-badge perf">PERF</span> Modular SCSS architecture for high-speed admin loading and zero redundant CSS rules.
                  </li>
                  <li>
                    <span className="change-badge fix">FIX</span> Optimized SVG clipPaths for seamless 90-degree divider line joins in Before/After Slider.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Banner */}
      <footer className="guten-builder-pro-banner">
        <div className="pro-content">
          <h3 className="pro-title">Guten Builder Pro</h3>
          <p className="pro-desc">Unlock advanced physics animations, scroll progress triggers, and premium block presets.</p>
        </div>
        <button className="btn-pro">Explore Pro Features →</button>
      </footer>

      {demoBlock && <DemoModal block={demoBlock} onClose={() => setDemoBlock(null)} />}
      {docsBlock && <DocsModal block={docsBlock} onClose={() => setDocsBlock(null)} />}
    </div>
  );
};

export default AdminDashboard;
