(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: login, addToDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToDom\", function() { return addToDom; });\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/users.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst login = (username, password) => {\r\n    const user = _users__WEBPACK_IMPORTED_MODULE_0__[\"default\"][username];\r\n    if(user && user.password === password){\r\n        return 'User logged in as:' + user.name;\r\n    }\r\n    return 'Invalid username and/or password';\r\n}\r\n\r\nconst addToDom = (type, text, className='red') => {\r\n    const element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(`<${type}>`,{\r\n        text,\r\n        class: className\r\n    });\r\n\r\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').append(element);\r\n};\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    Peter: {\r\n        password: 'GNC',\r\n        name: 'Peter Wu'\r\n    },\r\n    Ruby: {\r\n        password: 'bobo',\r\n        name: 'Ruby Wang'\r\n    },\r\n    Brandon: {\r\n        password: 'SCP',\r\n        name: 'Brandon Wu'\r\n    },\r\n    DietCoke: {\r\n        password: 'soda',\r\n        name: 'Thirsty Drink'\r\n    }\r\n\r\n});\n\n//# sourceURL=webpack:///./src/users.js?");

/***/ })

}]);