module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0d26":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\n * Quill Editor v2.0.2\n * https://quilljs.com\n * Copyright (c) 2017-2024, Slab\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */.ql-container{box-sizing:border-box;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;margin:0;position:relative}.ql-container.ql-disabled .ql-tooltip{visibility:hidden}.ql-container:not(.ql-disabled) li[data-list=checked]>.ql-ui,.ql-container:not(.ql-disabled) li[data-list=unchecked]>.ql-ui{cursor:pointer}.ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}.ql-clipboard p{margin:0;padding:0}.ql-editor{box-sizing:border-box;counter-reset:list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:12px 15px;-o-tab-size:4;tab-size:4;-moz-tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word}.ql-editor>*{cursor:text}.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor ol,.ql-editor p,.ql-editor pre{margin:0;padding:0}@supports (counter-set:none){.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor p{counter-set:list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6,.ql-editor p{counter-reset:list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor table{border-collapse:collapse}.ql-editor td{border:1px solid #000;padding:2px 5px}.ql-editor li,.ql-editor ol{padding-left:1.5em}.ql-editor li{list-style-type:none;position:relative}.ql-editor li>.ql-ui:before{display:inline-block;margin-left:-1.5em;margin-right:.3em;text-align:right;white-space:nowrap;width:1.2em}.ql-editor li[data-list=checked]>.ql-ui,.ql-editor li[data-list=unchecked]>.ql-ui{color:#777}.ql-editor li[data-list=bullet]>.ql-ui:before{content:\"\\2022\"}.ql-editor li[data-list=checked]>.ql-ui:before{content:\"\\2611\"}.ql-editor li[data-list=unchecked]>.ql-ui:before{content:\"\\2610\"}@supports (counter-set:none){.ql-editor li[data-list]{counter-set:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list]{counter-reset:list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered]{counter-increment:list-0}.ql-editor li[data-list=ordered]>.ql-ui:before{content:counter(list-0,decimal) \". \"}.ql-editor li[data-list=ordered].ql-indent-1{counter-increment:list-1}.ql-editor li[data-list=ordered].ql-indent-1>.ql-ui:before{content:counter(list-1,lower-alpha) \". \"}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-1{counter-set:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-1{counter-reset:list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-2{counter-increment:list-2}.ql-editor li[data-list=ordered].ql-indent-2>.ql-ui:before{content:counter(list-2,lower-roman) \". \"}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-2{counter-set:list-3 list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-2{counter-reset:list-3 list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-3{counter-increment:list-3}.ql-editor li[data-list=ordered].ql-indent-3>.ql-ui:before{content:counter(list-3,decimal) \". \"}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-3{counter-set:list-4 list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-3{counter-reset:list-4 list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-4{counter-increment:list-4}.ql-editor li[data-list=ordered].ql-indent-4>.ql-ui:before{content:counter(list-4,lower-alpha) \". \"}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-4{counter-set:list-5 list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-4{counter-reset:list-5 list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-5{counter-increment:list-5}.ql-editor li[data-list=ordered].ql-indent-5>.ql-ui:before{content:counter(list-5,lower-roman) \". \"}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-5{counter-set:list-6 list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-5{counter-reset:list-6 list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-6{counter-increment:list-6}.ql-editor li[data-list=ordered].ql-indent-6>.ql-ui:before{content:counter(list-6,decimal) \". \"}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-6{counter-set:list-7 list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-6{counter-reset:list-7 list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-7{counter-increment:list-7}.ql-editor li[data-list=ordered].ql-indent-7>.ql-ui:before{content:counter(list-7,lower-alpha) \". \"}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-7{counter-set:list-8 list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-7{counter-reset:list-8 list-9}}.ql-editor li[data-list=ordered].ql-indent-8{counter-increment:list-8}.ql-editor li[data-list=ordered].ql-indent-8>.ql-ui:before{content:counter(list-8,lower-roman) \". \"}@supports (counter-set:none){.ql-editor li[data-list].ql-indent-8{counter-set:list-9}}@supports not (counter-set:none){.ql-editor li[data-list].ql-indent-8{counter-reset:list-9}}.ql-editor li[data-list=ordered].ql-indent-9{counter-increment:list-9}.ql-editor li[data-list=ordered].ql-indent-9>.ql-ui:before{content:counter(list-9,decimal) \". \"}.ql-editor .ql-indent-1:not(.ql-direction-rtl){padding-left:3em}.ql-editor li.ql-indent-1:not(.ql-direction-rtl){padding-left:4.5em}.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:3em}.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right{padding-right:4.5em}.ql-editor .ql-indent-2:not(.ql-direction-rtl){padding-left:6em}.ql-editor li.ql-indent-2:not(.ql-direction-rtl){padding-left:7.5em}.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:6em}.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right{padding-right:7.5em}.ql-editor .ql-indent-3:not(.ql-direction-rtl){padding-left:9em}.ql-editor li.ql-indent-3:not(.ql-direction-rtl){padding-left:10.5em}.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:9em}.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right{padding-right:10.5em}.ql-editor .ql-indent-4:not(.ql-direction-rtl){padding-left:12em}.ql-editor li.ql-indent-4:not(.ql-direction-rtl){padding-left:13.5em}.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:12em}.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right{padding-right:13.5em}.ql-editor .ql-indent-5:not(.ql-direction-rtl){padding-left:15em}.ql-editor li.ql-indent-5:not(.ql-direction-rtl){padding-left:16.5em}.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:15em}.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right{padding-right:16.5em}.ql-editor .ql-indent-6:not(.ql-direction-rtl){padding-left:18em}.ql-editor li.ql-indent-6:not(.ql-direction-rtl){padding-left:19.5em}.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:18em}.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right{padding-right:19.5em}.ql-editor .ql-indent-7:not(.ql-direction-rtl){padding-left:21em}.ql-editor li.ql-indent-7:not(.ql-direction-rtl){padding-left:22.5em}.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:21em}.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right{padding-right:22.5em}.ql-editor .ql-indent-8:not(.ql-direction-rtl){padding-left:24em}.ql-editor li.ql-indent-8:not(.ql-direction-rtl){padding-left:25.5em}.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:24em}.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right{padding-right:25.5em}.ql-editor .ql-indent-9:not(.ql-direction-rtl){padding-left:27em}.ql-editor li.ql-indent-9:not(.ql-direction-rtl){padding-left:28.5em}.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:27em}.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right{padding-right:28.5em}.ql-editor li.ql-direction-rtl{padding-right:1.5em}.ql-editor li.ql-direction-rtl>.ql-ui:before{margin-left:.3em;margin-right:-1.5em;text-align:left}.ql-editor table{table-layout:fixed;width:100%}.ql-editor table td{outline:none}.ql-editor .ql-code-block-container{font-family:monospace}.ql-editor .ql-video{display:block;max-width:100%}.ql-editor .ql-video.ql-align-center{margin:0 auto}.ql-editor .ql-video.ql-align-right{margin:0 0 0 auto}.ql-editor .ql-bg-black{background-color:#000}.ql-editor .ql-bg-red{background-color:#e60000}.ql-editor .ql-bg-orange{background-color:#f90}.ql-editor .ql-bg-yellow{background-color:#ff0}.ql-editor .ql-bg-green{background-color:#008a00}.ql-editor .ql-bg-blue{background-color:#06c}.ql-editor .ql-bg-purple{background-color:#93f}.ql-editor .ql-color-white{color:#fff}.ql-editor .ql-color-red{color:#e60000}.ql-editor .ql-color-orange{color:#f90}.ql-editor .ql-color-yellow{color:#ff0}.ql-editor .ql-color-green{color:#008a00}.ql-editor .ql-color-blue{color:#06c}.ql-editor .ql-color-purple{color:#93f}.ql-editor .ql-font-serif{font-family:Georgia,Times New Roman,serif}.ql-editor .ql-font-monospace{font-family:Monaco,Courier New,monospace}.ql-editor .ql-size-small{font-size:.75em}.ql-editor .ql-size-large{font-size:1.5em}.ql-editor .ql-size-huge{font-size:2.5em}.ql-editor .ql-direction-rtl{direction:rtl;text-align:inherit}.ql-editor .ql-align-center{text-align:center}.ql-editor .ql-align-justify{text-align:justify}.ql-editor .ql-align-right{text-align:right}.ql-editor .ql-ui{position:absolute}.ql-editor.ql-blank:before{color:rgba(0,0,0,.6);content:attr(data-placeholder);font-style:italic;left:15px;pointer-events:none;position:absolute;right:15px}.ql-snow.ql-toolbar:after,.ql-snow .ql-toolbar:after{clear:both;content:\"\";display:table}.ql-snow.ql-toolbar button,.ql-snow .ql-toolbar button{background:none;border:none;cursor:pointer;display:inline-block;float:left;height:24px;padding:3px 5px;width:28px}.ql-snow.ql-toolbar button svg,.ql-snow .ql-toolbar button svg{float:left;height:100%}.ql-snow.ql-toolbar button:active:hover,.ql-snow .ql-toolbar button:active:hover{outline:none}.ql-snow.ql-toolbar input.ql-image[type=file],.ql-snow .ql-toolbar input.ql-image[type=file]{display:none}.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover{color:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill{fill:#06c}.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter{stroke:#06c}@media (pointer:coarse){.ql-snow.ql-toolbar button:hover:not(.ql-active),.ql-snow .ql-toolbar button:hover:not(.ql-active){color:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill{fill:#444}.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,.ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,.ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter{stroke:#444}}.ql-snow,.ql-snow *{box-sizing:border-box}.ql-snow .ql-hidden{display:none}.ql-snow .ql-out-bottom,.ql-snow .ql-out-top{visibility:hidden}.ql-snow .ql-tooltip{position:absolute;transform:translateY(10px)}.ql-snow .ql-tooltip a{cursor:pointer;text-decoration:none}.ql-snow .ql-tooltip.ql-flip{transform:translateY(-10px)}.ql-snow .ql-formats{display:inline-block;vertical-align:middle}.ql-snow .ql-formats:after{clear:both;content:\"\";display:table}.ql-snow .ql-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ql-snow .ql-stroke-miter{fill:none;stroke:#444;stroke-miterlimit:10;stroke-width:2}.ql-snow .ql-fill,.ql-snow .ql-stroke.ql-fill{fill:#444}.ql-snow .ql-empty{fill:none}.ql-snow .ql-even{fill-rule:evenodd}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1}.ql-snow .ql-transparent{opacity:.4}.ql-snow .ql-direction svg:last-child{display:none}.ql-snow .ql-direction.ql-active svg:last-child{display:inline}.ql-snow .ql-direction.ql-active svg:first-child{display:none}.ql-snow .ql-editor h1{font-size:2em}.ql-snow .ql-editor h2{font-size:1.5em}.ql-snow .ql-editor h3{font-size:1.17em}.ql-snow .ql-editor h4{font-size:1em}.ql-snow .ql-editor h5{font-size:.83em}.ql-snow .ql-editor h6{font-size:.67em}.ql-snow .ql-editor a{text-decoration:underline}.ql-snow .ql-editor blockquote{border-left:4px solid #ccc;margin-bottom:5px;margin-top:5px;padding-left:16px}.ql-snow .ql-editor .ql-code-block-container,.ql-snow .ql-editor code{background-color:#f0f0f0;border-radius:3px}.ql-snow .ql-editor .ql-code-block-container{margin-bottom:5px;margin-top:5px;padding:5px 10px}.ql-snow .ql-editor code{font-size:85%;padding:2px 4px}.ql-snow .ql-editor .ql-code-block-container{background-color:#23241f;color:#f8f8f2;overflow:visible}.ql-snow .ql-editor img{max-width:100%}.ql-snow .ql-picker{color:#444;display:inline-block;float:left;font-size:14px;font-weight:500;height:24px;position:relative;vertical-align:middle}.ql-snow .ql-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:2px;position:relative;width:100%}.ql-snow .ql-picker-label:before{display:inline-block;line-height:22px}.ql-snow .ql-picker-options{background-color:#fff;display:none;min-width:100%;padding:4px 8px;position:absolute;white-space:nowrap}.ql-snow .ql-picker-options .ql-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px}.ql-snow .ql-picker.ql-expanded .ql-picker-label{color:#ccc;z-index:2}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill{fill:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke{stroke:#ccc}.ql-snow .ql-picker.ql-expanded .ql-picker-options{display:block;margin-top:-1px;top:100%;z-index:1}.ql-snow .ql-color-picker,.ql-snow .ql-icon-picker{width:28px}.ql-snow .ql-color-picker .ql-picker-label,.ql-snow .ql-icon-picker .ql-picker-label{padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-label svg,.ql-snow .ql-icon-picker .ql-picker-label svg{right:4px}.ql-snow .ql-icon-picker .ql-picker-options{padding:4px 0}.ql-snow .ql-icon-picker .ql-picker-item{height:24px;width:24px;padding:2px 4px}.ql-snow .ql-color-picker .ql-picker-options{padding:3px 5px;width:152px}.ql-snow .ql-color-picker .ql-picker-item{border:1px solid transparent;float:left;height:16px;margin:2px;padding:0;width:16px}.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"]):before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"]):before{content:attr(data-label)}.ql-snow .ql-picker.ql-header{width:98px}.ql-snow .ql-picker.ql-header .ql-picker-item:before,.ql-snow .ql-picker.ql-header .ql-picker-label:before{content:\"Normal\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]:before{content:\"Heading 1\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]:before{content:\"Heading 2\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]:before{content:\"Heading 3\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]:before{content:\"Heading 4\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]:before{content:\"Heading 5\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before,.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]:before{content:\"Heading 6\"}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]:before{font-size:2em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]:before{font-size:1.5em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]:before{font-size:1.17em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]:before{font-size:1em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]:before{font-size:.83em}.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]:before{font-size:.67em}.ql-snow .ql-picker.ql-font{width:108px}.ql-snow .ql-picker.ql-font .ql-picker-item:before,.ql-snow .ql-picker.ql-font .ql-picker-label:before{content:\"Sans Serif\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]:before{content:\"Serif\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before,.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]:before{content:\"Monospace\"}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]:before{font-family:Georgia,Times New Roman,serif}.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]:before{font-family:Monaco,Courier New,monospace}.ql-snow .ql-picker.ql-size{width:98px}.ql-snow .ql-picker.ql-size .ql-picker-item:before,.ql-snow .ql-picker.ql-size .ql-picker-label:before{content:\"Normal\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]:before{content:\"Small\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]:before{content:\"Large\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before,.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]:before{content:\"Huge\"}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]:before{font-size:10px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]:before{font-size:18px}.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]:before{font-size:32px}.ql-snow .ql-color-picker.ql-background .ql-picker-item{background-color:#fff}.ql-snow .ql-color-picker.ql-color .ql-picker-item{background-color:#000}.ql-code-block-container{position:relative}.ql-code-block-container .ql-ui{right:5px;top:5px}.ql-toolbar.ql-snow{border:1px solid #ccc;box-sizing:border-box;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;padding:8px}.ql-toolbar.ql-snow .ql-formats{margin-right:15px}.ql-toolbar.ql-snow .ql-picker-label{border:1px solid transparent}.ql-toolbar.ql-snow .ql-picker-options{border:1px solid transparent;box-shadow:0 2px 8px rgba(0,0,0,.2)}.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label,.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options{border-color:#ccc}.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover{border-color:#000}.ql-toolbar.ql-snow+.ql-container.ql-snow{border-top:0}.ql-snow .ql-tooltip{background-color:#fff;border:1px solid #ccc;box-shadow:0 0 5px #ddd;color:#444;padding:5px 12px;white-space:nowrap}.ql-snow .ql-tooltip:before{content:\"Visit URL:\";line-height:26px;margin-right:8px}.ql-snow .ql-tooltip input[type=text]{display:none;border:1px solid #ccc;font-size:13px;height:26px;margin:0;padding:3px 5px;width:170px}.ql-snow .ql-tooltip a.ql-preview{display:inline-block;max-width:200px;overflow-x:hidden;text-overflow:ellipsis;vertical-align:top}.ql-snow .ql-tooltip a.ql-action:after{border-right:1px solid #ccc;content:\"Edit\";margin-left:16px;padding-right:8px}.ql-snow .ql-tooltip a.ql-remove:before{content:\"Remove\";margin-left:8px}.ql-snow .ql-tooltip a{line-height:26px}.ql-snow .ql-tooltip.ql-editing a.ql-preview,.ql-snow .ql-tooltip.ql-editing a.ql-remove{display:none}.ql-snow .ql-tooltip.ql-editing input[type=text]{display:inline-block}.ql-snow .ql-tooltip.ql-editing a.ql-action:after{border-right:0;content:\"Save\";padding-right:0}.ql-snow .ql-tooltip[data-mode=link]:before{content:\"Enter link:\"}.ql-snow .ql-tooltip[data-mode=formula]:before{content:\"Enter formula:\"}.ql-snow .ql-tooltip[data-mode=video]:before{content:\"Enter video:\"}.ql-snow a{color:#06c}.ql-container.ql-snow{border:1px solid #ccc}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "261e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ql-editor{min-height:200px;font-size:16px}.ql-snow .ql-stroke.ql-thin,.ql-snow .ql-thin{stroke-width:1px!important}.quillWrapper .ql-snow.ql-toolbar{padding-top:8px;padding-bottom:4px}.quillWrapper .ql-snow.ql-toolbar .ql-formats{margin-bottom:10px}.ql-snow .ql-toolbar button svg,.quillWrapper .ql-snow.ql-toolbar button svg{width:22px;height:22px}.quillWrapper .ql-editor ul[data-checked=false]>li:before,.quillWrapper .ql-editor ul[data-checked=true]>li:before{font-size:1.35em;vertical-align:baseline;bottom:-.065em;font-weight:900;color:#222}.quillWrapper .ql-snow .ql-stroke{stroke:rgba(63,63,63,.95);stroke-linecap:square;stroke-linejoin:initial;stroke-width:1.7px}.quillWrapper .ql-picker-label{font-size:15px}.quillWrapper .ql-snow .ql-active .ql-stroke{stroke-width:2.25px}.quillWrapper .ql-toolbar.ql-snow .ql-formats{vertical-align:top}.ql-picker:not(.ql-background){position:relative;top:2px}.ql-picker.ql-color-picker svg{width:22px!important;height:22px!important}.quillWrapper .imageResizeActive img{display:block;cursor:pointer}.quillWrapper .imageResizeActive~div svg{cursor:pointer}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4a60":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("261e");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("08106484", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4aea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_v16_dist_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_postcss_loader_src_index_js_ref_7_oneOf_1_3_quill_snow_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7781");
/* harmony import */ var _vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_v16_dist_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_postcss_loader_src_index_js_ref_7_oneOf_1_3_quill_snow_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_index_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_vue_loader_v16_dist_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_postcss_loader_src_index_js_ref_7_oneOf_1_3_quill_snow_css_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "69de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_vue3_editor_scss_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4a60");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_vue3_editor_scss_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_4_vue3_editor_scss_vue_type_style_index_1_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "6c81":
/***/ (function(module, exports) {

module.exports = require("quill");

/***/ }),

/***/ "7781":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0d26");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("b2ba7d2a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ install; });
__webpack_require__.d(__webpack_exports__, "VueEditor", function() { return /* reexport */ VueEditor; });
__webpack_require__.d(__webpack_exports__, "Quill", function() { return /* reexport */ external_quill_default.a; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "quill"
var external_quill_ = __webpack_require__("6c81");
var external_quill_default = /*#__PURE__*/__webpack_require__.n(external_quill_);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VueEditor.vue?vue&type=template&id=6dfcdbce

const _hoisted_1 = {
  class: "quillWrapper"
};
const _hoisted_2 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "toolbar"), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    id: $props.id,
    ref: "quillContainer"
  }, null, 8, _hoisted_2), $props.useCustomImageHandler ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("input", {
    key: 0,
    id: "file-upload",
    ref: "fileInput",
    type: "file",
    accept: "image/*",
    style: {
      "display": "none"
    },
    onChange: _cache[0] || (_cache[0] = $event => $options.emitImageInfo($event))
  }, null, 544)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./src/components/VueEditor.vue?vue&type=template&id=6dfcdbce

// CONCATENATED MODULE: ./src/helpers/default-toolbar.js
let defaultToolbar = [[{
  header: [false, 1, 2, 3, 4, 5, 6]
}], ["bold", "italic", "underline", "strike"],
// toggled buttons
[{
  align: ""
}, {
  align: "center"
}, {
  align: "right"
}, {
  align: "justify"
}], ["blockquote", "code-block"], [{
  list: "ordered"
}, {
  list: "bullet"
}, {
  list: "check"
}], [{
  indent: "-1"
}, {
  indent: "+1"
}],
// outdent/indent
[{
  color: []
}, {
  background: []
}],
// dropdown with defaults from theme
["link", "image", "video"], ["clean"] // remove formatting button
];
/* harmony default export */ var default_toolbar = (defaultToolbar);
// CONCATENATED MODULE: ./src/helpers/old-api.js
/* harmony default export */ var old_api = ({
  props: {
    customModules: Array
  },
  methods: {
    registerCustomModules(Quill) {
      if (this.customModules !== undefined) {
        this.customModules.forEach(customModule => {
          Quill.register("modules/" + customModule.alias, customModule.module);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/helpers/merge-deep.js
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 */

function mergeDeep(target, source) {
  const isObject = obj => obj && typeof obj === "object";
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}
// CONCATENATED MODULE: ./src/helpers/markdown-shortcuts.js
/* eslint-disable no-unused-vars */

let BlockEmbed = external_quill_default.a.import("blots/block/embed");
class HorizontalRule extends BlockEmbed {}
HorizontalRule.blotName = "hr";
HorizontalRule.tagName = "hr";
external_quill_default.a.register("formats/horizontal", HorizontalRule);
class markdown_shortcuts_MarkdownShortcuts {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.ignoreTags = ["PRE"];
    this.matches = [{
      name: "header",
      pattern: /^(#){1,6}\s/g,
      action: (text, selection, pattern) => {
        var match = pattern.exec(text);
        if (!match) return;
        const size = match[0].length;
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(() => {
          this.quill.formatLine(selection.index, 0, "header", size - 1);
          this.quill.deleteText(selection.index - size, size);
        }, 0);
      }
    }, {
      name: "blockquote",
      pattern: /^(>)\s/g,
      action: (_text, selection) => {
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(() => {
          this.quill.formatLine(selection.index, 1, "blockquote", true);
          this.quill.deleteText(selection.index - 2, 2);
        }, 0);
      }
    }, {
      name: "code-block",
      pattern: /^`{3}(?:\s|\n)/g,
      action: (_text, selection) => {
        // Need to defer this action https://github.com/quilljs/quill/issues/1134
        setTimeout(() => {
          this.quill.formatLine(selection.index, 1, "code-block", true);
          this.quill.deleteText(selection.index - 4, 4);
        }, 0);
      }
    }, {
      name: "bolditalic",
      pattern: /(?:\*|_){3}(.+?)(?:\*|_){3}/g,
      action: (text, _selection, pattern, lineStart) => {
        let match = pattern.exec(text);
        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {
            bold: true,
            italic: true
          });
          this.quill.format("bold", false);
        }, 0);
      }
    }, {
      name: "bold",
      pattern: /(?:\*|_){2}(.+?)(?:\*|_){2}/g,
      action: (text, _selection, pattern, lineStart) => {
        let match = pattern.exec(text);
        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {
            bold: true
          });
          this.quill.format("bold", false);
        }, 0);
      }
    }, {
      name: "italic",
      pattern: /(?:\*|_){1}(.+?)(?:\*|_){1}/g,
      action: (text, _selection, pattern, lineStart) => {
        let match = pattern.exec(text);
        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {
            italic: true
          });
          this.quill.format("italic", false);
        }, 0);
      }
    }, {
      name: "strikethrough",
      pattern: /(?:~~)(.+?)(?:~~)/g,
      action: (text, _selection, pattern, lineStart) => {
        let match = pattern.exec(text);
        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {
            strike: true
          });
          this.quill.format("strike", false);
        }, 0);
      }
    }, {
      name: "code",
      pattern: /(?:`)(.+?)(?:`)/g,
      action: (text, _selection, pattern, lineStart) => {
        let match = pattern.exec(text);
        const annotatedText = match[0];
        const matchedText = match[1];
        const startIndex = lineStart + match.index;
        if (text.match(/^([*_ \n]+)$/g)) return;
        setTimeout(() => {
          this.quill.deleteText(startIndex, annotatedText.length);
          this.quill.insertText(startIndex, matchedText, {
            code: true
          });
          this.quill.format("code", false);
          this.quill.insertText(this.quill.getSelection(), " ");
        }, 0);
      }
    }, {
      name: "hr",
      pattern: /^([-*]\s?){3}/g,
      action: (text, selection) => {
        const startIndex = selection.index - text.length;
        setTimeout(() => {
          this.quill.deleteText(startIndex, text.length);
          this.quill.insertEmbed(startIndex + 1, "hr", true, external_quill_default.a.sources.USER);
          this.quill.insertText(startIndex + 2, "\n", external_quill_default.a.sources.SILENT);
          this.quill.setSelection(startIndex + 2, external_quill_default.a.sources.SILENT);
        }, 0);
      }
    }, {
      name: "asterisk-ul",
      pattern: /^(\*|\+)\s$/g,
      action: (_text, selection, _pattern) => {
        setTimeout(() => {
          this.quill.formatLine(selection.index, 1, "list", "unordered");
          this.quill.deleteText(selection.index - 2, 2);
        }, 0);
      }
    }, {
      name: "image",
      pattern: /(?:!\[(.+?)\])(?:\((.+?)\))/g,
      action: (text, selection, pattern) => {
        const startIndex = text.search(pattern);
        const matchedText = text.match(pattern)[0];
        // const hrefText = text.match(/(?:!\[(.*?)\])/g)[0]
        const hrefLink = text.match(/(?:\((.*?)\))/g)[0];
        const start = selection.index - matchedText.length - 1;
        if (startIndex !== -1) {
          setTimeout(() => {
            this.quill.deleteText(start, matchedText.length);
            this.quill.insertEmbed(start, "image", hrefLink.slice(1, hrefLink.length - 1));
          }, 0);
        }
      }
    }, {
      name: "link",
      pattern: /(?:\[(.+?)\])(?:\((.+?)\))/g,
      action: (text, selection, pattern) => {
        const startIndex = text.search(pattern);
        const matchedText = text.match(pattern)[0];
        const hrefText = text.match(/(?:\[(.*?)\])/g)[0];
        const hrefLink = text.match(/(?:\((.*?)\))/g)[0];
        const start = selection.index - matchedText.length - 1;
        if (startIndex !== -1) {
          setTimeout(() => {
            this.quill.deleteText(start, matchedText.length);
            this.quill.insertText(start, hrefText.slice(1, hrefText.length - 1), "link", hrefLink.slice(1, hrefLink.length - 1));
          }, 0);
        }
      }
    }];

    // Handler that looks for insert deltas that match specific characters
    this.quill.on("text-change", (delta, _oldContents, _source) => {
      for (let i = 0; i < delta.ops.length; i++) {
        // eslint-disable-next-line no-prototype-builtins
        if (delta.ops[i].hasOwnProperty("insert")) {
          if (delta.ops[i].insert === " ") {
            this.onSpace();
          } else if (delta.ops[i].insert === "\n") {
            this.onEnter();
          }
        }
      }
    });
  }
  isValid(text, tagName) {
    return typeof text !== "undefined" && text && this.ignoreTags.indexOf(tagName) === -1;
  }
  onSpace() {
    const selection = this.quill.getSelection();
    if (!selection) return;
    const [line, offset] = this.quill.getLine(selection.index);
    const text = line.domNode.textContent;
    const lineStart = selection.index - offset;
    if (this.isValid(text, line.domNode.tagName)) {
      for (let match of this.matches) {
        const matchedText = text.match(match.pattern);
        if (matchedText) {
          // We need to replace only matched text not the whole line
          console.log("matched:", match.name, text);
          match.action(text, selection, match.pattern, lineStart);
          return;
        }
      }
    }
  }
  onEnter() {
    let selection = this.quill.getSelection();
    if (!selection) return;
    const [line, offset] = this.quill.getLine(selection.index);
    const text = line.domNode.textContent + " ";
    const lineStart = selection.index - offset;
    selection.length = selection.index++;
    if (this.isValid(text, line.domNode.tagName)) {
      for (let match of this.matches) {
        const matchedText = text.match(match.pattern);
        if (matchedText) {
          console.log("matched", match.name, text);
          match.action(text, selection, match.pattern, lineStart);
          return;
        }
      }
    }
  }
}

// module.exports = MarkdownShortcuts;
/* harmony default export */ var markdown_shortcuts = (markdown_shortcuts_MarkdownShortcuts);
// CONCATENATED MODULE: ./src/helpers/custom-link.js

const Link = external_quill_default.a.import('formats/link');
class CustomLink extends Link {
  static sanitize(url) {
    const value = super.sanitize(url);
    if (value) {
      for (let i = 0; i < this.PROTOCOL_WHITELIST.length; i++) if (value.startsWith(this.PROTOCOL_WHITELIST[i])) {
        return value;
      }
      return `https://${value}`;
    }
    return value;
  }
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VueEditor.vue?vue&type=script&lang=js






/* harmony default export */ var VueEditorvue_type_script_lang_js = ({
  name: 'VueEditor',
  emits: ['ready', 'editor-change', 'focus', 'selection-change', 'text-change', 'blur', 'input', 'image-removed', 'image-added', 'update:modelValue'],
  mixins: [old_api],
  props: {
    id: {
      type: String,
      default: 'quill-container'
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    },
    editorToolbar: {
      type: [Array, Object],
      default: () => []
    },
    editorOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    useCustomImageHandler: {
      type: Boolean,
      default: false
    },
    useMarkdownShortcuts: {
      type: Boolean,
      default: false
    },
    prependLinksHttps: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    quill: null
  }),
  watch: {
    modelValue(val) {
      if (val != this.quill.root.innerHTML && !this.quill.hasFocus()) {
        this.quill.root.innerHTML = val;
      }
    },
    disabled(status) {
      this.quill.enable(!status);
    }
  },
  mounted() {
    this.registerCustomModules(external_quill_default.a);
    this.registerPrototypes();
    this.initializeEditor();
  },
  beforeUnmount() {
    this.quill = null;
    delete this.quill;
  },
  methods: {
    initializeEditor() {
      this.setupQuillEditor();
      this.checkForCustomImageHandler();
      this.handleInitialContent();
      this.registerEditorEventListeners();
      this.$emit('ready', this.quill);
    },
    setupQuillEditor() {
      let editorConfig = {
        debug: false,
        modules: this.setModules(),
        theme: 'snow',
        placeholder: this.placeholder ? this.placeholder : '',
        readOnly: this.disabled ? this.disabled : false
      };
      this.prepareEditorConfig(editorConfig);
      this.quill = new external_quill_default.a(this.$refs.quillContainer, editorConfig);
    },
    setModules() {
      let modules = {
        toolbar: this.editorToolbar.length ? this.editorToolbar : default_toolbar
      };
      if (this.useMarkdownShortcuts) {
        external_quill_default.a.register('modules/markdownShortcuts', markdown_shortcuts, true);
        modules['markdownShortcuts'] = {};
      }
      if (this.prependLinksHttps) {
        external_quill_default.a.register('formats/link', CustomLink, true);
      }
      return modules;
    },
    prepareEditorConfig(editorConfig) {
      if (Object.keys(this.editorOptions).length > 0 && this.editorOptions.constructor === Object) {
        if (this.editorOptions.modules && typeof this.editorOptions.modules.toolbar !== 'undefined') {
          // We don't want to merge default toolbar with provided toolbar.
          delete editorConfig.modules.toolbar;
        }
        mergeDeep(editorConfig, this.editorOptions);
      }
    },
    registerPrototypes() {
      external_quill_default.a.prototype.getHTML = function () {
        return this.container.querySelector('.ql-editor').innerHTML;
      };
      external_quill_default.a.prototype.getWordCount = function () {
        return this.container.querySelector('.ql-editor').innerText.length;
      };
    },
    registerEditorEventListeners() {
      this.quill.on('text-change', this.handleTextChange);
      this.quill.on('selection-change', this.handleSelectionChange);
      this.listenForEditorEvent('text-change');
      this.listenForEditorEvent('selection-change');
      this.listenForEditorEvent('editor-change');
    },
    listenForEditorEvent(type) {
      this.quill.on(type, (...args) => {
        this.$emit(type, ...args);
      });
    },
    handleInitialContent() {
      if (this.modelValue) this.quill.root.innerHTML = this.modelValue; // Set initial editor content
    },
    handleSelectionChange(range, oldRange) {
      if (!range && oldRange) this.$emit('blur', this.quill);else if (range && !oldRange) this.$emit('focus', this.quill);
    },
    handleTextChange(delta, oldContents) {
      let editorContent = this.quill.getHTML() === '<p><br></p>' ? '' : this.quill.getHTML();
      this.$emit('update:modelValue', editorContent);
      if (this.useCustomImageHandler) this.handleImageRemoved(delta, oldContents);
    },
    handleImageRemoved(delta, oldContents) {
      const currrentContents = this.quill.getContents();
      const deletedContents = currrentContents.diff(oldContents);
      const operations = deletedContents.ops;
      operations.map(operation => {
        // eslint-disable-next-line no-prototype-builtins
        if (operation.insert && operation.insert.hasOwnProperty('image')) {
          const {
            image
          } = operation.insert;
          this.$emit('image-removed', image);
        }
      });
    },
    checkForCustomImageHandler() {
      this.useCustomImageHandler === true ? this.setupCustomImageHandler() : '';
    },
    setupCustomImageHandler() {
      let toolbar = this.quill.getModule('toolbar');
      toolbar.addHandler('image', this.customImageHandler);
    },
    customImageHandler() {
      this.$refs.fileInput.click();
    },
    emitImageInfo($event) {
      const resetUploader = function () {
        var uploader = document.getElementById('file-upload');
        uploader.value = '';
      };
      let file = $event.target.files[0];
      let Editor = this.quill;
      let range = Editor.getSelection();
      let cursorLocation = range.index;
      this.$emit('image-added', file, Editor, cursorLocation, resetUploader);
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueEditor.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quill/dist/quill.snow.css?vue&type=style&index=0&lang=css
var quill_snowvue_type_style_index_0_lang_css = __webpack_require__("4aea");

// EXTERNAL MODULE: ./src/assets/vue3-editor.scss?vue&type=style&index=1&lang=scss
var vue3_editorvue_type_style_index_1_lang_scss = __webpack_require__("69de");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/VueEditor.vue








const __exports__ = /*#__PURE__*/exportHelper_default()(VueEditorvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var VueEditor = (__exports__);
// CONCATENATED MODULE: ./src/index.js


const version = "0.1.0-alpha.2";

// Declare install function executed by Vue.use()
function install(app) {
  if (install.installed) return;
  install.installed = true;
  app.component("VueEditor", VueEditor);
}
const VPlugin = {
  install,
  version,
  Quill: external_quill_default.a,
  VueEditor: VueEditor
};

// Auto-install when vue is found (eg. in browser via <script> tag)
// let GlobalVue = null;
// if (typeof window !== "undefined") {
//   GlobalVue = window.Vue;
// } else if (typeof global !== "undefined") {
//   GlobalVue = global.Vue;
// }
// if (GlobalVue) {
//   GlobalVue.use(VPlugin);
// }

/* harmony default export */ var src_0 = (VPlugin);


/*************************************************/
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
//# sourceMappingURL=vue3-editor.common.js.map