import { PokemonModal } from 'components/PokemonModal'
import { useState } from 'react'
import { PokedexCardContentProps } from 'types/interfaces'
import {
  PokedexContentContainer,
  PokedexContentScreen,
  PokedexContentImage
} from './styles'

export const PokedexCardContent = ({
  pokemonImage,
  pokemonName,
  pokemon
}: PokedexCardContentProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    return setIsOpen(!isOpen)
  }

  return (
    <>
      <PokemonModal
        pokemon={pokemon}
        isOpen={isOpen}
        onRequestClose={handleClick}
      />
      <PokedexContentContainer onClick={handleClick}>
        <PokedexContentScreen />
        <PokedexContentImage src={pokemonImage} alt={pokemonName} />
      </PokedexContentContainer>
    </>
  )
}
