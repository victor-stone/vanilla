'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseButton = _react2.default.createClass({
  displayName: 'CloseButton',


  render: function render() {
    /*eslint "react/no-danger":0 */
    var times = { __html: '&times;' };

    return _react2.default.createElement(
      'button',
      (0, _extends3.default)({ type: 'button' }, this.props, { className: 'close', 'aria-label': 'Close' }),
      _react2.default.createElement('span', { 'aria-hidden': 'true', dangerouslySetInnerHTML: times })
    );
  }
});

module.exports = CloseButton;