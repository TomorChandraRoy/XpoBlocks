import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import { useState, useCallback, useEffect } from '@wordpress/element';

const editorNoticeIcon = (
	<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<circle cx="12" cy="12" r="10" />
		<line x1="12" y1="8" x2="12" y2="12" />
		<line x1="12" y1="16" x2="12.01" y2="16" />
	</svg>
);

const AudioPlayer = ( { attributes, setAttributes } ) => {
	const {
		blockId,
		text,
		subtitle,
		coverUrl,
		playerLayout,
		compactSize,
		showWaveform,
		enableSeekbar,
		enableVolume,
		timeDisplayMode,
		bgColor,
		textColor,
		accentColor,
		progressColor,
		borderRadius,
		paddingV,
		paddingH,
		align,
		containerShadow,
		shadowStyle
	} = attributes;

	const [ isPlaying, setIsPlaying ] = useState( false );
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

	const isCompact = playerLayout === 'compact';

	const wrapperStyle = {
		display: 'flex',
		justifyContent: align || 'center',
		alignItems: 'center',
		width: '100%'
	};

	const inlineStyles = {
		'--kh-ap-bg': bgColor || '#111111',
		'--kh-ap-text': textColor || '#ffffff',
		'--kh-ap-accent': accentColor || 'var(--kh-accent, #10b981)',
		'--kh-ap-progress': enableSeekbar ? progressColor || 'rgba(255,255,255,0.15)' : 'transparent',
		'--kh-ap-br': isCompact ? '50%' : `${borderRadius || 50}px`,
		'--kh-ap-pad-v': isCompact ? '0px' : `${paddingV || 16}px`,
		'--kh-ap-pad-h': isCompact ? '0px' : `${paddingH || 32}px`,
		'--kh-ap-width': isCompact ? `${compactSize || 160}px` : 'auto',
		'--kh-ap-height': isCompact ? `${compactSize || 160}px` : 'auto',
		'--kh-ap-jc': isCompact ? 'center' : 'flex-start'
	};

	const containerClasses = [
		'kh-ap-button',
		'kh-ap-editor-preview',
		isCompact ? 'is-compact' : 'is-extended',
		isPlaying ? 'is-playing' : '',
		enableSeekbar ? 'has-seekbar' : '',
		containerShadow ? `has-shadow shadow-${shadowStyle}` : ''
	].filter( Boolean ).join( ' ' );

	const showVolumeTool = ! isCompact && enableVolume;

	return (
		<div className={ `kh-ap-wrapper ${blockId}` } style={ wrapperStyle }>
			<div className={ containerClasses } style={ inlineStyles }>
				{ ! isCompact && (
					<div className="kh-ap-progress-container" aria-hidden="true">
						<div className="kh-ap-progress-fill" style={ { width: isPlaying ? '45%' : '0%' } } />
					</div>
				) }

				{ isCompact && enableSeekbar && (
					<svg className="kh-ap-progress-circle-svg" aria-hidden="true" viewBox="0 0 100 100">
						<circle cx="50" cy="50" r="48" fill="none" stroke="var(--kh-ap-progress)" strokeWidth="4" />
					</svg>
				) }

				<span
					className="kh-ap-play-pause-trigger"
					onClick={ ( e ) => {
						e.preventDefault();
						e.stopPropagation();
						setIsPlaying( ! isPlaying );
					} }
					style={ { cursor: 'pointer' } }
				>
					{ coverUrl ? (
						<img src={ coverUrl } className="kh-ap-cover-img" alt={ __( 'Cover', 'guten-builder-blocks' ) } />
					) : (
						<span className="kh-ap-icon-main">
							{ isPlaying ? (
								<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
									<rect x="6" y="4" width="4" height="16" />
									<rect x="14" y="4" width="4" height="16" />
								</svg>
							) : (
								<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
									<polygon points="5 3 19 12 5 21 5 3" />
								</svg>
							) }
						</span>
					) }
				</span>

				{ ! isCompact && (
					<span className="kh-ap-text-wrapper">
						<RichText
							tagName="span"
							className="kh-ap-title"
							value={ text }
							onChange={ ( val ) => setAttributes( { text: val } ) }
							placeholder={ __( 'Song Title', 'guten-builder-blocks' ) }
							onClick={ ( e ) => e.stopPropagation() }
						/>
						<RichText
							tagName="span"
							className="kh-ap-subtitle"
							value={ subtitle }
							onChange={ ( val ) => setAttributes( { subtitle: val } ) }
							placeholder={ __( 'Artist Name', 'guten-builder-blocks' ) }
							onClick={ ( e ) => e.stopPropagation() }
						/>
					</span>
				) }

				{ timeDisplayMode !== 'none' && ! isCompact && (
					<span className="kh-ap-time-display">
						{ isPlaying ? '-03:05' : '00:00' }
					</span>
				) }

				{ showWaveform && (
					<div className="kh-ap-visualizer is-style-default" aria-hidden="true">
						<div className="kh-ap-bar" />
						<div className="kh-ap-bar" />
						<div className="kh-ap-bar" />
						<div className="kh-ap-bar" />
					</div>
				) }

				{ showVolumeTool && (
					<div className="kh-ap-tools">
						<div className="kh-ap-vol-wrapper">
							<button className="kh-ap-tool-btn kh-ap-vol-btn" onClick={ ( e ) => e.preventDefault() }>
								<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
									<path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
								</svg>
							</button>
							<input type="range" className="kh-ap-vol-slider" min="0" max="100" defaultValue="100" readOnly={ true } />
						</div>
					</div>
				) }
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
					<span>{ __( 'Audio playback active on Frontend', 'guten-builder-blocks' ) }</span>
				</div>
			) }
		</div>
	);
};

export default AudioPlayer;
