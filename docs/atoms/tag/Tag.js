"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("../div/Div"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Tag = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    children,
    prefix,
    suffix,
    ...rest
  } = props;
  return /*#__PURE__*/_react.default.createElement(_Div.default, _extends({}, rest, {
    ref: ref
  }), prefix, children, suffix);
});
Tag.defaultProps = {
  tag: "span",
  d: "inline-flex",
  align: "center",
  textAlign: "center",
  justify: "center",
  bg: "gray300",
  textWeight: "500",
  rounded: "sm",
  p: {
    x: "0.5rem",
    y: "0.125rem"
  },
  textColor: "medium",
  textSize: "caption"
};
var _default = exports.default = Tag;