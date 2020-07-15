webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_alerts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/alerts */ "./helpers/alerts.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/auth */ "./helpers/auth.js");





var _this = undefined,
    _jsxFileName = "E:\\ANA-website\\client\\pages\\register.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Register = function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: 'afreen',
    email: 'afreenhussain@gmail.com',
    password: '123',
    error: '',
    success: '',
    buttonText: 'Register',
    loadedCategories: [],
    categories: []
  }),
      state = _useState[0],
      setState = _useState[1];

  var name = state.name,
      email = state.email,
      password = state.password,
      error = state.error,
      success = state.success,
      buttonText = state.buttonText,
      loadedCategories = state.loadedCategories,
      categories = state.categories;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_10__["isAuth"])() && next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
  }, []); // load categories when component mounts using useEffect

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadCategories();
  }, []);

  var loadCategories = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/categories"));

            case 2:
              response = _context.sent;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loadedCategories: response.data
              }));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadCategories() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleToggle = function handleToggle(c) {
    return function () {
      // return the first index or -1
      var clickedCategory = categories.indexOf(c);

      var all = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(categories);

      if (clickedCategory === -1) {
        all.push(c);
      } else {
        all.splice(clickedCategory, 1);
      }

      console.log('all >> categories', all);
      setState(_objectSpread(_objectSpread({}, state), {}, {
        categories: all,
        success: '',
        error: ''
      }));
    };
  }; // show categories > checkbox


  var showCategories = function showCategories() {
    return loadedCategories && loadedCategories.map(function (c, i) {
      return __jsx("li", {
        className: "list-unstyled",
        key: c._id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }
      }, __jsx("input", {
        type: "checkbox",
        onChange: handleToggle(c._id),
        className: "mr-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }
      }), __jsx("label", {
        className: "form-check-label",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, c.name));
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "error", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "success", ''), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, "buttonText", 'Register'), _objectSpread2)));
    };
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              console.table({
                name: name,
                email: email,
                password: password,
                categories: categories
              });
              setState(_objectSpread(_objectSpread({}, state), {}, {
                buttonText: 'Registering'
              }));
              _context2.prev = 3;
              _context2.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/register"), {
                name: name,
                email: email,
                password: password,
                categories: categories
              });

            case 6:
              response = _context2.sent;
              console.log(response);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                name: '',
                email: '',
                password: '',
                buttonText: 'Submitted',
                success: response.data.message
              }));
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              console.log(_context2.t0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                buttonText: 'Register',
                error: _context2.t0.response.data.error
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3, 11]]);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // const handleSubmit = e => {
  //     e.preventDefault();
  //     setState({ ...state, buttonText: 'Registering' });
  //     // console.table({ name, email, password });
  //     axios
  //         .post(`http://localhost:8000/api/register`, {
  //             name,
  //             email,
  //             password
  //         })
  //         .then(response => {
  //             console.log(response);
  //             setState({
  //                 ...state,
  //                 name: '',
  //                 email: '',
  //                 password: '',
  //                 buttonText: 'Submitted',
  //                 success: response.data.message
  //             });
  //         })
  //         .catch(error => {
  //             console.log(error);
  //             setState({ ...state, buttonText: 'Register', error: error.response.data.error });
  //         });
  // };


  var registerForm = function registerForm() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, __jsx("input", {
      value: name,
      onChange: handleChange('name'),
      type: "text",
      className: "form-control",
      placeholder: "Type your name",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, __jsx("input", {
      value: email,
      onChange: handleChange('email'),
      type: "email",
      className: "form-control",
      placeholder: "Type your email",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, __jsx("input", {
      value: password,
      onChange: handleChange('password'),
      type: "password",
      className: "form-control",
      placeholder: "Type your password",
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }
    }, __jsx("label", {
      className: "text-muted ml-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, "Category"), __jsx("ul", {
      style: {
        maxHeight: '100px',
        overflowY: 'scroll'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 17
      }
    }, showCategories())), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: "btn btn-outline-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }, buttonText)));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-6 offset-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, "Register"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }), success && Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_8__["showSuccessMessage"])(success), error && Object(_helpers_alerts__WEBPACK_IMPORTED_MODULE_8__["showErrorMessage"])(error), registerForm()));
};

_s(Register, "wb5A5f8AMRSxj4VszSxi7JqTDMo=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvciIsInN1Y2Nlc3MiLCJidXR0b25UZXh0IiwibG9hZGVkQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwiaXNBdXRoIiwiUm91dGVyIiwicHVzaCIsImxvYWRDYXRlZ29yaWVzIiwiYXhpb3MiLCJnZXQiLCJBUEkiLCJyZXNwb25zZSIsImRhdGEiLCJoYW5kbGVUb2dnbGUiLCJjIiwiY2xpY2tlZENhdGVnb3J5IiwiaW5kZXhPZiIsImFsbCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJzaG93Q2F0ZWdvcmllcyIsIm1hcCIsImkiLCJfaWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRhYmxlIiwicG9zdCIsIm1lc3NhZ2UiLCJyZWdpc3RlckZvcm0iLCJtYXhIZWlnaHQiLCJvdmVyZmxvd1kiLCJzaG93U3VjY2Vzc01lc3NhZ2UiLCJzaG93RXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxRQUR5QjtBQUUvQkMsU0FBSyxFQUFFLHlCQUZ3QjtBQUcvQkMsWUFBUSxFQUFFLEtBSHFCO0FBSS9CQyxTQUFLLEVBQUUsRUFKd0I7QUFLL0JDLFdBQU8sRUFBRSxFQUxzQjtBQU0vQkMsY0FBVSxFQUFFLFVBTm1CO0FBTy9CQyxvQkFBZ0IsRUFBRSxFQVBhO0FBUS9CQyxj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QURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0tELE9BQU8sSUFBSXdDLDBFQUFrQixDQUFDeEMsT0FBRCxDQUhsQyxFQUlLRCxLQUFLLElBQUkwQyx3RUFBZ0IsQ0FBQzFDLEtBQUQsQ0FKOUIsRUFLS3NDLFlBQVksRUFMakIsQ0FESixDQURKO0FBV0gsQ0E1S0Q7O0dBQU0zQyxROztLQUFBQSxRO0FBOEtTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuY2YwZjBjNWY3NjhjYTUxNWRkMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNob3dTdWNjZXNzTWVzc2FnZSwgc2hvd0Vycm9yTWVzc2FnZSB9IGZyb20gJy4uL2hlbHBlcnMvYWxlcnRzJztcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tICcuLi9oZWxwZXJzL2F1dGgnO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbmFtZTogJ2FmcmVlbicsXG4gICAgICAgIGVtYWlsOiAnYWZyZWVuaHVzc2FpbkBnbWFpbC5jb20nLFxuICAgICAgICBwYXNzd29yZDogJzEyMycsXG4gICAgICAgIGVycm9yOiAnJyxcbiAgICAgICAgc3VjY2VzczogJycsXG4gICAgICAgIGJ1dHRvblRleHQ6ICdSZWdpc3RlcicsXG4gICAgICAgIGxvYWRlZENhdGVnb3JpZXM6IFtdLFxuICAgICAgICBjYXRlZ29yaWVzOiBbXVxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGVycm9yLCBzdWNjZXNzLCBidXR0b25UZXh0LCBsb2FkZWRDYXRlZ29yaWVzLCBjYXRlZ29yaWVzIH0gPSBzdGF0ZTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlzQXV0aCgpICYmIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gbG9hZCBjYXRlZ29yaWVzIHdoZW4gY29tcG9uZW50IG1vdW50cyB1c2luZyB1c2VFZmZlY3RcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsb2FkQ2F0ZWdvcmllcygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGxvYWRDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtBUEl9L2NhdGVnb3JpZXNgKTtcbiAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbG9hZGVkQ2F0ZWdvcmllczogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gYyA9PiAoKSA9PiB7XG4gICAgICAgIC8vIHJldHVybiB0aGUgZmlyc3QgaW5kZXggb3IgLTFcbiAgICAgICAgY29uc3QgY2xpY2tlZENhdGVnb3J5ID0gY2F0ZWdvcmllcy5pbmRleE9mKGMpO1xuICAgICAgICBjb25zdCBhbGwgPSBbLi4uY2F0ZWdvcmllc107XG5cbiAgICAgICAgaWYgKGNsaWNrZWRDYXRlZ29yeSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFsbC5wdXNoKGMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsLnNwbGljZShjbGlja2VkQ2F0ZWdvcnksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdhbGwgPj4gY2F0ZWdvcmllcycsIGFsbCk7XG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGNhdGVnb3JpZXM6IGFsbCwgc3VjY2VzczogJycsIGVycm9yOiAnJyB9KTtcbiAgICB9O1xuXG4gICAgLy8gc2hvdyBjYXRlZ29yaWVzID4gY2hlY2tib3hcbiAgICBjb25zdCBzaG93Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGxvYWRlZENhdGVnb3JpZXMgJiZcbiAgICAgICAgICAgIGxvYWRlZENhdGVnb3JpZXMubWFwKChjLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIiBrZXk9e2MuX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXtoYW5kbGVUb2dnbGUoYy5faWQpfSBjbGFzc05hbWU9XCJtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj57Yy5uYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZSA9PiB7XG4gICAgICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtuYW1lXTogZS50YXJnZXQudmFsdWUsIGVycm9yOiAnJywgc3VjY2VzczogJycsIGJ1dHRvblRleHQ6ICdSZWdpc3RlcicgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUudGFibGUoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBjYXRlZ29yaWVzXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBidXR0b25UZXh0OiAnUmVnaXN0ZXJpbmcnIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke0FQSX0vcmVnaXN0ZXJgLCB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgIGJ1dHRvblRleHQ6ICdTdWJtaXR0ZWQnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBidXR0b25UZXh0OiAnUmVnaXN0ZXInLCBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBidXR0b25UZXh0OiAnUmVnaXN0ZXJpbmcnIH0pO1xuICAgIC8vICAgICAvLyBjb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgIC8vICAgICBheGlvc1xuICAgIC8vICAgICAgICAgLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcmVnaXN0ZXJgLCB7XG4gICAgLy8gICAgICAgICAgICAgbmFtZSxcbiAgICAvLyAgICAgICAgICAgICBlbWFpbCxcbiAgICAvLyAgICAgICAgICAgICBwYXNzd29yZFxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgLy8gICAgICAgICAgICAgc2V0U3RhdGUoe1xuICAgIC8vICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAvLyAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgLy8gICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgIC8vICAgICAgICAgICAgICAgICBidXR0b25UZXh0OiAnU3VibWl0dGVkJyxcbiAgICAvLyAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgICAgICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgYnV0dG9uVGV4dDogJ1JlZ2lzdGVyJywgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3IgfSk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyB9O1xuXG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gKCkgPT4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2VtYWlsJyl9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBtbC00XCI+Q2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBtYXhIZWlnaHQ6ICcxMDBweCcsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+e3Nob3dDYXRlZ29yaWVzKCl9PC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nXCI+e2J1dHRvblRleHR9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAge3N1Y2Nlc3MgJiYgc2hvd1N1Y2Nlc3NNZXNzYWdlKHN1Y2Nlc3MpfVxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiBzaG93RXJyb3JNZXNzYWdlKGVycm9yKX1cbiAgICAgICAgICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==