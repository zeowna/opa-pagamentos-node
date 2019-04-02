"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = require("./base");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var integrationUri = "/integration/charge";

var Charge = function Charge() {
  _classCallCheck(this, Charge);
};

exports.default = Charge;

_defineProperty(Charge, "create", function (cpf, value, clientId, expirationDate, observation) {
  return (0, _base.post)("".concat(integrationUri), {
    cpf: cpf,
    value: value,
    clientId: clientId,
    expirationDate: expirationDate,
    observation: observation
  });
});