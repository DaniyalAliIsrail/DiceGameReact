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
      <div className='flex1'>
      <h1>Dice Game</h1>
        <Link className='routeGameplay' to="/gameplay"><Button>Game Play</Button></Link>
      </div>
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
  .flex1{
    display:flex;
    flex-direction:column;
    align-items:end;
  }
  .content{
  h1{
font-size: 96px;
font-weight:800;
white-space:nowrap;
line-height:1.2;
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
  background-color:white;
  color: black;
  border: 1px solid black;
}
.routeGameplay{
text-decoration: none;
}
`

