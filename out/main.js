/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/company-container.ts":
/*!**********************************!*\
  !*** ./src/company-container.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompanyContainer = void 0;

var CompanyContainer = function CompanyContainer(company) {
  return "\n    <div>\n        <p>company name " + company.name + "</p>\n        <p>company location " + company.location + "</p>\n    </div>\n";
};

exports.CompanyContainer = CompanyContainer;

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var user_container_1 = __webpack_require__(/*! ./user-container */ "./src/user-container.ts");

exports.default = function () {
  document.getElementById("app").innerHTML = user_container_1.UserContainer({
    birthday: '5-9-1994',
    company: {
      location: 'some street',
      name: 'some name'
    },
    companyId: 22,
    name: 'User name here'
  });
}();

/***/ }),

/***/ "./src/user-container.ts":
/*!*******************************!*\
  !*** ./src/user-container.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UserContainer = void 0;

var company_container_1 = __webpack_require__(/*! ./company-container */ "./src/company-container.ts");

window.onClickHandler = function onClickHandler(event) {
  console.log(event);
};

var UserContainer = function UserContainer(user) {
  return "\n        <a href=\"#\" onclick=\"onClickHandler(event)\">" + (user === null || user === void 0 ? void 0 : user.name) + "</a>\n        <div class=\"user-details hide\">\n            <p>Birthday: " + user.birthday + "</p>\n            <p><img src=\"\" width=\"100px\"></p>\n            " + company_container_1.CompanyContainer(user.company) + "\n        </div>\n        ";
};

exports.UserContainer = UserContainer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map