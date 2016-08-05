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

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

var _deadLink = require('./dead-link');

var _deadLink2 = _interopRequireDefault(_deadLink);

var _unicorns = require('../unicorns');

var _ajaxLoadingGlyph = require('../services/ajax-loading-glyph');

var _ajaxLoadingGlyph2 = _interopRequireDefault(_ajaxLoadingGlyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionButton = function (_React$Component) {
  (0, _inherits3.default)(AccordionButton, _React$Component);

  function AccordionButton() {
    (0, _classCallCheck3.default)(this, AccordionButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AccordionButton).apply(this, arguments));

    _this.state = { open: _this.props.open };
    (0, _unicorns.bindAll)(_this, '_doOpen', '_doClose');
    return _this;
  }

  (0, _createClass3.default)(AccordionButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (global.IS_SERVER_REQUEST) {
        return;
      }

      this.setUpEvents();
    }
  }, {
    key: 'componenWillUnmount',
    value: function componenWillUnmount() {
      $('#' + this.props.id).off('show.bs.collapse', this._doOpen).off('hide.bs.collapse', this._doClose);
    }
  }, {
    key: 'setUpEvents',
    value: function setUpEvents() {
      $('#' + this.props.id).on('show.bs.collapse', this._doOpen).on('hide.bs.collapse', this._doClose);
    }
  }, {
    key: '_doOpen',
    value: function _doOpen() {
      this.setState({ open: true });
      if (this.props.onOpen) {
        this.props.onOpen();
      }
    }
  }, {
    key: '_doClose',
    value: function _doClose() {
      this.setState({ open: false });
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var style = { float: 'right', display: 'block' };
      var icon = this.state.open ? 'caret-down' : 'caret-up';

      return _react2.default.createElement(
        'a',
        { style: style, 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#' + this.props.id },
        _react2.default.createElement(_glyph2.default, { icon: icon })
      );
    }
  }]);
  return AccordionButton;
}(_react2.default.Component);

// TODO: #accordion should be property.id

/* globals $*/


var AccordionPanel = function (_React$Component2) {
  (0, _inherits3.default)(AccordionPanel, _React$Component2);

  function AccordionPanel(props) {
    (0, _classCallCheck3.default)(this, AccordionPanel);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AccordionPanel).call(this, props));

    var _this2$props = _this2.props;
    var disabled = _this2$props.disabled;
    var _this2$props$open = _this2$props.open;
    var open = _this2$props$open === undefined ? false : _this2$props$open;

    _this2.state = { disabled: disabled, open: open };
    (0, _unicorns.bindAll)(_this2, 'onOpen', 'onClose');
    return _this2;
  }

  (0, _createClass3.default)(AccordionPanel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.setState({ disabled: nextProps.disabled, beenOpened: false }, function () {
        if (_this3.state.open && nextProps.disabled) {
          $('#' + _this3.props.id).collapse('hide');
        }
      });
    }
  }, {
    key: 'onOpen',
    value: function onOpen() {
      if (this.props.onOpen) {
        this.props.onOpen();
      }
      this.setState({ open: true });
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      if (this.props.onClose) {
        this.props.onClose();
      }
      this.setState({ open: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var disabled = _state.disabled;
      var open = _state.open;
      var _props = this.props;
      var className = _props.className;
      var id = _props.id;
      var icon = _props.icon;
      var headerContent = _props.headerContent;
      var title = _props.title;
      var children = _props.children;

      var clsChild = (0, _unicorns.selectors)(className, 'panel-body');
      var cls = (0, _unicorns.selectors)('panel-collapse collapse', !disabled && open ? ' in' : '');

      return _react2.default.createElement(
        'div',
        { className: 'panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading', id: id + '_heading' },
          _react2.default.createElement(
            'h4',
            { className: 'panel-title' },
            !disabled && _react2.default.createElement(AccordionButton, { id: id, open: open, onClose: this.onClose, onOpen: this.onOpen }),
            _react2.default.createElement(_glyph2.default, { icon: icon }),
            _react2.default.createElement(
              'span',
              { className: 'heading_spacer' },
              " "
            ),
            this.state.disabled ? _react2.default.createElement(
              _deadLink2.default,
              null,
              title
            ) : _react2.default.createElement(
              'a',
              { 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#' + id },
              title
            ),
            headerContent
          )
        ),
        _react2.default.createElement(
          'div',
          { id: id, className: cls },
          _react2.default.createElement(_ajaxLoadingGlyph2.default, { color: 'black' }),
          this.state.open ? _react2.default.createElement(
            'div',
            { className: clsChild },
            children
          ) : null
        )
      );
    }
  }]);
  return AccordionPanel;
}(_react2.default.Component);

var Accordion = function (_React$Component3) {
  (0, _inherits3.default)(Accordion, _React$Component3);

  function Accordion() {
    (0, _classCallCheck3.default)(this, Accordion);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Accordion).apply(this, arguments));
  }

  (0, _createClass3.default)(Accordion, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var children = _props2.children;
      var withExpandAll = _props2.withExpandAll;
      var _props2$id = _props2.id;
      var id = _props2$id === undefined ? 'selector' : _props2$id;

      return _react2.default.createElement(
        'div',
        { id: id, className: 'panel-group' },
        withExpandAll && _react2.default.createElement(AccordionExpandAll, { className: 'expand-all', selector: '#' + id + ' .collapse' }),
        children
      );
    }
  }]);
  return Accordion;
}(_react2.default.Component);

var AccordionExpandAll = function (_React$Component4) {
  (0, _inherits3.default)(AccordionExpandAll, _React$Component4);

  function AccordionExpandAll() {
    (0, _classCallCheck3.default)(this, AccordionExpandAll);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AccordionExpandAll).apply(this, arguments));

    _this5.onExpandAll = _this5.onExpandAll.bind(_this5);
    _this5.state = { isOpen: false };
    return _this5;
  }

  (0, _createClass3.default)(AccordionExpandAll, [{
    key: 'onExpandAll',
    value: function onExpandAll() {
      /* globals $ */
      var isOpen = this.state.isOpen;

      var cmd = isOpen ? 'hide' : 'show';
      $(this.props.selector).collapse(cmd);
      this.setState({ isOpen: !isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var isOpen = this.state.isOpen;

      var icon = isOpen ? 'angle-double-down' : 'angle-double-up';
      var text = isOpen ? 'close all' : 'expand all';
      return _react2.default.createElement(_deadLink2.default, { className: this.props.className, icon: icon, text: text, onClick: this.onExpandAll });
    }
  }]);
  return AccordionExpandAll;
}(_react2.default.Component);

module.exports = {
  AccordionPanel: AccordionPanel,
  Accordion: Accordion,
  AccordionExpandAll: AccordionExpandAll
};

//