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

/* globals $ */
var ONE_HUNDRED = 100;

function genPips(numPips) {
  var pips = [];
  for (var i = 0; i < numPips; i++) {
    pips.push(ONE_HUNDRED / numPips * i);
  }
  pips.push(ONE_HUNDRED);
  return pips;
}

var Slider = function (_React$Component) {
  (0, _inherits3.default)(Slider, _React$Component);

  function Slider() {
    (0, _classCallCheck3.default)(this, Slider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Slider).apply(this, arguments));

    _this.state = { value: _this.props.value || _this.props.min };

    _this.id = (0, _unicorns.nextId)('_slider_');

    var _this$props$debounceD = _this.props.debounceDelay;
    var debounceDelay = _this$props$debounceD === undefined ? 0 : _this$props$debounceD;


    if (debounceDelay) {
      _this.onSlide = (0, _unicorns.debounce)(_this.props.onSlide, debounceDelay);
    } else {
      _this.onSlide = _this.props.onSlide;
    }
    return _this;
  }

  (0, _createClass3.default)(Slider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var min = _props.min;
      var max = _props.max;
      var numPips = _props.numPips;
      var steps = _props.steps;
      var density = _props.density;
      var value = this.state.value;


      var slider = document.getElementById(this.id);

      window.noUiSlider.create(slider, {
        start: value,
        step: steps,
        connect: 'lower',
        pips: {
          density: density,
          mode: 'positions',
          values: genPips(numPips)
        },
        range: { min: min, max: max }
      });

      slider.noUiSlider.on('slide', this.onSlide);
      slider.noUiSlider.set(value);
      $('.noUi-pips-horizontal div:nth-child(2)').html('all');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({ value: props.value });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var nus = document.getElementById(this.id).noUiSlider;
      nus.set(this.state.value);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var nus = document.getElementById(this.id).noUiSlider;
      nus.off('slide');
      nus.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var containerClass = this.props.containerClass;


      return _react2.default.createElement(
        'div',
        { className: containerClass },
        _react2.default.createElement('div', { id: this.id })
      );
    }
  }]);
  return Slider;
}(_react2.default.Component);

module.exports = Slider;