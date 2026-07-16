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

/***/ "./src/blocks/pricing-table/Components/Edit.js"
/*!*****************************************************!*\
  !*** ./src/blocks/pricing-table/Components/Edit.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings/Settings */ "./src/blocks/pricing-table/Components/Settings/Settings.js");
/* harmony import */ var _PricingTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PricingTable */ "./src/blocks/pricing-table/Components/PricingTable.jsx");
/* harmony import */ var _Common_dynamicStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Common/dynamicStyle */ "./src/blocks/pricing-table/Components/Common/dynamicStyle.js");
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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PricingTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ "./src/blocks/pricing-table/Components/Settings/General.js"
/*!*****************************************************************!*\
  !*** ./src/blocks/pricing-table/Components/Settings/General.js ***!
  \*****************************************************************/
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const General = ({
  attributes,
  setAttributes,
  clientId
}) => {
  const {
    blockId,
    pricingTables = [],
    columns,
    columnGap
  } = attributes;
  const prevClientId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useRef)(clientId);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const clientChanged = prevClientId.current !== clientId;
    if (!blockId || clientChanged) {
      const uuid = window.crypto && crypto.randomUUID ? crypto.randomUUID().split('-')[0] : Math.random().toString(36).substring(2, 9);
      setAttributes({
        blockId: `gbb-price-${uuid}`
      });
      prevClientId.current = clientId;
    }
  }, [blockId, clientId, setAttributes]);
  const updateTable = (index, key, value) => {
    const newTables = [...pricingTables];
    newTables[index] = {
      ...newTables[index],
      [key]: value
    };
    setAttributes({
      pricingTables: newTables
    });
  };
  const addTable = () => {
    const templateFeatures = pricingTables.length > 0 && pricingTables[0].features ? pricingTables[0].features.map(f => ({
      label: f.label,
      isEnable: true
    })) : [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Everything in Starter', 'guten-builder-blocks'),
      isEnable: true
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced Customization', 'guten-builder-blocks'),
      isEnable: true
    }];
    const newTables = [...pricingTables, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Premium Plan', 'guten-builder-blocks'),
      price: '49',
      priceCurrency: '$',
      period: 'mo',
      link: '#',
      linkLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Buy Now', 'guten-builder-blocks'),
      color: '#ec4899',
      isFeatured: false,
      badgeText: '',
      features: templateFeatures
    }];
    setAttributes({
      pricingTables: newTables
    });
  };
  const deleteTable = index => {
    const newTables = pricingTables.filter((_, i) => i !== index);
    setAttributes({
      pricingTables: newTables
    });
  };
  const updateFeature = (tableIndex, featureIndex, key, value) => {
    let newTables = [...pricingTables];
    if (key === 'label') {
      newTables = newTables.map(t => {
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
    } else {
      const features = [...newTables[tableIndex].features];
      features[featureIndex] = {
        ...features[featureIndex],
        [key]: value
      };
      newTables[tableIndex] = {
        ...newTables[tableIndex],
        features
      };
    }
    setAttributes({
      pricingTables: newTables
    });
  };
  const addFeature = tableIndex => {
    const newTables = pricingTables.map(t => ({
      ...t,
      features: [...(t.features || []), {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New Feature Item', 'guten-builder-blocks'),
        isEnable: true
      }]
    }));
    setAttributes({
      pricingTables: newTables
    });
  };
  const deleteFeature = (tableIndex, featureIndex) => {
    const newTables = pricingTables.map(t => ({
      ...t,
      features: (t.features || []).filter((_, i) => i !== featureIndex)
    }));
    setAttributes({
      pricingTables: newTables
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('⚙️ Grid Layout', 'guten-builder-blocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Theme Style', 'guten-builder-blocks'),
        value: attributes.themeStyle || 'style-1',
        options: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 1 (Default)', 'guten-builder-blocks'),
          value: 'style-1'
        }, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style 2 (Dark Hover)', 'guten-builder-blocks'),
          value: 'style-2'
        }],
        onChange: val => setAttributes({
          themeStyle: val
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Columns (Desktop)', 'guten-builder-blocks'),
        value: columns,
        options: [{
          label: '1',
          value: 1
        }, {
          label: '2',
          value: 2
        }, {
          label: '3',
          value: 3
        }, {
          label: '4',
          value: 4
        }],
        onChange: val => setAttributes({
          columns: parseInt(val)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Column Gap (px)', 'guten-builder-blocks'),
        value: columnGap,
        onChange: val => setAttributes({
          columnGap: val
        }),
        min: 10,
        max: 50
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('💰 Plans & Pricing Cards', 'guten-builder-blocks'),
      initialOpen: true,
      children: [pricingTables.map((table, tableIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '16px',
          position: 'relative'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '12px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            style: {
              fontWeight: 'bold',
              fontSize: '13px',
              color: '#334155'
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Plan #', 'guten-builder-blocks'), " ", tableIndex + 1, " (", table.name, ")"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            isDestructive: true,
            variant: "link",
            onClick: () => deleteTable(tableIndex),
            style: {
              padding: 0,
              height: 'auto',
              minWidth: 'auto'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Plan', 'guten-builder-blocks')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Plan Name', 'guten-builder-blocks'),
          value: table.name,
          onChange: val => updateTable(tableIndex, 'name', val)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr',
            gap: '8px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Currency', 'guten-builder-blocks'),
            value: table.priceCurrency,
            onChange: val => updateTable(tableIndex, 'priceCurrency', val)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Price', 'guten-builder-blocks'),
            value: table.price,
            onChange: val => updateTable(tableIndex, 'price', val)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Period', 'guten-builder-blocks'),
            value: table.period,
            onChange: val => updateTable(tableIndex, 'period', val)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Link', 'guten-builder-blocks'),
          value: table.link,
          onChange: val => updateTable(tableIndex, 'link', val)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Label', 'guten-builder-blocks'),
          value: table.linkLabel,
          onChange: val => updateTable(tableIndex, 'linkLabel', val)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brand Color (Hex)', 'guten-builder-blocks'),
          value: table.color,
          onChange: val => updateTable(tableIndex, 'color', val)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured / Popular', 'guten-builder-blocks'),
          checked: table.isFeatured,
          onChange: val => updateTable(tableIndex, 'isFeatured', val)
        }), table.isFeatured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Badge Ribbon Text', 'guten-builder-blocks'),
          value: table.badgeText,
          onChange: val => updateTable(tableIndex, 'badgeText', val),
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('e.g. POPULAR', 'guten-builder-blocks')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            marginTop: '12px',
            borderTop: '1px solid #cbd5e1',
            paddingTop: '12px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            style: {
              fontWeight: 'bold',
              fontSize: '11px',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
              color: '#64748b'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Features List', 'guten-builder-blocks')
          }), (table.features || []).map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            style: {
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              marginBottom: '8px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
              type: "checkbox",
              checked: feature.isEnable,
              onChange: e => updateFeature(tableIndex, featureIndex, 'isEnable', e.target.checked),
              style: {
                width: '16px',
                height: '16px'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              style: {
                flex: 1
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                value: feature.label,
                onChange: val => updateFeature(tableIndex, featureIndex, 'label', val),
                style: {
                  marginBottom: 0
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
              isDestructive: true,
              variant: "link",
              onClick: () => deleteFeature(tableIndex, featureIndex),
              style: {
                minWidth: 'auto',
                padding: 0
              },
              children: "\u2715"
            })]
          }, featureIndex)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "secondary",
            isSmall: true,
            onClick: () => addFeature(tableIndex),
            style: {
              width: '100%',
              justifyContent: 'center',
              marginTop: '6px'
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('＋ Add Feature Row', 'guten-builder-blocks')
          })]
        })]
      }, tableIndex)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "secondary",
        onClick: addTable,
        style: {
          width: '100%',
          justifyContent: 'center'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('＋ Add Pricing Card', 'guten-builder-blocks')
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ },

/***/ "./src/blocks/pricing-table/Components/Settings/Settings.js"
/*!******************************************************************!*\
  !*** ./src/blocks/pricing-table/Components/Settings/Settings.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/options */ "./src/blocks/pricing-table/utils/options.js");
/* harmony import */ var _General__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./General */ "./src/blocks/pricing-table/Components/Settings/General.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Style */ "./src/blocks/pricing-table/Components/Settings/Style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const Settings = ({
  attributes,
  setAttributes,
  clientId
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
      className: "guten-builder-blocks-tab-panel wp-block-guten-builder-blocks-pricing-table",
      activeClass: "guten-builder-blocks-active-tab",
      tabs: _utils_options__WEBPACK_IMPORTED_MODULE_2__.generalStyleTabs,
      children: tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: ['general' === tab.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_General__WEBPACK_IMPORTED_MODULE_3__["default"], {
          attributes: attributes,
          setAttributes: setAttributes,
          clientId: clientId
        }), 'style' === tab.name && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Style__WEBPACK_IMPORTED_MODULE_4__["default"], {
          attributes: attributes,
          setAttributes: setAttributes
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ },

/***/ "./src/blocks/pricing-table/Components/Settings/Style.js"
/*!***************************************************************!*\
  !*** ./src/blocks/pricing-table/Components/Settings/Style.js ***!
  \***************************************************************/
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
    borderRadius,
    cardBgColor,
    cardTextColor,
    buttonBgColor,
    buttonTextColor,
    featuredButtonBgColor,
    featuredButtonTextColor
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('🎨 Card Styling', 'guten-builder-blocks'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontWeight: 'bold',
          margin: '0 0 5px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Background Color', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
        value: cardBgColor,
        onChange: val => setAttributes({
          cardBgColor: val || '#ffffff'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontWeight: 'bold',
          margin: '10px 0 5px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Text Color', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
        value: cardTextColor,
        onChange: val => setAttributes({
          cardTextColor: val || '#1e293b'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Card Border Radius (px)', 'guten-builder-blocks'),
        value: borderRadius,
        onChange: val => setAttributes({
          borderRadius: val
        }),
        min: 0,
        max: 40
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('🛍️ Button Styling', 'guten-builder-blocks'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontWeight: 'bold',
          margin: '0 0 5px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default Button Background', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
        value: buttonBgColor,
        onChange: val => setAttributes({
          buttonBgColor: val || '#3b82f6'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontWeight: 'bold',
          margin: '10px 0 5px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default Button Text Color', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
        value: buttonTextColor,
        onChange: val => setAttributes({
          buttonTextColor: val || '#ffffff'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontWeight: 'bold',
          margin: '10px 0 5px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured Button Background', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
        value: featuredButtonBgColor,
        onChange: val => setAttributes({
          featuredButtonBgColor: val || '#10b981'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontWeight: 'bold',
          margin: '10px 0 5px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Featured Button Text Color', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
        value: featuredButtonTextColor,
        onChange: val => setAttributes({
          featuredButtonTextColor: val || '#ffffff'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        style: {
          fontWeight: 'bold',
          margin: '10px 0 5px 0'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hover Highlight Color (Style 2)', 'guten-builder-blocks')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
        value: attributes.hoverHighlightColor,
        onChange: val => setAttributes({
          hoverHighlightColor: val || '#ffd700'
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/blocks/pricing-table/index.js"
/*!*******************************************!*\
  !*** ./src/blocks/pricing-table/index.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/pricing-table/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/pricing-table/editor.scss");
/* harmony import */ var _Components_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Edit */ "./src/blocks/pricing-table/Components/Edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/pricing-table/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _Components_Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: () => null // Rendered dynamically on server side
});

/***/ },

/***/ "./src/blocks/pricing-table/utils/options.js"
/*!***************************************************!*\
  !*** ./src/blocks/pricing-table/utils/options.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generalStyleTabs: () => (/* binding */ generalStyleTabs)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const generalStyleTabs = [{
  name: 'general',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General', 'textdomain')
}, {
  name: 'style',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Style', 'textdomain')
}];

/***/ },

/***/ "./src/blocks/pricing-table/editor.scss"
/*!**********************************************!*\
  !*** ./src/blocks/pricing-table/editor.scss ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/blocks/pricing-table/style.scss"
/*!*********************************************!*\
  !*** ./src/blocks/pricing-table/style.scss ***!
  \*********************************************/
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

/***/ "./src/blocks/pricing-table/block.json"
/*!*********************************************!*\
  !*** ./src/blocks/pricing-table/block.json ***!
  \*********************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"guten-builder-blocks/pricing-table","version":"1.0.0","title":"Guten Pricing Table","description":"Showcase your subscription plans or products with a stunning pricing grid.","category":"guten-builder","keywords":["pricing","price list","table","grid"],"attributes":{"blockId":{"type":"string","default":""},"pricingTables":{"type":"array","default":[{"name":"Starter","price":"9","yearlyPrice":"79","priceCurrency":"$","period":"mo","yearlyPeriod":"yr","link":"#","linkLabel":"Get Started","color":"#3b82f6","isFeatured":false,"badgeText":"","features":[{"label":"Up to 5 Projects","isEnable":true},{"label":"Basic Support","isEnable":true},{"label":"Custom Domains","isEnable":false}]},{"name":"Growth","price":"29","yearlyPrice":"249","priceCurrency":"$","period":"mo","yearlyPeriod":"yr","link":"#","linkLabel":"Upgrade Now","color":"#10b981","isFeatured":true,"badgeText":"POPULAR","features":[{"label":"Unlimited Projects","isEnable":true},{"label":"24/7 Priority Support","isEnable":true},{"label":"Custom Domains","isEnable":true}]}]},"showToggle":{"type":"boolean","default":false},"toggleLabelLeft":{"type":"string","default":"Monthly"},"toggleLabelRight":{"type":"string","default":"Yearly"},"discountText":{"type":"string","default":"Save 20%"},"columns":{"type":"number","default":2},"columnGap":{"type":"number","default":24},"borderRadius":{"type":"number","default":12},"cardBgColor":{"type":"string","default":"#ffffff"},"cardTextColor":{"type":"string","default":"#1e293b"},"buttonBgColor":{"type":"string","default":"#3b82f6"},"buttonTextColor":{"type":"string","default":"#ffffff"},"featuredButtonBgColor":{"type":"string","default":"#10b981"},"featuredButtonTextColor":{"type":"string","default":"#ffffff"},"themeStyle":{"type":"string","default":"style-1"},"hoverHighlightColor":{"type":"string","default":"#ffd700"}},"supports":{"html":false,"anchor":true,"spacing":{"margin":true,"padding":true}},"textdomain":"guten-builder-blocks","editorScript":"file:./index.js","style":"file:./style-index.css","editorStyle":"file:./index.css","render":"file:./render.php","viewScript":"file:./view.js"}');

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
/******/ 			"blocks/pricing-table/index": 0,
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/pricing-table/style-view"], () => (__webpack_require__("./src/blocks/pricing-table/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map