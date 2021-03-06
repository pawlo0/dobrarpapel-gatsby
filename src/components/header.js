import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "./logo"
import Logo2 from "./logo2"

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 120px auto;
  align-items: center;
  align-content: center;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 150px auto;
  }

  @media only screen and (min-width: 768px) {
    grid-template-rows: 90px auto;
    grid-template-columns: 100%;
    align-items: start;
    align-content: start;
    padding: 50px 25px;
    position: fixed;
    top: 0px;
    width: 25%;
    height: 70vh;
  }

  @media only screen and (min-width: 992px) {
    grid-template-rows: 100px auto;
    padding: 80px 40px;
  }

  @media only screen and (min-width: 1200px) {
    grid-template-rows: 110px auto;
    padding: 90px 50px;
  }
`

const LogoWrapper = styled.div`
  width: 80px;
  justify-self: center;

  @media only screen and (min-width: 600px) {
    width: 90px;
  }

  @media only screen and (min-width: 768px) {
    justify-self: start;
    width: 100px;
  }

  @media only screen and (min-width: 992px) {
    width: 110px;
  }

  @media only screen and (min-width: 1200px) {
    width: 120px;
  }
`

const LinksWrapper = styled.div`
  justify-self: end;
  display: flex;
  margin-right: 10px;

  @media only screen and (min-width: 600px) {
    margin-right: 30px;
  }

  @media only screen and (min-width: 768px) {
    justify-self: start;
    flex-flow: column nowrap;
    margin-top: 20px;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 30px;
  }
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  :hover {
    color: rgb(246, 153, 63);
  }
  transition: color 0.5s;
  font-size: 1.1em;
  margin-right: 10px;
  @media only screen and (min-width: 600px) {
    padding-top: 5px;
    font-size: 1.2em;
  }
  @media only screen and (min-width: 992px) {
    padding-top: 6px;
    font-size: 1.3em;
  }
`

const Header = ({ data, layoutOption }) => (
  <HeaderStyled>
    <LogoWrapper>
      <Link to="/">{layoutOption === "post" ? <Logo2 /> : <Logo />}</Link>
    </LogoWrapper>
    <LinksWrapper>
      <LinkStyled to="/">Aprender</LinkStyled>
      <LinkStyled to="/">Galeria</LinkStyled>
      <LinkStyled to="/">Acerca</LinkStyled>
    </LinksWrapper>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
