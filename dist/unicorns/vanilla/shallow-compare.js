"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

exports.default = shallowCompare;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shallowCompare(obj1, obj2) {

  if (!obj1 || !obj2) {
    return false;
  }

  var keys1 = (0, _keys2.default)(obj1);
  var keys2 = (0, _keys2.default)(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return !keys1.find(function (k) {
    return !(k in obj2) || obj1[k] !== obj2[k];
  });
}