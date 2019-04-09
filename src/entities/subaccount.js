import { post, get } from './base'

const integrationUri = `/integration/integrationsubaccount`

export default class Subaccount {
    /**
     * @description Cria uma Subconta com os dados informados.
     * @param {string} documentNumber
     * @param {number} personType (1 - física, 2 - jurídica)
     * @param {string} companyName
     * @param {string} fantasyName
     * @param {string} name
     * @param {string} nickname
     * @param {string} email
     * @param {string} address
     * @param {string} addressNumber
     * @param {string} addressComplement
     * @param {string} CEP
     * @param {string} district
     * @param {string} birthDate
     * 
     * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#6cc08f58-a001-4a23-aa30-1b88b0305142
     */
    static create = (params) =>
        post(`${integrationUri}/create`, params)


    /**
     * @description Atualiza uma Subconta com os dados informados.
     * @param {string} documentNumber
     * @param {number} personType (1 - física, 2 - jurídica)
     * @param {string} companyName
     * @param {string} fantasyName
     * @param {string} name
     * @param {string} nickname
     * @param {string} email
     * @param {string} address
     * @param {string} addressNumber
     * @param {string} addressComplement
     * @param {string} CEP
     * @param {string} district
     * @param {string} birthDate
     * 
     * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#5c8ccaea-fa22-473a-aea3-546ba28dadab
     */
    static update = (params) =>
        post(`${integrationUri}/update`, params)

    /**
     * @description Lista as subcontas cadastradas
     * @param pageNumber
     * @param pageSize
     */
    static list = (pageNumber = 0, pageSize = 10) =>
        get(`${integrationUri}/list?pagenumber=${pageNumber}&pagesize=${pageSize}`)

    /**
     * @description Retorna as informações de uma subconta
     * @param refId External reference ID
     * 
     * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#b5826b23-3cfa-5fa5-3fa4-367377c54126
     */
    static get = refId => get(`${integrationUri}/get?externalReferenceId=${refId}`)

    /**
     * @description Consultar Status de Saque de Subcontas
     * @returns {number} status
     * 0 - Pendente, 1 - Paga, 2 - Recusada
     * 
     * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#426b858d-d5d2-493a-b2ab-9462fe5c436b
     */
    static getWithdrawStatus = refId = get(`${integrationUri}/getwithdrawstatus?externalReferenceId=${refId}`)

    /**
     * @description Solicita um saque para uma subconta
     * @param {number} value  Valor da solicitação (Float!)
     * @param {string} name Nome do titular da conta
     * @param {string} bankCode Enum do código do banco
     * 
     * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#86ef087c-9549-42ae-bb7d-a884f6c09db6
     */
    static requestWithdraw =
        (value, name, bankCode, agency, agencyDiv, account, accountDv,
            docNumber, accountType, bankName, subAccountRefId, closeSubAccount) =>
            post(`${integrationUri}/requestwithdraw`)
}
