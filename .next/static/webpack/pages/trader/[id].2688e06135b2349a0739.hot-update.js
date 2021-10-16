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

  var _trader$marketplace2, _contact$companyName;

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
  const title = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    var _ref, _trader$marketplace;

    return (_ref = (_trader$marketplace = trader === null || trader === void 0 ? void 0 : trader.marketplace) !== null && _trader$marketplace !== void 0 ? _trader$marketplace : "" + "|" + (contact === null || contact === void 0 ? void 0 : contact.companyName)) !== null && _ref !== void 0 ? _ref : "";
  }, [trader]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(layouts_AdminLayout__WEBPACK_IMPORTED_MODULE_4__.AdminLayout.Header, {
      children: [(_trader$marketplace2 = trader === null || trader === void 0 ? void 0 : trader.marketplace) !== null && _trader$marketplace2 !== void 0 ? _trader$marketplace2 : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Skeleton, {
        variant: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 33
      }, undefined), " |", " ", (_contact$companyName = contact === null || contact === void 0 ? void 0 : contact.companyName) !== null && _contact$companyName !== void 0 ? _contact$companyName : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Skeleton, {
        variant: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 34
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
        fontWeight: "light",
        children: "Trader Details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(components_trader_TraderContact__WEBPACK_IMPORTED_MODULE_1__.TraderContact, {
      contact: contact
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
      sx: {
        marginTop: "24px"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(components_trader_TraderVerifyingTable__WEBPACK_IMPORTED_MODULE_3__.TraderVerifyingTable, {
        data: kycResult
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(Home, "nIDb2k5fTsKX5itGCDg7XEwYP2M=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhZGVyL1tpZF0uMjY4OGUwNjEzNWIyMzQ5YTA3MzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTWMsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFBQTs7QUFDakIsUUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0JoQixxREFBQSxFQUE5QjtBQUNBLFFBQU0sQ0FBQ2tCLFNBQUQsRUFBWUMsWUFBWixJQUE0Qm5CLHFEQUFBLEVBQWxDO0FBQ0EsUUFBTSxDQUFDb0IsTUFBRCxFQUFTQyxTQUFULElBQXNCckIscURBQUEsRUFBNUI7QUFDQSxRQUFNc0IsTUFBTSxHQUFHVixzREFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRVcsSUFBQUE7QUFBRixNQUFTRCxNQUFNLENBQUNFLEtBQXRCO0FBRUF4QixFQUFBQSxzREFBQSxDQUFnQixNQUFNO0FBQ3BCLFFBQUksT0FBT3VCLEVBQVAsS0FBYyxRQUFsQixFQUE0QjtBQUM1Qm5CLElBQUFBLDBEQUFTLENBQUNtQixFQUFELENBQVQsQ0FBY0csSUFBZCxDQUFtQkwsU0FBbkI7QUFDQW5CLElBQUFBLGlFQUFnQixDQUFDcUIsRUFBRCxDQUFoQixDQUFxQkcsSUFBckIsQ0FBMEJWLFVBQTFCO0FBQ0FiLElBQUFBLHlFQUF3QixDQUFDb0IsRUFBRCxDQUF4QixDQUE2QkcsSUFBN0IsQ0FBa0NQLFlBQWxDO0FBQ0QsR0FMRCxFQUtHLENBQUNJLEVBQUQsQ0FMSDtBQU1BLFFBQU1JLEtBQUssR0FBRzNCLG9EQUFBLENBQWMsTUFBTTtBQUFBOztBQUNoQywwQ0FBT29CLE1BQVAsYUFBT0EsTUFBUCx1QkFBT0EsTUFBTSxDQUFFUyxXQUFmLHFFQUE4QixLQUFLLEdBQUwsSUFBV2QsT0FBWCxhQUFXQSxPQUFYLHVCQUFXQSxPQUFPLENBQUVlLFdBQXBCLENBQTlCLHVDQUFpRSxFQUFqRTtBQUNELEdBRmEsRUFFWCxDQUFDVixNQUFELENBRlcsQ0FBZDtBQUdBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFRTztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsbUVBQUQ7QUFBQSx5Q0FDR1AsTUFESCxhQUNHQSxNQURILHVCQUNHQSxNQUFNLENBQUVTLFdBRFgsb0ZBQzBCLDhEQUFDLG1EQUFEO0FBQVUsZUFBTyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRDFCLFFBQ3lELEdBRHpELDBCQUVHZCxPQUZILGFBRUdBLE9BRkgsdUJBRUdBLE9BQU8sQ0FBRWUsV0FGWixvRkFFMkIsOERBQUMsbURBQUQ7QUFBVSxlQUFPLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBUUUsOERBQUMsd0VBQUQ7QUFBeUIsb0JBQVcsWUFBcEM7QUFBQSw4QkFDRSw4REFBQyxrRkFBRDtBQUNFLGFBQUssRUFBQyxTQURSO0FBRUUsaUJBQVMsRUFBQyxPQUZaO0FBR0UsWUFBSSxFQUFDLEdBSFA7QUFJRSxrQkFBVSxFQUFDLE1BSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFTRSw4REFBQyxxREFBRDtBQUFZLGtCQUFVLEVBQUMsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBbUJFLDhEQUFDLDBFQUFEO0FBQWUsYUFBTyxFQUFFZjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRixlQW9CRSw4REFBQyw4Q0FBRDtBQUFLLFFBQUUsRUFBRTtBQUFFZ0IsUUFBQUEsU0FBUyxFQUFFO0FBQWIsT0FBVDtBQUFBLDZCQUNFLDhEQUFDLHdGQUFEO0FBQXNCLFlBQUksRUFBRWI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJGO0FBQUEsa0JBREY7QUEwQkQsQ0ExQ0Q7O0dBQU1KO1VBSVdGOzs7S0FKWEU7QUE0Q05BLElBQUksQ0FBQ1AsU0FBTCxHQUFpQkEsMERBQWpCO0FBRUEsK0RBQWVPLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3RyYWRlci9baWRdLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmFkZXJDb250YWN0IH0gZnJvbSBcImNvbXBvbmVudHMvdHJhZGVyL1RyYWRlckNvbnRhY3RcIjtcbmltcG9ydCB7IFRyYWRlckNvbnRhY3QgYXMgTW9kZWwsIFRyYWRlciBhcyBUcmFkZXJNb2RlbCB9IGZyb20gXCJtb2RlbHMvdHJhZGVyXCI7XG5pbXBvcnQgeyBUcmFkZXJWZXJpZnlpbmdSZXN1bHQgfSBmcm9tIFwibW9kZWxzL3RyYWRlclwiO1xuaW1wb3J0IHtcbiAgZ2V0VHJhZGVyQ29udGFjdCxcbiAgZ2V0VHJhZGVyVmVyaWZ5aW5nUmVzdWx0LFxuICBnZXRUcmFkZXIsXG59IGZyb20gXCJzZXJ2aWNlcy90cmFkZXJcIjtcbmltcG9ydCB7IFRyYWRlclZlcmlmeWluZ1RhYmxlIH0gZnJvbSBcImNvbXBvbmVudHMvdHJhZGVyL1RyYWRlclZlcmlmeWluZ1RhYmxlXCI7XG5pbXBvcnQgeyBBZG1pbkxheW91dCwgZ2V0TGF5b3V0IH0gZnJvbSBcImxheW91dHMvQWRtaW5MYXlvdXRcIjtcbmltcG9ydCB7IEJveCwgU2tlbGV0b24sIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgV3JhcHBlZExpbmsgfSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vV3JhcHBlZExpbmsvV3JhcHBlZExpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbY29udGFjdCwgc2V0Q29udGFjdF0gPSBSZWFjdC51c2VTdGF0ZTxNb2RlbD4oKTtcbiAgY29uc3QgW2t5Y1Jlc3VsdCwgc2V0S1lDUmVzdWx0XSA9IFJlYWN0LnVzZVN0YXRlPFRyYWRlclZlcmlmeWluZ1Jlc3VsdFtdPigpO1xuICBjb25zdCBbdHJhZGVyLCBzZXRUcmFkZXJdID0gUmVhY3QudXNlU3RhdGU8VHJhZGVyTW9kZWw+KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGlkICE9PSBcInN0cmluZ1wiKSByZXR1cm47XG4gICAgZ2V0VHJhZGVyKGlkKS50aGVuKHNldFRyYWRlcik7XG4gICAgZ2V0VHJhZGVyQ29udGFjdChpZCkudGhlbihzZXRDb250YWN0KTtcbiAgICBnZXRUcmFkZXJWZXJpZnlpbmdSZXN1bHQoaWQpLnRoZW4oc2V0S1lDUmVzdWx0KTtcbiAgfSwgW2lkXSk7XG4gIGNvbnN0IHRpdGxlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHRyYWRlcj8ubWFya2V0cGxhY2UgPz8gXCJcIiArIFwifFwiICsgY29udGFjdD8uY29tcGFueU5hbWUgPz8gXCJcIjtcbiAgfSwgW3RyYWRlcl0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEFkbWluTGF5b3V0LkhlYWRlcj5cbiAgICAgICAge3RyYWRlcj8ubWFya2V0cGxhY2UgPz8gPFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgLz59IHx7XCIgXCJ9XG4gICAgICAgIHtjb250YWN0Py5jb21wYW55TmFtZSA/PyA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiAvPn1cbiAgICAgIDwvQWRtaW5MYXlvdXQuSGVhZGVyPlxuICAgICAgPEFkbWluTGF5b3V0LkJyZWFkY3J1bWJzIGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIDxXcmFwcGVkTGlua1xuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgdW5kZXJsaW5lPVwiaG92ZXJcIlxuICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgID5cbiAgICAgICAgICBUcmFkZXJcbiAgICAgICAgPC9XcmFwcGVkTGluaz5cbiAgICAgICAgPFR5cG9ncmFwaHkgZm9udFdlaWdodD1cImxpZ2h0XCI+VHJhZGVyIERldGFpbHM8L1R5cG9ncmFwaHk+XG4gICAgICA8L0FkbWluTGF5b3V0LkJyZWFkY3J1bWJzPlxuICAgICAgPFRyYWRlckNvbnRhY3QgY29udGFjdD17Y29udGFjdH0gLz5cbiAgICAgIDxCb3ggc3g9e3sgbWFyZ2luVG9wOiBcIjI0cHhcIiB9fT5cbiAgICAgICAgPFRyYWRlclZlcmlmeWluZ1RhYmxlIGRhdGE9e2t5Y1Jlc3VsdH0gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApO1xufTtcblxuSG9tZS5nZXRMYXlvdXQgPSBnZXRMYXlvdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUcmFkZXJDb250YWN0IiwiZ2V0VHJhZGVyQ29udGFjdCIsImdldFRyYWRlclZlcmlmeWluZ1Jlc3VsdCIsImdldFRyYWRlciIsIlRyYWRlclZlcmlmeWluZ1RhYmxlIiwiQWRtaW5MYXlvdXQiLCJnZXRMYXlvdXQiLCJCb3giLCJTa2VsZXRvbiIsIlR5cG9ncmFwaHkiLCJXcmFwcGVkTGluayIsInVzZVJvdXRlciIsIkhlYWQiLCJIb21lIiwiY29udGFjdCIsInNldENvbnRhY3QiLCJ1c2VTdGF0ZSIsImt5Y1Jlc3VsdCIsInNldEtZQ1Jlc3VsdCIsInRyYWRlciIsInNldFRyYWRlciIsInJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VFZmZlY3QiLCJ0aGVuIiwidGl0bGUiLCJ1c2VNZW1vIiwibWFya2V0cGxhY2UiLCJjb21wYW55TmFtZSIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=