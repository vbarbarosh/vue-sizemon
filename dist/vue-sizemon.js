/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/browser.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/browser.js":
/*!************************!*\
  !*** ./src/browser.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_sizemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-sizemon */ "./src/vue-sizemon.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('vue-sizemon', _vue_sizemon__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/vue-sizemon.js":
/*!****************************!*\
  !*** ./src/vue-sizemon.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var vue_sizemon = {
  props: ['value'],
  // template: '<iframe v-on:load="on_iframe_load" src="about:blank" style="position: absolute; top: -999999px; left: -999999px; width: 100%; height: 100%;" />',
  render: function render(createElement) {
    return createElement('iframe', {
      on: {
        load: this.on_iframe_load
      },
      attrs: {
        src: 'about:blank'
      },
      style: 'position: absolute; top: -999999px; left: -999999px; width: 100%; height: 100%;'
    });
  },
  methods: {
    on_iframe_load: function on_iframe_load() {
      this.$el.contentWindow.onresize = this.update;
      this.update();
    },
    update: function update() {
      if (!this.$el) {
        return;
      }

      var w = this.$el.offsetWidth;
      var h = this.$el.offsetHeight;
      this.$emit('input', {
        w: w,
        h: h
      }); // // Sometimes reading sizes directly from iframe
      // // produces wrong numbers: 299.2x150.4 instead of 300x150
      // // Screen size: 1920x1080
      // // Screen scale: 125%
      // // Container size: 300x150
      // try {
      //     const {top, left, right, bottom} = this.$el.offsetParent.getBoundingClientRect();
      //     this.$emit('input', {w: right - left, h: bottom - top});
      // }
      // catch (error) {
      //     const {top, left, right, bottom} = this.$el.getBoundingClientRect();
      //     this.$emit('input', {w: right - left, h: bottom - top});
      // }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (vue_sizemon);

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });