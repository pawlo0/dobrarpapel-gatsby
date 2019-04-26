import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Post = styled.div`
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

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Post>
        <Title>{post.frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
