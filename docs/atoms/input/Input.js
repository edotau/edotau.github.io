"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styletronReact = require("styletron-react");
var _ThemeContext = require("../../core/ThemeContext");
var _Input = _interopRequireDefault(require("./Input.style"));
var _Div = _interopRequireDefault(require("../div/Div"));
var _Icon = _interopRequireDefault(require("../icon/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Input = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/_react.default.createElement(_ThemeContext.ThemeContext.Consumer, null, value => {
    const output = (0, _Input.default)(props, value);
    const {
      children,
      prefix,
      isLoading,
      suffix,
      order,
      tag,
      ...rest
    } = output[0];
    return /*#__PURE__*/_react.default.createElement(_Div.default, {
      pos: "relative",
      d: rest.d,
      m: rest.m,
      w: rest.w,
      order: order,
      maxW: rest.maxW,
      minW: rest.minW,
      flexGrow: rest.flexGrow
    }, prefix, /*#__PURE__*/_react.default.createElement(BasicInput, _extends({
      ref: ref
    }, rest, {
      $as: tag,
      $styleArray: output[1]
    })), suffix, isLoading && /*#__PURE__*/_react.default.createElement(_Icon.default, {
      name: "Loading",
      pos: "absolute",
      top: "50%",
      right: "0.75rem",
      transform: "translateY(-50%)",
      size: "16px"
    }));
  });
});
const BasicInput = (0, _styletronReact.styled)("input", props => {
  return {
    ...props.$styleArray
  };
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
var _default = exports.default = Input;