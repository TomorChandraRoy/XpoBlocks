/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../tr-tools/AdminDashboard/components/AllBlocks/AllBlocks.jsx"
/*!*********************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/AllBlocks/AllBlocks.jsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AllBlocks_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllBlocks.scss */ "../tr-tools/AdminDashboard/components/AllBlocks/AllBlocks.scss");
/* harmony import */ var _Banner_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Banner/Banner */ "../tr-tools/AdminDashboard/components/AllBlocks/Banner/Banner.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const AllBlocks = props => {
  const {
    availableBlocks = [],
    activeBlocks = {}
  } = props;

  // লোকাল স্টেট (ইউজার অন/অফ করলে সাথে সাথে আপডেট দেখানোর জন্য)
  const [blocksState, setBlocksState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(activeBlocks?.activeBlocks || activeBlocks || {});
  const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [saveMessage, setSaveMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [filterStatus, setFilterStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("all");
  const isBlockActive = blockId => {
    const val = blocksState[blockId];
    return val !== false && val !== "false" && val !== "" && val !== 0;
  };

  // ১. সিঙ্গেল ব্লক অন/অফ টগল করা
  const toggleBlock = blockId => {
    setBlocksState(prev => {
      const currentVal = prev[blockId];
      const active = currentVal !== false && currentVal !== "false" && currentVal !== "" && currentVal !== 0;
      return {
        ...prev,
        [blockId]: !active
      };
    });
  };

  // ২. সব ব্লক একসাথে অন/অফ করা
  const setAllBlocksState = status => {
    const updated = {};
    availableBlocks.forEach(b => {
      updated[b.id] = status;
    });
    setBlocksState(updated);
  };

  // ৩. সেটিংস ডাটাবেজে সেভ করা (POST Request)
  const saveSettings = () => {
    setIsSaving(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: "/guten-builder/v1/settings",
      method: "POST",
      data: {
        activeBlocks: blocksState
      }
    }).then(() => {
      setSaveMessage("Settings saved successfully!");
      setTimeout(() => setSaveMessage(""), 3500);
    }).catch(() => {
      setSaveMessage("Error saving settings.");
      setTimeout(() => setSaveMessage(""), 3500);
    }).finally(() => {
      setIsSaving(false);
    });
  };

  // সার্চ ও ফিল্টার লজিক
  const filteredBlocks = availableBlocks.filter(block => {
    const matchesSearch = block.title?.toLowerCase().includes(searchQuery.toLowerCase()) || block.desc?.toLowerCase().includes(searchQuery.toLowerCase());
    const isActive = isBlockActive(block.id);
    if (filterStatus === "active") return matchesSearch && isActive;
    if (filterStatus === "inactive") return matchesSearch && !isActive;
    return matchesSearch;
  });
  const totalBlocksCount = availableBlocks.length;
  const activeBlocksCount = availableBlocks.filter(block => isBlockActive(block.id)).length;
  const disabledBlocksCount = totalBlocksCount - activeBlocksCount;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "all-blocks-wrap",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "all-blocks-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "all-blocks-title",
          children: "All Blocks"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "all-blocks-desc",
          children: "Toggle block availability for the WordPress editor in real-time."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [saveMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "save-message",
          children: saveMessage
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "btn-save",
          isPrimary: true,
          onClick: saveSettings,
          isBusy: isSaving,
          disabled: isSaving,
          children: isSaving ? "Saving..." : "Save Changes"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "suite-toolbar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "search-input-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("svg", {
          className: "search-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("line", {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "text",
          className: "search-input",
          placeholder: "Search blocks by name or description...",
          value: searchQuery,
          onChange: e => setSearchQuery(e.target.value)
        }), searchQuery && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "clear-search",
          onClick: () => setSearchQuery(""),
          "aria-label": "Clear search",
          children: "\xD7"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "filter-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: `filter-btn ${filterStatus === "all" ? "active" : ""}`,
          onClick: () => setFilterStatus("all"),
          children: ["All (", totalBlocksCount, ")"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: `filter-btn ${filterStatus === "active" ? "active" : ""}`,
          onClick: () => setFilterStatus("active"),
          children: ["Active (", activeBlocksCount, ")"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
          className: `filter-btn ${filterStatus === "inactive" ? "active" : ""}`,
          onClick: () => setFilterStatus("inactive"),
          children: ["Disabled (", disabledBlocksCount, ")"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "bulk-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "bulk-btn",
          onClick: () => setAllBlocksState(true),
          children: "Enable All"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "bulk-divider",
          children: "|"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          className: "bulk-btn",
          onClick: () => setAllBlocksState(false),
          children: "Disable All"
        })]
      })]
    }), filteredBlocks.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "empty-blocks-state",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "empty-title",
        children: "No matching blocks found"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "empty-desc",
        children: "Try searching for a different keyword or reset your status filter."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        className: "btn-secondary",
        onClick: () => {
          setSearchQuery("");
          setFilterStatus("all");
        },
        children: "Reset Filters"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "blocks-grid",
      children: filteredBlocks.map(block => {
        const isActive = isBlockActive(block.id);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: `block-card ${isActive ? "is-active" : "is-disabled"}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Banner_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
            block: block
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "block-content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "block-header",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
                className: "block-title",
                children: block.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: `block-badge ${isActive ? "badge-active" : "badge-disabled"}`,
                children: isActive ? "Active" : "Disabled"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "block-desc",
              children: block.desc || block.description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "block-links",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                type: "button",
                className: "block-link demo-link",
                onClick: e => {
                  e.preventDefault();
                  setDemoBlock(block);
                },
                children: "Live Demo"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "link-divider",
                children: "|"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                type: "button",
                className: "block-link docs-link",
                onClick: e => {
                  e.preventDefault();
                  setDocsBlock(block);
                },
                children: "Read Docs"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "block-toggle",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
                label: isActive ? "Enabled for Editor" : "Disabled",
                checked: isActive,
                onChange: () => toggleBlock(block.id)
              })
            })]
          })]
        }, block.id);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllBlocks);

/***/ },

/***/ "../tr-tools/AdminDashboard/components/AllBlocks/Banner/Banner.jsx"
/*!*************************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/AllBlocks/Banner/Banner.jsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BannerData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BannerData */ "../tr-tools/AdminDashboard/components/AllBlocks/Banner/BannerData.jsx");
/* harmony import */ var _Banner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner.scss */ "../tr-tools/AdminDashboard/components/AllBlocks/Banner/Banner.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Banner = ({
  block
}) => {
  const config = (0,_BannerData__WEBPACK_IMPORTED_MODULE_0__.getBlockBannerConfig)(block);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "block-card-banner",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "banner-bg-effects",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "speed-line sl-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "speed-line sl-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "speed-line sl-3"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "banner-content-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "banner-brand-logo",
        children: [config.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "brand-text",
          children: block.title || config.title
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "banner-heading-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          className: "banner-title",
          children: config.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "banner-tag",
          children: config.tag
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "banner-content-right",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "banner-preview-box",
        children: config.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: config.imageUrl,
          alt: config.title,
          className: "banner-preview-img"
        }) : config.preview
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ },

/***/ "../tr-tools/AdminDashboard/components/AllBlocks/Banner/BannerData.jsx"
/*!*****************************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/AllBlocks/Banner/BannerData.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockBannerConfigs: () => (/* binding */ blockBannerConfigs),
/* harmony export */   getBlockBannerConfig: () => (/* binding */ getBlockBannerConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const blockBannerConfigs = {
  "before-after": {
    title: "BEFORE/AFTER",
    tag: "INTERACTIVE COMPARISON BLOCK",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "21"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8 12h8"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><clipPath id="lClip"><path d="M 10 27 A 12 12 0 0 1 22 15 L 150 15 L 150 185 L 22 185 A 12 12 0 0 1 10 173 Z"/></clipPath><clipPath id="rClip"><path d="M 150 15 L 278 15 A 12 12 0 0 1 290 27 L 290 173 A 12 12 0 0 1 278 185 L 150 185 Z"/></clipPath><linearGradient id="afterSky" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%230284c7"/><stop offset="60%" stop-color="%231e1b4b"/><stop offset="100%" stop-color="%23312e81"/></linearGradient><linearGradient id="beforeBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23111827"/><stop offset="100%" stop-color="%231f2937"/></linearGradient><linearGradient id="glassGlow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="%23fef08a"/><stop offset="100%" stop-color="%23f59e0b"/></linearGradient></defs><rect width="300" height="200" fill="%23090d16"/><g clip-path="url(%23lClip)"><rect x="10" y="15" width="140" height="170" fill="url(%23beforeBg)"/><path d="M20 15 V185 M40 15 V185 M60 15 V185 M80 15 V185 M100 15 V185 M120 15 V185 M140 15 V185" stroke="%23374151" stroke-width="0.8" stroke-dasharray="3,3"/><path d="M10 35 H150 M10 65 H150 M10 95 H150 M10 125 H150 M10 155 H150" stroke="%23374151" stroke-width="0.8" stroke-dasharray="3,3"/><rect x="30" y="70" width="115" height="75" fill="none" stroke="%236b7280" stroke-width="2"/><polygon points="25,70 87,32 145,70" fill="none" stroke="%236b7280" stroke-width="2"/><line x1="87" y1="32" x2="87" y2="70" stroke="%234b5563" stroke-width="1.5"/><rect x="40" y="80" width="30" height="65" fill="%231f2937" stroke="%239ca3af" stroke-width="1.5" stroke-dasharray="2,2"/><rect x="80" y="80" width="55" height="65" fill="%231f2937" stroke="%239ca3af" stroke-width="1.5" stroke-dasharray="2,2"/><line x1="20" y1="145" x2="150" y2="145" stroke="%234b5563" stroke-width="2"/><rect x="20" y="27" width="54" height="18" rx="9" fill="%23111827" opacity="0.9" stroke="%234b5563"/><text x="31" y="39" font-family="sans-serif" font-size="8.5" font-weight="900" fill="%239ca3af" letter-spacing="0.5">BEFORE</text></g><g clip-path="url(%23rClip)"><rect x="150" y="15" width="140" height="170" fill="url(%23afterSky)"/><rect x="150" y="145" width="140" height="40" fill="%2315803d"/><rect x="220" y="152" width="60" height="25" rx="4" fill="%2306b6d4" opacity="0.8"/><rect x="155" y="55" width="125" height="90" fill="%23f8fafc" rx="4"/><rect x="165" y="65" width="65" height="38" fill="url(%23glassGlow)" rx="2" stroke="%23ffffff" stroke-width="1.5"/><line x1="197" y1="65" x2="197" y2="103" stroke="%23ffffff" stroke-width="1"/><rect x="235" y="65" width="35" height="38" fill="%23b45309" rx="2"/><line x1="242" y1="65" x2="242" y2="103" stroke="%2378350f" stroke-width="1"/><line x1="250" y1="65" x2="250" y2="103" stroke="%2378350f" stroke-width="1"/><line x1="258" y1="65" x2="258" y2="103" stroke="%2378350f" stroke-width="1"/><rect x="175" y="108" width="95" height="37" rx="3" fill="%2378350f" stroke="%23451a03" stroke-width="1"/><line x1="175" y1="120" x2="270" y2="120" stroke="%23451a03" stroke-width="1"/><line x1="175" y1="130" x2="270" y2="130" stroke="%23451a03" stroke-width="1"/><circle cx="170" cy="115" r="3.5" fill="%23fef08a"/><circle cx="275" cy="115" r="3.5" fill="%23fef08a"/><rect x="222" y="27" width="52" height="18" rx="9" fill="%23064e3b" opacity="0.95" stroke="%2334d399"/><text x="233" y="39" font-family="sans-serif" font-size="8.5" font-weight="900" fill="%2334d399" letter-spacing="0.5">AFTER</text></g><line x1="150" y1="15" x2="150" y2="185" stroke="%2334d399" stroke-width="4"/><line x1="150" y1="15" x2="150" y2="185" stroke="%23ffffff" stroke-width="1"/><circle cx="150" cy="100" r="20" fill="%2310b981" opacity="0.3"/><circle cx="150" cy="100" r="16" fill="%2310b981" stroke="%23ffffff" stroke-width="2.5"/><path d="M143 100 L147 96 M143 100 L147 104 M158 100 L153 96 M158 100 L153 104" stroke="%23ffffff" stroke-width="2.5" stroke-linecap="round"/><circle cx="142" cy="35" r="2.5" fill="%2334d399"/><circle cx="160" cy="55" r="3" fill="%23a7f3d0"/><circle cx="138" cy="80" r="2" fill="%2334d399"/><circle cx="164" cy="118" r="2.5" fill="%236ee7b7"/><circle cx="140" cy="148" r="3" fill="%2334d399"/><circle cx="158" cy="172" r="2" fill="%23a7f3d0"/></svg>'
  },
  accordion: {
    title: "FAQ ACCORDION",
    tag: "COLLAPSIBLE CONTENT BLOCK",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "3",
        y1: "12",
        x2: "21",
        y2: "12"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "3",
        y1: "18",
        x2: "15",
        y2: "18"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(20,15)"><rect x="0" y="0" width="260" height="48" rx="8" fill="%2310b981" opacity="0.25" stroke="%2310b981" stroke-width="1.5"/><rect x="20" y="17" width="130" height="14" rx="4" fill="%2334d399"/><circle cx="235" cy="24" r="10" fill="%2310b981"/><path d="M230 24 H240" stroke="%23ffffff" stroke-width="2"/><rect x="0" y="60" width="260" height="42" rx="8" fill="%231e293b" stroke="%23334155" stroke-width="1"/><rect x="20" y="74" width="150" height="14" rx="4" fill="%2364748b"/><circle cx="235" cy="81" r="10" fill="%23334155"/><path d="M230 81 H240 M235 76 V86" stroke="%23ffffff" stroke-width="2"/><rect x="0" y="112" width="260" height="42" rx="8" fill="%231e293b" stroke="%23334155" stroke-width="1"/><rect x="20" y="126" width="110" height="14" rx="4" fill="%2364748b"/><circle cx="235" cy="133" r="10" fill="%23334155"/><path d="M230 133 H240 M235 128 V138" stroke="%23ffffff" stroke-width="2"/></g></svg>'
  },
  "audio-player": {
    title: "AUDIO PLAYER",
    tag: "STREAMING SOUND WAVE BLOCK",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M9 18V5l12-2v13"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
        cx: "6",
        cy: "18",
        r: "3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
        cx: "18",
        cy: "16",
        r: "3"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="audioCardBg" x1="0" y1="0" x2="1" y2="0.8"><stop offset="0%" stop-color="%2318181b"/><stop offset="40%" stop-color="%23182721"/><stop offset="100%" stop-color="%23064e3b"/></linearGradient></defs><rect width="300" height="200" fill="%230f172a"/><rect x="15" y="25" width="270" height="150" rx="14" fill="url(%23audioCardBg)" stroke="%2310b981" stroke-width="1.2"/><circle cx="65" cy="100" r="32" fill="%2310b981" opacity="0.25"/><circle cx="65" cy="100" r="28" fill="none" stroke="%2310b981" stroke-width="2.5"/><polygon points="60,88 77,100 60,112" fill="%2310b981"/><text x="112" y="56" font-family="-apple-system, sans-serif" font-size="13" font-weight="bold" fill="%23ffffff">The Future of Audio Blocks</text><text x="112" y="74" font-family="-apple-system, sans-serif" font-size="9.5" font-weight="500" fill="%2394a3b8">Guten Audio Player</text><g fill="%2310b981"><rect x="112" y="104" width="2" height="10" rx="1"/><rect x="116" y="99" width="2" height="15" rx="1"/><rect x="120" y="94" width="2" height="20" rx="1"/><rect x="124" y="90" width="2" height="24" rx="1"/><rect x="128" y="97" width="2" height="17" rx="1"/><rect x="132" y="101" width="2" height="13" rx="1"/><rect x="136" y="92" width="2" height="22" rx="1"/><rect x="140" y="87" width="2" height="27" rx="1"/><rect x="144" y="95" width="2" height="19" rx="1"/><rect x="148" y="100" width="2" height="14" rx="1"/><rect x="152" y="96" width="2" height="18" rx="1"/><rect x="156" y="92" width="2" height="22" rx="1"/><rect x="160" y="98" width="2" height="16" rx="1"/><rect x="164" y="103" width="2" height="11" rx="1"/><rect x="168" y="95" width="2" height="19" rx="1"/><rect x="172" y="89" width="2" height="25" rx="1"/><rect x="176" y="93" width="2" height="21" rx="1"/><rect x="180" y="99" width="2" height="15" rx="1"/><rect x="184" y="94" width="2" height="20" rx="1"/><rect x="188" y="88" width="2" height="26" rx="1"/><rect x="192" y="92" width="2" height="22" rx="1"/><rect x="196" y="98" width="2" height="16" rx="1"/><rect x="200" y="102" width="2" height="12" rx="1"/><rect x="204" y="96" width="2" height="18" rx="1"/><rect x="208" y="90" width="2" height="24" rx="1"/><rect x="212" y="86" width="2" height="28" rx="1"/><rect x="216" y="93" width="2" height="21" rx="1"/><rect x="220" y="98" width="2" height="16" rx="1"/><rect x="224" y="92" width="2" height="22" rx="1"/><rect x="228" y="87" width="2" height="27" rx="1"/><rect x="232" y="94" width="2" height="20" rx="1"/><rect x="236" y="100" width="2" height="14" rx="1"/><rect x="240" y="95" width="2" height="19" rx="1"/><rect x="244" y="90" width="2" height="24" rx="1"/><rect x="248" y="97" width="2" height="17" rx="1"/><rect x="252" y="103" width="2" height="11" rx="1"/><rect x="256" y="96" width="2" height="18" rx="1"/><rect x="260" y="92" width="2" height="22" rx="1"/><rect x="264" y="99" width="2" height="15" rx="1"/></g><line x1="112" y1="124" x2="266" y2="124" stroke="%23334155" stroke-width="3" stroke-linecap="round"/><line x1="112" y1="124" x2="165" y2="124" stroke="%2310b981" stroke-width="3" stroke-linecap="round"/><circle cx="165" cy="124" r="4.5" fill="%23ffffff"/><text x="112" y="148" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="%23e2e8f0">1.5x Speed</text><text x="160" y="148" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="%23e2e8f0">Skip 10s</text><path d="M208 141 L211 141 L214 138 L214 150 L211 147 L208 147 Z M216 142 A4 4 0 0 1 216 146" fill="none" stroke="%2310b981" stroke-width="1.5"/><line x1="220" y1="144" x2="238" y2="144" stroke="%2310b981" stroke-width="3.5" stroke-linecap="round"/><circle cx="248" cy="144" r="2" fill="%2310b981"/><circle cx="254" cy="141" r="2" fill="%2310b981"/><circle cx="254" cy="147" r="2" fill="%2310b981"/><line x1="248" y1="144" x2="254" y2="141" stroke="%2310b981" stroke-width="1"/><line x1="248" y1="144" x2="254" y2="147" stroke="%2310b981" stroke-width="1"/><text x="259" y="147" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="%23e2e8f0">Share</text></svg>'
  },
  "pricing-table": {
    title: "PRICING TABLE",
    tag: "TIER & FEATURE COMPARISON",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "23"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(25,15)"><rect x="0" y="25" width="115" height="135" rx="10" fill="%231e293b" stroke="%23334155" stroke-width="1.5"/><rect x="15" y="42" width="55" height="12" rx="4" fill="%2364748b"/><text x="15" y="82" font-family="sans-serif" font-size="22" font-weight="bold" fill="%23ffffff">$19</text><rect x="15" y="100" width="75" height="6" rx="3" fill="%23475569"/><rect x="15" y="115" width="85" height="6" rx="3" fill="%23475569"/><rect x="135" y="10" width="115" height="150" rx="12" fill="%231e293b" stroke="%2310b981" stroke-width="2"/><rect x="150" y="25" width="50" height="14" rx="4" fill="%2310b981"/><text x="150" y="72" font-family="sans-serif" font-size="26" font-weight="bold" fill="%2334d399">$49</text><rect x="150" y="93" width="80" height="6" rx="3" fill="%2334d399"/><rect x="150" y="107" width="85" height="6" rx="3" fill="%2334d399"/><rect x="150" y="128" width="85" height="20" rx="6" fill="%2310b981"/></g></svg>'
  },
  button: {
    title: "ACTION BUTTON",
    tag: "ANIMATED CTA & HOVER EFFECTS",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "3",
        y: "8",
        width: "18",
        height: "8",
        rx: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
        points: "12 11 15 11 15 13"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><defs><linearGradient id="btnG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%2310b981"/><stop offset="100%" stop-color="%23059669"/></linearGradient></defs><rect width="300" height="200" fill="%230f172a"/><g transform="translate(25,20)"><rect x="20" y="50" width="210" height="60" rx="10" fill="url(%23btnG)" stroke="%2334d399" stroke-width="2"/><text x="48" y="86" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="bold" fill="%23ffffff">Click Here</text><circle cx="190" cy="80" r="14" fill="%23ffffff" opacity="0.25"/><path d="M185 80 L195 80 M191 76 L196 80 L191 84" stroke="%23ffffff" stroke-width="2.5" stroke-linecap="round"/></g></svg>'
  },
  divider: {
    title: "SECTION DIVIDER",
    tag: "CREATIVE SHAPE & LINE SEPARATOR",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "3",
        y1: "12",
        x2: "8",
        y2: "12"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "3",
        fill: "#10b981"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "16",
        y1: "12",
        x2: "21",
        y2: "12"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(25,25)"><line x1="10" y1="30" x2="240" y2="30" stroke="%23334155" stroke-width="2"/><line x1="80" y1="30" x2="170" y2="30" stroke="%2310b981" stroke-width="3" stroke-linecap="round"/><line x1="10" y1="85" x2="110" y2="85" stroke="%2310b981" stroke-width="2"/><polygon points="125,80 130,85 125,90 120,85" fill="%2334d399"/><line x1="140" y1="85" x2="240" y2="85" stroke="%2310b981" stroke-width="2"/><path d="M10 140 Q 65 125, 125 140 T 240 140" fill="none" stroke="%2310b981" stroke-width="2.5" stroke-linecap="round"/></g></svg>'
  },
  "newsletter-card": {
    title: "NEWSLETTER CARD",
    tag: "SUBSCRIBE & LEAD CAPTURE BLOCK",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
        points: "22,6 12,13 2,6"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(20,20)"><rect x="0" y="0" width="260" height="160" rx="12" fill="%231e293b" stroke="%23334155"/><circle cx="50" cy="45" r="16" fill="%2310b981" opacity="0.2"/><path d="M42 41 L58 41 M42 45 L54 45 M42 49 L50 49" stroke="%2334d399" stroke-width="2" stroke-linecap="round"/><rect x="80" y="32" width="130" height="10" rx="3" fill="%23ffffff"/><rect x="80" y="48" width="90" height="7" rx="3" fill="%2364748b"/><rect x="25" y="85" width="135" height="38" rx="6" fill="%230f172a" stroke="%23475569"/><text x="38" y="108" font-family="sans-serif" font-size="10" fill="%2394a3b8">Enter your email...</text><rect x="168" y="85" width="67" height="38" rx="6" fill="%2310b981"/><text x="181" y="108" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff">JOIN</text></g></svg>'
  },
  newsletter: {
    title: "NEWSLETTER CARD",
    tag: "SUBSCRIBE & LEAD CAPTURE BLOCK",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
        points: "22,6 12,13 2,6"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(20,20)"><rect x="0" y="0" width="260" height="160" rx="12" fill="%231e293b" stroke="%23334155"/><circle cx="50" cy="45" r="16" fill="%2310b981" opacity="0.2"/><path d="M42 41 L58 41 M42 45 L54 45 M42 49 L50 49" stroke="%2334d399" stroke-width="2" stroke-linecap="round"/><rect x="80" y="32" width="130" height="10" rx="3" fill="%23ffffff"/><rect x="80" y="48" width="90" height="7" rx="3" fill="%2364748b"/><rect x="25" y="85" width="135" height="38" rx="6" fill="%230f172a" stroke="%23475569"/><text x="38" y="108" font-family="sans-serif" font-size="10" fill="%2394a3b8">Enter your email...</text><rect x="168" y="85" width="67" height="38" rx="6" fill="%2310b981"/><text x="181" y="108" font-family="sans-serif" font-size="10" font-weight="bold" fill="%23ffffff">JOIN</text></g></svg>'
  },
  marquee: {
    title: "SMOOTH MARQUEE",
    tag: "INFINITE LOGO & TEXT SCROLLER",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
        points: "13 19 22 12 13 5 13 19"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
        points: "2 19 11 12 2 5 2 19"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23090d16"/><g transform="translate(10,25)"><rect x="0" y="50" width="280" height="50" rx="8" fill="%231e293b" stroke="%2310b981" stroke-width="1.5"/><rect x="15" y="62" width="70" height="26" rx="13" fill="%2310b981" opacity="0.25"/><text x="30" y="79" font-family="sans-serif" font-size="11" font-weight="bold" fill="%2334d399">FAST</text><rect x="95" y="62" width="80" height="26" rx="13" fill="%233b82f6" opacity="0.25"/><text x="108" y="79" font-family="sans-serif" font-size="11" font-weight="bold" fill="%2360a5fa">MOTION</text><rect x="185" y="62" width="80" height="26" rx="13" fill="%238b5cf6" opacity="0.25"/><text x="196" y="79" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23c084fc">SMOOTH</text></g></svg>'
  },
  "scroll-story": {
    title: "SCROLL STORY",
    tag: "PARALLAX NARRATIVE ENGINE",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
        points: "12 2 2 7 12 12 22 7 12 2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
        points: "2 17 12 22 22 17"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
        points: "2 12 12 17 22 12"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(20,20)"><line x1="130" y1="10" x2="130" y2="150" stroke="%23334155" stroke-width="3"/><line x1="130" y1="10" x2="130" y2="85" stroke="%2310b981" stroke-width="3"/><circle cx="130" cy="30" r="11" fill="%2310b981"/><text x="126" y="34" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23ffffff">1</text><rect x="150" y="16" width="90" height="28" rx="6" fill="%231e293b" stroke="%2310b981"/><circle cx="130" cy="85" r="13" fill="%2310b981" stroke="%2334d399" stroke-width="3"/><text x="126" y="89" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23ffffff">2</text><rect x="25" y="71" width="90" height="28" rx="6" fill="%231e293b" stroke="%2334d399"/><circle cx="130" cy="135" r="11" fill="%231e293b" stroke="%23475569" stroke-width="2"/><text x="126" y="139" font-family="sans-serif" font-size="11" font-weight="bold" fill="%2394a3b8">3</text></g></svg>'
  },
  "table-of-contents": {
    title: "TABLE OF CONTENTS",
    tag: "AUTOMATIC HEADING INDEX",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "10",
        y1: "6",
        x2: "21",
        y2: "6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "10",
        y1: "12",
        x2: "21",
        y2: "12"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "10",
        y1: "18",
        x2: "21",
        y2: "18"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M4 6h1v4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M4 10h2"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(25,20)"><rect x="0" y="0" width="250" height="160" rx="10" fill="%231e293b" stroke="%23334155"/><circle cx="30" cy="35" r="5" fill="%2310b981"/><rect x="45" y="32" width="150" height="6" rx="3" fill="%2334d399"/><circle cx="50" cy="65" r="4" fill="%2364748b"/><rect x="65" y="62" width="120" height="6" rx="3" fill="%2364748b"/><circle cx="50" cy="95" r="4" fill="%2364748b"/><rect x="65" y="92" width="140" height="6" rx="3" fill="%2364748b"/><circle cx="30" cy="125" r="5" fill="%2364748b"/><rect x="45" y="122" width="160" height="6" rx="3" fill="%2364748b"/></g></svg>'
  },
  "qr-code": {
    title: "QR CODE GENERATOR",
    tag: "DYNAMIC & CUSTOM QR CODES",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "3",
        y: "3",
        width: "7",
        height: "7",
        rx: "1.5",
        stroke: "#10b981",
        strokeWidth: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "5",
        y: "5",
        width: "3",
        height: "3",
        fill: "#10b981"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "14",
        y: "3",
        width: "7",
        height: "7",
        rx: "1.5",
        stroke: "#10b981",
        strokeWidth: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "16",
        y: "5",
        width: "3",
        height: "3",
        fill: "#10b981"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "3",
        y: "14",
        width: "7",
        height: "7",
        rx: "1.5",
        stroke: "#10b981",
        strokeWidth: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "5",
        y: "16",
        width: "3",
        height: "3",
        fill: "#10b981"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "14",
        y: "14",
        width: "3",
        height: "3",
        fill: "#10b981"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "18",
        y: "14",
        width: "3",
        height: "3",
        fill: "#10b981"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "14",
        y: "18",
        width: "3",
        height: "3",
        fill: "#10b981"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        x: "18",
        y: "18",
        width: "3",
        height: "3",
        fill: "#10b981"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(60,20)"><rect x="0" y="0" width="180" height="160" rx="12" fill="%231e293b" stroke="%23334155"/><rect x="40" y="20" width="100" height="100" rx="8" fill="%23ffffff"/><rect x="50" y="30" width="30" height="30" fill="%230f172a"/><rect x="100" y="30" width="30" height="30" fill="%230f172a"/><rect x="50" y="80" width="30" height="30" fill="%230f172a"/><rect x="100" y="80" width="15" height="15" fill="%2310b981"/><rect x="115" y="95" width="15" height="15" fill="%2310b981"/><rect x="40" y="132" width="100" height="18" rx="5" fill="%2310b981"/></g></svg>'
  }
};
const getBlockBannerConfig = block => {
  const cleanId = (block.id || "").replace("guten-builder-blocks/", "").trim().toLowerCase();
  const config = blockBannerConfigs[cleanId] || {
    title: (block.title || block.id).toUpperCase(),
    tag: "GUTENBERG SUITE BLOCK",
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: "brand-icon",
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#10b981",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
        points: "12 2 2 7 12 12 22 7 12 2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline", {
        points: "2 17 12 22 22 17"
      })]
    }),
    previewImage: ""
  };
  const imageUrl = block.previewImage || block.image || block.bannerImage || config.previewImage;
  return {
    ...config,
    imageUrl
  };
};

/***/ },

/***/ "../tr-tools/AdminDashboard/components/Header.jsx"
/*!********************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Header.jsx ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminIcon: () => (/* binding */ adminIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar/Navbar */ "../tr-tools/AdminDashboard/components/Navbar/Navbar.jsx");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.scss */ "../tr-tools/AdminDashboard/components/Header.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const adminIcon = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#f6f8faff"><path d="M2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v2A1.5 1.5 0 0 1 16.5 8h-13A1.5 1.5 0 0 1 2 6.5v-2zm0 6A1.5 1.5 0 0 1 3.5 9h5.5A1.5 1.5 0 0 1 10.5 10.5v5a1.5 1.5 0 0 1-1.5 1.5h-5.5A1.5 1.5 0 0 1 2 15.5v-5zm10 0A1.5 1.5 0 0 1 13.5 9h3A1.5 1.5 0 0 1 18 10.5v5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-5z"/></svg>`;
const Header = props => {
  const {
    version,
    media,
    slug,
    isPro
  } = props;
  const logoSrc = media?.logo || `data:image/svg+xml;utf8,${encodeURIComponent(adminIcon)}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "guten-builder-admin-wrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
      className: "guten-builder-top-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "header-left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "brand-logo-icon",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: logoSrc,
            alt: "Plugin Logo",
            width: "30",
            height: "30",
            style: {
              objectFit: "contain"
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "brand-info",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "brand-name",
            children: slug
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"], {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "header-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          className: "plugin-version-badge",
          children: ["v", version]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ },

/***/ "../tr-tools/AdminDashboard/components/Navbar/Navbar.jsx"
/*!***************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Navbar/Navbar.jsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.scss */ "../tr-tools/AdminDashboard/components/Navbar/Navbar.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Navbar = ({
  activeTab,
  setActiveTab
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("nav", {
      className: "guten-builder-tabs",
      "aria-label": "Admin Navigation",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        type: "button",
        className: `tab-btn ${activeTab === "overview" ? "active" : ""}`,
        onClick: () => setActiveTab("overview"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            rx: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
            rx: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
            x: "14",
            y: "14",
            width: "7",
            height: "7",
            rx: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            rx: "1"
          })]
        }), "Overview"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        type: "button",
        className: `tab-btn ${activeTab === "all-blocks" ? "active" : ""}`,
        onClick: () => setActiveTab("all-blocks"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
            points: "12 2 2 7 12 12 22 7 12 2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
            points: "2 17 12 22 22 17"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
            points: "2 12 12 17 22 12"
          })]
        }), "All Blocks"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        type: "button",
        className: `tab-btn ${activeTab === "changelog" ? "active" : ""}`,
        onClick: () => setActiveTab("changelog"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
            points: "14 2 14 8 20 8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "16",
            y1: "13",
            x2: "8",
            y2: "13"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "16",
            y1: "17",
            x2: "8",
            y2: "17"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
            points: "10 9 9 9 8 9"
          })]
        }), "Release (Changelog)"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        type: "button",
        className: `tab-btn ${activeTab === "contact-support" ? "active" : ""}`,
        onClick: () => setActiveTab("contact-support"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "4.93",
            y1: "4.93",
            x2: "9.17",
            y2: "9.17"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "14.83",
            y1: "14.83",
            x2: "19.07",
            y2: "19.07"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "14.83",
            y1: "9.17",
            x2: "19.07",
            y2: "4.93"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "4.93",
            y1: "19.07",
            x2: "9.17",
            y2: "14.83"
          })]
        }), "Contact Support"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        type: "button",
        className: `tab-btn ${activeTab === "system" ? "active" : ""}`,
        onClick: () => setActiveTab("system"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
            x1: "12",
            y1: "8",
            x2: "12.01",
            y2: "8"
          })]
        }), "System Info"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
        type: "button",
        className: `tab-btn ${activeTab === "feedback" ? "active" : ""}`,
        onClick: () => setActiveTab("feedback"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          })
        }), "Feedback"]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/FeatureBanner.jsx"
/*!************************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/FeatureBanner.jsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeatureBanner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureBanner.scss */ "../tr-tools/AdminDashboard/components/Overview/FeatureBanner.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const getYoutubeEmbedUrl = input => {
  if (!input) return "";
  let videoId = input;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = input.match(regExp);
  if (match && match[2].length === 11) {
    videoId = match[2];
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
};
const FeatureBanner = ({
  setActiveTab,
  adminUrl,
  featureBanner = {},
  youtubeVideoId: customVideoId,
  coverImage: customCoverImage,
  isVideo: customIsVideo
}) => {
  const [isVideoOpen, setIsVideoOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const title = featureBanner.title;
  const description = featureBanner.description;
  const primaryBtnText = featureBanner.primaryBtnText;
  const secondaryBtnText = featureBanner.secondaryBtnText;
  const videoBtnText = featureBanner.videoBtnText;
  const videoId = customVideoId || featureBanner.youtubeVideoId;
  const coverImage = customCoverImage || featureBanner.coverImage;
  const isVideo = customIsVideo !== undefined ? customIsVideo : featureBanner.isVideo !== undefined ? featureBanner.isVideo : true;
  const handleCreatePage = (postType = 'page') => {
    const newPageUrl = adminUrl ? `${adminUrl}post-new.php?post_type=${postType}` : `/wp-admin/post-new.php?post_type=${postType}`;
    window.open(newPageUrl, '_blank');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "overview-feature-banner",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "banner-content-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        className: "banner-title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "banner-description",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "banner-actions",
        children: [primaryBtnText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: "btn-primary",
          onClick: () => handleCreatePage('page'),
          children: primaryBtnText
        }), secondaryBtnText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: "btn-outline",
          onClick: () => setActiveTab && setActiveTab("all-blocks"),
          children: secondaryBtnText
        }), isVideo && videoBtnText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: "btn-outline",
          onClick: () => setIsVideoOpen(true),
          children: videoBtnText
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "banner-media-right",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "media-preview-container",
        onClick: isVideo ? () => setIsVideoOpen(true) : undefined,
        title: isVideo ? "Click to play video preview" : undefined,
        style: {
          cursor: isVideo ? "pointer" : "default"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src: coverImage,
          alt: "Feature Banner Cover",
          className: "feature-banner-cover-img",
          style: {
            width: "100%",
            height: "340px",
            maxHeight: "350px",
            objectFit: "cover",
            display: "block",
            borderRadius: "8px"
          }
        }), isVideo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
          type: "button",
          className: "video-play-button",
          "aria-label": "Play video preview",
          onClick: e => {
            e.stopPropagation();
            setIsVideoOpen(true);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "play-pulse-ring"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("polygon", {
              points: "6 3 20 12 6 21 6 3"
            })
          })]
        })]
      })
    }), isVideo && isVideoOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gbb-video-modal-backdrop",
      onClick: () => setIsVideoOpen(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "gbb-video-modal-container",
        onClick: e => e.stopPropagation(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: "video-modal-close-btn",
          onClick: () => setIsVideoOpen(false),
          "aria-label": "Close video",
          children: "\xD7"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("iframe", {
          src: getYoutubeEmbedUrl(videoId),
          title: "Guten Builder Video Preview",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureBanner);

/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/FreeVsProCard.jsx"
/*!************************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/FreeVsProCard.jsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FreeVsProCard_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreeVsProCard.scss */ "../tr-tools/AdminDashboard/components/Overview/FreeVsProCard.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const FreeVsProCard = () => {
  const comparisonFeatures = [{
    feature: 'Motion-ready Gutenberg Blocks',
    free: '10 Core Blocks',
    pro: '35+ Pro Blocks'
  }, {
    feature: 'Motion Profiles & Animations',
    free: 'Basic Presets',
    pro: 'Full Animation Engine & Custom Curves'
  }, {
    feature: 'Post Grid & Dynamic Sliders',
    free: 'Basic Grid',
    pro: 'Advanced Layouts, Filters & Pagination'
  }, {
    feature: 'Starter Section Templates',
    free: '5 Free Layouts',
    pro: '100+ Premium Layouts & Pages'
  }, {
    feature: 'Asset Optimization & Speed',
    free: 'Standard',
    pro: 'Zero-Bloat On-Demand Loading (~12KB)'
  }, {
    feature: 'Support & Updates',
    free: 'Community Forum',
    pro: '24/7 Priority Ticket Support + Lifetime Updates'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "overview-free-vs-pro-wrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "free-vs-pro-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "card-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "header-badge",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "m2 4 3 12h14l3-12-6 7-4-5-4 5-6-7z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M5 20h14"
            })]
          }), "PRO UPGRADE AVAILABLE"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
          children: "Compare Free vs PRO Features"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: "Supercharge your WordPress Gutenberg editing experience with Guten Builder PRO."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "comparison-table-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "table-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-feature",
            children: "FEATURE"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-free",
            children: "FREE PLAN"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-pro",
            children: "PRO PLAN"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "table-body",
          children: comparisonFeatures.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "table-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "col-feature font-medium",
              children: item.feature
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "col-free",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "badge-free",
                children: item.free
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "col-pro",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                className: "badge-pro",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                    points: "20 6 9 17 4 12"
                  })
                }), item.pro]
              })
            })]
          }, index))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "card-footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "footer-left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            children: "Ready to unlock all PRO features?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            children: "Upgrade today and take your site building to the next level."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
          href: "https://gutenbuilder.com/pro",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn-upgrade-pro",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "m2 4 3 12h14l3-12-6 7-4-5-4 5-6-7z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M5 20h14"
            })]
          }), "Upgrade to PRO Now"]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FreeVsProCard);

/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/Overview.jsx"
/*!*******************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/Overview.jsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StatsCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatsCards */ "../tr-tools/AdminDashboard/components/Overview/StatsCards.jsx");
/* harmony import */ var _FeatureBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureBanner */ "../tr-tools/AdminDashboard/components/Overview/FeatureBanner.jsx");
/* harmony import */ var _PopularBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopularBlocks */ "../tr-tools/AdminDashboard/components/Overview/PopularBlocks.jsx");
/* harmony import */ var _FreeVsProCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreeVsProCard */ "../tr-tools/AdminDashboard/components/Overview/FreeVsProCard.jsx");
/* harmony import */ var _QuickLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuickLinks */ "../tr-tools/AdminDashboard/components/Overview/QuickLinks.jsx");
/* harmony import */ var _Overview_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Overview.scss */ "../tr-tools/AdminDashboard/components/Overview/Overview.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const Overview = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("main", {
      className: "guten-builder-overview-wraper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_StatsCards__WEBPACK_IMPORTED_MODULE_0__["default"], {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FeatureBanner__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_PopularBlocks__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FreeVsProCard__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_QuickLinks__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Overview);

/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/PopularBlocks.jsx"
/*!************************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/PopularBlocks.jsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PopularBlocks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopularBlocks.scss */ "../tr-tools/AdminDashboard/components/Overview/PopularBlocks.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const PopularBlocks = () => {
  const blocks = [{
    title: 'Post Grid Layout',
    desc: 'Display blog posts in dynamic grids, masonry, and sliders.',
    tag: 'Popular',
    tagColor: 'orange',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "3",
        y: "3",
        width: "7",
        height: "7",
        rx: "1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "14",
        y: "3",
        width: "7",
        height: "7",
        rx: "1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "14",
        y: "14",
        width: "7",
        height: "7",
        rx: "1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "3",
        y: "14",
        width: "7",
        height: "7",
        rx: "1"
      })]
    })
  }, {
    title: 'Audio Player',
    desc: 'Custom waveform audio player with playlist support.',
    tag: 'New',
    tagColor: 'green',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M9 18V5l12-2v13"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
        cx: "6",
        cy: "18",
        r: "3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
        cx: "18",
        cy: "16",
        r: "3"
      })]
    })
  }, {
    title: 'Accordion & FAQ',
    desc: 'Interactive collapsible accordion with schema markup.',
    tag: 'Trending',
    tagColor: 'purple',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M4 6h16M4 12h16M4 18h16"
      })
    })
  }, {
    title: 'QR Code Generator',
    desc: 'Generate dynamic vector QR codes directly in Gutenberg.',
    tag: 'Essential',
    tagColor: 'blue',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "3",
        y: "3",
        width: "7",
        height: "7"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "14",
        y: "3",
        width: "7",
        height: "7"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "3",
        y: "14",
        width: "7",
        height: "7"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M14 14h3v3h-3zM18 18h3v3h-3zM14 18h3v3h-3z"
      })]
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "overview-popular-blocks-wrap",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      className: "section-title",
      children: "Featured Blocks"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "popular-blocks-grid",
      children: blocks.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "block-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "block-card-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "block-icon",
            children: item.icon
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: `block-badge ${item.tagColor}`,
            children: item.tag
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
          children: item.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          children: item.desc
        })]
      }, index))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularBlocks);

/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/QuickLinks.jsx"
/*!*********************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/QuickLinks.jsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _QuickLinks_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickLinks.scss */ "../tr-tools/AdminDashboard/components/Overview/QuickLinks.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const QuickLinks = () => {
  const links = [{
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
      })]
    }),
    badgeClass: 'blue',
    title: 'Documentation',
    desc: 'Explore comprehensive guides & block customization docs.',
    actionText: 'Read Docs →',
    url: '#'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
        points: "23 7 16 12 23 17 23 7"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
        x: "1",
        y: "5",
        width: "15",
        height: "14",
        rx: "2",
        ry: "2"
      })]
    }),
    badgeClass: 'purple',
    title: 'Video Tutorials',
    desc: 'Watch step-by-step video guides to build pages fast.',
    actionText: 'Watch Videos →',
    url: '#'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      })
    }),
    badgeClass: 'green',
    title: 'Need Help?',
    desc: 'Facing issues? Reach out to our dedicated support team.',
    actionText: 'Get Support →',
    url: '#'
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      })
    }),
    badgeClass: 'gold',
    title: 'Leave a Review',
    desc: 'If you like Guten Builder, consider leaving a 5-star review.',
    actionText: 'Rate Plugin ★★★★★',
    url: '#'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "overview-quick-links-wrap",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
      className: "section-title",
      children: "Help & Resources"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "quick-links-grid",
      children: links.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "quick-link-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: `link-icon-wrap ${item.badgeClass}`,
          children: item.icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "link-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
            children: item.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            children: item.desc
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
            href: item.url,
            className: "link-action",
            children: item.actionText
          })]
        })]
      }, index))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuickLinks);

/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/StatsCards.jsx"
/*!*********************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/StatsCards.jsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StatsCards_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatsCards.scss */ "../tr-tools/AdminDashboard/components/Overview/StatsCards.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const StatsCards = props => {
  const {
    activeBlocks,
    availableBlocks,
    isPro,
    wpVersion,
    phpVersion
  } = props;
  const totalBlocksCount = availableBlocks?.length || 0;
  const activeBlocksCount = availableBlocks?.filter(b => {
    // Check if block is active in activeBlocks object (handling both nested activeBlocks or direct object)
    const blockState = activeBlocks?.activeBlocks?.[b.id] ?? activeBlocks?.[b.id];
    return blockState !== false;
  }).length || 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "stats-grid",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "stat-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "stat-icon-wrap green",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "stat-info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            className: "stat-label",
            children: "INCLUDED BLOCKS"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "stat-value",
            children: totalBlocksCount
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "stat-desc",
            children: "Essential Gutenberg blocks in suite"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "stat-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "stat-icon-wrap blue",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
              points: "9 11 12 14 22 4"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "stat-info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            className: "stat-label",
            children: "ACTIVE BLOCKS"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "stat-value",
            children: activeBlocksCount
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "stat-desc",
            children: "Enabled in Gutenberg editor"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "stat-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "stat-icon-wrap teal",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
              points: "22 4 12 14.01 9 11.01"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "stat-info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
            className: "stat-label",
            children: "COMPATIBILITY"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "stat-value",
            children: wpVersion ? `WP ${wpVersion} Ready` : "WP 6.x Ready"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            className: "stat-desc",
            children: phpVersion ? `PHP ${phpVersion.split(".").slice(0, 2).join(".")} & Sync Verified` : "Fully optimized & sync verified"
          })]
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatsCards);

/***/ },

/***/ "./src/adminDashboard/App.jsx"
/*!************************************!*\
  !*** ./src/adminDashboard/App.jsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tr_tools_AdminDashboard_components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tr-tools/AdminDashboard/components/Header */ "../tr-tools/AdminDashboard/components/Header.jsx");
/* harmony import */ var tr_tools_AdminDashboard_components_Overview_Overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tr-tools/AdminDashboard/components/Overview/Overview */ "../tr-tools/AdminDashboard/components/Overview/Overview.jsx");
/* harmony import */ var tr_tools_AdminDashboard_components_AllBlocks_AllBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tr-tools/AdminDashboard/components/AllBlocks/AllBlocks */ "../tr-tools/AdminDashboard/components/AllBlocks/AllBlocks.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const App = props => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('overview');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(tr_tools_AdminDashboard_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ...props,
      activeTab: activeTab,
      setActiveTab: setActiveTab
    }), activeTab === 'overview' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(tr_tools_AdminDashboard_components_Overview_Overview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ...props
    }), activeTab === 'all-blocks' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(tr_tools_AdminDashboard_components_AllBlocks_AllBlocks__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ...props
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ },

/***/ "./src/adminDashboard/data/data.js"
/*!*****************************************!*\
  !*** ./src/adminDashboard/data/data.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dashboardInfo: () => (/* binding */ dashboardInfo),
/* harmony export */   featureBannerData: () => (/* binding */ featureBannerData)
/* harmony export */ });
/* harmony import */ var _image_cover_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/cover.png */ "./src/adminDashboard/data/image/cover.png");

const slug = 'guten builder blocks';
const featureBannerData = {
  title: 'Build High-Performance Websites with Gutenberg Block Suite',
  description: 'Transform your WordPress editor with 11+ ultra-fast, motion-ready blocks including Interactive Before/After, Audio Waveform Player, Parallax Scroll Story, Smooth Marquee, and Dynamic Pricing Tables.',
  primaryBtnText: '+ Add New Page',
  secondaryBtnText: 'Explore All 11 Blocks',
  videoBtnText: 'Watch Video Demo',
  youtubeVideoId: 'https://www.youtube.com/watch?v=2O7oDm1FaPU&list=RD2O7oDm1FaPU&start_radio=1',
  coverImage: _image_cover_png__WEBPACK_IMPORTED_MODULE_0__,
  isVideo: true
};
const dashboardInfo = info => {
  const {
    version,
    adminUrl,
    isPro,
    activeBlocks,
    availableBlocks,
    wpVersion,
    phpVersion
  } = info;
  return {
    adminUrl,
    slug,
    version,
    isPro,
    wpVersion,
    phpVersion,
    activeBlocks,
    availableBlocks,
    featureBanner: featureBannerData,
    media: {
      // logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
    }
  };
};

/***/ },

/***/ "../tr-tools/AdminDashboard/components/AllBlocks/AllBlocks.scss"
/*!**********************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/AllBlocks/AllBlocks.scss ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/AdminDashboard/components/AllBlocks/Banner/Banner.scss"
/*!**************************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/AllBlocks/Banner/Banner.scss ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/AdminDashboard/components/Header.scss"
/*!*********************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Header.scss ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/AdminDashboard/components/Navbar/Navbar.scss"
/*!****************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Navbar/Navbar.scss ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/FeatureBanner.scss"
/*!*************************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/FeatureBanner.scss ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/FreeVsProCard.scss"
/*!*************************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/FreeVsProCard.scss ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/Overview.scss"
/*!********************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/Overview.scss ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/PopularBlocks.scss"
/*!*************************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/PopularBlocks.scss ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/QuickLinks.scss"
/*!**********************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/QuickLinks.scss ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "../tr-tools/AdminDashboard/components/Overview/StatsCards.scss"
/*!**********************************************************************!*\
  !*** ../tr-tools/AdminDashboard/components/Overview/StatsCards.scss ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/adminDashboard/data/image/cover.png"
/*!*************************************************!*\
  !*** ./src/adminDashboard/data/image/cover.png ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/cover.006f1df8.png";

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

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/dom-ready"
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["domReady"];

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (globalThis.importScripts) scriptUrl = globalThis.location + "";
/******/ 		const document = globalThis.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/adminDashboard/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/adminDashboard/App.jsx");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/data */ "./src/adminDashboard/data/data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  const rootElement = document.getElementById("guten-builder-admin-root"); //includes admin.php file thake
  const info = rootElement && rootElement.dataset && rootElement.dataset.info ? JSON.parse(rootElement.dataset.info) : {};
  if (rootElement) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(rootElement).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ...(0,_data_data__WEBPACK_IMPORTED_MODULE_3__.dashboardInfo)(info)
    }));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map