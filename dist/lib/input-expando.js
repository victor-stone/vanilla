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

var _formField = require('./form-field');

var _formField2 = _interopRequireDefault(_formField);

var _unicorns = require('unicorns');

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _inlineCss = require('./inline-css');

var _inlineCss2 = _interopRequireDefault(_inlineCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_WIDTH = 100; /* globals $ */

var MIN_WIDTH = 8;

var makeCSS = function makeCSS(id) {
  return '\n#' + id + ' {\n  width: ' + MIN_WIDTH + 'px;\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n#search-form {\n  float: right;\n  margin-top: 5px;\n  margin-right: 8px;\n}\n\n#search-form .input-group-btn {\n  display: inline-block;\n}\n';
};

var InputExpando = function (_React$Component) {
  (0, _inherits3.default)(InputExpando, _React$Component);

  function InputExpando() {
    (0, _classCallCheck3.default)(this, InputExpando);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InputExpando).apply(this, arguments));

    (0, _unicorns.bindAll)(_this, 'onOpen', 'onClose');

    _this.state = {
      open: false
    };

    var _this$props$id = _this.props.id;
    _this.id = _this$props$id === undefined ? (0, _unicorns.nextId)('_expando_') : _this$props$id;
    return _this;
  }

  (0, _createClass3.default)(InputExpando, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      var UPDATE_DELAY = 200;
      this.state.opening && setTimeout(function () {
        return _this2.performOpen();
      }, UPDATE_DELAY);
    }
  }, {
    key: 'performOpen',
    value: function performOpen() {
      var _this3 = this;

      this.setState({ opening: false, open: true }, function () {
        return $('#' + _this3.id).animate({ width: MAX_WIDTH });
      });
    }
  }, {
    key: 'onOpen',
    value: function onOpen() {
      this.setState({ opening: true });
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      var _this4 = this;

      $('#' + this.id).animate({ width: MIN_WIDTH }, function () {
        _this4.setState({ open: false });
      });
      this.props.onCancel && this.props.onCancel();
    }
  }, {
    key: 'render',
    value: function render() {
      var open = this.state.open;


      var postfix = open ? [{ icon: 'search', onClick: this.props.onDone }, { icon: 'times', onClick: this.onClose }] : [{ icon: 'search', onClick: this.onOpen }];
      return _react2.default.createElement(
        _formField2.default,
        { id: 'search-form', postfix: postfix },
        _react2.default.createElement(_inlineCss2.default, { css: makeCSS(this.id), id: this.id + '-css' }),
        _react2.default.createElement(_input2.default, (0, _extends3.default)({ id: this.id, placeholder: 'search term' }, this.props))
      );
    }
  }]);
  return InputExpando;
}(_react2.default.Component);

module.exports = InputExpando;