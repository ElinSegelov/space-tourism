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
      <Heading4>{crew[activeIndex].role}</Heading4>
      <CrewName>{crew[activeIndex].name}</CrewName>
      <p>{crew[activeIndex].bio}</p>
    </CrewInfoSection>

  )
}

export default SelectedCrewMember;

const CrewName = styled(Subheading1)`
  margin-bottom: 2rem;
`
const CrewInfoSection = styled.section`
  width: 100%;
  padding-bottom: 1.5rem;
`