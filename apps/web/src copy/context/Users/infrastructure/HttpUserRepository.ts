import { AxiosError, isAxiosError } from 'axios'
import { ZodError } from 'zod'



import { UserSchema } from '@context/Users/domain/User'

import { UserRepository } from '@context/Users/domain/UserRepository'

import { ApiClient } from '@src/ApiClient'

const apiClient = ApiClient()
export const HttpUserRepository = (): UserRepository => {
  return {
    findById,
  }
}


async function findById(id: string) {
  return await apiClient
    .get<Location>(`/users/${id}`)
    .then(({ data }) => UserSchema.parse(data))
    .catch((error: AxiosError | ZodError) => {
      throw new Error(isAxiosError(error) ? 'InternalServerError' : 'ZodError')
    })
}

