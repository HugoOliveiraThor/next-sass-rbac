import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanInvite = ability.can('invite', 'User')

console.log(userCanInvite)
