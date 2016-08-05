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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: don't assume 10, 20, 40, etc.

var PagingLimit = function (_React$Component) {
  (0, _inherits3.default)(PagingLimit, _React$Component);

  function PagingLimit() {
    (0, _classCallCheck3.default)(this, PagingLimit);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PagingLimit).apply(this, arguments));

    _this.state = { limit: _this.props.limit };
    _this.onSelect = _this.onSelect.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PagingLimit, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ limit: nextProps.limit });
    }
  }, {
    key: 'onSelect',
    value: function onSelect() {
      this.props.onLimitChange(this.refs['limit'].value);
    }
  }, {
    key: 'render',
    value: function render() {
      var cls = 'limit-label ' + (this.props.className || '');
      var opts = [];
      //var limit = this.state.limit + '';
      ['10', '20', '40'].forEach(function (value) {
        opts.push(_react2.default.createElement(
          'option',
          { key: value, value: value },
          value
        ));
      });

      return _react2.default.createElement(
        'label',
        { className: cls },
        "display ",
        _react2.default.createElement(
          'select',
          { ref: 'limit', id: 'limit', value: this.state.limit, onChange: this.onSelect },
          opts
        )
      );
    }
  }]);
  return PagingLimit;
}(_react2.default.Component);

module.exports = PagingLimit;