import { roleSchema } from '../roles'
import { z } from 'zod'

export const UserSchema = z.object({
  role: roleSchema,
})

export type User = z.infer<typeof UserSchema>
