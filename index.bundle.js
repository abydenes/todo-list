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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"h h\"\r\n    \"s m\";\r\n  grid-template-rows: 1fr 15fr;\r\n  grid-template-columns: 1fr 8fr;\r\n}\r\n\r\n.header {\r\n  background-color: #303030;\r\n  color: rgb(255, 255, 255);\r\n  grid-area: h;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px;\r\n}\r\n\r\n.header > div {\r\n  display: flex;\r\n  gap: 16px;\r\n  padding: 8px;\r\n}\r\n\r\n.sidebar {\r\n  background-color: #c9c9c9;\r\n  grid-area: s;\r\n  padding: 32px 16px;\r\n  font-size: 18px;\r\n  min-width: 200px;\r\n  width: 13vw;\r\n}\r\n\r\n.sidebar button {\r\n  padding: 4px 8px;\r\n  border: none;\r\n  background: none;\r\n  font-size: 16px;\r\n  text-align: left;\r\n}\r\n\r\n.project-container {\r\n  margin: 16px 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.project-container p {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.project-button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 35px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.project-button:hover {\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}\r\n\r\n.project-button img {\r\n  opacity: 50%;\r\n  width: 20px;\r\n}\r\n\r\n.project-button img:hover {\r\n  width: 22px;\r\n}\r\n\r\n.new-project-button {\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n}\r\n.new-project-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);;\r\n}\r\n\r\n.main-container {\r\n  background-color: rgb(236, 236, 236);\r\n  grid-area: m;\r\n  padding: 32px 64px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-container h2 {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.main-container div {\r\n  margin-left: 8px;\r\n}\r\n\r\n.todo-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 16px;\r\n}\r\n\r\n.todo-item {\r\n  background-color: #e5d3ed;\r\n  width: 250px;\r\n  min-height: 150px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding: 16px;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n  border-radius: 5px;\r\n  /* transition: all 0.2s ease-in-out; */\r\n}\r\n\r\n.todo-item:hover {\r\n  /* transform: scale(1.03); */\r\n}\r\n\r\n.todo-name {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.todo-name:focus,\r\n.todo-desc:focus,\r\n.due-date:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-desc {\r\n  padding: 8px;\r\n}\r\n\r\n.todo-item > small {\r\n  display: flex;\r\n  align-self: flex-end;\r\n}\r\n\r\n.todo-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.delete-icon {\r\n  width: 20px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n.delete-icon:hover {\r\n  background: #b9b9b9;\r\n\r\n  border-radius: 50%;\r\n}\r\n\r\n.due-date {\r\n  background-color: #e5d3ed;\r\n  border: none;\r\n  width: 100px;\r\n}\r\n\r\n.due-date:hover {\r\n  outline: 1px solid black;\r\n}\r\n\r\n.add-todo-btn {\r\n  margin-bottom: 16px;\r\n  padding: 8px 32px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb;;SAEO;EACP,4BAA4B;EAC5B,8BAA8B;AAChC;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,aAAa;EACb,qDAAqD;EACrD,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,mBAAmB;;EAEnB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"h h\"\r\n    \"s m\";\r\n  grid-template-rows: 1fr 15fr;\r\n  grid-template-columns: 1fr 8fr;\r\n}\r\n\r\n.header {\r\n  background-color: #303030;\r\n  color: rgb(255, 255, 255);\r\n  grid-area: h;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 8px;\r\n}\r\n\r\n.header > div {\r\n  display: flex;\r\n  gap: 16px;\r\n  padding: 8px;\r\n}\r\n\r\n.sidebar {\r\n  background-color: #c9c9c9;\r\n  grid-area: s;\r\n  padding: 32px 16px;\r\n  font-size: 18px;\r\n  min-width: 200px;\r\n  width: 13vw;\r\n}\r\n\r\n.sidebar button {\r\n  padding: 4px 8px;\r\n  border: none;\r\n  background: none;\r\n  font-size: 16px;\r\n  text-align: left;\r\n}\r\n\r\n.project-container {\r\n  margin: 16px 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.project-container p {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.project-button {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 35px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.project-button:hover {\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n}\r\n\r\n.project-button img {\r\n  opacity: 50%;\r\n  width: 20px;\r\n}\r\n\r\n.project-button img:hover {\r\n  width: 22px;\r\n}\r\n\r\n.new-project-button {\r\n  outline: 1px solid black;\r\n  border-radius: 5px;\r\n}\r\n.new-project-button:hover {\r\n  cursor: pointer;\r\n  background-color: rgb(176, 176, 176);;\r\n}\r\n\r\n.main-container {\r\n  background-color: rgb(236, 236, 236);\r\n  grid-area: m;\r\n  padding: 32px 64px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-container h2 {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.main-container div {\r\n  margin-left: 8px;\r\n}\r\n\r\n.todo-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 16px;\r\n}\r\n\r\n.todo-item {\r\n  background-color: #e5d3ed;\r\n  width: 250px;\r\n  min-height: 150px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  padding: 16px;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n  border-radius: 5px;\r\n  /* transition: all 0.2s ease-in-out; */\r\n}\r\n\r\n.todo-item:hover {\r\n  /* transform: scale(1.03); */\r\n}\r\n\r\n.todo-name {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.todo-name:focus,\r\n.todo-desc:focus,\r\n.due-date:focus {\r\n  outline: none;\r\n}\r\n\r\n.todo-desc {\r\n  padding: 8px;\r\n}\r\n\r\n.todo-item > small {\r\n  display: flex;\r\n  align-self: flex-end;\r\n}\r\n\r\n.todo-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.delete-icon {\r\n  width: 20px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n}\r\n.delete-icon:hover {\r\n  background: #b9b9b9;\r\n\r\n  border-radius: 50%;\r\n}\r\n\r\n.due-date {\r\n  background-color: #e5d3ed;\r\n  border: none;\r\n  width: 100px;\r\n}\r\n\r\n.due-date:hover {\r\n  outline: 1px solid black;\r\n}\r\n\r\n.add-todo-btn {\r\n  margin-bottom: 16px;\r\n  padding: 8px 32px;\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _pencil_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pencil-outline.png */ "./src/pencil-outline.png");




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

class Todo {
  constructor(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const todolist = new TodoList();
const defaultProject = new Project("defaultProject");
const school = new Project("school");
const todo1 = new Todo("study js", "till chapter 9", "12.12.2022", "Important");
const todo2 = new Todo("math hw", "pages 19-23", "09.01.2023", "Important");

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

document.querySelector(".add-todo-btn").addEventListener("click", () => {
  addTodo();
});

todoContainer.addEventListener("click", (e) => {
  e.target.classList.contains("delete-icon") ? deleteTodo(e) : false;
});

function addTodo() {
  currentProject.addTodo(new Todo("title", "description", "2022-11-17", ""));
  displayTodos(currentProject);
}

function displayTodos(project) {
  cleanTodoContainer();
  for (let i = 0; i < project.todos.length; i++) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.dataset.index = `${i}`;

    const todoHeader = document.createElement("div");
    todoHeader.classList.add("todo-header");

    const todoName = document.createElement("h3");
    todoName.classList.add("todo-name");
    todoName.setAttribute("contenteditable", "true");
    todoName.textContent = `${project.todos[i].name}`;

    const todoDesc = document.createElement("small");
    todoDesc.classList.add("todo-desc");
    todoDesc.setAttribute("contenteditable", "true");
    todoDesc.textContent = `${project.todos[i].desc}`;

    const todoFooter = document.createElement("div");
    todoFooter.classList.add("todo-footer");

    const todoDueDate = document.createElement("input");
    todoDueDate.classList.add("due-date");
    todoDueDate.type = "date";
    todoDueDate.value = `${project.todos[i].dueDate}`;
    todoDueDate.min = "2022-11-17"; // should be today use datefns

    const myIcon = new Image();
    myIcon.classList.add("delete-icon");
    myIcon.src = _delete_png__WEBPACK_IMPORTED_MODULE_1__;

    todoHeader.appendChild(todoName);
    todoHeader.appendChild(todoDesc);

    todoItem.appendChild(todoHeader);
    todoFooter.appendChild(myIcon);
    todoFooter.appendChild(todoDueDate);

    todoItem.appendChild(todoFooter);

    todoContainer.appendChild(todoItem);
  }
  saveContent();
}

function deleteTodo(e) {
  const todoName =
    e.target.parentElement.previousSibling.firstElementChild.textContent;
  currentProject.removeTodo(todoName);
  displayTodos(currentProject);
}

function cleanTodoContainer() {
  document.querySelector(".todo-container").innerHTML = "";
}

// CONTENTEDITABLE
function saveContent() {
  const todonames = document.querySelectorAll(".todo-name");
  const tododescs = document.querySelectorAll(".todo-desc");
  const duedates = document.querySelectorAll(".due-date");

  // I need to refactor these, they are repetitive
  for (let i = 0; i < todonames.length; i++) {
    todonames[i].addEventListener("blur", (e) => {
      const index = e.target.parentElement.parentElement.dataset.index;
      currentProject.todos[index].name = todonames[index].innerHTML;
    });
  }
  tododescs.forEach((description) => {
    description.addEventListener("blur", (e) => {
      const index = e.target.parentElement.parentElement.dataset.index;
      currentProject.todos[index].desc = tododescs[index].innerHTML;
    });
  });
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
  e.target.textContent == "add new project" ? addProject() : false;
  e.target.classList.contains("edit-project") ? editProject(e) : false;
  e.target.classList.contains("delete-project") ? deleteProject(e) : false;
});
//remove this
console.log(todolist.projects);

function addProject() {
  const value = prompt("enter project name");
  const projectBtns = Array.from(document.querySelectorAll(".project-button"));
  if (projectBtns.every((p) => p.textContent != value)) {
    todolist.addProject(new Project(value));
  } else alert("no same name pls")
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
      editProject.src = _pencil_outline_png__WEBPACK_IMPORTED_MODULE_2__;

      const deleteProject = new Image();
      deleteProject.classList.add("delete-project");
      deleteProject.src = _delete_png__WEBPACK_IMPORTED_MODULE_1__;

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

function editProject(e) {
  todolist.updateProject(currentProject, prompt("project name pls", "project"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3Q0FBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMEJBQTBCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoIGhcXFwiXFxyXFxuICAgIFxcXCJzIG1cXFwiO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTVmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGdyaWQtYXJlYTogaDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XFxyXFxuICBncmlkLWFyZWE6IHM7XFxyXFxuICBwYWRkaW5nOiAzMnB4IDE2cHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtaW4td2lkdGg6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDEzdnc7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA0cHggOHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDE2cHggOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiBpbWcge1xcclxcbiAgb3BhY2l0eTogNTAlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiBpbWc6aG92ZXIge1xcclxcbiAgd2lkdGg6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDE3NiwgMTc2KTs7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICBncmlkLWFyZWE6IG07XFxyXFxuICBwYWRkaW5nOiAzMnB4IDY0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciBoMiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXIgZGl2IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDNlZDtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDBweCA3cHggMjlweCAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAvKiB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbTpob3ZlciB7XFxyXFxuICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1uYW1lIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbmFtZTpmb2N1cyxcXHJcXG4udG9kby1kZXNjOmZvY3VzLFxcclxcbi5kdWUtZGF0ZTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kZXNjIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSA+IHNtYWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWljb24ge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5kZWxldGUtaWNvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZDNlZDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmR1ZS1kYXRlOmhvdmVyIHtcXHJcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10b2RvLWJ0biB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcclxcbiAgcGFkZGluZzogOHB4IDMycHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiOztTQUVPO0VBQ1AsNEJBQTRCO0VBQzVCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixxREFBcUQ7RUFDckQsa0JBQWtCO0VBQ2xCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7O0VBRW5CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImggaFxcXCJcXHJcXG4gICAgXFxcInMgbVxcXCI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOGZyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgZ3JpZC1hcmVhOiBoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcXHJcXG4gIGdyaWQtYXJlYTogcztcXHJcXG4gIHBhZGRpbmc6IDMycHggMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICB3aWR0aDogMTN2dztcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbjogMTZweCA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIgcCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIGltZyB7XFxyXFxuICBvcGFjaXR5OiA1MCU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9uIGltZzpob3ZlciB7XFxyXFxuICB3aWR0aDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMTc2LCAxNzYpOztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcXHJcXG4gIGdyaWQtYXJlYTogbTtcXHJcXG4gIHBhZGRpbmc6IDMycHggNjRweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGFpbmVyIGgyIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRhaW5lciBkaXYge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkM2VkO1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgbWluLWhlaWdodDogMTUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIC8qIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtOmhvdmVyIHtcXHJcXG4gIC8qIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvLW5hbWUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1uYW1lOmZvY3VzLFxcclxcbi50b2RvLWRlc2M6Zm9jdXMsXFxyXFxuLmR1ZS1kYXRlOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRlc2Mge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtID4gc21hbGwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtaWNvbiB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmRlbGV0ZS1pY29uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNiOWI5Yjk7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkM2VkO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZHVlLWRhdGU6aG92ZXIge1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRvZG8tYnRuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMzJweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiLi9kZWxldGUucG5nXCI7XHJcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi9wZW5jaWwtb3V0bGluZS5wbmdcIjtcclxuXHJcbmNsYXNzIFRvZG9MaXN0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gIH1cclxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuICB9XHJcbiAgdXBkYXRlUHJvamVjdChwcm9qZWN0TmFtZSwgbmV3TmFtZSkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmluZGV4T2YodGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lLm5hbWUpKTtcclxuICAgIHRoaXMucHJvamVjdHNbaW5kZXhdLm5hbWUgPSBuZXdOYW1lO1xyXG4gIH1cclxuICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMucHJvamVjdHMuaW5kZXhPZih0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUubmFtZSkpO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG8odG9kbykge1xyXG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gIH1cclxuICBnZXRUb2RvKHRvZG9OYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLm5hbWUgPT09IHRvZG9OYW1lKTtcclxuICB9XHJcbiAgdXBkYXRlVG9kbyh0b2RvTmFtZSwgbmV3TmFtZSkge1xyXG4gICAgdGhpcy50b2Rvcy5zcGxpY2UodGhpcy50b2Rvcy5pbmRleE9mKHRvZG9OYW1lKSwgMSwgbmV3TmFtZSk7XHJcbiAgfVxyXG4gIHJlbW92ZVRvZG8odG9kb05hbWUpIHtcclxuICAgIHRoaXMudG9kb3Muc3BsaWNlKFxyXG4gICAgICB0aGlzLnRvZG9zLmluZGV4T2YodGhpcy50b2Rvcy5maW5kKCh4KSA9PiB4Lm5hbWUgPT09IHRvZG9OYW1lKSksXHJcbiAgICAgIDFcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdG9kb2xpc3QgPSBuZXcgVG9kb0xpc3QoKTtcclxuY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcImRlZmF1bHRQcm9qZWN0XCIpO1xyXG5jb25zdCBzY2hvb2wgPSBuZXcgUHJvamVjdChcInNjaG9vbFwiKTtcclxuY29uc3QgdG9kbzEgPSBuZXcgVG9kbyhcInN0dWR5IGpzXCIsIFwidGlsbCBjaGFwdGVyIDlcIiwgXCIxMi4xMi4yMDIyXCIsIFwiSW1wb3J0YW50XCIpO1xyXG5jb25zdCB0b2RvMiA9IG5ldyBUb2RvKFwibWF0aCBod1wiLCBcInBhZ2VzIDE5LTIzXCIsIFwiMDkuMDEuMjAyM1wiLCBcIkltcG9ydGFudFwiKTtcclxuXHJcbmRlZmF1bHRQcm9qZWN0LmFkZFRvZG8odG9kbzEpO1xyXG5zY2hvb2wuYWRkVG9kbyh0b2RvMik7XHJcbnRvZG9saXN0LmFkZFByb2plY3QoZGVmYXVsdFByb2plY3QpO1xyXG50b2RvbGlzdC5hZGRQcm9qZWN0KHNjaG9vbCk7XHJcblxyXG5sZXQgY3VycmVudFByb2plY3QgPSBkZWZhdWx0UHJvamVjdDtcclxuXHJcbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tY29udGFpbmVyXCIpO1xyXG5cclxuZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0KTsgLy9kaXNwbGF5IHRvZG9zIGZvciBkZWZhdWx0IHByb2plY3Qgb24gcGFnZSBsb2FkXHJcbmRpc3BsYXlQcm9qZWN0cygpO1xyXG5oaWdobGlnaHRDdXJyZW50UHJvamVjdCgpO1xyXG5cclxuLy8gTUFJTiBDT05UQUlORVJcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgYWRkVG9kbygpO1xyXG59KTtcclxuXHJcbnRvZG9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLWljb25cIikgPyBkZWxldGVUb2RvKGUpIDogZmFsc2U7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYWRkVG9kbygpIHtcclxuICBjdXJyZW50UHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvKFwidGl0bGVcIiwgXCJkZXNjcmlwdGlvblwiLCBcIjIwMjItMTEtMTdcIiwgXCJcIikpO1xyXG4gIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2Rvcyhwcm9qZWN0KSB7XHJcbiAgY2xlYW5Ub2RvQ29udGFpbmVyKCk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCB0b2RvSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xyXG4gICAgdG9kb0l0ZW0uZGF0YXNldC5pbmRleCA9IGAke2l9YDtcclxuXHJcbiAgICBjb25zdCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvZG9IZWFkZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taGVhZGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgdG9kb05hbWUuY2xhc3NMaXN0LmFkZChcInRvZG8tbmFtZVwiKTtcclxuICAgIHRvZG9OYW1lLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XHJcbiAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudG9kb3NbaV0ubmFtZX1gO1xyXG5cclxuICAgIGNvbnN0IHRvZG9EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNtYWxsXCIpO1xyXG4gICAgdG9kb0Rlc2MuY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY1wiKTtcclxuICAgIHRvZG9EZXNjLnNldEF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiLCBcInRydWVcIik7XHJcbiAgICB0b2RvRGVzYy50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudG9kb3NbaV0uZGVzY31gO1xyXG5cclxuICAgIGNvbnN0IHRvZG9Gb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG9kb0Zvb3Rlci5jbGFzc0xpc3QuYWRkKFwidG9kby1mb290ZXJcIik7XHJcblxyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XHJcbiAgICB0b2RvRHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XHJcbiAgICB0b2RvRHVlRGF0ZS52YWx1ZSA9IGAke3Byb2plY3QudG9kb3NbaV0uZHVlRGF0ZX1gO1xyXG4gICAgdG9kb0R1ZURhdGUubWluID0gXCIyMDIyLTExLTE3XCI7IC8vIHNob3VsZCBiZSB0b2RheSB1c2UgZGF0ZWZuc1xyXG5cclxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbXlJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtaWNvblwiKTtcclxuICAgIG15SWNvbi5zcmMgPSBkZWxldGVJY29uO1xyXG5cclxuICAgIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xyXG4gICAgdG9kb0hlYWRlci5hcHBlbmRDaGlsZCh0b2RvRGVzYyk7XHJcblxyXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XHJcbiAgICB0b2RvRm9vdGVyLmFwcGVuZENoaWxkKG15SWNvbik7XHJcbiAgICB0b2RvRm9vdGVyLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcclxuXHJcbiAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZCh0b2RvRm9vdGVyKTtcclxuXHJcbiAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxuICB9XHJcbiAgc2F2ZUNvbnRlbnQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVG9kbyhlKSB7XHJcbiAgY29uc3QgdG9kb05hbWUgPVxyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgY3VycmVudFByb2plY3QucmVtb3ZlVG9kbyh0b2RvTmFtZSk7XHJcbiAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Ub2RvQ29udGFpbmVyKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG5cclxuLy8gQ09OVEVOVEVESVRBQkxFXHJcbmZ1bmN0aW9uIHNhdmVDb250ZW50KCkge1xyXG4gIGNvbnN0IHRvZG9uYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1uYW1lXCIpO1xyXG4gIGNvbnN0IHRvZG9kZXNjcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kby1kZXNjXCIpO1xyXG4gIGNvbnN0IGR1ZWRhdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kdWUtZGF0ZVwiKTtcclxuXHJcbiAgLy8gSSBuZWVkIHRvIHJlZmFjdG9yIHRoZXNlLCB0aGV5IGFyZSByZXBldGl0aXZlXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvbmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHRvZG9uYW1lc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICBjdXJyZW50UHJvamVjdC50b2Rvc1tpbmRleF0ubmFtZSA9IHRvZG9uYW1lc1tpbmRleF0uaW5uZXJIVE1MO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHRvZG9kZXNjcy5mb3JFYWNoKChkZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgZGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcclxuICAgICAgY3VycmVudFByb2plY3QudG9kb3NbaW5kZXhdLmRlc2MgPSB0b2RvZGVzY3NbaW5kZXhdLmlubmVySFRNTDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGR1ZWRhdGVzLmZvckVhY2goKGRhdGUpID0+IHtcclxuICAgIGRhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcclxuICAgICAgY3VycmVudFByb2plY3QudG9kb3NbaW5kZXhdLmR1ZURhdGUgPSBkdWVkYXRlc1tpbmRleF0udmFsdWU7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gU0lERUJBUlxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdC1idXR0b25cIikgPyBjaGFuZ2VQcm9qZWN0KGUpIDogZmFsc2U7XHJcbiAgZS50YXJnZXQudGV4dENvbnRlbnQgPT0gXCJhZGQgbmV3IHByb2plY3RcIiA/IGFkZFByb2plY3QoKSA6IGZhbHNlO1xyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImVkaXQtcHJvamVjdFwiKSA/IGVkaXRQcm9qZWN0KGUpIDogZmFsc2U7XHJcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGVsZXRlLXByb2plY3RcIikgPyBkZWxldGVQcm9qZWN0KGUpIDogZmFsc2U7XHJcbn0pO1xyXG4vL3JlbW92ZSB0aGlzXHJcbmNvbnNvbGUubG9nKHRvZG9saXN0LnByb2plY3RzKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgY29uc3QgdmFsdWUgPSBwcm9tcHQoXCJlbnRlciBwcm9qZWN0IG5hbWVcIik7XHJcbiAgY29uc3QgcHJvamVjdEJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1idXR0b25cIikpO1xyXG4gIGlmIChwcm9qZWN0QnRucy5ldmVyeSgocCkgPT4gcC50ZXh0Q29udGVudCAhPSB2YWx1ZSkpIHtcclxuICAgIHRvZG9saXN0LmFkZFByb2plY3QobmV3IFByb2plY3QodmFsdWUpKTtcclxuICB9IGVsc2UgYWxlcnQoXCJubyBzYW1lIG5hbWUgcGxzXCIpXHJcbiAgZGlzcGxheVByb2plY3RzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcclxuICBjbGVhblByb2plY3RDb250YWluZXIoKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9saXN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBpZiAodG9kb2xpc3QucHJvamVjdHNbaV0gPT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgY29uc3QgZWRpdFByb2plY3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgZWRpdFByb2plY3QuY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdFwiKTtcclxuICAgICAgZWRpdFByb2plY3Quc3JjID0gZWRpdEljb247XHJcblxyXG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGRlbGV0ZVByb2plY3QuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpO1xyXG4gICAgICBkZWxldGVQcm9qZWN0LnNyYyA9IGRlbGV0ZUljb247XHJcblxyXG4gICAgICBwcm9qZWN0ZGl2LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0KTtcclxuICAgICAgcHJvamVjdGRpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHBidG4udGV4dENvbnRlbnQgPSBgJHt0b2RvbGlzdC5wcm9qZWN0c1tpXS5uYW1lfWA7XHJcbiAgICBwYnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcclxuXHJcbiAgICBwYnRuLmFwcGVuZENoaWxkKHByb2plY3RkaXYpO1xyXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocGJ0bik7XHJcbiAgfVxyXG4gIGhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KGUpIHtcclxuICB0b2RvbGlzdC51cGRhdGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0LCBwcm9tcHQoXCJwcm9qZWN0IG5hbWUgcGxzXCIsIFwicHJvamVjdFwiKSk7XHJcbiAgZGlzcGxheVByb2plY3RzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xyXG4gIHRvZG9saXN0LnJlbW92ZVByb2plY3QoY3VycmVudFByb2plY3QpO1xyXG4gIGN1cnJlbnRQcm9qZWN0ID1cclxuICAgIHRvZG9saXN0LnByb2plY3RzW3RvZG9saXN0LnByb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpICsgMV07XHJcbiAgZGlzcGxheVByb2plY3RzKCk7XHJcbiAgZGlzcGxheVRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlnaGxpZ2h0Q3VycmVudFByb2plY3QoKSB7XHJcbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1idXR0b25cIik7XHJcbiAgcHJvamVjdEJ1dHRvbi5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIGlmIChidXR0b24udGV4dENvbnRlbnQgPT0gY3VycmVudFByb2plY3QubmFtZSkge1xyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgfSBlbHNlIGlmIChidXR0b24udGV4dENvbnRlbnQgIT0gY3VycmVudFByb2plY3QubmFtZSkge1xyXG4gICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ1bnNldFwiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VQcm9qZWN0KGUpIHtcclxuICBjdXJyZW50UHJvamVjdCA9IHRvZG9saXN0LmdldFByb2plY3QoZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG4gIGRpc3BsYXlUb2RvcyhjdXJyZW50UHJvamVjdCk7XHJcbiAgaGlnaGxpZ2h0Q3VycmVudFByb2plY3QoKTtcclxuICBkaXNwbGF5UHJvamVjdHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Qcm9qZWN0Q29udGFpbmVyKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=