import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button/Button'

const Startgame = ({toggle}) => {
  return (
    <Container>
        <div>
      <img src="/Images/dices 1.png" alt="Dices " />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle} >Play now</Button>
      </div>
    </Container>
  )
}

export default Startgame

const Container= styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`;


