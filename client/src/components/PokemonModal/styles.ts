import styled from 'styled-components'

export const Overlay = styled.div<any>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  animation: fadeIn 0.7s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      backdrop-filter: blur(2px);
    }
    from {
      opacity: 0;
    }
  }
`

export const ModalContainer = styled.div`
  width: 380px;
  height: 300px;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-self: center;
  padding: 10px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  h1 {
    text-align: center;
    font-size: 40px;
  }

  img {
    height: 200px;
    width: 200px;
    display: flex;
    align-content: center;
    margin: 0 auto;
    margin-top: -30px;
  }
`

export const ModalAbilitiesContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto;

  h3 {
    text-align: center;
    padding: 0 0 5px 0;
  }

  div {
    display: flex;
    justify-content: space-evenly;
  }
`

export const Abilities = styled.span<any>`
  padding: 0 10px;
  margin: 0 5px;
  color: #1f1f1f;
  border: 1px solid ${(props) => props.color};
  border-radius: 15px;
`
