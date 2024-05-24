import { User } from '@prisma/client'
import { omit } from 'remeda'
import { SanitizedUser } from 'src/user/user.types'

export function sanitizeUser(user: User): SanitizedUser {
  return omit(user, ['password'])
}