import { abilty } from '@saas/auth'

const userCanInvite = abilty.can('invite', 'User')

console.log(userCanInvite)
