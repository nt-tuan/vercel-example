"use strict";
self["webpackHotUpdate_N_E"]("pages/trader/[id]",{

/***/ "./src/pages/trader/[id].tsx":
/*!***********************************!*\
  !*** ./src/pages/trader/[id].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_trader_TraderContact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/trader/TraderContact */ "./src/components/trader/TraderContact.tsx");
/* harmony import */ var services_trader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/trader */ "./src/services/trader.tsx");
/* harmony import */ var components_trader_TraderVerifyingTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/trader/TraderVerifyingTable */ "./src/components/trader/TraderVerifyingTable.tsx");
/* harmony import */ var layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! layouts/AdminLayout */ "./src/layouts/AdminLayout.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var components_common_WrappedLink_WrappedLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/WrappedLink/WrappedLink */ "./src/components/common/WrappedLink/WrappedLink.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "/home/thanhtuan/src/github.com/Distichain/dc-admin/src/pages/trader/[id].tsx",
    _s = $RefreshSig$();













const Home = () => {
  _s();

  var _trader$marketplace, _contact$companyName;

  const [contact, setContact] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [kycResult, setKYCResult] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const [trader, setTrader] = react__WEBPACK_IMPORTED_MODULE_0___default().useState();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const {
    id
  } = router.query;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    if (typeof id !== "string") return;
    (0,services_trader__WEBPACK_IMPORTED_MODULE_2__.getTrader)(id).then(setTrader);
    (0,services_trader__WEBPACK_IMPORTED_MODULE_2__.getTraderContact)(id).then(setContact);
    (0,services_trader__WEBPACK_IMPORTED_MODULE_2__.getTraderVerifyingResult)(id).then(setKYCResult);
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_4__.AdminLayout.Header, {
      children: [(_trader$marketplace = trader === null || trader === void 0 ? void 0 : trader.marketplace) !== null && _trader$marketplace !== void 0 ? _trader$marketplace : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Skeleton, {
        variant: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 33
      }, undefined), " |", " ", (_contact$companyName = contact === null || contact === void 0 ? void 0 : contact.companyName) !== null && _contact$companyName !== void 0 ? _contact$companyName : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Skeleton, {
        variant: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 34
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_4__.AdminLayout.Breadcrumbs, {
      "aria-label": "breadcrumb",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(components_common_WrappedLink_WrappedLink__WEBPACK_IMPORTED_MODULE_5__.WrappedLink, {
        color: "inherit",
        underline: "hover",
        href: "/",
        fontWeight: "bold",
        children: "Trader"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
        fontWeight: "light",
        children: "Trader Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(components_trader_TraderContact__WEBPACK_IMPORTED_MODULE_1__.TraderContact, {
      contact: contact
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
      sx: {
        marginTop: "24px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(components_trader_TraderVerifyingTable__WEBPACK_IMPORTED_MODULE_3__.TraderVerifyingTable, {
        data: kycResult
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(Home, "494opiSbaFNndTKet8QUkLmYoxQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = Home;
Home.getLayout = layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_4__.getLayout;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhZGVyL1tpZF0uZDU4NzAwN2FkYmI4OWVmODg0YWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTWMsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFBQTs7QUFDakIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0JoQixxREFBQSxFQUE5QjtBQUNBLFFBQU0sQ0FBQ2tCLFNBQUQsRUFBWUMsWUFBWixJQUE0Qm5CLHFEQUFBLEVBQWxDO0FBQ0EsUUFBTSxDQUFDb0IsTUFBRCxFQUFTQyxTQUFULElBQXNCckIscURBQUEsRUFBNUI7QUFDQSxRQUFNc0IsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRVcsSUFBQUE7QUFBRixNQUFTRCxNQUFNLENBQUNFLEtBQXRCO0FBRUF4QixFQUFBQSxzREFBQSxDQUFnQixNQUFNO0FBQ3BCLFFBQUksT0FBT3VCLEVBQVAsS0FBYyxRQUFsQixFQUE0QjtBQUM1Qm5CLElBQUFBLDBEQUFTLENBQUNtQixFQUFELENBQVQsQ0FBY0csSUFBZCxDQUFtQkwsU0FBbkI7QUFDQW5CLElBQUFBLGlFQUFnQixDQUFDcUIsRUFBRCxDQUFoQixDQUFxQkcsSUFBckIsQ0FBMEJWLFVBQTFCO0FBQ0FiLElBQUFBLHlFQUF3QixDQUFDb0IsRUFBRCxDQUF4QixDQUE2QkcsSUFBN0IsQ0FBa0NQLFlBQWxDO0FBQ0QsR0FMRCxFQUtHLENBQUNJLEVBQUQsQ0FMSDtBQU1BLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSw4REFBQyxtRUFBRDtBQUFBLHdDQUNHSCxNQURILGFBQ0dBLE1BREgsdUJBQ0dBLE1BQU0sQ0FBRU8sV0FEWCxrRkFDMEIsOERBQUMsbURBQUQ7QUFBVSxlQUFPLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEMUIsUUFDeUQsR0FEekQsMEJBRUdaLE9BRkgsYUFFR0EsT0FGSCx1QkFFR0EsT0FBTyxDQUFFYSxXQUZaLG9GQUUyQiw4REFBQyxtREFBRDtBQUFVLGVBQU8sRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFRRSw4REFBQyx3RUFBRDtBQUF5QixvQkFBVyxZQUFwQztBQUFBLDhCQUNFLDhEQUFDLGtGQUFEO0FBQ0UsYUFBSyxFQUFDLFNBRFI7QUFFRSxpQkFBUyxFQUFDLE9BRlo7QUFHRSxZQUFJLEVBQUMsR0FIUDtBQUlFLGtCQUFVLEVBQUMsTUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVNFLDhEQUFDLHFEQUFEO0FBQVksa0JBQVUsRUFBQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFtQkUsOERBQUMsMEVBQUQ7QUFBZSxhQUFPLEVBQUViO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkJGLGVBb0JFLDhEQUFDLDhDQUFEO0FBQUssUUFBRSxFQUFFO0FBQUVjLFFBQUFBLFNBQVMsRUFBRTtBQUFiLE9BQVQ7QUFBQSw2QkFDRSw4REFBQyx3RkFBRDtBQUFzQixZQUFJLEVBQUVYO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBLGtCQURGO0FBMEJELENBdkNEOztHQUFNSjtVQUlXRjs7O0tBSlhFO0FBeUNOQSxJQUFJLENBQUNQLFNBQUwsR0FBaUJBLDBEQUFqQjtBQUVBLCtEQUFlTyxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90cmFkZXIvW2lkXS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJhZGVyQ29udGFjdCB9IGZyb20gXCJjb21wb25lbnRzL3RyYWRlci9UcmFkZXJDb250YWN0XCI7XG5pbXBvcnQgeyBUcmFkZXJDb250YWN0IGFzIE1vZGVsLCBUcmFkZXIgYXMgVHJhZGVyTW9kZWwgfSBmcm9tIFwibW9kZWxzL3RyYWRlclwiO1xuaW1wb3J0IHsgVHJhZGVyVmVyaWZ5aW5nUmVzdWx0IH0gZnJvbSBcIm1vZGVscy90cmFkZXJcIjtcbmltcG9ydCB7XG4gIGdldFRyYWRlckNvbnRhY3QsXG4gIGdldFRyYWRlclZlcmlmeWluZ1Jlc3VsdCxcbiAgZ2V0VHJhZGVyLFxufSBmcm9tIFwic2VydmljZXMvdHJhZGVyXCI7XG5pbXBvcnQgeyBUcmFkZXJWZXJpZnlpbmdUYWJsZSB9IGZyb20gXCJjb21wb25lbnRzL3RyYWRlci9UcmFkZXJWZXJpZnlpbmdUYWJsZVwiO1xuaW1wb3J0IHsgQWRtaW5MYXlvdXQsIGdldExheW91dCB9IGZyb20gXCJsYXlvdXRzL0FkbWluTGF5b3V0XCI7XG5pbXBvcnQgeyBCb3gsIFNrZWxldG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFdyYXBwZWRMaW5rIH0gZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL1dyYXBwZWRMaW5rL1dyYXBwZWRMaW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2NvbnRhY3QsIHNldENvbnRhY3RdID0gUmVhY3QudXNlU3RhdGU8TW9kZWw+KCk7XG4gIGNvbnN0IFtreWNSZXN1bHQsIHNldEtZQ1Jlc3VsdF0gPSBSZWFjdC51c2VTdGF0ZTxUcmFkZXJWZXJpZnlpbmdSZXN1bHRbXT4oKTtcbiAgY29uc3QgW3RyYWRlciwgc2V0VHJhZGVyXSA9IFJlYWN0LnVzZVN0YXRlPFRyYWRlck1vZGVsPigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpZCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xuICAgIGdldFRyYWRlcihpZCkudGhlbihzZXRUcmFkZXIpO1xuICAgIGdldFRyYWRlckNvbnRhY3QoaWQpLnRoZW4oc2V0Q29udGFjdCk7XG4gICAgZ2V0VHJhZGVyVmVyaWZ5aW5nUmVzdWx0KGlkKS50aGVuKHNldEtZQ1Jlc3VsdCk7XG4gIH0sIFtpZF0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QWRtaW5MYXlvdXQuSGVhZGVyPlxuICAgICAgICB7dHJhZGVyPy5tYXJrZXRwbGFjZSA/PyA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiAvPn0gfHtcIiBcIn1cbiAgICAgICAge2NvbnRhY3Q/LmNvbXBhbnlOYW1lID8/IDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIC8+fVxuICAgICAgPC9BZG1pbkxheW91dC5IZWFkZXI+XG4gICAgICA8QWRtaW5MYXlvdXQuQnJlYWRjcnVtYnMgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgPFdyYXBwZWRMaW5rXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICB1bmRlcmxpbmU9XCJob3ZlclwiXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgPlxuICAgICAgICAgIFRyYWRlclxuICAgICAgICA8L1dyYXBwZWRMaW5rPlxuICAgICAgICA8VHlwb2dyYXBoeSBmb250V2VpZ2h0PVwibGlnaHRcIj5UcmFkZXIgRGV0YWlsczwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQWRtaW5MYXlvdXQuQnJlYWRjcnVtYnM+XG4gICAgICA8VHJhZGVyQ29udGFjdCBjb250YWN0PXtjb250YWN0fSAvPlxuICAgICAgPEJveCBzeD17eyBtYXJnaW5Ub3A6IFwiMjRweFwiIH19PlxuICAgICAgICA8VHJhZGVyVmVyaWZ5aW5nVGFibGUgZGF0YT17a3ljUmVzdWx0fSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Ib21lLmdldExheW91dCA9IGdldExheW91dDtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRyYWRlckNvbnRhY3QiLCJnZXRUcmFkZXJDb250YWN0IiwiZ2V0VHJhZGVyVmVyaWZ5aW5nUmVzdWx0IiwiZ2V0VHJhZGVyIiwiVHJhZGVyVmVyaWZ5aW5nVGFibGUiLCJBZG1pbkxheW91dCIsImdldExheW91dCIsIkJveCIsIlNrZWxldG9uIiwiVHlwb2dyYXBoeSIsIldyYXBwZWRMaW5rIiwidXNlUm91dGVyIiwiSGVhZCIsIkhvbWUiLCJjb250YWN0Iiwic2V0Q29udGFjdCIsInVzZVN0YXRlIiwia3ljUmVzdWx0Iiwic2V0S1lDUmVzdWx0IiwidHJhZGVyIiwic2V0VHJhZGVyIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsInRoZW4iLCJtYXJrZXRwbGFjZSIsImNvbXBhbnlOYW1lIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==