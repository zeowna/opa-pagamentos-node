import { post } from './base'

const integrationUri = `/integration/charge`

export default class Charge {
  /**
   * @description Envia uma cobrança in-app da sua conta Opa Pro! para um usuário Opa!
   * @param {string} cpf
   * @param {number} value
   * @param {string} clientId
   * @param {string} expirationDate
   * @param {string} observation
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#f932ac87-ae35-e9c9-4935-8ce59bbe13da
   */
  static create = (cpf, value, clientId, expirationDate, observation) =>
    post(`${integrationUri}`, { cpf, value, clientId, expirationDate, observation })
}
