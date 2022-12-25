import React, { useState } from "react";
import styled from "styled-components/macro";
import { Heading4, Subheading1 } from "../ReusableStyles";
import CrewSlider from "./CrewSlider";
import data from '../../data.json'

const SelectedCrewMember = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const crew = data.crew;
  
  return (
    <CrewInfoSection>
      <CrewSlider crew={crew} activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
      <InfoWrapper>
        <CrewTitle>{crew[activeIndex].role}</CrewTitle>
        <Subheading1>{crew[activeIndex].name}</Subheading1>
        <CrewBio>{crew[activeIndex].bio}</CrewBio>
      </InfoWrapper>
    </CrewInfoSection>

  )
}

export default SelectedCrewMember;

const InfoWrapper = styled.div`
  @media (min-width: 600px) {
    margin: 2rem auto 0;
    width: 33rem;
  }
  `
const CrewBio = styled.p`
  font-weight: 300;
  @media (min-width: 600px) {
    margin: 3rem auto 0; 
  }
`
const CrewTitle = styled(Heading4)`
  opacity: 50%;
`
const CrewInfoSection = styled.section`
  width: 100%;
  padding-bottom: 1.5rem;
  
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 0;
    margin-top: 3rem;
  }
`
