webpackHotUpdate("static/development/pages/index.js", {
  /***/ "./pages/index.tsx":
    /*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function(module) {
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function() {
            return Index;
          }
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! next/link */ "./node_modules/next/link.js"
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
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
        var _jsxFileName = "/Users/mac/github/one/ac-site/pages/index.tsx";

        var Title = "Alyssa Cuda";
        var Explanation = "Motivated to make tech for everyone";
        var ClickHere = "Top 20 Buzzwords";
        function Index() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            "div",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _components_container__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                direction: "column",
                center: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                "div",
                {
                  "aria-hidden": true,
                  id: "index_title",
                  role: "banner",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  },
                  __self: this
                },
                Title
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _components_container__WEBPACK_IMPORTED_MODULE_3__["default"],
              {
                direction: "column",
                center: true,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _components_container__WEBPACK_IMPORTED_MODULE_3__["default"],
                {
                  direction: "column",
                  center: true,
                  halfSize: true,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  },
                  __self: this
                },
                " ",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _components_typography__WEBPACK_IMPORTED_MODULE_4__["default"]
                    .p,
                  {
                    center: true,
                    xl: true,
                    "aria-label": "An explanation for the purpose of the site",
                    tabIndex: 0,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: this
                  },
                  Explanation
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  next_link__WEBPACK_IMPORTED_MODULE_0___default.a,
                  {
                    href: "/words_list",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: this
                  },
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    _components_button__WEBPACK_IMPORTED_MODULE_2__["default"],
                    {
                      primary: true,
                      xl: true,
                      href: "/words_list",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                      },
                      __self: this
                    },
                    ClickHere
                  )
                )
              )
            )
          );
        }
        (function(Component, route) {
          if (!Component) return;
          if (false) {
          }
          module.hot.accept();
          Component.__route = route;

          if (module.hot.status() === "idle") return;

          var components = next.router.components;
          for (var r in components) {
            if (!components.hasOwnProperty(r)) continue;

            if (components[r].Component.__route === route) {
              next.router.update(r, Component);
            }
          }
        })(
          typeof __webpack_exports__ !== "undefined"
            ? __webpack_exports__.default
            : module.exports.default || module.exports,
          "/"
        );

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js"
        )(module)
      ));

      /***/
    }
});
//# sourceMappingURL=index.js.b906467ce032d81d9bd2.hot-update.js.map
