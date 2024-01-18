"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _deviceQuerry = _interopRequireDefault(require("./deviceQuerry"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var makeResponsive = function makeResponsive(value, property) {
  var themeValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var style = {};
  if (!value) {
    return;
  }

  // Give style directly if not an object
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    style["".concat(property)] = themeValues["".concat(value)] || "".concat(value);
  }

  // Create an array for responsive value
  else if (_typeof(value) === "object") {
    Object.keys(value).map(function (key) {
      if (key === "xs") {
        style[property] = themeValues["".concat(value[key])] || "".concat(value[key]);
      } else {
        style[_deviceQuerry["default"][key]] = _defineProperty({}, property, themeValues["".concat(value[key])] || "".concat(value[key]));
      }
    });
  }
  return style;
};
var _default = exports["default"] = makeResponsive;