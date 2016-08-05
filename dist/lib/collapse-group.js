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

// http://stackoverflow.com/questions/19425165/bootstrap-3-accordion-button-toggle-data-parent-not-working

/*
    Because of a bug/feature in bootstrap the 'sometarget' has to be an immediate child of "panel"
    and, in turn, "panel" has to be an immediate child of 'someparent'. 
    
    <ul id="someparent">
      <li class="panel">
          <a data-target="#sometarget" data-toggle="collapse" data-parent="#someparent">click me</a>
          <div id="sometarget" class="collapse">
          </div>
      </li>
    </ul>

  */

function CollapseToggle(props) {
  var group = props.group;
  var target = props.target;
  var className = props.className;
  var text = props.text;

  return _react2.default.createElement(
    'a',
    { href: '#' + target, className: className, 'data-toggle': 'collapse', 'data-parent': '#' + group },
    text
  );
}

var CollapseTarget = function (_React$Component) {
  (0, _inherits3.default)(CollapseTarget, _React$Component);

  function CollapseTarget() {
    (0, _classCallCheck3.default)(this, CollapseTarget);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CollapseTarget).apply(this, arguments));

    _this.state = { show: false };
    _this._stateCallback = _this._stateCallback.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CollapseTarget, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      /* global $ */
      $('#' + this.props.target).on('show.bs.collapse', function () {
        return _this2._stateCallback(true);
      }).on('hide.bs.collapse', function () {
        return _this2._stateCallback(false);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      $('#' + this.props.target).off('show.bs.collapse', function () {
        return _this3._stateCallback(true);
      }).off('hide.bs.collapse', function () {
        return _this3._stateCallback(false);
      });
    }
  }, {
    key: '_stateCallback',
    value: function _stateCallback(show) {
      this.setState({ show: show });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: this.props.target, className: 'collapse' },
        this.state.show && this.props.children
      );
    }
  }]);
  return CollapseTarget;
}(_react2.default.Component);

module.exports = {
  Toggle: CollapseToggle,
  Target: CollapseTarget
};