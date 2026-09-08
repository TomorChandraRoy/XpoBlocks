/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/Dashboard/AdminDashboard.js"
/*!***********************************************!*\
  !*** ./src/admin/Dashboard/AdminDashboard.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adminData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminData */ "./src/admin/Dashboard/adminData.js");
/* harmony import */ var _DemoModal_DemoModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DemoModal/DemoModal */ "./src/admin/DemoModal/DemoModal.js");
/* harmony import */ var _DocsModal_DocsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DocsModal/DocsModal */ "./src/admin/DocsModal/DocsModal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const BlockBanner = ({
  block
}) => {
  const config = (0,_adminData__WEBPACK_IMPORTED_MODULE_3__.getBlockBannerConfig)(block);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "block-card-banner",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "banner-bg-effects",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "speed-line sl-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "speed-line sl-2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "speed-line sl-3"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "banner-content-left",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "banner-brand-logo",
        children: [config.icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "brand-text",
          children: block.title || config.title
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "banner-heading-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          className: "banner-title",
          children: config.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "banner-tag",
          children: config.tag
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "banner-content-right",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "banner-preview-box",
        children: config.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: config.imageUrl,
          alt: config.title,
          className: "banner-preview-img"
        }) : config.preview
      })
    })]
  });
};
const AdminDashboard = () => {
  const [settings, setSettings] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isSaving, setIsSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [saveMessage, setSaveMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('overview');
  const [searchQuery, setSearchQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [filterStatus, setFilterStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  const [demoBlock, setDemoBlock] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [docsBlock, setDocsBlock] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/guten-builder/v1/settings'
    }).then(response => {
      setSettings(response);
    });
  }, []);
  const saveSettings = () => {
    setIsSaving(true);
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
      path: '/guten-builder/v1/settings',
      method: 'POST',
      data: settings
    }).then(response => {
      setSettings(response.settings);
      setSaveMessage('Settings saved successfully!');
      setTimeout(() => setSaveMessage(''), 3500);
    }).catch(() => {
      setSaveMessage('Error saving settings.');
      setTimeout(() => setSaveMessage(''), 3500);
    }).finally(() => {
      setIsSaving(false);
    });
  };
  const toggleBlock = blockName => {
    const isCurrentlyActive = settings.activeBlocks[blockName] !== false;
    setSettings({
      ...settings,
      activeBlocks: {
        ...settings.activeBlocks,
        [blockName]: !isCurrentlyActive
      }
    });
  };
  const setAllBlocksState = shouldEnable => {
    if (!settings || !settings.availableBlocks) return;
    const newActiveBlocks = {
      ...settings.activeBlocks
    };
    settings.availableBlocks.forEach(block => {
      newActiveBlocks[block.id] = shouldEnable;
    });
    setSettings({
      ...settings,
      activeBlocks: newActiveBlocks
    });
  };
  if (!settings) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "guten-builder-admin-wrap loading-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "spinner-ring"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "guten-builder-loading",
        children: "Loading Guten Builder workspace..."
      })]
    });
  }
  const blocksList = settings.availableBlocks || [];
  const totalBlocksCount = blocksList.length;
  const activeBlocksCount = blocksList.filter(b => settings.activeBlocks[b.id] !== false).length;
  const disabledBlocksCount = totalBlocksCount - activeBlocksCount;
  const filteredBlocks = blocksList.filter(block => {
    const isActive = settings.activeBlocks[block.id] !== false;
    const matchesSearch = block.title.toLowerCase().includes(searchQuery.toLowerCase()) || block.desc && block.desc.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterStatus === 'active') return matchesSearch && isActive;
    if (filterStatus === 'inactive') return matchesSearch && !isActive;
    return matchesSearch;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "guten-builder-admin-wrap",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("header", {
      id: "guten-builder-banner",
      className: "guten-builder-banner",
      role: "banner",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "banner-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          className: "banner-subtitle",
          children: ["WELCOME ", settings?.currentUser?.name ? settings.currentUser.name.toUpperCase() : 'USER', " TO", ' ', settings?.pluginDetails?.name ? settings.pluginDetails.name.toUpperCase() : 'GUTEN BUILDER BLOCKS']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          className: "banner-title",
          children: "Admin Dashboard"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "banner-description",
          children: settings?.pluginDetails?.description || 'Build beautiful, high-performance WordPress websites with interactive Gutenberg blocks, customizable motion profiles, and real-time block controls.'
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "banner-badge",
        role: "status",
        "aria-label": "System status: Active",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "dot",
          "aria-hidden": "true"
        }), " Active Engine"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("nav", {
      className: "guten-builder-tabs",
      "aria-label": "Admin Navigation",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
        className: `tab-btn ${activeTab === 'overview' ? 'active' : ''}`,
        onClick: () => setActiveTab('overview'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("rect", {
            x: "3",
            y: "3",
            width: "7",
            height: "7",
            rx: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("rect", {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
            rx: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("rect", {
            x: "14",
            y: "14",
            width: "7",
            height: "7",
            rx: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("rect", {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            rx: "1"
          })]
        }), "Overview"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
        className: `tab-btn ${activeTab === 'all-blocks' ? 'active' : ''}`,
        onClick: () => setActiveTab('all-blocks'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polygon", {
            points: "12 2 2 7 12 12 22 7 12 2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polyline", {
            points: "2 17 12 22 22 17"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polyline", {
            points: "2 12 12 17 22 12"
          })]
        }), "All Blocks"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
        className: `tab-btn ${activeTab === 'changelog' ? 'active' : ''}`,
        onClick: () => setActiveTab('changelog'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polyline", {
            points: "14 2 14 8 20 8"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("line", {
            x1: "16",
            y1: "13",
            x2: "8",
            y2: "13"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("line", {
            x1: "16",
            y1: "17",
            x2: "8",
            y2: "17"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polyline", {
            points: "10 9 9 9 8 9"
          })]
        }), "Release (Changelog)"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
        className: `tab-btn ${activeTab === 'system' ? 'active' : ''}`,
        onClick: () => setActiveTab('system'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
          className: "tab-icon",
          width: "16",
          height: "16",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("line", {
            x1: "12",
            y1: "16",
            x2: "12",
            y2: "12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("line", {
            x1: "12",
            y1: "8",
            x2: "12.01",
            y2: "8"
          })]
        }), "System Info"]
      })]
    }), saveMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
      isDismissible: true,
      onRemove: () => setSaveMessage(''),
      status: saveMessage.includes('Error') ? 'error' : 'success',
      children: saveMessage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("main", {
      className: "guten-builder-content",
      children: [activeTab === 'overview' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "stats-grid",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "stat-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "stat-icon-wrap green",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "stat-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                className: "stat-label",
                children: "INCLUDED BLOCKS"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "stat-value",
                children: totalBlocksCount
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "stat-desc",
                children: "Motion-ready blocks in suite"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "stat-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "stat-icon-wrap blue",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polyline", {
                  points: "9 11 12 14 22 4"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "stat-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                className: "stat-label",
                children: "ACTIVE BLOCKS"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "stat-value",
                children: activeBlocksCount
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "stat-desc",
                children: "Enabled in Gutenberg editor"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "stat-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "stat-icon-wrap purple",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polygon", {
                  points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "stat-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                className: "stat-label",
                children: "MOTION PROFILE"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "stat-value",
                children: settings.performanceMode || 'Balanced'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "stat-desc",
                children: "Frontend animation engine mode"
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "main-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "main-card-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                className: "main-card-title",
                children: "Guten Builder Suite"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "main-card-desc",
                children: "Empower your pages with high-performance Gutenberg block controls and fine-tuned animations."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "edition-badge",
              children: "Standard Edition"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "main-card-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              className: "btn-primary",
              onClick: () => setActiveTab('all-blocks'),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  d: "M12 20h9"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                })]
              }), "Manage Blocks (", activeBlocksCount, " Enabled)"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              className: "btn-secondary",
              onClick: () => setActiveTab('changelog'),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                  d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("polyline", {
                  points: "14 2 14 8 20 8"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("line", {
                  x1: "16",
                  y1: "13",
                  x2: "8",
                  y2: "13"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("line", {
                  x1: "16",
                  y1: "17",
                  x2: "8",
                  y2: "17"
                })]
              }), "View Release Notes"]
            })]
          })]
        })]
      }), activeTab === 'all-blocks' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "all-blocks-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "all-blocks-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
              className: "all-blocks-title",
              children: "All Blocks"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "all-blocks-desc",
              children: "Toggle block availability for the WordPress editor in real-time."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            className: "btn-save",
            isPrimary: true,
            onClick: saveSettings,
            isBusy: isSaving,
            disabled: isSaving,
            children: isSaving ? 'Saving...' : 'Save Changes'
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "suite-toolbar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "search-input-wrapper",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("svg", {
              className: "search-icon",
              width: "16",
              height: "16",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("circle", {
                cx: "11",
                cy: "11",
                r: "8"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
              type: "text",
              className: "search-input",
              placeholder: "Search blocks by name or description...",
              value: searchQuery,
              onChange: e => setSearchQuery(e.target.value)
            }), searchQuery && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              className: "clear-search",
              onClick: () => setSearchQuery(''),
              "aria-label": "Clear search",
              children: "\xD7"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "filter-group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              className: `filter-btn ${filterStatus === 'all' ? 'active' : ''}`,
              onClick: () => setFilterStatus('all'),
              children: ["All (", totalBlocksCount, ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              className: `filter-btn ${filterStatus === 'active' ? 'active' : ''}`,
              onClick: () => setFilterStatus('active'),
              children: ["Active (", activeBlocksCount, ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              className: `filter-btn ${filterStatus === 'inactive' ? 'active' : ''}`,
              onClick: () => setFilterStatus('inactive'),
              children: ["Disabled (", disabledBlocksCount, ")"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "bulk-group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              className: "bulk-btn",
              onClick: () => setAllBlocksState(true),
              children: "Enable All"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "bulk-divider",
              children: "|"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              className: "bulk-btn",
              onClick: () => setAllBlocksState(false),
              children: "Disable All"
            })]
          })]
        }), filteredBlocks.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "empty-blocks-state",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "empty-title",
            children: "No matching blocks found"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "empty-desc",
            children: "Try searching for a different keyword or reset your status filter."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "btn-secondary",
            onClick: () => {
              setSearchQuery('');
              setFilterStatus('all');
            },
            children: "Reset Filters"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "blocks-grid",
          children: filteredBlocks.map(block => {
            const isActive = settings.activeBlocks[block.id] !== false;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: `block-card ${isActive ? 'is-active' : 'is-disabled'}`,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(BlockBanner, {
                block: block
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "block-content",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "block-header",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                    className: "block-title",
                    children: block.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: `block-badge ${isActive ? 'badge-active' : 'badge-disabled'}`,
                    children: isActive ? 'Active' : 'Disabled'
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "block-desc",
                  children: block.desc || block.description
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "block-links",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    type: "button",
                    className: "block-link demo-link",
                    onClick: e => {
                      e.preventDefault();
                      setDemoBlock(block);
                    },
                    children: "Live Demo"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    className: "link-divider",
                    children: "|"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                    type: "button",
                    className: "block-link docs-link",
                    onClick: e => {
                      e.preventDefault();
                      setDocsBlock(block);
                    },
                    children: "Read Docs"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "block-toggle",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
                    label: isActive ? 'Enabled for Editor' : 'Disabled',
                    checked: isActive,
                    onChange: () => toggleBlock(block.id)
                  })
                })]
              })]
            }, block.id);
          })
        })]
      }), activeTab === 'system' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "main-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          className: "main-card-title",
          children: "System Information"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "main-card-desc",
          children: "Environment and active plugin runtime details."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "system-info-list",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-key",
              children: "Plugin Version"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-val",
              children: settings?.systemInfo?.pluginVersion || '1.0.0'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-key",
              children: "WordPress Version"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-val",
              children: settings?.systemInfo?.wpVersion || '6.7'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-key",
              children: "PHP Version"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-val",
              children: settings?.systemInfo?.phpVersion || '7.4'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-key",
              children: "Server Software"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-val",
              children: settings?.systemInfo?.serverSoftware || 'Web Server'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-key",
              children: "Max Upload Size"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-val",
              children: settings?.systemInfo?.maxUploadSize || '64 MB'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-key",
              children: "Memory Limit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-val",
              children: settings?.systemInfo?.memoryLimit || '256M'
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "info-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "info-key",
              children: "Active Blocks Count"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              className: "info-val",
              children: [activeBlocksCount, " of ", totalBlocksCount, " enabled"]
            })]
          })]
        })]
      }), activeTab === 'changelog' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "main-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "main-card-header",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
              className: "main-card-title",
              children: "Release Notes & Changelog"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "main-card-desc",
              children: "Track updates, new features, bug fixes, and performance enhancements for Guten Builder Blocks."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "edition-badge",
            children: "Current Release: v1.0.0"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "changelog-timeline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "changelog-release-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "release-header",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "release-version-chip",
                children: "v1.0.0"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "release-date",
                children: "August 2, 2026"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "release-status-tag initial",
                children: "Initial Stable Release"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
              className: "release-changes-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "change-badge feat",
                  children: "FEAT"
                }), " Introduced 10 high-performance Gutenberg blocks (Before/After Slider, Accordion, Audio Player, Pricing Table, Button, Contact Form, Marquee, Scroll Story, TOC, Video Modal)."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "change-badge feat",
                  children: "FEAT"
                }), " Added In-Dashboard Live Demo Lightbox Modal with Desktop, Tablet, and Mobile viewport testing."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "change-badge feat",
                  children: "FEAT"
                }), " Added In-Dashboard Read Docs Lightbox Modal with step-by-step guides."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "change-badge perf",
                  children: "PERF"
                }), " Modular SCSS architecture for high-speed admin loading and zero redundant CSS rules."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  className: "change-badge fix",
                  children: "FIX"
                }), " Optimized SVG clipPaths for seamless 90-degree divider line joins in Before/After Slider."]
              })]
            })]
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("footer", {
      className: "guten-builder-pro-banner",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "pro-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          className: "pro-title",
          children: "Guten Builder Pro"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "pro-desc",
          children: "Unlock advanced physics animations, scroll progress triggers, and premium block presets."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        className: "btn-pro",
        children: "Explore Pro Features \u2192"
      })]
    }), demoBlock && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_DemoModal_DemoModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      block: demoBlock,
      onClose: () => setDemoBlock(null)
    }), docsBlock && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_DocsModal_DocsModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      block: docsBlock,
      onClose: () => setDocsBlock(null)
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminDashboard);

/***/ },

/***/ "./src/admin/Dashboard/adminData.js"
/*!******************************************!*\
  !*** ./src/admin/Dashboard/adminData.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockBannerConfigs: () => (/* binding */ blockBannerConfigs),
/* harmony export */   getBlockBannerConfig: () => (/* binding */ getBlockBannerConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const blockBannerConfigs = {
  'before-after': {
    title: 'BEFORE/AFTER',
    tag: 'INTERACTIVE COMPARISON BLOCK',
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
  'accordion': {
    title: 'FAQ ACCORDION',
    tag: 'COLLAPSIBLE CONTENT BLOCK',
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
  'audio-player': {
    title: 'AUDIO PLAYER',
    tag: 'STREAMING SOUND WAVE BLOCK',
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
  'pricing-table': {
    title: 'PRICING TABLE',
    tag: 'TIER & FEATURE COMPARISON',
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
  'button': {
    title: 'ACTION BUTTON',
    tag: 'ANIMATED CTA & HOVER EFFECTS',
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
  'contact-form': {
    title: 'CONTACT FORM',
    tag: 'DYNAMIC FEEDBACK FORM',
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
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(25,20)"><rect x="0" y="0" width="250" height="160" rx="10" fill="%231e293b" stroke="%23334155"/><rect x="20" y="20" width="100" height="26" rx="5" fill="%230f172a" stroke="%23475569"/><rect x="130" y="20" width="100" height="26" rx="5" fill="%230f172a" stroke="%23475569"/><rect x="20" y="58" width="210" height="50" rx="5" fill="%230f172a" stroke="%23475569"/><rect x="20" y="118" width="90" height="26" rx="5" fill="%2310b981"/><text x="40" y="135" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23ffffff">SUBMIT</text></g></svg>'
  },
  'marquee': {
    title: 'SMOOTH MARQUEE',
    tag: 'INFINITE LOGO & TEXT SCROLLER',
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
  'scroll-story': {
    title: 'SCROLL STORY',
    tag: 'PARALLAX NARRATIVE ENGINE',
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
  'table-of-contents': {
    title: 'TABLE OF CONTENTS',
    tag: 'AUTOMATIC HEADING INDEX',
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
  'video-modal': {
    title: 'VIDEO MODAL',
    tag: 'LIGHTBOX POPUP PLAYER',
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
        x: "2",
        y: "4",
        width: "20",
        height: "16",
        rx: "3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
        points: "10 8 16 12 10 16 10 8"
      })]
    }),
    previewImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="%230f172a"/><g transform="translate(20,20)"><rect x="0" y="0" width="260" height="160" rx="12" fill="%231e293b" stroke="%23334155"/><circle cx="130" cy="80" r="28" fill="%2310b981" opacity="0.95"/><polygon points="125,68 142,80 125,92" fill="%23ffffff"/><rect x="25" y="130" width="110" height="10" rx="5" fill="%23ffffff" opacity="0.85"/></g></svg>'
  }
};
const getBlockBannerConfig = block => {
  const cleanId = (block.id || '').replace('guten-builder-blocks/', '').trim().toLowerCase();
  const config = blockBannerConfigs[cleanId] || {
    title: (block.title || block.id).toUpperCase(),
    tag: 'GUTENBERG SUITE BLOCK',
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
    previewImage: ''
  };
  const imageUrl = block.previewImage || block.image || block.bannerImage || config.previewImage;
  return {
    ...config,
    imageUrl
  };
};

/***/ },

/***/ "./src/admin/DemoModal/DemoModal.js"
/*!******************************************!*\
  !*** ./src/admin/DemoModal/DemoModal.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dashboard_adminData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Dashboard/adminData */ "./src/admin/Dashboard/adminData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const DemoModal = ({
  block,
  onClose
}) => {
  const [device, setDevice] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('desktop');
  if (!block) return null;
  const config = (0,_Dashboard_adminData__WEBPACK_IMPORTED_MODULE_1__.getBlockBannerConfig)(block);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "demo-modal-overlay",
    onClick: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "demo-modal-container",
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "demo-modal-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "modal-title-group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: "modal-badge",
            children: "LIVE DEMO"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
            className: "modal-block-name",
            children: block.title || config.title
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "device-switcher",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: `device-btn ${device === 'desktop' ? 'active' : ''}`,
            onClick: () => setDevice('desktop'),
            children: "\uD83D\uDCBB Desktop"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: `device-btn ${device === 'tablet' ? 'active' : ''}`,
            onClick: () => setDevice('tablet'),
            children: "\uD83D\uDCF1 Tablet"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: `device-btn ${device === 'mobile' ? 'active' : ''}`,
            onClick: () => setDevice('mobile'),
            children: "\uD83D\uDCF2 Mobile"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          className: "demo-modal-close",
          onClick: onClose,
          "aria-label": "Close Demo",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "demo-modal-body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: `demo-viewport device-${device}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "viewport-header-bar",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "dot red"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "dot yellow"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "dot green"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
              className: "url-bar",
              children: ["https://gutenbuilder.local/demo/", (block.id || '').replace('guten-builder-blocks/', '')]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "viewport-content",
            children: config.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              src: config.imageUrl,
              alt: block.title,
              className: "demo-preview-img"
            }) : config.preview
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "demo-modal-footer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          className: "footer-note",
          children: ["\u2728 Interactive Live Demo Mode \u2014 Testing on ", device.toUpperCase(), " View"]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DemoModal);

/***/ },

/***/ "./src/admin/DocsModal/DocsModal.js"
/*!******************************************!*\
  !*** ./src/admin/DocsModal/DocsModal.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const blockDocsData = {
  'before-after': {
    title: 'Before/After Slider Documentation',
    badge: 'INTERACTIVE COMPARISON',
    summary: 'The Before/After Slider block allows users to interactively compare two images (e.g. construction, renovation, photo editing) using a smooth draggable handle.',
    features: ['Dual Image Upload (Before image & After image support)', 'Horizontal & Vertical comparison slider orientations', 'Customizable slider handle color, glow intensity, and initial position', 'Custom text labels for Before and After badges'],
    usageSteps: ['Add the "Before/After Slider" block into your Gutenberg editor canvas.', 'In the Block Settings sidebar, select your "Before" and "After" media images.', 'Adjust the starting split position (e.g. 50%) and pick your preferred slider handle style.', 'Save and publish your post to test the live touch/mouse drag comparison.']
  },
  'accordion': {
    title: 'FAQ Accordion Documentation',
    badge: 'COLLAPSIBLE CONTENT',
    summary: 'The FAQ Accordion block organizes collapsible text panels for frequently asked questions, product specs, or structured documentation.',
    features: ['Unlimited accordion item repeater', 'Single-item open or multi-item expand modes', 'Custom expandable icons (+ / -, chevron, arrow)', 'Rich text editing inside accordion bodies'],
    usageSteps: ['Insert the "FAQ Accordion" block onto your page.', 'Click "Add Accordion Item" to create new question/answer rows.', 'Customize question typography, active background color, and icon placement in settings.', 'Preview collapsible smooth animations on desktop and mobile viewports.']
  },
  'audio-player': {
    title: 'Audio Player Documentation',
    badge: 'CUSTOM MEDIA PLAYER',
    summary: 'A futuristic neon audio player block featuring dynamic equalizer wave animations, playback speed controls, and volume adjustments.',
    features: ['Direct MP3 file upload or external audio stream URL', 'Dynamic audio spectrum equalizer visualizer', '1.0x - 2.0x playback speed toggles', 'Custom cover image and artist subtitle display'],
    usageSteps: ['Add the "Audio Player" block to your layout.', 'Upload an MP3 file via the WordPress Media Library or insert an audio URL.', 'Set track title, artist name, and album artwork.', 'Choose player theme colors (Emerald, Cyan, Violet) in the sidebar inspector.']
  },
  'pricing-table': {
    title: 'Pricing Table Documentation',
    badge: 'SALES & CONVERSION',
    summary: 'Display responsive pricing tiers with highlighted featured plans, feature checklists, and action buttons.',
    features: ['Multi-column plan comparison cards', 'Highlighted "Popular" or "Best Value" plan ribbons', 'Monthly / Annual price toggle switch support', 'Custom checkmark list items and CTA buttons'],
    usageSteps: ['Insert the "Pricing Table" block into your page.', 'Configure plan names (Basic, Pro, Agency) and pricing values.', 'Enable the "Featured" toggle on your primary plan to highlight it with a neon border.', 'Set button link URLs for direct checkout redirection.']
  },
  'button': {
    title: 'Action Button Documentation',
    badge: 'INTERACTIVE CTA',
    summary: 'High-converting call-to-action button with hover glow effects, icon pickers, and smooth click animations.',
    features: ['Gradient backgrounds and neon glow shadows', 'Integrated dashicon & SVG icon alignment', 'Hover scale and lift animations', 'Target window options (_self or _blank)'],
    usageSteps: ['Add the "Action Button" block to any content section.', 'Type your button text and enter the target URL.', 'Select icon position (Left or Right) and adjust border radius.', 'Customize background gradients and hover state effects.']
  },
  'contact-form': {
    title: 'Contact Form Documentation',
    badge: 'LEAD GENERATION',
    summary: 'Clean, responsive contact form block with built-in AJAX submission, input validation, and customizable fields.',
    features: ['Field builder for Name, Email, Subject, and Message', 'AJAX submission without page reloads', 'Custom success toast and error notification messages', 'Admin email receiver configuration'],
    usageSteps: ['Insert the "Contact Form" block into your page or contact section.', 'Specify the recipient email address in block settings.', 'Customize input placeholder text, submit button label, and button styling.', 'Publish page and test submission.']
  },
  'marquee': {
    title: 'Marquee Slider Documentation',
    badge: 'INFINITE TICKER',
    summary: 'Continuous smooth scrolling text and image ticker for announcements, brand logos, and trending tags.',
    features: ['Infinite seamless ticker loop animation', 'Adjustable scroll speed and direction (Left / Right)', 'Pause-on-hover interaction support', 'Custom text badges, icons, or sponsor logos'],
    usageSteps: ['Add the "Marquee Slider" block to your page header or body.', 'Add text items, tags, or logos to the ticker track.', 'Adjust scroll speed (e.g. 20s per loop) in the inspector controls.', 'Enable "Pause on Hover" to let users inspect scrolling content.']
  },
  'scroll-story': {
    title: 'Scroll Story Documentation',
    badge: 'TIMELINE NARRATIVE',
    summary: 'Engaging scroll-driven timeline story block that highlights steps or history as the user scrolls down.',
    features: ['Scroll-triggered active step indicators', 'Progress line fill as user scrolls down', 'Step images, icons, and timestamp badges', 'Smooth entry animations'],
    usageSteps: ['Insert the "Scroll Story" block on your page.', 'Add story milestone steps with dates, titles, and descriptions.', 'Upload milestone images or select custom step icons.', 'Publish and test the scroll trigger active indicators.']
  },
  'table-of-contents': {
    title: 'Table of Contents Documentation',
    badge: 'SEO & NAVIGATION',
    summary: 'Automatically parses post headings (H1-H6) to build a collapsible, smooth-scrolling Table of Contents.',
    features: ['Automatic heading detection (H2, H3, H4)', 'Smooth scroll offset alignment for fixed headers', 'Collapsible box toggle (Expand / Collapse)', 'SEO friendly schema markup'],
    usageSteps: ['Place the "Table of Contents" block at the top of your long-form article.', 'Select which heading tags to include (e.g. H2 and H3).', 'Customize container background, active indicator color, and typography.', 'The block will automatically discover and link all headings on the page.']
  },
  'video-modal': {
    title: 'Video Modal Documentation',
    badge: 'LIGHTBOX MEDIA',
    summary: 'Displays a thumbnail card with a pulsing play button that opens YouTube, Vimeo, or MP4 videos in a popup modal.',
    features: ['YouTube, Vimeo, and self-hosted MP4 support', 'Pulsing play button ring overlay', 'Full-screen lightbox modal player', 'Autoplay on popup open'],
    usageSteps: ['Add the "Video Modal" block to your hero section or video gallery.', 'Paste your video URL (e.g., YouTube watch link or direct MP4 URL).', 'Upload a custom thumbnail cover image.', 'Customize play button color, size, and ripple animation speed.']
  }
};
const DocsModal = ({
  block,
  onClose
}) => {
  if (!block) return null;
  const blockKey = (block.id || '').replace('guten-builder-blocks/', '');
  const docs = blockDocsData[blockKey] || {
    title: `${block.title} Documentation`,
    badge: 'BLOCK GUIDE',
    summary: block.desc || block.description || 'Complete usage guide and configuration options for this block.',
    features: ['Full Gutenberg editor integration', 'Responsive design for mobile, tablet, and desktop', 'Custom color and typography settings'],
    usageSteps: ['Add this block to your page layout inside Gutenberg.', 'Customize settings in the right sidebar Inspector Controls.', 'Save and publish your page.']
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "docs-modal-overlay",
    onClick: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "docs-modal-container",
      onClick: e => e.stopPropagation(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "docs-modal-header",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "modal-title-group",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "modal-badge",
            children: docs.badge
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
            className: "modal-block-name",
            children: docs.title
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          type: "button",
          className: "docs-modal-close",
          onClick: onClose,
          "aria-label": "Close Documentation",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
              x1: "18",
              y1: "6",
              x2: "6",
              y2: "18"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
              x1: "6",
              y1: "6",
              x2: "18",
              y2: "18"
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "docs-modal-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "docs-section overview-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
            children: "\uD83D\uDCD6 Overview"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            children: docs.summary
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "docs-section features-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
            children: "\u2728 Key Features"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
            className: "features-list",
            children: docs.features.map((feat, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "check-icon",
                children: "\u2713"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: feat
              })]
            }, idx))
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "docs-section steps-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", {
            children: "\uD83D\uDE80 How to Use"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", {
            className: "steps-list",
            children: docs.usageSteps.map((step, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "step-num",
                children: idx + 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "step-text",
                children: step
              })]
            }, idx))
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "docs-modal-footer",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          className: "footer-note",
          children: "\uD83D\uDCD8 GutenBuilder Blocks Documentation Guide"
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocsModal);

/***/ },

/***/ "./src/admin/index.js"
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dashboard_AdminDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard/AdminDashboard */ "./src/admin/Dashboard/AdminDashboard.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/admin/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(() => {
  const rootElement = document.getElementById('guten-builder-admin-root');
  if (rootElement) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Dashboard_AdminDashboard__WEBPACK_IMPORTED_MODULE_2__["default"], {}), rootElement);
  }
});

/***/ },

/***/ "./src/admin/style.scss"
/*!******************************!*\
  !*** ./src/admin/style.scss ***!
  \******************************/
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
/******/ 			"admin": 0,
/******/ 			"./style-admin": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["./style-admin"], () => (__webpack_require__("./src/admin/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=admin.js.map