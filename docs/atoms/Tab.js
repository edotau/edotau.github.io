"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Div = _interopRequireDefault(require("./Div"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Tab = _ref => {
  let {
    children,
    prefix,
    suffix,
    active,
    textColor,
    activeDir,
    activeLineBg,
    bg,
    ...rest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Div.default, _extends({
    textColor: active ? rest.hoverTextColor : textColor,
    bg: active ? rest.hoverBg : bg
  }, rest), children, /*#__PURE__*/_react.default.createElement(_Div.default, {
    pos: "absolute",
    bottom: activeDir !== "top" && "0",
    right: activeDir !== "left" && "0",
    left: activeDir !== "right" && "0",
    top: activeDir !== "bottom" && "0",
    h: (activeDir == "top" || activeDir == "bottom") && "2px",
    w: (activeDir == "left" || activeDir == "right") && "2px",
    transform: "scale".concat(activeDir == "left" || activeDir == "right" ? "Y" : "X", "(").concat(active ? "1" : "0", ")"),
    bg: activeLineBg || "brand700"
  }));
};
Tab.defaultProps = {
  d: "flex",
  align: "center",
  justify: "center",
  p: {
    x: "16px",
    y: "12px"
  },
  textColor: "medium",
  pos: "relative",
  cursor: "pointer",
  hoverTextColor: "dark",
  activeDir: "bottom",
  activeLineBg: "brand700"
};
var _default = exports.default = Tab;
const tabActiveDirection = (e, active) => {
  switch (e) {
    case "right":
      return "top: 0; right: 0; bottom: 0; transform: scaleY(".concat(active ? "1" : "0", ")");
      break;
    case "left":
      return "top: 0; left: 0; bottom: 0; transform: scaleY(".concat(active ? "1" : "0", ")");
      break;
    case "top":
      return "top: 0; right: 0; left: 0; transform: scaleX(".concat(active ? "1" : "0", ")");
      break;
    default:
      return "bottom: 0; right: 0; left: 0; transform: scaleX(".concat(active ? "1" : "0", ")");
  }
};