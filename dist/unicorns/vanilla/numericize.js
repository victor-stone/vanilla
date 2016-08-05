'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = numericize;

var _quickLoop = require('./quick-loop');

var _quickLoop2 = _interopRequireDefault(_quickLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function numericize(obj) {
  var result = {};
  obj && (0, _quickLoop2.default)((0, _keys2.default)(obj), function (k) {
    return result[k] = Number(obj[k]);
  });
  return result;
}