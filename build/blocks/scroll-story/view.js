/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/scroll-story/Components/Common/DynamicStyles.js"
/*!********************************************************************!*\
  !*** ./src/blocks/scroll-story/Components/Common/DynamicStyles.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DynamicStyle = ({
  attributes,
  clientId
}) => {
  const {
    progressColor = '#3b82f6',
    activeTitleColor = '#1e293b',
    inactiveTitleColor = '#94a3b8',
    descColor = '#475569',
    imageFit = 'cover',
    mediaBgColor = '#f1f5f9',
    mediaHeight = '400px',
    mediaRadius = '20px',
    stepGap = '60px'
  } = attributes;

  // In editor, the prop clientId is passed as 'block-{id}'. Frontend fallback to generic class.
  const mainSl = clientId ? `#${clientId}` : '.wp-block-xpo-blocks-scroll-story';
  const xpoCnt = `${mainSl} .xpo-scroll-story-content`;
  const xpoSPF = `${mainSl} .xpo-scroll-progress-fill`;
  const xpoSST = `${mainSl} .xpo-scroll-story-title`;
  const xpoSSA = `${mainSl} .xpo-scroll-story-step.is-active .xpo-scroll-story-title`;
  const xpoSSD = `${mainSl} .xpo-scroll-story-desc`;
  const xpoImg = `${mainSl} .xpo-scroll-story-image`;
  const xpoMediaWrp = `${mainSl} .xpo-scroll-story-media-wrapper`;
  const xpoMediaStk = `${mainSl} .xpo-scroll-story-media-sticky`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: `
				${xpoCnt} {
					gap: ${stepGap};
				}

				${xpoSPF} {
					background: ${progressColor};
				}

				${xpoSST} {
					color: ${inactiveTitleColor};
				}

				${xpoSSA} {
					color: ${activeTitleColor};
				}

				${xpoSSD} {
					color: ${descColor};
				}

				${xpoImg} {
					object-fit: ${imageFit};
				}

				${xpoMediaWrp} {
					background: ${mediaBgColor};
					border-radius: ${mediaRadius};
				}

				${xpoMediaStk} {
					min-height: ${mediaHeight};
				}
			`.replace(/\s+/g, ' ')
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicStyle);

/***/ },

/***/ "./src/blocks/scroll-story/Components/Common/Templates/ScrollStory.jsx"
/*!*****************************************************************************!*\
  !*** ./src/blocks/scroll-story/Components/Common/Templates/ScrollStory.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateOne */ "./src/blocks/scroll-story/Components/Common/Templates/TemplateOne.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const TEMPLATES = {
  'template-1': _TemplateOne__WEBPACK_IMPORTED_MODULE_0__["default"]
};
const ScrollStory = props => {
  const {
    attributes
  } = props || {};
  const {
    selectedTemplate = 'template-1'
  } = attributes || {};
  const TemplateComponent = TEMPLATES[selectedTemplate] || TEMPLATES['template-1'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TemplateComponent, {
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollStory);

/***/ },

/***/ "./src/blocks/scroll-story/Components/Common/Templates/TemplateOne.jsx"
/*!*****************************************************************************!*\
  !*** ./src/blocks/scroll-story/Components/Common/Templates/TemplateOne.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/icons */ "./src/blocks/scroll-story/utils/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const prefix = 'xpo';
const TemplateOne = ({
  attributes,
  setAttributes,
  RichTextEl,
  isBackend = false
}) => {
  const {
    layout = 'sticky-right',
    steps = []
  } = attributes;
  const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const stepRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);

  // Frontend scroll / IntersectionObserver logic with requestAnimationFrame for 60/120fps performance
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isBackend) return;
    let ticking = false;
    const updateActiveStepOnScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let closestIndex = 0;
          let minDistance = Infinity;
          const viewportCenter = window.innerHeight / 2;
          stepRefs.current.forEach((ref, index) => {
            if (!ref) return;
            const rect = ref.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const distance = Math.abs(elementCenter - viewportCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
            }
          });
          setActiveStep(prev => prev !== closestIndex ? closestIndex : prev);
          ticking = false;
        });
        ticking = true;
      }
    };
    const observerOptions = {
      root: null,
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
    };
    const observer = new IntersectionObserver(() => {
      updateActiveStepOnScroll();
    }, observerOptions);
    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    window.addEventListener('scroll', updateActiveStepOnScroll, {
      passive: true
    });
    return () => {
      stepRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener('scroll', updateActiveStepOnScroll);
    };
  }, [isBackend, steps]);

  // Clicking a step changes active step (and scrolls into view on frontend)
  const handleStepClick = index => {
    setActiveStep(index);
    if (!isBackend && stepRefs.current[index]) {
      stepRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  const activeMedia = steps[activeStep]?.mediaUrl;
  const activeLottie = steps[activeStep]?.lottieUrl;
  const mediaType = steps[activeStep]?.mediaType || 'image';
  const updateStepAttr = (index, key, value) => {
    if (!isBackend) return;
    const newSteps = [...steps];
    newSteps[index] = {
      ...newSteps[index],
      [key]: value
    };
    setAttributes({
      steps: newSteps
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: `${prefix}-scroll-story-container layout-${layout}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `${prefix}-scroll-story-content`,
      children: steps.map((step, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: `${prefix}-scroll-story-step ${index === activeStep ? 'is-active' : ''}`,
        "data-step-index": index,
        ref: el => stepRefs.current[index] = el,
        onClick: () => handleStepClick(index),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: `${prefix}-scroll-progress-line`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: `${prefix}-scroll-progress-fill`
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: `${prefix}-scroll-story-text`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RichTextEl, {
            tagName: "h3",
            className: `${prefix}-scroll-story-title`,
            value: step.title,
            onChange: val => updateStepAttr(index, 'title', val),
            placeholder: "Step Title",
            allowedFormats: ['core/bold', 'core/italic', 'core/link']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RichTextEl, {
            tagName: "div",
            className: `${prefix}-scroll-story-desc`,
            value: step.description,
            onChange: val => updateStepAttr(index, 'description', val),
            placeholder: "Step Description...",
            allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/list']
          })]
        })]
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `${prefix}-scroll-story-media-sticky`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: `${prefix}-scroll-story-media-wrapper`,
        children: [mediaType === 'image' && (activeMedia ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: activeMedia,
          alt: `Step ${activeStep + 1}`,
          className: `${prefix}-scroll-story-image fade-in`
        }, activeMedia) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: `${prefix}-scroll-story-placeholder`,
          children: isBackend ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: _utils_icons__WEBPACK_IMPORTED_MODULE_1__.imageIcon
            }
          }) : null
        })), mediaType === 'lottie' && (activeLottie ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: `${prefix}-scroll-story-lottie fade-in`,
          children: (() => {
            let cleanUrl = activeLottie.trim();
            const iframeMatch = cleanUrl.match(/src=["']([^"']+)["']/);
            if (iframeMatch && iframeMatch[1]) {
              cleanUrl = iframeMatch[1];
            }
            if (cleanUrl.includes('/embed/')) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("iframe", {
                src: cleanUrl,
                style: {
                  width: '100%',
                  height: '100%',
                  border: 'none'
                },
                title: `Lottie Step ${activeStep + 1}`
              });
            }
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("lottie-player", {
              src: cleanUrl,
              background: "transparent",
              speed: "1",
              style: {
                width: '100%',
                height: '100%'
              },
              loop: true,
              autoplay: true
            });
          })()
        }, activeLottie) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: `${prefix}-scroll-story-placeholder`,
          children: isBackend ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: "Lottie Animation"
          }) : null
        }))]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateOne);

/***/ },

/***/ "./src/blocks/scroll-story/utils/icons.js"
/*!************************************************!*\
  !*** ./src/blocks/scroll-story/utils/icons.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralIcon: () => (/* binding */ GeneralIcon),
/* harmony export */   StyleIcon: () => (/* binding */ StyleIcon),
/* harmony export */   TemplateOneSvg: () => (/* binding */ TemplateOneSvg),
/* harmony export */   imageIcon: () => (/* binding */ imageIcon),
/* harmony export */   imageSVGIcon: () => (/* binding */ imageSVGIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const imageIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
const imageSVGIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "20 20 140 140",
  width: "100%",
  height: "100%",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
      children: `
        .icon-stroke {
          stroke: #F62477;
          stroke-width: 7;
          stroke-linecap: round;
          stroke-linejoin: round;
          fill: none;
        }
        .icon-fill {
          fill: #F62477;
        }
      `
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    transform: "translate(10, 5)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      className: "icon-stroke",
      d: "M100,120 H40 A14,14 0 0,1 26,106 V74 A14,14 0 0,1 40,60 H65"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
      className: "icon-stroke",
      points: "27,100 48,78 68,98 84,82 100,98"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "76",
      cy: "74",
      r: "5",
      className: "icon-fill"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      className: "icon-stroke",
      d: "M68,54 H116 C128,54 135,62 135,76 V100 C135,116 118,130 96,130"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      className: "icon-stroke",
      d: "M68,54 C48,54 48,34 68,34 C82,34 82,46 72,46 C66,46 64,43 64,40"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      className: "icon-stroke",
      d: "M68,124 C78,142 102,146 124,136 L142,106"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
      className: "icon-fill",
      points: "144,95 129,112 147,117"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      className: "icon-stroke",
      strokeWidth: "5",
      d: "M138,50 C140,56 139,63 137,68"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      className: "icon-stroke",
      strokeWidth: "4.5",
      d: "M128,144 C134,142 139,138 142,133"
    })]
  })]
});
const GeneralIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    marginRight: '6px'
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "4",
    y1: "6",
    x2: "20",
    y2: "6"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "4",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
    x1: "4",
    y1: "18",
    x2: "20",
    y2: "18"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "8",
    cy: "6",
    r: "2.5",
    fill: "currentColor"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "16",
    cy: "12",
    r: "2.5",
    fill: "currentColor"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "10",
    cy: "18",
    r: "2.5",
    fill: "currentColor"
  })]
});
const StyleIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  style: {
    marginRight: '6px'
  },
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M5 0 4 1H1v10.516l1-1V2h2v1h7V2h2v2.463l1-1V1h-3l-1-1zm.414 1h4.172l.414.414V2H5v-.586zm13.139 0-.205.006-.202.035-.195.063-.183.087-.172.112-.155.135-3.89 3.888-.223.207-.244.186-.256.164-.271.14-.282.118-.29.091-.301.067-.301.04-.305.013-.307-.012-.3-.041-.3-.067-.29-.091-.283-.118-.272-.14-.256-.164-.242-.186-.224-.207-7.073 7.072 7.073 7.07 7.07-7.07-.207-.226-.186-.242-.164-.256-.14-.272-.118-.283-.091-.29-.067-.298-.039-.302-.014-.307.014-.305.04-.3.066-.301.091-.291.118-.282.14-.27.164-.257.186-.244.207-.223 3.889-3.89.134-.155.112-.17.087-.185.063-.195.035-.202.006-.205-.021-.203-.047-.2-.077-.189-.1-.18-.124-.163-.143-.143-.164-.125-.18-.1-.189-.076-.197-.047zm-.108 1.002h.114l.107.025.102.047.087.07.07.088.048.102.025.107v.114l-.025.11-.047.1-.07.089-3.89 3.886-.241.262-.221.281-.197.297-.172.31-.149.325-.123.336-.095.342-.069.351-.039.354-.012.355.016.356.045.355.074.348.1.343.127.332.152.323.176.308-.432.432L8.25 7.094l.432-.432.308.176.324.154.332.125.342.1.35.074.353.045.356.016.355-.012.354-.04.351-.068.342-.095.336-.121.324-.149.31-.174.298-.197.281-.22.262-.243 3.888-3.888.086-.07.102-.048zM3 6v1h2.516l1-1zm4.543 1.8 5.656 5.657-1.554 1.557-.02-.256-.037-.254-.03-.125-.037-.123-.05-.117-.065-.112-.078-.103-.09-.088-.105-.076-.113-.059-.122-.043-.125-.025-.128-.012h-.127l-.13.012-.126.02-.25.056-.244.074-.243.084-.476.19-.442.17-.007.02-.03-.007.037-.013.497-1.291.11-.332.095-.34.037-.172.025-.172.012-.174-.01-.176-.014-.088-.021-.084-.027-.084-.04-.08-.044-.074-.057-.068-.063-.063-.068-.054-.076-.045-.08-.035-.084-.028-.086-.015-.088-.01-.088-.002-.174.015-.174.036-.168.045-.335.105-.33.115-.168.055-.147.037v.014l-.025-.008.025-.006.018-.299.021-.31.002-.157-.004-.156-.017-.154-.03-.154-.045-.149-.06-.144-.072-.137-.086-.131-.1-.121-.11-.111-.119-.102-.123-.094zM3 8v1h.516l1-1zm2.592 1.75.127.08.119.092.105.105.043.06.035.067.03.069.015.072.016.148-.01.3-.021.296-.012.299.008.148.021.149.043.142.065.135.04.06.05.06.052.052.059.047.064.039.067.035.142.045.147.021h.148l.15-.015.145-.027.29-.079.282-.095.282-.098.271-.078.004-.024.012.02-.016.004-.035.176-.055.197-.129.387-.296.763-.149.381-.068.194-.06.195-.048.2-.015.099-.008.103v.102l.014.101.027.1.039.094.053.088.066.078.078.068.088.05.094.042.101.025.1.012.104.002.101-.01.102-.017.197-.05.195-.062.192-.068.76-.3.386-.136.2-.048.101-.018.086-.006-.004-.016.02.014-.016.002.02.066.013.083.018.168.017.335.02.336.039.334-2.11 2.112-5.656-5.657zM1 13.281V17h3.72l-1-1H2v-1.719z"
  })
});
const TemplateOneSvg = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 800 500",
  width: "100%",
  height: "100%",
  style: {
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "800",
    height: "500",
    fill: "#f8fafc",
    rx: "12"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    transform: "translate(60, 80)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "18",
      y: "20",
      width: "4",
      height: "260",
      fill: "#e2e8f0",
      rx: "2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "18",
      y: "20",
      width: "4",
      height: "120",
      fill: "#3b82f6",
      rx: "2"
    }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "20",
      cy: "20",
      r: "12",
      fill: "#3b82f6",
      stroke: "#ffffff",
      strokeWidth: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "10",
      width: "160",
      height: "20",
      fill: "#1e293b",
      rx: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "40",
      width: "220",
      height: "10",
      fill: "#94a3b8",
      rx: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "60",
      width: "180",
      height: "10",
      fill: "#94a3b8",
      rx: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "20",
      cy: "140",
      r: "12",
      fill: "#cbd5e1",
      stroke: "#ffffff",
      strokeWidth: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "130",
      width: "140",
      height: "20",
      fill: "#64748b",
      rx: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "160",
      width: "200",
      height: "10",
      fill: "#cbd5e1",
      rx: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "180",
      width: "170",
      height: "10",
      fill: "#cbd5e1",
      rx: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "20",
      cy: "260",
      r: "12",
      fill: "#cbd5e1",
      stroke: "#ffffff",
      strokeWidth: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "250",
      width: "150",
      height: "20",
      fill: "#64748b",
      rx: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "280",
      width: "190",
      height: "10",
      fill: "#cbd5e1",
      rx: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "300",
      width: "160",
      height: "10",
      fill: "#cbd5e1",
      rx: "4"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    transform: "translate(420, 50)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "320",
      height: "400",
      fill: "#e2e8f0",
      rx: "16"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      x: "110",
      y: "150",
      width: "100",
      height: "100",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#94a3b8",
      strokeWidth: "1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
        cx: "9",
        cy: "9",
        r: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
      })]
    })]
  })]
});

/***/ },

/***/ "./src/blocks/scroll-story/view.js"
/*!*****************************************!*\
  !*** ./src/blocks/scroll-story/view.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/scroll-story/style.scss");
/* harmony import */ var _Components_Common_DynamicStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/DynamicStyles */ "./src/blocks/scroll-story/Components/Common/DynamicStyles.js");
/* harmony import */ var _Components_Common_Templates_ScrollStory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Templates/ScrollStory */ "./src/blocks/scroll-story/Components/Common/Templates/ScrollStory.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener('DOMContentLoaded', () => {
  const storyEls = document.querySelectorAll('.wp-block-xpo-blocks-scroll-story');
  storyEls.forEach(el => {
    if (!el.dataset.attributes) return;
    const attributes = JSON.parse(el.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_DynamicStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_Templates_ScrollStory__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        RichTextEl: RichTextEl,
        isBackend: false
      })]
    }));
    el.removeAttribute('data-attributes');
  });
});
const RichTextEl = ({
  tagName,
  className,
  value
}) => {
  const Tag = tagName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Tag, {
    className: className,
    dangerouslySetInnerHTML: {
      __html: value
    }
  });
};

/***/ },

/***/ "./src/blocks/scroll-story/style.scss"
/*!********************************************!*\
  !*** ./src/blocks/scroll-story/style.scss ***!
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
/******/ 		__webpack_require__.O = (result, chunkIds, fn) => {
/******/ 			if(chunkIds) {
/******/ 				deferred.push([chunkIds, fn]);
/******/ 				return;
/******/ 			}
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (__webpack_require__.O.j(chunkIds[j])) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
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
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"blocks/scroll-story/view": 0,
/******/ 			"blocks/scroll-story/style-view": 0
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
/******/ 		const chunkLoadingGlobal = globalThis["webpackChunkxpo_blocks"] ||= [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/scroll-story/style-view"], () => (__webpack_require__("./src/blocks/scroll-story/view.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=view.js.map