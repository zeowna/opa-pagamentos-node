import { ImageTypes } from "../enums";
import { UserProps } from "../props";
import { get, post, postMultipart } from "./Base";

const integrationUri = `/integration/partner`;

export default class User {
  /**
   * @description Creates an user
   * @param userProps
   * @throws
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#9c0c83f2-0aad-0e3a-eb76-35515e9e8a9c
   */
  static create = (userProps: UserProps) => post(`${integrationUri}/createUser`, userProps);

  /**
   * @description Returns user
   * @param cpf
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#ffa750df-e600-13ef-cbb6-191f400ea5b6
   */
  static get = (cpf: string) => get(`${integrationUri}/getUser?CPF=${cpf}`);

  /**
   * @description Returns user's available limit
   * @param cpf
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#0776fcec-d2ce-d6d9-16ba-baf80353f9b1
   */
  static getLimit = (cpf: string) => get(`${integrationUri}/getuserlimit?CPF=${cpf}`);

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
  static documentUpload = (cpf: ImageTypes, imageType: string, blob: File | Blob) => {
    const data = new FormData();
    data.append("form", blob);
    return postMultipart(`${integrationUri}/documentupload?imagetype=${imageType}&CPF=${cpf}`, data);
  }
}
