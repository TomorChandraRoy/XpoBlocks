/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/pricing-table/Components/Common/dynamicStyle.js"
/*!********************************************************************!*\
  !*** ./src/blocks/pricing-table/Components/Common/dynamicStyle.js ***!
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
    blockId,
    pricingTables = [],
    columns,
    columnGap,
    borderRadius,
    cardBgColor,
    cardTextColor,
    buttonBgColor,
    buttonTextColor,
    featuredButtonBgColor,
    featuredButtonTextColor,
    themeStyle = 'style-1',
    hoverHighlightColor = '#ffd700'
  } = attributes;

  // The blockId is used as the class selector
  const mainSl = `.${blockId}`;
  let tableStyles = '';
  pricingTables.forEach((table, index) => {
    const isFeatured = table.isFeatured;
    const planColor = table.color || '#3b82f6';
    const itemClass = `${mainSl} .gbb-pricing-card:nth-child(${index + 1})`;
    const btnClass = `${itemClass} .gbb-pricing-button`;
    if (themeStyle === 'style-2') {
      tableStyles += `
				${itemClass} {
					border: 2px solid transparent;
					transition: all 0.3s ease;
				}
				${itemClass} .gbb-pricing-name {
					color: #ffffff;
				}
				${itemClass} .gbb-feature-icon {
					color: #ffffff;
				}
				${btnClass} {
					background: #000000;
					color: #3b82f6;
					border: 1px solid #000000;
					transition: all 0.3s ease;
				}
			`;
    } else {
      tableStyles += `
				${itemClass} {
					border: ${isFeatured ? `2px solid ${planColor}` : '1px solid #e2e8f0'};
					box-shadow: ${isFeatured ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'};
				}
				${itemClass} .gbb-pricing-badge {
					background: ${planColor};
				}
				${itemClass} .gbb-pricing-name {
					color: ${isFeatured ? planColor : 'inherit'};
				}
				${itemClass} .gbb-feature-icon {
					color: ${isFeatured ? planColor : 'inherit'};
				}
				${btnClass} {
					background: ${isFeatured ? featuredButtonBgColor || planColor : buttonBgColor};
					color: ${isFeatured ? featuredButtonTextColor : buttonTextColor};
					border: 1px solid ${isFeatured ? featuredButtonBgColor || planColor : buttonBgColor};
				}
			`;
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: `
				${mainSl} {
					display: grid;
					grid-template-columns: repeat(${columns}, 1fr);
					gap: ${columnGap}px;
					width: 100%;
				}

				${mainSl} .gbb-pricing-card {
					background: ${cardBgColor || '#ffffff'};
					color: ${cardTextColor || '#1e293b'};
					border-radius: ${borderRadius}px;
					position: relative;
					padding: 32px 24px;
					display: flex;
					flex-direction: column;
					box-sizing: border-box;
				}

				${mainSl} .gbb-pricing-badge {
					position: absolute;
					top: 12px;
					right: 12px;
					color: #ffffff;
					padding: 4px 10px;
					border-radius: 20px;
					font-size: 10px;
					font-weight: bold;
					letter-spacing: 1px;
				}

				${mainSl} .gbb-pricing-header {
					border-bottom: 1px solid #e2e8f0;
					padding-bottom: 20px;
					margin-bottom: 20px;
					text-align: center;
				}

				${mainSl} .gbb-pricing-name {
					font-size: 20px;
					font-weight: 700;
					margin: 0 0 10px 0;
				}

				${mainSl} .gbb-pricing-rate {
					display: flex;
					justify-content: center;
					align-items: baseline;
					margin: 15px 0;
				}

				${mainSl} .gbb-pricing-currency {
					font-size: 20px;
					font-weight: 600;
					margin-right: 2px;
				}

				${mainSl} .gbb-pricing-price {
					font-size: 42px;
					font-weight: 800;
					line-height: 1;
				}

				${mainSl} .gbb-pricing-period-separator {
					font-size: 14px;
					opacity: 0.7;
					margin-left: 4px;
				}

				${mainSl} .gbb-pricing-period {
					font-size: 14px;
					opacity: 0.7;
				}

				${mainSl} .gbb-pricing-features {
					list-style: none;
					padding: 0;
					margin: 0 0 30px 0;
					display: flex;
					flex-direction: column;
					gap: 12px;
				}

				${mainSl} .gbb-pricing-feature-item {
					display: flex;
					align-items: center;
					font-size: 14px;
				}
				${mainSl} .gbb-pricing-feature-item.is-enabled {
					color: inherit;
				}
				${mainSl} .gbb-pricing-feature-item.is-disabled {
					color: rgba(0,0,0,0.38);
				}

				${mainSl} .gbb-feature-icon {
					display: flex;
					align-items: center;
				}

				${mainSl} .gbb-pricing-button {
					display: inline-block;
					text-align: center;
					padding: 12px 24px;
					border-radius: 6px;
					font-weight: 600;
					text-decoration: none;
					margin-top: auto;
					transition: all 0.2s;
				}

				${tableStyles}

				${mainSl}.style-2 .gbb-pricing-card {
					background: #1a1a1a;
					color: #94a3b8;
					border-color: #2a2a2a;
				}
				
				${mainSl}.style-2 .gbb-pricing-card .gbb-pricing-price {
					color: #ffffff;
				}
				
				${mainSl}.style-2 .gbb-pricing-card .gbb-pricing-header {
					border-bottom-color: #2a2a2a;
				}
				
				${mainSl}.style-2 .gbb-pricing-feature-item.is-disabled {
					color: #4b5563;
					text-decoration: line-through;
				}

				${mainSl}.style-2 .gbb-pricing-card:hover {
					border-color: ${hoverHighlightColor};
					transform: translateY(-5px);
				}

				${mainSl}.style-2 .gbb-pricing-card:hover .gbb-pricing-button {
					background: ${hoverHighlightColor};
					color: #000000;
					border-color: ${hoverHighlightColor};
				}
			`.replace(/\s+/g, ' ')
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicStyle);

/***/ },

/***/ "./src/blocks/pricing-table/Components/PricingTable.jsx"
/*!**************************************************************!*\
  !*** ./src/blocks/pricing-table/Components/PricingTable.jsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const checkIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    marginRight: '8px'
  },
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
    points: "20 6 9 17 4 12"
  })
});
const crossIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    marginRight: '8px',
    opacity: 0.5
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })]
});
const PricingTable = ({
  attributes,
  setAttributes,
  RichTextEl,
  isBackend = false
}) => {
  const {
    blockId,
    pricingTables = [],
    themeStyle = 'style-1'
  } = attributes;
  const updateTableAttr = (index, key, value) => {
    const newTables = [...pricingTables];
    newTables[index] = {
      ...newTables[index],
      [key]: value
    };
    setAttributes({
      pricingTables: newTables
    });
  };
  const updateFeatureLabel = (tableIndex, featureIndex, value) => {
    const newTables = pricingTables.map(t => {
      const features = [...(t.features || [])];
      if (features[featureIndex]) {
        features[featureIndex] = {
          ...features[featureIndex],
          label: value
        };
      }
      return {
        ...t,
        features
      };
    });
    setAttributes({
      pricingTables: newTables
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `gbb-pricing-grid-container ${blockId} ${themeStyle}`,
    children: pricingTables.map((table, tableIndex) => {
      const isFeatured = table.isFeatured;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: `gbb-pricing-card ${isFeatured ? 'is-featured' : ''}`,
        children: [isFeatured && table.badgeText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "gbb-pricing-badge",
          children: table.badgeText
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "gbb-pricing-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichTextEl, {
            tagName: "h3",
            className: "gbb-pricing-name",
            value: table.name,
            onChange: val => updateTableAttr(tableIndex, 'name', val),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Plan Name', 'guten-builder-blocks')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "gbb-pricing-rate",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichTextEl, {
              tagName: "span",
              className: "gbb-pricing-currency",
              value: table.priceCurrency,
              onChange: val => updateTableAttr(tableIndex, 'priceCurrency', val),
              placeholder: "$"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichTextEl, {
              tagName: "span",
              className: "gbb-pricing-price",
              value: table.price,
              onChange: val => updateTableAttr(tableIndex, 'price', val),
              placeholder: "0"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "gbb-pricing-period-separator",
              children: "/"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichTextEl, {
              tagName: "span",
              className: "gbb-pricing-period",
              value: table.period,
              onChange: val => updateTableAttr(tableIndex, 'period', val),
              placeholder: "mo"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
          className: "gbb-pricing-features",
          children: (table.features || []).map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
            className: `gbb-pricing-feature-item ${feature.isEnable ? 'is-enabled' : 'is-disabled'}`,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              className: "gbb-feature-icon",
              children: feature.isEnable ? checkIcon : crossIcon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichTextEl, {
              tagName: "span",
              value: feature.label,
              onChange: val => updateFeatureLabel(tableIndex, featureIndex, val),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Feature description', 'guten-builder-blocks')
            })]
          }, featureIndex))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RichTextEl, {
          tagName: "a",
          href: "#",
          className: "gbb-pricing-button",
          value: table.linkLabel,
          onChange: val => updateTableAttr(tableIndex, 'linkLabel', val),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Buy Now', 'guten-builder-blocks'),
          onClick: isBackend ? e => e.preventDefault() : undefined
        })]
      }, tableIndex);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingTable);

/***/ },

/***/ "./src/blocks/pricing-table/view.js"
/*!******************************************!*\
  !*** ./src/blocks/pricing-table/view.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/pricing-table/style.scss");
/* harmony import */ var _Components_Common_dynamicStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Common/dynamicStyle */ "./src/blocks/pricing-table/Components/Common/dynamicStyle.js");
/* harmony import */ var _Components_PricingTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/PricingTable */ "./src/blocks/pricing-table/Components/PricingTable.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





document.addEventListener('DOMContentLoaded', () => {
  const tableEls = document.querySelectorAll('.wp-block-guten-builder-blocks-pricing-table');
  tableEls.forEach(tableEl => {
    if (!tableEl.dataset.attributes) return;
    const attributes = JSON.parse(tableEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(tableEl).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_Common_dynamicStyle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Components_PricingTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        RichTextEl: RichTextEl,
        isBackend: false
      })]
    }));
    tableEl.removeAttribute('data-attributes');
  });
});
const RichTextEl = ({
  tagName,
  className,
  value
}) => {
  const Tag = tagName;
  // Very simple fallback for sanitizeHTML if it doesn't exist
  const cleanValue = typeof sanitizeHTML === 'function' ? sanitizeHTML(value) : value;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Tag, {
    className: className,
    dangerouslySetInnerHTML: {
      __html: cleanValue
    }
  });
};

/***/ },

/***/ "./src/blocks/pricing-table/style.scss"
/*!*********************************************!*\
  !*** ./src/blocks/pricing-table/style.scss ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 			"blocks/pricing-table/view": 0,
/******/ 			"blocks/pricing-table/style-view": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/pricing-table/style-view"], () => (__webpack_require__("./src/blocks/pricing-table/view.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=view.js.map