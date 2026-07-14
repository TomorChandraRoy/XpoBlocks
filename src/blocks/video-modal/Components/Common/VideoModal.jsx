import { __ } from '@wordpress/i18n';
import { Notice } from '@wordpress/components';
import { useState, useCallback, useEffect } from '@wordpress/element';

const editorNoticeIcon = (
	<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<circle cx="12" cy="12" r="10" />
		<line x1="12" y1="8" x2="12" y2="12" />
		<line x1="12" y1="16" x2="12.01" y2="16" />
	</svg>
);

const VideoModal = ( { attributes, setAttributes } ) => {
	const {
		videoUrl,
		coverImage,
		buttonColor,
		iconColor,
		buttonSize,
		imageOverlayOpacity,
		buttonStyle,
		aspectRatio
	} = attributes;

	const [ showNotice, setShowNotice ] = useState( true );
	const [ fadeNotice, setFadeNotice ] = useState( false );

	const dismissNotice = useCallback( () => {
		if ( showNotice ) {
			setFadeNotice( true );
			setTimeout( () => setShowNotice( false ), 300 );
		}
	}, [ showNotice ] );

	useEffect( () => {
		const timer = setTimeout( () => {
			dismissNotice();
		}, 4000 );

		const handleDismiss = () => dismissNotice();
		document.addEventListener( 'mousedown', handleDismiss );
		document.addEventListener( 'keydown', handleDismiss );

		return () => {
			clearTimeout( timer );
			document.removeEventListener( 'mousedown', handleDismiss );
			document.removeEventListener( 'keydown', handleDismiss );
		};
	}, [ dismissNotice ] );

	const containerClasses = [
		'kh-video-modal-container',
		`ratio-${aspectRatio || '16x9'}`,
		`btn-style-${buttonStyle || 'solid'}`,
		'zoom-none'
	].filter( Boolean ).join( ' ' );

	const inlineStyles = {
		'--kh-vm-btn-c': buttonColor || '#10b981',
		'--kh-vm-icon-c': iconColor || '#ffffff',
		'--kh-vm-btn-s': `${buttonSize || 80}px`,
		'--kh-vm-overlay': imageOverlayOpacity ?? 0.3,
		position: 'relative'
	};

	const playButtonStyles = (() => {
		const baseStyles = {
			width: `${buttonSize || 80}px`,
			height: `${buttonSize || 80}px`,
			color: iconColor || '#ffffff',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '999px'
		};

		if ( buttonStyle === 'outline' ) {
			return {
				...baseStyles,
				background: 'transparent',
				border: `2px solid ${buttonColor || '#10b981'}`,
				boxShadow: 'none'
			};
		}
		if ( buttonStyle === 'glass' ) {
			return {
				...baseStyles,
				background: 'rgba(255, 255, 255, 0.12)',
				border: '1px solid rgba(255, 255, 255, 0.28)',
				backdropFilter: 'blur(12px)',
				WebkitBackdropFilter: 'blur(12px)',
				boxShadow: '0 8px 24px rgba(0, 0, 0, 0.20)'
			};
		}
		// Solid color
		return {
			...baseStyles,
			background: buttonColor || '#10b981',
			border: `2px solid ${buttonColor || '#10b981'}`,
			boxShadow: '0 8px 24px rgba(0, 0, 0, 0.20)'
		};
	} )();

	return (
		<div className={ containerClasses } style={ inlineStyles }>
			{ !videoUrl && (
				<Notice
					status="warning"
					isDismissible={ false }
					style={ { position: 'absolute', top: 10, left: 10, right: 10, zIndex: 10 } }
				>
					{ __( 'Please enter a Video URL in the settings panel to activate the player.', 'guten-builder-blocks' ) }
				</Notice>
			) }

			<div className="kh-vm-preview-layer">
				{ coverImage?.url ? (
					<img src={ coverImage.url } alt={ coverImage.alt || '' } className="kh-vm-cover-img" />
				) : (
					<div className="kh-vm-fallback-bg" style={ { display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1e293b', width: '100%', height: '100%' } }>
						<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="1">
							<path d="M15 10L19.5 7.5V16.5L15 14V10Z" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M4 6C4 4.89543 4.89543 4 6 4H13C14.1046 4 15 4.89543 15 6V18C15 19.1046 14.1046 20 13 20H6C4.89543 20 4 19.1046 4 18V6Z" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
				) }

				<div className="kh-vm-overlay" style={ { opacity: imageOverlayOpacity ?? 0.3, background: '#000', position: 'absolute', inset: 0 } } />

				<div className="kh-vm-play-trigger-zone">
					<button type="button" className="kh-vm-play-button" style={ playButtonStyles }>
						<span className="kh-vm-play-icon" style={ { color: iconColor || '#ffffff' } }>
							<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
								<path d="M8 5v14l11-7z" />
							</svg>
						</span>
					</button>
				</div>
			</div>

			{ showNotice && (
				<div
					className={ `kinetic-editor-notice kinetic-editor-notice-info` }
					role="status"
					style={ {
						position: 'absolute',
						bottom: '12px',
						right: '12px',
						background: 'rgba(15, 23, 42, 0.85)',
						backdropFilter: 'blur(8px)',
						color: '#f8fafc',
						padding: '6px 12px',
						borderRadius: '6px',
						fontSize: '11px',
						fontWeight: '600',
						letterSpacing: '0.5px',
						textTransform: 'uppercase',
						zIndex: 9999,
						display: 'flex',
						alignItems: 'center',
						gap: '6px',
						boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
						opacity: fadeNotice ? 0 : 1,
						transform: fadeNotice ? 'translateY(10px)' : 'translateY(0)',
						transition: 'opacity 0.3s ease, transform 0.3s ease'
					} }
				>
					{ editorNoticeIcon }
					<span>{ __( 'Modal playback runs on frontend only.', 'guten-builder-blocks' ) }</span>
				</div>
			) }
		</div>
	);
};

export default VideoModal;
