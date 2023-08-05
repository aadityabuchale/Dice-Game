// import React from 'react'

import styled from 'styled-components'

function RollDice({
  
  currentDice , rollDice
}) {




  return (
    <DiceContainer>
      <div className='dice'
        onClick={ () =>  rollDice()}
      >
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>
        Click on Dice to Roll
      </p>

    </DiceContainer>
  )
}

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p{
    font-size: 24px;
  }

  .dice{
    cursor: pointer;
  }

`

export default RollDice