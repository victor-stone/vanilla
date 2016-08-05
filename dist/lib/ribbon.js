'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint "react/no-danger":0 */
function Ribbon(props) {
  var _props$color = props.color;
  var color = _props$color === undefined ? 'orange' : _props$color;
  var className = props.className;
  var text = props.text;

  var cls = (0, _unicorns.selectors)('ribbon', color, className);
  var html = { __html: text.replace(/\\n/g, '<br />') };
  return _react2.default.createElement('span', { className: cls, dangerouslySetInnerHTML: html });
}

module.exports = Ribbon;