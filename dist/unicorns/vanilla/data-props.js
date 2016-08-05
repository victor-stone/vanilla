"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dataProps;
function dataProps(props) {
  var results = {};
  var test = /^data\-/;
  for (var key in props) {
    if (test.test(key)) {
      results[key] = props[key];
    }
  }
  return results;
}