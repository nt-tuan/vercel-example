self["webpackHotUpdate_N_E"]("pages/trader/[id]",{

/***/ "./src/pages/trader/[id].tsx":
/*!***********************************!*\
  !*** ./src/pages/trader/[id].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        lineNumber: 37,
        columnNumber: 33
      }, undefined), " |", " ", (_contact$companyName = contact === null || contact === void 0 ? void 0 : contact.companyName) !== null && _contact$companyName !== void 0 ? _contact$companyName : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Skeleton, {
        variant: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 34
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {
        fontWeight: "light",
        children: "Trader Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_trader_TraderContact__WEBPACK_IMPORTED_MODULE_1__.TraderContact, {
      contact: contact
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {
      sx: {
        marginTop: "24px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(components_trader_TraderVerifyingTable__WEBPACK_IMPORTED_MODULE_3__.TraderVerifyingTable, {
        data: kycResult
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhZGVyL1tpZF0uNDYxYWRmN2VjZThlYTRjMWQ5NDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFLQSxNQUFNYSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUFBOztBQUNqQixRQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QmYscURBQUEsRUFBOUI7QUFDQSxRQUFNLENBQUNpQixTQUFELEVBQVlDLFlBQVosSUFBNEJsQixxREFBQSxFQUFsQztBQUNBLFFBQU0sQ0FBQ21CLE1BQUQsRUFBU0MsU0FBVCxJQUFzQnBCLHFEQUFBLEVBQTVCO0FBQ0EsUUFBTXFCLE1BQU0sR0FBR1Qsc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVVLElBQUFBO0FBQUYsTUFBU0QsTUFBTSxDQUFDRSxLQUF0QjtBQUVBdkIsRUFBQUEsc0RBQUEsQ0FBZ0IsTUFBTTtBQUNwQkksSUFBQUEsMERBQVMsQ0FBQ2tCLEVBQUQsQ0FBVCxDQUFjRyxJQUFkLENBQW1CTCxTQUFuQjtBQUNBbEIsSUFBQUEsaUVBQWdCLENBQUNvQixFQUFELENBQWhCLENBQXFCRyxJQUFyQixDQUEwQlYsVUFBMUI7QUFDQVosSUFBQUEseUVBQXdCLENBQUNtQixFQUFELENBQXhCLENBQTZCRyxJQUE3QixDQUFrQ1AsWUFBbEM7QUFDRCxHQUpELEVBSUcsQ0FBQ0ksRUFBRCxDQUpIO0FBS0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxtRUFBRDtBQUFBLHdDQUNHSCxNQURILGFBQ0dBLE1BREgsdUJBQ0dBLE1BQU0sQ0FBRU8sV0FEWCxrRkFDMEIsOERBQUMsbURBQUQ7QUFBVSxlQUFPLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEMUIsUUFDeUQsR0FEekQsMEJBRUdaLE9BRkgsYUFFR0EsT0FGSCx1QkFFR0EsT0FBTyxDQUFFYSxXQUZaLG9GQUUyQiw4REFBQyxtREFBRDtBQUFVLGVBQU8sRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSw4REFBQyx3RUFBRDtBQUF5QixvQkFBVyxZQUFwQztBQUFBLDhCQUNFLDhEQUFDLGtGQUFEO0FBQWEsYUFBSyxFQUFDLFNBQW5CO0FBQTZCLGlCQUFTLEVBQUMsT0FBdkM7QUFBK0MsWUFBSSxFQUFDLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMscURBQUQ7QUFBWSxrQkFBVSxFQUFDLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVdFLDhEQUFDLDBFQUFEO0FBQWUsYUFBTyxFQUFFYjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLGVBWUUsOERBQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUU7QUFBRWMsUUFBQUEsU0FBUyxFQUFFO0FBQWIsT0FBVDtBQUFBLDZCQUNFLDhEQUFDLHdGQUFEO0FBQXNCLFlBQUksRUFBRVg7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQSxrQkFERjtBQWtCRCxDQTlCRDs7R0FBTUo7VUFJV0Q7OztLQUpYQztBQWdDTkEsSUFBSSxDQUFDTixTQUFMLEdBQWlCQSwwREFBakI7QUFFQSwrREFBZU0sSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQSw2R0FBZ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RyYWRlci9baWRdLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvcm91dGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFkZXJDb250YWN0IH0gZnJvbSBcImNvbXBvbmVudHMvdHJhZGVyL1RyYWRlckNvbnRhY3RcIjtcbmltcG9ydCB7IFRyYWRlckNvbnRhY3QgYXMgTW9kZWwsIFRyYWRlciBhcyBUcmFkZXJNb2RlbCB9IGZyb20gXCJtb2RlbHMvdHJhZGVyXCI7XG5pbXBvcnQgeyBUcmFkZXJWZXJpZnlpbmdSZXN1bHQgfSBmcm9tIFwibW9kZWxzL3RyYWRlclwiO1xuaW1wb3J0IHtcbiAgZ2V0VHJhZGVyQ29udGFjdCxcbiAgZ2V0VHJhZGVyVmVyaWZ5aW5nUmVzdWx0LFxuICBnZXRUcmFkZXIsXG59IGZyb20gXCJzZXJ2aWNlcy90cmFkZXJcIjtcbmltcG9ydCB7IFRyYWRlclZlcmlmeWluZ1RhYmxlIH0gZnJvbSBcImNvbXBvbmVudHMvdHJhZGVyL1RyYWRlclZlcmlmeWluZ1RhYmxlXCI7XG5pbXBvcnQgeyBBZG1pbkxheW91dCwgZ2V0TGF5b3V0IH0gZnJvbSBcImxheW91dHMvQWRtaW5MYXlvdXRcIjtcbmltcG9ydCB7IEJveCwgU2tlbGV0b24sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgV3JhcHBlZExpbmsgfSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vV3JhcHBlZExpbmsvV3JhcHBlZExpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW50ZXJmYWNlIFBhZ2VQYXJhbXMge1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbY29udGFjdCwgc2V0Q29udGFjdF0gPSBSZWFjdC51c2VTdGF0ZTxNb2RlbD4oKTtcbiAgY29uc3QgW2t5Y1Jlc3VsdCwgc2V0S1lDUmVzdWx0XSA9IFJlYWN0LnVzZVN0YXRlPFRyYWRlclZlcmlmeWluZ1Jlc3VsdFtdPigpO1xuICBjb25zdCBbdHJhZGVyLCBzZXRUcmFkZXJdID0gUmVhY3QudXNlU3RhdGU8VHJhZGVyTW9kZWw+KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUcmFkZXIoaWQpLnRoZW4oc2V0VHJhZGVyKTtcbiAgICBnZXRUcmFkZXJDb250YWN0KGlkKS50aGVuKHNldENvbnRhY3QpO1xuICAgIGdldFRyYWRlclZlcmlmeWluZ1Jlc3VsdChpZCkudGhlbihzZXRLWUNSZXN1bHQpO1xuICB9LCBbaWRdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEFkbWluTGF5b3V0LkhlYWRlcj5cbiAgICAgICAge3RyYWRlcj8ubWFya2V0cGxhY2UgPz8gPFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgLz59IHx7XCIgXCJ9XG4gICAgICAgIHtjb250YWN0Py5jb21wYW55TmFtZSA/PyA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiAvPn1cbiAgICAgIDwvQWRtaW5MYXlvdXQuSGVhZGVyPlxuICAgICAgPEFkbWluTGF5b3V0LkJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIDxXcmFwcGVkTGluayBjb2xvcj1cImluaGVyaXRcIiB1bmRlcmxpbmU9XCJob3ZlclwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgVHJhZGVyXG4gICAgICAgIDwvV3JhcHBlZExpbms+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGZvbnRXZWlnaHQ9XCJsaWdodFwiPlRyYWRlciBEZXRhaWxzPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9BZG1pbkxheW91dC5CcmVhZGNydW1icz5cbiAgICAgIDxUcmFkZXJDb250YWN0IGNvbnRhY3Q9e2NvbnRhY3R9IC8+XG4gICAgICA8Qm94IHN4PXt7IG1hcmdpblRvcDogXCIyNHB4XCIgfX0+XG4gICAgICAgIDxUcmFkZXJWZXJpZnlpbmdUYWJsZSBkYXRhPXtreWNSZXN1bHR9IC8+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkhvbWUuZ2V0TGF5b3V0ID0gZ2V0TGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L3JvdXRlcicpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUcmFkZXJDb250YWN0IiwiZ2V0VHJhZGVyQ29udGFjdCIsImdldFRyYWRlclZlcmlmeWluZ1Jlc3VsdCIsImdldFRyYWRlciIsIlRyYWRlclZlcmlmeWluZ1RhYmxlIiwiQWRtaW5MYXlvdXQiLCJnZXRMYXlvdXQiLCJCb3giLCJTa2VsZXRvbiIsIlR5cG9ncmFwaHkiLCJXcmFwcGVkTGluayIsInVzZVJvdXRlciIsIkhvbWUiLCJjb250YWN0Iiwic2V0Q29udGFjdCIsInVzZVN0YXRlIiwia3ljUmVzdWx0Iiwic2V0S1lDUmVzdWx0IiwidHJhZGVyIiwic2V0VHJhZGVyIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsInRoZW4iLCJtYXJrZXRwbGFjZSIsImNvbXBhbnlOYW1lIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==