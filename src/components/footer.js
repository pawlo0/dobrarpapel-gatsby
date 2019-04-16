import React from "react"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa"

const Footer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40px 40px;
  justify-items: center;
  align-items: center;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    justify-items: start;
    margin-left: 25px;
  }

  @media only screen and (min-width: 992px) {
    margin-left: 40px;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 50px;
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
