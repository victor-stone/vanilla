'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.default = hashParams;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hashParams(params) {
  var keys = (0, _keys2.default)(params);
  if (!keys.length) {
    return '';
  }
  var keyo = {};
  keys.sort().forEach(function (k) {
    return keyo[k] = params[k];
  });
  return (0, _stringify2.default)(keyo);
}