import * as React from "react"
import { Link } from "gatsby"



// markup
const NotFoundPage = () => {
  return (
    <main className='pageStyles'>
      <title>404 - Não Encontrado!</title>
      <h2 className='headingStyles'>404! Página não encontrada...</h2>
      <p className='paragraphStyles'>
        Erro!{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        a página que está tentando acessar não existe...
        <br />
        
        <br />
        <Link to="/">Ir para página inicial...</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
