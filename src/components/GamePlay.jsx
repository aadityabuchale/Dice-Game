import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { styled } from "styled-components";
import { useState } from "react";
import Button, {OutlineButton} from "./Styled/Button";
import Rules from "./Rules";

function GamePlay() {

  const [selectedNumber , setSelectedNumber] = useState();
  const [currentDice , setCurrentDice] = useState(1);
  const [score , setScore] = useState(0);
  const [error , setError] = useState(undefined);
  const [ rules , setRules] = useState(false);

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

    const resetScore = ()=> {
      setScore(0);
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

        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={ ()=> setRules((rules)=> !rules)}>{rules?"Hide":"Show"} Rules</Button>
        </div>
        
        { rules && <Rules/>}
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

    .btns {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 40px;
    }
`

export default GamePlay;