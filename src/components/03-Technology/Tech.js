/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
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
  const [tech, setTech] = useState(data.technology[0]);

  const selectTech = () => {
    console.log('selected tech', tech)
  }

  return (
    <DestinationOuterWrapper>
      <Header />
      <InnerWrapper>
      <FirstPageHeading><span>03</span> Space launch 101</FirstPageHeading>
      {/* <DestinationImg src={moon} alt={choice.name} /> */}
      {/* !!!! Raden nedanför funkade i någon min sen, oklart varför slutade det fungera !!!!*/}
      {/* <DestinationImg src={choice.images.webp} alt={choice.name} /> */}
      <SelectedTech
          name={tech.name}
          description={tech.description}
          image={tech.images.landscape} /> 
      </InnerWrapper>
    </DestinationOuterWrapper>
  )
}
export default Tech;

const DestinationOuterWrapper = styled(OuterWrapper)`
 background-image: url(${techBackground});

`