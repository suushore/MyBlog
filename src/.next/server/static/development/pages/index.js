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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var title = {
  paddingTop: 62
};
var mainTitle = {
  fontSize: 80,
  color: '#eee',
  lineHeight: '110px',
  fontFamily: '"Montserrat", sans-serif',
  textAlign: 'center'
};
var subTitle = {
  fontSize: 30,
  lineHeight: '42px',
  fontFamily: '"playfairdisplay", serif',
  textAlign: 'center',
  marginTop: 30
};
var container = {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '50px auto 0px'
};
var showcase = {
  flex: 4,
  textAlign: 'center',
  cursor: 'pointer',
  overflow: 'hidden'
};
var content = {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  transformOrigin: '50% 50%',
  transition: 'transform 0.3s,opacity 0.3s'
};

var Entry = function Entry(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/".concat(props.target)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: showcase,
    className: "showcase"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: _objectSpread({
      backgroundColor: props.backgroundcolor
    }, content),
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      fontSize: '22px'
    }
  }, props.title))));
};

var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-702882500" + " " + "wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: title,
    className: "jsx-702882500" + " " + "title"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: mainTitle,
    className: "jsx-702882500"
  }, "sushore"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: subTitle,
    className: "jsx-702882500"
  }, "\u57FA\u4E8E\u4E2A\u4EBA\u5174\u8DA3\u642D\u5EFA\u7684\u79C1\u4EBA\u535A\u5BA2\u7C7B\u7F51\u7AD9")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: container,
    className: "jsx-702882500" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Entry, {
    title: "\u7B14\u8BB0",
    target: "article",
    backgroundcolor: "#A79496"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Entry, {
    title: "\u56FE\u7247",
    target: "image",
    backgroundcolor: "#375B73"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Entry, {
    title: "\u89C6\u9891",
    target: "video",
    backgroundcolor: "#DB5252"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Entry, {
    title: "\u97F3\u4E50",
    target: "music",
    backgroundcolor: "red"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Entry, {
    title: "\u6587\u4EF6",
    target: "file",
    backgroundcolor: "#0066CC"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Entry, {
    title: "\u5173\u4E8E",
    target: "about",
    backgroundcolor: "#323232"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "702882500",
    css: "@font-face{font-family:'Montserrat';src:url('/static/fonts/Montserrat-Regular.otf');font-weight:normal;font-style:normal;}@font-face{font-family:'playfairdisplay';src:url('/static/fonts/playfairdisplay-regular.ttf');font-weight:normal;font-style:normal;}.wrap{min-height:calc(100vh - 52px);color:#eee;box-sizing:content-box;}body{background:url(/static/background/bg-01.jpg) no-repeat;background-size:cover;background-attachment:fixed;}.content{opacity:0.87;}.content:hover{position:relative;z-index:100;opacity:0.96;-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.container{width:70%;}.showcase{height:200px;min-Width:33%;}@media screen and (min-width:992px) and (max-width:1200px){.container{width:80%;}.showcase{height:180px;}}@media screen and (min-width:768.5px) and (max-width:992px){.container{width:85%;}.showcase{height:170px;}}@media screen and (min-width:648px) and (max-width:768.5px){.container{width:90%;}.showcase{height:160px;}}@media screen and (max-width:648px){.container{width:96%;}.showcase{min-Width:150px;height:150px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRSZXBcXE15QmxvZ1xcc3JjXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0V1QixBQUdzQyxBQUswQixBQUs5QixBQU1LLEFBT2pDLEFBRXFCLEFBTVIsQUFHRyxBQU1ELEFBR0csQUFLSCxBQUdHLEFBS0gsQUFHRyxBQUtILEFBR0ssVUFuQ25CLEFBU0ksQUFRRixBQVFFLEFBUUEsR0ExQ0osQUFZZSxBQVNiLEFBUUEsQUFRQSxHQVFlLEVBMUNILE9BZm1DLEVBeUJqRCxFQWlDRSxDQXBFVyxBQWdCeUMsQUFVdkMsV0F6QlMsRUEwQkQsWUF0QkMsU0FIeEIsU0FTcUIsSUFMUyxNQVdULFNBTEQsVUFNQSxHQVhwQixLQU1BLFFBZUEsRUFUQSIsImZpbGUiOiJEOlxcR2l0UmVwXFxNeUJsb2dcXHNyY1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgdGl0bGUgPSB7XHJcbiAgcGFkZGluZ1RvcDogNjIsXHJcbn1cclxuY29uc3QgbWFpblRpdGxlID0ge1xyXG4gIGZvbnRTaXplOiA4MCxcclxuICBjb2xvcjogJyNlZWUnLFxyXG4gIGxpbmVIZWlnaHQ6ICcxMTBweCcsXHJcbiAgZm9udEZhbWlseTogJ1wiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmJyxcclxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG59XHJcbmNvbnN0IHN1YlRpdGxlID0ge1xyXG4gIGZvbnRTaXplOiAzMCxcclxuICBsaW5lSGVpZ2h0OiAnNDJweCcsXHJcbiAgZm9udEZhbWlseTogJ1wicGxheWZhaXJkaXNwbGF5XCIsIHNlcmlmJyxcclxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIG1hcmdpblRvcDogMzBcclxufVxyXG5jb25zdCBjb250YWluZXIgPSB7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgbWFyZ2luOiAnNTBweCBhdXRvIDBweCcsXHJcbn1cclxuY29uc3Qgc2hvd2Nhc2UgPSB7XHJcbiAgZmxleDogNCxcclxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIG92ZXJmbG93OiAnaGlkZGVuJ1xyXG59XHJcbmNvbnN0IGNvbnRlbnQgPSB7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIHdpZHRoOiAnMTAwJScsXHJcbiAgaGVpZ2h0OiAnMTAwJScsXHJcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIHRyYW5zZm9ybU9yaWdpbjogJzUwJSA1MCUnLFxyXG4gIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4zcyxvcGFjaXR5IDAuM3MnLFxyXG59XHJcblxyXG5jb25zdCBFbnRyeSA9IChwcm9wcykgPT4gKFxyXG4gIDxMaW5rIGhyZWY9e2AvJHtwcm9wcy50YXJnZXR9YH0+XHJcbiAgICA8ZGl2IHN0eWxlPXtzaG93Y2FzZX0gY2xhc3NOYW1lPVwic2hvd2Nhc2VcIj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IHByb3BzLmJhY2tncm91bmRjb2xvciwgLi4uY29udGVudCB9fSBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAnMjJweCcgfX0+e3Byb3BzLnRpdGxlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L0xpbms+XHJcbilcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwid3JhcFwiPlxyXG4gICAgPGRpdiBzdHlsZT17dGl0bGV9IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgIDxoMSBzdHlsZT17bWFpblRpdGxlfT5zdXNob3JlPC9oMT5cclxuICAgICAgPHAgc3R5bGU9e3N1YlRpdGxlfT7ln7rkuo7kuKrkurrlhbTotqPmkK3lu7rnmoTnp4HkurrljZrlrqLnsbvnvZHnq5k8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lcn0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxFbnRyeSB0aXRsZT1cIueslOiusFwiIHRhcmdldD1cImFydGljbGVcIiBiYWNrZ3JvdW5kY29sb3I9XCIjQTc5NDk2XCI+PC9FbnRyeT5cclxuICAgICAgPEVudHJ5IHRpdGxlPVwi5Zu+54mHXCIgdGFyZ2V0PVwiaW1hZ2VcIiBiYWNrZ3JvdW5kY29sb3I9XCIjMzc1QjczXCI+PC9FbnRyeT5cclxuICAgICAgPEVudHJ5IHRpdGxlPVwi6KeG6aKRXCIgdGFyZ2V0PVwidmlkZW9cIiBiYWNrZ3JvdW5kY29sb3I9XCIjREI1MjUyXCI+PC9FbnRyeT5cclxuICAgICAgPEVudHJ5IHRpdGxlPVwi6Z+z5LmQXCIgdGFyZ2V0PVwibXVzaWNcIiBiYWNrZ3JvdW5kY29sb3I9XCJyZWRcIj48L0VudHJ5PlxyXG4gICAgICA8RW50cnkgdGl0bGU9XCLmlofku7ZcIiB0YXJnZXQ9XCJmaWxlXCIgYmFja2dyb3VuZGNvbG9yPVwiIzAwNjZDQ1wiPjwvRW50cnk+XHJcbiAgICAgIDxFbnRyeSB0aXRsZT1cIuWFs+S6jlwiIHRhcmdldD1cImFib3V0XCIgYmFja2dyb3VuZGNvbG9yPVwiIzMyMzIzMlwiPjwvRW50cnk+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgIC53cmFwe1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6Y2FsYygxMDB2aCAtIDUycHgpO1xyXG4gICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgIGJveC1zaXppbmc6Y29udGVudC1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgYm9keXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9iYWNrZ3JvdW5kL2JnLTAxLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgfVxyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gICAgICAgIHNyYzp1cmwoJy9zdGF0aWMvZm9udHMvTW9udHNlcnJhdC1SZWd1bGFyLm90ZicpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAncGxheWZhaXJkaXNwbGF5JztcclxuICAgICAgICBzcmM6dXJsKCcvc3RhdGljL2ZvbnRzL3BsYXlmYWlyZGlzcGxheS1yZWd1bGFyLnR0ZicpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZW50e1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODdcclxuICAgICAgfVxyXG4gICAgICAuY29udGVudDpob3ZlcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTY7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgfVxyXG4gICAgICAuc2hvd2Nhc2V7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtaW4tV2lkdGg6MzMlO1xyXG4gICAgICB9XHJcbiAgICAgIC8q6YCC6YWN5LiN5ZCM5bGP5bmVKi9cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOjEyMDBweCl7XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2hvd2Nhc2V7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjguNXB4KSBhbmQgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaG93Y2FzZXtcclxuICAgICAgICAgIGhlaWdodDogMTcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0OHB4KSBhbmQgKG1heC13aWR0aDo3NjguNXB4KXtcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAuc2hvd2Nhc2V7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0OHB4KXtcclxuICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgd2lkdGg6IDk2JTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAuc2hvd2Nhc2V7XHJcbiAgICAgICAgICBtaW4tV2lkdGg6MTUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG4iXX0= */\n/*@ sourceURL=D:\\GitRep\\MyBlog\\src\\pages\\index.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

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
//# sourceMappingURL=index.js.map