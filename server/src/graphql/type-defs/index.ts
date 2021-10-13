import { mergeTypeDefs } from '@graphql-tools/merge'

import pokemonsTypeDefs from './pokemonsTypes'

export default mergeTypeDefs([
  pokemonsTypeDefs
])
