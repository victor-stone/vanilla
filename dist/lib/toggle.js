'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function (_React$Component) {
  (0, _inherits3.default)(Toggle, _React$Component);

  function Toggle() {
    (0, _classCallCheck3.default)(this, Toggle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Toggle).apply(this, arguments));

    _this.state = { toggle: _this.props.toggle };
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ toggle: nextProps.toggle });
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.props.onToggle(!this.state.toggle);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var toggle = _props.toggle;
      var className = _props.className;

      var icon = toggle ? 'toggle-on' : 'toggle-off';
      var cls = (0, _unicorns.selectors)('toggle', className);

      return _react2.default.createElement(
        'a',
        (0, _extends3.default)({}, this.props, { onClick: this.onChange, className: cls }),
        this.props.text + ' ',
        _react2.default.createElement(_glyph2.default, { icon: icon })
      );
    }
  }]);
  return Toggle;
}(_react2.default.Component);

module.exports = Toggle;