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
              {edge.node.price}
            </div>
            <div>
              {/* <img src={edge.node.image.fluid.src} alt="pic"/>  */}
              {/* I tried to access the images here along with a query to grab them but I could not get it to work for some reason */}
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
          price        
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