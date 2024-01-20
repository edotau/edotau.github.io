"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styletronReact = require("styletron-react");
var _ThemeContext = require("../../core/ThemeContext");
var _Button = _interopRequireDefault(require("./Button.style"));
var _Icon = _interopRequireDefault(require("../icon/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Button = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/_react.default.createElement(_ThemeContext.ThemeContext.Consumer, null, value => {
    const output = (0, _Button.default)(props, value);
    const {
      isLoading,
      prefix,
      children,
      suffix,
      textColor,
      tag,
      ...rest
    } = output[0];
    return /*#__PURE__*/_react.default.createElement(BasicButton, _extends({
      ref: ref,
      $as: tag
    }, rest, {
      $styleArray: output[1]
    }), isLoading && /*#__PURE__*/_react.default.createElement(_Icon.default, {
      name: "Loading",
      size: "16px",
      m: {
        r: "0.5rem"
      },
      color: textColor
    }), prefix, children, suffix);
  });
});
const BasicButton = (0, _styletronReact.styled)("button", props => ({
  ...props.$styleArray
}));
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
var _default = exports.default = Button;