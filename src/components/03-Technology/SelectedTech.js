import React from "react";
import styled from "styled-components/macro";
import { Heading4, Subheading1 } from "../ReusableStyles";

const SelectedTech = ({ tech }) => {

  return (
    <section>
      <Heading4>The terminolgy...</Heading4>
      <TechName>{tech.name}</TechName>
      <p>{tech.description}</p>
    </section>
  )
}

export default SelectedTech;

const TechName = styled(Subheading1)`
  margin-bottom: 2rem;
`