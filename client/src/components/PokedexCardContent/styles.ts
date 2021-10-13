import styled from 'styled-components'

export const PokedexContentContainer = styled.div`
  width: 245px;
  height: 185px;
  background-color: var(--border);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 10px;
`
export const PokedexContentScreen = styled.div`
  width: 90%;
  height: 90%;
  background-color: #1f1f1f;
  border-radius: 40px;
`
export const PokedexContentImage = styled.img`
  width: 250px;
  height: 250px;
  position: absolute;
  margin-top: -35px;
  transition: all ease 1.5s;

  &:hover {
    margin-top: -50px;
    cursor: pointer;
  }
`
