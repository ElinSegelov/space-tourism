import React from 'react';
import { useSwipeable } from 'react-swipeable'
import { CrewImage } from '../ReusableStyles';
import styled from 'styled-components/macro';

const CrewSlider = ({ crew, activeIndex, setActiveIndex }) => {

  //If updatedIndex is higher or lower than the numer of elements in crew, 
  // activeIndex is set to crew' lowest or highest index so the carousel "loops"
  const updateActiveIndex = (updatedIndex) => {
    if (updatedIndex < 0) {
      updatedIndex = crew.length-1;
    } else if (updatedIndex >= crew.length) {
      updatedIndex =  0
    }
    setActiveIndex(updatedIndex)
  }
  //Enable swipe handeling och slider
  const handlers = useSwipeable({
    onSwipedLeft: () => updateActiveIndex(activeIndex +1),
    onSwipedRight: () => updateActiveIndex(activeIndex -1)
  })

  const carouselImages = crew.map((member) => {
    return (
      <ImageWrapper key={member.name}>
        <CrewImage src={member.images.webp} alt={member.name} />
      </ImageWrapper>
    )
  })

  const allIndicators = crew.map((member, index) => {
    return (
      <Dot
      // Opacity of button should change when it's active
        style={{ opacity: index === activeIndex && '1'}}
        key={member.name}
        value={member.role}
        type="button"
        onClick={() => {updateActiveIndex(index)}}>
      </Dot>
    )
    })
  // Inline styling for Inner is to shift between images using the active index * 100% to show the right image
  return(
    <Carousel {...handlers}>
      <Inner style={{ transform: `translateX(-${activeIndex *100}%)` }}>
        {carouselImages}
      </Inner>
      <Indicators>
        {allIndicators}
      </Indicators>
    </Carousel>
  )
}

export default CrewSlider;

const Carousel = styled.div`
  overflow: hidden;
`

const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`

const ImageWrapper = styled.div`
  border-bottom: 0.1rem solid rgba(255,255,255,0.2);
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const Indicators = styled.div`
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
  opacity: 0.2;
  margin: 0.5rem;
`