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

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextEditor = function (_React$Component) {
  (0, _inherits3.default)(TextEditor, _React$Component);

  function TextEditor() {
    (0, _classCallCheck3.default)(this, TextEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TextEditor).apply(this, arguments));

    (0, _unicorns.bindAll)(_this, 'onChange');
    var _this$props$focusId = _this.props.focusId;
    _this.focusId = _this$props$focusId === undefined ? (0, _unicorns.nextId)('element_') : _this$props$focusId;

    _this.state = { value: _this.props.initialValue };
    return _this;
  }

  (0, _createClass3.default)(TextEditor, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$placeholder = this.props.placeholder;
      var placeholder = _props$placeholder === undefined ? 'awesome!' : _props$placeholder;

      return _react2.default.createElement('textarea', (0, _extends3.default)({
        id: this.focusId,
        className: 'form-control',
        value: this.state.value,
        onChange: this.onChange,
        placeholder: placeholder,
        rows: '6'
      }, this.props));
    }
  }]);
  return TextEditor;
}(_react2.default.Component);

module.exports = TextEditor;

//