import { gql } from 'apollo-server-express'

export default gql`
type Ability {
  name: String
  url: String
}

type Type {
  name: String
  url: String
}

type Pokemon {
  id: Int
  name: String
  image: String
  url: String
  abilities: [Ability]
  types: [Type]
}

  type Query {
   pokemons(offset: Int, limit: Int): [Pokemon]
  }
`
