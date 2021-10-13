import styled from 'styled-components'
import media from 'styled-media-query'

/*
{
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
}
*/
export const ErrorPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  margin: 0 auto;

  img {
    height: 500px;
  }

  h1 {
    font-size: 50px;
  }
`

export const HomepageContainer = styled.div`
  max-width: 85vw;
  margin: 0 auto;
`

export const HomepagePokemons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-items: center;
  align-items: center;
  margin-top: -60px;

  ${media.greaterThan('medium')`
    /* screen width is greater than 1170px (large) */
    grid-template-columns: 1fr 1fr;
  `}

  ${media.greaterThan('large')`
    /* screen width is greater than 1170px (large) */
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan('huge')`
    /* screen width is greater than 1170px (large) */
    grid-template-columns: repeat(4, 1fr);
  `}
`
export const HomepageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-top: -100px;
    height: 20rem;
  }

  ${media.greaterThan('small')`
  img {
    margin-top: -100px;
    height: 25rem;
  }
  `}

  ${media.greaterThan('medium')`
  img {
    margin-top: -100px;
    height: 30rem;
  }
  `}

  ${media.greaterThan('large')`
  img {
    margin-top: -100px;
    height: 35rem;
  }
  `}
`

export const HomepageInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
  margin-bottom: 50px;

  input {
    height: 50px;
    width: 25rem;
    border-radius: 20px;
    border: none;
    outline: 0;
    margin-right: 20px;
    font-size: 25px;
    padding: 0 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  button {
    border: none;
    width: 5rem;
    height: 50px;
    border-radius: 20px;
    background: #1f1f1f;
    color: #fff;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`
