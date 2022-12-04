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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaCBoXFxcIlxcclxcbiAgICBcXFwicyBtXFxcIjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE1ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzAzMDtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBncmlkLWFyZWE6IGg7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XFxyXFxuICBncmlkLWFyZWE6IHM7XFxyXFxuICBwYWRkaW5nOiAzMnB4IDE2cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtaW4td2lkdGg6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDE2dnc7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDE2cHggOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgcGFkZGluZzogNHB4IDhweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIGltZyB7XFxyXFxuICBvcGFjaXR5OiA1MCU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIGltZzpob3ZlciB7XFxyXFxuICB3aWR0aDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiA0cHggMzJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgZ3JpZC1hcmVhOiBtO1xcclxcbiAgcGFkZGluZzogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciBkaXYge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvLWJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA0cHggMzJweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5hZGQtdG9kby1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzYpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWQzZWQ7XFxyXFxuICB3aWR0aDogNjV2dztcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjEpIDBweCA3cHggMjlweCAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLW5hbWU6Zm9jdXMsXFxyXFxuLmR1ZS1kYXRlOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxlZnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jaGVja2JveCB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiAxLjZyZW07XFxyXFxuICBoZWlnaHQ6IDEuNnJlbTtcXHJcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCByZ2IoMTI2LCAxMjYsIDEyNik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjE1ZW07XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jaGVja2JveDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMXJlbSAxcmVtIHJnYigxMzEsIDAsIDE0Nik7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXHJcXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNCUgNDQlLCAwIDY1JSwgNTAlIDEwMCUsIDEwMCUgMTYlLCA4MCUgMCUsIDQzJSA2MiUpO1xcclxcblxcclxcbn1cXHJcXG4udG9kby1jaGVja2JveDpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXJpZ2h0IHtcXHJcXG4gIHdpZHRoOiA5dnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1pY29uIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWljb246aG92ZXIge1xcclxcbiAgd2lkdGg6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkM2VkO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGU6aG92ZXIge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnRuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMzJweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2I7O1NBRU87RUFDUCw0QkFBNEI7RUFDNUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFEQUFxRDtFQUNyRCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsNENBQTRDO0VBQzVDLDZCQUE2QjtFQUM3Qix1RUFBdUU7O0FBRXpFO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoIGhcXFwiXFxyXFxuICAgIFxcXCJzIG1cXFwiO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGdyaWQtYXJlYTogaDtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcXHJcXG4gIGdyaWQtYXJlYTogcztcXHJcXG4gIHBhZGRpbmc6IDMycHggMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICB3aWR0aDogMTZ2dztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMTZweCA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIgcCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24gaW1nIHtcXHJcXG4gIG9wYWNpdHk6IDUwJTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24gaW1nOmhvdmVyIHtcXHJcXG4gIHdpZHRoOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDRweCAzMnB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICBncmlkLWFyZWE6IG07XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIgaDIge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIGRpdiB7XFxyXFxuICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDRweCAzMnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmFkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCAxNzYsIDE3Nik7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDNlZDtcXHJcXG4gIHdpZHRoOiA2NXZ3O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMSkgMHB4IDdweCAyOXB4IDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbmFtZTpmb2N1cyxcXHJcXG4uZHVlLWRhdGU6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGVmdCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNoZWNrYm94IHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250OiBpbmhlcml0O1xcclxcbiAgd2lkdGg6IDEuNnJlbTtcXHJcXG4gIGhlaWdodDogMS42cmVtO1xcclxcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHJnYigxMjYsIDEyNiwgMTI2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTVlbTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNoZWNrYm94OjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAxcmVtIDFyZW0gcmdiKDEzMSwgMCwgMTQ2KTtcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcclxcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE0JSA0NCUsIDAgNjUlLCA1MCUgMTAwJSwgMTAwJSAxNiUsIDgwJSAwJSwgNDMlIDYyJSk7XFxyXFxuXFxyXFxufVxcclxcbi50b2RvLWNoZWNrYm94OmhvdmVyOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcmlnaHQge1xcclxcbiAgd2lkdGg6IDl2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWljb24ge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtaWNvbjpob3ZlciB7XFxyXFxuICB3aWR0aDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWQzZWQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZTpob3ZlciB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdG9kby1idG4ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAzMnB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi90b2RvTGlzdFwiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcclxuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vZGVsZXRlLnBuZ1wiO1xyXG5pbXBvcnQgZWRpdEljb24gZnJvbSBcIi4vcGVuY2lsLW91dGxpbmUucG5nXCI7XHJcblxyXG5jb25zdCB0b2RvbGlzdCA9IG5ldyBUb2RvTGlzdCgpO1xyXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiZXhhbXBsZSBwcm9qZWN0IDFcIik7XHJcbmNvbnN0IHNjaG9vbCA9IG5ldyBQcm9qZWN0KFwicHJvamVjdCAyXCIpO1xyXG5jb25zdCB0b2RvMSA9IG5ldyBUb2RvKFwicGxhY2Vob2xkZXJcIiwgXCIxMi4xMi4yMDIyXCIpO1xyXG5jb25zdCB0b2RvMiA9IG5ldyBUb2RvKFwicGxhY2Vob2xkZXIgMlwiLCBcIjA5LjAxLjIwMjNcIik7XHJcblxyXG5kZWZhdWx0UHJvamVjdC5hZGRUb2RvKHRvZG8xKTtcclxuc2Nob29sLmFkZFRvZG8odG9kbzIpO1xyXG50b2RvbGlzdC5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcclxudG9kb2xpc3QuYWRkUHJvamVjdChzY2hvb2wpO1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gZGVmYXVsdFByb2plY3Q7XHJcblxyXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKTtcclxuXHJcbmRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCk7IC8vZGlzcGxheSB0b2RvcyBmb3IgZGVmYXVsdCBwcm9qZWN0IG9uIHBhZ2UgbG9hZFxyXG5kaXNwbGF5UHJvamVjdHMoKTtcclxuaGlnaGxpZ2h0Q3VycmVudFByb2plY3QoKTtcclxuXHJcbi8vIE1BSU4gQ09OVEFJTkVSXHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10b2RvLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGFkZFRvZG8oKTtcclxufSk7XHJcblxyXG50b2RvQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1pY29uXCIpID8gZGVsZXRlVG9kbyhlKSA6IGZhbHNlO1xyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRvZG8tY2hlY2tib3hcIikgPyBjaGVja1RvZG8oZSkgOiBmYWxzZTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjaGVja1RvZG8oZSkge1xyXG4gIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICBjdXJyZW50UHJvamVjdC5yZW1vdmVUb2RvKGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCk7XHJcbiAgICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG9kbygpIHtcclxuICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvKFwibmFtZVwiLCBcIjIwMjItMTEtMTdcIikpO1xyXG4gIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2Rvcyhwcm9qZWN0KSB7XHJcbiAgY2xlYW5Ub2RvQ29udGFpbmVyKCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xyXG4gICAgdG9kb0l0ZW0uZGF0YXNldC5pbmRleCA9IGAke2l9YDtcclxuXHJcbiAgICBjb25zdCB0b2RvTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RvTGVmdC5jbGFzc0xpc3QuYWRkKFwidG9kby1sZWZ0XCIpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcclxuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNoZWNrYm94XCIpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZChcInRvZG8tbmFtZVwiKTtcclxuICAgIHRvZG9OYW1lLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XHJcbiAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudG9kb3NbaV0ubmFtZX1gO1xyXG5cclxuICAgIGNvbnN0IHRvZG9SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RvUmlnaHQuY2xhc3NMaXN0LmFkZChcInRvZG8tcmlnaHRcIik7XHJcblxyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XHJcbiAgICB0b2RvRHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcbiAgICB0b2RvRHVlRGF0ZS52YWx1ZSA9IGAke3Byb2plY3QudG9kb3NbaV0uZHVlRGF0ZX1gO1xyXG4gICAgdG9kb0R1ZURhdGUubWluID0gXCIyMDIyLTExLTE3XCI7IC8vIHNob3VsZCBiZSB0b2RheSB1c2UgZGF0ZWZuc1xyXG5cclxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbXlJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaWNvblwiKTtcclxuICAgIG15SWNvbi5zcmMgPSBkZWxldGVJY29uO1xyXG5cclxuICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgIHRvZG9MZWZ0LmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcclxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9MZWZ0KTtcclxuICAgIHRvZG9SaWdodC5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XHJcbiAgICB0b2RvUmlnaHQuYXBwZW5kQ2hpbGQobXlJY29uKTtcclxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9SaWdodCk7XHJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxuICB9XHJcbiAgc2F2ZUNvbnRlbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVG9kbyhlKSB7XHJcbiAgY29uc3QgdG9kb05hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudDtcclxuICBjdXJyZW50UHJvamVjdC5yZW1vdmVUb2RvKHRvZG9OYW1lKTtcclxuICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhblRvZG9Db250YWluZXIoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xyXG59XHJcblxyXG4vLyBDT05URU5URURJVEFCTEVcclxuZnVuY3Rpb24gc2F2ZUNvbnRlbnQoKSB7XHJcbiAgY29uc3QgdG9kb25hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvLW5hbWVcIik7XHJcbiAgY29uc3QgZHVlZGF0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmR1ZS1kYXRlXCIpO1xyXG5cclxuICAvLyBJIG5lZWQgdG8gcmVmYWN0b3IgdGhlc2UsIHRoZXkgYXJlIHJlcGV0aXRpdmVcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9uYW1lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdG9kb25hbWVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIGN1cnJlbnRQcm9qZWN0LnRvZG9zW2luZGV4XS5uYW1lID0gdG9kb25hbWVzW2luZGV4XS5pbm5lckhUTUw7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZHVlZGF0ZXMuZm9yRWFjaCgoZGF0ZSkgPT4ge1xyXG4gICAgZGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICBjdXJyZW50UHJvamVjdC50b2Rvc1tpbmRleF0uZHVlRGF0ZSA9IGR1ZWRhdGVzW2luZGV4XS52YWx1ZTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBTSURFQkFSXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LWJ1dHRvblwiKSA/IGNoYW5nZVByb2plY3QoZSkgOiBmYWxzZTtcclxuICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtcHJvamVjdC1idXR0b25cIikgPyBhZGRQcm9qZWN0KCkgOiBmYWxzZTtcclxuICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJlZGl0LXByb2plY3RcIikgPyBlZGl0UHJvamVjdChlKSA6IGZhbHNlO1xyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1wcm9qZWN0XCIpID8gZGVsZXRlUHJvamVjdChlKSA6IGZhbHNlO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgY29uc3QgdmFsdWUgPSBwcm9tcHQoXCJlbnRlciBwcm9qZWN0IG5hbWVcIik7XHJcbiAgY29uc3QgcHJvamVjdEJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1idXR0b25cIikpO1xyXG4gIGlmIChwcm9qZWN0QnRucy5ldmVyeSgocCkgPT4gcC50ZXh0Q29udGVudCAhPSB2YWx1ZSkgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgIHRvZG9saXN0LmFkZFByb2plY3QobmV3IFByb2plY3QodmFsdWUpKTtcclxuICB9IGVsc2UgYWxlcnQoXCJubyBzYW1lIG5hbWUgb3IgbnVsbCBwbHNcIik7XHJcbiAgZGlzcGxheVByb2plY3RzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcclxuICBjbGVhblByb2plY3RDb250YWluZXIoKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9saXN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBpZiAodG9kb2xpc3QucHJvamVjdHNbaV0gPT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgY29uc3QgZWRpdFByb2plY3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdFwiKTtcclxuICAgICAgZWRpdFByb2plY3Quc3JjID0gZWRpdEljb247XHJcblxyXG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpO1xyXG4gICAgICBkZWxldGVQcm9qZWN0LnNyYyA9IGRlbGV0ZUljb247XHJcblxyXG4gICAgICBwcm9qZWN0ZGl2LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0KTtcclxuICAgICAgcHJvamVjdGRpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHBidG4udGV4dENvbnRlbnQgPSBgJHt0b2RvbGlzdC5wcm9qZWN0c1tpXS5uYW1lfWA7XHJcbiAgICBwYnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcclxuXHJcbiAgICBwYnRuLmFwcGVuZENoaWxkKHByb2plY3RkaXYpO1xyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocGJ0bik7XHJcbiAgfVxyXG4gIGhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KCkge1xyXG4gIHRvZG9saXN0LnVwZGF0ZVByb2plY3QoXHJcbiAgICBjdXJyZW50UHJvamVjdCxcclxuICAgIHByb21wdChcImVudGVyIG5ldyBuYW1lXCIsIGAke2N1cnJlbnRQcm9qZWN0Lm5hbWV9YClcclxuICApO1xyXG4gIGRpc3BsYXlQcm9qZWN0cygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcclxuICB0b2RvbGlzdC5yZW1vdmVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcclxuICBjdXJyZW50UHJvamVjdCA9XHJcbiAgICB0b2RvbGlzdC5wcm9qZWN0c1t0b2RvbGlzdC5wcm9qZWN0cy5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KSArIDFdO1xyXG4gIGRpc3BsYXlQcm9qZWN0cygpO1xyXG4gIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0KCkge1xyXG4gIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtYnV0dG9uXCIpO1xyXG4gIHByb2plY3RCdXR0b24uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09IGN1cnJlbnRQcm9qZWN0Lm5hbWUpIHtcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgIH0gZWxzZSBpZiAoYnV0dG9uLnRleHRDb250ZW50ICE9IGN1cnJlbnRQcm9qZWN0Lm5hbWUpIHtcclxuICAgICAgYnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidW5zZXRcIjtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUHJvamVjdChlKSB7XHJcbiAgY3VycmVudFByb2plY3QgPSB0b2RvbGlzdC5nZXRQcm9qZWN0KGUudGFyZ2V0LnRleHRDb250ZW50KTtcclxuICBkaXNwbGF5VG9kb3MoY3VycmVudFByb2plY3QpO1xyXG4gIGhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgZGlzcGxheVByb2plY3RzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuUHJvamVjdENvbnRhaW5lcigpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0b2RvKSB7XHJcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgfVxyXG4gIGdldFRvZG8odG9kb05hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8ubmFtZSA9PT0gdG9kb05hbWUpO1xyXG4gIH1cclxuICB1cGRhdGVUb2RvKHRvZG9OYW1lLCBuZXdOYW1lKSB7XHJcbiAgICB0aGlzLnRvZG9zLnNwbGljZSh0aGlzLnRvZG9zLmluZGV4T2YodG9kb05hbWUpLCAxLCBuZXdOYW1lKTtcclxuICB9XHJcbiAgcmVtb3ZlVG9kbyh0b2RvTmFtZSkge1xyXG4gICAgdGhpcy50b2Rvcy5zcGxpY2UoXHJcbiAgICAgIHRoaXMudG9kb3MuaW5kZXhPZih0aGlzLnRvZG9zLmZpbmQoKHgpID0+IHgubmFtZSA9PT0gdG9kb05hbWUpKSxcclxuICAgICAgMVxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLGR1ZURhdGUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gIH1cclxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuICB9XHJcbiAgdXBkYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgbmV3TmFtZSkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmluZGV4T2YodGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lLm5hbWUpKTtcclxuICAgIHRoaXMucHJvamVjdHNbaW5kZXhdLm5hbWUgPSBuZXdOYW1lO1xyXG4gIH1cclxuICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZih0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUubmFtZSkpO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=