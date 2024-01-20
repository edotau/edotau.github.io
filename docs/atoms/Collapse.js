"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactTransitionGroup = require("react-transition-group");
var _Div = _interopRequireDefault(require("./Div"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
class Collapse extends _react.Component {
  constructor() {
    super();
    this.state = {
      defaultHeight: 0
    };
    this.innerDiv = /*#__PURE__*/_react.default.createRef();
    this.onEntering = this.onEntering.bind(this);
    this.onExiting = this.onExiting.bind(this);
  }

  /**
   * Set State for Height on Enter
   */
  onEntering() {
    this.setState({
      defaultHeight: this.innerDiv.current.clientHeight
    });

    // Start Function if recieved a onEntering Props
    const {
      onEntering
    } = this.props;
    if (onEntering) onEntering();
  }

  /**
   * Set State for Height on Exit
   */
  onExiting() {
    this.setState({
      defaultHeight: this.innerDiv.current.clientHeight
    });

    // Start Function if recieved a onExiting Props
    const {
      onExiting
    } = this.props;
    if (onExiting) onExiting();
  }
  render() {
    const {
      defaultHeight
    } = this.state;
    const {
      p,
      children,
      isOpen,
      ...rest
    } = this.props;

    /**
     * Duration for the transition
     */
    const duration = 400;

    /**
     * Default Style for Backlayer
     */
    const defaultStyle = {
      transition: "height ".concat(duration, "ms ease-in-out"),
      height: 0,
      opacity: 0
    };

    /**
     * Trasition Styles for Backlayer
     */
    const transitionStyles = {
      entering: {
        opacity: 0,
        height: 0
      },
      entered: {
        opacity: 1,
        height: defaultHeight
      },
      exiting: {
        opacity: 0,
        height: 0
      },
      exited: {
        opacity: 0,
        height: 0
      }
    };
    return /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.Transition, {
      in: isOpen,
      timeout: duration,
      onEntering: this.onEntering,
      onExiting: this.onExiting
    }, state => /*#__PURE__*/_react.default.createElement(_Div.default, _extends({}, rest, {
      style: {
        ...defaultStyle,
        ...transitionStyles[state]
      },
      transition: true
    }), /*#__PURE__*/_react.default.createElement("div", {
      ref: this.innerDiv
    }, children)));
  }
}
exports.default = Collapse;
Collapse.defaultProps = {
  m: {
    y: 0
  },
  p: {
    y: 0
  },
  overflow: "hidden"
};