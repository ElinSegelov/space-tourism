import React from "react";
import styled from "styled-components/macro";
import { InnerWrapper, OuterWrapper, FirstPageHeading } from "../../styles/ReusableStyles";
import Header from "../Header";
import homeBackGroundMobile from '../../assets/home/background-home-mobile.jpg'
import homeBackGroundTablet from '../../assets/home/background-home-tablet.jpg'
import homeBackGroundDesktop from '../../assets/home/background-home-desktop.jpg'
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <HomeOuterWrapper>
      <Header />
      <HomeInnerWrapper>
        <TextContainer>
        <HomeH2>So, you want to travel to</HomeH2>
        <HomeH1>Space</HomeH1>
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
  
  @media (min-width: 1200px) {
    background-image: url(${homeBackGroundDesktop});
  }
` 
const HomeInnerWrapper = styled(InnerWrapper)`
  @media (min-width: 600px) {
    margin-top: 4.5rem;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
  }
`
const HomeH2 = styled(FirstPageHeading)`
  font-size: 16px;

  @media (min-width: 600px) {
    font-size: 20px;
    letter-spacing: 3.38px;
    position: static;
   }
   @media (min-width: 1200px) {
    font-size: 24px;
    letter-spacing: 6px;
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
  @media (min-width: 1200px) {
    text-align: left;
    position: absolute;
    left: 12%;
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
  position: absolute;
  bottom: 6vh;
  right: calc(50% - 75px);
  
  p {
    color: black;
    text-transform: uppercase;
    font-size: 20px;
    font-family: 'Bellefair', serif;
    letter-spacing: 1.5px;
  }
  
  @media (min-width: 600px) {
    bottom: 6vh;
    height: 15rem;
    width: 15rem;
    right: calc(50% - 7.5rem);
    
    p {
    letter-spacing: 2px;
    font-size: 32px;
    }
  }
  
  @media (min-width: 1200px) {
    height: 17rem;
    width: 17rem;
    right: 10%;
    bottom: 10vh;
    transition: border right bottom content-box 1s;
    
    &&:hover {
      border: 4rem solid rgba(25, 27, 35, 0.9);
      right: calc(10% - 4rem);
      bottom: calc(10vh - 4rem);
      box-sizing: content-box;
    }
  }
`