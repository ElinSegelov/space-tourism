import React, { useState } from "react";
import styled from "styled-components/macro";
import {
  InnerWrapper,
  OuterWrapper,
  MidPageNav,
  FirstPageHeading} from "../ReusableStyles";
import Header from "../Header";
import destinationBackgroundMobile from '../../assets/destination/background-destination-mobile.jpg';
import destinationBackgroundTablet from '../../assets/destination/background-destination-tablet.jpg';
import destinationBackgroundDesktop from '../../assets/destination/background-destination-desktop.jpg';
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
          <li><DestinationButton value="Moon" onClick={(e) => selectDestination(e.target.value)} style={{ borderBottom: choice.name === "Moon" ? "3px solid white" : "none" }} >Moon</DestinationButton></li>
          <li><DestinationButton value="Mars" onClick={(e) => selectDestination(e.target.value)} style={{ borderBottom: choice.name === "Mars" ? "3px solid white" : "none" }} >Mars</DestinationButton></li>
          <li><DestinationButton value="Europa" onClick={(e) => selectDestination(e.target.value)} style={{ borderBottom: choice.name === "Europa" ? "3px solid white" : "none" }} >Europa</DestinationButton></li>
          <li><DestinationButton value="Titan" onClick={(e) => selectDestination(e.target.value)} style={{ borderBottom: choice.name === "Titan" ? "3px solid white" : "none" }} >Titan</DestinationButton></li>
        </ul>
      </MidPageNav>
      <SelectedDestination destination={choice} />
      </InnerWrapper>
    </DestinationOuterWrapper>
  )
}

export default Destinations;

const DestinationOuterWrapper = styled(OuterWrapper)`
 background-image: url(${destinationBackgroundMobile});
 @media (min-width: 600px) {
    background-image: url(${destinationBackgroundTablet});
  }
 @media (min-width: 1024px) {
    background-image: url(${destinationBackgroundDesktop});
  }


`
const DestinationButton = styled.button`
  padding-bottom: 0.6rem;
`