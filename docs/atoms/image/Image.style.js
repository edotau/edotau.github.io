"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _makeResponsive = _interopRequireDefault(require("../../style-functions/makeResponsive"));
var _findDirection = _interopRequireDefault(require("../../style-functions/findDirection"));
var _arrayKeyMapToObject = _interopRequireDefault(require("../../style-functions/arrayKeyMapToObject"));
var _findRoundedDirection = _interopRequireDefault(require("../../style-functions/findRoundedDirection"));
var _findBorder = _interopRequireDefault(require("../../style-functions/findBorder"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const computeImageStyle = (props, context) => {
  const {
    d,
    pos,
    top,
    bottom,
    left,
    right,
    flexGrow,
    order,
    m,
    p,
    rounded,
    border,
    borderColor,
    h,
    maxH,
    minH,
    w,
    minW,
    maxW,
    cursor,
    shadow,
    transition,
    transform,
    transformOrigin,
    zIndex,
    opacity,
    hoverBorderColor,
    hoverShadow,
    theme,
    ...rest
  } = props;
  const style = [(0, _findRoundedDirection.default)(rounded, context.rounded), (0, _findDirection.default)(m, "margin"), (0, _findDirection.default)(p, "padding"), (0, _makeResponsive.default)(d, "display"), (0, _makeResponsive.default)(pos, "position"), (0, _makeResponsive.default)(top, "top"), (0, _makeResponsive.default)(bottom, "bottom"), (0, _makeResponsive.default)(left, "left"), (0, _makeResponsive.default)(right, "right"), (0, _makeResponsive.default)(flexGrow, "flex"), (0, _makeResponsive.default)(order, "order"), (0, _makeResponsive.default)(h, "height"), (0, _makeResponsive.default)(maxH, "max-height"), (0, _makeResponsive.default)(minH, "min-height"), (0, _makeResponsive.default)(w, "width"), (0, _makeResponsive.default)(minW, "min-width"), (0, _makeResponsive.default)(maxW, "max-width"), (0, _makeResponsive.default)(cursor, "cursor"), (0, _findBorder.default)(border, borderColor, context.colors), (0, _makeResponsive.default)(transform, "transform"), (0, _makeResponsive.default)(transformOrigin, "transform-origin"), (0, _makeResponsive.default)(shadow, "box-shadow", context.shadows), (0, _makeResponsive.default)(transition, "transition", context.transition), (0, _makeResponsive.default)(zIndex, "z-index"), (0, _makeResponsive.default)(opacity, "opacity"), {
    ":hover": {
      ...(0, _makeResponsive.default)(hoverBorderColor, "border-color", context.colors),
      ...(0, _makeResponsive.default)(hoverShadow, "box-shadow", context.shadows)
    }
  }];
  return [rest, (0, _arrayKeyMapToObject.default)(style)];
};
var _default = exports.default = computeImageStyle;