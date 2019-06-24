import { BoletoProps } from "../props";
import { get, post } from "./Base";

const integrationUri = `/integration/checkout`;

export class Boleto {
  /**
   * @description Gera um boleto
   * @param boleto
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#b228e7a8-051c-a914-a63c-69595fa1b1ee
   */
  static create = (boleto: BoletoProps) => post(`${integrationUri}/boleto`, boleto);

  /**
   * @description Consulta o status de boleto
   * @param boletoId
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#eeabec29-3ecf-4370-bc0a-cc4b5697e20c
   */
  static checkStatus = (boletoId: string) =>
    get(`${integrationUri}/getboletostatus?transactionId=${boletoId}`)

  /**
   * @description Lista os boletos
   * @param pageNumber
   * @param pageSize
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#5d4b93e8-b1ce-89eb-4402-6a70b2d66e5e
   */
  static list = (pageNumber: number = 0, pageSize: number = 10) =>
    get(`${integrationUri}/listboletos?pageNumber=${pageNumber}&pageSize=${pageSize}`)

  /**
   * @description Simula o pagamento de uma transação de boleto no ambiente de sandbox
   * @param referenceId
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#4afcf0a9-123f-4d2b-a487-613e499c89c2
   */
  static simulatePayment = (referenceId: string) =>
    get(`${integrationUri}/simulatepayment?referenceId=${referenceId}`)
}
