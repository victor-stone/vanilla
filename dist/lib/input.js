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

var _unicorns = require('unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RETURN_KEY = 13;

var Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Input).apply(this, arguments));

    (0, _unicorns.bindAll)(_this, 'onChange', 'onKeyDown', 'doDone');

    var _this$props = _this.props;
    var _this$props$value = _this$props.value;
    var value = _this$props$value === undefined ? '' : _this$props$value;
    var _this$props$id = _this$props.id;
    var id = _this$props$id === undefined ? (0, _unicorns.nextId)('_input') : _this$props$id;


    _this.state = { value: value };

    _this.id = id;
    return _this;
  }

  (0, _createClass3.default)(Input, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProp) {
      this.props.propOwned && this.setState({ value: nextProp.value });
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      !this.props.propOwned && this.setState({ value: event.target.value });
    }
  }, {
    key: 'doDone',
    value: function doDone() {
      this.props.onDone(this.state.value);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === RETURN_KEY) {
        this.doDone();
      }
    }
  }, {
    key: 'input',
    value: function input() {
      return _react2.default.createElement('input', this.inputProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', this.inputProps);
    }
  }, {
    key: 'inputProps',
    get: function get() {
      var _props = this.props;
      var placeholder = _props.placeholder;
      var _props$className = _props.className;
      var className = _props$className === undefined ? '' : _props$className;
      var _props$size = _props.size;
      var size = _props$size === undefined ? Input.DEFAULT_INPUT_SIZE : _props$size;
      var _props$id = _props.id;
      var id = _props$id === undefined ? this.id : _props$id;
      var value = this.state.value;


      return {

        id: id,
        size: size,
        value: value,
        placeholder: placeholder,

        ref: 'input',
        type: 'text',
        className: (0, _unicorns.selectors)('form-control', className),
        onChange: this.onChange,
        onKeyDown: this.onKeyDown

      };
    }
  }]);
  return Input;
}(_react2.default.Component);

Input.DEFAULT_INPUT_SIZE = 30;

Input.propTypes = {
  onDone: _react2.default.PropTypes.func.isRequired
};

module.exports = Input;