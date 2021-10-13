import { getPokemons } from "../../services/servicesPokemon"

export default {
  Query: {
    pokemons: (_, {offset, limit}) => {
      return getPokemons(offset, limit)
    }
  },
}
