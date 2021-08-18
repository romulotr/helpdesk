import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Search from "../components/search"
import Seo from "../components/seo"

const pageStyles = {
    color: "#232129",
    padding: 0,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

class SessaoTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const sessao = this.props.data.sessao
    const artigosData = this.props.data.artigos.edges
    

    return (
    <main style={pageStyles}>
      <Seo
        title={sessao.frontmatter.title + ` - ` + siteTitle}
        keywords={[
          `westoque`,
          `Ajuda wEstoque`,
          `sistema`,
          `controle de estoque`,
          `pdv online`,
        ]}
      />

      <Header />

      <Search />
      
      <div className="flex flex-wrap mx-auto p-4" key={sessao.id}>
      
        <div className="flex flex-row mx-auto justify-between p-1 flex-wrap col-span-3 max-w-screen-md rounded-3xl transform shadow-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 -rotate-1">
          <div className="p-10 mx-auto bg-white rounded-3xl shadow-md space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 transform rotate-1 border-solid border-2 border-gray-100">
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <span className="text-lg text-black font-semibold border-0 border-b border-solid border-gray-100">
                  <h1 className="font-sans md:text-xl ¿sm:text-base" style={{color: sessao.frontmatter.color}}><span role="img" aria-label={sessao.frontmatter.title}>{sessao.frontmatter.thumbnail}</span> {sessao.frontmatter.title}</h1>
                </span>
                <p className="text-gray-500 font-medium p-2">
                  {sessao.frontmatter.description}
                </p>
              </div>              
            </div>
            <p className="pt-6">
              <code>Manuais:</code> 
            </p>
            {artigosData.map(({ node }) => {
              return (
                  <div className="border-b border-gray-300 mt-2 p-2" key={node.id}>
                    <Link to={node.frontmatter.slug}>
                      <h1 className="font-sans md:text-xl sm:text-base text-yellow-500  hover:text-yellow-700">{node.frontmatter.thumbnail}&nbsp;&nbsp;{node.frontmatter.title}</h1>
                    </Link>
                    <p className="font-sans text-xs md:text-sm">{node.frontmatter.description}</p>
                  </div>        
              )
            })}
          </div>
        </div>
                
      </div>
      <br /><br />
      <hr />
      <br /><br />
      
    </main>
    )
  }
}

export default SessaoTemplate

export const pageQuery = graphql`
  query SessaoBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    sessao: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail 
      }
    }
    artigos: allMarkdownRemark(
        filter: {frontmatter: {sessao: {eq: $slug}}, fileAbsolutePath: {regex: "/artigos/"}}
        sort: {fields: frontmatter___order, order: ASC}
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              order
              sessao
              date(formatString: "MMMM D, YYYY")
              title
              description
              thumbnail
              color
              slug
            }
            id
          }
        }
      }
  }
`