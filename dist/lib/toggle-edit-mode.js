'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _formField = require('./form-field');

var _formField2 = _interopRequireDefault(_formField);

var _buttonGroups = require('./button-groups');

var _editButton = require('./edit-button');

var _editButton2 = _interopRequireDefault(_editButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleEditMode = function (_React$Component) {
  (0, _inherits3.default)(ToggleEditMode, _React$Component);

  //----------- Edit State -----------------------//

  function ToggleEditMode() {
    (0, _classCallCheck3.default)(this, ToggleEditMode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ToggleEditMode).apply(this, arguments));

    _this.state = { editing: false };

    var _esh = function _esh(name) {
      var state = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
      return _this._onEditState.bind(_this, name, state);
    };

    _this._addons = {
      done: { icon: 'check', onClick: _esh('onDone', false) },
      cancel: { icon: 'times', onClick: _esh('onCancel', false) },
      edit: { icon: 'edit', onClick: _esh('onEdit', true) }
    };
    return _this;
  }

  /*
    Derived classes should call here first because the user
    has flipped modes so any other state is probably stale.
  */


  (0, _createClass3.default)(ToggleEditMode, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.isSwitchEditMode(nextState);
    }
  }, {
    key: 'isSwitchEditMode',
    value: function isSwitchEditMode(nextState) {
      return this.state.editing ^ nextState.editing;
    }
  }, {
    key: '_onEditState',
    value: function _onEditState(meth, editing) {
      var _this2 = this;

      this.setState({ editing: editing }, function () {
        _this2[meth] && _this2[meth]();
        _this2.props[meth] && _this2.props[meth]();
        _this2.onEditState && _this2.onEditState(editing);
        _this2.props.onEditState && _this2.props.onEditState(editing);
      });
    }
  }, {
    key: 'render',


    //----------- Render -----------------------//

    value: function render() {
      var _props = this.props;
      var _props$canEdit = _props.canEdit;
      var canEdit = _props$canEdit === undefined ? this.canEdit : _props$canEdit;
      var _props$title = _props.title;
      var title = _props$title === undefined ? this.title : _props$title;
      var stickyOpen = _props.stickyOpen;


      var showEdit = stickyOpen || canEdit && this.state.editing;

      var ElementMeta = showEdit ? this.editModeElement : this.staticModeElement;

      return _react2.default.createElement(ElementMeta.Element, (0, _extends3.default)({}, ElementMeta.props, { title: title, addons: this.addons }));
    }
  }, {
    key: 'addons',
    get: function get() {
      var _state$editing = this.state.editing;
      var editing = _state$editing === undefined ? false : _state$editing;


      return editing ? [this._addons.done, this._addons.cancel] : [this._addons.edit];
    }
  }, {
    key: 'canEdit',
    get: function get() {
      return this._canEdit;
    },
    set: function set(val) {
      this._canEdit = val;
    }

    //----------- wrappers override these -----------------------//

  }, {
    key: 'editModeElement',
    get: function get() {
      return undefined;
    }
  }, {
    key: 'staticModeElement',
    get: function get() {
      return undefined;
    }
  }, {
    key: 'title',
    get: function get() {
      return undefined;
    }
  }]);
  return ToggleEditMode;
}(_react2.default.Component);

var ToggleEditModeStatic = function (_ToggleEditMode) {
  (0, _inherits3.default)(ToggleEditModeStatic, _ToggleEditMode);

  function ToggleEditModeStatic() {
    (0, _classCallCheck3.default)(this, ToggleEditModeStatic);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ToggleEditModeStatic).apply(this, arguments));
  }

  (0, _createClass3.default)(ToggleEditModeStatic, [{
    key: 'staticModeElement',
    get: function get() {
      var _this4 = this;

      var _props2 = this.props;
      var _props2$canEdit = _props2.canEdit;
      var canEdit = _props2$canEdit === undefined ? this.canEdit : _props2$canEdit;
      var _props2$Static = _props2.Static;
      var Static = _props2$Static === undefined ? this.staticElement : _props2$Static;


      var meta = null;

      if (canEdit) {

        meta = {
          props: {},
          Element: function Element() {
            return _react2.default.createElement(
              'div',
              { className: 'can-edit' },
              _react2.default.createElement(Static.Element, Static.props),
              _react2.default.createElement(_editButton2.default, { className: 'floating-edit', onEdit: _this4._addons.edit.onClick })
            );
          }
        };
      } else {

        meta = Static;
      }

      return meta;
    }
  }, {
    key: 'editModeElement',
    get: function get() {
      var _props$Editable = this.props.Editable;
      var Editable = _props$Editable === undefined ? this.editableElement : _props$Editable;


      return {
        props: {},
        Element: function Element(props) {
          return _react2.default.createElement(
            'div',
            { className: 'static-edit' },
            _react2.default.createElement(Editable.Element, Editable.props),
            _react2.default.createElement(
              'div',
              { className: 'toolbar' },
              _react2.default.createElement(_buttonGroups.ButtonGroup, { addons: props.addons })
            )
          );
        }
      };
    }
  }, {
    key: 'editableElement',
    get: function get() {
      return undefined;
    }
  }, {
    key: 'staticElement',
    get: function get() {
      return undefined;
    }
  }]);
  return ToggleEditModeStatic;
}(ToggleEditMode);

var ToggleEditModeField = function (_ToggleEditMode2) {
  (0, _inherits3.default)(ToggleEditModeField, _ToggleEditMode2);

  function ToggleEditModeField() {
    (0, _classCallCheck3.default)(this, ToggleEditModeField);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ToggleEditModeField).apply(this, arguments));
  }

  (0, _createClass3.default)(ToggleEditModeField, [{
    key: 'emitElement',
    value: function emitElement(_Element) {
      var _props$canEdit2 = this.props.canEdit;
      var canEdit = _props$canEdit2 === undefined ? this.canEdit : _props$canEdit2;


      var postfix = canEdit ? this.addons : undefined;

      return {
        props: {},
        Element: function Element(props) {
          return _react2.default.createElement(
            _formField2.default,
            { title: props.title, className: props.className, postfix: postfix },
            _react2.default.createElement(_Element.Element, _Element.props)
          );
        }
      };
    }
  }, {
    key: 'staticModeElement',
    get: function get() {
      return this.emitElement(this.props.Static || this.staticElement);
    }
  }, {
    key: 'editModeElement',
    get: function get() {
      return this.emitElement(this.props.Editable || this.editableElement);
    }
  }, {
    key: 'editableElement',
    get: function get() {
      return undefined;
    }
  }, {
    key: 'staticElement',
    get: function get() {
      return undefined;
    }
  }]);
  return ToggleEditModeField;
}(ToggleEditMode);

ToggleEditMode.Field = ToggleEditModeField;
ToggleEditMode.Static = ToggleEditModeStatic;

module.exports = ToggleEditMode;