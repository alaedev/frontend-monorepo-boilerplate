import { UserRepository } from '@context/user/domain/UserRepository'

export const GetUserBy = (userRepository: UserRepository, id: string) => {
  return userRepository.findById(id)
}
