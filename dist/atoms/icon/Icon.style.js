"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _makeResponsive = _interopRequireDefault(require("../../style-functions/makeResponsive"));
var _findDirection = _interopRequireDefault(require("../../style-functions/findDirection"));
var _arrayKeyMapToObject = _interopRequireDefault(require("../../style-functions/arrayKeyMapToObject"));
var _excluded = ["d", "size", "m", "p", "pos", "transform", "transformOrigin", "order", "top", "bottom", "left", "right", "cursor", "name", "color", "hoverColor", "zIndex", "opacity", "transition"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var computeIconStyle = function computeIconStyle(props, context) {
  var d = props.d,
    size = props.size,
    m = props.m,
    p = props.p,
    pos = props.pos,
    transform = props.transform,
    transformOrigin = props.transformOrigin,
    order = props.order,
    top = props.top,
    bottom = props.bottom,
    left = props.left,
    right = props.right,
    cursor = props.cursor,
    name = props.name,
    color = props.color,
    hoverColor = props.hoverColor,
    zIndex = props.zIndex,
    opacity = props.opacity,
    transition = props.transition,
    rest = _objectWithoutProperties(props, _excluded);
  var style = [{
    boxSizing: "border-box"
  }, (0, _findDirection["default"])(m, "margin"), (0, _findDirection["default"])(p, "padding"), (0, _findDirection["default"])(size, "height"), (0, _findDirection["default"])(size, "width"), (0, _findDirection["default"])(size, "min-width"), (0, _findDirection["default"])(size, "min-height"), (0, _makeResponsive["default"])(d, "display"), (0, _makeResponsive["default"])(pos, "position"), (0, _makeResponsive["default"])(top, "top"), (0, _makeResponsive["default"])(bottom, "bottom"), (0, _makeResponsive["default"])(left, "left"), (0, _makeResponsive["default"])(right, "right"), (0, _makeResponsive["default"])(order, "order"), (0, _makeResponsive["default"])(cursor, "cursor"), (0, _makeResponsive["default"])(transform, "transform"), (0, _makeResponsive["default"])(transformOrigin, "transform-origin"), (0, _makeResponsive["default"])(zIndex, "z-index"), (0, _makeResponsive["default"])(opacity, "opacity"), {
    ":hover": {
      path: _objectSpread(_objectSpread({}, (0, _makeResponsive["default"])(transition, "transition", context.transition)), (0, _makeResponsive["default"])(hoverColor, "fill", context.colors)),
      circle: _objectSpread(_objectSpread({}, (0, _makeResponsive["default"])(transition, "transition", context.transition)), (0, _makeResponsive["default"])(hoverColor, "fill", context.colors))
    }
  }];
  return [rest, (0, _arrayKeyMapToObject["default"])(style)];
};
var _default = exports["default"] = computeIconStyle;