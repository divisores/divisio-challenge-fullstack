import styled from 'styled-components'
import { LedColors } from 'types/interfaces'

const ledColors = {
  green: '#33CC95',
  red: '#E52E4D',
  yellow: '#e5e701'
}

export const LedsContainer = styled.div`
  padding-left: 15px;
  display: flex;
`
export const Led = styled.div<LedColors>`
  height: 12px;
  width: 12px;
  margin: 0 3px;
  border-radius: 50%;
  background-color: ${(props) => {
    if (props.colors == 'green') {
      return ledColors.green
    }
    if (props.colors == 'red') {
      return ledColors.red
    }
    if (props.colors == 'yellow') {
      return ledColors.yellow
    }
  }};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
