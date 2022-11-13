import React from "react";
import styled from "styled-components/macro";
import { 
  OuterWrapper,
  InnerWrapper,
  FirstPageHeading
} from "../ReusableStyles";
import Header from "../Header";
import crewBackground from '../../assets/crew/background-crew-mobile.jpg';
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
//behöver lägga till blur eller nåt overlay
 background-image: url(${crewBackground});
`