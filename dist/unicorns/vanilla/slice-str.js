'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sliceStr;

var _ellipse = require('./ellipse');

var _ellipse2 = _interopRequireDefault(_ellipse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRUNCATED_STRING_MAX = 10;
var TRUNCATED_WORD_MAX = 5;
var MAX_SINGLE_WORD = 20;

function sliceStr(_ref) {
  var _ref$str = _ref.str;
  var str = _ref$str === undefined ? '' : _ref$str;
  var _ref$maxWords = _ref.maxWords;
  var maxWords = _ref$maxWords === undefined ? TRUNCATED_WORD_MAX : _ref$maxWords;
  var _ref$maxStr = _ref.maxStr;
  var maxStr = _ref$maxStr === undefined ? TRUNCATED_STRING_MAX : _ref$maxStr;
  var _ref$maxSingle = _ref.maxSingle;
  var maxSingle = _ref$maxSingle === undefined ? MAX_SINGLE_WORD : _ref$maxSingle;

  if (!/[\s\-_]/.test(str) && str.length < maxSingle) {
    return str;
  }
  return str.trim().split(/[\s\-_]+/).slice(0, maxWords).map(function (s) {
    return (0, _ellipse2.default)(s, maxStr);
  }).join(' ');
}