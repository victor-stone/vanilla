'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fixOnPage;
/* globals $ */

function fixOnPage(sel) {
  var $el = $(sel);
  var rect = $el[0].getBoundingClientRect();
  var $w = $(window);

  var left = rect.left + $w['scrollLeft']();
  var right = rect.right + $w['scrollLeft']();
  var top = rect.top + $w['scrollTop']();
  var bottom = rect.bottom + $w['scrollTop']();
  $el.css({
    position: 'fixed',
    top: top, left: left, right: right, bottom: bottom
  });
}