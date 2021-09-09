import React, { useState } from "react"
import { graphql, StaticQuery, Link } from "gatsby"

function contains(target, pattern){
    var value = 0;
    pattern.forEach(function(word){
      value = value + target.includes(word);
    });
    return (value === 1)
}

const Search = ({ data }) => {
 
    const allPosts = data.allMarkdownRemark.edges
    const emptyQuery = ""
    const [state, setState] = useState({
      filteredData: [],
      query: emptyQuery,
    })

    const handleInputChange = event => {
      const query = event.target.value
      const arrQuery = event.target.value.toLowerCase().split(" ")
    

      // this is how we get all of our posts
      const posts = data.allMarkdownRemark.edges || []
    
       // return all filtered posts
      const filteredData = posts.filter(post => {
        // destructure data from post frontmatter
        const { description, title, sessao } = post.node.frontmatter
        return (
          // standardize data with .toLowerCase()
          // return true if the description, title or tags
          // contains the query string


          contains(description.toLowerCase(), arrQuery) ||
          contains(title.toLowerCase(), arrQuery) ||
          contains(sessao.toLowerCase(), arrQuery)

          //description.toLowerCase().includes(query.toLowerCase()) ||
          //title.toLowerCase().includes(query.toLowerCase())
        )
      })
    
      // update state according to the latest query and results
      setState({
        query, // with current query string from the `Input` event
        filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
      })
    }

    const focusSearch = () => {
      this.txtSearch = React.createRef();
      this.txtSearch.current.focus();
    }

    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : allPosts

    return (<>
      <div id="sectionSearch" className="flex items-center justify-center px-5 py-5">
          <div className="w-full mx-auto rounded-xl min-w-80 max-w-3xl">
              <div className="relative mt-1 ">
                  <input type="text" id="txtBusca" name="txtBusca" className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="Sobre o que precisa de ajuda?" onChange={handleInputChange} />
                  <button className="block w-7 h-7 text-center text-2xl leading-0 absolute top-2 right-2 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors"><span role="img" aria-label="search emoji">🔎</span></button>
                  <div className="p-1">
                  {
                  (hasSearchResults?
                    posts.map(({ node }) => {
                      
                      const { title, description, sessao, slug, order, thumbnail } = node.frontmatter
                      return (
                        <div className="border-b border-gray-300 mt-2 p-2">
                          <Link to={"/"+sessao+"/"+slug} key={order}>
                            <h1 className="md:text-xl sm:text-base text-yellow-500  hover:text-yellow-700"><span role="img" aria-label={title}>{thumbnail}</span>&nbsp;&nbsp;<span className="underline">{title}</span></h1>
                          </Link>
                          <p className="text-xs md:text-sm text-gray-600">{description}</p>
                        </div>      
                      )
                    })
                  :
                  false
                  ) 
                  }

                  {
                  (query.length && !filteredData.length?
                      <div className="border-b border-gray-300 mt-2 p-2">
                        <h1 className="md:text-xl sm:text-base text-yellow-500"><span role="img" aria-label="não encontrado">🙁</span>&nbsp;&nbsp;Não encontrado...</h1>
                        <p className="text-xs md:text-sm">Tente outra busca/palavra.... Caso necessário, <Link to="/chamado" className="underline text-indigo-500">abra um chamado...</Link></p>
                      </div>
                      :
                      false 
                  )
                  }
                  </div>
              </div>
          </div>
      </div>
    </>
    )
}

export default function SearchComponent() {
    return (
    <StaticQuery
      query={graphql`
      query {
       allMarkdownRemark(
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
    }`} render={data => <Search data={data} />} />
    )
}