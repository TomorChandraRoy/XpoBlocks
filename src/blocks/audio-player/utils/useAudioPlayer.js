import { useState, useRef, useEffect } from 'react';

/**
 * সময়কে সেকেন্ড থেকে মিনিট ও সেকেন্ডের ফরম্যাটে (mm:ss) রূপান্তর করার হেল্পার ফাংশন
 * @param {number} time
 * @returns {string} e.g. "03:45"
 */
export const formatTime = (time) => {
  if (isNaN(time) || !time || time < 0) return '0:00';
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

/**
 * অডিও প্লেয়ারের স্টেট, মেটাডাটা, কন্ট্রোলস, লোকাল Blob লোডার ও সিকিং কাস্টম হুক
 * @param {string} audioUrl
 */
export const useAudioPlayer = (audioUrl = '') => {
  const [activeAudioUrl, setActiveAudioUrl] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);
  const isDraggingRef = useRef(false);

  // ১. WordPress Studio / Localhost-এর জন্য মেমোরি Blob URL তৈরি
  useEffect(() => {
    if (!audioUrl) {
      setActiveAudioUrl('');
      setIsPlaying(false);
      return;
    }

    let isMounted = true;
    let blobUrl = null;

    if (audioUrl.includes('localhost') || audioUrl.includes('127.0.0.1') || audioUrl.startsWith('/')) {
      fetch(encodeURI(audioUrl))
        .then((res) => {
          if (!res.ok) throw new Error('Fetch failed');
          return res.blob();
        })
        .then((blob) => {
          if (isMounted) {
            blobUrl = URL.createObjectURL(blob);
            setActiveAudioUrl(blobUrl);
          }
        })
        .catch(() => {
          if (isMounted) {
            setActiveAudioUrl(encodeURI(audioUrl));
          }
        });
    } else {
      setActiveAudioUrl(encodeURI(audioUrl));
    }

    return () => {
      isMounted = false;
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, [audioUrl]);

  // ২. অডিও ফাইল লোড ও মেটাডাটা ইভেন্ট লিসেনার
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);

    if (activeAudioUrl) {
      audio.load();
    }

    const checkAndSetDuration = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };

    if (audio.readyState >= 1) {
      checkAndSetDuration();
    }

    audio.addEventListener('loadedmetadata', checkAndSetDuration);
    audio.addEventListener('durationchange', checkAndSetDuration);
    audio.addEventListener('canplay', checkAndSetDuration);
    audio.addEventListener('canplaythrough', checkAndSetDuration);

    return () => {
      audio.removeEventListener('loadedmetadata', checkAndSetDuration);
      audio.removeEventListener('durationchange', checkAndSetDuration);
      audio.removeEventListener('canplay', checkAndSetDuration);
      audio.removeEventListener('canplaythrough', checkAndSetDuration);
    };
  }, [activeAudioUrl]);

  // ৩. Play / Pause টগল
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !activeAudioUrl) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  };

  // ৪. সময় এগিয়ে বা পিছিয়ে নেওয়া (যেমন: -১০ সেকেন্ড বা +১০ সেকেন্ড)
  const skipTime = (amount) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const targetTime = Math.max(0, Math.min(duration, (audio.currentTime || 0) + amount));
    audio.currentTime = targetTime;
    setCurrentTime(targetTime);
  };

  // ৫. ভলিউম পরিবর্তন
  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    setIsMuted(newVol === 0);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  // ৬. Mute / Unmute টগল
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume > 0 ? volume : 1;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  // ৭. অডিও চলাকালীন সময় আপডেট
  const handleTimeUpdate = () => {
    if (audioRef.current && !isDraggingRef.current) {
      setCurrentTime(audioRef.current.currentTime || 0);
    }
  };

  // ৮. মেটাডাটা লোড হলে সময় নেওয়া
  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration) && isFinite(audioRef.current.duration) && audioRef.current.duration > 0) {
      setDuration(audioRef.current.duration);
    }
  };

  // ৯. স্লাইডার ড্র্যাগ শুরু
  const handleStartSeek = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    isDraggingRef.current = true;
  };

  // ১০. স্লাইডার টানার সময় লাইভ ভ্যালু আপডেট
  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
  };

  // ১১. স্লাইডার ছেড়ে দিলে অডিওতে নতুন সময় সেট করা
  const handleEndSeek = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = newTime;
      } catch {
        // Safe failover
      }
    }
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 150);
  };

  // প্রগ্রেস ও ভলিউম পার্সেন্টেজ হিসাব
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const currentVolume = isMuted ? 0 : volume;
  const volumePercent = currentVolume * 100;

  return {
    audioRef,
    activeAudioUrl,
    currentTime,
    duration,
    isPlaying,
    volume,
    isMuted,
    currentVolume,
    progressPercent,
    volumePercent,
    formattedCurrentTime: formatTime(currentTime),
    formattedDuration: formatTime(duration),
    formattedRemainingTime: `-${formatTime(Math.max(0, duration - currentTime))}`,
    togglePlay,
    skipTime,
    toggleMute,
    handleVolumeChange,
    handlePlay: () => setIsPlaying(true),
    handlePause: () => setIsPlaying(false),
    handleEnded: () => setIsPlaying(false),
    handleTimeUpdate,
    handleLoadedMetadata,
    handleStartSeek,
    handleSliderChange,
    handleEndSeek,
  };
};

export default useAudioPlayer;
