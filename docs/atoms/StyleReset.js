"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ThemeContext = require("../core/ThemeContext");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
class StyleReset extends _react.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: "html { font-size: 16px } body { font-size: ".concat(this.context.textSize.size.body, "; line-height: ").concat(this.context.textSize.height.body, "; -webkit-font-smoothing: antialiased; font-family:").concat(this.context.fontFamily.primary, "; margin: 0; color: ").concat(this.context.colors.black, "; } p, h1, h2, h3, h4, h5, h6 { padding: 0; margin: 0; font-size: ").concat(this.context.textSize.size.body, "; line-height: ").concat(this.context.textSize.height.body, ";} input { border: none; font-family: inherit } a {\n            margin: 0;\n            padding: 0;\n            color: ").concat(this.context.colors.info700, ";\n            cursor: pointer;\n            text-decoration: none;\n          } button { border: none } pre {\n            margin: 0; padding: 1rem; font-size: ").concat(this.context.textSize.size.body, ";\n            line-height: ").concat(this.context.textSize.height.body, ";\n            font-family: ").concat(this.context.fontFamily.code, ";\n          } :focus {outline: none;}")
      }
    });
  }
}
StyleReset.contextType = _ThemeContext.ThemeContext;
var _default = exports.default = StyleReset;