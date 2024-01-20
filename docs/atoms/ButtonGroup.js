"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _variables = require("../constants/_variables");
var _functions = require("../functions/_functions");
var _Div = _interopRequireDefault(require("./Div"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const BaseButtonGroup = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  button {\n    margin-left: -1px;\n    touch-action: manipulation;\n    border-radius: 0;\n\n    :hover {\n      z-index: 2;\n    }\n    :nth-child(1) {\n      border-top-left-radius: ", ";\n      border-bottom-left-radius: ", ";\n    }\n    :last-child {\n      border-top-right-radius: ", ";\n      border-bottom-right-radius: ", ";\n    }\n  }\n\n  :hover {\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  }\n"])), props => props.d && _functions.functions.makeResponsive("display", props.d), props => props.justify && _functions.functions.makeResponsive("justify-content", props.justify), props => props.align && _functions.functions.makeResponsive("align-items", props.align), props => props.flexDir && _functions.functions.makeResponsive("flex-direction", props.flexDir), props => props.flexGrow && _functions.functions.makeResponsive("flex-grow", props.flexGrow), props => props.flexWrap && _functions.functions.makeResponsive("flex-wrap", props.flexWrap), props => props.m && _functions.functions.findDirection("margin", props.m), props => props.p && _functions.functions.findDirection("padding", props.p), props => props.rounded && _functions.functions.findRoundedDirection(props.rounded), props => props.border && _functions.functions.findDirection("border", props.border), props => props.borderColor && _functions.functions.makeResponsive("border-color", _variables.colorVar[props.borderColor]), props => props.h && _functions.functions.makeResponsive("height", props.h), props => props.maxH && _functions.functions.makeResponsive("max-height", props.maxH), props => props.minH && _functions.functions.makeResponsive("min-height", props.minH), props => props.w && _functions.functions.makeResponsive("width", props.w), props => props.maxW && _functions.functions.makeResponsive("max-width", props.maxW), props => props.minW && _functions.functions.makeResponsive("min-width", props.minW), props => props.cursor && _functions.functions.makeResponsive("cursor", props.cursor), props => props.bg && _functions.functions.makeResponsive("background", _variables.colorVar[props.bg]), props => props.textColor && _functions.functions.makeResponsive("color", _variables.colorVar[props.textColor]), props => props.textWeight && _functions.functions.makeResponsive("weight", props.textWeight), props => props.textAlign && _functions.functions.makeResponsive("align", props.textAlign), props => props.shadow && "box-shadow: ".concat(_variables.themeVars["shadows"][props.shadow]), props => _variables.themeVars["rounded"][props.rounded], props => _variables.themeVars["rounded"][props.rounded], props => _variables.themeVars["rounded"][props.rounded], props => _variables.themeVars["rounded"][props.rounded], props => props.hoverBg && _functions.functions.makeResponsive("background", _variables.colorVar[props.hoverBg]), props => props.hoverTextColor && _functions.functions.makeResponsive("color", _variables.colorVar[props.hoverTextColor]), props => props.hoverBorderColor && _functions.functions.makeResponsive("border-color", _variables.colorVar[props.hoverBorderColor]), props => props.hoverShadow && "box-shadow: ".concat(_variables.themeVars["shadows"][props.hoverShadow]));
const ButtonGroup = _ref => {
  let {
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(BaseButtonGroup, rest, rest.children);
};
ButtonGroup.defaultProps = {
  flexWrap: "wrap",
  rounded: "md"
};
var _default = exports.default = ButtonGroup;