import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = () => {
       const arrNumber = [1,2,3,4,5,6];
       const [selectedNumber , setSelectedNumber] = useState();
       console.log(selectedNumber);
       
       return (
             <NumberSlectorContainer>
               <div className='flex'>
                   
                   {
                     arrNumber.map((value,index) =>(
                            <Box isSelected={value === selectedNumber} key={index} onClick={()=> setSelectedNumber(value)}>{value}</Box>
                     ))
                    } 
                    </div>
                    <p>Selected Number</p>              
             </NumberSlectorContainer>
       )
}

export default NumberSelector;

const NumberSlectorContainer = styled.div`
display: flex;
flex-direction:column;
align-items:flex-end;


.flex{
       display: flex;
       gap:24px;
      
}
p{
       font-size: 1.3rem;
       font-weight: 700px;
       padding-top:10px;
}
       
`
const Box = styled.div`
padding: 0;
margin: 0;
width: 72px;
height: 72px;
border: 1px solid #000;
background: #FFF;
font-size: 24px;
font-weight: 700;
display: grid;
place-items:center;
background-color:${(props)=>( props.isSelected ? "black": "white") } ;
color:${(props)=>( !props.isSelected ? "black": "white") } ;


`;