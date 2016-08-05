'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeader = _react2.default.createClass({
  displayName: 'PageHeader',


  render: function render() {
    var icon = this.props.icon;
    var subTitle = this.props.subTitle;
    var title = this.props.title;

    if (subTitle) {
      return _react2.default.createElement(
        'div',
        { className: 'page-header' },
        _react2.default.createElement(
          'h1',
          { className: 'center-text' },
          _react2.default.createElement(
            'small',
            null,
            _react2.default.createElement(_glyph2.default, { icon: icon }),
            ' ',
            subTitle
          ),
          ' ',
          _react2.default.createElement(
            'span',
            null,
            title
          )
        )
      );
    } else {
      return _react2.default.createElement(
        'div',
        { className: 'page-header' },
        _react2.default.createElement(
          'h1',
          { className: 'center-text' },
          _react2.default.createElement(_glyph2.default, { icon: icon }),
          ' ',
          _react2.default.createElement(
            'span',
            null,
            title
          )
        )
      );
    }
  }
});

module.exports = PageHeader;