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

function LinkWrapper(props) {
  return _react2.default.createElement(
    'a',
    { href: '#', className: 'dropdown-toggle', style: props.style, 'data-toggle': 'dropdown' },
    props.children
  );
}

var DropdownMenu = function (_React$Component) {
  (0, _inherits3.default)(DropdownMenu, _React$Component);

  function DropdownMenu() {
    (0, _classCallCheck3.default)(this, DropdownMenu);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropdownMenu).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var id = _props.id;
      var bars = _props.bars;
      var head = _props.head;
      var _props$style = _props.style;
      var style = _props$style === undefined ? {} : _props$style;
      var _props$parentType = _props.parentType;
      var parentType = _props$parentType === undefined ? 'li' : _props$parentType;

      var cls = (0, _unicorns.selectors)(className, 'dropdown');

      var link = null;

      if (bars) {
        link = _react2.default.createElement(
          LinkWrapper,
          { style: style },
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' })
        );
      } else {
        link = _react2.default.createElement(
          LinkWrapper,
          { style: style },
          head,
          " ",
          _react2.default.createElement(_glyph2.default, { icon: 'chevron-down' })
        );
      }

      var E = parentType;

      var data = (0, _unicorns.dataProps)(this.props);

      return _react2.default.createElement(
        E,
        (0, _extends3.default)({ className: cls, id: id }, data),
        link,
        _react2.default.createElement(
          'ul',
          { className: 'dropdown-menu' },
          this.props.children
        )
      );
    }
  }]);
  return DropdownMenu;
}(_react2.default.Component);

module.exports = DropdownMenu;

//