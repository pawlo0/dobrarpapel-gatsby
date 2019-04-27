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
    header {
      background: ${props => (props.layoutOption === "post" ? "#000" : "#fff")};
      color: ${props => (props.layoutOption === "post" ? "#fff" : "#000")};
    }
    footer {
      background: ${props => (props.layoutOption === "post" ? "#000" : "#fff")};
      color: ${props => (props.layoutOption === "post" ? "#fff" : "#000")};
    }
  }

  @media only screen and (min-width: 992px) {
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

const Layout = ({ layoutOption, children }) => (
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
      <LayoutStyle layoutOption={layoutOption}>
        <HeaderStyled
          siteTitle={data.site.siteMetadata.title}
          layoutOption={layoutOption}
        />
        <Content>{children}</Content>
        <FooterStyled />
      </LayoutStyle>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  layoutOption: PropTypes.string.isRequired,
}

Layout.defaultProps = {
  layoutOption: "main",
}

export default Layout
