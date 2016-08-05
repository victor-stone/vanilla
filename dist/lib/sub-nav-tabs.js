'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Designed to be used as a base class for nav tabs

  The derivation is used as children to a <SubNavBar /> 
  component

  Derivations implement: 
    tabs  - Read only property that returns a hash of tabs 
            in the form of:

              {
                <name-of-tab>: <text-for-tab>
              }

    onTab(name-of-tab) - user has selected this tab

    tab    - Readonly property - the currently selected tab

    badges - Readonly property -
             a hash that corresponds to the tabs that 
             include a count that will be displayed as
             badges. So if the tabs property returns:
                {
                  foo: 'bar',
                  fee: 'baz'
                }
             Then badges might return something like 
                {
                  foo: 18,
                  fee: 3
                }

    allowEmptyBadges                
             A value of zero (0) badge will hide an
             entire tab unless property return true

*/
var SubNavTabs = function (_React$Component) {
  (0, _inherits3.default)(SubNavTabs, _React$Component);

  function SubNavTabs() {
    (0, _classCallCheck3.default)(this, SubNavTabs);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SubNavTabs).apply(this, arguments));
  }

  (0, _createClass3.default)(SubNavTabs, [{
    key: 'onSelect',
    value: function onSelect(tab) {
      var _this2 = this;

      return function (e) {
        e.stopPropagation();
        e.preventDefault();
        _this2.onTab(tab);
      };
    }
  }, {
    key: 'checkActive',
    value: function checkActive(tab) {
      return tab === this.tab;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var tabs = this.tabs;
      var badges = this.badges;
      var allowEmptyBadges = this.allowEmptyBadges;


      return _react2.default.createElement(
        'ul',
        { className: 'nav nav-tabs subnav-tabs' },
        (0, _keys2.default)(tabs).map(function (t) {
          if (badges && !badges[t] && !allowEmptyBadges) {
            return null;
          }
          return _react2.default.createElement(
            'li',
            { key: t, className: _this3.checkActive(t) ? 'active' : '' },
            _react2.default.createElement(
              'a',
              { href: '#', onClick: _this3.onSelect(t) },
              tabs[t],
              badges && badges[t] > 0 ? _react2.default.createElement(
                'span',
                { className: 'badge' },
                badges[t]
              ) : null
            )
          );
        })
      );
    }
  }, {
    key: 'badges',
    get: function get() {
      return null;
    }
  }, {
    key: 'allowEmptyBadges',
    get: function get() {
      return false;
    }
  }]);
  return SubNavTabs;
}(_react2.default.Component);

module.exports = SubNavTabs;

//