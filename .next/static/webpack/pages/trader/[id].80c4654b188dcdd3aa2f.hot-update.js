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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var components_common_WrappedLink_WrappedLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/WrappedLink/WrappedLink */ "./src/components/common/WrappedLink/WrappedLink.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_4__.AdminLayout.Header, {
      children: [(_trader$marketplace = trader === null || trader === void 0 ? void 0 : trader.marketplace) !== null && _trader$marketplace !== void 0 ? _trader$marketplace : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
        variant: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 33
      }, undefined), " |", " ", (_contact$companyName = contact === null || contact === void 0 ? void 0 : contact.companyName) !== null && _contact$companyName !== void 0 ? _contact$companyName : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
        variant: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 34
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_4__.AdminLayout.Breadcrumbs, {
      "aria-label": "breadcrumb",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_common_WrappedLink_WrappedLink__WEBPACK_IMPORTED_MODULE_5__.WrappedLink, {
        color: "inherit",
        underline: "hover",
        href: "/",
        fontWeight: "bold",
        children: "Trader"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        fontWeight: "light",
        children: "Trader Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_trader_TraderContact__WEBPACK_IMPORTED_MODULE_1__.TraderContact, {
      contact: contact
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
      sx: {
        marginTop: "24px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_trader_TraderVerifyingTable__WEBPACK_IMPORTED_MODULE_3__.TraderVerifyingTable, {
        data: kycResult
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhZGVyL1tpZF0uODBjNDY1NGIxODhkY2RkM2FhMmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQSxNQUFNYSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUFBOztBQUNqQixRQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QmYscURBQUEsRUFBOUI7QUFDQSxRQUFNLENBQUNpQixTQUFELEVBQVlDLFlBQVosSUFBNEJsQixxREFBQSxFQUFsQztBQUNBLFFBQU0sQ0FBQ21CLE1BQUQsRUFBU0MsU0FBVCxJQUFzQnBCLHFEQUFBLEVBQTVCO0FBQ0EsUUFBTXFCLE1BQU0sR0FBR1Qsc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVVLElBQUFBO0FBQUYsTUFBU0QsTUFBTSxDQUFDRSxLQUF0QjtBQUVBdkIsRUFBQUEsc0RBQUEsQ0FBZ0IsTUFBTTtBQUNwQixRQUFJLE9BQU9zQixFQUFQLEtBQWMsUUFBbEIsRUFBNEI7QUFDNUJsQixJQUFBQSwwREFBUyxDQUFDa0IsRUFBRCxDQUFULENBQWNHLElBQWQsQ0FBbUJMLFNBQW5CO0FBQ0FsQixJQUFBQSxpRUFBZ0IsQ0FBQ29CLEVBQUQsQ0FBaEIsQ0FBcUJHLElBQXJCLENBQTBCVixVQUExQjtBQUNBWixJQUFBQSx5RUFBd0IsQ0FBQ21CLEVBQUQsQ0FBeEIsQ0FBNkJHLElBQTdCLENBQWtDUCxZQUFsQztBQUNELEdBTEQsRUFLRyxDQUFDSSxFQUFELENBTEg7QUFNQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG1FQUFEO0FBQUEsd0NBQ0dILE1BREgsYUFDR0EsTUFESCx1QkFDR0EsTUFBTSxDQUFFTyxXQURYLGtGQUMwQiw4REFBQyxtREFBRDtBQUFVLGVBQU8sRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQxQixRQUN5RCxHQUR6RCwwQkFFR1osT0FGSCxhQUVHQSxPQUZILHVCQUVHQSxPQUFPLENBQUVhLFdBRlosb0ZBRTJCLDhEQUFDLG1EQUFEO0FBQVUsZUFBTyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLDhEQUFDLHdFQUFEO0FBQXlCLG9CQUFXLFlBQXBDO0FBQUEsOEJBQ0UsOERBQUMsa0ZBQUQ7QUFDRSxhQUFLLEVBQUMsU0FEUjtBQUVFLGlCQUFTLEVBQUMsT0FGWjtBQUdFLFlBQUksRUFBQyxHQUhQO0FBSUUsa0JBQVUsRUFBQyxNQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0UsOERBQUMscURBQUQ7QUFBWSxrQkFBVSxFQUFDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQWdCRSw4REFBQywwRUFBRDtBQUFlLGFBQU8sRUFBRWI7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsZUFpQkUsOERBQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRWMsUUFBQUEsU0FBUyxFQUFFO0FBQWIsT0FBVDtBQUFBLDZCQUNFLDhEQUFDLHdGQUFEO0FBQXNCLFlBQUksRUFBRVg7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUEsa0JBREY7QUF1QkQsQ0FwQ0Q7O0dBQU1KO1VBSVdEOzs7S0FKWEM7QUFzQ05BLElBQUksQ0FBQ04sU0FBTCxHQUFpQkEsMERBQWpCO0FBRUEsK0RBQWVNLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RyYWRlci9baWRdLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJhZGVyQ29udGFjdCB9IGZyb20gXCJjb21wb25lbnRzL3RyYWRlci9UcmFkZXJDb250YWN0XCI7XG5pbXBvcnQgeyBUcmFkZXJDb250YWN0IGFzIE1vZGVsLCBUcmFkZXIgYXMgVHJhZGVyTW9kZWwgfSBmcm9tIFwibW9kZWxzL3RyYWRlclwiO1xuaW1wb3J0IHsgVHJhZGVyVmVyaWZ5aW5nUmVzdWx0IH0gZnJvbSBcIm1vZGVscy90cmFkZXJcIjtcbmltcG9ydCB7XG4gIGdldFRyYWRlckNvbnRhY3QsXG4gIGdldFRyYWRlclZlcmlmeWluZ1Jlc3VsdCxcbiAgZ2V0VHJhZGVyLFxufSBmcm9tIFwic2VydmljZXMvdHJhZGVyXCI7XG5pbXBvcnQgeyBUcmFkZXJWZXJpZnlpbmdUYWJsZSB9IGZyb20gXCJjb21wb25lbnRzL3RyYWRlci9UcmFkZXJWZXJpZnlpbmdUYWJsZVwiO1xuaW1wb3J0IHsgQWRtaW5MYXlvdXQsIGdldExheW91dCB9IGZyb20gXCJsYXlvdXRzL0FkbWluTGF5b3V0XCI7XG5pbXBvcnQgeyBCb3gsIFNrZWxldG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IFdyYXBwZWRMaW5rIH0gZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL1dyYXBwZWRMaW5rL1dyYXBwZWRMaW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmludGVyZmFjZSBQYWdlUGFyYW1zIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2NvbnRhY3QsIHNldENvbnRhY3RdID0gUmVhY3QudXNlU3RhdGU8TW9kZWw+KCk7XG4gIGNvbnN0IFtreWNSZXN1bHQsIHNldEtZQ1Jlc3VsdF0gPSBSZWFjdC51c2VTdGF0ZTxUcmFkZXJWZXJpZnlpbmdSZXN1bHRbXT4oKTtcbiAgY29uc3QgW3RyYWRlciwgc2V0VHJhZGVyXSA9IFJlYWN0LnVzZVN0YXRlPFRyYWRlck1vZGVsPigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpZCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuO1xuICAgIGdldFRyYWRlcihpZCkudGhlbihzZXRUcmFkZXIpO1xuICAgIGdldFRyYWRlckNvbnRhY3QoaWQpLnRoZW4oc2V0Q29udGFjdCk7XG4gICAgZ2V0VHJhZGVyVmVyaWZ5aW5nUmVzdWx0KGlkKS50aGVuKHNldEtZQ1Jlc3VsdCk7XG4gIH0sIFtpZF0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QWRtaW5MYXlvdXQuSGVhZGVyPlxuICAgICAgICB7dHJhZGVyPy5tYXJrZXRwbGFjZSA/PyA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiAvPn0gfHtcIiBcIn1cbiAgICAgICAge2NvbnRhY3Q/LmNvbXBhbnlOYW1lID8/IDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIC8+fVxuICAgICAgPC9BZG1pbkxheW91dC5IZWFkZXI+XG4gICAgICA8QWRtaW5MYXlvdXQuQnJlYWRjcnVtYnMgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgPFdyYXBwZWRMaW5rXG4gICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICB1bmRlcmxpbmU9XCJob3ZlclwiXG4gICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcbiAgICAgICAgPlxuICAgICAgICAgIFRyYWRlclxuICAgICAgICA8L1dyYXBwZWRMaW5rPlxuICAgICAgICA8VHlwb2dyYXBoeSBmb250V2VpZ2h0PVwibGlnaHRcIj5UcmFkZXIgRGV0YWlsczwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQWRtaW5MYXlvdXQuQnJlYWRjcnVtYnM+XG4gICAgICA8VHJhZGVyQ29udGFjdCBjb250YWN0PXtjb250YWN0fSAvPlxuICAgICAgPEJveCBzeD17eyBtYXJnaW5Ub3A6IFwiMjRweFwiIH19PlxuICAgICAgICA8VHJhZGVyVmVyaWZ5aW5nVGFibGUgZGF0YT17a3ljUmVzdWx0fSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Ib21lLmdldExheW91dCA9IGdldExheW91dDtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRyYWRlckNvbnRhY3QiLCJnZXRUcmFkZXJDb250YWN0IiwiZ2V0VHJhZGVyVmVyaWZ5aW5nUmVzdWx0IiwiZ2V0VHJhZGVyIiwiVHJhZGVyVmVyaWZ5aW5nVGFibGUiLCJBZG1pbkxheW91dCIsImdldExheW91dCIsIkJveCIsIlNrZWxldG9uIiwiVHlwb2dyYXBoeSIsIldyYXBwZWRMaW5rIiwidXNlUm91dGVyIiwiSG9tZSIsImNvbnRhY3QiLCJzZXRDb250YWN0IiwidXNlU3RhdGUiLCJreWNSZXN1bHQiLCJzZXRLWUNSZXN1bHQiLCJ0cmFkZXIiLCJzZXRUcmFkZXIiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwidGhlbiIsIm1hcmtldHBsYWNlIiwiY29tcGFueU5hbWUiLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9