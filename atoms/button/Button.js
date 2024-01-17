"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styletronReact = require("styletron-react");
var _ThemeContext = require("../../core/ThemeContext");
var _Button = _interopRequireDefault(require("./Button.style"));
var _Icon = _interopRequireDefault(require("../icon/Icon"));
var _excluded = ["isLoading", "prefix", "children", "suffix", "textColor", "tag"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Button = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_ThemeContext.ThemeContext.Consumer, null, function (value) {
    var output = (0, _Button["default"])(props, value);
    var _output$ = output[0],
      isLoading = _output$.isLoading,
      prefix = _output$.prefix,
      children = _output$.children,
      suffix = _output$.suffix,
      textColor = _output$.textColor,
      tag = _output$.tag,
      rest = _objectWithoutProperties(_output$, _excluded);
    return /*#__PURE__*/_react["default"].createElement(BasicButton, _extends({
      ref: ref,
      $as: tag
    }, rest, {
      $styleArray: output[1]
    }), isLoading && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "Loading",
      size: "16px",
      m: {
        r: "0.5rem"
      },
      color: textColor
    }), prefix, children, suffix);
  });
});
var BasicButton = (0, _styletronReact.styled)("button", function (props) {
  return _objectSpread({}, props.$styleArray);
});
Button.defaultProps = {
  tag: "button",
  d: "flex",
  justify: "center",
  align: "center",
  p: {
    x: "1rem"
  },
  pos: "relative",
  rounded: "md",
  border: "none",
  h: "2.5rem",
  cursor: "pointer",
  bg: "black",
  textColor: "white",
  textSize: "body",
  textWeight: "500",
  fontFamily: "primary",
  transition: "true",
  disableBg: "gray400",
  disableShadow: "0",
  disableBorderColor: "gray300",
  disableColor: "white"
};
var _default = exports["default"] = Button;