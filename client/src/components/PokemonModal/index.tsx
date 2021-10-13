import { Pokemon } from 'types/interfaces'
import {
  Overlay,
  ModalContainer,
  ModalAbilitiesContent,
  Abilities
} from './styles'
interface PokemonModalProps {
  pokemon: Pokemon
  isOpen: boolean
  onRequestClose: () => void
}

export const PokemonModal = ({
  isOpen,
  onRequestClose,
  pokemon
}: PokemonModalProps) => {
  return (
    <Overlay isOpen={isOpen} onClick={onRequestClose}>
      <ModalContainer>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <ModalAbilitiesContent>
          <h3>Abilities</h3>
          <div>
            <Abilities color={'red'}>{pokemon.abilities[0].name}</Abilities>
            {Boolean(pokemon.abilities.length > 1) && (
              <Abilities color={'green'}>{pokemon.abilities[1].name}</Abilities>
            )}
          </div>
        </ModalAbilitiesContent>
      </ModalContainer>
    </Overlay>
  )
}
