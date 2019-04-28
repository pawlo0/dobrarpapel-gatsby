import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const AprenderWrapper = styled.div`
  padding: 3em 1em;

  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
    padding: 4em 2em;
  }

  @media only screen and (min-width: 1200px) {
    padding: 5em 3em;
  }
`

const AprenderItem = styled.div`
  padding-top: 20px;
  h1 {
    text-align: center;
  }
  h3 {
    text-align: center;
  }
`

const Title = styled.h1`
  animation: 0.5s ease-out slideTitle;
  @media only screen and (min-width: 768px) {
    @keyframes slideTitle {
      from {
        transform: translateY(-1.5em);
        opacity: 0;
      }
      to {
        transform: translateY(0em);
        opacity: 1;
      }
    }
  }
`

export default ({ data }) => (
  <Layout layoutOption="aprender">
    <AprenderWrapper>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <AprenderItem key={node.id}>
          <Title>{node.frontmatter.title}</Title>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </AprenderItem>
      ))}
    </AprenderWrapper>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Aprender" } } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`
