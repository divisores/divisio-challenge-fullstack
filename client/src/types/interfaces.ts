export interface Pokemon {
  name: string
  id: string
  image: string
  types?: {
    name: string
    url: string
  }[]
  abilities: {
    name: string
    url: string
  }[]
}

export interface PokedexCardProps {
  pokemonData: {
    pokemons: Pokemon[]
  }
  pokemonLoading: boolean
}

export interface PokedexCardContentProps {
  pokemonImage: string
  pokemonName: string
  pokemon: Pokemon
}

export interface PokedexCardFooterProps {
  name: string
  types?: {
    name: string
    url: string
  }[]
}

export interface LedColors {
  colors: 'green' | 'red' | 'yellow'
}
