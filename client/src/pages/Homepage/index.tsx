import { PokedexCard } from 'components/PokedexCard'
import BulbaErrorImage from '../../assets/bulbaError.png'
import {
  HomepageContainer,
  HomepagePokemons,
  HomepageHeader,
  ErrorPageContainer
} from './styles'

import PokemonLogo from '../../assets/pokemonLogo.png'

import { useQuery } from '@apollo/client'
import { QUERY_ALL_POKEMONS } from 'queries/QUERY_ALL_POKEMONS'

export const Homepage = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_POKEMONS, {
    variables: {
      offset: 0,
      limit: 40
    },
    fetchPolicy: 'no-cache'
  })

  return (
    <>
      {error ? (
        <ErrorPageContainer>
          <img src={BulbaErrorImage} alt="sad bulba" />
          <h1>Servidor fora do ar!</h1>
          <h1>Renicie o servidor :)</h1>
        </ErrorPageContainer>
      ) : (
        <HomepageContainer>
          <HomepageHeader>
            <img src={PokemonLogo} alt="background" />
          </HomepageHeader>
          <HomepagePokemons>
            <PokedexCard pokemonData={data} pokemonLoading={loading} />
          </HomepagePokemons>
        </HomepageContainer>
      )}
    </>
  )
}
