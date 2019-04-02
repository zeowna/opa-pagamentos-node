"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = require("./base");

var _https = require("https");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var integrationUri = "/integration/checkout";
/**
 * @typedef {object} boletoProps
 * @property { string } payerName
 * @property { string } payerEmail
 * @property { number } value
 * @property { string } phoneDDI
 * @property { string } phoneDDD
 * @property { string } phoneNumber
 * @property { string } CPFCNPJ
 * @property { string } dueDate
 * @property { boolean } sendEmail
 * @property { boolean } addTax
 * @property { string } observation
 * @property { boolean } fines
 * @property { number } latePaymentFine
 * @property { boolean } perDayInterest
 */

var Boleto = function Boleto() {
  _classCallCheck(this, Boleto);
};

exports.default = Boleto;

_defineProperty(Boleto, "create", function (boleto) {
  return (0, _base.post)("".concat(integrationUri, "/boleto"), boleto);
});

_defineProperty(Boleto, "checkStatus", function (boletoId) {
  return (0, _https.get)("".concat(integrationUri, "/getboletostatus?transactionId=").concat(boletoId));
});

_defineProperty(Boleto, "list", function () {
  var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return (0, _https.get)("".concat(integrationUri, "/listboletos?pageNumber=").concat(pageNumber, "&pageSize=").concat(pageSize));
});

_defineProperty(Boleto, "simulatePayment", function (referenceId) {
  return (0, _https.get)("".concat(integrationUri, "/simulatepayment?referenceId=").concat(referenceId));
});