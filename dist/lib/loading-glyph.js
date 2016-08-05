'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingGlyph = function (_React$Component) {
  (0, _inherits3.default)(LoadingGlyph, _React$Component);

  function LoadingGlyph() {
    (0, _classCallCheck3.default)(this, LoadingGlyph);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LoadingGlyph).apply(this, arguments));

    _this.state = { loading: _this.props.loading };
    return _this;
  }

  (0, _createClass3.default)(LoadingGlyph, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ loading: nextProps.loading });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.state.loading !== nextProps.loading;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$color = this.props.color;
      var color = _props$color === undefined ? 'white' : _props$color;
      var loading = this.state.loading;


      if (!loading) {
        return null;
      }

      var style = { color: color };

      return _react2.default.createElement(_glyph2.default, (0, _extends3.default)({ style: style }, this.props, { icon: 'spinner', pulse: true }));
    }
  }]);
  return LoadingGlyph;
}(_react2.default.Component);

module.exports = LoadingGlyph;