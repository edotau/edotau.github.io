"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styletronReact = require("styletron-react");
var _ThemeContext = require("../../core/ThemeContext");
var _Input = _interopRequireDefault(require("./Input.style"));
var _Div = _interopRequireDefault(require("../div/Div"));
var _Icon = _interopRequireDefault(require("../icon/Icon"));
var _excluded = ["children", "prefix", "isLoading", "suffix", "order", "tag"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Input = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_ThemeContext.ThemeContext.Consumer, null, function (value) {
    var output = (0, _Input["default"])(props, value);
    var _output$ = output[0],
      children = _output$.children,
      prefix = _output$.prefix,
      isLoading = _output$.isLoading,
      suffix = _output$.suffix,
      order = _output$.order,
      tag = _output$.tag,
      rest = _objectWithoutProperties(_output$, _excluded);
    return /*#__PURE__*/_react["default"].createElement(_Div["default"], {
      pos: "relative",
      d: rest.d,
      m: rest.m,
      w: rest.w,
      order: order,
      maxW: rest.maxW,
      minW: rest.minW,
      flexGrow: rest.flexGrow
    }, prefix, /*#__PURE__*/_react["default"].createElement(BasicInput, _extends({
      ref: ref
    }, rest, {
      $as: tag,
      $styleArray: output[1]
    })), suffix, isLoading && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "Loading",
      pos: "absolute",
      top: "50%",
      right: "0.75rem",
      transform: "translateY(-50%)",
      size: "16px"
    }));
  });
});
var BasicInput = (0, _styletronReact.styled)("input", function (props) {
  return _objectSpread({}, props.$styleArray);
});
Input.contextType = _ThemeContext.ThemeContext;
Input.defaultProps = {
  tag: "input",
  d: "flex",
  p: {
    x: "0.75rem"
  },
  textSize: "body",
  rounded: "md",
  border: "1px solid",
  borderColor: "gray500",
  h: "2.5rem",
  w: "100%",
  bg: "white",
  textColor: "dark",
  textWeight: "500",
  focusBorderColor: "gray900",
  placeholderTextColor: "light",
  transition: "true"
};
var _default = exports["default"] = Input;