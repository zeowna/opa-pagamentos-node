import { post, get, postMultipart } from './base'

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

const integrationUri = `/integration/partner`

/**
 * @typedef {number} imageType
 */

/**
 * @enum {imageType}
 */
export const imageTypes = {
  'Frente do documento': 0,
  'Verso do documento': 1,
  Selfie: 2,
  'Comprovante de residência': 3,
  IRPF: 4
}

export default class User {
  /**
   * @description Creates an user
   * @param {userProps} user
   * @returns {Promise<import('axios').AxiosResponse>}
   * @throws
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#9c0c83f2-0aad-0e3a-eb76-35515e9e8a9c
   */
  static create = userProps => post(`${integrationUri}/createUser`, userProps)

  /**
   * @description Returns user
   * @param {string} cpf
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#ffa750df-e600-13ef-cbb6-191f400ea5b6
   */
  static get = cpf => get(`${integrationUri}/getUser?CPF=${cpf}`)

  /**
   * @description Returns user's available limit
   * @param {string} cpf
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#0776fcec-d2ce-d6d9-16ba-baf80353f9b1
   */
  static getLimit = cpf => get(`${integrationUri}/getuserlimit?CPF=${cpf}`)

  /**
   * @description Sends documents for a user
   * @property {imageType} imageType
   * @property {string} cpf
   * @throws
   * 20017 => Formato de imagem inválido
   * 20008 => Usuário não encontrado
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#22b17bf2-e784-48f7-9f21-5292a7f2892d
   */
  static documentUpload = (cpf, imageType, blob) => {
    const data = new FormData()
    data.append('form', blob)
    return postMultipart(`${integrationUri}/documentupload?imagetype=${imageType}&CPF=${cpf}`, data)
  }
}
