import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, StaticQuery, Link } from "gatsby"

const pageStyles = {
    color: "#232129",
    padding: 15,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }


class SessaoTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const sessao = this.props.data.sessao
    const artigosData = this.props.data.artigos.edges
    

    return (
    <main style={pageStyles}>
      <title>{sessao.frontmatter.title} - {siteTitle}</title>

      <div className="flex flex-row flex-wrap justify-between px-20 pt-5 align-text-bottom">
        <div className="md:text-3xl sm:text-xl base:text-xl align-text-bottom text-center w-full p-4">
          Manuais & Ajuda
        </div>
        <div className="m-auto">
        <Link to="/"><StaticImage src="../images/logo.png" alt="wEstoque Sistema" layout="fixed" width={150} /></Link>
        </div>

      </div>
      
      
      <div className="flex items-center justify-center px-5 py-5">
          <div className="w-full mx-auto rounded-xl min-w-80 max-w-3xl">
              <div className="relative mt-1">
                  <input type="text" id="password" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Sobre o que precisa de ajuda?" />
                  <button className="block w-7 h-7 text-center text-2xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"><span role="img" aria-label="search emoji">🔎</span></button>
              </div>
          </div>
      </div>
      

      <div className="flex flex-wrap mx-auto">

        <div className="flex flex-row mx-auto justify-between px-5 flex-wrap col-span-3 max-w-screen-md">
              <div className="p-7 mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 mt-6 hover:shadow-xl">
                <Link to={sessao.frontmatter.slug} key={sessao.frontmatter.order}>
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold border-0 border-b border-solid border-gray-100">
                      <h1 className="font-sans md:text-xl ¿sm:text-base" style={{color: sessao.frontmatter.color}}><span role="img" aria-label={sessao.frontmatter.title}>{sessao.frontmatter.thumbnail}</span> {sessao.frontmatter.title}</h1>
                    </p>
                    <p className="text-gray-500 font-medium p-2">
                      {sessao.frontmatter.description}
                    </p>
                  </div>
                  <button className="px-4 py-1 text-sm text-yellow-500 font-semibold rounded-full border border-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Ver Manuais</button>
                </div>
                </Link>
              </div>
        </div>


        <div className="max-w-screen-sm mx-auto p-7">
          <p >
            <code >Tópicos mais buscados/visitados:</code> 
          </p>
          {artigosData.map(({ node }) => {
            return (

                
                  <div className="border-b border-gray-300 mt-2 p-2">
                    <Link to={node.frontmatter.slug} key={node.frontmatter.order}>
                      <h1 className="font-sans md:text-xl sm:text-base text-yellow-500  hover:text-yellow-700">{node.frontmatter.thumbnail}&nbsp;&nbsp;{node.frontmatter.title}</h1>
                    </Link>
                    <p className="font-sans text-xs md:text-sm">{node.frontmatter.description}</p>
                  </div>
                
                
        
            )
          })}
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