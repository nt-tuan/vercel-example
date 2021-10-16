"use strict";
self["webpackHotUpdate_N_E"]("pages/trader/[id]",{

/***/ "./src/components/common/WrappedLink/WrappedLink.tsx":
/*!***********************************************************!*\
  !*** ./src/components/common/WrappedLink/WrappedLink.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrappedLink": function() { return /* binding */ WrappedLink; }
/* harmony export */ });
/* harmony import */ var _home_thanhtuan_src_github_com_Distichain_dc_admin_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "/home/thanhtuan/src/github.com/Distichain/dc-admin/src/components/common/WrappedLink/WrappedLink.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_home_thanhtuan_src_github_com_Distichain_dc_admin_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





const MyLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = ({
  href,
  className,
  children
}, ref) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: href !== null && href !== void 0 ? href : "/",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
      ref: ref,
      className: className,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }, undefined);
});
_c2 = MyLink;
const WrappedLink = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Link, _objectSpread(_objectSpread({}, props), {}, {
    component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),
    children: props.children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};
_c3 = WrappedLink;

var _c, _c2, _c3;

$RefreshReg$(_c, "MyLink$React.forwardRef");
$RefreshReg$(_c2, "MyLink");
$RefreshReg$(_c3, "WrappedLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhZGVyL1tpZF0uNWJkMTUzMTg4NjVlYWMzYTU1NmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNRyxNQUFNLGdCQUFHSCx1REFBQSxNQUNiLENBQ0U7QUFBRUssRUFBQUEsSUFBRjtBQUFRQyxFQUFBQSxTQUFSO0FBQW1CQyxFQUFBQTtBQUFuQixDQURGLEVBRUVDLEdBRkYsS0FHSztBQUNILHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFFSCxJQUFGLGFBQUVBLElBQUYsY0FBRUEsSUFBRixHQUFVLEdBQXBCO0FBQUEsMkJBQ0U7QUFBRyxTQUFHLEVBQUVHLEdBQVI7QUFBYSxlQUFTLEVBQUVGLFNBQXhCO0FBQUEsZ0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBWlksQ0FBZjtNQUFNSjtBQWVDLE1BQU1NLFdBQVcsR0FBSUMsS0FBRCxJQUFzQjtBQUMvQyxzQkFDRSw4REFBQywrQ0FBRCxrQ0FBYUEsS0FBYjtBQUFvQixhQUFTLEVBQUVULGtEQUEvQjtBQUFBLGNBQ0dTLEtBQUssQ0FBQ0g7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5NO01BQU1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9XcmFwcGVkTGluay9XcmFwcGVkTGluay50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayBhcyBNVUlMaW5rLCBMaW5rUHJvcHMgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuY29uc3QgTXlMaW5rID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKFxuICAgIHsgaHJlZiwgY2xhc3NOYW1lLCBjaGlsZHJlbiB9OiBMaW5rUHJvcHMsXG4gICAgcmVmOiBSZWFjdC5SZWY8SFRNTEFuY2hvckVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBocmVmPXtocmVmID8/IFwiL1wifT5cbiAgICAgICAgPGEgcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlZExpbmsgPSAocHJvcHM6IExpbmtQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNVUlMaW5rIHsuLi5wcm9wc30gY29tcG9uZW50PXtMaW5rfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L01VSUxpbms+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIk1VSUxpbmsiLCJNeUxpbmsiLCJmb3J3YXJkUmVmIiwiaHJlZiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicmVmIiwiV3JhcHBlZExpbmsiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=