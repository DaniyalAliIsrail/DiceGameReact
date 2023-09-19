import React from 'react'
import styled from 'styled-components'

const TotoalScore = () => {
  return (
    <div>
       <h1>0</h1>
       <p>Total Score</p>
    </div>
  )
}

export default TotoalScore

const  ScoreContainer =  styled.div`
     h1{
       font-size: 100px;
     }
     p{
       font-size: 24px;
       font-weight:500px;
     }  
`