import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useRef, useEffect } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const Marquee = ({ attributes, setAttributes }) => {
	const {
		images,
		speed,
		reverseDirection,
		pauseOnHover,
		hoverSlowDown,
		itemHeight,
		liftEffect,
		edgeFade,
		showFrame,
		frameBg,
		frameRadius,
		align,
		showProgressRail,
		progressRailPosition,
		showInteractionIndicator,
		highlightActiveCenter,
		siblingBlur,
		siblingBlurIntensity
	} = attributes;

	const marqueeRef = useRef( null );

	let repeatedImages = [ ...images ];
	if ( images.length > 0 ) {
		while ( repeatedImages.length < 30 ) {
			repeatedImages = [ ...repeatedImages, ...images ];
		}
	}

	let calculatedSpeed = speed * ( repeatedImages.length / 5 );
	if ( repeatedImages.length === 0 ) {
		calculatedSpeed = speed;
	}

	useEffect( () => {
		if ( ! marqueeRef.current || repeatedImages.length === 0 ) {
			return;
		}
		const groups = marqueeRef.current.querySelectorAll( '.kh-mq-marquee-group' );
		let durationMs = 1000 * calculatedSpeed;
		if ( isNaN( durationMs ) || durationMs <= 0 ) {
			durationMs = 30000;
		}
		const direction = reverseDirection ? 'reverse' : 'normal';

		groups.forEach( group => {
			if ( group._kh_mq_anim ) {
				group._kh_mq_anim.cancel();
			}
			group._kh_mq_anim = group.animate(
				[ { transform: 'translateX(0)' }, { transform: 'translateX(-100%)' } ],
				{
					duration: durationMs,
					iterations: Infinity,
					direction: direction
				}
			);

			if ( pauseOnHover && marqueeRef.current.classList.contains( 'is-paused-by-js' ) ) {
				group._kh_mq_anim.pause();
			} else if ( hoverSlowDown && marqueeRef.current.classList.contains( 'is-slow-by-js' ) ) {
				group._kh_mq_anim.playbackRate = 0.3;
			}
		} );

		marqueeRef.current.classList.add( 'js-anim-active' );

		return () => {
			groups.forEach( group => {
				if ( group._kh_mq_anim ) {
					group._kh_mq_anim.cancel();
				}
			} );
		};
	}, [ calculatedSpeed, reverseDirection, repeatedImages.length, hoverSlowDown, pauseOnHover ] );

	const containerClasses = [
		'kh-mq-marquee-container',
		'kh-mq-editor-preview',
		align === 'full' ? 'alignfull' : '',
		pauseOnHover ? 'is-pause-hover' : '',
		hoverSlowDown ? 'is-slow-hover' : '',
		liftEffect ? 'has-lift-effect' : '',
		reverseDirection ? 'is-reversed' : '',
		showFrame ? 'has-frames' : '',
		showProgressRail ? 'has-progress-rail' : '',
		showProgressRail ? `rail-pos-${progressRailPosition}` : '',
		showInteractionIndicator ? 'has-interaction-indicator' : '',
		highlightActiveCenter ? 'has-active-center-highlight' : '',
		siblingBlur ? 'has-sibling-blur' : ''
	].filter( Boolean ).join( ' ' );

	const inlineStyles = {
		'--kh-mq-duration': `${calculatedSpeed}s`,
		'--kh-mq-h': `${itemHeight}px`,
		'--kh-mq-h-mob': `${itemHeight}px`,
		'--kh-mq-gap': '50px',
		'--kh-mq-frame-bg': frameBg,
		'--kh-mq-frame-rad': `${frameRadius}px`,
		'--kh-mq-max-w': 'none',
		'--kh-mq-blur': `${siblingBlurIntensity}px`
	};

	const onPointerEnter = () => {
		if ( ! marqueeRef.current ) {
			return;
		}
		const groups = marqueeRef.current.querySelectorAll( '.kh-mq-marquee-group' );
		if ( pauseOnHover ) {
			marqueeRef.current.classList.add( 'is-paused-by-js' );
			if ( marqueeRef.current.classList.contains( 'js-anim-active' ) ) {
				groups.forEach( group => {
					if ( group._kh_mq_anim ) {
						group._kh_mq_anim.pause();
					}
				} );
			}
		} else if ( hoverSlowDown ) {
			marqueeRef.current.classList.add( 'is-slow-by-js' );
			if ( marqueeRef.current.classList.contains( 'js-anim-active' ) ) {
				groups.forEach( group => {
					if ( group._kh_mq_anim ) {
						group._kh_mq_anim.playbackRate = 0.3;
					}
				} );
			}
		}
	};

	const onPointerLeave = () => {
		if ( ! marqueeRef.current ) {
			return;
		}
		const groups = marqueeRef.current.querySelectorAll( '.kh-mq-marquee-group' );
		if ( pauseOnHover ) {
			marqueeRef.current.classList.remove( 'is-paused-by-js' );
			if ( marqueeRef.current.classList.contains( 'js-anim-active' ) ) {
				groups.forEach( group => {
					if ( group._kh_mq_anim ) {
						group._kh_mq_anim.play();
					}
				} );
			}
		} else if ( hoverSlowDown ) {
			marqueeRef.current.classList.remove( 'is-slow-by-js' );
			if ( marqueeRef.current.classList.contains( 'js-anim-active' ) ) {
				groups.forEach( group => {
					if ( group._kh_mq_anim ) {
						group._kh_mq_anim.playbackRate = 1.0;
					}
				} );
			}
		}
	};

	const onSelectImages = ( selectedMedia ) => {
		const newImages = selectedMedia.map( media => ( {
			url: media.url,
			alt: media.alt,
			link: ''
		} ) );
		setAttributes( { images: [ ...images, ...newImages ] } );
	};

	return (
		<div
			ref={ marqueeRef }
			className={ containerClasses }
			style={ inlineStyles }
			onPointerEnter={ onPointerEnter }
			onPointerLeave={ onPointerLeave }
		>
			{ showInteractionIndicator && (
				<div className="kh-mq-interaction-indicator" data-state="running">
					<span className="kh-mq-indicator-label kh-mq-indicator-running">{ __( 'RUNNING', 'guten-builder-blocks' ) }</span>
					<span className="kh-mq-indicator-label kh-mq-indicator-paused">{ __( 'PAUSED', 'guten-builder-blocks' ) }</span>
					<span className="kh-mq-indicator-label kh-mq-indicator-slow">{ __( 'SLOW', 'guten-builder-blocks' ) }</span>
				</div>
			) }

			{ showProgressRail && (
				<div className="kh-mq-progress-rail">
					{ images.map( ( _, i ) => (
						<span key={ i } className={ `kh-mq-progress-segment ${ i === 0 ? 'is-active' : '' }` } />
					) ) }
				</div>
			) }

			{ highlightActiveCenter && <div className="kh-mq-center-focus-zone" aria-hidden="true" /> }

			{ images.length === 0 ? (
				<div style={ { background: '#f8fafc', border: '2px dashed #cbd5e1', borderRadius: '16px', padding: '60px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', boxSizing: 'border-box' } }>
					<div style={ { background: '#e2e8f0', borderRadius: '50%', padding: '16px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
						<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 12C4 16.4183 7.58172 20 12 20C14.7356 20 17.1506 18.6258 18.6015 16.5M20 12C20 7.58172 16.4183 4 12 4C9.26442 4 6.84936 5.37424 5.39853 7.5" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
							<path d="M15 17L19 17L19 21" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M9 7L5 7L5 3" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</div>
					<h3 style={ { margin: '0 0 8px 0', fontSize: '20px', fontWeight: '600', color: '#0f172a' } }>{ __( 'Kinetic Marquee', 'guten-builder-blocks' ) }</h3>
					<p style={ { margin: '0 0 24px 0', fontSize: '14px', color: '#64748b', maxWidth: '400px', lineHeight: '1.5' } }>{ __( 'Add images from the right sidebar or click the button below to start building your infinite scrolling gallery.', 'guten-builder-blocks' ) }</p>
					<MediaUploadCheck fallback={ <p style={ { color: '#ef4444', fontSize: '12px' } }>{ __( 'You do not have permission to upload media.', 'guten-builder-blocks' ) }</p> }>
						<MediaUpload
							multiple={ true }
							onSelect={ onSelectImages }
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<Button variant="primary" onClick={ open } style={ { padding: '8px 24px', height: 'auto', borderRadius: '8px', fontWeight: '600' } }>
									{ __( 'Select Images', 'guten-builder-blocks' ) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
				</div>
			) : (
				<div className={ `kh-mq-marquee-inner ${ edgeFade ? 'has-edge-fade' : '' }` }>
					<div className="kh-mq-marquee-track">
						<div className="kh-mq-marquee-group">
							{ repeatedImages.map( ( img, i ) => {
								const originalIndex = i % images.length;
								return (
									<div key={ `g1-${ i }` } className="kh-mq-marquee-item" data-kh-mq-origin-index={ originalIndex }>
										<div className="kh-mq-marquee-item-inner">
											<div className={ showFrame ? 'kh-mq-marquee-frame shadow-soft' : '' }>
												<img src={ img.url } alt={ img.alt || __( 'Logo', 'guten-builder-blocks' ) } />
											</div>
										</div>
									</div>
								);
							} ) }
						</div>
						<div className="kh-mq-marquee-group" aria-hidden="true">
							{ repeatedImages.map( ( img, i ) => {
								const originalIndex = i % images.length;
								return (
									<div key={ `g2-${ i }` } className="kh-mq-marquee-item" data-kh-mq-origin-index={ originalIndex }>
										<div className="kh-mq-marquee-item-inner">
											<div className={ showFrame ? 'kh-mq-marquee-frame shadow-soft' : '' }>
												<img src={ img.url } alt={ img.alt || __( 'Logo', 'guten-builder-blocks' ) } />
											</div>
										</div>
									</div>
								);
							} ) }
						</div>
					</div>
				</div>
			) }
		</div>
	);
};

export default Marquee;
