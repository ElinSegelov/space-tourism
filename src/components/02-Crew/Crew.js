import React from "react";
import styled from "styled-components/macro";
import { useState } from "react";
import { 
  OuterWrapper,
  InnerWrapper,
  FirstPageHeading
} from "../ReusableStyles";
import Header from "../Header";
import crewBackground from '../../assets/crew/background-crew-mobile.jpg';
import data from '../../data.json';
import SelectedCrewMember from "./SelectedCrewMember";

const Crew = () => {
  const [SelectedCrew, setSelectedCrew] = useState('commander');
  const [choice, setChoice] = useState(data.crew[0])
  let selected;
  
  /* const selectDestination = (e) => {
    console.log('event target value', e.target.value)
    setSelectedDestination(e.target.value)
    selected = data.destinations.filter((destination) => destination.name === selectedDestination);
    setChoice(...selected)
  } */
return(

<CrewOuterWrapper>
      <Header />
      <InnerWrapper>
      <FirstPageHeading><span>02</span> Meet your crew</FirstPageHeading>
      <SelectedCrewMember
          name={choice.name}
          role={choice.role}
          bio={choice.bio} />
      </InnerWrapper>
    </CrewOuterWrapper>
  )
}


export default Crew;

const CrewOuterWrapper = styled(OuterWrapper)`
 background-image: url(${crewBackground});

`