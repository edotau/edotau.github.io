"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _reactTransitionGroup = require("react-transition-group");
var _styletronReact = require("styletron-react");
var _ThemeContext = require("../../core/ThemeContext");
var _Div = _interopRequireDefault(require("../div/Div"));
var _Icon = _interopRequireDefault(require("../icon/Icon"));
var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu.style"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Duration for the transition
 */
const duration = 300;

/**
 * Default Style for DropdownMenu
 */
const defaultMenuStyle = {
  transition: "all ".concat(duration, "ms ease-in-out"),
  opacity: 0,
  transform: "scaleY(1)"
};

/**
 * Trasition Styles for DropdownMenu
 */
const menuTransitionStyles = {
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
const BaseDropdownMenu = (0, _styletronReact.styled)(_Div.default, props => {
  return {
    ...props.$style
  };
});
class Dropdown extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }
  removeEvents() {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }
  handleClick() {
    const {
      isOpen,
      onClick,
      isLoading
    } = this.props;
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
  handleOutsideClick(e) {
    if (_reactDom.default.findDOMNode(this).contains(e.target)) {
      return;
    }
    this.handleClick();
  }
  onHover(value) {
    const {
      targetHover,
      isLoading
    } = this.props;
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
  onKeyDown(e) {
    if (e.keyCode != 13) {
      return;
    }
    const {
      onClick,
      targetHover
    } = this.props;
    if (onClick) {
      this.handleClick();
    } else if (targetHover) {
      this.onHover();
    }
  }
  render() {
    const {
      w,
      minW,
      maxW,
      m,
      children,
      menu,
      isOpen,
      onClick,
      targetHover,
      prefix,
      openSuffix,
      closeSuffix,
      isLoading,
      borderColor,
      focusBorderColor,
      bg,
      focusBg,
      direction,
      zIndex,
      ...rest
    } = this.props;
    const {
      isHovered
    } = this.state;
    const menustyle = (0, _DropdownMenu.default)(direction);
    const showDropdown = isOpen || isHovered;
    return /*#__PURE__*/_react.default.createElement(_Div.default, {
      w: w,
      minW: minW,
      maxW: maxW,
      m: m,
      onMouseEnter: () => {
        this.onHover(true);
      },
      onMouseLeave: () => {
        this.onHover(false);
      },
      zIndex: zIndex,
      pos: "relative"
    }, /*#__PURE__*/_react.default.createElement(_Div.default, _extends({
      tag: "button",
      tabIndex: "0",
      w: "100%",
      ref: node => this.node = node,
      onClick: this.handleClick,
      onKeyDown: this.onKeyDown,
      borderColor: showDropdown ? focusBorderColor : borderColor,
      bg: showDropdown ? focusBg : bg
    }, rest), prefix, children, isLoading ? /*#__PURE__*/_react.default.createElement(_Icon.default, {
      name: "Loading",
      color: "gray600",
      size: "18px"
    }) : isOpen ? openSuffix : closeSuffix), /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.Transition, {
      in: showDropdown,
      timeout: duration,
      onExiting: this.removeEvents,
      unmountOnExit: true
    }, state => /*#__PURE__*/_react.default.createElement(BaseDropdownMenu, {
      $style: menustyle,
      zIndex: "10",
      tabIndex: "-1",
      style: {
        ...defaultMenuStyle,
        ...menuTransitionStyles[state]
      },
      transition: true,
      pos: "absolute",
      shadow: "4",
      minW: "100%",
      rounded: "md",
      bg: "white"
    }, menu)));
  }
}
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
  onClick: () => {},
  openSuffix: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "UpArrow",
    size: "18px",
    m: {
      l: "1rem"
    },
    color: "medium"
  }),
  closeSuffix: /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "DownArrow",
    size: "18px",
    m: {
      l: "1rem"
    },
    color: "medium"
  })
};
Dropdown.contextType = _ThemeContext.ThemeContext;
var _default = exports.default = Dropdown;