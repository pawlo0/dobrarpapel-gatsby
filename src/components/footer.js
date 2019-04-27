import React from "react"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa"

const Footer = styled.footer`
  align-self: end;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40px 40px;
  justify-items: center;
  align-items: center;
  padding-top: 10px;

  @media only screen and (min-width: 768px) {
    justify-items: start;
    padding-left: 25px;
    padding-top: 15vh;
    position: fixed;
    bottom: 0px;
    height: 30vh;
    width: 25%;
  }

  @media only screen and (min-width: 992px) {
    padding-left: 40px;
  }

  @media only screen and (min-width: 1200px) {
    padding-left: 50px;
  }
`

const FooterText = styled.footer`
  background: white;
  font-size: 0.7em;
`

const Facebook = styled.button`
  background: #3b5998;
  color: #fff;
  border: 1px solid #263961;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  :hover {
    background: #fff;
    color: #3b5998;
  }
  transition: color 0.5s ease-out;
`

export default () => (
  <Footer>
    <Facebook>
      <FaFacebookF /> FACEBOOK
    </Facebook>
    <FooterText>Copyright &#169; Dobrar Papel 2019</FooterText>
  </Footer>
)
