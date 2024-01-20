"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("./Input"));
var _Icon = _interopRequireDefault(require("../icon/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Textarea = _ref => {
  let {
    isLoading,
    suffix,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Input.default, _extends({
    tag: "textarea",
    suffix: isLoading ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
      name: "Loading",
      pos: "absolute",
      top: "0.75rem",
      right: "0.75rem",
      size: "16px",
      color: "gray600"
    }) : suffix
  }, rest));
};
Textarea.defaultProps = {
  d: "flex",
  p: {
    x: "0.75rem",
    y: "0.5rem"
  },
  textSize: "body",
  rounded: "md",
  border: "1px solid",
  borderColor: "gray500",
  h: "6.5rem",
  w: "100%",
  minW: "100%",
  bg: "white",
  textColor: "dark",
  textWeight: "500",
  focusBorderColor: "gray700"
};
var _default = exports.default = Textarea;