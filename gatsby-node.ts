import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({
  node,
  actions: { createNodeField },
  getNode,
}) => {
  if (node.internal.type !== `MarkdownRemark`) {
    return
  }
  const [slug, title, date, last_update, description, excerpt] = [
    node.frontmatter.slug || `/articles` + createFilePath({ node, getNode }),
    node.frontmatter.title,
    node.frontmatter.date,
    node.frontmatter.last_update,
    node.frontmatter.description,
    node.excerpt,
  ]
  console.log(slug)
  createNodeField({ name: `slug`, node, value: slug })
  createNodeField({ name: `title`, node, value: title })
  createNodeField({ name: `date`, node, value: date })
  createNodeField({ name: `last_update`, node, value: last_update })
  createNodeField({ name: `description`, node, value: description })
  createNodeField({ name: `excerpt`, node, value: excerpt })
}
