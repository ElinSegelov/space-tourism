import React from "react";
import styled from "styled-components/macro";
import {
  InnerWrapper,
  OuterWrapper,
  H2,
  MidPageNav,
  NavText,
  FirstPageHeading,
  DestinationH1, 
  Subheading2,
  Subheading1} from "../ReusableStyles";
import Header from "../Header";
import moonBackground from '../../assets/destination/background-destination-mobile.jpg'
import theMoon from '../../assets/destination/image-moon.webp';
import { DestinationImg } from "../ReusableStyles";
const Moon = () => {
  return (
    <MoonOuterWrapper>
      <Header />
      <InnerWrapper>
      <FirstPageHeading><span>01</span> Pick your destination</FirstPageHeading>
      <DestinationImg src={ theMoon } alt="The Moon" />
      <MidPageNav>
        <ul>
          <NavText>Moon</NavText>
          <NavText>Mars</NavText>
          <NavText>Europa</NavText>
          <NavText>Titan</NavText>
        </ul>
      </MidPageNav>

      <PitchSection>
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
      </DestinationInfo>
      </InnerWrapper>
    </MoonOuterWrapper>
  )
}

export default Moon;

const MoonOuterWrapper = styled(OuterWrapper)`
 background-image: url(${moonBackground});
`

const PitchSection = styled.section`
  margin-bottom: 2rem;
`
const DestinationInfo = styled.section`
  border-top: 1px solid var(--primary-text);
  width: 95%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

`