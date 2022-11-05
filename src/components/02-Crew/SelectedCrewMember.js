import React from "react";
import styled from "styled-components/macro";
import { Heading4, Subheading1, CrewImage } from "../ReusableStyles";
import commander from '../../assets/crew/image-douglas-hurley.webp'

const SelectedCrewMember = ({name, image, role, bio}) => {
  // Måste lägga till funktionalitet för att välja crew med klick på prick
  //och med svep. Fixa färg på prickar och linje.
  // Fixa bild från json istf dummy
  // Fixa carousel för crew - info & bilder
  return (
    <section>
      <ImageContainer>
        <CrewImage src={commander} alt={name} />
        {/* <img src={`${image}`} alt={name} /> */}
      </ImageContainer>
      <DotContainer>
        <Dot type="button" />
        <Dot type="button" />
        <Dot type="button" />
        <Dot type="button" />
      </DotContainer>
      <Heading4>{role}</Heading4>
      <CrewName>{name}</CrewName>
      <p>{bio}</p>
    </section>

  )
}


export default SelectedCrewMember;

const ImageContainer = styled.div`
  border-bottom: 1px solid white;
`

const DotContainer = styled.div`
  display: flex;
  width: 27vw;
  justify-content: space-around;
  margin: 2rem auto;
  
`
const Dot = styled.button`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 5rem;
  background-color: var(--secondary-text);
`

const CrewName = styled(Subheading1)`
  margin-bottom: 2rem;
`