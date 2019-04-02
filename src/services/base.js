import axios from 'axios'
import OPA_ENDPOINTS from './consts'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? OPA_ENDPOINTS.production : OPA_ENDPOINTS.sandbox,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    IntegrationAuthorization: OPA_ENDPOINTS.token
  }
})

export const post = async (endpoint, params) => await axios.post(endpoint, params)

export const get = async (endpoint, params) => await axios.get(endpoint, params)

export const update = async (endpoint, params) => await axios.update(endpoint, params)

export const deleteRest = async (endpoint, params) => await axios.delete(endpoint, params)
