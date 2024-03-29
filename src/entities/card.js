import { post, get } from './base'

const integrationUri = `/integration/partner`

export default class Card {
  /**
   * @description Requisição para realizar o pré-cadastro no Opa! Pagamentos.
   * @property {string} cpf
   * @throws
   * 10045 - Usuário já cadastrado
   * 10072 - CPF bloqueado
   * 20008 - Usuário não encontrado
   * 20011 - Usuário inativo
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#c39e6658-0528-6b44-16b7-a80e1c872fd6
   */
  static create = cpf => post(`${integrationUri}/createcard`, { cpf })

  /**
   * @description Verifica status do cartão do usuário.
   * @property {string} cpf
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#5dfe0a33-3767-0a6f-0316-0538cd103141
   */
  static get = cpf => get(`${integrationUri}/getcardstatus?CPF=${cpf}`)
}
