"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactTransitionGroup = require("react-transition-group");
var _Div = _interopRequireDefault(require("../div/Div"));
var _excluded = ["children", "isOpen", "onClose", "prefix", "suffix"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/**
 * Duration for the transition
 */
var duration = 300;

/**
 * Default Style for SideDrawerContent
 */
var defaultNotifationStyle = {
  transition: "all ".concat(duration, "ms ease-in-out"),
  opacity: 0
};

/**
 * Trasition Styles for SideDrawerContent
 */
var transitionNotifationStyles = {
  entering: {
    opacity: 0,
    transform: "translateY(-100%)"
  },
  entered: {
    opacity: 1,
    transform: "translateX(0)"
  },
  exiting: {
    opacity: 0,
    transform: "translateX(100%)"
  },
  exited: {
    opacity: 0,
    transform: "translateY(-100%)"
  }
};
var Notification = /*#__PURE__*/function (_React$Component) {
  _inherits(Notification, _React$Component);
  function Notification(props) {
    var _this;
    _classCallCheck(this, Notification);
    _this = _callSuper(this, Notification, [props]);
    _this.setTimer = _this.setTimer.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * SetTimerForClosing
   */
  _createClass(Notification, [{
    key: "setTimer",
    value: function setTimer() {
      var onClose = this.props.onClose;
      setTimeout(function () {
        onClose();
      }, 2000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        onClose = _this$props.onClose,
        prefix = _this$props.prefix,
        suffix = _this$props.suffix,
        rest = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
        "in": isOpen,
        timeout: duration,
        onEntering: this.setTimer,
        unmountOnExit: true
      }, function (state) {
        return /*#__PURE__*/_react["default"].createElement(_Div["default"], _extends({
          style: _objectSpread(_objectSpread({}, defaultNotifationStyle), transitionNotifationStyles[state]),
          tabIndex: "-1"
        }, rest), prefix, /*#__PURE__*/_react["default"].createElement(_Div["default"], {
          flexGrow: "1"
        }, children), suffix);
      });
    }
  }]);
  return Notification;
}(_react["default"].Component);
Notification.defaultProps = {
  pos: "fixed",
  top: "2rem",
  right: "2rem",
  d: "flex",
  align: "center",
  bg: "gray900",
  rounded: "md",
  p: {
    x: "16px",
    y: "16px"
  },
  textColor: "white",
  iconsSize: "18px",
  iconSize: "20px",
  textWeight: "600",
  w: "20rem",
  zIndex: "1050",
  shadow: "3"
};
var _default = exports["default"] = Notification;