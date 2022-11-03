/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import {
  InnerWrapper,
  OuterWrapper,
  MidPageNav,
  FirstPageHeading} from "../ReusableStyles";
import Header from "../Header";
import destinationBackground from '../../assets/destination/background-destination-mobile.jpg';
import { DestinationImg } from "../ReusableStyles";
import data from '../../data.json';
import SelectedDestination from "./SelectedDestination";
import moon from '../../assets/destination/image-moon.webp'

// IMPORTERA FÖR FONTWEIGHT /==
const Destinations = () => {

  const [selectedDestination, setSelectedDestination] = useState('moon');
  const [choice, setChoice] = useState(data.destinations[0])
  let selected;
  
  const selectDestination = (e) => {
    console.log('event target value', e.target.value)
    setSelectedDestination(e.target.value)
    selected = data.destinations.filter((destination) => destination.name === selectedDestination);
    setChoice(...selected)
  }
  
  useEffect(()=> {
    // PROBLEM ATT CHOICE BLIR UNDEFINED FÖRSTA GÅNGEN MAN TRYCKER
    // TÄNKER ATT MAN BEHÖVER useEffect MEN HUR???
      
    }, [choice]);

    console.log(selectedDestination, 'bilden-src:', choice.images.webp)

    return (
    <MoonOuterWrapper>
      <Header />
      <InnerWrapper>
      <FirstPageHeading><span>01</span> Pick your destination</FirstPageHeading>
      {/* <DestinationImg src={moon} alt={choice.name} /> */}
      <DestinationImg src={`${choice.images.webp}`} alt={choice.name} />
      <MidPageNav>
        <ul>
          <li><button value="Moon" onClick={selectDestination}>Moon</button></li>
          <li><button value="Mars" onClick={selectDestination}>Mars</button></li>
          <li><button value="Europa" onClick={selectDestination}>Europa</button></li>
          <li><button value="Titan" onClick={selectDestination}>Titan</button></li>
        </ul>
      </MidPageNav>
      <SelectedDestination
          name={choice.name}
          description={choice.description}
          distance={choice.distance}
          travel={choice.travel} />
      </InnerWrapper>
    </MoonOuterWrapper>
  )
}

export default Destinations;

const MoonOuterWrapper = styled(OuterWrapper)`
 background-image: url(${destinationBackground});

`

      {/* <PitchSection>
        <DestinationH1>Moon</DestinationH1>
        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history 
        by visiting the Luna 2 and Apollo 11 landing sites.</p>
      </PitchSection>
      <DestinationInfo>
        <div>
          <Subheading2>Avg. distance</Subheading2>
          <Subheading1>384,400 km</Subheading1>
        </div>
        <div>
          <Subheading2>Est. travel time</Subheading2>
          <Subheading1>3 days</Subheading1>
        </div>
      </DestinationInfo> */}