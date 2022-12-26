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
        <CrewName>{crew[activeIndex].name}</CrewName>
        <CrewBio>{crew[activeIndex].bio}</CrewBio>
      </InfoWrapper>
    </CrewInfoSection>

  )
}

export default SelectedCrewMember;


const CrewInfoSection = styled.section`
  width: 100%;
  padding-bottom: 1.5rem;
  overflow: hidden;

  
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 0;
    margin-top: 3rem;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    position: relative;
  }
`
const InfoWrapper = styled.div`
  @media (min-width: 600px) {
    margin: 2rem auto 0;
    width: 33rem;
    position: relative;
  }

  @media (min-width: 1200px) {
    width: 28rem;
    display: flex;
    flex-direction: column;
    bottom: 5rem;
    margin: 0;
    position: static;
  }
`

const CrewBio = styled.p`
  font-weight: 300;
  @media (min-width: 600px) {
    line-height: 28px;
  }
  @media (min-width: 1200px) {
    line-height: 32px;
  }
`
const CrewTitle = styled(Heading4)`
  opacity: 50%;
`

const CrewName = styled(Subheading1)`
  @media (min-width: 1200px) {
  width: 40rem;
  font-weight: 300; 
  }
`
  //kolla så att det här faktiskt är fontweight 300