/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ReferenceError: window is not defined\\n    at eval (eval at <anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/style-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/css-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/sass-loader/lib/loader.js!/Users/konstantinlubinets/Desktop/webpack-101/src/app.scss:90:1), <anonymous>:19:10)\\n    at eval (eval at <anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/style-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/css-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/sass-loader/lib/loader.js!/Users/konstantinlubinets/Desktop/webpack-101/src/app.scss:90:1), <anonymous>:9:47)\\n    at module.exports (eval at <anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/style-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/css-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/sass-loader/lib/loader.js!/Users/konstantinlubinets/Desktop/webpack-101/src/app.scss:90:1), <anonymous>:47:68)\\n    at eval (eval at <anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/style-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/css-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/sass-loader/lib/loader.js!/Users/konstantinlubinets/Desktop/webpack-101/src/app.scss:180:1), <anonymous>:7:74)\\n    at Object.<anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/style-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/css-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/sass-loader/lib/loader.js!/Users/konstantinlubinets/Desktop/webpack-101/src/app.scss:180:1)\\n    at __webpack_require__ (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/style-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/css-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/sass-loader/lib/loader.js!/Users/konstantinlubinets/Desktop/webpack-101/src/app.scss:21:30)\\n    at /Users/konstantinlubinets/Desktop/webpack-101/node_modules/style-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/css-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/sass-loader/lib/loader.js!/Users/konstantinlubinets/Desktop/webpack-101/src/app.scss:67:18\\n    at Object.<anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/style-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/css-loader/index.js!/Users/konstantinlubinets/Desktop/webpack-101/node_modules/sass-loader/lib/loader.js!/Users/konstantinlubinets/Desktop/webpack-101/src/app.scss:70:10)\\n    at Module._compile (module.js:571:32)\\n    at Object.exec (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/NormalModule.js:98:6)\\n    at Object.<anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/extract-text-webpack-plugin/loader.js:112:21)\\n    at Compiler.<anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/Compiler.js:280:10)\\n    at /Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/Compiler.js:480:13\\n    at next (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/tapable/lib/Tapable.js:138:11)\\n    at Compiler.<anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/extract-text-webpack-plugin/loader.js:93:4)\\n    at next (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/tapable/lib/Tapable.js:140:14)\\n    at Compiler.<anonymous> (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/CachePlugin.js:62:5)\\n    at Compiler.applyPluginsAsyncSeries (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/tapable/lib/Tapable.js:142:13)\\n    at /Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/Compiler.js:477:10\\n    at Compilation.applyPluginsAsyncSeries (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/tapable/lib/Tapable.js:131:46)\\n    at self.applyPluginsAsync.err (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/Compilation.js:615:19)\\n    at Compilation.applyPluginsAsyncSeries (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/tapable/lib/Tapable.js:131:46)\\n    at self.applyPluginsAsync.err (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/Compilation.js:606:11)\\n    at Compilation.applyPluginsAsyncSeries (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/tapable/lib/Tapable.js:131:46)\\n    at self.applyPluginsAsync.err (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/Compilation.js:601:10)\\n    at Compilation.applyPluginsAsyncSeries (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/tapable/lib/Tapable.js:131:46)\\n    at sealPart2 (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/Compilation.js:597:9)\\n    at Compilation.applyPluginsAsyncSeries (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/tapable/lib/Tapable.js:131:46)\\n    at Compilation.seal (/Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/Compilation.js:545:8)\\n    at /Users/konstantinlubinets/Desktop/webpack-101/node_modules/webpack/lib/Compiler.js:474:16\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(module, exports, __webpack_require__) {

eval("const css = __webpack_require__(/*! ./app.scss */ 0);\n\nconsole.log('Hello from app2.js whot');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjc3MgPSByZXF1aXJlKCcuL2FwcC5zY3NzJyk7XG5cbmNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGFwcDIuanMgd2hvdCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);