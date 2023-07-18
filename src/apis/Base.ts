import { type ResponseData } from '@/models/ResponseData'
import { token } from '@/components/Authentication'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_DOMAIN

export const get = async (
  path: string,
  params?: any
): Promise<ResponseData> => {
  let responseData: ResponseData
  const headers = {
    Authorization: `Bearer ${token()}`
  }
  try {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const response = await axios.get(`${API_URL}${path}`, { headers })

    responseData = {
      data: response.data,
      status: response.status,
      errors: []
    }
  } catch (error) {
    responseData = {
      data: {},
      status: error.response.status,
      errors: error.response.data.errors
    }
  }
  return responseData
}

export const post = async (
  path: string,
  params?: any
): Promise<ResponseData> => {
  let responseData: ResponseData
  const headers = {
    'Content-Type': 'application/json'
  }
  try {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const response = await axios.post(`${API_URL}${path}`, params, { headers })

    responseData = {
      data: response.data,
      status: response.status,
      errors: []
    }
  } catch (error) {
    responseData = {
      data: {},
      status: error.response.status,
      errors: error.response.data.errors
    }
  }
  return responseData
}
