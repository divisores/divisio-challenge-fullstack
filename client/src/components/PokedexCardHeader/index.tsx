import { Leds } from '../Leds'
import { Mirror } from '../Mirror'
import { HeaderContainer } from './styles'

export const PokedexCardHeader = () => {
  return (
    <>
      <HeaderContainer>
        <Mirror />
        <Leds />
      </HeaderContainer>
    </>
  )
}
