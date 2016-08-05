'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _tagString = require('./tag-string');

var _tagString2 = _interopRequireDefault(_tagString);

var _libArray = require('./lib-array');

var _libArray2 = _interopRequireDefault(_libArray);

var _browser = require('./browser');

var _browser2 = _interopRequireDefault(_browser);

var _react = require('./react');

var _react2 = _interopRequireDefault(_react);

var _vanilla = require('./vanilla');

var _vanilla2 = _interopRequireDefault(_vanilla);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _extends3.default)({}, _browser2.default, _react2.default, _vanilla2.default, {
  TagString: _tagString2.default,
  LibArray: _libArray2.default
});