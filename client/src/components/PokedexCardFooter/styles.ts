import styled from 'styled-components'
import { colors } from 'utils/colors'

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  img {
    height: 45px;
    &:hover {
      opacity: 0.9;
    }
  }
`

export const CircleButton = styled.div`
  width: 25px;
  height: 25px;
  background-color: #1f1f1f;
  border-radius: 50%;
  border: 1px solid #000;
  margin: 0 15px 20px 5px;
`
export const PokemonInfos = styled.div`
  width: 155px;
  height: 50px;
  background-color: #52ae61;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 5px;

  h1 {
    color: #1f1f1f;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    font-size: 24px;
  }
`
export const PokemonInfosType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    text-align: center;
    width: 50px;
    height: 18px;
    border-radius: 5px;
    font-size: 12px;
    margin: 0 5px;
    font-size: 13px;
    font-weight: lighter;
  }
`

interface TypeProps {
  color: string
}

export const PokemonType = styled.span<TypeProps>`
  background-color: ${(props) => {
    switch (props.color) {
      case 'normal':
        return colors.normal
      case 'fire':
        return colors.fire
      case 'water':
        return colors.water
      case 'eletric':
        return colors.electric
      case 'grass':
        return colors.grass
      case 'ice':
        return colors.ice
      case 'fighting':
        return colors.fighting
      case 'poison':
        return colors.poison
      case 'ground':
        return colors.ground
      case 'flying':
        return colors.flying
      case 'psychic':
        return colors.psychic
      case 'bug':
        return colors.bug
      case 'rock':
        return colors.rock
      case 'ghost':
        return colors.ghost
      case 'dragon':
        return colors.dragon
      case 'dark':
        return colors.dark
      case 'steel':
        return colors.steel
      case 'fairy':
        return colors.fairy
    }
  }};
  color: #fff;
`
