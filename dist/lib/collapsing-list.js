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

var _moreOrLessLink = require('./more-or-less-link');

var _moreOrLessLink2 = _interopRequireDefault(_moreOrLessLink);

var _inlineCss = require('./inline-css');

var _inlineCss2 = _interopRequireDefault(_inlineCss);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = '\n.collapse-list-head {\n  margin-bottom: 0px;\n}\n.collapse-list-tail {\n  margin-top: 0px;\n}\n';

var DEFAULT_MAX_SHOW = 3;

var CollapsingList = function (_React$Component) {
  (0, _inherits3.default)(CollapsingList, _React$Component);

  function CollapsingList() {
    (0, _classCallCheck3.default)(this, CollapsingList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CollapsingList).apply(this, arguments));

    _this.id = (0, _unicorns.nextId)('collapsing-list-');
    (0, _unicorns.bindAll)(_this, 'listElement');
    return _this;
  }

  (0, _createClass3.default)(CollapsingList, [{
    key: 'listElement',
    value: function listElement(model, key) {
      return _react2.default.createElement(
        'li',
        { key: key },
        "dervied class didn't implement listElement"
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var model = this.props.model;
      var max = this.props.max || DEFAULT_MAX_SHOW;
      var head = model.slice(0, max);
      var tail = model.slice(max - 1); // this.state.showLess === 'more' ? model.slice(max-1) : [];
      var showLink = model.length > max;
      var id = 'tail_' + this.id;

      return _react2.default.createElement(
        'div',
        { className: this.props.className, 'data-parent': '#' + id },
        _react2.default.createElement(_inlineCss2.default, { css: css, id: 'collapse-list-css' }),
        _react2.default.createElement(
          'ul',
          { className: 'collapse-list-head' },
          head.map(this.listElement)
        ),
        _react2.default.createElement(
          'ul',
          { className: 'collapse-list-tail collapse', id: id },
          tail.map(this.listElement)
        ),
        showLink && _react2.default.createElement(_moreOrLessLink2.default, { targetId: id })
      );
    }
  }]);
  return CollapsingList;
}(_react2.default.Component);

module.exports = CollapsingList;

//