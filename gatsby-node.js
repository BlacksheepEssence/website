const withDefaults = require(`@lekoarts/gatsby-theme-jodie-core/utils/default-options`)

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions, schema }, themeOptions) => {
  console.info('CUSTOM - createSchemaCustomization')
  const { createTypes, createFieldExtension } = actions

  const { basePath } = withDefaults(themeOptions)

  createTypes(`
    interface Product @nodeInterface {
      id: ID!
      title: String!
      subtitle: String
      shortTitle: String!
      price: String
      capacity: String
      category: String!
      slug: String! @slugify
      date: Date! @dateformat
      color: String
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 160): String!
      body: String!
    }

    type MdxProduct implements Node & Product {
      title: String!
      subtitle: String
      shortTitle: String!
      price: String
      capacity: String
      category: String!
      slug: String! @slugify
      date: Date! @dateformat
      color: String
      cover: File! @fileByRelativePath
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
    }
  `)
}

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }, themeOptions) => {
  const { createNode, createParentChildLink } = actions

  const { projectsPath, pagesPath } = withDefaults(themeOptions)

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "projectsPath" and "pagesPath"
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName


  // Check for "projects" and create the "Project" type
  if (node.internal.type === `Mdx` && source === 'content/products') {

    const fieldData = {
      slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
      title: node.frontmatter.title,
      subtitle: node.frontmatter.subtitle,
      shortTitle: node.frontmatter.shortTitle,
      price: node.frontmatter.price,
      capacity: node.frontmatter.capacity,
      cover: node.frontmatter.cover,
      date: node.frontmatter.date,
      category: node.frontmatter.category,
      color: node.frontmatter.color ? node.frontmatter.color : undefined,
    }

    const mdxProductId = createNodeId(`${node.id} >>> MdxProduct`)

    createNode({
      ...fieldData,
      // Required fields
      id: mdxProductId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxProduct`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Product interface`,
      },
    })

    createParentChildLink({ parent: node, child: getNode(mdxProductId) })
  }
}