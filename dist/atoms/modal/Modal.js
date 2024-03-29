"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactTransitionGroup = require("react-transition-group");
var _Div = _interopRequireDefault(require("../div/Div"));
var _excluded = ["children", "isOpen", "onClose", "align"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
 * Default Style for Backlayer
 */
var defaultbackLayerStyle = {
  transition: "opacity ".concat(duration, "ms ease-in-out"),
  opacity: 0
};

/**
 * Trasition Styles for Backlayer
 */
var backLayerTransitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 0.4
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};

/**
 * Default Style for ModalContent
 */
var defaultModalContentStyle = {
  transition: "opacity ".concat(duration, "ms ease-in-out"),
  opacity: 0,
  overflowY: "auto",
  overflowX: "hidden"
};

/**
 * Trasition Styles for ModalContent
 */
var transitionModalContentStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};
var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);
  function Modal(props) {
    var _this;
    _classCallCheck(this, Modal);
    _this = _callSuper(this, Modal, [props]);
    _this.disableBodyScroll = _this.disableBodyScroll.bind(_assertThisInitialized(_this));
    _this.enableBodyScroll = _this.enableBodyScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Disable the body scroll when Opened
   */
  _createClass(Modal, [{
    key: "disableBodyScroll",
    value: function disableBodyScroll() {
      document.querySelector("body").style.overflow = "hidden";

      // Start Function if recieved a onEntering Props
      var onEntering = this.props.onEntering;
      if (onEntering) onEntering();
    }

    /**
     * Enable the body scroll when Closed
     */
  }, {
    key: "enableBodyScroll",
    value: function enableBodyScroll() {
      document.querySelector("body").style.overflow = "auto";

      // Start Function if recieved a onExiting Props
      var onExiting = this.props.onExiting;
      if (onExiting) onExiting();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.querySelector("body").style.overflow = "auto";
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        onClose = _this$props.onClose,
        align = _this$props.align,
        rest = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
        "in": isOpen,
        timeout: duration,
        onEntering: this.disableBodyScroll,
        onExiting: this.enableBodyScroll,
        unmountOnExit: true
      }, function (state) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Div["default"], {
          style: _objectSpread(_objectSpread({}, defaultbackLayerStyle), backLayerTransitionStyles[state]),
          pos: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          bg: "black",
          opacity: "0.4",
          zIndex: "1000"
        }), /*#__PURE__*/_react["default"].createElement(_Div["default"], {
          style: _objectSpread(_objectSpread({}, defaultModalContentStyle), transitionModalContentStyles[state]),
          onClick: onClose,
          tabIndex: "-1",
          pos: "fixed",
          top: "0",
          left: "0",
          right: "0",
          h: "100vh",
          d: "flex",
          align: align,
          justify: "center",
          zIndex: "1001",
          cursor: "pointer"
        }, /*#__PURE__*/_react["default"].createElement(_Div["default"], _extends({
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          bg: "white"
        }, rest, {
          zIndex: "1"
        }), children)));
      });
    }
  }]);
  return Modal;
}(_react.Component);
Modal.defaultProps = {
  m: {
    y: {
      xs: "1rem",
      lg: "2rem"
    },
    x: {
      xs: "1rem",
      lg: "auto"
    }
  },
  p: "2rem",
  maxW: "32rem",
  w: "100%",
  pos: "relative",
  shadow: "4",
  cursor: "default",
  align: "start",
  onClose: function onClose() {}
};
var _default = exports["default"] = Modal;