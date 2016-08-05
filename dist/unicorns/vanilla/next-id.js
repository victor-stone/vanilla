'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextId;

var _nextId = 0;

function nextId() {
  var prefix = arguments.length <= 0 || arguments[0] === undefined ? '_auto_id_' : arguments[0];

  return prefix + ++_nextId;
}