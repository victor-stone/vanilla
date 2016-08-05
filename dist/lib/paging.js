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

var _pagingStats2 = require('./paging-stats');

var _pagingStats3 = _interopRequireDefault(_pagingStats2);

var _deadLink = require('./dead-link');

var _deadLink2 = _interopRequireDefault(_deadLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: don't assume that ?offset= is the proper URL formation

var PagerLink = function (_React$Component) {
  (0, _inherits3.default)(PagerLink, _React$Component);

  function PagerLink() {
    (0, _classCallCheck3.default)(this, PagerLink);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PagerLink).apply(this, arguments));

    _this.state = _this._stateFromProps(_this.props);

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PagerLink, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState(this._stateFromProps(newProps));
    }
  }, {
    key: '_stateFromProps',
    value: function _stateFromProps(props) {
      var show = props.show;
      var offset = props.offset;


      return { href: show ? '?offset=' + offset : '#' };
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var href = this.state.href;
      var _props = this.props;
      var newOffset = _props.newOffset;
      var offset = _props.offset;

      // it seems this link happens
      // on phones even when disabled

      href !== '#' && newOffset(offset);
    }
  }, {
    key: 'render',
    value: function render() {
      var href = this.state.href;
      var _props2 = this.props;
      var icon = _props2.icon;
      var show = _props2.show;


      var cls = show ? '' : 'disabled';

      return _react2.default.createElement(
        'li',
        { className: cls },
        _react2.default.createElement(_deadLink2.default, { x2: true, icon: icon, href: href, onClick: this.onClick })
      );
    }
  }]);
  return PagerLink;
}(_react2.default.Component);

function Paging(props) {
  var _pagingStats = (0, _pagingStats3.default)(props.stats);

  var total = _pagingStats.total;
  var shouldShow = _pagingStats.shouldShow;
  var showFirst = _pagingStats.showFirst;
  var showPrev = _pagingStats.showPrev;
  var showNext = _pagingStats.showNext;
  var showLast = _pagingStats.showLast;
  var prevValue = _pagingStats.prevValue;
  var nextValue = _pagingStats.nextValue;
  var lastPage = _pagingStats.lastPage;
  var printableOffset = _pagingStats.printableOffset;
  var printableLastValue = _pagingStats.printableLastValue;
  var printableTotal = _pagingStats.printableTotal;


  var cls = 'paging' + (total > 0 ? '' : ' hidden');
  var cls2 = 'pagination' + (shouldShow ? '' : ' hidden');

  return _react2.default.createElement(
    'div',
    { className: cls },
    _react2.default.createElement(
      'ul',
      { className: cls2 },
      _react2.default.createElement(PagerLink, { newOffset: props.onNewOffset, offset: '0', show: showFirst, icon: 'angle-double-left' }),
      _react2.default.createElement(PagerLink, { newOffset: props.onNewOffset, offset: prevValue, show: showPrev, icon: 'arrow-left' }),
      _react2.default.createElement(PagerLink, { newOffset: props.onNewOffset, offset: nextValue, show: showNext, icon: 'arrow-right' }),
      _react2.default.createElement(PagerLink, { newOffset: props.onNewOffset, offset: lastPage, show: showLast, icon: 'angle-double-right' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'paging-caption center-text' },
      printableOffset + ' - ' + printableLastValue + ' of ' + printableTotal
    ),
    props.children
  );
}

module.exports = Paging;