import { gql } from '@apollo/client'

export const QUERY_ALL_POKEMONS = gql`
  query pokemons($offset: Int, $limit: Int) {
    pokemons(offset: $offset, limit: $limit) {
      id
      name
      image
      types {
        name
        url
      }
      abilities {
        name
        url
      }
    }
  }
`
