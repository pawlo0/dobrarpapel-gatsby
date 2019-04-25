import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

const LayoutStyle = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 100%;
  grid-template-rows: 80px auto;

  @media only screen and (min-width: 600px) {
    grid-template-rows: 100px auto;
  }

  @media only screen and (min-width: 768px) {
    grid-template-areas:
      "header content"
      "footer content";
    grid-template-columns: 25% auto;
    grid-template-rows: 70vh 30vh;
  }

  @media only screen and (min-width: 992px) {
    ...;
  }

  @media only screen and (min-width: 1200px) {
  }
`

const Content = styled.div`
  grid-area: content;
`

const HeaderStyled = styled(Header)`
  grid-area: header;
`

const FooterStyled = styled(Footer)`
  grid-area: footer;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutStyle>
        <HeaderStyled siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
        <FooterStyled />
      </LayoutStyle>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
