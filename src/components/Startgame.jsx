import React from 'react'
import styled from 'styled-components';
import DICELARGE from '../assets/dices.png';
import { Link } from "react-router-dom";
const Startgame = () => {
  return (
    <Container>
      <div>
        <img src={DICELARGE} />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Link className='routeGameplay' to="/gameplay"><Button>Game Play</Button></Link>
       
      </div>
    </Container>
  )
}
export default Startgame;
const Container = styled.div`
  max-width: 1180px;
  display: flex; 
  align-items: center;
  justify-content:space-between;
  margin: 0 auto;
  height: 100vh;
  .content{
  h1{
font-size: 96px;
font-weight:800;
white-space:nowrap;
  }
  }`
const Button = styled.button`
min-width: 220px;
padding: 10px 18px;
color: white;
border-radius: 5px;
background: #181717;
border:none;
font-size: 16px;
cursor: pointer;
border: 1px solid transparent;
transition: all 0.3s ease-out;
&:hover{
  transition: all 0.3s ease-in;
  background: #000000;
}
.routeGameplay{
text-decoration: none;
}
`

