'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

var _deadLink = require('./dead-link');

var _deadLink2 = _interopRequireDefault(_deadLink);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InfoButton(props) {
  var onInfo = props.onInfo;
  var className = props.className;
  var _props$size = props.size;
  var size = _props$size === undefined ? 'lg' : _props$size;
  var fixed = props.fixed;

  var cls = (0, _unicorns.selectors)('btn btn-' + size + ' btn-info', className);
  return _react2.default.createElement(
    _deadLink2.default,
    { onClick: onInfo, className: cls },
    _react2.default.createElement(_glyph2.default, { fixed: fixed, icon: 'info-circle' })
  );
}

module.exports = InfoButton;

//