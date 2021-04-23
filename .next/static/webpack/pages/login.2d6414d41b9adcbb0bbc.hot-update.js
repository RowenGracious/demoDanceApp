webpackHotUpdate_N_E("pages/login",{

/***/ "./src/components/LoginForm/LoginForm.js":
/*!***********************************************!*\
  !*** ./src/components/LoginForm/LoginForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_InputText_InputText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/InputText/InputText */ \"./src/components/common/InputText/InputText.js\");\n/* harmony import */ var _common_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Button/PrimaryButton */ \"./src/components/common/Button/PrimaryButton.js\");\n/* harmony import */ var _utlis_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utlis/utils */ \"./src/utlis/utils.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar LoginForm = function LoginForm() {\n  _s();\n\n  var methods = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])();\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var onSubmit = function onSubmit(data) {\n    //comparing the Form login information with hardcoded user information\n    debugger;\n\n    if (_utlis_utils__WEBPACK_IMPORTED_MODULE_5__[\"userData\"].emailId.toLowerCase() === data.emailID && _utlis_utils__WEBPACK_IMPORTED_MODULE_5__[\"userData\"].password === data.password) {\n      //IF true set the localstorage token\n      localStorage.setItem('accessToken', Math.random().toString(36));\n      return router.push('/dashboard');\n    } else {\n      alert(\"Login details incorrect\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"FormProvider\"], methods, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"mx-auto self-center md:w-4/6 w-full p-20 grid grid-cols-1 gap-8 rounded overflow-hidden border-4 border-light-blue-500 border-opacity-25 shadow-lg\",\n    onSubmit: methods.handleSubmit(onSubmit)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    className: \"mx-auto uppercase text-purple-500 font-bold\"\n  }, \" Haligonia Dance Academy \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \" Enter Login Information: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_InputText_InputText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    type: \"text\",\n    label: \"Enter your Email ID\",\n    name: \"emailID\",\n    required: \"required\",\n    pattern: {\n      value: /\\S+@\\S+.\\S+/,\n      message: \"Entered value does not match email format\"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_InputText_InputText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    type: \"password\",\n    label: \"Enter your Password\",\n    name: \"password\",\n    required: \"required\",\n    minLength: {\n      value: 5,\n      message: \"min length is 5\"\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    type: \"submit\"\n  }, \" Continue \")));\n};\n\n_s(LoginForm, \"+BwhCX4tRRIaHVwaKE58pm9jD6w=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"], next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9naW5Gb3JtL0xvZ2luRm9ybS5qcz81YjdmIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIm1ldGhvZHMiLCJ1c2VGb3JtIiwicm91dGVyIiwidXNlUm91dGVyIiwib25TdWJtaXQiLCJkYXRhIiwidXNlckRhdGEiLCJlbWFpbElkIiwidG9Mb3dlckNhc2UiLCJlbWFpbElEIiwicGFzc3dvcmQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwicHVzaCIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwidmFsdWUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE9BQU8sR0FBR0MsK0RBQU8sRUFBdkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUN6QjtBQUNBOztBQUNBLFFBQUdDLHFEQUFRLENBQUNDLE9BQVQsQ0FBaUJDLFdBQWpCLE9BQW1DSCxJQUFJLENBQUNJLE9BQXhDLElBQW1ESCxxREFBUSxDQUFDSSxRQUFULEtBQXNCTCxJQUFJLENBQUNLLFFBQWpGLEVBQTJGO0FBQ3pGO0FBQ0FDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0NDLElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLENBQXBDO0FBQ0EsYUFBT2IsTUFBTSxDQUFDYyxJQUFQLENBQVksWUFBWixDQUFQO0FBQ0QsS0FKRCxNQUlPO0FBQ0xDLFdBQUssQ0FBQyx5QkFBRCxDQUFMO0FBQ0Q7QUFDRixHQVZEOztBQVlBLHNCQUNFLDJEQUFDLDREQUFELEVBQWtCakIsT0FBbEIsZUFDRTtBQUFNLGFBQVMsRUFBQyxvSkFBaEI7QUFBcUssWUFBUSxFQUFFQSxPQUFPLENBQUNrQixZQUFSLENBQXFCZCxRQUFyQjtBQUEvSyxrQkFDQTtBQUFJLGFBQVMsRUFBQztBQUFkLGlDQURBLGVBRUUsb0dBRkYsZUFHRSwyREFBQyxtRUFBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsU0FBSyxFQUFDLHFCQUZSO0FBR0UsUUFBSSxFQUFDLFNBSFA7QUFJRSxZQUFRLEVBQUMsVUFKWDtBQUtFLFdBQU8sRUFBRTtBQUNQZSxXQUFLLEVBQUUsYUFEQTtBQUVQQyxhQUFPLEVBQUU7QUFGRjtBQUxYLElBSEYsZUFhRSwyREFBQyxtRUFBRDtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsU0FBSyxFQUFDLHFCQUZSO0FBR0UsUUFBSSxFQUFDLFVBSFA7QUFJRSxZQUFRLEVBQUMsVUFKWDtBQUtFLGFBQVMsRUFBRztBQUNWRCxXQUFLLEVBQUUsQ0FERztBQUVWQyxhQUFPLEVBQUU7QUFGQztBQUxkLElBYkYsZUF1QkUsMkRBQUMsb0VBQUQ7QUFBZSxRQUFJLEVBQUM7QUFBcEIsa0JBdkJGLENBREYsQ0FERjtBQTZCRCxDQTdDRDs7R0FBTXJCLFM7VUFDWUUsdUQsRUFDREUscUQ7OztLQUZYSixTO0FBK0NTQSx3RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xvZ2luRm9ybS9Mb2dpbkZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybSwgRm9ybVByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IElucHV0VGV4dCBmcm9tICcuLi9jb21tb24vSW5wdXRUZXh0L0lucHV0VGV4dCc7XG5pbXBvcnQgUHJpbWFyeUJ1dHRvbiBmcm9tICcuLi9jb21tb24vQnV0dG9uL1ByaW1hcnlCdXR0b24nO1xuXG5pbXBvcnQgeyB1c2VyRGF0YSB9IGZyb20gJy4uLy4uL3V0bGlzL3V0aWxzJztcblxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xuICBjb25zdCBtZXRob2RzID0gdXNlRm9ybSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgICAvL2NvbXBhcmluZyB0aGUgRm9ybSBsb2dpbiBpbmZvcm1hdGlvbiB3aXRoIGhhcmRjb2RlZCB1c2VyIGluZm9ybWF0aW9uXG4gICAgZGVidWdnZXI7XG4gICAgaWYodXNlckRhdGEuZW1haWxJZC50b0xvd2VyQ2FzZSgpID09PSBkYXRhLmVtYWlsSUQgJiYgdXNlckRhdGEucGFzc3dvcmQgPT09IGRhdGEucGFzc3dvcmQpIHtcbiAgICAgIC8vSUYgdHJ1ZSBzZXQgdGhlIGxvY2Fsc3RvcmFnZSB0b2tlblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2Vzc1Rva2VuJywgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikpO1xuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwiTG9naW4gZGV0YWlscyBpbmNvcnJlY3RcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVByb3ZpZGVyIHsuLi5tZXRob2RzfT5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm14LWF1dG8gc2VsZi1jZW50ZXIgbWQ6dy00LzYgdy1mdWxsIHAtMjAgZ3JpZCBncmlkLWNvbHMtMSBnYXAtOCByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBib3JkZXItNCBib3JkZXItbGlnaHQtYmx1ZS01MDAgYm9yZGVyLW9wYWNpdHktMjUgc2hhZG93LWxnXCIgb25TdWJtaXQ9e21ldGhvZHMuaGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibXgtYXV0byB1cHBlcmNhc2UgdGV4dC1wdXJwbGUtNTAwIGZvbnQtYm9sZFwiPiBIYWxpZ29uaWEgRGFuY2UgQWNhZGVteSA8L2gxPlxuICAgICAgICA8aDI+IEVudGVyIExvZ2luIEluZm9ybWF0aW9uOiA8L2gyPlxuICAgICAgICA8SW5wdXRUZXh0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgbGFiZWw9XCJFbnRlciB5b3VyIEVtYWlsIElEXCIgXG4gICAgICAgICAgbmFtZT1cImVtYWlsSURcIlxuICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgIHBhdHRlcm49e3tcbiAgICAgICAgICAgIHZhbHVlOiAvXFxTK0BcXFMrLlxcUysvLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlcmVkIHZhbHVlIGRvZXMgbm90IG1hdGNoIGVtYWlsIGZvcm1hdFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0VGV4dCBcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICBsYWJlbD1cIkVudGVyIHlvdXIgUGFzc3dvcmRcIiBcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgIG1pbkxlbmd0aD0ge3tcbiAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgICAgbWVzc2FnZTogXCJtaW4gbGVuZ3RoIGlzIDVcIlxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxQcmltYXJ5QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4gQ29udGludWUgPC9QcmltYXJ5QnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvRm9ybVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/LoginForm/LoginForm.js\n");

/***/ })

})