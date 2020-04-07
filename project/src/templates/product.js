import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Product = ({ data }) => {
  const { productName } = data.contentfulProduct;

  return (
    <Layout>
      <h1>{productName.productName}</h1>
    </Layout>
  );
}

export default Product;

export const pageQuery = graphql`
  query productQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      slug
      productName {
        productName
      }
    }
  }
`