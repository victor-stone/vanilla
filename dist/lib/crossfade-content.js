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

var DEFAULT_FADE_DURATION = 250;

var CrossfadeContent = function (_React$Component) {
  (0, _inherits3.default)(CrossfadeContent, _React$Component);

  function CrossfadeContent() {
    (0, _classCallCheck3.default)(this, CrossfadeContent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CrossfadeContent).apply(this, arguments));

    _this.state = { elem: _this.props.elem };
    _this.id = (0, _unicorns.nextId)('fade-group-');
    return _this;
  }

  (0, _createClass3.default)(CrossfadeContent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.elemName !== nextProps.elemName) {
        this.toggleShow(nextProps.elem);
      }
    }
  }, {
    key: 'toggleShow',
    value: function toggleShow(elem) {
      var _this2 = this;

      var duration = this.props.duration || DEFAULT_FADE_DURATION;
      /* globals $ */
      var $e = $('#' + this.id);
      $e.fadeOut(duration, function () {
        _this2.setState({ elem: elem }, function () {
          $e.fadeIn(duration);$('#' + _this2.id + ' button').blur();
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: this.id },
        this.state.elem
      );
    }
  }]);
  return CrossfadeContent;
}(_react2.default.Component);

module.exports = CrossfadeContent;

//