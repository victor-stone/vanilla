"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

exports.default = safeSetState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function safeSetState(_this, state) {
  if (_this.state) {
    (0, _assign2.default)(_this.state, state);
  } else {
    _this.state = state;
  }
}