'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExternalLink = _react2.default.createClass({
  displayName: 'ExternalLink',


  render: function render() {
    var subname = this.props.subname || '';
    var text = this.props.text;
    return _react2.default.createElement(
      'a',
      (0, _extends3.default)({}, this.props, { target: '_blank' }),
      _react2.default.createElement(
        'span',
        { className: 'light-color' },
        subname
      ),
      " ",
      text,
      " ",
      _react2.default.createElement(_glyph2.default, { icon: 'external-link' })
    );
  }
});

module.exports = ExternalLink;