import * as React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


// styles
const pageStyles = {
  color: "#232129",
  padding: 15,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const paragraphStyles = {
  marginBottom: 20,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: "none"
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const sessoesData = data.sessoes.edges
  const artigosData = data.artigos.edges


  return (
    <main style={pageStyles}>
      <title>{siteTitle}</title>

      <div className="flex flex-row flex-wrap justify-between px-20 pt-5 align-text-bottom">
        <div className="md:text-3xl sm:text-xl base:text-xl align-text-bottom text-center w-full p-4">
          Manuais & Ajuda
        </div>
        <div className="m-auto">
          <StaticImage src="../images/logo.png" alt="wEstoque Sistema" layout="fixed" width={150} />
        </div>

      </div>
      
      
      <div className="flex items-center justify-center px-5 py-5">
          <div className="w-full mx-auto rounded-xl min-w-80 max-w-3xl" x-data="app()" x-init="generatePassword()">
              <div className="relative mt-1">
                  <input type="text" id="password" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Sobre o que precisa de ajuda?" />
                  <button className="block w-7 h-7 text-center text-2xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"><span role="img" aria-label="search emoji">🔎</span></button>
              </div>
          </div>
      </div>
      

      <div className="flex flex-wrap mx-auto">
        <div className="flex flex-row mx-auto justify-between px-5 flex-wrap col-span-2 max-w-screen-md">
          
          {sessoesData.map(({ node }) => {
          return (
            
              <div className="p-7 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mt-6 hover:shadow-xl" style={{maxWidth:`335px`}}>
                <Link to={node.frontmatter.slug} key={node.id}>
                <div className="text-center space-y-2 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold border-0 border-b border-solid border-gray-100">
                      <h1 className="font-sans md:text-xl ¿sm:text-base" style={{color: node.frontmatter.color}}><span role="img" aria-label={node.frontmatter.title}>{node.frontmatter.thumbnail}</span> {node.frontmatter.title}</h1>
                    </p>
                    <p className="text-gray-500 font-medium p-2">
                      {node.frontmatter.description}
                    </p>
                  </div>
                  <button className="px-4 py-1 text-sm text-yellow-500 font-semibold rounded-full border border-yellow-500 hover:text-white hover:bg-yellow-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">Ver Manuais</button>
                </div>
                </Link>
              </div>
            
            )
          })}

        </div>
        
        <div className="max-w-screen-sm mx-auto p-7">
          <p style={paragraphStyles}>
            <code style={codeStyles}>Tópicos mais buscados/visitados:</code> 
          </p>
          {artigosData.map(({ node }) => {
            return (

                
                  <div className="border-b border-gray-300 mt-2 p-2">
                    <Link to={node.frontmatter.slug} key={node.id}>
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
