// import styled from 'styled-components';
import { useState } from 'react';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted , setIsgameStarted] = useState(false);
  
  const toggle = () => {
    setIsgameStarted((prev)=> !prev);
  }


  return (
    <>
    {
      isGameStarted ? <GamePlay/> :<StartGame toggle={toggle}/>
    }
    </>
  )
}

export default App
