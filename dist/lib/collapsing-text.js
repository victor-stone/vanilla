'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moreOrLessLink = require('./more-or-less-link');

var _moreOrLessLink2 = _interopRequireDefault(_moreOrLessLink);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_PREVIEW_LENGTH = 220; /*eslint "react/no-danger":0 */
/* globals $ */

var CollapsingText = _react2.default.createClass({
  displayName: 'CollapsingText',
  getDefaultProps: function getDefaultProps() {
    return { id: (0, _unicorns.nextId)('_collapsing_text_') };
  },
  getInitialState: function getInitialState() {
    return this.stateFromHTML(this.props.html);
  },
  componentDidMount: function componentDidMount() {
    if (global.IS_SERVER_REQUEST) {
      return;
    }
    var toggleText = function (cmd) {
      $('#' + this.props.id + '-collapse-text-less').collapse(cmd);
    }.bind(this);

    this.isMounted = true;
    $('#' + this.props.id + '-collapse-text-more').on('show.bs.collapse', function () {
      toggleText('hide');return true;
    }).on('hide.bs.collapse', function () {
      toggleText('show');return true;
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (this.props.html !== nextProps.html) {
      this.setState(this.stateFromHTML(nextProps.html));
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (global.IS_SERVER_REQUEST) {
      return;
    }
    this.isMounted = false;
    $('#' + this.props.id + '-collapse-text-more').off('show.bs.collapse').off('hide.bs.collapse');
  },
  stateFromHTML: function stateFromHTML(html) {
    var plain = this._htmlToPlain(html);
    var hideMoreButton = true;
    if (html) {
      if (plain.length > MAX_PREVIEW_LENGTH) {
        plain = plain.substring(0, MAX_PREVIEW_LENGTH) + '...';
        hideMoreButton = false;
      } else {
        plain = '';
      }
    }
    if (!global.IS_SERVER_REQUEST && this.isMounted) {
      $('#' + this.props.id + '-collapse-text-more').collapse(plain ? 'hide' : 'show');
      $('#' + this.props.id + '-collapse-text-less').collapse(plain ? 'show' : 'hide');
    }
    html = { __html: html };
    return { html: html, plain: plain, hideMoreButton: hideMoreButton };
  },
  _htmlToPlain: function _htmlToPlain(html) {
    // TODO: doesn't this hurt SEO??
    if (global.IS_SERVER_REQUEST) {
      return '';
    }
    var div = document.createElement('DIV');
    div.innerHTML = html;
    return div.textContent || div.innerText;
  },
  render: function render() {
    var id = this.props.id;
    var _state = this.state;
    var plain = _state.plain;
    var html = _state.html;
    var hideMoreButton = _state.hideMoreButton;


    var clsPlain = 'plain collapse' + (plain ? ' in' : '');
    var clsHTML = 'htmltext collapse' + (plain ? '' : ' in');
    return _react2.default.createElement(
      'div',
      { className: 'collapse-text' },
      _react2.default.createElement(
        'div',
        { className: clsPlain, id: id + '-collapse-text-less' },
        plain
      ),
      _react2.default.createElement('div', { className: clsHTML, id: id + '-collapse-text-more', dangerouslySetInnerHTML: html }),
      _react2.default.createElement(_moreOrLessLink2.default, { targetId: this.props.id + '-collapse-text-more', hidden: hideMoreButton })
    );
  }
});

module.exports = CollapsingText;

//