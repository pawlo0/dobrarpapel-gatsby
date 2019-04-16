import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

const LayoutStyle = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 80px 300px auto;
  grid-auto-flow: row;

  @media only screen and (min-width: 600px) {
    grid-template-rows: 100px 300px auto;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 25% auto;
    grid-template-rows: 1fr auto;
  }

  @media only screen and (min-width: 992px) {
    ...;
  }

  @media only screen and (min-width: 1200px) {
  }
`
const Content = styled.div`
  grid-row-start: span 3;
  border: 1px solid black;
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
        <Footer />
      </LayoutStyle>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
