'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

var _deadLink = require('./dead-link');

var _deadLink2 = _interopRequireDefault(_deadLink);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ClearButton(props) {
  var className = props.className;
  var onClear = props.onClear;

  var cls = (0, _unicorns.selectors)('btn btn-danger', className);
  return _react2.default.createElement(
    _deadLink2.default,
    { onClick: onClear, className: cls },
    _react2.default.createElement(_glyph2.default, { icon: 'trash' }),
    " clear"
  );
}

module.exports = ClearButton;