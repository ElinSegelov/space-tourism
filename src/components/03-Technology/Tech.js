/* eslint-disable no-undef */
import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  InnerWrapper,
  OuterWrapper,
  MidPageNav,
  FirstPageHeading} from "../ReusableStyles";
import Header from "../Header";
import techBackground from '../../assets/technology/background-technology-mobile.jpg';
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
          <Dot type="button" value="Launch vehicle" onClick={(e) => selectDestination(e.target.value)}>1</Dot>
          <Dot type="button" value="Spaceport" onClick={(e) => selectDestination(e.target.value)}>2</Dot>
          <Dot type="button" value="Space capsule" onClick={(e) => selectDestination(e.target.value)}>3</Dot>
        </DotContainer>
      </SubSection>
      <SelectedTech tech={choice} /> 
      </InnerWrapper>
    </DestinationOuterWrapper>
  )
}
export default Tech;

const DestinationOuterWrapper = styled(OuterWrapper)`
 background-image: url(${techBackground});

`
const SubSection = styled.div`
  padding: 0 1.5rem;
`

const TechImage = styled.img`
  width: 100vw;
  margin: 2rem 0;

`

const DotContainer = styled.div`
  display: flex;
  width: 40vw;
  justify-content: space-around;
  margin: 0 auto 2rem;
  
`
const Dot = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: transparent;
  border: 1px solid var(--primary-text);
  color: #FFF;
`