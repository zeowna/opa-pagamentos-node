import { post } from './base'
import { get } from 'https'

const integrationUri = `/integration/checkout`

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
 */

export default class Boleto {
  /**
   * @description Gera um boleto
   * @param {boletoProps} boleto
   */
  static create = boleto => post(`${integrationUri}/boleto`, boleto)

  /**
   * @description Consulta o status de boleto
   * @param {string} boletoId
   */
  static checkStatus = boletoId =>
    get(`${integrationUri}/getboletostatus?transactionId=${boletoId}`)

  /**
   * @description Lista os boletos
   * @param {number} pageNumber
   * @param {number} pageSize
   */
  static list = (pageNumber = 0, pageSize = 10) =>
    get(`${integrationUri}/listboletos?pageNumber=${pageNumber}&pageSize=${pageSize}`)

  /**
   * @description Simula o pagamento de uma transação de boleto no ambiente de sandbox
   * @param {string} referenceId
   */
  static simulatePayment = referenceId =>
    get(`${integrationUri}/simulatepayment?referenceId=${referenceId}`)
}
