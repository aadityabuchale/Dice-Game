import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { styled } from "styled-components";
import { useState } from "react";


function GamePlay() {

  const [selectedNumber , setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(1);
  const [score , setScore] = useState(0);
  const [error , setError] = useState(undefined);

  const getRandomNumber = (min , max) =>{
    return Math.floor( Math.random() * (max - min) + min);
  }

  const rollDice = () => {
      if(!selectedNumber) {
        setError("You Have Not Selected a Number!");
        return;
      };

      setError(undefined);

      const randomNumber = getRandomNumber(1 , 7);
      setCurrentDice(randomNumber);

    
      if( randomNumber === selectedNumber){
        setScore( (currScore) => currScore + 20);
      }
      {
        setScore( (currScore) => currScore - 5);
      }

      setSelectedNumber(undefined);
  }

  return (
    <MainContainer>
        <div className="top-section">
            <TotalScore score={score}></TotalScore>
            <NumberSelector 
              error={error}
              setError={setError}
              selectedNumber={selectedNumber} 
              setSelectedNumber={setSelectedNumber} 
            />
        </div>
        <RollDice
          currentDice={currentDice}
          rollDice={rollDice}
        ></RollDice>
    </MainContainer>
  )
}


const MainContainer = styled.div`

    padding-top: 50px;

    .top-section {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`

export default GamePlay;