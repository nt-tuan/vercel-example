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
        lineNumber: 45,
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
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
      sx: {
        marginTop: "24px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_trader_TraderVerifyingTable__WEBPACK_IMPORTED_MODULE_3__.TraderVerifyingTable, {
        data: kycResult
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhZGVyL1tpZF0uMGM5ZDkyMDM3ODMwOGY1ZTE3YzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQSxNQUFNYSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUFBOztBQUNqQixRQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QmYscURBQUEsRUFBOUI7QUFDQSxRQUFNLENBQUNpQixTQUFELEVBQVlDLFlBQVosSUFBNEJsQixxREFBQSxFQUFsQztBQUNBLFFBQU0sQ0FBQ21CLE1BQUQsRUFBU0MsU0FBVCxJQUFzQnBCLHFEQUFBLEVBQTVCO0FBQ0EsUUFBTXFCLE1BQU0sR0FBR1Qsc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVVLElBQUFBO0FBQUYsTUFBU0QsTUFBTSxDQUFDRSxLQUF0QjtBQUVBdkIsRUFBQUEsc0RBQUEsQ0FBZ0IsTUFBTTtBQUNwQixRQUFJLE9BQU9zQixFQUFQLEtBQWMsUUFBbEIsRUFBNEI7QUFDNUJsQixJQUFBQSwwREFBUyxDQUFDa0IsRUFBRCxDQUFULENBQWNHLElBQWQsQ0FBbUJMLFNBQW5CO0FBQ0FsQixJQUFBQSxpRUFBZ0IsQ0FBQ29CLEVBQUQsQ0FBaEIsQ0FBcUJHLElBQXJCLENBQTBCVixVQUExQjtBQUNBWixJQUFBQSx5RUFBd0IsQ0FBQ21CLEVBQUQsQ0FBeEIsQ0FBNkJHLElBQTdCLENBQWtDUCxZQUFsQztBQUNELEdBTEQsRUFLRyxDQUFDSSxFQUFELENBTEg7QUFNQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG1FQUFEO0FBQUEsd0NBQ0dILE1BREgsYUFDR0EsTUFESCx1QkFDR0EsTUFBTSxDQUFFTyxXQURYLGtGQUMwQiw4REFBQyxtREFBRDtBQUFVLGVBQU8sRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQxQixRQUN5RCxHQUR6RCwwQkFFR1osT0FGSCxhQUVHQSxPQUZILHVCQUVHQSxPQUFPLENBQUVhLFdBRlosb0ZBRTJCLDhEQUFDLG1EQUFEO0FBQVUsZUFBTyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLDhEQUFDLHdFQUFEO0FBQXlCLG9CQUFXLFlBQXBDO0FBQUEsOEJBQ0UsOERBQUMsa0ZBQUQ7QUFBYSxhQUFLLEVBQUMsU0FBbkI7QUFBNkIsaUJBQVMsRUFBQyxPQUF2QztBQUErQyxZQUFJLEVBQUMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQyxxREFBRDtBQUFZLGtCQUFVLEVBQUMsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBV0UsOERBQUMsMEVBQUQ7QUFBZSxhQUFPLEVBQUViO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFZRSw4REFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBRTtBQUFFYyxRQUFBQSxTQUFTLEVBQUU7QUFBYixPQUFUO0FBQUEsNkJBQ0UsOERBQUMsd0ZBQUQ7QUFBc0IsWUFBSSxFQUFFWDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBLGtCQURGO0FBa0JELENBL0JEOztHQUFNSjtVQUlXRDs7O0tBSlhDO0FBaUNOQSxJQUFJLENBQUNOLFNBQUwsR0FBaUJBLDBEQUFqQjtBQUVBLCtEQUFlTSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy90cmFkZXIvW2lkXS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRyYWRlckNvbnRhY3QgfSBmcm9tIFwiY29tcG9uZW50cy90cmFkZXIvVHJhZGVyQ29udGFjdFwiO1xuaW1wb3J0IHsgVHJhZGVyQ29udGFjdCBhcyBNb2RlbCwgVHJhZGVyIGFzIFRyYWRlck1vZGVsIH0gZnJvbSBcIm1vZGVscy90cmFkZXJcIjtcbmltcG9ydCB7IFRyYWRlclZlcmlmeWluZ1Jlc3VsdCB9IGZyb20gXCJtb2RlbHMvdHJhZGVyXCI7XG5pbXBvcnQge1xuICBnZXRUcmFkZXJDb250YWN0LFxuICBnZXRUcmFkZXJWZXJpZnlpbmdSZXN1bHQsXG4gIGdldFRyYWRlcixcbn0gZnJvbSBcInNlcnZpY2VzL3RyYWRlclwiO1xuaW1wb3J0IHsgVHJhZGVyVmVyaWZ5aW5nVGFibGUgfSBmcm9tIFwiY29tcG9uZW50cy90cmFkZXIvVHJhZGVyVmVyaWZ5aW5nVGFibGVcIjtcbmltcG9ydCB7IEFkbWluTGF5b3V0LCBnZXRMYXlvdXQgfSBmcm9tIFwibGF5b3V0cy9BZG1pbkxheW91dFwiO1xuaW1wb3J0IHsgQm94LCBTa2VsZXRvbiwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBXcmFwcGVkTGluayB9IGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9XcmFwcGVkTGluay9XcmFwcGVkTGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbnRlcmZhY2UgUGFnZVBhcmFtcyB7XG4gIGlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb250YWN0LCBzZXRDb250YWN0XSA9IFJlYWN0LnVzZVN0YXRlPE1vZGVsPigpO1xuICBjb25zdCBba3ljUmVzdWx0LCBzZXRLWUNSZXN1bHRdID0gUmVhY3QudXNlU3RhdGU8VHJhZGVyVmVyaWZ5aW5nUmVzdWx0W10+KCk7XG4gIGNvbnN0IFt0cmFkZXIsIHNldFRyYWRlcl0gPSBSZWFjdC51c2VTdGF0ZTxUcmFkZXJNb2RlbD4oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaWQgIT09IFwic3RyaW5nXCIpIHJldHVybjtcbiAgICBnZXRUcmFkZXIoaWQpLnRoZW4oc2V0VHJhZGVyKTtcbiAgICBnZXRUcmFkZXJDb250YWN0KGlkKS50aGVuKHNldENvbnRhY3QpO1xuICAgIGdldFRyYWRlclZlcmlmeWluZ1Jlc3VsdChpZCkudGhlbihzZXRLWUNSZXN1bHQpO1xuICB9LCBbaWRdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFkbWluTGF5b3V0LkhlYWRlcj5cbiAgICAgICAge3RyYWRlcj8ubWFya2V0cGxhY2UgPz8gPFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgLz59IHx7XCIgXCJ9XG4gICAgICAgIHtjb250YWN0Py5jb21wYW55TmFtZSA/PyA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiAvPn1cbiAgICAgIDwvQWRtaW5MYXlvdXQuSGVhZGVyPlxuICAgICAgPEFkbWluTGF5b3V0LkJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIDxXcmFwcGVkTGluayBjb2xvcj1cImluaGVyaXRcIiB1bmRlcmxpbmU9XCJob3ZlclwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgVHJhZGVyXG4gICAgICAgIDwvV3JhcHBlZExpbms+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGZvbnRXZWlnaHQ9XCJsaWdodFwiPlRyYWRlciBEZXRhaWxzPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9BZG1pbkxheW91dC5CcmVhZGNydW1icz5cbiAgICAgIDxUcmFkZXJDb250YWN0IGNvbnRhY3Q9e2NvbnRhY3R9IC8+XG4gICAgICA8Qm94IHN4PXt7IG1hcmdpblRvcDogXCIyNHB4XCIgfX0+XG4gICAgICAgIDxUcmFkZXJWZXJpZnlpbmdUYWJsZSBkYXRhPXtreWNSZXN1bHR9IC8+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkhvbWUuZ2V0TGF5b3V0ID0gZ2V0TGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVHJhZGVyQ29udGFjdCIsImdldFRyYWRlckNvbnRhY3QiLCJnZXRUcmFkZXJWZXJpZnlpbmdSZXN1bHQiLCJnZXRUcmFkZXIiLCJUcmFkZXJWZXJpZnlpbmdUYWJsZSIsIkFkbWluTGF5b3V0IiwiZ2V0TGF5b3V0IiwiQm94IiwiU2tlbGV0b24iLCJUeXBvZ3JhcGh5IiwiV3JhcHBlZExpbmsiLCJ1c2VSb3V0ZXIiLCJIb21lIiwiY29udGFjdCIsInNldENvbnRhY3QiLCJ1c2VTdGF0ZSIsImt5Y1Jlc3VsdCIsInNldEtZQ1Jlc3VsdCIsInRyYWRlciIsInNldFRyYWRlciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwibWFya2V0cGxhY2UiLCJjb21wYW55TmFtZSIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=