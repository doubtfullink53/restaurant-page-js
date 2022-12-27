"use strict";
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

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\n\nfunction contact() {\n  content.innerHTML = \"\";\n  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navBar)();\n\n  content.innerHTML = \"\"\n  ;(0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navBar)();\n\n\n  const main = document.createElement(\"div\");\n  main.setAttribute(\"class\", \"mainsection\")\n  content.appendChild(main);\n\n  \n  const homeSection = document.createElement(\"div\");\n  homeSection.setAttribute(\"class\", \"homesection-contact\")\n  main.appendChild(homeSection)\n\n  const restaurantHeader = document.createElement(\"div\")\n  restaurantHeader.setAttribute(\"class\", \"restaurantheader-top\")\n  restaurantHeader.textContent = \"Ashes\"\n  homeSection.appendChild(restaurantHeader)\n\n  const contactHeader = document.createElement(\"div\")\n  contactHeader.setAttribute(\"class\", \"contactheader\")\n  contactHeader.textContent = \"Phone Number\"\n  homeSection.appendChild(contactHeader)\n\n  const contactNumber = document.createElement(\"div\")\n  contactNumber.setAttribute(\"class\", \"contactheader\")\n  contactNumber.textContent = \"#888-888-8888\"\n  homeSection.appendChild(contactNumber)\n\n\n  const addressHeader = document.createElement(\"div\")\n  addressHeader.setAttribute(\"class\", \"addressheader\")\n  addressHeader.textContent = \"Address\"\n  homeSection.appendChild(addressHeader)\n\n  const addressNumber = document.createElement(\"div\")\n  addressNumber.setAttribute(\"class\", \"address\")\n  addressNumber.textContent = \"8960 Bridle Street Bishop, GA 30621\"\n  homeSection.appendChild(addressNumber)\n\n\n\n\n\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\n\n\nfunction home(){\n    content.innerHTML = \"\";\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navBar)()\n    const main = document.createElement(\"div\");\n    main.setAttribute(\"class\", \"mainsection\")\n    content.appendChild(main);\n\n    \n    const homeSection = document.createElement(\"div\");\n    homeSection.setAttribute(\"class\", \"homesection\")\n    main.appendChild(homeSection)\n\n\n\n\n    const restaurantHeader = document.createElement(\"div\")\n    restaurantHeader.setAttribute(\"class\", \"restaurantheader\")\n    restaurantHeader.innerHTML = \"<h1> Ashes </h1>\"\n    homeSection.appendChild(restaurantHeader)\n\n    const aboutRestaurant = document.createElement(\"div\")\n    aboutRestaurant.setAttribute(\"class\", \"aboutrestaurant\")\n    aboutRestaurant.textContent = \"Lorem ipsum dolor sit amet.\"\n    restaurantHeader.appendChild(aboutRestaurant)\n\n    \n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n// import backgroundImg  from \"./background.jpg\"\n\n\n\n\n(function createContentDiv() {\n    const background = document.createElement(\"div\");\n    background.id = \"background-img\";\n    document.body.appendChild(background)\n\n    const content = document.createElement(\"div\");\n    content.id = \"content\";\n\n    background.appendChild(content);\n  \n   \n})();\n\n\n\n\n\n(0,_navbar__WEBPACK_IMPORTED_MODULE_1__.navBar)();\n\n(0,_home__WEBPACK_IMPORTED_MODULE_2__.home)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.png */ \"./src/menu.png\");\n\n\n\nfunction menu(){\n   content.innerHTML = \"\"\n    ;(0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navBar)();\n\n\n    const main = document.createElement(\"div\");\n    main.setAttribute(\"class\", \"mainsection\")\n    content.appendChild(main);\n\n    \n    const homeSection = document.createElement(\"div\");\n    homeSection.setAttribute(\"class\", \"homesection\")\n    main.appendChild(homeSection)\n\n\n\n\n    const restaurantHeader = document.createElement(\"div\")\n    restaurantHeader.setAttribute(\"class\", \"restaurantheader\")\n    restaurantHeader.textContent = \"Ashes\"\n    homeSection.appendChild(restaurantHeader)\n\n\n\n    const myIcon = new Image();\n    myIcon.setAttribute(\"class\", \"menu-img\")\n    myIcon.src = _menu_png__WEBPACK_IMPORTED_MODULE_1__;\n  \n    homeSection.appendChild(myIcon);\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBar\": () => (/* binding */ navBar)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nlet homeClicked = true;\nlet contactClicked = false;\nlet menuClicked = false;\n    \n\nfunction navBar() {\n  const navBar = document.createElement(\"nav\");\n  navBar.setAttribute(\"class\", \"navbar\");\n\n  content.appendChild(navBar);\n\n  const navLinks = document.createElement(\"ul\");\n  navLinks.setAttribute(\"class\", \"nav-links\");\n  navBar.appendChild(navLinks);\n\n  const navText = [\"Home\", \"Menu\", \"Contact\"];\n\n\n    \n  for (var i = 0; i < navText.length; i += 1) {\n    const navItems = document.createElement(\"li\");\n    navItems.setAttribute(\"class\", \"nav-item\");\n    navLinks.appendChild(navItems);\n\n    const navA = document.createElement(\"a\");\n    // navA.setAttribute(\"onclick\", \"uClicked()\")\n    navA.id = `${navText[i]}`;\n    navA.innerHTML = navText[i];\n    navItems.appendChild(navA);\n\n   \n\n\n    navA.addEventListener(\"click\", function handleClick(event) {\n      // console.log(navA.id);\n      if (navA.id == \"Home\" && homeClicked == false) {\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\n        homeClicked = true;\n        menuClicked = false;\n        contactClicked = false;\n      }  \n      if (navA.id == \"Menu\" && menuClicked == false) {\n        console.log(\"menu  Clikced\");\n        menuClicked = true;\n        \n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();\n        homeClicked = false;\n        contactClicked = false;\n        \n      }\n       if (navA.id == \"Contact\" && contactClicked == false) {\n        console.log(\"contact Clikced\");\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contact)();\n        homeClicked = false; \n        menuClicked = false;\n        contactClicked = true;\n      }\n    }), {once: true};\n  }\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

/***/ }),

/***/ "./src/menu.png":
/*!**********************!*\
  !*** ./src/menu.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b189fbb37f199b91a66b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/menu.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);