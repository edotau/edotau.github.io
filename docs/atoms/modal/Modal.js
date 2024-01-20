"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactTransitionGroup = require("react-transition-group");
var _Div = _interopRequireDefault(require("../div/Div"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Duration for the transition
 */
const duration = 300;

/**
 * Default Style for Backlayer
 */
const defaultbackLayerStyle = {
  transition: "opacity ".concat(duration, "ms ease-in-out"),
  opacity: 0
};

/**
 * Trasition Styles for Backlayer
 */
const backLayerTransitionStyles = {
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
const defaultModalContentStyle = {
  transition: "opacity ".concat(duration, "ms ease-in-out"),
  opacity: 0,
  overflowY: "auto",
  overflowX: "hidden"
};

/**
 * Trasition Styles for ModalContent
 */
const transitionModalContentStyles = {
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
class Modal extends _react.Component {
  constructor(props) {
    super(props);
    this.disableBodyScroll = this.disableBodyScroll.bind(this);
    this.enableBodyScroll = this.enableBodyScroll.bind(this);
  }

  /**
   * Disable the body scroll when Opened
   */
  disableBodyScroll() {
    document.querySelector("body").style.overflow = "hidden";

    // Start Function if recieved a onEntering Props
    const {
      onEntering
    } = this.props;
    if (onEntering) onEntering();
  }

  /**
   * Enable the body scroll when Closed
   */
  enableBodyScroll() {
    document.querySelector("body").style.overflow = "auto";

    // Start Function if recieved a onExiting Props
    const {
      onExiting
    } = this.props;
    if (onExiting) onExiting();
  }
  componentWillUnmount() {
    document.querySelector("body").style.overflow = "auto";
  }
  render() {
    const {
      children,
      isOpen,
      onClose,
      align,
      ...rest
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.Transition, {
      in: isOpen,
      timeout: duration,
      onEntering: this.disableBodyScroll,
      onExiting: this.enableBodyScroll,
      unmountOnExit: true
    }, state => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Div.default, {
      style: {
        ...defaultbackLayerStyle,
        ...backLayerTransitionStyles[state]
      },
      pos: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      bg: "black",
      opacity: "0.4",
      zIndex: "1000"
    }), /*#__PURE__*/_react.default.createElement(_Div.default, {
      style: {
        ...defaultModalContentStyle,
        ...transitionModalContentStyles[state]
      },
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
    }, /*#__PURE__*/_react.default.createElement(_Div.default, _extends({
      onClick: e => {
        e.stopPropagation();
      },
      bg: "white"
    }, rest, {
      zIndex: "1"
    }), children))));
  }
}
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
  onClose: () => {}
};
var _default = exports.default = Modal;