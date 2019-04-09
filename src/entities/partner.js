import { get } from './base'

const integrationUri = `/integration/partner`

export default class Partner {
    /**
     * @description Método que retorna o saldo da empresa.
     * @see https://documenter.getpostman.com/view/3156896/7LhjRZb#c2009ee6-d454-447f-9bab-4acbbc7fd119
     */
    static getBalance = () =>
        get(`${integrationUri}/getbalance`)
}