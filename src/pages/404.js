import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>404 - Não Encontrado!</title>
      <h2 style={headingStyles}>404! Página não encontrada...</h2>
      <p style={paragraphStyles}>
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
