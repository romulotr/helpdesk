import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => {

  return (
      <div className="flex flex-row flex-wrap justify-between px-20 align-text-bottom pt-6">
        <div className="m-auto">
          <Link to="/">
            <StaticImage src="../images/logo.png" alt="Ajuda do Sistema wEstoque" 
            placeholder="blurred"
            layout="fixed"
            quality={100}
            />
          </Link>
        </div>
        <div className="text-xl align-text-bottom text-center w-full p-2">
          <code>Manuais & Ajuda</code> 
        </div>
      </div>
  )

}

export default Header
