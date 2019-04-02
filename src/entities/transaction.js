import { post, get } from './base'

const integrationUri = `/integration/transaction`

export default class Transaction {
  /**
   * @param {string} cpf
   * @param {number} value
   * @param {number} type
   * @param {string} clientId
   * @throws
   */
  static create = (cpf, value, type, clientId) =>
    post(`${integrationUri}/send`, { cpf, value, type, clientId })

  /**
   * @param {Array<object>} bulk
   * @property {string} cpf
   * @property {number} value
   * @property {number} type
   * @property {string} clientId
   */
  static createBulk = bulk => post(`${integrationUri}/bulksend`, bulk)

  static get = transactionId => get(`${integrationUri}/status?transactionId=${transactionId}`)
}
