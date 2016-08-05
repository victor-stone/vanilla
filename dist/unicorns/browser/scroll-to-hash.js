'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollToHash;

var _scrollToElement = require('./scroll-to-element');

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollToHash(hash) {
  hash = hash.replace(/#/, '');
  var anchor = $('a[name="' + hash + '"]');
  if (!anchor.length) {
    anchor = $('#' + hash);
  }
  (0, _scrollToElement2.default)(anchor);
} /* globals $ */