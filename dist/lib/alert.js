'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALERT_TIMEOUT = 5000; /*eslint "react/no-danger":0 */
/* globals $ */


var Alert = _react2.default.createClass({
  displayName: 'Alert',


  getInitialState: function getInitialState() {
    return { type: this.props.type,
      id: this.props.id || 'sys-alert',
      cls: 'alert fade in alert-' + this.props.type + ' ' + (this.props.className || ''),
      text: this.props.text };
  },

  componentDidMount: function componentDidMount() {
    var $e = $('#' + this.state.id);
    $e.show();
    $e.on('close.bs.alert', this.props.onClose);
    if (!this.props.noAutoFade) {
      setTimeout(function () {
        return $e.fadeOut('slow', function () {
          return $e.alert('close');
        });
      }, ALERT_TIMEOUT);
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.setState({ type: props.type, text: props.text });
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    return this.state.text !== nextState.text;
  },
  componentWillUnmount: function componentWillUnmount() {
    var $e = $('#' + this.state.id);
    $e.off('close.bs.alert', this.props.onClose);
  },


  render: function render() {
    if (!this.state.text) {
      return null;
    }
    var times = { __html: '&times;' };
    var text = this.state.text;
    var title = 'Success';
    if (this.state.type === 'warning') {
      title = 'Warning';
    } else if (this.state.type === 'danger') {
      title = 'Danger';
    }
    return _react2.default.createElement(
      'div',
      { className: this.state.cls, id: this.state.id },
      _react2.default.createElement('a', { href: '#', className: 'close', 'data-dismiss': 'alert', dangerouslySetInnerHTML: times }),
      _react2.default.createElement(
        'strong',
        null,
        title
      ),
      ' ',
      text
    );
  }
});

Alert.show = function () /*type,msg*/{
  throw new Error('"Alert.show" was not implemented here - you probably want app/services/Alert');
};

module.exports = Alert;

//