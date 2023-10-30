/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/countries-phone-masks/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/countries-phone-masks/src/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const countries = __webpack_require__(/*! ./countries.json */ "./node_modules/countries-phone-masks/src/countries.json")

module.exports = countries


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/button.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/button.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button {
  padding: 20px 140px;
  width: max-content;
  background: #3f3d3d;
  border: none;
  color: #FFFFFF;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 5px 10px 0 rgb(101, 90, 106);
}
.button:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}
.button:hover {
  animation: 0.5s linear 0s 1 both hover_button;
}

@keyframes hover_button {
  from {
    background: #3f3d3d;
    color: #FFFFFF;
  }
  to {
    background: #DADADA;
    color: #3f3d3d;
  }
}`, "",{"version":3,"sources":["webpack://./src/components/styles/button.scss","webpack://./src/constants.module.scss"],"names":[],"mappings":"AAEA;EACE,mBAAA;EACA,kBAAA;EACA,mBCLiB;EDMjB,YAAA;EACA,cCNY;EDOZ,eAAA;EACA,eAAA;EACA,0CAAA;AADF;AAGE;EACE,8BAAA;EACA,gBAAA;AADJ;AAIE;EACE,6CAAA;AAFJ;;AAQA;EACE;IACE,mBC1Be;ID2Bf,cC1BU;EDqBZ;EAOA;IACE,mBC3BgB;ID4BhB,cC/Be;ED0BjB;AACF","sourcesContent":["@import \"src/constants.module.scss\";\r\n\r\n.button {\r\n  padding: 20px 140px;\r\n  width: max-content;\r\n  background: $buttonBackground;\r\n  border: none;\r\n  color: $buttonColor;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  box-shadow: 0 5px 10px 0 rgba(101, 90, 106, 14.101961);\r\n\r\n  &:active {\r\n    transform: translate(2px, 2px);\r\n    box-shadow: none;\r\n  }\r\n\r\n  &:hover {\r\n    animation: 0.5s linear 0s 1 both hover_button;\r\n  }\r\n}\r\n\r\n\r\n\r\n@keyframes hover_button {\r\n  from {\r\n    background: $buttonBackground;\r\n    color: $buttonColor;\r\n  }\r\n  to {\r\n    background: $inputBorderBottom;\r\n    color: $buttonBackground;\r\n  }\r\n}","$buttonBackground: #3f3d3d;\r\n$buttonColor: #FFFFFF;\r\n$buttonActive: #595454FF;\r\n$inputBorderBottom: #DADADA;\r\n$error: #FF0000FF;\r\n$wrapper: rgba(3, 3, 3, .4);\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/input.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/input.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.label {
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 500px;
  font-size: 25px;
  column-gap: 10px;
  grid-auto-columns: max-content;
  overflow: hidden;
}

.input {
  position: relative;
  display: inline-block;
  grid-row-start: 2;
  width: inherit;
  height: 40px;
  border: none;
  border-bottom: 1px solid #DADADA;
  font-size: 20px;
}
.input:focus-visible {
  outline: none;
}

.input_error {
  color: red;
}

.error {
  display: none;
  position: absolute;
  bottom: 0;
  margin: 0 0 15px 10px;
  font-size: 18px;
  color: red;
}`, "",{"version":3,"sources":["webpack://./src/components/styles/input.scss","webpack://./src/constants.module.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,aAAA;EACA,kCAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,8BAAA;EACA,gBAAA;AADF;;AAIA;EACE,kBAAA;EACA,qBAAA;EACA,iBAAA;EACA,cAAA;EACA,YAAA;EACA,YAAA;EACA,gCAAA;EACA,eAAA;AADF;AAGE;EACE,aAAA;AADJ;;AAKA;EACE,UCzBM;ADuBR;;AAKA;EACE,aAAA;EACA,kBAAA;EACA,SAAA;EACA,qBAAA;EACA,eAAA;EACA,UClCM;ADgCR","sourcesContent":["@import \"src/constants.module.scss\";\r\n\r\n.label {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-rows: repeat(3, 1fr);\r\n  width: 500px;\r\n  font-size: 25px;\r\n  column-gap: 10px;\r\n  grid-auto-columns: max-content;\r\n  overflow: hidden;\r\n}\r\n\r\n.input {\r\n  position: relative;\r\n  display: inline-block;\r\n  grid-row-start: 2;\r\n  width: inherit;\r\n  height: 40px;\r\n  border: none;\r\n  border-bottom: 1px solid $inputBorderBottom;\r\n  font-size: 20px;\r\n\r\n  &:focus-visible {\r\n    outline: none;\r\n  }\r\n}\r\n\r\n.input_error {\r\n  color: $error;\r\n}\r\n\r\n.error {\r\n  display: none;\r\n  position: absolute;\r\n  bottom: 0;\r\n  margin: 0 0 15px 10px;\r\n  font-size: 18px;\r\n  color: $error;\r\n}","$buttonBackground: #3f3d3d;\r\n$buttonColor: #FFFFFF;\r\n$buttonActive: #595454FF;\r\n$inputBorderBottom: #DADADA;\r\n$error: #FF0000FF;\r\n$wrapper: rgba(3, 3, 3, .4);\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/modal.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/modal.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modalInput {
  display: none;
}

.modalButton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: fixed;
  width: 90px;
  height: 90px;
  bottom: 10%;
  left: 85vw;
  border-radius: 50%;
  background: #3f3d3d;
  color: #FFFFFF;
  box-shadow: 0 5px 10px 0 rgb(101, 90, 106);
  z-index: 3;
}
.modalButton::before {
  content: "Open modal";
}
.modalButton:hover {
  animation: 0.5s linear 0s 1 both hover_button;
}
.modalButton:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}

@keyframes hover_button {
  from {
    background: #3f3d3d;
    color: #FFFFFF;
  }
  to {
    background: #DADADA;
    color: #3f3d3d;
  }
}
.modalWrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(3, 3, 3, 0.4);
  visibility: hidden;
}

#modal:checked ~ .modalWrapper {
  animation: 0.5s linear 0s 1 both open_modal;
}

@keyframes open_modal {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
}
#modal:checked ~ .modalButton::before {
  content: "Close modal";
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #FFFFFF;
  width: 30%;
  height: 30%;
  font-size: 20px;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/components/styles/modal.scss","webpack://./src/constants.module.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,kBAAA;EACA,mBCjBiB;EDkBjB,cCjBY;EDkBZ,0CAAA;EACA,UAAA;AADF;AAGE;EACE,qBAAA;AADJ;AAIE;EACE,6CAAA;AAFJ;AAKE;EACE,8BAAA;EACA,gBAAA;AAHJ;;AAOA;EACE;IACE,mBCtCe;IDuCf,cCtCU;EDkCZ;EAMA;IACE,mBCvCgB;IDwChB,cC3Ce;EDuCjB;AACF;AAOA;EACE,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,MAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,8BCnDQ;EDoDR,kBAAA;AALF;;AAQA;EACE,2CAAA;AALF;;AAQA;EACE;IACE,UAAA;EALF;EAOA;IACE,UAAA;IACA,mBAAA;EALF;AACF;AASE;EACE,sBAAA;AAPJ;;AAWA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBCpFY;EDqFZ,UAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AARF","sourcesContent":["@import \"src/constants.module.scss\";\r\n\r\n.modalInput {\r\n  display: none;\r\n}\r\n\r\n.modalButton {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  text-align: center;\r\n  position: fixed;\r\n  width: 90px;\r\n  height: 90px;\r\n  bottom: 10%;\r\n  left: 85vw;\r\n  border-radius: 50%;\r\n  background: $buttonBackground;\r\n  color: $buttonColor;\r\n  box-shadow: 0 5px 10px 0 rgba(101, 90, 106, 14.101961);\r\n  z-index: 3;\r\n\r\n  &::before {\r\n    content: \"Open modal\";\r\n  }\r\n\r\n  &:hover {\r\n    animation: 0.5s linear 0s 1 both hover_button;\r\n  }\r\n\r\n  &:active {\r\n    transform: translate(2px, 2px);\r\n    box-shadow: none;\r\n  }\r\n}\r\n\r\n@keyframes hover_button {\r\n  from {\r\n    background: $buttonBackground;\r\n    color: $buttonColor;\r\n  }\r\n  to {\r\n    background: $inputBorderBottom;\r\n    color: $buttonBackground;\r\n  }\r\n}\r\n\r\n.modalWrapper {\r\n  position: fixed;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: $wrapper;\r\n  visibility: hidden;\r\n}\r\n\r\n#modal:checked ~ .modalWrapper {\r\n  animation: 0.5s linear 0s 1 both open_modal;\r\n}\r\n\r\n@keyframes open_modal {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n#modal:checked ~ .modalButton {\r\n  &::before {\r\n    content: \"Close modal\";\r\n  }\r\n}\r\n\r\n.modal {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background: $buttonColor;\r\n  width: 30%;\r\n  height: 30%;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}","$buttonBackground: #3f3d3d;\r\n$buttonColor: #FFFFFF;\r\n$buttonActive: #595454FF;\r\n$inputBorderBottom: #DADADA;\r\n$error: #FF0000FF;\r\n$wrapper: rgba(3, 3, 3, .4);\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/phone.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/phone.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.selectorFlags {
  display: flex;
  grid-row-start: 2;
  grid-row-end: 2;
  width: 180px;
  height: 100%;
  border: none;
  border-bottom: 1px solid #DADADA;
  font-size: 20px;
}
.selectorFlags:focus-visible {
  outline: none;
}

.code {
  grid-row-start: 2;
  grid-row-end: 2;
  align-self: center;
}`, "",{"version":3,"sources":["webpack://./src/components/styles/phone.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,gCAAA;EACA,eAAA;AADF;AAGE;EACE,aAAA;AADJ;;AAKA;EACE,iBAAA;EACA,eAAA;EACA,kBAAA;AAFF","sourcesContent":["@import \"./src/constants.module.scss\";\r\n\r\n.selectorFlags {\r\n  display: flex;\r\n  grid-row-start: 2;\r\n  grid-row-end: 2;\r\n  width: 180px;\r\n  height: 100%;\r\n  border: none;\r\n  border-bottom: 1px solid $inputBorderBottom;\r\n  font-size: 20px;\r\n\r\n  &:focus-visible {\r\n    outline: none;\r\n  }\r\n}\r\n\r\n.code {\r\n  grid-row-start: 2;\r\n  grid-row-end: 2;\r\n  align-self: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  box-sizing: border-box;
}

#body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

#block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,sBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#block {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 500px;\r\n  height: 100%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/styles/button.scss":
/*!*******************************************!*\
  !*** ./src/components/styles/button.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/button.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_button_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/styles/input.scss":
/*!******************************************!*\
  !*** ./src/components/styles/input.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./input.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/input.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/styles/modal.scss":
/*!******************************************!*\
  !*** ./src/components/styles/modal.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./modal.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/modal.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modal_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/styles/phone.scss":
/*!******************************************!*\
  !*** ./src/components/styles/phone.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_phone_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./phone.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/styles/phone.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_phone_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_phone_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_phone_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_phone_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/Element.js":
/*!***********************************!*\
  !*** ./src/components/Element.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Element {
  constructor(selector){
    this.selector = document.createElement(selector);
  }
  show(){
    this.selector.style.display = "inline-block";
  };
  hide(){
    this.selector.style.display = "none";
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);

/***/ }),

/***/ "./src/components/forms/Button.js":
/*!****************************************!*\
  !*** ./src/components/forms/Button.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/button.scss */ "./src/components/styles/button.scss");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Element.js */ "./src/components/Element.js");



class Button extends _Element_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(options) {
    options.selector = "button";
    super(options.selector);
    const parent = document.getElementById(options.parent);
    parent.appendChild(this.selector);
    this.selector.type = options.type;
    this.selector.className = options.class;
    this.selector.textContent = options.text;
    this.selector.onclick=()=>{
      options.onClick()
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/forms/Input.js":
/*!***************************************!*\
  !*** ./src/components/forms/Input.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_input_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/input.scss */ "./src/components/styles/input.scss");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Element.js */ "./src/components/Element.js");



class Input extends _Element_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(options) {
    options.selector = "label";
    super(options.selector);
    const parent = document.getElementById(options.parent);
    parent.appendChild(this.selector);
    this.selector.textContent = options.text;
    this.selector.className = options.classLabel;
    this.minLength = options.minSymbols;
    this.maxLength = options.maxSymbols;
    this.regx = options.regx;
    this.classInput = options.classInput;
    this.input = document.createElement(options.tag);
    this.selector.appendChild(this.input);
    options.type ? this.input.type = options.type : null;
    this.input.placeholder = options.placeholder;
    this.input.className = this.classInput;
    this.input.onchange = () => {
      this.value = this.input.value;
    }
    this.error = document.createElement("p");
    this.selector.appendChild(this.error);
    this.error.className = "error";
    this.error.textContent = options.errorText;
  };

  validation() {
    if (this.value) {
      const isValid = this.regx(this.minLength, this.maxLength).test(this.value);
      if (isValid) {
        this.input.className = this.classInput;
        this.hiddenError();
        return this.value;
      } else {
        this.showError();
      }
    } else {
      this.showError();
    }
  };

  showError() {
    this.input.className = this.classInput + " " + "input_error";
    this.visibleError();
  };

  visibleError() {
    this.error.style.display = "inline-block";
  };

  hiddenError() {
    this.error.style.display = "none";
  };

  resetValue() {
    this.input.value = "";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ }),

/***/ "./src/components/forms/Phone.js":
/*!***************************************!*\
  !*** ./src/components/forms/Phone.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_phone_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/phone.scss */ "./src/components/styles/phone.scss");
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.js */ "./src/components/forms/Input.js");
/* harmony import */ var countries_phone_masks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! countries-phone-masks */ "./node_modules/countries-phone-masks/src/index.js");




class Phone extends _Input_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(options) {
    super(options);
    const flags = document.createElement("select");
    flags.className = "selectorFlags";
    const defaultOption = document.createElement("option");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true;
    defaultOption.textContent = "Choose country";
    flags.appendChild(defaultOption);

    countries_phone_masks__WEBPACK_IMPORTED_MODULE_2__.map((item) => {
      const option = document.createElement("option");
      option.value = item.name;
      option.textContent = item.name;
      flags.appendChild(option);
    });

    this.selector.insertBefore(flags, this.input);

    flags.onchange = () => {
      const item = countries_phone_masks__WEBPACK_IMPORTED_MODULE_2__.find(({name}) => name === flags.value);
      const code = document.createElement("p");
      code.textContent = item.code;
      code.className = "code";
      const oldCode = document.querySelector(".code");
      if (oldCode) {
        this.selector.replaceChild(code, oldCode);
      } else {
        this.selector.insertBefore(code, this.input);
      }
      this.input.placeholder = item.mask;
    };
  };

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Phone);

/***/ }),

/***/ "./src/components/modal/Modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/Modal.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_modal_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/modal.scss */ "./src/components/styles/modal.scss");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Element.js */ "./src/components/Element.js");



class Modal extends _Element_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(options) {
    options.selector = "div";
    super(options.selector);
    const parent = document.getElementById(options.parent);
    parent.appendChild(this.selector);
    this.input = document.createElement("input");
    this.input.type = "checkbox";
    this.input.id = "modal";
    this.input.className = options.classInput;
    this.input.onchange = () => {
      if (this.input.checked) {
        this.hiddenScroll(true);
      } else {
        this.hiddenScroll(false);
      }
    };
    this.selector.appendChild(this.input);
    const button = document.createElement("label");
    button.className = "modalButton";
    button.htmlFor = "modal";
    this.selector.appendChild(button);
    const wrapper = document.createElement("div");
    wrapper.className = "modalWrapper";
    this.selector.appendChild(wrapper);
    this.modal = document.createElement("p");
    this.modal.className = "modal";
    this.modal.textContent = options.text;
    wrapper.appendChild(this.modal);
  };

  hiddenScroll = (hidden) => {
    if (hidden) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "visible";
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOGIN: () => (/* binding */ LOGIN),
/* harmony export */   MAIL: () => (/* binding */ MAIL),
/* harmony export */   MESSAGE: () => (/* binding */ MESSAGE),
/* harmony export */   PHONE: () => (/* binding */ PHONE)
/* harmony export */ });
const MAIL = {
  minSymbols: 3,
  maxSymbols: 256,
  regx: function () {
    return new RegExp("^(([^<>()[\\]\\\\.,;:\\s@\"]" +
      "+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}" +
      "\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$", "i");
  },
};
const LOGIN = {
  minSymbols: 2,
  maxSymbols: 50,
  regx: function (min, max) {
    return new RegExp("^[ a-z0-9а-я]{" +
      min + "," + max + "}$", "i");
  },
};

const PHONE = {
  regx: function () {
    return new RegExp("^[0-9-()]+$");
  }
}

const MESSAGE = {
  minSymbols: 1,
  maxSymbols: 300,
  regx: function (min, max) {
    return new RegExp("^[\"\\[\\]\\s-:)(/=!#$%&'*+?^_`{|}~.,<>@A-Z0-9А-Я]{" +
      min + "," + max + "}$", "i")
  },
};



/***/ }),

/***/ "./src/requests/request.js":
/*!*********************************!*\
  !*** ./src/requests/request.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const request = async (value) => {
  const response = await fetch("http://localhost:9090/api/registration", {
    method: "POST",
    body: JSON.stringify(value),
  });
  return  await response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);

/***/ }),

/***/ "./node_modules/countries-phone-masks/src/countries.json":
/*!***************************************************************!*\
  !*** ./node_modules/countries-phone-masks/src/countries.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"name":"Afghanistan","code":"+93","iso":"AF","flag":"https://cdn.kcak11.com/CountryFlags/countries/af.svg","mask":"##-###-####"},{"name":"Aland Islands","code":"+358","iso":"AX","flag":"https://cdn.kcak11.com/CountryFlags/countries/ax.svg","mask":"(###)###-##-##"},{"name":"Albania","code":"+355","iso":"AL","flag":"https://cdn.kcak11.com/CountryFlags/countries/al.svg","mask":"(###)###-###"},{"name":"Algeria","code":"+213","iso":"DZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/dz.svg","mask":"##-###-####"},{"name":"American Samoa","code":"+1","iso":"AS","flag":"https://cdn.kcak11.com/CountryFlags/countries/as.svg","mask":"(684)###-####"},{"name":"Andorra","code":"+376","iso":"AD","flag":"https://cdn.kcak11.com/CountryFlags/countries/ad.svg","mask":"###-###"},{"name":"Angola","code":"+244","iso":"AO","flag":"https://cdn.kcak11.com/CountryFlags/countries/ao.svg","mask":"(###)###-###"},{"name":"Anguilla","code":"+1","iso":"AI","flag":"https://cdn.kcak11.com/CountryFlags/countries/ai.svg","mask":"(264)###-####"},{"name":"Antarctica","code":"+672","iso":"AQ","flag":"https://cdn.kcak11.com/CountryFlags/countries/aq.svg","mask":"1##-###"},{"name":"Antigua and Barbuda","code":"+1","iso":"AG","flag":"https://cdn.kcak11.com/CountryFlags/countries/ag.svg","mask":"(268)###-####"},{"name":"Argentina","code":"+54","iso":"AR","flag":"https://cdn.kcak11.com/CountryFlags/countries/ar.svg","mask":"(###)###-####"},{"name":"Armenia","code":"+374","iso":"AM","flag":"https://cdn.kcak11.com/CountryFlags/countries/am.svg","mask":"##-###-###"},{"name":"Aruba","code":"+297","iso":"AW","flag":"https://cdn.kcak11.com/CountryFlags/countries/aw.svg","mask":"###-####"},{"name":"Ascension Island","code":"+247","iso":"AC","flag":"https://cdn.kcak11.com/CountryFlags/countries/sh.svg","mask":"####"},{"name":"Australia","code":"+61","iso":"AU","flag":"https://cdn.kcak11.com/CountryFlags/countries/au.svg","mask":"#-####-####"},{"name":"Austria","code":"+43","iso":"AT","flag":"https://cdn.kcak11.com/CountryFlags/countries/at.svg","mask":"(###)###-####"},{"name":"Azerbaijan","code":"+994","iso":"AZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/az.svg","mask":"##-###-##-##"},{"name":"Bahamas","code":"+1","iso":"BS","flag":"https://cdn.kcak11.com/CountryFlags/countries/bs.svg","mask":"(242)###-####"},{"name":"Bahrain","code":"+973","iso":"BH","flag":"https://cdn.kcak11.com/CountryFlags/countries/bh.svg","mask":"####-####"},{"name":"Bangladesh","code":"+880","iso":"BD","flag":"https://cdn.kcak11.com/CountryFlags/countries/bd.svg","mask":"1###-######"},{"name":"Barbados","code":"+1","iso":"BB","flag":"https://cdn.kcak11.com/CountryFlags/countries/bb.svg","mask":"(246)###-####"},{"name":"Belarus","code":"+375","iso":"BY","flag":"https://cdn.kcak11.com/CountryFlags/countries/by.svg","mask":"(##)###-##-##"},{"name":"Belgium","code":"+32","iso":"BE","flag":"https://cdn.kcak11.com/CountryFlags/countries/be.svg","mask":"(###)###-###"},{"name":"Belize","code":"+501","iso":"BZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/bz.svg","mask":"###-####"},{"name":"Benin","code":"+229","iso":"BJ","flag":"https://cdn.kcak11.com/CountryFlags/countries/bj.svg","mask":"##-##-####"},{"name":"Bermuda","code":"+1","iso":"BM","flag":"https://cdn.kcak11.com/CountryFlags/countries/bm.svg","mask":"(441)###-####"},{"name":"Bhutan","code":"+975","iso":"BT","flag":"https://cdn.kcak11.com/CountryFlags/countries/bt.svg","mask":["17-###-###","77-###-###","#-###-###"]},{"name":"Bolivia","code":"+591","iso":"BO","flag":"https://cdn.kcak11.com/CountryFlags/countries/bo.svg","mask":"#-###-####"},{"name":"Bosnia and Herzegovina","code":"+387","iso":"BA","flag":"https://cdn.kcak11.com/CountryFlags/countries/ba.svg","mask":["##-####","##-#####"]},{"name":"Botswana","code":"+267","iso":"BW","flag":"https://cdn.kcak11.com/CountryFlags/countries/bw.svg","mask":"##-###-###"},{"name":"Brazil","code":"+55","iso":"BR","flag":"https://cdn.kcak11.com/CountryFlags/countries/br.svg","mask":["(##)####-####","(##)#####-####"]},{"name":"British Indian Ocean Territory","code":"+246","iso":"IO","flag":"https://cdn.kcak11.com/CountryFlags/countries/io.svg","mask":"###-####"},{"name":"Brunei Darussalam","code":"+673","iso":"BN","flag":"https://cdn.kcak11.com/CountryFlags/countries/bn.svg","mask":"###-####"},{"name":"Bulgaria","code":"+359","iso":"BG","flag":"https://cdn.kcak11.com/CountryFlags/countries/bg.svg","mask":"(###)###-###"},{"name":"Burkina Faso","code":"+226","iso":"BF","flag":"https://cdn.kcak11.com/CountryFlags/countries/bf.svg","mask":"##-##-####"},{"name":"Burundi","code":"+257","iso":"BI","flag":"https://cdn.kcak11.com/CountryFlags/countries/bi.svg","mask":"##-##-####"},{"name":"Cambodia","code":"+855","iso":"KH","flag":"https://cdn.kcak11.com/CountryFlags/countries/kh.svg","mask":"##-###-###"},{"name":"Cameroon","code":"+237","iso":"CM","flag":"https://cdn.kcak11.com/CountryFlags/countries/cm.svg","mask":"####-####"},{"name":"Canada","code":"+1","iso":"CA","flag":"https://cdn.kcak11.com/CountryFlags/countries/ca.svg","mask":"(###)###-####"},{"name":"Cape Verde","code":"+238","iso":"CV","flag":"https://cdn.kcak11.com/CountryFlags/countries/cv.svg","mask":"(###)##-##"},{"name":"Cayman Islands","code":"+1","iso":"KY","flag":"https://cdn.kcak11.com/CountryFlags/countries/ky.svg","mask":"(345)###-####"},{"name":"Central African Republic","code":"+236","iso":"CF","flag":"https://cdn.kcak11.com/CountryFlags/countries/cf.svg","mask":"##-##-####"},{"name":"Chad","code":"+235","iso":"TD","flag":"https://cdn.kcak11.com/CountryFlags/countries/td.svg","mask":"##-##-##-##"},{"name":"Chile","code":"+56","iso":"CL","flag":"https://cdn.kcak11.com/CountryFlags/countries/cl.svg","mask":"#-####-####"},{"name":"China","code":"+86","iso":"CN","flag":"https://cdn.kcak11.com/CountryFlags/countries/cn.svg","mask":["(###)####-###","(###)####-####","##-#####-#####"]},{"name":"Christmas Island","code":"+61","iso":"CX","flag":"https://cdn.kcak11.com/CountryFlags/countries/cx.svg","mask":"#-####-####"},{"name":"Cocos (Keeling) Islands","code":"+61","iso":"CC","flag":"https://cdn.kcak11.com/CountryFlags/countries/cc.svg","mask":"#-####-####"},{"name":"Colombia","code":"+57","iso":"CO","flag":"https://cdn.kcak11.com/CountryFlags/countries/co.svg","mask":"(###)###-####"},{"name":"Comoros","code":"+269","iso":"KM","flag":"https://cdn.kcak11.com/CountryFlags/countries/km.svg","mask":"##-#####"},{"name":"Congo","code":"+242","iso":"CG","flag":"https://cdn.kcak11.com/CountryFlags/countries/cg.svg","mask":"##-#####"},{"name":"Cook Islands","code":"+682","iso":"CK","flag":"https://cdn.kcak11.com/CountryFlags/countries/ck.svg","mask":"##-###"},{"name":"Costa Rica","code":"+506","iso":"CR","flag":"https://cdn.kcak11.com/CountryFlags/countries/cr.svg","mask":"####-####"},{"name":"Croatia","code":"+385","iso":"HR","flag":"https://cdn.kcak11.com/CountryFlags/countries/hr.svg","mask":"##-###-###"},{"name":"Cuba","code":"+53","iso":"CU","flag":"https://cdn.kcak11.com/CountryFlags/countries/cu.svg","mask":"#-###-####"},{"name":"Cyprus","code":"+357","iso":"CY","flag":"https://cdn.kcak11.com/CountryFlags/countries/cy.svg","mask":"##-###-###"},{"name":"Czech Republic","code":"+420","iso":"CZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/cz.svg","mask":"(###)###-###"},{"name":"Democratic Republic of the Congo","code":"+243","iso":"CD","flag":"https://cdn.kcak11.com/CountryFlags/countries/cd.svg","mask":"(###)###-###"},{"name":"Denmark","code":"+45","iso":"DK","flag":"https://cdn.kcak11.com/CountryFlags/countries/dk.svg","mask":"##-##-##-##"},{"name":"Djibouti","code":"+253","iso":"DJ","flag":"https://cdn.kcak11.com/CountryFlags/countries/dj.svg","mask":"##-##-##-##"},{"name":"Dominica","code":"+1","iso":"DM","flag":"https://cdn.kcak11.com/CountryFlags/countries/dm.svg","mask":"(767)###-####"},{"name":"Dominican Republic","code":"+1","iso":"DO","flag":"https://cdn.kcak11.com/CountryFlags/countries/do.svg","mask":["(809)###-####","(829)###-####","(849)###-####"]},{"name":"Ecuador","code":"+593","iso":"EC","flag":"https://cdn.kcak11.com/CountryFlags/countries/ec.svg","mask":["#-###-####","##-###-####"]},{"name":"Egypt","code":"+20","iso":"EG","flag":"https://cdn.kcak11.com/CountryFlags/countries/eg.svg","mask":"(###)###-####"},{"name":"El Salvador","code":"+503","iso":"SV","flag":"https://cdn.kcak11.com/CountryFlags/countries/sv.svg","mask":"##-##-####"},{"name":"Equatorial Guinea","code":"+240","iso":"GQ","flag":"https://cdn.kcak11.com/CountryFlags/countries/gq.svg","mask":"##-###-####"},{"name":"Eritrea","code":"+291","iso":"ER","flag":"https://cdn.kcak11.com/CountryFlags/countries/er.svg","mask":"#-###-###"},{"name":"Estonia","code":"+372","iso":"EE","flag":"https://cdn.kcak11.com/CountryFlags/countries/ee.svg","mask":["###-####","####-####"]},{"name":"Eswatini","code":"+268","iso":"SZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/sz.svg","mask":"##-##-####"},{"name":"Ethiopia","code":"+251","iso":"ET","flag":"https://cdn.kcak11.com/CountryFlags/countries/et.svg","mask":"##-###-####"},{"name":"Falkland Islands (Malvinas)","code":"+500","iso":"FK","flag":"https://cdn.kcak11.com/CountryFlags/countries/fk.svg","mask":"#####"},{"name":"Faroe Islands","code":"+298","iso":"FO","flag":"https://cdn.kcak11.com/CountryFlags/countries/fo.svg","mask":"###-###"},{"name":"Fiji","code":"+679","iso":"FJ","flag":"https://cdn.kcak11.com/CountryFlags/countries/fj.svg","mask":"##-#####"},{"name":"Finland","code":"+358","iso":"FI","flag":"https://cdn.kcak11.com/CountryFlags/countries/fi.svg","mask":"(###)###-##-##"},{"name":"France","code":"+33","iso":"FR","flag":"https://cdn.kcak11.com/CountryFlags/countries/fr.svg","mask":"(###)###-###"},{"name":"French Guiana","code":"+594","iso":"GF","flag":"https://cdn.kcak11.com/CountryFlags/countries/gf.svg","mask":"#####-####"},{"name":"French Polynesia","code":"+689","iso":"PF","flag":"https://cdn.kcak11.com/CountryFlags/countries/pf.svg","mask":"##-##-##"},{"name":"Gabon","code":"+241","iso":"GA","flag":"https://cdn.kcak11.com/CountryFlags/countries/ga.svg","mask":"#-##-##-##"},{"name":"Gambia","code":"+220","iso":"GM","flag":"https://cdn.kcak11.com/CountryFlags/countries/gm.svg","mask":"(###)##-##"},{"name":"Georgia","code":"+995","iso":"GE","flag":"https://cdn.kcak11.com/CountryFlags/countries/ge.svg","mask":"(###)###-###"},{"name":"Germany","code":"+49","iso":"DE","flag":"https://cdn.kcak11.com/CountryFlags/countries/de.svg","mask":["###-###","(###)##-##","(###)##-###","(###)##-####","(###)###-####","(####)###-####"]},{"name":"Ghana","code":"+233","iso":"GH","flag":"https://cdn.kcak11.com/CountryFlags/countries/gh.svg","mask":"(###)###-###"},{"name":"Gibraltar","code":"+350","iso":"GI","flag":"https://cdn.kcak11.com/CountryFlags/countries/gi.svg","mask":"###-#####"},{"name":"Greece","code":"+30","iso":"GR","flag":"https://cdn.kcak11.com/CountryFlags/countries/gr.svg","mask":"(###)###-####"},{"name":"Greenland","code":"+299","iso":"GL","flag":"https://cdn.kcak11.com/CountryFlags/countries/gl.svg","mask":"##-##-##"},{"name":"Grenada","code":"+1","iso":"GD","flag":"https://cdn.kcak11.com/CountryFlags/countries/gd.svg","mask":"(473)###-####"},{"name":"Guadeloupe","code":"+590","iso":"GP","flag":"https://cdn.kcak11.com/CountryFlags/countries/gp.svg","mask":"(###)###-###"},{"name":"Guam","code":"+1","iso":"GU","flag":"https://cdn.kcak11.com/CountryFlags/countries/gu.svg","mask":"(671)###-####"},{"name":"Guatemala","code":"+502","iso":"GT","flag":"https://cdn.kcak11.com/CountryFlags/countries/gt.svg","mask":"#-###-####"},{"name":"Guernsey","code":"+44","iso":"GG","flag":"https://cdn.kcak11.com/CountryFlags/countries/gg.svg","mask":"(####)######"},{"name":"Guinea","code":"+224","iso":"GN","flag":"https://cdn.kcak11.com/CountryFlags/countries/gn.svg","mask":"##-###-###"},{"name":"Guinea-Bissau","code":"+245","iso":"GW","flag":"https://cdn.kcak11.com/CountryFlags/countries/gw.svg","mask":"#-######"},{"name":"Guyana","code":"+592","iso":"GY","flag":"https://cdn.kcak11.com/CountryFlags/countries/gy.svg","mask":"###-####"},{"name":"Haiti","code":"+509","iso":"HT","flag":"https://cdn.kcak11.com/CountryFlags/countries/ht.svg","mask":"##-##-####"},{"name":"Holy See (Vatican City State)","code":"+39","iso":"VA","flag":"https://cdn.kcak11.com/CountryFlags/countries/va.svg","mask":"06 698#####"},{"name":"Honduras","code":"+504","iso":"HN","flag":"https://cdn.kcak11.com/CountryFlags/countries/hn.svg","mask":"####-####"},{"name":"Hong Kong","code":"+852","iso":"HK","flag":"https://cdn.kcak11.com/CountryFlags/countries/hk.svg","mask":"####-####"},{"name":"Hungary","code":"+36","iso":"HU","flag":"https://cdn.kcak11.com/CountryFlags/countries/hu.svg","mask":"(###)###-###"},{"name":"Iceland","code":"+354","iso":"IS","flag":"https://cdn.kcak11.com/CountryFlags/countries/is.svg","mask":"###-####"},{"name":"India","code":"+91","iso":"IN","flag":"https://cdn.kcak11.com/CountryFlags/countries/in.svg","mask":"(####)###-###"},{"name":"Indonesia","code":"+62","iso":"ID","flag":"https://cdn.kcak11.com/CountryFlags/countries/id.svg","mask":["##-###-##","##-###-###","##-###-####","(8##)###-###","(8##)###-##-###"]},{"name":"Iran","code":"+98","iso":"IR","flag":"https://cdn.kcak11.com/CountryFlags/countries/ir.svg","mask":"(###)###-####"},{"name":"Iraq","code":"+964","iso":"IQ","flag":"https://cdn.kcak11.com/CountryFlags/countries/iq.svg","mask":"(###)###-####"},{"name":"Ireland","code":"+353","iso":"IE","flag":"https://cdn.kcak11.com/CountryFlags/countries/ie.svg","mask":"(###)###-###"},{"name":"Isle of Man","code":"+44","iso":"IM","flag":"https://cdn.kcak11.com/CountryFlags/countries/im.svg","mask":"(####)######"},{"name":"Israel","code":"+972","iso":"IL","flag":"https://cdn.kcak11.com/CountryFlags/countries/il.svg","mask":["#-###-####","5#-###-####"]},{"name":"Italy","code":"+39","iso":"IT","flag":"https://cdn.kcak11.com/CountryFlags/countries/it.svg","mask":"(###)####-###"},{"name":"Ivory Coast / Cote d\'Ivoire","code":"+225","iso":"CI","flag":"https://cdn.kcak11.com/CountryFlags/countries/ci.svg","mask":"##-###-###"},{"name":"Jamaica","code":"+1","iso":"JM","flag":"https://cdn.kcak11.com/CountryFlags/countries/jm.svg","mask":"(876)###-####"},{"name":"Japan","code":"+81","iso":"JP","flag":"https://cdn.kcak11.com/CountryFlags/countries/jp.svg","mask":["(###)###-###","##-####-####"]},{"name":"Jersey","code":"+44","iso":"JE","flag":"https://cdn.kcak11.com/CountryFlags/countries/je.svg","mask":"(####)####-######"},{"name":"Jordan","code":"+962","iso":"JO","flag":"https://cdn.kcak11.com/CountryFlags/countries/jo.svg","mask":"#-####-####"},{"name":"Kazakhstan","code":"+77","iso":"KZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/kz.svg","mask":["(6##)###-##-##","(7##)###-##-##"]},{"name":"Kenya","code":"+254","iso":"KE","flag":"https://cdn.kcak11.com/CountryFlags/countries/ke.svg","mask":"###-######"},{"name":"Kiribati","code":"+686","iso":"KI","flag":"https://cdn.kcak11.com/CountryFlags/countries/ki.svg","mask":"##-###"},{"name":"Korea, Democratic People\'s Republic of Korea","code":"+850","iso":"KP","flag":"https://cdn.kcak11.com/CountryFlags/countries/kp.svg","mask":["###-###","####-####","##-###-###","###-####-###","191-###-####","####-#############"]},{"name":"Korea, Republic of South Korea","code":"+82","iso":"KR","flag":"https://cdn.kcak11.com/CountryFlags/countries/kr.svg","mask":"##-###-####"},{"name":"Kosovo","code":"+383","iso":"XK","flag":"https://cdn.kcak11.com/CountryFlags/countries/xk.svg","mask":["##-###-###","###-###-###"]},{"name":"Kuwait","code":"+965","iso":"KW","flag":"https://cdn.kcak11.com/CountryFlags/countries/kw.svg","mask":"####-####"},{"name":"Kyrgyzstan","code":"+996","iso":"KG","flag":"https://cdn.kcak11.com/CountryFlags/countries/kg.svg","mask":"(###)###-###"},{"name":"Laos","code":"+856","iso":"LA","flag":"https://cdn.kcak11.com/CountryFlags/countries/la.svg","mask":["##-###-###","(20##)###-###"]},{"name":"Latvia","code":"+371","iso":"LV","flag":"https://cdn.kcak11.com/CountryFlags/countries/lv.svg","mask":"##-###-###"},{"name":"Lebanon","code":"+961","iso":"LB","flag":"https://cdn.kcak11.com/CountryFlags/countries/lb.svg","mask":["#-###-###","##-###-###"]},{"name":"Lesotho","code":"+266","iso":"LS","flag":"https://cdn.kcak11.com/CountryFlags/countries/ls.svg","mask":"#-###-####"},{"name":"Liberia","code":"+231","iso":"LR","flag":"https://cdn.kcak11.com/CountryFlags/countries/lr.svg","mask":"##-###-###"},{"name":"Libya","code":"+218","iso":"LY","flag":"https://cdn.kcak11.com/CountryFlags/countries/ly.svg","mask":["##-###-###","21-###-####"]},{"name":"Liechtenstein","code":"+423","iso":"LI","flag":"https://cdn.kcak11.com/CountryFlags/countries/li.svg","mask":"(###)###-####"},{"name":"Lithuania","code":"+370","iso":"LT","flag":"https://cdn.kcak11.com/CountryFlags/countries/lt.svg","mask":"(###)##-###"},{"name":"Luxembourg","code":"+352","iso":"LU","flag":"https://cdn.kcak11.com/CountryFlags/countries/lu.svg","mask":"(###)###-###"},{"name":"Macau","code":"+853","iso":"MO","flag":"https://cdn.kcak11.com/CountryFlags/countries/mo.svg","mask":"####-####"},{"name":"Madagascar","code":"+261","iso":"MG","flag":"https://cdn.kcak11.com/CountryFlags/countries/mg.svg","mask":"##-##-#####"},{"name":"Malawi","code":"+265","iso":"MW","flag":"https://cdn.kcak11.com/CountryFlags/countries/mw.svg","mask":["1-###-###","#-####-####"]},{"name":"Malaysia","code":"+60","iso":"MY","flag":"https://cdn.kcak11.com/CountryFlags/countries/my.svg","mask":["#-###-###","##-###-###","(###)###-###","##-###-####"]},{"name":"Maldives","code":"+960","iso":"MV","flag":"https://cdn.kcak11.com/CountryFlags/countries/mv.svg","mask":"###-####"},{"name":"Mali","code":"+223","iso":"ML","flag":"https://cdn.kcak11.com/CountryFlags/countries/ml.svg","mask":"##-##-####"},{"name":"Malta","code":"+356","iso":"MT","flag":"https://cdn.kcak11.com/CountryFlags/countries/mt.svg","mask":"####-####"},{"name":"Marshall Islands","code":"+692","iso":"MH","flag":"https://cdn.kcak11.com/CountryFlags/countries/mh.svg","mask":"###-####"},{"name":"Martinique","code":"+596","iso":"MQ","flag":"https://cdn.kcak11.com/CountryFlags/countries/mq.svg","mask":"(###)##-##-##"},{"name":"Mauritania","code":"+222","iso":"MR","flag":"https://cdn.kcak11.com/CountryFlags/countries/mr.svg","mask":"##-##-####"},{"name":"Mauritius","code":"+230","iso":"MU","flag":"https://cdn.kcak11.com/CountryFlags/countries/mu.svg","mask":"###-####"},{"name":"Mayotte","code":"+262","iso":"YT","flag":"https://cdn.kcak11.com/CountryFlags/countries/yt.svg","mask":"#####-####"},{"name":"Mexico","code":"+52","iso":"MX","flag":"https://cdn.kcak11.com/CountryFlags/countries/mx.svg","mask":["##-##-####","(###)###-####"]},{"name":"Micronesia, Federated States of Micronesia","code":"+691","iso":"FM","flag":"https://cdn.kcak11.com/CountryFlags/countries/fm.svg","mask":"###-####"},{"name":"Moldova","code":"+373","iso":"MD","flag":"https://cdn.kcak11.com/CountryFlags/countries/md.svg","mask":"####-####"},{"name":"Monaco","code":"+377","iso":"MC","flag":"https://cdn.kcak11.com/CountryFlags/countries/mc.svg","mask":["##-###-###","(###)###-###"]},{"name":"Mongolia","code":"+976","iso":"MN","flag":"https://cdn.kcak11.com/CountryFlags/countries/mn.svg","mask":"##-##-####"},{"name":"Montenegro","code":"+382","iso":"ME","flag":"https://cdn.kcak11.com/CountryFlags/countries/me.svg","mask":"##-###-###"},{"name":"Montserrat","code":"+1","iso":"MS","flag":"https://cdn.kcak11.com/CountryFlags/countries/ms.svg","mask":"(664)###-####"},{"name":"Morocco","code":"+212","iso":"MA","flag":"https://cdn.kcak11.com/CountryFlags/countries/ma.svg","mask":"##-####-###"},{"name":"Mozambique","code":"+258","iso":"MZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/mz.svg","mask":"##-###-###"},{"name":"Myanmar","code":"+95","iso":"MM","flag":"https://cdn.kcak11.com/CountryFlags/countries/mm.svg","mask":["###-###","#-###-###","##-###-###"]},{"name":"Namibia","code":"+264","iso":"NA","flag":"https://cdn.kcak11.com/CountryFlags/countries/na.svg","mask":"##-###-####"},{"name":"Nauru","code":"+674","iso":"NR","flag":"https://cdn.kcak11.com/CountryFlags/countries/nr.svg","mask":"###-####"},{"name":"Nepal","code":"+977","iso":"NP","flag":"https://cdn.kcak11.com/CountryFlags/countries/np.svg","mask":"##-###-###"},{"name":"Netherlands","code":"+31","iso":"NL","flag":"https://cdn.kcak11.com/CountryFlags/countries/nl.svg","mask":"##-###-####"},{"name":"New Caledonia","code":"+687","iso":"NC","flag":"https://cdn.kcak11.com/CountryFlags/countries/nc.svg","mask":"##-####"},{"name":"New Zealand","code":"+64","iso":"NZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/nz.svg","mask":["#-###-###","(###)###-###","(###)###-####"]},{"name":"Nicaragua","code":"+505","iso":"NI","flag":"https://cdn.kcak11.com/CountryFlags/countries/ni.svg","mask":"####-####"},{"name":"Niger","code":"+227","iso":"NE","flag":"https://cdn.kcak11.com/CountryFlags/countries/ne.svg","mask":"##-##-####"},{"name":"Nigeria","code":"+234","iso":"NG","flag":"https://cdn.kcak11.com/CountryFlags/countries/ng.svg","mask":["##-###-##","##-###-###","(###)###-####"]},{"name":"Niue","code":"+683","iso":"NU","flag":"https://cdn.kcak11.com/CountryFlags/countries/nu.svg","mask":"####"},{"name":"Norfolk Island","code":"+672","iso":"NF","flag":"https://cdn.kcak11.com/CountryFlags/countries/nf.svg","mask":"3##-###"},{"name":"North Macedonia","code":"+389","iso":"MK","flag":"https://cdn.kcak11.com/CountryFlags/countries/mk.svg","mask":"##-###-###"},{"name":"Northern Mariana Islands","code":"+1","iso":"MP","flag":"https://cdn.kcak11.com/CountryFlags/countries/mp.svg","mask":"(670)###-####"},{"name":"Norway","code":"+47","iso":"NO","flag":"https://cdn.kcak11.com/CountryFlags/countries/no.svg","mask":"(###)##-###"},{"name":"Oman","code":"+968","iso":"OM","flag":"https://cdn.kcak11.com/CountryFlags/countries/om.svg","mask":"##-###-###"},{"name":"Pakistan","code":"+92","iso":"PK","flag":"https://cdn.kcak11.com/CountryFlags/countries/pk.svg","mask":"(###)###-####"},{"name":"Palau","code":"+680","iso":"PW","flag":"https://cdn.kcak11.com/CountryFlags/countries/pw.svg","mask":"###-####"},{"name":"Palestine","code":"+970","iso":"PS","flag":"https://cdn.kcak11.com/CountryFlags/countries/ps.svg","mask":"##-###-####"},{"name":"Panama","code":"+507","iso":"PA","flag":"https://cdn.kcak11.com/CountryFlags/countries/pa.svg","mask":"###-####"},{"name":"Papua New Guinea","code":"+675","iso":"PG","flag":"https://cdn.kcak11.com/CountryFlags/countries/pg.svg","mask":"(###)##-###"},{"name":"Paraguay","code":"+595","iso":"PY","flag":"https://cdn.kcak11.com/CountryFlags/countries/py.svg","mask":"(###)###-###"},{"name":"Peru","code":"+51","iso":"PE","flag":"https://cdn.kcak11.com/CountryFlags/countries/pe.svg","mask":"(###)###-###"},{"name":"Philippines","code":"+63","iso":"PH","flag":"https://cdn.kcak11.com/CountryFlags/countries/ph.svg","mask":"(###)###-####"},{"name":"Pitcairn","code":"+870","iso":"PN","flag":"https://cdn.kcak11.com/CountryFlags/countries/pn.svg","mask":"###-###-###"},{"name":"Poland","code":"+48","iso":"PL","flag":"https://cdn.kcak11.com/CountryFlags/countries/pl.svg","mask":"(###)###-###"},{"name":"Portugal","code":"+351","iso":"PT","flag":"https://cdn.kcak11.com/CountryFlags/countries/pt.svg","mask":"##-###-####"},{"name":"Puerto Rico","code":"+1","iso":"PR","flag":"https://cdn.kcak11.com/CountryFlags/countries/pr.svg","mask":["(787) ### ####","(939) ### ####"]},{"name":"Qatar","code":"+974","iso":"QA","flag":"https://cdn.kcak11.com/CountryFlags/countries/qa.svg","mask":"####-####"},{"name":"Reunion","code":"+262","iso":"RE","flag":"https://cdn.kcak11.com/CountryFlags/countries/re.svg","mask":"#####-####"},{"name":"Romania","code":"+40","iso":"RO","flag":"https://cdn.kcak11.com/CountryFlags/countries/ro.svg","mask":"##-###-####"},{"name":"Russia","code":"+7","iso":"RU","flag":"https://cdn.kcak11.com/CountryFlags/countries/ru.svg","mask":"(###)###-##-##"},{"name":"Rwanda","code":"+250","iso":"RW","flag":"https://cdn.kcak11.com/CountryFlags/countries/rw.svg","mask":"(###)###-###"},{"name":"Saint Barthelemy","code":"+590","iso":"BL","flag":"https://cdn.kcak11.com/CountryFlags/countries/bl.svg","mask":"###-##-##-##"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","code":"+290","iso":"SH","flag":"https://cdn.kcak11.com/CountryFlags/countries/sh.svg","mask":"####"},{"name":"Saint Kitts and Nevis","code":"+1","iso":"KN","flag":"https://cdn.kcak11.com/CountryFlags/countries/kn.svg","mask":"(869)###-####"},{"name":"Saint Lucia","code":"+1","iso":"LC","flag":"https://cdn.kcak11.com/CountryFlags/countries/lc.svg","mask":"(758)###-####"},{"name":"Saint Martin","code":"+590","iso":"MF","flag":"https://cdn.kcak11.com/CountryFlags/countries/mf.svg","mask":"(###)###-###"},{"name":"Saint Pierre and Miquelon","code":"+508","iso":"PM","flag":"https://cdn.kcak11.com/CountryFlags/countries/pm.svg","mask":"##-####"},{"name":"Saint Vincent and the Grenadines","code":"+1","iso":"VC","flag":"https://cdn.kcak11.com/CountryFlags/countries/vc.svg","mask":"(784)###-####"},{"name":"Samoa","code":"+685","iso":"WS","flag":"https://cdn.kcak11.com/CountryFlags/countries/ws.svg","mask":"##-####"},{"name":"San Marino","code":"+378","iso":"SM","flag":"https://cdn.kcak11.com/CountryFlags/countries/sm.svg","mask":"####-######"},{"name":"Sao Tome and Principe","code":"+239","iso":"ST","flag":"https://cdn.kcak11.com/CountryFlags/countries/st.svg","mask":"##-#####"},{"name":"Saudi Arabia","code":"+966","iso":"SA","flag":"https://cdn.kcak11.com/CountryFlags/countries/sa.svg","mask":["#-###-####","5#-####-####"]},{"name":"Senegal","code":"+221","iso":"SN","flag":"https://cdn.kcak11.com/CountryFlags/countries/sn.svg","mask":"##-###-####"},{"name":"Serbia","code":"+381","iso":"RS","flag":"https://cdn.kcak11.com/CountryFlags/countries/rs.svg","mask":"##-###-####"},{"name":"Seychelles","code":"+248","iso":"SC","flag":"https://cdn.kcak11.com/CountryFlags/countries/sc.svg","mask":"#-###-###"},{"name":"Sierra Leone","code":"+232","iso":"SL","flag":"https://cdn.kcak11.com/CountryFlags/countries/sl.svg","mask":"##-######"},{"name":"Singapore","code":"+65","iso":"SG","flag":"https://cdn.kcak11.com/CountryFlags/countries/sg.svg","mask":"####-####"},{"name":"Sint Maarten","code":"+1","iso":"SX","flag":"https://cdn.kcak11.com/CountryFlags/countries/sx.svg","mask":"(721)###-####"},{"name":"Slovakia","code":"+421","iso":"SK","flag":"https://cdn.kcak11.com/CountryFlags/countries/sk.svg","mask":"(###)###-###"},{"name":"Slovenia","code":"+386","iso":"SI","flag":"https://cdn.kcak11.com/CountryFlags/countries/si.svg","mask":"##-###-###"},{"name":"Solomon Islands","code":"+677","iso":"SB","flag":"https://cdn.kcak11.com/CountryFlags/countries/sb.svg","mask":["#####","###-####"]},{"name":"Somalia","code":"+252","iso":"SO","flag":"https://cdn.kcak11.com/CountryFlags/countries/so.svg","mask":["#-###-###","##-###-###"]},{"name":"South Africa","code":"+27","iso":"ZA","flag":"https://cdn.kcak11.com/CountryFlags/countries/za.svg","mask":"##-###-####"},{"name":"South Georgia and the South Sandwich Islands","code":"+500","iso":"GS","flag":"https://cdn.kcak11.com/CountryFlags/countries/gs.svg","mask":"#####"},{"name":"South Sudan","code":"+211","iso":"SS","flag":"https://cdn.kcak11.com/CountryFlags/countries/ss.svg","mask":"##-###-####"},{"name":"Spain","code":"+34","iso":"ES","flag":"https://cdn.kcak11.com/CountryFlags/countries/es.svg","mask":"(###)###-###"},{"name":"Sri Lanka","code":"+94","iso":"LK","flag":"https://cdn.kcak11.com/CountryFlags/countries/lk.svg","mask":"##-###-####"},{"name":"Sudan","code":"+249","iso":"SD","flag":"https://cdn.kcak11.com/CountryFlags/countries/sd.svg","mask":"##-###-####"},{"name":"Suriname","code":"+597","iso":"SR","flag":"https://cdn.kcak11.com/CountryFlags/countries/sr.svg","mask":["###-###","###-####"]},{"name":"Svalbard and Jan Mayen","code":"+47","iso":"SJ","flag":"https://cdn.kcak11.com/CountryFlags/countries/sj.svg","mask":"(###)##-###"},{"name":"Sweden","code":"+46","iso":"SE","flag":"https://cdn.kcak11.com/CountryFlags/countries/se.svg","mask":"##-###-####"},{"name":"Switzerland","code":"+41","iso":"CH","flag":"https://cdn.kcak11.com/CountryFlags/countries/ch.svg","mask":"##-###-####"},{"name":"Syrian Arab Republic","code":"+963","iso":"SY","flag":"https://cdn.kcak11.com/CountryFlags/countries/sy.svg","mask":"##-####-###"},{"name":"Taiwan","code":"+886","iso":"TW","flag":"https://cdn.kcak11.com/CountryFlags/countries/tw.svg","mask":["####-####","#-####-####"]},{"name":"Tajikistan","code":"+992","iso":"TJ","flag":"https://cdn.kcak11.com/CountryFlags/countries/tj.svg","mask":"##-###-####"},{"name":"Tanzania, United Republic of Tanzania","code":"+255","iso":"TZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/tz.svg","mask":"##-###-####"},{"name":"Thailand","code":"+66","iso":"TH","flag":"https://cdn.kcak11.com/CountryFlags/countries/th.svg","mask":["##-###-###","##-###-####"]},{"name":"Timor-Leste","code":"+670","iso":"TL","flag":"https://cdn.kcak11.com/CountryFlags/countries/tl.svg","mask":["###-####","77#-#####","78#-#####"]},{"name":"Togo","code":"+228","iso":"TG","flag":"https://cdn.kcak11.com/CountryFlags/countries/tg.svg","mask":"##-###-###"},{"name":"Tokelau","code":"+690","iso":"TK","flag":"https://cdn.kcak11.com/CountryFlags/countries/tk.svg","mask":"####"},{"name":"Tonga","code":"+676","iso":"TO","flag":"https://cdn.kcak11.com/CountryFlags/countries/to.svg","mask":"#####"},{"name":"Trinidad and Tobago","code":"+1","iso":"TT","flag":"https://cdn.kcak11.com/CountryFlags/countries/tt.svg","mask":"(868)###-####"},{"name":"Tunisia","code":"+216","iso":"TN","flag":"https://cdn.kcak11.com/CountryFlags/countries/tn.svg","mask":"##-###-###"},{"name":"Turkey","code":"+90","iso":"TR","flag":"https://cdn.kcak11.com/CountryFlags/countries/tr.svg","mask":"(###)###-####"},{"name":"Turkmenistan","code":"+993","iso":"TM","flag":"https://cdn.kcak11.com/CountryFlags/countries/tm.svg","mask":"#-###-####"},{"name":"Turks and Caicos Islands","code":"+1","iso":"TC","flag":"https://cdn.kcak11.com/CountryFlags/countries/tc.svg","mask":"(249)###-###"},{"name":"Tuvalu","code":"+688","iso":"TV","flag":"https://cdn.kcak11.com/CountryFlags/countries/tv.svg","mask":["2####","90####"]},{"name":"Uganda","code":"+256","iso":"UG","flag":"https://cdn.kcak11.com/CountryFlags/countries/ug.svg","mask":"(###)###-###"},{"name":"Ukraine","code":"+380","iso":"UA","flag":"https://cdn.kcak11.com/CountryFlags/countries/ua.svg","mask":"(##)###-##-##"},{"name":"United Arab Emirates","code":"+971","iso":"AE","flag":"https://cdn.kcak11.com/CountryFlags/countries/ae.svg","mask":["#-###-####","5#-###-####"]},{"name":"United Kingdom","code":"+44","iso":"GB","flag":"https://cdn.kcak11.com/CountryFlags/countries/gb.svg","mask":"##-####-####"},{"name":"United States","code":"+1","iso":"US","flag":"https://cdn.kcak11.com/CountryFlags/countries/us.svg","mask":"(###)###-####"},{"name":"Uruguay","code":"+598","iso":"UY","flag":"https://cdn.kcak11.com/CountryFlags/countries/uy.svg","mask":"#-###-##-##"},{"name":"Uzbekistan","code":"+998","iso":"UZ","flag":"https://cdn.kcak11.com/CountryFlags/countries/uz.svg","mask":"##-###-####"},{"name":"Vanuatu","code":"+678","iso":"VU","flag":"https://cdn.kcak11.com/CountryFlags/countries/vu.svg","mask":["#####","##-#####"]},{"name":"Venezuela, Bolivarian Republic of Venezuela","code":"+58","iso":"VE","flag":"https://cdn.kcak11.com/CountryFlags/countries/ve.svg","mask":"(###)###-####"},{"name":"Vietnam","code":"+84","iso":"VN","flag":"https://cdn.kcak11.com/CountryFlags/countries/vn.svg","mask":["##-####-###","(###)####-###"]},{"name":"Virgin Islands, British","code":"+1","iso":"VG","flag":"https://cdn.kcak11.com/CountryFlags/countries/vg.svg","mask":"(284)###-####"},{"name":"Virgin Islands, U.S.","code":"+1","iso":"VI","flag":"https://cdn.kcak11.com/CountryFlags/countries/vi.svg","mask":"(340)###-####"},{"name":"Wallis and Futuna","code":"+681","iso":"WF","flag":"https://cdn.kcak11.com/CountryFlags/countries/wf.svg","mask":"##-####"},{"name":"Yemen","code":"+967","iso":"YE","flag":"https://cdn.kcak11.com/CountryFlags/countries/ye.svg","mask":["#-###-###","##-###-###","###-###-###"]},{"name":"Zambia","code":"+260","iso":"ZM","flag":"https://cdn.kcak11.com/CountryFlags/countries/zm.svg","mask":"##-###-####"},{"name":"Zimbabwe","code":"+263","iso":"ZW","flag":"https://cdn.kcak11.com/CountryFlags/countries/zw.svg","mask":"#-######"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
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
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
/* harmony import */ var _components_forms_Input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forms/Input.js */ "./src/components/forms/Input.js");
/* harmony import */ var _components_forms_Button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms/Button.js */ "./src/components/forms/Button.js");
/* harmony import */ var _components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal/Modal.js */ "./src/components/modal/Modal.js");
/* harmony import */ var _requests_request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests/request.js */ "./src/requests/request.js");
/* harmony import */ var _components_forms_Phone_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/forms/Phone.js */ "./src/components/forms/Phone.js");








const userName = new _components_forms_Input_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  parent: "block",
  tag: "input",
  text: "Name",
  type: "text",
  placeholder: "user name",
  classInput: "input",
  classLabel: "label",
  minSymbols: _constants_js__WEBPACK_IMPORTED_MODULE_1__.LOGIN.minSymbols,
  maxSymbols: _constants_js__WEBPACK_IMPORTED_MODULE_1__.LOGIN.maxSymbols,
  regx: _constants_js__WEBPACK_IMPORTED_MODULE_1__.LOGIN.regx,
  errorText: "Invalid name",
});

const userPhone = new _components_forms_Phone_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  parent: "block",
  tag: "input",
  text: "Phone",
  type: "text",
  placeholder: "user phone",
  classInput: "input",
  classLabel: "label",
  regx: _constants_js__WEBPACK_IMPORTED_MODULE_1__.PHONE.regx,
  errorText: "Invalid phone",
});

const userEmail = new _components_forms_Input_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  parent: "block",
  tag: "input",
  text: "E-mail",
  type: "email",
  placeholder: "user e-mail",
  classInput: "input",
  classLabel: "label",
  minSymbols: _constants_js__WEBPACK_IMPORTED_MODULE_1__.MAIL.minSymbols,
  maxSymbols: _constants_js__WEBPACK_IMPORTED_MODULE_1__.MAIL.maxSymbols,
  regx: _constants_js__WEBPACK_IMPORTED_MODULE_1__.MAIL.regx,
  errorText: "Invalid e-mail",
});

const userMessage = new _components_forms_Input_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  parent: "block",
  tag: "textarea",
  text: "Message",
  placeholder: "user message",
  classInput: "input",
  classLabel: "label",
  minSymbols: _constants_js__WEBPACK_IMPORTED_MODULE_1__.MESSAGE.minSymbols,
  maxSymbols: _constants_js__WEBPACK_IMPORTED_MODULE_1__.MESSAGE.maxSymbols,
  regx: _constants_js__WEBPACK_IMPORTED_MODULE_1__.MESSAGE.regx,
  errorText: "Invalid message",
});

const sendRequest = async () => {
  const name = userName.validation();
  const email = userEmail.validation();
  const phone = userPhone.validation();
  const message = userMessage.validation();
  const modalMessage = document.getElementById("modal");
  const fieldMessage = document.querySelector(".modal");

  if (name && email && phone && message) {
    const serverRequest = await (0,_requests_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])({name: name, email: email, phone: phone, message: message});
    if (serverRequest.status === "success") {
      fieldMessage.textContent = serverRequest.msg;
      userPhone.resetValue();
      userMessage.resetValue();
      userName.resetValue();
      userEmail.resetValue();
    } else {
      let string = "";
      for (let key in serverRequest.fields) {
        string = string + key + " - " + serverRequest.fields[key] + ",";
      }
      fieldMessage.textContent = string;
    }
    modalMessage.checked = true;
    modal.hiddenScroll(true);
  }
};

const button = new _components_forms_Button_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  parent: "block",
  type: "button",
  class: "button",
  text: "Registration",
  onClick: () => sendRequest(),
});

const modal = new _components_modal_Modal_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  parent: "body",
  classInput: "modalInput",
  text: "Hello Dear Friend",
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map