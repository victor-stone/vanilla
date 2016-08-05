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

var _buttonGroups = require('./button-groups');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputGroup = function (_React$Component) {
  (0, _inherits3.default)(InputGroup, _React$Component);

  function InputGroup() {
    (0, _classCallCheck3.default)(this, InputGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InputGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(InputGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;

      var cls = (0, _unicorns.selectors)(this.bsSelector, className);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, this.props, { className: cls }),
        children
      );
    }
  }, {
    key: 'bsSelector',
    get: function get() {
      var _props$sz = this.props.sz;
      var sz = _props$sz === undefined ? 'sm' : _props$sz;


      return (0, _unicorns.selectors)('input-group', sz ? 'input-group-' + sz : '');
    }
  }]);
  return InputGroup;
}(_react2.default.Component);

var Field = function (_React$Component2) {
  (0, _inherits3.default)(Field, _React$Component2);

  function Field() {
    (0, _classCallCheck3.default)(this, Field);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Field).apply(this, arguments));
  }

  (0, _createClass3.default)(Field, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var id = _props2.id;
      var sz = _props2.sz;
      var prefix = _props2.prefix;
      var postfix = _props2.postfix;
      var className = _props2.className;
      var children = _props2.children;
      var title = _props2.title;


      title && (prefix = [{ text: title }]);

      return _react2.default.createElement(
        InputGroup,
        { id: id, sz: sz, className: className },
        prefix && _react2.default.createElement(_buttonGroups.InputGroupAddon, { addons: prefix }),
        this.control,
        children,
        postfix && _react2.default.createElement(_buttonGroups.InputGroupAddon, { addons: postfix })
      );
    }
  }, {
    key: 'control',
    get: function get() {
      return null;
    }
  }]);
  return Field;
}(_react2.default.Component);

Field.propTypes = {

  prefix: _buttonGroups.FieldAdornment,
  postfix: _buttonGroups.FieldAdornment,

  // if you send a 'title' then 'prefix' is ignored
  title: _react2.default.PropTypes.string,

  sz: _react2.default.PropTypes.oneOf(['sm', 'md', 'lg'])

};

module.exports = Field;

//