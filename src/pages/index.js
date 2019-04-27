import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
      <GridItem image="papel.jpg" title="Aprender" link="/aprender" />
      <GridItem image="rosas.jpg" columns="2" title="Acerca" link="/acerca" />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <GridItem
          key={node.id}
          image={node.frontmatter.image}
          title={node.frontmatter.title}
          columns={node.frontmatter.columns}
          link={node.fields.slug}
        />
      ))}
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
    allMarkdownRemark(sort: { order: DESC, fields: [fileAbsolutePath] }) {
      edges {
        node {
          id
          frontmatter {
            title
            image
            columns
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
