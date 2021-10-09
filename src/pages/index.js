import * as React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Header from "../components/header"
import Search from "../components/search"
import Seo from "../components/seo"

const IndexPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const sessoesData = data.sessoes.edges
  const artigosData = data.artigos.edges

  return (
    <main className='pageStyles'>
      <Seo
        title={siteTitle}
        keywords={[
          `westoque`,
          `Ajuda wEstoque`,
          `sistema`,
          `controle de estoque`,
          `pdv online`,
        ]}
        description="Helpdesk / Base de conhecimento do sistema wEstoque. Descubra como fazer a configuração do software e otimize o seu tempo e de sua equipe com o controle de estoque, vendas e financeiro do Sistema wEstoque. Para saber mais sobre o sistema acesse: www.westoque.com.br"
      />

      <Header />

      <Search />

      <div className="flex flex-wrap mx-auto">
        <div className="flex flex-row flex-wrap items-start mx-auto justify-between px-5 col-span-2 max-w-screen-md">
          
          {sessoesData.map(({ node }) => {
          return (
            
            <div className="flex flex-row mx-auto justify-between p-1 flex-wrap col-span-3 max-w-screen-md rounded-3xl transform shadow-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 -rotate-1 mt-5"  key={node.id} style={{maxWidth:`335px`, maxHeight: `290px`}}>
              <div className="p-7 max-w-sm mx-auto bg-white rounded-3xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 transform rotate-1 bg-opacity-95" style={{maxWidth:`335px`, maxHeight: `290px`}}>
                <Link to={node.frontmatter.slug}>
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <span className="text-lg text-black font-semibold border-0 border-b border-solid border-gray-100">
                      <h1 className="md:text-xl sm:text-base" style={{color: node.frontmatter.color}}><span role="img" aria-label={node.frontmatter.title}>{node.frontmatter.thumbnail}</span> {node.frontmatter.title}</h1>
                    </span>
                    <p className="text-gray-700 font-medium p-2">
                      {node.frontmatter.description}
                    </p>
                  </div>
                  <button className="px-4 py-1 text-sm text-indigo-500 font-semibold rounded-full border border-indigo-500 hover:text-white hover:bg-yellow-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Ver Manuais</button>
                </div>
                </Link>
              </div>
            </div>
            
            )
          })}
        </div>
        
        <div className="max-w-screen-sm mx-auto p-2 mt-3">
          <p className='paragraphStyles'>
            <code className='codeStyles'>Tópicos mais buscados/visitados:</code> 
          </p>
          {artigosData.map(({ node }) => {
            return (                
              <div className="border-b border-gray-300 mt-2 p-2" key={node.id}>
                <Link to={node.frontmatter.sessao+"/"+node.frontmatter.slug}>
                  <h1 className="md:text-xl sm:text-base text-yellow-500  hover:text-yellow-700">{node.frontmatter.thumbnail}&nbsp;&nbsp;<span className="underline">{node.frontmatter.title}</span></h1>
                </Link>
                <p className="text-xs md:text-sm">{node.frontmatter.description}</p>
              </div>
            )
          })}
          <p className="text-xs md:text-sm p-2 mt-3 text-black">Não encontrou dicas para sua dúvida? Faça, <Link to="#sectionSearch" className="underline text-indigo-500" onClick={()=>{const input = document.getElementById("txtBusca"); input.focus();}}>uma busca<span role="img" aria-label="buscar">🔎</span></Link></p>
        </div>
      </div>
      <br /><br />
      <hr />
      <br />
    </main>
  )
}

const indexQuery = graphql`
query  {

  site {
    siteMetadata {
      title
      description
    }
  }

  sessoes: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/sessoes/"}}
    sort: {fields: frontmatter___order, order: ASC}
  ) {
    edges {
      node {
        excerpt
        frontmatter {
          order
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


  artigos: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/artigos/"}}
    sort: {fields: frontmatter___order, order: ASC}
    limit: 7
  ) {
    edges {
      node {
        excerpt
        frontmatter {
          order
          date(formatString: "MMMM D, YYYY")
          title
          description
          thumbnail
          color
          sessao
          slug
        }
        id
      }
    }
  }
}
`

//export default IndexPage
export default function MyIndex(props) {
  return (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <IndexPage location={props.location} props data={data} {...props} />
    )}
  />
)
}
