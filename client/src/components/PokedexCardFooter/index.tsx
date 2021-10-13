import {
  CircleButton,
  FooterContainer,
  PokemonInfos,
  PokemonInfosType,
  PokemonType
} from './styles'

import PlusIcon from '../../assets/plusIcon.svg'
import { PokedexCardFooterProps } from 'types/interfaces'

export const PokedexCardFooter = ({
  name,
  types = []
}: PokedexCardFooterProps) => {
  return (
    <FooterContainer>
      <CircleButton />
      <PokemonInfos>
        <div className="name">
          <h1>{name[0].toUpperCase() + name.substr(1)}</h1>
        </div>
        <PokemonInfosType>
          {types.map((type) => (
            <PokemonType className="typeOne" key={type.url} color={type.name}>
              {type.name}
            </PokemonType>
          ))}
        </PokemonInfosType>
      </PokemonInfos>
      <span>
        <img src={PlusIcon} alt="plusicon" />
      </span>
    </FooterContainer>
  )
}
