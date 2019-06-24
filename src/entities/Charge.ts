import { post } from "./Base";

const integrationUri = `/integration/charge`;

export class Charge {
  /**
   * @description Envia uma cobrança in-app da sua conta Opa Pro! para um usuário Opa!
   * @param cpf
   * @param value
   * @param clientId
   * @param expirationDate
   * @param observation
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#f932ac87-ae35-e9c9-4935-8ce59bbe13da
   */
   static create = (cpf: string, value: number, clientId: string, expirationDate: string, observation: string) =>
    post(`${integrationUri}`, { cpf, value, clientId, expirationDate, observation })
}
