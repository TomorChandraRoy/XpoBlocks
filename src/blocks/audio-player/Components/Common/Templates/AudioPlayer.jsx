import { useState, useEffect } from '@wordpress/element';
import { useRef } from 'react';



const AudioPlayer = ( { attributes, id } ) => {


const { audioUrl = '', text = '', subtitle = '', coverUrl = '', labelText = '',  timeDisplayMode = 'total' } = attributes || {};

const audioRef = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);
	const prevVolumeRef = useRef(1);

const togglePlay = () => {
		if (!audioRef.current || !audioUrl) return;

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}

		setIsPlaying(!isPlaying);
	};

	const updateProgress = () => {
		if (!audioRef.current) return;

		const current = audioRef.current.currentTime;
		const total = audioRef.current.duration || 0;

		setCurrentTime(current);
		setDuration(total);
		setProgress((current / total) * 100 || 0);
	};

	const handleProgressChange = (event) => {
		const value = Number(event.target.value);

		if (!audioRef.current || !duration) return;

		audioRef.current.currentTime = value;
		setCurrentTime(value);
		setProgress((value / duration) * 100 || 0);
	};

	const skipTime = (seconds) => {
		if (!audioRef.current) return;

		audioRef.current.currentTime += seconds;
	};

	const handleVolumeChange = (event) => {
		const value = Number(event.target.value);

		setVolume(value);

		if (audioRef.current) {
			audioRef.current.volume = value;
		}
	};

	const toggleMute = () => {
		if (volume > 0) {
			prevVolumeRef.current = volume;
			setVolume(0);
			if (audioRef.current) {
				audioRef.current.volume = 0;
			}
		} else {
			const restoreVal = prevVolumeRef.current > 0 ? prevVolumeRef.current : 1;
			setVolume(restoreVal);
			if (audioRef.current) {
				audioRef.current.volume = restoreVal;
			}
		}
	};

	const formatTime = (time) => {
		if (!time || Number.isNaN(time)) {
			return '00:00';
		}

		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);

		return `${String(minutes).padStart(2, '0')}:${String(
			seconds
		).padStart(2, '0')}`;
	};

	useEffect(() => {
		const audio = audioRef.current;

		if (!audio) return;

		const handleEnded = () => {
			setIsPlaying(false);
			setProgress(0);
		};

		audio.addEventListener('ended', handleEnded);

		return () => {
			audio.removeEventListener('ended', handleEnded);
		};
	}, []);

	useEffect(() => {
		if (!audioUrl) {
			setIsPlaying(false);
			setProgress(0);
			setCurrentTime(0);
			setDuration(0);
			if (audioRef.current) {
				audioRef.current.pause();
			}
		}
	}, [audioUrl]);


	useEffect(() => {
		let animationFrameId;

		const updateSmoothProgress = () => {
			if (audioRef.current && !audioRef.current.paused) {
				const current = audioRef.current.currentTime;
				const total = audioRef.current.duration || 0;
				setCurrentTime(current);
				setDuration(total);
				setProgress((current / total) * 100 || 0);
				animationFrameId = requestAnimationFrame(updateSmoothProgress);
			}
		};

		if (isPlaying) {
			animationFrameId = requestAnimationFrame(updateSmoothProgress);
		} else {
			cancelAnimationFrame(animationFrameId);
		}

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, [isPlaying]);



	return (
		<div className={`gbb-audio-player-one ${id}`} >
			<audio ref={audioRef} src={audioUrl} onLoadedMetadata={updateProgress} />

      <div className="gbb-audio-player-one__top">
        <div className="gbb-audio-player-one__cover">
          <img src={coverUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"} alt="Audio Cover" />
        </div>

        <div className="gbb-audio-player-one__content">
          <span className="gbb-audio-player-one__label">{labelText || 'Now Playing'}</span>

          <h3 className="gbb-audio-player-one__title">{text || 'Your Audio Title'}</h3>

          <p className="gbb-audio-player-one__artist">{subtitle || 'Artist / Author Name'}</p>

          <div className="gbb-audio-player-one__progress">
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="any"
              value={currentTime}
              onChange={handleProgressChange}
              disabled={!audioUrl}
              style={{
                '--progress': progress,
              }}
            />
          </div>

          {timeDisplayMode !== 'none' && (
            <div className="gbb-audio-player-one__time">
              <span>{formatTime(currentTime)}</span>
              {timeDisplayMode !== 'elapsed' && (
                <span>
                  {timeDisplayMode === 'remaining'
                    ? `-${formatTime(Math.max(0, duration - currentTime))}`
                    : formatTime(duration)}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="gbb-audio-player-one__controls">
        <button type="button" onClick={() => skipTime(-10)} aria-label="Backward 10 seconds" disabled={!audioUrl}>
          ◀◀
        </button>

        <button type="button" className={`gbb-audio-player-one__play ${isPlaying ? 'is-playing' : 'is-paused'}`} onClick={togglePlay} aria-label="Play audio" disabled={!audioUrl}>
          {isPlaying ? '❚❚' : '▶'}
        </button>

        <button type="button" onClick={() => skipTime(10)} aria-label="Forward 10 seconds" disabled={!audioUrl}>
          ▶▶
        </button>

        <div className="gbb-audio-player-one__volume">
          <button
            type="button"
            onClick={toggleMute}
            className="gbb-audio-player-one__mute-btn"
            aria-label={volume > 0 ? 'Mute' : 'Unmute'}
          >
            {volume > 0 ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            style={{
              '--volume-progress': volume * 100,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
