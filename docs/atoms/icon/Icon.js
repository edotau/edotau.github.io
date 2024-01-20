"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styletronReact = require("styletron-react");
var _ThemeContext = require("../../core/ThemeContext");
var _Icon = _interopRequireDefault(require("./Icon.style"));
var _iconPaths = require("./iconPaths");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Icon = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const [hovered, setHover] = (0, _react.useState)(0);
  return /*#__PURE__*/_react.default.createElement(_ThemeContext.ThemeContext.Consumer, null, value => {
    const IconName = _iconPaths.iconPaths[props.name];
    const output = (0, _Icon.default)(props, value);
    return /*#__PURE__*/_react.default.createElement(BasicIcon, _extends({
      onMouseEnter: () => setHover(1),
      onMouseLeave: () => setHover(0),
      ref: ref,
      viewBox: "0 0 24 24"
    }, output[0], {
      $styleArray: output[1]
    }), /*#__PURE__*/_react.default.createElement(IconName, {
      color: value.colors[hovered ? props.hoverColor || props.color : props.color] || props.color
    }));
  });
});
const BasicIcon = (0, _styletronReact.styled)("svg", props => {
  return {
    ...props.$styleArray
  };
});
Icon.defaultProps = {
  size: "1.5rem",
  color: "black"
};
var _default = exports.default = Icon;