/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../tr-tools/Components/BackgroundControl/BackgroundControl.js"
/*!*********************************************************************!*\
  !*** ../tr-tools/Components/BackgroundControl/BackgroundControl.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_BACKGROUND: () => (/* binding */ DEFAULT_BACKGROUND),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getBackgroundCss: () => (/* binding */ getBackgroundCss)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BackgroundControl_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundControl.scss */ "../tr-tools/Components/BackgroundControl/BackgroundControl.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const DEFAULT_BACKGROUND = {
  type: "none",
  color: "#ffffff",
  gradientType: "linear",
  color1: "#1e69ff",
  color2: "#9c27b0",
  angle: 135
};

/**
 * Helper function to generate CSS background value from background attribute object
 */
const getBackgroundCss = bg => {
  if (!bg || typeof bg !== "object") return "";
  const type = bg.type || "none";
  if (type === "none") return "transparent";
  if (type === "solid") return bg.color || "#ffffff";
  if (type === "gradient") {
    const gType = bg.gradientType || "linear";
    let stops = Array.isArray(bg.stops) && bg.stops.length > 0 ? bg.stops : null;
    if (!stops) {
      stops = [{
        color: bg.color1 || "#1e69ff",
        location: 0
      }];
      if (bg.color3) {
        stops.push({
          color: bg.color3,
          location: 50
        });
      }
      stops.push({
        color: bg.color2 || "#9c27b0",
        location: 100
      });
    }
    const stopsStr = stops.map(s => `${s.color} ${s.location !== undefined ? s.location : 0}%`).join(", ");
    if (gType === "radial") {
      return `radial-gradient(circle, ${stopsStr})`;
    }
    const angle = bg.angle !== undefined ? bg.angle : 135;
    return `linear-gradient(${angle}deg, ${stopsStr})`;
  }
  return "";
};
const BackgroundControl = ({
  className = "",
  label = "BACKGROUND",
  value,
  onChange,
  defaultBackground,
  defaultValue
}) => {
  const fallback = defaultBackground || defaultValue || DEFAULT_BACKGROUND;
  const currentBg = {
    ...DEFAULT_BACKGROUND,
    ...fallback,
    ...(typeof value === "object" && value !== null ? value : {})
  };

  // Get normalized stops array
  const stops = Array.isArray(currentBg.stops) && currentBg.stops.length > 0 ? currentBg.stops : [{
    color: currentBg.color1 || "#1e69ff",
    location: 0
  }, ...(currentBg.color3 ? [{
    color: currentBg.color3,
    location: 50
  }] : []), {
    color: currentBg.color2 || "#9c27b0",
    location: 100
  }];
  const dialRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const animFrameRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [plusPos, setPlusPos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(50);
  const [isPlusOpen, setIsPlusOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleBarMouseMove = e => {
    if (isPlusOpen) return; // Freeze + button position while picking color
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width > 0) {
      const clientX = e.clientX;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      animFrameRef.current = requestAnimationFrame(() => {
        const mouseX = clientX - rect.left;
        let percent = mouseX / rect.width * 100;
        percent = Math.max(5, Math.min(95, percent));
        setPlusPos(percent);
      });
    }
  };
  const updateBg = newFields => {
    if (typeof onChange === "function") {
      onChange({
        ...currentBg,
        ...newFields
      });
    }
  };
  const updateStops = newStops => {
    const updatedFields = {
      stops: newStops,
      color1: newStops[0]?.color || "#1e69ff",
      color2: newStops[newStops.length - 1]?.color || "#9c27b0"
    };
    updateBg(updatedFields);
  };
  const handleStopColorChange = (index, newColor) => {
    const newStops = stops.map((s, idx) => idx === index ? {
      ...s,
      color: newColor
    } : s);
    updateStops(newStops);
  };
  const handleAddStop = () => {
    // Pick preset colors for new stops
    const presetColors = ["#00d2ff", "#f59e0b", "#10b981", "#ec4899", "#8b5cf6", "#ef4444"];
    const newColor = presetColors[(stops.length - 2) % presetColors.length];
    const newStop = {
      color: newColor,
      location: plusPos
    };
    const newStops = [...stops, newStop].sort((a, b) => a.location - b.location);
    updateStops(newStops);
  };
  const handleRemoveStop = index => {
    if (stops.length <= 2) return;
    const newStops = stops.filter((_, idx) => idx !== index);
    const step = 100 / (newStops.length - 1);
    const evenlySpaced = newStops.map((s, i) => ({
      ...s,
      location: Math.round(i * step)
    }));
    updateStops(evenlySpaced);
  };
  const isChanged = Boolean(fallback && Object.keys(fallback).some(key => currentBg[key] !== undefined && String(currentBg[key]).toLowerCase() !== String(fallback[key]).toLowerCase()));
  const handleReset = () => {
    if (typeof onChange === "function") {
      onChange(fallback);
    }
  };

  // Handle Angle Dial pointer drag
  const handleDialPointerDown = e => {
    e.preventDefault();
    const updateAngleFromEvent = event => {
      if (!dialRef.current) return;
      const rect = dialRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const clientX = event.clientX ?? (event.touches && event.touches[0] ? event.touches[0].clientX : 0);
      const clientY = event.clientY ?? (event.touches && event.touches[0] ? event.touches[0].clientY : 0);
      const rad = Math.atan2(clientY - centerY, clientX - centerX);
      let deg = Math.round(rad * (180 / Math.PI)) + 90;
      if (deg < 0) deg += 360;
      updateBg({
        angle: deg
      });
    };
    updateAngleFromEvent(e);
    const onMove = moveEvent => updateAngleFromEvent(moveEvent);
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };
  const gradientPreviewCss = getBackgroundCss({
    ...currentBg,
    type: "gradient",
    stops
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `tr-bg-control ${className}`.trim(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "tr-bg-control__header",
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "tr-bg-control__label",
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "tr-bg-control__actions",
        children: [isChanged && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          className: "tr-bg-control__reset-btn",
          title: "Reset background",
          onClick: handleReset,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
              d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
              d: "M3 3v5h5"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "tr-bg-control__types",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            className: `tr-bg-control__type-btn ${currentBg.type === "none" ? "active" : ""}`,
            title: "None",
            onClick: () => updateBg({
              type: "none"
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "tr-bg-control__icon-check"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            className: `tr-bg-control__type-btn ${currentBg.type === "solid" ? "active" : ""}`,
            title: "Solid",
            onClick: () => updateBg({
              type: "solid"
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "tr-bg-control__icon-solid",
              style: {
                backgroundColor: currentBg.color || "#888888"
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            className: `tr-bg-control__type-btn ${currentBg.type === "gradient" ? "active" : ""}`,
            title: "Gradient",
            onClick: () => updateBg({
              type: "gradient"
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              className: "tr-bg-control__icon-gradient",
              style: {
                background: gradientPreviewCss
              }
            })
          })]
        })]
      })]
    }), currentBg.type === "solid" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "tr-bg-control__solid-wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "tr-bg-control__row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          className: "tr-bg-control__sublabel",
          children: "Selected Color Bg :"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
          renderToggle: ({
            isOpen,
            onToggle
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            onClick: onToggle,
            "aria-expanded": isOpen,
            className: "tr-bg-control__color-swatch-btn",
            style: {
              backgroundColor: currentBg.color || "#ffffff"
            }
          }),
          renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "tr-bg-control__popover",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
              color: currentBg.color,
              onChange: c => updateBg({
                color: c
              }),
              enableAlpha: true
            })
          })
        })]
      })
    }), currentBg.type === "gradient" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "tr-bg-control__gradient-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "tr-bg-control__bar",
        style: {
          background: gradientPreviewCss
        },
        onMouseMove: handleBarMouseMove,
        children: [stops.map((stop, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
          renderToggle: ({
            isOpen,
            onToggle
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            onClick: onToggle,
            "aria-expanded": isOpen,
            className: "tr-bg-control__stop-btn",
            title: `Color Stop ${idx + 1}`,
            style: {
              backgroundColor: stop.color,
              left: `${stop.location}%`
            }
          }),
          renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "tr-bg-control__popover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
              color: stop.color,
              onChange: c => handleStopColorChange(idx, c),
              enableAlpha: true
            }), stops.length > 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              type: "button",
              className: "tr-bg-control__remove-stop-btn",
              onClick: () => handleRemoveStop(idx),
              children: "Remove Stop"
            })]
          })
        }, idx)), (() => {
          const isNearExistingStop = stops.some(s => Math.abs(plusPos - s.location) < 8);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
            onToggle: nextState => setIsPlusOpen(nextState),
            renderToggle: ({
              isOpen,
              onToggle
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              type: "button",
              onClick: e => {
                if (!isOpen) {
                  handleAddStop();
                }
                onToggle(e);
              },
              "aria-expanded": isOpen,
              className: "tr-bg-control__stop-plus",
              title: "Add Color Stop",
              style: {
                left: `${plusPos}%`,
                opacity: isNearExistingStop && !isOpen ? 0 : undefined,
                pointerEvents: isNearExistingStop && !isOpen ? 'none' : undefined
              },
              children: "+"
            }),
            renderContent: () => {
              const targetIndex = stops.length > 2 ? stops.length - 2 : 1;
              const activeStop = stops[targetIndex] || stops[stops.length - 1];
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "tr-bg-control__popover",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
                  color: activeStop.color,
                  onChange: c => handleStopColorChange(targetIndex, c),
                  enableAlpha: true
                }), stops.length > 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  type: "button",
                  className: "tr-bg-control__remove-stop-btn",
                  onClick: () => handleRemoveStop(targetIndex),
                  children: "Remove Stop"
                })]
              });
            }
          });
        })()]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "tr-bg-control__controls-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "tr-bg-control__col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "tr-bg-control__field-label",
            children: "TYPE"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
            className: "tr-bg-control__select",
            value: currentBg.gradientType || "linear",
            onChange: e => updateBg({
              gradientType: e.target.value
            }),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
              value: "linear",
              children: "Linear"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
              value: "radial",
              children: "Radial"
            })]
          })]
        }), currentBg.gradientType !== "radial" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "tr-bg-control__col",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "tr-bg-control__field-label",
            children: "ANGLE"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "tr-bg-control__angle-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "tr-bg-control__angle-input-box",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                type: "number",
                className: "tr-bg-control__angle-input",
                value: currentBg.angle ?? 135,
                min: 0,
                max: 360,
                onChange: e => {
                  const val = parseInt(e.target.value, 10);
                  updateBg({
                    angle: isNaN(val) ? 0 : val
                  });
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                className: "tr-bg-control__degree-symbol",
                children: "\xB0"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              ref: dialRef,
              className: "tr-bg-control__angle-dial",
              onPointerDown: handleDialPointerDown,
              title: "Drag to change angle",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "tr-bg-control__dial-pointer",
                style: {
                  transform: `rotate(${currentBg.angle ?? 135}deg)`
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "tr-bg-control__dial-dot"
                })
              })
            })]
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundControl);

/***/ },

/***/ "../tr-tools/Components/BorderControl/BorderControl.js"
/*!*************************************************************!*\
  !*** ../tr-tools/Components/BorderControl/BorderControl.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_BORDER: () => (/* binding */ DEFAULT_BORDER),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ColorControl/ColorControl */ "../tr-tools/Components/ColorControl/ColorControl.js");
/* harmony import */ var _BorderControl_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BorderControl.scss */ "../tr-tools/Components/BorderControl/BorderControl.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const DEFAULT_BORDER = {
  width: '',
  style: 'solid',
  color: '',
  side: 'all'
};
const BorderControl = ({
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'guten-builder-blocks'),
  value,
  onChange,
  defaultBorder
}) => {
  const currentVal = {
    ...DEFAULT_BORDER,
    ...defaultBorder,
    ...value
  };
  const updateField = (field, val) => {
    onChange({
      ...currentVal,
      [field]: val
    });
  };
  const resetVal = {
    ...DEFAULT_BORDER,
    ...defaultBorder
  };
  const isChanged = value && typeof value === 'object' && Object.keys(value).some(key => value[key] !== resetVal[key]);
  const handleReset = () => {
    if (onChange) {
      onChange(undefined);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "tr-border-control-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
        className: "tr-border-control-dropdown",
        contentClassName: "tr-border-control-popover",
        popoverProps: {
          placement: 'bottom-end'
        },
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          icon: "edit",
          variant: "secondary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "tr-border-control-toggle"
        }),
        renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "tr-border-control-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "tr-border-control-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tr-border-control-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Width:', 'guten-builder-blocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
              className: "tr-border-width-input tr-custom-unit-control",
              value: currentVal.width,
              onChange: val => updateField('width', val),
              units: [{
                value: 'px',
                label: 'PX'
              }]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "tr-border-control-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tr-border-control-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style:', 'guten-builder-blocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
              className: "tr-border-style-select",
              value: currentVal.style,
              options: [{
                label: 'Solid',
                value: 'solid'
              }, {
                label: 'Dashed',
                value: 'dashed'
              }, {
                label: 'Dotted',
                value: 'dotted'
              }, {
                label: 'Double',
                value: 'double'
              }, {
                label: 'None',
                value: 'none'
              }],
              onChange: val => updateField('style', val)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color:', 'guten-builder-blocks'),
            value: currentVal.color,
            onChange: val => updateField('color', val),
            defaultColor: ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "tr-border-control-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tr-border-control-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sides:', 'guten-builder-blocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
              className: "tr-border-side-select",
              value: currentVal.side,
              options: [{
                label: 'All Sides',
                value: 'all'
              }, {
                label: 'Top',
                value: 'top'
              }, {
                label: 'Right',
                value: 'right'
              }, {
                label: 'Bottom',
                value: 'bottom'
              }, {
                label: 'Left',
                value: 'left'
              }, {
                label: 'Top Right',
                value: 'top-right'
              }, {
                label: 'Top Bottom',
                value: 'top-bottom'
              }, {
                label: 'Top Left',
                value: 'top-left'
              }, {
                label: 'Top Right Bottom',
                value: 'top-right-bottom'
              }, {
                label: 'Top Right Left',
                value: 'top-right-left'
              }, {
                label: 'Top Bottom Left',
                value: 'top-bottom-left'
              }, {
                label: 'Right Bottom',
                value: 'right-bottom'
              }, {
                label: 'Right Left',
                value: 'right-left'
              }, {
                label: 'Right Bottom Left',
                value: 'right-bottom-left'
              }, {
                label: 'Bottom Left',
                value: 'bottom-left'
              }],
              onChange: val => updateField('side', val)
            })]
          })]
        })
      }), isChanged && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        icon: "image-rotate",
        className: "bPlResetVal",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reset', 'guten-builder-blocks'),
        onClick: handleReset
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderControl);

/***/ },

/***/ "../tr-tools/Components/ColorControl/ColorControl.js"
/*!***********************************************************!*\
  !*** ../tr-tools/Components/ColorControl/ColorControl.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColorControl_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorControl.scss */ "../tr-tools/Components/ColorControl/ColorControl.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/*
 * @props label: 'Color' (String)
 * @props value: value of color (String)
 * @props enableAlpha: alpha channel enabled (Boolean)
 * @props customColors: array of custom colors (Array)
 * @props defaultColor: default color for reset color (String)
 * @props onChange: (Function)
 * @return color (String)
 */

const DEFAULT_CUSTOM_COLORS = [{
  name: "Orange",
  color: "#f97316"
}, {
  name: "White",
  color: "#ffffff"
}, {
  name: "Lime",
  color: "#a3e635"
}, {
  name: "Dark Charcoal",
  color: "#262626"
}, {
  name: "Gray",
  color: "#737373"
}];
const ColorControl = ({
  label,
  value = "",
  onChange,
  enableAlpha = true,
  customColors = DEFAULT_CUSTOM_COLORS,
  defaultColor = "#475569"
}) => {
  const isChanged = Boolean(value && defaultColor && value.trim().toLowerCase() !== defaultColor.trim().toLowerCase());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "tr-color-control",
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "tr-color-control__label",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "tr-color-control__actions",
      children: [isChanged && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        type: "button",
        className: "tr-color-control__reset-btn",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset to default color", "guten-builder-blocks"),
        onClick: () => onChange(defaultColor),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
            d: "M3 3v5h5"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dropdown, {
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "tr-color-control__btn",
          style: {
            backgroundColor: value || defaultColor
          }
        }),
        renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "tr-color-control__popover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "tr-color-control__picker-canvas",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
              color: value,
              onChange: onChange,
              enableAlpha: enableAlpha,
              defaultValue: defaultColor
            })
          }), customColors && customColors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "tr-color-control__section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "tr-color-control__section-title",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Custom colors", "guten-builder-blocks")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "tr-color-control__swatches",
              children: customColors.map((item, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                type: "button",
                className: `tr-color-control__swatch ${value === item.color ? "active" : ""}`,
                style: {
                  backgroundColor: item.color
                },
                title: item.name || item.color,
                onClick: () => onChange(item.color)
              }, idx))
            })]
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorControl);

/***/ },

/***/ "../tr-tools/Components/Devices/Devices.js"
/*!*************************************************!*\
  !*** ../tr-tools/Components/Devices/Devices.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const DesktopIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "8",
    y1: "21",
    x2: "16",
    y2: "21"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "21"
  })]
});
const TabletIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "4",
    y: "2",
    width: "16",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  })]
});
const MobileIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "5",
    y: "2",
    width: "14",
    height: "20",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "12",
    y1: "18",
    x2: "12.01",
    y2: "18"
  })]
});
const Devices = ({
  device,
  onChange
}) => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleClickOutside = event => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const ActiveIcon = device === 'mobile' ? MobileIcon : device === 'tablet' ? TabletIcon : DesktopIcon;
  const handleSelect = newDevice => {
    onChange(newDevice);
    setIsOpen(false);
  };
  const btnStyle = {
    padding: '4px',
    background: 'transparent',
    border: '1px solid #F62477',
    cursor: 'pointer',
    color: '#F62477',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    borderRadius: '2px'
  };
  const optionStyle = {
    ...btnStyle,
    border: 'none',
    borderBottom: '1px solid #F62477',
    borderRadius: '0',
    width: '100%'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "tr-devices-dropdown",
    ref: containerRef,
    style: {
      position: 'relative'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
      type: "button",
      onClick: () => setIsOpen(!isOpen),
      style: btnStyle,
      title: "Responsive Device",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ActiveIcon, {})
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      style: {
        position: 'absolute',
        top: '100%',
        left: '0',
        marginTop: '4px',
        background: '#fff',
        border: '1px solid #F62477',
        borderRadius: '2px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 9999,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        minWidth: '28px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        type: "button",
        onClick: () => handleSelect('desktop'),
        style: optionStyle,
        title: "Desktop",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DesktopIcon, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        type: "button",
        onClick: () => handleSelect('tablet'),
        style: optionStyle,
        title: "Tablet",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TabletIcon, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        type: "button",
        onClick: () => handleSelect('mobile'),
        style: {
          ...optionStyle,
          borderBottom: 'none'
        },
        title: "Mobile",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MobileIcon, {})
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Devices);

/***/ },

/***/ "../tr-tools/Components/DocsLink/DocsLink.js"
/*!***************************************************!*\
  !*** ../tr-tools/Components/DocsLink/DocsLink.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DocsLink_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocsLink.scss */ "../tr-tools/Components/DocsLink/DocsLink.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ExternalLinkIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  })]
});
const DocsLink = ({
  link,
  text
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "gbb-inspector-docs-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
      children: [text || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Documentation', 'tr-tools'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ExternalLinkIcon, {})]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocsLink);

/***/ },

/***/ "../tr-tools/Components/GradientControl/GradientControl.js"
/*!*****************************************************************!*\
  !*** ../tr-tools/Components/GradientControl/GradientControl.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_GRADIENT: () => (/* binding */ DEFAULT_GRADIENT),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getGradientCss: () => (/* binding */ getGradientCss)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GradientControl_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradientControl.scss */ "../tr-tools/Components/GradientControl/GradientControl.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const DEFAULT_GRADIENT = {
  gradientType: "linear",
  color1: "#1e69ff",
  color2: "#9c27b0",
  angle: 135
};

/**
 * Helper function to generate CSS gradient string from gradient attribute object
 */
const getGradientCss = gradient => {
  if (!gradient || typeof gradient !== "object") return "";
  const gType = gradient.gradientType || "linear";
  let stops = Array.isArray(gradient.stops) && gradient.stops.length > 0 ? gradient.stops : null;
  if (!stops) {
    stops = [{
      color: gradient.color1 || "#1e69ff",
      location: 0
    }];
    if (gradient.color3) {
      stops.push({
        color: gradient.color3,
        location: 50
      });
    }
    stops.push({
      color: gradient.color2 || "#9c27b0",
      location: 100
    });
  }
  const stopsStr = stops.map(s => `${s.color} ${s.location !== undefined ? s.location : 0}%`).join(", ");
  if (gType === "radial") {
    return `radial-gradient(circle, ${stopsStr})`;
  }
  const angle = gradient.angle !== undefined ? gradient.angle : 135;
  return `linear-gradient(${angle}deg, ${stopsStr})`;
};
const GradientControl = ({
  className = "",
  label = "Background",
  value,
  onChange,
  defaultGradient,
  defaultValue
}) => {
  const fallback = defaultGradient || defaultValue || DEFAULT_GRADIENT;
  const currentGradient = {
    ...DEFAULT_GRADIENT,
    ...fallback,
    ...(typeof value === "object" && value !== null ? value : {})
  };

  // Get normalized stops array
  const stops = Array.isArray(currentGradient.stops) && currentGradient.stops.length > 0 ? currentGradient.stops : [{
    color: currentGradient.color1 || "#1e69ff",
    location: 0
  }, ...(currentGradient.color3 ? [{
    color: currentGradient.color3,
    location: 50
  }] : []), {
    color: currentGradient.color2 || "#9c27b0",
    location: 100
  }];
  const dialRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const animFrameRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [plusPos, setPlusPos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(50);
  const [isPlusOpen, setIsPlusOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleBarMouseMove = e => {
    if (isPlusOpen) return; // Freeze + button position while picking color
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width > 0) {
      const clientX = e.clientX;
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      animFrameRef.current = requestAnimationFrame(() => {
        const mouseX = clientX - rect.left;
        let percent = mouseX / rect.width * 100;
        percent = Math.max(5, Math.min(95, percent));
        setPlusPos(percent);
      });
    }
  };
  const updateGradient = newFields => {
    if (typeof onChange === "function") {
      onChange({
        ...currentGradient,
        ...newFields
      });
    }
  };
  const updateStops = newStops => {
    const updatedFields = {
      stops: newStops,
      color1: newStops[0]?.color || "#1e69ff",
      color2: newStops[newStops.length - 1]?.color || "#9c27b0"
    };
    updateGradient(updatedFields);
  };
  const handleStopColorChange = (index, newColor) => {
    const newStops = stops.map((s, idx) => idx === index ? {
      ...s,
      color: newColor
    } : s);
    updateStops(newStops);
  };
  const handleAddStop = () => {
    const presetColors = ["#00d2ff", "#f59e0b", "#10b981", "#ec4899", "#8b5cf6", "#ef4444"];
    const newColor = presetColors[(stops.length - 2) % presetColors.length];
    const newStop = {
      color: newColor,
      location: plusPos
    };
    const newStops = [...stops, newStop].sort((a, b) => a.location - b.location);
    updateStops(newStops);
  };
  const handleRemoveStop = index => {
    if (stops.length <= 2) return;
    const newStops = stops.filter((_, idx) => idx !== index);
    const step = 100 / (newStops.length - 1);
    const evenlySpaced = newStops.map((s, i) => ({
      ...s,
      location: Math.round(i * step)
    }));
    updateStops(evenlySpaced);
  };
  const isChanged = Boolean(fallback && Object.keys(fallback).some(key => currentGradient[key] !== undefined && String(currentGradient[key]).toLowerCase() !== String(fallback[key]).toLowerCase()));
  const handleReset = () => {
    if (typeof onChange === "function") {
      onChange(fallback);
    }
  };

  // Handle Angle Dial pointer drag
  const handleDialPointerDown = e => {
    e.preventDefault();
    const updateAngleFromEvent = event => {
      if (!dialRef.current) return;
      const rect = dialRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const clientX = event.clientX ?? (event.touches && event.touches[0] ? event.touches[0].clientX : 0);
      const clientY = event.clientY ?? (event.touches && event.touches[0] ? event.touches[0].clientY : 0);
      const rad = Math.atan2(clientY - centerY, clientX - centerX);
      let deg = Math.round(rad * (180 / Math.PI)) + 90;
      if (deg < 0) deg += 360;
      updateGradient({
        angle: deg
      });
    };
    updateAngleFromEvent(e);
    const onMove = moveEvent => updateAngleFromEvent(moveEvent);
    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  };
  const gradientPreviewCss = getGradientCss({
    ...currentGradient,
    stops
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: `tr-gradient-control ${className}`.trim(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "tr-gradient-control__header",
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: "tr-gradient-control__label",
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "tr-gradient-control__actions",
        children: [isChanged && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          type: "button",
          className: "tr-gradient-control__reset-btn",
          title: "Reset gradient",
          onClick: handleReset,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
              d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
              d: "M3 3v5h5"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
          renderToggle: ({
            isOpen,
            onToggle
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "button",
            onClick: onToggle,
            "aria-expanded": isOpen,
            className: `tr-gradient-control__trigger-btn ${isOpen ? "active" : ""}`,
            title: "Edit Gradient Background",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
              width: "15",
              height: "15",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                d: "M12 20h9"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
              })]
            })
          }),
          renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "tr-gradient-control__popover",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "tr-gradient-control__gradient-wrapper",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "tr-gradient-control__bar",
                style: {
                  background: gradientPreviewCss
                },
                onMouseMove: handleBarMouseMove,
                children: [stops.map((stop, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
                  renderToggle: ({
                    isOpen,
                    onToggle
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                    type: "button",
                    onClick: onToggle,
                    "aria-expanded": isOpen,
                    className: "tr-gradient-control__stop-btn",
                    title: `Color Stop ${idx + 1}`,
                    style: {
                      backgroundColor: stop.color,
                      left: `${stop.location}%`
                    }
                  }),
                  renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "tr-gradient-control__stop-popover",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
                      color: stop.color,
                      onChange: c => handleStopColorChange(idx, c),
                      enableAlpha: true
                    }), stops.length > 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                      type: "button",
                      className: "tr-gradient-control__remove-stop-btn",
                      onClick: () => handleRemoveStop(idx),
                      children: "Remove Stop"
                    })]
                  })
                }, idx)), (() => {
                  const isNearExistingStop = stops.some(s => Math.abs(plusPos - s.location) < 8);
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
                    onToggle: nextState => setIsPlusOpen(nextState),
                    renderToggle: ({
                      isOpen,
                      onToggle
                    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                      type: "button",
                      onClick: e => {
                        if (!isOpen) {
                          handleAddStop();
                        }
                        onToggle(e);
                      },
                      "aria-expanded": isOpen,
                      className: "tr-gradient-control__stop-plus",
                      title: "Add Color Stop",
                      style: {
                        left: `${plusPos}%`,
                        opacity: isNearExistingStop && !isOpen ? 0 : undefined,
                        pointerEvents: isNearExistingStop && !isOpen ? "none" : undefined
                      },
                      children: "+"
                    }),
                    renderContent: () => {
                      const targetIndex = stops.length > 2 ? stops.length - 2 : 1;
                      const activeStop = stops[targetIndex] || stops[stops.length - 1];
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "tr-gradient-control__stop-popover",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
                          color: activeStop.color,
                          onChange: c => handleStopColorChange(targetIndex, c),
                          enableAlpha: true
                        }), stops.length > 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                          type: "button",
                          className: "tr-gradient-control__remove-stop-btn",
                          onClick: () => handleRemoveStop(targetIndex),
                          children: "Remove Stop"
                        })]
                      });
                    }
                  });
                })()]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "tr-gradient-control__controls-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "tr-gradient-control__col",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "tr-gradient-control__field-label",
                    children: "TYPE"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                    className: "tr-gradient-control__select",
                    value: currentGradient.gradientType || "linear",
                    onChange: e => updateGradient({
                      gradientType: e.target.value
                    }),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                      value: "linear",
                      children: "Linear"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                      value: "radial",
                      children: "Radial"
                    })]
                  })]
                }), currentGradient.gradientType !== "radial" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "tr-gradient-control__col",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "tr-gradient-control__field-label",
                    children: "ANGLE"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "tr-gradient-control__angle-wrapper",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "tr-gradient-control__angle-input-box",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                        type: "number",
                        className: "tr-gradient-control__angle-input",
                        value: currentGradient.angle ?? 135,
                        min: 0,
                        max: 360,
                        onChange: e => {
                          const val = parseInt(e.target.value, 10);
                          updateGradient({
                            angle: isNaN(val) ? 0 : val
                          });
                        }
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        className: "tr-gradient-control__degree-symbol",
                        children: "\xB0"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      ref: dialRef,
                      className: "tr-gradient-control__angle-dial",
                      onPointerDown: handleDialPointerDown,
                      title: "Drag to change angle",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                        className: "tr-gradient-control__dial-pointer",
                        style: {
                          transform: `rotate(${currentGradient.angle ?? 135}deg)`
                        },
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: "tr-gradient-control__dial-dot"
                        })
                      })
                    })]
                  })]
                })]
              })]
            })
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientControl);

/***/ },

/***/ "../tr-tools/Components/ItemsPanel/ItemsPanel.jsx"
/*!********************************************************!*\
  !*** ../tr-tools/Components/ItemsPanel/ItemsPanel.jsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ItemsPanel_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemsPanel.scss */ "../tr-tools/Components/ItemsPanel/ItemsPanel.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/**
 * Advanced Modern ItemsPanel Component
 * Provides a state-of-the-art UI for managing list items across Gutenberg blocks.
 *
 * @param {Object} props
 * @param {string} [props.title] - The title shown at the top of the panel. (প্যানেলের উপরে দেখানো মেইন টাইটেল)
 * @param {boolean} [props.initialOpen] - Whether the panel is open by default. (প্যানেলটি শুরুতে খোলা থাকবে কি না)
 * @param {Array} [props.items] - The array of items to manage. (যে আইটেমগুলো ম্যানেজ করতে চান তার অ্যারে)
 * @param {Function} props.onChange - Callback function triggered when items are added, removed, or updated. (আইটেম অ্যাড, রিমুভ বা এডিট হলে এই ফাংশন কল হয়)
 * @param {Object} [props.defaultItem] - The default structure of a new item when clicking the add button. (নতুন আইটেম অ্যাড করলে তার ডিফল্ট স্ট্রাকচার বা ভ্যালু কেমন হবে)
 * @param {string} [props.addButtonLabel] - The label text for the add button. (নতুন আইটেম অ্যাড করার বাটনের টেক্সট)
 * @param {string} [props.itemTitleKey] - The object key used to display the item's title in the list header. (লিস্টের হেডিংয়ে আইটেমের কোন প্রোপার্টিটি দেখাবে, যেমন: 'name' বা 'title')
 * @param {Function} [props.ItemSettings] - React Component to render the fields. Receives `{item, index, updateField}` as props. (কাস্টম কম্পোনেন্ট হিসেবে ফিল্ড রেন্ডার করার জন্য)
 */

const ItemsPanel = data => {
  const {
    title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Items Manager", "guten-builder-blocks"),
    initialOpen = true,
    items = [],
    onChange,
    defaultItem = {},
    addButtonLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("＋ Add New Item", "guten-builder-blocks"),
    itemTitleKey = "title",
    ItemSettings
  } = data;
  const [openItemIndex, setOpenItemIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  // Drag and Drop refs
  const dragItem = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const dragOverItem = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isDragging, setIsDragging] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const triggerChange = newItems => {
    if (typeof onChange === "function") {
      onChange(newItems);
    }
  };

  // Drag Handlers
  const handleDragStart = (e, index) => {
    dragItem.current = index;
    setIsDragging(true);
    e.dataTransfer.effectAllowed = "move";
    setTimeout(() => {
      if (e.target) e.target.classList.add("tr-is-dragging");
    }, 0);
  };
  const handleDragEnter = (e, index) => {
    dragOverItem.current = index;
  };
  const handleDragEnd = e => {
    setIsDragging(false);
    if (e.target) e.target.classList.remove("tr-is-dragging");
    if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
      const newItems = [...items];
      const draggedItemContent = newItems.splice(dragItem.current, 1)[0];
      newItems.splice(dragOverItem.current, 0, draggedItemContent);
      triggerChange(newItems);
      setOpenItemIndex(null); // Close item to avoid layout glitches after moving
    }
    dragItem.current = null;
    dragOverItem.current = null;
  };

  // Add Item
  const handleAddItem = () => {
    const newItems = [...items, {
      ...defaultItem
    }];
    triggerChange(newItems);
    setOpenItemIndex(newItems.length - 1);
  };

  // Delete Item
  const handleDeleteItem = index => {
    const newItems = items.filter((_, i) => i !== index);
    triggerChange(newItems);
    if (openItemIndex === index) {
      setOpenItemIndex(null);
    } else if (openItemIndex > index) {
      setOpenItemIndex(openItemIndex - 1);
    }
  };

  // Duplicate Item
  const handleDuplicateItem = index => {
    const newItems = [...items];
    const duplicatedItem = JSON.parse(JSON.stringify(newItems[index]));
    newItems.splice(index + 1, 0, duplicatedItem);
    triggerChange(newItems);
    setOpenItemIndex(index + 1);
  };

  // Update Item Field
  const handleUpdateField = (index, key, value) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [key]: value
    };
    triggerChange(newItems);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: title,
    initialOpen: initialOpen,
    className: "tr-items-panel-container bPlPanelBody",
    children: [items.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "tr-items-panel-empty",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "tr-items-panel-empty-icon",
        children: "\uD83D\uDCE6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "tr-items-panel-empty-text",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("No items created yet.", "guten-builder-blocks")
      })]
    }) : items.map((item, index) => {
      const isOpen = openItemIndex === index;
      const rawTitle = item[itemTitleKey] || item.title || item.question || "";
      const displayTitle = rawTitle.trim() !== "" ? rawTitle : `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Item", "guten-builder-blocks")} #${index + 1}`;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: `tr-items-panel-card ${isOpen ? "is-open" : ""}`,
        draggable: true,
        onDragStart: e => handleDragStart(e, index),
        onDragEnter: e => handleDragEnter(e, index),
        onDragEnd: handleDragEnd,
        onDragOver: e => e.preventDefault(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "tr-items-panel-header",
          onClick: () => setOpenItemIndex(isOpen ? null : index),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "tr-items-panel-title-wrapper",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tr-items-panel-title",
              children: displayTitle
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "tr-items-panel-toolbar",
            onClick: e => e.stopPropagation(),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
              text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Drag to reorder", "guten-builder-blocks"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "tr-items-panel-drag-handle",
                style: {
                  cursor: "grab",
                  padding: "4px",
                  color: "#64748b",
                  display: "flex",
                  alignItems: "center"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polyline", {
                    points: "5 9 2 12 5 15"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polyline", {
                    points: "9 5 12 2 15 5"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polyline", {
                    points: "19 9 22 12 19 15"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polyline", {
                    points: "9 19 12 22 15 19"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
                    x1: "2",
                    y1: "12",
                    x2: "22",
                    y2: "12"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
                    x1: "12",
                    y1: "2",
                    x2: "12",
                    y2: "22"
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
              text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Duplicate", "guten-builder-blocks"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                className: "tr-items-panel-btn",
                icon: "admin-page",
                onClick: () => handleDuplicateItem(index)
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
              text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Delete", "guten-builder-blocks"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                className: "tr-items-panel-btn tr-items-panel-btn-delete",
                icon: "no-alt",
                isDestructive: true,
                onClick: () => handleDeleteItem(index)
              })
            })]
          })]
        }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "tr-items-panel-body",
          children: ItemSettings ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ItemSettings, {
            item: item,
            index: index,
            updateField: (key, val) => handleUpdateField(index, key, val)
          }) : null
        })]
      }, index);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "tr-items-panel-add-btn",
      variant: "primary",
      icon: "plus",
      onClick: handleAddItem,
      children: typeof addButtonLabel === "string" ? addButtonLabel.replace(/^[＋+]\s*/, "") : addButtonLabel
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemsPanel);

/***/ },

/***/ "../tr-tools/Components/MediaControl/MediaControl.jsx"
/*!************************************************************!*\
  !*** ../tr-tools/Components/MediaControl/MediaControl.jsx ***!
  \************************************************************/
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
/* harmony import */ var _MediaControl_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MediaControl.scss */ "../tr-tools/Components/MediaControl/MediaControl.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const MediaControl = ({
  label,
  value,
  onChange,
  allowedTypes = ['audio'],
  buttonLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload / Select', 'tr-tools'),
  help
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "gbb-media-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: label,
      value: value || '',
      onChange: onChange,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Paste URL or select file...', 'tr-tools'),
      help: help
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "gbb-media-control__actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
          onSelect: media => {
            if (media && media.url) {
              onChange(media.url);
            }
          },
          allowedTypes: allowedTypes,
          value: value,
          render: ({
            open
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "secondary",
            isSmall: true,
            onClick: open,
            className: "gbb-media-control__upload-btn",
            children: buttonLabel
          })
        })
      }), value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "secondary",
        isDestructive: true,
        isSmall: true,
        onClick: () => onChange(''),
        className: "gbb-media-control__remove-btn",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'tr-tools')
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MediaControl);

/***/ },

/***/ "../tr-tools/Components/ShadowControl/ShadowControl.js"
/*!*************************************************************!*\
  !*** ../tr-tools/Components/ShadowControl/ShadowControl.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SHADOW: () => (/* binding */ DEFAULT_SHADOW),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ColorControl/ColorControl */ "../tr-tools/Components/ColorControl/ColorControl.js");
/* harmony import */ var _ShadowControl_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShadowControl.scss */ "../tr-tools/Components/ShadowControl/ShadowControl.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const DEFAULT_SHADOW = {
  hOffset: '0px',
  vOffset: '0px',
  blur: '0px',
  spread: '0px',
  color: ''
};
const ShadowControl = ({
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Box Shadow', 'guten-builder-blocks'),
  value,
  onChange,
  defaultShadow
}) => {
  const currentVal = {
    ...DEFAULT_SHADOW,
    ...defaultShadow,
    ...value
  };
  const updateField = (field, val) => {
    onChange({
      ...currentVal,
      [field]: val
    });
  };
  const resetVal = {
    ...DEFAULT_SHADOW,
    ...defaultShadow
  };
  const isChanged = value && typeof value === 'object' && Object.keys(value).some(key => value[key] !== resetVal[key]);
  const handleReset = () => {
    if (onChange) {
      onChange(undefined);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
    className: "tr-shadow-control-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
        className: "tr-shadow-control-dropdown",
        contentClassName: "tr-shadow-control-popover",
        popoverProps: {
          placement: 'bottom-end'
        },
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          icon: "edit",
          variant: "secondary",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "tr-shadow-control-toggle"
        }),
        renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "tr-shadow-control-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "tr-shadow-control-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tr-shadow-control-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal Offset:', 'guten-builder-blocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
              className: "tr-shadow-input tr-custom-unit-control",
              value: currentVal.hOffset,
              onChange: val => updateField('hOffset', val),
              units: [{
                value: 'px',
                label: 'PX'
              }]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "tr-shadow-control-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tr-shadow-control-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical Offset:', 'guten-builder-blocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
              className: "tr-shadow-input tr-custom-unit-control",
              value: currentVal.vOffset,
              onChange: val => updateField('vOffset', val),
              units: [{
                value: 'px',
                label: 'PX'
              }]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "tr-shadow-control-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tr-shadow-control-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Blur:', 'guten-builder-blocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
              className: "tr-shadow-input tr-custom-unit-control",
              value: currentVal.blur,
              onChange: val => updateField('blur', val),
              units: [{
                value: 'px',
                label: 'PX'
              }]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "tr-shadow-control-field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "tr-shadow-control-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spread:', 'guten-builder-blocks')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
              className: "tr-shadow-input tr-custom-unit-control",
              value: currentVal.spread,
              onChange: val => updateField('spread', val),
              units: [{
                value: 'px',
                label: 'PX'
              }]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color:', 'guten-builder-blocks'),
            value: currentVal.color,
            onChange: val => updateField('color', val),
            defaultColor: ""
          })]
        })
      }), isChanged && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        icon: "image-rotate",
        className: "bPlResetVal",
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reset', 'guten-builder-blocks'),
        onClick: handleReset
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShadowControl);

/***/ },

/***/ "../tr-tools/Components/SpacingControl/SpacingControl.js"
/*!***************************************************************!*\
  !*** ../tr-tools/Components/SpacingControl/SpacingControl.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Devices_Devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Devices/Devices */ "../tr-tools/Components/Devices/Devices.js");
/* harmony import */ var _SpacingControl_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpacingControl.scss */ "../tr-tools/Components/SpacingControl/SpacingControl.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const SpacingControl = props => {
  const {
    label,
    value,
    onChange = () => {},
    defaultVal,
    units,
    sides,
    style,
    className = '',
    disableUnits = false,
    responsive = false
  } = props;
  const [link, setLink] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [device, setDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("desktop");
  const unitSides = sides || ['top', 'right', 'bottom', 'left'];
  const getParsedValue = val => {
    if (!val) return {
      top: '',
      right: '',
      bottom: '',
      left: ''
    };
    if (typeof val === 'object' && !val.desktop && !val.tablet && !val.mobile) return {
      top: val.top || '',
      right: val.right || '',
      bottom: val.bottom || '',
      left: val.left || ''
    };
    if (typeof val === 'string') {
      const parts = val.split(' ').map(p => p.trim()).filter(Boolean);
      if (parts.length === 1) return {
        top: parts[0],
        right: parts[0],
        bottom: parts[0],
        left: parts[0]
      };
      if (parts.length === 2) return {
        top: parts[0],
        right: parts[1],
        bottom: parts[0],
        left: parts[1]
      };
      if (parts.length === 3) return {
        top: parts[0],
        right: parts[1],
        bottom: parts[2],
        left: parts[1]
      };
      if (parts.length === 4) return {
        top: parts[0],
        right: parts[1],
        bottom: parts[2],
        left: parts[3]
      };
    }
    return {
      top: '',
      right: '',
      bottom: '',
      left: ''
    };
  };
  const parsedDefault = getParsedValue(defaultVal);
  const currentValueToParse = responsive ? value?.[device] : value;
  const currentVal = currentValueToParse ? getParsedValue(currentValueToParse) : parsedDefault;
  const isReset = currentValueToParse !== undefined && currentValueToParse !== '' && (currentVal.top !== parsedDefault.top || currentVal.right !== parsedDefault.right || currentVal.bottom !== parsedDefault.bottom || currentVal.left !== parsedDefault.left);
  const defaultUnits = [{
    label: 'px',
    value: 'px'
  }, {
    label: '%',
    value: '%'
  }, {
    label: 'em',
    value: 'em'
  }, {
    label: 'rem',
    value: 'rem'
  }, {
    label: 'vw',
    value: 'vw'
  }, {
    label: 'vh',
    value: 'vh'
  }];
  const handleChange = (val, dimension) => {
    let newVal;
    if (link) {
      newVal = {
        top: val,
        right: val,
        bottom: val,
        left: val
      };
    } else {
      if (sides) {
        newVal = dimension === 'horizontal' ? {
          ...currentVal,
          right: val,
          left: val
        } : dimension === 'vertical' ? {
          ...currentVal,
          top: val,
          bottom: val
        } : {
          ...currentVal,
          [dimension]: val
        };
      } else {
        newVal = {
          ...currentVal,
          [dimension]: val
        };
      }
    }
    const t = newVal.top || '';
    const r = newVal.right || '';
    const b = newVal.bottom || '';
    const l = newVal.left || '';
    let finalStr;
    if (!t && !r && !b && !l) {
      finalStr = undefined;
    } else {
      finalStr = `${t || '0px'} ${r || '0px'} ${b || '0px'} ${l || '0px'}`;
    }
    if (responsive) {
      onChange({
        ...(typeof value === "object" ? value : {}),
        [device]: finalStr
      });
    } else {
      onChange(finalStr);
    }
  };
  const handleReset = () => {
    if (responsive) {
      onChange({
        ...(typeof value === "object" ? value : {}),
        [device]: undefined
      });
    } else {
      onChange(undefined);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    style: {
      ...style
    },
    className: `bPlBoxControl ${className}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "tr-spacing-control-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "6px"
        },
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "tr-spacing-control-label",
          children: label
        }), responsive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Devices_Devices__WEBPACK_IMPORTED_MODULE_3__["default"], {
          device: device,
          onChange: setDevice
        })]
      }), isReset && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: "tr-spacing-reset-btn",
        onClick: handleReset,
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Reset', 'guten-builder-blocks'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "dashicons dashicons-image-rotate"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: `sides ${sides && sides.includes('horizontal', 'vertical') ? 'gap' : ''}`,
      children: [unitSides.map((val, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "bplUnitControlWrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUnitControl, {
          className: "tr-custom-unit-control",
          onChange: v => handleChange(v, val),
          value: sides ? val === 'horizontal' ? currentVal?.right : val === 'vertical' ? currentVal?.top : currentVal?.[val] : currentVal?.[val],
          units: units || defaultUnits,
          disableUnits: disableUnits
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "sideLabel",
          children: val
        })]
      }, i)), !sides && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: `bplBoxControlLinkButton ${link ? 'activeLink' : ''}`,
        onClick: () => setLink(!link),
        children: link ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "dashicons dashicons-admin-links"
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "dashicons dashicons-editor-unlink"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingControl);

/***/ },

/***/ "../tr-tools/Components/TabButton/TabButton.jsx"
/*!******************************************************!*\
  !*** ../tr-tools/Components/TabButton/TabButton.jsx ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabButton_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabButton.scss */ "../tr-tools/Components/TabButton/TabButton.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const DefaultGeneralIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })]
});
const DefaultStyleIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.71 1.7-1.63 0-.44-.17-.86-.48-1.18-.32-.32-.48-.74-.48-1.19 0-.92.78-1.63 1.7-1.63h2.56c2.76 0 5-2.24 5-5 0-5.5-4.5-10-10-10Z"
  })]
});

/**
 * Reusable TabButton Component
 * Supports custom icons, labels, and active tab state management.
 */
const TabButton = ({
  tabs = [{
    name: 'general',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('General', 'guten-builder-blocks'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DefaultGeneralIcon, {})
  }, {
    name: 'style',
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'guten-builder-blocks'),
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DefaultStyleIcon, {})
  }],
  activeTab,
  onChange,
  className = ''
}) => {
  const [internalActiveTab, setInternalActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(tabs[0]?.name || 'general');
  const currentActiveTab = activeTab !== undefined ? activeTab : internalActiveTab;
  const handleTabChange = tabName => {
    if (activeTab === undefined) {
      setInternalActiveTab(tabName);
    }
    if (typeof onChange === 'function') {
      onChange(tabName);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: `tr-tab-buttons ${className}`,
    children: tabs.map((tab, index) => {
      const isActive = currentActiveTab === tab.name;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        style: {
          display: 'contents'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button", {
          type: "button",
          className: `tr-subtab-btn ${isActive ? 'active' : ''}`,
          onClick: () => handleTabChange(tab.name),
          children: [tab.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "tr-tab-icon",
            children: tab.icon
          }), tab.title || tab.label || tab.name]
        }), index < tabs.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "tr-tab-divider"
        })]
      }, tab.name || index);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabButton);

/***/ },

/***/ "../tr-tools/Components/TemplateSelector/ReadyPatternsModal.jsx"
/*!**********************************************************************!*\
  !*** ../tr-tools/Components/TemplateSelector/ReadyPatternsModal.jsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ReadyPatternsModal = ({
  isOpen,
  onClose,
  onImportPattern,
  isPro,
  proTemplates = [],
  templates = [],
  title
}) => {
  const [viewMode, setViewMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('grid');
  if (!isOpen) return null;
  const isProActive = Boolean(isPro) || Boolean(window?.gbbData?.isPro);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "gbb-patterns-modal-overlay",
    onClick: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "gbb-patterns-modal-container",
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "gbb-patterns-modal-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "gbb-header-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "gbb-block-logo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "4",
                y1: "6",
                x2: "20",
                y2: "6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "4",
                y1: "12",
                x2: "20",
                y2: "12"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "4",
                y1: "18",
                x2: "20",
                y2: "18"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "gbb-header-title",
            children: title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('FAQ / Vertical Accordion', 'tr-tools')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "gbb-header-right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: `gbb-header-btn ${viewMode === 'list' ? 'active' : ''}`,
            onClick: () => setViewMode('list'),
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List View', 'tr-tools'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "8",
                y1: "6",
                x2: "21",
                y2: "6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "8",
                y1: "12",
                x2: "21",
                y2: "12"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "8",
                y1: "18",
                x2: "21",
                y2: "18"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                cx: "3",
                cy: "6",
                r: "1.5",
                fill: "currentColor"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                cx: "3",
                cy: "12",
                r: "1.5",
                fill: "currentColor"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                cx: "3",
                cy: "18",
                r: "1.5",
                fill: "currentColor"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: `gbb-header-btn ${viewMode === 'grid' ? 'active' : ''}`,
            onClick: () => setViewMode('grid'),
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid View', 'tr-tools'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
                x: "3",
                y: "3",
                width: "7",
                height: "7",
                rx: "1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
                x: "14",
                y: "3",
                width: "7",
                height: "7",
                rx: "1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
                x: "14",
                y: "14",
                width: "7",
                height: "7",
                rx: "1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("rect", {
                x: "3",
                y: "14",
                width: "7",
                height: "7",
                rx: "1"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "gbb-header-btn",
            onClick: () => {},
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Refresh Templates', 'tr-tools'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
              width: "18",
              height: "18",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                d: "M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "gbb-patterns-modal-close",
            onClick: onClose,
            "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close Templates Library', 'tr-tools'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
              })]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: `gbb-patterns-modal-body view-mode-${viewMode}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "gbb-patterns-grid",
          children: templates.map(item => {
            const SvgPreview = item.icon || item.SvgComponent;
            const isItemPro = item.isPro || proTemplates.includes(item.id);
            const isLocked = isItemPro && !isProActive;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: "gbb-pattern-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "gbb-pattern-preview-container",
                style: {
                  padding: '24px',
                  boxSizing: 'border-box'
                },
                children: [SvgPreview ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgPreview, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  style: {
                    height: '140px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8'
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Preview', 'tr-tools')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "gbb-pattern-overlay",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
                    type: "button",
                    className: "gbb-btn-live-preview",
                    onClick: () => onImportPattern(item),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "3"
                      })]
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Live Preview', 'tr-tools')]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: "gbb-pattern-details",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  className: "gbb-pattern-name",
                  children: item.label || item.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "gbb-pattern-actions",
                  children: isLocked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
                    href: "https://yourwebsite.com/pro",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "gbb-btn-pattern-pro",
                    onClick: e => e.stopPropagation(),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                      width: "14",
                      height: "14",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      style: {
                        marginRight: '6px'
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M2 17l4-10 6 4 6-4 4 10H2z"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M2 21h20"
                      })]
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('PRO', 'tr-tools')]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
                    type: "button",
                    className: "gbb-btn-pattern-import",
                    onClick: () => onImportPattern(item),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
                      width: "17",
                      height: "17",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2.5",
                      style: {
                        marginRight: '6px'
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polyline", {
                        points: "7 10 12 15 17 10"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("line", {
                        x1: "12",
                        y1: "15",
                        x2: "12",
                        y2: "3"
                      })]
                    }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Import', 'tr-tools')]
                  })
                })]
              })]
            }, item.id);
          })
        })
      })]
    })
  }), document.body);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadyPatternsModal);

/***/ },

/***/ "../tr-tools/Components/TemplateSelector/TemplateSelector.jsx"
/*!********************************************************************!*\
  !*** ../tr-tools/Components/TemplateSelector/TemplateSelector.jsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReadyPatternsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadyPatternsModal */ "../tr-tools/Components/TemplateSelector/ReadyPatternsModal.jsx");
/* harmony import */ var _TemplateSelector_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TemplateSelector.scss */ "../tr-tools/Components/TemplateSelector/TemplateSelector.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const TemplateSelector = ({
  setAttributes,
  title,
  subtitle,
  templates = [],
  isPro,
  proTemplates
}) => {
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleSelectTemplate = template => {
    setAttributes({
      ...(template.attributes || {}),
      selectedTemplate: template.id,
      isTemplateSelected: true
    });
  };
  const handleSkip = () => {
    if (templates.length > 0) {
      const firstTemplate = templates[0];
      setAttributes({
        ...(firstTemplate.attributes || {}),
        selectedTemplate: firstTemplate.id,
        isTemplateSelected: true
      });
    } else {
      setAttributes({
        isTemplateSelected: true
      });
    }
  };
  const handleChooseReadyPatterns = () => {
    setIsModalOpen(true);
  };
  const handleImportPattern = pattern => {
    setAttributes({
      ...(pattern.attributes || {}),
      selectedTemplate: pattern.id,
      isTemplateSelected: true
    });
    setIsModalOpen(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "gbb-template-selector-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "gbb-template-selector-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        className: "gbb-template-title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "gbb-template-subtitle",
        children: subtitle
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "gbb-template-grid",
      children: templates.map(item => {
        const SvgIcon = item.SvgComponent || item.icon;

        // Freemius active state check (via prop or global window.gbbData localized object)
        const isProActive = Boolean(isPro) || Boolean(window?.gbbData?.isPro);

        // Check if this specific template requires PRO (either by item property or by proTemplates list)
        const isTemplatePro = Boolean(item.isPro) || Array.isArray(proTemplates) && proTemplates.includes(item.id);
        const isLockedPro = isTemplatePro && !isProActive;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "gbb-template-card",
          onClick: () => {
            // যদি লক করা প্রো টেমপ্লেট হয়, তাহলে সিলেক্ট হতে দেবে না
            if (isLockedPro) {
              return; // এখানে চাইলে প্রো কেনার লিংকে রিডাইরেক্ট করতে পারেন
            }
            handleSelectTemplate(item);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "gbb-template-preview",
            children: [item.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: item.image,
              alt: item.name || item.label,
              className: "gbb-template-image"
            }) : SvgIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(SvgIcon, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: `gbb-template-hover-overlay ${isLockedPro ? "is-pro-overlay" : ""}`,
              children: isLockedPro ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "gbb-pro-buttons",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                  href: "#",
                  className: "gbb-btn-demo",
                  onClick: e => e.stopPropagation(),
                  children: "Demo"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
                  href: "https://yourwebsite.com/pro",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "gbb-btn-pro",
                  onClick: e => e.stopPropagation(),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      d: "M2 17l4-10 6 4 6-4 4 10H2z"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                      d: "M2 21h20"
                    })]
                  }), "PRO"]
                })]
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "gbb-btn-select-preset",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select", "guten-builder-blocks")
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "gbb-template-info",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "gbb-template-name",
              children: item.name || item.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              className: "gbb-template-tag",
              children: item.tag
            })]
          })]
        }, item.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "gbb-template-actions",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        className: "gbb-btn-ready-patterns",
        onClick: handleChooseReadyPatterns,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose from Ready Templates", "guten-builder-blocks")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        className: "gbb-btn-skip",
        onClick: handleSkip,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skip", "guten-builder-blocks")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ReadyPatternsModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isOpen: isModalOpen,
      onClose: () => setIsModalOpen(false),
      onImportPattern: handleImportPattern,
      isPro: isPro,
      proTemplates: proTemplates,
      templates: templates,
      title: title
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateSelector);

/***/ },

/***/ "../tr-tools/Components/Typography/Typography.js"
/*!*******************************************************!*\
  !*** ../tr-tools/Components/Typography/Typography.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fontList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fontList */ "../tr-tools/Components/Typography/fontList.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "../tr-tools/Components/index.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./options */ "../tr-tools/Components/Typography/options.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "../tr-tools/utils/index.js");
/* harmony import */ var _Typography_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Typography.scss */ "../tr-tools/Components/Typography/Typography.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









/**
 * Typography Component
 *
 * @param {Object} props
 * @param {string} [props.className] - Optional CSS class name (e.g. 'mt20')
 * @param {string} [props.label='Typography'] - Label for the typography control
 * @param {Object|number|string} [props.value] - Typography value object or font size
 * @param {number} [props.value.fontSize] - Font size in px
 * @param {string} [props.value.fontFamily] - Font family name
 * @param {string|number} [props.value.fontWeight] - Font weight (e.g. '400', '600', '700')
 * @param {number} [props.value.lineHeight] - Line height value
 * @param {number} [props.value.letterSpacing] - Letter spacing in px
 * @param {string} [props.value.textTransform] - Text transform ('none', 'capitalize', 'uppercase', 'lowercase')
 * @param {string} [props.value.textDecoration] - Text decoration ('none', 'underline', 'line-through', 'overline')
 * @param {string} [props.value.fontStyle] - Font style ('normal', 'italic', 'oblique')
 * @param {Object} [props.defaultValue] - Default typography object for reset
 * @param {Object} [props.defaultTypography] - Default typography object for reset
 * @param {Function} props.onChange - Change handler callback function
 * @returns {JSX.Element} Typography control component
 */

const Typography = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography:'),
  value = {},
  onChange,
  defaultValue,
  defaultTypography
}) => {
  const resetVal = defaultTypography || defaultValue || {};
  const currentVal = typeof value === "object" && value !== null ? value : {
    fontSize: value
  };
  const [device, setDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('desktop');
  const getFontSizeForDevice = () => {
    let size = '';
    if (currentVal.fontSize && typeof currentVal.fontSize === 'object') {
      size = currentVal.fontSize[device];
    } else if (device === 'desktop') {
      size = currentVal.fontSize;
    }

    // Convert legacy raw numbers to strings with 'px'
    if (typeof size === 'number' || typeof size === 'string' && size !== '' && !isNaN(size)) {
      return `${size}px`;
    }
    return size || '';
  };
  const handleFontSizeChange = newSize => {
    let newFontSizeObj = typeof currentVal.fontSize === 'object' ? {
      ...currentVal.fontSize
    } : {
      desktop: currentVal.fontSize || ''
    };
    newFontSizeObj[device] = newSize;
    updateField('fontSize', newFontSizeObj);
  };
  const fontOptions = _fontList__WEBPACK_IMPORTED_MODULE_3__["default"].map(item => ({
    label: item.family,
    value: item.family === "Default" ? "" : item.family
  }));
  const selectedFontObj = _fontList__WEBPACK_IMPORTED_MODULE_3__["default"].find(item => item.family.toLowerCase() === (currentVal.fontFamily || "default").toLowerCase()) || _fontList__WEBPACK_IMPORTED_MODULE_3__["default"][0];
  const weightOptions = [{
    label: "Default",
    value: ""
  }, ...(selectedFontObj.variants || []).map(v => ({
    label: _options__WEBPACK_IMPORTED_MODULE_5__.WEIGHT_LABELS[v] || `${v}`,
    value: String(v)
  }))];
  const isChanged = Boolean(resetVal && Object.keys(resetVal).some(key => currentVal[key] !== undefined && JSON.stringify(currentVal[key]).toLowerCase() !== JSON.stringify(resetVal[key]).toLowerCase()));
  const updateField = (fieldKey, fieldVal) => {
    if (typeof onChange === "function") {
      onChange({
        ...currentVal,
        [fieldKey]: fieldVal
      });
    }
  };
  const handleReset = () => {
    if (typeof onChange === "function") {
      onChange(resetVal);
    }
  };
  const getDefault = property => resetVal?.[property];
  const setDefault = property => updateField(property, undefined);
  const resetValue = property => currentVal?.[property] !== undefined && currentVal?.[property] !== "" && currentVal?.[property] !== getDefault(property) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "image-rotate",
    className: "bPlResetVal",
    onClick: () => setDefault(property)
  }) : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: `tr-typography-control ${className}`.trim(),
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
      className: "tr-typography-control__label",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "tr-typography-control__actions",
      children: [isChanged && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
        type: "button",
        className: "tr-typography-control__reset-btn",
        title: "Reset to default typography",
        onClick: handleReset,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
            d: "M3 3v5h5"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
          type: "button",
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: `tr-typography-control__trigger-btn ${isOpen ? "active" : ""}`,
          title: "Edit Typography",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("polyline", {
              points: "4 7 4 4 20 4 20 7"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("line", {
              x1: "9",
              y1: "20",
              x2: "15",
              y2: "20"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("line", {
              x1: "12",
              y1: "4",
              x2: "12",
              y2: "20"
            })]
          })
        }),
        renderContent: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "tr-typography-control__popover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Family :", "guten-builder-blocks"),
            value: currentVal.fontFamily || "",
            options: fontOptions,
            onChange: val => updateField("fontFamily", val)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Weight :", "guten-builder-blocks"),
            value: currentVal.fontWeight || "",
            options: weightOptions,
            onChange: val => updateField("fontWeight", val)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
            className: "mt20",
            align: "center",
            justify: "space-between",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "tr-typography-control__field-label",
              style: {
                marginBottom: 0,
                whiteSpace: 'nowrap',
                marginRight: '8px'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Size :", "guten-builder-blocks")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Flex, {
              align: "center",
              gap: 2,
              style: {
                flex: 1,
                justifyContent: 'flex-end'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_index__WEBPACK_IMPORTED_MODULE_4__.Devices, {
                device: device,
                onChange: setDevice
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "tr-custom-unit-control",
                style: {
                  width: '100px'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
                  value: getFontSizeForDevice(),
                  onChange: handleFontSizeChange,
                  units: [(0,_utils__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.remUnit)(), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.emUnit)(), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.vwUnit)()]
                }, device)
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            className: "mt20",
            style: {
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
              className: "tr-custom-unit-control",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter Spacing:'),
              labelPosition: "left",
              value: currentVal.letterSpacing,
              onChange: val => updateField("letterSpacing", val),
              units: [(0,_utils__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.emUnit)(), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.remUnit)()]
            }), resetValue('letterSpacing')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            className: "mt20",
            style: {
              alignItems: 'center'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
              className: "tr-custom-unit-control",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Height:'),
              labelPosition: "left",
              value: currentVal.lineHeight,
              onChange: val => updateField("lineHeight", val),
              units: [(0,_utils__WEBPACK_IMPORTED_MODULE_6__.pxUnit)(), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.perUnit)(), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.emUnit)(), (0,_utils__WEBPACK_IMPORTED_MODULE_6__.remUnit)()],
              isResetValueOnUnitChange: true
            }), resetValue('lineHeight')]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "tr-typography-control__field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "tr-typography-control__field-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Style :", "guten-builder-blocks")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "tr-typography-control__btn-group",
              children: _options__WEBPACK_IMPORTED_MODULE_5__.FONT_STYLES.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                type: "button",
                title: item.label,
                className: `tr-typography-control__option-btn ${(currentVal.fontStyle || "normal") === item.value ? "active" : ""}`,
                onClick: () => updateField("fontStyle", item.value),
                children: item.icon
              }, item.value))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "tr-typography-control__field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "tr-typography-control__field-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Transform :", "guten-builder-blocks")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "tr-typography-control__btn-group",
              children: _options__WEBPACK_IMPORTED_MODULE_5__.TEXT_TRANSFORMS.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                type: "button",
                title: item.label,
                className: `tr-typography-control__option-btn ${(currentVal.textTransform || "none") === item.value ? "active" : ""}`,
                onClick: () => updateField("textTransform", item.value),
                children: item.icon
              }, item.value))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "tr-typography-control__field",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: "tr-typography-control__field-label",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text Decoration :", "guten-builder-blocks")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "tr-typography-control__btn-group",
              children: _options__WEBPACK_IMPORTED_MODULE_5__.TEXT_DECORATIONS.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button", {
                type: "button",
                title: item.label,
                className: `tr-typography-control__option-btn ${(currentVal.textDecoration || "none") === item.value ? "active" : ""}`,
                onClick: () => updateField("textDecoration", item.value),
                children: item.icon
              }, item.value))
            })]
          })]
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ },

/***/ "../tr-tools/Components/Typography/fontList.js"
/*!*****************************************************!*\
  !*** ../tr-tools/Components/Typography/fontList.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  family: "Default",
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: "sans-serif"
}, {
  family: "Inter",
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: "sans-serif"
}, {
  family: "Roboto",
  variants: [100, 300, 400, 500, 700, 900],
  category: "sans-serif"
}, {
  family: "Outfit",
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: "sans-serif"
}, {
  family: "Open Sans",
  variants: [300, 400, 500, 600, 700, 800],
  category: "sans-serif"
}, {
  family: "Poppins",
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: "sans-serif"
}, {
  family: "Montserrat",
  variants: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  category: "sans-serif"
}, {
  family: "Playfair Display",
  variants: [400, 500, 600, 700, 800, 900],
  category: "serif"
}, {
  family: "Lato",
  variants: [100, 300, 400, 700, 900],
  category: "sans-serif"
}, {
  family: "Oswald",
  variants: [200, 300, 400, 500, 600, 700],
  category: "sans-serif"
}, {
  family: "Merriweather",
  variants: [300, 400, 700, 900],
  category: "serif"
}]);

/***/ },

/***/ "../tr-tools/Components/Typography/options.js"
/*!****************************************************!*\
  !*** ../tr-tools/Components/Typography/options.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_STYLES: () => (/* binding */ FONT_STYLES),
/* harmony export */   TEXT_DECORATIONS: () => (/* binding */ TEXT_DECORATIONS),
/* harmony export */   TEXT_TRANSFORMS: () => (/* binding */ TEXT_TRANSFORMS),
/* harmony export */   WEIGHT_LABELS: () => (/* binding */ WEIGHT_LABELS)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FONT_STYLES = [{
  label: "Normal",
  value: "normal",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "13px"
    },
    children: "N"
  })
}, {
  label: "Italic",
  value: "italic",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      fontStyle: "italic",
      fontWeight: "600",
      fontSize: "13px",
      fontFamily: "serif"
    },
    children: "I"
  })
}, {
  label: "Oblique",
  value: "oblique",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      fontStyle: "oblique",
      fontWeight: "600",
      fontSize: "13px",
      fontFamily: "serif"
    },
    children: "O"
  })
}];
const TEXT_TRANSFORMS = [{
  label: "None",
  value: "none",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "1"
    },
    children: "N"
  })
}, {
  label: "Capitalize",
  value: "capitalize",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "-0.5px"
    },
    children: "Aa"
  })
}, {
  label: "UPPERCASE",
  value: "uppercase",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "-0.5px"
    },
    children: "AA"
  })
}, {
  label: "lowercase",
  value: "lowercase",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      fontSize: "12px",
      fontWeight: "600",
      letterSpacing: "-0.5px"
    },
    children: "aa"
  })
}];
const TEXT_DECORATIONS = [{
  label: "None",
  value: "none",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "1"
    },
    children: "N"
  })
}, {
  label: "Underline",
  value: "underline",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      textDecoration: "underline",
      fontSize: "13px",
      fontWeight: "600"
    },
    children: "U"
  })
}, {
  label: "Line-through",
  value: "line-through",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      textDecoration: "line-through",
      fontSize: "13px",
      fontWeight: "600"
    },
    children: "S"
  })
}, {
  label: "Overline",
  value: "overline",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
    style: {
      textDecoration: "overline",
      fontSize: "13px",
      fontWeight: "600"
    },
    children: "O"
  })
}];
const WEIGHT_LABELS = {
  100: "Thin (100)",
  200: "Extra Light (200)",
  300: "Light (300)",
  400: "Regular (400)",
  500: "Medium (500)",
  600: "Semi Bold (600)",
  700: "Bold (700)",
  800: "Extra Bold (800)",
  900: "Black (900)"
};

/***/ },

/***/ "../tr-tools/Components/UnitControl/UnitControl.js"
/*!*********************************************************!*\
  !*** ../tr-tools/Components/UnitControl/UnitControl.js ***!
  \*********************************************************/
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
/* harmony import */ var _Devices_Devices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Devices/Devices */ "../tr-tools/Components/Devices/Devices.js");
/* harmony import */ var _UnitControl_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UnitControl.scss */ "../tr-tools/Components/UnitControl/UnitControl.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const UnitControl = ({
  label,
  value,
  onChange,
  units,
  defaultVal,
  responsive = false,
  isResetValueOnUnitChange = true,
  className = "mt20",
  ...props
}) => {
  const [device, setDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("desktop");
  const currentValue = responsive ? value?.[device] || "" : value;
  const currentDefault = responsive && typeof defaultVal === 'object' ? defaultVal?.[device] || "" : defaultVal;
  const showReset = currentValue !== undefined && currentValue !== "" && currentValue !== currentDefault;
  const handleReset = () => {
    if (onChange) {
      const resetValue = currentDefault !== "" ? currentDefault : undefined;
      if (responsive) {
        onChange({
          ...(typeof value === "object" ? value : {}),
          [device]: resetValue
        });
      } else {
        onChange(resetValue);
      }
    }
  };
  const handleChange = val => {
    if (responsive) {
      onChange({
        ...(typeof value === "object" ? value : {}),
        [device]: val
      });
    } else {
      onChange(val);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "6px"
        },
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          style: {
            fontSize: "13px",
            fontWeight: 500,
            color: "#1e293b",
            whiteSpace: "nowrap"
          },
          children: label
        }), responsive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Devices_Devices__WEBPACK_IMPORTED_MODULE_3__["default"], {
          device: device,
          onChange: setDevice
        })]
      }), showReset && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        type: "button",
        className: "tr-spacing-reset-btn bPlResetVal",
        onClick: handleReset,
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reset", "guten-builder-blocks"),
        style: {
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "dashicons dashicons-image-rotate"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
      className: "tr-custom-unit-control",
      value: currentValue,
      onChange: handleChange,
      units: units,
      isResetValueOnUnitChange: isResetValueOnUnitChange,
      style: {
        width: "100%",
        marginBottom: 0
      },
      ...props
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnitControl);

/***/ },

/***/ "../tr-tools/Components/index.js"
/*!***************************************!*\
  !*** ../tr-tools/Components/index.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundControl: () => (/* reexport safe */ _BackgroundControl_BackgroundControl__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   BorderControl: () => (/* reexport safe */ _BorderControl_BorderControl__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   ColorControl: () => (/* reexport safe */ _ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   DEFAULT_BORDER: () => (/* reexport safe */ _BorderControl_BorderControl__WEBPACK_IMPORTED_MODULE_9__.DEFAULT_BORDER),
/* harmony export */   DEFAULT_GRADIENT: () => (/* reexport safe */ _GradientControl_GradientControl__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_GRADIENT),
/* harmony export */   DEFAULT_SHADOW: () => (/* reexport safe */ _ShadowControl_ShadowControl__WEBPACK_IMPORTED_MODULE_13__.DEFAULT_SHADOW),
/* harmony export */   Devices: () => (/* reexport safe */ _Devices_Devices__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   DocsLink: () => (/* reexport safe */ _DocsLink_DocsLink__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   GradientControl: () => (/* reexport safe */ _GradientControl_GradientControl__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   ItemsPanel: () => (/* reexport safe */ _ItemsPanel_ItemsPanel__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   MediaControl: () => (/* reexport safe */ _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   ShadowControl: () => (/* reexport safe */ _ShadowControl_ShadowControl__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   SpacingControl: () => (/* reexport safe */ _SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   TabButton: () => (/* reexport safe */ _TabButton_TabButton__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   TemplateSelector: () => (/* reexport safe */ _TemplateSelector_TemplateSelector__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Typography: () => (/* reexport safe */ _Typography_Typography__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   UnitControl: () => (/* reexport safe */ _UnitControl_UnitControl__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   getBackgroundCss: () => (/* reexport safe */ _BackgroundControl_BackgroundControl__WEBPACK_IMPORTED_MODULE_5__.getBackgroundCss),
/* harmony export */   getGradientCss: () => (/* reexport safe */ _GradientControl_GradientControl__WEBPACK_IMPORTED_MODULE_6__.getGradientCss)
/* harmony export */ });
/* harmony import */ var _TemplateSelector_TemplateSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateSelector/TemplateSelector */ "../tr-tools/Components/TemplateSelector/TemplateSelector.jsx");
/* harmony import */ var _ItemsPanel_ItemsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemsPanel/ItemsPanel */ "../tr-tools/Components/ItemsPanel/ItemsPanel.jsx");
/* harmony import */ var _TabButton_TabButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabButton/TabButton */ "../tr-tools/Components/TabButton/TabButton.jsx");
/* harmony import */ var _ColorControl_ColorControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorControl/ColorControl */ "../tr-tools/Components/ColorControl/ColorControl.js");
/* harmony import */ var _Typography_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Typography/Typography */ "../tr-tools/Components/Typography/Typography.js");
/* harmony import */ var _BackgroundControl_BackgroundControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BackgroundControl/BackgroundControl */ "../tr-tools/Components/BackgroundControl/BackgroundControl.js");
/* harmony import */ var _GradientControl_GradientControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GradientControl/GradientControl */ "../tr-tools/Components/GradientControl/GradientControl.js");
/* harmony import */ var _Devices_Devices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Devices/Devices */ "../tr-tools/Components/Devices/Devices.js");
/* harmony import */ var _UnitControl_UnitControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UnitControl/UnitControl */ "../tr-tools/Components/UnitControl/UnitControl.js");
/* harmony import */ var _BorderControl_BorderControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BorderControl/BorderControl */ "../tr-tools/Components/BorderControl/BorderControl.js");
/* harmony import */ var _SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SpacingControl/SpacingControl */ "../tr-tools/Components/SpacingControl/SpacingControl.js");
/* harmony import */ var _DocsLink_DocsLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DocsLink/DocsLink */ "../tr-tools/Components/DocsLink/DocsLink.js");
/* harmony import */ var _MediaControl_MediaControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MediaControl/MediaControl */ "../tr-tools/Components/MediaControl/MediaControl.jsx");
/* harmony import */ var _ShadowControl_ShadowControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ShadowControl/ShadowControl */ "../tr-tools/Components/ShadowControl/ShadowControl.js");















/***/ },

/***/ "../tr-tools/index.js"
/*!****************************!*\
  !*** ../tr-tools/index.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundControl: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.BackgroundControl),
/* harmony export */   BorderControl: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.BorderControl),
/* harmony export */   ColorControl: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.ColorControl),
/* harmony export */   DEFAULT_BORDER: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_BORDER),
/* harmony export */   DEFAULT_GRADIENT: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_GRADIENT),
/* harmony export */   DEFAULT_SHADOW: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_SHADOW),
/* harmony export */   Devices: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.Devices),
/* harmony export */   DocsLink: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.DocsLink),
/* harmony export */   GradientControl: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.GradientControl),
/* harmony export */   ItemsPanel: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.ItemsPanel),
/* harmony export */   MediaControl: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.MediaControl),
/* harmony export */   ShadowControl: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.ShadowControl),
/* harmony export */   SpacingControl: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.SpacingControl),
/* harmony export */   TabButton: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.TabButton),
/* harmony export */   TemplateSelector: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.TemplateSelector),
/* harmony export */   Typography: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.Typography),
/* harmony export */   UnitControl: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.UnitControl),
/* harmony export */   emUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.emUnit),
/* harmony export */   getBackgroundCss: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.getBackgroundCss),
/* harmony export */   getBorderCss: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.getBorderCss),
/* harmony export */   getBorderRadiusCss: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.getBorderRadiusCss),
/* harmony export */   getGradientCss: () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_0__.getGradientCss),
/* harmony export */   getShadowCss: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.getShadowCss),
/* harmony export */   getTypographyCss: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.getTypographyCss),
/* harmony export */   loadGoogleFont: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.loadGoogleFont),
/* harmony export */   mobileBreakpoint: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.mobileBreakpoint),
/* harmony export */   perUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.perUnit),
/* harmony export */   pxUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.pxUnit),
/* harmony export */   remUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.remUnit),
/* harmony export */   tabBreakpoint: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.tabBreakpoint),
/* harmony export */   vhUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.vhUnit),
/* harmony export */   vwUnit: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.vwUnit)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components */ "../tr-tools/Components/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../tr-tools/utils/index.js");



/***/ },

/***/ "../tr-tools/utils/getCSS.js"
/*!***********************************!*\
  !*** ../tr-tools/utils/getCSS.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBorderCss: () => (/* binding */ getBorderCss),
/* harmony export */   getBorderRadiusCss: () => (/* binding */ getBorderRadiusCss),
/* harmony export */   getShadowCss: () => (/* binding */ getShadowCss),
/* harmony export */   getTypographyCss: () => (/* binding */ getTypographyCss),
/* harmony export */   loadGoogleFont: () => (/* binding */ loadGoogleFont)
/* harmony export */ });
const FONT_VARIANTS_MAP = {
  inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  roboto: [100, 300, 400, 500, 700, 900],
  outfit: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  "open sans": [300, 400, 500, 600, 700, 800],
  poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  "playfair display": [400, 500, 600, 700, 800, 900],
  lato: [100, 300, 400, 700, 900],
  oswald: [200, 300, 400, 500, 600, 700],
  merriweather: [300, 400, 700, 900]
};

/**
 * Dynamic Google Font Loader
 */
const loadGoogleFont = fontFamily => {
  if (!fontFamily || fontFamily.toLowerCase() === "default" || typeof document === "undefined") {
    return;
  }
  const slug = fontFamily.toLowerCase().replace(/\s+/g, "-");
  const fontId = `gbb-google-font-${slug}`;
  const variants = FONT_VARIANTS_MAP[fontFamily.toLowerCase()] || [400, 500, 600, 700];
  const wghtParam = `:wght@${variants.join(";")}`;
  const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}${wghtParam}&display=swap`;
  const injectLink = targetDoc => {
    if (!targetDoc || !targetDoc.head || targetDoc.getElementById(fontId)) return;
    const link = targetDoc.createElement("link");
    link.id = fontId;
    link.rel = "stylesheet";
    link.href = fontUrl;
    targetDoc.head.appendChild(link);
  };
  injectLink(document);
  const editorIframe = document.querySelector('iframe[name="editor-canvas"]');
  if (editorIframe && editorIframe.contentDocument) {
    injectLink(editorIframe.contentDocument);
  }
};

/**
 * Helper function to generate CSS string from typography attribute object
 * @param {Object} typo - Typography value object
 * @param {boolean} [important=false] - Whether to append !important to styles
 * @returns {string} CSS styles string
 */
const getTypographyCss = (typo = {}, important = false) => {
  if (!typo || typeof typo !== "object") return "";
  const imp = important ? " !important" : "";
  const fontSize = typo.fontSize;
  const desktopFontSize = fontSize?.desktop || (typeof fontSize === 'string' || typeof fontSize === 'number' ? fontSize : '');
  const tabletFontSize = fontSize?.tablet || desktopFontSize;
  const mobileFontSize = fontSize?.mobile || tabletFontSize;
  const checkUnit = size => {
    const value = String(size);
    const units = ["px", "em", "rem", "%", "vh", "vw"];
    if (units.some(unit => value.endsWith(unit))) {
      return value;
    } else if (typeof size === "number" || !isNaN(size) && size !== "") {
      return `${value}px`;
    }
    return "";
  };
  const styles = [];
  if (typo.fontSize) {
    styles.push(`font-size: ${checkUnit(desktopFontSize)}${imp};`);
    if (tabletFontSize && tabletFontSize !== desktopFontSize) {
      styles.push(`@media (max-width: 1024px) { font-size: ${checkUnit(tabletFontSize)}${imp}; }`);
    }
    if (mobileFontSize && mobileFontSize !== tabletFontSize) {
      styles.push(`@media (max-width: 767px) { font-size: ${checkUnit(mobileFontSize)}${imp}; }`);
    }
  }
  if (typo.fontFamily && typo.fontFamily.toLowerCase() !== "default") {
    loadGoogleFont(typo.fontFamily);
    styles.push(`font-family: '${typo.fontFamily}', sans-serif${imp};`);
  }
  if (typo.fontWeight) {
    styles.push(`font-weight: ${typo.fontWeight}${imp};`);
  }
  if (typo.lineHeight) {
    styles.push(`line-height: ${typo.lineHeight}${imp};`);
  }
  if (typo.letterSpacing !== undefined && typo.letterSpacing !== "" && typo.letterSpacing !== 0) {
    styles.push(`letter-spacing: ${checkUnit(typo.letterSpacing)}${imp};`);
  }
  if (typo.textTransform && typo.textTransform !== "none") {
    styles.push(`text-transform: ${typo.textTransform}${imp};`);
  }
  if (typo.textDecoration && typo.textDecoration !== "none") {
    styles.push(`text-decoration: ${typo.textDecoration}${imp};`);
  }
  if (typo.fontStyle && typo.fontStyle !== "normal") {
    styles.push(`font-style: ${typo.fontStyle}${imp};`);
  }
  return styles.join("\n");
};

/**
 * Helper function to generate CSS string for border radius
 * @param {Object|string} radius - Border radius value object or string
 * @returns {string} CSS border-radius string
 */
const getBorderRadiusCss = radius => {
  if (!radius) return "";
  if (typeof radius === "string") return `border-radius: ${radius};`;
  return `border-radius: ${radius?.top || "0px"} ${radius?.right || "0px"} ${radius?.bottom || "0px"} ${radius?.left || "0px"};`;
};

/**
 * Helper function to generate CSS string for border
 * @param {Object} border - Border value object
 * @returns {string} CSS border string
 */
const getBorderCss = border => {
  if (!border || typeof border !== 'object') return '';
  const {
    width,
    style,
    color,
    side
  } = border;
  if (!width) return '';
  const borderValue = `${width} ${style || 'solid'} ${color || 'transparent'}`;
  if (side === 'all' || !side) {
    return `border: ${borderValue};`;
  } else {
    const sides = side.split('-');
    return sides.map(s => `border-${s}: ${borderValue};`).join(' ');
  }
};

/**
 * Helper function to generate CSS string for shadow
 * @param {Object} shadowObj - Shadow value object
 * @returns {string} CSS shadow string
 */
const getShadowCss = shadowObj => {
  if (!shadowObj) return '';
  // Since DEFAULT_SHADOW is in ShadowControl.js, we define defaults inline here
  const hOffset = shadowObj.hOffset || '0px';
  const vOffset = shadowObj.vOffset || '0px';
  const blur = shadowObj.blur || '0px';
  const spread = shadowObj.spread || '0px';
  const color = shadowObj.color;
  if (!color) return '';
  return `${hOffset} ${vOffset} ${blur} ${spread} ${color}`;
};

/***/ },

/***/ "../tr-tools/utils/index.js"
/*!**********************************!*\
  !*** ../tr-tools/utils/index.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emUnit: () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_1__.emUnit),
/* harmony export */   getBorderCss: () => (/* reexport safe */ _getCSS__WEBPACK_IMPORTED_MODULE_0__.getBorderCss),
/* harmony export */   getBorderRadiusCss: () => (/* reexport safe */ _getCSS__WEBPACK_IMPORTED_MODULE_0__.getBorderRadiusCss),
/* harmony export */   getShadowCss: () => (/* reexport safe */ _getCSS__WEBPACK_IMPORTED_MODULE_0__.getShadowCss),
/* harmony export */   getTypographyCss: () => (/* reexport safe */ _getCSS__WEBPACK_IMPORTED_MODULE_0__.getTypographyCss),
/* harmony export */   loadGoogleFont: () => (/* reexport safe */ _getCSS__WEBPACK_IMPORTED_MODULE_0__.loadGoogleFont),
/* harmony export */   mobileBreakpoint: () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_1__.mobileBreakpoint),
/* harmony export */   perUnit: () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_1__.perUnit),
/* harmony export */   pxUnit: () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_1__.pxUnit),
/* harmony export */   remUnit: () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_1__.remUnit),
/* harmony export */   tabBreakpoint: () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_1__.tabBreakpoint),
/* harmony export */   vhUnit: () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_1__.vhUnit),
/* harmony export */   vwUnit: () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_1__.vwUnit)
/* harmony export */ });
/* harmony import */ var _getCSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCSS */ "../tr-tools/utils/getCSS.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "../tr-tools/utils/options.js");



/***/ },

/***/ "../tr-tools/utils/options.js"
/*!************************************!*\
  !*** ../tr-tools/utils/options.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emUnit: () => (/* binding */ emUnit),
/* harmony export */   mobileBreakpoint: () => (/* binding */ mobileBreakpoint),
/* harmony export */   perUnit: () => (/* binding */ perUnit),
/* harmony export */   pxUnit: () => (/* binding */ pxUnit),
/* harmony export */   remUnit: () => (/* binding */ remUnit),
/* harmony export */   tabBreakpoint: () => (/* binding */ tabBreakpoint),
/* harmony export */   vhUnit: () => (/* binding */ vhUnit),
/* harmony export */   vwUnit: () => (/* binding */ vwUnit)
/* harmony export */ });
const pxUnit = (def = 0) => ({
  value: 'px',
  label: 'px',
  default: def
});
const perUnit = (def = 0) => ({
  value: '%',
  label: '%',
  default: def
});
const emUnit = (def = 0) => ({
  value: 'em',
  label: 'em',
  default: def
});
const remUnit = (def = 0) => ({
  value: 'rem',
  label: 'rem',
  default: def
});
const vwUnit = (def = 0) => ({
  value: 'vw',
  label: 'vw',
  default: def
});
const vhUnit = (def = 0) => ({
  value: 'vh',
  label: 'vh',
  default: def
});
const tabBreakpoint = '@media (max-width: 991px)';
const mobileBreakpoint = '@media (max-width: 767px)';

/***/ },

/***/ "./src/blocks/accordion/Components/Backend/Edit.js"
/*!*********************************************************!*\
  !*** ./src/blocks/accordion/Components/Backend/Edit.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings/Settings */ "./src/blocks/accordion/Components/Backend/Settings/Settings.js");
/* harmony import */ var _Common_Templates_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Templates/Accordion */ "./src/blocks/accordion/Components/Common/Templates/Accordion.jsx");
/* harmony import */ var _Common_DynamicStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/DynamicStyles */ "./src/blocks/accordion/Components/Common/DynamicStyles.js");
/* harmony import */ var tr_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tr-tools */ "../tr-tools/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/data */ "./src/blocks/accordion/utils/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    selectedTemplate = ''
  } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);
  const id = `block-${clientId}`; //akne block prefix ta defulte vabe asche ata cheange kora jabe na

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Settings_Settings__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attributes,
      setAttributes,
      clientId
    }), !isTemplateSelected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_4__.TemplateSelector, {
        attributes,
        setAttributes,
        title: _utils_data__WEBPACK_IMPORTED_MODULE_5__.templateData.title,
        subtitle: _utils_data__WEBPACK_IMPORTED_MODULE_5__.templateData.subtitle,
        templates: _utils_data__WEBPACK_IMPORTED_MODULE_5__.templateData.templates,
        isPro: true //akne freemius aer true/false jabe 
        ,
        proTemplates: ['template-3']
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Common_DynamicStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        id: id
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Common_Templates_Accordion__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        id: id
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ },

/***/ "./src/blocks/accordion/Components/Backend/Settings/General/General.js"
/*!*****************************************************************************!*\
  !*** ./src/blocks/accordion/Components/Backend/Settings/General/General.js ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tr_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tr-tools */ "../tr-tools/index.js");
/* harmony import */ var _PanelItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PanelItems */ "./src/blocks/accordion/Components/Backend/Settings/General/PanelItems.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const General = ({
  attributes,
  setAttributes
}) => {
  const {
    faqsData = [],
    allowMultiple,
    showHeader,
    iconPosition = 'left',
    iconType = 'chevron',
    iconSize = 22,
    iconColor = '',
    subtitle,
    title,
    description
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template Presets', 'guten-builder-blocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        style: {
          fontSize: '12px',
          color: '#64748b',
          marginBottom: '12px'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Switch or apply a predefined FAQ accordion template style.', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isSecondary: true,
        onClick: () => setAttributes({
          selectedTemplate: ''
        }),
        style: {
          width: '100%',
          justifyContent: 'center'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change Template', 'guten-builder-blocks')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Header', 'guten-builder-blocks'),
        checked: showHeader,
        onChange: val => setAttributes({
          showHeader: val
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle to show or hide the subtitle, title, and description section.', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Allow Multiple Open', 'guten-builder-blocks'),
        checked: allowMultiple,
        onChange: val => setAttributes({
          allowMultiple: val
        }),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('If disabled, expanding one item collapses the others.', 'guten-builder-blocks')
      })]
    }), showHeader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Header Content', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subtitle', 'guten-builder-blocks'),
        value: subtitle,
        onChange: val => setAttributes({
          subtitle: val
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add your subtitle here', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'guten-builder-blocks'),
        value: title,
        onChange: val => setAttributes({
          title: val
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add your title here', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description', 'guten-builder-blocks'),
        value: description,
        onChange: val => setAttributes({
          description: val
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add your description here', 'guten-builder-blocks'),
        rows: 3
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ItemsPanel, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('FAQ Items Manager', 'guten-builder-blocks'),
      initialOpen: true,
      items: faqsData,
      onChange: newFaqs => setAttributes({
        faqsData: newFaqs
      }),
      defaultItem: {
        question: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'guten-builder-blocks'),
        answer: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('', 'guten-builder-blocks')
      },
      addButtonLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add FAQ Item', 'guten-builder-blocks'),
      itemTitleKey: "question",
      ItemSettings: _PanelItems__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Settings', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Position :', 'guten-builder-blocks'),
        value: iconPosition,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'guten-builder-blocks'),
          value: 'left'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'guten-builder-blocks'),
          value: 'right'
        }],
        __next40pxDefaultSize: true,
        onChange: val => setAttributes({
          iconPosition: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Type :', 'guten-builder-blocks'),
        value: iconType,
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Chevron', 'guten-builder-blocks'),
          value: 'chevron'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Plus / Minus', 'guten-builder-blocks'),
          value: 'plus-minus'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Caret', 'guten-builder-blocks'),
          value: 'caret'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None (Hide Icon)', 'guten-builder-blocks'),
          value: 'none'
        }],
        __next40pxDefaultSize: true,
        onChange: val => setAttributes({
          iconType: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Size (px)', 'guten-builder-blocks'),
        value: iconSize,
        onChange: val => setAttributes({
          iconSize: val
        }),
        min: 12,
        max: 48,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon Color', 'guten-builder-blocks'),
        value: iconColor,
        onChange: color => {
          setAttributes({
            iconColor: color
          });
        },
        defaultColor: ""
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ },

/***/ "./src/blocks/accordion/Components/Backend/Settings/General/PanelItems.js"
/*!********************************************************************************!*\
  !*** ./src/blocks/accordion/Components/Backend/Settings/General/PanelItems.js ***!
  \********************************************************************************/
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



const PanelItems = ({
  item,
  index,
  updateField
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      paddingBottom: '8px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Question', 'guten-builder-blocks'),
      value: item.question !== undefined ? item.question : '',
      onChange: val => updateField('question', val)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Answer', 'guten-builder-blocks'),
      value: item.answer !== undefined ? item.answer : '',
      onChange: val => updateField('answer', val),
      rows: 3
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelItems);

/***/ },

/***/ "./src/blocks/accordion/Components/Backend/Settings/Settings.js"
/*!**********************************************************************!*\
  !*** ./src/blocks/accordion/Components/Backend/Settings/Settings.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/options */ "./src/blocks/accordion/utils/options.js");
/* harmony import */ var tr_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tr-tools */ "../tr-tools/index.js");
/* harmony import */ var _General_General__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./General/General */ "./src/blocks/accordion/Components/Backend/Settings/General/General.js");
/* harmony import */ var _Style_Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style/Style */ "./src/blocks/accordion/Components/Backend/Settings/Style/Style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const Settings = ({
  attributes,
  setAttributes,
  clientId
}) => {
  const {
    selectedTemplate = ''
  } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_4__.DocsLink, {
      link: "https://gutenbuilder.com/docs/accordion",
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Documentation', 'guten-builder-blocks')
    }), isTemplateSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
      className: "guten-builder-blocks-tab-panel",
      activeClass: "guten-builder-blocks-active-tab",
      tabs: _utils_options__WEBPACK_IMPORTED_MODULE_3__.subStyleTabs,
      children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ['general' === tab.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_General_General__WEBPACK_IMPORTED_MODULE_5__["default"], {
          attributes: attributes,
          setAttributes: setAttributes,
          clientId: clientId
        }), 'style' === tab.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Style_Style__WEBPACK_IMPORTED_MODULE_6__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ },

/***/ "./src/blocks/accordion/Components/Backend/Settings/Style/Style.js"
/*!*************************************************************************!*\
  !*** ./src/blocks/accordion/Components/Backend/Settings/Style/Style.js ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tr_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tr-tools */ "../tr-tools/index.js");
/* harmony import */ var tr_tools_utils_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tr-tools/utils/options */ "../tr-tools/utils/options.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/options */ "./src/blocks/accordion/utils/options.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const Style = ({
  attributes,
  setAttributes
}) => {
  const {
    selectedTemplate = 'template-1',
    subtitleColor,
    subtitleTypography,
    titleColor,
    titleTypography,
    descriptionColor,
    descriptionTypography,
    questionBg = '#FFFFFF',
    questionBorder,
    questionBorderRadius,
    questionTypography,
    answerTypography,
    questionColor,
    answerColor,
    showHeader
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [showHeader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(' Heading', 'guten-builder-blocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subtitle Color', 'guten-builder-blocks'),
        value: subtitleColor,
        onChange: color => {
          setAttributes({
            subtitleColor: color
          });
        },
        defaultColor: "#475569"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subtitle Typography', 'guten-builder-blocks'),
        value: subtitleTypography,
        onChange: val => {
          setAttributes({
            subtitleTypography: val
          });
        },
        defaultTypography: _utils_options__WEBPACK_IMPORTED_MODULE_4__.defaultSubtitleTypo
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Color', 'guten-builder-blocks'),
        value: titleColor,
        onChange: color => {
          setAttributes({
            titleColor: color
          });
        },
        defaultColor: "#0f172a"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Typography', 'guten-builder-blocks'),
        value: titleTypography,
        onChange: val => {
          setAttributes({
            titleTypography: val
          });
        },
        defaultTypography: _utils_options__WEBPACK_IMPORTED_MODULE_4__.defaultTitleTypo
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description Color', 'guten-builder-blocks'),
        value: descriptionColor,
        onChange: color => {
          setAttributes({
            descriptionColor: color
          });
        },
        defaultColor: "#64748b"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description Typography', 'guten-builder-blocks'),
        value: descriptionTypography,
        onChange: val => {
          setAttributes({
            descriptionTypography: val
          });
        },
        defaultTypography: _utils_options__WEBPACK_IMPORTED_MODULE_4__.defaultDescriptionTypo
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Q/A Content', 'guten-builder-blocks'),
      initialOpen: false,
      children: [(selectedTemplate === 'template-1' || selectedTemplate === 'template-3') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.BackgroundControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Question Bg :', 'guten-builder-blocks'),
          value: questionBg,
          onChange: val => setAttributes({
            questionBg: val
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {})]
      }), (selectedTemplate === 'template-1' || selectedTemplate === 'template-2' || selectedTemplate === 'template-3') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.BorderControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Question Border :', 'guten-builder-blocks'),
          value: questionBorder,
          onChange: val => setAttributes({
            questionBorder: val
          }),
          defaultBorder: selectedTemplate === 'template-2' ? {
            color: '#e2e8f0',
            width: '1px',
            style: 'solid',
            side: 'bottom'
          } : {
            color: '#e0e7ff',
            width: '1px',
            style: 'solid',
            side: 'all'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {})]
      }), (selectedTemplate === 'template-1' || selectedTemplate === 'template-3') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.SpacingControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius :', 'guten-builder-blocks'),
          value: questionBorderRadius,
          onChange: val => setAttributes({
            questionBorderRadius: val
          }),
          units: [(0,tr_tools_utils_options__WEBPACK_IMPORTED_MODULE_3__.pxUnit)(), (0,tr_tools_utils_options__WEBPACK_IMPORTED_MODULE_3__.remUnit)(), (0,tr_tools_utils_options__WEBPACK_IMPORTED_MODULE_3__.emUnit)(), (0,tr_tools_utils_options__WEBPACK_IMPORTED_MODULE_3__.vwUnit)(), (0,tr_tools_utils_options__WEBPACK_IMPORTED_MODULE_3__.perUnit)()],
          defaultVal: {
            top: '6px',
            right: '6px',
            bottom: '6px',
            left: '6px'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Question Color', 'guten-builder-blocks'),
        value: questionColor,
        onChange: color => {
          setAttributes({
            questionColor: color
          });
        },
        defaultColor: "#0f172a"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Question Typography', 'guten-builder-blocks'),
        value: questionTypography,
        onChange: val => {
          setAttributes({
            questionTypography: val
          });
        },
        defaultTypography: _utils_options__WEBPACK_IMPORTED_MODULE_4__.defaultQuestionTypo
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Answer Color', 'guten-builder-blocks'),
        value: answerColor,
        onChange: color => {
          setAttributes({
            answerColor: color
          });
        },
        defaultColor: "#475569"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Answer Typography', 'guten-builder-blocks'),
        value: answerTypography,
        onChange: val => {
          setAttributes({
            answerTypography: val
          });
        },
        defaultTypography: _utils_options__WEBPACK_IMPORTED_MODULE_4__.defaultAnswerTypo
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/accordion/Components/Common/DynamicStyles.js"
/*!*****************************************************************!*\
  !*** ./src/blocks/accordion/Components/Common/DynamicStyles.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tr_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tr-tools */ "../tr-tools/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const DynamicStyles = ({
  attributes,
  id
}) => {
  const {
    subtitleColor,
    titleColor,
    descriptionColor,
    subtitleTypography,
    titleTypography,
    descriptionTypography,
    questionBg,
    questionBorder,
    questionBorderRadius = '6px',
    questionColor,
    answerColor,
    questionTypography,
    answerTypography,
    iconColor
  } = attributes || {};
  const mainSl = `#${id}`;
  const wrapper = mainSl;
  const subtitle = `${wrapper} .gbb-faq-subtitle`;
  const title = `${wrapper} .gbb-faq-title`;
  const description = `${wrapper} .gbb-faq-description`;
  const header = `${wrapper} .gbb-faq-header`;
  const question = `${wrapper} .gbb-faq-question, ${wrapper} .gbb-faq-question-text`;
  const answer = `${wrapper} .gbb-faq-answer`;
  const icon = `${wrapper} .gbb-faq-arrow`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: `
        ${subtitle} {
          ${subtitleColor ? `color: ${subtitleColor};` : ''}
          ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getTypographyCss)(subtitleTypography)}
        }

        ${title} {
          ${titleColor ? `color: ${titleColor};` : ''}
          ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getTypographyCss)(titleTypography)}
        }

        ${description} {
          ${descriptionColor ? `color: ${descriptionColor};` : ''}
          ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getTypographyCss)(descriptionTypography)}
        }

        ${header} {

        }
        ${mainSl}.gbb-template-one-wapper .gbb-faq-header,
        ${mainSl}.gbb-template-three-wapper .gbb-faq-item {
          ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBackgroundCss)(questionBg) ? `background: ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBackgroundCss)(questionBg)};` : ''}
          ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBorderCss)(questionBorder)}
          ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBorderRadiusCss)(questionBorderRadius)}
        }

        ${mainSl}.gbb-template-two-wapper .gbb-faq-item {
          ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBorderCss)(questionBorder)}
        }

        ${question} {
          ${questionColor ? `color: ${questionColor};` : ''}
          ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getTypographyCss)(questionTypography)}
        }

        ${answer} {
          ${answerColor ? `color: ${answerColor};` : ''}
          ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getTypographyCss)(answerTypography)}
        }

        ${icon} {
          ${iconColor ? `color: ${iconColor};` : ''}
        }
        `
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicStyles);

/***/ },

/***/ "./src/blocks/accordion/Components/Common/Templates/Accordion.jsx"
/*!************************************************************************!*\
  !*** ./src/blocks/accordion/Components/Common/Templates/Accordion.jsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TemplateOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TemplateOne */ "./src/blocks/accordion/Components/Common/Templates/TemplateOne.jsx");
/* harmony import */ var _TemplateTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TemplateTwo */ "./src/blocks/accordion/Components/Common/Templates/TemplateTwo.jsx");
/* harmony import */ var _TemplateThree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TemplateThree */ "./src/blocks/accordion/Components/Common/Templates/TemplateThree.jsx");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/functions */ "./src/blocks/accordion/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const TEMPLATES = {
  'template-1': _TemplateOne__WEBPACK_IMPORTED_MODULE_1__["default"],
  'template-2': _TemplateTwo__WEBPACK_IMPORTED_MODULE_2__["default"],
  'template-3': _TemplateThree__WEBPACK_IMPORTED_MODULE_3__["default"]
};
const Accordion = ({
  attributes,
  setAttributes,
  id
}) => {
  const {
    selectedTemplate = 'template-1',
    allowMultiple = false
  } = attributes || {};
  const [openIndices, setOpenIndices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const isEditor = typeof setAttributes === 'function';
  const toggleItem = index => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter(i => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      if (openIndices.includes(index)) {
        setOpenIndices([]);
      } else {
        setOpenIndices([index]);
      }
    }
  };
  const updateFaqQuestion = (index, value) => {
    if (!isEditor) return;
    setAttributes((0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.updateData)(attributes, value, 'faqsData', index, 'question'));
  };
  const updateFaqAnswer = (index, value) => {
    if (!isEditor) return;
    setAttributes((0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.updateData)(attributes, value, 'faqsData', index, 'answer'));
  };
  const TemplateComponent = TEMPLATES[selectedTemplate] || _TemplateOne__WEBPACK_IMPORTED_MODULE_1__["default"];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TemplateComponent, {
    attributes: attributes,
    setAttributes: setAttributes,
    openIndices: openIndices,
    toggleItem: toggleItem,
    updateFaqQuestion: updateFaqQuestion,
    updateFaqAnswer: updateFaqAnswer,
    isEditor: isEditor,
    id: id
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);

/***/ },

/***/ "./src/blocks/accordion/Components/Common/Templates/TemplateOne.jsx"
/*!**************************************************************************!*\
  !*** ./src/blocks/accordion/Components/Common/Templates/TemplateOne.jsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/functions */ "./src/blocks/accordion/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const TemplateOne = ({
  attributes,
  setAttributes,
  openIndices = [],
  toggleItem,
  updateFaqQuestion,
  updateFaqAnswer,
  isEditor,
  id
}) => {
  const {
    subtitle,
    title,
    description,
    faqsData = [],
    showHeader = true,
    iconPosition = 'left',
    iconType = 'chevron',
    iconSize = 22,
    iconColor = ''
  } = attributes || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "gbb-template-one-wapper",
    id: id,
    children: [showHeader && (isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: "p",
        className: "gbb-faq-subtitle",
        value: subtitle,
        onChange: val => setAttributes({
          subtitle: val
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your subtitle here', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: "h1",
        className: "gbb-faq-title",
        value: title,
        onChange: val => setAttributes({
          title: val
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your title here', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: "p",
        className: "gbb-faq-description",
        value: description,
        onChange: val => setAttributes({
          description: val
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your description here', 'guten-builder-blocks')
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "p",
        className: "gbb-faq-subtitle",
        value: subtitle
      }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "h1",
        className: "gbb-faq-title",
        value: title
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        tagName: "p",
        className: "gbb-faq-description",
        value: description
      })]
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "gbb-faq-list",
      children: faqsData.map((faq, index) => {
        const isOpen = openIndices.includes(index);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "gbb-faq-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: `gbb-faq-header gbb-icon-${iconPosition}`,
            onClick: () => toggleItem(index),
            children: [iconPosition === 'left' && (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.renderFaqIcon)(isOpen, iconType, iconSize, iconColor), isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
              tagName: "h2",
              className: "gbb-faq-question",
              value: faq.question,
              onChange: val => updateFaqQuestion(index, val),
              onClick: e => e.stopPropagation(),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your accordion Question here', 'guten-builder-blocks')
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "h2",
              className: "gbb-faq-question",
              value: faq.question
            }), iconPosition === 'right' && (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.renderFaqIcon)(isOpen, iconType, iconSize, iconColor)]
          }), isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: "p",
            className: `gbb-faq-answer ${isOpen ? 'is-open' : 'is-closed'}`,
            value: faq.answer,
            onChange: val => updateFaqAnswer(index, val),
            onClick: e => e.stopPropagation(),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your accordion answer here ...', 'guten-builder-blocks')
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: "p",
            className: `gbb-faq-answer ${isOpen ? 'is-open' : 'is-closed'}`,
            value: faq.answer
          })]
        }, index);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateOne);

/***/ },

/***/ "./src/blocks/accordion/Components/Common/Templates/TemplateThree.jsx"
/*!****************************************************************************!*\
  !*** ./src/blocks/accordion/Components/Common/Templates/TemplateThree.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/functions */ "./src/blocks/accordion/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const TemplateThree = ({
  attributes,
  setAttributes,
  openIndices = [],
  toggleItem,
  updateFaqQuestion,
  updateFaqAnswer,
  isEditor,
  id
}) => {
  const {
    subtitle,
    title,
    description,
    faqsData = [],
    showHeader = true,
    iconPosition = 'left',
    iconType = 'chevron',
    iconSize = 22,
    iconColor = ''
  } = attributes || {};
  const contentRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "gbb-template-three-wapper",
    id: id,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: "gbb-faq-section",
      children: [showHeader && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "gbb-faq-header-content",
        children: isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: "p",
            className: "gbb-faq-subtitle",
            value: subtitle,
            onChange: val => setAttributes({
              subtitle: val
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your subtitle here', 'guten-builder-blocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: "h1",
            className: "gbb-faq-title",
            value: title,
            onChange: val => setAttributes({
              title: val
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your title here', 'guten-builder-blocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: "p",
            className: "gbb-faq-description",
            value: description,
            onChange: val => setAttributes({
              description: val
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your description here', 'guten-builder-blocks')
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: "p",
            className: "gbb-faq-subtitle",
            value: subtitle
          }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: "h1",
            className: "gbb-faq-title",
            value: title
          }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: "p",
            className: "gbb-faq-description",
            value: description
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "gbb-faq-list",
        children: faqsData.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: `gbb-faq-item ${isOpen ? 'is-open' : ''}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              id: `faq-heading-${index}`,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
                type: "button",
                "aria-expanded": isOpen,
                "aria-controls": `faq-panel-${index}`,
                onClick: () => toggleItem(index),
                className: `gbb-faq-toggle gbb-icon-${iconPosition}`,
                children: [iconPosition === 'left' && (0,_utils_functions__WEBPACK_IMPORTED_MODULE_3__.renderFaqIcon)(isOpen, iconType, iconSize, iconColor), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                  className: "gbb-faq-question-text",
                  children: isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                    tagName: "span",
                    value: faq.question,
                    onChange: val => updateFaqQuestion(index, val),
                    onClick: e => e.stopPropagation(),
                    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your question here', 'guten-builder-blocks')
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                    tagName: "span",
                    value: faq.question
                  })
                }), iconPosition === 'right' && (0,_utils_functions__WEBPACK_IMPORTED_MODULE_3__.renderFaqIcon)(isOpen, iconType, iconSize, iconColor)]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              id: `faq-panel-${index}`,
              role: "region",
              "aria-labelledby": `faq-heading-${index}`,
              "aria-hidden": !isOpen,
              ref: el => contentRefs.current[index] = el,
              style: {
                maxHeight: isOpen ? `${contentRefs.current[index]?.scrollHeight}px` : '0px'
              },
              className: "gbb-faq-content-wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "gbb-faq-content-inner",
                children: isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
                  tagName: "p",
                  className: "gbb-faq-answer",
                  value: faq.answer,
                  onChange: val => updateFaqAnswer(index, val),
                  onClick: e => e.stopPropagation(),
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your answer here', 'guten-builder-blocks')
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                  tagName: "p",
                  className: "gbb-faq-answer",
                  value: faq.answer
                })
              })
            })]
          }, index);
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateThree);

/***/ },

/***/ "./src/blocks/accordion/Components/Common/Templates/TemplateTwo.jsx"
/*!**************************************************************************!*\
  !*** ./src/blocks/accordion/Components/Common/Templates/TemplateTwo.jsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/functions */ "./src/blocks/accordion/utils/functions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const TemplateTwo = ({
  attributes,
  setAttributes,
  openIndices = [],
  toggleItem,
  updateFaqQuestion,
  updateFaqAnswer,
  isEditor,
  id
}) => {
  const {
    subtitle,
    title,
    description,
    faqsData = [],
    showHeader,
    iconPosition = 'left',
    iconType = 'chevron',
    iconSize = 22,
    iconColor = ''
  } = attributes || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "gbb-template-two-wapper",
    id: id,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gbb-faq-container",
      children: [showHeader && (isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
          tagName: "p",
          className: "gbb-faq-subtitle",
          value: subtitle,
          onChange: val => setAttributes({
            subtitle: val
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your subtitle here', 'guten-builder-blocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
          tagName: "h1",
          className: "gbb-faq-title",
          value: title,
          onChange: val => setAttributes({
            title: val
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your title here', 'guten-builder-blocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
          tagName: "p",
          className: "gbb-faq-description",
          value: description,
          onChange: val => setAttributes({
            description: val
          }),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your description here', 'guten-builder-blocks')
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "p",
          className: "gbb-faq-subtitle",
          value: subtitle
        }), title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "h1",
          className: "gbb-faq-title",
          value: title
        }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          tagName: "p",
          className: "gbb-faq-description",
          value: description
        })]
      })), faqsData.map((faq, index) => {
        const isOpen = openIndices.includes(index);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "gbb-faq-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: `gbb-faq-header gbb-icon-${iconPosition}`,
            onClick: () => toggleItem(index),
            children: [iconPosition === 'left' && (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.renderFaqIcon)(isOpen, iconType, iconSize, iconColor), isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
              tagName: "h3",
              className: "gbb-faq-question",
              value: faq.question,
              onChange: val => updateFaqQuestion(index, val),
              onClick: e => e.stopPropagation(),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your question here', 'guten-builder-blocks')
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
              tagName: "h3",
              className: "gbb-faq-question",
              value: faq.question
            }), iconPosition === 'right' && (0,_utils_functions__WEBPACK_IMPORTED_MODULE_2__.renderFaqIcon)(isOpen, iconType, iconSize, iconColor)]
          }), isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
            tagName: "p",
            className: `gbb-faq-answer ${isOpen ? 'is-open' : 'is-closed'}`,
            value: faq.answer,
            onChange: val => updateFaqAnswer(index, val),
            onClick: e => e.stopPropagation(),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add your answer here', 'guten-builder-blocks')
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
            tagName: "p",
            className: `gbb-faq-answer ${isOpen ? 'is-open' : 'is-closed'}`,
            value: faq.answer
          })]
        }, index);
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateTwo);

/***/ },

/***/ "./src/blocks/accordion/utils/data.js"
/*!********************************************!*\
  !*** ./src/blocks/accordion/utils/data.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateOneSvg: () => (/* binding */ TemplateOneSvg),
/* harmony export */   TemplateThreeSvg: () => (/* binding */ TemplateThreeSvg),
/* harmony export */   TemplateTwoSvg: () => (/* binding */ TemplateTwoSvg),
/* harmony export */   templateData: () => (/* binding */ templateData)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


// SVG Wireframe Previews for 3 Templates with high-fidelity visual design

const TemplateOneSvg = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 800 580",
  width: "100%",
  height: "100%",
  style: {
    fontFamily: "system-ui, -apple-system, sans-serif"
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    width: "800",
    height: "580",
    fill: "#ffffff",
    rx: "8"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "400",
    y: "45",
    fontSize: "15",
    fill: "#6b7280",
    textAnchor: "middle",
    children: "FAQ"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "400",
    y: "90",
    fontSize: "32",
    fontWeight: "700",
    fill: "#0f172a",
    textAnchor: "middle",
    children: "Frequently Asked Questions"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("text", {
    x: "400",
    y: "130",
    fontSize: "17",
    fill: "#64748b",
    textAnchor: "middle",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tspan", {
      x: "400",
      dy: "0",
      children: "Proactively answering FAQs boosts user confidence and"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tspan", {
      x: "400",
      dy: "26",
      children: "cuts down on support tickets."
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "315",
    y1: "162",
    x2: "418",
    y2: "162",
    stroke: "#fcd34d",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "50",
    y: "190",
    width: "700",
    height: "64",
    rx: "8",
    fill: "#ffffff",
    stroke: "#e2e8f0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "75",
    y: "228",
    fontSize: "18",
    fontWeight: "500",
    fill: "#0f172a",
    children: "What is FAQ Accordion?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M 710 218 L 717 225 L 724 218",
    fill: "none",
    stroke: "#0f172a",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "50",
    y: "274",
    width: "700",
    height: "64",
    rx: "8",
    fill: "#ffffff",
    stroke: "#e2e8f0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "75",
    y: "312",
    fontSize: "18",
    fontWeight: "500",
    fill: "#0f172a",
    children: "Is this block fully responsive?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M 710 316 L 717 309 L 724 316",
    fill: "none",
    stroke: "#0f172a",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("text", {
    x: "75",
    y: "365",
    fontSize: "16",
    fill: "#475569",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tspan", {
      x: "75",
      dy: "0",
      children: "Yes! All options are fully responsive and optimized for mobile, tablet, and desktop viewport"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tspan", {
      x: "75",
      dy: "24",
      children: "sizes."
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "50",
    y: "420",
    width: "700",
    height: "64",
    rx: "8",
    fill: "#ffffff",
    stroke: "#e2e8f0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "75",
    y: "458",
    fontSize: "18",
    fontWeight: "500",
    fill: "#0f172a",
    children: "Can I customize colors and typography?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M 710 448 L 717 455 L 724 448",
    fill: "none",
    stroke: "#0f172a",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "50",
    y: "504",
    width: "700",
    height: "64",
    rx: "8",
    fill: "#ffffff",
    stroke: "#e2e8f0",
    strokeWidth: "1.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "75",
    y: "542",
    fontSize: "18",
    fontWeight: "500",
    fill: "#0f172a",
    children: "Does it impact site performance?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M 710 532 L 717 539 L 724 532",
    fill: "none",
    stroke: "#0f172a",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});
const TemplateTwoSvg = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "100%",
  height: "100%",
  viewBox: "0 0 646 434",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    width: "646",
    height: "434",
    fill: "#F9FAFB"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "323",
    y: "25",
    "text-anchor": "middle",
    fill: "#64748B",
    "font-family": "Arial, sans-serif",
    "font-size": "14",
    children: "FAQ"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "323",
    y: "62",
    "text-anchor": "middle",
    fill: "#1E293B",
    "font-family": "Arial, sans-serif",
    "font-size": "24",
    "font-weight": "700",
    children: "Frequently asked questions"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "323",
    y: "97",
    "text-anchor": "middle",
    fill: "#64748B",
    "font-family": "Arial, sans-serif",
    "font-size": "14",
    children: "Everything you need to know about the product and billing."
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "24",
    y: "166",
    fill: "#1E293B",
    "font-family": "Arial, sans-serif",
    "font-size": "16",
    "font-weight": "500",
    children: "Is there a free trial available?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M616 153V167M609 160H623",
    stroke: "#334155",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "24",
    y1: "186.5",
    x2: "628",
    y2: "186.5",
    stroke: "#D1D5DB"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "24",
    y: "221",
    fill: "#1E293B",
    "font-family": "Arial, sans-serif",
    "font-size": "16",
    "font-weight": "500",
    children: "Can I change my plan later?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M610 214H622",
    stroke: "#334155",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "24",
    y: "257",
    fill: "#64748B",
    "font-family": "Arial, sans-serif",
    "font-size": "14",
    children: "Of course. Our pricing scales with your company. Chat to our friendly"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "24",
    y: "279",
    fill: "#64748B",
    "font-family": "Arial, sans-serif",
    "font-size": "14",
    children: "team to find a solution that works for you."
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "24",
    y1: "297.5",
    x2: "628",
    y2: "297.5",
    stroke: "#D1D5DB"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "24",
    y: "331",
    fill: "#1E293B",
    "font-family": "Arial, sans-serif",
    "font-size": "16",
    "font-weight": "500",
    children: "What is your cancellation policy?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M616 318V332M609 325H623",
    stroke: "#334155",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "24",
    y1: "353.5",
    x2: "628",
    y2: "353.5",
    stroke: "#D1D5DB"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "24",
    y: "386",
    fill: "#1E293B",
    "font-family": "Arial, sans-serif",
    "font-size": "16",
    "font-weight": "500",
    children: "Can other info be added to an invoice?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M616 373V387M609 380H623",
    stroke: "#334155",
    "stroke-width": "2",
    "stroke-linecap": "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "24",
    y1: "407.5",
    x2: "628",
    y2: "407.5",
    stroke: "#D1D5DB"
  })]
});
const TemplateThreeSvg = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "100%",
  height: "100%",
  viewBox: "0 0 597 451",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    width: "597",
    height: "451",
    fill: "#ffffff"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "298.5",
    y: "32",
    "text-anchor": "middle",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": "24",
    "font-weight": "700",
    fill: "#07152f",
    children: "Frequently asked questions"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "298.5",
    y: "64",
    "text-anchor": "middle",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": "14",
    "font-weight": "400",
    fill: "#6b7c9a",
    children: "Everything you need to know about the product and billing."
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "23",
    y: "165",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": "16",
    "font-weight": "700",
    fill: "#07152f",
    children: "Is there a free trial available?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M556 157 L561 162 L566 157",
    fill: "none",
    stroke: "#07152f",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
    x: "7",
    y: "195",
    width: "581",
    height: "129",
    rx: "8",
    fill: "#b9bec8"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "23",
    y: "227",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": "16",
    "font-weight": "700",
    fill: "#07152f",
    children: "Can I change my plan later?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M556 224 L561 219 L566 224",
    fill: "none",
    stroke: "#07152f",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "23",
    y: "256",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": "14",
    "font-weight": "400",
    fill: "#07152f",
    children: "Of course. Our pricing scales with your company. Chat to our friendly team to find a"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "23",
    y: "287",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": "14",
    "font-weight": "400",
    fill: "#07152f",
    children: "solution that works for you."
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "23",
    y: "365",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": "16",
    "font-weight": "700",
    fill: "#07152f",
    children: "What is your cancellation policy?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M556 353 L561 358 L566 353",
    fill: "none",
    stroke: "#07152f",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("text", {
    x: "23",
    y: "427",
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": "16",
    "font-weight": "700",
    fill: "#07152f",
    children: "Can other info be added to an invoice?"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M556 415 L561 420 L566 415",
    fill: "none",
    stroke: "#07152f",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })]
});

//Edit.js file jasche
const templateData = {
  templates: [{
    id: 'template-1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template 1', 'guten-builder-blocks'),
    tag: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Classic Minimal', 'guten-builder-blocks'),
    icon: TemplateOneSvg,
    attributes: {
      iconType: 'chevron',
      iconPosition: 'right',
      subtitleColor: '#475569',
      titleColor: '#0f172a',
      descriptionColor: '#64748b',
      questionColor: '#0f172a',
      answerColor: '#475569',
      iconColor: '#0f172a',
      questionBorder: {
        color: '#e0e7ff',
        width: '1px',
        style: 'solid',
        side: 'all'
      }
    }
  }, {
    id: 'template-2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template 2', 'guten-builder-blocks'),
    tag: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Aligned', 'guten-builder-blocks'),
    icon: TemplateTwoSvg,
    attributes: {
      iconType: 'plus-minus',
      iconPosition: 'right',
      showHeader: true,
      subtitleColor: '#475569',
      titleColor: '#0f172a',
      descriptionColor: '#64748b',
      questionColor: '#0f172a',
      answerColor: '#475569',
      iconColor: '#0f172a',
      questionBorder: {
        color: '#e2e8f0',
        width: '1px',
        style: 'solid',
        side: 'bottom'
      }
    }
  }, {
    id: 'template-3',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template 3', 'guten-builder-blocks'),
    tag: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('FAQ Gradient', 'guten-builder-blocks'),
    icon: TemplateThreeSvg,
    attributes: {
      iconType: 'chevron',
      iconPosition: 'right',
      showHeader: true
    }
  }]
};

/***/ },

/***/ "./src/blocks/accordion/utils/functions.js"
/*!*************************************************!*\
  !*** ./src/blocks/accordion/utils/functions.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFaqIcon: () => (/* binding */ renderFaqIcon),
/* harmony export */   updateData: () => (/* binding */ updateData)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const updateData = (attr, value, ...props) => {
  if (!props || props.length === 0) return attr;
  return (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(attr, draft => {
    let current = draft;
    for (let i = 0; i < props.length - 1; i++) {
      const prop = props[i];
      if (current[prop] === undefined || current[prop] === null) {
        current[prop] = typeof props[i + 1] === 'number' ? [] : {};
      }
      current = current[prop];
    }
    current[props[props.length - 1]] = value;
  });
};
const renderFaqIcon = (isOpen, iconType, iconSize, iconColor) => {
  if (iconType === 'none') return null;
  const size = iconSize || 22;
  const colorStyle = iconColor ? {
    color: iconColor
  } : {};
  if (iconType === 'plus-minus') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: size,
      height: size,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `gbb-faq-arrow gbb-icon-plus-minus ${isOpen ? 'is-open' : ''}`,
      style: colorStyle,
      children: isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M3.75 9H14.25",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M9 3.75V14.25M3.75 9H14.25",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    });
  }
  if (iconType === 'caret') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: size,
      height: size,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `gbb-faq-arrow ${isOpen ? 'is-open' : ''}`,
      style: colorStyle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M5.25 7.5L9 12L12.75 7.5H5.25Z",
        fill: "currentColor"
      })
    });
  }

  // Default: Chevron
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    width: size,
    height: size,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `gbb-faq-arrow ${isOpen ? 'is-open' : ''}`,
    style: colorStyle,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
};

/***/ },

/***/ "./src/blocks/accordion/utils/icons.js"
/*!*********************************************!*\
  !*** ./src/blocks/accordion/utils/icons.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralIcon: () => (/* binding */ GeneralIcon),
/* harmony export */   StyleIcon: () => (/* binding */ StyleIcon),
/* harmony export */   faqIcon: () => (/* binding */ faqIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const faqIcon = {
  background: '#FFE4E6',
  foreground: '#E63956',
  src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "50 35 235 220",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    style: {
      color: '#E63956'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "50",
      y: "35",
      width: "235",
      height: "220",
      rx: "30",
      fill: "#FFE4E6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      transform: "translate(210, 90) scale(1.25) translate(-225, -80)",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 195 40 L 255 40 A 25 25 0 0 1 280 65 L 280 95 A 25 25 0 0 1 255 120 L 242 120 L 258 143 L 230 120 L 195 120 A 25 25 0 0 1 170 95 L 170 65 A 25 25 0 0 1 195 40 Z",
        fill: "#FBBF24"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M 226 67.5 C 226 60.5 233 55.5 240.5 55.5 C 247.5 55.5 253.5 60.5 253.5 67.5 C 253.5 73.5 249.5 76.5 245.5 80 C 242.5 82.5 240.5 86 240.5 90 L 240.5 92",
        stroke: "#FFFFFF",
        strokeWidth: "4.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
        cx: "240.5",
        cy: "101",
        r: "2.5",
        fill: "#FFFFFF"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M 96 82 L 204 82 A 38 38 0 0 1 242 120 L 242 172 A 38 38 0 0 1 204 210 L 165 210 L 123 248 A 5 5 0 0 1 114 244 L 117 210 L 96 210 A 38 38 0 0 1 58 172 L 58 120 A 38 38 0 0 1 96 82 Z",
      fill: "#f62477c2"
    })]
  })
};
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

/***/ },

/***/ "./src/blocks/accordion/utils/options.js"
/*!***********************************************!*\
  !*** ./src/blocks/accordion/utils/options.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAnswerTypo: () => (/* binding */ defaultAnswerTypo),
/* harmony export */   defaultDescriptionTypo: () => (/* binding */ defaultDescriptionTypo),
/* harmony export */   defaultQuestionTypo: () => (/* binding */ defaultQuestionTypo),
/* harmony export */   defaultSubtitleTypo: () => (/* binding */ defaultSubtitleTypo),
/* harmony export */   defaultTitleTypo: () => (/* binding */ defaultTitleTypo),
/* harmony export */   subStyleTabs: () => (/* binding */ subStyleTabs)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/blocks/accordion/utils/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const subStyleTabs = [{
  name: 'general',
  title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.GeneralIcon, {}), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'guten-builder-blocks')]
  })
}, {
  name: 'style',
  title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.StyleIcon, {}), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'guten-builder-blocks')]
  })
}];
const defaultSubtitleTypo = {
  fontSize: {
    desktop: "16px",
    tablet: "14px",
    mobile: "12px"
  },
  fontFamily: '',
  fontWeight: '400',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal'
};
const defaultTitleTypo = {
  fontSize: {
    desktop: '24px',
    tablet: '23px',
    mobile: '22px'
  },
  fontFamily: '',
  fontWeight: '700',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal'
};
const defaultDescriptionTypo = {
  fontSize: {
    desktop: '14px',
    tablet: '14px',
    mobile: '13px'
  },
  fontFamily: '',
  fontWeight: '400',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal'
};
const defaultQuestionTypo = {
  fontSize: {
    desktop: "16px",
    tablet: "16px",
    mobile: "14px"
  },
  fontFamily: '',
  fontWeight: '600',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal'
};
const defaultAnswerTypo = {
  fontSize: {
    desktop: "14px",
    tablet: "14px",
    mobile: "13px"
  },
  fontFamily: '',
  fontWeight: '400',
  lineHeight: '',
  letterSpacing: '',
  textTransform: 'none',
  textDecoration: 'none',
  fontStyle: 'normal'
};

/***/ },

/***/ "../tr-tools/Components/BackgroundControl/BackgroundControl.scss"
/*!***********************************************************************!*\
  !*** ../tr-tools/Components/BackgroundControl/BackgroundControl.scss ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/BorderControl/BorderControl.scss"
/*!***************************************************************!*\
  !*** ../tr-tools/Components/BorderControl/BorderControl.scss ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/ColorControl/ColorControl.scss"
/*!*************************************************************!*\
  !*** ../tr-tools/Components/ColorControl/ColorControl.scss ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/DocsLink/DocsLink.scss"
/*!*****************************************************!*\
  !*** ../tr-tools/Components/DocsLink/DocsLink.scss ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/GradientControl/GradientControl.scss"
/*!*******************************************************************!*\
  !*** ../tr-tools/Components/GradientControl/GradientControl.scss ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/ItemsPanel/ItemsPanel.scss"
/*!*********************************************************!*\
  !*** ../tr-tools/Components/ItemsPanel/ItemsPanel.scss ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/MediaControl/MediaControl.scss"
/*!*************************************************************!*\
  !*** ../tr-tools/Components/MediaControl/MediaControl.scss ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/ShadowControl/ShadowControl.scss"
/*!***************************************************************!*\
  !*** ../tr-tools/Components/ShadowControl/ShadowControl.scss ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/SpacingControl/SpacingControl.scss"
/*!*****************************************************************!*\
  !*** ../tr-tools/Components/SpacingControl/SpacingControl.scss ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/TabButton/TabButton.scss"
/*!*******************************************************!*\
  !*** ../tr-tools/Components/TabButton/TabButton.scss ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/TemplateSelector/TemplateSelector.scss"
/*!*********************************************************************!*\
  !*** ../tr-tools/Components/TemplateSelector/TemplateSelector.scss ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/Typography/Typography.scss"
/*!*********************************************************!*\
  !*** ../tr-tools/Components/Typography/Typography.scss ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/Components/UnitControl/UnitControl.scss"
/*!***********************************************************!*\
  !*** ../tr-tools/Components/UnitControl/UnitControl.scss ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/accordion/editor.scss"
/*!******************************************!*\
  !*** ./src/blocks/accordion/editor.scss ***!
  \******************************************/
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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./node_modules/immer/dist/immer.mjs"
/*!*******************************************!*\
  !*** ./node_modules/immer/dist/immer.mjs ***!
  \*******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ Immer2),
/* harmony export */   applyPatches: () => (/* binding */ applyPatches),
/* harmony export */   castDraft: () => (/* binding */ castDraft),
/* harmony export */   castImmutable: () => (/* binding */ castImmutable),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   current: () => (/* binding */ current),
/* harmony export */   enableArrayMethods: () => (/* binding */ enableArrayMethods),
/* harmony export */   enableMapSet: () => (/* binding */ enableMapSet),
/* harmony export */   enablePatches: () => (/* binding */ enablePatches),
/* harmony export */   finishDraft: () => (/* binding */ finishDraft),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   immerable: () => (/* binding */ DRAFTABLE),
/* harmony export */   isDraft: () => (/* binding */ isDraft),
/* harmony export */   isDraftable: () => (/* binding */ isDraftable),
/* harmony export */   nothing: () => (/* binding */ NOTHING),
/* harmony export */   original: () => (/* binding */ original),
/* harmony export */   produce: () => (/* binding */ produce),
/* harmony export */   produceWithPatches: () => (/* binding */ produceWithPatches),
/* harmony export */   setAutoFreeze: () => (/* binding */ setAutoFreeze),
/* harmony export */   setUseStrictIteration: () => (/* binding */ setUseStrictIteration),
/* harmony export */   setUseStrictShallowCopy: () => (/* binding */ setUseStrictShallowCopy)
/* harmony export */ });
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  true ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : 0;
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = isFunction(e) ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  // removed by dead control flow

}

// src/utils/common.ts
var O = Object;
var getPrototypeOf = O.getPrototypeOf;
var CONSTRUCTOR = "constructor";
var PROTOTYPE = "prototype";
var CONFIGURABLE = "configurable";
var ENUMERABLE = "enumerable";
var WRITABLE = "writable";
var VALUE = "value";
var isDraft = (value) => !!value && !!value[DRAFT_STATE];
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || isArray(value) || !!value[DRAFTABLE] || !!value[CONSTRUCTOR]?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = O[PROTOTYPE][CONSTRUCTOR].toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject(value) {
  if (!value || !isObjectish(value))
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null || proto === O[PROTOTYPE])
    return true;
  const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
  if (Ctor === Object)
    return true;
  if (!isFunction(Ctor))
    return false;
  let ctorString = cachedCtorStrings.get(Ctor);
  if (ctorString === void 0) {
    ctorString = Function.toString.call(Ctor);
    cachedCtorStrings.set(Ctor, ctorString);
  }
  return ctorString === objectCtorString;
}
function original(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter, strict = true) {
  if (getArchtype(obj) === 0 /* Object */) {
    const keys = strict ? Reflect.ownKeys(obj) : O.keys(obj);
    keys.forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
var has = (thing, prop, type = getArchtype(thing)) => type === 2 /* Map */ ? thing.has(prop) : O[PROTOTYPE].hasOwnProperty.call(thing, prop);
var get = (thing, prop, type = getArchtype(thing)) => (
  // @ts-ignore
  type === 2 /* Map */ ? thing.get(prop) : thing[prop]
);
var set = (thing, propOrOldValue, value, type = getArchtype(thing)) => {
  if (type === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (type === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
};
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
var isArray = Array.isArray;
var isMap = (target) => target instanceof Map;
var isSet = (target) => target instanceof Set;
var isObjectish = (target) => typeof target === "object";
var isFunction = (target) => typeof target === "function";
var isBoolean = (target) => typeof target === "boolean";
function isArrayIndex(value) {
  const n = +value;
  return Number.isInteger(n) && String(n) === value;
}
var getProxyDraft = (value) => {
  if (!isObjectish(value))
    return null;
  return value?.[DRAFT_STATE];
};
var latest = (state) => state.copy_ || state.base_;
var getValue = (value) => {
  const proxyDraft = getProxyDraft(value);
  return proxyDraft ? proxyDraft.copy_ ?? proxyDraft.base_ : value;
};
var getFinalValue = (state) => state.modified_ ? state.copy_ : state.base_;
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (isArray(base))
    return Array[PROTOTYPE].slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = O.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc[WRITABLE] === false) {
        desc[WRITABLE] = true;
        desc[CONFIGURABLE] = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          [CONFIGURABLE]: true,
          [WRITABLE]: true,
          // could live with !!desc.set as well here...
          [ENUMERABLE]: desc[ENUMERABLE],
          [VALUE]: base[key]
        };
    }
    return O.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = O.create(proto);
    return O.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    O.defineProperties(obj, {
      set: dontMutateMethodOverride,
      add: dontMutateMethodOverride,
      clear: dontMutateMethodOverride,
      delete: dontMutateMethodOverride
    });
  }
  O.freeze(obj);
  if (deep)
    each(
      obj,
      (_key, value) => {
        freeze(value, true);
      },
      false
    );
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
var dontMutateMethodOverride = {
  [VALUE]: dontMutateFrozenCollections
};
function isFrozen(obj) {
  if (obj === null || !isObjectish(obj))
    return true;
  return O.isFrozen(obj);
}

// src/utils/plugins.ts
var PluginMapSet = "MapSet";
var PluginPatches = "Patches";
var PluginArrayMethods = "ArrayMethods";
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
var isPluginLoaded = (pluginKey) => !!plugins[pluginKey];
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
var getCurrentScope = () => currentScope;
var createScope = (parent_, immer_) => ({
  drafts_: [],
  parent_,
  immer_,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: true,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin(PluginMapSet) : void 0,
  arrayMethodsPlugin_: isPluginLoaded(PluginArrayMethods) ? getPlugin(PluginArrayMethods) : void 0
});
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    scope.patchPlugin_ = getPlugin(PluginPatches);
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
var enterScope = (immer2) => currentScope = createScope(currentScope, immer2);
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
    }
    const { patchPlugin_ } = scope;
    if (patchPlugin_) {
      patchPlugin_.generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope
      );
    }
  } else {
    result = finalize(scope, baseDraft);
  }
  maybeFreeze(scope, result, true);
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    const finalValue = handleValue(value, rootScope.handledSet_, rootScope);
    return finalValue;
  }
  if (!isSameScope(state, rootScope)) {
    return value;
  }
  if (!state.modified_) {
    return state.base_;
  }
  if (!state.finalized_) {
    const { callbacks_ } = state;
    if (callbacks_) {
      while (callbacks_.length > 0) {
        const callback = callbacks_.pop();
        callback(rootScope);
      }
    }
    generatePatchesAndFinalize(state, rootScope);
  }
  return state.copy_;
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}
function markStateFinalized(state) {
  state.finalized_ = true;
  state.scope_.unfinalizedDrafts_--;
}
var isSameScope = (state, rootScope) => state.scope_ === rootScope;
var EMPTY_LOCATIONS_RESULT = [];
function updateDraftInParent(parent, draftValue, finalizedValue, originalKey) {
  const parentCopy = latest(parent);
  const parentType = parent.type_;
  if (originalKey !== void 0) {
    const currentValue = get(parentCopy, originalKey, parentType);
    if (currentValue === draftValue) {
      set(parentCopy, originalKey, finalizedValue, parentType);
      return;
    }
  }
  if (!parent.draftLocations_) {
    const draftLocations = parent.draftLocations_ = /* @__PURE__ */ new Map();
    each(parentCopy, (key, value) => {
      if (isDraft(value)) {
        const keys = draftLocations.get(value) || [];
        keys.push(key);
        draftLocations.set(value, keys);
      }
    });
  }
  const locations = parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
  for (const location of locations) {
    set(parentCopy, location, finalizedValue, parentType);
  }
}
function registerChildFinalizationCallback(parent, child, key) {
  parent.callbacks_.push(function childCleanup(rootScope) {
    const state = child;
    if (!state || !isSameScope(state, rootScope)) {
      return;
    }
    rootScope.mapSetPlugin_?.fixSetContents(state);
    const finalizedValue = getFinalValue(state);
    updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key);
    generatePatchesAndFinalize(state, rootScope);
  });
}
function generatePatchesAndFinalize(state, rootScope) {
  const shouldFinalize = state.modified_ && !state.finalized_ && (state.type_ === 3 /* Set */ || state.type_ === 1 /* Array */ && state.allIndicesReassigned_ || (state.assigned_?.size ?? 0) > 0);
  if (shouldFinalize) {
    const { patchPlugin_ } = rootScope;
    if (patchPlugin_) {
      const basePath = patchPlugin_.getPath(state);
      if (basePath) {
        patchPlugin_.generatePatches_(state, basePath, rootScope);
      }
    }
    markStateFinalized(state);
  }
}
function handleCrossReference(target, key, value) {
  const { scope_ } = target;
  if (isDraft(value)) {
    const state = value[DRAFT_STATE];
    if (isSameScope(state, scope_)) {
      state.callbacks_.push(function crossReferenceCleanup() {
        prepareCopy(target);
        const finalizedValue = getFinalValue(state);
        updateDraftInParent(target, value, finalizedValue, key);
      });
    }
  } else if (isDraftable(value)) {
    target.callbacks_.push(function nestedDraftCleanup() {
      const targetCopy = latest(target);
      if (target.type_ === 3 /* Set */) {
        if (targetCopy.has(value)) {
          handleValue(value, scope_.handledSet_, scope_);
        }
      } else {
        if (get(targetCopy, key, target.type_) === value) {
          if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) {
            handleValue(
              get(target.copy_, key, target.type_),
              scope_.handledSet_,
              scope_
            );
          }
        }
      }
    });
  }
}
function handleValue(target, handledSet, rootScope) {
  if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
    return target;
  }
  if (isDraft(target) || handledSet.has(target) || !isDraftable(target) || isFrozen(target)) {
    return target;
  }
  handledSet.add(target);
  each(target, (key, value) => {
    if (isDraft(value)) {
      const state = value[DRAFT_STATE];
      if (isSameScope(state, rootScope)) {
        const updatedValue = getFinalValue(state);
        set(target, key, updatedValue, target.type_);
        markStateFinalized(state);
      }
    } else if (isDraftable(value)) {
      handleValue(value, handledSet, rootScope);
    }
  });
  return target;
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const baseIsArray = isArray(base);
  const state = {
    type_: baseIsArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let target = state;
  let traps = objectTraps;
  if (baseIsArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return [proxy, state];
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    let arrayPlugin = state.scope_.arrayMethodsPlugin_;
    const isArrayWithStringProp = state.type_ === 1 /* Array */ && typeof prop === "string";
    if (isArrayWithStringProp) {
      if (arrayPlugin?.isArrayOperationMethod(prop)) {
        return arrayPlugin.createMethodInterceptor(state, prop);
      }
    }
    const source = latest(state);
    if (!has(source, prop, state.type_)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (isArrayWithStringProp && state.operationMethod && arrayPlugin?.isMutatingArrayMethod(
      state.operationMethod
    ) && isArrayIndex(prop)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      const childKey = state.type_ === 1 /* Array */ ? +prop : prop;
      const childDraft = createProxy(state.scope_, value, state, childKey);
      return state.copy_[childKey] = childDraft;
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_.set(prop, false);
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop, state.type_)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_.set(prop, true);
    handleCrossReference(state, prop, value);
    return true;
  },
  deleteProperty(state, prop) {
    prepareCopy(state);
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_.set(prop, false);
      markChanged(state);
    } else {
      state.assigned_.delete(prop);
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      [WRITABLE]: true,
      [CONFIGURABLE]: state.type_ !== 1 /* Array */ || prop !== "length",
      [ENUMERABLE]: desc[ENUMERABLE],
      [VALUE]: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
for (let key in objectTraps) {
  let fn = objectTraps[key];
  arrayTraps[key] = function() {
    const args = arguments;
    args[0] = args[0][0];
    return fn.apply(this, args);
  };
}
arrayTraps.deleteProperty = function(state, prop) {
  if ( true && isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if ( true && prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? VALUE in desc ? desc[VALUE] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.assigned_ = /* @__PURE__ */ new Map();
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.useStrictIteration_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (isFunction(base) && !isFunction(recipe)) {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (!isFunction(recipe))
        die(6);
      if (patchListener !== void 0 && !isFunction(patchListener))
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(scope, base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || !isObjectish(base)) {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
            patches_: p,
            inversePatches_: ip
          });
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (isFunction(base)) {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (isBoolean(config?.autoFreeze))
      this.setAutoFreeze(config.autoFreeze);
    if (isBoolean(config?.useStrictShallowCopy))
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
    if (isBoolean(config?.useStrictIteration))
      this.setUseStrictIteration(config.useStrictIteration);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(scope, base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(value) {
    this.useStrictIteration_ = value;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(rootScope, value, parent, key) {
  const [draft, state] = isMap(value) ? getPlugin(PluginMapSet).proxyMap_(value, parent) : isSet(value) ? getPlugin(PluginMapSet).proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent?.scope_ ?? getCurrentScope();
  scope.drafts_.push(draft);
  state.callbacks_ = parent?.callbacks_ ?? [];
  state.key_ = key;
  if (parent && key !== void 0) {
    registerChildFinalizationCallback(parent, state, key);
  } else {
    state.callbacks_.push(function rootDraftCleanup(rootScope2) {
      rootScope2.mapSetPlugin_?.fixSetContents(state);
      const { patchPlugin_ } = rootScope2;
      if (state.modified_ && patchPlugin_) {
        patchPlugin_.generatePatches_(state, [], rootScope2);
      }
    });
  }
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  let strict = true;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
    strict = state.scope_.immer_.shouldUseStrictIteration();
  } else {
    copy = shallowCopy(value, true);
  }
  each(
    copy,
    (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    },
    strict
  );
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push(
      'Sets cannot have "replace" patches.',
      function(op) {
        return "Unsupported patch operation: " + op;
      },
      function(path) {
        return "Cannot apply patch, path doesn't resolve: " + path;
      },
      "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
    );
  }
  function getPath(state, path = []) {
    if (state.key_ !== void 0) {
      const parentCopy = state.parent_.copy_ ?? state.parent_.base_;
      const proxyDraft = getProxyDraft(get(parentCopy, state.key_));
      const valueAtKey = get(parentCopy, state.key_);
      if (valueAtKey === void 0) {
        return null;
      }
      if (valueAtKey !== state.draft_ && valueAtKey !== state.base_ && valueAtKey !== state.copy_) {
        return null;
      }
      if (proxyDraft != null && proxyDraft.base_ !== state.base_) {
        return null;
      }
      const isSet2 = state.parent_.type_ === 3 /* Set */;
      let key;
      if (isSet2) {
        const setParent = state.parent_;
        key = Array.from(setParent.drafts_.keys()).indexOf(state.key_);
      } else {
        key = state.key_;
      }
      if (!(isSet2 && parentCopy.size > key || has(parentCopy, key))) {
        return null;
      }
      path.push(key);
    }
    if (state.parent_) {
      return getPath(state.parent_, path);
    }
    path.reverse();
    try {
      resolvePath(state.copy_, path);
    } catch (e) {
      return null;
    }
    return path;
  }
  function resolvePath(base, path) {
    let current2 = base;
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      current2 = get(current2, key);
      if (!isObjectish(current2) || current2 === null) {
        throw new Error(`Cannot resolve path at '${path.join("/")}'`);
      }
    }
    return current2;
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, scope) {
    if (state.scope_.processedForPatches_.has(state)) {
      return;
    }
    state.scope_.processedForPatches_.add(state);
    const { patches_, inversePatches_ } = scope;
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches_,
          inversePatches_
        );
      case 1 /* Array */:
        return generateArrayPatches(
          state,
          basePath,
          patches_,
          inversePatches_
        );
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches_,
          inversePatches_
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    const allReassigned = state.allIndicesReassigned_ === true;
    for (let i = 0; i < base_.length; i++) {
      const copiedItem = copy_[i];
      const baseItem = base_[i];
      const isAssigned = allReassigned || assigned_?.get(i.toString());
      if (isAssigned && copiedItem !== baseItem) {
        const childState = copiedItem?.[DRAFT_STATE];
        if (childState && childState.modified_) {
          continue;
        }
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copiedItem)
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(baseItem)
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_, type_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key, type_);
      const value = get(copy_, key, type_);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(
        op === REMOVE ? { op, path } : { op, path, value: clonePatchValueIfNeeded(value) }
      );
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, scope) {
    const { patches_, inversePatches_ } = scope;
    patches_.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches_.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === CONSTRUCTOR))
          die(errorOffset + 3);
        if (isFunction(base) && p === PROTOTYPE)
          die(errorOffset + 3);
        base = get(base, p);
        if (!isObjectish(base))
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin(PluginPatches, {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_,
    getPath
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false,
        callbacks_: []
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
        handleCrossReference(state, key, value);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(state.scope_, value, state, key);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    const map = new DraftMap(target, parent);
    return [map, map[DRAFT_STATE]];
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false,
        assigned_: void 0,
        callbacks_: []
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
        handleCrossReference(state, value, value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    const set2 = new DraftSet(target, parent);
    return [set2, set2[DRAFT_STATE]];
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(state.scope_, value, state, value);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  function fixSetContents(target) {
    if (target.type_ === 3 /* Set */ && target.copy_) {
      const copy = new Set(target.copy_);
      target.copy_.clear();
      copy.forEach((value) => {
        target.copy_.add(getValue(value));
      });
    }
  }
  loadPlugin(PluginMapSet, { proxyMap_, proxySet_, fixSetContents });
}

// src/plugins/arrayMethods.ts
function enableArrayMethods() {
  const SHIFTING_METHODS = /* @__PURE__ */ new Set(["shift", "unshift"]);
  const QUEUE_METHODS = /* @__PURE__ */ new Set(["push", "pop"]);
  const RESULT_RETURNING_METHODS = /* @__PURE__ */ new Set([
    ...QUEUE_METHODS,
    ...SHIFTING_METHODS
  ]);
  const REORDERING_METHODS = /* @__PURE__ */ new Set(["reverse", "sort"]);
  const MUTATING_METHODS = /* @__PURE__ */ new Set([
    ...RESULT_RETURNING_METHODS,
    ...REORDERING_METHODS,
    "splice"
  ]);
  const FIND_METHODS = /* @__PURE__ */ new Set(["find", "findLast"]);
  const NON_MUTATING_METHODS = /* @__PURE__ */ new Set([
    "filter",
    "slice",
    "concat",
    "flat",
    ...FIND_METHODS,
    "findIndex",
    "findLastIndex",
    "some",
    "every",
    "indexOf",
    "lastIndexOf",
    "includes",
    "join",
    "toString",
    "toLocaleString"
  ]);
  function isMutatingArrayMethod(method) {
    return MUTATING_METHODS.has(method);
  }
  function isNonMutatingArrayMethod(method) {
    return NON_MUTATING_METHODS.has(method);
  }
  function isArrayOperationMethod(method) {
    return isMutatingArrayMethod(method) || isNonMutatingArrayMethod(method);
  }
  function enterOperation(state, method) {
    state.operationMethod = method;
  }
  function exitOperation(state) {
    state.operationMethod = void 0;
  }
  function executeArrayMethod(state, operation, markLength = true) {
    prepareCopy(state);
    const result = operation();
    markChanged(state);
    if (markLength)
      state.assigned_.set("length", true);
    return result;
  }
  function markAllIndicesReassigned(state) {
    state.allIndicesReassigned_ = true;
  }
  function normalizeSliceIndex(index, length) {
    if (index < 0) {
      return Math.max(length + index, 0);
    }
    return Math.min(index, length);
  }
  function handleInsertedValues(state, startIndex, values) {
    for (let i = 0; i < values.length; i++) {
      const index = startIndex + i;
      state.assigned_.set(index, true);
      handleCrossReference(state, index, values[i]);
    }
  }
  function handleSimpleOperation(state, method, args) {
    return executeArrayMethod(state, () => {
      const lengthBefore = state.copy_.length;
      const result = state.copy_[method](...args);
      if (SHIFTING_METHODS.has(method)) {
        markAllIndicesReassigned(state);
      }
      if (method === "push" && args.length > 0) {
        handleInsertedValues(state, lengthBefore, args);
      } else if (method === "unshift" && args.length > 0) {
        handleInsertedValues(state, 0, args);
      }
      return RESULT_RETURNING_METHODS.has(method) ? result : state.draft_;
    });
  }
  function handleReorderingOperation(state, method, args) {
    return executeArrayMethod(
      state,
      () => {
        ;
        state.copy_[method](...args);
        markAllIndicesReassigned(state);
        return state.draft_;
      },
      false
    );
  }
  function createMethodInterceptor(state, originalMethod) {
    return function interceptedMethod(...args) {
      const method = originalMethod;
      enterOperation(state, method);
      try {
        if (isMutatingArrayMethod(method)) {
          if (RESULT_RETURNING_METHODS.has(method)) {
            return handleSimpleOperation(state, method, args);
          }
          if (REORDERING_METHODS.has(method)) {
            return handleReorderingOperation(state, method, args);
          }
          if (method === "splice") {
            const res = executeArrayMethod(
              state,
              () => state.copy_.splice(...args)
            );
            markAllIndicesReassigned(state);
            if (args.length > 2) {
              const startIndex = normalizeSliceIndex(
                args[0] ?? 0,
                state.copy_.length
              );
              handleInsertedValues(state, startIndex, args.slice(2));
            }
            return res;
          }
        } else {
          return handleNonMutatingOperation(state, method, args);
        }
      } finally {
        exitOperation(state);
      }
    };
  }
  function handleNonMutatingOperation(state, method, args) {
    const source = latest(state);
    if (method === "filter") {
      const predicate = args[0];
      const result = [];
      for (let i = 0; i < source.length; i++) {
        if (predicate(source[i], i, source)) {
          result.push(state.draft_[i]);
        }
      }
      return result;
    }
    if (FIND_METHODS.has(method)) {
      const predicate = args[0];
      const isForward = method === "find";
      const step = isForward ? 1 : -1;
      const start = isForward ? 0 : source.length - 1;
      for (let i = start; i >= 0 && i < source.length; i += step) {
        if (predicate(source[i], i, source)) {
          return state.draft_[i];
        }
      }
      return void 0;
    }
    if (method === "slice") {
      const rawStart = args[0] ?? 0;
      const rawEnd = args[1] ?? source.length;
      const start = normalizeSliceIndex(rawStart, source.length);
      const end = normalizeSliceIndex(rawEnd, source.length);
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(state.draft_[i]);
      }
      return result;
    }
    return source[method](...args);
  }
  loadPlugin(PluginArrayMethods, {
    createMethodInterceptor,
    isArrayOperationMethod,
    isMutatingArrayMethod
  });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = /* @__PURE__ */ immer.produceWithPatches.bind(immer);
var setAutoFreeze = /* @__PURE__ */ immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = /* @__PURE__ */ immer.setUseStrictShallowCopy.bind(immer);
var setUseStrictIteration = /* @__PURE__ */ immer.setUseStrictIteration.bind(immer);
var applyPatches = /* @__PURE__ */ immer.applyPatches.bind(immer);
var createDraft = /* @__PURE__ */ immer.createDraft.bind(immer);
var finishDraft = /* @__PURE__ */ immer.finishDraft.bind(immer);
var castDraft = (value) => value;
var castImmutable = (value) => value;

//# sourceMappingURL=immer.mjs.map

/***/ },

/***/ "./src/blocks/accordion/block.json"
/*!*****************************************!*\
  !*** ./src/blocks/accordion/block.json ***!
  \*****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"guten-builder-blocks/accordion","version":"1.0.0","title":"FAQ Accordion","description":"High-performance responsive FAQ accordion with smooth animations and customizable themes.","category":"guten-builder","keywords":["faq","accordion","toggle","collapse"],"textdomain":"guten-builder-blocks","attributes":{"align":{"type":"string","default":""},"selectedTemplate":{"type":"string","default":""},"subtitle":{"type":"string","default":""},"title":{"type":"string","default":""},"description":{"type":"string","default":""},"faqsData":{"type":"array","default":[{"question":"","answer":""},{"question":"","answer":""},{"question":"","answer":""},{"question":"","answer":""}]},"showHeader":{"type":"boolean","default":false},"allowMultiple":{"type":"boolean","default":false},"iconPosition":{"type":"string","default":"right"},"iconType":{"type":"string","default":"chevron"},"iconSize":{"type":"number","default":22},"iconColor":{"type":"string","default":""},"subtitleColor":{"type":"string","default":"#475569"},"subtitleTypography":{"type":"object","default":{"fontSize":{"desktop":"16px","tablet":"14px","mobile":"12px"},"fontFamily":"","fontWeight":"400","lineHeight":"","letterSpacing":"","textTransform":"none","textDecoration":"none","fontStyle":"normal"}},"titleColor":{"type":"string","default":"#0f172a"},"titleTypography":{"type":"object","default":{"fontSize":{"desktop":"24px","tablet":"23px","mobile":"22px"},"fontFamily":"","fontWeight":"700","lineHeight":"","letterSpacing":"","textTransform":"none","textDecoration":"none","fontStyle":"normal"}},"descriptionColor":{"type":"string","default":"#64748b"},"descriptionTypography":{"type":"object","default":{"fontSize":{"desktop":"14px","tablet":"14px","mobile":"13px"},"fontFamily":"","fontWeight":"400","lineHeight":"","letterSpacing":"","textTransform":"none","textDecoration":"none","fontStyle":"normal"}},"questionBg":{"type":"object","default":{}},"questionBorder":{"type":"object","default":{"color":"#e0e7ff","width":"1px","style":"solid","side":"all"}},"questionBorderRadius":{"type":"object","default":{"top":"6px","right":"6px","bottom":"6px","left":"6px"}},"questionTypography":{"type":"object","default":{"fontSize":{"desktop":"16px","tablet":"16px","mobile":"14px"},"fontFamily":"","fontWeight":"600","lineHeight":"","letterSpacing":"","textTransform":"none","textDecoration":"none","fontStyle":"normal"}},"answerTypography":{"type":"object","default":{"fontSize":{"desktop":"14px","tablet":"14px","mobile":"13px"},"fontFamily":"","fontWeight":"400","lineHeight":"","letterSpacing":"","textTransform":"none","textDecoration":"none","fontStyle":"normal"}},"questionColor":{"type":"string","default":"#0f172a"},"answerColor":{"type":"string","default":"#475569"}},"supports":{"html":false,"anchor":true,"align":["wide","full"]},"editorScript":"file:./index.js","editorStyle":"file:./index.css","viewScript":"file:./view.js","style":"file:./style-view.css","render":"file:./render.php"}');

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
/************************************************************************/
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
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/blocks/accordion/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/accordion/editor.scss");
/* harmony import */ var _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Backend/Edit */ "./src/blocks/accordion/Components/Backend/Edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/accordion/block.json");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/icons */ "./src/blocks/accordion/utils/icons.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_4__.faqIcon,
  edit: _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map