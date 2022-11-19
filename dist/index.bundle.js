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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"h h\"\r\n    \"s m\";\r\n  grid-template-rows: 1fr 15fr;\r\n  grid-template-columns: 1fr 8fr;\r\n}\r\n\r\n.header {\r\n  background-color: #303030;\r\n  color: rgb(255, 255, 255);\r\n  grid-area: h;\r\n  padding: 16px;\r\n}\r\n\r\n.header > div {\r\n  display: flex;\r\n  gap: 16px;\r\n  padding: 8px;\r\n}\r\n\r\n.sidebar {\r\n  background-color: #c9c9c9;\r\n  grid-area: s;\r\n  padding: 32px 16px;\r\n  font-size: 18px;\r\n  min-width: 200px;\r\n  width: 16vw;\r\n}\r\n\r\n.project-container {\r\n  margin: 16px 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.project-container p {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.project-button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: none;\r\n  background: none;\r\n  padding: 4px 8px;\r\n  font-size: 16px;\r\n  height: 35px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.project-button:hover {\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}\r\n\r\n.project-button img {\r\n  opacity: 50%;\r\n  width: 20px;\r\n}\r\n\r\n.project-button img:hover {\r\n  width: 22px;\r\n}\r\n\r\n.add-project-button {\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n  padding: 4px 32px;\r\n  font-size: 16px;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.add-project-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);\r\n}\r\n\r\n.main-container {\r\n  background-color: rgb(236, 236, 236);\r\n  grid-area: m;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-container h2 {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.main-container div {\r\n  margin-left: 8px;\r\n}\r\n\r\n.add-todo-button {\r\n  margin: 16px;\r\n  padding: 4px 32px;\r\n  border: none;\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n}\r\n.add-todo-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);\r\n}\r\n\r\n.todo-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 16px;\r\n}\r\n\r\n.todo-item {\r\n  background-color: #e5d3ed;\r\n  width: 65vw;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px;\r\n  flex-wrap: wrap;\r\n  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.todo-name:focus,\r\n.due-date:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-left {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  grid-template-columns: 2rem auto;\r\n}\r\n\r\n.todo-checkbox {\r\n  appearance: none;\r\n  margin: 0;\r\n  font: inherit;\r\n  width: 1.6rem;\r\n  height: 1.6rem;\r\n  border: 0.15rem solid rgb(126, 126, 126);\r\n  border-radius: 0.15em;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.todo-checkbox::before {\r\n  content: \"\";\r\n  width: 1rem;\r\n  height: 1rem;\r\n  transform: scale(0);\r\n  box-shadow: inset 1rem 1rem rgb(131, 0, 146);\r\n  transform-origin: bottom left;\r\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n\r\n}\r\n.todo-checkbox:hover::before {\r\n  transform: scale(1);\r\n}\r\n\r\n.todo-right {\r\n  width: 9vw;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.delete-icon {\r\n  width: 20px;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.delete-icon:hover {\r\n  width: 22px;\r\n}\r\n\r\n.due-date {\r\n  background-color: #e5d3ed;\r\n  border: none;\r\n  width: 100px;\r\n}\r\n\r\n.due-date:hover {\r\n  outline: 1px solid black;\r\n}\r\n\r\n.add-todo-btn {\r\n  margin-bottom: 16px;\r\n  padding: 8px 32px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb;;SAEO;EACP,4BAA4B;EAC5B,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;EACT,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf,qDAAqD;EACrD,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,aAAa;EACb,aAAa;EACb,cAAc;EACd,wCAAwC;EACxC,qBAAqB;EACrB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,4CAA4C;EAC5C,6BAA6B;EAC7B,uEAAuE;;AAEzE;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"h h\"\r\n    \"s m\";\r\n  grid-template-rows: 1fr 15fr;\r\n  grid-template-columns: 1fr 8fr;\r\n}\r\n\r\n.header {\r\n  background-color: #303030;\r\n  color: rgb(255, 255, 255);\r\n  grid-area: h;\r\n  padding: 16px;\r\n}\r\n\r\n.header > div {\r\n  display: flex;\r\n  gap: 16px;\r\n  padding: 8px;\r\n}\r\n\r\n.sidebar {\r\n  background-color: #c9c9c9;\r\n  grid-area: s;\r\n  padding: 32px 16px;\r\n  font-size: 18px;\r\n  min-width: 200px;\r\n  width: 16vw;\r\n}\r\n\r\n.project-container {\r\n  margin: 16px 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.project-container p {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.project-button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: none;\r\n  background: none;\r\n  padding: 4px 8px;\r\n  font-size: 16px;\r\n  height: 35px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.project-button:hover {\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}\r\n\r\n.project-button img {\r\n  opacity: 50%;\r\n  width: 20px;\r\n}\r\n\r\n.project-button img:hover {\r\n  width: 22px;\r\n}\r\n\r\n.add-project-button {\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n  padding: 4px 32px;\r\n  font-size: 16px;\r\n  border: none;\r\n  background: none;\r\n}\r\n\r\n.add-project-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);\r\n}\r\n\r\n.main-container {\r\n  background-color: rgb(236, 236, 236);\r\n  grid-area: m;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-container h2 {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.main-container div {\r\n  margin-left: 8px;\r\n}\r\n\r\n.add-todo-button {\r\n  margin: 16px;\r\n  padding: 4px 32px;\r\n  border: none;\r\n  background: none;\r\n  font-size: 16px;\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n}\r\n.add-todo-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);\r\n}\r\n\r\n.todo-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 16px;\r\n}\r\n\r\n.todo-item {\r\n  background-color: #e5d3ed;\r\n  width: 65vw;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px;\r\n  flex-wrap: wrap;\r\n  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.todo-name:focus,\r\n.due-date:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-left {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  grid-template-columns: 2rem auto;\r\n}\r\n\r\n.todo-checkbox {\r\n  appearance: none;\r\n  margin: 0;\r\n  font: inherit;\r\n  width: 1.6rem;\r\n  height: 1.6rem;\r\n  border: 0.15rem solid rgb(126, 126, 126);\r\n  border-radius: 0.15em;\r\n  display: grid;\r\n  place-content: center;\r\n}\r\n\r\n.todo-checkbox::before {\r\n  content: \"\";\r\n  width: 1rem;\r\n  height: 1rem;\r\n  transform: scale(0);\r\n  box-shadow: inset 1rem 1rem rgb(131, 0, 146);\r\n  transform-origin: bottom left;\r\n  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);\r\n\r\n}\r\n.todo-checkbox:hover::before {\r\n  transform: scale(1);\r\n}\r\n\r\n.todo-right {\r\n  width: 9vw;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.delete-icon {\r\n  width: 20px;\r\n  padding: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.delete-icon:hover {\r\n  width: 22px;\r\n}\r\n\r\n.due-date {\r\n  background-color: #e5d3ed;\r\n  border: none;\r\n  width: 100px;\r\n}\r\n\r\n.due-date:hover {\r\n  outline: 1px solid black;\r\n}\r\n\r\n.add-todo-btn {\r\n  margin-bottom: 16px;\r\n  padding: 8px 32px;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ "./src/todoList.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _pencil_outline_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pencil-outline.png */ "./src/pencil-outline.png");







const todolist = new _todoList__WEBPACK_IMPORTED_MODULE_1__["default"]();
const defaultProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]("example project 1");
const school = new _project__WEBPACK_IMPORTED_MODULE_2__["default"]("project 2");
const todo1 = new _todo__WEBPACK_IMPORTED_MODULE_3__["default"]("placeholder", "12.12.2022");
const todo2 = new _todo__WEBPACK_IMPORTED_MODULE_3__["default"]("placeholder 2", "09.01.2023");

defaultProject.addTodo(todo1);
school.addTodo(todo2);
todolist.addProject(defaultProject);
todolist.addProject(school);

let currentProject = defaultProject;

const todoContainer = document.querySelector(".todo-container");

displayTodos(currentProject); //display todos for default project on page load
displayProjects();
highlightCurrentProject();

// MAIN CONTAINER

document.querySelector(".add-todo-button").addEventListener("click", () => {
  addTodo();
});

todoContainer.addEventListener("click", (e) => {
  e.target.classList.contains("delete-icon") ? deleteTodo(e) : false;
  e.target.classList.contains("todo-checkbox") ? checkTodo(e) : false;
});

function checkTodo(e) {
  if (e.target.checked) {
    currentProject.removeTodo(e.target.nextElementSibling.textContent);
    displayTodos(currentProject);
  }
}

function addTodo() {
  currentProject.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_3__["default"]("name", "2022-11-17"));
  displayTodos(currentProject);
}

function displayTodos(project) {
  cleanTodoContainer();
  for (let i = 0; i < project.todos.length; i++) {
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
    todoName.textContent = `${project.todos[i].name}`;

    const todoRight = document.createElement("div");
    todoRight.classList.add("todo-right");

    const todoDueDate = document.createElement("input");
    todoDueDate.classList.add("due-date");
    todoDueDate.type = "date";
    todoDueDate.value = `${project.todos[i].dueDate}`;
    todoDueDate.min = "2022-11-17"; // should be today use datefns

    const myIcon = new Image();
    myIcon.classList.add("delete-icon");
    myIcon.src = _delete_png__WEBPACK_IMPORTED_MODULE_4__;

    todoLeft.appendChild(checkbox);
    todoLeft.appendChild(todoName);
    todoItem.appendChild(todoLeft);
    todoRight.appendChild(todoDueDate);
    todoRight.appendChild(myIcon);
    todoItem.appendChild(todoRight);
    todoContainer.appendChild(todoItem);
  }
  saveContent();
}

function deleteTodo(e) {
  const todoName = e.target.parentElement.previousSibling.textContent;
  currentProject.removeTodo(todoName);
  displayTodos(currentProject);
}

function cleanTodoContainer() {
  document.querySelector(".todo-container").innerHTML = "";
}

// CONTENTEDITABLE
function saveContent() {
  const todonames = document.querySelectorAll(".todo-name");
  const duedates = document.querySelectorAll(".due-date");

  // I need to refactor these, they are repetitive
  for (let i = 0; i < todonames.length; i++) {
    todonames[i].addEventListener("blur", (e) => {
      const index = e.target.parentElement.parentElement.dataset.index;
      currentProject.todos[index].name = todonames[index].innerHTML;
    });
  }
  duedates.forEach((date) => {
    date.addEventListener("blur", (e) => {
      const index = e.target.parentElement.parentElement.dataset.index;
      currentProject.todos[index].dueDate = duedates[index].value;
    });
  });
}

// SIDEBAR
document.querySelector(".sidebar").addEventListener("click", (e) => {
  e.target.classList.contains("project-button") ? changeProject(e) : false;
  e.target.classList.contains("add-project-button") ? addProject() : false;
  e.target.classList.contains("edit-project") ? editProject(e) : false;
  e.target.classList.contains("delete-project") ? deleteProject(e) : false;
});

function addProject() {
  const value = prompt("enter project name");
  const projectBtns = Array.from(document.querySelectorAll(".project-button"));
  if (projectBtns.every((p) => p.textContent != value) && value !== null) {
    todolist.addProject(new _project__WEBPACK_IMPORTED_MODULE_2__["default"](value));
  } else alert("no same name or null pls");
  displayProjects();
}

function displayProjects() {
  cleanProjectContainer();
  for (let i = 0; i < todolist.projects.length; i++) {
    const projects = document.querySelector(".project-container");
    const projectdiv = document.createElement("div");

    if (todolist.projects[i] == currentProject) {
      const editProject = new Image();
      editProject.classList.add("edit-project");
      editProject.src = _pencil_outline_png__WEBPACK_IMPORTED_MODULE_5__;

      const deleteProject = new Image();
      deleteProject.classList.add("delete-project");
      deleteProject.src = _delete_png__WEBPACK_IMPORTED_MODULE_4__;

      projectdiv.appendChild(editProject);
      projectdiv.appendChild(deleteProject);
    }

    const pbtn = document.createElement("button");
    pbtn.textContent = `${todolist.projects[i].name}`;
    pbtn.classList.add("project-button");

    pbtn.appendChild(projectdiv);
    projects.appendChild(pbtn);
  }
  highlightCurrentProject();
}

function editProject() {
  todolist.updateProject(
    currentProject,
    prompt("enter new name", `${currentProject.name}`)
  );
  displayProjects();
}

function deleteProject(e) {
  todolist.removeProject(currentProject);
  currentProject =
    todolist.projects[todolist.projects.indexOf(currentProject) + 1];
  displayProjects();
  displayTodos(currentProject);
}

function highlightCurrentProject() {
  const projectButton = document.querySelectorAll(".project-button");
  projectButton.forEach((button) => {
    if (button.textContent == currentProject.name) {
      button.style.backgroundColor = "white";
    } else if (button.textContent != currentProject.name) {
      button.style.backgroundColor = "unset";
    }
  });
}

function changeProject(e) {
  currentProject = todolist.getProject(e.target.textContent);
  displayTodos(currentProject);
  highlightCurrentProject();
  displayProjects();
}

function cleanProjectContainer() {
  document.querySelector(".project-container").innerHTML = "";
}


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
class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
  getTodo(todoName) {
    return this.todos.find((todo) => todo.name === todoName);
  }
  updateTodo(todoName, newName) {
    this.todos.splice(this.todos.indexOf(todoName), 1, newName);
  }
  removeTodo(todoName) {
    this.todos.splice(
      this.todos.indexOf(this.todos.find((x) => x.name === todoName)),
      1
    );
  }
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(name,dueDate) {
    this.name = name;
    this.dueDate = dueDate;
  }
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
class TodoList {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }
  getProject(projectName) {
    return this.projects.find((project) => project.name === projectName);
  }
  updateProject(projectName, newName) {
    const index = this.projects.indexOf(this.getProject(projectName.name));
    this.projects[index].name = newName;
  }
  removeProject(projectName) {
    const index = this.projects.indexOf(this.getProject(projectName.name));
    this.projects.splice(index, 1);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNMZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImggaFxcXCJcXHJcXG4gICAgXFxcInMgbVxcXCI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOGZyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgZ3JpZC1hcmVhOiBoO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljOWM5O1xcclxcbiAgZ3JpZC1hcmVhOiBzO1xcclxcbiAgcGFkZGluZzogMzJweCAxNnB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gIHdpZHRoOiAxNnZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAxNnB4IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciBwIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiBpbWcge1xcclxcbiAgb3BhY2l0eTogNTAlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiBpbWc6aG92ZXIge1xcclxcbiAgd2lkdGg6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogNHB4IDMycHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDE3NiwgMTc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gIGdyaWQtYXJlYTogbTtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciBoMiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIgZGl2IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG9kby1idXR0b24ge1xcclxcbiAgbWFyZ2luOiAxNnB4O1xcclxcbiAgcGFkZGluZzogNHB4IDMycHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4uYWRkLXRvZG8tYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDE3NiwgMTc2KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkM2VkO1xcclxcbiAgd2lkdGg6IDY1dnc7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4xKSAwcHggN3B4IDI5cHggMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1uYW1lOmZvY3VzLFxcclxcbi5kdWUtZGF0ZTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1sZWZ0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2hlY2tib3gge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogMS42cmVtO1xcclxcbiAgaGVpZ2h0OiAxLjZyZW07XFxyXFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgcmdiKDEyNiwgMTI2LCAxMjYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4xNWVtO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY2hlY2tib3g6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFyZW0gMXJlbSByZ2IoMTMxLCAwLCAxNDYpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxyXFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMTQlIDQ0JSwgMCA2NSUsIDUwJSAxMDAlLCAxMDAlIDE2JSwgODAlIDAlLCA0MyUgNjIlKTtcXHJcXG5cXHJcXG59XFxyXFxuLnRvZG8tY2hlY2tib3g6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1yaWdodCB7XFxyXFxuICB3aWR0aDogOXZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDNlZDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlOmhvdmVyIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvLWJ0biB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbiAgcGFkZGluZzogOHB4IDMycHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiOztTQUVPO0VBQ1AsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixxREFBcUQ7RUFDckQsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0NBQXdDO0VBQ3hDLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1Qyw2QkFBNkI7RUFDN0IsdUVBQXVFOztBQUV6RTtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaCBoXFxcIlxcclxcbiAgICBcXFwicyBtXFxcIjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBncmlkLWFyZWE6IGg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XFxyXFxuICBncmlkLWFyZWE6IHM7XFxyXFxuICBwYWRkaW5nOiAzMnB4IDE2cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtaW4td2lkdGg6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDE2dnc7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDE2cHggOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogNHB4IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIGltZyB7XFxyXFxuICBvcGFjaXR5OiA1MCU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIGltZzpob3ZlciB7XFxyXFxuICB3aWR0aDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiA0cHggMzJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgZ3JpZC1hcmVhOiBtO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciBkaXYge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA0cHggMzJweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5hZGQtdG9kby1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzYpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWQzZWQ7XFxyXFxuICB3aWR0aDogNjV2dztcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjEpIDBweCA3cHggMjlweCAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLW5hbWU6Zm9jdXMsXFxyXFxuLmR1ZS1kYXRlOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxlZnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jaGVja2JveCB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiAxLjZyZW07XFxyXFxuICBoZWlnaHQ6IDEuNnJlbTtcXHJcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCByZ2IoMTI2LCAxMjYsIDEyNik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jaGVja2JveDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMXJlbSAxcmVtIHJnYigxMzEsIDAsIDE0Nik7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcclxcblxcclxcbn1cXHJcXG4udG9kby1jaGVja2JveDpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiA5dnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWljb246aG92ZXIge1xcclxcbiAgd2lkdGg6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkM2VkO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGU6aG92ZXIge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnRuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMzJweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb0xpc3RcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2RlbGV0ZS5wbmdcIjtcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gXCIuL3BlbmNpbC1vdXRsaW5lLnBuZ1wiO1xyXG5cclxuY29uc3QgdG9kb2xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcImV4YW1wbGUgcHJvamVjdCAxXCIpO1xyXG5jb25zdCBzY2hvb2wgPSBuZXcgUHJvamVjdChcInByb2plY3QgMlwiKTtcclxuY29uc3QgdG9kbzEgPSBuZXcgVG9kbyhcInBsYWNlaG9sZGVyXCIsIFwiMTIuMTIuMjAyMlwiKTtcclxuY29uc3QgdG9kbzIgPSBuZXcgVG9kbyhcInBsYWNlaG9sZGVyIDJcIiwgXCIwOS4wMS4yMDIzXCIpO1xyXG5cclxuZGVmYXVsdFByb2plY3QuYWRkVG9kbyh0b2RvMSk7XHJcbnNjaG9vbC5hZGRUb2RvKHRvZG8yKTtcclxudG9kb2xpc3QuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XHJcbnRvZG9saXN0LmFkZFByb2plY3Qoc2Nob29sKTtcclxuXHJcbmxldCBjdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xyXG5cclxuY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIik7XHJcblxyXG5kaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QpOyAvL2Rpc3BsYXkgdG9kb3MgZm9yIGRlZmF1bHQgcHJvamVjdCBvbiBwYWdlIGxvYWRcclxuZGlzcGxheVByb2plY3RzKCk7XHJcbmhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0KCk7XHJcblxyXG4vLyBNQUlOIENPTlRBSU5FUlxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBhZGRUb2RvKCk7XHJcbn0pO1xyXG5cclxudG9kb0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtaWNvblwiKSA/IGRlbGV0ZVRvZG8oZSkgOiBmYWxzZTtcclxuICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2RvLWNoZWNrYm94XCIpID8gY2hlY2tUb2RvKGUpIDogZmFsc2U7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hlY2tUb2RvKGUpIHtcclxuICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgY3VycmVudFByb2plY3QucmVtb3ZlVG9kbyhlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQpO1xyXG4gICAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG8oKSB7XHJcbiAgY3VycmVudFByb2plY3QuYWRkVG9kbyhuZXcgVG9kbyhcIm5hbWVcIiwgXCIyMDIyLTExLTE3XCIpKTtcclxuICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9kb3MocHJvamVjdCkge1xyXG4gIGNsZWFuVG9kb0NvbnRhaW5lcigpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcclxuICAgIHRvZG9JdGVtLmRhdGFzZXQuaW5kZXggPSBgJHtpfWA7XHJcblxyXG4gICAgY29uc3QgdG9kb0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG9kb0xlZnQuY2xhc3NMaXN0LmFkZChcInRvZG8tbGVmdFwiKTtcclxuXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidG9kby1jaGVja2JveFwiKTtcclxuXHJcbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIHRvZG9OYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWVcIik7XHJcbiAgICB0b2RvTmFtZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xyXG4gICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRvZG9zW2ldLm5hbWV9YDtcclxuXHJcbiAgICBjb25zdCB0b2RvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG9kb1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJpZ2h0XCIpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xyXG4gICAgdG9kb0R1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgdG9kb0R1ZURhdGUudmFsdWUgPSBgJHtwcm9qZWN0LnRvZG9zW2ldLmR1ZURhdGV9YDtcclxuICAgIHRvZG9EdWVEYXRlLm1pbiA9IFwiMjAyMi0xMS0xN1wiOyAvLyBzaG91bGQgYmUgdG9kYXkgdXNlIGRhdGVmbnNcclxuXHJcbiAgICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWljb25cIik7XHJcbiAgICBteUljb24uc3JjID0gZGVsZXRlSWNvbjtcclxuXHJcbiAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICB0b2RvTGVmdC5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvTGVmdCk7XHJcbiAgICB0b2RvUmlnaHQuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xyXG4gICAgdG9kb1JpZ2h0LmFwcGVuZENoaWxkKG15SWNvbik7XHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvUmlnaHQpO1xyXG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbSk7XHJcbiAgfVxyXG4gIHNhdmVDb250ZW50KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oZSkge1xyXG4gIGNvbnN0IHRvZG9OYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcudGV4dENvbnRlbnQ7XHJcbiAgY3VycmVudFByb2plY3QucmVtb3ZlVG9kbyh0b2RvTmFtZSk7XHJcbiAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Ub2RvQ29udGFpbmVyKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuLy8gQ09OVEVOVEVESVRBQkxFXHJcbmZ1bmN0aW9uIHNhdmVDb250ZW50KCkge1xyXG4gIGNvbnN0IHRvZG9uYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1uYW1lXCIpO1xyXG4gIGNvbnN0IGR1ZWRhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kdWUtZGF0ZVwiKTtcclxuXHJcbiAgLy8gSSBuZWVkIHRvIHJlZmFjdG9yIHRoZXNlLCB0aGV5IGFyZSByZXBldGl0aXZlXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvbmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHRvZG9uYW1lc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICBjdXJyZW50UHJvamVjdC50b2Rvc1tpbmRleF0ubmFtZSA9IHRvZG9uYW1lc1tpbmRleF0uaW5uZXJIVE1MO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGR1ZWRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcclxuICAgIGRhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcclxuICAgICAgY3VycmVudFByb2plY3QudG9kb3NbaW5kZXhdLmR1ZURhdGUgPSBkdWVkYXRlc1tpbmRleF0udmFsdWU7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gU0lERUJBUlxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1idXR0b25cIikgPyBjaGFuZ2VQcm9qZWN0KGUpIDogZmFsc2U7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWRkLXByb2plY3QtYnV0dG9uXCIpID8gYWRkUHJvamVjdCgpIDogZmFsc2U7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZWRpdC1wcm9qZWN0XCIpID8gZWRpdFByb2plY3QoZSkgOiBmYWxzZTtcclxuICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJkZWxldGUtcHJvamVjdFwiKSA/IGRlbGV0ZVByb2plY3QoZSkgOiBmYWxzZTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gIGNvbnN0IHZhbHVlID0gcHJvbXB0KFwiZW50ZXIgcHJvamVjdCBuYW1lXCIpO1xyXG4gIGNvbnN0IHByb2plY3RCdG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYnV0dG9uXCIpKTtcclxuICBpZiAocHJvamVjdEJ0bnMuZXZlcnkoKHApID0+IHAudGV4dENvbnRlbnQgIT0gdmFsdWUpICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICB0b2RvbGlzdC5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KHZhbHVlKSk7XHJcbiAgfSBlbHNlIGFsZXJ0KFwibm8gc2FtZSBuYW1lIG9yIG51bGwgcGxzXCIpO1xyXG4gIGRpc3BsYXlQcm9qZWN0cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMoKSB7XHJcbiAgY2xlYW5Qcm9qZWN0Q29udGFpbmVyKCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvbGlzdC5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgaWYgKHRvZG9saXN0LnByb2plY3RzW2ldID09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXByb2plY3RcIik7XHJcbiAgICAgIGVkaXRQcm9qZWN0LnNyYyA9IGVkaXRJY29uO1xyXG5cclxuICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBkZWxldGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKTtcclxuICAgICAgZGVsZXRlUHJvamVjdC5zcmMgPSBkZWxldGVJY29uO1xyXG5cclxuICAgICAgcHJvamVjdGRpdi5hcHBlbmRDaGlsZChlZGl0UHJvamVjdCk7XHJcbiAgICAgIHByb2plY3RkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwYnRuLnRleHRDb250ZW50ID0gYCR7dG9kb2xpc3QucHJvamVjdHNbaV0ubmFtZX1gO1xyXG4gICAgcGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XHJcblxyXG4gICAgcGJ0bi5hcHBlbmRDaGlsZChwcm9qZWN0ZGl2KTtcclxuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHBidG4pO1xyXG4gIH1cclxuICBoaWdobGlnaHRDdXJyZW50UHJvamVjdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0UHJvamVjdCgpIHtcclxuICB0b2RvbGlzdC51cGRhdGVQcm9qZWN0KFxyXG4gICAgY3VycmVudFByb2plY3QsXHJcbiAgICBwcm9tcHQoXCJlbnRlciBuZXcgbmFtZVwiLCBgJHtjdXJyZW50UHJvamVjdC5uYW1lfWApXHJcbiAgKTtcclxuICBkaXNwbGF5UHJvamVjdHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XHJcbiAgdG9kb2xpc3QucmVtb3ZlUHJvamVjdChjdXJyZW50UHJvamVjdCk7XHJcbiAgY3VycmVudFByb2plY3QgPVxyXG4gICAgdG9kb2xpc3QucHJvamVjdHNbdG9kb2xpc3QucHJvamVjdHMuaW5kZXhPZihjdXJyZW50UHJvamVjdCkgKyAxXTtcclxuICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdobGlnaHRDdXJyZW50UHJvamVjdCgpIHtcclxuICBjb25zdCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWJ1dHRvblwiKTtcclxuICBwcm9qZWN0QnV0dG9uLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PSBjdXJyZW50UHJvamVjdC5uYW1lKSB7XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICB9IGVsc2UgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCAhPSBjdXJyZW50UHJvamVjdC5uYW1lKSB7XHJcbiAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInVuc2V0XCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVByb2plY3QoZSkge1xyXG4gIGN1cnJlbnRQcm9qZWN0ID0gdG9kb2xpc3QuZ2V0UHJvamVjdChlLnRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcclxuICBoaWdobGlnaHRDdXJyZW50UHJvamVjdCgpO1xyXG4gIGRpc3BsYXlQcm9qZWN0cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhblByb2plY3RDb250YWluZXIoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRvZG8pIHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICB9XHJcbiAgZ2V0VG9kbyh0b2RvTmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5uYW1lID09PSB0b2RvTmFtZSk7XHJcbiAgfVxyXG4gIHVwZGF0ZVRvZG8odG9kb05hbWUsIG5ld05hbWUpIHtcclxuICAgIHRoaXMudG9kb3Muc3BsaWNlKHRoaXMudG9kb3MuaW5kZXhPZih0b2RvTmFtZSksIDEsIG5ld05hbWUpO1xyXG4gIH1cclxuICByZW1vdmVUb2RvKHRvZG9OYW1lKSB7XHJcbiAgICB0aGlzLnRvZG9zLnNwbGljZShcclxuICAgICAgdGhpcy50b2Rvcy5pbmRleE9mKHRoaXMudG9kb3MuZmluZCgoeCkgPT4geC5uYW1lID09PSB0b2RvTmFtZSkpLFxyXG4gICAgICAxXHJcbiAgICApO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsZHVlRGF0ZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgfVxyXG4gIGdldFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xyXG4gIH1cclxuICB1cGRhdGVQcm9qZWN0KHByb2plY3ROYW1lLCBuZXdOYW1lKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZih0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUubmFtZSkpO1xyXG4gICAgdGhpcy5wcm9qZWN0c1tpbmRleF0ubmFtZSA9IG5ld05hbWU7XHJcbiAgfVxyXG4gIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5pbmRleE9mKHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZS5uYW1lKSk7XHJcbiAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==