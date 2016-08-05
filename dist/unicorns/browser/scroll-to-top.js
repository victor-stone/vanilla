'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollToTop;
/* globals $ */

function scrollToTop() {
  $('html,body').animate({ scrollTop: 0 }, { duration: 'fast' });
}