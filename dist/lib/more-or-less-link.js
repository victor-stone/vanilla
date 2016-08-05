'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoreOrLessLink = _react2.default.createClass({
  displayName: 'MoreOrLessLink',
  getInitialState: function getInitialState() {
    return { showLess: false };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    /* globals $ */
    $('#' + this.props.targetId).on('show.bs.collapse', function () {
      return _this.fooler(true);
    }).on('hide.bs.collapse', function () {
      return _this.fooler(false);
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    $('#' + this.props.targetId).off('show.bs.collapse').off('hide.bs.collapse');
  },
  fooler: function fooler(showLess) {
    this.setState({ showLess: showLess });
  },
  render: function render() {
    var icon = this.state.showLess ? 'chevron-left' : 'chevron-right';
    var _props = this.props;
    var targetId = _props.targetId;
    var hidden = _props.hidden;

    var id = '#' + targetId;
    var cls = (0, _unicorns.selectors)('more-or-less-link', hidden ? 'hidden' : '');
    return _react2.default.createElement(
      'a',
      { className: cls, 'data-toggle': 'collapse', href: id },
      _react2.default.createElement(_glyph2.default, { icon: icon }),
      _react2.default.createElement(_glyph2.default, { icon: icon }),
      _react2.default.createElement(_glyph2.default, { icon: icon })
    );
  }
});

module.exports = MoreOrLessLink;

//