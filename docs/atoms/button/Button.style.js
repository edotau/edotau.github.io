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
const computeButtonStyle = (props, context) => {
  const {
    d,
    pos,
    top,
    bottom,
    left,
    right,
    justify,
    align,
    flexDir,
    flexGrow,
    flexWrap,
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
    bg,
    bgImg,
    bgSize,
    bgRepeat,
    bgPos,
    textSize,
    textWeight,
    textAlign,
    textTransform,
    fontFamily,
    shadow,
    transition,
    transform,
    transformOrigin,
    zIndex,
    overflow,
    opacity,
    hoverBg,
    hoverTextColor,
    hoverBorderColor,
    hoverShadow,
    focusBorderColor,
    isOpen,
    hover,
    offset,
    size,
    targetHover,
    disableColor,
    disableBorderColor,
    disableShadow,
    disableBg,
    ...rest
  } = props;
  const style = [{
    boxSizing: "border-box"
  }, (0, _findRoundedDirection.default)(rounded, context.rounded), (0, _findDirection.default)(m, "margin"), (0, _findDirection.default)(p, "padding"), (0, _makeResponsive.default)(d, "display"), (0, _makeResponsive.default)(pos, "position"), (0, _makeResponsive.default)(top, "top"), (0, _makeResponsive.default)(bottom, "bottom"), (0, _makeResponsive.default)(left, "left"), (0, _makeResponsive.default)(right, "right"), (0, _makeResponsive.default)(justify, "justify-content"), (0, _makeResponsive.default)(align, "align-items"), (0, _makeResponsive.default)(flexDir, "flex-direction"), (0, _makeResponsive.default)(flexGrow, "flex"), (0, _makeResponsive.default)(flexWrap, "flex-wrap"), (0, _makeResponsive.default)(order, "order"), (0, _makeResponsive.default)(h, "height"), (0, _makeResponsive.default)(maxH, "max-height"), (0, _makeResponsive.default)(minH, "min-height"), (0, _makeResponsive.default)(w, "width"), (0, _makeResponsive.default)(minW, "min-width"), (0, _makeResponsive.default)(maxW, "max-width"), (0, _makeResponsive.default)(cursor, "cursor"), (0, _findBorder.default)(border, borderColor, context.colors), (0, _makeResponsive.default)(bg, "background", context.colors), bgImg ? {
    backgroundImage: "url(".concat(bgImg)
  } : undefined, (0, _makeResponsive.default)(bgSize, "background-size"), (0, _makeResponsive.default)(bgRepeat, "background-repeat"), (0, _makeResponsive.default)(bgPos, "background-position"), (0, _makeResponsive.default)(bgRepeat, "background-repeat"), (0, _makeResponsive.default)(bgRepeat, "background-repeat"), (0, _makeResponsive.default)(props.textColor, "color", context.colors), (0, _makeResponsive.default)(textWeight, "font-weight"), (0, _makeResponsive.default)(textAlign, "text-align"), (0, _makeResponsive.default)(textTransform, "text-transform"), (0, _makeResponsive.default)(fontFamily, "font-family", context.fontFamily), (0, _makeResponsive.default)(transform, "transform"), (0, _makeResponsive.default)(transformOrigin, "transform-origin"), (0, _makeResponsive.default)(shadow, "box-shadow", context.shadows), (0, _makeResponsive.default)(transition, "transition", context.transition), (0, _makeResponsive.default)(textSize, "font-size", context.textSize.size), (0, _makeResponsive.default)(textSize, "line-height", context.textSize.height), (0, _makeResponsive.default)(zIndex, "z-index"), (0, _makeResponsive.default)(overflow, "overflow"), (0, _makeResponsive.default)(opacity, "opacity"), {
    ":hover": {
      ...(0, _makeResponsive.default)(hoverBg, "background", context.colors),
      ...(0, _makeResponsive.default)(hoverTextColor, "color", context.colors),
      ...(0, _makeResponsive.default)(hoverBorderColor, "border-color", context.colors),
      ...(0, _makeResponsive.default)(hoverShadow, "box-shadow", context.shadows)
    }
  }, {
    ":disabled": {
      color: context.colors[disableColor],
      borderColor: context.colors[disableBorderColor],
      cursor: "not-allowed",
      boxShadow: context.shadows[disableShadow],
      background: context.colors[disableBg]
    }
  }];
  return [rest, (0, _arrayKeyMapToObject.default)(style)];
};
var _default = exports.default = computeButtonStyle;