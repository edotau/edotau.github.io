"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _makeResponsive = _interopRequireDefault(require("../../style-functions/makeResponsive"));
var _findDirection = _interopRequireDefault(require("../../style-functions/findDirection"));
var _arrayKeyMapToObject = _interopRequireDefault(require("../../style-functions/arrayKeyMapToObject"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const computeIconStyle = (props, context) => {
  const {
    d,
    size,
    m,
    p,
    pos,
    transform,
    transformOrigin,
    order,
    top,
    bottom,
    left,
    right,
    cursor,
    name,
    color,
    hoverColor,
    zIndex,
    opacity,
    transition,
    ...rest
  } = props;
  const style = [{
    boxSizing: "border-box"
  }, (0, _findDirection.default)(m, "margin"), (0, _findDirection.default)(p, "padding"), (0, _findDirection.default)(size, "height"), (0, _findDirection.default)(size, "width"), (0, _findDirection.default)(size, "min-width"), (0, _findDirection.default)(size, "min-height"), (0, _makeResponsive.default)(d, "display"), (0, _makeResponsive.default)(pos, "position"), (0, _makeResponsive.default)(top, "top"), (0, _makeResponsive.default)(bottom, "bottom"), (0, _makeResponsive.default)(left, "left"), (0, _makeResponsive.default)(right, "right"), (0, _makeResponsive.default)(order, "order"), (0, _makeResponsive.default)(cursor, "cursor"), (0, _makeResponsive.default)(transform, "transform"), (0, _makeResponsive.default)(transformOrigin, "transform-origin"), (0, _makeResponsive.default)(zIndex, "z-index"), (0, _makeResponsive.default)(opacity, "opacity"), {
    ":hover": {
      path: {
        ...(0, _makeResponsive.default)(transition, "transition", context.transition),
        ...(0, _makeResponsive.default)(hoverColor, "fill", context.colors)
      },
      circle: {
        ...(0, _makeResponsive.default)(transition, "transition", context.transition),
        ...(0, _makeResponsive.default)(hoverColor, "fill", context.colors)
      }
    }
  }];
  return [rest, (0, _arrayKeyMapToObject.default)(style)];
};
var _default = exports.default = computeIconStyle;