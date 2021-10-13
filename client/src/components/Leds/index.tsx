import { Led, LedsContainer } from './styles'

export const Leds = () => {
  return (
    <LedsContainer>
      <Led colors="green" />
      <Led colors="red" />
      <Led colors="yellow" />
    </LedsContainer>
  )
}
