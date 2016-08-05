'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollIntoView;

var _isElementOnScreen = require('./is-element-on-screen');

var _isElementOnScreen2 = _interopRequireDefault(_isElementOnScreen);

var _scrollToElement = require('./scroll-to-element');

var _scrollToElement2 = _interopRequireDefault(_scrollToElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollIntoView(e, offset) {
  if (!(0, _isElementOnScreen2.default)(e)) {
    (0, _scrollToElement2.default)(e, offset);
  }
}