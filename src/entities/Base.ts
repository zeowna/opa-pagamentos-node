import Axios, { AxiosPromise } from "axios";
import OPA_ENDPOINTS from "../consts";

const baseURL =
  process.env.NODE_ENV === "production" ? OPA_ENDPOINTS.production : OPA_ENDPOINTS.sandbox;

const instance = Axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "IntegrationAuthorization": OPA_ENDPOINTS.token,
  },
});

const handleRequest = async (axiosPromise: AxiosPromise) => {
  const { data } = await axiosPromise;
  return data;
};

export const post = async <T>(endpoint: string, params: any): Promise<T> =>
  await handleRequest(instance.post(endpoint, params));

export const get = async <T>(endpoint: string) => await handleRequest(instance.get(endpoint));

export const put = async <T>(endpoint: string, params: any): Promise<T> =>
  await handleRequest(instance.put(endpoint, params));

export const deleteRest = async <T>(endpoint: string, params: any): Promise<T> =>
  await handleRequest(instance.delete(endpoint, params));

export const postMultipart = async <T>(endpoint: string, params: any): Promise<T> =>
  await handleRequest(instance.post(endpoint, params, {
    headers: {
      "Content-Type": "multipart/form-data",
      "IntegrationAuthorization": OPA_ENDPOINTS.token,
    },
  }));
