import { AxiosError, isAxiosError } from 'axios'
import { ZodError } from 'zod'

import { User, UserSchema } from '@context/user/domain/User'

import { UserRepository } from '@context/user/domain/UserRepository'

import { ApiClient } from '@src/ApiClient'

const apiClient = ApiClient()
export const HttpUserRepository = (): UserRepository => {
  return {
    findById,
  }
}

async function findById(id: string) {
  return await apiClient
    .get<User>(`/users/${id}`)
    .then(({ data }) => UserSchema.parse(data))
    .catch((error: AxiosError | ZodError) => {
      throw new Error(isAxiosError(error) ? 'InternalServerError' : 'ZodError')
    })
}
