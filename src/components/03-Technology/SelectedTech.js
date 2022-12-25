import React from "react";
import styled from "styled-components/macro";
import { Heading4, Subheading1 } from "../ReusableStyles";

const SelectedTech = ({ tech }) => {

  return (
    <section>
      <TechHeading4>The terminolgy...</TechHeading4>
      <Subheading1>{tech.name}</Subheading1>
      <TechDescriptionP>{tech.description}</TechDescriptionP>
    </section>
  )
}

export default SelectedTech;

const TechDescriptionP = styled.p`
  @media (min-width: 600px) {
    width: 30rem;
    
  }
  `

const TechHeading4 = styled(Heading4)`
  @media (min-width: 600px) {
    font-size: 16px;
    color: var( --primary-text);
    opacity: 100;
  }

`