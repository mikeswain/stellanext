import * as React from "react";
import Header from "../components/Header";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

function HomePage({
  data: {
    allMarkdownRemark: { edges }
  }
}) {
  const categories = edges.map(
    ({
      node: {
        frontmatter: { title },
        fields: { slug }
      }
    }) => ({ slug, title })
  );
  return (
    <Layout>
      <ol>
        {(categories || []).map(({ slug, title }, i) => (
          <li key={i}>
            <a href={`/painting?category=${slug}`}>
              <a>{title}</a>
            </a>
          </li>
        ))}
      </ol>
    </Layout>
  );
}

export default HomePage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { fields: { collection: { eq: "categories" } }, frontmatter: {} }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
