import React from "react";
import styled from "styled-components/macro";
import { InnerWrapper, OuterWrapper, H2, FirstPageHeading } from "../ReusableStyles";
import Header from "../Header";
import homeBackGroundMobile from '../../assets/home/background-home-mobile.jpg'
import homeBackGroundTablet from '../../assets/home/background-home-tablet.jpg'
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <HomeOuterWrapper>
      <Header />
      <HomeInnerWrapper>
        <HomeH2>So, you want to travel to</HomeH2>
        <HomeH1>Space</HomeH1>
        <TextContainer>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </TextContainer>
        <Link to="/destination">
          <ExploreBubble>
            <p>Explore</p>
          </ExploreBubble>
        </Link> 
          
      </HomeInnerWrapper>
    </HomeOuterWrapper>

  )
}

export default LandingPage;
  
 const HomeOuterWrapper = styled(OuterWrapper)`
  background-image: url(${homeBackGroundMobile});
  
  @media (min-width: 600px) {
    background-image: url(${homeBackGroundTablet});
  }
` 
const HomeInnerWrapper = styled(InnerWrapper)`
  @media (min-width: 600px) {
    margin-top: 4.5rem;
  }
`
const HomeH2 = styled(FirstPageHeading)`
  font-size: 16px;

  @media (min-width: 600px) {
    font-size: 20px;
    letter-spacing: 3.38px;
   }
`

const HomeH1 = styled.h1`
   @media (min-width: 600px) {
    font-size: 150px;
    margin-bottom: 2.5rem;
   }
`
const TextContainer = styled.div`
  @media (min-width: 600px) {
    width: 28rem;
    text-align: center;

    p {
      line-height: 28px;
    }
  }
`

const ExploreBubble = styled.div`
  background-color: white;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 0 auto;
  position: absolute;
  bottom: 6vh;
  left: 0;
  right: 0;
  
  @media (min-width: 600px) {
    bottom: 8vh;

  }
  

  p {
    color: black;
    text-transform: uppercase;
    font-size: 20px;
    font-family: 'Bellefair', serif;
    letter-spacing: 1.5px;
  }
  
  @media (min-width: 600px) {
    height: 242px;
    width: 242px;
    
    p {
    letter-spacing: 2px;
    font-size: 32px;
    }
  }

`