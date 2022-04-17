import * as styles from "./CategoryMenu.module.css";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
export default function CategoryMenu() {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(graphql`
    query CategoryMenuQuery {
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
  `);
  const categories = edges.map(
    ({
      node: {
        frontmatter: { title },
        fields: { slug }
      }
    }) => ({ slug, title })
  );
  return (
    <nav className={styles.root}>
      {categories &&
        categories.map(({ slug, title }, i) => (
          <a key={i} href={`/paintings/?category=${slug}`}>
            {title}
          </a>
        ))}
    </nav>
  );
}
