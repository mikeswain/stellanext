import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { StringParam, useQueryParam } from "use-query-params";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

export default function Paintings({
  data: {
    allMarkdownRemark: { edges }
  }
}) {
  const [categoryParam] = useQueryParam("category", StringParam);
  const [category, setCategory] = useState(categoryParam);
  const [paintings, setPaintings] = useState();
  useEffect(() => {
    setPaintings(
      edges
        .map(
          ({
            node: {
              frontmatter,
              fields: { slug }
            }
          }) => ({ ...frontmatter, slug })
        )
        .filter(({ categories }) => !category || (categories || []).includes(category))
    );
  }, [category]);

  return (
    <Layout>
      {paintings && (
        <ImageGallery
          showIndex
          thumbnailPosition="left"
          lazyLoad
          loading="lazy"
          items={paintings.map(({ image, title }) => ({
            original: image,
            thumbnail: `${image}/-/preview/100x100`,
            originalTitle: title,
            thumbnailTitle: title
          }))}
        />
      )}
    </Layout>
  );
}

export const query = graphql`
  query PaintingsIndexQuery {
    allMarkdownRemark(filter: { fields: { collection: { eq: "paintings" } }, frontmatter: {} }) {
      edges {
        node {
          frontmatter {
            title
            date
            image
            media
            price
            size
            sold
            description
            categories
          }
          fields {
            slug
            collection
          }
        }
      }
    }
  }
`;
