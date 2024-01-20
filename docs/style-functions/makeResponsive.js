"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deviceQuerry = _interopRequireDefault(require("./deviceQuerry"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const makeResponsive = function (value, property) {
  let themeValues = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let style = {};
  if (!value) {
    return;
  }

  // Give style directly if not an object
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    style["".concat(property)] = themeValues["".concat(value)] || "".concat(value);
  }

  // Create an array for responsive value
  else if (typeof value === "object") {
    Object.keys(value).map(key => {
      if (key === "xs") {
        style[property] = themeValues["".concat(value[key])] || "".concat(value[key]);
      } else {
        style[_deviceQuerry.default[key]] = {
          [property]: themeValues["".concat(value[key])] || "".concat(value[key])
        };
      }
    });
  }
  return style;
};
var _default = exports.default = makeResponsive;