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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./components/app.tsx":
      /*!****************************!*\
  !*** ./components/app.tsx ***!
  \****************************/
      /*! exports provided: App, StyledApp */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "App",
          function() {
            return App;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "StyledApp",
          function() {
            return StyledApp;
          }
        );
        /* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! polished */ "polished"
        );
        /* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          polished__WEBPACK_IMPORTED_MODULE_0__
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
        var _jsxFileName = "/Users/mac/github/one/ac-site/components/app.tsx";

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

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            "\n",
            ';\n*{\nbox-sizing: border-box;\n}\nhtml, body{\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\n  overflow: hidden;\n  margin: 0;\n  height: 100%;\n}\n#__next {\n  height: 100%\n}\n#index_title {\n\n  -webkit-transition: font-size 1s; /* Safari */\n  transition: font-size 1s;\n  :hover, :active, :focus {\n    font-size: 19rem \n  }\n  font-size: 18rem;\n  font-weight: 900;\n  color: palevioletred;\n  text-align: center;\n  z-index: 1;\n  padding: 0;\n  overflow: hidden;\n  @media (max-width: 420px) { \n    font-size: 7rem;\n    margin-top: 4rem;\n    :hover, :active, :focus {\n      font-size: 7rem \n    }\n  }\n}\n'
          ]);

          _templateObject = function _templateObject() {
            return data;
          };

          return data;
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0);
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) }
            })
          );
        }

        var StyledApp = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig(
          {
            displayName: "app__StyledApp",
            componentId: "sc-152w86n-0"
          }
        )([
          "height:100%;background-color:rgb(59,65,113);background-color:rgba(59,65,113,1);color:white;overflow-x:hidden;video,img{display:block;max-width:100%;}"
        ]);
        var GlobalStyles = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"]
        )(
          _templateObject(),
          Object(polished__WEBPACK_IMPORTED_MODULE_0__["normalize"])()
        );

        var App = function App(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              GlobalStyles,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                },
                __self: this
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              StyledApp,
              _extends({}, props, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: this
              }),
              props.children
            )
          );
        };

        /***/
      },

    /***/ "./components/footer.tsx":
      /*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig(
          {
            displayName: "footer",
            componentId: "pozvbr-0"
          }
        )([
          "display:flex;justify-content:flex-end;align-items:center;align-content:center;font-size:0.5rem;padding-right:2rem;@media (max-width:420px){display:none;}"
        ]);

        /***/
      },

    /***/ "./components/header.tsx":
      /*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__
        );

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig(
          {
            displayName: "header",
            componentId: "sc-1xm13qf-0"
          }
        )([
          "display:flex;justify-content:flex-end;align-items:center;align-content:center;padding-right:2rem;a{color:white;}"
        ]);

        /***/
      },

    /***/ "./components/layout.tsx":
      /*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/head */ "next/head"
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/link */ "next/link"
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./footer */ "./components/footer.tsx"
        );
        /* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./header */ "./components/header.tsx"
        );
        /* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./typography */ "./components/typography.tsx"
        );
        var _jsxFileName =
          "/Users/mac/github/one/ac-site/components/layout.tsx";

        var Layout = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig(
          {
            displayName: "layout__Layout",
            componentId: "sc-1lsg45j-0"
          }
        )([
          "display:grid   grid-template-rows:3,height:100%;width:100%;display:flex;flex-direction:column;header{position:fixed;top:0;height:10%;width:100%;}nav{font-size:2rem;font-weight:500;@media (max-width:420px){font-size:1rem;}}footer{position:fixed;right:0;bottom:0;height:10%;flex:0 1 2rem;}"
        ]);
        /* harmony default export */ __webpack_exports__["default"] = function(
          _ref
        ) {
          var children = _ref.children,
            _ref$title = _ref.title,
            title = _ref$title === void 0 ? "Buzzwords Of IoT" : _ref$title;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Layout,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "title",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                },
                title
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _header__WEBPACK_IMPORTED_MODULE_5__["default"],
              {
                "aria-label":
                  "Header containing links to Home, buzzwords, and about page",
                tabIndex: 0,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "nav",
                {
                  role: "navigation",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                  {
                    href: "/",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    },
                    __self: this
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _typography__WEBPACK_IMPORTED_MODULE_6__["default"].a,
                    {
                      "aria-label": "Link to the home page",
                      tabIndex: 0,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      },
                      __self: this
                    },
                    "Home"
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "span",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54
                    },
                    __self: this
                  },
                  " // "
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                  {
                    href: "/contact",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    },
                    __self: this
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _typography__WEBPACK_IMPORTED_MODULE_6__["default"].a,
                    {
                      "aria-label": "Link to the contacts page",
                      tabIndex: 0,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                      },
                      __self: this
                    },
                    "Contact"
                  )
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "div",
              {
                style: {
                  height: "100%"
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                },
                __self: this
              },
              children
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _footer__WEBPACK_IMPORTED_MODULE_4__["default"],
              {
                role: "contentinfo",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                },
                __self: this
              },
              "All rights reserved: Alyssa Cuda 2019"
            )
          );
        };

        /***/
      },

    /***/ "./components/typography.tsx":
      /*!***********************************!*\
  !*** ./components/typography.tsx ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__
        );

        var p = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig(
          {
            displayName: "typography__p",
            componentId: "sc-8tnvan-0"
          }
        )(
          [
            "font-size:1.5rem;font-weight:700;line-height:2rem;margin:1rem;",
            " @media (max-width:420px){font-size:0.8rem;line-height:1rem;margin:0rem;",
            "}",
            ""
          ],
          function(props) {
            return (
              props.xl &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "font-size:2.2rem;line-height:2.2rem;"
              ])
            );
          },
          function(props) {
            return (
              props.xl &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "font-size:1.6rem;line-height:1.6rem;margin-bottom:0.8rem;padding:0.2rem;"
              ])
            );
          },
          function(props) {
            return (
              props.center &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "text-align:center;"
              ])
            );
          }
        );
        var a = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig(
          {
            displayName: "typography__a",
            componentId: "sc-8tnvan-1"
          }
        )([
          ":hover,:active,:focus{color:red;cursor:pointer;text-decoration:none;}"
        ]);
        var span = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig(
          {
            displayName: "typography__span",
            componentId: "sc-8tnvan-2"
          }
        )(["display:inline-block;"]);
        var pre = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.pre.withConfig(
          {
            displayName: "typography__pre",
            componentId: "sc-8tnvan-3"
          }
        )([""]);
        var h1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig(
          {
            displayName: "typography__h1",
            componentId: "sc-8tnvan-4"
          }
        )([
          "margin:0;font-size:5rem;font-weight:900;line-height:5rem;@media (max-width:420px){font-size:2rem;line-height:2rem;}"
        ]);
        var h2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig(
          {
            displayName: "typography__h2",
            componentId: "sc-8tnvan-5"
          }
        )([
          "margin:0;font-size:4.2rem;font-weight:900;line-height:4.5rem;@media (max-width:420px){font-size:1.9rem;line-height:1.9rem;}"
        ]);
        var h3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig(
          {
            displayName: "typography__h3",
            componentId: "sc-8tnvan-6"
          }
        )([
          "margin:0;font-size:3.8rem;font-weight:900;line-height:4rem;@media (max-width:420px){font-size:1.8rem;line-height:1.8rem;}"
        ]);
        var h4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig(
          {
            displayName: "typography__h4",
            componentId: "sc-8tnvan-7"
          }
        )([
          "margin:0;font-size:3.7rem;font-weight:900;line-height:3.8rem;@media (max-width:420px){font-size:1.6rem;line-height:1.6rem;}"
        ]);
        var h5 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig(
          {
            displayName: "typography__h5",
            componentId: "sc-8tnvan-8"
          }
        )([
          "margin:0;font-size:3.5rem;font-weight:800;line-height:3.5rem;@media (max-width:420px){font-size:1.55rem;line-height:1.55rem;}"
        ]);
        var h6 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h6.withConfig(
          {
            displayName: "typography__h6",
            componentId: "sc-8tnvan-9"
          }
        )([
          "margin:0;font-size:3rem;font-weight:700;line-height:3rem;@media (max-width:420px){font-size:1.45rem;line-height:1.45rem;}"
        ]);
        /* harmony default export */ __webpack_exports__["default"] = {
          a: a,
          p: p,
          span: span,
          pre: pre,
          h1: h1,
          h2: h2,
          h3: h3,
          h4: h4,
          h5: h5,
          h6: h6
        };

        /***/
      },

    /***/ "./pages/_app.tsx":
      /*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! next/app */ "next/app"
        );
        /* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          next_app__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-fns */ "react-fns"
        );
        /* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react_fns__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/app */ "./components/app.tsx"
        );
        /* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/layout */ "./components/layout.tsx"
        );
        var _jsxFileName = "/Users/mac/github/one/ac-site/pages/_app.tsx";

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

        var MyApp =
          /*#__PURE__*/
          (function(_App) {
            _inherits(MyApp, _App);

            function MyApp() {
              _classCallCheck(this, MyApp);

              return _possibleConstructorReturn(
                this,
                _getPrototypeOf(MyApp).apply(this, arguments)
              );
            }

            _createClass(MyApp, [
              {
                key: "render",
                value: function render() {
                  var _this$props = this.props,
                    Component = _this$props.Component,
                    pageProps = _this$props.pageProps;
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    _components_app__WEBPACK_IMPORTED_MODULE_3__["App"],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                      },
                      __self: this
                    },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      next_app__WEBPACK_IMPORTED_MODULE_0__["Container"],
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 13
                        },
                        __self: this
                      },
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react_fns__WEBPACK_IMPORTED_MODULE_2__["WindowSize"],
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                          },
                          __self: this
                        },
                        function(size) {
                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            _components_layout__WEBPACK_IMPORTED_MODULE_4__[
                              "default"
                            ],
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                              },
                              __self: this
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                              Component,
                              _extends({}, pageProps, {
                                size:
                                  size.width > 0
                                    ? _objectSpread({}, size)
                                    : null,
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 17
                                },
                                __self: this
                              })
                            )
                          );
                        }
                      )
                    )
                  );
                }
              }
            ]);

            return MyApp;
          })(next_app__WEBPACK_IMPORTED_MODULE_0___default.a);

        /* harmony default export */ __webpack_exports__["default"] = MyApp;

        /***/
      },

    /***/ 0:
      /*!******************************!*\
  !*** multi ./pages/_app.tsx ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./pages/_app.tsx */ "./pages/_app.tsx"
        );

        /***/
      },

    /***/ "next/app":
      /*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/app");

        /***/
      },

    /***/ "next/head":
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/head");

        /***/
      },

    /***/ "next/link":
      /*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("next/link");

        /***/
      },

    /***/ polished:
      /*!***************************!*\
  !*** external "polished" ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("polished");

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

    /***/ "react-fns":
      /*!****************************!*\
  !*** external "react-fns" ***!
  \****************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require("react-fns");

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
//# sourceMappingURL=_app.js.map
