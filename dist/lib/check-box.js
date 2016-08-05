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

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckBox = function (_React$Component) {
  (0, _inherits3.default)(CheckBox, _React$Component);

  function CheckBox() {
    (0, _classCallCheck3.default)(this, CheckBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckBox).apply(this, arguments));

    _this.state = { checked: _this.props.checked };
    _this.id = _this.props.id || (0, _unicorns.nextId)('_check_box_');
    return _this;
  }

  (0, _createClass3.default)(CheckBox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ checked: nextProps.checked });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.checked !== nextState.checked;
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.props.onChecked(!this.state.checked);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'label',
        { className: 'form-control', htmlFor: this.id },
        "only unmixed ",
        _react2.default.createElement('input', { onChange: this.onChange,
          checked: this.state.checked,
          id: this.id,
          type: 'checkbox'
        })
      );
    }
  }]);
  return CheckBox;
}(_react2.default.Component);

module.exports = CheckBox;