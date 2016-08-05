'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineCss = _react2.default.createClass({
  displayName: 'InlineCss',
  componentDidMount: function componentDidMount() {
    if (global.IS_SERVER_REQUEST) {
      return;
    }
    var alreadyHaveIt = document.getElementById(this.props.id);
    if (alreadyHaveIt) {
      return;
    }
    var css = this.props.css;

    var sheet = document.createElement('style');
    sheet.id = this.props.id;
    sheet.setAttribute('type', 'text/css');

    var target = document.body;
    // var taget = document.getElementsByTagName('head')[0];

    target.appendChild(sheet);

    /*
      if (ss1.styleSheet) {   // IE
          ss1.styleSheet.cssText = css;
      } else {                // the world
          var tt1 = document.createTextNode(css);
          ss1.appendChild(tt1);
      }
    */
    sheet.innerHTML = css;
  },
  shouldComponentUpdate: function shouldComponentUpdate() {
    return false;
  },
  componentWillUnmount: function componentWillUnmount() {
    var sheetToBeRemoved = document.getElementById(this.props.id);
    if (sheetToBeRemoved) {
      var sheetParent = sheetToBeRemoved.parentNode;
      sheetParent.removeChild(sheetToBeRemoved);
    }
  },
  render: function render() {
    return null;
  }
}); /* globals document */


module.exports = InlineCss;

//