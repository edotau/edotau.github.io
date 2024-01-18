"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactTransitionGroup = require("react-transition-group");
var _styletronReact = require("styletron-react");
var _ThemeContext = require("../../core/ThemeContext");
var _Div = _interopRequireDefault(require("../div/Div"));
var _Icon = _interopRequireDefault(require("../icon/Icon"));
var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu.style"));
var _excluded = ["w", "minW", "maxW", "m", "children", "menu", "isOpen", "onClick", "targetHover", "prefix", "openSuffix", "closeSuffix", "isLoading", "borderColor", "focusBorderColor", "bg", "focusBg", "direction", "zIndex"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Duration for the transition
 */
var duration = 300;

/**
 * Default Style for DropdownMenu
 */
var defaultMenuStyle = {
  transition: "all ".concat(duration, "ms ease-in-out"),
  opacity: 0,
  transform: "scaleY(1)"
};

/**
 * Trasition Styles for DropdownMenu
 */
var menuTransitionStyles = {
  entering: {
    opacity: 0,
    transform: "scaleY(0)"
  },
  entered: {
    opacity: 1,
    transform: "scaleY(1)"
  },
  exiting: {
    opacity: 0,
    transform: "scaleY(0)"
  },
  exited: {
    opacity: 0,
    transform: "scaleY(0)"
  }
};

/**
 * Styling the direction of dropdown menu
 */
var BaseDropdownMenu = (0, _styletronReact.styled)(_Div["default"], function (props) {
  return _objectSpread({}, props.$style);
});
var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits(Dropdown, _Component);
  function Dropdown(props) {
    var _this;
    _classCallCheck(this, Dropdown);
    _this = _callSuper(this, Dropdown, [props]);
    _this.state = {
      isHovered: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleOutsideClick = _this.handleOutsideClick.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    _this.onHover = _this.onHover.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Dropdown, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleOutsideClick, false);
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      document.removeEventListener("mousedown", this.handleOutsideClick, false);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var _this$props = this.props,
        isOpen = _this$props.isOpen,
        onClick = _this$props.onClick,
        isLoading = _this$props.isLoading;
      if (isLoading) {
        return;
      }
      if (!onClick) {
        return;
      }
      if (!isOpen) {
        document.addEventListener("mousedown", this.handleOutsideClick, false);
      } else {
        this.removeEvents;
      }
      onClick();
    }
  }, {
    key: "handleOutsideClick",
    value: function handleOutsideClick(e) {
      if (_reactDom["default"].findDOMNode(this).contains(e.target)) {
        return;
      }
      this.handleClick();
    }
  }, {
    key: "onHover",
    value: function onHover(value) {
      var _this$props2 = this.props,
        targetHover = _this$props2.targetHover,
        isLoading = _this$props2.isLoading;
      if (isLoading) {
        return;
      }
      if (!targetHover) {
        return;
      }
      this.setState({
        isHovered: value
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.keyCode != 13) {
        return;
      }
      var _this$props3 = this.props,
        onClick = _this$props3.onClick,
        targetHover = _this$props3.targetHover;
      if (onClick) {
        this.handleClick();
      } else if (targetHover) {
        this.onHover();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        w = _this$props4.w,
        minW = _this$props4.minW,
        maxW = _this$props4.maxW,
        m = _this$props4.m,
        children = _this$props4.children,
        menu = _this$props4.menu,
        isOpen = _this$props4.isOpen,
        onClick = _this$props4.onClick,
        targetHover = _this$props4.targetHover,
        prefix = _this$props4.prefix,
        openSuffix = _this$props4.openSuffix,
        closeSuffix = _this$props4.closeSuffix,
        isLoading = _this$props4.isLoading,
        borderColor = _this$props4.borderColor,
        focusBorderColor = _this$props4.focusBorderColor,
        bg = _this$props4.bg,
        focusBg = _this$props4.focusBg,
        direction = _this$props4.direction,
        zIndex = _this$props4.zIndex,
        rest = _objectWithoutProperties(_this$props4, _excluded);
      var isHovered = this.state.isHovered;
      var menustyle = (0, _DropdownMenu["default"])(direction);
      var showDropdown = isOpen || isHovered;
      return /*#__PURE__*/_react["default"].createElement(_Div["default"], {
        w: w,
        minW: minW,
        maxW: maxW,
        m: m,
        onMouseEnter: function onMouseEnter() {
          _this2.onHover(true);
        },
        onMouseLeave: function onMouseLeave() {
          _this2.onHover(false);
        },
        zIndex: zIndex,
        pos: "relative"
      }, /*#__PURE__*/_react["default"].createElement(_Div["default"], _extends({
        tag: "button",
        tabIndex: "0",
        w: "100%",
        ref: function ref(node) {
          return _this2.node = node;
        },
        onClick: this.handleClick,
        onKeyDown: this.onKeyDown,
        borderColor: showDropdown ? focusBorderColor : borderColor,
        bg: showDropdown ? focusBg : bg
      }, rest), prefix, children, isLoading ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "Loading",
        color: "gray600",
        size: "18px"
      }) : isOpen ? openSuffix : closeSuffix), /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.Transition, {
        "in": showDropdown,
        timeout: duration,
        onExiting: this.removeEvents,
        unmountOnExit: true
      }, function (state) {
        return /*#__PURE__*/_react["default"].createElement(BaseDropdownMenu, {
          $style: menustyle,
          zIndex: "10",
          tabIndex: "-1",
          style: _objectSpread(_objectSpread({}, defaultMenuStyle), menuTransitionStyles[state]),
          transition: true,
          pos: "absolute",
          shadow: "4",
          minW: "100%",
          rounded: "md",
          bg: "white"
        }, menu);
      }));
    }
  }]);
  return Dropdown;
}(_react.Component);
Dropdown.defaultProps = {
  tag: "div",
  d: "flex",
  align: "center",
  textColor: "medium",
  textWeight: "500",
  justify: "space-between",
  p: {
    x: "0.75rem"
  },
  h: "2.5rem",
  textSize: "body",
  rounded: "md",
  border: "1px solid",
  borderColor: "gray500",
  w: "100%",
  bg: "white",
  focusBg: "gray100",
  focusBorderColor: "gray800",
  cursor: "pointer",
  onClick: function onClick() {},
  openSuffix: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "UpArrow",
    size: "18px",
    m: {
      l: "1rem"
    },
    color: "medium"
  }),
  closeSuffix: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "DownArrow",
    size: "18px",
    m: {
      l: "1rem"
    },
    color: "medium"
  })
};
Dropdown.contextType = _ThemeContext.ThemeContext;
var _default = exports["default"] = Dropdown;