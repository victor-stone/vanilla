'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindAllTo;

var _quickLoop = require('./quick-loop');

var _quickLoop2 = _interopRequireDefault(_quickLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bindAllTo(obj, target) {
  for (var _len = arguments.length, arr = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    arr[_key - 2] = arguments[_key];
  }

  (0, _quickLoop2.default)(arr, function (f) {
    return obj[f] = target[f].bind(target);
  });
}