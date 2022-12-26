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
import { useEffect } from "react";

const Tech = () => {
  const techData = data.technology
  const [choice, setChoice] = useState(techData[0])
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1200)

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1200)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  }, [])

  const selectDestination = (value) => {
    setChoice(techData.find((tech) => tech.name === value))
  }
  return (
    <DestinationOuterWrapper>
      <Header />
      <TechInnerWrapper>
      <FirstPageHeading><span>03</span> Space launch 101</FirstPageHeading>

      <TechImage 
        src={isDesktop ? choice.images.portrait : choice.images.landscape}
        alt={choice.name} />

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
      </TechInnerWrapper>
    </DestinationOuterWrapper>
  )
}
export default Tech;

const DestinationOuterWrapper = styled(OuterWrapper)`
 background-image: url(${techBackgroundMobile});
 @media (min-width: 600px) {
    background-image: url(${techBackgroundTablet});
  }
 @media (min-width: 1200px) {
    background-image: url(${techBackgroundDesktop});
  }
`
const TechInnerWrapper = styled(InnerWrapper)`
  @media (min-width: 1200px) {
    position: relative;
    justify-content: left;
  }

`

const SubSection = styled.div`
  padding: 0 1.5rem;
  @media (min-width: 1200px) {
    padding: 0;
  }
`

const TechImage = styled.img`
  width: 100vw;
  margin: 2rem 0;
  
  @media (min-width: 600px) {
    margin: 4rem 0;
  }

  @media (min-width: 1200px) {
    position: absolute;
    right: 0;
    width: 28rem;
  }
`
const DotContainer = styled.div`
  display: flex;
  width: 40vw;
  justify-content: space-around;
  margin: 0 auto 2rem;
  
  @media (min-width: 600px) {
    margin-bottom: 3rem;
  }
  @media (min-width: 1200px) {
    flex-direction: column;
    width: fit-content;
    margin: 0 3rem 0 0;
    gap: 2rem;
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
  @media (min-width: 1200px) {
   
  }
`