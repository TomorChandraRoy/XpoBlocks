import useAudioPlayer from '../../../utils/useAudioPlayer';

const TemplateTwo = ({ attributes, id }) => {
  const {
    audioUrl = '',
    timeDisplayMode = 'total',
  } = attributes || {};

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
    <div className={`xpo-audio-player-two ${id}`}>
      {/* ব্যাকগ্রাউন্ড অডিও এলিমেন্ট */}
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

      {/* ১. Backward 10 Seconds */}
      <button
        type="button"
        className="xpo-audio-player-two__btn xpo-audio-player-two__btn--backward"
        onClick={() => skipTime(-10)}
        disabled={!audioUrl}
        aria-label="Backward 10 seconds"
        title="Backward 10 seconds"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <text x="12" y="15.5" fontSize="8.5" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">10</text>
        </svg>
      </button>

      {/* ২. Play / Pause Button */}
      <button
        type="button"
        className={`xpo-audio-player-two__btn xpo-audio-player-two__btn--play ${isPlaying ? 'is-playing' : 'is-paused'}`}
        onClick={togglePlay}
        disabled={!audioUrl}
        aria-label={isPlaying ? 'Pause' : 'Play'}
        title={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* ৩. Forward 10 Seconds */}
      <button
        type="button"
        className="xpo-audio-player-two__btn xpo-audio-player-two__btn--forward"
        onClick={() => skipTime(10)}
        disabled={!audioUrl}
        aria-label="Forward 10 seconds"
        title="Forward 10 seconds"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
          <text x="12" y="15.5" fontSize="8.5" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">10</text>
        </svg>
      </button>

      {/* ৪. বর্তমান সময় (Current Time) */}
      {timeDisplayMode !== 'none' && (
        <span className="xpo-audio-player-two__time xpo-audio-player-two__time--current">
          {formattedCurrentTime}
        </span>
      )}

      {/* ৫. প্রগ্রেস বার */}
      <div className="xpo-audio-player-two__progress">
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
          aria-label="Progress slider"
          style={{
            '--progress': progressPercent,
          }}
        />
      </div>

      {/* ৬. মোট / অবশিষ্ট সময় (Total or Remaining Time) */}
      {timeDisplayMode !== 'none' && (
        <span className="xpo-audio-player-two__time xpo-audio-player-two__time--total">
          {timeDisplayMode === 'remaining' ? formattedRemainingTime : formattedDuration}
        </span>
      )}

      {/* ৭. Volume কন্ট্রোল (Mute বাটন + ভলিউম কমানো/বাড়ানোর স্লাইডার) */}
      <div className="xpo-audio-player-two__volume">
        <button
          type="button"
          className="xpo-audio-player-two__btn xpo-audio-player-two__btn--volume"
          onClick={toggleMute}
          disabled={!audioUrl}
          aria-label={!isMuted && currentVolume > 0 ? 'Mute' : 'Unmute'}
          title={!isMuted && currentVolume > 0 ? 'Mute' : 'Unmute'}
        >
          {!isMuted && currentVolume > 0 ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
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
          aria-label="Volume slider"
          className="xpo-audio-player-two__volume-slider"
          style={{
            '--volume-progress': volumePercent,
          }}
        />
      </div>
    </div>
  );
};

export default TemplateTwo;
