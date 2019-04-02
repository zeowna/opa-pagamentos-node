import { post, get } from './base'

const integrationUri = `/integration/partner`

export default class Card {
  /**
   * @property {string} cpf
   * @throws
   * 10045 - Usuário já cadastrado
   * 10072 - CPF bloqueado
   * 20008 - Usuário não encontrado
   * 20011 - Usuário inativo
   */
  static create = cpf => post(`${integrationUri}/createcard`, { cpf })

  static get = cpf => get(`${integrationUri}/getcardstatus?CPF=${cpf}`)
}
