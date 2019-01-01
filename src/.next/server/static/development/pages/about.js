module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/about/index.js":
/*!******************************!*\
  !*** ./pages/about/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var wrap = {
  backgroundColor: "#36363d",
  minHeight: "calc(100vh - 132px)",
  padding: 15,
  boxSizing: 'content-box'
};
var header = {
  width: '80%',
  margin: '0 auto'
};
var title = {
  fontSize: 25,
  marginTop: 20,
  textAlign: "center"
};
var content = {
  margin: '0 auto',
  padding: '5px 9px 5px 9px',
  marginTop: 15
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: wrap,
    className: "jsx-2450962575"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2450962575"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: header,
    className: "jsx-2450962575"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: title,
    className: "jsx-2450962575"
  }, " \u5173\u4E8E\u672C\u7AD9 ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: content,
    className: "jsx-2450962575"
  }, "aaaa")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2450962575",
    css: "*.jsx-2450962575{color:#ccc!important;}a.jsx-2450962575:hover{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRSZXBcXE15QmxvZ1xcc3JjXFxwYWdlc1xcYWJvdXRcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCZ0IsQUFJTSxBQUU2QixxQkFGNUIsdUNBR0EiLCJmaWxlIjoiRDpcXEdpdFJlcFxcTXlCbG9nXFxzcmNcXHBhZ2VzXFxhYm91dFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3cmFwID0ge1xyXG4gIGJhY2tncm91bmRDb2xvcjogXCIjMzYzNjNkXCIsXHJcbiAgbWluSGVpZ2h0OiBcImNhbGMoMTAwdmggLSAxMzJweClcIixcclxuICBwYWRkaW5nOjE1LFxyXG4gIGJveFNpemluZzogJ2NvbnRlbnQtYm94J1xyXG59XHJcbmNvbnN0IGhlYWRlciA9IHtcclxuICB3aWR0aDogJzgwJScsXHJcbiAgbWFyZ2luOiAnMCBhdXRvJ1xyXG59XHJcbmNvbnN0IHRpdGxlID0ge1xyXG4gIGZvbnRTaXplOiAyNSxcclxuICBtYXJnaW5Ub3A6IDIwLFxyXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIlxyXG59XHJcbmNvbnN0IGNvbnRlbnQgPSB7XHJcbiAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICBwYWRkaW5nOiAnNXB4IDlweCA1cHggOXB4JyxcclxuICBtYXJnaW5Ub3A6IDE1LFxyXG59XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuICA8ZGl2IHN0eWxlPXt3cmFwfT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2hlYWRlcn0+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt0aXRsZX0+IOWFs+S6juacrOermSA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17Y29udGVudH0+XHJcbiAgICAgICAgYWFhYVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAqe1xyXG4gICAgICAgIGNvbG9yOiNjY2MhaW1wb3J0YW50XHJcbiAgICAgIH1cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=D:\\GitRep\\MyBlog\\src\\pages\\about\\index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/about/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about/index.js */"./pages/about/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map