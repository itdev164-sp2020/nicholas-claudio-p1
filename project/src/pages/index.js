import React from "react"
import { Link } from "gatsby"

import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, image }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {
        data.allContentfulProduct.edges.map(edge => (
          <li>
            <Link to={edge.node.slug} key={edge.node.id}>{edge.node.productName.productName}</Link>
            <div>
              {/* <img src={edge.node.image.fluid.src} alt="pic"/> */}
            </div>
            <div>
              {edge.node.productDescription.childMarkdownRemark.excerpt}
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          productName {
            productName
          }        
          slug
          productDescription {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`