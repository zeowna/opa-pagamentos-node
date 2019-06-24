import { TransactionProps } from "../props";
import { get, post } from "./Base";

const integrationUri = `/integration/transaction`;

export class Transaction {
  /**
   * @description Transferir dinheiro da conta Opa! Pro para uma conta Opa!
   * @param cpf
   * @param value
   * @param type
   * @param clientId
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#d584e84c-d77b-ab3b-e60a-0a1c0fc34677
   */
  static create = (cpf: string, value: number, type: number, clientId: string) =>
    post(`${integrationUri}/send`, { cpf, value, type, clientId })

  /**
   * @description Transfere dinheiro da conta Opa! Pro para uma lista de clientes e valores.
   * Os pagamentos retornarão com status pendente para os agendados e recusados para os que não forem agendados.
   * Para identificação de retorno de cada pagamento utilizar o campo clientId.
   * @param bulk
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#2dc938ca-3b8f-a7d2-e16c-6870c3be8eb6
   */
  static createBulk = (bulk: TransactionProps[]) => post(`${integrationUri}/bulksend`, bulk);

  /**
   * @description Consulta o status de uma transação.
   * @param transactionId
   *
   * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#ab72320b-b2ae-6d78-a80f-eb105d39247a
   */
  static get = (transactionId: string) => get(`${integrationUri}/status?transactionId=${transactionId}`);
}
