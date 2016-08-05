'use strict';

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

var _pageHeader = require('./page-header');

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _grid = require('./grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicPage = function (_React$Component) {
  (0, _inherits3.default)(TopicPage, _React$Component);

  function TopicPage() {
    (0, _classCallCheck3.default)(this, TopicPage);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TopicPage).apply(this, arguments));
  }

  (0, _createClass3.default)(TopicPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'topic-page' },
        _react2.default.createElement(_pageHeader2.default, { title: this.props.title, icon: this.props.icon }),
        _react2.default.createElement(
          _grid.FluidContainer,
          null,
          _react2.default.createElement(
            _grid.Row,
            null,
            _react2.default.createElement(
              _grid.Column,
              { cols: '8', offset: '2' },
              this.props.children
            )
          )
        )
      );
    }
  }]);
  return TopicPage;
}(_react2.default.Component);

TopicPage.defaultProps = { icon: 'file-text-o' };

module.exports = TopicPage;