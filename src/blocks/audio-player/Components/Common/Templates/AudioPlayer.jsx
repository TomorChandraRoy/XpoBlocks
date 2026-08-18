import { useState, useEffect } from '@wordpress/element';
import { useRef } from 'react';



const AudioPlayer = ( { attributes, setAttributes, id } ) => {
	const {blockId} = attributes;
const audioRef = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);

const togglePlay = () => {
		if (!audioRef.current) return;

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

	const {
		audioUrl = '',
		text = '',
		subtitle = '',
		coverUrl = '',
		labelText = 'Now Playing'
	} = attributes || {};

	return (
		<div className="gbb-audio-player-one">
			<audio ref={audioRef} src={audioUrl} onLoadedMetadata={updateProgress} />

      <div className="gbb-audio-player-one__top">
        <div className="gbb-audio-player-one__cover">
          <img src={coverUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"} alt="Audio Cover" />
        </div>

        <div className="gbb-audio-player-one__content">
          <span className="gbb-audio-player-one__label">{labelText}</span>

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
              style={{
                '--progress': progress,
              }}
            />
          </div>

          <div className="gbb-audio-player-one__time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <div className="gbb-audio-player-one__controls">
        <button type="button" onClick={() => skipTime(-10)} aria-label="Backward 10 seconds">
          ◀◀
        </button>

        <button type="button" className="gbb-audio-player-one__play" onClick={togglePlay} aria-label="Play audio">
          {isPlaying ? '❚❚' : '▶'}
        </button>

        <button type="button" onClick={() => skipTime(10)} aria-label="Forward 10 seconds">
          ▶▶
        </button>

        <div className="gbb-audio-player-one__volume">
          <span>🔊</span>

          <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
