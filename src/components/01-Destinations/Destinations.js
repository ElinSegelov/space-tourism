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
  const [selectedDestination, setSelectedDestination] = useState('moon');
  const [choice, setChoice] = useState(destinationData[0])
  let selected;
  
  const selectDestination = (e) => {
    console.log('event target value', e)
    setSelectedDestination(e)
    selected = destinationData.find((destination) => destination.name === e);
    console.log(selected)
    setChoice(selected)
  }

    console.log(selectedDestination, 'bilden-src:', choice.images.webp)

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
      <SelectedDestination
          name={choice.name}
          description={choice.description}
          distance={choice.distance}
          travel={choice.travel} />
      </InnerWrapper>
    </DestinationOuterWrapper>
  )
}

export default Destinations;

const DestinationOuterWrapper = styled(OuterWrapper)`
 background-image: url(${destinationBackground});

`