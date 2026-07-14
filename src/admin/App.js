import { useState, useEffect } from '@wordpress/element';
import { ToggleControl, Button, Notice } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

const App = () => {
	const [settings, setSettings] = useState(null);
	const [isSaving, setIsSaving] = useState(false);
	const [saveMessage, setSaveMessage] = useState('');
	const [activeTab, setActiveTab] = useState('overview');

	useEffect(() => {
		apiFetch({ path: '/guten-builder/v1/settings' }).then((response) => {
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
			.then((response) => {
				setSettings(response.settings);
				setSaveMessage('Settings saved successfully!');
				setTimeout(() => setSaveMessage(''), 3000);
			})
			.catch(() => {
				setSaveMessage('Error saving settings.');
				setTimeout(() => setSaveMessage(''), 3000);
			})
			.finally(() => {
				setIsSaving(false);
			});
	};

	const toggleBlock = (blockName) => {
		const isCurrentlyActive = settings.activeBlocks[blockName] !== false;
		setSettings({
			...settings,
			activeBlocks: {
				...settings.activeBlocks,
				[blockName]: !isCurrentlyActive,
			},
		});
	};

	if (!settings) {
		return <p className="guten-builder-loading">Loading settings...</p>;
	}

	const blocksList = settings.availableBlocks || [];
	const totalBlocksCount = blocksList.length;
	const activeBlocksCount = blocksList.filter(
		(b) => settings.activeBlocks[b.id] !== false
	).length;

	return (
		<div className="guten-builder-admin-wrap">
			{/* Top Banner */}
			<div className="guten-builder-banner">
				<div className="banner-content">
					<span className="banner-subtitle">ANIMATED BLOCKS FOR WORDPRESS</span>
					<h1 className="banner-title">Guten Builder</h1>
					<p className="banner-description">Configure included blocks and shared motion settings.</p>
				</div>
				<div className="banner-badge">
					<span className="dot"></span> Online
				</div>
			</div>

			{/* Tabs */}
			<div className="guten-builder-tabs">
				<button 
					className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`} 
					onClick={() => setActiveTab('overview')}
				>
					Overview
				</button>
				<button 
					className={`tab-btn ${activeTab === 'my-suite' ? 'active' : ''}`} 
					onClick={() => setActiveTab('my-suite')}
				>
					My Suite
				</button>
				<button 
					className={`tab-btn ${activeTab === 'global' ? 'active' : ''}`} 
					onClick={() => setActiveTab('global')}
				>
					Global Settings
				</button>
				<button 
					className={`tab-btn ${activeTab === 'system' ? 'active' : ''}`} 
					onClick={() => setActiveTab('system')}
				>
					System Info
				</button>
			</div>

			{saveMessage && (
				<Notice isDismissible={false} status={saveMessage.includes('Error') ? 'error' : 'success'}>
					{saveMessage}
				</Notice>
			)}

			<div className="guten-builder-content">
				{activeTab === 'overview' && (
					<>
						{/* Stats Cards */}
						<div className="stats-grid">
							<div className="stat-card">
								<h3 className="stat-label">INCLUDED BLOCKS</h3>
								<div className="stat-value">{totalBlocksCount}</div>
								<p className="stat-desc">Motion-ready blocks available in this build.</p>
							</div>
							<div className="stat-card">
								<h3 className="stat-label">ACTIVE BLOCKS</h3>
								<div className="stat-value">{activeBlocksCount}</div>
								<p className="stat-desc">Blocks currently enabled for the editor.</p>
							</div>
							<div className="stat-card">
								<h3 className="stat-label">MOTION PROFILE</h3>
								<div className="stat-value">{settings.performanceMode}</div>
								<p className="stat-desc">Global frontend animation profile.</p>
							</div>
						</div>

						{/* Main Content Card */}
						<div className="main-card">
							<h2 className="main-card-title">Guten Builder Free Edition</h2>
							<p className="main-card-desc">Manage the included animated blocks and global motion preferences for your WordPress site.</p>
							<div className="main-card-actions">
								<button className="btn-primary" onClick={() => setActiveTab('my-suite')}>Manage Blocks</button>
								<button className="btn-secondary" onClick={() => setActiveTab('global')}>Global Settings</button>
							</div>
						</div>
					</>
				)}

				{activeTab === 'my-suite' && (
					<div className="my-suite-wrap">
						<div className="my-suite-header">
							<div>
								<h2 className="my-suite-title">My Suite</h2>
								<p className="my-suite-desc">Enable or disable included blocks for the editor.</p>
							</div>
							<Button className="btn-save" isPrimary onClick={saveSettings} isBusy={isSaving} disabled={isSaving}>
								{isSaving ? 'Saving...' : 'Save Changes'}
							</Button>
						</div>
						
						<div className="blocks-grid">
							{blocksList.map((block) => (
								<div className="block-card" key={block.id}>
									<div className="block-image">
										<span>{block.title}</span>
									</div>
									<div className="block-content">
										<div className="block-header">
											<h3 className="block-title">{block.title}</h3>
											<span className="block-badge">{block.badge}</span>
										</div>
										<p className="block-desc">{block.desc}</p>
										<div className="block-toggle">
											<ToggleControl
												label="Enabled"
												checked={
													settings.activeBlocks[block.id] !== undefined
														? settings.activeBlocks[block.id]
														: true
												}
												onChange={() => toggleBlock(block.id)}
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === 'global' && (
					<div className="main-card">
						<h2 className="main-card-title">Global Settings</h2>
						<p className="main-card-desc">Global preferences are coming soon.</p>
					</div>
				)}

				{activeTab === 'system' && (
					<div className="main-card">
						<h2 className="main-card-title">System Info</h2>
						<p className="main-card-desc">WordPress and server information goes here.</p>
					</div>
				)}
			</div>

			{/* Bottom Banner */}
			<div className="guten-builder-pro-banner">
				<div className="pro-content">
					<h3 className="pro-title">Guten Builder Pro</h3>
					<p className="pro-desc">Unlock the full animation toolkit for client-ready interactive builds.</p>
				</div>
				<button className="btn-pro">Explore Pro</button>
			</div>
		</div>
	);
};

export default App;
