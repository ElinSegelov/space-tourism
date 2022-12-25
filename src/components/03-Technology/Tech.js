/* eslint-disable no-undef */
import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  InnerWrapper,
  OuterWrapper,
  FirstPageHeading} from "../ReusableStyles";
import Header from "../Header";
import techBackgroundMobile from '../../assets/technology/background-technology-mobile.jpg';
import techBackgroundTablet from '../../assets/technology/background-technology-tablet.jpg';
import techBackgroundDesktop from '../../assets/technology/background-technology-desktop.jpg';
import data from '../../data';
import SelectedTech from "./SelectedTech";

const Tech = () => {
  const techData = data.technology
  const [choice, setChoice] = useState(techData[0])

  
  const selectDestination = (value) => {
    setChoice(techData.find((tech) => tech.name === value))
  }

  return (
    <DestinationOuterWrapper>
      <Header />
      <InnerWrapper>
      <FirstPageHeading><span>03</span> Space launch 101</FirstPageHeading>
      {/* Här behöver jag rendera landscape eller portrait beroende på screen width */}
      <TechImage src={choice.images.landscape} alt={choice.name} />

      <SubSection>
        <DotContainer>
          <Dot
            type="button"
            value="Launch vehicle"
            onClick={(e) => selectDestination(e.target.value)}
            style={{ 
              backgroundColor: choice.name === "Launch vehicle" ? "#FFFFFF" : "transparent",
              color: choice.name === "Launch vehicle" ? "#0B0D17" : "#FFFFFF"
            }}>
              1
          </Dot>
          <Dot
            type="button"
            value="Spaceport"
            onClick={(e) => selectDestination(e.target.value)}
            style={{ 
              backgroundColor: choice.name === "Spaceport" ? "#FFFFFF" : "transparent",
              color: choice.name === "Spaceport" ? "#0B0D17" : "#FFFFFF"
            }}>
              2
          </Dot>
          <Dot
            type="button"
            value="Space capsule"
            onClick={(e) => selectDestination(e.target.value)}
            style={{ 
              backgroundColor: choice.name === "Space capsule" ? "#FFFFFF" : "transparent",
              color: choice.name === "Space capsule" ? "#0B0D17" : "#FFFFFF"
            }}>
            3
          </Dot>
        </DotContainer>
      </SubSection>
      <SelectedTech tech={choice} /> 
      </InnerWrapper>
    </DestinationOuterWrapper>
  )
}
export default Tech;

const DestinationOuterWrapper = styled(OuterWrapper)`
 background-image: url(${techBackgroundMobile});
 @media (min-width: 600px) {
    background-image: url(${techBackgroundTablet});
  }
 @media (min-width: 1024px) {
    background-image: url(${techBackgroundDesktop});
  }
`
const SubSection = styled.div`
  padding: 0 1.5rem;
`

const TechImage = styled.img`
  width: 100vw;
  margin: 2rem 0;
  
  @media (min-width: 600px) {
    margin: 4rem 0;
    
  }
`
const DotContainer = styled.div`
  display: flex;
  width: 40vw;
  justify-content: space-around;
  margin: 4rem auto;
  
  @media (min-width: 600px) {
    background-image: url(${techBackgroundTablet});
  }
  
`
const Dot = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: transparent;
  border: 1px solid var(--primary-text);
  color: #FFF;
  font-family: 'Bellefair', serif;
  
  @media (min-width: 600px) {
    width: 4rem;
    height: 4rem;
    font-size: 24px;
  }
`