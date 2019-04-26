import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Item = styled(Link)`
  overflow: hidden;
  position: relative;
  @media only screen and (min-width: 1200px) {
    grid-column-start: span ${props => props.columns};
  }
  div {
    height: 100%;
    transition: transform 0.3s ease-out;
    position: absolute;
  }
  &:hover div {
    transform: scale(1.1);
  }

  &:hover h2 {
    opacity: 1;
    top: 20px;
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
            filter: {
              sourceInstanceName: { eq: "images" }
              extension: { regex: "/jpeg|jpg|png|gif/" }
            }
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

const Title = styled.h2`
  position: absolute;
  z-index: 10;
  right: 20px;
  top: 20px;
  text-align: right;
  color: white;
  opacity: 1;
  @media only screen and (min-width: 1200px) {
    opacity: 0;
    top: 100px;
    transition: all 0.4s ease-out;
  }
`

const GridItem = props => (
  <Item columns={props.columns * 1} to={props.link}>
    <MyImg src={props.image} alt="" />
    <Title>{props.title}</Title>
  </Item>
)

export default GridItem

GridItem.defaultProps = {
  columns: 1,
}

GridItem.propTypes = {
  image: PropTypes.string.isRequired,
  columns: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
