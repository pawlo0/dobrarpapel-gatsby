import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #___gatsby>div {
    height: 100%;
  }
`

const IndexContentWrapper = styled.div`
  display: grid;

  @media only screen and (min-width: 600px) {
    grid-template-columns: 100%;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 50%);
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, auto);
  }
`

const IndexPage = () => (
  <Layout>
    <GlobalStyle />
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <IndexContentWrapper>
      <h1>This is content</h1>
      <h1>This is content</h1>
      <h1>This is content</h1>
    </IndexContentWrapper>
  </Layout>
)

export default IndexPage
