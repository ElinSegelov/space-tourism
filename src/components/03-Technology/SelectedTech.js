import React from "react";
import styled from "styled-components/macro";
import { Heading4, Subheading1, CrewImage } from "../ReusableStyles";
import techImg from '../../assets/technology/image-launch-vehicle-landscape.jpg'

const SelectedTech = ({name, image, description}) => {

  return (
    <section>
        <TechImage src={techImg} alt={name} />
        {/* <img src={`${image}`} alt={name} /> */}
      <SubSection>
        <DotContainer>
          <Dot type="button">1</Dot>
          <Dot type="button">2</Dot>
          <Dot type="button">3</Dot>
          
        </DotContainer>
        <Heading4>The terminolgy...</Heading4>
        <CrewName>{name}</CrewName>
        <p>{description}</p>
      </SubSection>
    </section>

  )
}


export default SelectedTech;

const SubSection = styled.div`
  padding: 0 1.5rem;
`

const TechImage = styled.img`
  width: 100vw;
  margin: 2rem 0;

`

const DotContainer = styled.div`
  display: flex;
  width: 40vw;
  justify-content: space-around;
  margin: 0 auto 2rem;
  
`
const Dot = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
  background-color: transparent;
  border: 1px solid var(--primary-text);
  color: #FFF;
`

const CrewName = styled(Subheading1)`
  margin-bottom: 2rem;
`