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

var _formField = require('./form-field');

var _formField2 = _interopRequireDefault(_formField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormType = function (_React$Component) {
  (0, _inherits3.default)(FormType, _React$Component);

  function FormType() {
    (0, _classCallCheck3.default)(this, FormType);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormType).apply(this, arguments));
  }

  (0, _createClass3.default)(FormType, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;

      var cls = (0, _unicorns.selectors)(this.bsSelector, className);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props, { className: cls }),
        this.content,
        children
      );
    }
  }, {
    key: 'content',
    get: function get() {
      return null;
    }
  }]);
  return FormType;
}(_react2.default.Component);

var FormGroup = function (_FormType) {
  (0, _inherits3.default)(FormGroup, _FormType);

  function FormGroup() {
    (0, _classCallCheck3.default)(this, FormGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(FormGroup, [{
    key: 'bsSelector',
    get: function get() {
      return 'form-group';
    }
  }]);
  return FormGroup;
}(FormType);

var HorizontalForm = function (_FormGroup) {
  (0, _inherits3.default)(HorizontalForm, _FormGroup);

  function HorizontalForm() {
    (0, _classCallCheck3.default)(this, HorizontalForm);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HorizontalForm).apply(this, arguments));
  }

  (0, _createClass3.default)(HorizontalForm, [{
    key: 'bsSelector',
    get: function get() {
      return 'form-horizontal';
    }
  }]);
  return HorizontalForm;
}(FormGroup);

var ControlLabel = function (_React$Component2) {
  (0, _inherits3.default)(ControlLabel, _React$Component2);

  function ControlLabel() {
    (0, _classCallCheck3.default)(this, ControlLabel);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ControlLabel).apply(this, arguments));
  }

  (0, _createClass3.default)(ControlLabel, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var nameFor = _props2.nameFor;
      var text = _props2.text;
      var className = _props2.className;
      var children = _props2.children;


      var cls = (0, _unicorns.selectors)('control-label', className);

      return _react2.default.createElement(
        'label',
        { htmlFor: nameFor, className: cls },
        text,
        children
      );
    }
  }]);
  return ControlLabel;
}(_react2.default.Component);

var FormControl = function (_React$Component3) {
  (0, _inherits3.default)(FormControl, _React$Component3);

  function FormControl() {
    (0, _classCallCheck3.default)(this, FormControl);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormControl).apply(this, arguments));
  }

  (0, _createClass3.default)(FormControl, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var children = _props3.children;
      var value = _props3.value;


      var cls = (0, _unicorns.selectors)('form-control', className);

      return _react2.default.createElement(
        'span',
        { className: cls },
        value,
        children
      );
    }
  }]);
  return FormControl;
}(_react2.default.Component);

var StaticControl = function (_React$Component4) {
  (0, _inherits3.default)(StaticControl, _React$Component4);

  function StaticControl() {
    (0, _classCallCheck3.default)(this, StaticControl);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StaticControl).apply(this, arguments));
  }

  (0, _createClass3.default)(StaticControl, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var className = _props4.className;
      var children = _props4.children;
      var value = _props4.value;


      var cls = (0, _unicorns.selectors)('form-control-static', className);

      return _react2.default.createElement(
        'p',
        { className: cls },
        value,
        children
      );
    }
  }]);
  return StaticControl;
}(_react2.default.Component);

var StaticFormGroup = function (_React$Component5) {
  (0, _inherits3.default)(StaticFormGroup, _React$Component5);

  function StaticFormGroup() {
    (0, _classCallCheck3.default)(this, StaticFormGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StaticFormGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(StaticFormGroup, [{
    key: 'render',
    value: function render() {
      var _props5 = this.props;
      var className = _props5.className;
      var title = _props5.title;
      var children = _props5.children;


      return _react2.default.createElement(
        FormGroup,
        { className: className },
        _react2.default.createElement(ControlLabel, { text: title }),
        _react2.default.createElement(
          StaticControl,
          null,
          children
        )
      );
    }
  }]);
  return StaticFormGroup;
}(_react2.default.Component);

var StaticField = function (_React$Component6) {
  (0, _inherits3.default)(StaticField, _React$Component6);

  function StaticField() {
    (0, _classCallCheck3.default)(this, StaticField);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StaticField).apply(this, arguments));
  }

  (0, _createClass3.default)(StaticField, [{
    key: 'render',
    value: function render() {
      var _props6 = this.props;
      var title = _props6.title;
      var text = _props6.text;
      var children = _props6.children;


      return _react2.default.createElement(
        _formField2.default,
        { prefix: { text: title } },
        _react2.default.createElement(
          'span',
          { className: 'form-control' },
          text,
          children
        )
      );
    }
  }]);
  return StaticField;
}(_react2.default.Component);

module.exports = {
  HorizontalForm: HorizontalForm,
  ControlLabel: ControlLabel,
  FormControl: FormControl,
  FormGroup: FormGroup,
  Field: _formField2.default,
  StaticControl: StaticControl,
  StaticField: StaticField,
  StaticFormGroup: StaticFormGroup
};

//