import React from "react";
import styled from "styled-components/macro";
import { Subheading1, Subheading2, DestinationH1 } from "../ReusableStyles";

const SelectedDestination = ({ destination }) => {
  return (
    <InfoWrapper>
    <PitchSection>
        <DestinationH1>{destination.name}</DestinationH1>
        <p>{destination.description}</p>
      </PitchSection>
      <DestinationInfo>
        <div>
          <Subheading2>Avg. distance</Subheading2>
          <Subheading1>{destination.distance}</Subheading1>
        </div>
        <div>
          <Subheading2>Est. travel time</Subheading2>
          <Subheading1>{destination.travel}</Subheading1>
        </div>
      </DestinationInfo>
      </InfoWrapper>
  )
}

export default SelectedDestination;

const InfoWrapper = styled.div`
  @media (min-width: 1024px) {
   //width: 80%
    
  }
`

const PitchSection = styled.section`
  margin-bottom: 2rem;
`
const DestinationInfo = styled.section`
  border-top: 1px solid var(--primary-text);
  width: 95%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width:600px) {
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: 1024px) {
    width: 100%;
    padding-bottom: 0;
    justify-content: left;
    gap: 5rem;
    
  }
`