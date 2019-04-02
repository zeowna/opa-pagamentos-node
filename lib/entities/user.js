"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.imageTypes = void 0;

var _base = require("./base");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @typedef { object } userProps
 * @property { string } PhoneDDI
 * @property { string } PhoneDDD
 * @property { string } PhoneNumber
 * @property { string } Name
 * @property { string } CPF
 * @property { string } Email
 * @property { string } CEP
 * @property { string } Address
 * @property { string } AddressComplement
 * @property { string } City
 * @property { string } State
 * @property { string } District
 * @property { string } BirthDate
 * @property { string } MothersName
 */
var integrationUri = "/integration/partner";
/**
 * @typedef {number} imageType
 */

/**
 * @enum {imageType}
 */

var imageTypes = {
  'Frente do documento': 0,
  'Verso do documento': 1,
  Selfie: 2,
  'Comprovante de residência': 3,
  IRPF: 4
};
exports.imageTypes = imageTypes;

var User = function User() {
  _classCallCheck(this, User);
};

exports.default = User;

_defineProperty(User, "create", function (userProps) {
  return (0, _base.post)("".concat(integrationUri, "/createUser"), userProps);
});

_defineProperty(User, "get", function (cpf) {
  return (0, _base.get)("".concat(integrationUri, "/getUser?CPF=").concat(cpf));
});

_defineProperty(User, "getLimit", function (cpf) {
  return (0, _base.get)("".concat(integrationUri, "/getuserlimit?CPF=").concat(cpf));
});

_defineProperty(User, "documentUpload", function (cpf, imageType, blob) {
  var data = new FormData();
  data.append('form', blob);
  return (0, _base.postMultipart)("".concat(integrationUri, "/documentupload?imagetype=").concat(imageType, "&CPF=").concat(cpf), data);
});