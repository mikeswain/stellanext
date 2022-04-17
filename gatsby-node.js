const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = node.frontmatter.slug || createFilePath({ node, getNode, basePath: ``, trailingSlash: false }).replace(/^\//, "");
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
    // Set collection name
    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;
    createNodeField({
      node,
      name: "collection",
      value: collection
    });
  }
};
