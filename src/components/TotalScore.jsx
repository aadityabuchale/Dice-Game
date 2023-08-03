// import React from 'react'

import { styled } from "styled-components";

function TotalScore({score = 0}) {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div`
    max-width: 200px;
    /* background-color: red; */
    text-align: center;
    h1{
        font-size: 100px;
        line-height: 00px;

    }
    p{
        font-size: 24px; 
        font-weight: 500;
    }

`


export default TotalScore;