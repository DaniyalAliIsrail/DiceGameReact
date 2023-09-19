import React from 'react'
import styled from 'styled-components'

const TotoalScore = () => {
  return (
    <ScoreContainer>
       <h1>0</h1>
       <p>Total Score</p>
    </ScoreContainer>
  )
}
export default TotoalScore
const  ScoreContainer =  styled.div`
    max-width:200px;
    /* background-color: red; */
    text-align:center;
     h1{
       font-size: 4rem;
       line-height:-100px;
      
     }
     p{
       font-size: 24px;
       font-weight: 500px;
     }  
`