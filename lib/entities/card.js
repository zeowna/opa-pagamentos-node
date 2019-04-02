"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = require("./base");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var integrationUri = "/integration/partner";

var Card = function Card() {
  _classCallCheck(this, Card);
};

exports.default = Card;

_defineProperty(Card, "create", function (cpf) {
  return (0, _base.post)("".concat(integrationUri, "/createcard"), {
    cpf: cpf
  });
});

_defineProperty(Card, "get", function (cpf) {
  return (0, _base.get)("".concat(integrationUri, "/getcardstatus?CPF=").concat(cpf));
});