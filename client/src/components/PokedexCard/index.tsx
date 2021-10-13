import { PokedexCardContent } from 'components/PokedexCardContent'
import { PokedexCardFooter } from 'components/PokedexCardFooter'
import { PokedexCardHeader } from 'components/PokedexCardHeader'

import { PokedexCardContainer, PokemonLoadingContainer } from './styles'

import { PokedexCardProps, Pokemon } from '../../types/interfaces'

import LoadingGif from '../../assets/loading2.gif'

export const PokedexCard = ({
  pokemonData,
  pokemonLoading
}: PokedexCardProps) => {
  return (
    <>
      {pokemonLoading ? (
        <PokemonLoadingContainer>
          <img src={LoadingGif} alt="Loading" />
        </PokemonLoadingContainer>
      ) : (
        pokemonData &&
        pokemonData.pokemons.map((pokemon: Pokemon) => (
          <PokedexCardContainer key={pokemon.id}>
            <PokedexCardHeader />
            <PokedexCardContent
              pokemonImage={pokemon.image}
              pokemonName={pokemon.name}
              pokemon={pokemon}
            />
            <PokedexCardFooter name={pokemon.name} types={pokemon.types} />
          </PokedexCardContainer>
        ))
      )}
    </>
  )
}
