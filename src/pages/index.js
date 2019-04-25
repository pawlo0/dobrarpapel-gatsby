import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import GridItem from "../components/imageLink"

const IndexContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 300px;

  @media only screen and (min-width: 600px) {
    grid-auto-rows: 400px;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    grid-auto-rows: 70vh;
  }

  @media only screen and (min-width: 992px) {
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <IndexContentWrapper>
      <GridItem image="papel.jpg" />
      <GridItem image="rosas.jpg" columns="2" />
      <Img fluid={data.yakai.childImageSharp.fluid} alt="" />
      <Img fluid={data.flores.childImageSharp.fluid} alt="" />
      <Img fluid={data.polvo.childImageSharp.fluid} alt="" />
      <Img fluid={data.ecosa.childImageSharp.fluid} alt="" />
    </IndexContentWrapper>
  </Layout>
)

export default IndexPage

export const indexImage = graphql`
  fragment indexImage on File {
    childImageSharp {
      fluid(maxWidth: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    yakai: file(relativePath: { eq: "yakai.jpg" }) {
      ...indexImage
    }

    ecosa: file(relativePath: { eq: "ecosa.jpg" }) {
      ...indexImage
    }

    papel: file(relativePath: { eq: "papel.jpg" }) {
      ...indexImage
    }

    polvo: file(relativePath: { eq: "polvo.jpg" }) {
      ...indexImage
    }

    flores: file(relativePath: { eq: "flores.jpg" }) {
      ...indexImage
    }

    rosas: file(relativePath: { eq: "rosas.jpg" }) {
      ...indexImage
    }
  }
`
