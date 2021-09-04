import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

import { Button } from "./Button"

import { menuData } from "../data/MenuData"
import logo from "../assets/images/change_logo.jpg"

const Header = ({ siteTitle }) => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((menuItem, key) => (
          <NavLink to={menuItem.link} key={key}>
            {menuItem.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/book">
          Book a call
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`
const NavLink = styled(Link)`
  color: #0c0c0c;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #0c0c0c;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: 48px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
