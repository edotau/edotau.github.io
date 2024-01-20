"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("./Div"));
var _Icon = _interopRequireDefault(require("./Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Avatar = _ref => {
  let {
    children,
    iconProp,
    status,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Div.default, rest, !rest.bgImg && (children ? children : /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({
    name: "UserSolid",
    color: "white"
  }, iconProp))), status && /*#__PURE__*/_react.default.createElement(_Icon.default, _extends({
    name: "Status",
    pos: "absolute",
    bottom: rest.rounded === "circle" && '0',
    top: rest.rounded === "circle" ? 'auto' : '-4px',
    right: rest.rounded === "circle" ? '0' : '-4px',
    size: "8px"
  }, status)));
};
Avatar.defaultProps = {
  bg: "brand700",
  pos: "relative",
  textColor: "white",
  d: "flex",
  align: "center",
  justify: "center",
  h: "40px",
  w: "40px",
  rounded: "circle",
  textWeight: "500",
  bgSize: "cover"
};
var _default = exports.default = Avatar;