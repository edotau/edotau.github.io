"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styletronReact = require("styletron-react");
var _Icon = _interopRequireDefault(require("../icon/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Checkbox = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    disabled,
    undetermine,
    m,
    size,
    activeColor,
    inactiveColor,
    isLoading,
    checked,
    ...rest
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(CheckboxInput, _extends({
    type: "checkbox",
    disabled: disabled,
    undetermine: undetermine,
    checked: checked,
    ref: ref
  }, rest)), !undetermine && !disabled && (checked ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
    m: m,
    size: size,
    color: activeColor,
    name: isLoading ? "Loading" : "CBChecked"
  }) : /*#__PURE__*/_react.default.createElement(_Icon.default, {
    m: m,
    size: size,
    color: inactiveColor,
    name: isLoading ? "Loading" : "CBUnchecked"
  })), undetermine && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    m: m,
    size: size,
    color: activeColor,
    name: isLoading ? "Loading" : "CBIndetermine"
  }), disabled && /*#__PURE__*/_react.default.createElement(_Icon.default, {
    m: m,
    size: size,
    color: inactiveColor,
    name: isLoading ? "Loading" : "CBDisabled"
  }));
});
const CheckboxInput = (0, _styletronReact.styled)("input", {
  display: "none"
});
Checkbox.defaultProps = {
  cursor: "pointer",
  m: {
    r: "0.5rem"
  },
  color: "black",
  size: "20px",
  inactiveColor: "gray500",
  activeColor: "info700"
};
var _default = exports.default = Checkbox;