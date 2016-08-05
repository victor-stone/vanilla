'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Glyph = _react2.default.createClass({
  displayName: 'Glyph',
  render: function render() {
    var cls = 'fa fa-' + this.props.icon;
    if (this.props.pulse) {
      cls += ' fa-pulse';
    }
    if (this.props.fixed) {
      cls += ' fa-fw';
    }
    if (this.props.x2 || this.props.sz === 'x2') {
      cls += ' fa-2x';
    }
    if (this.props.x4 || this.props.sz === 'x4') {
      cls += ' fa-4x';
    }
    if (this.props.left) {
      cls += ' pull-left';
    }
    if (this.props.right) {
      cls += ' fa-pull-right';
    }
    return _react2.default.createElement('i', { className: cls });
  }
});

module.exports = Glyph;