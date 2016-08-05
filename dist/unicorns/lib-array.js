"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOT_FOUND = -1;

var isUndefined = function isUndefined(obj) {
  return obj === undefined;
};

// inheriting from Array just isn't supported 
// by enough places (including Babel and Node < 6)

// class LibArray extends Array 
(0, _assign2.default)(Array.prototype, {
  indexOfElement: function indexOfElement(key, value) {
    var valIsDefined = !isUndefined(value);
    var len = this.length;
    for (var i = 0; i < len; i++) {
      if (valIsDefined) {
        if (this[i][key] === value) {
          return i;
        }
      } else {
        if (this[i][key]) {
          return i;
        }
      }
    }
    return NOT_FOUND;
  },
  includes: function includes(v) {
    return this.indexOf(v) !== NOT_FOUND;
  },
  contains: function contains(v) {
    return this.indexOf(v) !== NOT_FOUND;
  },
  findBy: function findBy(key, value) {
    var valIsDefined = !isUndefined(value);
    for (var i = 0; i < this.length; i++) {
      if (valIsDefined) {
        if (this[i][key] === value) {
          return this[i];
        }
      } else {
        if (this[i][key]) {
          return this[i];
        }
      }
    }
    return null;
  },
  match: function match(regex) {
    return this.find(regex.test.bind(regex));
  }
});

module.exports = Array;