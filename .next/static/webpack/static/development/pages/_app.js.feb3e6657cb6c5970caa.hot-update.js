webpackHotUpdate("static/development/pages/_app.js", {
  /***/ "./components/layout.tsx":
    /*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! next/head */ "./node_modules/next/head.js"
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        next_head__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! next/link */ "./node_modules/next/link.js"
      );
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        next_link__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
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
      var _jsxFileName = "/Users/mac/github/one/ac-site/components/layout.tsx";

      var Layout = styled_components__WEBPACK_IMPORTED_MODULE_3__[
        "default"
      ].div.withConfig({
        displayName: "layout__Layout",
        componentId: "sc-1lsg45j-0"
      })([
        "flex:1 1 10rem;height:100%;width:100%;display:flex;flex-direction:column;header{position:fixed;top:0;height:10%;width:100%;}nav{font-size:2rem;font-weight:500;@media (max-width:420px){font-size:1rem;}}footer{position:fixed;right:0;bottom:0;height:10%;flex:0 1 2rem;}"
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
              lineNumber: 38
            },
            __self: this
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "title",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
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
                lineNumber: 42
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "nav",
              {
                role: "navigation",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                  href: "/",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
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
                      lineNumber: 48
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
                    lineNumber: 52
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
                    lineNumber: 53
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
                      lineNumber: 54
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
                lineNumber: 68
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
                lineNumber: 69
              },
              __self: this
            },
            "All rights reserved: Alyssa Cuda 2019"
          )
        );
      };

      /***/
    }
});
//# sourceMappingURL=_app.js.feb3e6657cb6c5970caa.hot-update.js.map
