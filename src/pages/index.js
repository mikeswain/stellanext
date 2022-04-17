import * as React from "react";
import Header from "../components/Header";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

function HomePage() {
  const categories = [];
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
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
