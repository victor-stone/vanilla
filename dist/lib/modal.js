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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _glyph = require('./glyph');

var _glyph2 = _interopRequireDefault(_glyph);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var _closeButton = require('./close-button');

var _closeButton2 = _interopRequireDefault(_closeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = _react2.default.createClass({
  displayName: 'Modal',
  getInitialState: function getInitialState() {
    return { error: this.props.error };
  },


  componentDidMount: function componentDidMount() {
    var _this = this,
        _arguments = arguments;

    /* globals $ */
    var d = $(_reactDom2.default.findDOMNode(this));
    d.modal('show');
    d.on('hidden.bs.modal', function () {
      var _props;

      _this.props.handleHideModal && (_props = _this.props).handleHideModal.apply(_props, _arguments);
      ModalPopup.hide();
    });
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({ error: nextProps.error });
  },
  _getButtonText: function _getButtonText() {
    return ' ' + (this.props.buttonText || 'Submit');
  },
  onSubmit: function onSubmit() {
    var _this2 = this;

    /* globals $ */
    $('.modal-submit').prop({ disabled: true }).removeClass('btn-success');
    $('.modal-submit-text').text(' saving...');
    var possibleThenable = this.props.action();
    if (possibleThenable.then) {
      possibleThenable.then(function () {
        var text = _this2._getButtonText();
        $('.modal-submit').prop({ disabled: false }).addClass('btn-success');
        $('.modal-submit-text').text(text);
      });
    }
  },
  onAlertClosed: function onAlertClosed() {
    this.setState({ error: '' });
  },
  render: function render() {
    var _props2 = this.props;
    var title = _props2.title;
    var subTitle = _props2.subTitle;
    var action = _props2.action;
    var _props2$icon = _props2.icon;
    var icon = _props2$icon === undefined ? 'share' : _props2$icon;
    var error = _props2.error;
    var _props2$closeText = _props2.closeText;
    var close = _props2$closeText === undefined ? ' Close' : _props2$closeText;
    var submitDisabler = _props2.submitDisabler;


    var text = this._getButtonText();
    var disabled = submitDisabler && submitDisabler() || false;
    var cls = 'modal-submit btn btn-primary btn-success';

    return _react2.default.createElement(
      'div',
      { className: 'modal fade' },
      _react2.default.createElement(
        'div',
        { className: 'modal-dialog' },
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'div',
            { className: 'modal-header' },
            _react2.default.createElement(_closeButton2.default, { className: 'close', 'data-dismiss': 'modal' }),
            _react2.default.createElement(
              'h4',
              { className: 'modal-title' },
              _react2.default.createElement(
                'span',
                { className: 'light-color' },
                subTitle
              ),
              ' ',
              title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-body' },
            error && _react2.default.createElement(_alert2.default, { type: 'danger', noAutoFade: true, onClose: this.onAlertClosed, text: error }),
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-footer' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
              close
            ),
            action && _react2.default.createElement(
              'button',
              { disabled: disabled, className: cls, onClick: action },
              _react2.default.createElement(_glyph2.default, { icon: icon }),
              text
            )
          )
        )
      )
    );
  }
});

var ModalPopup = function (_React$Component) {
  (0, _inherits3.default)(ModalPopup, _React$Component);

  function ModalPopup() {
    (0, _classCallCheck3.default)(this, ModalPopup);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalPopup).apply(this, arguments));

    _this3.handleActionResponse = _this3.handleActionResponse.bind(_this3);
    _this3.state = { error: '' };
    return _this3;
  }

  (0, _createClass3.default)(ModalPopup, [{
    key: 'manualClose',
    value: function manualClose() {
      /* globals $ */
      var d = $(_reactDom2.default.findDOMNode(this));
      d.modal('hide');
    }
  }, {
    key: 'handleActionResponse',
    value: function handleActionResponse(result) {
      if (result.status === 'error') {
        this.setState({ error: result.errmsg || 'fAIL' });
        return false;
      }

      this.manualClose();
      return true;
    }
  }]);
  return ModalPopup;
}(_react2.default.Component);

Modal.Popup = ModalPopup;

module.exports = Modal;

//