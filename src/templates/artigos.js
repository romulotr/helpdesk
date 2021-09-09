import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Search from "../components/search"
import Seo from "../components/seo"


const ArtigosTemplate = props => {
  
    const siteTitle = props.data.site.siteMetadata.title
    const artigo = props.data.artigo


    return (
    <main className="pageStyles transition-opacity duration-1000 ease-in opacity-100">
      <Seo
        title={artigo.frontmatter.title + ` - ` + siteTitle}
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

      <div className="flex flex-wrap mx-auto p-4" key={artigo.id}>
      
      <div className="flex flex-row mx-auto justify-between p-1 flex-wrap col-span-3 max-w-screen-md rounded-3xl transform shadow-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 -rotate-1">
        <div className="p-10 mx-auto bg-white rounded-3xl shadow-md space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 transform rotate-1 border-solid border-2 border-gray-100">
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <span className="text-lg text-black font-semibold border-0 border-b border-solid border-gray-100">
                <h1 className="mt-4 md:text-xl ¿sm:text-base" style={{color: artigo.frontmatter.color}}><span role="img" aria-label={artigo.frontmatter.title}>{artigo.frontmatter.thumbnail}</span> {artigo.frontmatter.title}</h1>
              </span>
              <p className="text-gray-700 font-medium text-sm p-2">{artigo.frontmatter.description}</p>
              <hr />
              <br />
              <div className="description text-md p-2" dangerouslySetInnerHTML={{__html: artigo.html.replace(/(?:\r\n|\r|\n)/g, '<br />')}}/>
            </div>
            <br />
            <hr />
            <br />
            <Link to={'/'+artigo.frontmatter.sessao} key={artigo.frontmatter.order}>
              <button className="px-4 py-1 text-sm text-yellow-500 font-semibold rounded-full border border-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Voltar para Manuais</button>
            </Link>
            <br />
            <br />              
          </div>
        </div>
      </div>
    </div>
      

      <br /><br />

      
    </main>
    )

}

export default ArtigosTemplate

export const pageQuery = graphql`
  query ArtigoBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    artigo: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        sessao
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail 
      }
    }
    artigos: allMarkdownRemark(
      filter: {frontmatter: {sessao: {}}, fileAbsolutePath: {regex: "/artigos/"}}
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