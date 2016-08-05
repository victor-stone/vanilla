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

var _deadLink = require('./dead-link');

var _deadLink2 = _interopRequireDefault(_deadLink);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditButton = function (_React$Component) {
  (0, _inherits3.default)(EditButton, _React$Component);

  function EditButton() {
    (0, _classCallCheck3.default)(this, EditButton);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(EditButton).apply(this, arguments));
  }

  (0, _createClass3.default)(EditButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$btnType = _props.btnType;
      var btnType = _props$btnType === undefined ? 'default' : _props$btnType;
      var className = _props.className;
      var onEdit = _props.onEdit;


      var cls = (0, _unicorns.selectors)('edit-button btn btn-' + btnType, className);

      return _react2.default.createElement(_deadLink2.default, { className: cls, icon: 'edit', onClick: onEdit });
    }
  }]);
  return EditButton;
}(_react2.default.Component);

module.exports = EditButton;