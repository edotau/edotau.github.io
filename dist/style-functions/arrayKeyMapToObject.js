"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var arrayKeyMapToObject = function arrayKeyMapToObject(input) {
  var output = {};
  input.forEach(function (item) {
    openObject(item, output);
    function openObject(objectToOpen, setOpenObjectTo) {
      if (!objectToOpen) {
        return;
      }
      Object.keys(objectToOpen).map(function (key) {
        if (key === undefined) {
          return;
        } else if (_typeof(setOpenObjectTo[key]) === "object") {
          openObject(objectToOpen[key], setOpenObjectTo[key]);
        } else {
          setOpenObjectTo[key] = objectToOpen[key];
        }
      });
    }
  });
  return output;
};
var _default = exports["default"] = arrayKeyMapToObject;