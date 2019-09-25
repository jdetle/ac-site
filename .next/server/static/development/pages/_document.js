module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../../../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 1));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./pages/_document.tsx":
      /*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return MyDocument;
          }
        );
        /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! next/document */ "next/document"
        );
        /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          next_document__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_2__
        );
        var _jsxFileName = "/Users/mac/github/one/ac-site/pages/_document.tsx";

        function _typeof(obj) {
          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }
          return _typeof(obj);
        }

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(source, true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(source).forEach(function(key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _extends() {
          _extends =
            Object.assign ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
          return _extends.apply(this, arguments);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          return Constructor;
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === "object" || typeof call === "function")
          ) {
            return call;
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p;
              return o;
            };
          return _setPrototypeOf(o, p);
        }

        var MyDocument =
          /*#__PURE__*/
          (function(_Document) {
            _inherits(MyDocument, _Document);

            function MyDocument() {
              _classCallCheck(this, MyDocument);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MyDocument).apply(this, arguments)
              );
            }

            _createClass(
              MyDocument,
              [
                {
                  key: "render",
                  value: function render() {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      "html",
                      {
                        lang: "en",
                        role: "main",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 17
                        },
                        __self: this
                      },
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        next_document__WEBPACK_IMPORTED_MODULE_0__["Head"],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                          },
                          __self: this
                        },
                        this.props.styleTags,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          "meta",
                          {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 20
                            },
                            __self: this
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          "meta",
                          {
                            charSet: "utf-8",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 21
                            },
                            __self: this
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          "meta",
                          {
                            name: "viewport",
                            content: "width=device-width,initial-scale=1",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 22
                            },
                            __self: this
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          "link",
                          {
                            rel: "icon",
                            type: "image/x-icon",
                            href: "./static/favicon.ico",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 23
                            },
                            __self: this
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          "meta",
                          {
                            name: "Description",
                            content:
                              "A summary of the top 20 words in the internet of things.",
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 24
                            },
                            __self: this
                          }
                        )
                      ),
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        "body",
                        {
                          tabIndex: 0,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          next_document__WEBPACK_IMPORTED_MODULE_0__["Main"],
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 30
                            },
                            __self: this
                          }
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          next_document__WEBPACK_IMPORTED_MODULE_0__[
                            "NextScript"
                          ],
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 31
                            },
                            __self: this
                          }
                        )
                      )
                    );
                  }
                }
              ],
              [
                {
                  key: "getInitialProps",
                  value: function getInitialProps(_ref) {
                    var renderPage = _ref.renderPage;
                    var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__[
                      "ServerStyleSheet"
                    ]();
                    var page = renderPage(function(App) {
                      return function(props) {
                        return sheet.collectStyles(
                          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            App,
                            _extends({}, props, {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                              },
                              __self: this
                            })
                          )
                        );
                      };
                    });
                    var styleTags = sheet.getStyleElement();
                    return _objectSpread({}, page, {
                      styleTags: styleTags
                    });
                  }
                }
              ]
            );

            return MyDocument;
          })(next_document__WEBPACK_IMPORTED_MODULE_0___default.a);

        /***/
      },

    /***/ 1:
      /*!***********************************!*\
  !*** multi ./pages/_document.tsx ***!
  \***********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./pages/_document.tsx */ "./pages/_document.tsx"
        );

        /***/
      },

    /***/ "next/document":
      /*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/document");

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react");

        /***/
      },

    /***/ "styled-components":
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("styled-components");

        /***/
      }

    /******/
  }
);
//# sourceMappingURL=_document.js.map