"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _deviceQuerry = _interopRequireDefault(require("./deviceQuerry"));
var _arrayKeyMapToObject = _interopRequireDefault(require("./arrayKeyMapToObject"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); } // import makeResponsive from "./makeResponsive";
var findBorder = function findBorder(border, borderColor, themeColors) {
  if (!border) {
    return;
  }
  var property = "border";
  var style = [];
  if (typeof (border.x || border.y || border.b || border.t || border.l || border.r) === "undefined") {
    style.push(makeResponsiveBorder(border, property, themeColors, borderColor));
  } else {
    // If x direction exist
    if (border.x != "undefined") {
      style.push(makeResponsiveBorder(border.x, "".concat(property, "-left"), themeColors, borderColor));
      style.push(makeResponsiveBorder(border.x, "".concat(property, "-right"), themeColors, borderColor));
    }
    // If y direction exist
    if (border.y != "undefined") {
      style.push(makeResponsiveBorder(border.y, "".concat(property, "-top"), themeColors, borderColor));
      style.push(makeResponsiveBorder(border.y, "".concat(property, "-bottom"), themeColors, borderColor));
    }
    // If t direction exist
    if (border.t != "undefined") {
      style.push(makeResponsiveBorder(border.t, "".concat(property, "-top"), themeColors, borderColor));
    }
    // If l direction exist
    if (border.l != "undefined") {
      style.push(makeResponsiveBorder(border.l, "".concat(property, "-left"), themeColors, borderColor));
    }
    // If r direction exist
    if (border.r != "undefined") {
      style.push(makeResponsiveBorder(border.r, "".concat(property, "-right"), themeColors, borderColor));
    }
    // If b direction exist
    if (border.b != "undefined") {
      style.push(makeResponsiveBorder(border.b, "".concat(property, "-bottom"), themeColors, borderColor));
    }
  }
  return (0, _arrayKeyMapToObject["default"])(style);
};
var _default = exports["default"] = findBorder;
var makeResponsiveBorder = function makeResponsiveBorder(border, property, themeColors, borderColor) {
  var style = {};
  if (!border) {
    return;
  }
  var defaultborderColor = typeof borderColor === "string" && borderColor && (themeColors[borderColor] || borderColor) || borderColor && borderColor.xs && (themeColors[borderColor.xs] || borderColor.xs) || "#000000";

  // Give style directly if not an object
  if (typeof border === "string") {
    if (border === "none") {
      style[property] = border;
    } else {
      style[property] = "".concat(border, " ").concat(themeColors[borderColor] || borderColor || defaultborderColor);
    }
  }

  // Create an array for responsive border
  else if (_typeof(border) === "object") {
    Object.keys(border).map(function (key) {
      if (key === "xs") {
        if (border[key] === "none") {
          style[property] = border[key];
        } else {
          style[property] = "".concat(border[key], " ").concat(themeColors[borderColor[key]] || borderColor[key] || defaultborderColor);
        }
      } else {
        if (border[key] === "none") {
          style[_deviceQuerry["default"][key]] = _defineProperty({}, property, border[key]);
        } else {
          style[_deviceQuerry["default"][key]] = _defineProperty({}, property, "".concat(border[key], " ").concat(themeColors[borderColor[key]] || borderColor[key] || defaultborderColor));
        }
      }
    });
  }
  return style;
};