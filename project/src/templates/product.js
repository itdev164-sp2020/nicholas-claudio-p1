import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'


const Product = ({ data }) => {
  const { productName, productDescription, image } = data.contentfulProduct;

  return (
    <Layout>
      <h1>{productName.productName}</h1>
      {/* <img src={image.file.url} alt=""/> */}
      <div dangerouslySetInnerHTML={{__html: productDescription.childMarkdownRemark.html}}></div>
    </Layout>
  );
}

export default Product;

export const pageQuery = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      productName {
        productName
      }
      slug
      productDescription {
        childMarkdownRemark {
          html
        }
      }      
    }
  }
`