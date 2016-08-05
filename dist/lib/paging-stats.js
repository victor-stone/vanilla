'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _unicorns = require('../unicorns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function commaize(value) {
  if (value === 0 || value === '0') {
    return '0';
  } else if (value) {
    var regex = /([0-9]+)(([0-9]{3})($|,))/g;
    var str;
    var commaized = (value.string || value) + '';

    do {
      str = commaized;
      commaized = str.replace(regex, '$1,$2');
    } while (str !== commaized);

    return commaized;
  }
}

var PagingStats = function () {
  function PagingStats(_ref) {
    var offset = _ref.offset;
    var limit = _ref.limit;
    var total = _ref.total;
    var length = _ref.length;
    (0, _classCallCheck3.default)(this, PagingStats);

    this.stats = (0, _unicorns.numericize)({ offset: offset, limit: limit, total: total, length: length });
  }

  (0, _createClass3.default)(PagingStats, [{
    key: 'total',
    get: function get() {
      return this.stats.total;
    }
  }, {
    key: '_isValidOffset',
    get: function get() {
      return this.stats.offset > this.stats.total === false;
    }
  }, {
    key: '_printableOffset',
    get: function get() {
      return Number(this.stats.offset) + 1;
    }
  }, {
    key: 'shouldShow',
    get: function get() {
      return (this.showPrev || this.showNext) && this._isValidOffset;
    }
  }, {
    key: 'showPrev',
    get: function get() {
      return this.stats.offset > 0;
    }
  }, {
    key: 'showNext',
    get: function get() {
      return this.stats.offset + this.stats.limit < this.stats.total;
    }
  }, {
    key: 'prevValue',
    get: function get() {
      var val = this.stats.offset - this.stats.limit;
      if (val < 0) {
        val = 0;
      }
      return val;
    }
  }, {
    key: 'nextValue',
    get: function get() {
      return this.stats.offset + this.stats.limit;
    }
  }, {
    key: 'lastValue',
    get: function get() {
      var _stats = this.stats;
      var offset = _stats.offset;
      var length = _stats.length;
      var limit = _stats.limit;

      return offset + (length < limit ? length : limit);
    }
  }, {
    key: 'lastPage',
    get: function get() {
      var _stats2 = this.stats;
      var total = _stats2.total;
      var offset = _stats2.offset;
      var limit = _stats2.limit;


      if (total - limit > offset) {
        return total - limit;
      }
      return false;
    }
  }, {
    key: 'showFirst',
    get: function get() {
      return !!this.stats.offset;
    }
  }, {
    key: 'showLast',
    get: function get() {
      return !!this.lastPage;
    }
  }, {
    key: 'printableOffset',
    get: function get() {
      return commaize(this._printableOffset);
    }
  }, {
    key: 'printableLastValue',
    get: function get() {
      return commaize(this.lastValue);
    }
  }, {
    key: 'printableTotal',
    get: function get() {
      return commaize(this.stats.total);
    }
  }]);
  return PagingStats;
}();

module.exports = function (props) {
  return new PagingStats(props);
};