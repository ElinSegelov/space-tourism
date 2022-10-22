import styled from "styled-components/macro";

export const H1 = styled.h1`
  @media (min-width: 600px) {
    font-size: 150px;
  }
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
export const Subheading1 = styled.h6`
  font-size: 28px;
  font-family: 'Bellefair', serif;
`
export const Subheading2 = styled.h6`
  font-size: 14px;
  font-family: 'Barlow Condensed', sans-serif;
`
export const NavText = styled.li`
  font-size: 16px;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 2.7px;
`
export const OuterWrapper = styled.div`
  height:100vh;
  width: 100vw;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
`

export const InnerWrapper = styled.main`
  text-align: center;
  padding: 1.5rem;
  height: 90vh;
  position: relative;

`