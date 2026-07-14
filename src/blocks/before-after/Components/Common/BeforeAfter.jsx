import { __ } from '@wordpress/i18n';
import { Placeholder } from '@wordpress/components';
import { useState, useMemo, useCallback, useEffect } from '@wordpress/element';

const iconSvg = (
	<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
		<line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2" />
		<path d="M9 12l-3-3m0 0l-3 3m3-3v12" transform="translate(4, -3) rotate(-90, 6, 12)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M15 12l3-3m0 0l3 3m-3-3v12" transform="translate(-4, -3) rotate(90, 18, 12)" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

const BeforeAfter = ({ attributes, setAttributes }) => {
	const {
		beforeImage,
		afterImage,
		initialOffset,
		aspectRatio,
		hoverZoom,
		dividerStyle,
		handleColor,
		handleIconColor,
		showLabels,
		beforeLabel,
		afterLabel,
		containerShadow,
		shadowStyle,
		forceFullWidth,
		afterFilter,
		afterBlurIntensity,
		afterOverlayColor,
		afterOverlayOpacity
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

	const offsetVal = Math.max( 0, Math.min( 100, initialOffset ) );

	let filterCss = 'none';
	if ( afterFilter === 'grayscale' ) {
		filterCss = 'grayscale(100%)';
	} else if ( afterFilter === 'sepia' ) {
		filterCss = 'sepia(100%)';
	} else if ( afterFilter === 'blur' ) {
		filterCss = `blur(${afterBlurIntensity}px)`;
	} else if ( afterFilter === 'invert' ) {
		filterCss = 'invert(100%)';
	} else if ( afterFilter === 'contrast' ) {
		filterCss = 'contrast(150%)';
	}

	const overlayOpacityVal = afterFilter === 'color' ? Math.max( 0, Math.min( 1, afterOverlayOpacity ) ) : 0;

	const styleVars = useMemo( () => {
		return {
			'--kh-ba-handle': handleColor,
			'--kh-ba-icon-c': handleIconColor,
			'--kh-ba-label-c': '#ffffff',
			'--kh-ba-label-bg': 'rgba(0,0,0,0.5)',
			'--kh-ba-overlay-c': '#000000',
			'--kh-ba-overlay-o': 0,
			'--kh-ba-a-overlay-c': afterOverlayColor,
			'--kh-ba-a-overlay-o': overlayOpacityVal,
			...( aspectRatio !== 'auto' && { '--kh-ba-aspect': aspectRatio } )
		};
	}, [ handleColor, handleIconColor, afterOverlayColor, overlayOpacityVal, aspectRatio ] );

	const innerClasses = `kh-ba-inner ${ aspectRatio !== 'auto' ? 'has-aspect-ratio' : '' }`;
	const containerClasses = `kh-ba-container kh-ba-preview kh-ba-horizontal ${ containerShadow ? `has-shadow shadow-${shadowStyle}` : '' } kh-ba-trans-slide kh-ba-handle-classic kh-ba-divider-${dividerStyle} ${ hoverZoom ? 'has-hover-zoom' : '' } ${ forceFullWidth ? 'is-forced-fullwidth' : '' }`;

	const clipStyle = {
		clipPath: `inset(0 ${ 100 - offsetVal }% 0 0)`
	};

	return (
		<div className={ containerClasses } style={ styleVars }>
			{ beforeImage?.url && afterImage?.url ? (
				<div className={ innerClasses } style={ aspectRatio !== 'auto' ? { aspectRatio: 'var(--kh-ba-aspect)' } : {} }>
					{ /* After Layer */ }
					<div className="kh-ba-layer kh-ba-after">
						<div className="kh-ba-img-wrap" style={ { filter: filterCss } }>
							<img src={ afterImage.url } className="kh-ba-img" alt={ afterImage.alt || 'After' } />
						</div>
						<div className="kh-ba-overlay kh-ba-overlay-after" aria-hidden="true" />
						{ showLabels && <span className="kh-ba-label kh-ba-label-after">{ afterLabel }</span> }
					</div>

					{ /* Before Layer */ }
					<div className="kh-ba-layer kh-ba-before" style={ clipStyle }>
						<div className="kh-ba-img-wrap" style={ { filter: 'none' } }>
							<img src={ beforeImage.url } className="kh-ba-img" alt={ beforeImage.alt || 'Before' } />
						</div>
						<div className="kh-ba-overlay kh-ba-overlay-before" aria-hidden="true" />
						{ showLabels && <span className="kh-ba-label kh-ba-label-before">{ beforeLabel }</span> }
					</div>

					{ /* Slider Handle */ }
					<div className="kh-ba-handle" style={ { left: `${offsetVal}%`, top: '0' } }>
						<button className="kh-ba-circle pulse-none">
							<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
								<polyline points="9 18 3 12 9 6" />
								<polyline points="15 18 21 12 15 6" />
							</svg>
						</button>
					</div>
				</div>
			) : (
				<div className="kh-ba-placeholder-wrapper" style={ { background: '#f8f9fa', border: '2px dashed #ccc', borderRadius: '8px', padding: '40px 20px', position: 'relative', width: '100%' } }>
					<Placeholder icon={ iconSvg } label={ __( 'Kinetic Before/After', 'guten-builder-blocks' ) } instructions={ __( 'Upload or select your Before and After images using the sidebar controls on the right.', 'guten-builder-blocks' ) }>
						<div style={ { fontSize: '13px', opacity: .7, marginTop: '10px' } }>
							{ __( 'Hint: For best results, use images with similar dimensions or use the Aspect Ratio setting.', 'guten-builder-blocks' ) }
						</div>
					</Placeholder>
				</div>
			) }
			{ showNotice && beforeImage?.url && afterImage?.url && (
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
					<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<circle cx="12" cy="12" r="10" />
						<line x1="12" y1="8" x2="12" y2="12" />
						<line x1="12" y1="16" x2="12.01" y2="16" />
					</svg>
					<span>{ __( 'Slider Engine & Physics active on Frontend', 'guten-builder-blocks' ) }</span>
				</div>
			) }
		</div>
	);
};

export default BeforeAfter;
