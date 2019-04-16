import { get, post } from './base'

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
 * @property { boolean } fines
 * @property { number } latePaymentFine
 * @property { boolean } perDayInterest
 */

export default class Boleto {

  /**
   * @return {{PAST_DUE: number, PAID: number, PENDING: number}}
   * @constructor
   */
  static STATUS = () => ({
    PENDING: 0,
    PAID: 1,
    PAST_DUE: 2
  })

  /**
   * @description Gera um boleto
   * @param {boletoProps} boleto
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#b228e7a8-051c-a914-a63c-69595fa1b1ee
   */
  static create = boleto => post(`${integrationUri}/boleto`, boleto)

  /**
   * @description Consulta o status de boleto
   * @param {string} boletoId
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#eeabec29-3ecf-4370-bc0a-cc4b5697e20c
   */
  static checkStatus = boletoId =>
    get(`${integrationUri}/getboletostatus?transactionId=${boletoId}`)

  /**
   * @description Lista os boletos
   * @param {number} pageNumber
   * @param {number} pageSize
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#5d4b93e8-b1ce-89eb-4402-6a70b2d66e5e
   */
  static list = (pageNumber = 0, pageSize = 10) =>
    get(`${integrationUri}/listboletos?pageNumber=${pageNumber}&pageSize=${pageSize}`)

  /**
   * @description Simula o pagamento de uma transação de boleto no ambiente de sandbox
   * @param {string} referenceId
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#4afcf0a9-123f-4d2b-a487-613e499c89c2
   */
  static simulatePayment = referenceId =>
    get(`${integrationUri}/simulatepayment?referenceId=${referenceId}`)
}
