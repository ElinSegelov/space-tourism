import React from "react";
import styled from "styled-components";
import { Subheading1, Subheading2, DestinationH1 } from "../ReusableStyles";

const SelectedDestination = ({ destination }) => {
  return (
    <>
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
      </>
  )
}

export default SelectedDestination;


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