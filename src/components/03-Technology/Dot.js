import React from 'react'
import styled from 'styled-components/macro';

const DotButton = ({ choice, selectTechnology, technology, number }) => {

  return (
    <Dot
      type="button"
      value={technology}
      onClick={(e) => selectTechnology(e.target.value)}
      style={{ 
        backgroundColor: choice === technology ? "#FFFFFF" : "transparent",
        color: choice === technology ? "#0B0D17" : "#FFFFFF"
      }}>
        {number}
    </Dot>
  )
}

export default DotButton;

const Dot = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: transparent;

  border: ${({theme}) => `1px solid ${theme.colors.primaryText}`};
  color: #FFF;
  font-family: 'Bellefair', serif;
  
  @media (min-width: 600px) {
    width: 4rem;
    height: 4rem;
    font-size: 24px;
  }
`