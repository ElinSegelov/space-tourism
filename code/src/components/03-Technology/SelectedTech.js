import React from "react";
import styled from "styled-components/macro";
import { Heading4, Subheading1 } from "../ReusableStyles";

const SelectedTech = ({ tech }) => {

  return (
    <SelectedTechSection>
      <TechHeading4>The terminolgy...</TechHeading4>
      <Subheading1>{tech.name}</Subheading1>
      <TechDescriptionP>{tech.description}</TechDescriptionP>
    </SelectedTechSection>
  )
}

export default SelectedTech;

const SelectedTechSection = styled.section`
  @media (min-width: 600px) {
    width: 30rem;
  }
    @media (min-width: 1200px) {
    width: 28.5rem;
  }
`

const TechDescriptionP = styled.p`
  margin-top: 1rem;
  `

const TechHeading4 = styled(Heading4)`
  @media (min-width: 600px) {
    font-size: 16px;
    color: var( --primary-text);
    opacity: 100;
  }

`