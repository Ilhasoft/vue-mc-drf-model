"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(_ref) {
  var type = _ref.type;
  return {
    string: String,
    integer: Number,
    boolean: Boolean,
    email: String,
    choice: String,
    date: String,
    text: String,
    field: String,
    slug: String,
    password: String,
    'multiple choice': Object
  }[type];
};

exports.default = _default;