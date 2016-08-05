'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopoverMixin = function PopoverMixin(target) {
  return function (_target) {
    (0, _inherits3.default)(_class, _target);

    function _class() {
      (0, _classCallCheck3.default)(this, _class);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(_class).apply(this, arguments));
    }

    (0, _createClass3.default)(_class, [{
      key: '_popoverContent',
      value: function _popoverContent() {
        // this gets called a bunch of times from the popover plugin
        if (!this.DOMContainer) {
          this.DOMContainer = document.createElement('div');
          this.DOMContainer.style.display = 'none';
          document.body.appendChild(this.DOMContainer);
        }
        if (!this.DOMContainer.innerHTML) {
          var el = this.popoverContent;
          this.node = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, el, this.DOMContainer);
        }
        return this.DOMContainer.innerHTML;
      }
    }, {
      key: 'showPopover',
      value: function showPopover() {
        var $e = $(_reactDom2.default.findDOMNode(this));
        $e.popover({
          content: this._popoverContent.bind(this),
          animation: this.props.animation,
          placement: 'auto',
          title: this.title || this.props.title,
          trigger: 'hover',
          html: true
        }).popover('show');
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.unmountNode();
        this.unmountContainer();
      }
    }, {
      key: 'unmountContainer',
      value: function unmountContainer() {
        this.DOMContainer && document.body.removeChild(this.DOMContainer);
        this.DOMContainer = null;
      }
    }, {
      key: 'unmountNode',
      value: function unmountNode() {
        this.DOMContainer && _reactDom2.default.unmountComponentAtNode(this.DOMContainer);
        this.node = null;
      }
    }, {
      key: 'hasPopover',
      get: function get() {
        var $e = $(_reactDom2.default.findDOMNode(this));
        return !!$e.data('bs.popover');
      }
    }]);
    return _class;
  }(target);
}; /* globals $ */


module.exports = PopoverMixin;