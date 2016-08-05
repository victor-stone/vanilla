"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.default = excludeProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function excludeProps(props, exclude) {
  var NOT_FOUND = -1;
  var results = {};
  (0, _keys2.default)(props).filter(function (k) {
    return exclude.indexOf(k) === NOT_FOUND;
  }).forEach(function (k) {
    return results[k] = props[k];
  });
  return results;
}