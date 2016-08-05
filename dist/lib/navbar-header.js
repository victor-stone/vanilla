"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarHeader = _react2.default.createClass({
  displayName: "NavbarHeader",

  render: function render() {
    var HomeLink = this.props.homeLink;
    return _react2.default.createElement(
      "div",
      { className: "navbar-header" },
      _react2.default.createElement(
        "button",
        { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#dig-collapse", "aria-expanded": "false" },
        _react2.default.createElement(
          "span",
          { className: "sr-only" },
          "Toggle navigation"
        ),
        _react2.default.createElement("span", { className: "icon-bar" }),
        _react2.default.createElement("span", { className: "icon-bar" }),
        _react2.default.createElement("span", { className: "icon-bar" })
      ),
      HomeLink
    );
  }
});

module.exports = NavbarHeader;