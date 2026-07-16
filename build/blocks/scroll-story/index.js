/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/scroll-story/Components/Common/dynamicStyle.js"
/*!*******************************************************************!*\
  !*** ./src/blocks/scroll-story/Components/Common/dynamicStyle.js ***!
  \*******************************************************************/
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
    blockId,
    progressColor = '#3b82f6',
    activeTitleColor = '#1e293b',
    inactiveTitleColor = '#94a3b8',
    descColor = '#475569'
  } = attributes;
  const mainSl = `.${blockId}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: `
				${mainSl} {
					display: flex;
					flex-direction: row;
					align-items: flex-start;
					gap: 40px;
					position: relative;
				}

				${mainSl}.layout-sticky-left {
					flex-direction: row-reverse;
				}

				${mainSl} .gbb-scroll-story-content {
					flex: 1;
					display: flex;
					flex-direction: column;
					gap: 60px;
					padding: 50px 0 300px 0;
				}

				${mainSl} .gbb-scroll-story-media-sticky {
					flex: 1;
					position: sticky;
					top: 100px;
					height: calc(100vh - 200px);
					min-height: 400px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				${mainSl} .gbb-scroll-story-media-wrapper {
					width: 100%;
					height: 100%;
					background: #f1f5f9;
					border-radius: 20px;
					overflow: hidden;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
				}

				${mainSl} .gbb-scroll-story-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					position: absolute;
					top: 0;
					left: 0;
				}

				${mainSl} .gbb-scroll-story-step {
					display: flex;
					gap: 30px;
					opacity: 0.4;
					transition: opacity 0.4s ease;
					cursor: pointer;
				}

				${mainSl} .gbb-scroll-story-step.is-active {
					opacity: 1;
				}

				${mainSl} .gbb-scroll-progress-line {
					width: 4px;
					background: #e2e8f0;
					border-radius: 4px;
					position: relative;
					overflow: hidden;
					flex-shrink: 0;
				}

				${mainSl} .gbb-scroll-progress-fill {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 0%;
					background: ${progressColor};
					transition: height 0.4s ease;
				}

				${mainSl} .gbb-scroll-story-step.is-active .gbb-scroll-progress-fill {
					height: 100%;
				}

				${mainSl} .gbb-scroll-story-text {
					flex: 1;
				}

				${mainSl} .gbb-scroll-story-title {
					font-size: 28px;
					font-weight: 700;
					color: ${inactiveTitleColor};
					margin: 0 0 16px 0;
					transition: color 0.4s ease;
				}

				${mainSl} .gbb-scroll-story-step.is-active .gbb-scroll-story-title {
					color: ${activeTitleColor};
				}

				${mainSl} .gbb-scroll-story-desc {
					font-size: 16px;
					line-height: 1.6;
					color: ${descColor};
					margin: 0;
				}

				.fade-in {
					animation: fadeIn 0.5s ease-in-out;
				}

				@keyframes fadeIn {
					from { opacity: 0; transform: translateY(10px); }
					to { opacity: 1; transform: translateY(0); }
				}

				@media (max-width: 768px) {
					${mainSl} {
						flex-direction: column-reverse;
					}
					${mainSl}.layout-sticky-left {
						flex-direction: column-reverse;
					}
					${mainSl} .gbb-scroll-story-media-sticky {
						position: relative;
						top: 0;
						height: 300px;
						min-height: auto;
						width: 100%;
					}
					${mainSl} .gbb-scroll-story-content {
						padding: 20px 0;
						gap: 40px;
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.fade-in {
						animation: none;
					}
					${mainSl} .gbb-scroll-story-step {
						transition: none;
					}
				}
			`.replace(/\s+/g, ' ')
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicStyle);

/***/ },

/***/ "./src/blocks/scroll-story/Components/Edit.js"
/*!****************************************************!*\
  !*** ./src/blocks/scroll-story/Components/Edit.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings/Settings */ "./src/blocks/scroll-story/Components/Settings/Settings.js");
/* harmony import */ var _ScrollStory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrollStory */ "./src/blocks/scroll-story/Components/ScrollStory.jsx");
/* harmony import */ var _Common_dynamicStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common/dynamicStyle */ "./src/blocks/scroll-story/Components/Common/dynamicStyle.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Common_dynamicStyle__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      clientId: clientId
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Settings_Settings__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attributes,
      setAttributes,
      clientId
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ScrollStory__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        RichTextEl: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText,
        isBackend: true
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ },

/***/ "./src/blocks/scroll-story/Components/ScrollStory.jsx"
/*!************************************************************!*\
  !*** ./src/blocks/scroll-story/Components/ScrollStory.jsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/icons */ "./src/blocks/scroll-story/utils/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ScrollStory = ({
  attributes,
  setAttributes,
  RichTextEl,
  isBackend = false
}) => {
  const {
    blockId,
    layout = 'sticky-right',
    steps = []
  } = attributes;
  const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const stepRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);

  // Frontend IntersectionObserver logic
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isBackend) return;
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-step-index'), 10);
          if (!isNaN(index)) {
            setActiveStep(index);
          }
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      stepRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isBackend, steps]);

  // In the backend, clicking a step changes the active step preview
  const handleStepClick = index => {
    if (isBackend) {
      setActiveStep(index);
    }
  };
  const activeMedia = steps[activeStep]?.mediaUrl;
  const activeLottie = steps[activeStep]?.lottieUrl;
  const mediaType = steps[activeStep]?.mediaType || 'image';
  const hasMedia = activeMedia || activeLottie;
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
    className: `gbb-scroll-story-container ${blockId} layout-${layout}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gbb-scroll-story-content",
      children: steps.map((step, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: `gbb-scroll-story-step ${index === activeStep ? 'is-active' : ''}`,
        "data-step-index": index,
        ref: el => stepRefs.current[index] = el,
        onClick: () => handleStepClick(index),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "gbb-scroll-progress-line",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "gbb-scroll-progress-fill"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "gbb-scroll-story-text",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RichTextEl, {
            tagName: "h3",
            className: "gbb-scroll-story-title",
            value: step.title,
            onChange: val => updateStepAttr(index, 'title', val),
            placeholder: "Step Title",
            allowedFormats: ['core/bold', 'core/italic', 'core/link']
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RichTextEl, {
            tagName: "div",
            className: "gbb-scroll-story-desc",
            value: step.description,
            onChange: val => updateStepAttr(index, 'description', val),
            placeholder: "Step Description...",
            allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/list']
          })]
        })]
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gbb-scroll-story-media-sticky",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "gbb-scroll-story-media-wrapper",
        children: [mediaType === 'image' && (activeMedia ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: activeMedia,
          alt: `Step ${activeStep + 1}`,
          className: "gbb-scroll-story-image fade-in"
        }, activeMedia) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "gbb-scroll-story-placeholder",
          children: isBackend ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            dangerouslySetInnerHTML: {
              __html: _utils_icons__WEBPACK_IMPORTED_MODULE_1__.imageIcon
            }
          }) : null
        })), mediaType === 'lottie' && (activeLottie ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "gbb-scroll-story-lottie fade-in",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("lottie-player", {
            src: activeLottie,
            background: "transparent",
            speed: "1",
            style: {
              width: '100%',
              height: '100%'
            },
            loop: true,
            autoplay: true
          })
        }, activeLottie) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "gbb-scroll-story-placeholder",
          children: isBackend ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: "Lottie Animation"
          }) : null
        }))]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollStory);

/***/ },

/***/ "./src/blocks/scroll-story/Components/Settings/General.js"
/*!****************************************************************!*\
  !*** ./src/blocks/scroll-story/Components/Settings/General.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const General = ({
  attributes,
  setAttributes,
  clientId
}) => {
  const {
    blockId,
    layout,
    steps
  } = attributes;
  const prevClientId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(clientId);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const clientChanged = prevClientId.current !== clientId;
    if (!blockId || clientChanged) {
      const uuid = window.crypto && crypto.randomUUID ? crypto.randomUUID().split('-')[0] : Math.random().toString(36).substring(2, 9);
      setAttributes({
        blockId: `gbb-scroll-story-${uuid}`
      });
      prevClientId.current = clientId;
    }
  }, [blockId, clientId, setAttributes]);
  const addStep = () => {
    setAttributes({
      steps: [...steps, {
        title: 'New Step',
        description: 'Description here.',
        mediaType: 'image',
        mediaUrl: '',
        lottieUrl: ''
      }]
    });
  };
  const removeStep = index => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setAttributes({
      steps: newSteps
    });
  };
  const updateStep = (index, key, value) => {
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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: "Layout",
      value: layout,
      options: [{
        label: 'Sticky Right (Content Left)',
        value: 'sticky-right'
      }, {
        label: 'Sticky Left (Content Right)',
        value: 'sticky-left'
      }],
      onChange: val => setAttributes({
        layout: val
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        children: "Steps"
      }), steps.map((step, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          border: '1px solid #ccc',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '4px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          style: {
            margin: '0 0 10px 0',
            fontWeight: 'bold'
          },
          children: ["Step ", index + 1]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
          label: "Media Type",
          value: step.mediaType || 'image',
          options: [{
            label: 'Image URL',
            value: 'image'
          }, {
            label: 'Lottie URL',
            value: 'lottie'
          }],
          onChange: val => updateStep(index, 'mediaType', val)
        }), step.mediaType === 'lottie' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: "Lottie JSON URL",
          value: step.lottieUrl,
          onChange: val => updateStep(index, 'lottieUrl', val),
          placeholder: "https://assets.../animation.json"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: "Image URL",
          value: step.mediaUrl,
          onChange: val => updateStep(index, 'mediaUrl', val),
          placeholder: "https://example.com/image.jpg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          isDestructive: true,
          onClick: () => removeStep(index),
          children: "Remove Step"
        })]
      }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        isPrimary: true,
        onClick: addStep,
        style: {
          width: '100%',
          justifyContent: 'center'
        },
        children: "Add Step"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ },

/***/ "./src/blocks/scroll-story/Components/Settings/Settings.js"
/*!*****************************************************************!*\
  !*** ./src/blocks/scroll-story/Components/Settings/Settings.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./General */ "./src/blocks/scroll-story/Components/Settings/General.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style */ "./src/blocks/scroll-story/Components/Settings/Style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Settings = ({
  attributes,
  setAttributes,
  clientId
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "General Settings",
      initialOpen: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_General__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes,
        setAttributes,
        clientId
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: "Style Settings",
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes,
        setAttributes
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ },

/***/ "./src/blocks/scroll-story/Components/Settings/Style.js"
/*!**************************************************************!*\
  !*** ./src/blocks/scroll-story/Components/Settings/Style.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Style = ({
  attributes,
  setAttributes
}) => {
  const {
    progressColor,
    activeTitleColor,
    inactiveTitleColor,
    descColor
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        marginBottom: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        style: {
          marginBottom: '8px'
        },
        children: "Progress Bar Color"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
        value: progressColor,
        onChange: val => setAttributes({
          progressColor: val
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        marginBottom: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        style: {
          marginBottom: '8px'
        },
        children: "Active Title Color"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
        value: activeTitleColor,
        onChange: val => setAttributes({
          activeTitleColor: val
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        marginBottom: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        style: {
          marginBottom: '8px'
        },
        children: "Inactive Title Color"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
        value: inactiveTitleColor,
        onChange: val => setAttributes({
          inactiveTitleColor: val
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        marginBottom: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        style: {
          marginBottom: '8px'
        },
        children: "Description Color"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
        value: descColor,
        onChange: val => setAttributes({
          descColor: val
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/scroll-story/index.js"
/*!******************************************!*\
  !*** ./src/blocks/scroll-story/index.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/scroll-story/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/scroll-story/editor.scss");
/* harmony import */ var _Components_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Edit */ "./src/blocks/scroll-story/Components/Edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/scroll-story/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _Components_Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => null
});

/***/ },

/***/ "./src/blocks/scroll-story/utils/icons.js"
/*!************************************************!*\
  !*** ./src/blocks/scroll-story/utils/icons.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageIcon: () => (/* binding */ imageIcon)
/* harmony export */ });
const imageIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';

/***/ },

/***/ "./src/blocks/scroll-story/editor.scss"
/*!*********************************************!*\
  !*** ./src/blocks/scroll-story/editor.scss ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "./src/blocks/scroll-story/block.json"
/*!********************************************!*\
  !*** ./src/blocks/scroll-story/block.json ***!
  \********************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"guten-builder-blocks/scroll-story","version":"1.0.0","title":"Scroll Story","description":"Showcase features or timelines with a beautiful scrolling sticky layout.","category":"guten-builder","icon":"align-pull-left","keywords":["scroll","story","sticky","timeline","features"],"attributes":{"blockId":{"type":"string","default":""},"layout":{"type":"string","default":"sticky-right"},"steps":{"type":"array","default":[{"title":"Welcome to our story","description":"This is the first step. Scroll down to see the magic happen.","mediaType":"image","mediaUrl":"","lottieUrl":""},{"title":"Second Step","description":"As you scroll, the content changes and progress updates automatically.","mediaType":"image","mediaUrl":"","lottieUrl":""},{"title":"Final Step","description":"You can add Lottie animations or images to each step.","mediaType":"image","mediaUrl":"","lottieUrl":""}]},"progressColor":{"type":"string","default":"#3b82f6"},"activeTitleColor":{"type":"string","default":"#1e293b"},"inactiveTitleColor":{"type":"string","default":"#94a3b8"},"descColor":{"type":"string","default":"#475569"}},"supports":{"html":false,"anchor":true,"spacing":{"margin":true,"padding":true}},"textdomain":"guten-builder-blocks","editorScript":"file:./index.js","style":"file:./style-index.css","editorStyle":"file:./index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"blocks/scroll-story/index": 0,
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/scroll-story/style-view"], () => (__webpack_require__("./src/blocks/scroll-story/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map