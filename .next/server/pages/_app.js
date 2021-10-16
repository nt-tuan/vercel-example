(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme */ "./src/theme.ts");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CssBaseline */ "@mui/material/CssBaseline");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var styles_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/thanhtuan/src/github.com/Distichain/dc-admin/src/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  var _Component$getLayout;

  const getLayout = (_Component$getLayout = Component.getLayout) !== null && _Component$getLayout !== void 0 ? _Component$getLayout : page => page;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    theme: theme__WEBPACK_IMPORTED_MODULE_0__.default,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: "DC Support"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 18
    }, this))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/theme.ts":
/*!**********************!*\
  !*** ./src/theme.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "@mui/material/styles");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ "@mui/material/colors");
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);


// A custom theme for this app
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
    }
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff"
        }
      }
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFTQSxTQUFTSSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBNkQ7QUFBQTs7QUFDM0QsUUFBTUMsU0FBUywyQkFBR0YsU0FBUyxDQUFDRSxTQUFiLHVFQUE0QkMsSUFBRCxJQUFVQSxJQUFwRDtBQUNBLHNCQUNFLDhEQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFUiwwQ0FBdEI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLEVBTUdPLFNBQVMsZUFBQyw4REFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBRCxDQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0FBRUQsaUVBQWVGLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUdBO0FBQ0EsTUFBTUosS0FBSyxHQUFHUyxpRUFBVyxDQUFDO0FBQ3hCRSxFQUFBQSxPQUFPLEVBQUU7QUFDUEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRTtBQURDLEtBREY7QUFJUEMsSUFBQUEsU0FBUyxFQUFFO0FBQ1RELE1BQUFBLElBQUksRUFBRTtBQURHLEtBSko7QUFPUEUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xGLE1BQUFBLElBQUksRUFBRUgsMERBQVFNO0FBRFQ7QUFQQSxHQURlO0FBWXhCQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1hDLE1BQUFBLGNBQWMsRUFBRTtBQUNkQyxRQUFBQSxJQUFJLEVBQUU7QUFDSkMsVUFBQUEsZUFBZSxFQUFFO0FBRGI7QUFEUTtBQURMO0FBREg7QUFaWSxDQUFELENBQXpCO0FBdUJBLGlFQUFlckIsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRlLXJlYWN0LWFwcC13aXRoLXR5cGVzY3JpcHQvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vY3JlYXRlLXJlYWN0LWFwcC13aXRoLXR5cGVzY3JpcHQvLi9zcmMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vY3JlYXRlLXJlYWN0LWFwcC13aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vY3JlYXRlLXJlYWN0LWFwcC13aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiIiwid2VicGFjazovL2NyZWF0ZS1yZWFjdC1hcHAtd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIiIsIndlYnBhY2s6Ly9jcmVhdGUtcmVhY3QtYXBwLXdpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NyZWF0ZS1yZWFjdC1hcHAtd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcInRoZW1lXCI7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmVcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcInN0eWxlcy9zdHlsZXMuY3NzXCI7XG50eXBlIE5leHRQYWdlV2l0aExheW91dCA9IE5leHRQYWdlICYge1xuICBnZXRMYXlvdXQ/OiAocGFnZTogUmVhY3RFbGVtZW50KSA9PiBSZWFjdE5vZGU7XG59O1xuXG50eXBlIEFwcFByb3BzV2l0aExheW91dCA9IEFwcFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRQYWdlV2l0aExheW91dDtcbn07XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gKChwYWdlKSA9PiBwYWdlKTtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EQyBTdXBwb3J0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAge2dldExheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KX1cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwiaW1wb3J0IHsgY3JlYXRlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCB7IHJlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiO1xuaW1wb3J0IHR5cGUge30gZnJvbSBcIkBtdWkveC1kYXRhLWdyaWQvdGhlbWVBdWdtZW50YXRpb25cIjtcblxuLy8gQSBjdXN0b20gdGhlbWUgZm9yIHRoaXMgYXBwXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IFwiIzU1NmNkNlwiLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBcIiMxOTg1N2JcIixcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBtYWluOiByZWQuQTQwMCxcbiAgICB9LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTXVpRGF0YUdyaWQ6IHtcbiAgICAgIHN0eWxlT3ZlcnJpZGVzOiB7XG4gICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL2NvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ0aGVtZSIsIkNzc0Jhc2VsaW5lIiwiVGhlbWVQcm92aWRlciIsIkhlYWQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiLCJjcmVhdGVUaGVtZSIsInJlZCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwiQTQwMCIsImNvbXBvbmVudHMiLCJNdWlEYXRhR3JpZCIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=