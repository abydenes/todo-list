"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"h h\"\r\n    \"s m\";\r\n  grid-template-rows: 1fr 15fr;\r\n  grid-template-columns: 1fr 8fr;\r\n}\r\n\r\n.header {\r\n  background-color: #303030;\r\n  color: rgb(255, 255, 255);\r\n  grid-area: h;\r\n  padding: 16px;\r\n}\r\n\r\n.header > div {\r\n  display: flex;\r\n  gap: 16px;\r\n  padding: 8px;\r\n}\r\n\r\n.sidebar {\r\n  background-color: #c9c9c9;\r\n  grid-area: s;\r\n  padding: 32px 16px;\r\n  font-size: 18px;\r\n  min-width: 200px;\r\n  width: 16vw;\r\n}\r\n\r\n.project-container {\r\n  margin: 16px 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.project-container p {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.project-button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: none;\r\n  background: none;\r\n  padding: 4px 8px;\r\n  font-size: 16px;\r\n  height: 35px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.project-button:hover {\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}\r\n\r\n.project-button img {\r\n  opacity: 50%;\r\n  width: 20px;\r\n}\r\n\r\n.project-button img:hover {\r\n  width: 22px;\r\n}\r\n\r\n.add-project-button {\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n  padding: 4px 32px;\r\n  font-size: 16px;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.add-project-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);\r\n}\r\n\r\n.main-container {\r\n  background-color: rgb(236, 236, 236);\r\n  grid-area: m;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-container h2 {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.main-container div {\r\n  margin-left: 8px;\r\n}\r\n\r\n.add-todo-button {\r\n  margin: 16px;\r\n  padding: 4px 32px;\r\n  border: none;\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n}\r\n.add-todo-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);\r\n}\r\n\r\n.todo-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 16px;\r\n}\r\n\r\n.todo-item {\r\n  background-color: #e5d3ed;\r\n  width: 65vw;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px;\r\n  flex-wrap: wrap;\r\n  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.todo-name:focus,\r\n.due-date:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-left {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  grid-template-columns: 2rem auto;\r\n}\r\n\r\n.todo-checkbox {\r\n  appearance: none;\r\n  margin: 0;\r\n  font: inherit;\r\n  width: 1.6rem;\r\n  height: 1.6rem;\r\n  border: 0.15rem solid rgb(126, 126, 126);\r\n  border-radius: 0.15em;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.todo-checkbox::before {\r\n  content: \"\";\r\n  width: 1rem;\r\n  height: 1rem;\r\n  transform: scale(0);\r\n  box-shadow: inset 1rem 1rem rgb(131, 0, 146);\r\n  transform-origin: bottom left;\r\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n\r\n}\r\n.todo-checkbox:hover::before {\r\n  transform: scale(1);\r\n}\r\n\r\n.todo-right {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.delete-icon {\r\n  width: 20px;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.due-date {\r\n  background-color: #e5d3ed;\r\n  border: none;\r\n  width: 100px;\r\n  overflow:visible;\r\n}\r\n\r\n.due-date:hover {\r\n  outline: 1px solid black;\r\n}\r\n\r\n.add-todo-btn {\r\n  margin-bottom: 16px;\r\n  padding: 8px 32px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb;;SAEO;EACP,4BAA4B;EAC5B,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;EACT,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,qDAAqD;EACrD,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,aAAa;EACb,aAAa;EACb,cAAc;EACd,wCAAwC;EACxC,qBAAqB;EACrB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,4CAA4C;EAC5C,6BAA6B;EAC7B,uEAAuE;;AAEzE;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"h h\"\r\n    \"s m\";\r\n  grid-template-rows: 1fr 15fr;\r\n  grid-template-columns: 1fr 8fr;\r\n}\r\n\r\n.header {\r\n  background-color: #303030;\r\n  color: rgb(255, 255, 255);\r\n  grid-area: h;\r\n  padding: 16px;\r\n}\r\n\r\n.header > div {\r\n  display: flex;\r\n  gap: 16px;\r\n  padding: 8px;\r\n}\r\n\r\n.sidebar {\r\n  background-color: #c9c9c9;\r\n  grid-area: s;\r\n  padding: 32px 16px;\r\n  font-size: 18px;\r\n  min-width: 200px;\r\n  width: 16vw;\r\n}\r\n\r\n.project-container {\r\n  margin: 16px 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.project-container p {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.project-button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: none;\r\n  background: none;\r\n  padding: 4px 8px;\r\n  font-size: 16px;\r\n  height: 35px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.project-button:hover {\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}\r\n\r\n.project-button img {\r\n  opacity: 50%;\r\n  width: 20px;\r\n}\r\n\r\n.project-button img:hover {\r\n  width: 22px;\r\n}\r\n\r\n.add-project-button {\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n  padding: 4px 32px;\r\n  font-size: 16px;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.add-project-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);\r\n}\r\n\r\n.main-container {\r\n  background-color: rgb(236, 236, 236);\r\n  grid-area: m;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-container h2 {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.main-container div {\r\n  margin-left: 8px;\r\n}\r\n\r\n.add-todo-button {\r\n  margin: 16px;\r\n  padding: 4px 32px;\r\n  border: none;\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n}\r\n.add-todo-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);\r\n}\r\n\r\n.todo-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 16px;\r\n}\r\n\r\n.todo-item {\r\n  background-color: #e5d3ed;\r\n  width: 65vw;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px;\r\n  flex-wrap: wrap;\r\n  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.todo-name:focus,\r\n.due-date:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-left {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  grid-template-columns: 2rem auto;\r\n}\r\n\r\n.todo-checkbox {\r\n  appearance: none;\r\n  margin: 0;\r\n  font: inherit;\r\n  width: 1.6rem;\r\n  height: 1.6rem;\r\n  border: 0.15rem solid rgb(126, 126, 126);\r\n  border-radius: 0.15em;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.todo-checkbox::before {\r\n  content: \"\";\r\n  width: 1rem;\r\n  height: 1rem;\r\n  transform: scale(0);\r\n  box-shadow: inset 1rem 1rem rgb(131, 0, 146);\r\n  transform-origin: bottom left;\r\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n\r\n}\r\n.todo-checkbox:hover::before {\r\n  transform: scale(1);\r\n}\r\n\r\n.todo-right {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.delete-icon {\r\n  width: 20px;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.due-date {\r\n  background-color: #e5d3ed;\r\n  border: none;\r\n  width: 100px;\r\n  overflow:visible;\r\n}\r\n\r\n.due-date:hover {\r\n  outline: 1px solid black;\r\n}\r\n\r\n.add-todo-btn {\r\n  margin-bottom: 16px;\r\n  padding: 8px 32px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _pencil_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pencil-outline.png */ "./src/pencil-outline.png");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM = {
  todolist: new _todoList__WEBPACK_IMPORTED_MODULE_1__["default"](),

  currentProject: DOM.todolist.getProject("default"),

  todoContainer: document.querySelector(".todo-container"),

  init() {
    DOM.displayTodos(DOM.currentProject);
    DOM.displayProjects();
    DOM.highlightCurrentProject();
  },

  addInitialListeners() {
    document.querySelector(".add-todo-button").addEventListener("click", () => {
      DOM.addTodo();
    });

    DOM.todoContainer.addEventListener("click", (e) => {
      e.target.classList.contains("delete-icon") ? DOM.deleteTodo(e) : false;
      e.target.classList.contains("todo-checkbox") ? DOM.checkTodo(e) : false;
    });

    document.querySelector(".sidebar").addEventListener("click", (e) => {
      e.target.classList.contains("project-button")
        ? DOM.changeProject(e)
        : false;
      e.target.classList.contains("add-project-button")
        ? DOM.addProject()
        : false;
      e.target.classList.contains("edit-project") ? DOM.editProject(e) : false;
      e.target.classList.contains("delete-project")
        ? DOM.deleteProject(e)
        : false;
    });
  },

  checkTodo(e) {
    if (e.target.checked) {
      DOM.currentProject.removeTodo(e.target.nextElementSibling.textContent);
      DOM.displayTodos(DOM.currentProject);
    }
  },

  addTodo() {
    DOM.currentProject.addTask("name", "2022-11-17");
    DOM.displayTodos(DOM.currentProject);
  },

  displayTodos(project) {
    DOM.cleanTodoContainer();
    for (let i = 0; i < project.tasks.length; i++) {
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
      todoItem.dataset.index = `${i}`;

      const todoLeft = document.createElement("div");
      todoLeft.classList.add("todo-left");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("todo-checkbox");

      const todoName = document.createElement("h3");
      todoName.classList.add("todo-name");
      todoName.setAttribute("contenteditable", "true");
      todoName.textContent = `${project.tasks[i].name}`;

      const todoRight = document.createElement("div");
      todoRight.classList.add("todo-right");

      const todoDueDate = document.createElement("input");
      todoDueDate.classList.add("due-date");
      todoDueDate.type = "date";
      todoDueDate.value = `${project.tasks[i].dueDate}`;
      todoDueDate.min = "2022-11-17"; // should be today use datefns

      const myIcon = new Image();
      myIcon.classList.add("delete-icon");
      myIcon.src = _delete_png__WEBPACK_IMPORTED_MODULE_2__;

      todoLeft.appendChild(checkbox);
      todoLeft.appendChild(todoName);
      todoItem.appendChild(todoLeft);
      todoRight.appendChild(todoDueDate);
      todoRight.appendChild(myIcon);
      todoItem.appendChild(todoRight);
      DOM.todoContainer.appendChild(todoItem);
    }
    DOM.saveContent();
  },

  deleteTodo(e) {
    const todoName = e.target.parentElement.previousSibling.textContent;
    DOM.currentProject.removeTodo(todoName);
    DOM.displayTodos(DOM.currentProject);
  },

  cleanTodoContainer() {
    document.querySelector(".todo-container").innerHTML = "";
  },

  saveContent() {
    const todonames = document.querySelectorAll(".todo-name");
    const duedates = document.querySelectorAll(".due-date");

    // I need to refactor these, they are repetitive
    for (let i = 0; i < todonames.length; i++) {
      todonames[i].addEventListener("blur", (e) => {
        const index = e.target.parentElement.parentElement.dataset.index;
        DOM.currentProject.tasks[index].name = todonames[index].innerHTML;
      });
    }
    duedates.forEach((date) => {
      date.addEventListener("blur", (e) => {
        const index = e.target.parentElement.parentElement.dataset.index;
        DOM.currentProject.tasks[index].dueDate = duedates[index].value;
      });
    });
  },

  addProject() {
    const value = prompt("enter project name");
    const projectBtns = Array.from(
      document.querySelectorAll(".project-button")
    );
    if (projectBtns.every((p) => p.textContent != value) && value !== null) {
      DOM.todolist.addProject(value);
    } else alert("no same name or null pls");
    DOM.displayProjects();
  },

  displayProjects() {
    DOM.cleanProjectContainer();
    for (let i = 0; i < DOM.todolist.projects.length; i++) {
      const projects = document.querySelector(".project-container");
      const projectdiv = document.createElement("div");

      if (DOM.todolist.projects[i] == DOM.currentProject) {
        const editProject = new Image();
        editProject.classList.add("edit-project");
        editProject.src = _pencil_outline_png__WEBPACK_IMPORTED_MODULE_3__;

        const deleteProject = new Image();
        deleteProject.classList.add("delete-project");
        deleteProject.src = _delete_png__WEBPACK_IMPORTED_MODULE_2__;

        projectdiv.appendChild(editProject);
        projectdiv.appendChild(deleteProject);
      }

      const pbtn = document.createElement("button");
      pbtn.textContent = `${DOM.todolist.projects[i].name}`;
      pbtn.classList.add("project-button");

      pbtn.appendChild(projectdiv);
      projects.appendChild(pbtn);
    }
    DOM.highlightCurrentProject();
  },

  editProject() {
    DOM.todolist.updateProject(
      DOM.currentProject,
      prompt("enter new name", `${DOM.currentProject.name}`)
    );
    DOM.displayProjects();
  },

  deleteProject(e) {
    todolist.removeProject(currentProject);
    DOM.currentProject =
      DOM.todolist.projects[
        DOM.todolist.projects.indexOf(DOM.currentProject) + 1
      ];
    DOM.displayProjects();
    DOM.displayTodos(DOM.currentProject);
  },

  highlightCurrentProject() {
    const projectButton = document.querySelectorAll(".project-button");
    projectButton.forEach((button) => {
      if (button.textContent == DOM.currentProject.getName()) {
        button.style.backgroundColor = "white";
      } else if (button.textContent != DOM.currentProject.getName()) {
        button.style.backgroundColor = "unset";
      }
    });
  },

  changeProject(e) {
    DOM.currentProject = DOM.todolist.getProject(e.target.textContent);
    DOM.displayTodos(DOM.currentProject);
    DOM.highlightCurrentProject();
    DOM.displayProjects();
  },

  cleanProjectContainer() {
    document.querySelector(".project-container").innerHTML = "";
  },
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


_DOM_js__WEBPACK_IMPORTED_MODULE_0__["default"].init();

_DOM_js__WEBPACK_IMPORTED_MODULE_0__["default"].addInitialListeners();

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]("placeholder task"))
  }

  getName = () => this.name;

  setName = (name) => (this.name = name);

  addTask = (task, dueDate) => this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"](task, dueDate));

  getTask = (name) => this.tasks.find((task) => task.getName() === name); 

  deleteTask = (name) => {
    this.todos.splice(
      this.todos.indexOf(this.todos.find((x) => x.name === name)),
      1
    );
  };
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
  }

  getName = () => this.name;

  setName = (name) => (this.name = name);

  getDate = () => this.dueDate;

  setDate = (date) => (this.dueDate = date);
}

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("default"));
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]("another project"));
  }

  getTodoList = () => this.projects;

  addProject = (project) => this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"](project));

  getProject = (name) => {
    return this.projects.find((project) => project.getName() === name);
  };

  deleteProject = (name) => {
    this.projects.splice(
      this.projects.indexOf(this.projects.find((x) => x.name === name)),
      1
    );
  };
}


/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f99ad4bd471251b0bbc7.png";

/***/ }),

/***/ "./src/pencil-outline.png":
/*!********************************!*\
  !*** ./src/pencil-outline.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b53bf7b71afab0f81b5.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsbURBQW1ELDZDQUFJO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYmdDO0FBQ2hDO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFPO0FBQ2xDLDJCQUEyQixnREFBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxnREFBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9MaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoIGhcXFwiXFxyXFxuICAgIFxcXCJzIG1cXFwiO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGdyaWQtYXJlYTogaDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcXHJcXG4gIGdyaWQtYXJlYTogcztcXHJcXG4gIHBhZGRpbmc6IDMycHggMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICB3aWR0aDogMTZ2dztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMTZweCA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIgcCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24gaW1nIHtcXHJcXG4gIG9wYWNpdHk6IDUwJTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24gaW1nOmhvdmVyIHtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDRweCAzMnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICBncmlkLWFyZWE6IG07XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIgaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIGRpdiB7XFxyXFxuICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDRweCAzMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmFkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDNlZDtcXHJcXG4gIHdpZHRoOiA2NXZ3O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMSkgMHB4IDdweCAyOXB4IDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbmFtZTpmb2N1cyxcXHJcXG4uZHVlLWRhdGU6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGVmdCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNoZWNrYm94IHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDEuNnJlbTtcXHJcXG4gIGhlaWdodDogMS42cmVtO1xcclxcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHJnYigxMjYsIDEyNiwgMTI2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNoZWNrYm94OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gcmdiKDEzMSwgMCwgMTQ2KTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxyXFxuXFxyXFxufVxcclxcbi50b2RvLWNoZWNrYm94OmhvdmVyOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWQzZWQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBvdmVyZmxvdzp2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGU6aG92ZXIge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnRuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMzJweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2I7O1NBRU87RUFDUCw0QkFBNEI7RUFDNUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFEQUFxRDtFQUNyRCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLDZCQUE2QjtFQUM3Qix1RUFBdUU7O0FBRXpFO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoIGhcXFwiXFxyXFxuICAgIFxcXCJzIG1cXFwiO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGdyaWQtYXJlYTogaDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcXHJcXG4gIGdyaWQtYXJlYTogcztcXHJcXG4gIHBhZGRpbmc6IDMycHggMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICB3aWR0aDogMTZ2dztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMTZweCA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIgcCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24gaW1nIHtcXHJcXG4gIG9wYWNpdHk6IDUwJTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24gaW1nOmhvdmVyIHtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDRweCAzMnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICBncmlkLWFyZWE6IG07XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIgaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIGRpdiB7XFxyXFxuICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDRweCAzMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmFkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDNlZDtcXHJcXG4gIHdpZHRoOiA2NXZ3O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMSkgMHB4IDdweCAyOXB4IDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbmFtZTpmb2N1cyxcXHJcXG4uZHVlLWRhdGU6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGVmdCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNoZWNrYm94IHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDEuNnJlbTtcXHJcXG4gIGhlaWdodDogMS42cmVtO1xcclxcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHJnYigxMjYsIDEyNiwgMTI2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNoZWNrYm94OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gcmdiKDEzMSwgMCwgMTQ2KTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxyXFxuXFxyXFxufVxcclxcbi50b2RvLWNoZWNrYm94OmhvdmVyOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcmlnaHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWQzZWQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBvdmVyZmxvdzp2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGU6aG92ZXIge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnRuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMzJweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vZGVsZXRlLnBuZ1wiO1xyXG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4vcGVuY2lsLW91dGxpbmUucG5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBET00gPSB7XHJcbiAgdG9kb2xpc3Q6IG5ldyBUb2RvTGlzdCgpLFxyXG5cclxuICBjdXJyZW50UHJvamVjdDogRE9NLnRvZG9saXN0LmdldFByb2plY3QoXCJkZWZhdWx0XCIpLFxyXG5cclxuICB0b2RvQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpLFxyXG5cclxuICBpbml0KCkge1xyXG4gICAgRE9NLmRpc3BsYXlUb2RvcyhET00uY3VycmVudFByb2plY3QpO1xyXG4gICAgRE9NLmRpc3BsYXlQcm9qZWN0cygpO1xyXG4gICAgRE9NLmhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgfSxcclxuXHJcbiAgYWRkSW5pdGlhbExpc3RlbmVycygpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIERPTS5hZGRUb2RvKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBET00udG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLWljb25cIikgPyBET00uZGVsZXRlVG9kbyhlKSA6IGZhbHNlO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2RvLWNoZWNrYm94XCIpID8gRE9NLmNoZWNrVG9kbyhlKSA6IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWJ1dHRvblwiKVxyXG4gICAgICAgID8gRE9NLmNoYW5nZVByb2plY3QoZSlcclxuICAgICAgICA6IGZhbHNlO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtcHJvamVjdC1idXR0b25cIilcclxuICAgICAgICA/IERPTS5hZGRQcm9qZWN0KClcclxuICAgICAgICA6IGZhbHNlO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LXByb2plY3RcIikgPyBET00uZWRpdFByb2plY3QoZSkgOiBmYWxzZTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXByb2plY3RcIilcclxuICAgICAgICA/IERPTS5kZWxldGVQcm9qZWN0KGUpXHJcbiAgICAgICAgOiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGNoZWNrVG9kbyhlKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICBET00uY3VycmVudFByb2plY3QucmVtb3ZlVG9kbyhlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpO1xyXG4gICAgICBET00uZGlzcGxheVRvZG9zKERPTS5jdXJyZW50UHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYWRkVG9kbygpIHtcclxuICAgIERPTS5jdXJyZW50UHJvamVjdC5hZGRUYXNrKFwibmFtZVwiLCBcIjIwMjItMTEtMTdcIik7XHJcbiAgICBET00uZGlzcGxheVRvZG9zKERPTS5jdXJyZW50UHJvamVjdCk7XHJcbiAgfSxcclxuXHJcbiAgZGlzcGxheVRvZG9zKHByb2plY3QpIHtcclxuICAgIERPTS5jbGVhblRvZG9Db250YWluZXIoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIik7XHJcbiAgICAgIHRvZG9JdGVtLmRhdGFzZXQuaW5kZXggPSBgJHtpfWA7XHJcblxyXG4gICAgICBjb25zdCB0b2RvTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRvZG9MZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxlZnRcIik7XHJcblxyXG4gICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRvZG8tY2hlY2tib3hcIik7XHJcblxyXG4gICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZChcInRvZG8tbmFtZVwiKTtcclxuICAgICAgdG9kb05hbWUuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRhc2tzW2ldLm5hbWV9YDtcclxuXHJcbiAgICAgIGNvbnN0IHRvZG9SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIHRvZG9SaWdodC5jbGFzc0xpc3QuYWRkKFwidG9kby1yaWdodFwiKTtcclxuXHJcbiAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XHJcbiAgICAgIHRvZG9EdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcclxuICAgICAgdG9kb0R1ZURhdGUudmFsdWUgPSBgJHtwcm9qZWN0LnRhc2tzW2ldLmR1ZURhdGV9YDtcclxuICAgICAgdG9kb0R1ZURhdGUubWluID0gXCIyMDIyLTExLTE3XCI7IC8vIHNob3VsZCBiZSB0b2RheSB1c2UgZGF0ZWZuc1xyXG5cclxuICAgICAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWljb25cIik7XHJcbiAgICAgIG15SWNvbi5zcmMgPSBkZWxldGVJY29uO1xyXG5cclxuICAgICAgdG9kb0xlZnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XHJcbiAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9MZWZ0KTtcclxuICAgICAgdG9kb1JpZ2h0LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcclxuICAgICAgdG9kb1JpZ2h0LmFwcGVuZENoaWxkKG15SWNvbik7XHJcbiAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9SaWdodCk7XHJcbiAgICAgIERPTS50b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxuICAgIH1cclxuICAgIERPTS5zYXZlQ29udGVudCgpO1xyXG4gIH0sXHJcblxyXG4gIGRlbGV0ZVRvZG8oZSkge1xyXG4gICAgY29uc3QgdG9kb05hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudDtcclxuICAgIERPTS5jdXJyZW50UHJvamVjdC5yZW1vdmVUb2RvKHRvZG9OYW1lKTtcclxuICAgIERPTS5kaXNwbGF5VG9kb3MoRE9NLmN1cnJlbnRQcm9qZWN0KTtcclxuICB9LFxyXG5cclxuICBjbGVhblRvZG9Db250YWluZXIoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgfSxcclxuXHJcbiAgc2F2ZUNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCB0b2RvbmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG8tbmFtZVwiKTtcclxuICAgIGNvbnN0IGR1ZWRhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kdWUtZGF0ZVwiKTtcclxuXHJcbiAgICAvLyBJIG5lZWQgdG8gcmVmYWN0b3IgdGhlc2UsIHRoZXkgYXJlIHJlcGV0aXRpdmVcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb25hbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRvZG9uYW1lc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgRE9NLmN1cnJlbnRQcm9qZWN0LnRhc2tzW2luZGV4XS5uYW1lID0gdG9kb25hbWVzW2luZGV4XS5pbm5lckhUTUw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZHVlZGF0ZXMuZm9yRWFjaCgoZGF0ZSkgPT4ge1xyXG4gICAgICBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICBET00uY3VycmVudFByb2plY3QudGFza3NbaW5kZXhdLmR1ZURhdGUgPSBkdWVkYXRlc1tpbmRleF0udmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgYWRkUHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gcHJvbXB0KFwiZW50ZXIgcHJvamVjdCBuYW1lXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBBcnJheS5mcm9tKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYnV0dG9uXCIpXHJcbiAgICApO1xyXG4gICAgaWYgKHByb2plY3RCdG5zLmV2ZXJ5KChwKSA9PiBwLnRleHRDb250ZW50ICE9IHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICBET00udG9kb2xpc3QuYWRkUHJvamVjdCh2YWx1ZSk7XHJcbiAgICB9IGVsc2UgYWxlcnQoXCJubyBzYW1lIG5hbWUgb3IgbnVsbCBwbHNcIik7XHJcbiAgICBET00uZGlzcGxheVByb2plY3RzKCk7XHJcbiAgfSxcclxuXHJcbiAgZGlzcGxheVByb2plY3RzKCkge1xyXG4gICAgRE9NLmNsZWFuUHJvamVjdENvbnRhaW5lcigpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBET00udG9kb2xpc3QucHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgIGlmIChET00udG9kb2xpc3QucHJvamVjdHNbaV0gPT0gRE9NLmN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBlZGl0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1wcm9qZWN0XCIpO1xyXG4gICAgICAgIGVkaXRQcm9qZWN0LnNyYyA9IGVkaXRJY29uO1xyXG5cclxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7XHJcbiAgICAgICAgZGVsZXRlUHJvamVjdC5zcmMgPSBkZWxldGVJY29uO1xyXG5cclxuICAgICAgICBwcm9qZWN0ZGl2LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0ZGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3QpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgcGJ0bi50ZXh0Q29udGVudCA9IGAke0RPTS50b2RvbGlzdC5wcm9qZWN0c1tpXS5uYW1lfWA7XHJcbiAgICAgIHBidG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpO1xyXG5cclxuICAgICAgcGJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0ZGl2KTtcclxuICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocGJ0bik7XHJcbiAgICB9XHJcbiAgICBET00uaGlnaGxpZ2h0Q3VycmVudFByb2plY3QoKTtcclxuICB9LFxyXG5cclxuICBlZGl0UHJvamVjdCgpIHtcclxuICAgIERPTS50b2RvbGlzdC51cGRhdGVQcm9qZWN0KFxyXG4gICAgICBET00uY3VycmVudFByb2plY3QsXHJcbiAgICAgIHByb21wdChcImVudGVyIG5ldyBuYW1lXCIsIGAke0RPTS5jdXJyZW50UHJvamVjdC5uYW1lfWApXHJcbiAgICApO1xyXG4gICAgRE9NLmRpc3BsYXlQcm9qZWN0cygpO1xyXG4gIH0sXHJcblxyXG4gIGRlbGV0ZVByb2plY3QoZSkge1xyXG4gICAgdG9kb2xpc3QucmVtb3ZlUHJvamVjdChjdXJyZW50UHJvamVjdCk7XHJcbiAgICBET00uY3VycmVudFByb2plY3QgPVxyXG4gICAgICBET00udG9kb2xpc3QucHJvamVjdHNbXHJcbiAgICAgICAgRE9NLnRvZG9saXN0LnByb2plY3RzLmluZGV4T2YoRE9NLmN1cnJlbnRQcm9qZWN0KSArIDFcclxuICAgICAgXTtcclxuICAgIERPTS5kaXNwbGF5UHJvamVjdHMoKTtcclxuICAgIERPTS5kaXNwbGF5VG9kb3MoRE9NLmN1cnJlbnRQcm9qZWN0KTtcclxuICB9LFxyXG5cclxuICBoaWdobGlnaHRDdXJyZW50UHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYnV0dG9uXCIpO1xyXG4gICAgcHJvamVjdEJ1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSBET00uY3VycmVudFByb2plY3QuZ2V0TmFtZSgpKSB7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgfSBlbHNlIGlmIChidXR0b24udGV4dENvbnRlbnQgIT0gRE9NLmN1cnJlbnRQcm9qZWN0LmdldE5hbWUoKSkge1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInVuc2V0XCI7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIGNoYW5nZVByb2plY3QoZSkge1xyXG4gICAgRE9NLmN1cnJlbnRQcm9qZWN0ID0gRE9NLnRvZG9saXN0LmdldFByb2plY3QoZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gICAgRE9NLmRpc3BsYXlUb2RvcyhET00uY3VycmVudFByb2plY3QpO1xyXG4gICAgRE9NLmhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBET00uZGlzcGxheVByb2plY3RzKCk7XHJcbiAgfSxcclxuXHJcbiAgY2xlYW5Qcm9qZWN0Q29udGFpbmVyKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBET00gZnJvbSBcIi4vRE9NLmpzXCI7XHJcblxyXG5ET00uaW5pdCgpO1xyXG5cclxuRE9NLmFkZEluaXRpYWxMaXN0ZW5lcnMoKTsiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKFwicGxhY2Vob2xkZXIgdGFza1wiKSlcclxuICB9XHJcblxyXG4gIGdldE5hbWUgPSAoKSA9PiB0aGlzLm5hbWU7XHJcblxyXG4gIHNldE5hbWUgPSAobmFtZSkgPT4gKHRoaXMubmFtZSA9IG5hbWUpO1xyXG5cclxuICBhZGRUYXNrID0gKHRhc2ssIGR1ZURhdGUpID0+IHRoaXMudGFza3MucHVzaChuZXcgVGFzayh0YXNrLCBkdWVEYXRlKSk7XHJcblxyXG4gIGdldFRhc2sgPSAobmFtZSkgPT4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gbmFtZSk7IFxyXG5cclxuICBkZWxldGVUYXNrID0gKG5hbWUpID0+IHtcclxuICAgIHRoaXMudG9kb3Muc3BsaWNlKFxyXG4gICAgICB0aGlzLnRvZG9zLmluZGV4T2YodGhpcy50b2Rvcy5maW5kKCh4KSA9PiB4Lm5hbWUgPT09IG5hbWUpKSxcclxuICAgICAgMVxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSA9ICgpID0+IHRoaXMubmFtZTtcclxuXHJcbiAgc2V0TmFtZSA9IChuYW1lKSA9PiAodGhpcy5uYW1lID0gbmFtZSk7XHJcblxyXG4gIGdldERhdGUgPSAoKSA9PiB0aGlzLmR1ZURhdGU7XHJcblxyXG4gIHNldERhdGUgPSAoZGF0ZSkgPT4gKHRoaXMuZHVlRGF0ZSA9IGRhdGUpO1xyXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KFwiZGVmYXVsdFwiKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJhbm90aGVyIHByb2plY3RcIikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb0xpc3QgPSAoKSA9PiB0aGlzLnByb2plY3RzO1xyXG5cclxuICBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0KSk7XHJcblxyXG4gIGdldFByb2plY3QgPSAobmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IG5hbWUpO1xyXG4gIH07XHJcblxyXG4gIGRlbGV0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xyXG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoXHJcbiAgICAgIHRoaXMucHJvamVjdHMuaW5kZXhPZih0aGlzLnByb2plY3RzLmZpbmQoKHgpID0+IHgubmFtZSA9PT0gbmFtZSkpLFxyXG4gICAgICAxXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9