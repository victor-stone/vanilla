'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _subnav = require('./style/subnav');

var _subnav2 = _interopRequireDefault(_subnav);

var _inlineCss = require('./inline-css');

var _inlineCss2 = _interopRequireDefault(_inlineCss);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Display a navbar of tabs. The actual tabs are children 
  of this component (derivations of SubNavTabs)

  props (all optional)
    className - for the outer div
    css       - override the default css (this is actual css code, 
                not a class selector or reference to a stylesheet
                file)
    extra[]   - array of components to including in the bar (e.g. Paging, SearchBox)
*/
function SubNavBar(props) {
  var className = props.className;
  var _props$css = props.css;
  var css = _props$css === undefined ? '' : _props$css;
  var extra = props.extra;


  var cls = (0, _unicorns.selectors)('subnav-option-bar', className);

  return _react2.default.createElement(
    'div',
    { className: cls },
    _react2.default.createElement(_inlineCss2.default, { css: _subnav2.default + css, id: 'subnav-option-bar-css' }),
    extra && extra.map(function (E, i) {
      return _react2.default.createElement(E, { key: i });
    }),
    _react2.default.createElement(
      'div',
      { className: 'subnav-wrapper hidden-xs hidden-sm' },
      props.children
    )
  );
}

module.exports = SubNavBar;

//