import React, { useState } from "react";
import styled from "styled-components/macro";
import logo from "../assets/shared/logo.svg"
import hamburger from "../assets/shared/icon-hamburger.svg"
import close from "../assets/shared/icon-close.svg"
import { NavText } from "./ReusableStyles";
import { Link, NavLink } from "react-router-dom";

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
      <Link to="/"><Logo src={logo} alt="home logo" /></Link>
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
            <NavLink to="/" end><NavText> <span>00</span> Home</NavText></NavLink>
            <NavLink to="/destination"><NavText> <span>01</span> Destination</NavText></NavLink>
            <NavLink to="/crew"><NavText> <span>02</span> Crew</NavText></NavLink>
            <NavLink to="/technology"><NavText> <span>03</span> Technology</NavText></NavLink>
          </NavLinks>
        </NavLinkWrapper>  
    </StyledHeader>
  )
}

export default Header;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
  
  @media (min-width: 600px) {
    margin: -1rem 0 0 1rem;
    width: 3rem;
    height: 3rem;
  }
  @media (min-width: 1024px) {
    //margin: 4.7rem 0 0 2rem;
    position: absolute;
    left: 2rem;
    top: 4.5rem;
    
  }
`

const StyledHeader = styled.header`
  position: relative;
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
  right: 0;
  width: 70%;
  height: 100vh;
  backdrop-filter: blur(8px);
  z-index: 1;
  
  @media (min-width: 600px) {
    height: 6rem;
    background-color: var(--bg-nav);
    backdrop-filter: none;
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 55vw;
  }

  @media (min-width: 1024px) {
    backdrop-filter: blur(80px);
    background-color: transparent;
    top: 2rem;
  }
`
const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 8rem;
  margin-left: 1rem;
  list-style: none;

  @media (min-width: 600px) {
    flex-direction: row;
    gap:0.5rem;
    position: static;
    margin: 0;
    justify-content: space-around;
    width: 80%;
  }
  @media (min-width: 1024px) {
   
    
  }
`

const Hamburger = styled.div`
  z-index: 2;
  position: absolute;
  right: 2rem;

  @media (min-width: 600px) {
    display: none;
  }
  
  img {
    width: 1.5rem;
  }
`
  
const Line = styled.span`
  display: none;

  @media (min-width: 1024px) {
    border-bottom: 1px solid #979797;
    width: 35%;
    display: inline;
    position: absolute;
    left: 12%;
    top: 5rem;
    z-index: 2;
    background-color: #979797;
  }
`