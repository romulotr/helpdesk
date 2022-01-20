import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"


const IndexPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  const [value, setValue] = React.useState({})
  const [enviando, setEnviando] = React.useState(false)
  const [sucesso, setSucesso] = React.useState(false)
  const [erro, setErro] = React.useState(false)

  // Listen to form changes and save them.
  function handleChange(e) {
    value[e.target.id] = e.target.value
    setValue({ ...value })
  }
  // When the form is submitted, send the form values
  // to our function for processing.
  async function onSubmit(e) {
    e.preventDefault()
    document.getElementById("btnEnvia").disabled = true;
    value['contatoEnvia'] = true;
    setEnviando(true)
    const result = await fetch(`https://www.westoque.com.br/contato.php`, {
        method: `POST`,
        body: JSON.stringify(value),
        cache: 'no-cache',
        credentials: 'omit', 
      });
      
      const resultData = await result.json();
      
      if (resultData.sent === 'success'){
        setSucesso(true)
      }else{
        setErro(true)
        setEnviando(false)
      }
  }

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
      />

      <Header />

      <div className="flex flex-wrap mx-auto p-4">
      
        <div className="flex flex-row mx-auto justify-between p-1 flex-wrap col-span-3 max-w-screen-md rounded-3xl transform shadow-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 -rotate-1">
          <div className="p-10 mx-auto bg-white rounded-3xl shadow-md space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 transform rotate-1 border-solid border-2 border-gray-100">
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <span className="text-lg text-black font-semibold border-0 border-b border-solid border-gray-100">
                  <h1 className="mt-4 md:text-xl sm:text-base"><span role="img" aria-label="Abrir Chamado">🛎</span> Abrir Chamado/Suporte</h1>
                </span>
                <p className="text-gray-500 font-medium p-2">
                  Informe sua dúvida ou sugestão e nos envie abaixo. Nossa equipe irá te retornar em breve...
                </p>
                <div>
                <hr />
              {
                !sucesso? (
                <div>
                { 
                    erro ? (
                    <div className="p-2 m-2 min-w-min text-center">
                      <h1 className="font-semibold text-3xl  text-gray-700 mb-2 pt-10">Não foi possível enviar sua mensagem! 🥲</h1>
                      <br/>
                      Por favor recarregue e tente novamente...
                      <br/><br/>
                    </div>
                    ): null
                }
                <br />
                {
                !enviando ? (
                <div id="formChamado">
                <form className="items-left w-full text-left" onSubmit={onSubmit} method="POST" action="#" name="fmrChamado" id="frmChamado">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="txtNome">
                            Nome
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="txtNome" id="txtNome" type="text" value={value[`txtNome`] || ``} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="txtEmail">
                            Email
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="txtEmail" id="txtEmail" type="email" value={value[`txtEmail`] || ``} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="txtDescricao">
                            Descrição/Dúvida
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="txtDescricao" id="txtDescricao" value={value[`txtDescricao`] || ``} onChange={handleChange}></textarea>
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3 text-right">
                        <button className="shadow bg-yellow-500 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" id="btnEnvia" name="btnEnvia">
                            Enviar Contato
                        </button>
                        </div>
                    </div>
                    </form>
                    <br/><br/>
                    </div>
                  ) : (
                    <div className="p-2 m-2 min-w-min text-center">
                      <h1 className="font-semibold text-3xl text-gray-700 mb-2 pt-10">Aguarde um instante... <br/>Sua mensagem está sendo enviada 😃</h1>
                      <br/><br/>
                      <h1 className="mx-auto h-auto animate-bounce text-5xl">📨</h1>
                      <br/><br/>
                    </div>
                  )}
              </div>
            )
            : null
            }

                  { 
                    sucesso ? (
                    <div className="p-2 m-2 min-w-min text-center">
                      <h1 className="font-semibold text-3xl  text-gray-700 mb-2 pt-10">Mensagem Enviada com Sucesso!</h1>
                      <br/><br/>
                      <h1 className="mx-auto h-auto animate-bounce text-5xl">🎉</h1>
                      Em breve iremos retornar...
                      <br/><br/>
                    </div>
                    ): null
                  }


                </div>
              </div>              
            </div>
            
          </div>
        </div>
                
      </div>
      <br />
      <br />

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
