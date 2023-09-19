import React from 'react'
import TotoalScore from './TotoalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'



const Gameplay = () => {
  return (
    <Gameplaynav>
       <TotoalScore />
       <NumberSelector/>
    </Gameplaynav>
  )
}
export default Gameplay
const Gameplaynav = styled.div`
max-width: 1180px;
margin: 0 auto;
display: flex;
justify-content:space-between;
align-items: center;
padding: 10px 0 0 0 ;
`