'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeadLink = _react2.default.createClass({
  displayName: 'DeadLink',
  onClick: function onClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onClick && this.props.onClick();
  },
  render: function render() {
    var _props = this.props;
    var icon = _props.icon;
    var _props$text = _props.text;
    var text = _props$text === undefined ? '' : _props$text;
    var children = _props.children;
    var x2 = _props.x2;

    icon && text && (text = ' ' + text);
    return _react2.default.createElement(
      'a',
      (0, _extends3.default)({ className: 'deadlink' }, this.props, { href: '#', onClick: this.onClick }),
      icon && _react2.default.createElement(_glyph2.default, { x2: x2, icon: icon }),
      text,
      children
    );
  }
});

module.exports = DeadLink;