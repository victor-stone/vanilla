'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _tagString = require('../tag-string');

var _tagString2 = _interopRequireDefault(_tagString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function selectors() {
  var _ref;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var filtered = args.filter(function (t) {
    return !!t;
  });
  if (!filtered.length) {
    return '';
  }
  if (filtered.length === 1) {
    return filtered[0];
  }
  return (_ref = new _tagString2.default(null, { separator: ' ' })).concat.apply(_ref, (0, _toConsumableArray3.default)(filtered)).toString();
};