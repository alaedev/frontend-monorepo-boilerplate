
import { signIn } from 'next-auth/react'

type SignInAuth = {
  email: string
  password: string
}

export const useAuth = () => {
  const login = async ({ email, password }: SignInAuth) => {
    const result = await signIn('credentials', { username: email, password: password, redirect: false })

    return { error: result?.error }
  }

  return {
    login,
  }
}
