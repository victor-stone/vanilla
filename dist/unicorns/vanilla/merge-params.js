'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = mergeParams;

var _tagString = require('../tag-string');

var _tagString2 = _interopRequireDefault(_tagString);

var _libArray = require('../lib-array');

var _libArray2 = _interopRequireDefault(_libArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeParams(oldp) {
  var target = (0, _assign2.default)({}, oldp);
  // TODO: how the fuck did these tags get down here
  var tagFields = _libArray2.default.from(['tags', 'reqtags', 'oneof']);

  for (var _len = arguments.length, newPs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    newPs[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < newPs.length; i++) {
    var newp = newPs[i];
    for (var k in newp) {
      var isRemoveParam = k.match(/^--(.*)/);
      if (isRemoveParam) {
        var realParamName = isRemoveParam[1];
        if (tagFields.contains(realParamName)) {
          if (realParamName in target) {
            target[realParamName] = new _tagString2.default(target[realParamName]).remove(newp[k]).toString();
          }
        }
      } else {
        if (tagFields.contains(k)) {
          if (target[k]) {
            target[k] = new _tagString2.default(target[k]).add(newp[k]).toString();
          } else {
            target[k] = newp[k];
          }
        } else {
          target[k] = newp[k];
        }
      }
    }
  }
  return target;
}