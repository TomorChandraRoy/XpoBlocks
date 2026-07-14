/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/marquee/Components/Backend/Edit.js"
/*!*******************************************************!*\
  !*** ./src/blocks/marquee/Components/Backend/Edit.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings/Settings */ "./src/blocks/marquee/Components/Backend/Settings/Settings.js");
/* harmony import */ var _Common_Marquee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Marquee */ "./src/blocks/marquee/Components/Common/Marquee.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Edit = props => {
  const {
    attributes,
    setAttributes
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Settings_Settings__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attributes,
      setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Common_Marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        setAttributes: setAttributes
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ },

/***/ "./src/blocks/marquee/Components/Backend/Settings/General/General.js"
/*!***************************************************************************!*\
  !*** ./src/blocks/marquee/Components/Backend/Settings/General/General.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




// Icons for reordering and deleting

const arrowUpIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
  "aria-hidden": "true",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("polyline", {
    points: "18 15 12 9 6 15"
  })
});
const arrowDownIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
  "aria-hidden": "true",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("polyline", {
    points: "6 9 12 15 18 9"
  })
});
const trashIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
  "aria-hidden": "true",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  })]
});
const General = ({
  attributes,
  setAttributes
}) => {
  const {
    images,
    speed,
    reverseDirection,
    pauseOnHover,
    hoverSlowDown,
    openInNewTab,
    hideOnMobile,
    hideOnDesktop
  } = attributes;
  const moveImage = (index, direction) => {
    if (direction === -1 && index === 0 || direction === 1 && index === images.length - 1) {
      return;
    }
    const newImages = [...images];
    const temp = newImages[index];
    newImages[index] = newImages[index + direction];
    newImages[index + direction] = temp;
    setAttributes({
      images: newImages
    });
  };
  const onSelectImages = selectedMedia => {
    const newImages = selectedMedia.map(media => ({
      url: media.url,
      alt: media.alt,
      link: ''
    }));
    setAttributes({
      images: [...images, ...newImages]
    }); // Unlimited images! No limit!
  };
  const updateLink = (index, val) => {
    const newImages = [...images];
    newImages[index].link = val;
    setAttributes({
      images: newImages
    });
  };
  const deleteImage = index => {
    setAttributes({
      images: images.filter((_, i) => i !== index)
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('🖼️ Gallery & Links', 'guten-builder-blocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          style: {
            color: '#ef4444',
            fontSize: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You do not have permission to upload media.', 'guten-builder-blocks')
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
          multiple: true,
          onSelect: onSelectImages,
          allowedTypes: ['image'],
          render: ({
            open
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "primary",
            onClick: open,
            style: {
              width: '100%',
              justifyContent: 'center',
              marginBottom: '15px'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('+ Add Images', 'guten-builder-blocks')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open links in New Tab', 'guten-builder-blocks'),
        checked: openInNewTab,
        onChange: val => setAttributes({
          openInNewTab: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {}), images.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        },
        children: images.map((img, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            background: '#f8fafc',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #e2e8f0'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              style: {
                width: '40px',
                height: '40px',
                background: '#fff',
                borderRadius: '4px',
                border: '1px solid #cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: img.url,
                style: {
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                },
                alt: img.alt
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              style: {
                display: 'flex',
                gap: '4px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isSmall: true,
                style: {
                  padding: '0 4px'
                },
                icon: arrowUpIcon,
                onClick: () => moveImage(i, -1),
                disabled: i === 0
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isSmall: true,
                style: {
                  padding: '0 4px'
                },
                icon: arrowDownIcon,
                onClick: () => moveImage(i, 1),
                disabled: i === images.length - 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                isSmall: true,
                isDestructive: true,
                style: {
                  padding: '0 4px'
                },
                icon: trashIcon,
                onClick: () => deleteImage(i)
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Destination Link', 'guten-builder-blocks'),
            placeholder: "https://...",
            value: img.link,
            onChange: val => updateLink(i, val),
            __nextHasNoMarginBottom: true
          })]
        }, i))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('⚙️ Movement & Engine', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Base Speed (s)', 'guten-builder-blocks'),
        value: speed,
        onChange: val => setAttributes({
          speed: val
        }),
        min: 1,
        max: 200,
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Lower number means faster loop duration.', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reverse Direction', 'guten-builder-blocks'),
        checked: reverseDirection,
        onChange: val => setAttributes({
          reverseDirection: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pause on Hover / Tap', 'guten-builder-blocks'),
        checked: pauseOnHover,
        onChange: val => {
          setAttributes({
            pauseOnHover: val
          });
          if (val) {
            setAttributes({
              hoverSlowDown: false
            });
          }
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Completely stops the track when cursor is over it.', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slow Down on Hover', 'guten-builder-blocks'),
        checked: hoverSlowDown,
        onChange: val => {
          setAttributes({
            hoverSlowDown: val
          });
          if (val) {
            setAttributes({
              pauseOnHover: false
            });
          }
        },
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reduces velocity to 30% for a cinematic inspection feel.', 'guten-builder-blocks')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('📱 Visibility Settings', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on Mobile', 'guten-builder-blocks'),
        checked: hideOnMobile,
        onChange: val => setAttributes({
          hideOnMobile: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hide on Desktop', 'guten-builder-blocks'),
        checked: hideOnDesktop,
        onChange: val => setAttributes({
          hideOnDesktop: val
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ },

/***/ "./src/blocks/marquee/Components/Backend/Settings/Settings.js"
/*!********************************************************************!*\
  !*** ./src/blocks/marquee/Components/Backend/Settings/Settings.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/options */ "./src/blocks/marquee/utils/options.js");
/* harmony import */ var _General_General__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./General/General */ "./src/blocks/marquee/Components/Backend/Settings/General/General.js");
/* harmony import */ var _Style_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style/Style */ "./src/blocks/marquee/Components/Backend/Settings/Style/Style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const Settings = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
      className: "guten-builder-blocks-tab-panel wp-block-guten-builder-blocks-marquee",
      activeClass: "guten-builder-blocks-active-tab",
      tabs: _utils_options__WEBPACK_IMPORTED_MODULE_2__.generalStyleTabs,
      children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: ['general' === tab.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_General_General__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        }), 'style' === tab.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Style_Style__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ },

/***/ "./src/blocks/marquee/Components/Backend/Settings/Style/Style.js"
/*!***********************************************************************!*\
  !*** ./src/blocks/marquee/Components/Backend/Settings/Style/Style.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Style = ({
  attributes,
  setAttributes
}) => {
  const {
    itemHeight,
    edgeFade,
    liftEffect,
    siblingBlur,
    siblingBlurIntensity,
    showProgressRail,
    progressRailPosition,
    showInteractionIndicator,
    highlightActiveCenter,
    showFrame,
    frameBg,
    frameRadius
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('🎨 Visual Styling', 'guten-builder-blocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Logo Height (Desktop)', 'guten-builder-blocks'),
        value: itemHeight,
        onChange: val => setAttributes({
          itemHeight: val
        }),
        min: 30,
        max: 300
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Edge Fade Effect', 'guten-builder-blocks'),
        checked: edgeFade,
        onChange: val => setAttributes({
          edgeFade: val
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('✨ Smart Addons', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover Lift Effect', 'guten-builder-blocks'),
        checked: liftEffect,
        onChange: val => setAttributes({
          liftEffect: val
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Elevates the hovered logo organically.', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sibling Focus Blur', 'guten-builder-blocks'),
        checked: siblingBlur,
        onChange: val => setAttributes({
          siblingBlur: val
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blurs all other logos when one is hovered.', 'guten-builder-blocks')
      }), siblingBlur && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blur Intensity (px)', 'guten-builder-blocks'),
        value: siblingBlurIntensity,
        onChange: val => setAttributes({
          siblingBlurIntensity: val
        }),
        min: 1,
        max: 10
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Segmented Progress Rail', 'guten-builder-blocks'),
        checked: showProgressRail,
        onChange: val => setAttributes({
          showProgressRail: val
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Displays a tracker based on original items.', 'guten-builder-blocks')
      }), showProgressRail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rail Position', 'guten-builder-blocks'),
        value: progressRailPosition,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'guten-builder-blocks'),
          value: 'right'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom', 'guten-builder-blocks'),
          value: 'bottom'
        }],
        onChange: val => setAttributes({
          progressRailPosition: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pause / Slow State Indicator', 'guten-builder-blocks'),
        checked: showInteractionIndicator,
        onChange: val => setAttributes({
          showInteractionIndicator: val
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shows a state badge when marquee is paused or slowed.', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Active Center Highlight', 'guten-builder-blocks'),
        checked: highlightActiveCenter,
        onChange: val => setAttributes({
          highlightActiveCenter: val
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scales and highlights the item closest to the center focus area.', 'guten-builder-blocks')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('🖼️ Card Frames', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable Card Frame', 'guten-builder-blocks'),
        checked: showFrame,
        onChange: val => setAttributes({
          showFrame: val
        })
      }), showFrame && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        style: {
          padding: '10px',
          background: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          marginBottom: '15px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          style: {
            fontWeight: 'bold',
            marginTop: '0',
            marginBottom: '5px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Frame Background', 'guten-builder-blocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: frameBg,
          onChange: val => setAttributes({
            frameBg: val
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Corner Radius', 'guten-builder-blocks'),
          value: frameRadius,
          onChange: val => setAttributes({
            frameRadius: val
          }),
          min: 0,
          max: 50
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/marquee/Components/Common/Marquee.jsx"
/*!**********************************************************!*\
  !*** ./src/blocks/marquee/Components/Common/Marquee.jsx ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const Marquee = ({
  attributes,
  setAttributes
}) => {
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
  const marqueeRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  let repeatedImages = [...images];
  if (images.length > 0) {
    while (repeatedImages.length < 30) {
      repeatedImages = [...repeatedImages, ...images];
    }
  }
  let calculatedSpeed = speed * (repeatedImages.length / 5);
  if (repeatedImages.length === 0) {
    calculatedSpeed = speed;
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!marqueeRef.current || repeatedImages.length === 0) {
      return;
    }
    const groups = marqueeRef.current.querySelectorAll('.kh-mq-marquee-group');
    let durationMs = 1000 * calculatedSpeed;
    if (isNaN(durationMs) || durationMs <= 0) {
      durationMs = 30000;
    }
    const direction = reverseDirection ? 'reverse' : 'normal';
    groups.forEach(group => {
      if (group._kh_mq_anim) {
        group._kh_mq_anim.cancel();
      }
      group._kh_mq_anim = group.animate([{
        transform: 'translateX(0)'
      }, {
        transform: 'translateX(-100%)'
      }], {
        duration: durationMs,
        iterations: Infinity,
        direction: direction
      });
      if (pauseOnHover && marqueeRef.current.classList.contains('is-paused-by-js')) {
        group._kh_mq_anim.pause();
      } else if (hoverSlowDown && marqueeRef.current.classList.contains('is-slow-by-js')) {
        group._kh_mq_anim.playbackRate = 0.3;
      }
    });
    marqueeRef.current.classList.add('js-anim-active');
    return () => {
      groups.forEach(group => {
        if (group._kh_mq_anim) {
          group._kh_mq_anim.cancel();
        }
      });
    };
  }, [calculatedSpeed, reverseDirection, repeatedImages.length, hoverSlowDown, pauseOnHover]);
  const containerClasses = ['kh-mq-marquee-container', 'kh-mq-editor-preview', align === 'full' ? 'alignfull' : '', pauseOnHover ? 'is-pause-hover' : '', hoverSlowDown ? 'is-slow-hover' : '', liftEffect ? 'has-lift-effect' : '', reverseDirection ? 'is-reversed' : '', showFrame ? 'has-frames' : '', showProgressRail ? 'has-progress-rail' : '', showProgressRail ? `rail-pos-${progressRailPosition}` : '', showInteractionIndicator ? 'has-interaction-indicator' : '', highlightActiveCenter ? 'has-active-center-highlight' : '', siblingBlur ? 'has-sibling-blur' : ''].filter(Boolean).join(' ');
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
    if (!marqueeRef.current) {
      return;
    }
    const groups = marqueeRef.current.querySelectorAll('.kh-mq-marquee-group');
    if (pauseOnHover) {
      marqueeRef.current.classList.add('is-paused-by-js');
      if (marqueeRef.current.classList.contains('js-anim-active')) {
        groups.forEach(group => {
          if (group._kh_mq_anim) {
            group._kh_mq_anim.pause();
          }
        });
      }
    } else if (hoverSlowDown) {
      marqueeRef.current.classList.add('is-slow-by-js');
      if (marqueeRef.current.classList.contains('js-anim-active')) {
        groups.forEach(group => {
          if (group._kh_mq_anim) {
            group._kh_mq_anim.playbackRate = 0.3;
          }
        });
      }
    }
  };
  const onPointerLeave = () => {
    if (!marqueeRef.current) {
      return;
    }
    const groups = marqueeRef.current.querySelectorAll('.kh-mq-marquee-group');
    if (pauseOnHover) {
      marqueeRef.current.classList.remove('is-paused-by-js');
      if (marqueeRef.current.classList.contains('js-anim-active')) {
        groups.forEach(group => {
          if (group._kh_mq_anim) {
            group._kh_mq_anim.play();
          }
        });
      }
    } else if (hoverSlowDown) {
      marqueeRef.current.classList.remove('is-slow-by-js');
      if (marqueeRef.current.classList.contains('js-anim-active')) {
        groups.forEach(group => {
          if (group._kh_mq_anim) {
            group._kh_mq_anim.playbackRate = 1.0;
          }
        });
      }
    }
  };
  const onSelectImages = selectedMedia => {
    const newImages = selectedMedia.map(media => ({
      url: media.url,
      alt: media.alt,
      link: ''
    }));
    setAttributes({
      images: [...images, ...newImages]
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ref: marqueeRef,
    className: containerClasses,
    style: inlineStyles,
    onPointerEnter: onPointerEnter,
    onPointerLeave: onPointerLeave,
    children: [showInteractionIndicator && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "kh-mq-interaction-indicator",
      "data-state": "running",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "kh-mq-indicator-label kh-mq-indicator-running",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('RUNNING', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "kh-mq-indicator-label kh-mq-indicator-paused",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('PAUSED', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "kh-mq-indicator-label kh-mq-indicator-slow",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SLOW', 'guten-builder-blocks')
      })]
    }), showProgressRail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "kh-mq-progress-rail",
      children: images.map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: `kh-mq-progress-segment ${i === 0 ? 'is-active' : ''}`
      }, i))
    }), highlightActiveCenter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "kh-mq-center-focus-zone",
      "aria-hidden": "true"
    }), images.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        background: '#f8fafc',
        border: '2px dashed #cbd5e1',
        borderRadius: '16px',
        padding: '60px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: {
          background: '#e2e8f0',
          borderRadius: '50%',
          padding: '16px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
          width: "32",
          height: "32",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            d: "M4 12C4 16.4183 7.58172 20 12 20C14.7356 20 17.1506 18.6258 18.6015 16.5M20 12C20 7.58172 16.4183 4 12 4C9.26442 4 6.84936 5.37424 5.39853 7.5",
            stroke: "#475569",
            strokeWidth: "2",
            strokeLinecap: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            d: "M15 17L19 17L19 21",
            stroke: "#475569",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
            d: "M9 7L5 7L5 3",
            stroke: "#475569",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
        style: {
          margin: '0 0 8px 0',
          fontSize: '20px',
          fontWeight: '600',
          color: '#0f172a'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Kinetic Marquee', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        style: {
          margin: '0 0 24px 0',
          fontSize: '14px',
          color: '#64748b',
          maxWidth: '400px',
          lineHeight: '1.5'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add images from the right sidebar or click the button below to start building your infinite scrolling gallery.', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, {
        fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          style: {
            color: '#ef4444',
            fontSize: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You do not have permission to upload media.', 'guten-builder-blocks')
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
          multiple: true,
          onSelect: onSelectImages,
          allowedTypes: ['image'],
          render: ({
            open
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "primary",
            onClick: open,
            style: {
              padding: '8px 24px',
              height: 'auto',
              borderRadius: '8px',
              fontWeight: '600'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Images', 'guten-builder-blocks')
          })
        })
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: `kh-mq-marquee-inner ${edgeFade ? 'has-edge-fade' : ''}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "kh-mq-marquee-track",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "kh-mq-marquee-group",
          children: repeatedImages.map((img, i) => {
            const originalIndex = i % images.length;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "kh-mq-marquee-item",
              "data-kh-mq-origin-index": originalIndex,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "kh-mq-marquee-item-inner",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: showFrame ? 'kh-mq-marquee-frame shadow-soft' : '',
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: img.url,
                    alt: img.alt || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Logo', 'guten-builder-blocks')
                  })
                })
              })
            }, `g1-${i}`);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "kh-mq-marquee-group",
          "aria-hidden": "true",
          children: repeatedImages.map((img, i) => {
            const originalIndex = i % images.length;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "kh-mq-marquee-item",
              "data-kh-mq-origin-index": originalIndex,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "kh-mq-marquee-item-inner",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: showFrame ? 'kh-mq-marquee-frame shadow-soft' : '',
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: img.url,
                    alt: img.alt || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Logo', 'guten-builder-blocks')
                  })
                })
              })
            }, `g2-${i}`);
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marquee);

/***/ },

/***/ "./src/blocks/marquee/index.js"
/*!*************************************!*\
  !*** ./src/blocks/marquee/index.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/marquee/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/marquee/editor.scss");
/* harmony import */ var _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Backend/Edit */ "./src/blocks/marquee/Components/Backend/Edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/marquee/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => null // Dynamic block
});

/***/ },

/***/ "./src/blocks/marquee/utils/options.js"
/*!*********************************************!*\
  !*** ./src/blocks/marquee/utils/options.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generalStyleTabs: () => (/* binding */ generalStyleTabs)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const generalStyleTabs = [{
  name: 'general',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'guten-builder-blocks')
}, {
  name: 'style',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'guten-builder-blocks')
}];

/***/ },

/***/ "./src/blocks/marquee/editor.scss"
/*!****************************************!*\
  !*** ./src/blocks/marquee/editor.scss ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/marquee/style.scss"
/*!***************************************!*\
  !*** ./src/blocks/marquee/style.scss ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./src/blocks/marquee/block.json"
/*!***************************************!*\
  !*** ./src/blocks/marquee/block.json ***!
  \***************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"guten-builder-blocks/marquee","version":"1.0.2","title":"Guten Marquee","category":"guten-builder","description":"Infinite scrolling marquee optimized for logos and images with hardware-accelerated physics.","keywords":["marquee","scrolling text","ticker","moving text","loop text"],"attributes":{"images":{"type":"array","default":[]},"speed":{"type":"number","default":30},"itemHeight":{"type":"number","default":120},"pauseOnHover":{"type":"boolean","default":true},"hoverSlowDown":{"type":"boolean","default":false},"edgeFade":{"type":"boolean","default":true},"openInNewTab":{"type":"boolean","default":false},"liftEffect":{"type":"boolean","default":true},"reverseDirection":{"type":"boolean","default":false},"showProgressRail":{"type":"boolean","default":false},"progressRailPosition":{"type":"string","default":"right"},"showInteractionIndicator":{"type":"boolean","default":false},"highlightActiveCenter":{"type":"boolean","default":false},"siblingBlur":{"type":"boolean","default":false},"siblingBlurIntensity":{"type":"number","default":3},"showFrame":{"type":"boolean","default":true},"frameBg":{"type":"string","default":"#ffffff"},"frameRadius":{"type":"number","default":12},"align":{"type":"string","default":"full"}},"supports":{"align":["full","wide"],"spacing":{"margin":true,"padding":false,"blockGap":false},"color":{"background":true,"text":true,"gradients":true},"__experimentalBorder":{"color":true,"radius":true,"width":true,"style":true}},"textdomain":"guten-builder-blocks","editorScript":"file:./index.js","viewScript":"file:./view.js","style":"file:./style-index.css","editorStyle":"file:./index.css","render":"file:./render.php"}');

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
/******/ 			"blocks/marquee/index": 0,
/******/ 			"blocks/marquee/style-index": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/marquee/style-index"], () => (__webpack_require__("./src/blocks/marquee/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map