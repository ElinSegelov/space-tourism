import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  InnerWrapper,
  OuterWrapper,
  FirstPageHeading} from "../../styles/ReusableStyles";
import Header from "../Header";
import techBackgroundMobile from '../../assets/technology/background-technology-mobile.jpg';
import techBackgroundTablet from '../../assets/technology/background-technology-tablet.jpg';
import techBackgroundDesktop from '../../assets/technology/background-technology-desktop.jpg';
import data from '../../data';
import SelectedTech from "./SelectedTech";
import { useEffect } from "react";
import DotButton from "./Dot";

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

  const selectTechnology = (value) => {
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
          <DotButton choice={choice.name} selectTechnology={selectTechnology} technology={"Launch vehicle"} number="1" />
          <DotButton choice={choice.name} selectTechnology={selectTechnology} technology="Spaceport" number="2" />
          <DotButton choice={choice.name} selectTechnology={selectTechnology} technology="Space capsule" number="3" />
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