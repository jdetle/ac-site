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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 2));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./components/button.tsx":
      /*!*******************************!*\
  !*** ./components/button.tsx ***!
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
        ] = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig(
          {
            displayName: "button",
            componentId: "sc-1mltox5-0"
          }
        )(
          [
            "display:flex;align-content:center;align-items:center;justify-content:center;border-radius:0.25rem;padding:0rem 0;margin:0.5rem 1rem;height:4rem;font-size:2rem;font-weight:600;width:11rem;background:transparent;color:white;border:0.2rem solid white;text-decoration:none;z-index:1;@media (max-width:420px){font-size:1rem;height:4rem;}:hover{cursor:pointer;color:#35e0ff;border:0.2rem solid #35e0ff;}",
            " ",
            " ",
            ""
          ],
          function(props) {
            return (
              props.active &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "color:#35e0ff;border:0.2rem solid #35e0ff;"
              ])
            );
          },
          function(props) {
            return (
              props.primary &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "background:white;color:palevioletred;"
              ])
            );
          },
          function(props) {
            return (
              props.xl &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "width:22rem;height:10rem;font-size:3rem;text-align:center;font-weight:900;border-radius:2rem;@media (max-width:420px){font-size:2rem;height:6rem;width:18rem;}"
              ])
            );
          }
        );

        /***/
      },

    /***/ "./components/container.tsx":
      /*!**********************************!*\
  !*** ./components/container.tsx ***!
  \**********************************/
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
        ] = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
          {
            displayName: "container",
            componentId: "sc-1o9cafu-0"
          }
        )(
          [
            "display:flex;width:100%;flex-direction:",
            ";flex-wrap:",
            ";margin:0.2rem;",
            " ",
            " ",
            " ",
            " ",
            " ",
            ""
          ],
          function(props) {
            return props.direction;
          },
          function(props) {
            return props.wrap;
          },
          function(props) {
            return (
              props.width &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(
                ["width:", ";"],
                props.width
              )
            );
          },
          function(props) {
            return (
              props.left &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "justify-content:flex-start;"
              ])
            );
          },
          function(props) {
            return (
              props.right &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "justify-content:flex-end;"
              ])
            );
          },
          function(props) {
            return (
              props.center &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "justify-content:center;align-items:center;align-content:center;"
              ])
            );
          },
          function(props) {
            return (
              props.halfSize &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "height:100%;width:45%;@media (max-width:420px){width:100%;}"
              ])
            );
          },
          function(props) {
            return (
              props.outline &&
              Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([
                "border:0.2rem solid white;border-radius:0.75rem;padding:2rem;"
              ])
            );
          }
        );

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

    /***/ "./pages/_error.js":
      /*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! next/link */ "next/link"
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../components/button */ "./components/button.tsx"
        );
        /* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../components/container */ "./components/container.tsx"
        );
        /* harmony import */ var _components_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../components/typography */ "./components/typography.tsx"
        );
        var _jsxFileName = "/Users/mac/github/one/ac-site/pages/_error.js";

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = function() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _components_container__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                center: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9
                },
                __self: this
              },
              " ",
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _components_typography__WEBPACK_IMPORTED_MODULE_4__["default"]
                  .p,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                  },
                  __self: this
                },
                "Uh oh! It looks like something when wrong, click the button to go back."
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                next_link__WEBPACK_IMPORTED_MODULE_0___default.a,
                {
                  href: "/",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _components_button__WEBPACK_IMPORTED_MODULE_2__["default"],
                  {
                    primary: true,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  "Go Home"
                )
              )
            )
          );
        };

        /***/
      },

    /***/ 2:
      /*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./pages/_error.js */ "./pages/_error.js"
        );

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
//# sourceMappingURL=_error.js.map
