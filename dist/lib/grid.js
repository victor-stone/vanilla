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

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reservedProps = ['className', 'xs', 'sm', 'md', 'lg', 'model', 'sz', 'cols', 'offset', 'pull', 'push', 'hidden'];

var BootstrapBase = function (_React$Component) {
  (0, _inherits3.default)(BootstrapBase, _React$Component);

  function BootstrapBase() {
    (0, _classCallCheck3.default)(this, BootstrapBase);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(BootstrapBase).apply(this, arguments));
  }

  (0, _createClass3.default)(BootstrapBase, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      var bsSafeProps = (0, _unicorns.excludeProps)(this.props, reservedProps);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, bsSafeProps, { className: this.selectors }),
        children
      );
    }
  }, {
    key: 'selectors',
    get: function get() {
      var className = this.props.className;

      return (0, _unicorns.selectors)(this.bsSelector, className);
    }
  }]);
  return BootstrapBase;
}(_react2.default.Component);

var Container = function (_BootstrapBase) {
  (0, _inherits3.default)(Container, _BootstrapBase);

  function Container() {
    (0, _classCallCheck3.default)(this, Container);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass3.default)(Container, [{
    key: 'bsSelector',
    get: function get() {
      return 'container';
    }
  }]);
  return Container;
}(BootstrapBase);

var FluidContainer = function (_BootstrapBase2) {
  (0, _inherits3.default)(FluidContainer, _BootstrapBase2);

  function FluidContainer() {
    (0, _classCallCheck3.default)(this, FluidContainer);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FluidContainer).apply(this, arguments));
  }

  (0, _createClass3.default)(FluidContainer, [{
    key: 'bsSelector',
    get: function get() {
      return 'container-fluid';
    }
  }]);
  return FluidContainer;
}(BootstrapBase);

var Row = function (_BootstrapBase3) {
  (0, _inherits3.default)(Row, _BootstrapBase3);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'bsSelector',
    get: function get() {
      return 'row';
    }
  }]);
  return Row;
}(BootstrapBase);

/*

  There are 3 ways to generate a column. Note that this
  list is in the order in which the component will look
  for which method is being used. If any of these methods
  are sniffed out, no further checking is done and all 
  other methods are ignored. For example, if you use method
  (1) then all other properties not related to step (1) are
  ignored.

  1. Size properties (some combination of: 'xs', 'sm', 'md', 'lg')
     For example:

        <Column sm="10" md="5">...</Column>

      will generate: 

        <div class="col-sm-10 col-md-5">...</div>

      If you want more options you can use a hash for any size:

        const md = {cols:5,offset:2};

        <Column xs="12" md={md}>...</Column>

      which will generate:

        <div class="col-xs-12 col-md-5 col-md-offset-2">...</div>

      The valid keys for the hash are:
        
          {
            cols:  n,
            offset: n,
            pull: n,
            push: n,
            hidden: boolean
          }

      Suggested use: you have a column with a lot of rules for 
                     different sizes.

    2. The 'model' property as an array of hashes that include a 'sz'
       key to specify what size (default is 'md'). 

       For example:
  
          const model = [ { cols:9,  offset:2 }, 
                          { sz:'sm', pull:2 },
                          { sz:'xs', hidden:true } ];

          <Column model={model}>....</Column>

        Will generate a column that is hidden on phones:

          <div class="col-md-9 col-md-offset-2 hidden-xs">...</div>

        Suggested use: you have column rules that are dynamically 
                       generated based on the housing component's
                       state.

    3. The hash keys can be used directly as properties. If you
       don't specify 'sz' then 'md' is assumed.

       For example:

          <Column cols="4" offset="2">...</Column>
          <Column cols="4" >...</Column>

        Will generate:

          <div class="col-md-6 col-md-offset-2">...</div>
          <div class="col-md-6">...</div>

        Suggested use: you have very simple layout
*/


var Column = function (_BootstrapBase4) {
  (0, _inherits3.default)(Column, _BootstrapBase4);

  function Column() {
    (0, _classCallCheck3.default)(this, Column);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Column).apply(this, arguments));
  }

  (0, _createClass3.default)(Column, [{
    key: 'selectors',
    get: function get() {

      var model = this.model;
      var _props$className = this.props.className;
      var className = _props$className === undefined ? '' : _props$className;

      var cls = [];

      if (className.length) {
        cls.push(className);
      }

      (0, _unicorns.quickLoop)(model, function (_ref) {
        var _ref$sz = _ref.sz;
        var sz = _ref$sz === undefined ? 'md' : _ref$sz;
        var _ref$offset = _ref.offset;
        var offset = _ref$offset === undefined ? 0 : _ref$offset;
        var _ref$push = _ref.push;
        var push = _ref$push === undefined ? 0 : _ref$push;
        var _ref$pull = _ref.pull;
        var pull = _ref$pull === undefined ? 0 : _ref$pull;
        var _ref$hidden = _ref.hidden;
        var hidden = _ref$hidden === undefined ? false : _ref$hidden;
        var cols = _ref.cols;

        if (hidden) {
          cls.push('hidden-' + sz);
        }
        if (Number(cols)) {
          cls.push('col-' + sz + '-' + cols);
        }
        if (Number(offset)) {
          cls.push('col-' + sz + '-offset-' + offset);
        }
        if (Number(pull)) {
          cls.push('col-' + sz + '-pull-' + pull);
        }
        if (Number(push)) {
          cls.push('col-' + sz + '-push-' + push);
        }
      });

      return _unicorns.selectors.apply(undefined, cls);
    }
  }, {
    key: 'model',
    get: function get() {
      var _this6 = this;

      var model = [];

      (0, _unicorns.quickLoop)(['xs', 'sm', 'md', 'lg'], function (sz) {
        if (sz in _this6.props) {
          var val = _this6.props[sz];
          if (isNaN(val)) {
            val.sz = sz;
            model.push(val);
          } else {
            model.push({ sz: sz, cols: val });
          }
        }
      });

      if (!model.length) {
        var _props$model = this.props.model;
        model = _props$model === undefined ? [this.props] : _props$model;
      }

      return model;
    }
  }]);
  return Column;
}(BootstrapBase);

module.exports = {
  Container: Container,
  FluidContainer: FluidContainer,
  Row: Row,
  Column: Column
};