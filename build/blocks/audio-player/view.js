/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/audio-player/Components/Common/DynamicStyles.js"
/*!********************************************************************!*\
  !*** ./src/blocks/audio-player/Components/Common/DynamicStyles.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DynamicStyles = ({
  attributes,
  id
}) => {
  const {
    playerLayout = 'extended',
    compactSize = 160,
    enableSeekbar = false,
    bgColor = '#111111',
    textColor = '#ffffff',
    accentColor = 'var(--gbb-ap-accent, #10b981)',
    progressColor = 'rgba(255,255,255,0.15)',
    borderRadius = 50,
    paddingV = 16,
    paddingH = 32,
    playerAlign = 'center'
  } = attributes || {};
  const isCompact = playerLayout === 'compact';
  const mainSl = `#${id}`;
  const wrapper = mainSl;
  const button = `${wrapper} .gbb-ap-button`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: `
        ${wrapper} {
          display: flex;
          justify-content: ${playerAlign};
          align-items: center;
          width: 100%;
        }

        ${button} {
          --gbb-ap-bg: ${bgColor};
          --gbb-ap-text: ${textColor};
          --gbb-ap-accent: ${accentColor};
          --gbb-ap-progress: ${enableSeekbar ? progressColor : 'transparent'};
          --gbb-ap-br: ${isCompact ? '50%' : `${borderRadius}px`};
          --gbb-ap-pad-v: ${isCompact ? '0px' : `${paddingV}px`};
          --gbb-ap-pad-h: ${isCompact ? '0px' : `${paddingH}px`};
          --gbb-ap-width: ${isCompact ? `${compactSize}px` : 'auto'};
          --gbb-ap-height: ${isCompact ? `${compactSize}px` : 'auto'};
          --gbb-ap-jc: ${isCompact ? 'center' : 'flex-start'};
        }
        `
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicStyles);

/***/ },

/***/ "./src/blocks/audio-player/Components/Common/Templates/AudioPlayer.jsx"
/*!*****************************************************************************!*\
  !*** ./src/blocks/audio-player/Components/Common/Templates/AudioPlayer.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const AudioPlayer = ({
  attributes,
  setAttributes,
  id
}) => {
  const {
    audioUrl = '',
    text = '',
    subtitle = '',
    coverUrl = '',
    labelText = '',
    preloadStrategy = 'metadata',
    timeDisplayMode = 'total'
  } = attributes || {};
  const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [isPlaying, setIsPlaying] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [progress, setProgress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [currentTime, setCurrentTime] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [duration, setDuration] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [volume, setVolume] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const prevVolumeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(1);
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
    setProgress(current / total * 100 || 0);
  };
  const handleProgressChange = event => {
    const value = Number(event.target.value);
    if (!audioRef.current || !duration) return;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
    setProgress(value / duration * 100 || 0);
  };
  const skipTime = seconds => {
    if (!audioRef.current) return;
    audioRef.current.currentTime += seconds;
  };
  const handleVolumeChange = event => {
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
  const formatTime = time => {
    if (!time || Number.isNaN(time)) {
      return '00:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let animationFrameId;
    const updateSmoothProgress = () => {
      if (audioRef.current && !audioRef.current.paused) {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration || 0;
        setCurrentTime(current);
        setDuration(total);
        setProgress(current / total * 100 || 0);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "gbb-audio-player-one",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("audio", {
      ref: audioRef,
      src: audioUrl,
      onLoadedMetadata: updateProgress
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "gbb-audio-player-one__top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gbb-audio-player-one__cover",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: coverUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
          alt: "Audio Cover"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "gbb-audio-player-one__content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "gbb-audio-player-one__label",
          children: labelText || 'Now Playing'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "gbb-audio-player-one__title",
          children: text || 'Your Audio Title'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "gbb-audio-player-one__artist",
          children: subtitle || 'Artist / Author Name'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "gbb-audio-player-one__progress",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
            type: "range",
            min: "0",
            max: duration || 100,
            step: "any",
            value: currentTime,
            onChange: handleProgressChange,
            disabled: !audioUrl,
            style: {
              '--progress': progress
            }
          })
        }), timeDisplayMode !== 'none' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "gbb-audio-player-one__time",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: formatTime(currentTime)
          }), timeDisplayMode !== 'elapsed' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: timeDisplayMode === 'remaining' ? `-${formatTime(Math.max(0, duration - currentTime))}` : formatTime(duration)
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "gbb-audio-player-one__controls",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        onClick: () => skipTime(-10),
        "aria-label": "Backward 10 seconds",
        disabled: !audioUrl,
        children: "\u25C0\u25C0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        className: "gbb-audio-player-one__play",
        onClick: togglePlay,
        "aria-label": "Play audio",
        disabled: !audioUrl,
        children: isPlaying ? '❚❚' : '▶'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        type: "button",
        onClick: () => skipTime(10),
        "aria-label": "Forward 10 seconds",
        disabled: !audioUrl,
        children: "\u25B6\u25B6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "gbb-audio-player-one__volume",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          onClick: toggleMute,
          className: "gbb-audio-player-one__mute-btn",
          "aria-label": volume > 0 ? 'Mute' : 'Unmute',
          children: volume > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon", {
              points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
              d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon", {
              points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
              x1: "23",
              y1: "9",
              x2: "17",
              y2: "15"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
              x1: "17",
              y1: "9",
              x2: "23",
              y2: "15"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "range",
          min: "0",
          max: "1",
          step: "0.01",
          value: volume,
          onChange: handleVolumeChange,
          style: {
            '--volume-progress': volume * 100
          }
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioPlayer);

/***/ },

/***/ "./src/blocks/audio-player/view.js"
/*!*****************************************!*\
  !*** ./src/blocks/audio-player/view.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/audio-player/style.scss");
/* harmony import */ var _Components_Common_DynamicStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/DynamicStyles */ "./src/blocks/audio-player/Components/Common/DynamicStyles.js");
/* harmony import */ var _Components_Common_Templates_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Templates/AudioPlayer */ "./src/blocks/audio-player/Components/Common/Templates/AudioPlayer.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// পেজের সমস্ত HTML লোড সম্পন্ন হওয়ার পর স্ক্রিপ্টটি চালু হবে

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.wp-block-guten-builder-blocks-audio-player');
  containers.forEach(container => {
    if (container.dataset.initialized) return;
    container.dataset.initialized = 'true';
    const attributes = JSON.parse(container.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_DynamicStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        id: container.id
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_Templates_AudioPlayer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes,
        id: container.id
      })]
    }));

    // React UI রেন্ডারিং সম্পন্ন হওয়ার পর HTML DOM থেকে অপ্রয়োজনীয় data-attributes মুছে দিয়ে HTML ক্লিন করা
    container?.removeAttribute('data-attributes');
  });
});

/***/ },

/***/ "./src/blocks/audio-player/style.scss"
/*!********************************************!*\
  !*** ./src/blocks/audio-player/style.scss ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			let notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn, priority] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"blocks/audio-player/view": 0,
/******/ 			"blocks/audio-player/style-view": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkguten_builder_blocks"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/audio-player/style-view"], () => (__webpack_require__("./src/blocks/audio-player/view.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=view.js.map