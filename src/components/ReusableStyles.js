import styled from "styled-components/macro";

export const H1 = styled.h1`
  @media (min-width: 600px) {
    font-size: 150px;
  }
`
export const DestinationH1 = styled.h1`
  font-size: 56px;
  margin: 2.5rem 0 2rem;
`
export const H2 = styled.h2`
  @media (min-width: 600px) {
    font-size: 100px;
  }
`
export const H3 = styled.h3`
  @media (min-width: 600px) {
    font-size: 56px;
  }
`

export const Heading4 = styled.h3`
  font-size: 16px;
  font-family: 'Bellefair', serif;
  margin-bottom: 0.5rem;
@media (min-width: 600px) {
  font-size: 32px;
}
`

export const FirstPageHeading = styled.h2`
  font-size: 16px;
  letter-spacing: 2.7px;
	font-family: 'Barlow Condensed', sans-serif;
  span {
    color: #626262;
  }

  @media (min-width: 600px) {
    font-size: 28px;
    letter-spacing: 4.75px;
  }
`

export const Subheading1 = styled.h4`
  font-size: 28px;
  font-family: 'Bellefair', serif;
`
export const Subheading2 = styled.h3`
  font-size: 14px;
  letter-spacing: 2.7px;
  font-family: 'Barlow Condensed', sans-serif;
  margin-bottom: 1rem;
`
export const NavText = styled.li`
  font-size: 16px;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 2.7px;
  text-transform: uppercase;
`
export const OuterWrapper = styled.div`
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: 100% 100%;
  background-position: center;
`

export const InnerWrapper = styled.main`
  text-align: center;
  padding: 1.5rem;
  height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

  export const MidPageNav = styled.nav`
    width: 90%;
    margin: 0 auto;
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
      color: var(--secondaryText);
    }
  `

export const DestinationImg = styled.img`
  width: 10rem;
  margin: 2rem 0;
`

export const CrewImage = styled.img`
  width: 10rem;
  margin-top: 2rem;
`