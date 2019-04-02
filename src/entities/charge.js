import { post } from './base'

const integrationUri = `/integration/charge`

export default class Charge {
  /**
   * @param {string} cpf
   * @param {number} value
   * @param {string} clientId
   * @param {string} expirationDate
   * @param {string} observation
   */
  static create = (cpf, value, clientId, expirationDate, observation) =>
    post(`${integrationUri}`, { cpf, value, clientId, expirationDate, observation })
}
