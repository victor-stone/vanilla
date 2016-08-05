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

var _form = require('./form');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputWithIcon = function (_Input) {
  (0, _inherits3.default)(InputWithIcon, _Input);

  function InputWithIcon() {
    (0, _classCallCheck3.default)(this, InputWithIcon);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InputWithIcon).apply(this, arguments));
  }

  (0, _createClass3.default)(InputWithIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var icon = _props.icon;
      var title = _props.title;


      return _react2.default.createElement(
        _form.Field,
        { title: title, postfix: { onClick: this.doDone, icon: icon } },
        this.input()
      );
    }
  }]);
  return InputWithIcon;
}(_input2.default);

module.exports = InputWithIcon;