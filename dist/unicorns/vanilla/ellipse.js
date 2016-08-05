'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ellipse;

var ELLIPSE = '...';

function ellipse(str, len) {
  if (str.length > len) {
    return str.substr(0, len - ELLIPSE.length) + ELLIPSE;
  }
  return str;
}