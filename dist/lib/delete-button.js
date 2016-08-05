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

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteButton = function (_React$Component) {
  (0, _inherits3.default)(DeleteButton, _React$Component);

  function DeleteButton() {
    (0, _classCallCheck3.default)(this, DeleteButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DeleteButton).apply(this, arguments));

    _this._onClick = _this._onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DeleteButton, [{
    key: '_onClick',
    value: function _onClick(e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onDelete();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        { className: 'btn btn-danger', onClick: this._onClick },
        _react2.default.createElement(_glyph2.default, { icon: 'trash' })
      );
    }
  }]);
  return DeleteButton;
}(_react2.default.Component);

module.exports = DeleteButton;