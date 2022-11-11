import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  InnerWrapper,
  OuterWrapper,
  MidPageNav,
  FirstPageHeading} from "../ReusableStyles";
import Header from "../Header";
import destinationBackground from '../../assets/destination/background-destination-mobile.jpg';
import { DestinationImg } from "../ReusableStyles";
import data from '../../data';
import SelectedDestination from "./SelectedDestination";

// IMPORTERA FÖR FONTWEIGHT /==
const Destinations = () => {
  const destinationData = data.destinations
  const [choice, setChoice] = useState(destinationData[0])
  
  const selectDestination = (value) => {
    setChoice(destinationData.find((destination) => destination.name === value))
  }
    return (
    <DestinationOuterWrapper>
      <Header />
      <InnerWrapper>
      <FirstPageHeading><span>01</span> Pick your destination</FirstPageHeading>
      <DestinationImg src={choice.images.webp} alt={choice.name} /> 
      <MidPageNav>
        <ul>
          <li><button value="Moon" onClick={(e) => selectDestination(e.target.value)}>Moon</button></li>
          <li><button value="Mars" onClick={(e) => selectDestination(e.target.value)}>Mars</button></li>
          <li><button value="Europa" onClick={(e) => selectDestination(e.target.value)}>Europa</button></li>
          <li><button value="Titan" onClick={(e) => selectDestination(e.target.value)}>Titan</button></li>
        </ul>
      </MidPageNav>
      <SelectedDestination destination={choice} />
      </InnerWrapper>
    </DestinationOuterWrapper>
  )
}

export default Destinations;

const DestinationOuterWrapper = styled(OuterWrapper)`
 background-image: url(${destinationBackground});

`