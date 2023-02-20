import React from "react";
import styled from "styled-components/macro";
import { Subheading1, Subheading2, DestinationH1 } from "../../styles/ReusableStyles";

const SelectedDestination = ({ destination }) => {
  return (
    <>
      <section>
        <DestinationH1>{destination.name}</DestinationH1>
        <p>{destination.description}</p>
      </section>
      <DestinationInfo>
        <div>
          <Subheading2>Avg. distance</Subheading2>
          <DistanceInfo>{destination.distance}</DistanceInfo>
        </div>
        <div>
          <Subheading2>Est. travel time</Subheading2>
          <DistanceInfo>{destination.travel}</DistanceInfo>
        </div>
      </DestinationInfo>
      </>
  )
}

export default SelectedDestination;

const DistanceInfo = styled(Subheading1)`
  @media (min-width: 1200px) {
   font-size: 28px;
  }
`

const DestinationInfo = styled.section`
  border-top: ${({theme}) => `1px solid ${theme.colors.primaryText}`};
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2rem;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
  
  @media (min-width: 1200px) {
    padding-bottom: 0;
    justify-content: left;
    gap: 5rem;
  }
`