import React, { useState } from "react";
import styled from "styled-components/macro";
// import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg"
import hamburger from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"
import { NavText } from "./ReusableStyles";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [navMenuActive, setNavMenuActive] = useState(false)
  const showNavLinks = () => {
    if (navMenuActive === false) {
      setNavMenuActive(true)
    } else {
      setNavMenuActive(false)
    }
  }
  return (
    <StyledHeader>
      <Logo src={logo} alt="home logo" />
      <Line></Line>
         { !navMenuActive ?
          <Hamburger onClick={showNavLinks}>
            <img src={hamburger} alt="Open navmenu" />
          </Hamburger>:
          <Hamburger onClick={showNavLinks}>
            <img src={close} alt="Open navmenu" />
          </Hamburger> }
        <NavLinkWrapper style={navMenuActive? {display:'flex'} : {display:'none'} }>
          <NavLinks>
            <NavLink to="/"><NavText> 00 Home</NavText></NavLink>
            <NavLink to="/destination"><NavText> 01 Destination</NavText></NavLink>
            <NavLink to="/crew"><NavText> 02 Crew</NavText></NavLink>
            <NavLink to="/technology"><NavText> 03 Technology</NavText></NavLink>
          </NavLinks>
        </NavLinkWrapper>  
    </StyledHeader>
  )
}

export default Header;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 0.5rem;

`

const StyledHeader = styled.header`
position: relative;
top: 1rem;
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
padding:1rem;
height: 10vh;
`
const NavLinkWrapper = styled.nav`
  position: absolute;
  top: 0;
  right: -2rem;
  width: 70%;
  height: 100vh;
  backdrop-filter: blur(8px);
  z-index: 1;
`
const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 8rem;
  margin-left: 1rem;
  list-style: none;
   
  li {
    font-size: 20px;
    text-transform: uppercase;
    margin: 1rem;
    color: var(--secondary-text)
   }
`

const Hamburger = styled.div`
  z-index: 2;
  position: absolute;
  right: 2rem;
  
  img {
    width: 1.5rem;
  }
`
  
const Line = styled.span`
  display: none;

  @media (min-width:600px) {
    border-bottom: 2px solid var(--secondary-text);
    width: 50%
  }
`