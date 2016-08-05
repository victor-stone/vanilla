'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

exports.default = quickLoop;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function quickLoop(arr, cb) {
  arr = (0, _from2.default)(arr);
  for (var i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i], i) === quickLoop.STOP) {
      break;
    }
  }
}

quickLoop.STOP = (0, _symbol2.default)('quickLoop.stop');