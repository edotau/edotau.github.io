"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactTransitionGroup = require("react-transition-group");
var _Div = _interopRequireDefault(require("../div/Div"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Duration for the transition
 */
const duration = 300;

/**
 * Default Style for SideDrawerContent
 */
const defaultNotifationStyle = {
  transition: "all ".concat(duration, "ms ease-in-out"),
  opacity: 0
};

/**
 * Trasition Styles for SideDrawerContent
 */
const transitionNotifationStyles = {
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
class Notification extends _react.default.Component {
  constructor(props) {
    super(props);
    this.setTimer = this.setTimer.bind(this);
  }

  /**
   * SetTimerForClosing
   */
  setTimer() {
    const {
      onClose
    } = this.props;
    setTimeout(() => {
      onClose();
    }, 2000);
  }
  render() {
    const {
      children,
      isOpen,
      onClose,
      prefix,
      suffix,
      ...rest
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.Transition, {
      in: isOpen,
      timeout: duration,
      onEntering: this.setTimer,
      unmountOnExit: true
    }, state => /*#__PURE__*/_react.default.createElement(_Div.default, _extends({
      style: {
        ...defaultNotifationStyle,
        ...transitionNotifationStyles[state]
      },
      tabIndex: "-1"
    }, rest), prefix, /*#__PURE__*/_react.default.createElement(_Div.default, {
      flexGrow: "1"
    }, children), suffix));
  }
}
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
var _default = exports.default = Notification;