/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logToConsole\": () => (/* binding */ logToConsole)\n/* harmony export */ });\n\nfunction logToConsole(){\n    console.log(\"test\")\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\n\n\n\n\n\n\n\n(function createContentDiv() {\n    const content = document.createElement(\"div\")\n    content.id = \"content\"\n\n    document.body.appendChild(content)\n   \n\n  \n\n\n})();\n\n(0,_navbar__WEBPACK_IMPORTED_MODULE_2__.navBar)()\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

eval("\n// export function logToConsole(){\n//     document.getElementById()\n// }\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nfunction navBar() {\n\n\n    \n    const navBar  = document.createElement(\"nav\")\n    navBar.setAttribute(\"class\", \"navbar\")\n\n    content.appendChild(navBar)\n\n\n    const navLinks = document.createElement(\"ul\")\n    navLinks.setAttribute(\"class\", \"nav-links\")\n    navBar.appendChild(navLinks)\n\n\n    const navText = [\"Home\", \"Menu\", \"Contact\"];\n\n    for(var i = 0; i < navText.length; i += 1) {\n        const navItems = document.createElement(\"li\")\n        navItems.setAttribute(\"class\", \"nav-item\")\n        navLinks.appendChild(navItems)\n\n        const navA = document.createElement(\"a\")\n        navA.setAttribute(\"onclick\", \"openPage('Home', this, 'red')\")\n        navA.innerHTML = navText[i];\n        navItems.appendChild(navA)\n    }\n\n\n\n    \n\n    console.log()\n\n    // const navItems = document.createElement(\"li\")\n    // navItems.setAttribute(\"class\", \"nav-items\")\n    // navLinks.appendChild(navItems)\n\n    // const navA = document.createElement(\"a\")\n    // navA.setAttribute(\"href\", \"#home\")\n    // navItems.appendChild(navA)\n\n}\n\nfunction openPage(pageName,elmnt,color) {\n        var i, tabcontent, tablinks;\n        tabcontent = document.getElementsByClassName(\"tabcontent\");\n        for (i = 0; i < tabcontent.length; i++) {\n          tabcontent[i].style.display = \"none\";\n        }\n        tablinks = document.getElementsByClassName(\"tablink\");\n        for (i = 0; i < tablinks.length; i++) {\n          tablinks[i].style.backgroundColor = \"\";\n        }\n        document.getElementById(pageName).style.display = \"block\";\n        elmnt.style.backgroundColor = color;\n      }\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);