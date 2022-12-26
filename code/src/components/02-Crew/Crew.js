import React from "react";
import styled from "styled-components/macro";
import { 
  OuterWrapper,
  InnerWrapper,
  FirstPageHeading
} from "../ReusableStyles";
import Header from "../Header";
import crewBackgroundMobile from '../../assets/crew/background-crew-mobile.jpg';
import crewBackgroundTablet from '../../assets/crew/background-crew-tablet.jpg';
import crewBackgroundDesktop from '../../assets/crew/background-crew-desktop.jpg';
import SelectedCrewMember from "./SelectedCrewMember";

const Crew = () => {
  return(
    <CrewOuterWrapper>
      <Header />
      <InnerWrapper>
        <FirstPageHeading><span>02</span> Meet your crew</FirstPageHeading>
        <SelectedCrewMember />
      </InnerWrapper>
    </CrewOuterWrapper>
  )
}

export default Crew;

const CrewOuterWrapper = styled(OuterWrapper)`
  background-image: linear-gradient(rgba(11,13,23, 0.7), rgba(11,13,23, 0.7)), url(${crewBackgroundMobile});
  @media (min-width: 600px) {
    background-image: linear-gradient(rgba(11,13,23, 0.7), rgba(11,13,23, 0.7)), url(${crewBackgroundTablet});
  }
  @media (min-width: 1200px) {
    background-image: linear-gradient(rgba(11,13,23, 0.7), rgba(11,13,23, 0.7)), url(${crewBackgroundDesktop});
  }
  `
