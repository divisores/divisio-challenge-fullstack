import styled from 'styled-components'
import media from 'styled-media-query'

export const PokedexCardContainer = styled.div`
  width: 285px;
  height: 300px;
  border-radius: 30px;
  background: var(--red);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #1f1f1f90;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: all ease 0.5s;

  &:hover {
    margin-top: -25px;
    cursor: pointer;
  }

  ${media.greaterThan('medium')`
  &:hover {
    margin-top: -30px;
  }
  `}

  ${media.greaterThan('large')`
  &:hover {
    margin-top: -35px;
  }
  `}

  ${media.greaterThan('huge')`
  &:hover {
    margin-top: -40px;
  }
  `}
`
export const PokemonLoadingContainer = styled.div`
  position: absolute;
  margin-top: 350px;
`
