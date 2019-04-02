import { post } from './base'

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
 * @property { string } BirthDate
 * @property { string } MothersName
 */

class User {
  /**
   * Creates an user
   * @param {userProps} user
   * @returns {Promise<import('axios').AxiosResponse>}
   * @throws
   */
  static create(user) {
    return post('/integration/partner/createUser', userProps)
  }
}

(async () =>
  console.log(
    await User.create({
      PhoneDDD: '55',
      PhoneDDD: '41',
      PhoneNumber: '44443333',
      Name: 'José Pequeno',
      CPF: '00640828906',
      Email: 'josepequeno@hitbts.com',
      CEP: '80240020',
      Address: 'R. Ladrilho',
      AddressComplement: 'Casa 1',
      City: 'Testing',
      BirthDate: '1990-05-09T00:00:00-03:00',
      MothersName: 'Maria Pequeno'
    })
  ))()
