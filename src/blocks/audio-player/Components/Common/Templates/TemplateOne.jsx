import useAudioPlayer from '../../../utils/useAudioPlayer';

const DEFAULT_COVER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='100%25' height='100%25' fill='%23cbd5e1'/%3E%3Ccircle cx='150' cy='150' r='50' fill='%2394a3b8'/%3E%3Ccircle cx='150' cy='150' r='15' fill='%23cbd5e1'/%3E%3C/svg%3E";

const TemplateOne = ({ attributes, id }) => {
  const {
    audioUrl = '',
    text = 'Your Audio Title',
    subtitle = 'Artist / Author Name',
    coverUrl = '',
    labelText = 'Now Playing',
    timeDisplayMode = 'total',
  } = attributes || {};

  // অডিও প্লেয়ারের সমস্ত ব্যাকগ্রাউন্ড লজিক, বাটন ও হ্যান্ডলার কাস্টম হুক থেকে নেওয়া
  const {
    audioRef,
    activeAudioUrl,
    currentTime,
    duration,
    isPlaying,
    isMuted,
    currentVolume,
    progressPercent,
    volumePercent,
    formattedCurrentTime,
    formattedDuration,
    formattedRemainingTime,
    togglePlay,
    skipTime,
    toggleMute,
    handleVolumeChange,
    handlePlay,
    handlePause,
    handleEnded,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleStartSeek,
    handleSliderChange,
    handleEndSeek,
  } = useAudioPlayer(audioUrl);

  return (
    <div className={`xpo-audio-player-one ${id}`}>
      {/* ১. ব্যাকগ্রাউন্ড অডিও এলিমেন্ট */}
      <audio
        ref={audioRef}
        src={activeAudioUrl || undefined}
        preload="auto"
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onDurationChange={handleLoadedMetadata}
        onCanPlay={handleLoadedMetadata}
        onCanPlayThrough={handleLoadedMetadata}
      >
        <p>Your browser doesn't support HTML5 audio.</p>
      </audio>

      {/* ২. কভার ইমেজ ও ট্র্যাক ইনফো */}
      <div className="xpo-audio-player-one__top">
        <div className="xpo-audio-player-one__cover">
          <img src={coverUrl || DEFAULT_COVER_SVG} alt="Audio Cover" />
        </div>

        <div className="xpo-audio-player-one__content">
          <span className="xpo-audio-player-one__label">{labelText || 'No Label'}</span>
          <h3 className="xpo-audio-player-one__title">{text || 'Your Audio Title'}</h3>
          <p className="xpo-audio-player-one__artist">{subtitle || 'Artist / Author Name'}</p>

          {/* ৩. প্রগ্রেস বার */}
          <div className="xpo-audio-player-one__progress">
            <input
              type="range"
              min="0"
              max={duration || 100}
              step="any"
              value={currentTime}
              onPointerDown={handleStartSeek}
              onMouseDown={handleStartSeek}
              onTouchStart={handleStartSeek}
              onInput={handleSliderChange}
              onChange={handleSliderChange}
              onPointerUp={handleEndSeek}
              onMouseUp={handleEndSeek}
              onTouchEnd={handleEndSeek}
              onClick={handleEndSeek}
              disabled={!audioUrl}
              style={{
                '--progress': progressPercent,
              }}
            />

            {/* ৪. টাইম ডিসপ্লে (Time Display Mode) */}
            {timeDisplayMode !== 'none' && (
              <div className="xpo-audio-player-one__time">
                <span>{formattedCurrentTime}</span>
                {timeDisplayMode === 'remaining' && <span>{formattedRemainingTime}</span>}
                {timeDisplayMode === 'total' && <span>{formattedDuration}</span>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ৫. কন্ট্রোলস (Backward 10s, Play/Pause, Forward 10s, Volume & Mute) */}
      <div className="xpo-audio-player-one__controls">
        <button
          type="button"
          onClick={() => skipTime(-10)}
          aria-label="Backward 10 seconds"
          disabled={!audioUrl}
          title="Backward 10 seconds"
        >
          ◀◀
        </button>

        <button
          type="button"
          className={`xpo-audio-player-one__play ${isPlaying ? 'is-playing' : 'is-paused'}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          disabled={!audioUrl}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>

        <button
          type="button"
          onClick={() => skipTime(10)}
          aria-label="Forward 10 seconds"
          disabled={!audioUrl}
          title="Forward 10 seconds"
        >
          ▶▶
        </button>

        <div className="xpo-audio-player-one__volume">
          <button
            type="button"
            onClick={toggleMute}
            className="xpo-audio-player-one__mute-btn"
            aria-label={!isMuted && currentVolume > 0 ? 'Mute' : 'Unmute'}
            title={!isMuted && currentVolume > 0 ? 'Mute' : 'Unmute'}
            disabled={!audioUrl}
          >
            {!isMuted && currentVolume > 0 ? (
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
            value={currentVolume}
            onChange={handleVolumeChange}
            disabled={!audioUrl}
            style={{
              '--volume-progress': volumePercent,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateOne;
