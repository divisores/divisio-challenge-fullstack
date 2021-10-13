import styled from 'styled-components'

export const MirrorContainer = styled.div`
  height: 35px;
  width: 35px;
  background-color: var(--mirror-dark);
  border-radius: 50%;
  padding-left: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  div {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: var(--mirror-normal);
    padding-top: 5px;
    padding-left: 7px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    div {
      height: 7px;
      width: 7px;
      border-radius: 50%;
      background: var(--mirror-light);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
`
