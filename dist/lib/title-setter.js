'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleSetter = _react2.default.createClass({
  displayName: 'TitleSetter',


  componentWillMount: function componentWillMount() {
    if (!global.IS_SERVER_REQUEST && this.props.title) {
      this.setState({ title: this.props.title });
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.setState({ title: props.title });
  },


  render: function render() {
    /* globals $ */
    if (!global.IS_SERVER_REQUEST && this.props.title) {
      $('head').find('title').text(this.state.title);
    }
    return null;
  }
});

module.exports = TitleSetter;