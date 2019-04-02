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
   */
  static create = userProps => post(`${integrationUri}/createUser`, userProps)

  /**
   * @description Returns user
   * @param {string} cpf
   */
  static get = cpf => get(`${integrationUri}/getUser?CPF=${cpf}`)

  /**
   * @description Returns user's available limit
   * @param {string} cpf
   */
  static getLimit = cpf => get(`${integrationUri}/getuserlimit?CPF=${cpf}`)

  /**
   * @description Sends documents for a user
   * @property {imageType} imageType
   * @property {string} cpf
   * @throws
   * 20017 => Formato de imagem inválido
   * 20008 => Usuário não encontrado
   */
  static documentUpload = (cpf, imageType, blob) => {
    const data = new FormData()
    data.append('form', blob)
    return postMultipart(`${integrationUri}/documentupload?imagetype=${imageType}&CPF=${cpf}`, data)
  }
}
