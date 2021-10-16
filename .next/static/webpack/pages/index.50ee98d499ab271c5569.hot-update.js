"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_trader_TraderList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/trader/TraderList */ "./src/components/trader/TraderList.tsx");
/* harmony import */ var services_trader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/trader */ "./src/services/trader.tsx");
/* harmony import */ var layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/AdminLayout */ "./src/layouts/AdminLayout.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/home/thanhtuan/src/github.com/Distichain/dc-admin/src/pages/index.tsx",
    _s = $RefreshSig$();







const TraderList = () => {
  _s();

  const [traders, setTraders] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    let subscription = true;
    (0,services_trader__WEBPACK_IMPORTED_MODULE_2__.getTraders)().then(resposne => {
      if (!subscription) return;
      setTraders(resposne);
    });
    return () => {
      subscription = false;
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_3__.AdminLayout.Header, {
      children: "Traders"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_3__.AdminLayout.Content, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(components_trader_TraderList__WEBPACK_IMPORTED_MODULE_1__.TraderList, {
        traders: traders
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

_s(TraderList, "hS3FazvunoMosTfS1t0U9Slvu6E=");

_c = TraderList;
TraderList.getLayout = layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_3__.getLayout;
/* harmony default export */ __webpack_exports__["default"] = (TraderList);

var _c;

$RefreshReg$(_c, "TraderList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTBlZTk4ZDQ5OWFiMjcxYzU1NjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFBQTs7QUFDdkIsUUFBTSxDQUFDSyxPQUFELEVBQVVDLFVBQVYsSUFBd0JQLHFEQUFBLEVBQTlCO0FBQ0FBLEVBQUFBLHNEQUFBLENBQWdCLE1BQU07QUFDcEIsUUFBSVUsWUFBWSxHQUFHLElBQW5CO0FBQ0FQLElBQUFBLDJEQUFVLEdBQUdRLElBQWIsQ0FBbUJDLFFBQUQsSUFBYztBQUM5QixVQUFJLENBQUNGLFlBQUwsRUFBbUI7QUFDbkJILE1BQUFBLFVBQVUsQ0FBQ0ssUUFBRCxDQUFWO0FBQ0QsS0FIRDtBQUlBLFdBQU8sTUFBTTtBQUNYRixNQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNELEtBRkQ7QUFHRCxHQVRELEVBU0csRUFUSDtBQVVBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxvRUFBRDtBQUFBLDZCQUNFLDhEQUFDLG9FQUFEO0FBQWEsZUFBTyxFQUFFSjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBcEJEOztHQUFNTDs7S0FBQUE7QUFxQk5BLFVBQVUsQ0FBQ0ksU0FBWCxHQUF1QkEsMERBQXZCO0FBRUEsK0RBQWVKLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFkZXJMaXN0IGFzIFRyYWRlclRhYmxlIH0gZnJvbSBcImNvbXBvbmVudHMvdHJhZGVyL1RyYWRlckxpc3RcIjtcbmltcG9ydCB7IGdldFRyYWRlcnMgfSBmcm9tIFwic2VydmljZXMvdHJhZGVyXCI7XG5pbXBvcnQgeyBUcmFkZXIgfSBmcm9tIFwibW9kZWxzL3RyYWRlclwiO1xuaW1wb3J0IHsgQWRtaW5MYXlvdXQsIGdldExheW91dCB9IGZyb20gXCJsYXlvdXRzL0FkbWluTGF5b3V0XCI7XG5cbmNvbnN0IFRyYWRlckxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFt0cmFkZXJzLCBzZXRUcmFkZXJzXSA9IFJlYWN0LnVzZVN0YXRlPFRyYWRlcltdPigpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBzdWJzY3JpcHRpb24gPSB0cnVlO1xuICAgIGdldFRyYWRlcnMoKS50aGVuKChyZXNwb3NuZSkgPT4ge1xuICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHJldHVybjtcbiAgICAgIHNldFRyYWRlcnMocmVzcG9zbmUpO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzdWJzY3JpcHRpb24gPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxBZG1pbkxheW91dC5IZWFkZXI+VHJhZGVyczwvQWRtaW5MYXlvdXQuSGVhZGVyPlxuICAgICAgPEFkbWluTGF5b3V0LkNvbnRlbnQ+XG4gICAgICAgIDxUcmFkZXJUYWJsZSB0cmFkZXJzPXt0cmFkZXJzfSAvPlxuICAgICAgPC9BZG1pbkxheW91dC5Db250ZW50PlxuICAgIDwvZGl2PlxuICApO1xufTtcblRyYWRlckxpc3QuZ2V0TGF5b3V0ID0gZ2V0TGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFkZXJMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVHJhZGVyTGlzdCIsIlRyYWRlclRhYmxlIiwiZ2V0VHJhZGVycyIsIkFkbWluTGF5b3V0IiwiZ2V0TGF5b3V0IiwidHJhZGVycyIsInNldFRyYWRlcnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN1YnNjcmlwdGlvbiIsInRoZW4iLCJyZXNwb3NuZSJdLCJzb3VyY2VSb290IjoiIn0=