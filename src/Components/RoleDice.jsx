import React, { useState }  from 'react'
import styled from 'styled-components'

const RoleDice = ({currentDice, roleDice}) => {

  return (
    <DiceConatainer>
      <div className='dice' onClick={roleDice} >
        <img src={`/Images/dice/dice_${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click on Dice to doll</p>
    </DiceConatainer>
  )
}

export default RoleDice

const DiceConatainer=styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction:column;
    align-items: center;

    .dice{
        cursor: pointer ;
    }

    p{
        font-size: 24px;
    }
`

