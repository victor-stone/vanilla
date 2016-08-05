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

var _deadLink = require('./dead-link');

var _deadLink2 = _interopRequireDefault(_deadLink);

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fixGlyphAlignment() {
  // the glyphs in button groups on are not middled 
  // we have to set the line height of the <i> tag
  // to be same as their parents' height to align them
  // vertically

  /* globals $ */
  var height = $('.input-group-btn').height();
  height = $('.input-group-btn .btn').css({ height: height + 'px' }).height();
  $('.input-group-btn .btn i.fa').css({ lineHeight: height + 'px' });
}

/*
  {
    icon,
    text,
    onClick, <-- implies btn
    className,
    btnType,
  }

  Order of priority:
    children -> button -> icon -> text
*/

var _BtnGroup = function (_React$Component) {
  (0, _inherits3.default)(_BtnGroup, _React$Component);

  function _BtnGroup() {
    (0, _classCallCheck3.default)(this, _BtnGroup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(_BtnGroup).apply(this, arguments));

    _this.id = _this.props.id || (0, _unicorns.nextId)('_ida_');
    return _this;
  }

  (0, _createClass3.default)(_BtnGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var addons = _props.addons;
      var className = _props.className;


      !Array.isArray(addons) && (addons = [addons]);

      var cls = this._selectors(addons, className);

      var content = addons.map(function (_ref, key) {
        var icon = _ref.icon;
        var text = _ref.text;
        var _ref$btnType = _ref.btnType;
        var btnType = _ref$btnType === undefined ? 'default' : _ref$btnType;
        var onClick = _ref.onClick;


        var btnClass = onClick && (0, _unicorns.selectors)('btn', btnType ? 'btn-' + btnType : '');

        return onClick ? _react2.default.createElement(_deadLink2.default, { key: key, onClick: onClick, className: btnClass, icon: icon, text: text }) : icon ? _react2.default.createElement(_glyph2.default, { key: key, icon: icon }) : _react2.default.createElement(
          'span',
          { key: key },
          text
        );
      });

      return _react2.default.createElement(
        'span',
        { className: cls },
        content
      );
    }
  }]);
  return _BtnGroup;
}(_react2.default.Component);

var InputGroupAddon = function (_BtnGroup2) {
  (0, _inherits3.default)(InputGroupAddon, _BtnGroup2);

  function InputGroupAddon() {
    (0, _classCallCheck3.default)(this, InputGroupAddon);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InputGroupAddon).apply(this, arguments));
  }

  (0, _createClass3.default)(InputGroupAddon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.onClick && this.props.icon && 0) {
        fixGlyphAlignment(this.id);
      }
    }
  }, {
    key: '_selectors',
    value: function _selectors(addons, className) {
      var hasButtons = !!addons.find(function (p) {
        return !!p.onClick;
      });

      return (0, _unicorns.selectors)(hasButtons ? 'input-group-btn' : 'input-group-addon', className);
    }
  }]);
  return InputGroupAddon;
}(_BtnGroup);

var ButtonGroup = function (_BtnGroup3) {
  (0, _inherits3.default)(ButtonGroup, _BtnGroup3);

  function ButtonGroup() {
    (0, _classCallCheck3.default)(this, ButtonGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonGroup, [{
    key: '_selectors',
    value: function _selectors(addons, className) {
      return (0, _unicorns.selectors)('btn-group', className);
    }
  }]);
  return ButtonGroup;
}(_BtnGroup);

var InputAddOnSpec = _react2.default.PropTypes.oneOfType([

// button
_react2.default.PropTypes.shape({
  icon: _react2.default.PropTypes.string,
  text: _react2.default.PropTypes.string,
  btnType: _react2.default.PropTypes.oneOf(['default', 'success', 'danger', 'warning']),
  onClick: _react2.default.PropTypes.func,
  className: _react2.default.PropTypes.string
}),

// glyph only
_react2.default.PropTypes.shape({
  icon: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
}),

// label
_react2.default.PropTypes.shape({
  text: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string
})]);

var FieldAdornment = _react2.default.PropTypes.oneOfType([InputAddOnSpec, _react2.default.PropTypes.arrayOf(InputAddOnSpec)]);

_BtnGroup.propTypes = {
  addons: FieldAdornment
};

module.exports = {
  InputGroupAddon: InputGroupAddon,
  ButtonGroup: ButtonGroup,
  FieldAdornment: FieldAdornment
};

//