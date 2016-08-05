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

var _inputWithIcon = require('./input-with-icon');

var _inputWithIcon2 = _interopRequireDefault(_inputWithIcon);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchBox = function (_React$Component) {
  (0, _inherits3.default)(SearchBox, _React$Component);

  function SearchBox() {
    (0, _classCallCheck3.default)(this, SearchBox);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SearchBox).apply(this, arguments));

    _this.onDone = _this._notify.bind(_this, 'onDone');
    _this.onEdit = _this._notify.bind(_this, 'onEdit');
    return _this;
  }

  (0, _createClass3.default)(SearchBox, [{
    key: '_notify',
    value: function _notify(meth, value) {
      var text = (0, _unicorns.cleanSearchString)(value);
      text && this.props[meth] && this.props[meth](text);
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      this.onEdit(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_inputWithIcon2.default, (0, _extends3.default)({ icon: 'search' }, this.props, { onChange: this.onChange.bind(this), onDone: this.onDone }));
    }
  }]);
  return SearchBox;
}(_react2.default.Component);

module.exports = SearchBox;