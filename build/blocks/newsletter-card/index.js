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
 */

const ItemsPanel = ({
  title = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("📋 Items Manager", "guten-builder-blocks"),
  initialOpen = true,
  items = [],
  onChange,
  defaultItem = {},
  addButtonLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("＋ Add New Item", "guten-builder-blocks"),
  itemTitleKey = "title",
  fields = [],
  renderItemFields
}) => {
  const [openItemIndex, setOpenItemIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const triggerChange = newItems => {
    if (typeof onChange === "function") {
      onChange(newItems);
    }
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

  // Move Item (Reorder)
  const handleMoveItem = (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= items.length) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    triggerChange(newItems);
    setOpenItemIndex(targetIndex);
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
              text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Up", "guten-builder-blocks"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                className: "tr-items-panel-btn",
                icon: "arrow-up-alt2",
                disabled: index === 0,
                onClick: () => handleMoveItem(index, "up")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
              text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Move Down", "guten-builder-blocks"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                className: "tr-items-panel-btn",
                icon: "arrow-down-alt2",
                disabled: index === items.length - 1,
                onClick: () => handleMoveItem(index, "down")
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
          children: typeof renderItemFields === "function" ? renderItemFields(item, index, (key, val) => handleUpdateField(index, key, val)) : fields.map(fieldConfig => {
            const {
              key,
              label,
              type = "text",
              options,
              rows = 3,
              help
            } = fieldConfig;
            const fieldValue = item[key] !== undefined ? item[key] : "";
            if (type === "textarea") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
                label: label,
                value: fieldValue,
                onChange: val => handleUpdateField(index, key, val),
                rows: rows,
                help: help
              }, key);
            }
            if (type === "toggle") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                label: label,
                checked: Boolean(fieldValue),
                onChange: val => handleUpdateField(index, key, val),
                help: help
              }, key);
            }
            if (type === "select") {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
                label: label,
                value: fieldValue,
                options: options || [],
                onChange: val => handleUpdateField(index, key, val),
                help: help
              }, key);
            }

            // Default text input
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: label,
              value: fieldValue,
              onChange: val => handleUpdateField(index, key, val),
              help: help
            }, key);
          })
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

/***/ "./src/blocks/newsletter-card/Components/Backend/Edit.js"
/*!***************************************************************!*\
  !*** ./src/blocks/newsletter-card/Components/Backend/Edit.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings/Settings */ "./src/blocks/newsletter-card/Components/Backend/Settings/Settings.js");
/* harmony import */ var _Common_Templates_NewsletterCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Templates/NewsletterCard */ "./src/blocks/newsletter-card/Components/Common/Templates/NewsletterCard.jsx");
/* harmony import */ var _Common_DynamicStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/DynamicStyles */ "./src/blocks/newsletter-card/Components/Common/DynamicStyles.js");
/* harmony import */ var tr_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tr-tools */ "../tr-tools/index.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/data */ "./src/blocks/newsletter-card/utils/data.js");
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
  const id = `block-${clientId}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Settings_Settings__WEBPACK_IMPORTED_MODULE_1__["default"], {
      attributes,
      setAttributes
    }), !isTemplateSelected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_4__.TemplateSelector, {
        attributes,
        setAttributes,
        title: _utils_data__WEBPACK_IMPORTED_MODULE_5__.templateData.title,
        subtitle: _utils_data__WEBPACK_IMPORTED_MODULE_5__.templateData.subtitle,
        templates: _utils_data__WEBPACK_IMPORTED_MODULE_5__.templateData.templates,
        isPro: true,
        proTemplates: ['template-1']
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
        style: {
          padding: '3px'
        }
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Common_DynamicStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        id: id
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Common_Templates_NewsletterCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        id: id
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ },

/***/ "./src/blocks/newsletter-card/Components/Backend/Settings/General/General.js"
/*!***********************************************************************************!*\
  !*** ./src/blocks/newsletter-card/Components/Backend/Settings/General/General.js ***!
  \***********************************************************************************/
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const General = ({
  attributes,
  setAttributes
}) => {
  const {
    title,
    description,
    buttonText,
    successMessage,
    errorMessage,
    containerMaxWidth
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template Presets', 'guten-builder-blocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        style: {
          fontSize: '12px',
          color: '#64748b',
          marginBottom: '12px'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Switch or apply a predefined newsletter template style.', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content Settings', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title :', 'guten-builder-blocks'),
        value: title,
        onChange: val => setAttributes({
          title: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description :', 'guten-builder-blocks'),
        value: description,
        onChange: val => setAttributes({
          description: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Text :', 'guten-builder-blocks'),
        value: buttonText,
        onChange: val => setAttributes({
          buttonText: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Success Message :', 'guten-builder-blocks'),
        value: successMessage,
        onChange: val => setAttributes({
          successMessage: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Error Message :', 'guten-builder-blocks'),
        value: errorMessage,
        onChange: val => setAttributes({
          errorMessage: val
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General Settings', 'guten-builder-blocks'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.UnitControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container Max Width', 'guten-builder-blocks'),
        value: containerMaxWidth,
        onChange: val => setAttributes({
          containerMaxWidth: val
        }),
        units: [(0,tr_tools__WEBPACK_IMPORTED_MODULE_2__.pxUnit)(), (0,tr_tools__WEBPACK_IMPORTED_MODULE_2__.remUnit)(), (0,tr_tools__WEBPACK_IMPORTED_MODULE_2__.emUnit)(), (0,tr_tools__WEBPACK_IMPORTED_MODULE_2__.vwUnit)(), (0,tr_tools__WEBPACK_IMPORTED_MODULE_2__.perUnit)()],
        defaultVal: "1000px"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ },

/***/ "./src/blocks/newsletter-card/Components/Backend/Settings/Settings.js"
/*!****************************************************************************!*\
  !*** ./src/blocks/newsletter-card/Components/Backend/Settings/Settings.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/option */ "./src/blocks/newsletter-card/utils/option.js");
/* harmony import */ var _General_General__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./General/General */ "./src/blocks/newsletter-card/Components/Backend/Settings/General/General.js");
/* harmony import */ var _Style_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style/Style */ "./src/blocks/newsletter-card/Components/Backend/Settings/Style/Style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const Settings = ({
  attributes,
  setAttributes
}) => {
  const {
    selectedTemplate = ''
  } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);
  if (!isTemplateSelected) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
      className: "guten-builder-blocks-tab-panel wp-block-guten-builder-blocks-newsletter-card",
      activeClass: "guten-builder-blocks-active-tab",
      tabs: _utils_option__WEBPACK_IMPORTED_MODULE_2__.generalStyleTabs,
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

/***/ "./src/blocks/newsletter-card/Components/Backend/Settings/Style/Style.js"
/*!*******************************************************************************!*\
  !*** ./src/blocks/newsletter-card/Components/Backend/Settings/Style/Style.js ***!
  \*******************************************************************************/
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Style = ({
  attributes,
  setAttributes
}) => {
  const {
    containerBg,
    containerBorder,
    titleColor,
    titleTypography,
    descriptionColor,
    descriptionTypography,
    buttonColor,
    buttonBg,
    buttonBorder,
    buttonTypography
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.BackgroundControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background :', 'guten-builder-blocks'),
        value: containerBg,
        onChange: val => setAttributes({
          containerBg: val
        }),
        defaultBackground: {
          type: 'solid',
          color: '#ffffff'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.BorderControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border :', 'guten-builder-blocks'),
        value: containerBorder,
        onChange: val => setAttributes({
          containerBorder: val
        }),
        defaultBorder: {
          color: '#e2e8f0',
          width: '1px',
          style: 'solid',
          side: 'all'
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color :', 'guten-builder-blocks'),
        value: titleColor,
        onChange: val => setAttributes({
          titleColor: val
        }),
        defaultColor: "#1e293b"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography :', 'guten-builder-blocks'),
        value: titleTypography,
        onChange: val => setAttributes({
          titleTypography: val
        }),
        defaultTypography: {
          fontFamily: 'Arial, sans-serif',
          fontWeight: '700',
          fontSize: '24px',
          lineHeight: '1.5',
          textTransform: 'none',
          letterSpacing: '0px',
          textAlign: 'left',
          color: '#1e293b'
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color :', 'guten-builder-blocks'),
        value: descriptionColor,
        onChange: val => setAttributes({
          descriptionColor: val
        }),
        defaultColor: "#64748b"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography :', 'guten-builder-blocks'),
        value: descriptionTypography,
        onChange: val => setAttributes({
          descriptionTypography: val
        }),
        defaultTypography: {
          fontFamily: 'Arial, sans-serif',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '1.5',
          textTransform: 'none',
          letterSpacing: '0px',
          textAlign: 'left',
          color: '#64748b'
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      className: "bPlPanelBody",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.ColorControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color :', 'guten-builder-blocks'),
        value: buttonColor,
        onChange: val => setAttributes({
          buttonColor: val
        }),
        defaultColor: "#ffffff"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.BackgroundControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background :', 'guten-builder-blocks'),
        value: buttonBg,
        onChange: val => setAttributes({
          buttonBg: val
        }),
        defaultBackground: {
          type: 'solid',
          color: '#000000'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.BorderControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border :', 'guten-builder-blocks'),
        value: buttonBorder,
        onChange: val => setAttributes({
          buttonBorder: val
        }),
        defaultBorder: {
          color: 'transparent',
          width: '',
          style: 'solid',
          side: 'all'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(tr_tools__WEBPACK_IMPORTED_MODULE_2__.Typography, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography :', 'guten-builder-blocks'),
        value: buttonTypography,
        onChange: val => setAttributes({
          buttonTypography: val
        }),
        defaultTypography: {
          fontFamily: 'Arial, sans-serif',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '1.5',
          textTransform: 'none',
          letterSpacing: '0px',
          textAlign: 'center',
          color: '#ffffff'
        }
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/newsletter-card/Components/Common/DynamicStyles.js"
/*!***********************************************************************!*\
  !*** ./src/blocks/newsletter-card/Components/Common/DynamicStyles.js ***!
  \***********************************************************************/
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
    containerMaxWidth,
    containerBg,
    containerBorder,
    titleColor,
    titleTypography,
    descriptionColor,
    descriptionTypography,
    buttonColor,
    buttonBg,
    buttonBorder,
    buttonTypography
  } = attributes || {};
  const mainSl = `#${id}`;
  const container = `${mainSl} .gbb-newsletter-container`;
  const title = `${mainSl} .gbb-newsletter-title`;
  const description = `${mainSl} .gbb-newsletter-description`;
  const button = `${mainSl} .gbb-newsletter-button`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: `
          ${container} {
            ${containerMaxWidth ? `max-width:${containerMaxWidth};` : ''}
            ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBackgroundCss)(containerBg) ? `background:${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBackgroundCss)(containerBg)};` : ''}
            ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBorderCss)(containerBorder)}
          }

          ${title} {
            ${titleColor ? `color:${titleColor};` : ''}
            ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getTypographyCss)(titleTypography)}
          }

          ${description} {
            ${descriptionColor ? `color:${descriptionColor};` : ''}
            ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getTypographyCss)(descriptionTypography)}
          }

          ${button} {
            ${buttonColor ? `color:${buttonColor};` : ''}
            ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBackgroundCss)(buttonBg) ? `background:${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBackgroundCss)(buttonBg)};` : ''}
            ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getBorderCss)(buttonBorder)}
            ${(0,tr_tools__WEBPACK_IMPORTED_MODULE_0__.getTypographyCss)(buttonTypography)}
          }
        `
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicStyles);

/***/ },

/***/ "./src/blocks/newsletter-card/Components/Common/Templates/NewsletterCard.jsx"
/*!***********************************************************************************!*\
  !*** ./src/blocks/newsletter-card/Components/Common/Templates/NewsletterCard.jsx ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TemplateOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TemplateOne */ "./src/blocks/newsletter-card/Components/Common/Templates/TemplateOne.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const TEMPLATES = {
  'template-1': _TemplateOne__WEBPACK_IMPORTED_MODULE_0__["default"]
};
const NewsletterCard = ({
  attributes,
  setAttributes
}) => {
  const {
    selectedTemplate = 'template-1'
  } = attributes || {};
  const TemplateComponent = TEMPLATES[selectedTemplate] || TEMPLATES['template-1'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TemplateComponent, {
    attributes: attributes,
    setAttributes: setAttributes
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsletterCard);

/***/ },

/***/ "./src/blocks/newsletter-card/Components/Common/Templates/TemplateOne.jsx"
/*!********************************************************************************!*\
  !*** ./src/blocks/newsletter-card/Components/Common/Templates/TemplateOne.jsx ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const TemplateOne = ({
  attributes,
  setAttributes
}) => {
  const {
    title,
    description,
    buttonText,
    successMessage,
    errorMessage
  } = attributes || {};
  const [email, setEmail] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isSubmitting, setIsSubmitting] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    type: '',
    message: ''
  });
  const isEditor = typeof setAttributes === 'function';
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({
          type: '',
          message: ''
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status.message]);
  const handleSubmit = async e => {
    e.preventDefault();
    if (isEditor) return;
    if (!email || !email.includes('@')) {
      setStatus({
        type: 'error',
        message: errorMessage || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please enter a valid email address.', 'guten-builder-blocks')
      });
      return;
    }
    setIsSubmitting(true);
    setStatus({
      type: '',
      message: ''
    });
    try {
      const response = await fetch('/wp-json/guten-builder/v1/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: successMessage || data.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Thank you for subscribing!', 'guten-builder-blocks')
        });
        setEmail('');
      } else {
        setStatus({
          type: 'error',
          message: data.message || errorMessage || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Something went wrong. Please try again.', 'guten-builder-blocks')
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: errorMessage || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Connection error. Please try again later.', 'guten-builder-blocks')
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
    className: "gbb-newsletter-section",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gbb-newsletter-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gbb-newsletter-content",
        children: isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "h2",
            className: "gbb-newsletter-title",
            value: title,
            onChange: val => setAttributes({
              title: val
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter title...', 'guten-builder-blocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "p",
            className: "gbb-newsletter-description",
            value: description,
            onChange: val => setAttributes({
              description: val
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter description...', 'guten-builder-blocks')
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
            tagName: "h2",
            className: "gbb-newsletter-title",
            value: title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
            tagName: "p",
            className: "gbb-newsletter-description",
            value: description
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "gbb-newsletter-form-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
          className: "gbb-newsletter-form",
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: "email",
            id: "email",
            name: "email",
            value: email,
            onChange: e => setEmail(e.target.value),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your email', 'guten-builder-blocks'),
            required: true,
            disabled: isSubmitting,
            className: "gbb-newsletter-input"
          }), isEditor ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
            tagName: "span",
            className: "gbb-newsletter-button",
            value: buttonText,
            onChange: val => setAttributes({
              buttonText: val
            }),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button text...', 'guten-builder-blocks'),
            style: {
              display: 'inline-block',
              textAlign: 'center'
            }
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            type: "submit",
            disabled: isSubmitting,
            className: "gbb-newsletter-button",
            style: {
              opacity: isSubmitting ? 0.7 : 1
            },
            children: isSubmitting ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subscribing...', 'guten-builder-blocks') : buttonText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subscribe', 'guten-builder-blocks')
          })]
        }), !isEditor && status.message && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: `gbb-newsletter-status gbb-newsletter-status--${status.type}`,
          style: {
            marginTop: '10px',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '13px',
            backgroundColor: status.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: status.type === 'success' ? '#166534' : '#991b1b',
            border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fca5a5'}`
          },
          children: status.message
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateOne);

/***/ },

/***/ "./src/blocks/newsletter-card/index.js"
/*!*********************************************!*\
  !*** ./src/blocks/newsletter-card/index.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/newsletter-card/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/newsletter-card/editor.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/newsletter-card/block.json");
/* harmony import */ var _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Backend/Edit */ "./src/blocks/newsletter-card/Components/Backend/Edit.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/icons */ "./src/blocks/newsletter-card/utils/icons.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  icon: _utils_icons__WEBPACK_IMPORTED_MODULE_5__.AnnouncementIcon,
  edit: _Components_Backend_Edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: () => null // Dynamic block
});

/***/ },

/***/ "./src/blocks/newsletter-card/utils/data.js"
/*!**************************************************!*\
  !*** ./src/blocks/newsletter-card/utils/data.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   templateData: () => (/* binding */ templateData)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/blocks/newsletter-card/utils/icons.js");


const templateData = {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Newsletter Card Template', 'guten-builder-blocks'),
  subtitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose a design template for your contact form.', 'guten-builder-blocks'),
  templates: [{
    id: 'template-1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Template 1', 'guten-builder-blocks'),
    tag: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Split Card', 'guten-builder-blocks'),
    icon: _icons__WEBPACK_IMPORTED_MODULE_1__.TemplateOneSvg,
    attributes: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subscribe Our Newsletter', 'guten-builder-blocks'),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subscribe to our newsletter and get the latest updates, offers and exclusive content.', 'guten-builder-blocks'),
      buttonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Subscribe', 'guten-builder-blocks'),
      containerMaxWidth: '1000px',
      containerBg: {
        type: 'solid',
        color: '#ffffff'
      },
      containerBorder: {
        width: '1px',
        style: 'solid',
        color: '#e2e8f0',
        side: 'all'
      },
      titleColor: '#1e293b',
      descriptionColor: '#64748b',
      buttonColor: '#ffffff',
      buttonBg: {
        type: 'solid',
        color: '#000000'
      },
      buttonBorder: {
        width: '',
        style: 'solid',
        color: 'transparent',
        side: 'all'
      },
      successMessage: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thank you for subscribing!', 'guten-builder-blocks'),
      errorMessage: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Something went wrong. Please try again.', 'guten-builder-blocks')
    }
  }]
};

/***/ },

/***/ "./src/blocks/newsletter-card/utils/icons.js"
/*!***************************************************!*\
  !*** ./src/blocks/newsletter-card/utils/icons.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnouncementIcon: () => (/* binding */ AnnouncementIcon),
/* harmony export */   GeneralIcon: () => (/* binding */ GeneralIcon),
/* harmony export */   StyleIcon: () => (/* binding */ StyleIcon),
/* harmony export */   TemplateOneSvg: () => (/* binding */ TemplateOneSvg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const AnnouncementIcon = {
  background: '#FCE7F3',
  foreground: '#2563EB',
  src: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24",
    style: {
      fill: '#2563EB'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M6 3h12a1 1 0 0 1 1 1v7H5V4a1 1 0 0 1 1-1z",
      opacity: "0.35",
      fill: "#2563EB"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M9 6.8H8a.8.8 0 0 0-.8.8v1.4c0 .44.36.8.8.8H9l2.8 1.7V5.1L9 6.8z",
      fill: "#2563EB"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M13.5 5.8l1.4-.7a.4.4 0 1 1 .4.7l-1.4.7a.4.4 0 0 1-.4-.7zm.4 2.5h1.6a.4.4 0 0 1 0 .8h-1.6a.4.4 0 0 1 0-.8zm-.4 2.5a.4.4 0 0 1 .5-.1l1.4.7a.4.4 0 0 1-.4.7l-1.4-.7a.4.4 0 0 1-.1-.6z",
      fill: "#2563EB"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 11a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9zm1.5.5l7.5 5 7.5-5V20H4.5v-8.5z",
      fill: "#2563EB"
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
const TemplateOneSvg = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1000 250",
  width: "100%",
  height: "100%",
  style: {
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "0",
    y: "0",
    width: "1000",
    height: "250",
    fill: "#ffffff"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
    x: "50",
    y: "80",
    fontSize: "42",
    fontWeight: "bold",
    fill: "#0f172a",
    children: "Subscribe Our Newsletter"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
    x: "50",
    y: "140",
    fontSize: "18",
    fill: "#64748b",
    children: "Subscribe to our newsletter and get the latest updates, offers and"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
    x: "50",
    y: "170",
    fontSize: "18",
    fill: "#64748b",
    children: "exclusive content."
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "550",
    y: "100",
    width: "300",
    height: "50",
    rx: "4",
    fill: "#ffffff",
    stroke: "#cbd5e1",
    strokeWidth: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
    x: "565",
    y: "130",
    fontSize: "16",
    fill: "#94a3b8",
    children: "john@readymadeui.com"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "860",
    y: "100",
    width: "100",
    height: "50",
    rx: "4",
    fill: "#2563eb"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("text", {
    x: "910",
    y: "130",
    fontSize: "16",
    fontWeight: "bold",
    fill: "#ffffff",
    textAnchor: "middle",
    alignmentBaseline: "middle",
    children: "Subscribe"
  })]
});

/***/ },

/***/ "./src/blocks/newsletter-card/utils/option.js"
/*!****************************************************!*\
  !*** ./src/blocks/newsletter-card/utils/option.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generalStyleTabs: () => (/* binding */ generalStyleTabs)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/blocks/newsletter-card/utils/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const generalStyleTabs = [{
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

/***/ "./src/blocks/newsletter-card/editor.scss"
/*!************************************************!*\
  !*** ./src/blocks/newsletter-card/editor.scss ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/newsletter-card/style.scss"
/*!***********************************************!*\
  !*** ./src/blocks/newsletter-card/style.scss ***!
  \***********************************************/
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

/***/ "./src/blocks/newsletter-card/block.json"
/*!***********************************************!*\
  !*** ./src/blocks/newsletter-card/block.json ***!
  \***********************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"guten-builder-blocks/newsletter-card","version":"1.0.0","title":"Newsletter Card","category":"guten-builder","description":"Add a visually appealing newsletter subscription card to grow your email list and engage with your audience.","textdomain":"guten-builder-blocks","attributes":{"selectedTemplate":{"type":"string","default":""},"title":{"type":"string","default":""},"description":{"type":"string","default":""},"buttonText":{"type":"string","default":""},"containerMaxWidth":{"type":"string","default":"1000px"},"containerBg":{"type":"object","default":{}},"containerBorder":{"type":"object","default":{}},"titleColor":{"type":"string","default":"#1e293b"},"titleTypography":{"type":"object","default":{}},"descriptionColor":{"type":"string","default":"#64748b"},"descriptionTypography":{"type":"object","default":{}},"buttonColor":{"type":"string","default":"#ffffff"},"buttonBg":{"type":"object","default":{}},"buttonBorder":{"type":"object","default":{}},"buttonTypography":{"type":"object","default":{}},"successMessage":{"type":"string","default":""},"errorMessage":{"type":"string","default":""}},"supports":{"html":false,"align":["wide","full"]},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-view.css","viewScript":"file:./view.js","render":"file:./render.php"}');

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
/******/ 			"blocks/newsletter-card/index": 0,
/******/ 			"blocks/newsletter-card/style-view": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/newsletter-card/style-view"], () => (__webpack_require__("./src/blocks/newsletter-card/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map