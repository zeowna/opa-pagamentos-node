"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = require("./base");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var integrationUri = "/integration/transaction";

var Transaction = function Transaction() {
  _classCallCheck(this, Transaction);
};

exports.default = Transaction;

_defineProperty(Transaction, "create", function (cpf, value, type, clientId) {
  return (0, _base.post)("".concat(integrationUri, "/send"), {
    cpf: cpf,
    value: value,
    type: type,
    clientId: clientId
  });
});

_defineProperty(Transaction, "createBulk", function (bulk) {
  return (0, _base.post)("".concat(integrationUri, "/bulksend"), bulk);
});

_defineProperty(Transaction, "get", function (transactionId) {
  return (0, _base.get)("".concat(integrationUri, "/status?transactionId=").concat(transactionId));
});