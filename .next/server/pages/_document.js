"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styletron-react */ \"styletron-react\");\n/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styletron_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styletron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styletron */ \"./styletron.js\");\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(context) {\n        const renderPage = ()=>context.renderPage({\n                enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styletron_react__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                            value: _styletron__WEBPACK_IMPORTED_MODULE_3__.styletron,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"/Users/edotau/.software/edotau.github.io/pages/_document.js\",\n                                lineNumber: 12,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/edotau/.software/edotau.github.io/pages/_document.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, this)\n            });\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps({\n            ...context,\n            renderPage\n        });\n        const stylesheets = _styletron__WEBPACK_IMPORTED_MODULE_3__.styletron.getStylesheets() || [];\n        return {\n            ...initialProps,\n            stylesheets\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: this.props.stylesheets.map((sheet, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                            className: \"_styletron_hydrate_\",\n                            dangerouslySetInnerHTML: {\n                                __html: sheet.css\n                            },\n                            media: sheet.attrs.media,\n                            \"data-hydrate\": sheet.attrs[\"data-hydrate\"]\n                        }, i, false, {\n                            fileName: \"/Users/edotau/.software/edotau.github.io/pages/_document.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/edotau/.software/edotau.github.io/pages/_document.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/Users/edotau/.software/edotau.github.io/pages/_document.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/edotau/.software/edotau.github.io/pages/_document.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/edotau/.software/edotau.github.io/pages/_document.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/edotau/.software/edotau.github.io/pages/_document.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVFO0FBQ1A7QUFDdkI7QUFFekMsTUFBTVEsbUJBQW1CUixzREFBUUE7SUFDL0IsYUFBYVMsZ0JBQWdCQyxPQUFPLEVBQUU7UUFDcEMsTUFBTUMsYUFBYSxJQUNqQkQsUUFBUUMsVUFBVSxDQUFDO2dCQUNqQkMsWUFBWSxDQUFDQyxNQUFRLENBQUNDLHNCQUVsQiw4REFBQ1IscURBQWlCQTs0QkFBQ1MsT0FBT1IsaURBQVNBO3NDQUNqQyw0RUFBQ007Z0NBQUssR0FBR0MsS0FBSzs7Ozs7Ozs7Ozs7WUFHdEI7UUFFRixNQUFNRSxlQUFlLE1BQU1oQixvRUFBd0IsQ0FBQztZQUNsRCxHQUFHVSxPQUFPO1lBQ1ZDO1FBQ0Y7UUFDQSxNQUFNTSxjQUFjVixpREFBU0EsQ0FBQ1csY0FBYyxNQUFNLEVBQUU7UUFDcEQsT0FBTztZQUFFLEdBQUdGLFlBQVk7WUFBRUM7UUFBWTtJQUN4QztJQUVBRSxTQUFTO1FBQ1AscUJBQ0UsOERBQUNsQiwrQ0FBSUE7OzhCQUNILDhEQUFDQywrQ0FBSUE7OEJBQ0YsSUFBSSxDQUFDWSxLQUFLLENBQUNHLFdBQVcsQ0FBQ0csR0FBRyxDQUFDLENBQUNDLE9BQU9DLGtCQUNsQyw4REFBQ0M7NEJBQ0NDLFdBQVU7NEJBQ1ZDLHlCQUF5QjtnQ0FBRUMsUUFBUUwsTUFBTU0sR0FBRzs0QkFBQzs0QkFDN0NDLE9BQU9QLE1BQU1RLEtBQUssQ0FBQ0QsS0FBSzs0QkFDeEJFLGdCQUFjVCxNQUFNUSxLQUFLLENBQUMsZUFBZTsyQkFDcENQOzs7Ozs7Ozs7OzhCQUlYLDhEQUFDUzs7c0NBQ0MsOERBQUM1QiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0Y7QUFFQSxpRUFBZUksVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vkb3RhdS8uL3BhZ2VzL19kb2N1bWVudC5qcz81MzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIjtcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFN0eWxldHJvblByb3ZpZGVyIH0gZnJvbSBcInN0eWxldHJvbi1yZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGV0cm9uIH0gZnJvbSBcIi4uL3N0eWxldHJvblwiO1xuXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpIHtcbiAgICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT5cbiAgICAgIGNvbnRleHQucmVuZGVyUGFnZSh7XG4gICAgICAgIGVuaGFuY2VBcHA6IChBcHApID0+IChwcm9wcykgPT5cbiAgICAgICAgICAoXG4gICAgICAgICAgICA8U3R5bGV0cm9uUHJvdmlkZXIgdmFsdWU9e3N0eWxldHJvbn0+XG4gICAgICAgICAgICAgIDxBcHAgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9TdHlsZXRyb25Qcm92aWRlcj5cbiAgICAgICAgICApLFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHJlbmRlclBhZ2UsXG4gICAgfSk7XG4gICAgY29uc3Qgc3R5bGVzaGVldHMgPSBzdHlsZXRyb24uZ2V0U3R5bGVzaGVldHMoKSB8fCBbXTtcbiAgICByZXR1cm4geyAuLi5pbml0aWFsUHJvcHMsIHN0eWxlc2hlZXRzIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zdHlsZXNoZWV0cy5tYXAoKHNoZWV0LCBpKSA9PiAoXG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiX3N0eWxldHJvbl9oeWRyYXRlX1wiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2hlZXQuY3NzIH19XG4gICAgICAgICAgICAgIG1lZGlhPXtzaGVldC5hdHRycy5tZWRpYX1cbiAgICAgICAgICAgICAgZGF0YS1oeWRyYXRlPXtzaGVldC5hdHRyc1tcImRhdGEtaHlkcmF0ZVwiXX1cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiUHJvdmlkZXIiLCJTdHlsZXRyb25Qcm92aWRlciIsInN0eWxldHJvbiIsIk15RG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicmVuZGVyUGFnZSIsImVuaGFuY2VBcHAiLCJBcHAiLCJwcm9wcyIsInZhbHVlIiwiaW5pdGlhbFByb3BzIiwic3R5bGVzaGVldHMiLCJnZXRTdHlsZXNoZWV0cyIsInJlbmRlciIsIm1hcCIsInNoZWV0IiwiaSIsInN0eWxlIiwiY2xhc3NOYW1lIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjc3MiLCJtZWRpYSIsImF0dHJzIiwiZGF0YS1oeWRyYXRlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "./styletron.js":
/*!**********************!*\
  !*** ./styletron.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styletron: () => (/* binding */ styletron)\n/* harmony export */ });\n/* harmony import */ var styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styletron-engine-atomic */ \"styletron-engine-atomic\");\n/* harmony import */ var styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getHydrateClass = ()=>document.getElementsByClassName(\"_styletron_hydrate_\");\nconst styletron =  true ? new styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__.Server() : 0;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXRyb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlEO0FBRXpELE1BQU1FLGtCQUFrQixJQUN0QkMsU0FBU0Msc0JBQXNCLENBQUM7QUFFM0IsTUFBTUMsWUFDWCxLQUE2QixHQUN6QixJQUFJSiwyREFBTUEsS0FDVixDQUVFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZG90YXUvLi9zdHlsZXRyb24uanM/NWU3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQsIFNlcnZlciB9IGZyb20gXCJzdHlsZXRyb24tZW5naW5lLWF0b21pY1wiO1xuXG5jb25zdCBnZXRIeWRyYXRlQ2xhc3MgPSAoKSA9PlxuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiX3N0eWxldHJvbl9oeWRyYXRlX1wiKTtcblxuZXhwb3J0IGNvbnN0IHN0eWxldHJvbiA9XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCJcbiAgICA/IG5ldyBTZXJ2ZXIoKVxuICAgIDogbmV3IENsaWVudCh7XG4gICAgICAgIGh5ZHJhdGU6IGdldEh5ZHJhdGVDbGFzcygpLFxuICAgICAgfSk7XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiU2VydmVyIiwiZ2V0SHlkcmF0ZUNsYXNzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic3R5bGV0cm9uIiwiaHlkcmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styletron.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styletron-engine-atomic":
/*!******************************************!*\
  !*** external "styletron-engine-atomic" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("styletron-engine-atomic");

/***/ }),

/***/ "styletron-react":
/*!**********************************!*\
  !*** external "styletron-react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("styletron-react");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();