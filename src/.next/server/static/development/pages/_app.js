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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _linkStyle;




function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var linkStyle = (_linkStyle = {
  display: "flex",
  minWidth: "2rem"
}, _defineProperty(_linkStyle, "minWidth", "calc(100% / 12)"), _defineProperty(_linkStyle, "height", "100%"), _defineProperty(_linkStyle, "padding", "0 10px"), _defineProperty(_linkStyle, "alignItems", "center"), _defineProperty(_linkStyle, "justifyContent", "center"), _defineProperty(_linkStyle, "lineHeight", "20px"), _defineProperty(_linkStyle, "fontWeight", 300), _defineProperty(_linkStyle, "transition", "color 0.2s ease-out 0s"), _defineProperty(_linkStyle, "textDecoration", "none"), _defineProperty(_linkStyle, "fontSize", "14px"), _defineProperty(_linkStyle, "flexDirection", "row"), _linkStyle);
var indexLinkStyle = {
  width: "calc(100% / 10)",
  padding: 0,
  marginRight: 10,
  fontSize: "16px",
  minWidth: "35px",
  fontWeight: 700,
  color: "#EEEEEE"
};
var NavLink = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2842684616"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: props.href
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: linkStyle,
    className: "jsx-2842684616" + " " + ((props.router.route == props.href ? "active" : "") || "")
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2842684616",
    css: "a.active.jsx-2842684616{color:rgb(97,218,251);}a.active.jsx-2842684616::after{content:\"\";width:100%;position:absolute;bottom:-1px;height:4px;left:0px;right:0px;z-index:1;background:rgb(97,218,251);}a.jsx-2842684616{color:#EEEEEE;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRSZXBcXE15QmxvZ1xcc3JjXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NnQixBQUdpQyxBQUdkLEFBV0ksV0FWSixHQVdPLFFBZG5CLEFBSW9CLFVBV3BCLFFBVmMsWUFDRCxXQUNGLFNBQ0MsVUFDQSxVQUNtQiwyQkFDL0IiLCJmaWxlIjoiRDpcXEdpdFJlcFxcTXlCbG9nXFxzcmNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIG1pbldpZHRoOiBcIjJyZW1cIixcclxuICBtaW5XaWR0aDogXCJjYWxjKDEwMCUgLyAxMilcIixcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHBhZGRpbmc6IFwiMCAxMHB4XCIsICBcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxyXG4gIGZvbnRXZWlnaHQ6IDMwMCxcclxuICB0cmFuc2l0aW9uOiBcImNvbG9yIDAuMnMgZWFzZS1vdXQgMHNcIixcclxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCJcclxufVxyXG5jb25zdCBpbmRleExpbmtTdHlsZSA9IHtcclxuICB3aWR0aDogXCJjYWxjKDEwMCUgLyAxMClcIixcclxuICBwYWRkaW5nOiAwLFxyXG4gIG1hcmdpblJpZ2h0OiAxMCxcclxuICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgbWluV2lkdGg6IFwiMzVweFwiLFxyXG4gIGZvbnRXZWlnaHQ6IDcwMCxcclxuICBjb2xvcjogXCIjRUVFRUVFXCIsXHJcbn1cclxuY29uc3QgTmF2TGluayA9IHdpdGhSb3V0ZXIoKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxMaW5rIGhyZWY9e3Byb3BzLmhyZWZ9PlxyXG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfSBjbGFzc05hbWU9e3Byb3BzLnJvdXRlci5yb3V0ZSA9PSBwcm9wcy5ocmVmID8gXCJhY3RpdmVcIiA6IFwiXCJ9Pntwcm9wcy5jaGlsZHJlbn08L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGEuYWN0aXZle1xyXG4gICAgICAgIGNvbG9yOiByZ2IoOTcsIDIxOCwgMjUxKTtcclxuICAgICAgfVxyXG4gICAgICBhLmFjdGl2ZTo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig5NywgMjE4LCAyNTEpO1xyXG4gICAgICB9XHJcbiAgICAgIGF7XHJcbiAgICAgICAgY29sb3I6ICNFRUVFRUU7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKSlcclxuY29uc3QgSGVhZGVyID0gKHtpc1Nob3d9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17aXNTaG93P3tkaXNwbGF5OidibG9jayd9OntkaXNwbGF5Oidub25lJ319PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YXJwZXJcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBzdHlsZT17eyAuLi5saW5rU3R5bGUsIC4uLmluZGV4TGlua1N0eWxlIH19IGNsYXNzTmFtZT1cImluZGV4TGlua1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5kZXhMaW5rVGV4dFwiPlxyXG4gICAgICAgICAgICDpppbpobVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICA8TmF2TGluayBocmVmPVwiL2FydGljbGVcIj7nrJTorrA8L05hdkxpbms+XHJcbiAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9pbWFnZVwiPuWbvueJhzwvTmF2TGluaz5cclxuICAgICAgICA8TmF2TGluayBocmVmPVwiL3ZpZGVvXCI+6KeG6aKRPC9OYXZMaW5rPlxyXG4gICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbXVzaWNcIj7pn7PkuZA8L05hdkxpbms+XHJcbiAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9maWxlXCI+5paH5Lu2PC9OYXZMaW5rPlxyXG4gICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvYWJvdXRcIj7lhbPkuo48L05hdkxpbms+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb250YWluZXIsLndhcnBlcntcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLndhcnBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XHJcbiAgICAgICAgY29sb3I6ICNFRUVFRUU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBwYWRkaW5nOjAgMTAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmRleFBhZ2VUZXh0e1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIG5hdntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgICp7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ghaW1wb3J0YW50XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=D:\\GitRep\\MyBlog\\src\\components\\Header.js */"
  }));
});

var Header = function Header(_ref) {
  var isShow = _ref.isShow;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: isShow ? {
      display: 'block'
    } : {
      display: 'none'
    },
    className: "jsx-758400066" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-758400066" + " " + "warper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    style: _objectSpread({}, linkStyle, indexLinkStyle),
    className: "jsx-758400066" + " " + "indexLink"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-758400066" + " " + "indexLinkText"
  }, "\u9996\u9875"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-758400066" + " " + "nav"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    href: "/article"
  }, "\u7B14\u8BB0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    href: "/image"
  }, "\u56FE\u7247"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    href: "/video"
  }, "\u89C6\u9891"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    href: "/music"
  }, "\u97F3\u4E50"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    href: "/file"
  }, "\u6587\u4EF6"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink, {
    href: "/about"
  }, "\u5173\u4E8E"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "758400066",
    css: ".container.jsx-758400066,.warper.jsx-758400066{height:50px;}.warper.jsx-758400066{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#20232a;color:#EEEEEE;position:fixed;z-index:1;width:80%;padding:0 10%;top:0;left:0;}.indexPageText.jsx-758400066{color:inherit;margin-left:10px;font-weight:700;font-size:20px;line-height:20px;}nav.jsx-758400066{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}*.jsx-758400066{box-sizing:content-box!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRSZXBcXE15QmxvZ1xcc3JjXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVnQixBQUdxQixBQUdDLEFBV0MsQUFPRixBQUtmLFlBekJDLEVBY21CLGlCQUNELEVBVWxCLGNBVGlCLGVBQ0UsWUFkUSxBQWtCYixLQUhkLE9BSUEsYUFsQmdCLGNBQ0MsZUFDTCxVQUNBLFVBQ0csY0FDUCxNQUNDLE9BQ1QiLCJmaWxlIjoiRDpcXEdpdFJlcFxcTXlCbG9nXFxzcmNcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIG1pbldpZHRoOiBcIjJyZW1cIixcclxuICBtaW5XaWR0aDogXCJjYWxjKDEwMCUgLyAxMilcIixcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHBhZGRpbmc6IFwiMCAxMHB4XCIsICBcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIGxpbmVIZWlnaHQ6IFwiMjBweFwiLFxyXG4gIGZvbnRXZWlnaHQ6IDMwMCxcclxuICB0cmFuc2l0aW9uOiBcImNvbG9yIDAuMnMgZWFzZS1vdXQgMHNcIixcclxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwicm93XCJcclxufVxyXG5jb25zdCBpbmRleExpbmtTdHlsZSA9IHtcclxuICB3aWR0aDogXCJjYWxjKDEwMCUgLyAxMClcIixcclxuICBwYWRkaW5nOiAwLFxyXG4gIG1hcmdpblJpZ2h0OiAxMCxcclxuICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgbWluV2lkdGg6IFwiMzVweFwiLFxyXG4gIGZvbnRXZWlnaHQ6IDcwMCxcclxuICBjb2xvcjogXCIjRUVFRUVFXCIsXHJcbn1cclxuY29uc3QgTmF2TGluayA9IHdpdGhSb3V0ZXIoKHByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxMaW5rIGhyZWY9e3Byb3BzLmhyZWZ9PlxyXG4gICAgICA8YSBzdHlsZT17bGlua1N0eWxlfSBjbGFzc05hbWU9e3Byb3BzLnJvdXRlci5yb3V0ZSA9PSBwcm9wcy5ocmVmID8gXCJhY3RpdmVcIiA6IFwiXCJ9Pntwcm9wcy5jaGlsZHJlbn08L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGEuYWN0aXZle1xyXG4gICAgICAgIGNvbG9yOiByZ2IoOTcsIDIxOCwgMjUxKTtcclxuICAgICAgfVxyXG4gICAgICBhLmFjdGl2ZTo6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTFweDtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig5NywgMjE4LCAyNTEpO1xyXG4gICAgICB9XHJcbiAgICAgIGF7XHJcbiAgICAgICAgY29sb3I6ICNFRUVFRUU7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKSlcclxuY29uc3QgSGVhZGVyID0gKHtpc1Nob3d9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17aXNTaG93P3tkaXNwbGF5OidibG9jayd9OntkaXNwbGF5Oidub25lJ319PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YXJwZXJcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBzdHlsZT17eyAuLi5saW5rU3R5bGUsIC4uLmluZGV4TGlua1N0eWxlIH19IGNsYXNzTmFtZT1cImluZGV4TGlua1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5kZXhMaW5rVGV4dFwiPlxyXG4gICAgICAgICAgICDpppbpobVcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICA8TmF2TGluayBocmVmPVwiL2FydGljbGVcIj7nrJTorrA8L05hdkxpbms+XHJcbiAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9pbWFnZVwiPuWbvueJhzwvTmF2TGluaz5cclxuICAgICAgICA8TmF2TGluayBocmVmPVwiL3ZpZGVvXCI+6KeG6aKRPC9OYXZMaW5rPlxyXG4gICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbXVzaWNcIj7pn7PkuZA8L05hdkxpbms+XHJcbiAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9maWxlXCI+5paH5Lu2PC9OYXZMaW5rPlxyXG4gICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvYWJvdXRcIj7lhbPkuo48L05hdkxpbms+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb250YWluZXIsLndhcnBlcntcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLndhcnBlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmE7XHJcbiAgICAgICAgY29sb3I6ICNFRUVFRUU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBwYWRkaW5nOjAgMTAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbmRleFBhZ2VUZXh0e1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIG5hdntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgICp7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3ghaW1wb3J0YW50XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=D:\\GitRep\\MyBlog\\src\\components\\Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer.js */ "./components/footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);





var container = {
  minHeight: '100vh'
};

var Layout = function Layout(_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$headerOption = _ref.headerOption,
      headerOption = _ref$headerOption === void 0 ? {
    isShow: true
  } : _ref$headerOption,
      _ref$footerOption = _ref.footerOption,
      footerOption = _ref$footerOption === void 0 ? {
    backgroundcolor: "#36363d",
    fontcolor: "#aaa",
    linkcolor: "#CCC"
  } : _ref$footerOption;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: container,
    className: "jsx-3740325826"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3740325826"
  }, title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isShow: headerOption.isShow
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3740325826"
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    backgroundcolor: footerOption.backgroundcolor,
    fontcolor: footerOption.fontcolor,
    linkcolor: footerOption.linkcolor
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3740325826",
    css: "*{margin:0;padding:0;}html,body{width:100%;-webkit-font-smoothing:antialiased;}h1,h2,h3,h4,h5,h6{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:bold;font-style:normal;}ul,li{list-style:none;}a{-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxHaXRSZXBcXE15QmxvZ1xcc3JjXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J5QixBQUdrQixBQUtFLEFBSUYsQUFPTSxBQUdNLFNBbEJYLEFBU0EsRUFKeUIsS0FXckMsR0FmQSxBQVNzSSwyQkFKdEksSUFhaUIsZUFDakIsc0ZBVG1CLGlCQUNDLGtCQUNwQiIsImZpbGUiOiJEOlxcR2l0UmVwXFxNeUJsb2dcXHNyY1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci5qcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci5qcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgY29udGFpbmVyID0ge1xyXG4gIG1pbkhlaWdodDogJzEwMHZoJ1xyXG59XHJcbmNvbnN0IExheW91dCA9ICh7XHJcbiAgY2hpbGRyZW4sIHRpdGxlLFxyXG4gIGhlYWRlck9wdGlvbiA9IHsgaXNTaG93OiB0cnVlIH0sXHJcbiAgZm9vdGVyT3B0aW9uID0geyBiYWNrZ3JvdW5kY29sb3I6IFwiIzM2MzYzZFwiLCBmb250Y29sb3I6IFwiI2FhYVwiLCBsaW5rY29sb3I6IFwiI0NDQ1wiIH1cclxufSkgPT4gKFxyXG4gICAgPGRpdiBzdHlsZT17Y29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgaXNTaG93PXtoZWFkZXJPcHRpb24uaXNTaG93fT48L0hlYWRlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyXHJcbiAgICAgICAgYmFja2dyb3VuZGNvbG9yPXtmb290ZXJPcHRpb24uYmFja2dyb3VuZGNvbG9yfVxyXG4gICAgICAgIGZvbnRjb2xvcj17Zm9vdGVyT3B0aW9uLmZvbnRjb2xvcn1cclxuICAgICAgICBsaW5rY29sb3I9e2Zvb3Rlck9wdGlvbi5saW5rY29sb3J9IC8+XHJcbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICp7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGh0bWwsYm9keXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgfVxyXG4gICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICB9XHJcbiAgICAgIHVsLGxpe1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgfVxyXG4gICAgICBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=D:\\GitRep\\MyBlog\\src\\components\\Layout.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Copyleft = {
  margin: 0,
  padding: '22px 0 18px 0',
  lineHeight: '12px',
  fontSize: '12px',
  textAlign: "center"
};

var Footer = function Footer(_ref) {
  var _ref$backgroundcolor = _ref.backgroundcolor,
      backgroundcolor = _ref$backgroundcolor === void 0 ? "#36363d" : _ref$backgroundcolor,
      _ref$fontcolor = _ref.fontcolor,
      fontcolor = _ref$fontcolor === void 0 ? "#aaa" : _ref$fontcolor,
      _ref$linkcolor = _ref.linkcolor,
      linkcolor = _ref$linkcolor === void 0 ? "#ccc" : _ref$linkcolor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: _objectSpread({}, Copyleft, {
      backgroundColor: backgroundcolor,
      color: fontcolor
    })
  }, "Copyleft\xA92016-3016", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      color: linkcolor,
      padding: '0 5px'
    },
    href: "/"
  }, "SUSHORE.COM"), "Designed by sushore.com"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./constants/Colours.js":
/*!******************************!*\
  !*** ./constants/Colours.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Colours = {
  '/': {
    headerOption: {
      isShow: false
    },
    footerOption: {
      backgroundcolor: "transparent",
      fontcolor: "#aaa",
      linkcolor: "#BBBBBB"
    }
  },
  '/article': {// headerOption: { isShow: true }
  },
  '/about': {// headerOption: { isShow: true }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Colours);

/***/ }),

/***/ "./constants/RouterTitle.js":
/*!**********************************!*\
  !*** ./constants/RouterTitle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 路由对应页面标题
var RouterTitle = {
  '/': "sushore'blog",
  '/article': '文章',
  '/about': '关于'
};
/* harmony default export */ __webpack_exports__["default"] = (RouterTitle);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _constants_RouterTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/RouterTitle */ "./constants/RouterTitle.js");
/* harmony import */ var _constants_Colours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/Colours */ "./constants/Colours.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp(props) {
    var _this;

    _classCallCheck(this, MyApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyApp).call(this, props));
    var Component = props.Component,
        pageProps = props.pageProps,
        router = props.router;
    _this.state = {
      Component: Component,
      pageProps: pageProps,
      router: router
    };
    return _this;
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: _constants_RouterTitle__WEBPACK_IMPORTED_MODULE_3__["default"][router.pathname] ? _constants_RouterTitle__WEBPACK_IMPORTED_MODULE_3__["default"][router.pathname] : "suushore'blog",
        headerOption: _constants_Colours__WEBPACK_IMPORTED_MODULE_4__["default"][router.pathname] && _constants_Colours__WEBPACK_IMPORTED_MODULE_4__["default"][router.pathname].headerOption ? _constants_Colours__WEBPACK_IMPORTED_MODULE_4__["default"][router.pathname].headerOption : {
          isShow: true
        },
        footerOption: _constants_Colours__WEBPACK_IMPORTED_MODULE_4__["default"][router.pathname] && _constants_Colours__WEBPACK_IMPORTED_MODULE_4__["default"][router.pathname].footerOption ? _constants_Colours__WEBPACK_IMPORTED_MODULE_4__["default"][router.pathname].footerOption : {
          backgroundcolor: "#36363d",
          fontcolor: "#aaa",
          linkcolor: "#ccc"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, pageProps)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.Component !== prevState.Component || nextProps.pageProps !== prevState.pageProps || nextProps.router !== prevState.router) {
        return {
          Component: nextProps.Component,
          pageProps: nextProps.pageProps,
          router: nextProps.router
        };
      }

      return null;
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=_app.js.map