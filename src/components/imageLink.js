import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Item = styled(Link)`
  overflow: hidden;
  grid-column-start: span ${props => props.columns};
  div {
    height: 100%;
    transition: transform 0.3s ease-out;
  }
  div:hover {
    transform: scale(1.1);
  }
`
function renderImage(file) {
  console.log(file)
  return <Img fluid={file.node.childImageSharp.fluid} />
}
const MyImg = function(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(
          images.edges.find(image => image.node.relativePath === props.src)
        )
      }
    />
  )
}

const GridItem = props => (
  <Item columns={props.columns * 1}>
    <MyImg src={props.image} alt="" />
  </Item>
)

export default GridItem

GridItem.defaultProps = {
  columns: 1,
}

GridItem.propTypes = {
  image: PropTypes.string.isRequired,
  columns: PropTypes.string.isRequired,
}
