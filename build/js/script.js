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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/accordion.js":
/*!********************************!*\
  !*** ./source/js/accordion.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navigationBlock = document.querySelector('.navigation');\nvar addressBlock = document.querySelector('.address');\nvar accButton = document.querySelectorAll('.footer-button');\nvar accHeaders = document.querySelector('.footer-top').querySelectorAll('h2'); // Удаление класса no-js\n\naddressBlock.classList.remove('no-js');\nnavigationBlock.classList.remove('no-js'); // Аккордион\n\naccHeaders.forEach(function (item) {\n  item.addEventListener('click', function () {\n    var block = item.closest('section');\n\n    if (block.classList.contains('accordion-open')) {\n      block.classList.remove('accordion-open');\n    } else {\n      navigationBlock.classList.remove('accordion-open');\n      addressBlock.classList.remove('accordion-open');\n      block.classList.add('accordion-open');\n    }\n  });\n}); // Аккордион\n\naccButton.forEach(function (item) {\n  item.addEventListener('click', function () {\n    var block = item.closest('section');\n\n    if (block.classList.contains('accordion-open')) {\n      block.classList.remove('accordion-open');\n    } else {\n      navigationBlock.classList.remove('accordion-open');\n      addressBlock.classList.remove('accordion-open');\n      block.classList.add('accordion-open');\n    }\n  });\n});\n\n//# sourceURL=webpack:///./source/js/accordion.js?");

/***/ }),

/***/ "./source/js/form.js":
/*!***************************!*\
  !*** ./source/js/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar formBlock = document.querySelector('.form-column');\nvar form = formBlock.querySelector('form');\nvar formName = form.querySelector('#form-name');\nvar formPhone = form.querySelector('#form-phone');\nvar formText = form.querySelector('#form-comment');\nvar smoothLinks = document.querySelectorAll('a[href^=\"#\"]'); // Валидация текстового поля.\n\nformName.addEventListener('input', function () {\n  this.value = this.value.replace(/[\\d]/g, '');\n  formName.reportValidity();\n}); // Маска для поля  - телефон\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  function setCursorPosition(pos, elem) {\n    elem.focus();\n\n    if (elem.setSelectionRange) {\n      elem.setSelectionRange(pos, pos);\n    } else if (elem.createTextRange) {\n      var range = elem.createTextRange();\n      range.collapse(true);\n      range.moveEnd('character', pos);\n      range.moveStart('character', pos);\n      range.select();\n    }\n  }\n\n  function mask(event) {\n    var matrix = '+7 (___) ___-__-__';\n    var i = 0;\n    var def = matrix.replace(/\\D/g, '');\n    var val = this.value.replace(/\\D/g, '');\n\n    if (def.length >= val.length) {\n      val = def;\n    }\n\n    this.value = matrix.replace(/./g, function (a) {\n      if (/[_\\d]/.test(a) && i < val.length) {\n        return val.charAt(i++);\n      } else if (i >= val.length) {\n        return '';\n      } else {\n        return a;\n      }\n    });\n\n    if (event.type === 'blur') {\n      if (this.value.length === 2) {\n        this.value = '';\n      }\n    } else {\n      setCursorPosition(this.value.length, this);\n    }\n  }\n\n  formPhone.addEventListener('input', mask, false);\n  formPhone.addEventListener('focus', mask, false);\n  formPhone.addEventListener('blur', mask, false);\n}); // Отправка формы\n\nform.addEventListener('submit', function (evt) {\n  if (!formName.value || !formPhone.value || !formText.value) {\n    evt.preventDefault;\n  }\n\n  localStorage.setItem('name-form', formName.value);\n  localStorage.setItem('tel-form', formPhone.value);\n  localStorage.setItem('message-form', formText.value);\n  form.reset();\n}); // Скролл\n\nvar _iterator = _createForOfIteratorHelper(smoothLinks),\n    _step;\n\ntry {\n  var _loop = function _loop() {\n    var smoothLink = _step.value;\n    smoothLink.addEventListener('click', function (e) {\n      e.preventDefault();\n      var id = smoothLink.getAttribute('href');\n      document.querySelector(id).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    });\n  };\n\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\n//# sourceURL=webpack:///./source/js/form.js?");

/***/ }),

/***/ "./source/js/popup.js":
/*!****************************!*\
  !*** ./source/js/popup.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var popupOpen = document.querySelector('.header-nav__button');\nvar popupOverlay = document.querySelector('.popup-wrapper');\nvar popupClose = document.querySelector('.popup-close');\nvar popupForm = popupOverlay.querySelector('form');\nvar popupName = popupForm.querySelector('#name');\nvar popupPhone = popupForm.querySelector('#phone');\nvar popupText = popupForm.querySelector('#comment');\nvar body = document.querySelector('body'); // Проверка - поддерживает ли браузер запись в LocalStorage //\n\nvar isStorageSupport = true;\nvar storage = '';\n\ntry {\n  storage = localStorage.getItem('name');\n} catch (err) {\n  isStorageSupport = false;\n} // Открытие и модального окна установка фокуса в поле\n\n\npopupOpen.addEventListener('click', function (evt) {\n  evt.preventDefault;\n  popupOverlay.classList.add('popup-wrapper--overlay');\n  body.classList.add('no-scroll');\n\n  if (storage) {\n    popupName.focus();\n    popupName.select();\n  }\n}); // Запись в LocalStorage //\n\npopupForm.addEventListener('submit', function (evt) {\n  if (!popupName.value || !popupPhone.value || !popupText.value) {\n    evt.preventDefault;\n  }\n\n  if (isStorageSupport) {\n    localStorage.setItem('name', popupName.value);\n    localStorage.setItem('tel', popupPhone.value);\n    localStorage.setItem('message', popupText.value);\n  }\n\n  popupForm.reset();\n}); //Валидация текстового поля.\n\npopupName.addEventListener('input', function () {\n  this.value = this.value.replace(/[\\d]/g, '');\n  popupName.reportValidity();\n}); // Закрытие модального окна / нажатие кнопки\n\npopupClose.addEventListener('click', function (evt) {\n  evt.preventDefault;\n  popupOverlay.classList.remove('popup-wrapper--overlay');\n  body.classList.remove('no-scroll');\n}); // Закрытие модального окна / клавишей Esc\n\ndocument.addEventListener('keydown', function (evt) {\n  if (evt.key === 'Escape' || evt.key === 'Esc') {\n    popupOverlay.classList.remove('popup-wrapper--overlay');\n  }\n}); // Закрытие модального окна / клик вне модального окна\n\ndocument.addEventListener('click', function (evt) {\n  if (evt.target === popupOverlay) {\n    popupOverlay.classList.remove('popup-wrapper--overlay');\n  }\n}); // Маска для поля  - телефон\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  function setCursorPosition(pos, elem) {\n    elem.focus();\n\n    if (elem.setSelectionRange) {\n      elem.setSelectionRange(pos, pos);\n    } else if (elem.createTextRange) {\n      var range = elem.createTextRange();\n      range.collapse(true);\n      range.moveEnd('character', pos);\n      range.moveStart('character', pos);\n      range.select();\n    }\n  }\n\n  function mask(event) {\n    var matrix = '+7 (___) ___-__-__';\n    var i = 0;\n    var def = matrix.replace(/\\D/g, '');\n    var val = this.value.replace(/\\D/g, '');\n\n    if (def.length >= val.length) {\n      val = def;\n    }\n\n    this.value = matrix.replace(/./g, function (a) {\n      if (/[_\\d]/.test(a) && i < val.length) {\n        return val.charAt(i++);\n      } else if (i >= val.length) {\n        return '';\n      } else {\n        return a;\n      }\n    });\n\n    if (event.type === 'blur') {\n      if (this.value.length === 2) {\n        this.value = '';\n      }\n    } else {\n      setCursorPosition(this.value.length, this);\n    }\n  }\n\n  popupPhone.addEventListener('input', mask, false);\n  popupPhone.addEventListener('focus', mask, false);\n  popupPhone.addEventListener('blur', mask, false);\n});\n\n//# sourceURL=webpack:///./source/js/popup.js?");

/***/ }),

/***/ "./source/js/script.js":
/*!*****************************!*\
  !*** ./source/js/script.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./source/js/popup.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_popup_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ \"./source/js/form.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_form_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.js */ \"./source/js/accordion.js\");\n/* harmony import */ var _accordion_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_accordion_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./source/js/script.js?");

/***/ })

/******/ });