import React from "react";
import styled from "styled-components/macro";
import { InnerWrapper, OuterWrapper, H2 } from "../ReusableStyles";
import Header from "./Header";
import homeBackGround from '../../assets/home/background-home-mobile.jpg'


const LandingPage = () => {
  return (
    <HomeOuterWrapper>
      <Header />
      <InnerWrapper>
      <HomeH2>So, you want to travel to</HomeH2>
    <h1>Space</h1>
    <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!
    </p>
    <ExploreBubble>
      <p>Explore</p>
    </ExploreBubble>
      </InnerWrapper>
    </HomeOuterWrapper>

  )
}

export default LandingPage;
  
 const HomeOuterWrapper = styled(OuterWrapper)`
  max-height: 100vh;
  background-image: url(${homeBackGround});
  background-size: 100% 100%;
  background-position: center;
` 

const HomeH2 = styled(H2)`
  font-size: 16px;
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
  

  p {
    color: black;
    text-transform: uppercase;
    font-size: 20px;
    font-family: 'Bellefair', serif;
    letter-spacing: 1.5px;
  }
`