import axios from 'axios'
import OPA_ENDPOINTS from '../consts'

const baseURL =
  process.env.NODE_ENV === 'production' ? OPA_ENDPOINTS.production : OPA_ENDPOINTS.sandbox

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    IntegrationAuthorization: OPA_ENDPOINTS.token
  }
})

export const post = async (endpoint, params) => await instance.post(endpoint, params)

export const get = async endpoint => await instance.get(endpoint)

export const update = async (endpoint, params) => await instance.update(endpoint, params)

export const deleteRest = async (endpoint, params) => await instance.delete(endpoint, params)

export const postMultipart = async (endpoint, params) =>
  await instance.post(endpoint, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
      IntegrationAuthorization: OPA_ENDPOINTS.token
    }
  })
