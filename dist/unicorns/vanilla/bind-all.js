'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindAll;

var _bindAllTo = require('./bind-all-to');

var _bindAllTo2 = _interopRequireDefault(_bindAllTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bindAll(obj) {
  for (var _len = arguments.length, arr = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arr[_key - 1] = arguments[_key];
  }

  _bindAllTo2.default.apply(undefined, [obj, obj].concat(arr));
}