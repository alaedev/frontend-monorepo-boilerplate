import axios, { AxiosInstance } from 'axios'
import { getSession } from 'next-auth/react'

export type useApiClientType = () => AxiosInstance
export type useApiClientResponseType = ReturnType<useApiClientType>

export const ApiClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  })

  instance.interceptors.request.use(async (request) => {
    const session = await getSession()

    if (session) {
      request.headers.Authorization = `Bearer ${session.accessToken}`
    }
    return request
  })

  return instance
}
