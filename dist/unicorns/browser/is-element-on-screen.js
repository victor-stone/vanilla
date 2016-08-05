"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isElementOnScreen;
/* globals $ */

function isElementOnScreen(e) {
    var $e = $(e);
    var $w = $(window);

    var docViewTop = $w.scrollTop();
    var docViewBottom = docViewTop + document.body.clientHeight;

    var eTop = $e.offset().top;

    return eTop > docViewTop && eTop < docViewBottom;
}