import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  email: z
    .string()
    .nonempty({ message: 'common:errors.requiredField' })
    .email({ message: 'common:errors.invalidEmail' }),
})

export type User = z.infer<typeof UserSchema>
