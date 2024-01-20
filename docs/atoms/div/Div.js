"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styletronReact = require("styletron-react");
var _ThemeContext = require("../../core/ThemeContext");
var _Div = _interopRequireDefault(require("./Div.style"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Div = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/_react.default.createElement(_ThemeContext.ThemeContext.Consumer, null, value => {
    const output = (0, _Div.default)(props, value);
    return /*#__PURE__*/_react.default.createElement(BaseDiv, _extends({
      ref: ref,
      $as: props.tag
    }, output[0], {
      $styleArray: output[1]
    }));
  });
});
const BaseDiv = (0, _styletronReact.styled)("div", props => {
  return {
    ...props.$styleArray
  };
});
Div.defaultProps = {
  tag: "div"
};
var _default = exports.default = Div;