const path = require(`path`)
//const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);
//const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const sessoesPost = path.resolve(`./src/templates/sessoes.js`)
  const artigosPost = path.resolve(`./src/templates/artigos.js`)
  //const tagPage = path.resolve(`./src/templates/tag-page.js`)
  
  return graphql(
    `
      {
        sessoes: allMarkdownRemark(
            limit: 1000
            filter: {fileAbsolutePath: {regex: "/sessoes/"}}
            sort: {fields: frontmatter___order}
          ) {
            edges {
              node {
                frontmatter {
                  title
                  slug
                }
                fileAbsolutePath
              }
            }
          }

        artigos: allMarkdownRemark(
            limit: 1000
            filter: {fileAbsolutePath: {regex: "/artigos/"}}
            sort: {fields: frontmatter___order}
          ) {
            edges {
              node {
                frontmatter {
                  title
                  slug
                }
                fileAbsolutePath
              }
            }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const sessoes = result.data.sessoes.edges
    const artigos = result.data.artigos.edges
    const tagSet = new Set();

    sessoes.forEach((sessao, index) => {
      
      const previous = index === sessoes.length - 1 ? null : sessoes[index + 1].node
      const next = index === 0 ? null : sessoes[index - 1].node
      

      createPage({
        path: `/${sessao.node.frontmatter.slug}`,
        component: sessoesPost,
        context: {
          slug: sessao.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })


/*
    clientes.forEach((cliente, index) => {
      
      const previous = index === clientes.length - 1 ? null : clientes[index + 1].node
      const next = index === 0 ? null : clientes[index - 1].node
      


      createPage({
        path: `/cliente${cliente.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: cliente.node.fields.slug,
          previous,
          next,
        },
      })
    })


    // Create tags pages.
    tagSet.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagPage,
        context: {
          tag
        }
      });
    });

*/

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}