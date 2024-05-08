import styled from "styled-components/macro";

export const DestinationH1 = styled.h1`
  font-size: 56px;
  margin: 2.5rem 0 2rem;

  @media (min-width: 1200px) {
    font-size: 100px;
  }
`

export const Heading4 = styled.h3`
  font-size: 16px;
  margin-bottom: 0.5rem;
  font-weight: 300;
  font-family: 'Barlow Condensed', sans-serif;

  @media (min-width: 600px) {
  font-size: 24px;
  opacity: 50% //det här borde gälla alla media queries?
  }
  @media (min-width: 1200px) {
    font-size: 32px;
    letter-spacing: 2.7px;
  }
`

export const FirstPageHeading = styled.h2`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.7px;
	font-family: 'Barlow Condensed', sans-serif;
  
  span {
    color: #626262;
  }

  @media (min-width: 600px) {
    font-size: 20px;
    letter-spacing: 4.75px;
    left: -35%;
    position: relative;
  }
  
  @media (min-width: 1200px) {
    font-size: 28px;
    left: 12%;
    top: 5vh;
    position: absolute;
  }
`

export const Subheading1 = styled.h4`
  font-size: 28px;
  font-family: 'Bellefair', serif;
  font-weight: 300;

  @media (min-width: 600px) {
    font-size: 40px;
    margin-bottom: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 54px;
    display: inline;
    width: 20rem;
  }
`
export const Subheading2 = styled.h3`
  font-size: 14px;
  letter-spacing: 2.7px;
  font-family: 'Barlow Condensed', sans-serif;
  margin-bottom: 1rem;
`
export const NavText = styled.p`
  font-size: 20px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 300;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.secondaryText};
  margin: 1rem;

  span {
    font-weight: 700;
    margin-right: 0.5rem;
  }
  
  @media (min-width: 600px) {
    margin: 0;
    font-size: 16px;
    padding: 2.4rem 0;
  
  span {
    display: none;
  }
  }
  @media (min-width: 1200px) {
    span {
      display: inline;
      margin-right: 0;
    }
  }
  
`
export const OuterWrapper = styled.div`
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InnerWrapper = styled.main`
  text-align: center;
  padding: 1.5rem;
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  
  @media (min-width: 600px) {
    padding: 1.5rem 1.5rem 0;
    height: 90vh;
    width: 80vw;
  }
  
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
    width: 100%;
    padding: 1.5rem 0 0 12%;
  }`

  export const MidPageNav = styled.nav`
    width: 90%;
    margin: 0 auto;

    @media (min-width: 600px) {
    width: 35vw;
    }
    
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
    }
    li button {
      background-color: transparent;
      font-size: 16px;
      font-family: 'Barlow Condensed', sans-serif;
      letter-spacing: 2.7px;
      text-transform: uppercase;
      color: ${({theme}) => theme.colors.secondaryText};
    }

    @media (min-width: 1200px) {
      margin: 0;

      ul {
        justify-content: left;
      }

      li button {
        margin-right: 2rem;
      }
  }
  `

export const DestinationImg = styled.img`
  width: 10rem;
  margin: 2rem 0;
  
  @media (min-width: 600px) {
    width: 20rem;
    margin: 4rem 0;
  }
  @media (min-width: 1200px) {
    width: 28rem;
    margin: 0;
  }
`

export const CrewImage = styled.img`
  height: 14.5rem;
  margin-top: 2rem;

  @media (min-width: 600px) {
    height: auto;
    width: 28rem;
    margin: 4rem 0 0;
  }
`