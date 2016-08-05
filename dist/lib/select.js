'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var Select = function (_React$Component) {
  (0, _inherits3.default)(Select, _React$Component);

  function Select() {
    (0, _classCallCheck3.default)(this, Select);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Select).apply(this, arguments));

    _this.onSelect = _this.onSelect.bind(_this);
    var options = _this.props.options;

    _this.options = (0, _keys2.default)(options).map(function (k) {
      return _react2.default.createElement(
        'option',
        { key: k, value: k },
        options[k]
      );
    });
    _this.state = { value: _this.props.value };
    return _this;
  }

  (0, _createClass3.default)(Select, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.value !== nextProps.value) {
        this.setState({ value: nextProps.value });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.value !== nextState.value;
    }
  }, {
    key: 'onSelect',
    value: function onSelect(e) {
      this.props.onSelect && this.props.onSelect(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var _props$id = _props.id;
      var id = _props$id === undefined ? 'vanilla-select' : _props$id;


      var cls = (0, _unicorns.selectors)('form-control', className);

      return _react2.default.createElement(
        'select',
        { value: this.state.value, onChange: this.onSelect, className: cls, id: id },
        this.options
      );
    }
  }]);
  return Select;
}(_react2.default.Component);

module.exports = Select;