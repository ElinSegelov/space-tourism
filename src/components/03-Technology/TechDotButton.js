import React from 'react'
import styled from 'styled-components/macro';

const TechDotButton = ({ choice, selectTechnology, technology, number }) => {
  return (
    <DotButton
      type="button"
      value={technology}
      onClick={(e) => selectTechnology(e.target.value)}
      style={{ 
        backgroundColor: choice === technology ? "#FFFFFF" : "transparent",
        color: choice === technology ? "#0B0D17" : "#FFFFFF"
      }}>
        {number}
    </DotButton>
  )
}

export default TechDotButton;

const DotButton = styled.button`
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

  @media (min-width: 1200px) {
    &&:hover {
		  border: 2px solid #FFF;
	  }
  }

`