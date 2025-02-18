import { AbilityBuilder } from '@casl/ability'
import { AppAbility } from '.'

type Role = 'ADMIN' | 'MEMBER'
type PermissionByRole = (
  user: unknown,
  builder: AbilityBuilder<AppAbility>
) => void

export const permissions: Record<Role, PermissionByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'all')
  },
  MEMBER: (_, { can }) => {
    can('invite', 'User')
  },
}
